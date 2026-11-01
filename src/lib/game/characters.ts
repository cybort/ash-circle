import { uid } from "@/lib/utils";
import { roll4d6DropLowest } from "./dice";
import {
  armorClassFor,
  CLASS_SAVES,
  CLASS_SKILLS,
  maxHpFor,
  proficiencyForLevel,
} from "./rules";
import type {
  Ability,
  AbilityScores,
  AgentMind,
  AncestryId,
  Character,
  ClassId,
  Controller,
  VeilStat,
} from "./types";

const STANDARD = [15, 14, 13, 12, 10, 8];

export const EMPTY_MIND: AgentMind = {
  templateId: "",
  title: "",
  voice: "",
  tactics: "",
  drive: "",
  tell: "",
  boundary: "不代替人类玩家做选择。不叙述世界结果。不打破第四墙。",
};

const CLASS_PRI: Record<ClassId, Ability[]> = {
  fighter: ["str", "con", "dex", "wis", "cha", "int"],
  ranger: ["dex", "wis", "con", "str", "int", "cha"],
  wizard: ["int", "dex", "con", "wis", "cha", "str"],
  cleric: ["wis", "con", "cha", "str", "dex", "int"],
  rogue: ["dex", "int", "cha", "con", "wis", "str"],
  bard: ["cha", "dex", "int", "con", "wis", "str"],
};

export const ANCESTRY_BONUS: Record<AncestryId, Partial<AbilityScores>> = {
  human: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
  elf: { dex: 2, int: 1 },
  dwarf: { con: 2, str: 1 },
  halfling: { dex: 2, cha: 1 },
  dragonborn: { str: 2, cha: 1 },
  tiefling: { cha: 2, int: 1 },
};

export const CLASS_GLYPH: Record<ClassId, string> = {
  fighter: "@",
  ranger: ">",
  wizard: "*",
  cleric: "+",
  rogue: "&",
  bard: "~",
};

export const CLASS_TINT: Record<ClassId, string> = {
  fighter: "#c4b8a4",
  ranger: "#8aa07a",
  wizard: "#7a8ea8",
  cleric: "#c9b07a",
  rogue: "#8a7a86",
  bard: "#b48a7a",
};

export const CLASS_FEATURES: Record<ClassId, string[]> = {
  fighter: ["战斗风格：防御", "第二次攻击（长休后恢复一次）", "回气"],
  ranger: ["宿敌：野兽与游荡者", "天生探索者", "猎人印记"],
  wizard: ["奥术回复", "法术书", "法术位 2 / 1"],
  cleric: ["引导神力：驱散", "领域法术", "疗伤术"],
  rogue: ["偷袭 1d6", "灵巧动作", "盗贼行话"],
  bard: ["激励之语 1d6", "戏法", "法术位 2"],
};

export const CLASS_SPELLS: Record<ClassId, string[]> = {
  fighter: [],
  ranger: ["猎人印记"],
  wizard: ["魔法飞弹", "护盾术", "侦测魔法", "睡眠术"],
  cleric: ["疗伤术", "祝福术", "神圣火焰", "光亮术"],
  rogue: [],
  bard: ["魅惑人类", "治愈真言", "恶言相向"],
};

export const CLASS_GEAR: Record<ClassId, string[]> = {
  fighter: ["长剑", "盾", "链甲", "旅行口粮", "火绒盒", "10 gp"],
  ranger: ["长弓", "20 支箭", "短剑", "皮甲", "捕兽夹", "12 gp"],
  wizard: ["法杖", "法术书", "墨水与笔", "袍", "成分袋", "8 gp"],
  cleric: ["钉头锤", "盾", "圣徽", "鳞甲", "治疗包", "15 gp"],
  rogue: ["短剑", "短弓", "盗贼工具", "皮甲", "撬棍", "18 gp"],
  bard: ["刺剑", "鲁特琴", "皮甲", "戏服", "墨水", "14 gp"],
};

const NAMES: Record<AncestryId, string[]> = {
  human: ["顾衡", "沈岚", "乔麦", "林朔", "韩迟"],
  elf: ["灰羽", "银叶", "暮弦", "白荆", "夜河"],
  dwarf: ["铁荞", "石担", "炉灰", "盐须", "岩盏"],
  halfling: ["豆灯", "麦芽", "软靴", "篱笆", "茶匙"],
  dragonborn: ["赤鳞", "霜喉", "烬牙", "铜脊", "雾息"],
  tiefling: ["盐灯", "炭瞳", "绛声", "残烛", "夜誓"],
};

export function emptyScores(): AbilityScores {
  return { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };
}

export function assignArray(cls: ClassId, values = STANDARD): AbilityScores {
  const scores = emptyScores();
  const pri = CLASS_PRI[cls];
  pri.forEach((ab, i) => {
    scores[ab] = values[i] ?? 10;
  });
  return scores;
}

export function applyAncestry(scores: AbilityScores, ancestry: AncestryId): AbilityScores {
  const next = { ...scores };
  const b = ANCESTRY_BONUS[ancestry];
  (Object.keys(b) as Ability[]).forEach((k) => {
    next[k] = (next[k] ?? 10) + (b[k] ?? 0);
  });
  return next;
}

export function rollScores(cls: ClassId): AbilityScores {
  const rolls = Array.from({ length: 6 }, () => roll4d6DropLowest().total).sort((a, b) => b - a);
  return assignArray(cls, rolls);
}

export function veilFromAbilities(a: AbilityScores): Record<VeilStat, number> {
  const clamp = (n: number) => Math.max(-1, Math.min(2, n));
  const m = (n: number) => Math.floor((n - 10) / 2);
  return {
    cool: clamp(m(a.wis)),
    sharp: clamp(m(a.int)),
    tough: clamp(m(a.con)),
    wild: clamp(m(a.dex)),
    charm: clamp(m(a.cha)),
  };
}

export function deriveCombat(c: Pick<Character, "classId" | "level" | "abilities">, lethality = 3) {
  const hp = maxHpFor(c, lethality);
  return {
    hp,
    maxHp: hp,
    ac: armorClassFor(c),
    speed: 30,
    proficiency: proficiencyForLevel(c.level),
  };
}

export interface DraftOpts {
  controller: Controller;
  playerLabel: string;
  name?: string;
  ancestry?: AncestryId;
  classId?: ClassId;
  level?: number;
  method?: "array" | "roll";
  lethality?: number;
}

export function makeCharacter(opts: DraftOpts): Character {
  const classId = opts.classId ?? "fighter";
  const ancestry = opts.ancestry ?? "human";
  const level = opts.level ?? 1;
  const base = opts.method === "roll" ? rollScores(classId) : assignArray(classId);
  const abilities = applyAncestry(base, ancestry);
  const derived = deriveCombat({ classId, level, abilities }, opts.lethality ?? 3);
  const name =
    opts.name ??
    NAMES[ancestry][Math.floor(Math.random() * NAMES[ancestry].length)] ??
    "无名";
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
    deathSaves: { success: 0, fail: 0 },
    inspiration: false,
    glyph: CLASS_GLYPH[classId],
    tint: CLASS_TINT[classId],
    agentMind: { ...EMPTY_MIND },
  };
}

function defaultBackground(cls: ClassId) {
  const map: Record<ClassId, string> = {
    fighter: "士兵",
    ranger: "流浪者",
    wizard: "学者",
    cleric: "侍僧",
    rogue: "罪犯",
    bard: "艺人",
  };
  return map[cls];
}

function defaultAppearance(a: AncestryId, cls: ClassId) {
  return `一名${ancestryWord(a)}${classWord(cls)}，风尘未洗，衣襟上有灯油与盐的气味。`;
}

function ancestryWord(a: AncestryId) {
  const m: Record<AncestryId, string> = {
    human: "人类",
    elf: "精灵",
    dwarf: "矮人",
    halfling: "半身人",
    dragonborn: "龙裔",
    tiefling: "提夫林",
  };
  return m[a];
}
function classWord(c: ClassId) {
  const m: Record<ClassId, string> = {
    fighter: "战士",
    ranger: "游侠",
    wizard: "法师",
    cleric: "牧师",
    rogue: "游荡者",
    bard: "诗人",
  };
  return m[c];
}

function defaultPersonality(cls: ClassId) {
  const m: Record<ClassId, string> = {
    fighter: "话少，先看门，再看人。",
    ranger: "习惯站在光的边缘。",
    wizard: "把世界当成一本未读完的书。",
    cleric: "先问伤势，再问名字。",
    rogue: "笑容比刀快半拍。",
    bard: "总要给沉默找一个韵脚。",
  };
  return m[cls];
}

function defaultIdeal(cls: ClassId) {
  const m: Record<ClassId, string> = {
    fighter: "有人必须挡在前面。",
    ranger: "路比城更诚实。",
    wizard: "未知值得付代价。",
    cleric: "光不是口号，是手艺。",
    rogue: "活着比体面重要。",
    bard: "故事必须被记住。",
  };
  return m[cls];
}

function defaultFlaw(cls: ClassId) {
  const m: Record<ClassId, string> = {
    fighter: "把所有问题都当成可以砍开的结。",
    ranger: "不信任关着的门。",
    wizard: "好奇会盖过危险。",
    cleric: "难以放过需要被拯救的人。",
    rogue: "口袋比承诺更忠实。",
    bard: "忍不住把秘密说成段子。",
  };
  return m[cls];
}

function defaultBackstory(name: string, a: AncestryId, cls: ClassId) {
  return `${name}离开原乡已有一季。作为${ancestryWord(a)}${classWord(cls)}，ta 随身只带够今晚投宿的钱，以及一张还没写完的角色卡。`;
}

export function recomputeDerived(c: Character, lethality = 3): Character {
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
    agentMind: { ...EMPTY_MIND, ...c.agentMind },
  };
}

export function quickParty(): Character[] {
  return [
    makeCharacter({
      controller: "human",
      playerLabel: "你",
      name: "乔麦",
      ancestry: "human",
      classId: "fighter",
    }),
    makeCharacter({
      controller: "agent",
      playerLabel: "智体",
      name: "灰羽",
      ancestry: "elf",
      classId: "ranger",
    }),
    makeCharacter({
      controller: "agent",
      playerLabel: "智体",
      name: "盐灯",
      ancestry: "tiefling",
      classId: "wizard",
    }),
  ];
}

export const ANCESTRY_LIST: AncestryId[] = [
  "human",
  "elf",
  "dwarf",
  "halfling",
  "dragonborn",
  "tiefling",
];
export const CLASS_LIST: ClassId[] = [
  "fighter",
  "ranger",
  "wizard",
  "cleric",
  "rogue",
  "bard",
];
