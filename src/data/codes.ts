/**
 * Dungeon Lootr redeem codes - single source of truth.
 * RULE: never invent codes. Sources this pull (2026-09-21, Update 2): two
 * INDEPENDENT creator videos that agree on all five codes - B乛MaX丨Rohaan
 * (2026-09-19, shows each redemption succeeding in-game) + AkumaBlox
 * (2026-09-19 guide, reads each code aloud with its reward). Dual-source,
 * and one of the two is in-game tested.
 *
 * ⚠️ REJECTED SOURCE: Destructoid's Sep 20 page lists four "new" codes
 * (RAIDS / MASTERY / GHOULUPDATE / SORRYFORRESTARTGUYSTPBUG3) that share
 * ZERO overlap with what both creators actually redeemed. Its active list
 * also omits every code we have ever verified. Treat that page as unreliable
 * for this game and do not re-add those four without in-game confirmation.
 *
 * Prior pull (2026-09-14): GameRant (new batch marked NEW) + YouTube creator
 * B乛MaX丨Rohaan (Sep 12, tested) + Roblox API corroboration (game updated
 * Sep 14 02:07 UTC; 50.8K likes = 45KLIKE crossed; 21.8M visits = 20mvisit
 * crossed). Reward details are GameRant-only - treat as approximate until a
 * second source lists them.
 * Prior pull (2026-09-09): IGN (Sep 7, in-game tested) + Dexerto (Sep 8,
 * verified) dual-source. FULL BATCH
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
  /**
   * Optional link to the related class/guide page. Only used where the code
   * name literally IS the thing players will search next - e.g. the
   * NECROMANCER code and the Necromancer class page. The label stays a proper
   * noun so the same value works on the en/es/pt-br pages without translation.
   */
  link?: { href: string; label: string };
}

/** Date the codes list was last human-verified (drives the freshness stamp). */
export const CODES_LAST_CHECKED = "2026-09-21";

export const CODES: GameCode[] = [
  // --- Update 2 batch (2026-09-19/20): dual creator source, one in-game
  // tested. Rewards per AkumaBlox's read-aloud; Rohaan's video shows each
  // code redeeming successfully. Code names match Update 2's new classes
  // (Necromancer and Moon Witch are the two new celestial classes). ---
  { code: "PAYLOAD", reward: "5 Reforge Stone", status: "active", note: "Update 2 code. Reward per AkumaBlox." },
  { code: "TAURUS", reward: "Reforge Stone", status: "active", note: "Update 2 code. Reward per AkumaBlox." },
  { code: "UPDATETWO", reward: "Reforge Stone + Aspect Gem", status: "active", note: "Update 2 code. Reward per AkumaBlox." },
  {
    code: "NECROMANCER",
    reward: "Normal spin + Luck spin",
    status: "active",
    note: "Update 2 code; shares its name with a new celestial class.",
    link: { href: "/units/necromancer/", label: "Necromancer" },
  },
  {
    code: "MOONWITCH",
    reward: "Normal spin + 10 Luck spin",
    status: "active",
    note: "Update 2 code; shares its name with a new celestial class.",
    link: { href: "/units/moon-witch/", label: "Moon Witch" },
  },
  // --- Update 1.5 batch (2026-09-14): GameRant + creator video; rewards
  // GameRant-only, marked approximate. Still active - no second source has
  // retired them (Destructoid's page omits them, but that page is unreliable
  // for this game - see the file header). ---
  { code: "TOURNAMENT", reward: "Scrolls + more (per GameRant)", status: "active", note: "Update 1.5 tournament update code." },
  { code: "SILVERINE", reward: "Coins + Stones (per GameRant)", status: "active" },
  { code: "JACKAL", reward: "Coins + Blessings (per GameRant)", status: "active" },
  { code: "45KLIKE", reward: "Coins + Blessings (per GameRant)", status: "active", note: "45K likes milestone - likes passed 50K on Sep 14." },
  { code: "20mvisit", reward: "3 Luck Potions", status: "active", note: "20M visits milestone - visits passed 21.8M on Sep 14." },
  // --- Update 1 batch (2026-09-07/08): IGN in-game tested + Dexerto verified ---
  { code: "UPDATE1", reward: "100 Mage Coins + 10 Reforge Stone + 5 Exotic Ingot", status: "active", note: "Update 1 launch code; still working per GameRant's Update 1.5 list." },
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
