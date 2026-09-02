/**
 * Dungeon Lootr class & aspect data.
 * RULE: never invent tiers. Class rarity order and names are sourced from
 * showcase videos; the game claims 30+ classes so this roster is partial.
 * A definitive S/A/B tier table is not yet sourced, so we don't fake one -
 * we surface the confirmed roster + community top picks instead.
 * Aspects and their effects are sourced from the "ALL ASPECTS SHOWCASE" video.
 * Sources (2026-09-02): YouTube 2AAJL4oJFoo, XwQFsLvtdr8, ufHPriU1tCk, KL0EGG76T_w.
 */
export type Tier = "S" | "A" | "B" | "C" | "D";

export interface TierItem {
  name: string;
  tier?: Tier;
  note?: string;
}

export const TIERS_LAST_CHECKED = "2026-09-02";

/** Confirmed class rarity order, low → high. */
export const CLASS_RARITIES = [
  "Rare",
  "Epic",
  "Legendary",
  "Mythic",
  "Celestial",
  "Exotic",
] as const;

/** Known class names (partial - game claims 30+). No faked tiers. */
export const CLASSES: TierItem[] = [
  { name: "Cursed King", note: "Sukuna - widely cited best class" },
  { name: "Demonbane", note: "Frieren - frequently cited top-tier" },
  { name: "Honored One", note: "Gojo - grind the Infinity Core" },
  { name: "Sinister Trigger", note: "Dante - Exotic, ~0.05% chance" },
  { name: "Unrestricted", note: "Toji - Exotic class" },
  { name: "Awakened Devil EX", note: "Vergil evolved" },
  { name: "Azure Devil", note: "Vergil base form" },
  { name: "Shadow Vagrant", note: "Sung Jin-Woo" },
  { name: "Founder", note: "Sun Wukong" },
  { name: "Anti Mage", note: "Asta (a.k.a. Anti Magic)" },
  { name: "Streamline", note: "Early-Access exclusive" },
  { name: "DreadLord" },
  { name: "Witch Gunner" },
  { name: "Boxer" },
  { name: "Jetstream" },
  { name: "Forge Archon" },
  { name: "Artemis", note: "Celestial" },
  { name: "VACIO" },
  { name: "Chaotic Fist" },
  { name: "Dark Rider" },
];

/** Aspects = weapon/attack modifiers, rolled with Aspect Gems. */
export const ASPECTS: TierItem[] = [
  { name: "Alacrity", note: "+60% attack speed, 20% proc chance (newest)" },
  { name: "Umbral", note: "Orb effect that crits" },
  { name: "Fulmin", note: "Lightning AoE" },
  { name: "Blaze", note: "Flame damage" },
  { name: "Verdant", note: "Stacking poison-like effect" },
  { name: "Ruin", note: "Pierces through, extra damage" },
  { name: "Sanguine", note: "Chance-based lifesteal" },
];
