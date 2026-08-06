---
lang: "zh-CN"
type: "exercise"
slug: "guest-list"
title: "嘉宾名单"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/guest-list"
en_md5: "016cc4c41a4bcf23a3804240ed7d0a1a"
governance_sha: "c80036b"
content_version: "a21a3b7aa276"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"countChancersInQueue.name","english":"Count the chancers","target":"统计未受邀人数"},{"key":"countChancersInQueue.description","english":"Write a function that takes the queue and the guest list, and returns how many of the people queueing are not on the guest list.","target":"编写一个函数，接收队列和嘉宾名单，返回排队者中不在嘉宾名单上的人数。"},{"key":"solveTightly.name","english":"Solve it tightly","target":"精简实现"},{"key":"solveTightly.description","english":"Bonus: this can be written far more compactly than you might expect. Can you get the whole solution down to just a handful of lines?","target":"加分项：这段代码可以写得比你想象的更紧凑。你能把整个解答压缩到寥寥几行吗？"}]},{"name":"scenarios","rows":[{"key":"emptyQueue.name","english":"Nobody has turned up yet","target":"还没有人出现"},{"key":"emptyQueue.description","english":"An empty queue, so nobody is waiting to get in.","target":"空队列，所以没人等着进去。"},{"key":"everyoneChancingIt.name","english":"The whole queue is chancing it","target":"全队列碰运气"},{"key":"everyoneChancingIt.description","english":"A queue where none of the people waiting are on the guest list.","target":"队列中所有等待者都不在嘉宾名单上。"},{"key":"everyoneInvited.name","english":"Everyone is invited","target":"全员受邀"},{"key":"everyoneInvited.description","english":"A queue where every person waiting is on the guest list.","target":"队列中所有等待者都在嘉宾名单上。"},{"key":"mixedQueue.name","english":"A mixed queue","target":"混合队列"},{"key":"mixedQueue.description","english":"A queue where some of the people waiting are invited and some aren't. One of the chancers has a name that looks a lot like a name on the list.","target":"一个队列，其中有些等待者受邀，有些则没有。其中一个未受邀者的名字看起来和名单上的某个名字很像。"},{"key":"guestsWhoHaventArrived.name","english":"Guests still stuck in traffic","target":"堵在路上的嘉宾"},{"key":"guestsWhoHaventArrived.description","english":"A guest list with lots of names on it, but most of those people haven't reached the queue yet.","target":"一个有很多名字的嘉宾名单，但这些名字对应的人大部分还未出现在队列中。"},{"key":"longQueueShortList.name","english":"A long queue and a short list","target":"长队列，短名单"},{"key":"longQueueShortList.description","english":"A big queue outside, but only a couple of names on the guest list.","target":"外面排着长队，但嘉宾名单上只有零星几个名字。"},{"key":"guestListBonusLineCount.name","english":"Neat and tidy: a mixed queue","target":"简洁版：混合队列"},{"key":"guestListBonusLineCount.description","english":"The same mixed queue as before, but this time your solution has to fit into a much smaller number of lines.","target":"和之前一样的混合队列，但这次你的解答必须压缩到更少的行数。"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"继续加油！试试用更少的行数解决。"}]},{"name":"hints","rows":[{"key":"keepingTrack.question","english":"What do I need to keep track of as I go?","target":"我在进行过程中需要跟踪什么？"},{"key":"keepingTrack.answer","english":"The answer is a single number, and you don't know it until you've seen everyone. So ask yourself two things: what should that number be before you've looked at anybody at all, and what needs to happen to it when someone turns out **not** to be invited?","target":"答案是一个数字，只有把所有人都看一遍你才知道。所以问自己两个问题：在还没看任何人之前，那个数字应该是什么？当发现某人**没有**受邀时，应该对它做什么？"},{"key":"whichList.question","english":"There are two lists here. Which one am I working through?","target":"这里有两个列表。我应该遍历哪一个？"},{"key":"whichList.answer","english":"Think about what the answer is counting. It's a number of people **in the queue**, so it's the queue you need to visit one person at a time. The guest list isn't something you walk through, it's the thing you check each person against.","target":"想想答案在数什么。是**队列里**的人数，所以你需要一次访问一个队列中的人。嘉宾名单不是你遍历的东西，而是你对每一个人检查的东西。"},{"key":"realLifeBouncer.question","english":"How would a real bouncer do this with a clipboard?","target":"现实中的门卫用写字板会怎么做？"},{"key":"realLifeBouncer.answer","english":"Picture them stood at the front of the queue with the clipboard in one hand, working their way towards the back. They only shout out the final number once they've reached the last person. What are they doing to each person on the way, and what are they doing about the ones whose names they can't find?","target":"想象他站在队列最前面，一手拿着写字板，一直朝队尾移动。只有走到最后一个人，他才会喊出最终数字。在这个过程中，他对每个人做了什么？对于找不到名字的人，他又做了什么？"}]},{"name":"functions","rows":[{"key":"includes.description","english":"Check whether a list contains a specific item (provided by level stdlib)","target":"检查列表是否包含特定项（由关卡标准库提供）"},{"key":"includes.category","english":"List Operations","target":"列表操作"}]}]}]
---

你是一家高级俱乐部的门卫。你有一份嘉宾名单（英语：guest list），但你觉得队列（英语：queue）里的很多人其实并不在上面，他们只是想碰碰运气混进去。

在开门之前，组织者想知道情况有多糟。在当前排队的人里，有多少根本没有被邀请？

写一个名为 `numChancersInQueue`（队列中未受邀人数）的函数。该函数有两个输入：

- 第一个是队列，以名字数组的形式传入
- 第二个是嘉宾名单，也是一个名字数组

你应该返回队列中有多少人 **不在** 嘉宾名单上。

玩得开心！
