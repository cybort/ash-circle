import type { AncestryId, ClassId } from "@/lib/game/types";
import { CLASS_TINT } from "@/lib/game/characters";

export function Portrait({
  ancestry,
  classId,
  size = 56,
}: {
  ancestry: AncestryId;
  classId: ClassId;
  size?: number;
}) {
  const tint = CLASS_TINT[classId];
  const ear = ancestry === "elf" || ancestry === "tiefling";
  const horn = ancestry === "tiefling" || ancestry === "dragonborn";
  const beard = ancestry === "dwarf";
  const short = ancestry === "halfling";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden
      className="shrink-0 rounded-md shadow-[var(--shadow-border)]"
    >
      <rect width="32" height="32" fill="#1c1916" />
      <rect x="0" y="24" width="32" height="8" fill="#141210" />
      {horn ? <rect x="8" y="4" width="3" height="4" fill={tint} /> : null}
      {horn ? <rect x="21" y="4" width="3" height="4" fill={tint} /> : null}
      {ear ? <rect x="6" y="10" width="3" height="5" fill={tint} /> : null}
      {ear ? <rect x="23" y="10" width="3" height="5" fill={tint} /> : null}
      <rect x="10" y={short ? 10 : 8} width="12" height="10" fill={tint} />
      <rect x="13" y={short ? 13 : 11} width="2" height="2" fill="#0c0b0a" />
      <rect x="18" y={short ? 13 : 11} width="2" height="2" fill="#0c0b0a" />
      {beard ? <rect x="11" y="18" width="10" height="5" fill="#6e6960" /> : null}
      <rect x="11" y={short ? 20 : 18} width="10" height="8" fill={shade(tint)} />
      {classId === "wizard" ? <rect x="8" y="4" width="16" height="4" fill="#2a2622" /> : null}
      {classId === "cleric" ? <rect x="14" y="4" width="4" height="4" fill="#ece7dc" /> : null}
    </svg>
  );
}

function shade(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, ((n >> 16) & 255) - 30);
  const g = Math.max(0, ((n >> 8) & 255) - 30);
  const b = Math.max(0, (n & 255) - 30);
  return `rgb(${r},${g},${b})`;
}
