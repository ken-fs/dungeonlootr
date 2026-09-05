/**
 * Dungeon Lootr units - the anime-crossover CLASSES players search
 * "how to get" for.
 * RULE: never invent obtain methods. Where a reliable source didn't state the
 * unlock, `obtain` explains what IS known and flags the method as unconfirmed;
 * `verified` is true only when a concrete obtain method is sourced.
 * Sources (2026-09-05): Sportskeeda classes guide (rarity/exclusivity split),
 * Destructoid tier list (Boss Rush 40+ / Forge-50-fragments crafts, Dreadlord
 * Underworld Gate Nightmare, Unrestricted quest NPC), IGN tier list (kit
 * descriptions), GameRant tier list (special-NPC classes), YouTube unlock
 * guide -GErvCAZbS4 (Unrestricted recipe, Awakened Devil EX recipe), YouTube
 * wzu1gKTvl7U (Shadow Monarch pack bundle showcase), dungeonlootrguide.wiki
 * (Dreadlord ~1% rate). First pull (2026-09-02): YouTube showcases.
 */
export interface Unit {
  slug: string;
  name: string;
  /** In-game class name + origin character. */
  origin: string;
  /** Source anime for the hub stat block - "" if original/unconfirmed. */
  anime: string;
  /** e.g. "Exotic" - "" until confirmed. */
  rarity: string;
  /** One-line how you obtain it. */
  obtain: string;
  /** Longer, sourced steps - empty if not sourced. */
  steps: string[];
  /** Search-intent aliases. */
  aliases: string[];
  /** Unlock route category - "Unknown" until a method is verified (never guess). */
  route: "Item unlock" | "Evolution" | "Class roll" | "Quest" | "Robux bundle" | "Unknown";
  /** Community standing, sourced from tier lists/showcases. */
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

export const UNITS_LAST_CHECKED = "2026-09-05";

export const UNITS: Unit[] = [
  {
    slug: "sukuna",
    name: "Sukuna",
    origin: "In-game class: Cursed King (Sukuna, Jujutsu Kaisen)",
    anime: "Jujutsu Kaisen",
    rarity: "Exotic",
    obtain: "Sukuna is the Cursed King class. It drops as a class item in Boss Rush from floor 40 onward, or you can craft it at the Forge with 50 Sukuna Fragments farmed from the Sukuna boss line.",
    steps: [
      "Unlock Boss Rush mode and climb to floor 40 - Cursed King can drop as a class item from floor 40 up, with creator guides reporting better odds on higher floors.",
      "Guaranteed route: when creating a Boss Rush lobby, pick the Sukuna boss line and farm it for Sukuna Fragments.",
      "Take 50 Sukuna Fragments to the Forge and craft the Cursed King class item.",
      "Use the item to unlock the Cursed King (Sukuna) class.",
    ],
    aliases: ["how to get sukuna dungeon lootr", "cursed king dungeon lootr", "sukuna fragments", "best class"],
    route: "Item unlock",
    standing:
      "Widely cited as the single best class in the game - GameRant and IGN both place Cursed King in their top tier, and it is the benchmark every other class is compared against.",
    grind:
      "Two levers: luck (floor-40+ drops) or persistence (50 fragments). The fragment craft is the deterministic path - every Sukuna boss run moves you 2% of the way there, so it is a grind you can plan, not a lottery.",
    related: ["gojo", "unrestricted", "asta"],
    extraFaq: [
      {
        q: "What floor does Cursed King drop from in Boss Rush?",
        a: "Floor 40 onward, per creator unlock guides and Destructoid's tier list. The same guides report the drop chance improves on higher floors - but the guaranteed path is crafting with 50 Sukuna Fragments at the Forge.",
      },
      {
        q: "How do you farm Sukuna Fragments?",
        a: "Select the Sukuna boss when creating your Boss Rush lobby, then clear floors - fragments drop from that boss line. Fifty fragments craft the Cursed King class item at the Forge.",
      },
      {
        q: "Is Sukuna really the best class?",
        a: "That is the community consensus: tier lists from IGN and GameRant both rank Cursed King at or near the top. Metas shift with patches, so check our tier list for the current standing before committing your grind.",
      },
    ],
    metaDesc:
      "How to get Sukuna (Cursed King) in Dungeon Lootr: Boss Rush floor 40+ drop or craft with 50 Sukuna Fragments. Full steps. Verified 2026-09-05.",
    verified: true,
  },
  {
    slug: "gojo",
    name: "Gojo",
    origin: "In-game class: Honored One (Gojo Satoru, Jujutsu Kaisen)",
    anime: "Jujutsu Kaisen",
    rarity: "Exotic",
    obtain: "Gojo is the Honored One class. Its class item drops in Boss Rush from floor 40 onward, or you craft the Infinity Core at the Forge with 50 Infinity Fragments from the Gojo boss line.",
    steps: [
      "Climb Boss Rush to floor 40 - Honored One can drop as a class item from floor 40 up.",
      "Guaranteed route: pick the Gojo boss line when creating a Boss Rush lobby and farm Infinity Fragments.",
      "Craft the Infinity Core at the Forge with 50 Infinity Fragments.",
      "Use the Infinity Core to unlock the Honored One (Gojo) class.",
      "Hold onto it if you want Unrestricted later - Honored One at class level 25 is part of the Toji quest.",
    ],
    aliases: ["how to get gojo dungeon lootr", "honored one dungeon lootr", "infinity core", "infinity fragments"],
    route: "Item unlock",
    standing:
      "One of the most-cited top classes - IGN ranks Honored One A-tier and GameRant puts it in S-tier, and Destructoid calls it a top-4 class for sheer AoE burst. It is also required for the Unrestricted quest.",
    grind:
      "Same loop as Cursed King: floor-40+ drops or 50 fragments. Destructoid recommends grabbing Honored One early precisely because the Unrestricted quest needs it at class level 25 - level it while you farm other unlocks.",
    related: ["sukuna", "unrestricted"],
    extraFaq: [
      {
        q: "How do you get the Infinity Core in Dungeon Lootr?",
        a: "Craft it at the Forge with 50 Infinity Fragments, farmed from the Gojo boss line in Boss Rush. The Honored One class item can also drop directly in Boss Rush from floor 40 onward.",
      },
      {
        q: "Is Gojo worth grinding for?",
        a: "Yes, twice over. It is a top-tier class in its own right (IGN A-tier, GameRant S-tier), and the Unrestricted (Toji) quest requires Honored One at class level 25 - so this grind feeds the next one.",
      },
      {
        q: "What rarity is Gojo in Dungeon Lootr?",
        a: "Exotic - the top rarity bracket. Sportskeeda's classes guide lists Honored One among the Exotic classes excluded from the normal spin pool: it only comes from mode drops or crafting.",
      },
    ],
    metaDesc:
      "How to get Gojo (Honored One) in Dungeon Lootr: Boss Rush 40+ drop or 50 Infinity Fragments craft. Needed for Toji. Verified 2026-09-05.",
    verified: true,
  },
  {
    slug: "unrestricted",
    name: "Unrestricted",
    origin: "In-game class: Unrestricted (Toji Fushiguro, Jujutsu Kaisen)",
    anime: "Jujutsu Kaisen",
    rarity: "Celestial",
    obtain: "Unrestricted is Toji - a quest unlock, not a drop. The quest NPC sits on a boat in front of the main hub. Requirements: player level 75, 500,000 Coins, Honored One (Gojo) at class level 25, and 10 Heavenly Fragments from Challenge mode.",
    steps: [
      "Reach player level 75 and bank 500,000 Coins.",
      "Unlock Honored One (Gojo) and level the class to 25 - start this early, it is the long pole.",
      "Farm Challenge mode: a boss spawns every 10 waves and can drop a Heavenly Fragment (creator guides cite ~5% per boss). Collect 10.",
      "Turn everything in at the quest NPC on the boat in front of the main hub.",
    ],
    aliases: ["how to get unrestricted", "toji dungeon lootr", "heavenly fragments", "unrestricted quest"],
    route: "Quest",
    standing:
      "Destructoid ranks it top 3 in the game thanks to its Unchained damage window - 'the quest grind is extremely worth it.' GameRant puts it in S-tier, IGN in A-tier.",
    grind:
      "The longest unlock chain in the game. At ~5% per Challenge boss you are looking at roughly 200 boss waves in expectation for the fragments alone, on top of level 75 and a level-25 Honored One. Redeem codes for coins and potions first.",
    related: ["gojo", "sukuna"],
    extraFaq: [
      {
        q: "Is Unrestricted Toji?",
        a: "Yes - Unrestricted is the in-game class based on Toji Fushiguro from Jujutsu Kaisen, built around his Heavenly Restriction theme (the fragments are literally called Heavenly Fragments).",
      },
      {
        q: "Where do Heavenly Fragments drop?",
        a: "Challenge mode. A boss spawns every 10 waves and can drop a Heavenly Fragment - creator guides report roughly a 5% chance per boss. Destructoid confirms the Challenge-mode route and the boat NPC turn-in.",
      },
      {
        q: "What rarity is Unrestricted?",
        a: "Celestial per Sportskeeda's classes guide, which lists it among the Celestial classes excluded from the spin pool - fitting, since it comes from a quest rather than luck.",
      },
    ],
    metaDesc:
      "How to get Unrestricted (Toji) in Dungeon Lootr: level 75 + 500K coins + Gojo 25 + 10 Heavenly Fragments quest. Verified 2026-09-05.",
    verified: true,
  },
  {
    slug: "asta",
    name: "Asta",
    origin: "In-game class: Anti Mage / Anti Magic (Asta, Black Clover)",
    anime: "Black Clover",
    rarity: "Exotic",
    obtain: "Asta is the Anti Mage (Anti Magic) class. It drops as a class item in Boss Rush from floor 40 onward, or you can craft it at the Forge with 50 fragments from the Asta boss line.",
    steps: [
      "Climb Boss Rush to floor 40 - Anti Magic can drop as a class item from floor 40 up.",
      "Guaranteed route: pick the Asta boss line when creating a Boss Rush lobby and farm its fragments.",
      "Craft the Anti Magic class item at the Forge with 50 fragments.",
      "Use the item to unlock the Anti Mage (Asta) class.",
    ],
    aliases: ["how to get asta dungeon lootr", "anti mage dungeon lootr", "anti magic dungeon lootr"],
    route: "Item unlock",
    standing:
      "GameRant puts Anti Magic in S-tier; IGN has it in A-tier. Destructoid groups it with Honored One and Cursed King as the strong Boss Rush crafts, 'slightly weaker than Honored One' in their view.",
    grind:
      "Same loop as the other Boss Rush crafts: floor-40+ luck or 50 fragments. If you are already farming Sukuna or Gojo lines, swap the lobby boss to Asta once those crafts are done.",
    related: ["sukuna", "gojo", "demonbane"],
    extraFaq: [
      {
        q: "Is Asta the same as Anti Mage?",
        a: "Yes - Anti Mage (also called Anti Magic in showcases) is the in-game class based on Asta from Black Clover. Searching either name points to the same class.",
      },
      {
        q: "What floor does Anti Magic drop from in Boss Rush?",
        a: "Floor 40 onward, like the other anime-crossover class items (Cursed King, Honored One). The guaranteed route is 50 boss fragments crafted at the Forge.",
      },
      {
        q: "What rarity is Anti Mage?",
        a: "Exotic per Sportskeeda's classes guide - it is excluded from the normal spin pool and only comes from Boss Rush drops or Forge crafting.",
      },
    ],
    metaDesc:
      "How to get Asta (Anti Mage) in Dungeon Lootr: Boss Rush floor 40+ drop or Forge craft with 50 fragments. Full steps. Verified 2026-09-05.",
    verified: true,
  },
  {
    slug: "azure-devil",
    name: "Azure Devil",
    origin: "In-game class: Azure Devil (Vergil, Devil May Cry)",
    anime: "Devil May Cry",
    rarity: "",
    obtain: "Azure Devil is the base Vergil class. Level it to 50, then add 1,000,000 Coins and 1 Devil Heart to evolve it into Awakened Devil EX.",
    steps: [
      "Obtain the Azure Devil (Vergil) class.",
      "Level Azure Devil to class level 50.",
      "Farm a Devil Heart from the Awakened Devil boss in Frost Spire (one creator reports ~15% spawn chance on nightmare, ~35% drop when it spawns - unverified figures).",
      "With level 50 + 1,000,000 Coins + 1 Devil Heart, evolve into Awakened Devil EX.",
    ],
    aliases: ["azure devil dungeon lootr", "vergil dungeon lootr", "devil heart dungeon lootr"],
    route: "Evolution",
    standing:
      "Rated as a stepping stone in community discussions - the value is the evolution into Awakened Devil EX. IGN still places base Azure Devil in B-tier, so it carries mid-game fine while you level.",
    grind:
      "Three gates: class level 50, a million coins, and a boss drop. Class XP and coins come from dungeon clears - redeem the working codes for a coin head start, then farm Frost Spire for the heart.",
    related: ["awakened-devil-ex", "sinister-trigger"],
    extraFaq: [
      {
        q: "What level does Azure Devil evolve at?",
        a: "Class level 50 - but level alone is not enough. The evolution also costs 1,000,000 Coins and 1 Devil Heart, a drop from the Awakened Devil boss in Frost Spire.",
      },
      {
        q: "Where does the Devil Heart drop?",
        a: "From the Awakened Devil boss, found in Frost Spire per creator unlock guides. One guide cites a ~15% spawn chance on nightmare difficulty and ~35% drop rate when it appears - treat those figures as reported, not official.",
      },
      {
        q: "Azure Devil vs Awakened Devil EX - what's the difference?",
        a: "Same Vergil class line. Azure Devil is the base form; Awakened Devil EX is the evolution (the Devil Trigger form, called Judgement's Edge) with the upgraded kit - IGN ranks the evolved form S-tier vs Azure Devil's B-tier.",
      },
    ],
    metaDesc:
      "Azure Devil (Vergil) in Dungeon Lootr: evolve at level 50 + 1M coins + Devil Heart from Frost Spire. Steps and tips. Verified 2026-09-05.",
    verified: true,
  },
  {
    slug: "awakened-devil-ex",
    name: "Awakened Devil EX",
    origin: "In-game class: Awakened Devil EX (Vergil's Devil Trigger - \"Judgement's Edge\")",
    anime: "Devil May Cry",
    rarity: "Exotic",
    obtain: "Awakened Devil EX is the evolution of Azure Devil (Vergil). Get Azure Devil to class level 50, then evolve it with 1,000,000 Coins and 1 Devil Heart from the Awakened Devil boss in Frost Spire.",
    steps: [
      "Obtain the Azure Devil (Vergil) class and level it to 50.",
      "Farm a Devil Heart from the Awakened Devil boss in Frost Spire.",
      "Pay 1,000,000 Coins to evolve Azure Devil into Awakened Devil EX (Judgement's Edge).",
    ],
    aliases: ["how to get awakened devil ex", "evolve azure devil", "awakened devil ex dungeon lootr", "judgement's edge"],
    route: "Evolution",
    standing:
      "IGN puts Awakened Devil EX in S-tier; GameRant agrees. The evolved kit rates well above base Azure Devil - evolution lines are prestige picks for Devil May Cry fans.",
    grind:
      "The grind is identical to Azure Devil's - getting the class to 50 plus the coin and Devil Heart cost IS the work. Evolving is the reward, not another farm.",
    related: ["azure-devil", "sinister-trigger"],
    extraFaq: [
      {
        q: "Can you get Awakened Devil EX directly?",
        a: "No direct unlock is confirmed - it is the evolution of Azure Devil. The full path is: obtain Azure Devil, level it to 50, then evolve with 1,000,000 Coins and 1 Devil Heart.",
      },
      {
        q: "What is Judgement's Edge?",
        a: "That is the in-game name of Vergil's Devil Trigger form - what Awakened Devil EX represents, per the class showcase.",
      },
      {
        q: "Is Awakened Devil EX good?",
        a: "Yes - IGN and GameRant both rank it S-tier, well above base Azure Devil. See the class tier list for how it stacks against the current meta.",
      },
    ],
    metaDesc:
      "Awakened Devil EX in Dungeon Lootr: evolve Azure Devil at level 50 with 1M coins + Devil Heart for Judgement's Edge. Verified 2026-09-05.",
    verified: true,
  },
  {
    slug: "sinister-trigger",
    name: "Sinister Trigger",
    origin: "In-game class: Sinister Trigger (Dante, Devil May Cry)",
    anime: "Devil May Cry",
    rarity: "Exotic",
    obtain: "Sinister Trigger is an Exotic class with an extremely low roll chance (~0.05%). You get it by spinning/rolling for classes - it's one of the rarest pulls, prized for high mobility, damage and attack speed.",
    steps: [
      "Spin for classes (the game's class-roll mechanic).",
      "Sinister Trigger has roughly a 0.05% chance per roll - expect a long grind.",
    ],
    aliases: ["how to get sinister trigger", "dante dungeon lootr", "exotic class"],
    route: "Class roll",
    standing:
      "The only top-tier class you can pull straight from spins, no crafting chain - IGN and GameRant both rank it S-tier, prized for mobility, damage and attack speed.",
    grind:
      "At ~0.05% per roll you are looking at roughly 1 in 2,000 rolls on average - a stockpile-Luck-Potions-first grind, not a session goal.",
    related: ["awakened-devil-ex", "azure-devil"],
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
      "Sinister Trigger (Dante) in Dungeon Lootr: Exotic class at ~0.05% roll chance. Odds math, Luck Potion tips. Verified 2026-09-05.",
    verified: true,
  },
  {
    slug: "dreadlord",
    name: "Dreadlord",
    origin: "In-game class: Dreadlord",
    anime: "",
    rarity: "Exotic",
    obtain: "Dreadlord is a rare class drop from the Underworld Gate on Nightmare difficulty - the last story map - via the Underworld Glaive class item. Community guides cite roughly a 1% drop rate.",
    steps: [
      "Progress the story maps until you unlock the Underworld Gate (the final story map) and can run it on Nightmare difficulty.",
      "Obtain the Underworld Glaive class item.",
      "Farm Underworld Gate on Nightmare - Dreadlord drops at roughly 1% per community guides.",
      "Raise your Gear Score first: Nightmare clears are what gate the farm, not the drop rate alone.",
    ],
    aliases: ["how to get dreadlord dungeon lootr", "underworld glaive", "underworld gate nightmare"],
    route: "Item unlock",
    standing:
      "S-tier on both IGN and GameRant. IGN highlights its AoE plus shadow clones for clearing whole rooms; Destructoid calls it great for farming difficult levels thanks to its second and fourth skills.",
    grind:
      "A ~1% Nightmare drop means potentially 100+ clears - but each run also pays gear and materials, so the farm compounds. The real prerequisite is a build that clears Nightmare reliably.",
    related: ["sukuna", "shadow-vagrant", "jetstream"],
    extraFaq: [
      {
        q: "What map does Dreadlord drop from?",
        a: "The Underworld Gate on Nightmare difficulty - the last story map - through the Underworld Glaive class item, per Destructoid's tier list and community unlock guides.",
      },
      {
        q: "What is the Dreadlord drop rate?",
        a: "Community guides cite roughly 1% per Nightmare clear. That figure is player-sourced, not official - treat it as an order of magnitude, not a promise.",
      },
      {
        q: "Is Dreadlord good?",
        a: "Yes - S-tier on IGN and GameRant. IGN describes a physical class with multiple AoE attacks plus clones that keep damaging lingering enemies, built for clearing several foes at once.",
      },
    ],
    metaDesc:
      "How to get Dreadlord in Dungeon Lootr: Underworld Gate Nightmare drop via Underworld Glaive, ~1% rate. Gear tips. Verified 2026-09-05.",
    verified: true,
  },
  {
    slug: "shadow-vagrant",
    name: "Shadow Vagrant",
    origin: "In-game class: Shadow Vagrant (Sung Jin-Woo, Solo Leveling)",
    anime: "Solo Leveling",
    rarity: "Exotic",
    obtain: "Shadow Vagrant is the Sung Jin-Woo class, sold in the Shadow Monarch pack in the Robux shop (a paid bundle line showcased alongside the Grand Sovereign pack). No free grind route is confirmed yet.",
    steps: [
      "Open the in-game shop and find the bundle line (the same menu that lists the Grand Sovereign pack).",
      "Purchase the Shadow Monarch pack - the Sung Jin-Woo bundle that grants the Shadow Vagrant class.",
    ],
    aliases: ["how to get shadow vagrant dungeon lootr", "sung jin woo dungeon lootr", "shadow monarch pack", "solo leveling dungeon lootr"],
    route: "Robux bundle",
    standing:
      "IGN S-tier: a dodge-heavy physical class where successful dodges spawn shadows that damage enemies - defense becomes offense. GameRant also places it in S-tier.",
    grind:
      "No grind - it is a Robux purchase. Free players should aim at the Boss Rush crafts instead: Honored One, Cursed King and Anti Magic all come from floor-40+ drops or 50 fragments.",
    related: ["dreadlord", "sukuna"],
    extraFaq: [
      {
        q: "Is Shadow Vagrant Sung Jin-Woo?",
        a: "Yes - Shadow Vagrant is the Sung Jin-Woo (Solo Leveling) class, and the bundle that grants it is called the Shadow Monarch pack, after his in-show title.",
      },
      {
        q: "Can you get Shadow Vagrant for free?",
        a: "No free route is confirmed. Creator footage shows it inside a paid Robux bundle line, and Sportskeeda lists it among the Exotic classes excluded from the spin pool. We will update this page if a free path appears.",
      },
      {
        q: "How does Shadow Vagrant play?",
        a: "Per IGN's tier list, it is a mobile dodge-focused class: successful dodges have a high chance of creating a shadow that damages enemies, so its defense doubles as offense. It plays similarly to Jetstream but with shadow summons.",
      },
    ],
    metaDesc:
      "How to get Shadow Vagrant (Sung Jin-Woo) in Dungeon Lootr: Shadow Monarch pack in the Robux shop. Kit, rating, F2P alternatives. Verified 2026-09-05.",
    verified: true,
  },
  {
    slug: "jetstream",
    name: "Jetstream",
    origin: "In-game class: Jetstream",
    anime: "",
    rarity: "Exotic",
    obtain: "Jetstream is an Exotic class that comes from a special NPC rather than spins, per GameRant's tier list. The exact NPC and quest steps are still being verified - we will publish them once confirmed. (The old JETSTREAM code was unrelated to the unlock.)",
    steps: [],
    aliases: ["how to get jetstream dungeon lootr", "jetstream class dungeon lootr", "jetstream npc"],
    route: "Quest",
    standing:
      "IGN S-tier: a highly mobile physical class built on dodges, with strong, reliable damage range - 'fantastic if you want to clear a room and keep moving.' GameRant places it one step lower, in A-tier.",
    grind: "",
    related: ["dreadlord", "shadow-vagrant"],
    extraFaq: [
      {
        q: "Is Jetstream a spin class?",
        a: "No. Sportskeeda lists it among the Exotic classes excluded from the spin pool, and GameRant notes it comes from a special NPC. The exact quest steps are still being verified.",
      },
      {
        q: "Did the JETSTREAM code unlock the class?",
        a: "No - JETSTREAM was one of the game's early promotional codes (now expired) and had nothing to do with unlocking the class itself. The class still comes from its in-game NPC route.",
      },
      {
        q: "Is Jetstream good?",
        a: "Yes - IGN ranks it S-tier for mobility and reliable damage, and GameRant has it in A-tier. It is one of the strongest non-spin classes once you unlock it.",
      },
    ],
    metaDesc:
      "Jetstream in Dungeon Lootr: Exotic class from a special NPC route, not spins. What's confirmed about the unlock. Verified 2026-09-05.",
    verified: false,
  },
  {
    slug: "founder",
    name: "Founder",
    origin: "In-game class: Founder (Sun Wukong-inspired)",
    anime: "",
    rarity: "Exotic",
    obtain: "Founder is the Sun Wukong-inspired class. It is excluded from the normal spin pool (Sportskeeda lists it among the Exotic exclusives), and creator footage references one specific unlock method - but no reliable source has spelled out the steps yet.",
    steps: [],
    aliases: ["how to get founder dungeon lootr", "wukong dungeon lootr", "founder class dungeon lootr"],
    route: "Unknown",
    standing:
      "IGN A-tier, GameRant A-tier - a strong mid-to-late pick. A 'Brand Founder' cosmetic also appears in the shop's bundle line, named after the same class.",
    grind: "",
    related: ["sukuna", "demonbane"],
    extraFaq: [
      {
        q: "Is Founder the Wukong class?",
        a: "Yes - Founder is the class inspired by Sun Wukong, the Monkey King. Showcase videos refer to it by the Founder name.",
      },
      {
        q: "Why isn't the Founder unlock method listed here?",
        a: "Because no reliable source has published the full steps yet. We know it is not in the spin pool (Sportskeeda) and that a single specific method exists (creator footage) - we publish methods only once confirmed, never guesses.",
      },
      {
        q: "Is Founder good?",
        a: "Both IGN and GameRant place it in A-tier - strong, just below the S-tier cluster. Check the tier list for the current meta before committing to the grind.",
      },
    ],
    metaDesc:
      "Founder (Sun Wukong) in Dungeon Lootr: Exotic exclusive class - what's known about the unlock route and rating. Verified 2026-09-05.",
    verified: false,
  },
  {
    slug: "demonbane",
    name: "Demonbane",
    origin: "In-game class: Demonbane (Frieren-inspired)",
    anime: "Frieren",
    rarity: "Celestial",
    obtain: "Demonbane is a Celestial class excluded from the normal spin pool (Sportskeeda). Destructoid calls it easy to get and beginner-friendly, and its tier-list graphic ties it to the Battle Pass - the exact claim is still being verified.",
    steps: [],
    aliases: ["how to get demonbane dungeon lootr", "frieren dungeon lootr", "demonbane class"],
    route: "Unknown",
    standing:
      "Destructoid: an easy, beginner-friendly class that stays good into mid-game - showcase footage highlights its Castroia damage field and gravity-well pull for AoE clears. IGN B-tier, GameRant B-tier.",
    grind: "",
    related: ["asta", "founder"],
    extraFaq: [
      {
        q: "Is Demonbane the Frieren class?",
        a: "Yes - Demonbane is the Frieren-inspired mage class, with big AoE damage fields that match her portrayal as a peerless offensive mage.",
      },
      {
        q: "Is Demonbane good for beginners?",
        a: "That is Destructoid's exact take: easy to get, beginner friendly, and 'quite good in the mid-game' - a strong starter pick while you work toward the Boss Rush crafts.",
      },
      {
        q: "How do you get Demonbane?",
        a: "It is not in the normal spin pool. Destructoid's tier list labels its graphic 'Demonbane_BattlePass', pointing at the Battle Pass track - we are verifying the exact tier/level before publishing steps.",
      },
    ],
    metaDesc:
      "Demonbane (Frieren) in Dungeon Lootr: Celestial exclusive, beginner-friendly - what's known about the unlock. Verified 2026-09-05.",
    verified: false,
  },
  {
    slug: "streamline",
    name: "Streamline",
    origin: "In-game class: Streamline",
    anime: "",
    rarity: "Celestial",
    obtain: "Streamline was the Early-Access exclusive class, granted during the game's early-access window. Whether it can still be obtained after full release is unconfirmed - Sportskeeda lists it among the Celestial classes outside the spin pool.",
    steps: [],
    aliases: ["streamline dungeon lootr", "early access class dungeon lootr"],
    route: "Unknown",
    standing:
      "IGN A-tier, GameRant B-tier. Its exclusivity makes it a veteran badge more than a meta chase - the tier gap to the S-tier crafts is clear.",
    grind: "",
    related: ["jetstream", "demonbane"],
    extraFaq: [
      {
        q: "Can you still get Streamline?",
        a: "Unconfirmed. It was the Early-Access exclusive class, and no reliable source has stated whether it returned after full release. We will update this page the moment it does.",
      },
      {
        q: "What rarity is Streamline?",
        a: "Celestial per Sportskeeda's classes guide, in the exclusive group that does not appear in the spin pool.",
      },
      {
        q: "Is Streamline worth using?",
        a: "IGN ranks it A-tier and GameRant B-tier - solid, but the S-tier crafts (Cursed King, Honored One, Anti Magic) outclass it once unlocked.",
      },
    ],
    metaDesc:
      "Streamline in Dungeon Lootr: the Early-Access exclusive Celestial class - can you still get it? What's confirmed. Verified 2026-09-05.",
    verified: false,
  },
  {
    slug: "artemis",
    name: "Artemis",
    origin: "In-game class: Artemis",
    anime: "",
    rarity: "Celestial",
    obtain: "Artemis sits in the Celestial bracket. Whether it comes from the Lucky Spin pool or an exclusive route is not confirmed by a reliable source yet - Lucky Spins are cited with ~3% Celestial odds vs ~0.5% on Normal Spins.",
    steps: [],
    aliases: ["artemis dungeon lootr", "how to get artemis dungeon lootr", "celestial class dungeon lootr"],
    route: "Unknown",
    standing:
      "IGN B-tier, GameRant A-tier - the sources disagree, which usually means it is strong in specific modes. We will pin down its standing as more creators test it.",
    grind: "",
    related: ["forge-archon", "vacio"],
    extraFaq: [
      {
        q: "What rarity is Artemis in Dungeon Lootr?",
        a: "Celestial - the bracket just below Exotic. Celestial classes are cited at roughly 3% odds on Lucky Spins and ~0.5% on Normal Spins, though Artemis's exact pool is unconfirmed.",
      },
      {
        q: "Is Artemis good?",
        a: "Mixed signals: GameRant places it A-tier, IGN has it B-tier. It is viable, but not a class you build your account around.",
      },
      {
        q: "How do you get Artemis?",
        a: "Not confirmed yet. If it follows the standard Celestial pattern it should sit in the Lucky Spin pool, but we publish methods only once a reliable source states them.",
      },
    ],
    metaDesc:
      "Artemis in Dungeon Lootr: Celestial class - spin pool odds, mixed tier ratings and what's confirmed. Verified 2026-09-05.",
    verified: false,
  },
  {
    slug: "forge-archon",
    name: "Forge Archon",
    origin: "In-game class: Forge Archon",
    anime: "",
    rarity: "",
    obtain: "Forge Archon's unlock route is not confirmed by a reliable source yet. Tier lists include it among the standard obtainable classes rather than the Exotic exclusives, so it likely sits in the spin pool - publishing steps once confirmed.",
    steps: [],
    aliases: ["forge archon dungeon lootr", "how to get forge archon dungeon lootr"],
    route: "Unknown",
    standing:
      "IGN A-tier, GameRant A-tier - a quiet overperformer that both lists agree on, which is rare for the mid brackets.",
    grind: "",
    related: ["artemis", "vacio"],
    extraFaq: [
      {
        q: "Is Forge Archon good?",
        a: "Both IGN and GameRant rank it A-tier - one of the few mid-bracket classes the two lists agree on. Strong pick if it lands in your spins.",
      },
      {
        q: "How do you get Forge Archon?",
        a: "Not confirmed yet. It is absent from the Exotic-exclusive lists, which points to the spin pool, but we are verifying before publishing steps.",
      },
      {
        q: "What rarity is Forge Archon?",
        a: "Unconfirmed - no reliable source has stated its bracket. Its A-tier placement suggests at least Mythic, but we don't guess rarities.",
      },
    ],
    metaDesc:
      "Forge Archon in Dungeon Lootr: the A-tier class both big tier lists agree on - unlock status and what's known. Verified 2026-09-05.",
    verified: false,
  },
  {
    slug: "vacio",
    name: "VACIO",
    origin: "In-game class: VACIO",
    anime: "",
    rarity: "",
    obtain: "VACIO's unlock route is not confirmed by a reliable source yet. It appears in tier lists among the standard obtainable classes rather than the Exotic exclusives, so the spin pool is the likely home - steps publish once confirmed.",
    steps: [],
    aliases: ["vacio dungeon lootr", "how to get vacio dungeon lootr"],
    route: "Unknown",
    standing:
      "GameRant A-tier, IGN B-tier - another split verdict. Worth using if you pull it; not a priority chase.",
    grind: "",
    related: ["forge-archon", "artemis"],
    extraFaq: [
      {
        q: "Is VACIO good?",
        a: "GameRant says A-tier, IGN says B-tier. Split verdicts like this usually mean solid but mode-dependent - fine to main until a top craft lands.",
      },
      {
        q: "How do you get VACIO?",
        a: "Not confirmed yet. No reliable source lists it among the exclusives, so spins are the expected route - we will publish the confirmed method once stated.",
      },
      {
        q: "What rarity is VACIO?",
        a: "Unconfirmed - no reliable source has stated its bracket yet.",
      },
    ],
    metaDesc:
      "VACIO in Dungeon Lootr: tier-list split verdict, unlock status and what's confirmed about the class. Verified 2026-09-05.",
    verified: false,
  },
];

export function getUnit(slug: string): Unit | undefined {
  return UNITS.find((u) => u.slug === slug);
}
