---
lang: "zh-CN"
type: "exercise"
slug: "maze-automated-solve"
title: "用程序自动解迷宫"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-automated-solve"
en_md5: "7ed01d8967f812a99b5171ddcf729ee7"
governance_sha: "c80036b"
content_version: "9f7850387cab"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"describers","rows":[{"key":"canMove","english":"Check if the character can move forward","target":"检查角色能否前进"},{"key":"canTurnLeft","english":"Check if there is a path to the character's left","target":"检查角色左侧是否有通路"},{"key":"canTurnRight","english":"Check if there is a path to the character's right","target":"检查角色右侧是否有通路"}]},{"name":"checks","rows":[{"key":"reachedEnd","english":"You didn't reach the end of the maze.","target":"你没有到达迷宫终点。"},{"key":"extraTurn","english":"You seem to have done an extra unnecessary turn at the end.","target":"你似乎在终点处做了一个多余的转向。"}]},{"name":"tasks","rows":[{"key":"straightPath.name","english":"A straight path","target":"直路"},{"key":"straightPath.description","english":"Move forward to the end of the maze.","target":"向前走到迷宫终点。"},{"key":"turnLeft.name","english":"Turn left if you can","target":"如果可以，就左转"},{"key":"turnLeft.description","english":"If there's a path to the left, take it!","target":"如果左边有路，就走那边！"},{"key":"turnRight.name","english":"Turn right if you can't move straight or left","target":"无法直行或左转时右转"},{"key":"turnRight.description","english":"If there's not a path to the left or straight ahead, take the path to the right.","target":"如果左边和前面都没有路，就向右走。"},{"key":"turnAround.name","english":"Turn around if needed","target":"必要时掉头"},{"key":"turnAround.description","english":"Handle dead ends by turning around. If you can't go left, straight, or right, turn around and move forward.","target":"通过掉头处理死路。如果无法左转、前进或右转，则掉头然后前进。"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide person to the end of the maze","target":"引导角色走到迷宫终点"},{"key":"maze1.description","english":"A straight path down","target":"一条向下的直路"},{"key":"leftTurn.name","english":"A single left turn","target":"一个简单的左转"},{"key":"leftTurn.description","english":"Navigate a left turn","target":"通过一个左转弯"},{"key":"rightTurn.name","english":"A single right turn","target":"一个简单的右转"},{"key":"rightTurn.description","english":"Navigate a right turn","target":"通过一个右转弯"},{"key":"forks.name","english":"Choose left if you can, otherwise choose right","target":"如果可以，选择左边；否则选择右边"},{"key":"forks.description","english":"A maze with forks that tests left-priority","target":"带有分叉路口的迷宫，测试左转优先"},{"key":"turnAround.name","english":"Turn around at a dead end","target":"在死路掉头"},{"key":"turnAround.description","english":"A maze that requires turning around","target":"一个需要掉头的迷宫"},{"key":"forks2.name","english":"Complex maze with forks and dead ends","target":"带有分叉和死路的复杂迷宫"},{"key":"forks2.description","english":"A complex maze testing the full algorithm","target":"一个测试完整算法的复杂迷宫"}]},{"name":"hints","rows":[{"key":"solveEachMaze.question","english":"Do I have to solve each maze separately?","target":"我需要分别解每个迷宫吗？"},{"key":"solveEachMaze.answer","english":"No. You write one algorithm that works for any maze, and the same code runs on every scenario.","target":"不需要。你写一个适用于任何迷宫的算法，相同的代码会在每个场景中运行。"},{"key":"runEveryStep.question","english":"How do I get my code to run for every step of the maze?","target":"如何让我的代码在迷宫的每一步都运行？"},{"key":"runEveryStep.answer","english":"Wrap your logic in the repeat loop. It runs your code over and over until you reach the end, so you only need to describe what to do for a single step.","target":"将你的逻辑放在 repeat 循环中。它会重复运行你的代码，直到你到达终点，所以你只需要描述每一步要做什么。"},{"key":"oneCheckPerStep.question","english":"How do I make sure only one of my checks happens each step?","target":"如何确保每一步只执行一个检查？"},{"key":"oneCheckPerStep.answer","english":"Use a single `if` / `else if` / `else` chain rather than several separate `if`s. That way exactly one branch runs each time through the loop.","target":"使用一个 `if` / `else if` / `else` 链，而不是多个独立的 `if`。这样每次循环只会执行一个分支。"},{"key":"stuckAfterTurn.question","english":"I turn, but the character gets stuck in the same spot.","target":"我转了弯，但角色还卡在同一个地方。"},{"key":"stuckAfterTurn.answer","english":"Turning only changes the direction the character faces, it doesn't take a step. After turning, you still need to `move()`.","target":"转弯只会改变角色的朝向，并不会移动。转弯后，你还需要 `move()` 前进。"},{"key":"turnAroundDeadEnd.question","english":"How do I turn around at a dead end?","target":"在死路怎么掉头？"},{"key":"turnAroundDeadEnd.answer","english":"There's no turn-around function. Turning the same way twice (two left turns, or two right turns) leaves the character facing back the way it came.","target":"没有掉头函数。朝同一个方向转两次（两次左转，或两次右转）会让角色朝向它来的方向。"}]},{"name":"functions","rows":[{"key":"move.description","english":"Moves the character **one step forward** in the current direction. The character will only move if the target position is not blocked by a wall.","target":"让角色沿当前方向**向前移动一步**。只有当目标位置没有墙壁阻挡时，角色才会移动。"},{"key":"move.category","english":"Movement","target":"移动"},{"key":"turnLeft.description","english":"Turns the character **90 degrees to the left** (counterclockwise). This changes the direction the character is facing.","target":"让角色**向左转 90 度**（逆时针）。这会改变角色的朝向。"},{"key":"turnLeft.category","english":"Movement","target":"移动"},{"key":"turnRight.description","english":"Turns the character **90 degrees to the right** (clockwise). This changes the direction the character is facing.","target":"让角色**向右转 90 度**（顺时针）。这会改变角色的朝向。"},{"key":"turnRight.category","english":"Movement","target":"移动"},{"key":"canMove.description","english":"Returns **true** if the space ahead of the character is not a wall, **false** otherwise.","target":"如果角色前方空间不是墙壁，返回 **true**，否则返回 **false**。"},{"key":"canMove.category","english":"Sensing","target":"感知"},{"key":"canTurnLeft.description","english":"Returns **true** if the space to the character's left is not a wall, **false** otherwise.","target":"如果角色左侧空间不是墙壁，返回 **true**，否则返回 **false**。"},{"key":"canTurnLeft.category","english":"Sensing","target":"感知"},{"key":"canTurnRight.description","english":"Returns **true** if the space to the character's right is not a wall, **false** otherwise.","target":"如果角色右侧空间不是墙壁，返回 **true**，否则返回 **false**。"},{"key":"canTurnRight.category","english":"Sensing","target":"感知"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"哎呀，你差点从迷宫的边缘掉下去！"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"哎哟，你撞到墙上了！"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"哎哟！你走进火里了！"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"好恶心！你踩到便便了！💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"把角色向前移动一格"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"把角色向左转 90 度"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"把角色向右转 90 度"}]}]}]
---

在第一个迷宫练习中，你手动控制角色移动。现在我们要更进一步——用代码来自动解任何迷宫！

为了做到这一点，你有了三个新函数：

- `canTurnLeft()`（英语：检查“能否左转”）：如果角色左侧不是墙壁，返回 `true`。
- `canTurnRight()`（英语：检查“能否右转”）：如果角色右侧不是墙壁，返回 `true`。
- `canMove()`（英语：检查“能否前进”）：如果角色前方不是墙壁，返回 `true`。

把这些函数跟你之前用过的 `move()`（英语：前进）、`turnLeft()`（英语：左转）和 `turnRight()`（英语：右转）结合起来，就可以写出一个算法来解**任何**迷宫。算法听起来很专业，其实就是“做一件事的方法”，就像公式或菜谱一样。

往下翻，我会直接告诉你现成的算法。但我想让你先把它当成一个小逻辑谜题，自己试着推理一下。如果你知道左边、右边或前方能不能走，那给你任何一个迷宫，你该怎么走通它？

想出来了，或者想放弃了，再往下翻，看答案和你要写的代码。

<hr style="border-top: 1px solid var(--color-gray-200); margin:40px 0"/>

### 算法

好吧——这确实有点难，你可能有一些想法，但没完全拼出来。以下是你要遵循的步骤：

- 如果能左转，就左转然后前进
- 否则，如果能前进，就前进
- 否则，如果能右转，就右转然后前进
- 否则就掉头

按照这个步骤，你就能走通任何迷宫了！

把这些指令翻译成代码吧。玩得开心！
