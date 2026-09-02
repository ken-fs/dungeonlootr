import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Slab, Rune, VerifiedStamp } from "@/components/ui";
import { UNITS, UNITS_LAST_CHECKED, getUnit } from "@/data/units";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return UNITS.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const unit = getUnit(slug);
  if (!unit) return {};
  const title = `How to Get ${unit.name} in Dungeon Lootr`;
  const description = unit.obtain
    ? `${unit.name} in Roblox ${SITE.game}: ${unit.obtain} Full requirements and steps, verified ${UNITS_LAST_CHECKED}.`
    : `How to get ${unit.name} in Roblox ${SITE.game} - obtain method, requirements and tips.`;
  return {
    title,
    description,
    alternates: { canonical: `/units/${unit.slug}/` },
    openGraph: {
      type: "article",
      siteName: SITE.name,
      url: `/units/${unit.slug}/`,
      title,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

export default async function UnitPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const unit = getUnit(slug);
  if (!unit) notFound();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How do you get ${unit.name} in Dungeon Lootr?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            unit.obtain ||
            `We are verifying exactly how to get ${unit.name} in ${SITE.game}. Check back - we update this the moment it's confirmed.`,
        },
      },
    ],
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <header>
        <p className="text-sm text-dim">
          <Link href="/units/">Units</Link> / {unit.name}
        </p>
        <Rune as="h1" color="ember" className="mt-1 text-3xl sm:text-5xl">
          How to Get {unit.name}
        </Rune>
        <p className="mt-2 text-sm text-dim">{unit.origin}</p>
        {unit.rarity && (
          <p className="mt-1 text-sm">
            Rarity: <span className="glow-gold">{unit.rarity}</span>
          </p>
        )}
        <div className="mt-3">
          <VerifiedStamp date={UNITS_LAST_CHECKED} />
        </div>
      </header>

      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          How to Get {unit.name}
        </Rune>
        {unit.obtain ? (
          <>
            <p className="mt-3 text-fg">{unit.obtain}</p>
            {unit.steps.length > 0 && (
              <ol className="mt-4 space-y-2">
                {unit.steps.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="display glow-ember">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-dim">{s}</span>
                  </li>
                ))}
              </ol>
            )}
          </>
        ) : (
          <p className="mt-3 text-dim">
            {SITE.game} is brand new, so we&apos;re confirming exactly how {unit.name} is
            obtained before we publish steps - no guessing. Bookmark this page; it updates
            the moment the method is verified from the game or trusted
            creators.
          </p>
        )}
      </Slab>

      {unit.videoId && (
        <Slab>
          <Rune color="arcane" as="h2" className="text-xl">
            Video Guide
          </Rune>
          <div className="mt-4 aspect-video">
            <iframe
              className="h-full w-full rounded"
              src={`https://www.youtube-nocookie.com/embed/${unit.videoId}`}
              title={`How to get ${unit.name} in Dungeon Lootr`}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </Slab>
      )}

      <p className="text-sm text-dim">
        More: <Link href="/units/">all units</Link> ·{" "}
        <Link href="/tier-list/">class tier list</Link> ·{" "}
        <Link href="/codes/">codes</Link>
      </p>
    </div>
  );
}
