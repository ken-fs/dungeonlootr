import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { Slab, Rune, VerifiedStamp } from "@/components/ui";
import { UNITS_LAST_CHECKED } from "@/data/units";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Dungeon Lootr Boss Rush Guide - Floors, Drops & Crafts",
  absoluteTitle: true, // 53 chars as-is
  description: `How Boss Rush works in ${SITE.game}: floor 40+ class-item drops, 50-fragment Forge crafts, boss lines for Sukuna, Gojo and Asta - plus Nightmare and Challenge modes.`,
  path: "/boss-rush/",
});

/** Chase classes farmed through Boss Rush - links to the full how-to-get guides. */
const BOSS_LINES = [
  {
    name: "Cursed King (Sukuna)",
    slug: "sukuna",
    drop: "Class item drops from floor 40 up",
    craft: "50 Sukuna Fragments → Forge craft",
    note: "The most-cited best class in the game. Pick the Sukuna boss line when creating the lobby.",
  },
  {
    name: "Honored One (Gojo)",
    slug: "gojo",
    drop: "Class item drops from floor 40 up",
    craft: "50 Infinity Fragments → Forge the Infinity Core",
    note: "Needed again for the Toji quest later - keep spare fragments.",
  },
  {
    name: "Anti Magic (Asta)",
    slug: "asta",
    drop: "Class item drops from floor 40 up",
    craft: "50 fragments from the Asta boss line → Forge craft",
    note: "GameRant's S-tier pick; excluded from the normal spin pool.",
  },
];

const FAQ = [
  {
    q: "What floor do class items drop from in Boss Rush?",
    a: "Class items can drop from floor 40 onward, with creator guides reporting better odds on higher floors. Every chase Boss Rush class (Sukuna, Gojo, Asta) follows the same rule.",
  },
  {
    q: "How do I get a specific class guaranteed?",
    a: "Craft it. When creating a Boss Rush lobby, pick the boss line of the class you want - that boss line drops its fragments, and 50 fragments craft the class item at the Forge. It is slower than a lucky drop but has zero RNG at the end.",
  },
  {
    q: "What level do I need for Boss Rush?",
    a: "Community guides cite entry around player level 67+ - treat the exact number as approximate. In practice your Gear Score is the real gate: you need to clear floors consistently, not just unlock the mode.",
  },
  {
    q: "How many floors are in Boss Rush?",
    a: "Community guides describe a 100-floor gauntlet with the biggest payout at the top. The farm that matters for chase classes starts much earlier, at floor 40.",
  },
  {
    q: "Is Dreadlord from Boss Rush?",
    a: "No - Dreadlord drops from the Underworld Gate story map on Nightmare difficulty (community-cited ~1% rate), not from Boss Rush. Boss Rush covers the Sukuna, Gojo and Asta class lines.",
  },
];

export default function BossRushPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <header>
        <Rune as="h1" color="ember" className="text-3xl sm:text-5xl">
          Boss Rush Guide
        </Rune>
        <p className="mt-3 text-dim">
          Boss Rush is where the chase classes come from in {SITE.game}. Pick a boss line,
          climb floors, and either get lucky with a class-item drop or farm fragments for a
          guaranteed Forge craft. Here is the whole loop.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={UNITS_LAST_CHECKED} />
        </div>
      </header>

      {/* Core loop */}
      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          How Boss Rush Works
        </Rune>
        <ol className="mt-4 space-y-3">
          {[
            "Unlock the mode - community guides cite entry around player level 67+, and your Gear Score decides how high you can actually climb.",
            "When creating a Boss Rush lobby, pick the boss line of the class you want - the boss line you choose decides which fragments drop.",
            "Climb floors. From floor 40 onward the class item itself can drop; creator guides report better odds on higher floors.",
            "No luck needed: 50 fragments from a boss line craft that class item at the Forge - the guaranteed route.",
          ].map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="display glow-taillight">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-dim">{step}</span>
            </li>
          ))}
        </ol>
      </Slab>

      {/* Boss lines table */}
      <section className="space-y-4">
        <Rune color="arcane" as="h2" className="text-xl">
          Chase Class Boss Lines
        </Rune>
        <p className="text-dim">
          Every chase class farmed here follows the same pattern: floor-40+ drop luck, or
          50 fragments for the guaranteed craft. Full step-by-steps are on each unit guide.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {BOSS_LINES.map((b) => (
            <Slab key={b.slug} className="tactile">
              <h3 className="display text-lg glow-gold">{b.name}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-dim">
                <li>• Drop: {b.drop}</li>
                <li>• Craft: {b.craft}</li>
                <li>• {b.note}</li>
              </ul>
              <p className="mt-3 text-sm">
                <Link href={`/units/${b.slug}/`}>Full {b.name.split(" (")[1]?.replace(")", "")} guide →</Link>
              </p>
            </Slab>
          ))}
        </div>
      </section>

      {/* Tips */}
      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          Farming Tips
        </Rune>
        <ul className="mt-4 space-y-2 text-dim">
          <li>
            • <span className="text-fg">Craft, don&apos;t pray.</span> The 50-fragment Forge
            route is slower per run but ends the RNG - pick your target&apos;s boss line from
            the first lobby.
          </li>
          <li>
            • <span className="text-fg">One target at a time.</span> Fragment farming is per
            boss line - finish one craft before swapping the lobby boss.
          </li>
          <li>
            • <span className="text-fg">Gear Score first.</span> Failing floor 35 wastes more
            time than a slower floor-25 clear. Upgrade before you climb.
          </li>
          <li>
            • <span className="text-fg">Keep Gojo spare fragments.</span> The Toji questline
            needs Honored One progress later - don&apos;t dump leftovers.
          </li>
        </ul>
      </Slab>

      {/* Beyond Boss Rush */}
      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          Beyond Boss Rush: Nightmare &amp; Challenge
        </Rune>
        <ul className="mt-4 space-y-2 text-dim">
          <li>
            • <span className="text-fg">Nightmare difficulty</span> -{" "}
            <Link href="/units/dreadlord/">Dreadlord</Link> drops from the Underworld Gate
            (last story map) on Nightmare, community-cited at roughly 1%. The{" "}
            <Link href="/units/azure-devil/">Azure Devil</Link> route also runs through a
            Nightmare-spawn boss in Frost Spire.
          </li>
          <li>
            • <span className="text-fg">Challenge Mode</span> - the{" "}
            <Link href="/units/unrestricted/">Toji (Unrestricted) questline</Link> sends you
            here for Heaven Fragments alongside its level, coin and class requirements.
          </li>
          <li>
            • New to the game? The <Link href="/beginner-guide/">beginner guide</Link> covers
            the core loop, and the <Link href="/tier-list/">class tier list</Link> tells you
            which of these crafts is actually worth the grind.
          </li>
        </ul>
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          Boss Rush FAQ
        </Rune>
        <dl className="mt-4 space-y-4">
          {FAQ.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-fg">{f.q}</dt>
              <dd className="mt-1 text-dim">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Slab>
    </div>
  );
}
