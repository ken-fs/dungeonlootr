import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { Slab, Rune, VerifiedStamp } from "@/components/ui";
import { LIVE_STATS, NEXT_MILESTONES, UPDATES, UPDATES_LAST_CHECKED } from "@/data/updates";
import { SITE } from "@/lib/site";

const MONTH_YEAR = new Date().toLocaleString("en-US", { month: "long", year: "numeric" });

export const metadata = buildMeta({
  title: `Dungeon Lootr Updates & Patch Notes (${MONTH_YEAR})`,
  absoluteTitle: true,
  description: `Every tracked ${SITE.game} update and code drop, with evidence. Live player stats, patch timeline, and the next milestone codes to watch.`,
  path: "/updates/",
});

const evidenceColor: Record<string, string> = {
  "API timestamp": "glow-arcane",
  "Code drop": "glow-gold",
  "Showcase video": "glow-ember",
  Inferred: "glow-blood",
};

export default function Updates() {
  return (
    <div className="space-y-8">
      <header>
        <Rune as="h1" color="ember" className="text-3xl sm:text-5xl">
          Updates &amp; Patch Notes
        </Rune>
        <p className="mt-3 text-dim">
          {SITE.game} doesn&apos;t publish numbered patch notes in one place, so we
          reconstruct the timeline from verifiable markers - code drops, API timestamps and
          showcase footage - and label the evidence on every entry.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={UPDATES_LAST_CHECKED} />
        </div>
      </header>

      <dl className="slab grid grid-cols-3 gap-4 p-5 text-center sm:p-6">
        <div>
          <dt className="display text-xs uppercase text-dim">Playing now</dt>
          <dd className="display glow-gold mt-1 text-2xl">{LIVE_STATS.playing}</dd>
        </div>
        <div>
          <dt className="display text-xs uppercase text-dim">Visits</dt>
          <dd className="display glow-gold mt-1 text-2xl">{LIVE_STATS.visits}</dd>
        </div>
        <div>
          <dt className="display text-xs uppercase text-dim">Favorites</dt>
          <dd className="display glow-gold mt-1 text-2xl">{LIVE_STATS.favorites}</dd>
        </div>
        <p className="col-span-3 text-xs text-dim">
          Snapshot {LIVE_STATS.asOf}, official Roblox Games API - a live game means
          update-day code drops keep coming.
        </p>
      </dl>

      <section className="space-y-4">
        <Rune color="gold" as="h2" className="text-xl">
          Patch Timeline
        </Rune>
        {UPDATES.map((u) => (
          <Slab key={`${u.date}-${u.title}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="display text-lg text-fg">{u.title}</h3>
              <p className="text-sm text-dim">
                <span className="glow-gold">{u.date}</span>
                <span className={`ml-3 text-xs uppercase ${evidenceColor[u.evidence]}`}>
                  {u.evidence}
                </span>
              </p>
            </div>
            <p className="mt-2 text-dim">{u.detail}</p>
          </Slab>
        ))}
      </section>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          Next Codes to Watch For
        </Rune>
        <p className="mt-3 text-dim">
          Milestone codes follow a pattern - likes, favorites, player count, visits. Based
          on the stats snapshot above, these are the next likely drops (speculation, but
          educated):
        </p>
        <ul className="mt-4 space-y-2 text-dim">
          {NEXT_MILESTONES.map((m) => (
            <li key={m} className="flex gap-3">
              <span className="display glow-gold">◆</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-dim">
          When any of these land, they appear on the <Link href="/codes/">codes page</Link>{" "}
          first - it re-verifies daily, and update day is the best day to check.
        </p>
      </Slab>

      <Slab>
        <Rune color="arcane" as="h2" className="text-xl">
          How We Track Updates
        </Rune>
        <p className="mt-3 text-dim">
          Three sources, cross-checked: the official Discord (fastest), the Roblox game
          page (update timestamps and description changes), and showcase creators who
          document new classes and aspects. We log an entry only when at least one source
          is verifiable - rumored changes never make this list, and inferred entries are
          marked as such.
        </p>
        <p className="mt-3 text-sm text-dim">
          Patches usually move the meta: after each confirmed update we re-check the{" "}
          <Link href="/tier-list/">class tier list</Link>,{" "}
          <Link href="/aspect-tier-list/">aspect tier list</Link> and{" "}
          <Link href="/units/">unit obtain methods</Link>.
        </p>
      </Slab>
    </div>
  );
}
