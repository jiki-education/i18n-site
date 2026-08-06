---
lang: "zh-CN"
type: "exercise"
slug: "gold-panning"
title: "淘金"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/gold-panning"
en_md5: "e62d584285e129af1ec13bb8d337d0fc"
governance_sha: "c80036b"
content_version: "37d155a42c4b"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"needsRecharge","english":"The robot needs to recharge after selling.","target":"机器人在出售后需要充电。"},{"key":"sellBeforeAnythingElse","english":"The robot needs to go and sell before it does anything else.","target":"机器人需要先去出售金块，然后再做其他事情。"},{"key":"sellNumber","english":"You can only sell a number of nuggets","target":"你只能出售一个数字（即金块数量）。"}]},{"name":"checks","rows":[{"key":"notSold","english":"You didn't sell your nuggets. Make sure you call <code>sell()</code> after panning.","target":"你没有出售你的金块。确保在淘金之后调用 <code>sell()</code>。"},{"key":"wrongSoldTotal","english":"Expected to sell {{expectedTotal}} nuggets ({{panValues}}) but you sold {{got}}. Make sure you add each pan result to your running total.","target":"期望出售 {{expectedTotal}} 个金块（{{panValues}}），但你出售了 {{got}} 个。确保将每次淘金结果加到你的累计总数中。"}]},{"name":"tasks","rows":[{"key":"panAndSell.name","english":"Pan for gold and sell your haul","target":"淘金并出售收获"},{"key":"panAndSell.description","english":"Pan 5 times to collect gold nuggets, keeping a running total, then sell everything at the trading post.","target":"淘金 5 次收集金块，记录累计总数，然后在交易站出售所有金块。"}]},{"name":"scenarios","rows":[{"key":"randomPans.name","english":"Pan and sell","target":"淘金并出售"},{"key":"randomPans.description","english":"Pan 5 times for a random number of nuggets each time, then sell the total.","target":"每次淘金随机获得一些金块，共淘金 5 次，然后出售总数。"}]},{"name":"hints","rows":[{"key":"wrongSellAmount.question","english":"It says I'm selling the wrong amount of gold.","target":"它说我出售的金块数量不对。"},{"key":"wrongSellAmount.answer","english":"You need to sell ALL the gold you find in the 5 pans in one go at the end, not selling after each pan.","target":"你需要在最后一次性出售 5 次淘金找到的所有金块，而不是每次淘金后就出售。"},{"key":"trackingTotal.question","english":"I am using pan multiple times but I don't know how to keep track of how much I have.","target":"我多次使用淘金，但不知道如何跟踪我拥有的金块数量。"},{"key":"trackingTotal.answer","english":"Think about what you've learned in recent video lessons. You need to use a variable to keep track of the **total** amount of gold that you have collected across **all** the pans together.","target":"回想一下你最近在视频课上学到的内容。你需要使用一个变量来跟踪你在**所有**淘金过程中累计收集到的金块**总数**。"},{"key":"fiveLines.question","english":"I've got it working, but I can't get down to 5 lines.","target":"我已经让它工作了，但我无法缩减到 5 行代码。"},{"key":"fiveLines.answer","english":"Do you have repetitive code in your solution? If so, what can we use to reduce that repetitiveness?","target":"你的解答中是否有重复的代码？如果有，我们可以用什么来减少这种重复？"},{"key":"stillFiveLines.question","english":"I still can't get it down to 5 lines of code.","target":"我还是无法缩减到 5 行代码。"},{"key":"stillFiveLines.answer","english":"You should only need to use one variable. Are you using more?","target":"你应该只需要使用一个变量。你是否使用了多个？"}]},{"name":"describers","rows":[{"key":"pan","english":"panned and found ${return} nuggets","target":"淘金并找到 ${return} 个金块"},{"key":"sell","english":"sold ${arg1} nuggets at the trading post","target":"在交易站出售了 ${arg1} 个金块"}]},{"name":"functions","rows":[{"key":"pan.description","english":"Dips your pan in the river and **gives back** the number of gold nuggets found.","target":"将你的淘金盘浸入河中，并 **返回** 找到的金块数量。"},{"key":"pan.category","english":"Mining","target":"采矿"},{"key":"sell.description","english":"Sells your gold nuggets at the trading post.","target":"在交易站出售你的金块。"},{"key":"sell.category","english":"Action","target":"动作"}]}]}]
---

在加州成为科技之家以前，这里是黄金之乡！超过 30万人来到这里，开始在河流中寻找可以出售的小金块。

在这个练习中，你将构建一个去淘金的机器人。

你有一个`pan()`（淘金）函数，可以用来从水中淘出一些金子。该函数会返回（英语：_returns_）你找到的金块数量。

你还有一个`sell(numberOfNuggets)`（卖出金块数量）函数，可以用来出售你找到的所有金块。

你的机器人有足够能力在出售前淘金几次。你需要编写代码，让它出发到河边，淘金**5 次**，在过程中记录收集到的金块数量，最后卖掉它找到的全部金块（即全部 5 次淘金的总和）。

用**5 行代码**（或更少）解开谜题！
