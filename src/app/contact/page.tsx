import { buildMeta } from "@/lib/meta";
import { Slab, Rune } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Contact",
  description: `Contact ${SITE.name} - report an outdated code, a wrong tier, or suggest a guide for Roblox ${SITE.game}.`,
  path: "/contact/",
});

export default function Contact() {
  return (
    <div className="space-y-8">
      <header>
        <Rune as="h1" color="ember" className="text-3xl sm:text-5xl">
          Contact
        </Rune>
      </header>

      <Slab>
        <p className="text-dim">
          Found a code that stopped working, a tier that&apos;s wrong, or a unit guide we&apos;re
          missing? Tell us and we&apos;ll fix it fast - accuracy is the whole point of this site.
        </p>
        <p className="mt-4 text-dim">
          Email:{" "}
          <a href={`mailto:${SITE.contactEmail}`} className="glow-gold">
            {SITE.contactEmail}
          </a>
        </p>
      </Slab>
    </div>
  );
}
