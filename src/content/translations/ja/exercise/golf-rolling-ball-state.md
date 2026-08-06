---
lang: "ja"
type: "exercise"
slug: "golf-rolling-ball-state"
title: "状態を持つボール"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-state"
en_md5: "f203d7c055cd4ad8de235218c470df98"
governance_sha: "c80036b"
content_version: "8c8776d13611"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"positionNotNumber","english":"position must be a number","target":"positionは数値である必要があります。"}]},{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball didn't reach the hole. It's at position {{ballX}}, but needs to be at position 88.","target":"ボールが穴に到達しませんでした。位置は{{ballX}}ですが、位置88に到達する必要があります。"},{"key":"missingPositions","english":"The ball must roll through each position individually, not jump directly to the end.","target":"ボールは、各位置を順番に経由して転がる必要があります。最後まで直接ジャンプしないでください。"}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"ボールを穴に転がす"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"ボールを穴に転がします。"}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"ボールを穴に転がす"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"ボールを穴に転がします。"}]},{"name":"hints","rows":[{"key":"dontKnowWhereToStart.question","english":"I don't know where to start","target":"どこから始めればいいかわかりません。"},{"key":"dontKnowWhereToStart.answer","english":"The key is to move the ball one step forward each time. You can use a variable to do this. Think about how that might work.","target":"ポイントは、ボールを1ずつ前に進めることです。そのために変数を使うことができます。どうすればいいか考えてみましょう。"},{"key":"stillCantFigureItOut.question","english":"I still can't figure it out","target":"それでもわかりません。"},{"key":"stillCantFigureItOut.answer","english":"You want to create a variable to track where the ball is. It should start where it is now, then many times increase by one. Every time it increases you should `moveTo(...)` using the variable as an input.","target":"ボールの位置を追跡するための変数を作成します。その変数は現在の位置から始め、何度も1ずつ増やします。1増やすたびに、その変数を入力として`moveTo(...)`を使ってください。"}]},{"name":"functions","rows":[{"key":"moveTo.description","english":"Moves the ball to **position**.","target":"ボールを**position**に移動します。"},{"key":"moveTo.category","english":"Movement","target":"移動"}]},{"name":"describers","rows":[{"key":"moveTo","english":"moved the ball to position ${arg1}","target":"ボールを位置${arg1}に移動しました。"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":null},{"key":"yNotNumber","english":"y must be a number","target":null}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":null},{"key":"moveTo","english":"moved the ball to the given position","target":null},{"key":"getShotLength","english":"retrieved the shot length","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]}]}]
---

ゴルフゲーム作りの世界に戻ってきましたが、今回は作るものが変わりました。

以前は`roll()`（転がす）関数がありましたが、今度は瞬時にボールを指定の位置に移動させる`moveTo(position)`（位置に移動する）関数を使います。

さて、プレーヤーがボールを打ったとき、最終位置に直接移動させるだけでもいいのですが、アニメーションしないのはとても残念です。そこで、`moveTo(position)`を何度も使って、ボールが転がっているように見せたいと思います。

ボールの初期位置は**28**で、位置**88**に到達する必要があります。

この問題は、**5行のコード**で解いてください。がんばってください！
