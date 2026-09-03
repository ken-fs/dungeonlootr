# DungeonLootr.net

Fan-made tool & wiki site for the Roblox game **Dungeon Lootr** — codes, tier lists, unit/aspect guides, and a beginner guide. Static Next.js export deployed on Cloudflare Workers.

Live: https://dungeonlootr.net

## Tech Stack

- **Next.js 16** (`output: export`, App Router) + React 19 + TypeScript
- **Tailwind CSS 4**
- **Cloudflare Workers** static assets hosting (Wrangler)

## Pages

| Route | Purpose |
|---|---|
| `/` | Hub: game intro, latest codes, site entry |
| `/codes` | Active/expired codes, one-click copy, redeem guide (FAQPage schema) |
| `/tier-list` | Class tier list |
| `/aspect-tier-list` | Aspect tier list |
| `/units` + `/units/[slug]` | How-to-get pages per unit (Gojo, Sukuna, Asta, ...) |
| `/beginner-guide` | Beginner guide |
| `/updates` | Game/site update log |
| `/about` `/contact` `/privacy` `/terms` | Standard pages |

Data lives in `src/data/*.ts` (codes, units, tiers, updates) — edit and redeploy to update content.

## Develop

```bash
npm install
npm run dev        # local dev
npm run build      # static export → ./out
npm run deploy     # build + wrangler deploy (needs HTTPS_PROXY for CF API)
```

## SEO

- Per-page metadata via `src/lib/meta.ts`, sitemap/robots via `src/app/sitemap.ts` / `robots.ts`
- JSON-LD: FAQPage, ItemList, BreadcrumbList, Article
- Freshness strategy: codes page updated on every game update

## Docs

- `BUILD-BRIEF.md` — project brief, keyword→page mapping, arbitrage rationale
- `SEO-OPS.md` — SEO ops log: health score, completed actions, monitoring

## Disclaimer

Unofficial fan site. Not affiliated with Roblox Corporation or the game developers.
