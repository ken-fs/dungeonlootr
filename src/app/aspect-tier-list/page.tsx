import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { Rune, VerifiedStamp } from "@/components/ui";
import { TierBoard } from "@/components/TierBoard";
import { ASPECTS, TIERS_LAST_CHECKED } from "@/data/tiers";
import { SITE } from "@/lib/site";

const MONTH_YEAR = new Date().toLocaleString("en-US", { month: "long", year: "numeric" });

export const metadata = buildMeta({
  title: `Dungeon Lootr Aspect Tier List (${MONTH_YEAR})`,
  absoluteTitle: true,
  description: `The best aspects in Roblox ${SITE.game}, ranked S-D with confirmed effects, sourced class pairings, and how to get Aspect Gems. Updated ${TIERS_LAST_CHECKED}.`,
  path: "/aspect-tier-list/",
});

/** Q&A drives both the visible list and the FAQPage schema - one source. */
const faq = [
  {
    q: "How many aspects are in Dungeon Lootr?",
    a: "10 aspects sit in the confirmed Aspect Gem pool. Seven have public effects (Alacrity, Umbral, Fulmin, Blaze, Verdant, Ruin, Sanguine); Tempest, Phantom, and Glaciel are confirmed pool members whose exact effects are still being verified.",
  },
  {
    q: "How do you get aspects in Dungeon Lootr?",
    a: "Aspects are rolled from the Aspect Gem pool using Aspect Gems. Gems drop free from milestone codes - LOVETHISGAME currently pays 10 - so redeem codes before spending anything on rolls.",
  },
  {
    q: "What is the best aspect for Sinister Trigger?",
    a: "Destructoid pairs its best-spin-class pick with Alacrity (+60% attack speed, 20% proc chance) or Ruin (pierces through and raises damage on a sundered target by up to 75%).",
  },
  {
    q: "What is the best aspect for Embertide?",
    a: "allthings.how recommends Tempest (stacks skill damage per cast, up to 40%) or Ruin (up to 75% increased damage on a sundered single target).",
  },
];

export default function AspectTierList() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <header>
        <Rune as="h1" color="ember" className="text-3xl sm:text-5xl">
          Aspect Tier List
        </Rune>
        <p className="mt-3 text-dim">
          Every {SITE.game} aspect ranked S-D by impact, with confirmed effects, sourced
          class pairings, and how to get Aspect Gems without spending.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={TIERS_LAST_CHECKED} />
        </div>
      </header>

      <TierBoard items={ASPECTS} noun="aspect" />

      {/* How aspects work — captures "how to get / how do aspects work" long-tail */}
      <section className="space-y-3">
        <Rune as="h2" color="arcane" className="text-xl sm:text-2xl">
          How Aspects Work
        </Rune>
        <p className="text-dim">
          Aspects are combat modifiers rolled from the Aspect Gem pool - effects range
          from an orb that crits (Umbral) to stacking poison (Verdant) and chance-based
          lifesteal (Sanguine). Alacrity is the one fully quantified proc so far: +60%
          attack speed at a 20% trigger chance. Three aspects (Tempest, Phantom,
          Glaciel) are confirmed in the pool but their exact effects are still being
          verified - check back as sources publish.
        </p>
        <p className="text-dim">
          Aspect Gems are the roll currency, and the cheapest source is codes:{" "}
          <strong>LOVETHISGAME pays 10 Aspect Gems</strong> and the NEWASPECT launch
          code expired with its event. Redeem the current list on the{" "}
          <Link href="/codes/">codes page</Link> before rolling.
        </p>
      </section>

      {/* Sourced pairings — captures "best aspect for X" long-tail (forge archon etc. pending sources) */}
      <section className="space-y-3">
        <Rune as="h2" color="arcane" className="text-xl sm:text-2xl">
          Best Aspect by Class
        </Rune>
        <p className="text-dim">
          Only pairings a source has actually stated - more rows get added as outlets
          verify them.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-dim">
          <li>
            <Link href="/units/sinister-trigger/">Sinister Trigger</Link> →{" "}
            <strong>Alacrity or Ruin</strong>. Destructoid&rsquo;s pairing for the best
            spin class in the game: Alacrity for the attack-speed proc, Ruin to pierce
            and shred a single target.
          </li>
          <li>
            <Link href="/units/embertide/">Embertide</Link> → <strong>Tempest or Ruin</strong>.
            allthings.how&rsquo;s recommendation - Tempest stacks skill damage per cast
            (up to 40%), Ruin sunders one target for up to 75% increased damage.
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="space-y-3">
        <Rune as="h2" color="arcane" className="text-xl sm:text-2xl">
          FAQ
        </Rune>
        <dl className="space-y-4">
          {faq.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-fg">{f.q}</dt>
              <dd className="mt-1 text-dim">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="text-sm text-dim">
        See also the <Link href="/tier-list/">class tier list</Link> and{" "}
        <Link href="/units/">unit guides</Link>.
      </p>
    </div>
  );
}
