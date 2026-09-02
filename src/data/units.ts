/**
 * Dungeon Lootr units - the anime-crossover CLASSES players search
 * "how to get" for. Names + character mappings + obtain methods are sourced
 * from YouTube showcase/how-to descriptions (2026-09-02).
 * RULE: never invent obtain methods. Where a reliable source didn't state the
 * unlock, `obtain` explains what IS known and flags the method as unconfirmed;
 * `verified` is true only when a concrete obtain method is sourced.
 * `standing` repeats only community-consensus language already sourced in
 * tiers.ts; `grind` derives from the sourced method (arithmetic, not claims).
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
  /** Unlock route category - "Unknown" until a method is verified (never guess). */
  route: "Item unlock" | "Evolution" | "Class roll" | "Unknown";
  /** Community standing, sourced from showcase consensus (see tiers.ts). */
  standing: string;
  /** Practical grind expectation derived from the sourced method - "" if no method. */
  grind: string;
  /** Slugs of related units (same anime, evolution chain, or rarity bracket). */
  related: string[];
  /** Per-unit FAQs beyond the obtain question - answers must stay sourced. */
  extraFaq: { q: string; a: string }[];
  /** Hand-written meta description, 120-155 chars (obtain text is too long). */
  metaDesc: string;
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
    rarity: "Exotic",
    obtain: "Gojo is the Honored One class. You unlock it by grinding for the Infinity Core, then using it to obtain the class.",
    steps: [
      "Farm dungeons to obtain the Infinity Core (the unlock item for Honored One).",
      "Use the Infinity Core to unlock the Honored One (Gojo) class.",
    ],
    aliases: ["how to get gojo dungeon lootr", "honored one dungeon lootr", "infinity core"],
    route: "Item unlock",
    standing:
      "One of the most-cited top classes in community showcases - only Cursed King (Sukuna) is more consistently called the best. Showcase videos place Honored One in the Exotic bracket alongside Cursed King and Unrestricted.",
    grind:
      "The Infinity Core comes from dungeon farming, so clear speed is the whole grind - gear up first, and redeem the working codes before you start so coins and potions carry the early clears.",
    related: ["sukuna", "unrestricted"],
    extraFaq: [
      {
        q: "What rarity is Gojo in Dungeon Lootr?",
        a: "Community showcases place Honored One (Gojo) in the Exotic bracket alongside Cursed King (Sukuna) and Unrestricted (Toji) - the top rarity tier, above Celestial.",
      },
      {
        q: "Is Gojo worth grinding for?",
        a: "Yes, by community consensus. Honored One is one of the most-cited top classes in showcase videos, second only to Cursed King (Sukuna) in best-class discussions. We track the consensus on our class tier list.",
      },
      {
        q: "How long does the Infinity Core grind take?",
        a: "The Infinity Core is a dungeon drop, so the time depends on your clear speed and drop luck - no fixed quest or purchase route is confirmed. Faster dungeon clears mean more attempts per hour, which is the only real lever.",
      },
    ],
    metaDesc:
      "Gojo (Honored One) in Dungeon Lootr: farm the Infinity Core from dungeons to unlock it. Requirements, grind tips and rating. Verified 2026-09-02.",
    verified: true,
  },
  {
    slug: "sukuna",
    name: "Sukuna",
    origin: "In-game class: Cursed King (Sukuna, Jujutsu Kaisen)",
    rarity: "Exotic",
    obtain: "Sukuna is the Cursed King class - widely rated the best class in the game. The exact unlock method isn't confirmed by a reliable source yet; we'll publish it the moment it is.",
    steps: [],
    aliases: ["how to get sukuna dungeon lootr", "cursed king dungeon lootr", "best class"],
    route: "Unknown",
    standing:
      "Widely cited as the single best class in the game across showcase and tier-list videos - the benchmark every other class is compared against.",
    grind: "",
    related: ["gojo", "unrestricted"],
    extraFaq: [
      {
        q: "Why isn't the Sukuna unlock method listed here?",
        a: "Because no reliable source has stated it yet. The game is brand new and creators are still confirming the route - we publish methods only after verification, never guesses. This page updates the moment the unlock is confirmed.",
      },
      {
        q: "What rarity is Sukuna in Dungeon Lootr?",
        a: "Showcase videos place Cursed King in the Exotic bracket alongside Honored One (Gojo) and Unrestricted (Toji) - the top rarity tier.",
      },
      {
        q: "Is Sukuna really the best class?",
        a: "That is the community consensus so far: showcase and tier videos consistently put Cursed King at the top. Metas shift with patches, so check our tier list for the current standing before committing your grind.",
      },
    ],
    metaDesc:
      "Sukuna (Cursed King) in Dungeon Lootr - the community's #1 class. What's known about the unlock, rarity and rating. Verified 2026-09-02.",
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
    route: "Unknown",
    standing:
      "Anti Mage appears in the confirmed class roster from showcase videos, but a clear community tier consensus has not formed yet.",
    grind: "",
    related: ["gojo", "sukuna"],
    extraFaq: [
      {
        q: "Is Asta the same as Anti Mage?",
        a: "Yes - Anti Mage (also called Anti Magic in showcases) is the in-game class based on Asta from Black Clover. Searching either name points to the same class.",
      },
      {
        q: "What rarity is Anti Mage?",
        a: "Not confirmed yet. The class is in the verified roster, but no showcase has stated its rarity bracket - we will add it once a reliable source does.",
      },
      {
        q: "How do you get Asta in Dungeon Lootr?",
        a: "The unlock method is still being verified - no reliable source has published the route. Bookmark this page; we update it the moment the method is confirmed.",
      },
    ],
    metaDesc:
      "Asta (Anti Mage) in Dungeon Lootr: what's confirmed about the Black Clover class, unlock status and rarity. Verified 2026-09-02.",
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
    route: "Evolution",
    standing:
      "Rated as a stepping stone in community discussions - the value is the evolution into Awakened Devil EX, not the base form itself.",
    grind:
      "Level 50 is the evolution gate, and class XP is the grind - run the highest dungeon you can clear reliably on repeat rather than wiping on a harder one.",
    related: ["awakened-devil-ex", "sinister-trigger"],
    extraFaq: [
      {
        q: "What level does Azure Devil evolve at?",
        a: "Level 50. Once Azure Devil reaches 50 you can evolve it into Awakened Devil EX - Vergil's Devil Trigger form.",
      },
      {
        q: "Is Azure Devil worth leveling?",
        a: "If you want Awakened Devil EX, it is the only path - the evolved form is rated well above the base in community discussions, so the leveling grind pays off at evolution.",
      },
      {
        q: "Azure Devil vs Awakened Devil EX - what's the difference?",
        a: "Same Vergil class line. Azure Devil is the base form; Awakened Devil EX is the level-50 evolution (the Devil Trigger form, called Judgement's Edge) with the upgraded kit.",
      },
    ],
    metaDesc:
      "Azure Devil (Vergil) in Dungeon Lootr: level it to 50 to evolve into Awakened Devil EX. Steps, grind tips and rating. Verified 2026-09-02.",
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
    route: "Evolution",
    standing:
      "The evolved Vergil form rates well above base Azure Devil in community discussions - evolution lines are prestige picks for Devil May Cry fans.",
    grind:
      "The grind is identical to Azure Devil's - getting the class to level 50 IS the work. Evolving at 50 is the reward, not another cost.",
    related: ["azure-devil", "sinister-trigger"],
    extraFaq: [
      {
        q: "Can you get Awakened Devil EX directly?",
        a: "No direct unlock is confirmed - it is the evolution of Azure Devil. The full path is: obtain Azure Devil, level it to 50, then evolve.",
      },
      {
        q: "What is Judgement's Edge?",
        a: "That is the in-game name of Vergil's Devil Trigger form - what Awakened Devil EX represents, per the class showcase.",
      },
      {
        q: "Is Awakened Devil EX good?",
        a: "Community discussions rate it well above base Azure Devil - you are evolving for a reason. See the class tier list for how it stacks against the current meta.",
      },
    ],
    metaDesc:
      "Awakened Devil EX in Dungeon Lootr: evolve Azure Devil at level 50 for Vergil's Devil Trigger. Full path and tips. Verified 2026-09-02.",
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
    route: "Class roll",
    standing:
      "Prized for mobility, damage and attack speed - an Exotic flex pick in every showcase that mentions it.",
    grind:
      "At ~0.05% per roll you are looking at roughly 1 in 2,000 rolls on average - a stockpile-Luck-Potions-first grind, not a session goal.",
    related: ["awakened-devil-ex", "unrestricted"],
    extraFaq: [
      {
        q: "What are the odds of rolling Sinister Trigger?",
        a: "About 0.05% per roll - roughly 1 in 2,000 on average. Treat it as a long-term goal: some players hit it early, others go far past the average.",
      },
      {
        q: "How do I improve my chances of rolling Sinister Trigger?",
        a: "Luck Potions boost class-spin odds, so redeem every working code first - JACKPOT alone gives 5 - then roll in bulk instead of trickling single spins.",
      },
      {
        q: "Is Sinister Trigger the rarest class in Dungeon Lootr?",
        a: "It sits in the Exotic bracket - the top rarity tier - and its ~0.05% rate is the lowest figure cited in showcase videos so far.",
      },
    ],
    metaDesc:
      "Sinister Trigger (Dante) in Dungeon Lootr: Exotic class at ~0.05% roll chance. Odds math, Luck Potion tips. Verified 2026-09-02.",
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
    route: "Unknown",
    standing:
      "Exotic-bracket Toji - a prestige pick whose community standing is still forming as more players pull it.",
    grind: "",
    related: ["gojo", "sukuna"],
    extraFaq: [
      {
        q: "Is Unrestricted Toji?",
        a: "Yes - Unrestricted is the in-game class based on Toji Fushiguro from Jujutsu Kaisen.",
      },
      {
        q: "What rarity is Unrestricted?",
        a: "Exotic - confirmed in showcase videos, in the same top bracket as Cursed King (Sukuna) and Honored One (Gojo).",
      },
      {
        q: "How do you get Unrestricted in Dungeon Lootr?",
        a: "The exact method is still being verified. As an Exotic it is expected to be a rare class roll like Sinister Trigger - we will publish the confirmed route as soon as a reliable source states it.",
      },
    ],
    metaDesc:
      "Unrestricted (Toji) in Dungeon Lootr: Exotic-tier class - what's known about the unlock and rarity. Verified 2026-09-02.",
    verified: false,
  },
];

export function getUnit(slug: string): Unit | undefined {
  return UNITS.find((u) => u.slug === slug);
}
