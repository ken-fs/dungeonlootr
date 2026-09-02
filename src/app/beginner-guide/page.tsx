import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { Slab, Rune } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Dungeon Lootr Beginner Guide - How to Start",
  description: `New to Roblox ${SITE.game}? How dungeons, classes, aspects and units work, plus what to do first to progress fast.`,
  path: "/beginner-guide/",
});

export default function BeginnerGuide() {
  return (
    <div className="space-y-8">
      <header>
        <Rune as="h1" color="ember" className="text-3xl sm:text-5xl">
          Beginner Guide
        </Rune>
        <p className="mt-3 text-dim">
          A no-fluff start for Roblox {SITE.game}: what to do in your first sessions and how
          the core systems fit together.
        </p>
      </header>

      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          First Steps
        </Rune>
        <ol className="mt-4 space-y-3 text-dim">
          <li>
            <span className="text-fg">Redeem codes first.</span> Free rewards give you a head
            start - grab whatever&apos;s live on the <Link href="/codes/">codes page</Link>.
          </li>
          <li>
            <span className="text-fg">Pick a starter class.</span> Your class shapes your whole
            run. Check the <Link href="/tier-list/">class tier list</Link> before you commit.
          </li>
          <li>
            <span className="text-fg">Run early dungeons for drops.</span> Clear the first
            dungeons to build up currency and materials for aspects and units.
          </li>
          <li>
            <span className="text-fg">Chase the units you want.</span> Anime units like{" "}
            <Link href="/units/gojo/">Gojo</Link> and{" "}
            <Link href="/units/sukuna/">Sukuna</Link> are the endgame goals - see{" "}
            <Link href="/units/">how to get each one</Link>.
          </li>
        </ol>
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          Classes, Aspects &amp; Units
        </Rune>
        <p className="mt-3 text-dim">
          Three systems drive your power: your <Link href="/tier-list/">class</Link> (your base
          kit), your <Link href="/aspect-tier-list/">aspects</Link> (modifiers you roll and
          build around), and your <Link href="/units/">units</Link> (the characters you unlock).
          We rank the best of each and keep them current as the game patches.
        </p>
        <p className="mt-3 text-xs text-dim">
          Exact numbers and mechanics are being verified against the live game - we&apos;ll fill
          in specifics as they&apos;re confirmed rather than guess.
        </p>
      </Slab>
    </div>
  );
}
