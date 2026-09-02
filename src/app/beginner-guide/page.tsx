import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { Slab, Rune } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Dungeon Lootr Beginner Guide - How to Start",
  absoluteTitle: true,
  description: `New to Roblox ${SITE.game}? The core loop, classes, aspects, currencies and the mistakes to skip - a no-fluff starter guide, verified 2026-09-02.`,
  path: "/beginner-guide/",
});

const faq = [
  {
    q: "What should I do first in Dungeon Lootr?",
    a: "Join the ClickBytes Roblox group, redeem every working code, then roll your first class and start clearing the earliest dungeons. Codes plus a decent first class compress the slow early game more than anything else.",
  },
  {
    q: "Is Dungeon Lootr free to play?",
    a: "Yes - it is a free Roblox game. Premium Plus subscribers get +5% player EXP and +10% class EXP (per the official game description), but every class, aspect and dungeon is earnable through play.",
  },
  {
    q: "What is the max level in Dungeon Lootr?",
    a: "The official game description lists a max player level of 100. Classes level separately through use - evolution lines like Azure Devil gate their evolution at class level 50.",
  },
  {
    q: "Should I reroll my first class?",
    a: "Not right away. Exotic classes sit around a 0.05% roll chance, so early rerolls are better spent once you have Luck Potions stacked from codes. A mid-rarity class carried by good aspects clears early dungeons fine.",
  },
  {
    q: "Can I play Dungeon Lootr with friends?",
    a: "Yes - servers hold up to 15 players (per the Roblox game listing), and the game bills itself as part hangout: emotes and social play are advertised features. Co-op runs make early dungeon clears noticeably safer.",
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

export default function BeginnerGuide() {
  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <header>
        <Rune as="h1" color="ember" className="text-3xl sm:text-5xl">
          Dungeon Lootr Beginner Guide
        </Rune>
        <p className="mt-3 text-dim">
          {SITE.game} is a hack-and-slash dungeon ARPG on Roblox: you dive into randomly
          generated dungeons, fight to the boss, and extract with your loot intact. This
          guide covers how the systems fit together and exactly what to do in your first
          sessions - no fluff, no guessed numbers.
        </p>
      </header>

      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          The Core Loop
        </Rune>
        <p className="mt-3 text-dim">
          Every run follows the same rhythm: enter a dungeon, clear rooms, beat the boss,
          and walk out with loot - or die and lose the run&apos;s progress. Loot funds your
          build: better gear rolls, aspect rerolls, and class spins. Stronger builds clear
          deeper dungeons, which drop better loot. That loop is the whole game, and every
          decision in this guide points back at clearing it faster.
        </p>
        <p className="mt-3 text-dim">
          Beyond the standard dungeons, the game lists <span className="text-fg">Boss Rush</span> and{" "}
          <span className="text-fg">Challenge Dungeon</span> modes for bigger checks on your
          build - treat those as mid-game goals, not day-one content.
        </p>
      </Slab>

      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          Your First 10 Minutes
        </Rune>
        <ol className="mt-4 space-y-3 text-dim">
          <li>
            <span className="display glow-ember">01. </span>
            <span className="text-fg">Join the ClickBytes Roblox group.</span> This is
            mandatory - the game rejects every code redemption until you are a member.
            Do it before you even launch.
          </li>
          <li>
            <span className="display glow-ember">02. </span>
            <span className="text-fg">Redeem every working code.</span> Codes hand out coins,
            Luck Potions, Forge Stones and Aspect Gems - the exact currencies the early
            game starves you of. Our <Link href="/codes/">codes list</Link> is re-verified
            daily; copy-paste each one, they are case-sensitive.
          </li>
          <li>
            <span className="display glow-ember">03. </span>
            <span className="text-fg">Roll your first class.</span> Your class is your base
            kit - attacks, mobility and scaling. Don&apos;t burn everything chasing an
            Exotic on day one (more on odds below).
          </li>
          <li>
            <span className="display glow-ember">04. </span>
            <span className="text-fg">Clear the easiest dungeon repeatedly.</span> Early
            clears build the coins and materials that fund aspects and gear rolls. Fast,
            reliable clears beat slow, risky ones.
          </li>
          <li>
            <span className="display glow-ember">05. </span>
            <span className="text-fg">Spend as you go.</span> Hoarding nothing: roll aspects
            when you have gems, upgrade when you have stones. Power compounds.
          </li>
        </ol>
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          Classes Explained
        </Rune>
        <p className="mt-3 text-dim">
          The game advertises 30+ classes, rolled through a spin mechanic. Classes sit on a
          rarity ladder, and the order matters because roll odds collapse as you climb:
        </p>
        <p className="mt-3 text-center">
          <span className="display text-sm sm:text-base">
            <span className="text-dim">Rare → Epic → Legendary → Mythic → Celestial → </span>
            <span className="glow-gold">Exotic</span>
          </span>
        </p>
        <p className="mt-3 text-dim">
          Exotic is the top bracket - anime crossover classes like{" "}
          <Link href="/units/gojo/">Gojo (Honored One)</Link>,{" "}
          <Link href="/units/sukuna/">Sukuna (Cursed King)</Link> and{" "}
          <Link href="/units/unrestricted/">Toji (Unrestricted)</Link>. The rarest confirmed
          rate belongs to <Link href="/units/sinister-trigger/">Sinister Trigger</Link> at
          roughly 0.05% per roll - about 1 in 2,000 on average. That math is why Luck
          Potions (which boost class-spin odds) are the most valuable code reward for new
          players: stack them first, then roll in bulk.
        </p>
        <p className="mt-3 text-dim">
          Some classes dodge the roll entirely: evolution lines like{" "}
          <Link href="/units/azure-devil/">Azure Devil</Link> transform at class level 50,
          and item unlocks like the Infinity Core gate others. Check the{" "}
          <Link href="/tier-list/">class tier list</Link> before committing your spins.
        </p>
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          Aspects Explained
        </Rune>
        <p className="mt-3 text-dim">
          Aspects are modifiers you roll with <span className="text-fg">Aspect Gems</span> -
          think of them as the build-defining layer on top of your class. Confirmed examples
          from showcase footage: <span className="text-fg">Alacrity</span> (+60% attack
          speed, 20% proc chance), <span className="text-fg">Umbral</span> (an orb effect
          that crits), <span className="text-fg">Fulmin</span> (lightning AoE),{" "}
          <span className="text-fg">Blaze</span> (flame damage),{" "}
          <span className="text-fg">Verdant</span> (stacking poison-like effect),{" "}
          <span className="text-fg">Sanguine</span> (chance-based lifesteal) and{" "}
          <span className="text-fg">Ruin</span> (piercing bonus damage). A mid class with
          the right aspect out-performs a rare class with a dead one.
        </p>
        <p className="mt-3 text-dim">
          Gems come from codes and play - roll aspects once your class is settled, not
          before. Current rankings live on the{" "}
          <Link href="/aspect-tier-list/">aspect tier list</Link>.
        </p>
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          Dungeons, Modes &amp; Servers
        </Rune>
        <p className="mt-3 text-dim">
          Dungeons are <span className="text-fg">randomly generated</span>, so routes and
          rooms change every run - learning enemy patterns matters more than memorizing
          layouts. Clear to the boss, beat it, and extract with your loot intact; death
          costs the run. Once your build holds up, the two side modes are where the real
          checks live: <span className="text-fg">Boss Rush</span> chains boss fights
          back-to-back, and the <span className="text-fg">Challenge Dungeon</span> is the
          game&apos;s self-described big-test content.
        </p>
        <p className="mt-3 text-dim">
          Servers hold up to <span className="text-fg">15 players</span> per the Roblox
          listing, and the game leans social - emotes and hanging out are advertised
          features. Running dungeons with a friend or two makes early clears faster and
          deaths rarer, which compounds into more loot per hour.
        </p>
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          Currencies &amp; Items Glossary
        </Rune>
        <dl className="mt-4 space-y-3 text-dim">
          <div>
            <dt className="text-fg font-semibold">Coins</dt>
            <dd>The workhorse currency for everyday upgrades and rolls. Codes drop thousands for free.</dd>
          </div>
          <div>
            <dt className="text-fg font-semibold">Luck Potions</dt>
            <dd>Boost class-spin odds. Save them for bulk rolling sessions, never trickle single spins.</dd>
          </div>
          <div>
            <dt className="text-fg font-semibold">Forge &amp; Reforge Stone Bundles</dt>
            <dd>Gear-roll materials - forge to roll, reforge to reroll. This is where spare coins end up.</dd>
          </div>
          <div>
            <dt className="text-fg font-semibold">Aspect Gems</dt>
            <dd>The aspect-roll currency. Scarcer than coins, so spend them on a class you plan to keep.</dd>
          </div>
          <div>
            <dt className="text-fg font-semibold">GM Blessings</dt>
            <dd>Random bonus rewards from select codes - free value, take them.</dd>
          </div>
          <div>
            <dt className="text-fg font-semibold">Infinity Core</dt>
            <dd>A dungeon-farmed unlock item - the gate for the Honored One (Gojo) class. The first of several item-gated unlocks.</dd>
          </div>
        </dl>
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          Leveling: Player vs Class XP
        </Rune>
        <p className="mt-3 text-dim">
          Two tracks level in parallel. Your <span className="text-fg">player level</span>{" "}
          (capped at 100 per the official description) is your account-wide progression,
          while each <span className="text-fg">class levels separately</span> through use -
          which is why evolution gates are stated in class levels, like Azure Devil&apos;s
          level-50 evolution. Premium Plus subscribers get +5% player EXP and +10% class
          EXP, a mild convenience rather than a wall.
        </p>
      </Slab>

      <Slab>
        <Rune color="blood" as="h2" className="text-xl">
          Beginner Mistakes to Skip
        </Rune>
        <ul className="mt-4 space-y-3 text-dim">
          <li>
            <span className="text-fg">Typing codes by hand.</span> They are case-sensitive
            and expire fast - copy-paste from the <Link href="/codes/">codes page</Link>.
          </li>
          <li>
            <span className="text-fg">Rolling Exotic hunts with zero Luck Potions.</span> At
            ~0.05% odds, unboosted rolls are near-zero EV. Stack potions first.
          </li>
          <li>
            <span className="text-fg">Ignoring the group requirement.</span> Nothing redeems
            until you join the ClickBytes group - the #1 reported &quot;broken code&quot; cause.
          </li>
          <li>
            <span className="text-fg">Rushing Boss Rush undergeared.</span> Failed runs pay
            nothing. Farm the highest dungeon you can clear reliably, not the hardest you can unlock.
          </li>
          <li>
            <span className="text-fg">Abandoning evolution lines early.</span> Base forms like
            Azure Devil look weak until you remember they evolve at 50 - check{" "}
            <Link href="/units/">unit pages</Link> before dropping a class.
          </li>
        </ul>
      </Slab>

      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          Your First Week Roadmap
        </Rune>
        <ol className="mt-4 space-y-2 text-dim">
          <li><span className="text-fg">Day 1:</span> Group join, redeem codes, first class, farm the starter dungeon.</li>
          <li><span className="text-fg">Day 2-3:</span> Settle a main class, roll your first aspects, push one dungeon tier deeper.</li>
          <li><span className="text-fg">Day 4-5:</span> Bulk-roll with stacked Luck Potions; start an item grind (e.g. Infinity Core) if a target class needs it.</li>
          <li><span className="text-fg">Day 6-7:</span> Level an evolution line toward 50, attempt Boss Rush, re-check <Link href="/codes/">codes</Link> - milestone codes drop often.</li>
        </ol>
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          Beginner FAQ
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
        Mechanics described from the official game description and sourced creator footage -
        where numbers aren&apos;t confirmed, we say so instead of guessing. Next: pick a
        main from the <Link href="/tier-list/">class tier list</Link>, or hunt a specific
        character on the <Link href="/units/">units hub</Link>.
      </p>
    </div>
  );
}
