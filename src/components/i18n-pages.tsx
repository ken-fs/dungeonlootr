import Link from "next/link";
import { Slab, Rune, VerifiedStamp } from "@/components/ui";
import { CopyButton } from "@/components/CopyButton";
import { TierBoard } from "@/components/TierBoard";
import { CODES, CODES_LAST_CHECKED, CODE_SOURCES } from "@/data/codes";
import { UNITS } from "@/data/units";
import { CLASSES, TIERS_LAST_CHECKED } from "@/data/tiers";
import { SITE } from "@/lib/site";
import type { LocaleDict, Seg } from "@/data/i18n";

/** Render a translated rich-text segment array (plain text + inline links). */
function Segments({ segs }: { segs: Seg[] }) {
  return (
    <>
      {segs.map((s, i) =>
        s.href ? (
          s.href.startsWith("http") ? (
            <a key={i} href={s.href} rel="nofollow noopener" target="_blank">
              {s.label}
            </a>
          ) : (
            <Link key={i} href={s.href}>
              {s.label}
            </Link>
          )
        ) : (
          <span key={i}>{s.t}</span>
        ),
      )}
    </>
  );
}

// Live snapshot from the Roblox games API (2026-09-08). Refresh on rebuild.
const STATS_VALUES = ["14.4M", "12K+", "96%"];

export function LocalizedHome({ t }: { t: LocaleDict }) {
  const activeCodes = CODES.filter((c) => c.status === "active");
  const h = t.home;
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: h.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="space-y-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <section className="grid items-center gap-8 pt-4 md:grid-cols-[1.05fr_1fr]">
        <div className="order-2 min-w-0 md:order-1">
          <h1 className="display text-4xl leading-tight sm:text-6xl">
            <span className="glow-ember">Dungeon Lootr</span>
            <span className="mt-2 block text-2xl text-fg sm:text-3xl">{h.heroSub}</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-dim">{h.heroP}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`${t.base}/codes/`} className="slab tactile px-5 py-2.5 font-medium glow-gold no-underline hover:border-gold">
              {h.ctaCodes}
            </Link>
            <Link href="/units/" className="slab tactile px-5 py-2.5 font-medium glow-arcane no-underline hover:border-arcane">
              {h.ctaUnits}
            </Link>
          </div>
        </div>
        <div className="art-frame order-1 min-w-0 md:order-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero.png"
            alt="Dungeon Lootr Roblox key art with anime crossover characters"
            width={768}
            height={432}
            className="h-auto w-full"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="border-y-2 border-edge py-6">
        <dl className="flex flex-wrap items-baseline justify-around gap-6">
          {STATS_VALUES.map((v, i) => (
            <div key={i} className="text-center">
              <dd className="display text-3xl glow-gold sm:text-4xl">{v}</dd>
              <dt className="mt-1 text-xs uppercase tracking-wide text-dim">{h.statsLabels[i]}</dt>
            </div>
          ))}
          <div className="text-center">
            <dd className="display text-3xl text-fg sm:text-4xl">RPG</dd>
            <dt className="mt-1 text-xs uppercase tracking-wide text-dim">Hack &amp; Slash</dt>
          </div>
        </dl>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Slab className="md:col-span-2">
          <div className="flex items-center justify-between gap-3">
            <Rune color="gold" as="h2" className="text-xl">
              <span className="pulse">●</span> {h.workingCodes}
            </Rune>
            <Link href={`${t.base}/codes/`} className="text-sm">
              {h.allCodes}
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-edge">
            {activeCodes.slice(0, 6).map((c) => (
              <li key={c.code} className="flex items-center justify-between gap-3 py-3">
                <div className="min-w-0">
                  <code className="glow-gold text-lg font-bold break-all">{c.code}</code>
                  <span className="block text-sm text-dim sm:ml-3 sm:inline">{c.reward}</span>
                </div>
                <CopyButton value={c.code} label={t.copy} copiedLabel={t.copied} />
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <VerifiedStamp date={CODES_LAST_CHECKED} label={t.stampLabel} />
          </div>
        </Slab>
        <Slab>
          <Rune color="arcane" as="h2" className="text-xl">
            {h.mostWanted}
          </Rune>
          <ul className="mt-4 space-y-2">
            {UNITS.slice(0, 5).map((u) => (
              <li key={u.slug}>
                <Link href={`/units/${u.slug}/`}>
                  {h.howToGetPrefix}
                  {u.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/units/" className="mt-4 inline-block text-sm">
            {h.allUnits}
          </Link>
        </Slab>
      </section>

      <section>
        <Rune color="arcane" as="h2">
          {h.exploreTitle}
        </Rune>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {h.hubs.map((hub) => (
            <Link
              key={hub.href}
              href={hub.href === "/tier-list/" ? `${t.base}/tier-list/` : hub.href}
              className="no-underline"
            >
              <Slab className="tactile h-full hover:border-arcane">
                <h3 className="display text-lg glow-gold">{hub.title}</h3>
                <p className="mt-2 text-sm text-dim">{hub.blurb}</p>
              </Slab>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Slab>
          <Rune color="ember" as="h2" className="text-xl">
            {h.whatIsTitle}
          </Rune>
          <p className="mt-3 text-dim">{h.whatIsP}</p>
        </Slab>
        <Slab>
          <Rune color="gold" as="h2" className="text-xl">
            {h.whyTrustTitle}
          </Rune>
          <p className="mt-3 text-dim">
            <Segments segs={h.whyTrustP} />
          </p>
        </Slab>
      </section>

      <section>
        <Rune color="arcane" as="h2" className="text-xl">
          {h.faqTitle}
        </Rune>
        <dl className="mt-4 space-y-4">
          {h.faq.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-fg">{f.q}</dt>
              <dd className="mt-1 text-dim">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="text-sm text-dim">
        {h.jumpTo}{" "}
        {h.jumpLinks.map((n, i) => (
          <span key={n.href}>
            <Link href={n.href}>{n.label}</Link>
            {i < h.jumpLinks.length - 1 ? " · " : ""}
          </span>
        ))}
      </p>
    </div>
  );
}

export function LocalizedCodes({ t }: { t: LocaleDict }) {
  const active = CODES.filter((c) => c.status === "active");
  const expired = CODES.filter((c) => c.status === "expired");
  const c = t.codes;

  const faq = [
    {
      q: t.base === "/pt-br" ? "Quais são os códigos ativos de Dungeon Lootr?" : "¿Cuáles son los códigos activos de Dungeon Lootr?",
      a: c.workingA(active.map((x) => `${x.code} (${x.reward})`).join(", "), CODES_LAST_CHECKED),
    },
    {
      q: t.base === "/pt-br" ? "Como resgato códigos em Dungeon Lootr?" : "¿Cómo canjeo códigos en Dungeon Lootr?",
      a: c.redeemSteps.join(" "),
    },
    ...c.faqStatic,
    {
      q: t.base === "/pt-br" ? "Com que frequência esta lista de códigos é atualizada?" : "¿Con qué frecuencia se actualiza esta lista de códigos?",
      a: c.dailyA(CODES_LAST_CHECKED),
    },
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

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Working ${SITE.game} Codes`,
    numberOfItems: active.length,
    itemListElement: active.map((x, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: x.code,
      description: x.reward,
    })),
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />

      <header>
        <Rune as="h1" color="gold" className="text-3xl sm:text-5xl">
          {c.h1}
        </Rune>
        <p className="mt-3 text-dim">{c.intro}</p>
        <div className="mt-3">
          <VerifiedStamp date={CODES_LAST_CHECKED} label={t.stampLabel} />
        </div>
      </header>

      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          <span className="pulse">●</span> {c.workingTitle} ({active.length})
        </Rune>
        <ul className="mt-4 divide-y divide-edge">
          {active.map((x) => (
            <li key={x.code} className="flex items-center justify-between gap-3 py-3">
              <div className="min-w-0">
                <code className="glow-gold text-lg font-bold break-all">{x.code}</code>
                <span className="block text-sm text-dim sm:ml-3 sm:inline">{x.reward}</span>
              </div>
              <CopyButton value={x.code} label={t.copy} copiedLabel={t.copied} />
            </li>
          ))}
        </ul>
      </Slab>

      <nav className="slab p-5 sm:p-6">
        <Rune color="arcane" as="h2" className="text-xl">
          {c.spendTitle}
        </Rune>
        <ul className="mt-3 space-y-2 text-sm text-dim">
          {c.spendItems.map((item) => (
            <li key={item.lead}>
              <span className="display glow-gold">{item.lead}</span>
              <Segments segs={item.rest} />
            </li>
          ))}
        </ul>
      </nav>

      <Slab>
        <Rune color="blood" as="h2" className="text-xl">
          {c.expiredTitle} ({expired.length})
        </Rune>
        <p className="mt-3 text-sm text-dim">{c.expiredP}</p>
        <ul className="mt-4 space-y-1 text-dim line-through">
          {expired.map((x) => (
            <li key={x.code}>{x.code}</li>
          ))}
        </ul>
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          {c.redeemTitle}
        </Rune>
        <figure className="mt-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/redeem-steps.svg"
            alt={c.redeemImgAlt}
            width="1200"
            height="630"
            className="w-full border-2 border-edge"
            loading="lazy"
          />
          <figcaption className="mt-2 text-xs text-dim">{c.redeemCaption}</figcaption>
        </figure>
        <ol className="mt-4 space-y-2">
          {c.redeemSteps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="display glow-ember">{String(i + 1).padStart(2, "0")}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-sm text-dim">
          <Segments segs={c.redeemNote} />
        </p>
      </Slab>

      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          {c.sourcesTitle}
        </Rune>
        <p className="mt-3 text-dim">{c.sourcesP}</p>
        <ul className="mt-4 space-y-4">
          {CODE_SOURCES.map((s, i) => (
            <li key={s.name} className="flex gap-3">
              <span className="display glow-gold">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <a href={s.href} rel="nofollow noopener" target="_blank" className="font-semibold">
                  {s.name}
                </a>
                <p className="mt-1 text-sm text-dim">{c.sourceWhats[i]}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-dim">{c.sourcesFoot}</p>
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          {c.faqTitle}
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

      <nav className="text-sm text-dim">
        <p>
          <Segments segs={c.bottomNav} />
        </p>
      </nav>
    </div>
  );
}

export function LocalizedTierList({ t }: { t: LocaleDict }) {
  const tl = t.tierList;
  return (
    <div className="space-y-8">
      <header>
        <Rune as="h1" color="ember" className="text-3xl sm:text-5xl">
          {tl.h1}
        </Rune>
        <p className="mt-3 text-dim">{tl.intro}</p>
        <div className="mt-3">
          <VerifiedStamp date={TIERS_LAST_CHECKED} label={t.stampLabel} />
        </div>
      </header>

      <TierBoard items={CLASSES} noun={tl.noun} tierLabels={tl.tierLabels} />

      <p className="text-sm text-dim">
        <Segments segs={tl.footer} />
      </p>
    </div>
  );
}
