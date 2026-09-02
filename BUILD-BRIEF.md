# Dungeon Lootr 工具站 · 开工选题包

> 立项日期：2026-09-02 · 域名：dungeonlootr.net(¥75/年,.com 被开发者占)
> 游戏：Roblox 动漫跨界地牢游戏(Gojo / Sukuna / Asta 等咒术回战+黑四叶草角色)
> 套利窗口：2026-08-23 起爆发,本周 Trends=100(≈基准 SubZero 6×),供给薄 → 抢发
> 复用技能：`roblox-site-architect` + `multi-game-codes-hub` + `auto-page-sync`

## 数据依据(实测)
- Google Trends 本周(8/30–9/2):Dungeon Lootr=100，基准 Geometry Dash SubZero=16 → ≈20k/天量级
- YouTube:视频全是 5h–6天新，播放 580–135k，创作者日更 → 活跃 + 供给薄
- Google 自动补全首条 = `dungeon lootr codes`(Roblox 站永恒第一流量词)

## 站点结构

```
/                      Hub 首页:游戏简介 + 最新 codes 摘要 + 全站入口 + 嵌新视频
/codes                 【T1】codes 页(核心)每日/每次更新自动同步
/tier-list             【T1】Class Tier List
/aspect-tier-list      【T1】Aspect Tier List
/classes               全职业列表(hub)
/classes/[class]       程序化:每个职业一页
/units                 角色/单位列表(hub)
/units/[name]          程序化:how to get [Gojo/Sukuna/Asta/Azure Devil/Awakened Devil EX/...]
/aspects/[name]        程序化:每个 aspect 一页(含 sinister-trigger / unrestricted 等)
/trello                Trello 链接整理版(比官方 Trello 更好读)
/guide/beginner        新手入门指南
/value-list            (可选,后续)交易/价值榜
```

## 关键词 → 页面映射(按优先级)

### T1 · Day 1 必做(最高量、evergreen)
| 页面 | 主词 | 副词 | 意图 |
|------|------|------|------|
| /codes | dungeon lootr codes | dungeon lootr open beta codes, codes for dungeon lootr | 交易型,复访最高 |
| /tier-list | dungeon lootr tier list | class tier list, dungeon lootr tier list roblox | 信息型,权威页 |
| /aspect-tier-list | dungeon lootr aspect tier list | best aspect | 信息型 |
| / (hub) | dungeon lootr / dungeon lootr wiki | dungeon lootr roblox, dungeon lootr guide | 品牌导航 |

### T2 · Day 2-3(程序化 how-to-get,长尾多、竞争几乎为零)
一页一角色/aspect,模板统一:
- units/gojo — `dungeon lootr how to get gojo`
- units/awakened-devil-ex — `how to get awakened devil ex`
- units/sukuna, units/asta, units/azure-devil
- aspects/sinister-trigger, aspects/unrestricted
> 数据源:抓 Trello / Discord / YouTube 攻略视频(用 roblox-game-data-scraper)

### T3 · 补内容(建立主题权威)
| 页面 | 主词 |
|------|------|
| /classes/[class] + /classes | dungeon lootr classes, best class |
| /trello | dungeon lootr trello |
| /guide/beginner | dungeon lootr guide, how to play |

## 页面模板要点
- **/codes**:顶部"最新有效代码"表(code + 奖励 + 状态 active/expired + 验证日期)+ 一键复制 + "如何兑换"步骤 + 过期代码折叠区。**FAQPage schema**。
- **Tier list**:S/A/B/C/D 分级 + 每项理由一句话 + ItemList schema + 更新日期。
- **how-to-get 页**:获取步骤 + 掉落率/所在关卡 + 推荐配队 + 嵌 1 个 YouTube 攻略视频(VideoObject schema)。
- 全站:Article/BreadcrumbList schema、更新日期可见(SEO 新鲜度)、内链:hub↔tier list↔个体页三角互链。

## 更新机制(保鲜=保排名)
- codes 页:`auto-page-sync` 每日拉取 Trello/Discord → 自动部署;codes 是复访核心,必须最新。
- tier list / 新角色页:游戏每次更新后补一轮(加新角色 = 新一波 "how to get X" 搜索)。

## 变现
- Adsterra(你现有账号,亚非流量友好)+ 可选 AdSense。侧栏 300x250 + 内容内 Banner,参考 takecareofshadowmilk / dispatchgame 配置。
- Roblox 受众偏低龄,eCPM 偏低,靠量取胜。

## 风险
- Roblox 热点可能数周内回落。¥75 域名 = 保险费。**唯一真风险是慢**——7-14 天后重跑 Trends 验证是否延续。
- 若延续:补 T3 + value-list 深耕;若回落:止损,codes+tier list 两页留着吃残余长尾。
