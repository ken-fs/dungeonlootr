/**
 * Dungeon Lootr units - the anime-crossover CLASSES players search
 * "how to get" for.
 * RULE: never invent obtain methods. Where a reliable source didn't state the
 * unlock, `obtain` explains what IS known and flags the method as unconfirmed;
 * `verified` is true only when a concrete obtain method is sourced.
 * Sources (2026-09-13): Update 1 raid classes - creator video etjS2UV-3GY +
 * ProGameGuides (obtain routes); spin rates - Sportskeeda (8%/22% Legendary,
 * 2%/16% Mythic) + allthings.how (rarity assignments + Update 1 tiers).
 * Earlier (2026-09-05): Sportskeeda classes guide (rarity/exclusivity split),
 * Destructoid tier list (Boss Rush 40+ / Forge-50-fragments crafts, Dreadlord
 * Underworld Gate Nightmare, Unrestricted quest NPC), IGN tier list (kit
 * descriptions), GameRant tier list (special-NPC classes), YouTube unlock
 * guide -GErvCAZbS4 (Unrestricted recipe, Awakened Devil EX recipe), YouTube
 * wzu1gKTvl7U (Shadow Monarch pack bundle showcase), dungeonlootrguide.wiki
 * (Dreadlord ~1% rate). First pull (2026-09-02): YouTube showcases.
 * Sinister Trigger refresh (2026-09-16): Sportskeeda classes guide (rarest
 * class, 0.05% Normal / 0.1% Lucky spin rates), Destructoid UPD1 tier list
 * (Exotic on spins, top-3 pure DPS with Dark Professor/Spell Breaker,
 * Alacrity-Ruin aspect pairing), IGN September list (S-Rank, Ranged, self-buff),
 * UrGameTips September (kit: Crossfire 3 charges, Showstopper/Rainstorm resets).
 * Update 1.5 unlocks (2026-09-17): Dragoon/Embertide = spin pool Exotic 0.05%
 * (Gamezebo tier list + Gamezebo Embertide-vs-Dragoon guide + robloxden class
 * table). Hellfiend = Twin Jackals bundle (robloxden class table, corroborated
 * by creator 1.5 guide j8k3iHjOnZA naming a "Twin Jackle" bundle + showcase
 * swfn4gpjMwQ titling it "HELLFIEND (Alucard)"). Tiers: allthings.how Embertide
 * article (Dragoon S, Embertide A, Hellfiend A) + robloxden (Hellfiend S,
 * Embertide/Dragoon A) + Gamezebo (Dragoon/Embertide top band). Hollow and
 * Blade of Draconia: shipped per allthings.how + ProGameGuides, but no source
 * publishes unlock or tier - stay unverified. 500-roll Exotic pity counter is
 * creator-sourced only (j8k3iHjOnZA) - flagged unconfirmed on the pages.
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

export const UNITS_LAST_CHECKED = "2026-09-21";

export const UNITS: Unit[] = [
  // --- Update 2 classes (2026-09-19/20): three free-to-play, one paywalled.
  // Sources per file header. Creator camps disagree on Moon Witch and
  // Crescent Blade - both readings are stated rather than smoothed over. ---
  {
    slug: "necromancer",
    name: "Necromancer",
    origin: "In-game class: Necromancer (Update 2)",
    anime: "",
    rarity: "Celestial",
    obtain:
      "Necromancer is one of two Celestial classes added in Update 2 and comes from the class summon pool. Creators spun for it directly on stream; no alternative route is confirmed.",
    steps: [
      "Open the class summon (spin) menu - the same reroll area the other Celestial classes come from.",
      "Keep spinning until Necromancer drops. Celestial is the rarest tier in the pool, so treat this as a long-term chase rather than a quick unlock.",
    ],
    aliases: [
      "how to get necromancer dungeon lootr",
      "dungeon lootr necromancer class",
      "necromancer celestial dungeon lootr",
      "dungeon lootr update 2 classes",
    ],
    route: "Class roll",
    standing:
      "Roblofix's Update 2 tier list puts Necromancer in A tier - a summoner that raises undead allies and supports them, with strong healing and AOE options. Its ceiling depends on managing summons and having enough enemies to raise. MK is more enthusiastic about the kit itself, calling it \"pretty fun\" with most damage coming from the summons, but notes it ships without an ultimate or an awakening NPC.",
    grind:
      "Celestial spins. Creators report burning thousands of spins hunting it, so save spins for a Celestial rate-up rather than pulling blind.",
    related: ["moon-witch", "dark-professor", "sinister-trigger"],
    extraFaq: [
      {
        q: "What does the Necromancer class do?",
        a: "It is a summoner. The Raise skill revives your last five kills as undead allies, and the kit also mends every undead for half their maximum health while healing allies within 30 studs. The in-game description reads: \"A grave wand caster who drags a recently slain back to their feet and spins them as an undead vanguard.\"",
      },
      {
        q: "How many skeletons does Necromancer summon?",
        a: "Three. Creator showcases show you can summon three skeletons and then heal them, explode them, or empower them for a damage boost - most of the class's damage comes from the summons rather than your own attacks.",
      },
      {
        q: "Does Necromancer have an ultimate or awakening?",
        a: "No. Creators report no ultimate and no awakening NPC for Necromancer - the same is true of Moon Witch. Plan around the base kit and the summons rather than waiting for an ultimate.",
      },
      {
        q: "What stats does Necromancer use?",
        a: "Magic. Dey's Update 2 showcase lists Necromancer as a Celestial magic archetype, so build intelligence and magic damage rather than physical.",
      },
    ],
    metaDesc:
      "How to get the Necromancer class in Dungeon Lootr: Celestial rarity, from the Update 2 class summon pool, with its Raise skill and three-skeleton kit.",
    verified: true,
  },
  {
    slug: "moon-witch",
    name: "Moon Witch",
    origin: "In-game class: Moon Witch (Update 2)",
    anime: "",
    rarity: "Celestial",
    obtain:
      "Moon Witch is the second Celestial class from Update 2 and comes from the same class summon pool as Necromancer. No alternative route is confirmed.",
    steps: [
      "Open the class summon (spin) menu.",
      "Spin for it - Celestial is the rarest tier in the pool, and creators describe the hunt for Moon Witch as taking longer than they expected.",
    ],
    aliases: [
      "how to get moon witch dungeon lootr",
      "dungeon lootr moon witch class",
      "moon witch celestial dungeon lootr",
      "dungeon lootr magic witch",
    ],
    route: "Class roll",
    standing:
      "The two creator camps disagree sharply, and both readings are worth knowing. Roblofix rates Moon Witch S tier - \"an incredibly complete kit\" with strong AOE damage, crowd control, mobility and a shield, calling it one of the strongest and most versatile classes from the update. MK rates it \"pretty mid\", noting the weapon model is nice but it ships without an ultimate and with no awakening NPC found.",
    grind:
      "Celestial spins. Same long chase as Necromancer - Dey's showcase describes the Moon Witch hunt as taking longer than expected even with thousands of spins available.",
    related: ["necromancer", "fey", "dark-professor"],
    extraFaq: [
      {
        q: "What are Moon Witch's skills?",
        a: "Creator showcases list four: Pressing Strike, Hell Cascade (73 orbiting moons for 6 seconds that also shield you), Moonfall (pulls every enemy within 24 studs toward you and then strikes them) and Lunar Rush (a forward dash with a dodge frame that slams the ground on landing). It also has a Mastery passive.",
      },
      {
        q: "What does the Moon Witch class do?",
        a: "The in-game description reads: \"A lunar battle mage who cuts crescent into the dark wards herself with the orbiting moons and drags the field into her fall.\" In practice that is AOE damage plus crowd control - Moonfall groups enemies so the rest of the kit hits all of them.",
      },
      {
        q: "What stats does Moon Witch use?",
        a: "Magic. Dey's showcase lists it as a magic archetype using intelligence stats, so build intelligence and magic damage rather than physical or ranged.",
      },
      {
        q: "Is Moon Witch better than Necromancer?",
        a: "Creators disagree, which usually means it depends on your build. Roblofix ranks Moon Witch a full tier above Necromancer (S vs A) on the strength of its complete kit; MK rates Moon Witch lower than Necromancer, which he calls \"pretty fun\". Both are Celestial and both come from the same summon pool.",
      },
    ],
    metaDesc:
      "How to get the Moon Witch class in Dungeon Lootr: Celestial rarity from the Update 2 summon pool, plus its four skills, shield and the creator tier-list split.",
    verified: true,
  },
  {
    slug: "fey",
    name: "Fey",
    origin: "In-game class: Fey (Update 2)",
    anime: "",
    rarity: "Exotic",
    obtain:
      "Fey is bought from the Payload shop for 7,500 marks - the currency you earn by playing the new Update 2 Payload mode. No spin or bundle route is confirmed.",
    steps: [
      "Play the Payload mode to earn marks (creators note it is soloable on Nightmare, so it is a grind rather than a carry).",
      "Open the Payload shop and buy the Fey class for 7,500 marks - it sits at the top of the shop list.",
    ],
    aliases: [
      "how to get fey dungeon lootr",
      "dungeon lootr fey class",
      "dungeon lootr payload shop",
      "fey 7500 marks",
    ],
    route: "Item unlock",
    standing:
      "Roblofix puts Fey in S tier: \"crazy physical damage and an extremely fast-paced play style\", with abilities that clear groups of enemies while constantly resetting cooldowns, plus good mobility and defensive options. The one caveat he raises is bosses slowing its momentum.",
    grind:
      "Aether marks from the Payload mode. At 7,500 marks it is a farm, but it is one of the three free-to-play Update 2 classes - no Robux needed. See the Payload mode guide for how to earn them.",
    related: ["moon-witch", "necromancer", "shadow-vagrant"],
    extraFaq: [
      {
        q: "How much does the Fey class cost?",
        a: "7,500 marks in the Payload shop. Marks are earned by playing the Payload mode, not bought with Robux - which makes Fey one of the three free-to-play classes from Update 2.",
      },
      {
        q: "What is the Payload shop?",
        a: "The Payload shop is the new Update 2 store where you spend marks earned in the Payload mode. Alongside the Fey class it stocks Celestial gear, Reforge Stones, Aspect Gems, new titles, resource chests, Exotic ore and Payload cosmetics.",
      },
      {
        q: "What stats does Fey use?",
        a: "Physical. Dey's showcase lists Fey as an Exotic physical-type class, so build strength and physical damage rather than magic or ranged.",
      },
      {
        q: "Is Fey worth 7,500 marks?",
        a: "Roblofix rates it S tier for its damage and fast cooldown-resetting playstyle, which is a strong recommendation for a class you unlock with earnable currency rather than Robux. The main limitation is that bosses can slow its momentum.",
      },
    ],
    metaDesc:
      "How to get the Fey class in Dungeon Lootr: 7,500 marks in the Update 2 Payload shop, a free-to-play Exotic with S-tier physical damage.",
    verified: true,
  },
  {
    slug: "crescent-blade",
    name: "Crescent Blade",
    origin: "In-game class: Crescent Blade (Kokushibo, Demon Slayer) - Update 2",
    anime: "Demon Slayer",
    rarity: "Exotic",
    obtain:
      "Crescent Blade is the Update 2 paywalled class, sold as a Robux bundle. It is the Kokushibo class. Creators confirmed no free route exists - one noted the developers have made no attempt to make previous paywall classes obtainable later.",
    steps: [
      "Open the in-game shop and find the Update 2 bundle line.",
      "Purchase the bundle that grants the Crescent Blade (Kokushibo) class. Creators report the displayed price drops with Roblox Plus, so the number you see may not be the list price.",
    ],
    aliases: [
      "how to get crescent blade dungeon lootr",
      "dungeon lootr kokushibo class",
      "kokushibo dungeon lootr",
      "dungeon lootr crescent blade bundle",
    ],
    route: "Robux bundle",
    standing:
      "Roblofix places Crescent Blade in high A tier but flags it as untested - \"I honestly haven't had enough time to fully test this class yet\" - and says it looks strong with potential to move up to S. MK's review is the counterweight: he reports the ultimate dealing zero damage across multiple attempts on both bosses and normal mobs, and calls the class disappointing for a paid bundle.",
    grind:
      "No grind - it is a Robux purchase, and the most expensive way to get an Update 2 class. The other three (Necromancer, Moon Witch, Fey) are all free-to-play.",
    related: ["shadow-vagrant", "dreadlord", "necromancer"],
    extraFaq: [
      {
        q: "Is Crescent Blade the Kokushibo class?",
        a: "Yes. Creators covering Update 2 refer to it as Kokushibo, the Demon Slayer character, and it is sold as a Robux bundle - the only one of the four Update 2 classes behind a paywall.",
      },
      {
        q: "Is the Crescent Blade ultimate bugged?",
        a: "At least one creator reports yes: MK tested the ultimate repeatedly on bosses and normal mobs and says it dealt zero damage. Treat that as a report rather than a confirmed permanent state - it may be patched, so check in-game before buying the bundle for the ultimate specifically.",
      },
      {
        q: "Can you get Crescent Blade for free?",
        a: "No free route is confirmed. Creators note the developers have not made previous paywall classes obtainable, so do not count on a future free unlock. The free Update 2 alternatives are Necromancer and Moon Witch (summons) and Fey (7,500 marks).",
      },
      {
        q: "What stats does Crescent Blade use?",
        a: "Physical. Dey's showcase lists it as an Exotic physical-type class.",
      },
    ],
    metaDesc:
      "How to get the Crescent Blade (Kokushibo) class in Dungeon Lootr: the paywalled Update 2 Robux bundle, plus the bugged-ultimate report and free alternatives.",
    verified: true,
  },
  // --- Update 1.5 classes: names per ProGameGuides; update confirmed by
  // Roblox API (Sep 14 02:07 UTC) + the 1.5 code batch. Unlock routes sourced
  // 2026-09-17 (see header): Dragoon/Embertide spins, Hellfiend bundle;
  // Hollow and Blade of Draconia remain honest placeholders. ---
  {
    slug: "dragoon",
    name: "Dragoon",
    origin: "Dragoon class (Update 1.5)",
    anime: "",
    rarity: "Exotic",
    obtain:
      "Dragoon is an Exotic class in the class spin pool - Gamezebo's tier list and its Embertide vs Dragoon guide both list it as a class roll at the Exotic 0.05% rate, and robloxden's class table agrees ('Spin'). No quest or bundle route exists.",
    steps: [
      "Redeem every active code first - milestone codes hand out Luck Potions, and potions fuel Lucky Spins.",
      "Roll class spins - Dragoon sits in the Exotic band, cited at 0.05% per roll by Gamezebo.",
      "Roll in bulk rather than single spins, and watch the spin UI: creator footage of Update 1.5 shows a new 500-roll Exotic pity counter (single source - treat as unconfirmed until verified in-game).",
    ],
    aliases: ["how to get dragoon dungeon lootr", "dragoon class dungeon lootr", "dragoon spin rate"],
    route: "Class roll",
    standing:
      "S-tier on Gamezebo and allthings.how - the latter names Dragoon the standout of the five Update 1.5 arrivals. robloxden places it one step lower in A. Two-to-one consensus: S.",
    grind:
      "Same logistics as any Exotic spin: stockpile Luck Potions from codes, then roll in bulk. If the creator-reported 500-roll pity counter is real, that caps the worst case - but treat it as unconfirmed.",
    related: ["embertide", "hellfiend", "sinister-trigger"],
    extraFaq: [
      {
        q: "Is Dragoon a spin class?",
        a: "Yes - Gamezebo (tier list and its Embertide vs Dragoon guide) and robloxden both list Dragoon in the class spin pool at Exotic rarity, cited at a 0.05% drop rate. No questline exists: Gamezebo states the new classes 'can only be obtained by using spins.'",
      },
      {
        q: "Is there a pity system for Dragoon?",
        a: "Creator footage of Update 1.5 shows a 500-roll Exotic pity counter in the spin UI - complete 500 rolls and an Exotic is guaranteed. Only one source reports this so far, so confirm the counter in-game before planning around it.",
      },
      {
        q: "Is Dragoon good?",
        a: "Yes - allthings.how calls it the one Update 1.5 class that landed in S tier, and Gamezebo rates it in its top band too. robloxden is the dissenter at A-tier.",
      },
    ],
    metaDesc:
      "How to get Dragoon in Dungeon Lootr: Exotic spin class (~0.05%), S-tier. Spin strategy + pity info. Verified 2026-09-17.",
    verified: true,
  },
  {
    slug: "embertide",
    name: "Embertide",
    origin: "Embertide class (Update 1.5)",
    anime: "",
    rarity: "Exotic",
    obtain:
      "Embertide is an Exotic class in the class spin pool - Gamezebo's tier list and its Embertide vs Dragoon guide both list it as a class roll at the Exotic 0.05% rate ('unlocked via spins rather than a questline'), and robloxden's class table agrees.",
    steps: [
      "Redeem every active code first - milestone codes hand out Luck Potions for Lucky Spins.",
      "Roll class spins - Embertide sits in the Exotic band, cited at 0.05% per roll by Gamezebo.",
      "Roll in bulk and watch the spin UI: creator footage shows a 500-roll Exotic pity counter added in Update 1.5 (single source - confirm in-game).",
    ],
    aliases: ["how to get embertide dungeon lootr", "embertide class dungeon lootr", "embertide spin rate"],
    route: "Class roll",
    standing:
      "A-tier on allthings.how and robloxden; Gamezebo slots it in its top band. allthings.how describes a Magic (Intelligence) pack-clearer whose ceiling is capped by weak single-target damage, not clear speed.",
    grind:
      "Pure spin logistics: stockpile Luck Potions from codes, roll in bulk. The creator-reported 500-roll Exotic pity would cap the worst case, but it is single-source for now.",
    related: ["dragoon", "hellfiend", "sinister-trigger"],
    extraFaq: [
      {
        q: "Is Embertide a spin class?",
        a: "Yes - Gamezebo states the Update 1.5 spin classes 'can only be obtained by using spins' at the Exotic 0.05% rate, and robloxden's class table lists Embertide's route as 'Spin.'",
      },
      {
        q: "What is Embertide's kit like?",
        a: "Per allthings.how, Embertide is an Intelligence-scaling Magic class with four cooldown-driven skills: Flame Stump (fire AoE), Swirling Whirlpool (pulls and groups enemies - the standout CC), Blasting Descent (explosive AoE) and Tidal Tempest (water AoE). Its M1 chain is weak, so damage is measured by cooldown uptime.",
      },
      {
        q: "What stats and aspects work best on Embertide?",
        a: "allthings.how recommends full Intelligence (Strength/Dexterity do nothing for its skill damage) with Tempest or Ruin aspects - Tempest stacks skill damage per cast up to 40%, Ruin sunders a single target for up to 75% increased damage.",
      },
    ],
    metaDesc:
      "How to get Embertide in Dungeon Lootr: Exotic spin class (~0.05%), Magic AoE kit. Spin strategy + build. Verified 2026-09-17.",
    verified: true,
  },
  {
    slug: "hellfiend",
    name: "Hellfiend",
    origin: "Hellfiend class (Update 1.5, Alucard-inspired)",
    anime: "",
    rarity: "Exotic",
    obtain:
      "Hellfiend is the Alucard-inspired Exotic class, sold in the Twin Jackals bundle per robloxden's class table. Creator Update 1.5 guides corroborate a 'Twin Jackle' bundle existing this patch, and showcase footage titles the class 'HELLFIEND (Alucard)'. No free route is confirmed.",
    steps: [
      "Open the in-game shop and find the Twin Jackals bundle (the Update 1.5 bundle line).",
      "Purchase the bundle - it grants the Hellfiend class directly.",
    ],
    aliases: ["how to get hellfiend dungeon lootr", "hellfiend class dungeon lootr", "twin jackals bundle", "alucard dungeon lootr"],
    route: "Robux bundle",
    standing:
      "S-tier on robloxden, which notes paywalled classes are designed to be strong; allthings.how places it in A. Split-source for now - check the tier list as more sites grade it.",
    grind:
      "No grind - it is a Robux purchase. Free players should look at the spin-pool 1.5 classes (Dragoon, Embertide) or the Boss Rush crafts instead.",
    related: ["dragoon", "embertide", "shadow-vagrant"],
    extraFaq: [
      {
        q: "Is Hellfiend the Alucard class?",
        a: "Yes - showcase footage titles it 'HELLFIEND (Alucard)', the Hellsing-inspired class. It is granted by the Twin Jackals bundle, named after Alucard's paired handguns.",
      },
      {
        q: "Can you get Hellfiend for free?",
        a: "No free route is confirmed. robloxden lists its only source as the Twin Jackals bundle - the same pattern as the Shadow Monarch pack (Shadow Vagrant). We will update this page if a free path appears.",
      },
      {
        q: "Is Hellfiend good?",
        a: "robloxden puts it in S-tier (noting paywalled classes are built to be strong), while allthings.how has it in A. Two sources, split verdict - it is at least a strong pick.",
      },
    ],
    metaDesc:
      "How to get Hellfiend in Dungeon Lootr: Alucard-inspired Exotic from the Twin Jackals bundle. Rating + F2P options. Verified 2026-09-17.",
    videoId: "swfn4gpjMwQ",
    verified: true,
  },
  {
    slug: "hollow",
    name: "Hollow",
    origin: "Hollow class (Update 1.5)",
    anime: "",
    rarity: "",
    obtain:
      "Hollow is one of the five Update 1.5 classes (allthings.how and ProGameGuides both confirm it shipped). No source has published its unlock method or rarity yet - the other 1.5 classes split between the spin pool (Dragoon, Embertide) and a Robux bundle (Hellfiend), so check both in-game. We update this page the moment a source confirms it.",
    steps: [],
    aliases: ["how to get hollow dungeon lootr", "hollow class dungeon lootr"],
    route: "Unknown",
    standing:
      "Unranked everywhere so far - no tier list has graded Hollow yet.",
    grind: "",
    related: ["dragoon", "embertide", "hellfiend", "blade-of-draconia"],
    extraFaq: [
      {
        q: "Why isn't the Hollow unlock method listed here?",
        a: "Because no reliable source has published it yet. We know it shipped in Update 1.5 (allthings.how, ProGameGuides) but nothing more - we publish methods only once confirmed, never guesses.",
      },
    ],
    metaDesc:
      "How to get Hollow in Dungeon Lootr: Update 1.5 class confirmed shipped, unlock method still unpublished. Checked 2026-09-17.",
    verified: false,
  },
  {
    slug: "blade-of-draconia",
    name: "Blade of Draconia",
    origin: "Blade of Draconia class (Update 1.5)",
    anime: "",
    rarity: "",
    obtain:
      "Blade of Draconia is one of the five Update 1.5 classes (allthings.how and ProGameGuides both confirm it shipped). No source has published its unlock method or rarity yet - the other 1.5 classes split between the spin pool (Dragoon, Embertide) and a Robux bundle (Hellfiend), so check both in-game. We update this page the moment a source confirms it.",
    steps: [],
    aliases: ["how to get blade of draconia dungeon lootr", "draconia blade", "blade of draconia class"],
    route: "Unknown",
    standing:
      "Unranked everywhere so far - no tier list has graded Blade of Draconia yet.",
    grind: "",
    related: ["dragoon", "embertide", "hellfiend", "hollow"],
    extraFaq: [
      {
        q: "Why isn't the Blade of Draconia unlock method listed here?",
        a: "Because no reliable source has published it yet. We know it shipped in Update 1.5 (allthings.how, ProGameGuides) but nothing more - we publish methods only once confirmed, never guesses.",
      },
    ],
    metaDesc:
      "How to get Blade of Draconia in Dungeon Lootr: Update 1.5 class confirmed shipped, unlock unpublished. Checked 2026-09-17.",
    verified: false,
  },
  // --- Update 1 raid classes (2026-09-13): obtain routes from creator video
  // etjS2UV-3GY + ProGameGuides tier list; tiers per allthings.how (single
  // source - IGN/GameRant haven't graded Update 1 classes yet). ---
  {
    slug: "spell-breaker",
    name: "Spell Breaker",
    origin: "Spell Breaker class (Update 1)",
    anime: "",
    rarity: "",
    obtain:
      "Spell Breaker is an Update 1 class tied to the Magic Unleashed Raid - it drops from the raid or is bought from the raid shop.",
    steps: [
      "Update to the current version and find the Magic Unleashed Raid entrance (raid event added in Update 1).",
      "Run the raid - Spell Breaker can drop from raid clears, and raid currency buys it from the raid shop.",
      "The guaranteed route is the shop: keep raiding and bank the currency.",
    ],
    aliases: ["how to get spell breaker dungeon lootr", "spellbreaker", "magic unleashed raid"],
    route: "Item unlock",
    standing:
      "allthings.how's post-Update-1 tier list puts Spell Breaker in S-tier. IGN and GameRant haven't graded the Update 1 classes yet - treat the S as single-source for now.",
    grind:
      "Raid-shop currency makes this a guaranteed farm rather than pure RNG - the grind is raid clears, not luck.",
    related: ["cryomancer", "dark-professor", "coyote"],
    extraFaq: [
      {
        q: "Is Spell Breaker a spin class?",
        a: "No - creator coverage of Update 1 shows it tied to the Magic Unleashed Raid (drop or raid shop), not the class spin pool.",
      },
    ],
    metaDesc:
      "How to get Spell Breaker in Dungeon Lootr: Magic Unleashed Raid drop or raid shop. Update 1 class. Verified 2026-09-13.",
    videoId: "etjS2UV-3GY",
    verified: true,
  },
  {
    slug: "cryomancer",
    name: "Cryomancer",
    origin: "Cryomancer class (Update 1)",
    anime: "",
    rarity: "",
    obtain:
      "Cryomancer is an Update 1 class from the Magic Unleashed Raid - raid drop or raid shop purchase.",
    steps: [
      "Enter the Magic Unleashed Raid (Update 1 raid event).",
      "Cryomancer drops from raid clears or is bought with raid currency in the raid shop.",
      "Bank raid currency for the guaranteed shop route if drops don't land.",
    ],
    aliases: ["how to get cryomancer dungeon lootr", "cryomancer class", "magic unleashed raid"],
    route: "Item unlock",
    standing:
      "Update 1 class - community tier placement still forming; IGN/GameRant haven't graded it yet.",
    grind:
      "Same raid loop as Spell Breaker - raid clears plus a currency-based shop fallback.",
    related: ["spell-breaker", "dark-professor", "coyote"],
    extraFaq: [],
    metaDesc:
      "How to get Cryomancer in Dungeon Lootr: Magic Unleashed Raid drop or raid shop currency. Update 1 class. Verified 2026-09-13.",
    videoId: "G-1G3lVOWSg",
    verified: true,
  },
  {
    slug: "dark-professor",
    name: "Dark Professor",
    origin: "Dark Professor class (Update 1)",
    anime: "",
    rarity: "",
    obtain:
      "Dark Professor is the rare Update 1 chase drop: an extremely rare drop from the Magic Unleashed Raid on Impossible difficulty.",
    steps: [
      "Unlock and clear the Magic Unleashed Raid.",
      "Run it on Impossible difficulty - Dark Professor drops there as an extremely rare class drop.",
      "Expect a long farm: creator coverage calls the drop 'extremely rare', so bring your best build.",
    ],
    aliases: ["how to get dark professor dungeon lootr", "dark professor drop rate", "impossible raid"],
    route: "Item unlock",
    standing:
      "ProGameGuides' tier-list entry says Dark Professor 'absolutely melts health bars' - the prestige pick of Update 1.",
    grind:
      "The hardest grind of the update: Impossible-difficulty raid clears with a rare drop rate. No pity route is confirmed.",
    related: ["spell-breaker", "cryomancer", "dreadlord"],
    extraFaq: [
      {
        q: "What difficulty drops Dark Professor?",
        a: "Impossible difficulty on the Magic Unleashed Raid, per ProGameGuides and creator Update-1 coverage. Lower difficulties don't drop it.",
      },
    ],
    metaDesc:
      "How to get Dark Professor in Dungeon Lootr: extremely rare drop from the Magic Unleashed Raid on Impossible. Verified 2026-09-13.",
    verified: true,
  },
  {
    slug: "coyote",
    name: "Coyote",
    origin: "Coyote class (Update 1)",
    anime: "",
    rarity: "",
    obtain:
      "Coyote is the fourth Update 1 class. Its unlock method is still being verified - creator coverage of the update links the other three classes to the Magic Unleashed Raid but doesn't pin down Coyote's route. Check in-game and watch this page.",
    steps: [],
    aliases: ["how to get coyote dungeon lootr", "coyote class"],
    route: "Unknown",
    standing:
      "allthings.how's post-Update-1 tier list puts Coyote in S-tier (single source - IGN/GameRant haven't graded it yet).",
    grind: "",
    related: ["spell-breaker", "cryomancer", "dark-professor"],
    extraFaq: [
      {
        q: "Is Coyote a raid class?",
        a: "Unclear - the other three Update 1 classes are raid-linked, but no source we trust has confirmed Coyote's unlock method yet. We're checking after each patch.",
      },
    ],
    metaDesc:
      "How to get Coyote in Dungeon Lootr: Update 1 class, unlock method still being verified. What we know so far. Checked 2026-09-13.",
    verified: false,
  },
  // --- Spin classes with public rates (2026-09-13): Sportskeeda spin-rate
  // table (Legendary 8% normal / 22% lucky; Mythic 2% / 16%) + allthings.how
  // rarity assignments. ---
  {
    slug: "kage",
    name: "Kage",
    origin: "Kage class",
    anime: "",
    rarity: "Legendary (per community guides)",
    obtain:
      "Kage comes from the class spin pool - community guides place it at Legendary rarity, which lands at 8% on Normal Spins and 22% on Lucky Spins.",
    steps: [
      "Open the CLASSES menu in the main hub.",
      "Spin with Normal Spins (8% Legendary) or save Luck Potions for Lucky Spins (22% Legendary).",
      "Legendary pool also contains other classes, so expect several Legendary hits before Kage specifically.",
    ],
    aliases: ["how to get kage dungeon lootr", "kage spin rate"],
    route: "Class roll",
    standing:
      "B-tier on IGN's list - a defensive clone kit focused on single-target fights.",
    grind:
      "Luck-gated like all spin classes: burn Coins on spins after your gear is set; Lucky Spins from codes nearly triple the Legendary rate.",
    related: ["shinobi", "wanderer"],
    extraFaq: [],
    metaDesc:
      "How to get Kage in Dungeon Lootr: Legendary class spin - 8% Normal / 22% Lucky Spin rates. Details. Verified 2026-09-13.",
    verified: true,
  },
  {
    slug: "shinobi",
    name: "Shinobi",
    origin: "Shinobi class",
    anime: "",
    rarity: "Legendary (per community guides)",
    obtain:
      "Shinobi comes from the class spin pool - community guides place it at Legendary rarity: 8% on Normal Spins, 22% on Lucky Spins.",
    steps: [
      "Open the CLASSES menu in the main hub.",
      "Spin - Lucky Spins (22% Legendary) are the efficient route; codes like LOVETHISGAME and 15KCCU hand out Luck Potions.",
      "The Legendary pool is shared, so any Legendary hit may be another class first.",
    ],
    aliases: ["how to get shinobi dungeon lootr", "shinobi spin rate"],
    route: "Class roll",
    standing:
      "The widest split on the current lists: IGN moved Shinobi up to A-tier, GameRant has it C - try it before maining it.",
    grind:
      "Luck-gated spin class - bank Lucky Spins from milestone codes before rolling.",
    related: ["kage", "wanderer"],
    extraFaq: [],
    metaDesc:
      "How to get Shinobi in Dungeon Lootr: Legendary class spin - 8% Normal / 22% Lucky rates. Tier split explained. Verified 2026-09-13.",
    verified: true,
  },
  {
    slug: "wanderer",
    name: "Wanderer",
    origin: "Wanderer class",
    anime: "",
    rarity: "Mythic (per community guides)",
    obtain:
      "Wanderer comes from the class spin pool - community guides place it at Mythic rarity: 2% on Normal Spins, 16% on Lucky Spins.",
    steps: [
      "Open the CLASSES menu in the main hub.",
      "Spin - at Mythic rates, Lucky Spins (16%) are effectively mandatory; Normal Spins (2%) are a coin sink.",
      "Redeem every active code first - milestone codes are the main Luck Potion source.",
    ],
    aliases: ["how to get wanderer dungeon lootr", "wanderer mythic spin"],
    route: "Class roll",
    standing:
      "B-tier on both major lists - wide AoE with only one defensive ability.",
    grind:
      "The rarest spin tier in circulation: 2%/16% rates make this a Lucky-Potion stockpile exercise.",
    related: ["kage", "shinobi"],
    extraFaq: [],
    metaDesc:
      "How to get Wanderer in Dungeon Lootr: Mythic class spin - 2% Normal / 16% Lucky rates. Verified 2026-09-13.",
    verified: true,
  },
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
    obtain: "Sinister Trigger is an Exotic-rarity class pulled straight from the class spin pool - Sportskeeda's classes guide rates it at 0.05% on Normal Spins and 0.1% on Lucky Spins, the lowest drop chance of any class.",
    steps: [
      "Open the CLASSES menu in the main hub.",
      "Spin with Lucky Spins (0.1%) - at double the Normal-Spin rate (0.05%), they are effectively mandatory for this pull.",
      "Redeem every active code first - milestone codes like 20mvisit and WEEKENDBUFFS are the main Luck Potion source, then roll in bulk.",
    ],
    aliases: ["how to get sinister trigger", "dante dungeon lootr", "exotic class", "sinister trigger spin rate"],
    route: "Class roll",
    standing:
      "S-Rank on IGN's September list - a Ranged class with 'the strongest attacks' plus a self-buff - and in Destructoid's top-3 pure DPS trio with Dark Professor and Spell Breaker. Destructoid calls it the best spin class in the game, paired with Alacrity or Ruin aspects.",
    grind:
      "The math is blunt: 0.05% Normal is ~1 in 2,000 rolls; 0.1% Lucky is ~1 in 1,000. Stockpile Luck Potions from milestone codes, then roll in bulk - a long-term project, not a session goal.",
    related: ["dark-professor", "spell-breaker", "awakened-devil-ex", "azure-devil"],
    extraFaq: [
      {
        q: "What are the odds of rolling Sinister Trigger?",
        a: "0.05% per Normal Spin and 0.1% per Lucky Spin, per Sportskeeda's classes guide - roughly 1 in 2,000 and 1 in 1,000 respectively. Treat it as a long-term goal: some players hit it early, others go far past the average.",
      },
      {
        q: "How do I improve my chances of rolling Sinister Trigger?",
        a: "Lucky Spins double the rate (0.1%), so the grind is Luck Potion logistics: redeem every active code first - milestone codes like 20mvisit and WEEKENDBUFFS hand out potions - stockpile, then roll in bulk instead of trickling single spins.",
      },
      {
        q: "Is Sinister Trigger the rarest class in Dungeon Lootr?",
        a: "Yes - Sportskeeda's classes guide names it the rarest class in the game, and Destructoid's Update 1 tier list confirms it as the Exotic-rarity pull on Spins.",
      },
      {
        q: "What is Sinister Trigger's kit like?",
        a: "IGN describes it as a Ranged class with the strongest attacks in Dungeon Lootr plus a self-buff that raises its damage further. Per UrGameTips' Update 1 list, Crossfire has three charges with Dodge movement, and Showstopper and Rainstorm can reset each other.",
      },
    ],
    metaDesc:
      "Sinister Trigger (Dante) in Dungeon Lootr: Exotic spin class - 0.05% Normal / 0.1% Lucky rates, S-tier kit. Verified 2026-09-16.",
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
    related: ["dreadlord", "sukuna", "awakened-devil-ex"], // awakened 是高展示漏水页，从最强页泵内链
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
    related: ["jetstream", "demonbane", "azure-devil"], // azure 是高展示漏水页，从强页泵内链
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
