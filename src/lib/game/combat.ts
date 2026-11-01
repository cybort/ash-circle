import { uid } from "@/lib/utils";
import { d20, rollFormula } from "./dice";
import { attackBonus, CLASS_WEAPON, resolveAttack } from "./rules";
import type { Character, Combatant, CombatState, RuleEdition } from "./types";

export function startCombat(
  party: Character[],
  enemies: Combatant[],
  edition: RuleEdition,
): CombatState {
  const pcs: Combatant[] = party
    .filter((p) => p.hp > 0)
    .map((p) => ({
      id: p.id,
      name: p.name,
      side: "party" as const,
      hp: p.hp,
      maxHp: p.maxHp,
      ac: p.ac,
      init: d20() + Math.floor((p.abilities.dex - 10) / 2),
      atkMod: attackBonus(p, edition),
      dmg: CLASS_WEAPON[p.classId].dmg,
      characterId: p.id,
    }));
  const foes: Combatant[] = enemies.map((e) => ({
    ...e,
    init: e.init || d20() + 1,
  }));
  const combatants = [...pcs, ...foes];
  const order = [...combatants].sort((a, b) => b.init - a.init).map((c) => c.id);
  return {
    active: true,
    round: 1,
    order,
    whose: 0,
    combatants,
  };
}

export function currentCombatant(c: CombatState): Combatant | undefined {
  const id = c.order[c.whose];
  return c.combatants.find((x) => x.id === id);
}

export function living(c: CombatState, side: Combatant["side"]) {
  return c.combatants.filter((x) => x.side === side && x.hp > 0);
}

export function combatOver(c: CombatState): "party" | "enemy" | null {
  if (living(c, "party").length === 0) return "enemy";
  if (living(c, "enemy").length === 0) return "party";
  return null;
}

export function advanceTurn(c: CombatState): CombatState {
  const next = { ...c, combatants: c.combatants.map((x) => ({ ...x })) };
  let i = next.whose;
  for (let n = 0; n < next.order.length; n++) {
    i = (i + 1) % next.order.length;
    const id = next.order[i]!;
    const who = next.combatants.find((x) => x.id === id);
    if (who && who.hp > 0) {
      next.whose = i;
      if (i === 0) next.round += 1;
      return next;
    }
  }
  return next;
}

export interface AttackOutcome {
  attacker: Combatant;
  target: Combatant;
  hit: boolean;
  crit: boolean;
  damage: number;
  text: string;
  combat: CombatState;
}

export function performAttack(
  combat: CombatState,
  attackerId: string,
  targetId: string,
  actor?: Character,
  edition: RuleEdition = "ember5e",
): AttackOutcome {
  const next: CombatState = {
    ...combat,
    combatants: combat.combatants.map((x) => ({ ...x })),
  };
  const attacker = next.combatants.find((x) => x.id === attackerId)!;
  const target = next.combatants.find((x) => x.id === targetId)!;
  let hit = false;
  let crit = false;
  let damage = 0;
  let text = "";
  if (actor) {
    const r = resolveAttack(actor, target.ac, edition);
    hit = r.hit;
    crit = r.crit;
    damage = r.damage?.total ?? 0;
    text = hit
      ? `${attacker.name} 击中 ${target.name}${crit ? "（重击）" : ""}，${r.roll.detail} vs AC ${target.ac}，造成 ${damage} 点伤害。`
      : `${attacker.name} 未击中 ${target.name}。${r.roll.detail} vs AC ${target.ac}。`;
  } else {
    const roll = rollFormula(`1d20${attacker.atkMod >= 0 ? "+" : ""}${attacker.atkMod}`);
    const nat = roll.rolls[0] ?? 10;
    crit = nat === 20;
    hit = crit || (nat !== 1 && roll.total >= target.ac);
    if (hit) {
      const d = rollFormula(crit ? attacker.dmg.replace("1d", "2d") : attacker.dmg);
      damage = d.total;
      text = `${attacker.name} 击中 ${target.name}${crit ? "（重击）" : ""}，${roll.detail} vs AC ${target.ac}，造成 ${damage} 点伤害。`;
    } else {
      text = `${attacker.name} 未击中 ${target.name}。${roll.detail} vs AC ${target.ac}。`;
    }
  }
  if (hit) {
    target.hp = Math.max(0, target.hp - damage);
    if (target.hp === 0) text += ` ${target.name} 倒下。`;
  }
  return { attacker, target, hit, crit, damage, text, combat: next };
}

export function pickEnemyTarget(combat: CombatState): Combatant | undefined {
  const foes = living(combat, "enemy");
  return foes.sort((a, b) => a.hp - b.hp)[0];
}

export function pickPartyTarget(combat: CombatState): Combatant | undefined {
  const pcs = living(combat, "party");
  return pcs[Math.floor(Math.random() * pcs.length)];
}

export function makeEnemy(name: string, hp: number, ac: number, atk: number, dmg: string): Combatant {
  return {
    id: uid(),
    name,
    side: "enemy",
    hp,
    maxHp: hp,
    ac,
    init: 0,
    atkMod: atk,
    dmg,
  };
}
