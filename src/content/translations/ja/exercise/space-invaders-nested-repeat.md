---
lang: "ja"
type: "exercise"
slug: "space-invaders-nested-repeat"
title: "スペースインベーダー：入れ子のrepeat"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/space-invaders-nested-repeat"
en_md5: "c0d87f1fa433152d98bce923dbfa1f52"
governance_sha: "c80036b"
content_version: "086ca0d90972"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"describers","rows":[{"key":"move","english":"moved the laser cannon to the right","target":null}]},{"name":"checks","rows":[{"key":"notShotAllAliens","english":"You didn't shoot down all the aliens.","target":null},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try using a repeat loop inside another repeat loop to make it shorter!","target":null}]},{"name":"tasks","rows":[{"key":"nestedRepeatShoot.name","english":"Use nested repeat loops to shoot all the aliens","target":null},{"key":"nestedRepeatShoot.description","english":"Find the pattern in the alien positions and use a repeat loop inside another repeat loop to destroy them all in 7 lines of code or fewer.","target":null}]},{"name":"scenarios","rows":[{"key":"nestedRepeatShoot.name","english":"Nested Repeat and Shoot","target":null},{"key":"nestedRepeatShoot.description","english":"Use nested repeat loops to shoot all the aliens","target":null}]},{"name":"hints","rows":[{"key":"cantGetTo7Lines.question","english":"I can't get to 7 lines of code.","target":null},{"key":"cantGetTo7Lines.answer","english":"Think about this level as two blocks of things that need to happen.\n\n- The first block is the inner one, where we shoot 4 times - make sure that is three lines long.\n- The outer block is the inner block with some movement either side. That outer block needs to be repeated a few times too.\n\nIf you structure your code in this way, it should naturally end up at 7 lines of code.","target":null}]},{"name":"functions","rows":[{"key":"move.description","english":"Moves the laser cannon **one position to the right**. If you move off the right edge of the screen, you lose!","target":null},{"key":"move.category","english":"Movement","target":null},{"key":"shoot.description","english":"Shoots the laser upwards. **Only shoot when there's an alien above you**, or you lose the game!","target":null},{"key":"shoot.category","english":"Action","target":null}]}]},{"heading":"Shared \"space-invaders\" messages","note":"Shared by every exercise in the space-invaders category, not just this one. A change here changes all of them.","namespaces":[{"name":"describers","rows":[{"key":"moveLeft","english":"moved the laser cannon to the left","target":null},{"key":"moveRight","english":"moved the laser cannon to the right","target":null},{"key":"shoot","english":"shot the laser upwards","target":null},{"key":"isAlienAbove","english":"determined if there was an alien above the laser cannon","target":null},{"key":"getStartingAliensInRow","english":"retrieved the starting positions of row ${arg1} of aliens","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]},{"name":"errors","rows":[{"key":"laserOverheated","english":"Oh no! Your laser cannon overheated from shooting too fast! You need to move before you can shoot a second time.","target":null},{"key":"missedShot","english":"Oh no, you missed. Wasting ammo is not allowed!","target":null},{"key":"moveOffEdge","english":"Oh no, you tried to move off the edge!","target":null},{"key":"rowNotNumber","english":"Oh no, the row input you provided is not a number.","target":null},{"key":"rowOutOfRange","english":"Oh no, you tried to access a row of aliens that doesn't exist. You asked for row {{row}}, but the rows are numbered 0 to {{max}}.","target":null},{"key":"notAllAliensDead","english":"You need to defeat all the aliens before you can celebrate!","target":null}]}]}]
---

さらに多くのエイリアンが現れ、今度は**4列**に並んでいます！

前回と同じ2つの関数が使えます：

- `move()`（自分のレーザー砲を右に1マス移動）は、自分のレーザー砲を右に1マス移動します。
- `shoot()`（レーザーを上方向に発射）は、レーザーを上に向けて発射します。

違いは、各行に複数のエイリアンがいるため、それぞれを撃ち落とす必要があることです。

解答は**7行以内**のコードで書いてください。がんばって！
