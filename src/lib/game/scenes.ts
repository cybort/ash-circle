import { uid } from "@/lib/utils";
import type { Biome, Character, SceneState, SceneToken } from "./types";

export function blankGrid(w = 16, h = 10, fill = "."): string {
  return fill.repeat(w * h);
}

export function setTile(tiles: string, w: number, x: number, y: number, ch: string) {
  const i = y * w + x;
  if (i < 0 || i >= tiles.length) return tiles;
  return tiles.slice(0, i) + ch + tiles.slice(i + 1);
}

export function paintRect(
  tiles: string,
  w: number,
  h: number,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  ch: string,
) {
  let t = tiles;
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      if (x >= 0 && y >= 0 && x < w && y < h) t = setTile(t, w, x, y, ch);
    }
  }
  return t;
}

export function paintH(tiles: string, w: number, x0: number, x1: number, y: number, ch: string) {
  let t = tiles;
  for (let x = x0; x <= x1; x++) t = setTile(t, w, x, y, ch);
  return t;
}

export function paintV(tiles: string, w: number, x: number, y0: number, y1: number, ch: string) {
  let t = tiles;
  for (let y = y0; y <= y1; y++) t = setTile(t, w, x, y, ch);
  return t;
}

export function innGrid(): { w: number; h: number; tiles: string } {
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
  return { w, h, tiles: t };
}

export function forestGrid(): { w: number; h: number; tiles: string } {
  const w = 16;
  const h = 10;
  let t = blankGrid(w, h, ",");
  const trees = [
    [1, 1], [3, 2], [2, 5], [0, 7], [4, 8], [12, 1], [14, 3], [13, 6], [15, 8], [10, 9],
    [7, 0], [9, 2],
  ];
  for (const [x, y] of trees) t = setTile(t, w, x, y, "^");
  t = paintH(t, w, 4, 11, 4, ".");
  t = paintH(t, w, 5, 10, 5, ".");
  t = setTile(t, w, 8, 6, "*");
  t = setTile(t, w, 6, 7, "%");
  return { w, h, tiles: t };
}

export function cellarGrid(): { w: number; h: number; tiles: string } {
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
  return { w, h, tiles: t };
}

export function dungeonGrid(): { w: number; h: number; tiles: string } {
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
  return { w, h, tiles: t };
}

export function coastGrid(): { w: number; h: number; tiles: string } {
  const w = 16;
  const h = 10;
  let t = blankGrid(w, h, ",");
  t = paintRect(t, w, h, 0, 6, 15, 9, "~");
  t = paintH(t, w, 0, 15, 6, ".");
  t = setTile(t, w, 3, 4, "^");
  t = setTile(t, w, 12, 3, "^");
  t = setTile(t, w, 8, 5, "o");
  t = setTile(t, w, 7, 5, "%");
  return { w, h, tiles: t };
}

export function ruinsGrid(): { w: number; h: number; tiles: string } {
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
  return { w, h, tiles: t };
}

export function caveGrid(): { w: number; h: number; tiles: string } {
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
  return { w, h, tiles: t };
}

export function cityGrid(): { w: number; h: number; tiles: string } {
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
  return { w, h, tiles: t };
}

export function snowGrid(): { w: number; h: number; tiles: string } {
  const w = 16;
  const h = 10;
  let t = blankGrid(w, h, "_");
  t = setTile(t, w, 2, 2, "^");
  t = setTile(t, w, 13, 1, "^");
  t = setTile(t, w, 10, 7, "^");
  t = paintH(t, w, 4, 11, 5, ".");
  t = setTile(t, w, 7, 4, "*");
  t = setTile(t, w, 8, 6, "o");
  return { w, h, tiles: t };
}

export function roadGrid(): { w: number; h: number; tiles: string } {
  const w = 16;
  const h = 10;
  let t = blankGrid(w, h, ",");
  t = paintH(t, w, 0, 15, 4, ".");
  t = paintH(t, w, 0, 15, 5, ".");
  t = setTile(t, w, 2, 2, "^");
  t = setTile(t, w, 12, 7, "^");
  t = setTile(t, w, 8, 3, "*");
  t = setTile(t, w, 6, 6, "o");
  return { w, h, tiles: t };
}

const BIOME_BUILDERS: Record<Biome, () => { w: number; h: number; tiles: string }> = {
  inn: innGrid,
  forest: forestGrid,
  dungeon: dungeonGrid,
  cave: caveGrid,
  cellar: cellarGrid,
  coast: coastGrid,
  ruins: ruinsGrid,
  city: cityGrid,
  snow: snowGrid,
  road: roadGrid,
};

export function gridForBiome(biome: Biome) {
  return BIOME_BUILDERS[biome]();
}

export function partyTokens(party: Character[], spots: [number, number][]): SceneToken[] {
  return party.map((p, i) => {
    const [x, y] = spots[i] ?? [2 + i * 2, 6];
    return {
      id: p.id,
      x,
      y,
      kind: "pc" as const,
      name: p.name,
      glyph: p.glyph,
      tint: p.tint,
    };
  });
}

export function overlayAscii(
  grid: { w: number; h: number; tiles: string },
  tokens: SceneToken[],
  title: string,
): string {
  const rows: string[] = [];
  for (let y = 0; y < grid.h; y++) {
    let row = "";
    for (let x = 0; x < grid.w; x++) {
      const tok = tokens.find((t) => t.x === x && t.y === y);
      row += tok ? tok.glyph : (grid.tiles[y * grid.w + x] ?? " ");
    }
    rows.push(row);
  }
  const innerW = grid.w;
  const line = "─".repeat(innerW + 2);
  const head = title.length > innerW ? title.slice(0, innerW) : title.padEnd(innerW, " ");
  return `┌${line}┐\n│ ${head} │\n├${line}┤\n${rows.map((r) => `│ ${r} │`).join("\n")}\n└${line}┘`;
}

export function makeScene(partial: Partial<SceneState> & Pick<SceneState, "title" | "location" | "biome" | "prose">, party: Character[]): SceneState {
  const grid = partial.grid ?? gridForBiome(partial.biome);
  const tokens =
    partial.tokens ??
    partyTokens(party, defaultSpots(partial.biome));
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
    npcs: partial.npcs ?? [],
  };
}

function defaultSpots(biome: Biome): [number, number][] {
  if (biome === "inn") return [[3, 6], [5, 7], [4, 7]];
  if (biome === "cellar") return [[2, 6], [3, 5], [4, 6]];
  if (biome === "forest") return [[6, 5], [7, 6], [8, 5]];
  if (biome === "coast") return [[5, 4], [6, 5], [7, 4]];
  return [[3, 5], [4, 6], [5, 5]];
}

export function parseGridPayload(
  raw: unknown,
  fallback: Biome,
): { w: number; h: number; tiles: string } {
  if (
    raw &&
    typeof raw === "object" &&
    "w" in raw &&
    "h" in raw &&
    "tiles" in raw
  ) {
    const w = Number((raw as { w: number }).w) || 16;
    const h = Number((raw as { h: number }).h) || 10;
    let tiles = String((raw as { tiles: string }).tiles).replace(/\s+/g, "");
    const need = w * h;
    if (tiles.length < need) tiles = tiles.padEnd(need, ".");
    if (tiles.length > need) tiles = tiles.slice(0, need);
    return { w, h, tiles };
  }
  return gridForBiome(fallback);
}

export function newCheck(label: string, skill: string, dc: number, who?: string) {
  return { id: uid(), label, skill, dc, who };
}
