import Link from "next/link";
import { Slab, Rune } from "@/components/ui";
import { NAV } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="space-y-8">
      <header>
        <Rune as="h1" color="blood" className="text-3xl sm:text-5xl">
          404 - Empty Chest
        </Rune>
        <p className="mt-3 text-dim">
          This dungeon room is empty - the page you were after isn&apos;t here. Try one of these
          instead:
        </p>
      </header>
      <Slab>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          <li><Link href="/">Home</Link></li>
          {NAV.map((n) => (
            <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
          ))}
        </ul>
      </Slab>
    </div>
  );
}
