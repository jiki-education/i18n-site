---
lang: "zh-CN"
type: "exercise"
slug: "maze-solve-basic"
title: "走出迷宫"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "79461bb"
content_version: "03163a9c5849"
published_at: "2026-08-01"
forum_topic_id: 820
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"你没有走到迷宫的终点。"}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"把角色带到迷宫的终点"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"穿过迷宫，走到绿色的目标格"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"把角色带到迷宫的终点"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"你的任务是让角色穿过迷宫，走到绿色的终点格。"}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"我要把什么移动到哪里？"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"你要把角色从左上角移动到右下角的绿色圆圈，同时避开所有红色条纹的格子。"},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"我让它左转，角色却向右转了！"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"角色是相对于它当前面朝的方向转向的。所以如果它正面朝右，这时左转，它就会变成面朝上。"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"哎呀，你差点从迷宫的边缘掉下去！"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"哎哟，你撞到墙上了！"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"哎哟！你走进火里了！"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"好恶心！你踩到便便了！💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"把角色向前移动一格"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"把角色向左转 90 度"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"把角色向右转 90 度"}]}]}]
---

欢迎来到你的第一个练习！

这个练习的目的，是让你熟悉学习环境的用法。你的任务是给角色下指令，走出左边这个迷宫。把角色需要执行的指令全部写出来，然后点击**运行代码**，让它照着做。

你可以使用的指令有三个：

- `move()`（移动）让角色向前走一步
- `turnLeft()`（左转）让角色向左转（相对于它当前面朝的方向）
- `turnRight()`（右转）让角色向右转（相对于它当前面朝的方向）

你可以看到，左边已经写好了前三条指令。先点击**“运行代码”**按钮，看看它们的效果。然后**再添加一些指令**，把角色带到迷宫的终点。每行写一条指令，然后按**运行代码**，把它们全部运行一遍。

养成经常运行代码的习惯，对你很有帮助！

走出迷宫之后，你就可以回到学习面板，开始下一课了。
