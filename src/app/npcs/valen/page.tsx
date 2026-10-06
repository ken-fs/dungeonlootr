import type { Metadata } from "next";
import Link from "next/link";
import { Slab, Rune, VerifiedStamp } from "@/components/ui";
import { SITE } from "@/lib/site";

/**
 * Valen — the NPC who runs the Awakened Devil EX questline.
 *
 * 为什么这页单独存在：「dungeon lootr valen」这一簇在联想词里有 7 个变体
 * （valen / valen location / valen npc / valen quest / where is valen），
 * 但**全网没有任何站点有 Valen 页** —— 两个 wiki 都没有，SERP 只有论坛和视频。
 * 站点上 /units/awakened-devil-ex/ 写了机制却没写执行这个任务的 NPC，
 * 所以那批查询在我们这里完全没有落点。
 *
 * 数据来源（第一方实测，非二手转述）：
 *  - 创作者视频 95fNtSskAo8《How to Get the AWAKENED DEVIL EX Class》(Knight the 7)
 *    完整任务链；逐帧读取确认了 Valen 的游戏内标签 "Supporter."、所在场景
 *    （临水商铺区、红白条纹遮阳棚旁）、以及全完成后的对话原文。
 *  - 创作者视频 aEjqay6oBZg《FASTEST Way To Get Awakened Devil EX!》
 *    独立复核同一流程（mastery 50 → Valen → 1M → 第三个选项 → Devil Heart）。
 *  - dungeonlootrwiki.com 的 class route 表独立给出同一路线
 *    （"Valen NPC quest, or upgraded from Azure Devil at class level 50 with
 *     coins and a Devil Heart"）。
 * 三源在机制上完全一致，视频为游戏内画面，按本项目标准属于最强证据。
 *
 * 刻意留白：地图上的确切坐标/区域名没有任何文字源写过，我们只描述画面里
 * 能看到的场景，不给一个编出来的地名。wiki 说 Devil Heart 来自 "hidden
 * Awakened Devil boss"，视频里打的是 mini boss —— 两者不一致，页面里写明。
 */
export const metadata: Metadata = {
  // absolute：站点模板后缀会把标题推过 SERP 截断线
  title: { absolute: "Valen in Dungeon Lootr - NPC Quest, Location and Titles" },
  description:
    "Valen is the Supporter NPC who runs Dungeon Lootr's Awakened Devil EX questline. His three dialogue options, the Devil Heart farm, and the two titles.",
  alternates: { canonical: "/npcs/valen/" },
  openGraph: {
    type: "article",
    siteName: SITE.name,
    url: "/npcs/valen/",
    title: "Valen in Dungeon Lootr - NPC Quest, Location and Titles",
    description:
      "The Supporter NPC behind Awakened Devil EX: three dialogue options, the Devil Heart farm in Frostspire Bastion, and the Motivated / The Storm titles.",
  },
};

const LAST_CHECKED = "2026-10-06";

const faq = [
  {
    q: "Where is Valen in Dungeon Lootr?",
    a: "No text source maps him, so here is what the footage shows: Valen stands outdoors beside the waterfront, next to a shop with red-and-white striped awnings, and he carries the in-game label SUPPORTER above his name. Walk that waterfront shop row and look for Supporter rather than looking for the name.",
  },
  {
    q: "What does Valen do?",
    a: "He runs the Awakened Devil EX questline. Once you own the Azure Devil class, Valen is the NPC you talk to in order to turn it into Awakened Devil EX.",
  },
  {
    q: "How many dialogue options does Valen have?",
    a: "Three, and they are sequential rather than a menu of alternatives. Option 1 pays out 1,000,000 coins once your Azure Devil mastery hits 50. Option 3 trades a Devil Heart for the Awakened Devil EX class and takes those coins back. Option 2 pays another 1,000,000 once Awakened Devil EX itself reaches mastery 50.",
  },
  {
    q: "What are the Motivated and The Storm titles?",
    a: "They are the reward for finishing all three of Valen's options. His closing line reads 'Motivated. The Storm. You have taken both halves of the devil to their peak.' Two titles come out of it, named after that line.",
  },
  {
    q: "How do I get the Devil Heart Valen asks for?",
    a: "Run Frostspire Bastion on Nightmare and kill the dungeon's mini bosses. It is not a guaranteed drop. Platinum keys let you summon the mini boss again for a second attempt, and resetting your character drops you back at the lobby with rewards already banked so you can re-enter and try again.",
  },
  {
    q: "Does Valen give anything else?",
    a: "Two million coins in total across the two payout options, minus the one million that option 3 takes back, plus the Motivated and The Storm titles at the end. Nothing else is documented.",
  },
];

export default function ValenPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <header>
        <Rune as="h1" color="ember" className="text-3xl sm:text-5xl">
          Valen
        </Rune>
        <p className="mt-3 text-dim">
          Valen is the <span className="text-fg">Supporter</span> NPC who runs the{" "}
          <Link href="/units/awakened-devil-ex/" className="text-primary hover:underline">
            Awakened Devil EX
          </Link>{" "}
          questline. Most guides describe the requirement — class level 50, a million coins and a
          Devil Heart — without ever naming the NPC who takes them. This page is about him.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={LAST_CHECKED} />
        </div>
      </header>

      <Slab>
        <Rune color="gold" className="text-xl">
          Finding him
        </Rune>
        <p className="mt-3 text-fg">
          Valen carries the label <span className="glow-gold">SUPPORTER</span> above his name in
          game, which is the fastest way to pick him out of a busy street. He stands outdoors
          beside the waterfront, next to a shop with red-and-white striped awnings.
        </p>
        <p className="mt-3 text-dim">
          We describe the scene rather than a district name on purpose: no source publishes the map
          coordinates, and inventing one would be worse than admitting that. The footage we worked
          from is linked at the bottom — it walks straight to him.
        </p>
      </Slab>

      <Slab>
        <Rune color="arcane" className="text-xl">
          What Valen is for
        </Rune>
        <p className="mt-3 text-fg">
          Valen is the last step of an evolution chain. You need the{" "}
          <Link href="/units/azure-devil/" className="text-primary hover:underline">
            Azure Devil
          </Link>{" "}
          class first — Awakened Devil EX is what it becomes. Everything Valen asks for is an
          Azure Devil requirement.
        </p>
        <p className="mt-3 text-dim">
          His three dialogue options are <em>sequential</em>, not a menu of alternatives. Taking
          them out of order does not work, and option 3 will not open until option 1 has paid out.
        </p>
      </Slab>

      <Slab>
        <Rune color="gold" className="text-xl">
          The three dialogue options, in order
        </Rune>
        <ol className="mt-4 space-y-5">
          <li className="flex gap-3">
            <span className="display glow-ember text-lg">1</span>
            <div>
              <p className="text-fg font-semibold">
                Get Azure Devil to mastery 50 → he hands you 1,000,000 coins
              </p>
              <p className="mt-1 text-dim">
                The mastery grind is the gate. Creators put Azure Devil's climb at roughly level 30
                of general play before it is maxed, so this is not a late-game wall. The million is
                a gift, not a fee — it exists to fund the next step.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="display glow-ember text-lg">3</span>
            <div>
              <p className="text-fg font-semibold">
                Bring a Devil Heart → Awakened Devil EX, and the million goes back
              </p>
              <p className="mt-1 text-dim">
                This is the actual unlock. Hand over the heart and you get the class; the
                1,000,000 coins from option 1 are deducted at the same time, which is why the
                order matters. Awakened Devil EX arrives with its weapon, Judgement&apos;s Edge.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="display glow-ember text-lg">2</span>
            <div>
              <p className="text-fg font-semibold">
                Get Awakened Devil EX to mastery 50 → another 1,000,000 coins
              </p>
              <p className="mt-1 text-dim">
                Yes, option 2 comes last. Completing it is what closes the chain — and completing
                all three is what triggers his final line and the titles.
              </p>
            </div>
          </li>
        </ol>
      </Slab>

      <Slab>
        <Rune color="blood" className="text-xl">
          The Devil Heart farm
        </Rune>
        <p className="mt-3 text-fg">
          Option 3 sends you to <span className="text-fg">Frostspire Bastion</span> on{" "}
          <span className="text-fg">Nightmare</span> difficulty for a Devil Heart. It drops from the
          dungeon&apos;s mini bosses, and it is not guaranteed.
        </p>
        <ol className="mt-4 space-y-2 text-dim">
          <li>1. Enter Frostspire Bastion on Nightmare.</li>
          <li>
            2. Hunt the mini bosses. Spawns are random, so their positions will not match a fixed
            route.
          </li>
          <li>
            3. No heart? Two ways to skip re-clearing: spend extra platinum keys to summon the mini
            boss again for a second attempt, or reset your character — that returns you to the
            lobby with everything already picked up still banked, so nothing is lost.
          </li>
          <li>
            4. Once the heart drops, finish the run rather than leaving immediately. Creators are
            explicit that this is what makes sure it lands in your inventory properly.
          </li>
          <li>5. Head back to Valen and take option 3 again to convert it.</li>
        </ol>
        <p className="mt-4 border-l-2 border-edge pl-3 text-sm text-dim">
          <span className="display text-xs uppercase glow-ember">Source note: </span>
          the creator footage we worked from shows mini bosses dropping it. A wiki class table
          describes the same drop as coming from a &quot;hidden Awakened Devil boss&quot;. Those two
          accounts do not match, so treat the mini-boss farm as the tested route and the boss
          wording as unresolved.
        </p>
      </Slab>

      <Slab>
        <Rune color="arcane" className="text-xl">
          What finishing all three gets you
        </Rune>
        <p className="mt-3 text-fg">
          Valen&apos;s closing dialogue reads:{" "}
          <span className="glow-gold">
            &ldquo;Motivated. The Storm. You have taken both halves of the devil to their peak. There
            is nothing left for me to acknowledge, only for you to wield.&rdquo;
          </span>
        </p>
        <p className="mt-3 text-dim">
          Those first two sentences are the titles — <span className="text-fg">Motivated</span> and{" "}
          <span className="text-fg">The Storm</span>. &quot;Both halves of the devil&quot; is Azure
          Devil and Awakened Devil EX at mastery 50 each, which is exactly what options 1 and 2
          ask for.
        </p>
      </Slab>

      <Slab>
        <Rune color="gold" className="text-xl">
          Valen FAQ
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

      <Slab>
        <Rune color="ember" className="text-xl">
          Sources
        </Rune>
        <ul className="mt-4 space-y-2 text-dim">
          <li>
            <a
              href="https://www.youtube.com/watch?v=95fNtSskAo8"
              className="text-primary hover:underline"
              rel="nofollow noopener"
              target="_blank"
            >
              How to Get the AWAKENED DEVIL EX Class
            </a>{" "}
            — full quest walkthrough. The frames we read Valen&apos;s on-screen label, his street
            and his closing line from.
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=aEjqay6oBZg"
              className="text-primary hover:underline"
              rel="nofollow noopener"
              target="_blank"
            >
              FASTEST Way To Get Awakened Devil EX!
            </a>{" "}
            — independent run of the same sequence, same three-step structure.
          </li>
          <li>
            <a
              href="https://dungeonlootrwiki.com/"
              className="text-primary hover:underline"
              rel="nofollow noopener"
              target="_blank"
            >
              dungeonlootrwiki.com
            </a>{" "}
            — class route table listing the Valen quest, the class-level-50 gate, the coins and the
            Devil Heart.
          </li>
        </ul>
        <p className="mt-4 text-sm text-dim">
          More:{" "}
          <Link href="/units/awakened-devil-ex/" className="text-primary hover:underline">
            the Awakened Devil EX class itself
          </Link>{" "}
          ·{" "}
          <Link href="/units/azure-devil/" className="text-primary hover:underline">
            Azure Devil, the class you evolve
          </Link>{" "}
          ·{" "}
          <Link href="/updates/" className="text-primary hover:underline">
            update history
          </Link>
        </p>
      </Slab>
    </div>
  );
}
