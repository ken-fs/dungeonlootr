import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { Slab, Rune, VerifiedStamp } from "@/components/ui";
import { SITE } from "@/lib/site";

/**
 * /shop/ - one page for the "dungeon lootr shop" query (GSC 2026-10-17: 20
 * impressions at position 52, no page on the site answered it).
 *
 * Sources:
 *  - Gamepasses: Roblox API, pulled 2026-10-17
 *    apis.roblox.com/game-passes/v1/universes/9656201728/game-passes
 *    (names, Robux prices and descriptions as listed; creator = ClickBytes
 *    group 110427303). Premium Plus line from the game's own Roblox
 *    description (games.roblox.com, same day).
 *  - Robux class packs: the sourced unit entries in src/data/units.ts
 *    (Coyote / El Hueco frame-reads, Founder via dungeonlootrwiki.com,
 *    Hellfiend via robloxden, Shadow Vagrant, Mastermind, Crescent Blade,
 *    Dragon Slayer). Prices only where a source gave one.
 *  - Currency shops: the Payload page, the Expedition class entries
 *    (dungeonlootr.org + theclick.gg) and the Update 1 raid classes.
 * RULE: no invented prices. "Not confirmed" = we have not seen the number.
 */
const SHOP_LAST_CHECKED = "2026-10-17";

export const metadata = buildMeta({
  title: "Dungeon Lootr Shop - Gamepasses, Packs & Currency Shops",
  absoluteTitle: true, // 56 chars
  description: `Every shop in ${SITE.game}: all 8 gamepasses with Robux prices from Roblox, the class packs in the LIMITED tab, and the free Payload and Expedition shops.`,
  path: "/shop/",
});

/** Copied from the Roblox game-passes API on SHOP_LAST_CHECKED, cheapest first. */
const GAMEPASSES: { name: string; price: number; what: string }[] = [
  { name: "Auto Forge", price: 99, what: "Keeps forging on its own until you run out of materials." },
  { name: "VIP", price: 120, what: "+15% Player and Class EXP, +5% Forge success chance, and a [VIP] title and chat tag." },
  { name: "Double Player EXP", price: 249, what: "Double Player EXP." },
  { name: "Double Class EXP", price: 249, what: "Double Class EXP." },
  { name: "x2 Drop Rate", price: 299, what: "The listing has no description. Only the name says what it does." },
  { name: "Increased Luck", price: 349, what: "Permanent Loot Luck boost. Better odds on quest items, chest drops and equipment rarity." },
  { name: "Extra Loot", price: 429, what: "Lets you pick a third chest when a dungeon offers you a chest choice." },
  { name: "Aspect Hunter", price: 449, what: "+10% chance to roll a Class Aspect." },
];

/** Robux class packs. Price only where a source stated one. */
const PACKS: { pack: string; cls: string; href: string; price: string; note: string }[] = [
  {
    pack: "Coyote Pack",
    cls: "Coyote (Starrk)",
    href: "/units/coyote/",
    price: "4,999 Robux",
    note: "Demon Twin Guns class item, 100 Lucky Spins, 200 Normal Spins, 20 Aspect Gems and 5 T3 Luck Potions.",
  },
  {
    pack: "El Hueco Pack",
    cls: "Coyote (Starrk)",
    href: "/units/coyote/",
    price: "9,999 Robux",
    note: "The bigger bundle. It also lists a Coyote Class Item, plus the El Hueco cosmetic set.",
  },
  {
    pack: "Grand Sovereign Bundle",
    cls: "Founder (Sun Wukong)",
    href: "/units/founder/",
    price: "Not confirmed",
    note: "Limited bundle. Nobody has said how long it stays up.",
  },
  {
    pack: "Shadow Monarch Pack",
    cls: "Shadow Vagrant (Sung Jin-Woo)",
    href: "/units/shadow-vagrant/",
    price: "Not confirmed",
    note: "No free route is confirmed.",
  },
  {
    pack: "Twin Jackals bundle",
    cls: "Hellfiend (Alucard)",
    href: "/units/hellfiend/",
    price: "Not confirmed",
    note: "The Update 1.5 bundle. Grants the class directly.",
  },
  {
    pack: "Update 2 bundle",
    cls: "Crescent Blade (Kokushibo)",
    href: "/units/crescent-blade/",
    price: "Not confirmed",
    note: "Creators say the price shown drops with Roblox Plus. One creator reported its ultimate doing zero damage.",
  },
  {
    pack: "Godhood Pack",
    cls: "Mastermind",
    href: "/units/mastermind/",
    price: "About 799 Robux (per video)",
    note: "Update 3.5 pack. Also includes a hypnosis sword.",
  },
];

const faq = [
  {
    q: "Where is the shop in Dungeon Lootr?",
    a: "Press Shop on the left side of the screen. Class packs sit in the LIMITED tab. Creator footage from September shows the El Hueco, Coyote Pack and Grand Sovereign panels there. Gamepasses are also listed on the game's Roblox page.",
  },
  {
    q: "What gamepasses does Dungeon Lootr have?",
    a: "Eight are on sale: Auto Forge (99), VIP (120), Double Player EXP (249), Double Class EXP (249), x2 Drop Rate (299), Increased Luck (349), Extra Loot (429) and Aspect Hunter (449). Prices are in Robux, read from Roblox on Oct 17, 2026.",
  },
  {
    q: "What is the cheapest gamepass?",
    a: "Auto Forge at 99 Robux. It only saves clicks: it keeps forging until your materials run out. It doesn't make your gear any better.",
  },
  {
    q: "Is VIP worth it?",
    a: "It's the cheapest pass that helps your progress. For 120 Robux you get +15% Player and Class EXP and +5% Forge success, plus a [VIP] tag. The two Double EXP passes give more EXP but cost 249 each.",
  },
  {
    q: "Can you buy classes with Robux?",
    a: "Yes. Coyote, Founder, Shadow Vagrant, Hellfiend, Crescent Blade and Mastermind all come from Robux packs. None of them has a confirmed free route.",
  },
  {
    q: "Which shop classes are free?",
    a: "Eight shop classes cost earned currency, not Robux. Fey costs 7,500 Aether marks in the Payload shop. Shrine Fox, Devourer, Fallen Magi, Petal Captain and Sound Hashira are in the Expedition Shop for Expedition Points. Spell Breaker and Cryomancer come from the Magic Unleashed raid shop.",
  },
  {
    q: "Does Roblox Premium do anything in Dungeon Lootr?",
    a: "Yes. The game's Roblox description says Premium Plus players earn +5% Player EXP and +10% Class EXP.",
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

export default function ShopPage() {
  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <header>
        <p className="text-sm text-dim">
          <Link href="/">Home</Link> / Shop
        </p>
        <Rune as="h1" color="gold" className="mt-1 text-3xl sm:text-5xl">
          Dungeon Lootr Shop Guide
        </Rune>
        <p className="mt-3 text-dim">
          {SITE.game} has two kinds of shop. The Robux shop sells 8 gamepasses (99 to 449 Robux)
          and the paid class packs. The currency shops sell classes and gear for points you earn
          by playing, so you don&apos;t need Robux for them.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={SHOP_LAST_CHECKED} />
        </div>
      </header>

      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          Every Gamepass and Its Price
        </Rune>
        <p className="mt-3 text-sm text-dim">
          Prices and effects are copied from the game&apos;s Roblox store listing on{" "}
          {SHOP_LAST_CHECKED}. A gamepass is a one-time Robux purchase that stays on your account.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-edge">
                <th className="py-2 pr-3 font-semibold text-fg">Gamepass</th>
                <th className="py-2 pr-3 font-semibold text-fg">Robux</th>
                <th className="py-2 font-semibold text-fg">What it does</th>
              </tr>
            </thead>
            <tbody>
              {GAMEPASSES.map((g) => (
                <tr key={g.name} className="border-b border-edge align-top">
                  <td className="display glow-gold whitespace-nowrap py-2 pr-3">{g.name}</td>
                  <td className="py-2 pr-3 text-dim">{g.price}</td>
                  <td className="py-2 text-dim">{g.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-dim">
          What to take from this: no gamepass gives you a class. They speed up EXP, loot or
          forging. If you farm a lot, Extra Loot and Increased Luck change what you walk out
          with. Auto Forge only saves clicks.
        </p>
        <p className="mt-3 text-sm text-dim">
          Roblox Premium helps a little too. The game&apos;s description says Premium Plus players
          get +5% Player EXP and +10% Class EXP. Two old passes (&ldquo;V3 Secret Gamepass&rdquo;
          and &ldquo;I&apos;ll be back&rdquo;) are off sale and can&apos;t be bought.
        </p>
      </Slab>

      <Slab>
        <Rune color="ember" as="h2" className="text-xl">
          Robux Class Packs (LIMITED Tab)
        </Rune>
        <p className="mt-3 text-dim">
          Open Shop on the left of the screen and switch to the LIMITED tab. That&apos;s where the
          class packs live. Stock changes with updates, so a pack below may have rotated out.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-edge">
                <th className="py-2 pr-3 font-semibold text-fg">Pack</th>
                <th className="py-2 pr-3 font-semibold text-fg">Class</th>
                <th className="py-2 pr-3 font-semibold text-fg">Price</th>
                <th className="py-2 font-semibold text-fg">Notes</th>
              </tr>
            </thead>
            <tbody>
              {PACKS.map((p) => (
                <tr key={p.pack} className="border-b border-edge align-top">
                  <td className="display glow-gold py-2 pr-3">{p.pack}</td>
                  <td className="py-2 pr-3">
                    <Link href={p.href} className="text-arcane hover:underline">
                      {p.cls}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap py-2 pr-3 text-dim">{p.price}</td>
                  <td className="py-2 text-dim">{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-dim">
          What to take from this: we only list a price when a source showed it. &ldquo;Not
          confirmed&rdquo; doesn&apos;t mean cheap. Check the live price in the shop, since Robux
          prices can differ by region.
        </p>
        <p className="mt-3 text-sm text-dim">
          During the Berserk collab the shop also sold an event bundle for{" "}
          <Link href="/units/dragon-slayer/" className="text-arcane hover:underline">
            Dragon Slayer
          </Link>
          . You could earn that class free with 75 fragments, so the bundle was only a shortcut. We
          haven&apos;t confirmed it&apos;s still listed.
        </p>
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          Free Currency Shops
        </Rune>
        <p className="mt-3 text-dim">
          These shops take points you earn in a game mode. Every class in them is free to play.
        </p>
        <ul className="mt-4 space-y-3">
          <li className="slab p-4">
            <span className="display glow-gold">Payload shop</span>
            <p className="mt-2 text-sm text-dim">
              Currency: Aether marks from the Payload mode. It sells the{" "}
              <Link href="/units/fey/" className="text-arcane hover:underline">
                Fey
              </Link>{" "}
              class for 7,500 marks and the Taurus Slayer title for 5,000. It also has Affix Seals,
              ore chests and Payload gear. Full item list in the{" "}
              <Link href="/payload/" className="text-arcane hover:underline">
                Payload guide
              </Link>
              .
            </p>
          </li>
          <li className="slab p-4">
            <span className="display glow-gold">Expedition Shop</span>
            <p className="mt-2 text-sm text-dim">
              Currency: Expedition Points from the Update 3 Expedition mode. It sells the class
              items for{" "}
              <Link href="/units/shrine-fox/" className="text-arcane hover:underline">
                Shrine Fox
              </Link>
              ,{" "}
              <Link href="/units/devourer/" className="text-arcane hover:underline">
                Devourer
              </Link>
              ,{" "}
              <Link href="/units/fallen-magi/" className="text-arcane hover:underline">
                Fallen Magi
              </Link>
              ,{" "}
              <Link href="/units/petal-captain/" className="text-arcane hover:underline">
                Petal Captain
              </Link>{" "}
              and{" "}
              <Link href="/units/sound-hashira/" className="text-arcane hover:underline">
                Sound Hashira
              </Link>
              . It also stocks Pet Whistles, Spirit Prisms, Revive Sigils, Reforge Stones, Aspect
              Gems and cosmetics.
            </p>
            <p className="mt-2 text-sm text-dim">
              Don&apos;t mix it up with Run Coins. Those are spent mid-run at the Expedition Forge
              on your temporary gear. The{" "}
              <Link href="/codes/" className="text-arcane hover:underline">
                OKAMI code
              </Link>{" "}
              gives 200 Expedition Points for a head start.
            </p>
          </li>
          <li className="slab p-4">
            <span className="display glow-gold">Magic Unleashed raid shop</span>
            <p className="mt-2 text-sm text-dim">
              The Update 1 raid has its own shop. You can buy{" "}
              <Link href="/units/spell-breaker/" className="text-arcane hover:underline">
                Spell Breaker
              </Link>{" "}
              and{" "}
              <Link href="/units/cryomancer/" className="text-arcane hover:underline">
                Cryomancer
              </Link>{" "}
              there, or get them as raid drops. Their prices aren&apos;t confirmed.
            </p>
          </li>
        </ul>
      </Slab>

      <Slab>
        <Rune color="blood" as="h2" className="text-xl">
          Should You Spend Robux?
        </Rune>
        <ul className="mt-3 space-y-3 text-dim">
          <li>
            <span className="text-fg">You don&apos;t have to.</span> Eight shop classes cost
            earned points, and the Boss Rush crafts (Sukuna, Gojo, Asta) are free too. See the{" "}
            <Link href="/boss-rush/" className="text-arcane hover:underline">
              Boss Rush guide
            </Link>
            .
          </li>
          <li>
            <span className="text-fg">Paid classes aren&apos;t always safe buys.</span> One creator
            found the Crescent Blade ultimate doing zero damage. Check the class page and the{" "}
            <Link href="/tier-list/" className="text-arcane hover:underline">
              tier list
            </Link>{" "}
            before you pay.
          </li>
          <li>
            <span className="text-fg">Use free codes first.</span> Current codes hand out Lucky
            Spins, Aspect Gems and Reforge Stones. Grab them on the{" "}
            <Link href="/codes/" className="text-arcane hover:underline">
              codes page
            </Link>
            .
          </li>
        </ul>
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          Shop FAQ
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
        Where this comes from: gamepass names, prices and effects are read from the Roblox store
        API for {SITE.game} (ClickBytes) on {SHOP_LAST_CHECKED}. Pack contents and prices come from
        the sources on each class page. More: <Link href="/units/">all units</Link> ·{" "}
        <Link href="/payload/">Payload</Link> · <Link href="/beginner-guide/">beginner guide</Link> ·{" "}
        <Link href="/updates/">updates</Link>
      </p>
    </div>
  );
}
