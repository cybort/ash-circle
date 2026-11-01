import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, r as Slot, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as object, i as number, n as discriminatedUnion, o as string, r as literal, t as array } from "../_libs/zod.mjs";
import { a as ScrollText, c as Pause, d as Bot, f as BookUser, l as Map, m as ArrowLeft, n as User, o as Play, p as ArrowRight, r as Type, s as PenLine, t as Users, u as Dices } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-fHkTAtyc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function uid() {
	return crypto.randomUUID?.() ?? `id_${Math.random().toString(36).slice(2, 10)}`;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[opacity,transform,background-color,color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg hover:opacity-90",
			secondary: "bg-elevated text-fg shadow-[var(--shadow-border)] hover:bg-surface",
			ghost: "text-fg hover:bg-elevated",
			outline: "text-fg shadow-[var(--shadow-border)] hover:bg-elevated",
			danger: "bg-danger text-danger-fg hover:opacity-90"
		},
		size: {
			sm: "h-9 rounded-sm px-3 text-sm",
			md: "h-11 rounded-md px-4 text-sm",
			lg: "h-12 rounded-lg px-5 text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Badge({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full bg-elevated px-2.5 py-0.5 text-xs font-medium text-muted shadow-[var(--shadow-border)]", className),
		children
	});
}
function TableMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 280 180",
		className,
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "140",
				cy: "118",
				rx: "108",
				ry: "28",
				fill: "#0c0b0a",
				opacity: "0.55"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "140",
				cy: "96",
				rx: "110",
				ry: "42",
				fill: "#1c1916"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "140",
				cy: "92",
				rx: "100",
				ry: "36",
				fill: "#141210"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "140",
				cy: "90",
				rx: "96",
				ry: "34",
				fill: "none",
				stroke: "#3d3832",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "140",
				cy: "90",
				rx: "72",
				ry: "24",
				fill: "none",
				stroke: "#2a2622",
				strokeWidth: "0.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "134",
				y: "64",
				width: "12",
				height: "18",
				rx: "1",
				fill: "#2a2622"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "136",
				y: "68",
				width: "8",
				height: "10",
				fill: "#d6d0c4",
				opacity: "0.85"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "137",
				y: "70",
				width: "6",
				height: "6",
				fill: "#ece7dc",
				opacity: "0.55"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "140",
				y1: "52",
				x2: "140",
				y2: "64",
				stroke: "#6e6960",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "108",
				y: "84",
				width: "10",
				height: "10",
				transform: "rotate(-12 113 89)",
				fill: "#ece7dc"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "162",
				y: "86",
				width: "8",
				height: "8",
				transform: "rotate(18 166 90)",
				fill: "#d6d0c4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "88",
				y: "78",
				width: "28",
				height: "16",
				transform: "rotate(-8 102 86)",
				fill: "#9a9488",
				opacity: "0.35"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "70",
				y: "108",
				width: "18",
				height: "6",
				rx: "1",
				fill: "#2a2622"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "192",
				y: "108",
				width: "18",
				height: "6",
				rx: "1",
				fill: "#2a2622"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "128",
				y: "128",
				width: "24",
				height: "6",
				rx: "1",
				fill: "#2a2622"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "128",
				y: "54",
				width: "24",
				height: "5",
				rx: "1",
				fill: "#2a2622"
			})
		]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
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
var runTableAi = createServerFn({ method: "POST" }).validator((input) => Task.parse(input)).handler(createSsrRpc("452b7de1da17888c2da20525f437182bbb93f1285536b92c5f02fc9b1a870ec6"));
function blankGrid(w = 16, h = 10, fill = ".") {
	return fill.repeat(w * h);
}
function setTile(tiles, w, x, y, ch) {
	const i = y * w + x;
	if (i < 0 || i >= tiles.length) return tiles;
	return tiles.slice(0, i) + ch + tiles.slice(i + 1);
}
function paintRect(tiles, w, h, x0, y0, x1, y1, ch) {
	let t = tiles;
	for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) if (x >= 0 && y >= 0 && x < w && y < h) t = setTile(t, w, x, y, ch);
	return t;
}
function paintH(tiles, w, x0, x1, y, ch) {
	let t = tiles;
	for (let x = x0; x <= x1; x++) t = setTile(t, w, x, y, ch);
	return t;
}
function paintV(tiles, w, x, y0, y1, ch) {
	let t = tiles;
	for (let y = y0; y <= y1; y++) t = setTile(t, w, x, y, ch);
	return t;
}
function innGrid() {
	const w = 16;
	const h = 10;
	let t = blankGrid(w, h, "#");
	t = paintRect(t, w, h, 1, 1, 14, 8, ".");
	t = paintH(t, w, 1, 14, 4, "=");
	t = setTile(t, w, 7, 4, ".");
	t = setTile(t, w, 8, 4, ".");
	t = setTile(t, w, 2, 8, "+");
	t = setTile(t, w, 3, 8, "+");
	t = setTile(t, w, 13, 1, "*");
	t = setTile(t, w, 2, 1, "*");
	t = setTile(t, w, 12, 6, "o");
	t = setTile(t, w, 13, 6, "o");
	t = setTile(t, w, 14, 5, "%");
	t = paintRect(t, w, h, 10, 1, 14, 3, "_");
	return {
		w,
		h,
		tiles: t
	};
}
function forestGrid() {
	const w = 16;
	const h = 10;
	let t = blankGrid(w, h, ",");
	for (const [x, y] of [
		[1, 1],
		[3, 2],
		[2, 5],
		[0, 7],
		[4, 8],
		[12, 1],
		[14, 3],
		[13, 6],
		[15, 8],
		[10, 9],
		[7, 0],
		[9, 2]
	]) t = setTile(t, w, x, y, "^");
	t = paintH(t, w, 4, 11, 4, ".");
	t = paintH(t, w, 5, 10, 5, ".");
	t = setTile(t, w, 8, 6, "*");
	t = setTile(t, w, 6, 7, "%");
	return {
		w,
		h,
		tiles: t
	};
}
function cellarGrid() {
	const w = 16;
	const h = 10;
	let t = blankGrid(w, h, "#");
	t = paintRect(t, w, h, 1, 1, 14, 8, ".");
	t = paintV(t, w, 7, 1, 8, "#");
	t = setTile(t, w, 7, 4, "+");
	t = setTile(t, w, 7, 5, "+");
	t = paintRect(t, w, h, 9, 2, 13, 4, "~");
	t = setTile(t, w, 2, 2, "*");
	t = setTile(t, w, 12, 7, "o");
	t = setTile(t, w, 3, 7, "%");
	t = setTile(t, w, 1, 8, "+");
	return {
		w,
		h,
		tiles: t
	};
}
function dungeonGrid() {
	const w = 16;
	const h = 10;
	let t = blankGrid(w, h, "#");
	t = paintRect(t, w, h, 1, 1, 6, 4, ".");
	t = paintRect(t, w, h, 6, 3, 10, 6, ".");
	t = paintRect(t, w, h, 10, 5, 14, 8, ".");
	t = setTile(t, w, 6, 3, "+");
	t = setTile(t, w, 10, 6, "+");
	t = setTile(t, w, 2, 1, "*");
	t = setTile(t, w, 13, 8, "*");
	t = setTile(t, w, 12, 6, "%");
	t = setTile(t, w, 4, 4, "o");
	return {
		w,
		h,
		tiles: t
	};
}
function coastGrid() {
	const w = 16;
	const h = 10;
	let t = blankGrid(w, h, ",");
	t = paintRect(t, w, h, 0, 6, 15, 9, "~");
	t = paintH(t, w, 0, 15, 6, ".");
	t = setTile(t, w, 3, 4, "^");
	t = setTile(t, w, 12, 3, "^");
	t = setTile(t, w, 8, 5, "o");
	t = setTile(t, w, 7, 5, "%");
	return {
		w,
		h,
		tiles: t
	};
}
function ruinsGrid() {
	const w = 16;
	const h = 10;
	let t = blankGrid(w, h, ",");
	t = paintH(t, w, 2, 13, 2, "#");
	t = paintH(t, w, 2, 13, 7, "#");
	t = paintV(t, w, 2, 2, 7, "#");
	t = paintV(t, w, 13, 2, 7, "#");
	t = paintRect(t, w, h, 3, 3, 12, 6, ".");
	t = setTile(t, w, 7, 7, "+");
	t = setTile(t, w, 8, 7, "+");
	t = setTile(t, w, 4, 4, "%");
	t = setTile(t, w, 11, 5, "%");
	t = setTile(t, w, 3, 3, "*");
	return {
		w,
		h,
		tiles: t
	};
}
function caveGrid() {
	const w = 16;
	const h = 10;
	let t = blankGrid(w, h, "#");
	t = paintRect(t, w, h, 2, 2, 13, 7, ".");
	t = setTile(t, w, 1, 4, ".");
	t = setTile(t, w, 1, 5, ".");
	t = setTile(t, w, 14, 5, ".");
	t = setTile(t, w, 4, 3, "*");
	t = setTile(t, w, 11, 6, "*");
	t = paintRect(t, w, h, 8, 3, 10, 4, "~");
	t = setTile(t, w, 6, 6, "%");
	return {
		w,
		h,
		tiles: t
	};
}
function cityGrid() {
	const w = 16;
	const h = 10;
	let t = blankGrid(w, h, ".");
	t = paintRect(t, w, h, 0, 0, 4, 3, "#");
	t = paintRect(t, w, h, 11, 0, 15, 4, "#");
	t = paintRect(t, w, h, 0, 7, 5, 9, "#");
	t = paintRect(t, w, h, 12, 7, 15, 9, "#");
	t = paintH(t, w, 0, 15, 5, "=");
	t = setTile(t, w, 2, 3, "+");
	t = setTile(t, w, 13, 4, "+");
	t = setTile(t, w, 8, 4, "*");
	return {
		w,
		h,
		tiles: t
	};
}
function snowGrid() {
	const w = 16;
	const h = 10;
	let t = blankGrid(w, h, "_");
	t = setTile(t, w, 2, 2, "^");
	t = setTile(t, w, 13, 1, "^");
	t = setTile(t, w, 10, 7, "^");
	t = paintH(t, w, 4, 11, 5, ".");
	t = setTile(t, w, 7, 4, "*");
	t = setTile(t, w, 8, 6, "o");
	return {
		w,
		h,
		tiles: t
	};
}
function roadGrid() {
	const w = 16;
	const h = 10;
	let t = blankGrid(w, h, ",");
	t = paintH(t, w, 0, 15, 4, ".");
	t = paintH(t, w, 0, 15, 5, ".");
	t = setTile(t, w, 2, 2, "^");
	t = setTile(t, w, 12, 7, "^");
	t = setTile(t, w, 8, 3, "*");
	t = setTile(t, w, 6, 6, "o");
	return {
		w,
		h,
		tiles: t
	};
}
var BIOME_BUILDERS = {
	inn: innGrid,
	forest: forestGrid,
	dungeon: dungeonGrid,
	cave: caveGrid,
	cellar: cellarGrid,
	coast: coastGrid,
	ruins: ruinsGrid,
	city: cityGrid,
	snow: snowGrid,
	road: roadGrid
};
function gridForBiome(biome) {
	return BIOME_BUILDERS[biome]();
}
function partyTokens(party, spots) {
	return party.map((p, i) => {
		const [x, y] = spots[i] ?? [2 + i * 2, 6];
		return {
			id: p.id,
			x,
			y,
			kind: "pc",
			name: p.name,
			glyph: p.glyph,
			tint: p.tint
		};
	});
}
function overlayAscii(grid, tokens, title) {
	const rows = [];
	for (let y = 0; y < grid.h; y++) {
		let row = "";
		for (let x = 0; x < grid.w; x++) {
			const tok = tokens.find((t) => t.x === x && t.y === y);
			row += tok ? tok.glyph : grid.tiles[y * grid.w + x] ?? " ";
		}
		rows.push(row);
	}
	const innerW = grid.w;
	const line = "─".repeat(innerW + 2);
	return `┌${line}┐\n│ ${title.length > innerW ? title.slice(0, innerW) : title.padEnd(innerW, " ")} │\n├${line}┤\n${rows.map((r) => `│ ${r} │`).join("\n")}\n└${line}┘`;
}
function makeScene(partial, party) {
	const grid = partial.grid ?? gridForBiome(partial.biome);
	const tokens = partial.tokens ?? partyTokens(party, defaultSpots(partial.biome));
	const ascii = partial.ascii ?? overlayAscii(grid, tokens, partial.location);
	return {
		index: partial.index ?? 0,
		title: partial.title,
		location: partial.location,
		biome: partial.biome,
		prose: partial.prose,
		ascii,
		grid,
		tokens,
		suggested: partial.suggested ?? [],
		checks: partial.checks ?? [],
		npcs: partial.npcs ?? []
	};
}
function defaultSpots(biome) {
	if (biome === "inn") return [
		[3, 6],
		[5, 7],
		[4, 7]
	];
	if (biome === "cellar") return [
		[2, 6],
		[3, 5],
		[4, 6]
	];
	if (biome === "forest") return [
		[6, 5],
		[7, 6],
		[8, 5]
	];
	if (biome === "coast") return [
		[5, 4],
		[6, 5],
		[7, 4]
	];
	return [
		[3, 5],
		[4, 6],
		[5, 5]
	];
}
function parseGridPayload(raw, fallback) {
	if (raw && typeof raw === "object" && "w" in raw && "h" in raw && "tiles" in raw) {
		const w = Number(raw.w) || 16;
		const h = Number(raw.h) || 10;
		let tiles = String(raw.tiles).replace(/\s+/g, "");
		const need = w * h;
		if (tiles.length < need) tiles = tiles.padEnd(need, ".");
		if (tiles.length > need) tiles = tiles.slice(0, need);
		return {
			w,
			h,
			tiles
		};
	}
	return gridForBiome(fallback);
}
function newCheck(label, skill, dc, who) {
	return {
		id: uid(),
		label,
		skill,
		dc,
		who
	};
}
/** 盐雾驿站 — offline campaign the table can finish without an API. */
var CAMPAIGN = {
	title: "盐雾驿站",
	premise: "海岸驿道被一夜盐雾吞没。商队的马失踪，楼上房间反锁，地窖里有潮水拍打的声音。你们是今晚唯一还醒着的客人。"
};
function openingScene(party) {
	return makeScene({
		index: 0,
		title: "盐雾里的门",
		location: "盐雾驿站 · 大厅",
		biome: "inn",
		prose: "盐雾贴着门缝钻进来，把灯芯压成一粒红点。驿站老板顾三站在吧台内侧，手指反复擦着一只已经很干净的杯子。楼上第二间房的门锁着——商队领队申伯昨晚住进去，清晨没有下楼。马厩那边少了一匹栗马，缰绳还挂在空槽上，像有人刚把它牵走。\n\n壁炉里的木头是湿的，只冒烟。几个过路客把帽檐压得很低。顾三看见你们，嗓子发干：“客房……还有。别去地窖。潮。",
		suggested: [
			"询问顾三今晚发生了什么",
			"打量大厅与客人",
			"去马厩看看",
			"要求上楼看看申伯的房"
		],
		checks: [newCheck("察觉大厅的不对劲", "perception", 12), newCheck("说服顾三开口", "persuasion", 13)],
		npcs: [{
			name: "顾三",
			brief: "驿站老板。手一直在擦杯子。怕潮水，更怕客人。"
		}, {
			name: "帽檐客",
			brief: "坐在角落，不喝酒，只听门。"
		}],
		tokens: [
			...partyTokens(party, [
				[3, 6],
				[5, 7],
				[4, 7]
			]),
			{
				id: "npc-gu",
				x: 8,
				y: 3,
				kind: "npc",
				name: "顾三",
				glyph: "G",
				tint: "#c9b07a"
			},
			{
				id: "npc-hat",
				x: 12,
				y: 2,
				kind: "npc",
				name: "帽檐客",
				glyph: "h",
				tint: "#8a7a86"
			}
		]
	}, party);
}
function sceneForBeat(beat, party) {
	if (beat <= 0) return openingScene(party);
	if (beat === 1) return makeScene({
		index: 1,
		title: "空槽与血迹",
		location: "驿站马厩",
		biome: "road",
		prose: "马厩的门半开。空气里是湿麦秆和铁腥。空出来的那一格地面有一道被拖过的痕迹，盐粒嵌在泥里发亮。灰羽若在，会先蹲下来：血迹不多，像是被迅速止住，又像是有人故意抹过。\n\n厩后有一扇小门通向石阶。下面传来缓慢的拍击——不是浪，是容器。顾三的声音从背后远远飘来：“我说了。潮。",
		suggested: [
			"顺着血迹下石阶",
			"检查空槽与缰绳",
			"回头逼问顾三",
			"隐蔽接近地窖门"
		],
		checks: [
			newCheck("追踪血迹", "survival", 12),
			newCheck("发现地窖门的机关", "investigation", 13),
			newCheck("悄悄打开小门", "sleight", 14)
		],
		npcs: [{
			name: "顾三",
			brief: "跟到门口就停，不肯下阶。"
		}],
		tokens: [...partyTokens(party, [
			[5, 5],
			[6, 6],
			[7, 5]
		]), {
			id: "prop-blood",
			x: 8,
			y: 6,
			kind: "prop",
			name: "血迹",
			glyph: "x",
			tint: "#b54a3c"
		}]
	}, party);
	if (beat === 2) return makeScene({
		index: 2,
		title: "盐窖的栅",
		location: "地窖入口",
		biome: "cellar",
		prose: "石阶只有九级。底部是铁栅，锁是新的，栅后是成排的盐缸，缸沿结着白霜。有人在里面低声数数。数到七就停，像在等一个不存在的第八下。\n\n铁栅可以用蛮力扳开，也可以用盗贼工具或一句恰到好处的谎——顾三把钥匙藏在吧台内侧那只永远擦不完的杯子底下。",
		suggested: [
			"蛮力扳开铁栅",
			"回去找钥匙",
			"对里面的人喊话",
			"准备武器再进"
		],
		checks: [
			newCheck("扳开铁栅", "athletics", 14),
			newCheck("听清里面在数什么", "perception", 13),
			newCheck("威吓里面的人开门", "intimidation", 13)
		],
		npcs: [{
			name: "盐缸后的声音",
			brief: "数到七。停。呼吸很潮。"
		}],
		tokens: [...partyTokens(party, [
			[2, 6],
			[3, 5],
			[4, 6]
		]), {
			id: "mon-shadow",
			x: 11,
			y: 3,
			kind: "monster",
			name: "？",
			glyph: "?",
			tint: "#7a8ea8"
		}]
	}, party);
	if (beat === 3) return makeScene({
		index: 3,
		title: "缸里的潮",
		location: "盐窖",
		biome: "cellar",
		prose: "栅门在身后合上。盐缸之间站着两个人——不是申伯。他们穿着商队的皮褂，袖口却是湿的。更里面，一只缸裂开，从裂缝里站起一个被盐霜覆盖的轮廓：眼睛是空的，嘴里是海。\n\n顾三的“潮”不是天气。是走私者养在缸里的东西，用失踪的马和失踪的客人喂。它朝你们走了一步，盐粒从关节处掉下来。",
		suggested: [
			"拔武器，保护队友",
			"试图谈判（他们也怕那东西）",
			"打翻盐缸阻碍它",
			"寻找申伯"
		],
		checks: [newCheck("打翻盐缸制造掩护", "athletics", 12), newCheck("看穿走私者的胆怯", "insight", 12)],
		npcs: [{
			name: "湿袖走私者",
			brief: "两名。怕那东西比怕你们更甚。"
		}, {
			name: "盐尸",
			brief: "被盐霜覆盖的潮物。关节掉盐。"
		}],
		tokens: [
			...partyTokens(party, [
				[3, 6],
				[4, 7],
				[2, 5]
			]),
			{
				id: "en-sm1",
				x: 9,
				y: 4,
				kind: "monster",
				name: "走私者",
				glyph: "s",
				tint: "#8a7a86"
			},
			{
				id: "en-sm2",
				x: 10,
				y: 6,
				kind: "monster",
				name: "走私者",
				glyph: "s",
				tint: "#8a7a86"
			},
			{
				id: "en-wight",
				x: 12,
				y: 3,
				kind: "monster",
				name: "盐尸",
				glyph: "W",
				tint: "#b8c4c8"
			}
		]
	}, party);
	return makeScene({
		index: 4,
		title: "雾散之后",
		location: "驿道 · 黎明",
		biome: "coast",
		prose: "盐雾在天亮前散了。缸碎在地上，潮物化成一摊发白的水。走私者或逃或倒。楼上的锁自己开了——申伯还活着，只是被灌了盐酒，记不住半夜的事。\n\n顾三把那只杯子扣在桌上，不再擦。他拿出一袋沉甸甸的银：“这是封口费，也是路费。驿站还要开。你们若再来，门会亮着。”\n\n海在远处。路也在。圆桌上的灯芯还没燃尽。",
		suggested: [
			"收下银并上路",
			"逼顾三把地窖填死",
			"把申伯送回商队",
			"在日志里记下今晚"
		],
		checks: [],
		npcs: [{
			name: "顾三",
			brief: "不再擦杯子。愿意付钱，不愿解释全部。"
		}, {
			name: "申伯",
			brief: "活着。记忆像被潮水洗过。"
		}],
		tokens: [...partyTokens(party, [
			[5, 4],
			[6, 5],
			[7, 4]
		]), {
			id: "npc-gu2",
			x: 9,
			y: 4,
			kind: "npc",
			name: "顾三",
			glyph: "G",
			tint: "#c9b07a"
		}]
	}, party);
}
function cellarCombatants(party) {
	return [
		...party.map((p) => ({
			id: p.id,
			name: p.name,
			side: "party",
			hp: p.hp,
			maxHp: p.maxHp,
			ac: p.ac,
			init: 0,
			atkMod: 0,
			dmg: "1d8",
			characterId: p.id
		})),
		{
			id: uid(),
			name: "湿袖走私者",
			side: "enemy",
			hp: 12,
			maxHp: 12,
			ac: 12,
			init: 0,
			atkMod: 3,
			dmg: "1d6+1"
		},
		{
			id: uid(),
			name: "盐尸",
			side: "enemy",
			hp: 22,
			maxHp: 22,
			ac: 13,
			init: 0,
			atkMod: 4,
			dmg: "1d8+2"
		}
	];
}
function matchBeatAdvance(text, beat) {
	const t = text.toLowerCase();
	if (beat === 0) return /马厩|血迹|调查|察觉|楼上|询问|顾三|搜索|打量|跟踪/.test(t);
	if (beat === 1) return /地窖|石阶|下|门|钥匙|追踪|打开|潜/.test(t);
	if (beat === 2) return /扳|栅|进|冲|战斗|武器|谈判|盐缸|喊/.test(t);
	if (beat === 3) return /打|攻击|砍|谈判|打翻|保护|逃|结束|盐尸/.test(t);
	return /上路|银|记下|填|送回|离开/.test(t);
}
function fallbackDmReply(table, actionText) {
	const beat = table.fallbackBeat;
	const advance = matchBeatAdvance(actionText, beat);
	if (beat === 0) return {
		advance,
		prose: advance ? "顾三的杯子停了一下。他没有拦你们去马厩，只是把灯推得更远。帽檐客站起来，又坐下。门外的雾更浓了。" : "顾三含糊地应着，目光却总滑向地板。大厅里的对话像被盐雾吸走。你们可以逼问，也可以去看马厩、上楼、或再仔细打量这个房间。"
	};
	if (beat === 1) return {
		advance,
		prose: advance ? "血迹在石阶上变成细白的盐线。下面有人在数数。顾三终于说：“钥匙在杯子底下。我不敢自己下去。”" : "麦秆湿软，铁腥味不散。空槽的缰绳被人用刀割过。石阶还在那里，等一个决定。"
	};
	if (beat === 2) return {
		advance,
		startCombat: advance,
		prose: advance ? "铁栅尖叫着让开。盐窖的冷气扑面。里面的人看见你们，同时看见那只裂开的缸——有东西从盐里站起来。" : "铁栅纹丝不动。里面的数数停了。你们能感到有人在栅后屏息。"
	};
	if (beat === 3) return {
		advance,
		prose: advance ? "潮物散成一地白水。走私者把刀扔掉。楼上的锁响了一声。天要亮了。" : "盐粒在脚边滚动。那东西每走一步，空气就更咸一分。现在是动手或想别的办法的时候。"
	};
	return {
		advance: false,
		end: true,
		prose: "雾散了。圆桌上的灯还在。这段路被记下，下一程由你们决定要不要再走。"
	};
}
var ctx = null;
function ac() {
	if (typeof window === "undefined") return null;
	if (!ctx) {
		const C = window.AudioContext || window.webkitAudioContext;
		if (!C) return null;
		ctx = new C();
	}
	return ctx;
}
function unlockAudio() {
	const c = ac();
	if (c && c.state === "suspended") c.resume();
}
function tickDice() {
	const c = ac();
	if (!c) return;
	const t = c.currentTime;
	for (let i = 0; i < 3; i++) {
		const o = c.createOscillator();
		const g = c.createGain();
		o.type = "square";
		o.frequency.value = 180 + Math.random() * 220;
		g.gain.setValueAtTime(1e-4, t);
		g.gain.exponentialRampToValueAtTime(.04, t + .01 + i * .04);
		g.gain.exponentialRampToValueAtTime(1e-4, t + .08 + i * .05);
		o.connect(g);
		g.connect(c.destination);
		o.start(t + i * .04);
		o.stop(t + .12 + i * .05);
	}
}
function tickHit() {
	const c = ac();
	if (!c) return;
	const t = c.currentTime;
	const o = c.createOscillator();
	const g = c.createGain();
	o.type = "sawtooth";
	o.frequency.setValueAtTime(90, t);
	o.frequency.exponentialRampToValueAtTime(40, t + .12);
	g.gain.setValueAtTime(.05, t);
	g.gain.exponentialRampToValueAtTime(1e-4, t + .14);
	o.connect(g);
	g.connect(c.destination);
	o.start(t);
	o.stop(t + .15);
}
function rollDie(sides, rng = Math.random) {
	return 1 + Math.floor(rng() * sides);
}
function rollDice(count, sides, rng = Math.random) {
	const rolls = Array.from({ length: Math.max(1, count) }, () => rollDie(sides, rng));
	return {
		rolls,
		total: rolls.reduce((a, b) => a + b, 0)
	};
}
/** 4d6 drop lowest — classic array generation. */
function roll4d6DropLowest(rng = Math.random) {
	const rolls = Array.from({ length: 4 }, () => rollDie(6, rng)).sort((a, b) => a - b);
	const dropped = rolls[0];
	const kept = rolls.slice(1);
	return {
		kept,
		dropped,
		total: kept.reduce((a, b) => a + b, 0)
	};
}
/**
* Parse a compact formula: `1d20`, `2d6+3`, `4d6kh3`, `1d20adv`, `1d20dis`.
*/
function rollFormula(formula, rng = Math.random) {
	const raw = formula.replace(/\s+/g, "").toLowerCase();
	const adv = raw.endsWith("adv");
	const dis = raw.endsWith("dis");
	const body = raw.replace(/adv$|dis$/, "");
	const m = body.match(/^(\d*)d(\d+)(kh\d+|kl\d+)?([+-]\d+)?$/);
	if (!m) {
		const n = Number(body);
		const total = Number.isFinite(n) ? n : rollDie(20, rng);
		return {
			formula,
			rolls: [total],
			modifier: 0,
			total,
			detail: `${total}`
		};
	}
	const count = m[1] ? Number(m[1]) : 1;
	const sides = Number(m[2]);
	const keep = m[3];
	const modifier = m[4] ? Number(m[4]) : 0;
	if (adv || dis) {
		const a = rollDie(sides, rng);
		const b = rollDie(sides, rng);
		const picked = adv ? Math.max(a, b) : Math.min(a, b);
		const total = picked + modifier;
		return {
			formula,
			rolls: [a, b],
			modifier,
			total,
			detail: `${adv ? "优势" : "劣势"} [${a}, ${b}] → ${picked}${modStr(modifier)} = ${total}`
		};
	}
	const { rolls } = rollDice(count, sides, rng);
	let used = rolls.slice();
	if (keep?.startsWith("kh")) {
		const k = Number(keep.slice(2));
		used = [...rolls].sort((a, b) => b - a).slice(0, k);
	} else if (keep?.startsWith("kl")) {
		const k = Number(keep.slice(2));
		used = [...rolls].sort((a, b) => a - b).slice(0, k);
	}
	const total = used.reduce((a, b) => a + b, 0) + modifier;
	return {
		formula,
		rolls,
		modifier,
		total,
		detail: rolls.length === used.length ? `[${rolls.join(", ")}]${modStr(modifier)} = ${total}` : `[${rolls.join(", ")}] 取 ${used.join("+")}${modStr(modifier)} = ${total}`,
		kept: used
	};
}
function modStr(n) {
	if (n === 0) return "";
	return n > 0 ? ` + ${n}` : ` − ${Math.abs(n)}`;
}
function d20(rng = Math.random) {
	return rollDie(20, rng);
}
var ABILITY_LABEL = {
	str: "力量",
	dex: "敏捷",
	con: "体质",
	int: "智力",
	wis: "感知",
	cha: "魅力"
};
var VEIL_LABEL = {
	cool: "沉稳",
	sharp: "锐利",
	tough: "坚韧",
	wild: "狂野",
	charm: "魅影"
};
var ANCESTRY_LABEL = {
	human: "人类",
	elf: "精灵",
	dwarf: "矮人",
	halfling: "半身人",
	dragonborn: "龙裔",
	tiefling: "提夫林"
};
var CLASS_LABEL = {
	fighter: "战士",
	ranger: "游侠",
	wizard: "法师",
	cleric: "牧师",
	rogue: "游荡者",
	bard: "吟游诗人"
};
var EDITION_META = {
	ember5e: {
		name: "余烬 5e",
		blurb: "d20 + 六维属性。熟练、护甲、生命值与死亡豁免，贴近经典桌上规则。",
		dice: "d20"
	},
	veil: {
		name: "帷幕",
		blurb: "2d6 + 态度骰。10+ 全胜，7–9 各有代价，6− 由 DM 出手。偏叙事。",
		dice: "2d6"
	},
	ashlight: {
		name: "灰灯",
		blurb: "三围（体魄 / 心智 / 意志）对难度检定。规则薄，开桌快。",
		dice: "d20"
	}
};
var SKILLS = [
	{
		id: "athletics",
		label: "运动",
		ability: "str"
	},
	{
		id: "acrobatics",
		label: "杂技",
		ability: "dex"
	},
	{
		id: "sleight",
		label: "巧手",
		ability: "dex"
	},
	{
		id: "stealth",
		label: "隐匿",
		ability: "dex"
	},
	{
		id: "arcana",
		label: "奥秘",
		ability: "int"
	},
	{
		id: "history",
		label: "历史",
		ability: "int"
	},
	{
		id: "investigation",
		label: "调查",
		ability: "int"
	},
	{
		id: "nature",
		label: "自然",
		ability: "int"
	},
	{
		id: "religion",
		label: "宗教",
		ability: "int"
	},
	{
		id: "animal",
		label: "驯兽",
		ability: "wis"
	},
	{
		id: "insight",
		label: "洞悉",
		ability: "wis"
	},
	{
		id: "medicine",
		label: "医药",
		ability: "wis"
	},
	{
		id: "perception",
		label: "察觉",
		ability: "wis"
	},
	{
		id: "survival",
		label: "生存",
		ability: "wis"
	},
	{
		id: "deception",
		label: "欺瞒",
		ability: "cha"
	},
	{
		id: "intimidation",
		label: "威吓",
		ability: "cha"
	},
	{
		id: "performance",
		label: "表演",
		ability: "cha"
	},
	{
		id: "persuasion",
		label: "说服",
		ability: "cha"
	}
];
var DEFAULT_MODS = {
	lethality: 3,
	magic: 3,
	difficulty: 3,
	combatFreq: 3,
	agentVoice: 3
};
function abilityMod(score) {
	return Math.floor((score - 10) / 2);
}
function modLabel(n) {
	return n >= 0 ? `+${n}` : `${n}`;
}
function proficiencyForLevel(level) {
	return 2 + Math.floor((Math.max(1, level) - 1) / 4);
}
var CLASS_HIT = {
	fighter: 10,
	ranger: 10,
	wizard: 6,
	cleric: 8,
	rogue: 8,
	bard: 8
};
var CLASS_SAVES = {
	fighter: ["str", "con"],
	ranger: ["str", "dex"],
	wizard: ["int", "wis"],
	cleric: ["wis", "cha"],
	rogue: ["dex", "int"],
	bard: ["dex", "cha"]
};
var CLASS_SKILLS = {
	fighter: [
		"athletics",
		"intimidation",
		"perception",
		"survival"
	],
	ranger: [
		"nature",
		"perception",
		"stealth",
		"survival",
		"animal"
	],
	wizard: [
		"arcana",
		"history",
		"investigation",
		"religion"
	],
	cleric: [
		"insight",
		"medicine",
		"religion",
		"persuasion"
	],
	rogue: [
		"acrobatics",
		"deception",
		"sleight",
		"stealth",
		"perception"
	],
	bard: [
		"persuasion",
		"performance",
		"deception",
		"insight",
		"history"
	]
};
var CLASS_WEAPON = {
	fighter: {
		atk: "str",
		dmg: "1d8",
		name: "长剑"
	},
	ranger: {
		atk: "dex",
		dmg: "1d8",
		name: "长弓"
	},
	wizard: {
		atk: "int",
		dmg: "1d10",
		name: "火焰射线"
	},
	cleric: {
		atk: "wis",
		dmg: "1d8",
		name: "神圣打击"
	},
	rogue: {
		atk: "dex",
		dmg: "1d6",
		name: "短剑"
	},
	bard: {
		atk: "cha",
		dmg: "1d8",
		name: "嘲讽韵律"
	}
};
function maxHpFor(c, lethality = 3) {
	const die = CLASS_HIT[c.classId];
	const con = abilityMod(c.abilities.con);
	const avg = Math.floor(die / 2) + 1;
	const base = die + con + (c.level - 1) * (avg + con);
	const factor = [
		1.4,
		1.2,
		1,
		.8,
		.6
	][Math.max(0, Math.min(4, lethality - 1))];
	return Math.max(4, Math.round(base * factor));
}
function armorClassFor(c) {
	const dex = abilityMod(c.abilities.dex);
	if (c.classId === "wizard" || c.classId === "bard") return 10 + dex;
	if (c.classId === "rogue" || c.classId === "ranger") return 12 + Math.min(2, dex) + (dex > 2 ? 1 : 0);
	if (c.classId === "cleric") return 14 + Math.min(2, dex);
	return 16;
}
function skillMod(c, skillId, edition) {
	const skill = SKILLS.find((s) => s.id === skillId);
	const pb = c.proficiency;
	if (edition === "veil") {
		const key = {
			athletics: "tough",
			acrobatics: "wild",
			sleight: "sharp",
			stealth: "cool",
			arcana: "sharp",
			history: "sharp",
			investigation: "sharp",
			nature: "wild",
			religion: "sharp",
			animal: "wild",
			insight: "cool",
			medicine: "sharp",
			perception: "cool",
			survival: "wild",
			deception: "charm",
			intimidation: "tough",
			performance: "charm",
			persuasion: "charm"
		}[skillId] ?? "cool";
		return c.veil[key] ?? 0;
	}
	if (edition === "ashlight") {
		const group = {
			str: abilityMod(Math.round((c.abilities.str + c.abilities.con) / 2)),
			dex: abilityMod(c.abilities.dex),
			con: abilityMod(c.abilities.con),
			int: abilityMod(c.abilities.int),
			wis: abilityMod(c.abilities.wis),
			cha: abilityMod(c.abilities.cha)
		};
		const ab = skill?.ability ?? "wis";
		const trained = c.skillProfs.includes(skillId) ? 2 : 0;
		return group[ab] + trained;
	}
	const ab = skill?.ability ?? "wis";
	const trained = c.skillProfs.includes(skillId) ? pb : 0;
	return abilityMod(c.abilities[ab]) + trained;
}
function resolveCheck(c, skillId, dc, edition, opts) {
	const bonus = skillMod(c, skillId, edition);
	if (edition === "veil") {
		const r = rollFormula(`2d6${bonus >= 0 ? "+" : ""}${bonus}`);
		let degree = "fail";
		if (r.total >= 12) degree = "crit";
		else if (r.total >= 10) degree = "success";
		else if (r.total >= 7) degree = "mixed";
		else if (r.total <= 2) degree = "fumble";
		return {
			total: r.total,
			dc: 10,
			success: r.total >= 7,
			degree,
			detail: r.detail,
			formula: r.formula
		};
	}
	const r = rollFormula(`1d20${opts?.adv ? "adv" : opts?.dis ? "dis" : ""}${bonus >= 0 ? "+" : ""}${bonus}`);
	const nat = r.rolls[0] ?? 10;
	let degree = r.total >= dc ? "success" : "fail";
	if (nat === 20) degree = "crit";
	if (nat === 1) degree = "fumble";
	return {
		total: r.total,
		dc,
		success: degree === "crit" || degree !== "fumble" && r.total >= dc,
		degree,
		detail: r.detail,
		formula: r.formula
	};
}
function attackBonus(c, edition) {
	const w = CLASS_WEAPON[c.classId];
	if (edition === "veil") return c.veil.sharp;
	if (edition === "ashlight") return abilityMod(c.abilities[w.atk]) + 2;
	return abilityMod(c.abilities[w.atk]) + c.proficiency;
}
function resolveAttack(c, ac, edition) {
	const bonus = attackBonus(c, edition);
	if (edition === "veil") {
		const r = rollFormula(`2d6${bonus >= 0 ? "+" : ""}${bonus}`);
		const hit = r.total >= 7;
		const dmg = hit ? rollFormula(CLASS_WEAPON[c.classId].dmg) : null;
		return {
			hit,
			crit: r.total >= 12,
			roll: r,
			damage: dmg
		};
	}
	const r = rollFormula(`1d20${bonus >= 0 ? "+" : ""}${bonus}`);
	const nat = r.rolls[0] ?? 10;
	const crit = nat === 20;
	const hit = crit || nat !== 1 && r.total >= ac;
	const dmg = hit ? rollFormula(crit ? CLASS_WEAPON[c.classId].dmg.replace("1d", "2d") : CLASS_WEAPON[c.classId].dmg) : null;
	if (dmg) {
		const extra = abilityMod(c.abilities[CLASS_WEAPON[c.classId].atk]);
		dmg.total += Math.max(0, extra);
		dmg.detail += extra ? ` + ${extra} = ${dmg.total}` : "";
	}
	return {
		hit,
		crit,
		roll: r,
		damage: dmg
	};
}
function hpTint(hp, max) {
	const r = max <= 0 ? 0 : hp / max;
	if (r <= 0) return "text-danger";
	if (r <= .3) return "text-danger";
	if (r <= .6) return "text-warn";
	return "text-ok";
}
var STANDARD = [
	15,
	14,
	13,
	12,
	10,
	8
];
var EMPTY_MIND = {
	templateId: "",
	title: "",
	voice: "",
	tactics: "",
	drive: "",
	tell: "",
	boundary: "不代替人类玩家做选择。不叙述世界结果。不打破第四墙。"
};
var CLASS_PRI = {
	fighter: [
		"str",
		"con",
		"dex",
		"wis",
		"cha",
		"int"
	],
	ranger: [
		"dex",
		"wis",
		"con",
		"str",
		"int",
		"cha"
	],
	wizard: [
		"int",
		"dex",
		"con",
		"wis",
		"cha",
		"str"
	],
	cleric: [
		"wis",
		"con",
		"cha",
		"str",
		"dex",
		"int"
	],
	rogue: [
		"dex",
		"int",
		"cha",
		"con",
		"wis",
		"str"
	],
	bard: [
		"cha",
		"dex",
		"int",
		"con",
		"wis",
		"str"
	]
};
var ANCESTRY_BONUS = {
	human: {
		str: 1,
		dex: 1,
		con: 1,
		int: 1,
		wis: 1,
		cha: 1
	},
	elf: {
		dex: 2,
		int: 1
	},
	dwarf: {
		con: 2,
		str: 1
	},
	halfling: {
		dex: 2,
		cha: 1
	},
	dragonborn: {
		str: 2,
		cha: 1
	},
	tiefling: {
		cha: 2,
		int: 1
	}
};
var CLASS_GLYPH = {
	fighter: "@",
	ranger: ">",
	wizard: "*",
	cleric: "+",
	rogue: "&",
	bard: "~"
};
var CLASS_TINT = {
	fighter: "#c4b8a4",
	ranger: "#8aa07a",
	wizard: "#7a8ea8",
	cleric: "#c9b07a",
	rogue: "#8a7a86",
	bard: "#b48a7a"
};
var CLASS_FEATURES = {
	fighter: [
		"战斗风格：防御",
		"第二次攻击（长休后恢复一次）",
		"回气"
	],
	ranger: [
		"宿敌：野兽与游荡者",
		"天生探索者",
		"猎人印记"
	],
	wizard: [
		"奥术回复",
		"法术书",
		"法术位 2 / 1"
	],
	cleric: [
		"引导神力：驱散",
		"领域法术",
		"疗伤术"
	],
	rogue: [
		"偷袭 1d6",
		"灵巧动作",
		"盗贼行话"
	],
	bard: [
		"激励之语 1d6",
		"戏法",
		"法术位 2"
	]
};
var CLASS_SPELLS = {
	fighter: [],
	ranger: ["猎人印记"],
	wizard: [
		"魔法飞弹",
		"护盾术",
		"侦测魔法",
		"睡眠术"
	],
	cleric: [
		"疗伤术",
		"祝福术",
		"神圣火焰",
		"光亮术"
	],
	rogue: [],
	bard: [
		"魅惑人类",
		"治愈真言",
		"恶言相向"
	]
};
var CLASS_GEAR = {
	fighter: [
		"长剑",
		"盾",
		"链甲",
		"旅行口粮",
		"火绒盒",
		"10 gp"
	],
	ranger: [
		"长弓",
		"20 支箭",
		"短剑",
		"皮甲",
		"捕兽夹",
		"12 gp"
	],
	wizard: [
		"法杖",
		"法术书",
		"墨水与笔",
		"袍",
		"成分袋",
		"8 gp"
	],
	cleric: [
		"钉头锤",
		"盾",
		"圣徽",
		"鳞甲",
		"治疗包",
		"15 gp"
	],
	rogue: [
		"短剑",
		"短弓",
		"盗贼工具",
		"皮甲",
		"撬棍",
		"18 gp"
	],
	bard: [
		"刺剑",
		"鲁特琴",
		"皮甲",
		"戏服",
		"墨水",
		"14 gp"
	]
};
var NAMES = {
	human: [
		"顾衡",
		"沈岚",
		"乔麦",
		"林朔",
		"韩迟"
	],
	elf: [
		"灰羽",
		"银叶",
		"暮弦",
		"白荆",
		"夜河"
	],
	dwarf: [
		"铁荞",
		"石担",
		"炉灰",
		"盐须",
		"岩盏"
	],
	halfling: [
		"豆灯",
		"麦芽",
		"软靴",
		"篱笆",
		"茶匙"
	],
	dragonborn: [
		"赤鳞",
		"霜喉",
		"烬牙",
		"铜脊",
		"雾息"
	],
	tiefling: [
		"盐灯",
		"炭瞳",
		"绛声",
		"残烛",
		"夜誓"
	]
};
function emptyScores() {
	return {
		str: 10,
		dex: 10,
		con: 10,
		int: 10,
		wis: 10,
		cha: 10
	};
}
function assignArray(cls, values = STANDARD) {
	const scores = emptyScores();
	CLASS_PRI[cls].forEach((ab, i) => {
		scores[ab] = values[i] ?? 10;
	});
	return scores;
}
function applyAncestry(scores, ancestry) {
	const next = { ...scores };
	const b = ANCESTRY_BONUS[ancestry];
	Object.keys(b).forEach((k) => {
		next[k] = (next[k] ?? 10) + (b[k] ?? 0);
	});
	return next;
}
function rollScores(cls) {
	return assignArray(cls, Array.from({ length: 6 }, () => roll4d6DropLowest().total).sort((a, b) => b - a));
}
function veilFromAbilities(a) {
	const clamp = (n) => Math.max(-1, Math.min(2, n));
	const m = (n) => Math.floor((n - 10) / 2);
	return {
		cool: clamp(m(a.wis)),
		sharp: clamp(m(a.int)),
		tough: clamp(m(a.con)),
		wild: clamp(m(a.dex)),
		charm: clamp(m(a.cha))
	};
}
function deriveCombat(c, lethality = 3) {
	const hp = maxHpFor(c, lethality);
	return {
		hp,
		maxHp: hp,
		ac: armorClassFor(c),
		speed: 30,
		proficiency: proficiencyForLevel(c.level)
	};
}
function makeCharacter(opts) {
	const classId = opts.classId ?? "fighter";
	const ancestry = opts.ancestry ?? "human";
	const level = opts.level ?? 1;
	const abilities = applyAncestry(opts.method === "roll" ? rollScores(classId) : assignArray(classId), ancestry);
	const derived = deriveCombat({
		classId,
		level,
		abilities
	}, opts.lethality ?? 3);
	const name = opts.name ?? NAMES[ancestry][Math.floor(Math.random() * NAMES[ancestry].length)] ?? "无名";
	return {
		id: uid(),
		controller: opts.controller,
		playerLabel: opts.playerLabel,
		name,
		ancestry,
		classId,
		level,
		background: defaultBackground(classId),
		appearance: defaultAppearance(ancestry, classId),
		personality: defaultPersonality(classId),
		ideal: defaultIdeal(classId),
		bond: "小队是我此刻唯一的火。",
		flaw: defaultFlaw(classId),
		backstory: defaultBackstory(name, ancestry, classId),
		abilities,
		veil: veilFromAbilities(abilities),
		...derived,
		skillProfs: CLASS_SKILLS[classId].slice(0, 4),
		saveProfs: CLASS_SAVES[classId],
		inventory: CLASS_GEAR[classId],
		features: CLASS_FEATURES[classId],
		spells: CLASS_SPELLS[classId],
		conditions: [],
		deathSaves: {
			success: 0,
			fail: 0
		},
		inspiration: false,
		glyph: CLASS_GLYPH[classId],
		tint: CLASS_TINT[classId],
		agentMind: { ...EMPTY_MIND }
	};
}
function defaultBackground(cls) {
	return {
		fighter: "士兵",
		ranger: "流浪者",
		wizard: "学者",
		cleric: "侍僧",
		rogue: "罪犯",
		bard: "艺人"
	}[cls];
}
function defaultAppearance(a, cls) {
	return `一名${ancestryWord(a)}${classWord(cls)}，风尘未洗，衣襟上有灯油与盐的气味。`;
}
function ancestryWord(a) {
	return {
		human: "人类",
		elf: "精灵",
		dwarf: "矮人",
		halfling: "半身人",
		dragonborn: "龙裔",
		tiefling: "提夫林"
	}[a];
}
function classWord(c) {
	return {
		fighter: "战士",
		ranger: "游侠",
		wizard: "法师",
		cleric: "牧师",
		rogue: "游荡者",
		bard: "诗人"
	}[c];
}
function defaultPersonality(cls) {
	return {
		fighter: "话少，先看门，再看人。",
		ranger: "习惯站在光的边缘。",
		wizard: "把世界当成一本未读完的书。",
		cleric: "先问伤势，再问名字。",
		rogue: "笑容比刀快半拍。",
		bard: "总要给沉默找一个韵脚。"
	}[cls];
}
function defaultIdeal(cls) {
	return {
		fighter: "有人必须挡在前面。",
		ranger: "路比城更诚实。",
		wizard: "未知值得付代价。",
		cleric: "光不是口号，是手艺。",
		rogue: "活着比体面重要。",
		bard: "故事必须被记住。"
	}[cls];
}
function defaultFlaw(cls) {
	return {
		fighter: "把所有问题都当成可以砍开的结。",
		ranger: "不信任关着的门。",
		wizard: "好奇会盖过危险。",
		cleric: "难以放过需要被拯救的人。",
		rogue: "口袋比承诺更忠实。",
		bard: "忍不住把秘密说成段子。"
	}[cls];
}
function defaultBackstory(name, a, cls) {
	return `${name}离开原乡已有一季。作为${ancestryWord(a)}${classWord(cls)}，ta 随身只带够今晚投宿的钱，以及一张还没写完的角色卡。`;
}
function recomputeDerived(c, lethality = 3) {
	const d = deriveCombat(c, lethality);
	const ratio = c.maxHp > 0 ? c.hp / c.maxHp : 1;
	return {
		...c,
		...d,
		hp: Math.max(0, Math.round(d.maxHp * ratio)),
		veil: veilFromAbilities(c.abilities),
		glyph: CLASS_GLYPH[c.classId],
		tint: CLASS_TINT[c.classId],
		saveProfs: CLASS_SAVES[c.classId],
		agentMind: {
			...EMPTY_MIND,
			...c.agentMind
		}
	};
}
function quickParty() {
	return [
		makeCharacter({
			controller: "human",
			playerLabel: "你",
			name: "乔麦",
			ancestry: "human",
			classId: "fighter"
		}),
		makeCharacter({
			controller: "agent",
			playerLabel: "智体",
			name: "灰羽",
			ancestry: "elf",
			classId: "ranger"
		}),
		makeCharacter({
			controller: "agent",
			playerLabel: "智体",
			name: "盐灯",
			ancestry: "tiefling",
			classId: "wizard"
		})
	];
}
var ANCESTRY_LIST = [
	"human",
	"elf",
	"dwarf",
	"halfling",
	"dragonborn",
	"tiefling"
];
var CLASS_LIST = [
	"fighter",
	"ranger",
	"wizard",
	"cleric",
	"rogue",
	"bard"
];
var PARTY_TEMPLATES = [
	{
		id: "huiyu",
		title: "边缘守望",
		blurb: "先看光到不了的地方，再决定是否走进去。",
		name: "灰羽",
		ancestry: "elf",
		classId: "ranger",
		background: "流浪者",
		appearance: "灰褐斗篷，耳尖被雾浸得发冷。弓比话更先离身。",
		personality: "习惯站在灯的外侧。问话很短，先报方位。",
		ideal: "路比城更诚实。",
		bond: "小队是我此刻唯一的火。",
		flaw: "不信任关着的门。",
		backstory: "灰羽跟着盐雾驿道走了一季，习惯把脚印当成比人更可靠的证词。",
		mind: {
			title: "边缘守望",
			voice: "短句。先报方位与气味，少抒情。",
			tactics: "先侦察、追踪、听门。不冲第一排。发现危险会伸手拦住别人。",
			drive: "把小队带出雾，而不是把雾解释清楚。",
			tell: "总站在灯照不到的一侧。",
			boundary: "不替人类决定进哪扇门。只陈述自己看见的一线，不描写整间屋子。"
		}
	},
	{
		id: "yandeng",
		title: "冷火好奇",
		blurb: "把世界当未读完的书，但会先问代价。",
		name: "盐灯",
		ancestry: "tiefling",
		classId: "wizard",
		background: "学者",
		appearance: "角上结着细盐。袍摆有灯油印。指节常白。",
		personality: "平静，带一点讥诮。爱叫出物件的名字。",
		ideal: "未知值得付代价。",
		bond: "法术书比旅店更像家。",
		flaw: "好奇会盖过危险。",
		backstory: "盐灯沿驿道收集潮与灯的残句，相信每一种异常都有可被写下的结构。",
		mind: {
			title: "冷火好奇",
			voice: "平静、带讥诮。用物件名，少用形容词。",
			tactics: "先辨认符号、盐、油垢。战斗优先护盾与控场，不浪掷法术位。",
			drive: "弄清“潮”是什么，并留下一条能被复查的记录。",
			tell: "说话时搓拇指上的盐晶。",
			boundary: "不施放未写在法术栏里的效果。不替 DM 解释魔法原理。"
		}
	},
	{
		id: "tieqiao",
		title: "伤口优先",
		blurb: "先问伤势，再问名字。",
		name: "铁荞",
		ancestry: "dwarf",
		classId: "cleric",
		background: "侍僧",
		appearance: "甲片磨亮，圣徽缠着一圈用旧的绷带。须里有炉灰。",
		personality: "低、慢，像在清点库存。",
		ideal: "光不是口号，是手艺。",
		bond: "谁还站着，谁就是教区。",
		flaw: "难以放过需要被拯救的人。",
		backstory: "铁荞离开炉窑是因为有人在路上死于可被止住的血。ta 从此先看伤口。",
		mind: {
			title: "伤口优先",
			voice: "低、慢。句子像清单。",
			tactics: "把位置让给受伤的人。开战先掩护，不追逃。治疗先于惩戒。",
			drive: "今晚没有人留在雾里。",
			tell: "检查别人之前先搓热自己的手。",
			boundary: "不强迫他人接受治疗。不审判他人的过去。"
		}
	},
	{
		id: "ruanxue",
		title: "门后先听",
		blurb: "笑容比刀快半拍，手比笑容更早。",
		name: "软靴",
		ancestry: "halfling",
		classId: "rogue",
		background: "罪犯",
		appearance: "鞋底薄，口袋多。笑容只开一半。",
		personality: "轻，像怕惊动锁。爱用半句话。",
		ideal: "活着比体面重要。",
		bond: "钥匙比誓言好保管。",
		flaw: "口袋比承诺更忠实。",
		backstory: "软靴在三家驿站被赶走，不是因为偷，是因为总比老板更早发现地窖有门。",
		mind: {
			title: "门后先听",
			voice: "轻、半句。不把计划说完整。",
			tactics: "先听门、看锁、摸口袋。不主动开打。侧翼、掩护、开锁。",
			drive: "拿到能换路费的东西，并让队伍活着离开。",
			tell: "走路无声，停步时鞋底才响一下。",
			boundary: "不偷队友。不拆人类玩家正在谈的话。"
		}
	},
	{
		id: "muxian",
		title: "记下这一夜",
		blurb: "给沉默找一个韵脚，但不把秘密唱出去。",
		name: "暮弦",
		ancestry: "elf",
		classId: "bard",
		background: "艺人",
		appearance: "琴囊油亮，袖口有墨。眼睛像在给不在场的人写信。",
		personality: "要把空气填上一点声音，又怕填错。",
		ideal: "故事必须被记住。",
		bond: "今晚的人值得一页。",
		flaw: "忍不住把秘密说成段子。",
		backstory: "暮弦沿驿道收集未写完的歌。盐雾这一夜，ta 决定不再省略名字。",
		mind: {
			title: "记下这一夜",
			voice: "像写信。偶尔一个韵脚，不堆辞藻。",
			tactics: "用说服、洞悉、表演开路。战斗里鼓舞与扰乱，不硬钢。",
			drive: "把今晚写成能被复查的一页。",
			tell: "每到一个地方先数窗户。",
			boundary: "不泄露队友私下说的话。不把别人的悲剧写成笑话。"
		}
	},
	{
		id: "chilin",
		title: "挡在前面",
		blurb: "话少。门比人先被挡住。",
		name: "赤鳞",
		ancestry: "dragonborn",
		classId: "fighter",
		background: "士兵",
		appearance: "鳞色像未熄的炉。盾沿有敲过门槛的痕。",
		personality: "一字一顿。问题只问一次。",
		ideal: "有人必须挡在前面。",
		bond: "盾是给会说话的人用的。",
		flaw: "把所有问题都当成可以砍开的结。",
		backstory: "赤鳞离开编制以后，只答应做一件事：让会说话的人把话说完。",
		mind: {
			title: "挡在前面",
			voice: "一字一顿。不解释动机。",
			tactics: "站门口、挡箭、点名最危险的那个打。不追逃兵。",
			drive: "让会说话的人活着把话说完。",
			tell: "进门先用盾沿敲门槛。",
			boundary: "不替他人谈判。不嘲笑逃跑。"
		}
	},
	{
		id: "hanchi",
		title: "痕迹说话",
		blurb: "人会撒谎，泥不会。",
		name: "韩迟",
		ancestry: "human",
		classId: "ranger",
		background: "流浪者",
		appearance: "指甲缝里有泥。斗篷下摆湿过太多次，干成一圈白。",
		personality: "像在向地面确认。很少看人的眼睛。",
		ideal: "痕迹比口供干净。",
		bond: "丢了的东西都该被找回来。",
		flaw: "对关着的叙述不耐烦。",
		backstory: "韩迟替商队找过三匹失踪的马，只找回两匹。第三匹的蹄印在盐雾里断了。",
		mind: {
			title: "痕迹说话",
			voice: "像对地面说话。具体，不渲染。",
			tactics: "蹲下来看。用生存、察觉、调查。不用嗓门。",
			drive: "找出谁把马牵走。",
			tell: "报告前先在泥里划一道，确认风向。",
			boundary: "不编造没看见的脚印。不打断正在搜索的人类。"
		}
	},
	{
		id: "jiangsheng",
		title: "笑着收东西",
		blurb: "把紧张拆成可以带走的小件。",
		name: "绛声",
		ancestry: "tiefling",
		classId: "rogue",
		background: "艺人",
		appearance: "戒指转个不停。笑容懒，眼睛不懒。",
		personality: "甜、带刺。把危险说成小事。",
		ideal: "把柄比刀安全。",
		bond: "钥匙应该在会笑的人手里。",
		flaw: "把紧张当成可以拆的戏。",
		backstory: "绛声在码头靠听门缝过日子，盐雾驿站的锁声对 ta 来说像乡音。",
		mind: {
			title: "笑着收东西",
			voice: "懒、甜、带刺。一句里只放一个刺。",
			tactics: "欺瞒、巧手、挑拨。真打起来就侧翼消失。",
			drive: "弄到钥匙或把柄，而不是荣誉。",
			tell: "说话时把戒指转来转去。",
			boundary: "不诱使人类做出格到出戏的事。不嘲笑他人的信仰。"
		}
	}
];
var DM_TEMPLATES = [
	{
		id: "wick",
		name: "灯芯",
		title: "克制感官",
		blurb: "少解释，多给可动手的细节。",
		persona: "少解释，多给可互动的细节。不抢玩家的戏。",
		voice: "感官、克制、现在时。每段只留一个可被抓住的物件。",
		pacing: "每幕只推进一个可动手的变化。",
		boundary: "不代玩家掷骰。不替角色宣布感受。不写系统提示腔。"
	},
	{
		id: "brine",
		name: "盐吏",
		title: "潮湿悬疑",
		blurb: "秘密放在杯子、缰绳和潮声里。",
		persona: "把秘密藏在杯子、缰绳、潮声里。悬疑优先于战斗。",
		voice: "潮湿、具体、留白。用物件代替独白。",
		pacing: "先给线索，再给门，最后才给刀。",
		boundary: "不一次倒出全部真相。不让 NPC 长篇讲话。"
	},
	{
		id: "hearth",
		name: "炉证",
		title: "硬后果",
		blurb: "问意图，要检定，立刻给价钱。",
		persona: "骰子说了算。失败有牙齿，成功也有价钱。",
		voice: "短、硬、像记账。",
		pacing: "问意图 → 检定 → 立刻给后果。不拖第二问。",
		boundary: "不改已经掷出的骰。不因为剧情可爱而免伤。"
	},
	{
		id: "nightriver",
		name: "夜河",
		title: "锋利童话",
		blurb: "规则像儿歌，代价像潮水。",
		persona: "锋利的童话。选择会留下痕迹，世界不求饶。",
		voice: "像讲给醒着的人听。句子干净，意象具体。",
		pacing: "三拍：看见、选择、变得不一样。",
		boundary: "不写成打脸逆袭。不让世界围着玩家转圈求饶。"
	}
];
var CLASS_DEFAULT_TEMPLATE = {
	ranger: "huiyu",
	wizard: "yandeng",
	cleric: "tieqiao",
	rogue: "ruanxue",
	bard: "muxian",
	fighter: "chilin"
};
function partyTemplate(id) {
	return PARTY_TEMPLATES.find((t) => t.id === id);
}
function dmTemplate(id) {
	return DM_TEMPLATES.find((t) => t.id === id);
}
function applyPartyTemplate(c, templateId, lethality = 3) {
	const t = partyTemplate(templateId);
	if (!t) return {
		...c,
		agentMind: {
			...EMPTY_MIND,
			...c.agentMind
		}
	};
	return recomputeDerived({
		...makeCharacter({
			controller: c.controller,
			playerLabel: c.playerLabel,
			name: t.name,
			ancestry: t.ancestry,
			classId: t.classId,
			lethality
		}),
		id: c.id,
		controller: c.controller,
		playerLabel: c.playerLabel,
		appearance: t.appearance,
		personality: t.personality,
		ideal: t.ideal,
		bond: t.bond,
		flaw: t.flaw,
		backstory: t.backstory,
		background: t.background,
		agentMind: {
			...t.mind,
			templateId: t.id
		}
	}, lethality);
}
function applyDmTemplate(current, templateId) {
	const t = dmTemplate(templateId);
	if (!t) return current;
	return {
		...current,
		name: t.name,
		persona: t.persona,
		templateId: t.id,
		title: t.title,
		voice: t.voice,
		pacing: t.pacing,
		boundary: t.boundary
	};
}
/** Overlay acting instructions without becoming the named template character. */
function applyPartyMind(c, templateId, lethality = 3) {
	const t = partyTemplate(templateId);
	if (!t) return {
		...c,
		agentMind: {
			...EMPTY_MIND,
			...c.agentMind
		}
	};
	return recomputeDerived({
		...c,
		personality: t.personality,
		ideal: t.ideal,
		bond: t.bond,
		flaw: t.flaw,
		agentMind: {
			...t.mind,
			templateId: t.id
		}
	}, lethality);
}
function classMindSkeleton(classId) {
	const t = partyTemplate(CLASS_DEFAULT_TEMPLATE[classId]);
	if (!t) return { ...EMPTY_MIND };
	return {
		...t.mind,
		templateId: ""
	};
}
function hydrateCharacter(c) {
	const named = !c.agentMind?.templateId && c.controller === "agent" ? PARTY_TEMPLATES.find((t) => t.name === c.name) : void 0;
	if (named) return applyPartyTemplate({
		...c,
		agentMind: EMPTY_MIND
	}, named.id);
	return {
		...c,
		agentMind: {
			...EMPTY_MIND,
			...c.agentMind
		}
	};
}
function hydrateDm(dm) {
	if (!dm.templateId) {
		const named = DM_TEMPLATES.find((t) => t.name === dm.name);
		if (named) return applyDmTemplate(dm, named.id);
	}
	return {
		...dm,
		templateId: dm.templateId ?? "",
		title: dm.title ?? "",
		voice: dm.voice ?? "",
		pacing: dm.pacing ?? "",
		boundary: dm.boundary || "不代玩家掷骰。不替角色宣布感受。"
	};
}
function startCombat(party, enemies, edition) {
	const pcs = party.filter((p) => p.hp > 0).map((p) => ({
		id: p.id,
		name: p.name,
		side: "party",
		hp: p.hp,
		maxHp: p.maxHp,
		ac: p.ac,
		init: d20() + Math.floor((p.abilities.dex - 10) / 2),
		atkMod: attackBonus(p, edition),
		dmg: CLASS_WEAPON[p.classId].dmg,
		characterId: p.id
	}));
	const foes = enemies.map((e) => ({
		...e,
		init: e.init || d20() + 1
	}));
	const combatants = [...pcs, ...foes];
	return {
		active: true,
		round: 1,
		order: [...combatants].sort((a, b) => b.init - a.init).map((c) => c.id),
		whose: 0,
		combatants
	};
}
function currentCombatant(c) {
	const id = c.order[c.whose];
	return c.combatants.find((x) => x.id === id);
}
function living(c, side) {
	return c.combatants.filter((x) => x.side === side && x.hp > 0);
}
function combatOver(c) {
	if (living(c, "party").length === 0) return "enemy";
	if (living(c, "enemy").length === 0) return "party";
	return null;
}
function advanceTurn(c) {
	const next = {
		...c,
		combatants: c.combatants.map((x) => ({ ...x }))
	};
	let i = next.whose;
	for (let n = 0; n < next.order.length; n++) {
		i = (i + 1) % next.order.length;
		const id = next.order[i];
		const who = next.combatants.find((x) => x.id === id);
		if (who && who.hp > 0) {
			next.whose = i;
			if (i === 0) next.round += 1;
			return next;
		}
	}
	return next;
}
function performAttack(combat, attackerId, targetId, actor, edition = "ember5e") {
	const next = {
		...combat,
		combatants: combat.combatants.map((x) => ({ ...x }))
	};
	const attacker = next.combatants.find((x) => x.id === attackerId);
	const target = next.combatants.find((x) => x.id === targetId);
	let hit = false;
	let crit = false;
	let damage = 0;
	let text = "";
	if (actor) {
		const r = resolveAttack(actor, target.ac, edition);
		hit = r.hit;
		crit = r.crit;
		damage = r.damage?.total ?? 0;
		text = hit ? `${attacker.name} 击中 ${target.name}${crit ? "（重击）" : ""}，${r.roll.detail} vs AC ${target.ac}，造成 ${damage} 点伤害。` : `${attacker.name} 未击中 ${target.name}。${r.roll.detail} vs AC ${target.ac}。`;
	} else {
		const roll = rollFormula(`1d20${attacker.atkMod >= 0 ? "+" : ""}${attacker.atkMod}`);
		const nat = roll.rolls[0] ?? 10;
		crit = nat === 20;
		hit = crit || nat !== 1 && roll.total >= target.ac;
		if (hit) {
			damage = rollFormula(crit ? attacker.dmg.replace("1d", "2d") : attacker.dmg).total;
			text = `${attacker.name} 击中 ${target.name}${crit ? "（重击）" : ""}，${roll.detail} vs AC ${target.ac}，造成 ${damage} 点伤害。`;
		} else text = `${attacker.name} 未击中 ${target.name}。${roll.detail} vs AC ${target.ac}。`;
	}
	if (hit) {
		target.hp = Math.max(0, target.hp - damage);
		if (target.hp === 0) text += ` ${target.name} 倒下。`;
	}
	return {
		attacker,
		target,
		hit,
		crit,
		damage,
		text,
		combat: next
	};
}
function pickEnemyTarget(combat) {
	return living(combat, "enemy").sort((a, b) => a.hp - b.hp)[0];
}
function pickPartyTarget(combat) {
	const pcs = living(combat, "party");
	return pcs[Math.floor(Math.random() * pcs.length)];
}
function makeEnemy(name, hp, ac, atk, dmg) {
	return {
		id: uid(),
		name,
		side: "enemy",
		hp,
		maxHp: hp,
		ac,
		init: 0,
		atkMod: atk,
		dmg
	};
}
var defaultDraft = () => ({
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
		{
			controller: "human",
			playerLabel: "你",
			classId: "fighter",
			ancestry: "human",
			templateId: ""
		},
		{
			controller: "agent",
			playerLabel: "智体",
			classId: "ranger",
			ancestry: "elf",
			templateId: "huiyu"
		},
		{
			controller: "agent",
			playerLabel: "智体",
			classId: "wizard",
			ancestry: "tiefling",
			templateId: "yandeng"
		}
	]
});
function log(partial) {
	return {
		...partial,
		id: uid(),
		at: Date.now()
	};
}
function compactContext(t) {
	return {
		edition: t.edition,
		mods: t.mods,
		seed: t.seed,
		tone: t.tone,
		campaignTitle: t.campaignTitle,
		campaignPremise: t.campaignPremise,
		dm: {
			name: t.dm.name,
			persona: t.dm.persona,
			title: t.dm.title,
			voice: t.dm.voice,
			pacing: t.dm.pacing,
			boundary: t.dm.boundary
		},
		party: t.party.map((p) => ({
			id: p.id,
			name: p.name,
			ancestry: p.ancestry,
			classId: p.classId,
			personality: p.personality,
			appearance: p.appearance,
			mind: p.agentMind,
			hp: p.hp,
			maxHp: p.maxHp
		})),
		scene: {
			title: t.scene.title,
			location: t.scene.location,
			biome: t.scene.biome,
			prose: t.scene.prose,
			index: t.scene.index
		},
		recentLog: t.log.slice(-10).map((l) => ({
			kind: l.kind,
			speaker: l.speaker,
			text: l.text
		}))
	};
}
function applySceneJson(t, data) {
	if (!data || typeof data !== "object") return t;
	const d = data;
	const biome = typeof d.biome === "string" ? d.biome : t.scene.biome;
	const parsed = parseGridPayload(d.grid, biome);
	const unique = new Set(parsed.tiles.split(""));
	const floors = (parsed.tiles.match(/[.,=_~]/g) ?? []).length;
	const grid = unique.size > 1 && floors >= 10 ? parsed : gridForBiome(biome);
	const extraTokens = Array.isArray(d.tokens) ? d.tokens.map((tok) => ({
		id: uid(),
		x: Number(tok.x) || 8,
		y: Number(tok.y) || 4,
		kind: tok.kind || "npc",
		name: String(tok.name ?? "?"),
		glyph: String(tok.glyph ?? "?").slice(0, 1),
		tint: "#9a9488"
	})) : t.scene.tokens.filter((x) => x.kind !== "pc");
	const tokens = [...t.party.map((p, i) => ({
		id: p.id,
		x: 2 + i * 2,
		y: 6,
		kind: "pc",
		name: p.name,
		glyph: p.glyph,
		tint: p.tint
	})), ...extraTokens.filter((x) => x.kind !== "pc")];
	const location = String(d.location ?? t.scene.location);
	const scene = {
		index: t.scene.index + 1,
		title: String(d.title ?? t.scene.title),
		location,
		biome,
		prose: String(d.prose ?? t.scene.prose),
		ascii: overlayAscii(grid, tokens, location),
		grid,
		tokens,
		suggested: Array.isArray(d.suggested) ? d.suggested.map(String).slice(0, 6) : [],
		checks: Array.isArray(d.checks) ? d.checks.map((c) => ({
			id: uid(),
			label: String(c.label ?? "检定"),
			skill: String(c.skill ?? "perception"),
			dc: Number(c.dc) || 12
		})) : [],
		npcs: Array.isArray(d.npcs) ? d.npcs.map((n) => ({
			name: String(n.name ?? "无名"),
			brief: String(n.brief ?? "")
		})) : []
	};
	let combat = t.combat;
	if (Array.isArray(d.combatEnemies) && d.combatEnemies.length) combat = startCombat(t.party, d.combatEnemies.map((e) => ({
		id: uid(),
		name: String(e.name ?? "敌人"),
		side: "enemy",
		hp: Number(e.hp) || 10,
		maxHp: Number(e.hp) || 10,
		ac: Number(e.ac) || 12,
		init: 0,
		atkMod: Number(e.atkMod) || 3,
		dmg: String(e.dmg ?? "1d6+1")
	})), t.edition);
	let ended = t.ended;
	let phase = t.phase;
	if (d.ended && typeof d.ended === "object") {
		const e = d.ended;
		ended = {
			title: e.title ?? "终局",
			epilogue: e.epilogue ?? ""
		};
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
		log: [...t.log, log({
			kind: "narration",
			speaker: t.dm.name,
			text: scene.prose
		})]
	};
}
function nextHumanOrFirst(t) {
	const human = t.party.find((p) => p.controller === "human" && p.hp > 0);
	if (human) return human.id;
	return t.party[0]?.id ?? "dm";
}
function firstActor(t) {
	if (t.dm.controller === "human") return "dm";
	return nextHumanOrFirst(t);
}
var useTableStore = create()(persist((set, get) => ({
	tables: {},
	currentId: null,
	screen: "landing",
	hydrated: false,
	busy: false,
	busyLabel: "",
	draft: defaultDraft(),
	sheetIndex: 0,
	setScreen: (s) => set({ screen: s }),
	setDraft: (p) => set((s) => {
		const draft = {
			...s.draft,
			...p
		};
		if (p.partySize && p.partySize !== s.draft.partySize) {
			const seats = [...s.draft.seats];
			while (seats.length < p.partySize) seats.push({
				controller: "agent",
				playerLabel: "智体",
				classId: "cleric",
				ancestry: "dwarf",
				templateId: "tieqiao"
			});
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
		set({ tables: {
			...s.tables,
			[s.currentId]: fn(t)
		} });
	},
	newQuickTable: () => {
		unlockAudio();
		const party = quickParty().map((p, i) => {
			if (i === 1) return applyPartyTemplate(p, "huiyu");
			if (i === 2) return applyPartyTemplate(p, "yandeng");
			return p;
		});
		const id = uid();
		const table = {
			version: 2,
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
			dm: applyDmTemplate({
				controller: "agent",
				name: "灯芯",
				persona: "少解释，多给可互动的细节。",
				templateId: "",
				title: "",
				voice: "",
				pacing: "",
				boundary: ""
			}, "wick"),
			party,
			log: [log({
				kind: "system",
				speaker: "圆桌",
				text: "灯芯就座。规则为余烬 5e。呈现为像素。"
			})],
			scene: openingScene(party),
			combat: null,
			phase: "sheets",
			turn: { actor: "dm" },
			fallbackBeat: 0,
			usedAi: false
		};
		set((s) => ({
			tables: {
				...s.tables,
				[id]: table
			},
			currentId: id,
			screen: "sheets",
			sheetIndex: 0
		}));
	},
	beginSetup: () => set({
		draft: defaultDraft(),
		screen: "setup"
	}),
	materializeDraft: () => {
		const d = get().draft;
		const party = d.seats.slice(0, d.partySize).map((seat) => {
			const base = makeCharacter({
				controller: seat.controller,
				playerLabel: seat.playerLabel,
				classId: seat.classId,
				ancestry: seat.ancestry,
				lethality: d.mods.lethality
			});
			if (seat.controller !== "agent" || !seat.templateId) return base;
			const t = partyTemplate(seat.templateId);
			if (!t) return base;
			if (t.classId === seat.classId && t.ancestry === seat.ancestry) return applyPartyTemplate(base, seat.templateId, d.mods.lethality);
			return applyPartyMind(base, seat.templateId, d.mods.lethality);
		});
		const id = uid();
		const table = {
			version: 2,
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
			dm: d.dmController === "agent" ? applyDmTemplate({
				controller: "agent",
				name: d.dmName || "灯芯",
				persona: d.dmPersona,
				templateId: "",
				title: "",
				voice: "",
				pacing: "",
				boundary: ""
			}, d.dmTemplateId || "wick") : {
				controller: "human",
				name: d.dmName || "灯芯",
				persona: d.dmPersona,
				templateId: "",
				title: "",
				voice: "",
				pacing: "",
				boundary: "不代玩家掷骰。不替角色宣布感受。"
			},
			party,
			log: [log({
				kind: "system",
				speaker: "圆桌",
				text: `新桌已布置。规则：${d.edition}。呈现：${d.presentation}。`
			})],
			scene: openingScene(party),
			combat: null,
			phase: "sheets",
			turn: { actor: "dm" },
			fallbackBeat: 0,
			usedAi: false
		};
		set((s) => ({
			tables: {
				...s.tables,
				[id]: table
			},
			currentId: id,
			screen: "sheets",
			sheetIndex: 0
		}));
	},
	updateCharacter: (id, patch) => {
		get().patchTable((t) => ({
			...t,
			party: t.party.map((p) => p.id === id ? recomputeDerived({
				...p,
				...patch,
				abilities: {
					...p.abilities,
					...patch.abilities
				}
			}, t.mods.lethality) : p)
		}));
	},
	rerollCharacter: (id) => {
		get().patchTable((t) => ({
			...t,
			party: t.party.map((p) => {
				if (p.id !== id) return p;
				return {
					...makeCharacter({
						controller: p.controller,
						playerLabel: p.playerLabel,
						classId: p.classId,
						ancestry: p.ancestry,
						method: "roll",
						lethality: t.mods.lethality,
						name: p.name
					}),
					id: p.id,
					agentMind: p.agentMind
				};
			})
		}));
	},
	applyAgentTemplate: (id, templateId) => {
		get().patchTable((x) => ({
			...x,
			party: x.party.map((p) => p.id === id ? applyPartyTemplate(p, templateId, x.mods.lethality) : p)
		}));
	},
	applyDmSeatTemplate: (templateId) => {
		get().patchTable((x) => ({
			...x,
			dm: applyDmTemplate(x.dm, templateId)
		}));
	},
	updateDm: (patch) => {
		get().patchTable((t) => ({
			...t,
			dm: {
				...t.dm,
				...patch
			}
		}));
	},
	aiFillCharacter: async (id) => {
		const t = get().current();
		if (!t) return;
		const c = t.party.find((p) => p.id === id);
		if (!c) return;
		set({
			busy: true,
			busyLabel: "智体填写角色卡…"
		});
		try {
			const res = await runTableAi({ data: {
				kind: "character",
				edition: t.edition,
				seed: t.seed,
				seat: {
					controller: c.controller,
					playerLabel: c.playerLabel,
					nameHint: c.name,
					classHint: c.classId
				}
			} });
			if (!res.ok) {
				toast("智体此刻无法填写，已保留现有卡片。");
				return;
			}
			const d = JSON.parse(res.json);
			const mind = d.mind && typeof d.mind === "object" ? d.mind : null;
			get().updateCharacter(id, {
				name: String(d.name ?? c.name),
				ancestry: d.ancestry ?? c.ancestry,
				classId: d.classId ?? c.classId,
				background: String(d.background ?? c.background),
				appearance: String(d.appearance ?? c.appearance),
				personality: String(d.personality ?? c.personality),
				ideal: String(d.ideal ?? c.ideal),
				bond: String(d.bond ?? c.bond),
				flaw: String(d.flaw ?? c.flaw),
				backstory: String(d.backstory ?? c.backstory),
				glyph: CLASS_GLYPH[d.classId ?? c.classId],
				tint: CLASS_TINT[d.classId ?? c.classId],
				agentMind: mind ? {
					...c.agentMind,
					templateId: "",
					title: String(mind.title ?? c.agentMind.title),
					voice: String(mind.voice ?? c.agentMind.voice),
					tactics: String(mind.tactics ?? c.agentMind.tactics),
					drive: String(mind.drive ?? c.agentMind.drive),
					tell: String(mind.tell ?? c.agentMind.tell),
					boundary: String(mind.boundary ?? c.agentMind.boundary)
				} : c.agentMind
			});
		} finally {
			set({
				busy: false,
				busyLabel: ""
			});
		}
	},
	enterPlay: async () => {
		unlockAudio();
		if (!get().current()) return;
		get().patchTable((x) => ({
			...x,
			phase: "play",
			turn: { actor: firstActor(x) },
			log: x.dm.controller === "agent" ? x.log : [...x.log, log({
				kind: "narration",
				speaker: x.dm.name,
				text: x.scene.prose
			})]
		}));
		set({ screen: "play" });
		if (get().current()?.dm.controller === "agent") await get().requestAiScene("以现有战役种子开场。若种子是盐雾驿站，可沿用，但要用你自己的句子重写开场，不要逐字照抄。给出可行动的细节。");
	},
	setPresentation: (p) => get().patchTable((t) => ({
		...t,
		presentation: p
	})),
	appendLog: (e) => get().patchTable((t) => ({
		...t,
		log: [...t.log, log(e)]
	})),
	submitHumanAction: async (text) => {
		const t = get().current();
		if (!t || !text.trim()) return;
		const actorId = typeof t.turn.actor === "string" ? t.turn.actor : t.party[0]?.id;
		const actor = t.party.find((p) => p.id === actorId) ?? t.party.find((p) => p.controller === "human");
		get().patchTable((x) => ({
			...x,
			log: [...x.log, log({
				kind: "action",
				speaker: actor?.name ?? "你",
				speakerId: actor?.id,
				text: text.trim()
			})]
		}));
		await afterPartyAction(get, text.trim());
	},
	submitHumanNarration: async (text) => {
		if (!get().current() || !text.trim()) return;
		get().patchTable((x) => ({
			...x,
			log: [...x.log, log({
				kind: "narration",
				speaker: x.dm.name,
				text: text.trim()
			})],
			turn: { actor: nextHumanOrFirst(x) }
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
		const degree = r.degree === "crit" ? "大成功" : r.degree === "mixed" ? "部分成功" : r.degree === "fumble" ? "大失败" : r.success ? "成功" : "失败";
		get().patchTable((x) => ({
			...x,
			scene: {
				...x.scene,
				checks: x.scene.checks.filter((c) => c.id !== checkId)
			},
			log: [...x.log, log({
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
					degree: r.degree
				}
			})]
		}));
		if (t.dm.controller === "agent") await get().requestAiScene(`玩家 ${ch.name} 刚刚对「${check.label}」掷出 ${r.total}（${degree}，${r.detail}）。请根据结果推进场景，不要重掷。`);
	},
	freeRoll: (formula, label) => {
		tickDice();
		const r = rollFormula(formula);
		get().appendLog({
			kind: "roll",
			speaker: "骰盘",
			text: label ? `${label}：${r.detail}` : r.detail,
			roll: {
				formula: r.formula,
				detail: r.detail,
				total: r.total
			}
		});
	},
	requestAiScene: async (instruction) => {
		const t = get().current();
		if (!t) return;
		set({
			busy: true,
			busyLabel: `${t.dm.name} 正在铺开下一幕…`
		});
		try {
			const res = await runTableAi({ data: {
				kind: "scene",
				instruction,
				context: compactContext(t)
			} });
			if (!res.ok) {
				applyFallbackDm(get, instruction);
				return;
			}
			get().patchTable((x) => applySceneJson(x, JSON.parse(res.json)));
		} catch {
			applyFallbackDm(get, instruction);
		} finally {
			set({
				busy: false,
				busyLabel: ""
			});
		}
	},
	requestAgentAct: async (characterId) => {
		const t = get().current();
		if (!t) return;
		const c = t.party.find((p) => p.id === characterId);
		if (!c) return;
		set({
			busy: true,
			busyLabel: `${c.name} 正在决定…`
		});
		try {
			const res = await runTableAi({ data: {
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
					title: c.agentMind?.title ?? ""
				},
				context: compactContext(t)
			} });
			if (!res.ok) {
				const text = fallbackAgentAct(c, t);
				get().patchTable((x) => ({
					...x,
					log: [...x.log, log({
						kind: "action",
						speaker: c.name,
						speakerId: c.id,
						text
					})],
					turn: { actor: "dm" }
				}));
				await afterPartyAction(get, text);
				return;
			}
			const d = JSON.parse(res.json);
			const text = [d.speech ? `「${d.speech}」` : "", d.action ?? ""].filter(Boolean).join(" ");
			get().patchTable((x) => ({
				...x,
				log: [...x.log, log({
					kind: "action",
					speaker: c.name,
					speakerId: c.id,
					text
				})],
				turn: { actor: "dm" }
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
						degree: r.degree
					}
				});
			}
			await afterPartyAction(get, text);
		} finally {
			set({
				busy: false,
				busyLabel: ""
			});
		}
	},
	startBeatCombat: (kind = "road") => {
		const t = get().current();
		if (!t) return;
		const enemies = kind === "cellar" ? cellarCombatants(t.party).filter((c) => c.side === "enemy") : [makeEnemy("雾中剪径人", 16, 12, 3, "1d6+1"), makeEnemy("潮声猎犬", 10, 11, 2, "1d4+1")];
		const combat = startCombat(t.party, enemies, t.edition);
		tickHit();
		get().patchTable((x) => ({
			...x,
			combat,
			log: [...x.log, log({
				kind: "combat",
				speaker: "遭遇",
				text: `先攻已掷。顺序：${combat.order.map((id) => combat.combatants.find((c) => c.id === id)?.name).join(" → ")}。`
			})]
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
			get().patchTable((x) => ({
				...x,
				combat
			}));
			maybeAutoCombat(get);
			return;
		}
		const target = who.side === "party" ? pickEnemyTarget(combat) : pickPartyTarget(combat);
		if (!target) return;
		const actor = t.party.find((p) => p.id === who.id);
		const out = performAttack(combat, who.id, target.id, actor, t.edition);
		tickHit();
		combat = out.combat;
		const party = t.party.map((p) => {
			const c = combat.combatants.find((x) => x.characterId === p.id);
			return c ? {
				...p,
				hp: c.hp
			} : p;
		});
		const over = combatOver(combat);
		let logText = out.text;
		if (over === "party") {
			combat = {
				...combat,
				active: false
			};
			logText += " 敌人溃散。";
		} else if (over === "enemy") {
			combat = {
				...combat,
				active: false
			};
			logText += " 小队全倒。";
		} else combat = advanceTurn(combat);
		get().patchTable((x) => ({
			...x,
			party,
			combat,
			log: [...x.log, log({
				kind: "combat",
				speaker: who.name,
				text: logText
			})]
		}));
		maybeAutoCombat(get);
	},
	endTable: (title, epilogue) => {
		get().patchTable((t) => ({
			...t,
			phase: "ended",
			ended: {
				title,
				epilogue
			},
			log: [...t.log, log({
				kind: "system",
				speaker: "圆桌",
				text: epilogue
			})]
		}));
	},
	abandon: () => set({
		screen: "landing",
		currentId: null
	}),
	deleteTable: (id) => set((s) => {
		const tables = { ...s.tables };
		delete tables[id];
		return {
			tables,
			currentId: s.currentId === id ? null : s.currentId,
			screen: "landing"
		};
	}),
	resume: (id) => {
		const t = get().tables[id];
		if (!t) return;
		const hydrated = {
			...t,
			party: t.party.map(hydrateCharacter),
			dm: hydrateDm(t.dm)
		};
		set({
			tables: {
				...get().tables,
				[id]: hydrated
			},
			currentId: id,
			screen: hydrated.phase === "play" || hydrated.phase === "ended" ? "play" : "sheets"
		});
	}
}), {
	name: "ashcircle-save-v1",
	version: 2,
	skipHydration: true,
	partialize: (s) => ({
		tables: s.tables,
		currentId: s.currentId
	}),
	migrate: (persisted) => {
		const s = persisted;
		if (!s.tables) return s;
		const tables = {};
		for (const [id, t] of Object.entries(s.tables)) tables[id] = {
			...t,
			version: 2,
			party: t.party.map(hydrateCharacter),
			dm: hydrateDm(t.dm)
		};
		return {
			...s,
			tables
		};
	}
}));
function fallbackAgentAct(c, t) {
	const sugs = t.scene.suggested;
	const pick = sugs[Math.floor(Math.random() * Math.max(1, sugs.length))] ?? "仔细观察四周";
	const tag = c.agentMind.title || "性子";
	return `${c.name} 依着「${tag}」：${pick}。`;
}
function applyFallbackDm(get, instruction) {
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
		log: [...x.log, log({
			kind: "narration",
			speaker: x.dm.name,
			text: `${reply.prose}\n\n${scene.prose}`
		})],
		phase: reply.end ? "ended" : x.phase,
		ended: reply.end ? {
			title: "雾散之后",
			epilogue: reply.prose
		} : x.ended
	}));
	if (reply.startCombat) get().startBeatCombat("cellar");
}
async function afterPartyAction(get, text) {
	const t = get().current();
	if (!t) return;
	if (t.dm.controller === "agent") await get().requestAiScene(`小队刚刚行动：${text}。请裁定结果并推进下一幕。若适合开战，给出 combatEnemies。`);
}
function maybeAutoCombat(get) {
	const t = get().current();
	if (!t?.combat?.active) return;
	const who = currentCombatant(t.combat);
	if (!who || who.hp <= 0) return;
	const char = t.party.find((p) => p.id === who.id);
	if (!(who.side === "enemy" || char?.controller === "agent")) return;
	window.setTimeout(() => {
		const now = get().current();
		if (!now?.combat?.active) return;
		if (currentCombatant(now.combat)?.id === who.id) get().combatAction("attack");
	}, 650);
}
function Landing() {
	const tables = useTableStore((s) => s.tables);
	const newQuickTable = useTableStore((s) => s.newQuickTable);
	const beginSetup = useTableStore((s) => s.beginSetup);
	const resume = useTableStore((s) => s.resume);
	const deleteTable = useTableStore((s) => s.deleteTable);
	const list = Object.values(tables).sort((a, b) => b.updatedAt - a.updatedAt);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh overflow-x-hidden bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0",
			style: { background: "radial-gradient(ellipse 80% 50% at 50% -10%, color-mix(in oklab, var(--color-fg) 7%, transparent), transparent 70%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "relative mx-auto flex w-full max-w-5xl flex-col px-5 pb-16 pt-10 sm:px-8 sm:pt-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "ash-enter font-sans text-xs tracking-[0.28em] text-muted uppercase",
					children: "Tabletop · Human & Agent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "ash-enter ash-enter-delay-1 mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-fg sm:text-7xl",
					children: "灰烬圆桌"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "ash-enter ash-enter-delay-2 mt-2 font-display text-xl italic text-muted sm:text-2xl",
					children: "ASHCIRCLE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "ash-enter ash-enter-delay-3 mt-6 max-w-xl text-base leading-relaxed text-muted",
					children: "地下城主与每一名小队成员，都可以由人类或智体入座。智体先套指令卡（声口、战术、驱力、习惯、边界）；规则版可调；场景可用文字、字符图或像素呈现。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ash-enter ash-enter-delay-4 mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						onClick: newQuickTable,
						className: "min-h-12",
						children: ["立刻开桌", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "secondary",
						onClick: beginSetup,
						className: "min-h-12",
						children: "布置新桌"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableMark, { className: "mx-auto w-full max-w-md text-fg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-3",
						children: [
							{
								icon: Users,
								title: "席位自由",
								body: "DM 与每名队员单独选择人类或智体。可热座，可观剧。"
							},
							{
								icon: BookUser,
								title: "智体指令卡",
								body: "声口、战术、驱力、习惯、边界。灰羽、盐灯、灯芯等模板直接写进扮演提示。"
							},
							{
								icon: ScrollText,
								title: "三套规则",
								body: "余烬 5e、帷幕 2d6、灰灯三围。致命度与难度可滑。"
							},
							{
								icon: Dices,
								title: "连载场景",
								body: "智体 DM 推进剧情；骰子在本地掷出，从不暗箱。"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
								className: "mt-0.5 size-5 text-primary",
								strokeWidth: 1.6
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-fg",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted",
								children: item.body
							})] })]
						}, item.title))
					})]
				}),
				list.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-fg",
						children: "未散的桌子"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: list.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start justify-between gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => resume(t.id),
								className: "min-w-0 flex-1 text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate font-medium text-fg",
										children: t.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-xs text-muted",
										children: [
											t.campaignTitle,
											" · ",
											t.party.length,
											" 人小队 · ",
											t.presentation
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex flex-wrap gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: t.edition }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: t.phase === "ended" ? "已终局" : "进行中" })]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => deleteTable(t.id),
								className: "shrink-0 text-subtle",
								children: "撤桌"
							})]
						}, t.id))
					})]
				}) : null
			]
		})]
	});
}
var Input = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	ref,
	className: cn("flex h-11 w-full rounded-md bg-inset px-3 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40", "disabled:opacity-40", className),
	...props
}));
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	ref,
	className: cn("flex min-h-24 w-full rounded-lg bg-inset px-3 py-2.5 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40", "disabled:opacity-40 resize-y", className),
	...props
}));
Textarea.displayName = "Textarea";
function Portrait({ ancestry, classId, size = 56 }) {
	const tint = CLASS_TINT[classId];
	const ear = ancestry === "elf" || ancestry === "tiefling";
	const horn = ancestry === "tiefling" || ancestry === "dragonborn";
	const beard = ancestry === "dwarf";
	const short = ancestry === "halfling";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 32 32",
		"aria-hidden": true,
		className: "shrink-0 rounded-md shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				fill: "#1c1916"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: "24",
				width: "32",
				height: "8",
				fill: "#141210"
			}),
			horn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: "4",
				width: "3",
				height: "4",
				fill: tint
			}) : null,
			horn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "21",
				y: "4",
				width: "3",
				height: "4",
				fill: tint
			}) : null,
			ear ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "6",
				y: "10",
				width: "3",
				height: "5",
				fill: tint
			}) : null,
			ear ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "23",
				y: "10",
				width: "3",
				height: "5",
				fill: tint
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "10",
				y: short ? 10 : 8,
				width: "12",
				height: "10",
				fill: tint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "13",
				y: short ? 13 : 11,
				width: "2",
				height: "2",
				fill: "#0c0b0a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "18",
				y: short ? 13 : 11,
				width: "2",
				height: "2",
				fill: "#0c0b0a"
			}),
			beard ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "11",
				y: "18",
				width: "10",
				height: "5",
				fill: "#6e6960"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "11",
				y: short ? 20 : 18,
				width: "10",
				height: "8",
				fill: shade$1(tint)
			}),
			classId === "wizard" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: "4",
				width: "16",
				height: "4",
				fill: "#2a2622"
			}) : null,
			classId === "cleric" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "14",
				y: "4",
				width: "4",
				height: "4",
				fill: "#ece7dc"
			}) : null
		]
	});
}
function shade$1(hex) {
	const n = parseInt(hex.slice(1), 16);
	return `rgb(${Math.max(0, (n >> 16 & 255) - 30)},${Math.max(0, (n >> 8 & 255) - 30)},${Math.max(0, (n & 255) - 30)})`;
}
var TW = 16;
var TH = 10;
var TILE = 16;
var TILE_COLOR = {
	"#": [
		42,
		38,
		34
	],
	".": [
		96,
		84,
		70
	],
	",": [
		72,
		96,
		64
	],
	"=": [
		110,
		78,
		50
	],
	"+": [
		102,
		74,
		48
	],
	"~": [
		58,
		96,
		112
	],
	"^": [
		44,
		72,
		46
	],
	"*": [
		196,
		124,
		58
	],
	"%": [
		86,
		74,
		64
	],
	o: [
		112,
		86,
		56
	],
	_: [
		148,
		138,
		122
	]
};
function biomeFloor(biome) {
	switch (biome) {
		case "inn": return [
			82,
			62,
			46
		];
		case "forest": return [
			40,
			58,
			36
		];
		case "cellar":
		case "dungeon":
		case "cave": return [
			38,
			36,
			34
		];
		case "coast": return [
			72,
			68,
			52
		];
		case "snow": return [
			180,
			180,
			176
		];
		case "city": return [
			70,
			66,
			60
		];
		default: return [
			58,
			54,
			46
		];
	}
}
function shade(c, n) {
	return [
		Math.max(0, Math.min(255, c[0] + n)),
		Math.max(0, Math.min(255, c[1] + n)),
		Math.max(0, Math.min(255, c[2] + n))
	];
}
function hexToRgb(hex) {
	const h = hex.replace("#", "");
	const n = parseInt(h.length === 3 ? h.split("").map((x) => x + x).join("") : h, 16);
	return [
		n >> 16 & 255,
		n >> 8 & 255,
		n & 255
	];
}
function PixelScene({ scene }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		ctx.imageSmoothingEnabled = false;
		let raf = 0;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const draw = (t) => {
			const w = scene.grid.w || TW;
			const h = scene.grid.h || TH;
			const needW = w * TILE;
			const needH = h * TILE;
			if (canvas.width !== needW || canvas.height !== needH) {
				canvas.width = needW;
				canvas.height = needH;
			}
			ctx.imageSmoothingEnabled = false;
			const floor = biomeFloor(scene.biome);
			const flicker = reduced ? 0 : Math.sin(t / 180) * 8;
			for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
				const ch = scene.grid.tiles[y * w + x] ?? ".";
				let col = TILE_COLOR[ch] ?? floor;
				if (ch === "*") col = shade(col, flicker);
				const dither = (x + y & 1) === 0 ? -4 : 3;
				const c = shade(col, dither);
				ctx.fillStyle = `rgb(${c[0]},${c[1]},${c[2]})`;
				ctx.fillRect(x * TILE, y * TILE, TILE, TILE);
				if (ch === "#") {
					ctx.fillStyle = "rgba(0,0,0,0.25)";
					ctx.fillRect(x * TILE, y * TILE, TILE, 2);
					ctx.fillStyle = "rgba(236,231,220,0.06)";
					ctx.fillRect(x * TILE, y * TILE + TILE - 2, TILE, 2);
				}
				if (ch === "^") {
					ctx.fillStyle = "rgb(28,44,28)";
					ctx.fillRect(x * TILE + 6, y * TILE + 10, 4, 6);
					ctx.fillStyle = "rgb(48,78,44)";
					ctx.fillRect(x * TILE + 3, y * TILE + 2, 10, 10);
				}
				if (ch === "~") {
					ctx.fillStyle = `rgba(180,220,230,${.12 + (reduced ? 0 : Math.sin(t / 240 + x) * .08)})`;
					ctx.fillRect(x * TILE, y * TILE + 8, TILE, 3);
				}
				if (ch === "*") {
					ctx.fillStyle = `rgba(236,180,90,${.35 + flicker / 40})`;
					ctx.fillRect(x * TILE + 6, y * TILE + 4, 4, 6);
					ctx.fillStyle = "rgb(60,40,28)";
					ctx.fillRect(x * TILE + 7, y * TILE + 10, 2, 6);
				}
			}
			for (const tok of scene.tokens) {
				const px = tok.x * TILE;
				const py = tok.y * TILE;
				const rgb = hexToRgb(tok.tint || "#d6d0c4");
				ctx.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
				if (tok.kind === "prop") ctx.fillRect(px + 4, py + 6, 8, 8);
				else if (tok.kind === "monster") {
					ctx.fillRect(px + 3, py + 4, 10, 10);
					ctx.fillStyle = "rgb(20,16,14)";
					ctx.fillRect(px + 5, py + 6, 2, 2);
					ctx.fillRect(px + 9, py + 6, 2, 2);
				} else {
					ctx.fillRect(px + 6, py + 2, 4, 4);
					ctx.fillRect(px + 5, py + 6, 6, 6);
					ctx.fillRect(px + 5, py + 12, 2, 4);
					ctx.fillRect(px + 9, py + 12, 2, 4);
					ctx.fillStyle = "rgb(20,16,14)";
					ctx.fillRect(px + 7, py + 3, 1, 1);
					ctx.fillRect(px + 9, py + 3, 1, 1);
				}
			}
			raf = requestAnimationFrame(draw);
		};
		raf = requestAnimationFrame(draw);
		return () => cancelAnimationFrame(raf);
	}, [scene]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		className: "h-full w-full rounded-md",
		style: { imageRendering: "pixelated" },
		"aria-label": scene.location
	});
}
function PlayTable() {
	const table = useTableStore((s) => s.currentId ? s.tables[s.currentId] : null);
	const abandon = useTableStore((s) => s.abandon);
	const setPresentation = useTableStore((s) => s.setPresentation);
	const submitHumanAction = useTableStore((s) => s.submitHumanAction);
	const submitHumanNarration = useTableStore((s) => s.submitHumanNarration);
	const requestAiScene = useTableStore((s) => s.requestAiScene);
	const requestAgentAct = useTableStore((s) => s.requestAgentAct);
	const rollPending = useTableStore((s) => s.rollPending);
	const freeRoll = useTableStore((s) => s.freeRoll);
	useTableStore((s) => s.combatAction);
	const startBeatCombat = useTableStore((s) => s.startBeatCombat);
	const busy = useTableStore((s) => s.busy);
	const busyLabel = useTableStore((s) => s.busyLabel);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [watch, setWatch] = (0, import_react.useState)(false);
	const logRef = (0, import_react.useRef)(null);
	const humanPc = table?.party.find((p) => p.controller === "human");
	const actor = table && table.turn.actor === "dm" ? null : table?.party.find((p) => p.id === table.turn.actor);
	(0, import_react.useEffect)(() => {
		logRef.current?.scrollTo({
			top: logRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [table?.log.length]);
	(0, import_react.useEffect)(() => {
		if (!table || !watch || busy || table.phase === "ended") return;
		const t = window.setTimeout(() => {
			if (table.turn.actor === "dm" && table.dm.controller === "agent") requestAiScene("继续推进。给新的可互动细节。");
			else if (actor?.controller === "agent") requestAgentAct(actor.id);
		}, 900);
		return () => clearTimeout(t);
	}, [
		table,
		watch,
		busy,
		actor,
		requestAiScene,
		requestAgentAct
	]);
	const combatWho = table?.combat?.active ? currentCombatant(table.combat) : void 0;
	if (!table) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-wrap items-center gap-2 border-b border-border px-4 py-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: abandon,
					className: "-ml-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "离开"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate font-display text-xl leading-tight text-fg",
						children: table.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate text-xs text-muted",
						children: [
							EDITION_META[table.edition].name,
							" · ",
							table.campaignTitle
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresentationSwitch, {
					value: table.presentation,
					onChange: setPresentation
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 gap-4 p-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex min-h-0 flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneStage, { tableId: table.id }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: logRef,
						className: "h-56 overflow-y-auto rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:h-64",
						children: [table.log.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "mb-3 last:mb-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] tracking-wide text-subtle",
									children: [e.speaker, e.kind === "roll" ? " · 骰" : e.kind === "narration" ? " · DM" : ""]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("mt-0.5 whitespace-pre-wrap text-sm leading-relaxed", e.kind === "narration" ? "text-fg" : "text-muted", e.kind === "roll" && "font-mono text-xs text-fg"),
									children: e.text
								}),
								e.roll ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 font-mono text-xs tabular text-primary",
									children: [e.roll.detail, e.roll.success === true ? " · 成" : e.roll.success === false ? " · 失" : ""]
								}) : null
							]
						}, e.id)), busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "ash-shimmer text-sm",
							children: busyLabel
						}) : null]
					}),
					table.phase === "ended" && table.ended ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-elevated p-5 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl text-fg",
							children: table.ended.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: table.ended.epilogue
						})]
					}) : table.combat?.active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CombatBar, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]",
						children: [
							table.scene.suggested.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 flex flex-wrap gap-1.5",
								children: table.scene.suggested.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setDraft(s);
										submitHumanAction(s);
										setDraft("");
									},
									className: "h-9 max-w-full truncate rounded-full bg-inset px-3 text-xs text-fg shadow-[var(--shadow-border)]",
									children: s
								}, s))
							}) : null,
							table.scene.checks.length > 0 && humanPc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 flex flex-wrap gap-1.5",
								children: table.scene.checks.map((ch) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "secondary",
									onClick: () => void rollPending(ch.id, humanPc.id),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dices, {}),
										ch.label,
										" DC ",
										ch.dc
									]
								}, ch.id))
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								rows: 2,
								value: draft,
								onChange: (e) => setDraft(e.target.value),
								placeholder: table.dm.controller === "human" && table.turn.actor === "dm" ? "以 DM 身份叙述…" : "宣布你的行动…",
								onKeyDown: (e) => {
									if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
										e.preventDefault();
										const v = draft.trim();
										if (!v) return;
										if (table.dm.controller === "human" && table.turn.actor === "dm") submitHumanNarration(v);
										else submitHumanAction(v);
										setDraft("");
									}
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										disabled: busy || !draft.trim(),
										onClick: () => {
											const v = draft.trim();
											if (!v) return;
											if (table.dm.controller === "human" && table.turn.actor === "dm") submitHumanNarration(v);
											else submitHumanAction(v);
											setDraft("");
										},
										children: "宣布"
									}),
									table.dm.controller === "agent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "secondary",
										disabled: busy,
										onClick: () => void requestAiScene("根据刚才的行动继续。"),
										children: "请 DM 推进"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "secondary",
										disabled: busy,
										onClick: () => void requestAiScene("以人类 DM 的助手身份，建议下一幕的具体感官细节，仍由人类拍板。"),
										children: "智体补一幕"
									}),
									actor?.controller === "agent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										disabled: busy,
										onClick: () => void requestAgentAct(actor.id),
										children: [actor.name, " 行动"]
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "ghost",
										size: "sm",
										onClick: () => setWatch((w) => !w),
										title: "观剧：智体自动轮转",
										children: [watch ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}), watch ? "暂停观剧" : "观剧"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "sm",
										onClick: () => startBeatCombat(),
										children: "遭遇"
									})
								]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs tracking-wide text-muted",
								children: [
									"DM · ",
									table.dm.name,
									table.dm.title ? ` · ${table.dm.title}` : ""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 flex items-center gap-1.5 text-sm text-fg",
								children: [table.dm.controller === "agent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-3.5" }), table.dm.controller === "agent" ? "智体" : "人类"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-muted",
								children: table.dm.persona
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: table.party.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {
									ancestry: p.ancestry,
									classId: p.classId,
									size: 44
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate font-medium text-fg",
												children: p.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: cn("text-xs tabular", hpTint(p.hp, p.maxHp)),
												children: [
													p.hp,
													"/",
													p.maxHp
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted",
											children: [
												CLASS_LABEL[p.classId],
												" · ",
												p.controller === "human" ? "人类" : "智体",
												p.agentMind?.title ? ` · ${p.agentMind.title}` : ""
											]
										}),
										p.controller === "agent" && p.agentMind?.tell ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs leading-relaxed text-muted",
											children: p.agentMind.tell
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 h-1 overflow-hidden rounded-full bg-inset",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-full bg-primary",
												style: { width: `${Math.max(0, p.hp / Math.max(1, p.maxHp) * 100)}%` }
											})
										})
									]
								})]
							})
						}, p.id))
					}),
					table.scene.npcs.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-wide text-muted",
							children: "在场"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-2",
							children: table.scene.npcs.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-fg",
								children: n.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: n.brief
							})] }, n.name))
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiceTray, { onRoll: freeRoll }),
					humanPc ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs tracking-wide text-muted",
								children: [humanPc.name, " 的技能"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex flex-wrap gap-1",
								children: SKILLS.filter((s) => humanPc.skillProfs.includes(s.id)).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: s.label }, s.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs leading-relaxed text-muted",
								children: humanPc.personality
							})
						]
					}) : null,
					combatWho ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: ["战斗回合：", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg",
							children: combatWho.name
						})]
					}) : null
				]
			})]
		})]
	});
}
function SceneStage({ tableId }) {
	const table = useTableStore((s) => s.tables[tableId]);
	if (!table) return null;
	const { scene, presentation } = table;
	const grid = (scene.grid.tiles.match(/[.,=_~]/g) ?? []).length >= 10 ? scene.grid : gridForBiome(scene.biome);
	const ascii = overlayAscii(grid, scene.tokens, scene.location);
	const liveScene = {
		...scene,
		grid
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl bg-inset shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-between px-4 py-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg text-fg",
					children: scene.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: scene.location
				})] })
			}),
			presentation === "pixel" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[16/10] w-full bg-bg p-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PixelScene, { scene: liveScene })
			}) : presentation === "ascii" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "overflow-x-auto p-4 font-mono text-[11px] leading-tight text-primary sm:text-xs",
				children: ascii
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 pb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "whitespace-pre-wrap text-sm leading-relaxed text-muted",
					children: scene.prose
				})
			}),
			presentation !== "text" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border-t border-border px-4 py-3 text-sm leading-relaxed text-muted",
				children: scene.prose.length > 220 ? `${scene.prose.slice(0, 220)}…` : scene.prose
			}) : null
		]
	});
}
function PresentationSwitch({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "inline-flex rounded-md bg-surface p-1 shadow-[var(--shadow-border)]",
		children: [
			{
				key: "text",
				icon: Type,
				label: "文字"
			},
			{
				key: "ascii",
				icon: Map,
				label: "字符"
			},
			{
				key: "pixel",
				icon: Dices,
				label: "像素"
			}
		].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-label": o.label,
			onClick: () => onChange(o.key),
			className: cn("inline-flex h-9 items-center gap-1.5 rounded-sm px-2.5 text-xs", value === o.key ? "bg-elevated text-fg" : "text-muted"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o.icon, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden sm:inline",
				children: o.label
			})]
		}, o.key))
	});
}
function DiceTray({ onRoll }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-wide text-muted",
			children: "骰盘"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 flex flex-wrap gap-1.5",
			children: [
				"1d20",
				"1d12",
				"1d10",
				"1d8",
				"1d6",
				"1d4",
				"2d6"
			].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onRoll(d),
				className: "h-9 min-w-11 rounded-md bg-inset px-2 font-mono text-xs text-fg shadow-[var(--shadow-border)]",
				children: d
			}, d))
		})]
	});
}
function CombatBar() {
	const table = useTableStore((s) => s.currentId ? s.tables[s.currentId] : null);
	const combatAction = useTableStore((s) => s.combatAction);
	if (!table?.combat?.active) return null;
	const who = currentCombatant(table.combat);
	const char = table.party.find((p) => p.id === who?.id);
	const canAct = who?.side === "party" && char?.controller === "human";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-elevated p-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					"第 ",
					table.combat.round,
					" 轮 · ",
					who?.name ?? "—"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-2 flex flex-wrap gap-2",
				children: table.combat.order.map((id) => {
					const c = table.combat.combatants.find((x) => x.id === id);
					if (!c) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: cn("rounded-full px-2 py-0.5 text-xs", c.hp <= 0 ? "text-subtle line-through" : "text-fg", who?.id === id && "bg-inset"),
						children: [
							c.name,
							" ",
							c.hp,
							"/",
							c.maxHp
						]
					}, id);
				})
			}),
			canAct ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => combatAction("attack"),
					children: "攻击"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: () => combatAction("skip"),
					children: "等待"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs text-muted",
				children: [
					"等待 ",
					who?.name,
					" …"
				]
			})
		]
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium tracking-wide text-muted", className),
		...props
	});
}
function Slider({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		className: cn("relative flex h-6 w-full touch-none items-center", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			className: "relative h-1 w-full grow rounded-full bg-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full rounded-full bg-primary" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-4 rounded-full bg-primary shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40" })]
	});
}
function Separator({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("h-px w-full bg-border", className) });
}
function PartyTemplatePicker({ value, onPick, dossier = true }) {
	const selected = partyTemplate(value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex gap-2 overflow-x-auto pb-1",
		children: PARTY_TEMPLATES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "shrink-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemplateCard, {
				templateId: t.id,
				active: value === t.id,
				onClick: () => onPick(t.id),
				portrait: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {
					ancestry: t.ancestry,
					classId: t.classId,
					size: 36
				}),
				name: t.name,
				meta: `${t.title} · ${CLASS_LABEL[t.classId]}`,
				blurb: t.mind.tell || t.blurb
			})
		}, t.id))
	}), dossier && selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MindDossier, {
		name: selected.name,
		title: `${selected.title} · ${CLASS_LABEL[selected.classId]}`,
		rows: [
			{
				label: "声口",
				value: selected.mind.voice
			},
			{
				label: "战术",
				value: selected.mind.tactics
			},
			{
				label: "驱力",
				value: selected.mind.drive
			},
			{
				label: "习惯",
				value: selected.mind.tell
			},
			{
				label: "边界",
				value: selected.mind.boundary
			}
		]
	}) : null] });
}
function DmTemplatePicker({ value, onPick, dossier = true }) {
	const selected = dmTemplate(value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex gap-2 overflow-x-auto pb-1",
		children: DM_TEMPLATES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "shrink-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemplateCard, {
				templateId: t.id,
				active: value === t.id,
				onClick: () => onPick(t.id),
				name: t.name,
				meta: t.title,
				blurb: t.blurb
			})
		}, t.id))
	}), dossier && selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MindDossier, {
		name: selected.name,
		title: selected.title,
		rows: [
			{
				label: "声口",
				value: selected.voice
			},
			{
				label: "节奏",
				value: selected.pacing
			},
			{
				label: "边界",
				value: selected.boundary
			}
		]
	}) : null] });
}
function MindDossier({ name, title, rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 rounded-xl bg-inset p-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg leading-tight text-fg",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-xs tracking-wide text-muted",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-3 space-y-2.5",
				children: rows.filter((r) => r.value).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-xs tracking-wide text-subtle",
					children: r.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-0.5 text-sm leading-relaxed text-fg",
					children: r.value
				})] }, r.label))
			})
		]
	});
}
function TemplateCard({ templateId, active, onClick, portrait, name, meta, blurb }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"data-template": templateId,
		"aria-pressed": active,
		onClick,
		className: cn("flex min-h-24 w-48 flex-col rounded-lg p-3 text-left shadow-[var(--shadow-border)]", active ? "bg-elevated" : "bg-inset hover:bg-elevated"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2",
			children: [portrait, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate font-display text-base leading-tight text-fg",
					children: name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 block truncate text-xs text-muted",
					children: meta
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-2 line-clamp-2 text-xs leading-relaxed text-muted",
			children: blurb
		})]
	});
}
function suggestTemplateId(classId) {
	return CLASS_DEFAULT_TEMPLATE[classId];
}
var MOD_LABELS = [
	{
		key: "lethality",
		name: "致命度",
		low: "厚血",
		high: "易死"
	},
	{
		key: "magic",
		name: "魔法浓度",
		low: "低魔",
		high: "奇诡"
	},
	{
		key: "difficulty",
		name: "检定难度",
		low: "宽松",
		high: "严苛"
	},
	{
		key: "combatFreq",
		name: "战斗密度",
		low: "稀",
		high: "密"
	},
	{
		key: "agentVoice",
		name: "智体主动性",
		low: "克制",
		high: "抢戏"
	}
];
function Setup() {
	const draft = useTableStore((s) => s.draft);
	const setDraft = useTableStore((s) => s.setDraft);
	const setScreen = useTableStore((s) => s.setScreen);
	const materializeDraft = useTableStore((s) => s.materializeDraft);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-3xl px-5 py-8 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => setScreen("landing"),
					className: "-ml-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), " 返回"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-4xl text-fg",
					children: "布置圆桌"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "规则、呈现、席位。角色卡在下一页填写。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
							label: "桌名",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: draft.name,
								onChange: (e) => setDraft({ name: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
							label: "战役种子（地点、冲突、调性）",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								rows: 3,
								value: draft.seed,
								onChange: (e) => setDraft({ seed: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
							label: "叙事语气",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: draft.tone,
								onChange: (e) => setDraft({ tone: e.target.value })
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-10 font-display text-2xl text-fg",
					children: "规则版"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-3",
					children: Object.keys(EDITION_META).map((key) => {
						const m = EDITION_META[key];
						const on = draft.edition === key;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setDraft({ edition: key }),
							className: cn("rounded-xl p-4 text-left shadow-[var(--shadow-border)] transition-colors", on ? "bg-elevated" : "bg-surface hover:bg-elevated"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-fg",
									children: m.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: m.dice
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: m.blurb
								})
							]
						}, key);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-5 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: MOD_LABELS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between text-xs text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular",
							children: [
								m.low,
								" · ",
								draft.mods[m.key],
								" · ",
								m.high
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						min: 1,
						max: 5,
						step: 1,
						value: [draft.mods[m.key]],
						onValueChange: ([v]) => setDraft({ mods: {
							...draft.mods,
							[m.key]: v ?? 3
						} })
					})] }, m.key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-10 font-display text-2xl text-fg",
					children: "呈现"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-3 gap-2",
					children: [
						["text", "文字"],
						["ascii", "字符图"],
						["pixel", "像素"]
					].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setDraft({ presentation: key }),
						className: cn("h-12 rounded-lg text-sm shadow-[var(--shadow-border)]", draft.presentation === key ? "bg-primary text-primary-fg" : "bg-surface text-fg"),
						children: label
					}, key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-10 font-display text-2xl text-fg",
					children: "席位"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted",
					children: [
						"小队人数 ",
						draft.partySize,
						"。智体席位先选指令卡；人类席位只定血统与职业。"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						min: 1,
						max: 4,
						step: 1,
						value: [draft.partySize],
						onValueChange: ([v]) => setDraft({ partySize: v ?? 3 })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-wide text-muted",
							children: "地下城主"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeatToggle, {
								value: draft.dmController,
								onChange: (v) => setDraft({
									dmController: v,
									dmTemplateId: v === "agent" ? draft.dmTemplateId || "wick" : ""
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								className: "max-w-40",
								value: draft.dmName,
								onChange: (e) => setDraft({
									dmName: e.target.value,
									dmTemplateId: ""
								}),
								placeholder: "DM 名"
							})]
						}),
						draft.dmController === "agent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-xs text-muted",
								children: "指令卡：声口、节奏、边界。"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DmTemplatePicker, {
								value: draft.dmTemplateId,
								onPick: (id) => {
									const t = dmTemplate(id);
									if (!t) return;
									setDraft({
										dmTemplateId: id,
										dmName: t.name,
										dmPersona: t.persona
									});
								}
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							className: "mt-3",
							rows: 2,
							value: draft.dmPersona,
							onChange: (e) => setDraft({ dmPersona: e.target.value }),
							placeholder: "DM 人格"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: draft.seats.map((seat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-fg",
									children: ["队员 ", i + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: seat.controller === "human" ? "人类" : "智体" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeatToggle, {
									value: seat.controller,
									onChange: (v) => {
										const seats = draft.seats.map((s, j) => j === i ? {
											...s,
											controller: v,
											playerLabel: v === "human" ? "你" : "智体",
											templateId: v === "agent" ? s.templateId || suggestTemplateId(s.classId) : ""
										} : s);
										setDraft({ seats });
									}
								})
							}),
							seat.controller === "agent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-2 text-xs text-muted",
									children: "指令卡：声口、战术、驱力、习惯、边界。"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartyTemplatePicker, {
									value: seat.templateId,
									onPick: (id) => {
										const t = partyTemplate(id);
										const seats = draft.seats.map((s, j) => j === i ? {
											...s,
											templateId: id,
											classId: t?.classId ?? s.classId,
											ancestry: t?.ancestry ?? s.ancestry
										} : s);
										setDraft({ seats });
									}
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: "h-11 rounded-md bg-inset px-3 text-sm text-fg shadow-[var(--shadow-border)]",
									value: seat.ancestry,
									onChange: (e) => {
										const seats = draft.seats.map((s, j) => j === i ? {
											...s,
											ancestry: e.target.value
										} : s);
										setDraft({ seats });
									},
									children: ANCESTRY_LIST.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: a,
										children: ANCESTRY_LABEL[a]
									}, a))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: "h-11 rounded-md bg-inset px-3 text-sm text-fg shadow-[var(--shadow-border)]",
									value: seat.classId,
									onChange: (e) => {
										const seats = draft.seats.map((s, j) => j === i ? {
											...s,
											classId: e.target.value
										} : s);
										setDraft({ seats });
									},
									children: CLASS_LIST.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: c,
										children: CLASS_LABEL[c]
									}, c))
								})]
							})
						]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-8" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						onClick: () => setDraft(defaultDraft()),
						children: "重置草案"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: materializeDraft,
						children: "填写角色卡"
					})]
				})
			]
		})
	});
}
function Field$1({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
function SeatToggle({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex rounded-md bg-inset p-1 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onChange("human"),
			className: cn("inline-flex h-9 items-center gap-1.5 rounded-sm px-3 text-sm", value === "human" ? "bg-elevated text-fg" : "text-muted"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-3.5" }), " 人类"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onChange("agent"),
			className: cn("inline-flex h-9 items-center gap-1.5 rounded-sm px-3 text-sm", value === "agent" ? "bg-elevated text-fg" : "text-muted"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-3.5" }), " 智体"]
		})]
	});
}
function Sheets() {
	const table = useTableStore((s) => s.currentId ? s.tables[s.currentId] : null);
	const sheetIndex = useTableStore((s) => s.sheetIndex);
	const set = useTableStore.setState;
	const applyAgentTemplate = useTableStore((s) => s.applyAgentTemplate);
	const applyDmSeatTemplate = useTableStore((s) => s.applyDmSeatTemplate);
	const updateCharacter = useTableStore((s) => s.updateCharacter);
	const updateDm = useTableStore((s) => s.updateDm);
	const rerollCharacter = useTableStore((s) => s.rerollCharacter);
	const aiFillCharacter = useTableStore((s) => s.aiFillCharacter);
	const enterPlay = useTableStore((s) => s.enterPlay);
	const abandon = useTableStore((s) => s.abandon);
	const busy = useTableStore((s) => s.busy);
	const busyLabel = useTableStore((s) => s.busyLabel);
	if (!table) return null;
	const c = table.party[sheetIndex] ?? table.party[0];
	if (!c) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-3xl px-5 py-8 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: abandon,
					className: "-ml-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), " 离开"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.2em] text-muted uppercase",
						children: table.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-4xl text-fg",
						children: "角色卡"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [
						table.dm.controller === "agent" ? "智体 DM" : "人类 DM",
						" · ",
						table.dm.name
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex gap-2 overflow-x-auto pb-1",
					children: table.party.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => set({ sheetIndex: i }),
						className: cn("flex min-w-28 items-center gap-2 rounded-lg px-3 py-2 text-left shadow-[var(--shadow-border)]", i === sheetIndex ? "bg-elevated" : "bg-surface"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {
							ancestry: p.ancestry,
							classId: p.classId,
							size: 28
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-sm text-fg",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-[11px] text-muted",
								children: [p.controller === "human" ? "人类" : "智体", p.agentMind?.title ? ` · ${p.agentMind.title}` : ""]
							})]
						})]
					}, p.id))
				}),
				c.controller === "agent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-wide text-muted",
							children: "智体指令卡"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: "套用一张完整人物。声口、战术、驱力、习惯、边界会写进扮演提示。"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartyTemplatePicker, {
								value: c.agentMind?.templateId ?? "",
								onPick: (id) => applyAgentTemplate(c.id, id),
								dossier: false
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "mt-2 text-xs text-muted hover:text-fg",
							onClick: () => updateCharacter(c.id, { agentMind: classMindSkeleton(c.classId) }),
							children: "自拟骨架：保留姓名与职业，只填该职业的指令"
						})
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mt-6 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {
								ancestry: c.ancestry,
								classId: c.classId,
								size: 72
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-muted",
										children: [c.controller === "human" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs",
											children: c.playerLabel
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										className: "mt-1 h-12 bg-transparent px-0 text-2xl font-display shadow-none",
										value: c.name,
										onChange: (e) => updateCharacter(c.id, { name: e.target.value })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												className: "h-10 rounded-md bg-inset px-2 text-sm text-fg shadow-[var(--shadow-border)]",
												value: c.ancestry,
												onChange: (e) => updateCharacter(c.id, { ancestry: e.target.value }),
												children: ANCESTRY_LIST.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: a,
													children: ANCESTRY_LABEL[a]
												}, a))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												className: "h-10 rounded-md bg-inset px-2 text-sm text-fg shadow-[var(--shadow-border)]",
												value: c.classId,
												onChange: (e) => updateCharacter(c.id, { classId: e.target.value }),
												children: CLASS_LIST.map((cl) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: cl,
													children: CLASS_LABEL[cl]
												}, cl))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: c.background,
												onChange: (e) => updateCharacter(c.id, { background: e.target.value }),
												placeholder: "背景"
											})
										]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid grid-cols-3 gap-2 sm:grid-cols-6",
							children: Object.keys(c.abilities).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "rounded-lg bg-inset p-2 text-center shadow-[var(--shadow-border)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[11px] text-muted",
										children: ABILITY_LABEL[k]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 3,
										max: 20,
										className: "mt-1 w-full bg-transparent text-center font-display text-2xl tabular text-fg outline-none",
										value: c.abilities[k],
										onChange: (e) => updateCharacter(c.id, { abilities: {
											...c.abilities,
											[k]: Number(e.target.value)
										} })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs text-muted tabular",
										children: modLabel(abilityMod(c.abilities[k]))
									})
								]
							}, k))
						}),
						table.edition === "veil" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: Object.keys(c.veil).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [
								VEIL_LABEL[k],
								" ",
								modLabel(c.veil[k])
							] }, k))
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid grid-cols-3 gap-2 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "HP",
									value: `${c.hp}/${c.maxHp}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "AC",
									value: String(c.ac)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "熟练",
									value: `+${c.proficiency}`
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "受训技能" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex flex-wrap gap-1.5",
								children: SKILLS.map((s) => {
									const on = c.skillProfs.includes(s.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => updateCharacter(c.id, { skillProfs: on ? c.skillProfs.filter((x) => x !== s.id) : [...c.skillProfs, s.id] }),
										className: cn("h-8 rounded-full px-2.5 text-xs shadow-[var(--shadow-border)]", on ? "bg-primary text-primary-fg" : "bg-inset text-muted"),
										children: s.label
									}, s.id);
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-3 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "外形",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										rows: 2,
										value: c.appearance,
										onChange: (e) => updateCharacter(c.id, { appearance: e.target.value })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "性格",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										rows: 2,
										value: c.personality,
										onChange: (e) => updateCharacter(c.id, { personality: e.target.value })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "理想",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: c.ideal,
										onChange: (e) => updateCharacter(c.id, { ideal: e.target.value })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "羁绊",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: c.bond,
										onChange: (e) => updateCharacter(c.id, { bond: e.target.value })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "缺陷",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: c.flaw,
										onChange: (e) => updateCharacter(c.id, { flaw: e.target.value })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "装备（逗号分隔）",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: c.inventory.join("，"),
										onChange: (e) => updateCharacter(c.id, { inventory: e.target.value.split(/[，,]/).map((x) => x.trim()).filter(Boolean) })
									})
								})
							]
						}),
						c.controller === "agent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-xl bg-inset p-4 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-medium tracking-wide text-muted",
									children: ["智体指令", c.agentMind?.title ? ` · ${c.agentMind.title}` : ""]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-subtle",
									children: "这些字段会直接进入扮演提示，决定智体怎么说话、怎么动手、什么不做。"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 grid gap-3 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "声口",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
												rows: 2,
												value: c.agentMind?.voice ?? "",
												onChange: (e) => updateCharacter(c.id, { agentMind: {
													...c.agentMind,
													voice: e.target.value
												} })
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "战术",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
												rows: 2,
												value: c.agentMind?.tactics ?? "",
												onChange: (e) => updateCharacter(c.id, { agentMind: {
													...c.agentMind,
													tactics: e.target.value
												} })
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "驱力",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: c.agentMind?.drive ?? "",
												onChange: (e) => updateCharacter(c.id, { agentMind: {
													...c.agentMind,
													drive: e.target.value
												} })
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "习惯",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: c.agentMind?.tell ?? "",
												onChange: (e) => updateCharacter(c.id, { agentMind: {
													...c.agentMind,
													tell: e.target.value
												} })
											})
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "边界",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										className: "mt-2",
										rows: 2,
										value: c.agentMind?.boundary ?? "",
										onChange: (e) => updateCharacter(c.id, { agentMind: {
											...c.agentMind,
											boundary: e.target.value
										} })
									})
								})
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "往事",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								className: "mt-2",
								rows: 3,
								value: c.backstory,
								onChange: (e) => updateCharacter(c.id, { backstory: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "secondary",
								onClick: () => rerollCharacter(c.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dices, {}), " 重掷属性"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								disabled: busy,
								onClick: () => void aiFillCharacter(c.id),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, {}),
									" ",
									busy ? busyLabel : "智体填写此卡"
								]
							})]
						})
					]
				}),
				table.dm.controller === "agent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-wide text-muted",
							children: "DM 指令卡"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted",
							children: [
								table.dm.name,
								table.dm.title ? ` · ${table.dm.title}` : "",
								"。声口与节奏约束智体地下城主。"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DmTemplatePicker, {
								value: table.dm.templateId,
								onPick: (id) => applyDmSeatTemplate(id),
								dossier: false
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "声口",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									rows: 2,
									value: table.dm.voice,
									onChange: (e) => updateDm({ voice: e.target.value })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "节奏",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									rows: 2,
									value: table.dm.pacing,
									onChange: (e) => updateDm({ pacing: e.target.value })
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "边界",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								rows: 2,
								value: table.dm.boundary,
								onChange: (e) => updateDm({ boundary: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "人格",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								rows: 2,
								value: table.dm.persona,
								onChange: (e) => updateDm({ persona: e.target.value })
							})
						})
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						onClick: () => void enterPlay(),
						children: "入席开灯"
					})
				})
			]
		})
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-inset px-2 py-3 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl tabular text-fg",
			children: value
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
function App() {
	const screen = useTableStore((s) => s.screen);
	(0, import_react.useEffect)(() => {
		useTableStore.persist.rehydrate();
	}, []);
	if (screen === "setup") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Setup, {});
	if (screen === "sheets") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheets, {});
	if (screen === "play") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayTable, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landing, {});
}
//#endregion
export { App as component };
