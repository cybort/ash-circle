import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";
import { uid } from "@/lib/utils";
import { runTableAi } from "@/lib/ai/table-ai";
import { CAMPAIGN, cellarCombatants, fallbackDmReply, openingScene, sceneForBeat } from "./adventure";
import { tickDice, tickHit, unlockAudio } from "./audio";
import {
  makeCharacter,
  quickParty,
  recomputeDerived,
  CLASS_TINT,
  CLASS_GLYPH,
} from "./characters";
import {
  applyDmTemplate,
  applyPartyMind,
  applyPartyTemplate,
  hydrateCharacter,
  hydrateDm,
  partyTemplate,
} from "./agent-templates";
import {
  advanceTurn,
  combatOver,
  currentCombatant,
  makeEnemy,
  performAttack,
  pickEnemyTarget,
  pickPartyTarget,
  startCombat,
} from "./combat";
import { rollFormula } from "./dice";
import { resolveCheck } from "./rules";
import { gridForBiome, overlayAscii, parseGridPayload } from "./scenes";
import type {
  AncestryId,
  Character,
  ClassId,
  Controller,
  LogEntry,
  Presentation,
  RuleEdition,
  RuleMods,
  SceneState,
  Screen,
  TableState,
} from "./types";
import { DEFAULT_MODS, SAVE_VERSION, SKILLS } from "./types";

export interface SetupDraft {
  name: string;
  seed: string;
  tone: string;
  edition: RuleEdition;
  mods: RuleMods;
  presentation: Presentation;
  partySize: number;
  dmController: Controller;
  dmName: string;
  dmPersona: string;
  dmTemplateId: string;
  seats: {
    controller: Controller;
    playerLabel: string;
    classId: ClassId;
    ancestry: AncestryId;
    templateId: string;
  }[];
}

export const defaultDraft = (): SetupDraft => ({
  name: "无名的一局",
  seed: "海岸驿道，盐雾，一间不肯关门的驿站",
  tone: "克制、潮湿、低魔法悬疑",
  edition: "ember5e",
  mods: { ...DEFAULT_MODS },
  presentation: "pixel",
  partySize: 3,
  dmController: "agent",
  dmName: "灯芯",
  dmPersona: "少解释，多给可互动的细节。不抢玩家的戏。",
  dmTemplateId: "wick",
  seats: [
    { controller: "human", playerLabel: "你", classId: "fighter", ancestry: "human", templateId: "" },
    { controller: "agent", playerLabel: "智体", classId: "ranger", ancestry: "elf", templateId: "huiyu" },
    { controller: "agent", playerLabel: "智体", classId: "wizard", ancestry: "tiefling", templateId: "yandeng" },
  ],
});

interface Store {
  tables: Record<string, TableState>;
  currentId: string | null;
  screen: Screen;
  hydrated: boolean;
  busy: boolean;
  busyLabel: string;
  draft: SetupDraft;
  sheetIndex: number;
  setScreen: (s: Screen) => void;
  setDraft: (p: Partial<SetupDraft>) => void;
  setHydrated: () => void;
  current: () => TableState | null;
  patchTable: (fn: (t: TableState) => TableState) => void;
  newQuickTable: () => void;
  beginSetup: () => void;
  materializeDraft: () => void;
  updateCharacter: (id: string, patch: Partial<Character>) => void;
  rerollCharacter: (id: string) => void;
  applyAgentTemplate: (id: string, templateId: string) => void;
  applyDmSeatTemplate: (templateId: string) => void;
  updateDm: (patch: Partial<TableState["dm"]>) => void;
  aiFillCharacter: (id: string) => Promise<void>;
  enterPlay: () => Promise<void>;
  setPresentation: (p: Presentation) => void;
  appendLog: (e: Omit<LogEntry, "id" | "at">) => void;
  submitHumanAction: (text: string) => Promise<void>;
  submitHumanNarration: (text: string) => Promise<void>;
  rollPending: (checkId: string, characterId: string) => Promise<void>;
  freeRoll: (formula: string, label?: string) => void;
  requestAiScene: (instruction: string) => Promise<void>;
  requestAgentAct: (characterId: string) => Promise<void>;
  startBeatCombat: (kind?: "road" | "cellar") => void;
  combatAction: (kind: "attack" | "skip") => void;
  endTable: (title: string, epilogue: string) => void;
  abandon: () => void;
  deleteTable: (id: string) => void;
  resume: (id: string) => void;
}

function log(partial: Omit<LogEntry, "id" | "at">): LogEntry {
  return { ...partial, id: uid(), at: Date.now() };
}

function compactContext(t: TableState) {
  return {
    edition: t.edition,
    mods: t.mods,
    seed: t.seed,
    tone: t.tone,
    campaignTitle: t.campaignTitle,
    campaignPremise: t.campaignPremise,
    dm: { name: t.dm.name, persona: t.dm.persona, title: t.dm.title, voice: t.dm.voice, pacing: t.dm.pacing, boundary: t.dm.boundary },
    party: t.party.map((p) => ({
      id: p.id,
      name: p.name,
      ancestry: p.ancestry,
      classId: p.classId,
      personality: p.personality,
      appearance: p.appearance,
      mind: p.agentMind,
      hp: p.hp,
      maxHp: p.maxHp,
    })),
    scene: {
      title: t.scene.title,
      location: t.scene.location,
      biome: t.scene.biome,
      prose: t.scene.prose,
      index: t.scene.index,
    },
    recentLog: t.log.slice(-10).map((l) => ({
      kind: l.kind,
      speaker: l.speaker,
      text: l.text,
    })),
  };
}

function applySceneJson(t: TableState, data: unknown): TableState {
  if (!data || typeof data !== "object") return t;
  const d = data as Record<string, unknown>;
  const biome = (typeof d.biome === "string" ? d.biome : t.scene.biome) as SceneState["biome"];
  const parsed = parseGridPayload(d.grid, biome);
  const unique = new Set(parsed.tiles.split(""));
  const floors = (parsed.tiles.match(/[.,=_~]/g) ?? []).length;
  const grid = unique.size > 1 && floors >= 10 ? parsed : gridForBiome(biome);
  const extraTokens = Array.isArray(d.tokens)
    ? (d.tokens as Record<string, unknown>[]).map((tok) => ({
        id: uid(),
        x: Number(tok.x) || 8,
        y: Number(tok.y) || 4,
        kind: (tok.kind as SceneState["tokens"][number]["kind"]) || "npc",
        name: String(tok.name ?? "?"),
        glyph: String(tok.glyph ?? "?").slice(0, 1),
        tint: "#9a9488",
      }))
    : t.scene.tokens.filter((x) => x.kind !== "pc");
  const pcTokens = t.party.map((p, i) => ({
    id: p.id,
    x: 2 + i * 2,
    y: 6,
    kind: "pc" as const,
    name: p.name,
    glyph: p.glyph,
    tint: p.tint,
  }));
  const tokens = [...pcTokens, ...extraTokens.filter((x) => x.kind !== "pc")];
  const location = String(d.location ?? t.scene.location);
  const scene: SceneState = {
    index: t.scene.index + 1,
    title: String(d.title ?? t.scene.title),
    location,
    biome,
    prose: String(d.prose ?? t.scene.prose),
    ascii: overlayAscii(grid, tokens, location),
    grid,
    tokens,
    suggested: Array.isArray(d.suggested) ? (d.suggested as unknown[]).map(String).slice(0, 6) : [],
    checks: Array.isArray(d.checks)
      ? (d.checks as Record<string, unknown>[]).map((c) => ({
          id: uid(),
          label: String(c.label ?? "检定"),
          skill: String(c.skill ?? "perception"),
          dc: Number(c.dc) || 12,
        }))
      : [],
    npcs: Array.isArray(d.npcs)
      ? (d.npcs as Record<string, unknown>[]).map((n) => ({
          name: String(n.name ?? "无名"),
          brief: String(n.brief ?? ""),
        }))
      : [],
  };
  let combat = t.combat;
  if (Array.isArray(d.combatEnemies) && d.combatEnemies.length) {
    combat = startCombat(
      t.party,
      (d.combatEnemies as Record<string, unknown>[]).map((e) => ({
        id: uid(),
        name: String(e.name ?? "敌人"),
        side: "enemy" as const,
        hp: Number(e.hp) || 10,
        maxHp: Number(e.hp) || 10,
        ac: Number(e.ac) || 12,
        init: 0,
        atkMod: Number(e.atkMod) || 3,
        dmg: String(e.dmg ?? "1d6+1"),
      })),
      t.edition,
    );
  }
  let ended = t.ended;
  let phase = t.phase;
  if (d.ended && typeof d.ended === "object") {
    const e = d.ended as { title?: string; epilogue?: string };
    ended = { title: e.title ?? "终局", epilogue: e.epilogue ?? "" };
    phase = "ended";
  }
  return {
    ...t,
    scene,
    combat,
    ended,
    phase,
    usedAi: true,
    turn: { actor: nextHumanOrFirst(t) },
    updatedAt: Date.now(),
    log: [
      ...t.log,
      log({ kind: "narration", speaker: t.dm.name, text: scene.prose }),
    ],
  };
}

function nextHumanOrFirst(t: TableState): "dm" | string {
  const human = t.party.find((p) => p.controller === "human" && p.hp > 0);
  if (human) return human.id;
  return t.party[0]?.id ?? "dm";
}

function firstActor(t: TableState): "dm" | string {
  if (t.dm.controller === "human") return "dm";
  return nextHumanOrFirst(t);
}

export const useTableStore = create<Store>()(
  persist(
    (set, get) => ({
      tables: {},
      currentId: null,
      screen: "landing",
      hydrated: false,
      busy: false,
      busyLabel: "",
      draft: defaultDraft(),
      sheetIndex: 0,

      setScreen: (s) => set({ screen: s }),
      setDraft: (p) =>
        set((s) => {
          const draft = { ...s.draft, ...p };
          if (p.partySize && p.partySize !== s.draft.partySize) {
            const seats = [...s.draft.seats];
            while (seats.length < p.partySize) {
              seats.push({
                controller: "agent",
                playerLabel: "智体",
                classId: "cleric",
                ancestry: "dwarf",
                templateId: "tieqiao",
              });
            }
            draft.seats = seats.slice(0, p.partySize);
          }
          return { draft };
        }),
      setHydrated: () => set({ hydrated: true }),
      current: () => {
        const s = get();
        return s.currentId ? s.tables[s.currentId] ?? null : null;
      },
      patchTable: (fn) => {
        const s = get();
        if (!s.currentId) return;
        const t = s.tables[s.currentId];
        if (!t) return;
        set({
          tables: { ...s.tables, [s.currentId]: fn(t) },
        });
      },

      newQuickTable: () => {
        unlockAudio();
        const party = quickParty().map((p, i) => {
          if (i === 1) return applyPartyTemplate(p, "huiyu");
          if (i === 2) return applyPartyTemplate(p, "yandeng");
          return p;
        });
        const id = uid();
        const table: TableState = {
          version: SAVE_VERSION,
          id,
          name: "盐雾驿站",
          createdAt: Date.now(),
          updatedAt: Date.now(),
          edition: "ember5e",
          mods: { ...DEFAULT_MODS },
          presentation: "pixel",
          seed: CAMPAIGN.premise,
          tone: "潮湿、克制、低魔法",
          campaignTitle: CAMPAIGN.title,
          campaignPremise: CAMPAIGN.premise,
          dm: applyDmTemplate(
            {
              controller: "agent",
              name: "灯芯",
              persona: "少解释，多给可互动的细节。",
              templateId: "",
              title: "",
              voice: "",
              pacing: "",
              boundary: "",
            },
            "wick",
          ),
          party,
          log: [
            log({
              kind: "system",
              speaker: "圆桌",
              text: "灯芯就座。规则为余烬 5e。呈现为像素。",
            }),
          ],
          scene: openingScene(party),
          combat: null,
          phase: "sheets",
          turn: { actor: "dm" },
          fallbackBeat: 0,
          usedAi: false,
        };
        set((s) => ({
          tables: { ...s.tables, [id]: table },
          currentId: id,
          screen: "sheets",
          sheetIndex: 0,
        }));
      },

      beginSetup: () => set({ draft: defaultDraft(), screen: "setup" }),

      materializeDraft: () => {
        const d = get().draft;
        const party = d.seats.slice(0, d.partySize).map((seat) => {
          const base = makeCharacter({
            controller: seat.controller,
            playerLabel: seat.playerLabel,
            classId: seat.classId,
            ancestry: seat.ancestry,
            lethality: d.mods.lethality,
          });
          if (seat.controller !== "agent" || !seat.templateId) return base;
          const t = partyTemplate(seat.templateId);
          if (!t) return base;
          if (t.classId === seat.classId && t.ancestry === seat.ancestry) {
            return applyPartyTemplate(base, seat.templateId, d.mods.lethality);
          }
          return applyPartyMind(base, seat.templateId, d.mods.lethality);
        });
        const id = uid();
        const table: TableState = {
          version: SAVE_VERSION,
          id,
          name: d.name || "无名的一局",
          createdAt: Date.now(),
          updatedAt: Date.now(),
          edition: d.edition,
          mods: { ...d.mods },
          presentation: d.presentation,
          seed: d.seed,
          tone: d.tone,
          campaignTitle: d.seed.slice(0, 12) || "未名战役",
          campaignPremise: d.seed,
          dm:
            d.dmController === "agent"
              ? applyDmTemplate(
                  {
                    controller: "agent",
                    name: d.dmName || "灯芯",
                    persona: d.dmPersona,
                    templateId: "",
                    title: "",
                    voice: "",
                    pacing: "",
                    boundary: "",
                  },
                  d.dmTemplateId || "wick",
                )
              : {
                  controller: "human",
                  name: d.dmName || "灯芯",
                  persona: d.dmPersona,
                  templateId: "",
                  title: "",
                  voice: "",
                  pacing: "",
                  boundary: "不代玩家掷骰。不替角色宣布感受。",
                },
          party,
          log: [
            log({
              kind: "system",
              speaker: "圆桌",
              text: `新桌已布置。规则：${d.edition}。呈现：${d.presentation}。`,
            }),
          ],
          scene: openingScene(party),
          combat: null,
          phase: "sheets",
          turn: { actor: "dm" },
          fallbackBeat: 0,
          usedAi: false,
        };
        set((s) => ({
          tables: { ...s.tables, [id]: table },
          currentId: id,
          screen: "sheets",
          sheetIndex: 0,
        }));
      },

      updateCharacter: (id, patch) => {
        get().patchTable((t) => ({
          ...t,
          party: t.party.map((p) =>
            p.id === id
              ? recomputeDerived({ ...p, ...patch, abilities: { ...p.abilities, ...patch.abilities } }, t.mods.lethality)
              : p,
          ),
        }));
      },

      rerollCharacter: (id) => {
        get().patchTable((t) => ({
          ...t,
          party: t.party.map((p) => {
            if (p.id !== id) return p;
            const n = makeCharacter({
              controller: p.controller,
              playerLabel: p.playerLabel,
              classId: p.classId,
              ancestry: p.ancestry,
              method: "roll",
              lethality: t.mods.lethality,
              name: p.name,
            });
            return { ...n, id: p.id, agentMind: p.agentMind };
          }),
        }));
      },

      applyAgentTemplate: (id, templateId) => {
        get().patchTable((x) => ({
          ...x,
          party: x.party.map((p) =>
            p.id === id ? applyPartyTemplate(p, templateId, x.mods.lethality) : p,
          ),
        }));
      },

      applyDmSeatTemplate: (templateId) => {
        get().patchTable((x) => ({
          ...x,
          dm: applyDmTemplate(x.dm, templateId),
        }));
      },

      updateDm: (patch) => {
        get().patchTable((t) => ({
          ...t,
          dm: { ...t.dm, ...patch },
        }));
      },

      aiFillCharacter: async (id) => {
        const t = get().current();
        if (!t) return;
        const c = t.party.find((p) => p.id === id);
        if (!c) return;
        set({ busy: true, busyLabel: "智体填写角色卡…" });
        try {
          const res = await runTableAi({
            data: {
              kind: "character",
              edition: t.edition,
              seed: t.seed,
              seat: {
                controller: c.controller,
                playerLabel: c.playerLabel,
                nameHint: c.name,
                classHint: c.classId,
              },
            },
          });
          if (!res.ok) {
            toast("智体此刻无法填写，已保留现有卡片。");
            return;
          }
          const d = JSON.parse(res.json) as Record<string, unknown>;
          const mind = d.mind && typeof d.mind === "object" ? (d.mind as Record<string, unknown>) : null;
          get().updateCharacter(id, {
            name: String(d.name ?? c.name),
            ancestry: (d.ancestry as AncestryId) ?? c.ancestry,
            classId: (d.classId as ClassId) ?? c.classId,
            background: String(d.background ?? c.background),
            appearance: String(d.appearance ?? c.appearance),
            personality: String(d.personality ?? c.personality),
            ideal: String(d.ideal ?? c.ideal),
            bond: String(d.bond ?? c.bond),
            flaw: String(d.flaw ?? c.flaw),
            backstory: String(d.backstory ?? c.backstory),
            glyph: CLASS_GLYPH[(d.classId as ClassId) ?? c.classId],
            tint: CLASS_TINT[(d.classId as ClassId) ?? c.classId],
            agentMind: mind
              ? {
                  ...c.agentMind,
                  templateId: "",
                  title: String(mind.title ?? c.agentMind.title),
                  voice: String(mind.voice ?? c.agentMind.voice),
                  tactics: String(mind.tactics ?? c.agentMind.tactics),
                  drive: String(mind.drive ?? c.agentMind.drive),
                  tell: String(mind.tell ?? c.agentMind.tell),
                  boundary: String(mind.boundary ?? c.agentMind.boundary),
                }
              : c.agentMind,
          });
        } finally {
          set({ busy: false, busyLabel: "" });
        }
      },

      enterPlay: async () => {
        unlockAudio();
        const t = get().current();
        if (!t) return;
        get().patchTable((x) => ({
          ...x,
          phase: "play",
          turn: { actor: firstActor(x) },
          log:
            x.dm.controller === "agent"
              ? x.log
              : [
                  ...x.log,
                  log({
                    kind: "narration",
                    speaker: x.dm.name,
                    text: x.scene.prose,
                  }),
                ],
        }));
        set({ screen: "play" });
        const now = get().current();
        if (now?.dm.controller === "agent") {
          await get().requestAiScene("以现有战役种子开场。若种子是盐雾驿站，可沿用，但要用你自己的句子重写开场，不要逐字照抄。给出可行动的细节。");
        }
      },

      setPresentation: (p) => get().patchTable((t) => ({ ...t, presentation: p })),

      appendLog: (e) => get().patchTable((t) => ({ ...t, log: [...t.log, log(e)] })),

      submitHumanAction: async (text) => {
        const t = get().current();
        if (!t || !text.trim()) return;
        const actorId = typeof t.turn.actor === "string" ? t.turn.actor : t.party[0]?.id;
        const actor = t.party.find((p) => p.id === actorId) ?? t.party.find((p) => p.controller === "human");
        get().patchTable((x) => ({
          ...x,
          log: [
            ...x.log,
            log({
              kind: "action",
              speaker: actor?.name ?? "你",
              speakerId: actor?.id,
              text: text.trim(),
            }),
          ],
        }));
        await afterPartyAction(get, text.trim());
      },

      submitHumanNarration: async (text) => {
        const t = get().current();
        if (!t || !text.trim()) return;
        get().patchTable((x) => ({
          ...x,
          log: [
            ...x.log,
            log({ kind: "narration", speaker: x.dm.name, text: text.trim() }),
          ],
          turn: { actor: nextHumanOrFirst(x) },
        }));
      },

      rollPending: async (checkId, characterId) => {
        const t = get().current();
        if (!t) return;
        const check = t.scene.checks.find((c) => c.id === checkId);
        const ch = t.party.find((p) => p.id === characterId);
        if (!check || !ch) return;
        tickDice();
        const dc = check.dc + (t.mods.difficulty - 3) * 1;
        const r = resolveCheck(ch, check.skill, dc, t.edition);
        const skillLabel = SKILLS.find((s) => s.id === check.skill)?.label ?? check.skill;
        const degree =
          r.degree === "crit"
            ? "大成功"
            : r.degree === "mixed"
              ? "部分成功"
              : r.degree === "fumble"
                ? "大失败"
                : r.success
                  ? "成功"
                  : "失败";
        get().patchTable((x) => ({
          ...x,
          scene: { ...x.scene, checks: x.scene.checks.filter((c) => c.id !== checkId) },
          log: [
            ...x.log,
            log({
              kind: "roll",
              speaker: ch.name,
              speakerId: ch.id,
              text: `${ch.name} 进行「${check.label}」（${skillLabel}，DC ${dc}）：${degree}。`,
              roll: {
                formula: r.formula,
                detail: r.detail,
                total: r.total,
                dc,
                success: r.success,
                degree: r.degree,
              },
            }),
          ],
        }));
        if (t.dm.controller === "agent") {
          await get().requestAiScene(
            `玩家 ${ch.name} 刚刚对「${check.label}」掷出 ${r.total}（${degree}，${r.detail}）。请根据结果推进场景，不要重掷。`,
          );
        }
      },

      freeRoll: (formula, label) => {
        tickDice();
        const r = rollFormula(formula);
        get().appendLog({
          kind: "roll",
          speaker: "骰盘",
          text: label ? `${label}：${r.detail}` : r.detail,
          roll: { formula: r.formula, detail: r.detail, total: r.total },
        });
      },

      requestAiScene: async (instruction) => {
        const t = get().current();
        if (!t) return;
        set({ busy: true, busyLabel: `${t.dm.name} 正在铺开下一幕…` });
        try {
          const res = await runTableAi({
            data: {
              kind: "scene",
              instruction,
              context: compactContext(t),
            },
          });
          if (!res.ok) {
            applyFallbackDm(get, instruction);
            return;
          }
          get().patchTable((x) => applySceneJson(x, JSON.parse(res.json)));
        } catch {
          applyFallbackDm(get, instruction);
        } finally {
          set({ busy: false, busyLabel: "" });
        }
      },

      requestAgentAct: async (characterId) => {
        const t = get().current();
        if (!t) return;
        const c = t.party.find((p) => p.id === characterId);
        if (!c) return;
        set({ busy: true, busyLabel: `${c.name} 正在决定…` });
        try {
          const res = await runTableAi({
            data: {
              kind: "act",
              instruction: "根据性格与当前场景宣布一个具体、可裁定的行动。",
              actor: {
                id: c.id,
                name: c.name,
                classId: c.classId,
                personality: c.personality,
                flaw: c.flaw,
                ideal: c.ideal,
                inventory: c.inventory,
                voice: c.agentMind?.voice ?? "",
                tactics: c.agentMind?.tactics ?? "",
                drive: c.agentMind?.drive ?? "",
                tell: c.agentMind?.tell ?? "",
                boundary: c.agentMind?.boundary ?? "",
                title: c.agentMind?.title ?? "",
              },
              context: compactContext(t),
            },
          });
          if (!res.ok) {
            const text = fallbackAgentAct(c, t);
            get().patchTable((x) => ({
              ...x,
              log: [...x.log, log({ kind: "action", speaker: c.name, speakerId: c.id, text })],
              turn: { actor: "dm" },
            }));
            await afterPartyAction(get, text);
            return;
          }
          const d = JSON.parse(res.json) as {
            speech?: string;
            action?: string;
            wantCheck?: { skill: string; label: string };
          };
          const text = [d.speech ? `「${d.speech}」` : "", d.action ?? ""].filter(Boolean).join(" ");
          get().patchTable((x) => ({
            ...x,
            log: [...x.log, log({ kind: "action", speaker: c.name, speakerId: c.id, text })],
            turn: { actor: "dm" },
          }));
          if (d.wantCheck && t.dm.controller === "agent") {
            const dc = 12 + (t.mods.difficulty - 3);
            const r = resolveCheck(c, d.wantCheck.skill, dc, t.edition);
            tickDice();
            get().appendLog({
              kind: "roll",
              speaker: c.name,
              speakerId: c.id,
              text: `${c.name} 尝试「${d.wantCheck.label}」：${r.success ? "成功" : "失败"}。`,
              roll: {
                formula: r.formula,
                detail: r.detail,
                total: r.total,
                dc,
                success: r.success,
                degree: r.degree,
              },
            });
          }
          await afterPartyAction(get, text);
        } finally {
          set({ busy: false, busyLabel: "" });
        }
      },

      startBeatCombat: (kind = "road") => {
        const t = get().current();
        if (!t) return;
        const enemies =
          kind === "cellar"
            ? cellarCombatants(t.party).filter((c) => c.side === "enemy")
            : [
                makeEnemy("雾中剪径人", 16, 12, 3, "1d6+1"),
                makeEnemy("潮声猎犬", 10, 11, 2, "1d4+1"),
              ];
        const combat = startCombat(t.party, enemies, t.edition);
        tickHit();
        get().patchTable((x) => ({
          ...x,
          combat,
          log: [
            ...x.log,
            log({
              kind: "combat",
              speaker: "遭遇",
              text: `先攻已掷。顺序：${combat.order.map((id) => combat.combatants.find((c) => c.id === id)?.name).join(" → ")}。`,
            }),
          ],
        }));
      },

      combatAction: (kind) => {
        const t = get().current();
        if (!t?.combat?.active) return;
        let combat = t.combat;
        const who = currentCombatant(combat);
        if (!who || who.hp <= 0) return;
        if (kind === "skip") {
          combat = advanceTurn(combat);
          get().patchTable((x) => ({ ...x, combat }));
          maybeAutoCombat(get);
          return;
        }
        const target = who.side === "party" ? pickEnemyTarget(combat) : pickPartyTarget(combat);
        if (!target) return;
        const actor = t.party.find((p) => p.id === who.id);
        const out = performAttack(combat, who.id, target.id, actor, t.edition);
        tickHit();
        combat = out.combat;
        // sync hp to party
        const party = t.party.map((p) => {
          const c = combat.combatants.find((x) => x.characterId === p.id);
          return c ? { ...p, hp: c.hp } : p;
        });
        const over = combatOver(combat);
        let logText = out.text;
        if (over === "party") {
          combat = { ...combat, active: false };
          logText += " 敌人溃散。";
        } else if (over === "enemy") {
          combat = { ...combat, active: false };
          logText += " 小队全倒。";
        } else {
          combat = advanceTurn(combat);
        }
        get().patchTable((x) => ({
          ...x,
          party,
          combat,
          log: [...x.log, log({ kind: "combat", speaker: who.name, text: logText })],
        }));
        maybeAutoCombat(get);
      },

      endTable: (title, epilogue) => {
        get().patchTable((t) => ({
          ...t,
          phase: "ended",
          ended: { title, epilogue },
          log: [...t.log, log({ kind: "system", speaker: "圆桌", text: epilogue })],
        }));
      },

      abandon: () => set({ screen: "landing", currentId: null }),
      deleteTable: (id) =>
        set((s) => {
          const tables = { ...s.tables };
          delete tables[id];
          return {
            tables,
            currentId: s.currentId === id ? null : s.currentId,
            screen: "landing",
          };
        }),
      resume: (id) => {
        const t = get().tables[id];
        if (!t) return;
        const hydrated: TableState = {
          ...t,
          party: t.party.map(hydrateCharacter),
          dm: hydrateDm(t.dm),
        };
        set({
          tables: { ...get().tables, [id]: hydrated },
          currentId: id,
          screen: hydrated.phase === "play" || hydrated.phase === "ended" ? "play" : "sheets",
        });
      },
    }),
    {
      name: "ashcircle-save-v1",
      version: 2,
      skipHydration: true,
      partialize: (s) => ({ tables: s.tables, currentId: s.currentId }),
      migrate: (persisted) => {
        const s = persisted as { tables?: Record<string, TableState>; currentId?: string | null };
        if (!s.tables) return s;
        const tables: Record<string, TableState> = {};
        for (const [id, t] of Object.entries(s.tables)) {
          tables[id] = {
            ...t,
            version: SAVE_VERSION,
            party: t.party.map(hydrateCharacter),
            dm: hydrateDm(t.dm),
          };
        }
        return { ...s, tables };
      },
    },
  ),
);

function fallbackAgentAct(c: Character, t: TableState): string {
  const sugs = t.scene.suggested;
  const pick = sugs[Math.floor(Math.random() * Math.max(1, sugs.length))] ?? "仔细观察四周";
  const tag = c.agentMind.title || "性子";
  return `${c.name} 依着「${tag}」：${pick}。`;
}

function applyFallbackDm(get: () => Store, instruction: string) {
  const t = get().current();
  if (!t) return;
  const reply = fallbackDmReply(t, instruction);
  let beat = t.fallbackBeat;
  if (reply.advance) beat = Math.min(4, beat + 1);
  const scene = sceneForBeat(beat, t.party);
  get().patchTable((x) => ({
    ...x,
    fallbackBeat: beat,
    scene,
    usedAi: false,
    turn: { actor: nextHumanOrFirst(x) },
    log: [...x.log, log({ kind: "narration", speaker: x.dm.name, text: `${reply.prose}\n\n${scene.prose}` })],
    phase: reply.end ? "ended" : x.phase,
    ended: reply.end ? { title: "雾散之后", epilogue: reply.prose } : x.ended,
  }));
  if (reply.startCombat) get().startBeatCombat("cellar");
}

async function afterPartyAction(get: () => Store, text: string) {
  const t = get().current();
  if (!t) return;
  if (t.dm.controller === "agent") {
    await get().requestAiScene(
      `小队刚刚行动：${text}。请裁定结果并推进下一幕。若适合开战，给出 combatEnemies。`,
    );
  }
}

function maybeAutoCombat(get: () => Store) {
  const t = get().current();
  if (!t?.combat?.active) return;
  const who = currentCombatant(t.combat);
  if (!who || who.hp <= 0) return;
  const char = t.party.find((p) => p.id === who.id);
  const isAgent = who.side === "enemy" || char?.controller === "agent";
  if (!isAgent) return;
  window.setTimeout(() => {
    const now = get().current();
    if (!now?.combat?.active) return;
    const cur = currentCombatant(now.combat);
    if (cur?.id === who.id) get().combatAction("attack");
  }, 650);
}
