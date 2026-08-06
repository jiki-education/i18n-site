---
lang: "zh-CN"
type: "exercise"
slug: "random-salad"
title: "随机沙拉"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/random-salad"
en_md5: "e5aaa7fb66d90d3c7074f04bc6296752"
governance_sha: "c80036b"
content_version: "05d74603292d"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"leavesNumber","english":"Leaves must be a number","target":"叶子必须是数字。"},{"key":"tomatoesNumber","english":"Tomatoes must be a number","target":"番茄必须是数字。"},{"key":"croutonsNumber","english":"Croutons must be a number","target":"面包丁必须是数字。"},{"key":"olivesNumber","english":"Olives must be a number","target":"橄榄必须是数字。"}]},{"name":"checks","rows":[{"key":"saladNotMade","english":"You didn't make the salad. Make sure you call <code>makeSalad()</code> with all four ingredients.","target":"你没有制作沙拉。确保你调用了 <code>makeSalad()</code>，并传入全部四种食材。"},{"key":"needLeavesRandomInt","english":"You need to call <code>Math.randomInt(40, 100)</code> to generate the number of leaves.","target":"你需要调用 <code>Math.randomInt(40, 100)</code> 来生成叶子的数量。"},{"key":"needTomatoesRandomInt","english":"You need to call <code>Math.randomInt(5, leaves / 5)</code> to generate the number of tomatoes.","target":"你需要调用 <code>Math.randomInt(5, leaves / 5)</code> 来生成番茄的数量。"},{"key":"needCroutonsRandomInt","english":"You need to call <code>Math.randomInt(tomatoes, tomatoes * 2)</code> to generate the number of croutons.","target":"你需要调用 <code>Math.randomInt(tomatoes, tomatoes * 2)</code> 来生成面包丁的数量。"},{"key":"needOlivesRandomInt","english":"You need to call <code>Math.randomInt(1, tomatoes / 2)</code> to generate the number of olives.","target":"你需要调用 <code>Math.randomInt(1, tomatoes / 2)</code> 来生成橄榄的数量。"}]},{"name":"tasks","rows":[{"key":"makeRandomSalad.name","english":"Make a random salad","target":"制作随机沙拉"},{"key":"makeRandomSalad.description","english":"Generate a random amount of each ingredient using Math.randomInt() and make the salad.","target":"使用 Math.randomInt() 生成每种食材的随机数量，并制作沙拉。"}]},{"name":"scenarios","rows":[{"key":"randomSalad.name","english":"Random salad","target":"随机沙拉"},{"key":"randomSalad.description","english":"Make a salad with random amounts of each ingredient.","target":"用每种食材的随机数量来制作沙拉。"}]},{"name":"hints","rows":[{"key":"leavesExample.question","english":"Give me an example of how to work out the leaves","target":"给我一个计算叶子数量的示例。"},{"key":"leavesExample.answer","english":"Use `let leaves = Math.randomInt(40, 100)` to generate a random amount of salad leaves that you can then use in the other functions.","target":"使用 `let leaves = Math.randomInt(40, 100)` 来生成随机的叶子数量，之后你可以在其他函数中使用它。"},{"key":"leavesCount.question","english":"How many leaves do I need?","target":"我需要多少叶子？"},{"key":"leavesCount.answer","english":"Between 40 and 100.","target":"在 40 到 100 之间。"},{"key":"tomatoesCount.question","english":"How many tomatoes do I need?","target":"我需要多少番茄？"},{"key":"tomatoesCount.answer","english":"At least 5, but no more than leaves / 5","target":"至少 5 个，但不能超过 leaves / 5。"},{"key":"croutonsCount.question","english":"How many croutons do I need?","target":"我需要多少面包丁？"},{"key":"croutonsCount.answer","english":"At least as many as tomatoes, up to double the amount of tomatoes","target":"至少和番茄一样多，最多不超过番茄的两倍。"},{"key":"olivesCount.question","english":"How many olives do I need?","target":"我需要多少橄榄？"},{"key":"olivesCount.answer","english":"At least 1, up to half the number of tomatoes","target":"至少 1 个，最多不超过番茄数量的一半。"},{"key":"makeSalad.question","english":"How do I make the salad?","target":"如何制作沙拉？"},{"key":"makeSalad.answer","english":"Once you've worked out how many ingredients you need for each, input leaves, tomatoes, croutons, olives into makeSalad().","target":"一旦你确定每种食材需要多少，就将叶子、番茄、面包丁、橄榄传入 makeSalad()。"}]},{"name":"describers","rows":[{"key":"makeSalad","english":"made a salad with ${arg1} leaves, ${arg2} tomatoes, ${arg3} croutons, and ${arg4} olives","target":"用 ${arg1} 片叶子、${arg2} 个番茄、${arg3} 个面包丁和 ${arg4} 个橄榄制作了一份沙拉。"}]},{"name":"functions","rows":[{"key":"makeSalad.description","english":"Makes a salad with the given amounts of each ingredient.","target":"根据给定的每种食材数量制作沙拉。"},{"key":"makeSalad.category","english":"Action","target":"动作"}]}]}]
---

你和你的搭档总在沙拉比例上达不成一致，你想多放点叶子，他们想多放点面包丁，谁都不肯让步。于是你们决定让随机来决定一切，一劳永逸。

你们要制作一份沙拉，里面要有叶子、番茄、橄榄和面包丁。经过一番激烈的争论，你们定下了几条严格的规则：

- 必须有一个合理的叶子底数，在 40 到 100 片之间。
- 番茄太多会让沙拉变得湿软又酸。番茄至少要 5 个，但每 5 片叶子不能超过一个番茄。
- 你需要足够的面包丁来吸收番茄汁，但太多了就成一碗面包了。你们商定，面包丁至少要和番茄一样多，但不能超过番茄的两倍。
- 橄榄味道很重，要少放，不然会盖住其他所有食材的味道。你至少要放一个橄榄，但不能超过番茄数量的一半。
- 还有一条关键规则：所有食材的数量都必须通过随机来生成！

首先，点几次 **运行代码**，看看沙拉的效果。等你对这道练习有了“感觉”（是双关哦），就用 `Math.randomInt`（随机整数）并按照上面的规则来选出合适的食材：

试试不同的搭配，玩得开心！
