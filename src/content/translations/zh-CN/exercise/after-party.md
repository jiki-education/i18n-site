---
lang: "zh-CN"
type: "exercise"
slug: "after-party"
title: "余兴派对"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/after-party"
en_md5: "c59f1ee2393ff34f318369c56b15789f"
governance_sha: "c80036b"
content_version: "39e513500e91"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"lookUpPlusOnes.name","english":"Check the Plus-Ones","target":"检查附带宾客"},{"key":"lookUpPlusOnes.description","english":"Someone gives you their first name. Return the number of extra guests they're allowed to bring in, or `\"Not on the list!\"` if they're not invited.","target":"有人告诉你他们的名字。返回他们被允许多带多少人，如果他们没有收到邀请，则返回 `\"Not on the list!\"`。"}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty register","target":"登记册为空"},{"key":"emptyList.description","english":"Nobody's bringing anyone in when the list is empty.","target":"当名单为空时，没有人能带人进去。"},{"key":"nameMissing.name","english":"Brad's turned away","target":"布拉德被拒之门外"},{"key":"nameMissing.description","english":"The name's not on the list at all.","target":"名字完全不在名单上。"},{"key":"namePresent.name","english":"Brad's allowed in","target":"布拉德被放行"},{"key":"namePresent.description","english":"Brad's invited, and he's not travelling alone.","target":"布拉德收到了邀请，而且他不是一个人来。"},{"key":"similarName.name","english":"Close, but nope","target":"很接近，但不行"},{"key":"similarName.description","english":"Bradley is not Brad, so Brad's still on the wrong side of the rope.","target":"布拉德利不是布拉德，所以布拉德还是被拦在了外面。"},{"key":"doubleBarrelled.name","english":"A dutchman","target":"荷兰人"},{"key":"doubleBarrelled.description","english":"The name's on the list, but it's hyphenated.","target":"名字在名单上，但带有连字符。"},{"key":"allowedNobody.name","english":"Brad's flying solo","target":"布拉德独行"},{"key":"allowedNobody.description","english":"Brad is definitely invited. He's just not bringing anybody with him.","target":"布拉德肯定被邀请了。只是他不带任何客人。"},{"key":"twoBrads.name","english":"Two Brads","target":"两个布拉德"},{"key":"twoBrads.description","english":"There's more than one Brad on the list tonight, and the first one down is the one at the door.","target":"今晚名单上有不止一个布拉德，第一个上来的是门口那位。"},{"key":"cher.name","english":"Cher's in town","target":"雪儿来了"},{"key":"cher.description","english":"Some people only have one name, and she's brought an entourage.","target":"有些人只有一个名字，而她带了一支随行队伍。"},{"key":"cheryl.name","english":"Getting tough now","target":"现在变难了"},{"key":"cheryl.description","english":"Are Cheryl Crow and Cher friends? Doesn't matter - Cheryl is not Cher.","target":"谢丽尔·克劳和雪儿是朋友吗？这不重要——谢丽尔不是雪儿。"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where do I even start with this?","target":"我从哪里开始？"},{"key":"whereToStart.answer","english":"Picture yourself actually doing it on the door. Someone says a name, and you read down the clipboard until you spot them. It's worth noticing that the answer you have to give them isn't written next to their name on the list you're reading.","target":"想象自己真的在门口做事。有人说了一个名字，你顺着板子往下看，直到找到他们。值得留意的是，你必须告诉他们的答案并没有写在他们名字旁边那份名单上。"},{"key":"twoLists.question","english":"There are two lists. How do they relate to each other?","target":"有两个列表。它们之间有什么关系？"},{"key":"twoLists.answer","english":"Whatever you learn about *where* someone is in one list is just as true in the other. A position is a more useful thing to hold onto than a name.","target":"你在一个列表中了解到某人的*位置*，在另一个列表中同样适用。记住位置比记住名字更有用。"},{"key":"whatCountsAsAMatch.question","english":"When does a first name actually count as a match?","target":"名字什么时候才算匹配？"},{"key":"whatCountsAsAMatch.answer","english":"\"Brad\" should get Brad Pitt in, but not Bradley Cooper. Think about what's different about those two entries at the point where the letters you were given run out. There's more than one reasonable way to make that comparison, so pick whichever one you can explain to yourself.","target":"“布拉德” 应该让布拉德·皮特进去，但不应该让布拉德利·库珀进去。想想在你得到的字母用光那一刻，这两个条目有什么不同。有不止一种合理的方式来做这种比较，挑一个你能对自己解释清楚的方式。"},{"key":"noSurname.question","english":"Cher hasn't got a surname. Does that break anything?","target":"雪儿没有姓氏。这会出问题吗？"},{"key":"noSurname.answer","english":"Have another look at what your match test assumes about a list entry. If it assumes there's always something after the first name, an entry that's *only* a first name won't get past it. And going the other way, a longer name shouldn't be able to claim a shorter entry.","target":"再看看你的匹配测试对列表条目做了什么假设。如果它假设第一个名字后面总会有东西，那么一个*只有*名字的条目就通不过。反过来也是，一个更长的名字不应该能混进一个更短的条目。"},{"key":"notOnTheList.question","english":"What do I do when they're not on the list?","target":"如果他们不在名单上，我该怎么办？"},{"key":"notOnTheList.answer","english":"Then they get the string `\"Not on the list!\"`, exactly as written. Two things are worth thinking about here. First, at what point can you be *certain* that someone isn't on the list? Second, notice that this is a genuinely different answer from a guest who's invited but allowed 0 extra guests, so make sure your function never confuses the two.","target":"那么他们就得到字符串 `\"Not on the list!\"`，原样写出。这里有两件事值得想想。第一，你什么时候能*肯定*某人不在名单上？第二，注意这和一位被邀请但被允许带 0 个额外客人的宾客是截然不同的答案，所以确保你的函数永远不会*混淆*这两者。"}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in a list - the same length property you've used on strings (provided by level stdlib)","target":"列表中项目的数量——和你在字符串上用过的 length 属性一样（由关卡标准库提供）"},{"key":"length.category","english":"List Operations","target":"列表操作"},{"key":"startsWith.description","english":"Check whether a string begins with a smaller string (provided by level stdlib)","target":"检查一个字符串是否以一个较小的字符串开头（由关卡标准库提供）"},{"key":"startsWith.category","english":"String Operations","target":"字符串操作"}]}]}]
---

我们再次扮演门卫的角色。但这一次，我们面对的是余兴派对上的一线明星。

当这些人出现在你的派对上时，他们期望你只凭名字就能认出他们。布拉德·皮特不会费劲告诉你他的姓氏，他只会说“布拉德”，然后盯着你，好像是你自己尴尬似的。

今晚你的记事板上有两份名单。第一份是 `names`，包含了所有受邀者的全名。第二份是 `plusOnes`，列出了每位宾客被允许带来的额外人数（他们的“附带宾客”（英语：_plus-ones_））。这两份名单是逐条按相同顺序一起写下的，所以它们互相对齐。例如，names 列表的第三个条目与 plusOnes 列表的第三个条目对应的是同一个人。

编写一个名为 `plusOnesFor`（查询附带宾客数量）的函数。该函数有三个输入：`names` 列表、`plusOnes` 列表，以及正在你面前那位的**名字**。你应该返回那个人允许带来的额外宾客人数。

不过要小心。队伍正在排起来，而这些大腕可不会安静地排队。“布拉德”指的是布拉德·皮特，而不是布拉德利·库珀。而且其中一两位名人已经足够出名，连姓氏都省去了。

有些宾客被邀请了，但不允许带任何人同行，因此对于名单上的名字来说，`0` 是一个完全合理的答案。而完全不在名单上的人则是另一回事，对于他们，你应该返回字符串 `"Not on the list!"`，照原样写。

### 数组方法和属性

和字符串一样，数组也有方法和属性。在这个练习中，你可能会用到 `.length` 属性。它的工作方式与字符串版本完全相同，只不过它告诉你的是数组中有多少个元素，而不是字符串中有多少个字母。例如：

```js
["Jeremy", "Erik", "Aron"].length
// 3
```

玩得开心！
