import Link from "next/link";
import { Slab, Rune, VerifiedStamp } from "@/components/ui";
import { CopyButton } from "@/components/CopyButton";
import { CODES, CODES_LAST_CHECKED, REDEEM_STEPS, CODE_SOURCES } from "@/data/codes";
import { i18nLanguages } from "@/data/i18n";
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
  // "Anime Lootr" 别名写入描述：GSC 实证 "anime lootr code" 月均 ~75 展示，
  // 但首页/pt-br 在接这个词，codes 页零命中（2026-09-28）
  description: `All working Dungeon Lootr (Anime Lootr) codes for ${MONTH_YEAR}, verified ${CODES_LAST_CHECKED}. How to redeem, where new codes drop, and fixes for codes that fail.`,
  path: "/codes/",
  absoluteTitle: true, // 51 chars as-is; the "- Hub" template would push it to 71 and truncate the hook
  languages: i18nLanguages("/codes/"),
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
  {
    q: "Why does my code say invalid or do nothing?",
    a: "Four usual causes, in order: you have not joined the ClickBytes Roblox group (nothing redeems until you do); a capital letter is off - codes are case-sensitive, copy-paste from this page instead of typing; the code just expired and moved to our expired list; or you already redeemed it on this account, since each code works once per player.",
  },
  {
    q: "When do new Dungeon Lootr codes come out?",
    a: "On update day. Every big update since September has shipped its own batch: five codes with Update 3 (Oct 2026) and three with the GUILDS update (VASTO, HOLLOWREALM, UPDATE3.5). Early on, milestone codes like 8KLIKE and 45KLIKE dropped at like and visit goals. That has stopped: the game passed 100K favorites and 30M visits with no milestone code. So watch the official Discord when an update lands.",
  },
  {
    q: "What rewards do Dungeon Lootr codes give?",
    a: "The current codes mostly give Lucky Spins (for class spins), Aspect Gems, Exotic Ingots, Perfect Reforge Stones, Spirit Prisms, Affix Seals and Mystery Boxes. OKAMI also gives 200 Expedition Points for the Expedition Shop. Older codes gave Coins, Luck Potions and GM Blessings.",
  },
  {
    q: "Where is the Codes button in Dungeon Lootr?",
    a: "Most guides put it on the left side of the screen. UrGameTips' Oct 16 guide describes a newer path: open Menu on the left, pick More, then Codes, paste the code and press Claim. If you can't see a Codes button, try that path.",
  },
  {
    q: "Do Dungeon Lootr codes expire?",
    a: `Yes, and faster than most Roblox games. Milestone codes tend to die once the next milestone arrives, and update codes often last only a patch cycle. Our expired list below exists so you never waste time on a dead code - if it is listed there, it will not come back.`,
  },
  {
    q: "How often is this codes list updated?",
    a: `We re-check the list daily. A code only gets the working stamp once two independent sources list it, and we check the game's Roblox update time to catch new batches. The stamp at the top of this page shows the last check - currently ${CODES_LAST_CHECKED}. Codes that only one site lists stay off the working list.`,
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
        {active.length > 0 && (
          <p className="mt-3 text-fg">
            There are {active.length} working {SITE.game} codes right now (checked{" "}
            {CODES_LAST_CHECKED}): {active.map((c) => c.code).join(", ")}. Codes are
            case-sensitive, so copy them exactly. You must join the ClickBytes Roblox group first.
          </p>
        )}
        <p className="mt-3 text-dim">
          Every working {SITE.game} code for {MONTH_YEAR}, cross-checked and dated. Redeem
          them fast - Roblox codes expire quickly. Dungeon Lootr is also widely searched as
          &quot;Anime Lootr&quot; - same game, same codes, whether you call it Dungeon Lootr or
          Anime Lootr.
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
                  {c.link && (
                    <Link
                      href={c.link.href}
                      className="mt-1 block text-xs text-arcane hover:underline"
                    >
                      &rarr; {c.link.label}
                    </Link>
                  )}
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

      {active.length > 0 && (
        <nav className="slab p-5 sm:p-6">
          <Rune color="arcane" as="h2" className="text-xl">
            Redeemed? Spend It Right
          </Rune>
          <ul className="mt-3 space-y-2 text-sm text-dim">
            <li>
              <span className="display glow-gold">Lucky Spins →</span> save them for bulk class
              spins - the <Link href="/tier-list/">S-tier picks on the class tier list</Link>{" "}
              are what you want to land.
            </li>
            <li>
              <span className="display glow-gold">Expedition Points →</span> the 200 from OKAMI
              go toward a free class item in the Expedition Shop. Our{" "}
              <Link href="/shop/">Dungeon Lootr shop guide</Link> lists every shop, gamepass and
              Robux pack.
            </li>
            <li>
              <span className="display glow-gold">Aspect Gems →</span> roll a passive for your
              main - see the <Link href="/aspect-tier-list/">aspect effects ranked</Link> first.
            </li>
            <li>
              <span className="display glow-gold">Coins & Stones →</span> gear up, then start the{" "}
              <Link href="/units/">Boss Rush class unlocks</Link> (Sukuna, Gojo, Asta all farmable).
            </li>
          </ul>
        </nav>
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
            Expired Codes ({expired.length})
          </Rune>
          <p className="mt-3 text-sm text-dim">
            Kept visible on purpose: these codes are confirmed dead, so you can skip
            them instead of typing each one to find out. If a code you see on another
            site is listed here, it will not work for you either.
          </p>
          <ul className="mt-4 space-y-1 text-dim line-through">
            {expired.map((c) => (
              <li key={c.code}>{c.code}</li>
            ))}
          </ul>
        </Slab>
      )}

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          How to Redeem Codes in Dungeon Lootr
        </Rune>
        <figure className="mt-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/redeem-steps.svg"
            alt="How to redeem Dungeon Lootr codes: join the group, tap the left Codes button, enter the code, hit Submit"
            width="1200"
            height="630"
            className="w-full border-2 border-edge"
            loading="lazy"
          />
          <figcaption className="mt-2 text-xs text-dim">
            The full redemption flow, step by step. The Codes button sits on the
            left side of the game screen.
          </figcaption>
        </figure>
        <ol className="mt-4 space-y-2">
          {REDEEM_STEPS.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="display glow-ember">{String(i + 1).padStart(2, "0")}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-sm text-dim">
          Stuck on a step? The single most common failure is skipping step one -{" "}
          <a
            href="https://www.roblox.com/communities/110427303/ClickBytes"
            rel="nofollow noopener"
            target="_blank"
          >
            joining the ClickBytes group
          </a>{" "}
          is mandatory, and the game rejects every code until you are in. Rewards land
          in your inventory the moment Submit succeeds; if nothing appears, rejoin the
          server once before assuming the code is dead.
        </p>
      </Slab>

      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          Where New Codes Drop
        </Rune>
        <p className="mt-3 text-dim">
          {SITE.game} codes are not random - the list above shows the pattern. These days
          they ship in batches with each big update (UPDATE3, then UPDATE3.5). The old
          milestone codes (8KLIKE, 10KFAV, 45KLIKE) seem to be done. These are the channels
          that get new codes first, ranked by speed:
        </p>
        <ul className="mt-4 space-y-4">
          {CODE_SOURCES.map((s, i) => (
            <li key={s.name} className="flex gap-3">
              <span className="display glow-gold">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <a href={s.href} rel="nofollow noopener" target="_blank" className="font-semibold">
                  {s.name}
                </a>
                <p className="mt-1 text-sm text-dim">{s.what}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-dim">
          We monitor these sources daily and cross-check every code in two places
          before it earns the working stamp above - which is why this page sometimes
          lists a code hours after Discord, but never lists a fake one.
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

      <nav className="text-sm text-dim">
        <p>
          Spent your codes wisely: check the{" "}
          <Link href="/tier-list/">best classes in the current meta</Link>, see{" "}
          <Link href="/aspect-tier-list/">which aspects are worth rolling</Link>, or learn{" "}
          <Link href="/units/">how to get every unit</Link> including{" "}
          <Link href="/units/gojo/">Gojo</Link> and <Link href="/units/sukuna/">Sukuna</Link>.
          New player? Start with the <Link href="/beginner-guide/">beginner guide</Link>,
          and watch <Link href="/updates/">patch notes</Link> - update day is code day.
        </p>
      </nav>
    </div>
  );
}
