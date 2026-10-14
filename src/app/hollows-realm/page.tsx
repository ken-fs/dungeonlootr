import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { Slab, Rune, VerifiedStamp } from "@/components/ui";
import { SITE } from "@/lib/site";
import { UNITS_LAST_CHECKED } from "@/data/units";

export const metadata = buildMeta({
  title: "Hollows Realm Dungeon Guide - Update 3.5",
  absoluteTitle: true,
  description:
    "Hollows Realm is the Update 3.5 dungeon (level 220+). What it drops, how the Hollow vs Reaper event ties in, and the three classes it feeds. Updated Oct 2026.",
  path: "/hollows-realm/",
});

const faq = [
  {
    q: "What level do you need for Hollows Realm?",
    a: "Level 220, per the Update 3.5 overview coverage. It is an endgame dungeon, not a leveling spot — expect to arrive with a built class and gear.",
  },
  {
    q: "What drops in Hollows Realm?",
    a: "Hollow Shards, the new Update 3.5 currency, drop there — they are the fusion material for the Hollow Reaper class craft. The dungeon's sub-boss also drops the Imperfect Hogyorb used in NPC Sorrow's Destruction Lance quest (stated as a 1% drop with 200-kill pity).",
  },
  {
    q: "Is Hollows Realm part of the Hollow vs Reaper event?",
    a: "Yes. Update 3.5 pairs the dungeon with the Hollow vs Reaper event and its leaderboard, plus the new guilds system — the dungeon is the farming ground the event and the new class crafts both point at.",
  },
  {
    q: "Is Hollows Realm free to enter?",
    a: "Yes. Like the rest of Dungeon Lootr's dungeons it is part of the free game — the gate is your level and build, not Robux.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HollowsRealm() {
  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <header>
        <p className="text-sm text-dim">
          <Link href="/">Home</Link> / <Link href="/updates/">Updates</Link> / Hollows Realm
        </p>
        <Rune as="h1" color="blood" className="mt-1 text-3xl sm:text-5xl">
          Hollows Realm Dungeon Guide
        </Rune>
        <p className="mt-2 text-sm text-dim">
          Update 3.5&apos;s new dungeon — the farming ground behind the Hollow vs Reaper event
        </p>
        <div className="mt-3">
          <VerifiedStamp date={UNITS_LAST_CHECKED} />
        </div>
      </header>

      <Slab>
        <Rune color="ember" as="h2" className="text-xl">
          What Hollows Realm Is
        </Rune>
        <p className="mt-3 text-dim">
          Hollows Realm is the new dungeon added with Update 3.5&apos;s GUILDS update. Coverage of
          the update describes it as an endgame dungeon opening at level 220, and the anchor for the
          update&apos;s other systems: the Hollow vs Reaper event and leaderboard, and the two
          earnable classes the update added both draw their materials from runs inside it.
        </p>
        <p className="mt-3 text-dim">
          If you are not 220 yet, treat it as a goal rather than a wall — the{" "}
          <Link href="/beginner-guide/" className="text-fg">
            beginner guide
          </Link>{" "}
          covers the loop that gets you there, and the{" "}
          <Link href="/units/" className="text-fg">
            class roster
          </Link>{" "}
          has the builds worth investing in for the climb.
        </p>
      </Slab>

      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          What It Drops
        </Rune>
        <ul className="mt-3 space-y-3 text-dim">
          <li>
            <span className="text-fg">Hollow Shards.</span> The new Update 3.5 currency. You fuse
            them with a Hollow Sword at the Forge to craft the{" "}
            <Link href="/units/hollow-reaper/" className="text-fg">
              Hollow Reaper
            </Link>{" "}
            class — the one creators are already calling the update&apos;s strongest.
          </li>
          <li>
            <span className="text-fg">Imperfect Hogyorb.</span> A quest item off the dungeon&apos;s
            sub-boss, stated in the overview coverage as a 1% drop with a 200-kill pity. NPC Sorrow
            needs one, plus a stack of materials and 7.5M gold, for the{" "}
            <Link href="/units/destruction-lance/" className="text-fg">
              Destruction Lance
            </Link>{" "}
            quest class.
          </li>
          <li>
            <span className="text-fg">Event progress.</span> Hollows Realm runs feed the Hollow vs
            Reaper event and its leaderboard — the update&apos;s competitive track.
          </li>
        </ul>
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          The Three Update 3.5 Classes
        </Rune>
        <p className="mt-3 text-dim">
          Two of the three classes Update 3.5 added are gated behind this dungeon. The third is the
          paid{" "}
          <Link href="/units/mastermind/" className="text-fg">
            Mastermind
          </Link>{" "}
          bundle — the only one you can skip Hollows Realm for.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          <li className="slab block p-4">
            <Link href="/units/hollow-reaper/" className="no-underline">
              <span className="display glow-gold">Hollow Reaper</span>
              <span className="mt-1 block text-sm text-dim">
                Forge craft: Hollow Sword + Hollow Shards from this dungeon. Early favorite for the
                update&apos;s strongest class.
              </span>
            </Link>
          </li>
          <li className="slab block p-4">
            <Link href="/units/destruction-lance/" className="no-underline">
              <span className="display glow-gold">Destruction Lance</span>
              <span className="mt-1 block text-sm text-dim">
                NPC Sorrow&apos;s quest: Imperfect Hogyorb from this dungeon&apos;s sub-boss, plus
                materials and 7.5M gold.
              </span>
            </Link>
          </li>
        </ul>
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          Hollows Realm FAQ
        </Rune>
        <dl className="mt-4 space-y-4">
          {faq.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-fg">{f.q}</dt>
              <dd className="mt-1 text-dim">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Slab>

      <p className="text-sm text-dim">
        More: <Link href="/updates/">all updates</Link> · <Link href="/units/">all units</Link> ·{" "}
        <Link href="/codes/">working codes</Link> · <Link href="/tier-list/">class tier list</Link>
      </p>
    </div>
  );
}
