import { Slab, Rune } from "@/components/ui";
import type { TierItem, Tier } from "@/data/tiers";

const TIER_META: { tier: Tier; color: string; label: string }[] = [
  { tier: "S", color: "glow-ember", label: "Meta - pick first" },
  { tier: "A", color: "glow-gold", label: "Strong" },
  { tier: "B", color: "glow-arcane", label: "Viable" },
  { tier: "C", color: "text-dim", label: "Situational" },
  { tier: "D", color: "text-dim", label: "Skip" },
];

/** Renders a ranked tier board, or an honest "ranking pending" state. */
export function TierBoard({ items, noun }: { items: TierItem[]; noun: string }) {
  const ranked = items.filter((i) => i.tier);

  if (ranked.length === 0) {
    return (
      <Slab>
        <Rune color="ember" as="h2" className="text-xl">
          Ranking as data is confirmed
        </Rune>
        <p className="mt-3 text-dim">
          A tier list is only worth reading if the picks behind it are real. Dungeon Lootr
          just launched and is patching fast, so we won&apos;t fake a ranking.
          {items.length > 0
            ? ` ${noun}s confirmed in-game so far:`
            : ` We're mapping every ${noun} now - check back shortly.`}
        </p>
        {items.length > 0 && (
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {items.map((i) => (
              <li key={i.name} className="slab px-3 py-2 text-sm">
                <span className="text-fg">{i.name}</span>
                {i.note && <span className="block text-xs text-dim">{i.note}</span>}
              </li>
            ))}
          </ul>
        )}
      </Slab>
    );
  }

  return (
    <div className="space-y-4">
      {TIER_META.map((t) => {
        const group = ranked.filter((i) => i.tier === t.tier);
        if (group.length === 0) return null;
        return (
          <Slab key={t.tier} className="flex gap-4">
            <div className={`display text-4xl ${t.color}`}>{t.tier}</div>
            <div>
              <p className="text-xs uppercase text-dim">{t.label}</p>
              <ul className="mt-1 space-y-0.5">
                {group.map((i) => (
                  <li key={i.name}>
                    <span className="text-fg">{i.name}</span>
                    {i.note && <span className="text-sm text-dim"> - {i.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </Slab>
        );
      })}
    </div>
  );
}
