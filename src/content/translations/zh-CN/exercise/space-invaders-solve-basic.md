---
lang: "zh-CN"
type: "exercise"
slug: "space-invaders-solve-basic"
title: "太空入侵者"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/space-invaders-solve-basic"
en_md5: "832d47151ead209ebf0f931a8472ec30"
governance_sha: "c80036b"
content_version: "4b51c41ddec4"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"describers","rows":[{"key":"move","english":"moved the laser cannon to the right","target":"将激光炮向右移动了一个位置"}]},{"name":"checks","rows":[{"key":"notShotAllAliens","english":"You didn't shoot down all the aliens.","target":"你没有击落所有外星人。"}]},{"name":"tasks","rows":[{"key":"shootTheAliens.name","english":"Shoot all the aliens","target":"击落所有外星人"},{"key":"shootTheAliens.description","english":"Move your laser cannon to the right and shoot each alien as you pass underneath it. Don't miss or move off the edge!","target":"将你的激光炮向右移动，并在经过每个外星人下方时将其击落。不要射偏或移出屏幕右边缘！"}]},{"name":"scenarios","rows":[{"key":"shootTheAliens.name","english":"Shoot the Aliens","target":"击落外星人"},{"key":"shootTheAliens.description","english":"Move right and shoot all the aliens","target":"向右移动并击落所有外星人"}]},{"name":"hints","rows":[{"key":"whatDoINeedToDo.question","english":"What do I need to do?","target":"我需要做什么？"},{"key":"whatDoINeedToDo.answer","english":"Like the maze, you need to move your character (this time a laser, not a person). But you also need to shoot from the laser! Move the laser underneath an alien then shoot. Then move again until you're under the next alien, and shoot again. Continue until you've shot down the last alien!","target":"就像迷宫练习那样，你需要移动你的角色（这次是激光炮，不是人）。但你还需从激光炮发射激光！将激光炮移动到外星人下方，然后发射。然后再移动，直到你位于下一个外星人下方，再次发射。一直重复，直到击落最后一个外星人！"},{"key":"cantWasteAmmo.question","english":"I get told I can't waste ammo.","target":"系统提示我不能浪费弹药。"},{"key":"cantWasteAmmo.answer","english":"You should only `shoot()` when you're directly below an alien. Try moving one step further (or maybe you've gone one too far?)","target":"你应该只在正对某个外星人下方时才`shoot()`。试着再移动一步（或者你可能多走了一步？）"}]},{"name":"functions","rows":[{"key":"move.description","english":"Moves the laser cannon **one position to the right**. If you move off the right edge of the screen, you lose!","target":"将激光炮**向右移动一个位置**。如果移出屏幕右边缘，你就输了！"},{"key":"move.category","english":"Movement","target":"移动"},{"key":"shoot.description","english":"Shoots the laser upwards. **Only shoot when there's an alien above you**, or you lose the game!","target":"向上发射激光。**只有当你的上方有外星人时才可发射**，否则你就会输掉游戏！"},{"key":"shoot.category","english":"Action","target":"动作"}]}]},{"heading":"Shared \"space-invaders\" messages","note":"Shared by every exercise in the space-invaders category, not just this one. A change here changes all of them.","namespaces":[{"name":"describers","rows":[{"key":"moveLeft","english":"moved the laser cannon to the left","target":null},{"key":"moveRight","english":"moved the laser cannon to the right","target":null},{"key":"shoot","english":"shot the laser upwards","target":null},{"key":"isAlienAbove","english":"determined if there was an alien above the laser cannon","target":null},{"key":"getStartingAliensInRow","english":"retrieved the starting positions of row ${arg1} of aliens","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]},{"name":"errors","rows":[{"key":"laserOverheated","english":"Oh no! Your laser cannon overheated from shooting too fast! You need to move before you can shoot a second time.","target":null},{"key":"missedShot","english":"Oh no, you missed. Wasting ammo is not allowed!","target":null},{"key":"moveOffEdge","english":"Oh no, you tried to move off the edge!","target":null},{"key":"rowNotNumber","english":"Oh no, the row input you provided is not a number.","target":null},{"key":"rowOutOfRange","english":"Oh no, you tried to access a row of aliens that doesn't exist. You asked for row {{row}}, but the rows are numbered 0 to {{max}}.","target":null},{"key":"notAllAliensDead","english":"You need to defeat all the aliens before you can celebrate!","target":null}]}]}]
---

欢迎来到你的第二个练习，太空入侵者！这是 1970 年代经典的街机游戏，也是我最早玩过的游戏之一。在接下来的几周里，你将构建一个全自动激光炮来击落外星人。但现在，你的任务只是手动击落所有外星人！

你有两个函数（英语：function）：

- `move()`（移动）将你的激光炮向右移动一个位置
- `shoot()`（发射）向上发射激光

我们已经为你放置了第一个`move()`。**看看外星人在哪里**，然后写出一系列的`move()`和`shoot()`调用来消灭它们。

小心：

- 如果上方没有外星人时开火，你会得到一个错误（英语：error）（毕竟，不允许浪费弹药！）
- 如果移出屏幕右边缘，你会得到一个错误。

玩得开心！
