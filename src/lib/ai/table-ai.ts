import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContextSchema = z.object({
  edition: z.string(),
  mods: z.object({
    lethality: z.number(),
    magic: z.number(),
    difficulty: z.number(),
    combatFreq: z.number(),
    agentVoice: z.number(),
  }),
  seed: z.string(),
  tone: z.string(),
  campaignTitle: z.string(),
  campaignPremise: z.string(),
  dm: z.object({
    name: z.string(),
    persona: z.string(),
    title: z.string().optional(),
    voice: z.string().optional(),
    pacing: z.string().optional(),
    boundary: z.string().optional(),
  }),
  party: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      ancestry: z.string(),
      classId: z.string(),
      personality: z.string(),
      appearance: z.string(),
      hp: z.number(),
      maxHp: z.number(),
      mind: z
        .object({
          title: z.string().optional(),
          voice: z.string().optional(),
          tactics: z.string().optional(),
          drive: z.string().optional(),
          tell: z.string().optional(),
          boundary: z.string().optional(),
        })
        .optional(),
    }),
  ),
  scene: z.object({
    title: z.string(),
    location: z.string(),
    biome: z.string(),
    prose: z.string(),
    index: z.number(),
  }),
  recentLog: z.array(
    z.object({
      kind: z.string(),
      speaker: z.string(),
      text: z.string(),
    }),
  ),
});

const SceneTask = z.object({
  kind: z.literal("scene"),
  context: ContextSchema,
  instruction: z.string(),
});

const ActTask = z.object({
  kind: z.literal("act"),
  context: ContextSchema,
  actor: z.object({
    id: z.string(),
    name: z.string(),
    classId: z.string(),
    personality: z.string(),
    flaw: z.string(),
    ideal: z.string(),
    inventory: z.array(z.string()),
    voice: z.string().optional(),
    tactics: z.string().optional(),
    drive: z.string().optional(),
    tell: z.string().optional(),
    boundary: z.string().optional(),
    title: z.string().optional(),
  }),
  instruction: z.string(),
});

const CharTask = z.object({
  kind: z.literal("character"),
  edition: z.string(),
  seed: z.string(),
  seat: z.object({
    controller: z.string(),
    playerLabel: z.string(),
    nameHint: z.string().optional(),
    classHint: z.string().optional(),
  }),
});

const Task = z.discriminatedUnion("kind", [SceneTask, ActTask, CharTask]);

async function grokJson(system: string, user: string, maxTokens: number): Promise<string> {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) {
    throw new Error("UNAVAILABLE");
  }
  const res = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "grok-4.5",
      temperature: 0.9,
      max_tokens: maxTokens,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    }),
  });
  if (!res.ok) {
    throw new Error(`xAI API error ${res.status}`);
  }
  const body = (await res.json()) as {
    choices: { message: { content: string } }[];
  };
  return body.choices[0]?.message.content ?? "";
}

function extractJson(text: string): unknown {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const raw = (fenced?.[1] ?? text).trim();
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  if (start < 0 || end <= start) throw new Error("NO_JSON");
  return JSON.parse(raw.slice(start, end + 1));
}

const SCENE_SYS = `你是中文桌上角色扮演游戏的地下城主（DM）。风格克制、具体、感官化，不卖萌，不写系统提示腔。
遵守 DM 卡上的声口、节奏与边界。
只输出一个 JSON 对象，不要Markdown解释。字段：
{
  "title": string,
  "location": string,
  "biome": "inn"|"forest"|"dungeon"|"cave"|"cellar"|"coast"|"ruins"|"city"|"snow"|"road",
  "prose": string,          // 2-4 段中文叙事，第二人称复数“你们”
  "suggested": string[3-5], // 短动作建议
  "checks": [{"label":string,"skill":string,"dc":number}],
  "npcs": [{"name":string,"brief":string}],
  "tokens": [{"name":string,"kind":"npc"|"monster"|"prop","x":0-15,"y":0-9,"glyph":string}],
  "combatEnemies": null | [{"name":string,"hp":number,"ac":number,"atkMod":number,"dmg":string}],
  "ended": null | {"title":string,"epilogue":string}
}
skill 只能用：athletics acrobatics sleight stealth arcana history investigation nature religion animal insight medicine perception survival deception intimidation performance persuasion。
dc 大约 10-16。不要代替玩家掷骰。不要总结规则。`;

const ACT_SYS = `你在扮演一名桌上 RPG 的玩家角色。用角色的口吻宣布行动，短、具体、可被 DM 裁定。
严格遵守角色卡上的声口、战术、驱力、习惯与边界。不要抢人类玩家的决定，不要叙述世界结果，不要扮演 DM。
只输出 JSON：
{
  "speech": string,   // 角色可能说的一句（可空），必须像其声口
  "action": string,   // 第三人称行动描述，1-3 句，符合战术
  "wantCheck": null | {"skill": string, "label": string}
}`;

const CHAR_SYS = `为中文桌上 RPG 生成一张角色卡，并附带智体扮演指令。只输出 JSON：
{
  "name": string,
  "ancestry": "human"|"elf"|"dwarf"|"halfling"|"dragonborn"|"tiefling",
  "classId": "fighter"|"ranger"|"wizard"|"cleric"|"rogue"|"bard",
  "background": string,
  "appearance": string,
  "personality": string,
  "ideal": string,
  "bond": string,
  "flaw": string,
  "backstory": string,
  "mind": {
    "title": string,
    "voice": string,
    "tactics": string,
    "drive": string,
    "tell": string,
    "boundary": string
  }
}
中文。避免网文腔。boundary 必须包含：不替人类做选择、不叙述世界结果。`;

export const runTableAi = createServerFn({ method: "POST" })
  .validator((input: unknown) => Task.parse(input))
  .handler(async ({ data }) => {
    try {
      if (data.kind === "scene") {
        const user = JSON.stringify({
          instruction: data.instruction,
          context: data.context,
        });
        const text = await grokJson(SCENE_SYS, user, 1400);
        const json = extractJson(text);
        return { ok: true as const, kind: "scene" as const, json: JSON.stringify(json) };
      }
      if (data.kind === "act") {
        const user = JSON.stringify({
          instruction: data.instruction,
          actor: data.actor,
          context: data.context,
        });
        const text = await grokJson(ACT_SYS, user, 500);
        const json = extractJson(text);
        return { ok: true as const, kind: "act" as const, json: JSON.stringify(json) };
      }
      const user = JSON.stringify(data);
      const text = await grokJson(CHAR_SYS, user, 700);
      const json = extractJson(text);
      return { ok: true as const, kind: "character" as const, json: JSON.stringify(json) };
    } catch (err) {
      const msg = err instanceof Error ? err.message : "AI_ERROR";
      if (msg === "UNAVAILABLE") {
        return { ok: false as const, error: "unavailable" };
      }
      return { ok: false as const, error: msg };
    }
  });
