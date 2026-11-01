export type Rng = () => number;

export function rollDie(sides: number, rng: Rng = Math.random): number {
  return 1 + Math.floor(rng() * sides);
}

export function rollDice(
  count: number,
  sides: number,
  rng: Rng = Math.random,
): { rolls: number[]; total: number } {
  const rolls = Array.from({ length: Math.max(1, count) }, () => rollDie(sides, rng));
  return { rolls, total: rolls.reduce((a, b) => a + b, 0) };
}

/** 4d6 drop lowest — classic array generation. */
export function roll4d6DropLowest(rng: Rng = Math.random): {
  kept: number[];
  dropped: number;
  total: number;
} {
  const rolls = Array.from({ length: 4 }, () => rollDie(6, rng)).sort((a, b) => a - b);
  const dropped = rolls[0]!;
  const kept = rolls.slice(1);
  return { kept, dropped, total: kept.reduce((a, b) => a + b, 0) };
}

export interface FormulaResult {
  formula: string;
  rolls: number[];
  modifier: number;
  total: number;
  detail: string;
  kept?: number[];
}

/**
 * Parse a compact formula: `1d20`, `2d6+3`, `4d6kh3`, `1d20adv`, `1d20dis`.
 */
export function rollFormula(formula: string, rng: Rng = Math.random): FormulaResult {
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
      detail: `${total}`,
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
    const tag = adv ? "优势" : "劣势";
    return {
      formula,
      rolls: [a, b],
      modifier,
      total,
      detail: `${tag} [${a}, ${b}] → ${picked}${modStr(modifier)} = ${total}`,
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
  const sum = used.reduce((a, b) => a + b, 0);
  const total = sum + modifier;
  const detail =
    rolls.length === used.length
      ? `[${rolls.join(", ")}]${modStr(modifier)} = ${total}`
      : `[${rolls.join(", ")}] 取 ${used.join("+")}${modStr(modifier)} = ${total}`;
  return { formula, rolls, modifier, total, detail, kept: used };
}

function modStr(n: number) {
  if (n === 0) return "";
  return n > 0 ? ` + ${n}` : ` − ${Math.abs(n)}`;
}

export function d20(rng: Rng = Math.random) {
  return rollDie(20, rng);
}
