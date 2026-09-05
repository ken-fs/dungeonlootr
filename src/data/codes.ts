/**
 * Dungeon Lootr redeem codes - single source of truth.
 * RULE: never invent codes. Sources this pull (2026-09-05): cross-checked
 * IGN, Beebom, Rock Paper Shotgun, RadioTimes, Sportskeeda, GameRant and
 * PCGamesN. No new codes beyond the list below (latest drop is still
 * FORGESKIP/8KLIKE/10KFAV per Sportskeeda). FORGESKIP's reward is now
 * 2-source (Beebom + RPS). The 5 disputed codes resolved: IGN, Beebom, RPS
 * and RadioTimes all list them expired (GameRant/PCGamesN are stale), so
 * they moved to expired.
 * "active" = reported working by multiple aggregators.
 */
export interface GameCode {
  code: string;
  reward: string;
  status: "active" | "expired" | "unconfirmed";
  note?: string;
}

/** Date the codes list was last human-verified (drives the freshness stamp). */
export const CODES_LAST_CHECKED = "2026-09-05";

export const CODES: GameCode[] = [
  // 3 newest - corroborated by Try Hard Guides + a YouTube creator description.
  { code: "FORGESKIP", reward: "3 Forge Stone Bundles + 3 Reforge Stone Bundles", status: "active", note: "Newest drop." },
  { code: "8KLIKE", reward: "Freebies", status: "active", note: "8K likes milestone." },
  { code: "10KFAV", reward: "Freebies", status: "active", note: "10K favorites milestone." },
  // Specific rewards listed by Try Hard Guides.
  { code: "FULLRELEASE", reward: "25,000 Coins + 3 Luck Potions", status: "active" },
  { code: "LOOTRISBACK", reward: "3 Forge Stone Bundles", status: "active" },
  { code: "JACKPOT", reward: "5 Luck Potions", status: "active" },
  { code: "20KPLAYERS", reward: "5 Reforge Stone Bundles", status: "active" },
  { code: "GIVEMEGEMSPLEASE", reward: "3 Aspect Gems", status: "active" },
  { code: "LOOTR", reward: "1,000 Coins + Random GM Blessing", status: "active" },
  // Reported expired (Sep 2026): the five early-access codes resolved
  // expired by IGN + Beebom + RPS + RadioTimes consensus.
  { code: "NEWASPECT", reward: "-", status: "expired" },
  { code: "BYEMETA", reward: "-", status: "expired" },
  { code: "3KLIKES", reward: "-", status: "expired" },
  { code: "4KFAV", reward: "-", status: "expired" },
  { code: "EARLYACCESSYAY", reward: "-", status: "expired" },
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
