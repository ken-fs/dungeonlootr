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
  description: `The best aspects in Roblox ${SITE.game}, ranked S-D. Which aspects are worth rolling for, updated ${TIERS_LAST_CHECKED}.`,
  path: "/aspect-tier-list/",
});

export default function AspectTierList() {
  return (
    <div className="space-y-8">
      <header>
        <Rune as="h1" color="ember" className="text-3xl sm:text-5xl">
          Aspect Tier List
        </Rune>
        <p className="mt-3 text-dim">
          Every {SITE.game} aspect ranked S-D by impact - so you know which ones are worth
          rolling and building around before you commit resources.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={TIERS_LAST_CHECKED} />
        </div>
      </header>

      <TierBoard items={ASPECTS} noun="aspect" />

      <p className="text-sm text-dim">
        See also the <Link href="/tier-list/">class tier list</Link> and{" "}
        <Link href="/units/">unit guides</Link>.
      </p>
    </div>
  );
}
