---
lang: "ja"
type: "exercise"
slug: "space-invaders-nested-repeat"
title: "スペースインベーダー：入れ子のrepeat"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/space-invaders-nested-repeat"
en_md5: "c0d87f1fa433152d98bce923dbfa1f52"
governance_sha: "1011050"
content_version: "9916b5cb47ff"
published_at: "2026-08-07"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"describers","rows":[{"key":"move","english":"moved the laser cannon to the right","target":"レーザー砲を右に移動した"}]},{"name":"checks","rows":[{"key":"notShotAllAliens","english":"You didn't shoot down all the aliens.","target":"すべてのエイリアンを撃ち落としていません。"},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try using a repeat loop inside another repeat loop to make it shorter!","target":"コードの行数が多すぎます。repeatループの中にさらにrepeatループを入れて、もっと短くしてみましょう！"}]},{"name":"tasks","rows":[{"key":"nestedRepeatShoot.name","english":"Use nested repeat loops to shoot all the aliens","target":"入れ子のrepeatでエイリアンをすべて撃ち落とす"},{"key":"nestedRepeatShoot.description","english":"Find the pattern in the alien positions and use a repeat loop inside another repeat loop to destroy them all in 7 lines of code or fewer.","target":"エイリアンの配置のパターンを見つけ、repeatループの中に別のrepeatループを入れて、7行以内のコードですべて倒してください。"}]},{"name":"scenarios","rows":[{"key":"nestedRepeatShoot.name","english":"Nested Repeat and Shoot","target":"入れ子のrepeatと射撃"},{"key":"nestedRepeatShoot.description","english":"Use nested repeat loops to shoot all the aliens","target":"入れ子のrepeatループを使って、すべてのエイリアンを撃ち落とします。"}]},{"name":"hints","rows":[{"key":"cantGetTo7Lines.question","english":"I can't get to 7 lines of code.","target":"7行のコードにできません。"},{"key":"cantGetTo7Lines.answer","english":"Think about this level as two blocks of things that need to happen.\n\n- The first block is the inner one, where we shoot 4 times - make sure that is three lines long.\n- The outer block is the inner block with some movement either side. That outer block needs to be repeated a few times too.\n\nIf you structure your code in this way, it should naturally end up at 7 lines of code.","target":"このレベルを、2つのブロックに分けて考えてみましょう。\n\n- 最初のブロックは内側のブロックで、4回発射します。それが3行で書けるようにしましょう。\n- 外側のブロックは、内側のブロックの前後に移動を加えたものです。その外側のブロックも何度か繰り返す必要があります。\n\nこのようにコードを構成すれば、自然と7行のコードに収まるはずです。"}]},{"name":"functions","rows":[{"key":"move.description","english":"Moves the laser cannon **one position to the right**. If you move off the right edge of the screen, you lose!","target":"レーザー砲を右に1マス移動させます。画面の右端からはみ出ると、ゲームオーバーになります！"},{"key":"move.category","english":"Movement","target":"移動"},{"key":"shoot.description","english":"Shoots the laser upwards. **Only shoot when there's an alien above you**, or you lose the game!","target":"レーザーを上に向けて発射します。**自分の上にエイリアンがいる時だけ撃ってください**。そうしないとゲームオーバーになります！"},{"key":"shoot.category","english":"Action","target":"アクション"}]}]},{"heading":"Shared \"space-invaders\" messages","note":"Shared by every exercise in the space-invaders category, not just this one. A change here changes all of them.","namespaces":[{"name":"describers","rows":[{"key":"moveLeft","english":"moved the laser cannon to the left","target":null},{"key":"moveRight","english":"moved the laser cannon to the right","target":null},{"key":"shoot","english":"shot the laser upwards","target":null},{"key":"isAlienAbove","english":"determined if there was an alien above the laser cannon","target":null},{"key":"getStartingAliensInRow","english":"retrieved the starting positions of row ${arg1} of aliens","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]},{"name":"errors","rows":[{"key":"laserOverheated","english":"Oh no! Your laser cannon overheated from shooting too fast! You need to move before you can shoot a second time.","target":null},{"key":"missedShot","english":"Oh no, you missed. Wasting ammo is not allowed!","target":null},{"key":"moveOffEdge","english":"Oh no, you tried to move off the edge!","target":null},{"key":"rowNotNumber","english":"Oh no, the row input you provided is not a number.","target":null},{"key":"rowOutOfRange","english":"Oh no, you tried to access a row of aliens that doesn't exist. You asked for row {{row}}, but the rows are numbered 0 to {{max}}.","target":null},{"key":"notAllAliensDead","english":"You need to defeat all the aliens before you can celebrate!","target":null}]}]}]
---

さらに多くのエイリアンが現れ、今度は**4列**に並んでいます！

前回と同じ2つの関数が使えます：

- `move()`（自分のレーザー砲を右に1マス移動）は、自分のレーザー砲を右に1マス移動します。
- `shoot()`（レーザーを上方向に発射）は、レーザーを上に向けて発射します。

違いは、各行に複数のエイリアンがいるため、それぞれを撃ち落とす必要があることです。

解答は**7行以内**のコードで書いてください。がんばって！
