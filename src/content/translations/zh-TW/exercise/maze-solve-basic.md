---
lang: "zh-TW"
type: "exercise"
slug: "maze-solve-basic"
title: "解開迷宮"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "62814b9"
content_version: "10dff47f77e7"
published_at: "2026-08-01"
forum_topic_id: 821
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"你還沒有走到迷宮的終點。"}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"帶角色走到迷宮的終點"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"穿過迷宮，抵達綠色的目標點"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"帶角色走到迷宮的終點"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"你的任務是帶著你的角色穿過迷宮，走到綠色的終點格。"}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"我到底要把什麼移到哪裡？"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"你要把角色從左上角帶到右下角的綠色圓圈，過程中要避開紅色斜紋的格子。"},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"我叫角色向左轉，它卻向右轉了！"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"角色是相對於它目前面對的方向來轉的。所以如果它現在面向右邊，這時向左轉，它就會變成面向上方。"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"糟糕！你差點從迷宮的邊緣掉下去了！"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"哎唷！你撞到牆壁了！"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"哎唷！你走進火裡了！"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"噁！你踩到便便了！💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"讓角色向前移動 1 格"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"讓角色向左轉 90 度"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"讓角色向右轉 90 度"}]}]}]
---

歡迎來到你的第一個練習！

這個練習的目的，是讓你熟悉這個學習環境的運作方式。你的任務是給角色下指令，解開你在左邊看到的那座迷宮。你要把角色需要照著做的指令全部寫出來，然後按下**Run Code**，讓他照著做。

你可以使用的三個指令是：

- `move()`（移動）讓角色向前走一步
- `turnLeft()`（向左轉）讓角色向左轉（相對於他目前面對的方向）
- `turnRight()`（向右轉）讓角色向右轉（相對於他目前面對的方向）

你會看到左邊已經先寫好了前三個指令。先按下**"Run Code"**按鈕，看看它們會做什麼。接著**加上更多指令**，把你的角色帶到迷宮的終點。一行寫一個指令，然後按下**Run Code**一次全部執行。

養成經常執行程式碼的習慣，是很好的做法喔！

解開迷宮之後，你就可以回到 Dashboard，開始下一個單元了。
