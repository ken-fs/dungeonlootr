import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { Slab, Rune } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "About",
  description: `About ${SITE.name} - an independent, player-verified resource for the Roblox game ${SITE.game}.`,
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
        <p className="text-dim">
          {SITE.name} is an independent fan resource for the Roblox game {SITE.game}. We
          publish working codes, class and aspect tier lists, and how-to-get guides for every
          unit - and keep them current as the game updates.
        </p>
        <p className="mt-3 text-dim">
          We are not affiliated with Roblox Corporation or the {SITE.game} developer. All game
          names and assets belong to their owners.
        </p>
      </Slab>

      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          How we verify
        </Rune>
        <ul className="mt-4 space-y-2 text-dim">
          <li>• Codes are cross-checked before listing and stamped with the date we confirmed them.</li>
          <li>• Tier lists come from real performance and top-creator consensus, re-graded each patch.</li>
          <li>• When we can&apos;t confirm something, we say so - we never invent codes, stats or drop methods.</li>
        </ul>
        <p className="mt-4 text-dim">
          Spot something out of date? <Link href="/contact/">Let us know</Link>.
        </p>
      </Slab>
    </div>
  );
}
