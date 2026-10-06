/**
 * Dungeon Lootr redeem codes - single source of truth.
 * RULE: never invent codes. Sources this pull (2026-09-21, Update 2): two
 * INDEPENDENT creator videos that agree on all five codes - B乛MaX丨Rohaan
 * (2026-09-19, shows each redemption succeeding in-game) + AkumaBlox
 * (2026-09-19 guide, reads each code aloud with its reward). Dual-source,
 * and one of the two is in-game tested.
 *
 * Pull (2026-09-27, same day, later): Update 2.5 shipped - the Berserk collab
 * (Roblox now shows the game as "[GUTS] Dungeon Lootr", updated 2026-09-26
 * 07:23 UTC). Three new codes, all dual-source: a creator showcase ("Blaze
 * Stars 2.0", Sep 25) types each one into the in-game box with the claim
 * succeeding, and Destructoid's Sep 26 list carries the same three with the
 * same rewards. UPDATE2_5 keeps its underscore.
 *
 * Pull (2026-09-27): names + rewards re-checked against in-game footage, and the
 * Update 1 batch retired.
 *  - TORUS, not TAURUS - and UPDATE2, not UPDATETWO. Evidence: the Update 2
 *    overview video (youtube Ug91Zwbm_Lo, Sep 19) shows both strings typed into
 *    the in-game code box with the claim succeeding. Beebom, RadioTimes,
 *    Destructoid and UrGameTips all spell them the same way; our earlier
 *    spellings came from a read-aloud that the captions mangled.
 *  - Rewards for the whole Update 2 batch re-read from that video's redemption
 *    toasts (250 Aether Marks for PAYLOAD, 30 normal + 10 lucky spins for both
 *    class codes), matching the aggregators. Numerals now, not prose.
 *  - Update 1 batch retired in the Update 2 rotation, LOOTR included: Beebom +
 *    RadioTimes + Destructoid all list UPDATE1 / WEEKENDBUFFS / 15KCCU /
 *    RAIDTIME / COURAGE / LOVETHISGAME / LOOTR expired.
 *  - Destructoid has since caught up with the verified batch (same five Update-2
 *    codes, same expiries), so it is no longer a rejected source. Its four extra
 *    codes (RAIDS / MASTERY / GHOULUPDATE / SORRYFORRESTARTGUYSTPBUG3) still
 *    appear nowhere else - keep them out until something corroborates them.
 *
 * Pull (2026-10-02): re-checked all three active-source aggregators (Beebom,
 * RadioTimes, UrGameTips; Destructoid now 403s). NO code has been added or has
 * expired since the Sep 27 pull - every active code above is still listed
 * active, and UrGameTips' expired list (23 codes) matches ours exactly. Two
 * things did move:
 *  - Blanket facts became specific facts: the whole Update-1.5 batch
 *    (TOURNAMENT, SILVERINE, JACKAL, 45KLIKE, 20mvisit) had been carried as
 *    "per GameRant" prose. RadioTimes now prints per-code numbers, so the rows
 *    carry them - flagged in each note, because this is still one aggregator,
 *    not an in-game redemption toast.
 *  - The Berserk branding came off the game on Oct 1 22:44 UTC: the Roblox
 *    listing is back to a plain "[swords] Dungeon Lootr". No new code shipped
 *    with that update, and the three Update 2.5 codes (SLAYER, UPDATE2_5, HAWK)
 *    are still listed active by all three sources - so they stay active here
 *    until something contradicts that.
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
 *
 * Pull (2026-10-06): Update 3 + Pets landed (Roblox API: game renamed to
 * "Dungeon Lootr [💧Pets + UPD]", updated 2026-10-05 21:13 UTC). FULL BATCH
 * ROTATION - all thirteen codes we carried as active are gone, replaced by
 * five Update 3 codes. Three independent aggregators agree on the set and
 * RadioTimes + Destructoid agree on every reward figure: Beebom (Oct 5),
 * RadioTimes (Oct 5), Destructoid (Oct 5). Destructoid's expired rows name
 * our thirteen one by one. This is the first rotation since Sep 27, and the
 * cleanest one we have had - the Update 1.5 batch sat up for weeks on a split
 * source vote, this one is unanimous.
 * Caveat carried forward: these five rewards are aggregator-sourced, not read
 * off an in-game redemption toast. The Update 2 batch got that upgrade and
 * it settled two spellings (TORUS, UPDATE2); this batch has not had it yet.
 * OKAMI specifically: Beebom lists "Revive Sigils + 3 Perfect Reforge Stone",
 * which RadioTimes and Destructoid both contradict - we carry the two-source
 * version and say so in the note.
 * Milestone watch: 30KFAV / 5MVISITS / 20KCCU still have not appeared from any
 * source. Favorites are at 109,084 and visits at 31.1M - both thresholds long
 * crossed, no code. Inference: the developer appears to have replaced
 * milestone codes with per-update batch codes, which would make this watch
 * permanent rather than pending.
 * Update 3 also added five Exotic classes (Shrine Fox, Devourer, Fallen Magi,
 * Petal Captain, Sound Hashira) reachable only through the new Expedition
 * mode - tracked on the units side, not here.
 */
export interface GameCode {
  code: string;
  reward: string;
  status: "active" | "expired" | "unconfirmed";
  note?: string;
  /**
   * Optional link to the related class/mode page. Only used where the code
   * name literally IS the thing players will search next - e.g. the
   * NECROMANCER code and the Necromancer class page. `label` is the complete
   * anchor text (the renderer adds only the arrow), so it stays a proper noun
   * and works on the en/es/pt-br pages without translation.
   */
  link?: { href: string; label: string };
}

/** Date the codes list was last human-verified (drives the freshness stamp). */
export const CODES_LAST_CHECKED = "2026-10-06";

export const CODES: GameCode[] = [
  // --- Update 3 batch (2026-10-05/06, Update 3 + Pets). Three aggregators agree
  // on the same five codes and the same reward figures: Beebom, RadioTimes and
  // Destructoid, all dated Oct 5. RadioTimes and Destructoid match exactly on
  // every number below, so their version is what we carry; Beebom's list is a
  // truncated edit of the same set. Roblox API corroborates the update itself:
  // the game renamed to "Dungeon Lootr [💧Pets + UPD]" and updated 2026-10-05
  // 21:13 UTC. No code here has been read off an in-game redemption toast yet -
  // that is the next upgrade, same as we did for the Update 2 batch. ---
  { code: "SorryForDelay", reward: "15 Perfect Reforge Stone + 15 Spirit Prism + 15 Exotic Ingot", status: "active", note: "Update 3 code. Aggregator-sourced reward figures; no creator footage read yet." },
  { code: "UPDATE3", reward: "50 Lucky Spin + 10 Affix Seal + 20 Reforge Stone Bundle", status: "active", note: "Update 3 code. Aggregator-sourced reward figures; no creator footage read yet." },
  { code: "SLIME", reward: "50 Lucky Spin + 5 Perfect Reforge Stone + 5 Spirit Prism", status: "active", note: "Update 3 code. Aggregator-sourced reward figures; no creator footage read yet." },
  { code: "EXPEDITION", reward: "15 Exotic Ingot + 10 GM Blessing III + 50 Mystery Box + 5k Stars", status: "active", note: "Update 3 code, named after the new Expedition mode. Aggregator-sourced reward figures." },
  { code: "OKAMI", reward: "200 Expedition Point + 1 Revive Sigil + 5 Reforge Stone", status: "active", note: "Update 3 code. RadioTimes + Destructoid agree on these figures; Beebom lists a different OKAMI reward (Revive Sigils + 3 Perfect Reforge Stone) that no other source matches, so we do not use it." },

  // --- Retired in the Update 3 rotation (2026-10-06). Every one of these was
  // active in our list until this pull. Destructoid's expired rows name all
  // thirteen explicitly; Beebom's expired list contains them all; RadioTimes'
  // active list has dropped the lot, keeping only the five Update 3 codes.
  // That is three independent sources agreeing, so this rotation is decisive -
  // unlike the Update 1.5 batch, which we kept up for weeks on a split vote.
  // Rewards kept for the record, as with every earlier retirement. ---
  { code: "SLAYER", reward: "6 Aspect Gem + 30 Lucky spin + 4 Exotic Ingot + 2 Perfect Reforge Stone", status: "expired", note: "Update 2.5 code. Creator reading called it 'winter slayer' - the box takes SLAYER." },
  { code: "UPDATE2_5", reward: "4 Aspect Gem + 25 Lucky spin + 3 Exotic Ingot + 3 Perfect Reforge Stone", status: "expired", note: "Update 2.5 code. The underscore is part of it - typed UPDATE2_5 in-game, not UPDATE2.5." },
  { code: "HAWK", reward: "5 Aspect Gem + 20 Lucky spin + 2 Exotic Ingot + 4 Perfect Reforge Stone", status: "expired", note: "Update 2.5 code, Berserk's Band of the Hawk. His toast shows 5 Aspect Gem." },
  { code: "PAYLOAD", reward: "250 Aether Marks + 5 Reforge Stone", status: "expired", note: "Update 2 code; shares its name with the new Payload game mode." },
  { code: "TORUS", reward: "5 Exotic Ingot + 10 Reforge Stone", status: "expired", note: "Named after the Taurus boss at the end of a Payload run - the code itself has no A." },
  { code: "UPDATE2", reward: "300 Aether Marks + 10 Reforge Stone + 2 Aspect Gem", status: "expired", note: "Update 2 code. Typed as UPDATE2 in-game, not UPDATETWO." },
  { code: "NECROMANCER", reward: "30 Normal spin + 10 Luck spin", status: "expired", note: "Update 2 code; shares its name with a new celestial class." },
  { code: "MOONWITCH", reward: "30 Normal spin + 10 Luck spin", status: "expired", note: "Update 2 code; shares its name with a new celestial class." },
  { code: "TOURNAMENT", reward: "5 Aspect Gem + 10 Protection Scroll + 25k Coins", status: "expired", note: "Update 1.5 tournament update code. Reward figures from RadioTimes (Oct 2 pull) - aggregator-sourced, not yet read off a redemption toast." },
  { code: "SILVERINE", reward: "5 Exotic Ingot + 10 Reforge Stone + 10k Coins", status: "expired", note: "Reward figures from RadioTimes (Oct 2 pull) - aggregator-sourced." },
  { code: "JACKAL", reward: "2 Random GM Blessing + 10k Coins", status: "expired", note: "Reward figures from RadioTimes (Oct 2 pull) - aggregator-sourced." },
  { code: "45KLIKE", reward: "3 Random GM Blessing + 25k Coins", status: "expired", note: "45K likes milestone - likes passed 50K on Sep 14. Reward figures from RadioTimes (Oct 2 pull) - aggregator-sourced." },
  { code: "20mvisit", reward: "3 Luck Potion III + 50k Coins", status: "expired", note: "20M visits milestone - visits passed 21.8M on Sep 14. Reward figures from RadioTimes (Oct 2 pull) - aggregator-sourced." },
  // --- Retired in the Update 2 rotation (2026-09-27): the whole Update 1 batch
  // plus LOOTR, the last launch-era survivor. Beebom + RadioTimes + Destructoid
  // all list these seven expired; rewards kept here for the record. ---
  { code: "UPDATE1", reward: "100 Mage Coins + 10 Reforge Stone + 5 Exotic Ingot", status: "expired" },
  { code: "15KCCU", reward: "100,000 Coins + 5 Luck Potion III", status: "expired" },
  { code: "WEEKENDBUFFS", reward: "2 Luck Potion I + 2 Luck Potion II + 2 Luck Potion III + 10 Reforge Stone", status: "expired" },
  { code: "RAIDTIME", reward: "5 Forge Stone Bundle + 10 Reforge Stone", status: "expired" },
  { code: "COURAGE", reward: "5 Random GM Blessing", status: "expired" },
  { code: "LOVETHISGAME", reward: "10 Aspect Gem", status: "expired" },
  { code: "LOOTR", reward: "1,000 Coins + Random GM Blessing", status: "expired" },
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
