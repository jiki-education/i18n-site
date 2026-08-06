---
lang: "ja"
type: "exercise"
slug: "space-invaders-solve-basic"
title: "Space Invaders"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/space-invaders-solve-basic"
en_md5: "832d47151ead209ebf0f931a8472ec30"
governance_sha: "c80036b"
content_version: "cb615de8a0b7"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"describers","rows":[{"key":"move","english":"moved the laser cannon to the right","target":"レーザー砲を右に動かしました"}]},{"name":"checks","rows":[{"key":"notShotAllAliens","english":"You didn't shoot down all the aliens.","target":"エイリアンをすべて撃ち落とせていません。"}]},{"name":"tasks","rows":[{"key":"shootTheAliens.name","english":"Shoot all the aliens","target":"すべてのエイリアンを撃ち落とせ"},{"key":"shootTheAliens.description","english":"Move your laser cannon to the right and shoot each alien as you pass underneath it. Don't miss or move off the edge!","target":"レーザー砲を右に動かして、真下を通るときに各エイリアンを撃ち落としてください。弾を無駄にしたり、画面からはみ出したりしないでください！"}]},{"name":"scenarios","rows":[{"key":"shootTheAliens.name","english":"Shoot the Aliens","target":"エイリアンを撃ち落とせ"},{"key":"shootTheAliens.description","english":"Move right and shoot all the aliens","target":"右に移動し、エイリアンをすべて撃ち落とす"}]},{"name":"hints","rows":[{"key":"whatDoINeedToDo.question","english":"What do I need to do?","target":"何をすればよいですか？"},{"key":"whatDoINeedToDo.answer","english":"Like the maze, you need to move your character (this time a laser, not a person). But you also need to shoot from the laser! Move the laser underneath an alien then shoot. Then move again until you're under the next alien, and shoot again. Continue until you've shot down the last alien!","target":"迷路と同じように、キャラクター（今回は人ではなくレーザー砲です）を動かす必要があります。そして、レーザー砲からレーザーを発射することも必要です！エイリアンの真下にレーザー砲を移動させてから撃ちます。次のエイリアンの真下に来るまで再び動かし、また撃ちます。最後のエイリアンを撃ち落とすまで繰り返します！"},{"key":"cantWasteAmmo.question","english":"I get told I can't waste ammo.","target":"「弾を無駄にしてはいけません」と言われます。"},{"key":"cantWasteAmmo.answer","english":"You should only `shoot()` when you're directly below an alien. Try moving one step further (or maybe you've gone one too far?)","target":"`shoot()`は、エイリアンの真下にいるときだけ行ってください。もう1歩先に進むか（あるいは、1歩進みすぎたのかもしれません）、試してみてください。"}]},{"name":"functions","rows":[{"key":"move.description","english":"Moves the laser cannon **one position to the right**. If you move off the right edge of the screen, you lose!","target":"レーザー砲を**右に1つ分動かします**。画面の右端から外に出ると、エラーが発生します！"},{"key":"move.category","english":"Movement","target":"移動"},{"key":"shoot.description","english":"Shoots the laser upwards. **Only shoot when there's an alien above you**, or you lose the game!","target":"レーザーを上に向けて発射します。**真上にエイリアンがいるときだけ撃ってください**。そうしないと、エラーが発生します！"},{"key":"shoot.category","english":"Action","target":"アクション"}]}]},{"heading":"Shared \"space-invaders\" messages","note":"Shared by every exercise in the space-invaders category, not just this one. A change here changes all of them.","namespaces":[{"name":"describers","rows":[{"key":"moveLeft","english":"moved the laser cannon to the left","target":null},{"key":"moveRight","english":"moved the laser cannon to the right","target":null},{"key":"shoot","english":"shot the laser upwards","target":null},{"key":"isAlienAbove","english":"determined if there was an alien above the laser cannon","target":null},{"key":"getStartingAliensInRow","english":"retrieved the starting positions of row ${arg1} of aliens","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]},{"name":"errors","rows":[{"key":"laserOverheated","english":"Oh no! Your laser cannon overheated from shooting too fast! You need to move before you can shoot a second time.","target":null},{"key":"missedShot","english":"Oh no, you missed. Wasting ammo is not allowed!","target":null},{"key":"moveOffEdge","english":"Oh no, you tried to move off the edge!","target":null},{"key":"rowNotNumber","english":"Oh no, the row input you provided is not a number.","target":null},{"key":"rowOutOfRange","english":"Oh no, you tried to access a row of aliens that doesn't exist. You asked for row {{row}}, but the rows are numbered 0 to {{max}}.","target":null},{"key":"notAllAliensDead","english":"You need to defeat all the aliens before you can celebrate!","target":null}]}]}]
---

2つ目の演習、Space Invadersへようこそ！これは1970年代の名作アーケードゲームで、私が初めてプレイしたゲームの1つです。これから数週間かけて、エイリアンを撃ち落とすための完全自動のレーザーを作り上げていきます。でも今はまず、手動ですべてのエイリアンを撃ち落としてみましょう。

使える関数（英: _function_）は2つです。

- `move()`（右に移動する）は、レーザー砲を右に1つ分動かします。
- `shoot()`（レーザーを発射する）は、レーザーを上に向けて発射します。

最初の`move()`はこちらで用意しておきました。**エイリアンの位置をよく見て**、`move()`と`shoot()`の呼び出しを順番に書いて、すべて撃ち落としましょう。

気をつけてください。

- 真上にエイリアンがいないときに撃つと、エラー（英: _error_）が発生します（弾の無駄遣いは許されません！）。
- 画面の右端から外に出てしまうと、エラーが発生します。

楽しんでください！
