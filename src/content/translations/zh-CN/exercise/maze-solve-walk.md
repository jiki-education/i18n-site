---
lang: "zh-CN"
type: "exercise"
slug: "maze-solve-walk"
title: "散个步"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-walk"
en_md5: "5f035995ce732e0595cd4d3c95814b84"
governance_sha: "c80036b"
content_version: "66d2f8e65a30"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"walkExpectsNumber","english":"walk() expects a number of steps","target":"walk() 需要一个步数参数"}]},{"name":"describers","rows":[{"key":"walk","english":"Walk forward a given number of steps","target":"向前行走指定的步数"}]},{"name":"checks","rows":[{"key":"notReachedEnd","english":"You didn't reach the end of the maze.","target":"你没有到达迷宫的终点。"}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide person to the end of the maze","target":"将角色引导至迷宫终点"},{"key":"solveMaze.description","english":"Navigate through the maze using walk(), turnLeft(), and turnRight() to reach the green target cell.","target":"使用 walk()、turnLeft() 和 turnRight() 穿越迷宫，到达绿色目标格子。"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide person to the end of the maze","target":"将角色引导至迷宫终点"},{"key":"maze1.description","english":"Your job is to reach the goal.","target":"你的任务是到达目标。"}]},{"name":"hints","rows":[{"key":"moveNotWorking.question","english":"Why doesn't `move()` work any more?","target":"为什么 `move()` 不再起作用了？"},{"key":"moveNotWorking.answer","english":"Each exercise in Jiki has different functions you can use. In this exercise, you have the `walk(...)` function. Replace the `n` with the number of steps you want to walk. So `walk(1)` does exactly the same as `move()` did last time.","target":"Jiki 的每个练习都提供了不同的函数。在这个练习中，你可以使用 `walk(...)` 函数。把 `n` 替换成你想走的步数。所以 `walk(1)` 和之前的 `move()` 效果完全一样。"}]},{"name":"functions","rows":[{"key":"walk.description","english":"Moves the character **forward by the given number of steps** in the current direction. Each step moves one cell. The character will stop and report an error if it hits a wall.","target":"使角色在当前方向上**向前移动指定的步数**。每一步移动一个格子。如果碰到墙壁，角色会停止并报错。"},{"key":"walk.category","english":"Movement","target":"移动"},{"key":"turnLeft.description","english":"Turns the character **90 degrees to the left** (counterclockwise). This changes the direction the character is facing.","target":"将角色**向左旋转 90 度**（逆时针）。这改变了角色面朝的方向。"},{"key":"turnLeft.category","english":"Movement","target":"移动"},{"key":"turnRight.description","english":"Turns the character **90 degrees to the right** (clockwise). This changes the direction the character is facing.","target":"将角色**向右旋转 90 度**（顺时针）。这改变了角色面朝的方向。"},{"key":"turnRight.category","english":"Movement","target":"移动"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"哎呀，你差点从迷宫的边缘掉下去！"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"哎哟，你撞到墙上了！"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"哎哟！你走进火里了！"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"好恶心！你踩到便便了！💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"把角色向前移动一格"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"把角色向左转 90 度"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"把角色向右转 90 度"}]}]}]
---

我们又回到迷宫中啦！上次你在这里时，你使用了 `move()`（移动）函数，一次移动一步。这可行，但连续写很多次 `move()` 实在有点枯燥！

在这个练习中，我们用一个新的函数（英语：function）取代了 `move()`，这个函数叫做 `walk()`（行走）。这个函数接受一个数字作为输入（英语：input），并向前移动相应的步数。例如，`walk(3)` 向前移动 3 步，而 `walk(1)` 仅向前移动 1 步。

在之后的所有练习中，你都会看到类似下方的“函数”部分，方便你清楚了解有哪些函数可用以及它们如何工作。

使用 `walk()`、`turnLeft()`（左转）和 `turnRight()`（右转）在迷宫中穿行，到达绿色的目标格子。
