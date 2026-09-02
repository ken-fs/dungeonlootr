import Link from "next/link";
import { Slab, Rune, VerifiedStamp } from "@/components/ui";
import { CopyButton } from "@/components/CopyButton";
import { CODES, CODES_LAST_CHECKED, REDEEM_STEPS } from "@/data/codes";
import { SITE } from "@/lib/site";
import { buildMeta } from "@/lib/meta";

const active = CODES.filter((c) => c.status === "active");
const unconfirmed = CODES.filter((c) => c.status === "unconfirmed");
const expired = CODES.filter((c) => c.status === "expired");

// Build-time month+year - kept fresh by the scheduled rebuild. Matches how
// players search ("dungeon lootr codes 2026" / "...codes september 2026").
const MONTH_YEAR = new Date().toLocaleString("en-US", {
  month: "long",
  year: "numeric",
});

export const metadata = buildMeta({
  title: `Dungeon Lootr Codes (${MONTH_YEAR}) - Free Rewards`,
  description: `All working ${SITE.game} codes for ${MONTH_YEAR}, verified ${CODES_LAST_CHECKED}. Redeem them for free rewards and skip the early grind.`,
  path: "/codes/",
});

const faq = [
  {
    q: "What are the working Dungeon Lootr codes?",
    a:
      active.length > 0
        ? `As of ${CODES_LAST_CHECKED}, the working codes are: ${active
            .map((c) => `${c.code} (${c.reward})`)
            .join(", ")}.`
        : `We are still verifying the first batch of ${SITE.game} codes. The moment a code is confirmed from the official Discord, it appears here - bookmark this page.`,
  },
  {
    q: "How do I redeem codes in Dungeon Lootr?",
    a: REDEEM_STEPS.join(" "),
  },
  {
    q: "Why isn't my code working?",
    a: "Codes are case-sensitive and expire fast. Type them exactly as shown, and check back here - we re-verify the list regularly.",
  },
];

export default function CodesPage() {
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
    itemListElement: active.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.code,
      description: c.reward,
    })),
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />

      <header>
        <Rune as="h1" color="gold" className="text-3xl sm:text-5xl">
          Dungeon Lootr Codes
        </Rune>
        <p className="mt-3 text-dim">
          Every working {SITE.game} code for {MONTH_YEAR}, cross-checked and dated. Redeem
          them fast - Roblox codes expire quickly.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={CODES_LAST_CHECKED} />
        </div>
      </header>

      {active.length > 0 ? (
        <Slab>
          <Rune color="gold" as="h2" className="text-xl">
            <span className="pulse">●</span> Working Codes ({active.length})
          </Rune>
          <ul className="mt-4 divide-y divide-edge">
            {active.map((c) => (
              <li key={c.code} className="flex items-center justify-between gap-3 py-3">
                <div className="min-w-0">
                  <code className="glow-gold text-lg font-bold break-all">{c.code}</code>
                  <span className="block text-sm text-dim sm:ml-3 sm:inline">{c.reward}</span>
                </div>
                <CopyButton value={c.code} />
              </li>
            ))}
          </ul>
        </Slab>
      ) : (
        <Slab>
          <Rune color="ember" as="h2" className="text-xl">
            Codes Verifying
          </Rune>
          <p className="mt-3 text-dim">
            {SITE.game} is brand new and blowing up. We won&apos;t list a code until we
            confirm it works, so this board is intentionally empty until the first drop is
            verified from the game&apos;s official Discord. Bookmark this page - new codes
            usually land around update and milestone drops.
          </p>
        </Slab>
      )}

      {unconfirmed.length > 0 && (
        <Slab>
          <Rune color="ember" as="h2" className="text-xl">
            Might Still Work
          </Rune>
          <ul className="mt-4 space-y-3">
            {unconfirmed.map((c) => (
              <li key={c.code} className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <code className="glow-ember text-lg font-bold break-all">{c.code}</code>
                  <span className="block text-sm text-dim sm:ml-3 sm:inline">{c.reward}</span>
                  {c.note && <p className="mt-1 text-xs text-dim">{c.note}</p>}
                </div>
                <CopyButton value={c.code} />
              </li>
            ))}
          </ul>
        </Slab>
      )}

      {expired.length > 0 && (
        <Slab>
          <Rune color="blood" as="h2" className="text-xl">
            Expired
          </Rune>
          <ul className="mt-4 space-y-1 text-dim line-through">
            {expired.map((c) => (
              <li key={c.code}>{c.code}</li>
            ))}
          </ul>
        </Slab>
      )}

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          How to Redeem
        </Rune>
        <ol className="mt-4 space-y-2">
          {REDEEM_STEPS.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="display glow-ember">{String(i + 1).padStart(2, "0")}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-xs text-dim">
          Redeem flow will be re-checked against the live game and corrected if it differs.
        </p>
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          FAQ
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

      <p className="text-sm text-dim">
        Next: the <Link href="/tier-list/">class tier list</Link> or{" "}
        <Link href="/units/">how to get every unit</Link>.
      </p>
    </div>
  );
}
