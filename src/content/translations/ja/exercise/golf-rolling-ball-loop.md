---
lang: "ja"
type: "exercise"
slug: "golf-rolling-ball-loop"
title: "転がるボール"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-loop"
en_md5: "e581ca0b932527b029cef23f9ad49a5e"
governance_sha: "c80036b"
content_version: "0484539b7f63"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball rolled to {{ballX}}, which isn't 60 from where it started.","target":"ボールは{{ballX}}まで転がりましたが、スタート地点から60歩の場所ではありません。"},{"key":"missingPositions","english":"The ball must roll through each position one step at a time, starting from 29.","target":"ボールは、29から始めて、一歩ずつ各位置を転がらなければなりません。"},{"key":"codeQuality.tooManyLines","english":"Your solution has too many lines of code. Try using a loop to make it shorter.","target":"解答のコードの行数が多すぎます。ループを使って短くしてみましょう。"}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"ボールを穴まで転がす"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"ボールを穴まで転がす。"}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"ボールを穴まで転がす"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"ボールを穴まで転がす。"}]},{"name":"hints","rows":[{"key":"icantWorkItOut.question","english":"I can't work it out","target":"解き方がわかりません"},{"key":"icantWorkItOut.answer","english":"You have two tools to use:\n- A repeat loop, which you use by writing `repeat(n) { }` where `n` is the amount of times you want to roll and where you can put anything inside the braces (`{ }`).\n- A `roll()` function that rolls the ball one step to the right.\n\nHow can you combine them?","target":"使える道具は2つあります：\n- `repeat`ループです。これは `repeat(n) { }` と書きます。`n` は転がしたい回数で、中括弧（`{ }`）の中には何でも書けます。\n- `roll()` 関数です。これはボールを右に1歩転がします。\n\nどう組み合わせればいいでしょうか？"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls the ball **one step to the right**.","target":"ボールを**右に1歩**転がします。"},{"key":"roll.category","english":"Movement","target":"移動"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled the ball one step to the right","target":"ボールを右に1歩転がした"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":null},{"key":"yNotNumber","english":"y must be a number","target":null}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":null},{"key":"moveTo","english":"moved the ball to the given position","target":null},{"key":"getShotLength","english":"retrieved the shot length","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]}]}]
---

`repeat`ループを実際に使ってみましょう！

ゴルフボールがティーにのっています。穴までは60歩です。ボールを穴まで転がしましょう。

**3行のコード**で、この演習を解いてください。楽しんで！
