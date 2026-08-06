---
lang: "zh-CN"
type: "exercise"
slug: "maze-solve-repeat"
title: "循环迷宫"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-repeat"
en_md5: "8e2c5079e7cf134afee6f3c110ebb33b"
governance_sha: "c80036b"
content_version: "968d85c34b45"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"notReachedEnd","english":"You didn't reach the end of the maze.","target":"你没有到达迷宫的终点。"},{"key":"tooManyLines","english":"Your solution has too many lines of code. Look for groups of consecutive move() calls and replace each group with a repeat loop.","target":"你的解答代码行数太多。寻找连续的 move() 调用组，并用 repeat 循环替换每一组。"},{"key":"oneLineOver","english":"You're just one line too long! A repeat loop isn't always shorter: repeating something only two or three times can take more lines than writing the calls out, so look for a repeat that isn't actually saving you anything.","target":"你只多了一行代码！repeat 循环并不总是更短：重复某段代码两三次可能比直接写出调用占用更多行，所以找出那些实际上没有节省任何行数的 repeat 循环。"}]},{"name":"tasks","rows":[{"key":"solveMazeWithRepeat.name","english":"Refactor the maze solution using repeat loops","target":"使用 repeat 循环重构迷宫解法"},{"key":"solveMazeWithRepeat.description","english":"Replace consecutive `move()` calls with repeat loops to make the code shorter.","target":"用 repeat 循环替换连续的 `move()` 调用，使代码更短。"}]},{"name":"scenarios","rows":[{"key":"mazeRepeat1.name","english":"Refactor the maze solution using repeat loops","target":"使用 repeat 循环重构迷宫解法"},{"key":"mazeRepeat1.description","english":"Use repeat loops to avoid consecutive `move()` calls.","target":"使用 repeat 循环来避免连续的 `move()` 调用。"}]},{"name":"hints","rows":[{"key":"noIdea.question","english":"I have no idea what to do","target":"我不知道该做什么"},{"key":"noIdea.answer","english":"Look for groups of consecutive `move()` calls. For example, instead of:\n\n```javascript\nmove()\nmove()\nmove()\n```\n\nYou can write:\n\n```javascript\nrepeat(3) {\n  move()\n}\n```\n\nFind the groups and replace them!","target":"寻找连续的 `move()` 调用组。例如，不要这样写：\n\n```javascript\nmove()\nmove()\nmove()\n```\n\n你可以这样写：\n\n```javascript\nrepeat(3) {\n  move()\n}\n```\n\n找到这些组并替换它们！"},{"key":"tooManyLines.question","english":"Using repeats but got too many lines?","target":"使用了 repeat 循环，但代码行数还是太多？"},{"key":"tooManyLines.answer","english":"Is it always better to use a repeat? In some cases, it might be shorter to just have two moves next to each other.","target":"使用 repeat 循环总是更好吗？有些情况下，直接连续写两个 move 可能更短。"}]},{"name":"functions","rows":[{"key":"move.description","english":"Moves the character **one step forward** in the current direction. The character will only move if the target position is not blocked by a wall.","target":"将角色沿当前方向**向前移动一步**。只有当目标位置没有被墙挡住时，角色才会移动。"},{"key":"move.category","english":"Movement","target":"移动"},{"key":"turnLeft.description","english":"Turns the character **90 degrees to the left** (counterclockwise). This changes the direction the character is facing.","target":"将角色**向左旋转 90 度**（逆时针）。这会改变角色面朝的方向。"},{"key":"turnLeft.category","english":"Movement","target":"移动"},{"key":"turnRight.description","english":"Turns the character **90 degrees to the right** (clockwise). This changes the direction the character is facing.","target":"将角色**向右旋转 90 度**（顺时针）。这会改变角色面朝的方向。"},{"key":"turnRight.category","english":"Movement","target":"移动"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"哎呀，你差点从迷宫的边缘掉下去！"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"哎哟，你撞到墙上了！"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"哎哟！你走进火里了！"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"好恶心！你踩到便便了！💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"把角色向前移动一格"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"把角色向左转 90 度"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"把角色向右转 90 度"}]}]}]
---

你获得了一个可用的迷宫解法，但它很长且重复。你的任务是修改代码，让它**行数尽可能少**。

秘密在于使用`repeat`循环（英语：_loop_）来缩短代码。比如。记住，`repeat`循环的语法如下：

```javascript
repeat(3) {
  // 在这里写你想重复的代码。
}
```

你的任务是将代码缩短到最短 —— **22 行代码**。这意味着你需要考虑什么时候适合用`repeat`循环，什么时候不适合。注意，空行和只写注释的行并不计入目标行数，所以你可以放心地用空行让代码更易读！

祝你好运！
