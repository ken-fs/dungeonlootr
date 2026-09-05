/**
 * Dungeon Lootr class & aspect data.
 * RULE: never invent tiers. Every tier below is a two-source consensus of
 * IGN's class tier list and GameRant's best-classes tier list (both live as
 * of 2026-09-05). When the two disagree by one tier, the class sits at the
 * LOWER tier and the note flags the split; wider splits sit in the middle
 * with both ratings shown. Destructoid's list corroborates the top cluster.
 * Class obtain details cross-checked with Sportskeeda's classes guide.
 * Aspects: no reliable outlet publishes an aspect tier table yet, so aspects
 * stay unranked - effects sourced from the "ALL ASPECTS SHOWCASE" video and
 * allthings.how; obtain routes from Destructoid + creator unlock guides.
 */
export type Tier = "S" | "A" | "B" | "C" | "D";

export interface TierItem {
  name: string;
  tier?: Tier;
  note?: string;
}

export const TIERS_LAST_CHECKED = "2026-09-05";

/** Confirmed class rarity order, low → high. */
export const CLASS_RARITIES = [
  "Rare",
  "Epic",
  "Legendary",
  "Mythic",
  "Celestial",
  "Exotic",
] as const;

/**
 * Consensus tiers: IGN + GameRant (2026-09-05).
 * note flags every disagreement so readers see the spread, not a fake blend.
 */
export const CLASSES: TierItem[] = [
  // Unanimous S - both lists agree.
  { name: "Sinister Trigger", tier: "S", note: "Dante - ~0.05% spin, the only god-tier pullable from spins" },
  { name: "Cursed King", tier: "S", note: "Sukuna - Boss Rush 40+ drop or 50-fragment craft" },
  { name: "Dreadlord", tier: "S", note: "Underworld Gate Nightmare drop - AoE + clones clear whole rooms" },
  { name: "Shadow Vagrant", tier: "S", note: "Sung Jin-Woo - Shadow Monarch pack; dodges spawn damaging shadows" },
  { name: "Awakened Devil EX", tier: "S", note: "Vergil evolved - Azure Devil 50 + 1M coins + Devil Heart" },
  // Split S/A - ranked at lower tier, disagreement flagged.
  { name: "Honored One", tier: "A", note: "Gojo - GameRant ranks S; needed at lv25 for the Toji quest" },
  { name: "Unrestricted", tier: "A", note: "Toji - GameRant ranks S; the quest grind is the barrier, not the kit" },
  { name: "Anti Magic", tier: "A", note: "Asta - GameRant ranks S; Boss Rush craft like Sukuna/Gojo" },
  { name: "Jetstream", tier: "A", note: "IGN ranks S - special-NPC unlock, dodge-mobile kit" },
  // Unanimous or near-unanimous A.
  { name: "Founder", tier: "A", note: "Sun Wukong - Exotic exclusive, unlock route still unconfirmed" },
  { name: "Forge Archon", tier: "A", note: "Both lists agree A - rare mid-bracket consensus" },
  // B cluster.
  { name: "Azure Devil", tier: "B", note: "GameRant ranks A - real value is evolving into Awakened Devil EX" },
  { name: "Artemis", tier: "B", note: "GameRant ranks A - Celestial, strong in specific modes" },
  { name: "VACIO", tier: "B", note: "GameRant ranks A - viable main until a top craft lands" },
  { name: "Demonbane", tier: "B", note: "Frieren - beginner-friendly, stays good into mid-game (Destructoid)" },
  { name: "Streamline", tier: "B", note: "IGN ranks A - Early-Access exclusive, may be unobtainable now" },
  { name: "Wanderer", tier: "B", note: "Both lists agree B - wide AoE, only one defensive ability" },
  { name: "Shinobi", tier: "B", note: "Widest split after Boxer: IGN A / GameRant C" },
  { name: "Witch Gunner", tier: "B", note: "Split: IGN C / GameRant A - creator footage calls it underpowered" },
  { name: "Boxer", tier: "C", note: "Most disputed class: IGN D / GameRant A - try it yourself before maining" },
  { name: "Assassin", tier: "C", note: "Split: IGN B / GameRant D" },
  { name: "Divergent", tier: "C", note: "GameRant ranks B - Mythic style, solid mid-game" },
  { name: "Kage", tier: "C", note: "IGN ranks B - defensive clone kit, single-target focus" },
  { name: "Archer", tier: "C", note: "Both lists agree C" },
  { name: "Cursed Child", tier: "C", note: "Both lists agree C" },
  { name: "Greatsword", tier: "C", note: "GameRant ranks D - heavy AoE but leaves you exposed mid-combo" },
  { name: "Ronin", tier: "C", note: "GameRant ranks D" },
  // D - both lists say skip.
  { name: "Flame Bastion", tier: "D", note: "Both lists agree D" },
  { name: "Bowman", tier: "D", note: "Both lists agree D" },
];

/**
 * Aspects = weapon/attack modifiers, rolled with Aspect Gems.
 * No outlet publishes an aspect tier table yet - effects only, no faked ranks.
 * Obtain routes (Destructoid + creator guides): Aspect Gems come from floor
 * rewards, Challenge Dungeon level-55+ milestone rewards, and the gamepass shop.
 */
export const ASPECTS: TierItem[] = [
  { name: "Alacrity", note: "+60% attack speed, 20% proc chance (newest)" },
  { name: "Umbral", note: "Orb effect that crits" },
  { name: "Fulmin", note: "Lightning AoE" },
  { name: "Blaze", note: "Flame damage" },
  { name: "Verdant", note: "Stacking poison-like effect" },
  { name: "Ruin", note: "Pierces through, extra damage" },
  { name: "Sanguine", note: "Chance-based lifesteal" },
  { name: "Tempest", note: "Confirmed in the Aspect Gem pool; effect still being verified" },
  { name: "Phantom", note: "Confirmed in the Aspect Gem pool; effect still being verified" },
  { name: "Glaciel", note: "Confirmed in the Aspect Gem pool; effect still being verified" },
];
