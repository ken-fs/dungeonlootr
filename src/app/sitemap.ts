import type { MetadataRoute } from "next";
import { SITE, NAV, LEGAL_NAV } from "@/lib/site";
import { UNITS } from "@/data/units";
import { i18nLanguages } from "@/data/i18n";

export const dynamic = "force-static";

/** Route families that exist in en + pt-BR + es (i18n Phase 1). */
const I18N_PATHS = ["/", "/codes/", "/tier-list/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const unitPaths = UNITS.map((u) => `/units/${u.slug}/`);
  const paths = [
    ...I18N_PATHS,
    ...NAV.map((n) => n.href).filter((h) => !I18N_PATHS.includes(h)),
    ...unitPaths,
    ...LEGAL_NAV.map((n) => n.href),
  ];

  const entries: MetadataRoute.Sitemap = paths.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: p === "/codes/" ? ("daily" as const) : ("weekly" as const),
    priority:
      p === "/codes/"
        ? 1
        : p === "/"
          ? 0.9
          : p === "/tier-list/" || p === "/aspect-tier-list/"
            ? 0.8
            : 0.7,
    // hreflang annotations inline in the sitemap (full mesh, incl. x-default)
    ...(I18N_PATHS.includes(p)
      ? {
          alternates: {
            languages: Object.fromEntries(
              Object.entries(i18nLanguages(p)).map(([k, v]) => [k, `${SITE.url}${v}`]),
            ),
          },
        }
      : {}),
  }));

  // The localized URLs themselves (same alternates mesh on each)
  for (const p of I18N_PATHS) {
    const langs = i18nLanguages(p);
    for (const loc of ["pt-BR", "es"] as const) {
      entries.push({
        url: `${SITE.url}${langs[loc]}`,
        lastModified: now,
        changeFrequency: p === "/codes/" ? ("daily" as const) : ("weekly" as const),
        priority: p === "/codes/" ? 0.9 : p === "/" ? 0.8 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            Object.entries(langs).map(([k, v]) => [k, `${SITE.url}${v}`]),
          ),
        },
      });
    }
  }

  return entries;
}
