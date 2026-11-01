import type {
  Ability,
  AbilityScores,
  Character,
  ClassId,
  RuleEdition,
  RuleMods,
} from "./types";
import { SKILLS } from "./types";
import { rollFormula } from "./dice";

export function abilityMod(score: number): number {
  return Math.floor((score - 10) / 2);
}

export function modLabel(n: number): string {
  return n >= 0 ? `+${n}` : `${n}`;
}

export function proficiencyForLevel(level: number): number {
  return 2 + Math.floor((Math.max(1, level) - 1) / 4);
}

export const CLASS_HIT: Record<ClassId, number> = {
  fighter: 10,
  ranger: 10,
  wizard: 6,
  cleric: 8,
  rogue: 8,
  bard: 8,
};

export const CLASS_SAVES: Record<ClassId, Ability[]> = {
  fighter: ["str", "con"],
  ranger: ["str", "dex"],
  wizard: ["int", "wis"],
  cleric: ["wis", "cha"],
  rogue: ["dex", "int"],
  bard: ["dex", "cha"],
};

export const CLASS_SKILLS: Record<ClassId, string[]> = {
  fighter: ["athletics", "intimidation", "perception", "survival"],
  ranger: ["nature", "perception", "stealth", "survival", "animal"],
  wizard: ["arcana", "history", "investigation", "religion"],
  cleric: ["insight", "medicine", "religion", "persuasion"],
  rogue: ["acrobatics", "deception", "sleight", "stealth", "perception"],
  bard: ["persuasion", "performance", "deception", "insight", "history"],
};

export const CLASS_WEAPON: Record<ClassId, { atk: Ability; dmg: string; name: string }> = {
  fighter: { atk: "str", dmg: "1d8", name: "长剑" },
  ranger: { atk: "dex", dmg: "1d8", name: "长弓" },
  wizard: { atk: "int", dmg: "1d10", name: "火焰射线" },
  cleric: { atk: "wis", dmg: "1d8", name: "神圣打击" },
  rogue: { atk: "dex", dmg: "1d6", name: "短剑" },
  bard: { atk: "cha", dmg: "1d8", name: "嘲讽韵律" },
};

export function maxHpFor(c: Pick<Character, "classId" | "level" | "abilities">, lethality = 3) {
  const die = CLASS_HIT[c.classId];
  const con = abilityMod(c.abilities.con);
  const avg = Math.floor(die / 2) + 1;
  const base = die + con + (c.level - 1) * (avg + con);
  const factor = [1.4, 1.2, 1, 0.8, 0.6][Math.max(0, Math.min(4, lethality - 1))]!;
  return Math.max(4, Math.round(base * factor));
}

export function armorClassFor(c: Pick<Character, "classId" | "abilities">) {
  const dex = abilityMod(c.abilities.dex);
  if (c.classId === "wizard" || c.classId === "bard") return 10 + dex;
  if (c.classId === "rogue" || c.classId === "ranger") return 12 + Math.min(2, dex) + (dex > 2 ? 1 : 0);
  if (c.classId === "cleric") return 14 + Math.min(2, dex);
  return 16;
}

export function skillMod(c: Character, skillId: string, edition: RuleEdition): number {
  const skill = SKILLS.find((s) => s.id === skillId);
  const pb = c.proficiency;
  if (edition === "veil") {
    const map: Record<string, keyof Character["veil"]> = {
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
      persuasion: "charm",
    };
    const key = map[skillId] ?? "cool";
    return c.veil[key] ?? 0;
  }
  if (edition === "ashlight") {
    const group: Record<Ability, number> = {
      str: abilityMod(Math.round((c.abilities.str + c.abilities.con) / 2)),
      dex: abilityMod(c.abilities.dex),
      con: abilityMod(c.abilities.con),
      int: abilityMod(c.abilities.int),
      wis: abilityMod(c.abilities.wis),
      cha: abilityMod(c.abilities.cha),
    };
    const ab = skill?.ability ?? "wis";
    const trained = c.skillProfs.includes(skillId) ? 2 : 0;
    return group[ab] + trained;
  }
  const ab = skill?.ability ?? "wis";
  const trained = c.skillProfs.includes(skillId) ? pb : 0;
  return abilityMod(c.abilities[ab]) + trained;
}

export function dcOffset(mods: RuleMods): number {
  return [-2, -1, 0, 2, 4][Math.max(0, Math.min(4, mods.difficulty - 1))]!;
}

export interface CheckResult {
  total: number;
  dc: number;
  success: boolean;
  degree: "crit" | "success" | "mixed" | "fail" | "fumble";
  detail: string;
  formula: string;
}

export function resolveCheck(
  c: Character,
  skillId: string,
  dc: number,
  edition: RuleEdition,
  opts?: { adv?: boolean; dis?: boolean },
): CheckResult {
  const bonus = skillMod(c, skillId, edition);
  if (edition === "veil") {
    const r = rollFormula(`2d6${bonus >= 0 ? "+" : ""}${bonus}`);
    let degree: CheckResult["degree"] = "fail";
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
      formula: r.formula,
    };
  }
  const flag = opts?.adv ? "adv" : opts?.dis ? "dis" : "";
  const r = rollFormula(`1d20${flag}${bonus >= 0 ? "+" : ""}${bonus}`);
  const nat = r.rolls[0] ?? 10;
  let degree: CheckResult["degree"] = r.total >= dc ? "success" : "fail";
  if (nat === 20) degree = "crit";
  if (nat === 1) degree = "fumble";
  return {
    total: r.total,
    dc,
    success: degree === "crit" || (degree !== "fumble" && r.total >= dc),
    degree,
    detail: r.detail,
    formula: r.formula,
  };
}

export function attackBonus(c: Character, edition: RuleEdition): number {
  const w = CLASS_WEAPON[c.classId];
  if (edition === "veil") return c.veil.sharp;
  if (edition === "ashlight") return abilityMod(c.abilities[w.atk]) + 2;
  return abilityMod(c.abilities[w.atk]) + c.proficiency;
}

export function resolveAttack(c: Character, ac: number, edition: RuleEdition) {
  const bonus = attackBonus(c, edition);
  if (edition === "veil") {
    const r = rollFormula(`2d6${bonus >= 0 ? "+" : ""}${bonus}`);
    const hit = r.total >= 7;
    const dmg = hit ? rollFormula(CLASS_WEAPON[c.classId].dmg) : null;
    return { hit, crit: r.total >= 12, roll: r, damage: dmg };
  }
  const r = rollFormula(`1d20${bonus >= 0 ? "+" : ""}${bonus}`);
  const nat = r.rolls[0] ?? 10;
  const crit = nat === 20;
  const hit = crit || (nat !== 1 && r.total >= ac);
  const dmg = hit
    ? rollFormula(crit ? CLASS_WEAPON[c.classId].dmg.replace("1d", "2d") : CLASS_WEAPON[c.classId].dmg)
    : null;
  if (dmg) {
    const extra = abilityMod(c.abilities[CLASS_WEAPON[c.classId].atk]);
    dmg.total += Math.max(0, extra);
    dmg.detail += extra ? ` + ${extra} = ${dmg.total}` : "";
  }
  return { hit, crit, roll: r, damage: dmg };
}

export function scoreLabel(scores: AbilityScores): { key: Ability; score: number; mod: number }[] {
  return (Object.keys(scores) as Ability[]).map((key) => ({
    key,
    score: scores[key],
    mod: abilityMod(scores[key]),
  }));
}

export function hpTint(hp: number, max: number) {
  const r = max <= 0 ? 0 : hp / max;
  if (r <= 0) return "text-danger";
  if (r <= 0.3) return "text-danger";
  if (r <= 0.6) return "text-warn";
  return "text-ok";
}

export function editionCheckHint(edition: RuleEdition): string {
  if (edition === "veil") return "掷 2d6 + 态度。10+ 全成，7–9 成功但有代价，6− 失手。";
  if (edition === "ashlight") return "掷 d20 + 相关三围调整值，对抗难度。";
  return "掷 d20 + 属性调整值 + 熟练（若受训），对抗难度等级。";
}
