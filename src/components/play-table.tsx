import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Bot,
  Dices,
  Map as MapIcon,
  Pause,
  Play,
  Type,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Portrait } from "@/components/portrait";
import { PixelScene } from "@/components/pixel-scene";
import { currentCombatant } from "@/lib/game/combat";
import { hpTint } from "@/lib/game/rules";
import { gridForBiome, overlayAscii } from "@/lib/game/scenes";
import { SKILLS, type Presentation } from "@/lib/game/types";
import { useTableStore } from "@/lib/game/store";
import { cn } from "@/lib/utils";
import { CLASS_LABEL, EDITION_META } from "@/lib/game/types";

export function PlayTable() {
  const table = useTableStore((s) => (s.currentId ? s.tables[s.currentId] : null));
  const abandon = useTableStore((s) => s.abandon);
  const setPresentation = useTableStore((s) => s.setPresentation);
  const submitHumanAction = useTableStore((s) => s.submitHumanAction);
  const submitHumanNarration = useTableStore((s) => s.submitHumanNarration);
  const requestAiScene = useTableStore((s) => s.requestAiScene);
  const requestAgentAct = useTableStore((s) => s.requestAgentAct);
  const rollPending = useTableStore((s) => s.rollPending);
  const freeRoll = useTableStore((s) => s.freeRoll);
  const combatAction = useTableStore((s) => s.combatAction);
  const startBeatCombat = useTableStore((s) => s.startBeatCombat);
  const busy = useTableStore((s) => s.busy);
  const busyLabel = useTableStore((s) => s.busyLabel);
  const [draft, setDraft] = useState("");
  const [watch, setWatch] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);

  const humanPc = table?.party.find((p) => p.controller === "human");
  const actor =
    table && table.turn.actor === "dm"
      ? null
      : table?.party.find((p) => p.id === table.turn.actor);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [table?.log.length]);

  useEffect(() => {
    if (!table || !watch || busy || table.phase === "ended") return;
    const t = window.setTimeout(() => {
      if (table.turn.actor === "dm" && table.dm.controller === "agent") {
        void requestAiScene("继续推进。给新的可互动细节。");
      } else if (actor?.controller === "agent") {
        void requestAgentAct(actor.id);
      }
    }, 900);
    return () => clearTimeout(t);
  }, [table, watch, busy, actor, requestAiScene, requestAgentAct]);

  const combatWho = table?.combat?.active ? currentCombatant(table.combat) : undefined;

  if (!table) return null;

  return (
    <div className="flex min-h-dvh flex-col bg-bg">
      <header className="flex flex-wrap items-center gap-2 border-b border-border px-4 py-3 sm:px-6">
        <Button variant="ghost" size="sm" onClick={abandon} className="-ml-2">
          <ArrowLeft />
          <span className="hidden sm:inline">离开</span>
        </Button>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-xl leading-tight text-fg">{table.name}</p>
          <p className="truncate text-xs text-muted">
            {EDITION_META[table.edition].name} · {table.campaignTitle}
          </p>
        </div>
        <PresentationSwitch value={table.presentation} onChange={setPresentation} />
      </header>

      <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 gap-4 p-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)]">
        <section className="flex min-h-0 flex-col gap-3">
          <SceneStage tableId={table.id} />

          <div
            ref={logRef}
            className="h-56 overflow-y-auto rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:h-64"
          >
            {table.log.map((e) => (
              <article key={e.id} className="mb-3 last:mb-0">
                <p className="text-[11px] tracking-wide text-subtle">
                  {e.speaker}
                  {e.kind === "roll" ? " · 骰" : e.kind === "narration" ? " · DM" : ""}
                </p>
                <p
                  className={cn(
                    "mt-0.5 whitespace-pre-wrap text-sm leading-relaxed",
                    e.kind === "narration" ? "text-fg" : "text-muted",
                    e.kind === "roll" && "font-mono text-xs text-fg",
                  )}
                >
                  {e.text}
                </p>
                {e.roll ? (
                  <p className="mt-1 font-mono text-xs tabular text-primary">
                    {e.roll.detail}
                    {e.roll.success === true
                      ? " · 成"
                      : e.roll.success === false
                        ? " · 失"
                        : ""}
                  </p>
                ) : null}
              </article>
            ))}
            {busy ? <p className="ash-shimmer text-sm">{busyLabel}</p> : null}
          </div>

          {table.phase === "ended" && table.ended ? (
            <div className="rounded-xl bg-elevated p-5 shadow-[var(--shadow-border)]">
              <p className="font-display text-2xl text-fg">{table.ended.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{table.ended.epilogue}</p>
            </div>
          ) : table.combat?.active ? (
            <CombatBar />
          ) : (
            <div className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]">
              {table.scene.suggested.length > 0 ? (
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {table.scene.suggested.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => {
                        setDraft(s);
                        void submitHumanAction(s);
                        setDraft("");
                      }}
                      className="h-9 max-w-full truncate rounded-full bg-inset px-3 text-xs text-fg shadow-[var(--shadow-border)]"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              ) : null}
              {table.scene.checks.length > 0 && humanPc ? (
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {table.scene.checks.map((ch) => (
                    <Button
                      key={ch.id}
                      size="sm"
                      variant="secondary"
                      onClick={() => void rollPending(ch.id, humanPc.id)}
                    >
                      <Dices />
                      {ch.label} DC {ch.dc}
                    </Button>
                  ))}
                </div>
              ) : null}
              <Textarea
                rows={2}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder={
                  table.dm.controller === "human" && table.turn.actor === "dm"
                    ? "以 DM 身份叙述…"
                    : "宣布你的行动…"
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                    e.preventDefault();
                    const v = draft.trim();
                    if (!v) return;
                    if (table.dm.controller === "human" && table.turn.actor === "dm") {
                      void submitHumanNarration(v);
                    } else {
                      void submitHumanAction(v);
                    }
                    setDraft("");
                  }
                }}
              />
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Button
                  disabled={busy || !draft.trim()}
                  onClick={() => {
                    const v = draft.trim();
                    if (!v) return;
                    if (table.dm.controller === "human" && table.turn.actor === "dm") {
                      void submitHumanNarration(v);
                    } else {
                      void submitHumanAction(v);
                    }
                    setDraft("");
                  }}
                >
                  宣布
                </Button>
                {table.dm.controller === "agent" ? (
                  <Button
                    variant="secondary"
                    disabled={busy}
                    onClick={() => void requestAiScene("根据刚才的行动继续。")}
                  >
                    请 DM 推进
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    disabled={busy}
                    onClick={() => void requestAiScene("以人类 DM 的助手身份，建议下一幕的具体感官细节，仍由人类拍板。")}
                  >
                    智体补一幕
                  </Button>
                )}
                {actor?.controller === "agent" ? (
                  <Button
                    variant="outline"
                    disabled={busy}
                    onClick={() => void requestAgentAct(actor.id)}
                  >
                    {actor.name} 行动
                  </Button>
                ) : null}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setWatch((w) => !w)}
                  title="观剧：智体自动轮转"
                >
                  {watch ? <Pause /> : <Play />}
                  {watch ? "暂停观剧" : "观剧"}
                </Button>
                <Button variant="ghost" size="sm" onClick={() => startBeatCombat()}>
                  遭遇
                </Button>
              </div>
            </div>
          )}
        </section>

        <aside className="flex flex-col gap-3">
          <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
            <p className="text-xs tracking-wide text-muted">
              DM · {table.dm.name}
              {table.dm.title ? ` · ${table.dm.title}` : ""}
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-fg">
              {table.dm.controller === "agent" ? <Bot className="size-3.5" /> : <User className="size-3.5" />}
              {table.dm.controller === "agent" ? "智体" : "人类"}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted">{table.dm.persona}</p>
          </div>

          <ul className="space-y-2">
            {table.party.map((p) => (
              <li key={p.id} className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]">
                <div className="flex gap-3">
                  <Portrait ancestry={p.ancestry} classId={p.classId} size={44} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate font-medium text-fg">{p.name}</p>
                      <span className={cn("text-xs tabular", hpTint(p.hp, p.maxHp))}>
                        {p.hp}/{p.maxHp}
                      </span>
                    </div>
                    <p className="text-xs text-muted">
                      {CLASS_LABEL[p.classId]} · {p.controller === "human" ? "人类" : "智体"}
                      {p.agentMind?.title ? ` · ${p.agentMind.title}` : ""}
                    </p>
                    {p.controller === "agent" && p.agentMind?.tell ? (
                      <p className="mt-1 text-xs leading-relaxed text-muted">{p.agentMind.tell}</p>
                    ) : null}
                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-inset">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${Math.max(0, (p.hp / Math.max(1, p.maxHp)) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {table.scene.npcs.length > 0 ? (
            <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
              <p className="text-xs tracking-wide text-muted">在场</p>
              <ul className="mt-2 space-y-2">
                {table.scene.npcs.map((n) => (
                  <li key={n.name}>
                    <p className="text-sm text-fg">{n.name}</p>
                    <p className="text-xs text-muted">{n.brief}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <DiceTray onRoll={freeRoll} />

          {humanPc ? (
            <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
              <p className="text-xs tracking-wide text-muted">{humanPc.name} 的技能</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {SKILLS.filter((s) => humanPc.skillProfs.includes(s.id)).map((s) => (
                  <Badge key={s.id}>{s.label}</Badge>
                ))}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">{humanPc.personality}</p>
            </div>
          ) : null}

          {combatWho ? (
            <p className="text-xs text-muted">
              战斗回合：<span className="text-fg">{combatWho.name}</span>
            </p>
          ) : null}
        </aside>
      </div>
    </div>
  );
}

function SceneStage({ tableId }: { tableId: string }) {
  const table = useTableStore((s) => s.tables[tableId]);
  if (!table) return null;
  const { scene, presentation } = table;
  const floors = (scene.grid.tiles.match(/[.,=_~]/g) ?? []).length;
  const grid = floors >= 10 ? scene.grid : gridForBiome(scene.biome);
  const ascii = overlayAscii(grid, scene.tokens, scene.location);
  const liveScene = { ...scene, grid };
  return (
    <div className="overflow-hidden rounded-xl bg-inset shadow-[var(--shadow-border)]">
      <div className="flex items-center justify-between px-4 py-2">
        <div>
          <p className="font-display text-lg text-fg">{scene.title}</p>
          <p className="text-xs text-muted">{scene.location}</p>
        </div>
      </div>
      {presentation === "pixel" ? (
        <div className="aspect-[16/10] w-full bg-bg p-2">
          <PixelScene scene={liveScene} />
        </div>
      ) : presentation === "ascii" ? (
        <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-tight text-primary sm:text-xs">
          {ascii}
        </pre>
      ) : (
        <div className="px-4 pb-4">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-muted">{scene.prose}</p>
        </div>
      )}
      {presentation !== "text" ? (
        <p className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted">
          {scene.prose.length > 220 ? `${scene.prose.slice(0, 220)}…` : scene.prose}
        </p>
      ) : null}
    </div>
  );
}

function PresentationSwitch({
  value,
  onChange,
}: {
  value: Presentation;
  onChange: (p: Presentation) => void;
}) {
  const opts: { key: Presentation; icon: typeof Type; label: string }[] = [
    { key: "text", icon: Type, label: "文字" },
    { key: "ascii", icon: MapIcon, label: "字符" },
    { key: "pixel", icon: Dices, label: "像素" },
  ];
  return (
    <div className="inline-flex rounded-md bg-surface p-1 shadow-[var(--shadow-border)]">
      {opts.map((o) => (
        <button
          key={o.key}
          type="button"
          aria-label={o.label}
          onClick={() => onChange(o.key)}
          className={cn(
            "inline-flex h-9 items-center gap-1.5 rounded-sm px-2.5 text-xs",
            value === o.key ? "bg-elevated text-fg" : "text-muted",
          )}
        >
          <o.icon className="size-3.5" />
          <span className="hidden sm:inline">{o.label}</span>
        </button>
      ))}
    </div>
  );
}

function DiceTray({ onRoll }: { onRoll: (formula: string, label?: string) => void }) {
  const dice = ["1d20", "1d12", "1d10", "1d8", "1d6", "1d4", "2d6"];
  return (
    <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
      <p className="text-xs tracking-wide text-muted">骰盘</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {dice.map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => onRoll(d)}
            className="h-9 min-w-11 rounded-md bg-inset px-2 font-mono text-xs text-fg shadow-[var(--shadow-border)]"
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}

function CombatBar() {
  const table = useTableStore((s) => (s.currentId ? s.tables[s.currentId] : null));
  const combatAction = useTableStore((s) => s.combatAction);
  if (!table?.combat?.active) return null;
  const who = currentCombatant(table.combat);
  const char = table.party.find((p) => p.id === who?.id);
  const canAct = who?.side === "party" && char?.controller === "human";
  return (
    <div className="rounded-xl bg-elevated p-4 shadow-[var(--shadow-border)]">
      <p className="text-xs text-muted">
        第 {table.combat.round} 轮 · {who?.name ?? "—"}
      </p>
      <ol className="mt-2 flex flex-wrap gap-2">
        {table.combat.order.map((id) => {
          const c = table.combat!.combatants.find((x) => x.id === id);
          if (!c) return null;
          return (
            <li
              key={id}
              className={cn(
                "rounded-full px-2 py-0.5 text-xs",
                c.hp <= 0 ? "text-subtle line-through" : "text-fg",
                who?.id === id && "bg-inset",
              )}
            >
              {c.name} {c.hp}/{c.maxHp}
            </li>
          );
        })}
      </ol>
      {canAct ? (
        <div className="mt-3 flex gap-2">
          <Button onClick={() => combatAction("attack")}>攻击</Button>
          <Button variant="secondary" onClick={() => combatAction("skip")}>
            等待
          </Button>
        </div>
      ) : (
        <p className="mt-3 text-xs text-muted">等待 {who?.name} …</p>
      )}
    </div>
  );
}
