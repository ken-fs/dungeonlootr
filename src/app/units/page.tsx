import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { Slab, Rune, VerifiedStamp } from "@/components/ui";
import { UNITS, UNITS_LAST_CHECKED } from "@/data/units";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Dungeon Lootr Units - How to Get Every Character",
  description: `How to get every unit in Roblox ${SITE.game}: Gojo, Sukuna, Asta, Awakened Devil EX and more. Obtain methods and requirements.`,
  path: "/units/",
});

export default function UnitsIndex() {
  return (
    <div className="space-y-8">
      <header>
        <Rune as="h1" color="ember" className="text-3xl sm:text-5xl">
          Units &amp; How to Get Them
        </Rune>
        <p className="mt-3 text-dim">
          Every {SITE.game} unit worth chasing - the anime crossovers everyone wants - with
          how you actually unlock each one. Pick a unit for the full guide.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={UNITS_LAST_CHECKED} />
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {UNITS.map((u) => (
          <Link key={u.slug} href={`/units/${u.slug}/`} className="no-underline">
            <Slab className="h-full transition-colors hover:border-arcane">
              <h2 className="display text-xl glow-gold">{u.name}</h2>
              <p className="mt-2 text-sm text-dim">
                {u.obtain || "How to get - verifying, check back soon."}
              </p>
            </Slab>
          </Link>
        ))}
      </div>
    </div>
  );
}
