/**
 * Dungeon Lootr units - the anime-crossover CLASSES players search
 * "how to get" for. Names + character mappings + obtain methods are sourced
 * from YouTube showcase/how-to descriptions (2026-09-02).
 * RULE: never invent obtain methods. Where a reliable source didn't state the
 * unlock, `obtain` explains what IS known and flags the method as unconfirmed;
 * `verified` is true only when a concrete obtain method is sourced.
 */
export interface Unit {
  slug: string;
  name: string;
  /** In-game class name + origin character. */
  origin: string;
  /** e.g. "Exotic" - "" until confirmed. */
  rarity: string;
  /** One-line how you obtain it. */
  obtain: string;
  /** Longer, sourced steps - empty if not sourced. */
  steps: string[];
  /** Search-intent aliases. */
  aliases: string[];
  /** YouTube video ID to embed as a how-to (optional). */
  videoId?: string;
  verified: boolean;
}

export const UNITS_LAST_CHECKED = "2026-09-02";

export const UNITS: Unit[] = [
  {
    slug: "gojo",
    name: "Gojo",
    origin: "In-game class: Honored One (Gojo Satoru, Jujutsu Kaisen)",
    rarity: "",
    obtain: "Gojo is the Honored One class. You unlock it by grinding for the Infinity Core, then using it to obtain the class.",
    steps: [
      "Farm dungeons to obtain the Infinity Core (the unlock item for Honored One).",
      "Use the Infinity Core to unlock the Honored One (Gojo) class.",
    ],
    aliases: ["how to get gojo dungeon lootr", "honored one dungeon lootr", "infinity core"],
    verified: true,
  },
  {
    slug: "sukuna",
    name: "Sukuna",
    origin: "In-game class: Cursed King (Sukuna, Jujutsu Kaisen)",
    rarity: "",
    obtain: "Sukuna is the Cursed King class - widely rated the best class in the game. The exact unlock method isn't confirmed by a reliable source yet; we'll publish it the moment it is.",
    steps: [],
    aliases: ["how to get sukuna dungeon lootr", "cursed king dungeon lootr", "best class"],
    verified: false,
  },
  {
    slug: "asta",
    name: "Asta",
    origin: "In-game class: Anti Mage / Anti Magic (Asta, Black Clover)",
    rarity: "",
    obtain: "Asta is the Anti Mage (Anti Magic) class. The confirmed unlock method isn't sourced yet - check back once it's verified.",
    steps: [],
    aliases: ["how to get asta dungeon lootr", "anti mage dungeon lootr", "anti magic"],
    verified: false,
  },
  {
    slug: "azure-devil",
    name: "Azure Devil",
    origin: "In-game class: Azure Devil (Vergil, Devil May Cry)",
    rarity: "",
    obtain: "Azure Devil is the base Vergil class. Level it to 50 to evolve it into Awakened Devil EX.",
    steps: [
      "Obtain the Azure Devil (Vergil) class.",
      "Level Azure Devil to level 50 to unlock its evolution.",
      "Evolve into Awakened Devil EX (see the Awakened Devil EX page).",
    ],
    aliases: ["azure devil dungeon lootr", "vergil dungeon lootr"],
    verified: true,
  },
  {
    slug: "awakened-devil-ex",
    name: "Awakened Devil EX",
    origin: "In-game class: Awakened Devil EX (Vergil's Devil Trigger - \"Judgement's Edge\")",
    rarity: "",
    obtain: "Awakened Devil EX is the evolution of Azure Devil (Vergil). Get Azure Devil, level it to 50, then evolve it into the Awakened Devil Trigger form.",
    steps: [
      "Obtain and level the Azure Devil (Vergil) class to level 50.",
      "Evolve Azure Devil into Awakened Devil EX (the Devil Trigger form).",
    ],
    aliases: ["how to get awakened devil ex", "evolve azure devil", "awakened devil ex dungeon lootr"],
    verified: true,
  },
  {
    slug: "sinister-trigger",
    name: "Sinister Trigger",
    origin: "In-game class: Sinister Trigger (Dante, Devil May Cry)",
    rarity: "Exotic",
    obtain: "Sinister Trigger is an Exotic class with an extremely low roll chance (~0.05%). You get it by spinning/rolling for classes - it's one of the rarest pulls, prized for high mobility, damage and attack speed.",
    steps: [
      "Spin for classes (the game's class-roll mechanic).",
      "Sinister Trigger has roughly a 0.05% chance per roll - expect a long grind.",
    ],
    aliases: ["how to get sinister trigger", "dante dungeon lootr", "exotic class"],
    verified: true,
  },
  {
    slug: "unrestricted",
    name: "Unrestricted",
    origin: "In-game class: Unrestricted (Toji Fushiguro, Jujutsu Kaisen)",
    rarity: "Exotic",
    obtain: "Unrestricted is Toji - one of the Exotic-tier classes (alongside Sukuna and Gojo). The precise drop method isn't sourced yet; like other Exotics it's a rare class roll. We'll confirm the exact route soon.",
    steps: [],
    aliases: ["how to get unrestricted", "toji dungeon lootr", "exotic class"],
    verified: false,
  },
];

export function getUnit(slug: string): Unit | undefined {
  return UNITS.find((u) => u.slug === slug);
}
