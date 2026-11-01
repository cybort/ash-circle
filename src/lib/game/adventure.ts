import { uid } from "@/lib/utils";
import type { Character, Combatant, SceneState, TableState } from "./types";
import { makeScene, newCheck, partyTokens } from "./scenes";

/** 盐雾驿站 — offline campaign the table can finish without an API. */
export const CAMPAIGN = {
  title: "盐雾驿站",
  premise:
    "海岸驿道被一夜盐雾吞没。商队的马失踪，楼上房间反锁，地窖里有潮水拍打的声音。你们是今晚唯一还醒着的客人。",
};

export function openingScene(party: Character[]): SceneState {
  return makeScene(
    {
      index: 0,
      title: "盐雾里的门",
      location: "盐雾驿站 · 大厅",
      biome: "inn",
      prose:
        "盐雾贴着门缝钻进来，把灯芯压成一粒红点。驿站老板顾三站在吧台内侧，手指反复擦着一只已经很干净的杯子。楼上第二间房的门锁着——商队领队申伯昨晚住进去，清晨没有下楼。马厩那边少了一匹栗马，缰绳还挂在空槽上，像有人刚把它牵走。\n\n壁炉里的木头是湿的，只冒烟。几个过路客把帽檐压得很低。顾三看见你们，嗓子发干：“客房……还有。别去地窖。潮。",
      suggested: ["询问顾三今晚发生了什么", "打量大厅与客人", "去马厩看看", "要求上楼看看申伯的房"],
      checks: [
        newCheck("察觉大厅的不对劲", "perception", 12),
        newCheck("说服顾三开口", "persuasion", 13),
      ],
      npcs: [
        { name: "顾三", brief: "驿站老板。手一直在擦杯子。怕潮水，更怕客人。" },
        { name: "帽檐客", brief: "坐在角落，不喝酒，只听门。" },
      ],
      tokens: [
        ...partyTokens(party, [[3, 6], [5, 7], [4, 7]]),
        { id: "npc-gu", x: 8, y: 3, kind: "npc", name: "顾三", glyph: "G", tint: "#c9b07a" },
        { id: "npc-hat", x: 12, y: 2, kind: "npc", name: "帽檐客", glyph: "h", tint: "#8a7a86" },
      ],
    },
    party,
  );
}

export function sceneForBeat(beat: number, party: Character[]): SceneState {
  if (beat <= 0) return openingScene(party);
  if (beat === 1) {
    return makeScene(
      {
        index: 1,
        title: "空槽与血迹",
        location: "驿站马厩",
        biome: "road",
        prose:
          "马厩的门半开。空气里是湿麦秆和铁腥。空出来的那一格地面有一道被拖过的痕迹，盐粒嵌在泥里发亮。灰羽若在，会先蹲下来：血迹不多，像是被迅速止住，又像是有人故意抹过。\n\n厩后有一扇小门通向石阶。下面传来缓慢的拍击——不是浪，是容器。顾三的声音从背后远远飘来：“我说了。潮。",
        suggested: ["顺着血迹下石阶", "检查空槽与缰绳", "回头逼问顾三", "隐蔽接近地窖门"],
        checks: [
          newCheck("追踪血迹", "survival", 12),
          newCheck("发现地窖门的机关", "investigation", 13),
          newCheck("悄悄打开小门", "sleight", 14),
        ],
        npcs: [{ name: "顾三", brief: "跟到门口就停，不肯下阶。" }],
        tokens: [
          ...partyTokens(party, [[5, 5], [6, 6], [7, 5]]),
          { id: "prop-blood", x: 8, y: 6, kind: "prop", name: "血迹", glyph: "x", tint: "#b54a3c" },
        ],
      },
      party,
    );
  }
  if (beat === 2) {
    return makeScene(
      {
        index: 2,
        title: "盐窖的栅",
        location: "地窖入口",
        biome: "cellar",
        prose:
          "石阶只有九级。底部是铁栅，锁是新的，栅后是成排的盐缸，缸沿结着白霜。有人在里面低声数数。数到七就停，像在等一个不存在的第八下。\n\n铁栅可以用蛮力扳开，也可以用盗贼工具或一句恰到好处的谎——顾三把钥匙藏在吧台内侧那只永远擦不完的杯子底下。",
        suggested: ["蛮力扳开铁栅", "回去找钥匙", "对里面的人喊话", "准备武器再进"],
        checks: [
          newCheck("扳开铁栅", "athletics", 14),
          newCheck("听清里面在数什么", "perception", 13),
          newCheck("威吓里面的人开门", "intimidation", 13),
        ],
        npcs: [{ name: "盐缸后的声音", brief: "数到七。停。呼吸很潮。" }],
        tokens: [
          ...partyTokens(party, [[2, 6], [3, 5], [4, 6]]),
          { id: "mon-shadow", x: 11, y: 3, kind: "monster", name: "？", glyph: "?", tint: "#7a8ea8" },
        ],
      },
      party,
    );
  }
  if (beat === 3) {
    return makeScene(
      {
        index: 3,
        title: "缸里的潮",
        location: "盐窖",
        biome: "cellar",
        prose:
          "栅门在身后合上。盐缸之间站着两个人——不是申伯。他们穿着商队的皮褂，袖口却是湿的。更里面，一只缸裂开，从裂缝里站起一个被盐霜覆盖的轮廓：眼睛是空的，嘴里是海。\n\n顾三的“潮”不是天气。是走私者养在缸里的东西，用失踪的马和失踪的客人喂。它朝你们走了一步，盐粒从关节处掉下来。",
        suggested: ["拔武器，保护队友", "试图谈判（他们也怕那东西）", "打翻盐缸阻碍它", "寻找申伯"],
        checks: [
          newCheck("打翻盐缸制造掩护", "athletics", 12),
          newCheck("看穿走私者的胆怯", "insight", 12),
        ],
        npcs: [
          { name: "湿袖走私者", brief: "两名。怕那东西比怕你们更甚。" },
          { name: "盐尸", brief: "被盐霜覆盖的潮物。关节掉盐。" },
        ],
        tokens: [
          ...partyTokens(party, [[3, 6], [4, 7], [2, 5]]),
          { id: "en-sm1", x: 9, y: 4, kind: "monster", name: "走私者", glyph: "s", tint: "#8a7a86" },
          { id: "en-sm2", x: 10, y: 6, kind: "monster", name: "走私者", glyph: "s", tint: "#8a7a86" },
          { id: "en-wight", x: 12, y: 3, kind: "monster", name: "盐尸", glyph: "W", tint: "#b8c4c8" },
        ],
      },
      party,
    );
  }
  return makeScene(
    {
      index: 4,
      title: "雾散之后",
      location: "驿道 · 黎明",
      biome: "coast",
      prose:
        "盐雾在天亮前散了。缸碎在地上，潮物化成一摊发白的水。走私者或逃或倒。楼上的锁自己开了——申伯还活着，只是被灌了盐酒，记不住半夜的事。\n\n顾三把那只杯子扣在桌上，不再擦。他拿出一袋沉甸甸的银：“这是封口费，也是路费。驿站还要开。你们若再来，门会亮着。”\n\n海在远处。路也在。圆桌上的灯芯还没燃尽。",
      suggested: ["收下银并上路", "逼顾三把地窖填死", "把申伯送回商队", "在日志里记下今晚"],
      checks: [],
      npcs: [
        { name: "顾三", brief: "不再擦杯子。愿意付钱，不愿解释全部。" },
        { name: "申伯", brief: "活着。记忆像被潮水洗过。" },
      ],
      tokens: [
        ...partyTokens(party, [[5, 4], [6, 5], [7, 4]]),
        { id: "npc-gu2", x: 9, y: 4, kind: "npc", name: "顾三", glyph: "G", tint: "#c9b07a" },
      ],
    },
    party,
  );
}

export function cellarCombatants(party: Character[]): Combatant[] {
  const fromParty: Combatant[] = party.map((p) => ({
    id: p.id,
    name: p.name,
    side: "party",
    hp: p.hp,
    maxHp: p.maxHp,
    ac: p.ac,
    init: 0,
    atkMod: 0,
    dmg: "1d8",
    characterId: p.id,
  }));
  return [
    ...fromParty,
    {
      id: uid(),
      name: "湿袖走私者",
      side: "enemy",
      hp: 12,
      maxHp: 12,
      ac: 12,
      init: 0,
      atkMod: 3,
      dmg: "1d6+1",
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
      dmg: "1d8+2",
    },
  ];
}

export function matchBeatAdvance(text: string, beat: number): boolean {
  const t = text.toLowerCase();
  if (beat === 0) return /马厩|血迹|调查|察觉|楼上|询问|顾三|搜索|打量|跟踪/.test(t);
  if (beat === 1) return /地窖|石阶|下|门|钥匙|追踪|打开|潜/.test(t);
  if (beat === 2) return /扳|栅|进|冲|战斗|武器|谈判|盐缸|喊/.test(t);
  if (beat === 3) return /打|攻击|砍|谈判|打翻|保护|逃|结束|盐尸/.test(t);
  return /上路|银|记下|填|送回|离开/.test(t);
}

export function fallbackDmReply(
  table: TableState,
  actionText: string,
): { prose: string; advance: boolean; startCombat?: boolean; end?: boolean } {
  const beat = table.fallbackBeat;
  const advance = matchBeatAdvance(actionText, beat);
  if (beat === 0) {
    return {
      advance,
      prose: advance
        ? "顾三的杯子停了一下。他没有拦你们去马厩，只是把灯推得更远。帽檐客站起来，又坐下。门外的雾更浓了。"
        : "顾三含糊地应着，目光却总滑向地板。大厅里的对话像被盐雾吸走。你们可以逼问，也可以去看马厩、上楼、或再仔细打量这个房间。",
    };
  }
  if (beat === 1) {
    return {
      advance,
      prose: advance
        ? "血迹在石阶上变成细白的盐线。下面有人在数数。顾三终于说：“钥匙在杯子底下。我不敢自己下去。”"
        : "麦秆湿软，铁腥味不散。空槽的缰绳被人用刀割过。石阶还在那里，等一个决定。",
    };
  }
  if (beat === 2) {
    return {
      advance,
      startCombat: advance,
      prose: advance
        ? "铁栅尖叫着让开。盐窖的冷气扑面。里面的人看见你们，同时看见那只裂开的缸——有东西从盐里站起来。"
        : "铁栅纹丝不动。里面的数数停了。你们能感到有人在栅后屏息。",
    };
  }
  if (beat === 3) {
    return {
      advance,
      prose: advance
        ? "潮物散成一地白水。走私者把刀扔掉。楼上的锁响了一声。天要亮了。"
        : "盐粒在脚边滚动。那东西每走一步，空气就更咸一分。现在是动手或想别的办法的时候。",
    };
  }
  return {
    advance: false,
    end: true,
    prose: "雾散了。圆桌上的灯还在。这段路被记下，下一程由你们决定要不要再走。",
  };
}
