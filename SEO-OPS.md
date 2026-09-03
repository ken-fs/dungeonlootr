# Dungeon Lootr 站 · SEO 运营日志

> 建站：2026-09-02 · 记录人：运营 + AI 协作 · 更新频率：每次运营动作后追加
> 关联文档：`BUILD-BRIEF.md`（立项选题包）

---

## 1. 站点档案

| 项 | 值 |
|---|---|
| 域名 | dungeonlootr.net（Cloudflare 托管，zone active） |
| 技术栈 | Next.js 16 `output: export` 静态导出 → Cloudflare Workers Assets |
| 构建 | `npm run build`（产物 `./out`，23 页） |
| 部署 | `npx wrangler deploy`（⚠️ 需代理：`HTTPS_PROXY=http://127.0.0.1:7897`） |
| 仓库 | github.com/ken-fs/dungeonlootr（main 分支，仓库级 git proxy 已配置） |
| 网络备忘 | CF API 走代理；访问本站直连即可（代理偶发 SSL 35 错误，切直连刷新） |

## 2. 健康分变迁（审计口径）

| 日期 | 分数 | 说明 |
|---|---|---|
| 2026-09-02 | **66/100** | 首日审计：技术 90 / 内容 35 / On-Page 70 / Schema 75 / 性能 85 / AI 就绪 55 / 图片 50 |
| 2026-09-03 | **~78/100**（重估） | 内容 35→65 · On-Page 70→85 · Schema 75→85（其余维度未复测） |

## 3. 已完成动作（按路线图顺序）

| # | 日期 | 动作 | 关键指标 | commit |
|---|---|---|---|---|
| H1 | 09-02 | GSC/Bing 提交索引（运营手动完成） | 待 GSC 出展示量验证 | - |
| - | 09-02 | 修复"Hello world"部署事故：重新 build+deploy，107 资产全量上传 | 全站 200，404 正确 | `5e3fa1b` |
| H2+L1 | 09-03 | `/codes/` 扩写 + 兑换步骤图 | 405→**985 词**；FAQ 3→8；新增 Where New Codes Drop；`redeem-steps.svg`（alt 104c）；标题 71→51c | `153d93c` |
| H3+M3 | 09-03 | 7 个单位页扩写 + BreadcrumbList | 140-181→**365-457 词/页**；Quick Facts 面板；相关单位互链（JJK/DMC 两组）；描述全部 ≤146c | `78686a7` |
| H4 | 09-03 | 剩余 4 页标题修剪（absoluteTitle 方案） | tier-list 81→46c / aspect 82→47c / updates 76→56c / units 68→48c | `0fa2d5b` |
| M1 | 09-03 | 新手指南扩写 | 257→**1325 词**，10 章节 + 5 问 FAQ | `0fa2d5b` |
| M2 | 09-03 | updates 页做实 | 166→**683 词**；证据标签时间线（API/码掉落/视频/推断）+ Roblox API 实时数据面板 + 下一里程碑码预测 | `0fa2d5b` |

### 关键数据基建（复用点）

- `buildMeta` 支持 `absoluteTitle`（跳过后缀模板，控 60c 内）
- 数据/视图分离：`codes.ts` `units.ts` `tiers.ts` `updates.ts` —— 日更只改数据文件
- ClickBytes 群组真实 ID 已经 Roblox API 验证：`110427303`（⚠️ 禁止凭记忆写外链 ID）
- 游戏实况快照（09-02 API）：13,515 在线 / 4.98M 访问 / 26,652 收藏 / 服务器上限 15 人

## 4. 待办队列

### Week3（本周收尾）
- [ ] M4 安全头（HSTS / X-Content-Type-Options / Referrer-Policy —— Workers 中间件或 Transform Rules）
- [ ] M5 `llms.txt`（AI 搜索就绪，成本 10 分钟）
- [ ] L2 内容页作者/审核署名（E-E-A-T）
- [ ] L3 `/about/` 200→400+ 词（站点故事 + 验证方法论）

### i18n 多语言（已决议 · 分阶段）
**触发条件：GSC 出现英语展示量后启动，不提前。**

- **Phase 1**：pt-BR + es × 仅 3 页（首页 + `/codes/` + `/tier-list/`）
  - 子目录 `/pt-br/` `/es/`（不用子域名，权重集中）
  - 完整 hreflang 互链 + `x-default` → en
  - codes/units 数据零改动，只译文案；翻译需校对，禁止纯机翻铺量
- **Phase 2**：pt/es 出展示量后再扩单位页；评估 id/tr/vi
- **明确不做**：8 语言铺量、Day-1 域名全站多语言（scaled content spam 画像风险）

## 5. 运营铁律（全站内容红线）

1. **不编造**：兑换码、解锁方式、外链 ID、日期 —— 无可靠来源就标"验证中"，宁可空着
2. **日期诚实**：精确到日仅限 API/截图实证，否则用"Late Aug 2026"粒度
3. **证据标签**：updates 时间线每条必须带证据类型（API 时间戳/码掉落/视频/推断）
4. **日更节奏**：codes 每日验证 → 改 `CODES_LAST_CHECKED`；游戏更新日 = 码掉落日，优先检查
5. **图片 alt**：10-125 字符，描述内容而非文件名

## 6. 监控指标（先行信号，无需重跑审计）

| 指标 | 位置 | 健康信号 | 告警信号 |
|---|---|---|---|
| 索引覆盖 | GSC Pages | 72h 内开始收录，逐日增长 | 1 周仍 0 收录 → 查 GSC 抓取异常 |
| `codes` 词排名 | GSC Queries | 2 周内进前 20 | 4 周无展示 → 内容再扩 or 查竞争 |
| 单位页展示 | GSC Pages 分组 | 每页展示量 >0 | 长期 0 → 词没量或内容同质化 |
| CTR | GSC | ≥ 同位置均值 | 低于均值 → 标题/描述 A/B |
| 下一里程碑码 | Roblox API 收藏数 | 接近 30K fav / 5M visits 时蹲守新码 | - |

## 7. 下一步触发器

```
GSC 出展示量  → 启动 i18n Phase 1（pt-BR + es × 3 页）
收藏数近 30K  → 蹲守 30KFAV 码，当天更新 codes 页
游戏 API updated 字段变化 → 检查新码 + 更新 updates 时间线 + 复验 tier
```

### 2026-09-03 日更（触发器驱动）

- **触发器命中**：游戏 API `updated` → 09-03 06:45 UTC；收藏 26,652→**33,112（破 30K）**；访问 4.98M→**5.93M（破 5M）**；在线 11,415
- codes 日更验证：交叉 IGN / GameRant / Roblox Den / PCGamesN —— **无新码**；5 个 unconfirmed 状态存争议（IGN 标 expired，GameRant/RobloxDen 标 working 且有具体奖励），维持 unconfirmed 不动
- `LIVE_STATS` + `UPDATES_LAST_CHECKED` → 09-03；时间线新增 "Server patch + two milestones crossed"（API timestamp）
- `NEXT_MILESTONES`：30KFAV / 5MVISITS 改标 **CROSSED**，进入每日蹲码窗口
- M4 ✅ `public/_headers`（HSTS / nosniff / Referrer-Policy / DENY）已上线验证
- M5 ✅ `/llms.txt` 已上线（200）
- 部署：Version ID `11f9bf8f`
- **蹲守中**：30KFAV / 5MVISITS 码随时可能掉落，每日检查 codes 源
