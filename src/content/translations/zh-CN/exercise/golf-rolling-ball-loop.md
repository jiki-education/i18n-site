---
lang: "zh-CN"
type: "exercise"
slug: "golf-rolling-ball-loop"
title: "滚动的球"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-loop"
en_md5: "e581ca0b932527b029cef23f9ad49a5e"
governance_sha: "c80036b"
content_version: "e4ab37ab7daa"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball rolled to {{ballX}}, which isn't 60 from where it started.","target":"球滚动到了{{ballX}}，但离出发点不是 60 步。"},{"key":"missingPositions","english":"The ball must roll through each position one step at a time, starting from 29.","target":"球必须一步一步地滚动经过每个位置，从 29 开始。"},{"key":"codeQuality.tooManyLines","english":"Your solution has too many lines of code. Try using a loop to make it shorter.","target":"你的代码行数太多。试着用循环来缩短它。"}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"把球滚进洞里"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"把球滚进洞里"}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"把球滚进洞里"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"把球滚进洞里"}]},{"name":"hints","rows":[{"key":"icantWorkItOut.question","english":"I can't work it out","target":"我解不出来"},{"key":"icantWorkItOut.answer","english":"You have two tools to use:\n- A repeat loop, which you use by writing `repeat(n) { }` where `n` is the amount of times you want to roll and where you can put anything inside the braces (`{ }`).\n- A `roll()` function that rolls the ball one step to the right.\n\nHow can you combine them?","target":"你可以使用两个工具：\n- 一个 `repeat` 循环，通过写 `repeat(n) { }` 来使用，其中 `n` 是你想要滚动的次数，你可以在花括号（`{ }`）里放任何内容。\n- 一个 `roll()` 函数，将球向右滚动一步。\n\n你怎样把它们结合起来？"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls the ball **one step to the right**.","target":"将球**向右滚动一步**。"},{"key":"roll.category","english":"Movement","target":"移动"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled the ball one step to the right","target":"将球向右滚动了一步"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":null},{"key":"yNotNumber","english":"y must be a number","target":null}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":null},{"key":"moveTo","english":"moved the ball to the given position","target":null},{"key":"getShotLength","english":"retrieved the shot length","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]}]}]
---

让我们把 `repeat`循环（英语：_loop_）用起来吧！

一颗高尔夫球正停在球座上。你的任务是把球滚进 60 步外的洞里。

用**三行代码**解决这个练习。玩得开心！
