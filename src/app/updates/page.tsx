import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { Slab, Rune, VerifiedStamp } from "@/components/ui";
import { SITE } from "@/lib/site";

const MONTH_YEAR = new Date().toLocaleString("en-US", { month: "long", year: "numeric" });

export const metadata = buildMeta({
  title: `Dungeon Lootr Updates & Patch Notes (${MONTH_YEAR})`,
  description: `Latest Roblox ${SITE.game} updates, new units, and balance changes. Track patches so you can see new codes coming.`,
  path: "/updates/",
});

export default function Updates() {
  return (
    <div className="space-y-8">
      <header>
        <Rune as="h1" color="ember" className="text-3xl sm:text-5xl">
          Updates &amp; Patch Notes
        </Rune>
        <p className="mt-3 text-dim">
          {SITE.game} is updating fast. We track new units, balance changes and events here -
          patches are usually when fresh <Link href="/codes/">codes</Link> drop too.
        </p>
        <div className="mt-3">
          <VerifiedStamp date="2026-09-02" />
        </div>
      </header>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          Tracking the game
        </Rune>
        <p className="mt-3 text-dim">
          The game launched recently and is in active development. As each update lands we log
          what changed - new units, new aspects, class reworks - and re-grade the{" "}
          <Link href="/tier-list/">class</Link> and{" "}
          <Link href="/aspect-tier-list/">aspect</Link> tier lists to match.
        </p>
        <p className="mt-3 text-xs text-dim">
          Patch history is populated from confirmed sources only - we don&apos;t log rumored
          changes.
        </p>
      </Slab>
    </div>
  );
}
