import { buildMeta } from "@/lib/meta";
import { Slab, Rune } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Terms of Use",
  description: `Terms of use for ${SITE.name}.`,
  path: "/terms/",
});

export default function Terms() {
  return (
    <div className="space-y-8">
      <header>
        <Rune as="h1" color="ember" className="text-3xl sm:text-5xl">
          Terms of Use
        </Rune>
        <p className="mt-2 text-sm text-dim">Last updated: 2026-09-02</p>
      </header>

      <Slab>
        <div className="space-y-4 text-dim">
          <p>
            By using {SITE.name} ({SITE.domain}) you agree to these terms. The site is provided
            free, &ldquo;as is,&rdquo; for informational and entertainment purposes.
          </p>
          <p>
            <span className="text-fg">Accuracy.</span> We work hard to verify codes and guides,
            but games change constantly. We can&apos;t guarantee every detail is current, and we
            aren&apos;t liable for outcomes from using the information here.
          </p>
          <p>
            <span className="text-fg">Not official.</span> {SITE.name} is not affiliated with,
            endorsed by, or sponsored by Roblox Corporation or the {SITE.game} developer. All
            trademarks and game assets belong to their respective owners.
          </p>
          <p>
            <span className="text-fg">Content.</span> Our original text and layout may not be
            copied wholesale. Game names, images and code lists reference publicly available
            game information.
          </p>
          <p>
            Questions? Email{" "}
            <a href={`mailto:${SITE.contactEmail}`} className="glow-gold">
              {SITE.contactEmail}
            </a>
            .
          </p>
        </div>
      </Slab>
    </div>
  );
}
