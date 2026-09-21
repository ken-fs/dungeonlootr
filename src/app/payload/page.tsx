import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { Slab, Rune, VerifiedStamp } from "@/components/ui";
import { UNITS_LAST_CHECKED } from "@/data/units";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Dungeon Lootr Payload Guide - Aether Marks, Shop & Taurus",
  absoluteTitle: true, // 58 chars as-is
  description: `How the Payload mode works in ${SITE.game}: earning Aether marks, every shop item and price, rescuing NPC allies, and the Taurus boss at the end.`,
  path: "/payload/",
});

/** The Payload shop, as read off the in-game store. Prices are only listed
 *  where a creator stated them - blank means unconfirmed, not free. */
const SHOP: { name: string; what: string; price: string }[] = [
  {
    name: "Fey class",
    what: "Exotic rarity. In-game text: \"a fake court duelist who scatters enchanted daggers and dances between them.\" Permanently unlocks the class.",
    price: "7,500 marks",
  },
  {
    name: "Taurus Slayer title",
    what: "+18 Strength, +18 Intelligence, +18 Dexterity while equipped - the all-rounder pick.",
    price: "5,000 marks",
  },
  {
    name: "Zephyr title",
    what: "+20 Intelligence, +10 Strength, +10 Vitality. Creator note: this is the mage title.",
    price: "Not confirmed",
  },
  {
    name: "Nature's Grace title",
    what: "+20 Dexterity, +5 Intelligence, no Strength. The pick for archers and ranged builds like Sinister Trigger.",
    price: "Not confirmed",
  },
  {
    name: "Stormheart Reliquary",
    what: "Celestial ore and Radiant ore guaranteed, plus a 10% roll at Exotic ore and a separate 3% roll at an Exotic ingot. Has a daily purchase limit.",
    price: "Not confirmed",
  },
  {
    name: "Zephyr Band",
    what: "A guaranteed Celestial ring. Payload gear rolls 25% stronger base stats than standard gear.",
    price: "Not confirmed",
  },
  {
    name: "Stormweave Coat",
    what: "Armour with the same 25% stronger base stats as the rest of the Payload set.",
    price: "Not confirmed",
  },
  {
    name: "Tempest Vault",
    what: "Radiant and Celestial ores, with each gear piece rolling a separate 25% chance at Celestial rarity. Also the source of the Taurus Signet.",
    price: "Not confirmed",
  },
  {
    name: "Skyfarer Cache",
    what: "Gold ore and Infernal ore guaranteed, with a chance at a Legendary-rarity gear piece.",
    price: "Not confirmed",
  },
  {
    name: "Affix Seal",
    what: "A forging item that locks one stat when you reforge, so a good roll cannot be lost. Creators call it the most important thing in the shop for gear chasing.",
    price: "Not confirmed",
  },
];

const FAQ = [
  {
    q: "What is the Payload mode in Dungeon Lootr?",
    a: "Payload is the Update 2 game mode. You board the winged ship, travel across floating aisles, and clear increasingly difficult checkpoints - each one asking you to defeat all enemies. Along the way you rescue NPC allies who join you and grant buffs, and the run ends with the Taurus boss. Everything you earn is spent in the Payload shop.",
  },
  {
    q: "How do I get Aether marks?",
    a: "By playing Payload runs. Aether marks are the mode's own currency and they show in the top-left of your screen while you have them. There is no Robux shortcut confirmed - you earn them by clearing checkpoints and rescuing allies.",
  },
  {
    q: "How much does the Fey class cost in marks?",
    a: "7,500 Aether marks in the Payload shop, where it sits at the top of the list. That makes Fey the one Update 2 class you can buy with earned currency rather than Robux or spins.",
  },
  {
    q: "What is the Taurus boss?",
    a: "Taurus is the final boss at the end of a Payload run - the patch notes describe facing it at the end, and creator footage shows a very large hitbox that makes almost any attack connect. It drops the Taurus Signet, an exclusive item that does not drop every run.",
  },
  {
    q: "How do I get the Taurus Signet?",
    a: "By beating Taurus at the end of Payload runs - but it is not a guaranteed drop. One creator ran the mode on Nightmare and did not get one, noting you have to do several runs to see it. The Tempest Vault is the other place it can appear.",
  },
  {
    q: "Who are the NPCs you rescue in Payload?",
    a: "Payload asks you to protect NPCs during the run, and rescuing one makes it join your party as an ally. Creator footage shows named allies including Meow and a Frigid Monarch. You can toggle an ally to stop following you, and they can die during the run.",
  },
  {
    q: "Is Payload hard?",
    a: "Creators agree it is easier than it looks - one says it is \"pretty easy to solo on nightmare\", another calls it \"pretty mid, easy to beat\". Treat it as a farm rather than a challenge, at least on current tuning.",
  },
  {
    q: "Who is Payload for?",
    a: "Mid-game players chasing better gear and stats. Creators describe it as a gear and ore source rather than endgame content - it hands out 25% stronger base-stat gear, Exotic ore, and Affix Seals, which is exactly what a player catching up needs and exactly what a maxed player does not.",
  },
];

export default function PayloadPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <header>
        <Rune as="h1" color="ember" className="text-3xl sm:text-5xl">
          Payload Mode Guide
        </Rune>
        <p className="mt-3 text-dim">
          Payload is the Update 2 mode that added Aether marks, the gear-chasing shop, and the
          Taurus boss in {SITE.game}. Here is the whole loop, the full shop, and what each item
          actually does.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={UNITS_LAST_CHECKED} />
        </div>
      </header>

      {/* Core loop */}
      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          How Payload Works
        </Rune>
        <p className="mt-3 text-dim">
          The in-game patch notes describe it in one line: <em>&ldquo;Travel across the floating
          aisles and fight through increasingly difficult checkpoints. Rescue allies during your
          run to receive buffs and help your team progress. Earn payload currency, Aether marks,
          and spend it in the new payload shop, and face Taurus at the end.&rdquo;</em>
        </p>
        <ol className="mt-4 space-y-3">
          {[
            "Board the winged ship - it is both the entry point and the shop. Ready up when your group is in.",
            "Clear each checkpoint by defeating all enemies. Expect a couple of waves per payload area.",
            "Rescue the NPCs you find. A rescued ally joins your party and grants buffs; you can toggle them to stop following, and they can die.",
            "Pick up gear as you go - creator runs show Stormweave Coat and Zephyr Band dropping mid-run, plus a free blessing.",
            "Beat Taurus at the end. Its huge hitbox means almost any attack connects, but the Taurus Signet is not a guaranteed drop.",
            "Spend your Aether marks in the shop. The currency shows in the top-left of your screen.",
          ].map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="display glow-taillight">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-dim">{step}</span>
            </li>
          ))}
        </ol>
      </Slab>

      {/* Shop */}
      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          Payload Shop - Every Item
        </Rune>
        <p className="mt-3 text-sm text-dim">
          Prices are listed only where a creator stated them on camera. &ldquo;Not confirmed&rdquo;
          means we have not seen the number - not that it is free.
        </p>
        <div className="mt-4 space-y-3">
          {SHOP.map((item) => (
            <div key={item.name} className="slab p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="display glow-gold">{item.name}</span>
                <span className="text-xs text-dim">{item.price}</span>
              </div>
              <p className="mt-2 text-sm text-dim">{item.what}</p>
            </div>
          ))}
        </div>
      </Slab>

      {/* Why it matters */}
      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          Why Payload Matters
        </Rune>
        <ul className="mt-4 space-y-3 text-dim">
          <li>
            <strong className="text-foreground">It is the gear catch-up mode.</strong> Payload gear
            rolls 25% stronger base stats than standard gear, so a player without a good set can
            buy into one with earned currency instead of farming dungeons.
          </li>
          <li>
            <strong className="text-foreground">It is a new Exotic ore source.</strong> The shop
            chests hand out Celestial and Radiant ore with separate rolls at Exotic ore and Exotic
            ingots - materials that used to come from dungeons only.
          </li>
          <li>
            <strong className="text-foreground">Affix Seals change reforging.</strong> A seal locks
            one stat so a reforge cannot ruin it, and creators report the seals drop generously
            just from passively grinding Payload.
          </li>
          <li>
            <strong className="text-foreground">It is where{" "}
            <Link href="/units/fey/" className="text-arcane hover:underline">
              Fey
            </Link>{" "}
            comes from.</strong> The one Update 2 class you buy with earned currency rather than
            spins or Robux.
          </li>
        </ul>
      </Slab>

      {/* Caveat */}
      <Slab>
        <Rune color="ember" as="h2" className="text-xl">
          What Creators Warn About
        </Rune>
        <p className="mt-3 text-dim">
          Two honest notes from the creators who ran it. First, difficulty: Payload is not the
          challenge the name suggests - it is called &ldquo;pretty easy to solo on nightmare&rdquo;
          and &ldquo;pretty mid, easy to beat&rdquo;. Second, audience: this is a{" "}
          <strong className="text-foreground">mid-game</strong> mode. It exists to let players
          catch up on gear, so if you are already maxed there is little here for you beyond the new
          classes.
        </p>
      </Slab>

      {/* FAQ */}
      <section className="space-y-4">
        <Rune color="arcane" as="h2" className="text-xl">
          Payload FAQ
        </Rune>
        <div className="space-y-3">
          {FAQ.map((f) => (
            <details key={f.q} className="slab p-4">
              <summary className="cursor-pointer font-bold">{f.q}</summary>
              <p className="mt-2 text-sm text-dim">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related */}
      <Slab>
        <Rune color="gold" as="h2" className="text-xl">
          Related
        </Rune>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <li>
            <Link href="/units/fey/" className="text-arcane hover:underline">
              How to get Fey
            </Link>
          </li>
          <li>
            <Link href="/units/" className="text-arcane hover:underline">
              All classes
            </Link>
          </li>
          <li>
            <Link href="/codes/" className="text-arcane hover:underline">
              Working codes
            </Link>
          </li>
          <li>
            <Link href="/boss-rush/" className="text-arcane hover:underline">
              Boss Rush guide
            </Link>
          </li>
          <li>
            <Link href="/updates/" className="text-arcane hover:underline">
              Update history
            </Link>
          </li>
        </ul>
      </Slab>
    </div>
  );
}
