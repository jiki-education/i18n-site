---
lang: "zh-CN"
type: "exercise"
slug: "golf-rolling-ball-state"
title: "有状态的球"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-state"
en_md5: "f203d7c055cd4ad8de235218c470df98"
governance_sha: "c80036b"
content_version: "680093854e89"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"positionNotNumber","english":"position must be a number","target":"位置必须是一个数字"}]},{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball didn't reach the hole. It's at position {{ballX}}, but needs to be at position 88.","target":"球没有进洞。当前位置在 {{ballX}}，但需要到达 88。"},{"key":"missingPositions","english":"The ball must roll through each position individually, not jump directly to the end.","target":"球必须逐个位置滚动，不能直接跳到终点。"}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"将球滚入洞中"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"将球滚入洞中"}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"将球滚入洞中"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"将球滚入洞中"}]},{"name":"hints","rows":[{"key":"dontKnowWhereToStart.question","english":"I don't know where to start","target":"我不知道从哪里开始"},{"key":"dontKnowWhereToStart.answer","english":"The key is to move the ball one step forward each time. You can use a variable to do this. Think about how that might work.","target":"关键是每次将球向前移动一步。你可以使用一个变量来实现。想想看如何做到。"},{"key":"stillCantFigureItOut.question","english":"I still can't figure it out","target":"我还是想不出来"},{"key":"stillCantFigureItOut.answer","english":"You want to create a variable to track where the ball is. It should start where it is now, then many times increase by one. Every time it increases you should `moveTo(...)` using the variable as an input.","target":"你需要创建一个变量来跟踪球的位置。它应该从当前的位置开始，然后多次每次增加 1。每次增加时，你应该使用变量作为输入来调用 `moveTo(...)`。"}]},{"name":"functions","rows":[{"key":"moveTo.description","english":"Moves the ball to **position**.","target":"将球移动到**位置**"},{"key":"moveTo.category","english":"Movement","target":"移动"}]},{"name":"describers","rows":[{"key":"moveTo","english":"moved the ball to position ${arg1}","target":"将球移动到位置 ${arg1}"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":null},{"key":"yNotNumber","english":"y must be a number","target":null}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":null},{"key":"moveTo","english":"moved the ball to the given position","target":null},{"key":"getShotLength","english":"retrieved the shot length","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]}]}]
---

我们又回到了构建高尔夫游戏的世界，但这次我们要构建的东西有所不同。

这次我们不再使用之前的 `roll()`（滚动）函数，而是用一个 `moveTo(position)`（移动到指定位置）函数，它可以瞬间将球移动到指定位置。

现在，当玩家击球时，我们可以直接把它移动到终点，但看不到动画会让人很不满意。所以我们想多次使用 `moveTo(position)` 来让它看起来像在滚动。

球从位置 **28** 开始，需要到达位置 **88**。

你必须用 **5 行代码** 解决这个问题。祝你好运！
