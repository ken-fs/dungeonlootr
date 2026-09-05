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
  const description = unit.metaDesc;
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

  const relatedUnits = unit.related
    .map((r) => getUnit(r))
    .filter((u): u is NonNullable<typeof u> => Boolean(u));

  const faq = [
    {
      q: `How do you get ${unit.name} in Dungeon Lootr?`,
      a:
        unit.obtain ||
        `We are verifying exactly how to get ${unit.name} in ${SITE.game}. Check back - we update this the moment it's confirmed.`,
    },
    ...unit.extraFaq,
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

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "Units", item: `${SITE.url}/units/` },
      {
        "@type": "ListItem",
        position: 3,
        name: `How to Get ${unit.name}`,
        item: `${SITE.url}/units/${unit.slug}/`,
      },
    ],
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <header>
        <p className="text-sm text-dim">
          <Link href="/">Home</Link> / <Link href="/units/">Units</Link> / {unit.name}
        </p>
        <Rune as="h1" color="ember" className="mt-1 text-3xl sm:text-5xl">
          How to Get {unit.name}
        </Rune>
        <p className="mt-2 text-sm text-dim">{unit.origin}</p>
        <div className="mt-3">
          <VerifiedStamp date={UNITS_LAST_CHECKED} />
        </div>

        <dl className="slab mt-4 grid grid-cols-2 gap-4 p-4 text-sm sm:grid-cols-4">
          <div>
            <dt className="display text-xs uppercase text-dim">Rarity</dt>
            <dd className={unit.rarity ? "glow-gold font-semibold" : "text-dim"}>
              {unit.rarity || "Unconfirmed"}
            </dd>
          </div>
          <div>
            <dt className="display text-xs uppercase text-dim">Method</dt>
            <dd className="text-fg">{unit.steps.length > 0 ? "Confirmed" : "Verifying"}</dd>
          </div>
          <div>
            <dt className="display text-xs uppercase text-dim">Route</dt>
            <dd className={unit.route === "Unknown" ? "text-dim" : "text-fg"}>{unit.route}</dd>
          </div>
          <div>
            <dt className="display text-xs uppercase text-dim">Anime</dt>
            <dd className={unit.anime ? "text-fg" : "text-dim"}>{unit.anime || "Original"}</dd>
          </div>
        </dl>
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
            {unit.grind && (
              <p className="mt-4 border-l-2 border-edge pl-3 text-sm text-dim">
                <span className="display text-xs uppercase glow-ember">Grind check: </span>
                {unit.grind}
              </p>
            )}
            {!unit.verified && (
              <p className="mt-4 border-l-2 border-edge pl-3 text-sm text-dim">
                <span className="display text-xs uppercase glow-gold">While you wait: </span>
                stack the odds for when the method drops - redeem the{" "}
                <Link href="/codes/">working codes</Link> for coins and Luck Potions, and
                join the ClickBytes Roblox group so nothing gates you on day one.
              </p>
            )}
          </>
        ) : (
          <p className="mt-3 text-dim">
            {SITE.game} is brand new, so we&apos;re confirming exactly how {unit.name} is
            obtained before we publish steps - no guessing. Bookmark this page; it updates
            the moment the method is verified from the game or trusted creators.
          </p>
        )}
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          Is {unit.name} Worth It?
        </Rune>
        <p className="mt-3 text-dim">{unit.standing}</p>
        <p className="mt-3 text-sm text-dim">
          See where {unit.name} lands against the rest of the roster on our{" "}
          <Link href="/tier-list/">class tier list</Link>, and pair it with the right roll
          from the <Link href="/aspect-tier-list/">aspect tier list</Link>.
        </p>
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

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          {unit.name} FAQ
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

      {relatedUnits.length > 0 && (
        <nav className="slab p-5 sm:p-6">
          <Rune color="blood" as="h2" className="text-xl">
            Related Units
          </Rune>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedUnits.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/units/${r.slug}/`}
                  className="slab block p-4 no-underline transition-transform active:translate-y-0.5"
                >
                  <span className="display glow-gold">{r.name}</span>
                  <span className="mt-1 block text-sm text-dim">{r.origin}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <p className="text-sm text-dim">
        More: <Link href="/units/">all units</Link> ·{" "}
        <Link href="/codes/">working codes</Link> (Luck Potions help Exotic rolls) ·{" "}
        <Link href="/beginner-guide/">beginner guide</Link>
      </p>
    </div>
  );
}
