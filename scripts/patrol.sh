#!/bin/bash
# Roblox 工具站群每日巡检：codes 变化 + 站点健康 + 写报告，需行动时弹通知
# 覆盖：dungeonlootr.net / ghostdriver.net / animeexpeditions.dev
# cron: 0 11 * * * /Users/david/Desktop/david/Ship/dungeonlootr/scripts/patrol.sh
set -u
export PATH="/Users/david/Library/pnpm:/usr/local/bin:/usr/bin:/bin"
source /Users/david/.zshrc 2>/dev/null || true  # TAVILY_API_KEY

DATE=$(date +%F)
SHIP=/Users/david/Desktop/david/Ship
REPOS=(dungeonlootr ghostdriver animeexpeditions)

pi -p --no-session "你是 Roblox 游戏工具站群的每日巡检 agent，只报告不改动。巡检 3 个站（每站 ≥2 个聚合站交叉验证，从 IGN/Beebom/RockPaperShotgun/GameRant/RadioTimes/Dexerto/ProGameGuides/Joytify 中选）：

【1. Dungeon Lootr】码表 $SHIP/dungeonlootr/src/data/codes.ts；线上 https://dungeonlootr.net/codes/
- tavily 搜 'Dungeon Lootr codes'（advanced，time_range=week，max 6）
- 对比：有无未收录新码？我方 active 码有无被 ≥2 源标 expired？重点盯 30KFAV / 5MVISITS 里程碑码

【2. Ghost Driver】码表 $SHIP/ghostdriver/src/data/codes.ts；线上 https://ghostdriver.net/codes/
- tavily 搜 'Ghost Driver codes Roblox'（advanced，time_range=week，max 6）
- 对比：新码？重点盯 THANKSFOR400K（游戏 likes 已破 40 万）；THANKSFOR350K 是否仍 active

【3. Anime Expeditions】码表 $SHIP/animeexpeditions/src/data/codes.ts；线上 https://animeexpeditions.dev/（codes 在首页，无 /codes/ 路径）
- tavily 搜 'Anime Expeditions codes'（advanced，time_range=week，max 6）
- 我方当前 0 个 active 码（Update2/EclipseSoon 已过期），任何新码都是 ACTION_NEEDED；重点盯 Eclipse 更新批次码、800M 访问里程碑码

每站用 curl -sL -o /dev/null -w '%{http_code}' --max-time 20 检查上述线上 URL。

然后为每站各写一份中文 markdown 报告到对应 repo：$SHIP/<repo>/reports/patrol-$DATE.md
报告结构：# 站名 每日巡检报告 / 日期 / 一、Codes 状态 / 二、信源对比表 / 三、线上健康 / 四、建议动作 / 最后一行单独写 VERDICT: OK 或 VERDICT: ACTION_NEEDED（有实质变动=ACTION_NEEDED）。
铁律：绝不修改任何 src 文件；不确定就写'不确定'，禁止编造码或奖励。三个 reports/ 目录若不存在用 mkdir -p 创建。" \
  > /tmp/patrol-agent-$DATE.log 2>&1

# 报告入库（每个 repo 单独提交；失败不阻塞）
for repo in "${REPOS[@]}"; do
  cd "$SHIP/$repo" || continue
  git add reports/ 2>/dev/null && \
    git -c user.name="ken lee" -c user.email="david@MacBook-Pro.local" \
      commit -q -m "Patrol $DATE" 2>/dev/null && \
    git -c http.proxy=http://127.0.0.1:7897 push -q origin main 2>/dev/null || true
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
