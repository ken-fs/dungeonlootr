/**
 * Dungeon Lootr redeem codes - single source of truth.
 * RULE: never invent codes. Sources this pull (2026-09-03): cross-checked
 * IGN, GameRant, Roblox Den and PCGamesN - no codes beyond the list below;
 * the 5 "unconfirmed" entries are disputed (IGN says expired, GameRant and
 * Roblox Den list them working with specific rewards), so they stay parked.
 * First pull (2026-09-02): Try Hard Guides + a YouTube creator description
 * (videos 5beyMSb0324 / OdVFoAKzeMU) cross-checking the 3 newest.
 * "active" = reported working by the aggregator; the 3 newest are 2-source.
 * "unconfirmed" = single-source, vague "Freebies" reward - verify in-game.
 */
export interface GameCode {
  code: string;
  reward: string;
  status: "active" | "expired" | "unconfirmed";
  note?: string;
}

/** Date the codes list was last human-verified (drives the freshness stamp). */
export const CODES_LAST_CHECKED = "2026-09-03";

export const CODES: GameCode[] = [
  // 3 newest - corroborated by Try Hard Guides + a YouTube creator description.
  { code: "FORGESKIP", reward: "Freebies", status: "active", note: "Newest drop." },
  { code: "8KLIKE", reward: "Freebies", status: "active", note: "8K likes milestone." },
  { code: "10KFAV", reward: "Freebies", status: "active", note: "10K favorites milestone." },
  // Specific rewards listed by Try Hard Guides.
  { code: "FULLRELEASE", reward: "25,000 Coins + 3 Luck Potions", status: "active" },
  { code: "LOOTRISBACK", reward: "3 Forge Stone Bundles", status: "active" },
  { code: "JACKPOT", reward: "5 Luck Potions", status: "active" },
  { code: "20KPLAYERS", reward: "5 Reforge Stone Bundles", status: "active" },
  { code: "GIVEMEGEMSPLEASE", reward: "3 Aspect Gems", status: "active" },
  { code: "LOOTR", reward: "1,000 Coins + Random GM Blessing", status: "active" },
  // Single-source, vague reward - verify in-game before trusting.
  { code: "NEWASPECT", reward: "Freebies", status: "unconfirmed" },
  { code: "BYEMETA", reward: "Freebies", status: "unconfirmed" },
  { code: "3KLIKES", reward: "Freebies", status: "unconfirmed" },
  { code: "4KFAV", reward: "Freebies", status: "unconfirmed" },
  { code: "EARLYACCESSYAY", reward: "Freebies", status: "unconfirmed" },
  // Reported expired by Try Hard Guides (Sep 2026).
  { code: "BOSSRUSH", reward: "-", status: "expired" },
  { code: "MOREEXP", reward: "-", status: "expired" },
  { code: "1KLIKES", reward: "-", status: "expired" },
  { code: "1KFAV", reward: "-", status: "expired" },
  { code: "100KVISITS", reward: "-", status: "expired" },
  { code: "JETSTREAM", reward: "-", status: "expired" },
  { code: "PITY", reward: "-", status: "expired" },
  { code: "DEMONTIME", reward: "-", status: "expired" },
  { code: "BROKENARCHER", reward: "-", status: "expired" },
  { code: "ARCHON", reward: "-", status: "expired" },
  { code: "BETTERQOL", reward: "-", status: "expired" },
  { code: "EARLY_BIRD", reward: "-", status: "expired" },
];

/** How to redeem - from Try Hard Guides + in-game code panel flow. */
export const REDEEM_STEPS: string[] = [
  "Join the ClickBytes Roblox group (codes won't work until you do).",
  "Launch Dungeon Lootr on Roblox.",
  "Press the Codes button on the left side of the screen.",
  "Type a code exactly as shown - codes are case-sensitive.",
  "Hit Submit to claim your reward.",
];

export interface CodeSource {
  name: string;
  href: string;
  /** What actually shows up there - sets player expectations. */
  what: string;
}

/**
 * Where new codes genuinely drop, ranked by speed. Evidence: the code list
 * itself - 8KLIKE / 10KFAV / 20KPLAYERS are community milestones, FULLRELEASE
 * and LOOTRISBACK are update drops. That is the pattern we watch.
 */
export const CODE_SOURCES: CodeSource[] = [
  {
    name: "Official Discord",
    href: "https://discord.gg/dungeonlootr",
    what: "Fastest channel. New codes are announced in the update/announcement channels, usually alongside patch notes.",
  },
  {
    name: "ClickBytes Roblox group",
    href: "https://www.roblox.com/communities/110427303/ClickBytes",
    what: "Milestone codes (likes, favorites, player count) celebrate group goals - and you must be a member to redeem anything anyway.",
  },
  {
    name: "In-game update drops",
    href: "https://www.roblox.com/games/106484206883664/Dungeon-Lootr",
    what: "Big patches and re-launches ship with a code (FULLRELEASE, LOOTRISBACK). Check the game description after every update.",
  },
];
