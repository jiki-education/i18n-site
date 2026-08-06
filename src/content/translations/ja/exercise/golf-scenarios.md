---
lang: "ja"
type: "exercise"
slug: "golf-scenarios"
title: "ゴルフショットのシナリオ"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-scenarios"
en_md5: "7ad7d621d35bee023767aa9463c2b8e9"
governance_sha: "c80036b"
content_version: "453295b6d409"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"wrongShotEnd","english":"The ball didn't end up in the right place for this shot. Check it travels the full shot length.","target":"ボールが正しい位置に止まりませんでした。ショットの距離分だけ移動しているか確認してください。"},{"key":"missingPositions","english":"The ball must roll through each position one step at a time, not jump straight to the end.","target":"ボールは各位置を1ステップずつ転がる必要があります。最後までジャンプせずに移動してください。"}]},{"name":"tasks","rows":[{"key":"rollAndCelebrate.name","english":"Roll the ball","target":"ボールを転がす"},{"key":"rollAndCelebrate.description","english":"Get the shot length and roll the ball right by that amount.","target":"ショットの距離を取得し、その距離だけ右へボールを転がしてください。"}]},{"name":"scenarios","rows":[{"key":"shortShot.name","english":"Short shot (20)","target":"ショートショット (20)"},{"key":"shortShot.description","english":"In this scenario, `getShotLength()` will return 20. Roll the ball 20 steps from the tee.","target":"このシナリオでは、`getShotLength()`は20を返します。ボールをティーから20ステップ転がしてください。"},{"key":"mediumShot.name","english":"Medium shot (35)","target":"ミドルショット (35)"},{"key":"mediumShot.description","english":"In this scenario, `getShotLength()` will return 35. Roll the ball 35 steps from the tee.","target":"このシナリオでは、`getShotLength()`は35を返します。ボールをティーから35ステップ転がしてください。"},{"key":"longShot.name","english":"Long shot (50)","target":"ロングショット (50)"},{"key":"longShot.description","english":"In this scenario, `getShotLength()` will return 50. Roll the ball 50 steps from the tee.","target":"このシナリオでは、`getShotLength()`は50を返します。ボールをティーから50ステップ転がしてください。"},{"key":"veryLongShot.name","english":"Very long shot (60)","target":"ベリーロングショット (60)"},{"key":"veryLongShot.description","english":"In this scenario, `getShotLength()` will return 60. Roll the ball 60 steps from the tee.","target":"このシナリオでは、`getShotLength()`は60を返します。ボールをティーから60ステップ転がしてください。"}]},{"name":"hints","rows":[{"key":"notSureWhereToStart.question","english":"I'm not sure where to start","target":"どこから始めればよいかわかりません"},{"key":"notSureWhereToStart.answer","english":"This is just like the previous golf exercise, where you rolled the ball a fixed number of steps. The only difference is that the number of steps is no longer a fixed value — it comes from `getShotLength()` instead. Wherever you used a number before, you can use the result of a function instead.","target":"これは前回のゴルフの演習と同じで、決まった数だけボールを転がしました。異なるのは、ステップ数が固定値ではなく、`getShotLength()`から得られるという点だけです。以前数字を使ったところでは、代わりに関数の結果を使えます。"},{"key":"ballStopsShort.question","english":"My ball stops one step short (or goes one too far)","target":"ボールが1ステップ手前で止まってしまう（または1ステップ行き過ぎる）"},{"key":"ballStopsShort.answer","english":"Think carefully about your starting position and how many times you roll. The ball sits on the tee at 28, so its first roll should take it to 29. Count the steps from there to where it needs to end up.","target":"開始位置と転がす回数をよく考えてください。ボールはティーの28の位置にあるので、最初の1ステップで29に移動します。そこからゴール位置まで何ステップ必要かを数えてください。"}]},{"name":"functions","rows":[{"key":"moveTo.description","english":"Moves the ball to position **x**.","target":"ボールを位置 **x** に移動します。"},{"key":"moveTo.category","english":"Movement","target":"移動"},{"key":"getShotLength.description","english":"Returns the **length of the shot** — how many units the ball travels to the right.","target":"**ショットの距離**を返します — ボールが右に進む単位数です。"},{"key":"getShotLength.category","english":"Information","target":"情報"}]},{"name":"describers","rows":[{"key":"moveTo","english":"moved the ball to position ${arg1}","target":"ボールを位置${arg1}に移動しました"},{"key":"getShotLength","english":"retrieved the shot length","target":"ショットの距離を取得しました"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":null},{"key":"yNotNumber","english":"y must be a number","target":null}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":null},{"key":"moveTo","english":"moved the ball to the given position","target":null},{"key":"getShotLength","english":"retrieved the shot length","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]}]}]
---

シナリオを使った最初の演習へようこそ。

ゴルフコースに戻ってきました。この演習では、前回までの内容を踏まえつつ、新しいひねりを加えていきます。前回と同じように、`moveTo(x)`（指定した位置に移動する関数）を使ってボールを動かしますが、**一度に1ステップずつ**動かし、いきなりゴール地点へジャンプさせるわけではありません。ボールは**ティーグラウンドの位置28**からスタートします。

今回の新しい点は、決まった距離だけ動かすのではなく、ゴルファーがボールを打った飛距離に応じて異なる距離を動かすことです。ゴルファーが打った距離を取得するには、`getShotLength()`（ショットの距離を返す関数）を使います。この関数は数値を返します。

### シナリオ

左側に、4つの異なるシナリオに対応する灰色のドットが4つあります。**各ドットをクリックすると**、それぞれのシナリオが表示されます。それぞれで`getShotLength()`が返す数値が異なります。`"Run Code"`をクリックすると、すべてのドットが赤くなります。

この演習での課題は、`getShotLength()`が返す可能性のあるどのような値に対しても動作する**1つのプログラム**を書くことです。

がんばってください！　楽しみながら進めてください！
