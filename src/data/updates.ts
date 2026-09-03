/**
 * Dungeon Lootr update/patch log.
 * The dev doesn't publish numbered patch notes in one place, so this log is
 * reconstructed from verifiable markers: code drops (each is dated evidence of
 * an event), the Roblox game page (creation + last-update timestamps), and
 * showcase videos. Every entry is labeled with its evidence type - inferred
 * entries say so. Live stats come from the official Roblox Games API.
 */

export interface UpdateEntry {
  /** Exact date only where the evidence gives one (API timestamps); otherwise an honest window like "Late Aug 2026". Never a fake-precise date. */
  date: string;
  title: string;
  detail: string;
  /** What proves this happened - readers can judge confidence themselves. */
  evidence: "API timestamp" | "Code drop" | "Showcase video" | "Inferred";
}

/** Date of the last tracking pass (drives the freshness stamp). */
export const UPDATES_LAST_CHECKED = "2026-09-03";

/** Snapshot from the official Roblox Games API, universe 9656201728. */
export const LIVE_STATS = {
  asOf: "2026-09-03",
  playing: "11,415",
  visits: "5.93M",
  favorites: "33,112",
} as const;

export const UPDATES: UpdateEntry[] = [
  {
    date: "2026-09-03",
    title: "Server patch + two milestones crossed",
    detail:
      "The game was updated again on Sep 3, 2026 (Roblox API last-update timestamp). The same API snapshot shows favorites passing 30K (33,112) and visits passing 5M (5.93M) - both are code-drop thresholds by the game's own milestone pattern (10KFAV, 100KVISITS). No 30KFAV or 5MVISITS code has surfaced yet; we're watching the usual drop channels.",
    evidence: "API timestamp",
  },
  {
    date: "2026-09-02",
    title: "Latest server-side patch",
    detail:
      "The game was updated on Sep 2, 2026 (Roblox API last-update timestamp). Contents aren't itemized in public notes; the active codes list and tier standings were re-verified against it the same day.",
    evidence: "API timestamp",
  },
  {
    date: "Late Aug 2026",
    title: "Milestone wave: 8KLIKE, 10KFAV, 20KPLAYERS",
    detail:
      "Three milestone codes went live around the same window - 8,000 likes, 10,000 favorites and 20,000 concurrent players. FORGESKIP landed alongside them as the newest drop. Rapid-fire milestone codes mean the game is growing faster than the dev can retire old goals.",
    evidence: "Code drop",
  },
  {
    date: "Aug 2026",
    title: "Aspect update - Alacrity added",
    detail:
      "Alacrity (+60% attack speed, 20% proc chance) appeared as the newest aspect in showcase footage, and a NEWASPECT code surfaced in the same window. Aspects are rolled with Aspect Gems - see the aspect tier list for where it ranks.",
    evidence: "Showcase video",
  },
  {
    date: "Aug 2026",
    title: "Meta shake-up hinted",
    detail:
      "A BYEMETA code surfaced (unconfirmed, single source). Code names like this typically accompany balance passes. We haven't re-graded tier lists off an unconfirmed code - if it verifies, the class tier list gets re-checked.",
    evidence: "Inferred",
  },
  {
    date: "Aug 2026",
    title: "LOOTRISBACK - return update",
    detail:
      "The LOOTRISBACK code (3 Forge Stone Bundles) marked a comeback-style update after a quieter period - the drop that restarted the current growth spike.",
    evidence: "Code drop",
  },
  {
    date: "Aug 2026",
    title: "Full release",
    detail:
      "FULLRELEASE (25,000 Coins + 3 Luck Potions) is the richest code bundle to date - the kind of drop that marks a launch event. The game title carries the RELEASE tag to match. Early-access codes (EARLY_BIRD, EARLYACCESSYAY) date the pre-release period.",
    evidence: "Code drop",
  },
  {
    date: "Aug 2026",
    title: "First milestones hit",
    detail:
      "1KLIKES, 1KFAV and 100KVISITS celebrated the game's first goals. All three are now expired - milestone codes tend to die once the next goal arrives, which is why we tell players to redeem immediately.",
    evidence: "Code drop",
  },
  {
    date: "2026-01-31",
    title: "Game created",
    detail:
      "Dungeon Lootr was created on Jan 31, 2026 (Roblox API). It spent its early months in early access - the Streamline class is the Early-Access exclusive - before the August relaunch put it on the charts.",
    evidence: "API timestamp",
  },
];

/**
 * Next likely milestone codes, extrapolated from the LIVE_STATS snapshot and
 * the existing milestone pattern (likes / favorites / players / visits).
 * Labeled speculation - useful for knowing when to check the codes page.
 */
export const NEXT_MILESTONES: string[] = [
  "30K favorites - CROSSED on 2026-09-03 (33,112). A 30KFAV-style code could drop any day now; check the codes page daily.",
  "5M visits - CROSSED on 2026-09-03 (5.93M). A 5MVISITS-style code would follow the 100KVISITS precedent.",
  "Next likes goal - 8KLIKE is live, so a 10KLIKES drop is the natural successor.",
];
