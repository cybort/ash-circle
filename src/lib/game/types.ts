export const SAVE_VERSION = 2;

export type RuleEdition = "ember5e" | "veil" | "ashlight";
export type Presentation = "text" | "ascii" | "pixel";
export type Controller = "human" | "agent";
export type Ability = "str" | "dex" | "con" | "int" | "wis" | "cha";
export type VeilStat = "cool" | "sharp" | "tough" | "wild" | "charm";
export type AncestryId =
  | "human"
  | "elf"
  | "dwarf"
  | "halfling"
  | "dragonborn"
  | "tiefling";
export type ClassId = "fighter" | "ranger" | "wizard" | "cleric" | "rogue" | "bard";
export type Screen = "landing" | "setup" | "sheets" | "play";
export type LogKind = "narration" | "action" | "roll" | "system" | "combat" | "whisper";
export type Biome =
  | "inn"
  | "forest"
  | "dungeon"
  | "cave"
  | "cellar"
  | "coast"
  | "ruins"
  | "city"
  | "snow"
  | "road";

export const ABILITIES: Ability[] = ["str", "dex", "con", "int", "wis", "cha"];

export const ABILITY_LABEL: Record<Ability, string> = {
  str: "力量",
  dex: "敏捷",
  con: "体质",
  int: "智力",
  wis: "感知",
  cha: "魅力",
};

export const VEIL_LABEL: Record<VeilStat, string> = {
  cool: "沉稳",
  sharp: "锐利",
  tough: "坚韧",
  wild: "狂野",
  charm: "魅影",
};

export const ANCESTRY_LABEL: Record<AncestryId, string> = {
  human: "人类",
  elf: "精灵",
  dwarf: "矮人",
  halfling: "半身人",
  dragonborn: "龙裔",
  tiefling: "提夫林",
};

export const CLASS_LABEL: Record<ClassId, string> = {
  fighter: "战士",
  ranger: "游侠",
  wizard: "法师",
  cleric: "牧师",
  rogue: "游荡者",
  bard: "吟游诗人",
};

export const EDITION_META: Record<
  RuleEdition,
  { name: string; blurb: string; dice: string }
> = {
  ember5e: {
    name: "余烬 5e",
    blurb: "d20 + 六维属性。熟练、护甲、生命值与死亡豁免，贴近经典桌上规则。",
    dice: "d20",
  },
  veil: {
    name: "帷幕",
    blurb: "2d6 + 态度骰。10+ 全胜，7–9 各有代价，6− 由 DM 出手。偏叙事。",
    dice: "2d6",
  },
  ashlight: {
    name: "灰灯",
    blurb: "三围（体魄 / 心智 / 意志）对难度检定。规则薄，开桌快。",
    dice: "d20",
  },
};

export const SKILLS: { id: string; label: string; ability: Ability }[] = [
  { id: "athletics", label: "运动", ability: "str" },
  { id: "acrobatics", label: "杂技", ability: "dex" },
  { id: "sleight", label: "巧手", ability: "dex" },
  { id: "stealth", label: "隐匿", ability: "dex" },
  { id: "arcana", label: "奥秘", ability: "int" },
  { id: "history", label: "历史", ability: "int" },
  { id: "investigation", label: "调查", ability: "int" },
  { id: "nature", label: "自然", ability: "int" },
  { id: "religion", label: "宗教", ability: "int" },
  { id: "animal", label: "驯兽", ability: "wis" },
  { id: "insight", label: "洞悉", ability: "wis" },
  { id: "medicine", label: "医药", ability: "wis" },
  { id: "perception", label: "察觉", ability: "wis" },
  { id: "survival", label: "生存", ability: "wis" },
  { id: "deception", label: "欺瞒", ability: "cha" },
  { id: "intimidation", label: "威吓", ability: "cha" },
  { id: "performance", label: "表演", ability: "cha" },
  { id: "persuasion", label: "说服", ability: "cha" },
];

export interface AbilityScores {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}

/** 智体扮演指令。人类席位可留空，套用模板时填满。 */
export interface AgentMind {
  templateId: string;
  title: string;
  voice: string;
  tactics: string;
  drive: string;
  tell: string;
  boundary: string;
}

export interface Character {
  id: string;
  controller: Controller;
  playerLabel: string;
  name: string;
  ancestry: AncestryId;
  classId: ClassId;
  level: number;
  background: string;
  appearance: string;
  personality: string;
  ideal: string;
  bond: string;
  flaw: string;
  backstory: string;
  abilities: AbilityScores;
  veil: Record<VeilStat, number>;
  hp: number;
  maxHp: number;
  ac: number;
  speed: number;
  proficiency: number;
  skillProfs: string[];
  saveProfs: Ability[];
  inventory: string[];
  features: string[];
  spells: string[];
  conditions: string[];
  deathSaves: { success: number; fail: number };
  inspiration: boolean;
  glyph: string;
  tint: string;
  agentMind: AgentMind;
}

export interface DmSeat {
  controller: Controller;
  name: string;
  persona: string;
  templateId: string;
  title: string;
  voice: string;
  pacing: string;
  boundary: string;
}

export interface SceneToken {
  id: string;
  x: number;
  y: number;
  kind: "pc" | "npc" | "monster" | "prop";
  name: string;
  glyph: string;
  tint?: string;
}

export interface PendingCheck {
  id: string;
  label: string;
  skill: string;
  dc: number;
  who?: string;
}

export interface SceneState {
  index: number;
  title: string;
  location: string;
  biome: Biome;
  prose: string;
  ascii: string;
  grid: { w: number; h: number; tiles: string };
  tokens: SceneToken[];
  suggested: string[];
  checks: PendingCheck[];
  npcs: { name: string; brief: string }[];
}

export interface Combatant {
  id: string;
  name: string;
  side: "party" | "enemy";
  hp: number;
  maxHp: number;
  ac: number;
  init: number;
  atkMod: number;
  dmg: string;
  characterId?: string;
}

export interface CombatState {
  active: boolean;
  round: number;
  order: string[];
  whose: number;
  combatants: Combatant[];
}

export interface LogEntry {
  id: string;
  at: number;
  kind: LogKind;
  speaker: string;
  speakerId?: string;
  text: string;
  roll?: {
    formula: string;
    detail: string;
    total: number;
    dc?: number;
    success?: boolean;
    degree?: string;
  };
}

export interface RuleMods {
  lethality: number;
  magic: number;
  difficulty: number;
  combatFreq: number;
  agentVoice: number;
}

export interface TableState {
  version: number;
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  edition: RuleEdition;
  mods: RuleMods;
  presentation: Presentation;
  seed: string;
  tone: string;
  campaignTitle: string;
  campaignPremise: string;
  dm: DmSeat;
  party: Character[];
  log: LogEntry[];
  scene: SceneState;
  combat: CombatState | null;
  phase: "sheets" | "play" | "ended";
  turn: { actor: "dm" | string };
  ended?: { title: string; epilogue: string };
  fallbackBeat: number;
  usedAi: boolean;
}

export const DEFAULT_MODS: RuleMods = {
  lethality: 3,
  magic: 3,
  difficulty: 3,
  combatFreq: 3,
  agentVoice: 3,
};

export const BIOME_LABEL: Record<Biome, string> = {
  inn: "驿站",
  forest: "林地",
  dungeon: "地城",
  cave: "洞穴",
  cellar: "地窖",
  coast: "海岸",
  ruins: "废墟",
  city: "城镇",
  snow: "雪原",
  road: "驿道",
};
