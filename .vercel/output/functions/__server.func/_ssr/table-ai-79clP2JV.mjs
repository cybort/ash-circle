import { a as object, i as number, n as discriminatedUnion, o as string, r as literal, t as array } from "../_libs/zod.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/table-ai-79clP2JV.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var ContextSchema = object({
	edition: string(),
	mods: object({
		lethality: number(),
		magic: number(),
		difficulty: number(),
		combatFreq: number(),
		agentVoice: number()
	}),
	seed: string(),
	tone: string(),
	campaignTitle: string(),
	campaignPremise: string(),
	dm: object({
		name: string(),
		persona: string(),
		title: string().optional(),
		voice: string().optional(),
		pacing: string().optional(),
		boundary: string().optional()
	}),
	party: array(object({
		id: string(),
		name: string(),
		ancestry: string(),
		classId: string(),
		personality: string(),
		appearance: string(),
		hp: number(),
		maxHp: number(),
		mind: object({
			title: string().optional(),
			voice: string().optional(),
			tactics: string().optional(),
			drive: string().optional(),
			tell: string().optional(),
			boundary: string().optional()
		}).optional()
	})),
	scene: object({
		title: string(),
		location: string(),
		biome: string(),
		prose: string(),
		index: number()
	}),
	recentLog: array(object({
		kind: string(),
		speaker: string(),
		text: string()
	}))
});
var SceneTask = object({
	kind: literal("scene"),
	context: ContextSchema,
	instruction: string()
});
var ActTask = object({
	kind: literal("act"),
	context: ContextSchema,
	actor: object({
		id: string(),
		name: string(),
		classId: string(),
		personality: string(),
		flaw: string(),
		ideal: string(),
		inventory: array(string()),
		voice: string().optional(),
		tactics: string().optional(),
		drive: string().optional(),
		tell: string().optional(),
		boundary: string().optional(),
		title: string().optional()
	}),
	instruction: string()
});
var CharTask = object({
	kind: literal("character"),
	edition: string(),
	seed: string(),
	seat: object({
		controller: string(),
		playerLabel: string(),
		nameHint: string().optional(),
		classHint: string().optional()
	})
});
var Task = discriminatedUnion("kind", [
	SceneTask,
	ActTask,
	CharTask
]);
async function grokJson(system, user, maxTokens) {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) throw new Error("UNAVAILABLE");
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			temperature: .9,
			max_tokens: maxTokens,
			messages: [{
				role: "system",
				content: system
			}, {
				role: "user",
				content: user
			}]
		})
	});
	if (!res.ok) throw new Error(`xAI API error ${res.status}`);
	return (await res.json()).choices[0]?.message.content ?? "";
}
function extractJson(text) {
	const raw = (text.match(/```(?:json)?\s*([\s\S]*?)```/)?.[1] ?? text).trim();
	const start = raw.indexOf("{");
	const end = raw.lastIndexOf("}");
	if (start < 0 || end <= start) throw new Error("NO_JSON");
	return JSON.parse(raw.slice(start, end + 1));
}
var SCENE_SYS = `你是中文桌上角色扮演游戏的地下城主（DM）。风格克制、具体、感官化，不卖萌，不写系统提示腔。
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
var ACT_SYS = `你在扮演一名桌上 RPG 的玩家角色。用角色的口吻宣布行动，短、具体、可被 DM 裁定。
严格遵守角色卡上的声口、战术、驱力、习惯与边界。不要抢人类玩家的决定，不要叙述世界结果，不要扮演 DM。
只输出 JSON：
{
  "speech": string,   // 角色可能说的一句（可空），必须像其声口
  "action": string,   // 第三人称行动描述，1-3 句，符合战术
  "wantCheck": null | {"skill": string, "label": string}
}`;
var CHAR_SYS = `为中文桌上 RPG 生成一张角色卡，并附带智体扮演指令。只输出 JSON：
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
var runTableAi_createServerFn_handler = createServerRpc({
	id: "452b7de1da17888c2da20525f437182bbb93f1285536b92c5f02fc9b1a870ec6",
	name: "runTableAi",
	filename: "src/lib/ai/table-ai.ts"
}, (opts) => runTableAi.__executeServer(opts));
var runTableAi = createServerFn({ method: "POST" }).validator((input) => Task.parse(input)).handler(runTableAi_createServerFn_handler, async ({ data }) => {
	try {
		if (data.kind === "scene") {
			const json = extractJson(await grokJson(SCENE_SYS, JSON.stringify({
				instruction: data.instruction,
				context: data.context
			}), 1400));
			return {
				ok: true,
				kind: "scene",
				json: JSON.stringify(json)
			};
		}
		if (data.kind === "act") {
			const json = extractJson(await grokJson(ACT_SYS, JSON.stringify({
				instruction: data.instruction,
				actor: data.actor,
				context: data.context
			}), 500));
			return {
				ok: true,
				kind: "act",
				json: JSON.stringify(json)
			};
		}
		const json = extractJson(await grokJson(CHAR_SYS, JSON.stringify(data), 700));
		return {
			ok: true,
			kind: "character",
			json: JSON.stringify(json)
		};
	} catch (err) {
		const msg = err instanceof Error ? err.message : "AI_ERROR";
		if (msg === "UNAVAILABLE") return {
			ok: false,
			error: "unavailable"
		};
		return {
			ok: false,
			error: msg
		};
	}
});
//#endregion
export { runTableAi_createServerFn_handler };
