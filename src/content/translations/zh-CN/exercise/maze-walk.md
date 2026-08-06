---
lang: "zh-CN"
type: "exercise"
slug: "maze-walk"
title: "学走路"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-walk"
en_md5: "a15372817fd885ccc45a2fe27624bbf6"
governance_sha: "c80036b"
content_version: "9b8a6543ad8e"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"notReachedEnd","english":"You didn't reach the end of the maze.","target":"你没能到达迷宫的终点。"},{"key":"walkNotDefined","english":"You should define a <code>walk</code> function that takes a number of steps and moves forward that many times.","target":"你应该定义一个接收步数作为输入并向前移动相应次数的 <code>walk</code> 函数。"}]},{"name":"tasks","rows":[{"key":"writeWalk.name","english":"Write a walk function","target":"编写 walk 函数"},{"key":"writeWalk.description","english":"Define a function called walk that takes a number of steps as its input and moves forward that many times.","target":"定义一个名为 walk 的函数，它接收一个步数作为输入，并向前移动相应次数。"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Navigate the maze","target":"在迷宫中导航"},{"key":"maze1.description","english":"Walk 3, turn left, walk 2, turn right, walk 4 to reach the target.","target":"向前走 3 步，左转，向前走 2 步，右转，向前走 4 步，到达目标。"}]},{"name":"hints","rows":[{"key":"howToMoveForward.question","english":"How do I move forward?","target":"如何向前移动？"},{"key":"howToMoveForward.answer","english":"Use the `move()` function.","target":"使用 `move()` 函数。"},{"key":"howToMoveSpecificTimes.question","english":"How do I move forward a specific number of times?","target":"如何向前移动指定的次数？"},{"key":"howToMoveSpecificTimes.answer","english":"You have solved other exercises where you had to do something a specific number of times (think back to making the golf ball roll a specific distance). Use the same ideas here.","target":"你之前解决过一些需要重复特定次数的练习（比如让高尔夫球滚动特定距离），这里使用相同的思路即可。"}]},{"name":"functions","rows":[{"key":"move.description","english":"Moves the character **one step forward** in the current direction. The character will only move if the target position is not blocked by a wall.","target":"将角色沿当前方向**向前移动一步**。只有当目标位置没有被墙壁阻挡时，角色才会移动。"},{"key":"move.category","english":"Movement","target":"移动"},{"key":"turnLeft.description","english":"Turns the character **90 degrees to the left** (counterclockwise). This changes the direction the character is facing.","target":"将角色**向左转 90 度**（逆时针）。这会改变角色面朝的方向。"},{"key":"turnLeft.category","english":"Movement","target":"移动"},{"key":"turnRight.description","english":"Turns the character **90 degrees to the right** (clockwise). This changes the direction the character is facing.","target":"将角色**向右转 90 度**（顺时针）。这会改变角色面朝的方向。"},{"key":"turnRight.category","english":"Movement","target":"移动"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"哎呀，你差点从迷宫的边缘掉下去！"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"哎哟，你撞到墙上了！"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"哎哟！你走进火里了！"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"好恶心！你踩到便便了！💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"把角色向前移动一格"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"把角色向左转 90 度"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"把角色向右转 90 度"}]}]}]
---

我们回到迷宫了，暂时从自动求解中退一步。之前手动解迷宫时，如果要向前走 3 步，你得写 3 次 `move()`（移动）。

在这个练习里，你要创建新函数 `walk(numSteps)`（走），它接收一个步数作为输入，然后向前移动那么多次。

所以使用 `walk(5)` 应该意味着你执行了 5 次 `move()`。

你的函数下面有一些解决迷宫的示例代码。写完函数之后，下面的代码会配合 `turnLeft()`（左转）和 `turnRight()`（右转），在迷宫里导航。

祝你好运！
