import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { Slab, Rune } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "About",
  description: `About ${SITE.name} - an independent, player-verified resource for the Roblox game ${SITE.game}, and the verification method behind every page.`,
  path: "/about/",
});

export default function About() {
  return (
    <div className="space-y-8">
      <header>
        <Rune as="h1" color="ember" className="text-3xl sm:text-5xl">
          About {SITE.name}
        </Rune>
      </header>

      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          Why this site exists
        </Rune>
        <p className="mt-3 text-dim">
          {SITE.name} is an independent fan resource for the Roblox game {SITE.game},
          run by {SITE.editor} ({SITE.editorRole.toLowerCase()}). It started with a simple
          frustration: code pages that list dead codes for months, and &quot;how to
          unlock&quot; guides copied from other guides that were wrong from day one.
        </p>
        <p className="mt-3 text-dim">
          So the rule here is different. Every code, class tier, and unlock route on this
          site is cross-checked against at least two independent sources - or the game&apos;s
          own API - before it goes live. When sources disagree, we show you the disagreement
          instead of picking one quietly. And when we genuinely don&apos;t know yet, the page
          says &quot;verifying&quot; rather than guessing. That costs us a few hours against
          sites that copy each other, and it&apos;s exactly why you can trust what you read
          here.
        </p>
        <p className="mt-3 text-dim">
          We are not affiliated with Roblox Corporation or the {SITE.game} developer. All
          game names and assets belong to their owners.
        </p>
      </Slab>

      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          How we verify
        </Rune>
        <ul className="mt-4 space-y-2 text-dim">
          <li>
            • <span className="text-fg">Codes</span> are cross-checked daily against multiple
            aggregators and in-game testers, and stamped with the exact date we last
            confirmed them. Codes that die get moved to the expired list - visible, so you
            never waste time typing a dead one.
          </li>
          <li>
            • <span className="text-fg">Tier lists</span> are built as a two-source consensus
            of major creator rankings. Where they split, the class sits at the lower tier and
            the split is shown on the card - you see the real spread, not a blended fudge.
            Everything is re-graded each patch.
          </li>
          <li>
            • <span className="text-fg">Unlock routes</span> (Boss Rush drops, Forge crafts,
            questlines) come from published creator guides cross-checked against each other,
            with unverified figures explicitly labeled as such.
          </li>
          <li>
            • <span className="text-fg">Live stats</span> (visits, players, favorites) come
            straight from the official Roblox Games API, never estimated.
          </li>
        </ul>
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          Staying current
        </Rune>
        <p className="mt-3 text-dim">
          {SITE.game} patches fast - codes rotate in batches and balance shifts weekly. We
          re-check the codes list and game data every day, and every content page carries a
          dated &quot;last checked&quot; stamp so you can judge freshness at a glance. Big
          updates are logged on the <Link href="/updates/">updates page</Link> with the
          evidence behind each entry.
        </p>
        <p className="mt-3 text-dim">
          Spot something out of date, or a drop we haven&apos;t covered?{" "}
          <Link href="/contact/">Send it over</Link> - verified tips usually go live the
          same day.
        </p>
      </Slab>
    </div>
  );
}
