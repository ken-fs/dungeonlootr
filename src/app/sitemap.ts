import type { MetadataRoute } from "next";
import { SITE, NAV, LEGAL_NAV } from "@/lib/site";
import { UNITS, UNITS_LAST_CHECKED } from "@/data/units";
import { CODES_LAST_CHECKED } from "@/data/codes";
import { UPDATES_LAST_CHECKED } from "@/data/updates";
import { TIERS_LAST_CHECKED } from "@/data/tiers";
import { i18nLanguages } from "@/data/i18n";

export const dynamic = "force-static";

/** Route families that exist in en + pt-BR + es (i18n Phase 1). */
const I18N_PATHS = ["/", "/codes/", "/tier-list/"];

/**
 * Per-page lastmod, taken from the data that actually drives each page.
 *
 * 为什么不能用构建时间：以前这里写的是 `new Date()`，于是 58 条 URL 的
 * lastmod 完全一样、每次都变。Google 对这种情况的处理是**直接忽略 lastmod**
 * （"if the lastmod is always the same or always the build date, Google will
 * ignore it"），于是我们丢掉了唯一那个“这页变了，来重抓”的信号。
 * 2026-10-06 实测：站上 /codes/ 8 天没被重抓、/units/founder/ 30 天没被重抓。
 *
 * 现在每个路由族取驱动它的那个数据文件的 *LAST_CHECKED，日期是真的：
 * codes 页只在码表动过时才变新，单位页只在单位数据动过时才变新。
 * 静态页（about/legal）没有数据源，统一给一个站点层面的定值而不是今天。
 */
const SITE_STATIC_LASTMOD = "2026-10-06";

function lastModFor(path: string): string {
  if (path.endsWith("/codes/")) return CODES_LAST_CHECKED;
  if (path.startsWith("/units")) return UNITS_LAST_CHECKED;
  if (path === "/updates/") return UPDATES_LAST_CHECKED;
  if (path === "/tier-list/" || path === "/aspect-tier-list/") return TIERS_LAST_CHECKED;
  return SITE_STATIC_LASTMOD;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const unitPaths = UNITS.map((u) => `/units/${u.slug}/`);
  const paths = [
    ...I18N_PATHS,
    ...NAV.map((n) => n.href).filter((h) => !I18N_PATHS.includes(h)),
    ...unitPaths,
    ...LEGAL_NAV.map((n) => n.href),
  ];

  const entries: MetadataRoute.Sitemap = paths.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: lastModFor(p),
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
        lastModified: lastModFor(p),
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
