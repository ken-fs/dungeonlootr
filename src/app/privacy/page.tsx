import { buildMeta } from "@/lib/meta";
import { Slab, Rune } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}.`,
  path: "/privacy/",
});

export default function Privacy() {
  return (
    <div className="space-y-8">
      <header>
        <Rune as="h1" color="ember" className="text-3xl sm:text-5xl">
          Privacy Policy
        </Rune>
        <p className="mt-2 text-sm text-dim">Last updated: 2026-09-02</p>
      </header>

      <Slab>
        <div className="space-y-4 text-dim">
          <p>
            {SITE.name} ({SITE.domain}) is a free, independent fan site. We keep data
            collection minimal.
          </p>
          <p>
            <span className="text-fg">Analytics.</span> We may use privacy-respecting analytics
            to understand aggregate traffic (pages viewed, rough location, device type). This
            data is not used to identify you personally.
          </p>
          <p>
            <span className="text-fg">Advertising.</span> We display ads from third-party ad
            networks. These networks may use cookies or similar technologies to serve relevant
            ads and measure performance. You can manage cookies in your browser settings.
          </p>
          <p>
            <span className="text-fg">No accounts.</span> We don&apos;t offer logins and don&apos;t
            ask for personal information. If you email us, we use your message only to reply.
          </p>
          <p>
            <span className="text-fg">Children.</span> This site is a game resource and does not
            knowingly collect personal information from children.
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
