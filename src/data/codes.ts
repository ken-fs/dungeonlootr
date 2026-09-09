/**
 * Dungeon Lootr redeem codes - single source of truth.
 * RULE: never invent codes. Sources this pull (2026-09-09): IGN (Sep 7,
 * in-game tested) + Dexerto (Sep 8, verified) dual-source. FULL BATCH
 * ROTATION: the launch-era codes were retired and six new codes dropped
 * with the "Update 1" patch wave (matches the Sep 8 Roblox API update
 * timestamp). Only LOOTR survives from the old batch. Older aggregators
 * (Beebom/RadioTimes/GameRant/Sportskeeda, all dated Sep 3) still show the
 * old batch - stale, ignored. WEEKENDBUFFS: Dexerto also lists a second
 * same-name row (3 Aspect Gems) - likely their typo, unconfirmed.
 * "active" = reported working by multiple aggregators.
 */
export interface GameCode {
  code: string;
  reward: string;
  status: "active" | "expired" | "unconfirmed";
  note?: string;
}

/** Date the codes list was last human-verified (drives the freshness stamp). */
export const CODES_LAST_CHECKED = "2026-09-09";

export const CODES: GameCode[] = [
  // --- Update 1 batch (2026-09-07/08): IGN in-game tested + Dexerto verified ---
  { code: "UPDATE1", reward: "100 Mage Coins + 10 Reforge Stone + 5 Exotic Ingot", status: "active", note: "Update 1 launch code." },
  { code: "15KCCU", reward: "100,000 Coins + 5 Luck Potion III", status: "active", note: "15K concurrent-players milestone - a new milestone type beyond likes/favs/visits." },
  { code: "WEEKENDBUFFS", reward: "2 Luck Potion I + 2 Luck Potion II + 2 Luck Potion III + 10 Reforge Stone", status: "active", note: "Dexerto shows a second same-name row (3 Aspect Gems) - likely their typo, unconfirmed." },
  { code: "RAIDTIME", reward: "5 Forge Stone Bundle + 10 Reforge Stone", status: "active" },
  { code: "COURAGE", reward: "5 Random GM Blessing", status: "active" },
  { code: "LOVETHISGAME", reward: "10 Aspect Gem", status: "active" },
  // --- Survivor from the launch batch (still active on both IGN and Dexerto) ---
  { code: "LOOTR", reward: "1,000 Coins + Random GM Blessing", status: "active" },
  // --- Retired in the Update 1 rotation (IGN tested + Dexerto, Sep 7-8) ---
  { code: "FORGESKIP", reward: "-", status: "expired" },
  { code: "8KLIKE", reward: "-", status: "expired" },
  { code: "10KFAV", reward: "-", status: "expired" },
  { code: "FULLRELEASE", reward: "-", status: "expired" },
  { code: "LOOTRISBACK", reward: "-", status: "expired" },
  { code: "JACKPOT", reward: "-", status: "expired" },
  { code: "20KPLAYERS", reward: "-", status: "expired" },
  { code: "GIVEMEGEMSPLEASE", reward: "-", status: "expired" },
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
