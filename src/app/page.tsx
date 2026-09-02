import type { Metadata } from "next";
import Link from "next/link";
import { Slab, Rune, VerifiedStamp } from "@/components/ui";
import { CopyButton } from "@/components/CopyButton";
import { SITE, NAV } from "@/lib/site";
import { CODES, CODES_LAST_CHECKED } from "@/data/codes";
import { UNITS } from "@/data/units";

// The homepage - not /codes - is what Google tends to rank for the
// "dungeon lootr codes" query cluster (its biggest demand). Give it a
// codes-first, dated title matching how players search.
const MONTH_YEAR = new Date().toLocaleString("en-US", { month: "long", year: "numeric" });

export const metadata: Metadata = {
  title: { absolute: `Dungeon Lootr Codes (${MONTH_YEAR}) - Working Roblox Codes` },
  description: `Working ${SITE.game} codes for ${MONTH_YEAR}, verified ${CODES_LAST_CHECKED}. Plus class & aspect tier lists and how-to-get guides for Roblox ${SITE.game}.`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: "/",
    title: `${SITE.game} Codes (${MONTH_YEAR}) - Working Roblox Codes`,
    description: SITE.tagline,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.game} Codes (${MONTH_YEAR}) - Working Roblox Codes`,
    description: SITE.tagline,
    images: ["/og.png"],
  },
};

const activeCodes = CODES.filter((c) => c.status === "active");

// Live snapshot from the Roblox games API (2026-09-02). Refresh on rebuild.
const STATS = [
  { label: "Visits", value: "4.5M" },
  { label: "Playing now", value: "10K+" },
  { label: "Approval", value: "96%" },
];

const HOME_FAQ = [
  {
    q: "Are there working Dungeon Lootr codes?",
    a: "Yes. New codes drop around milestones and updates, and we verify each one before listing it - bookmark the codes page and check before each session.",
  },
  {
    q: "How do you get Gojo in Dungeon Lootr?",
    a: "Gojo is the Honored One class. You unlock it by grinding for the Infinity Core, then using it to obtain the class. Full steps are on the Gojo unit page.",
  },
  {
    q: "What is the best class in Dungeon Lootr?",
    a: "Cursed King (Sukuna) is the most-cited best class. We rank every class on the class tier list and re-grade each patch.",
  },
];

const HUBS = [
  { href: "/tier-list/", title: "Class Tier List", blurb: "Which classes are actually worth maining." },
  { href: "/aspect-tier-list/", title: "Aspect Tier List", blurb: "Best aspects to roll and build around." },
  { href: "/beginner-guide/", title: "Beginner Guide", blurb: "Your first dungeon run and progression." },
  { href: "/updates/", title: "Updates", blurb: "Latest patch notes and what changed." },
];

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="space-y-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      {/* Asymmetric split hero - real game art on the right */}
      <section className="grid items-center gap-8 pt-4 md:grid-cols-[1.05fr_1fr]">
        <div className="order-2 min-w-0 md:order-1">
          <h1 className="display text-4xl leading-tight sm:text-6xl">
            <span className="glow-ember">Dungeon Lootr</span>
            <span className="mt-2 block text-2xl text-fg sm:text-3xl">
              codes, tier lists &amp; unit guides
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-dim">
            Every working code, the best classes and aspects, and how to get Gojo, Sukuna and
            every anime unit. Verified and dated.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/codes/" className="slab tactile px-5 py-2.5 font-medium glow-gold no-underline hover:border-gold">
              Working Codes
            </Link>
            <Link href="/units/" className="slab tactile px-5 py-2.5 font-medium glow-arcane no-underline hover:border-arcane">
              How to Get Units
            </Link>
          </div>
        </div>
        <div className="art-frame order-1 min-w-0 md:order-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero.png"
            alt="Dungeon Lootr Roblox key art with anime crossover characters"
            width={768}
            height={432}
            className="h-auto w-full"
            fetchPriority="high"
          />
        </div>
      </section>

      {/* Real stats - plain inline row, hairline divider (distinct layout family) */}
      <section className="border-y-2 border-edge py-6">
        <dl className="flex flex-wrap items-baseline justify-around gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <dd className="display text-3xl glow-gold sm:text-4xl">{s.value}</dd>
              <dt className="mt-1 text-xs uppercase tracking-wide text-dim">{s.label}</dt>
            </div>
          ))}
          <div className="text-center">
            <dd className="display text-3xl text-fg sm:text-4xl">RPG</dd>
            <dt className="mt-1 text-xs uppercase tracking-wide text-dim">Hack &amp; Slash</dt>
          </div>
        </dl>
      </section>

      {/* Codes teaser (big) + most-wanted units (narrow) - asymmetric */}
      <section className="grid gap-4 md:grid-cols-3">
        <Slab className="md:col-span-2">
          <div className="flex items-center justify-between gap-3">
            <Rune color="gold" as="h2" className="text-xl">
              <span className="pulse">●</span> Working Codes
            </Rune>
            <Link href="/codes/" className="text-sm">All codes →</Link>
          </div>
          {activeCodes.length > 0 ? (
            <ul className="mt-4 divide-y divide-edge">
              {activeCodes.slice(0, 6).map((c) => (
                <li key={c.code} className="flex items-center justify-between gap-3 py-3">
                  <div className="min-w-0">
                    <code className="glow-gold text-lg font-bold break-all">{c.code}</code>
                    <span className="block text-sm text-dim sm:ml-3 sm:inline">{c.reward}</span>
                  </div>
                  <CopyButton value={c.code} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-dim">
              No codes are confirmed working right now. Check the{" "}
              <Link href="/codes/">codes page</Link> for the latest.
            </p>
          )}
          <div className="mt-3">
            <VerifiedStamp date={CODES_LAST_CHECKED} />
          </div>
        </Slab>
        <Slab>
          <Rune color="arcane" as="h2" className="text-xl">
            Most-Wanted Units
          </Rune>
          <ul className="mt-4 space-y-2">
            {UNITS.slice(0, 5).map((u) => (
              <li key={u.slug}>
                <Link href={`/units/${u.slug}/`}>How to get {u.name}</Link>
              </li>
            ))}
          </ul>
          <Link href="/units/" className="mt-4 inline-block text-sm">All units →</Link>
        </Slab>
      </section>

      {/* Explore grid - 4 balanced cells */}
      <section>
        <Rune color="arcane" as="h2">Explore the Hub</Rune>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HUBS.map((h) => (
            <Link key={h.href} href={h.href} className="no-underline">
              <Slab className="tactile h-full hover:border-arcane">
                <h3 className="display text-lg glow-gold">{h.title}</h3>
                <p className="mt-2 text-sm text-dim">{h.blurb}</p>
              </Slab>
            </Link>
          ))}
        </div>
      </section>

      {/* What is / Why trust - 2-col */}
      <section className="grid gap-4 md:grid-cols-2">
        <Slab>
          <Rune color="ember" as="h2" className="text-xl">
            What is Dungeon Lootr?
          </Rune>
          <p className="mt-3 text-dim">
            Dungeon Lootr is an anime-crossover Roblox dungeon RPG: run dungeons, unlock classes
            and aspects, and spin for powerful anime units like Gojo, Sukuna and Asta. It launched
            recently and updates fast, so new units, codes and balance changes land often.
          </p>
        </Slab>
        <Slab>
          <Rune color="gold" as="h2" className="text-xl">
            Why trust us
          </Rune>
          <p className="mt-3 text-dim">
            Everything here is player-verified. Codes are cross-checked before we list them and
            stamped with the date we confirmed them. When we can&apos;t verify something yet, we
            say so instead of making it up. <Link href="/about/">How we verify →</Link>
          </p>
        </Slab>
      </section>

      <section>
        <Rune color="arcane" as="h2" className="text-xl">
          Dungeon Lootr FAQ
        </Rune>
        <dl className="mt-4 space-y-4">
          {HOME_FAQ.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-fg">{f.q}</dt>
              <dd className="mt-1 text-dim">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="text-sm text-dim">
        Jump to:{" "}
        {NAV.map((n, i) => (
          <span key={n.href}>
            <Link href={n.href}>{n.label}</Link>
            {i < NAV.length - 1 ? " · " : ""}
          </span>
        ))}
      </p>
    </div>
  );
}
