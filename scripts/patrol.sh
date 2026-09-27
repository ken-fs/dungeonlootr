#!/bin/bash
# 游戏工具站群每日巡检：codes/补丁变化 + 站点健康 + 写报告，需行动时弹通知
# 覆盖：dungeonlootr.net / ghostdriver.net / animeexpeditions.dev / howtofishthegame.com / commandanarmy.cc
# 注：AnvilWiki 站的技术健康（孤岛页/schema 长度/sitemap 域名/部署标记/游戏新 badge）
#     由 scripts/site-hygiene.mjs 每天 10:00 独立跑（确定性、零 AI），不在本脚本内重复。
# cron: 0 11 * * * /Users/david/Desktop/david/Ship/dungeonlootr/scripts/patrol.sh
set -u
export PATH="/Users/david/Library/pnpm:/usr/local/bin:/usr/bin:/bin"
source /Users/david/.zshrc 2>/dev/null || true  # TAVILY_API_KEY

DATE=$(date +%F)
SHIP=/Users/david/Desktop/david/Ship
REPOS=(dungeonlootr ghostdriver animeexpeditions howtofish commandanarmy)

# 搜抓通道要走代理（本机直连 Google/DDG 不稳），但节点坏时不能把整次巡检拖死：
# 先探一下，通了才导出。AGENTS「本机代理排查」一节讲过节点级坏死。
if curl -s --max-time 6 -o /dev/null -x http://127.0.0.1:7897 https://example.com; then
  export NODE_USE_ENV_PROXY=1 https_proxy=http://127.0.0.1:7897 http_proxy=http://127.0.0.1:7897
else
  echo "WARN 代理 7897 不通，本次不设代理（直抓信源可能失败）"
fi

# 幂等防护：今日已出报告则直接退出（cron/launchd 可能多次触发）
if [ -f "$SHIP/dungeonlootr/reports/patrol-$DATE.md" ]; then
  exit 0
fi

# 并发锁：防止 cron 与 launchd 同时触发导致重复巡检
LOCK=/tmp/patrol.lock
mkdir "$LOCK" 2>/dev/null || exit 0
trap 'rmdir "$LOCK" 2>/dev/null' EXIT

pi -p --no-session "你是游戏工具站群的每日巡检 agent，只报告不改动。巡检 4 个站（Roblox 三站每站 ≥2 个聚合站交叉验证，从 Beebom/RadioTimes/Destructoid/UrGameTips/ProGameGuides/TryHardGuides/Twinfinite/GameRant/IGN 里挑能抓到的）：

【搜索通道 —— 按优先级，禁止直接抓搜索页】
状态：Tavily 免费档（1000 credits/月）已用尽，**默认不要用它**。依次尝试：
1) node $SHIP/scripts/serp.mjs '<查询>' —— 自动降级 Serper→Tavily→DDG，末尾报实际用的通道
2) node $SHIP/scripts/serp-ddg.mjs '<查询>' —— 零 key 兜底（内置 20s 限频，批量查询时用这个）
3) **直抓固定信源正文（首选，最快最准）**：curl -sL --max-time 25 -A 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126 Safari/537.36' 抓 <站点>/<game>-codes/ 这类稳定 URL；Beebom / RadioTimes / Destructoid / UrGameTips 实测可抓，GameRant / Sportskeeda 常 404/403
4) **要 in-game 实证时用创作者视频**：yt-dlp 'ytsearch5:<game> codes' 找视频 → --skip-download --write-auto-subs --sub-langs 'en.*' 读字幕；关键结论可下小片段抓帧直接看游戏兑换框（2026-09-27 就是这么把 TORUS vs TAURUS 定案的 —— 比任何 SERP 都硬，聚合站会给错拼写）
❌ 禁止 curl google.com/search、bing.com/search、html.duckduckgo.com —— 分别返回 JS 空壳 / 错配兜底页 / 202 CAPTCHA；拿整页关键词做判断会假阳性

【1. Dungeon Lootr】（码表 $SHIP/dungeonlootr/src/data/codes.ts；线上 https://dungeonlootr.net/codes/）
- 抓 Beebom + RadioTimes + Destructoid 的 dungeon-lootr-codes 页正文（≥2 源）交叉验证；抓不到再走 serp.mjs
- 对比：有无未收录新码？我方 active 码有无被 ≥2 源标 expired？重点盯 30KFAV / 5MVISITS / 20KCCU 里程碑码
- 【新单位情报】查 'Dungeon Lootr new class' / 'Dungeon Lootr Kage Wanderer Shinobi'（serp.mjs + yt-dlp 找创作者视频）：有无新职业浮出？Kage/Wanderer/Shinobi 解锁方法有无被公开？发现即 ACTION_NEEDED（本站增长引擎是 how-to-get 单位页，shadow-vagrant 单页占全站 31% 点击，新单位当日发页是最高杠杆）

【2. Ghost Driver】（码表 $SHIP/ghostdriver/src/data/codes.ts；线上 https://ghostdriver.net/codes/）
- 抓 Beebom + RadioTimes（+ TryHardGuides）的 ghost-driver-codes 页正文交叉验证
- 对比：新码？重点盯 THANKSFOR400K（游戏 likes 已破 40 万）；THANKSFOR350K 是否仍 active

【3. Anime Expeditions】（码表 $SHIP/animeexpeditions/src/data/codes.ts；线上 https://animeexpeditions.dev/，codes 在首页、无 /codes/ 路径）
- 抓 Beebom + UrGameTips + Destructoid 的 anime-expeditions-codes 页正文交叉验证
- 我方当前 4 个 active 码（Update 3 批次：Bossrush/Hellfire/Update3/RDC26）。任何新码或 active 码被 ≥2 源标 expired 都是 ACTION_NEEDED；重点盯 800M 访问里程碑码、下一更新批次（该游戏轮换极快）

【4. How to Fish】（Steam 游戏，无 codes，盯补丁）版本数据 $SHIP/howtofish/src/data/game.ts（GAME_VERSION，当前 1.0.12）；线上 https://howtofishthegame.com/updates/
- curl Steam 新闻 API（无需 key）：'https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4001890&count=5&maxlength=2000&feeds=steam_community_announcements'
- 对比：出现版本号 > GAME_VERSION 的新 PATCH = ACTION_NEEDED；公告提到新内容（新鱼/岛/成就/content update）也 = ACTION_NEEDED。官方已预告本周开始做内容更新
- curl 评测数：'https://store.steampowered.com/appreviews/4001890?json=1&language=all&purchase_type=all&num_per_page=0'，记录 total_reviews 与好评率变化（上次 57,158 / 95%）

【5. Command An Army】（AnvilWiki 站，有 codes + 有 meta）码表 $SHIP/commandanarmy/src/content/wiki/en/codes/all-codes.mdx；线上 https://commandanarmy.cc/codes/all-codes/
- 抓 RadioTimes + PocketTactics 的 command-an-army-codes 页正文交叉验证（这两家常更新）
- 对比：有无未收录新码？我方 active 码有无被 ≥2 源标 expired？
- 【meta 情报】用 serp.mjs 查 'Command An Army tier list' / 'new unit'：出现新单位 / 补丁削弱加强 = ACTION_NEEDED（本站增长引擎是 units/* 深度页 + guides/best-units-tier-list，meta 一变就该重写）。tier-list 直抓常 403，看搜索结果的标题/摘要判断即可
- 【游戏新内容】确定性检查已由 scripts/site-hygiene.mjs 覆盖（badge API 数增长），这里只看需要人判断的 meta 变化

每站用 curl -sL -o /dev/null -w '%{http_code}' --max-time 20 检查上述线上 URL。

然后为每站各写一份中文 markdown 报告到对应 repo：$SHIP/<repo>/reports/patrol-$DATE.md
报告结构：# 站名 每日巡检报告 / 日期 / 一、Codes（或补丁）状态 / 二、信源对比表 / 三、线上健康 / 四、建议动作 / 最后一行单独写 VERDICT: OK 或 VERDICT: ACTION_NEEDED（有实质变动=ACTION_NEEDED）。
信源对比表里要注明每个源的获取方式（直抓 / serp.mjs / 创作者视频）和日期，方便复核。
Command An Army 报告额外加一节「五、meta 变化」记录单位/补丁变动。
铁律：绝不修改任何 src 文件；不确定就写'不确定'，禁止编造码、奖励或补丁内容；搜索只用上面列的通道，Tavily 默认不碰（免费额度已用尽）。各 reports/ 目录若不存在用 mkdir -p 创建。" \
  > /tmp/patrol-agent-$DATE.log 2>&1

# 报告入库（每个 repo 单独提交；失败不阻塞）
#
# ⚠️ AnvilWiki 站的 .gitignore 明确排除 reports/（模板注释：「daily ops reports
# (local automation, never committed)」）—— 这是有意设计：报告入库会每天触发一次
# Cloudflare 构建，纯噪音。这类站的报告只留本地 reports/ 供人工回看，下面的
# git add 自然为空、commit 失败、push 跳过，整条链路静默降级，不会报错。
for repo in "${REPOS[@]}"; do
  cd "$SHIP/$repo" || continue
  git add reports/ 2>/dev/null && \
    git -c user.name="ken lee" -c user.email="david@MacBook-Pro.local" \
      commit -q -m "Patrol $DATE" 2>/dev/null || true
  # 推送三级兜底：直连 → 代理 → 代理 rebase 重试；失败必留痕（不再静默吞掉）
  if git log origin/main..main --oneline | grep -q .; then
    GIT_TERMINAL_PROMPT=0 git push -q origin main 2>/dev/null \
      || GIT_TERMINAL_PROMPT=0 git -c http.proxy=http://127.0.0.1:7897 push -q origin main 2>/dev/null \
      || { git -c http.proxy=http://127.0.0.1:7897 pull -q --rebase origin main 2>/dev/null && GIT_TERMINAL_PROMPT=0 git push -q origin main 2>/dev/null; } \
      || echo "PATROL_PUSH_FAILED $repo" >> /tmp/patrol-agent-$DATE.log
  fi
done

# 汇总通知
ACTION=""
for repo in "${REPOS[@]}"; do
  if grep -q "VERDICT: ACTION_NEEDED" "$SHIP/$repo/reports/patrol-$DATE.md" 2>/dev/null; then
    ACTION="$ACTION $repo"
  fi
done

if [ -n "$ACTION" ]; then
  osascript -e "display notification \"有变动：$ACTION — 查看各 repo reports/patrol-$DATE.md\" with title \"🎣 巡检行动项\" sound name \"Glass\""
else
  osascript -e "display notification \"三站 codes 无变化，站点正常\" with title \"🎣 站群巡检\""
fi
