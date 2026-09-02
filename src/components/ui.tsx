import type { ReactNode } from "react";
import Link from "next/link";
import { SITE, NAV, LEGAL_NAV } from "@/lib/site";

/** Carved stone slab panel - 2px seam border, no soft rounded SaaS cards. */
export function Slab({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`slab p-5 sm:p-6 ${className}`}>{children}</section>;
}

type GlowColor = "arcane" | "ember" | "gold" | "blood";

/** Section heading in the carved display face, with optional torch glow. */
export function Rune({
  children,
  color = "ember",
  as: Tag = "h2",
  className = "",
}: {
  children: ReactNode;
  color?: GlowColor;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag className={`display uppercase glow-${color} text-2xl sm:text-3xl ${className}`}>
      {children}
    </Tag>
  );
}

/** Sticky top nav - the dungeon ledger bar. */
export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-edge bg-stone/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3">
        <Link href="/" className="display text-lg font-bold glow-ember no-underline">
          DUNGEON<span className="glow-arcane">LOOTR</span>
        </Link>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="text-dim hover:text-arcane">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

/** Shared footer + fan-made disclaimer (kept visible per project rules). */
export function SiteFooter() {
  return (
    <footer className="mt-20 border-t-2 border-edge">
      <div className="mx-auto max-w-5xl px-4 py-8 text-dim">
        <p className="display text-xs uppercase tracking-wide">
          Fan-made · Not affiliated with Roblox Corporation or the Dungeon Lootr developer
        </p>
        <p className="mt-3 text-sm">
          {SITE.name} is an independent player resource for the Roblox game{" "}
          {SITE.game}. Game names and assets belong to their owners. All codes and
          data are player-verified - items we cannot confirm are marked
          &ldquo;check in-game.&rdquo;
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {LEGAL_NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="text-dim hover:text-arcane">
                {n.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={SITE.discord} className="text-dim hover:text-arcane" rel="nofollow noopener" target="_blank">
              Official Discord
            </a>
          </li>
        </ul>
        <p className="mt-3 text-sm">© {new Date().getFullYear()} {SITE.domain}</p>
      </div>
    </footer>
  );
}

/** "Last verified" stamp - our freshness wedge vs. slow incumbents. */
export function VerifiedStamp({ date }: { date: string }) {
  return (
    <p className="text-sm text-dim">
      Last checked: <span className="glow-gold">{date}</span>
    </p>
  );
}
