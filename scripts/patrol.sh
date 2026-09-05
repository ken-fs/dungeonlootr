#!/bin/bash
# Dungeon Lootr 每日巡检：codes 变化 + 站点健康 + 写报告，需行动时弹通知
# cron: 0 11 * * * /Users/david/Desktop/david/Ship/dungeonlootr/scripts/patrol.sh
set -u
export PATH="/Users/david/Library/pnpm:/usr/local/bin:/usr/bin:/bin"
source /Users/david/.zshrc 2>/dev/null || true  # TAVILY_API_KEY

cd /Users/david/Desktop/david/Ship/dungeonlootr || exit 1
DATE=$(date +%F)
mkdir -p reports
REPORT="reports/patrol-$DATE.md"

pi -p --no-session "你是 Dungeon Lootr 站(dungeonlootr.net)的每日巡检 agent，只报告不改动。执行：
1. 用 tavily 搜 'Dungeon Lootr codes'（advanced，time_range=week，max 6 条），至少交叉 2 个聚合站（IGN/Beebom/RockPaperShotgun/GameRant/RadioTimes/ProGameGuides 中任二）
2. 读 src/data/codes.ts 对比：(a) 有没有我们没收录的新码？(b) 我们标 active 的码有没有被 2 个以上信源标 expired？特别注意 30KFAV / 5MVISITS 里程碑码是否掉落
3. curl -sL -o /dev/null -w '%{http_code}' https://dungeonlootr.net/codes/ 和 /tier-list/ 检查线上健康
4. 把结论写成中文 markdown 报告：日期、codes 状态（无变化/新码/过期变动）、信源对比表、线上健康、建议动作
铁律：绝不修改任何 src 文件；不确定就写'不确定'，禁止编造码或奖励。
最后一行必须单独输出：VERDICT: OK 或 VERDICT: ACTION_NEEDED" > "$REPORT" 2>&1

# 报告入库（失败不阻塞巡检）
git add reports/ 2>/dev/null && git commit -q -m "Patrol $DATE" 2>/dev/null && \
  git -c http.proxy=http://127.0.0.1:7897 push -q origin main 2>/dev/null || true

if grep -q "VERDICT: ACTION_NEEDED" "$REPORT"; then
  osascript -e "display notification \"Dungeon Lootr 巡检发现变动，查看 reports/patrol-$DATE.md\" with title \"🎣 巡检行动项\" sound name \"Glass\""
else
  osascript -e "display notification \"codes 无变化，站点正常\" with title \"🎣 Dungeon Lootr 巡检\""
fi
