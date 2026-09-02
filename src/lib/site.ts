/** Single source of truth for site-wide config. */
export const SITE = {
  name: "Dungeon Lootr Hub",
  domain: "dungeonlootr.net",
  url: "https://dungeonlootr.net",
  game: "Dungeon Lootr",
  robloxUrl: "https://www.roblox.com/games/106484206883664/Dungeon-Lootr",
  placeId: "106484206883664",
  universeId: "9656201728",
  developer: "ClickBytes",
  discord: "https://discord.gg/dungeonlootr",
  tagline:
    "Working codes, class & aspect tier lists, and how-to-get guides for Roblox Dungeon Lootr.",
  contactEmail: "contact@dungeonlootr.net",
} as const;

/** Primary nav - kept in one place so header/footer/sitemap stay in sync. */
export const NAV: { href: string; label: string }[] = [
  { href: "/codes/", label: "Codes" },
  { href: "/tier-list/", label: "Class Tier List" },
  { href: "/aspect-tier-list/", label: "Aspect Tier List" },
  { href: "/units/", label: "Units" },
  { href: "/beginner-guide/", label: "Beginner Guide" },
  { href: "/updates/", label: "Updates" },
];

/** Footer / legal + info pages. */
export const LEGAL_NAV: { href: string; label: string }[] = [
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms" },
];
