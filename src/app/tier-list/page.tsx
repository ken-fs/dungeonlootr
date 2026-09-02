import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { Rune, VerifiedStamp } from "@/components/ui";
import { TierBoard } from "@/components/TierBoard";
import { CLASSES, TIERS_LAST_CHECKED } from "@/data/tiers";
import { SITE } from "@/lib/site";

const MONTH_YEAR = new Date().toLocaleString("en-US", { month: "long", year: "numeric" });

export const metadata = buildMeta({
  title: `Dungeon Lootr Class Tier List (${MONTH_YEAR})`,
  absoluteTitle: true,
  description: `The best classes in Roblox ${SITE.game}, ranked S-D from top-creator consensus and patch data. Updated ${TIERS_LAST_CHECKED}.`,
  path: "/tier-list/",
});

export default function ClassTierList() {
  return (
    <div className="space-y-8">
      <header>
        <Rune as="h1" color="ember" className="text-3xl sm:text-5xl">
          Class Tier List
        </Rune>
        <p className="mt-3 text-dim">
          Which {SITE.game} classes are actually worth maining, ranked by real
          performance and top-creator consensus - not guesswork. We re-grade every patch.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={TIERS_LAST_CHECKED} />
        </div>
      </header>

      <TierBoard items={CLASSES} noun="class" />

      <p className="text-sm text-dim">
        See also the <Link href="/aspect-tier-list/">aspect tier list</Link> and{" "}
        <Link href="/units/">how to get every unit</Link>.
      </p>
    </div>
  );
}
