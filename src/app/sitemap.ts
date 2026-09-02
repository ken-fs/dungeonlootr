import type { MetadataRoute } from "next";
import { SITE, NAV, LEGAL_NAV } from "@/lib/site";
import { UNITS } from "@/data/units";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const unitPaths = UNITS.map((u) => `/units/${u.slug}/`);
  const paths = [
    "/",
    ...NAV.map((n) => n.href),
    ...unitPaths,
    ...LEGAL_NAV.map((n) => n.href),
  ];
  return paths.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: p === "/codes/" ? "daily" : "weekly",
    priority:
      p === "/codes/"
        ? 1
        : p === "/"
          ? 0.9
          : p === "/tier-list/" || p === "/aspect-tier-list/"
            ? 0.8
            : 0.7,
  }));
}
