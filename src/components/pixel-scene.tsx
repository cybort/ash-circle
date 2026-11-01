import { useEffect, useRef } from "react";
import type { SceneState } from "@/lib/game/types";

const TW = 16;
const TH = 10;
const TILE = 16;

const TILE_COLOR: Record<string, [number, number, number]> = {
  "#": [42, 38, 34],
  ".": [96, 84, 70],
  ",": [72, 96, 64],
  "=": [110, 78, 50],
  "+": [102, 74, 48],
  "~": [58, 96, 112],
  "^": [44, 72, 46],
  "*": [196, 124, 58],
  "%": [86, 74, 64],
  o: [112, 86, 56],
  _: [148, 138, 122],
};

function biomeFloor(biome: string): [number, number, number] {
  switch (biome) {
    case "inn":
      return [82, 62, 46];
    case "forest":
      return [40, 58, 36];
    case "cellar":
    case "dungeon":
    case "cave":
      return [38, 36, 34];
    case "coast":
      return [72, 68, 52];
    case "snow":
      return [180, 180, 176];
    case "city":
      return [70, 66, 60];
    default:
      return [58, 54, 46];
  }
}

function shade(c: [number, number, number], n: number): [number, number, number] {
  return [
    Math.max(0, Math.min(255, c[0] + n)),
    Math.max(0, Math.min(255, c[1] + n)),
    Math.max(0, Math.min(255, c[2] + n)),
  ];
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((x) => x + x).join("") : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function PixelScene({ scene }: { scene: SceneState }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;
    let raf = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = (t: number) => {
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

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const ch = scene.grid.tiles[y * w + x] ?? ".";
          let col = TILE_COLOR[ch] ?? floor;
          if (ch === "*") col = shade(col, flicker);
          const dither = ((x + y) & 1) === 0 ? -4 : 3;
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
            ctx.fillStyle = `rgba(180,220,230,${0.12 + (reduced ? 0 : Math.sin(t / 240 + x) * 0.08)})`;
            ctx.fillRect(x * TILE, y * TILE + 8, TILE, 3);
          }
          if (ch === "*") {
            ctx.fillStyle = `rgba(236,180,90,${0.35 + flicker / 40})`;
            ctx.fillRect(x * TILE + 6, y * TILE + 4, 4, 6);
            ctx.fillStyle = "rgb(60,40,28)";
            ctx.fillRect(x * TILE + 7, y * TILE + 10, 2, 6);
          }
        }
      }

      for (const tok of scene.tokens) {
        const px = tok.x * TILE;
        const py = tok.y * TILE;
        const rgb = hexToRgb(tok.tint || "#d6d0c4");
        // body
        ctx.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
        if (tok.kind === "prop") {
          ctx.fillRect(px + 4, py + 6, 8, 8);
        } else if (tok.kind === "monster") {
          ctx.fillRect(px + 3, py + 4, 10, 10);
          ctx.fillStyle = "rgb(20,16,14)";
          ctx.fillRect(px + 5, py + 6, 2, 2);
          ctx.fillRect(px + 9, py + 6, 2, 2);
        } else {
          // humanoid 8-bit
          ctx.fillRect(px + 6, py + 2, 4, 4); // head
          ctx.fillRect(px + 5, py + 6, 6, 6); // torso
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

  return (
    <canvas
      ref={ref}
      className="h-full w-full rounded-md"
      style={{ imageRendering: "pixelated" }}
      aria-label={scene.location}
    />
  );
}
