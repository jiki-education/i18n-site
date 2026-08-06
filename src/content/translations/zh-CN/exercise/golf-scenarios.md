---
lang: "zh-CN"
type: "exercise"
slug: "golf-scenarios"
title: "高尔夫击球场景"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-scenarios"
en_md5: "7ad7d621d35bee023767aa9463c2b8e9"
governance_sha: "c80036b"
content_version: "b6ed3c6d8b0f"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"wrongShotEnd","english":"The ball didn't end up in the right place for this shot. Check it travels the full shot length.","target":"球在这次击球后没有到达正确的位置。请检查球是否滚动了完整的击球距离。"},{"key":"missingPositions","english":"The ball must roll through each position one step at a time, not jump straight to the end.","target":"球必须逐个位置地滚动，一步接一步，不能直接跳到终点。"}]},{"name":"tasks","rows":[{"key":"rollAndCelebrate.name","english":"Roll the ball","target":"滚动球"},{"key":"rollAndCelebrate.description","english":"Get the shot length and roll the ball right by that amount.","target":"获取击球距离，并将球向右滚动相应距离。"}]},{"name":"scenarios","rows":[{"key":"shortShot.name","english":"Short shot (20)","target":"短击球（20）"},{"key":"shortShot.description","english":"In this scenario, `getShotLength()` will return 20. Roll the ball 20 steps from the tee.","target":"在这个场景中，`getShotLength()` 会返回 20。将球从球座开始滚动 20 步。"},{"key":"mediumShot.name","english":"Medium shot (35)","target":"中击球（35）"},{"key":"mediumShot.description","english":"In this scenario, `getShotLength()` will return 35. Roll the ball 35 steps from the tee.","target":"在这个场景中，`getShotLength()` 会返回 35。将球从球座开始滚动 35 步。"},{"key":"longShot.name","english":"Long shot (50)","target":"长击球（50）"},{"key":"longShot.description","english":"In this scenario, `getShotLength()` will return 50. Roll the ball 50 steps from the tee.","target":"在这个场景中，`getShotLength()` 会返回 50。将球从球座开始滚动 50 步。"},{"key":"veryLongShot.name","english":"Very long shot (60)","target":"远击球（60）"},{"key":"veryLongShot.description","english":"In this scenario, `getShotLength()` will return 60. Roll the ball 60 steps from the tee.","target":"在这个场景中，`getShotLength()` 会返回 60。将球从球座开始滚动 60 步。"}]},{"name":"hints","rows":[{"key":"notSureWhereToStart.question","english":"I'm not sure where to start","target":"我不确定从哪里开始"},{"key":"notSureWhereToStart.answer","english":"This is just like the previous golf exercise, where you rolled the ball a fixed number of steps. The only difference is that the number of steps is no longer a fixed value — it comes from `getShotLength()` instead. Wherever you used a number before, you can use the result of a function instead.","target":"这和之前的高尔夫练习一样，你要把球滚动固定的步数。唯一的不同是，步数不再是一个固定值，而是来自 `getShotLength()`。以前你用数字的地方，现在可以用函数的返回值来代替。"},{"key":"ballStopsShort.question","english":"My ball stops one step short (or goes one too far)","target":"我的球少滚了一步（或多滚了一步）"},{"key":"ballStopsShort.answer","english":"Think carefully about your starting position and how many times you roll. The ball sits on the tee at 28, so its first roll should take it to 29. Count the steps from there to where it needs to end up.","target":"仔细想想你的起始位置和你要滚动多少次。球起始于位置 28，因此第一次滚动应该到达 29。从那里开始数步数，直到它应该到达的地方。"}]},{"name":"functions","rows":[{"key":"moveTo.description","english":"Moves the ball to position **x**.","target":"将球移动到位置 **x**。"},{"key":"moveTo.category","english":"Movement","target":"移动"},{"key":"getShotLength.description","english":"Returns the **length of the shot** — how many units the ball travels to the right.","target":"返回 **击球距离**，即球向右移动的单位数。"},{"key":"getShotLength.category","english":"Information","target":"信息"}]},{"name":"describers","rows":[{"key":"moveTo","english":"moved the ball to position ${arg1}","target":"将球移动到位置 ${arg1}"},{"key":"getShotLength","english":"retrieved the shot length","target":"获取了击球距离"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":null},{"key":"yNotNumber","english":"y must be a number","target":null}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":null},{"key":"moveTo","english":"moved the ball to the given position","target":null},{"key":"getShotLength","english":"retrieved the shot length","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]}]}]
---

欢迎来到你的第一个带有场景的练习。

我们回到了高尔夫球场。在这个练习中，你将在之前练习的基础上进行，但会有一个新的变化。和之前一样，你需要使用`moveTo(x)`（移动到指定位置）函数来移动球，**一次移动一步**，而不是直接跳到终点。球**从球座出发，起始位置是 28。**

新的变化是，我们不会移动固定的距离，而是根据高尔夫球手击球的距离来移动不同的量。要获取高尔夫球手击球的距离，你可以使用`getShotLength()`（获取击球距离）函数，它返回一个数字。

### 场景

在左侧，你会看到四个灰色圆点，分别对应四个不同的场景。**点击每个圆点**会显示一个不同的场景——其中`getShotLength()`会返回不同的数字。如果你点击“Run Code”，你会看到它们全部变红。

你的任务是编写一个程序，让它能够正确处理`getShotLength()`可能返回的所有不同值。

祝你好运，玩得开心！
