---
lang: "zh-CN"
type: "exercise"
slug: "space-invaders-nested-repeat"
title: "太空侵略者：嵌套 Repeat"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/space-invaders-nested-repeat"
en_md5: "c0d87f1fa433152d98bce923dbfa1f52"
governance_sha: "c80036b"
content_version: "46100b84f287"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"describers","rows":[{"key":"move","english":"moved the laser cannon to the right","target":"激光炮向右移动了"}]},{"name":"checks","rows":[{"key":"notShotAllAliens","english":"You didn't shoot down all the aliens.","target":"你没有消灭所有外星人。"},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try using a repeat loop inside another repeat loop to make it shorter!","target":"你的解答代码行数太多。试试用嵌套的 repeat 循环来缩短代码吧！"}]},{"name":"tasks","rows":[{"key":"nestedRepeatShoot.name","english":"Use nested repeat loops to shoot all the aliens","target":"使用嵌套的 repeat 循环消灭所有外星人"},{"key":"nestedRepeatShoot.description","english":"Find the pattern in the alien positions and use a repeat loop inside another repeat loop to destroy them all in 7 lines of code or fewer.","target":"找出外星人位置的规律，然后使用嵌套的 repeat 循环，在 7 行代码或更少内消灭所有外星人。"}]},{"name":"scenarios","rows":[{"key":"nestedRepeatShoot.name","english":"Nested Repeat and Shoot","target":"嵌套 Repeat 和射击"},{"key":"nestedRepeatShoot.description","english":"Use nested repeat loops to shoot all the aliens","target":"使用嵌套的 repeat 循环消灭所有外星人"}]},{"name":"hints","rows":[{"key":"cantGetTo7Lines.question","english":"I can't get to 7 lines of code.","target":"我没办法把代码写到 7 行以内。"},{"key":"cantGetTo7Lines.answer","english":"Think about this level as two blocks of things that need to happen.\n\n- The first block is the inner one, where we shoot 4 times - make sure that is three lines long.\n- The outer block is the inner block with some movement either side. That outer block needs to be repeated a few times too.\n\nIf you structure your code in this way, it should naturally end up at 7 lines of code.","target":"将这个关卡看作由两大块操作组成。\n\n- 第一块是内层操作，我们射击 4 次——确保这部分只有三行代码。\n- 外层操作是在内层操作的前后各加一些移动操作。这个外层操作也需要重复几次。\n\n如果你这样组织代码，最终自然就是 7 行代码。"}]},{"name":"functions","rows":[{"key":"move.description","english":"Moves the laser cannon **one position to the right**. If you move off the right edge of the screen, you lose!","target":"将激光炮**向右移动一格**。如果移出屏幕右边缘，你就输了！"},{"key":"move.category","english":"Movement","target":"移动"},{"key":"shoot.description","english":"Shoots the laser upwards. **Only shoot when there's an alien above you**, or you lose the game!","target":"向上发射激光。**只有上方有外星人时才可射击**，否则就会输掉游戏！"},{"key":"shoot.category","english":"Action","target":"动作"}]}]},{"heading":"Shared \"space-invaders\" messages","note":"Shared by every exercise in the space-invaders category, not just this one. A change here changes all of them.","namespaces":[{"name":"describers","rows":[{"key":"moveLeft","english":"moved the laser cannon to the left","target":null},{"key":"moveRight","english":"moved the laser cannon to the right","target":null},{"key":"shoot","english":"shot the laser upwards","target":null},{"key":"isAlienAbove","english":"determined if there was an alien above the laser cannon","target":null},{"key":"getStartingAliensInRow","english":"retrieved the starting positions of row ${arg1} of aliens","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]},{"name":"errors","rows":[{"key":"laserOverheated","english":"Oh no! Your laser cannon overheated from shooting too fast! You need to move before you can shoot a second time.","target":null},{"key":"missedShot","english":"Oh no, you missed. Wasting ammo is not allowed!","target":null},{"key":"moveOffEdge","english":"Oh no, you tried to move off the edge!","target":null},{"key":"rowNotNumber","english":"Oh no, the row input you provided is not a number.","target":null},{"key":"rowOutOfRange","english":"Oh no, you tried to access a row of aliens that doesn't exist. You asked for row {{row}}, but the rows are numbered 0 to {{max}}.","target":null},{"key":"notAllAliensDead","english":"You need to defeat all the aliens before you can celebrate!","target":null}]}]}]
---

更多的外星人出现了，现在它们排成了**四行**！

和之前一样，你拥有同样的两个函数：

- `move()`（移动）将你的激光炮向右移动一个位置。
- `shoot()`（射击）向上发射激光。

不同之处在于你需要每行射击多个外星人。

你的解答必须是**7行代码或更少**。祝你好运！
