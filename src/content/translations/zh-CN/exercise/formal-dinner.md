---
lang: "zh-CN"
type: "exercise"
slug: "formal-dinner"
title: "正式晚宴"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/formal-dinner"
en_md5: "8d6a2f3dd90b3a487a6bf855f31ef025"
governance_sha: "c80036b"
content_version: "f40d47e69c19"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findGuestTable.name","english":"Find the Guest's Table","target":"查找客人的桌子"},{"key":"findGuestTable.description","english":"Write a function that takes the list of guests' full names, the matching list of table names, and an arriving guest announced as an honorific and a surname. Return the name of the table that guest is sitting at, or `\"No table found\"` if they aren't on the seating plan.","target":"编写一个函数，它接收客人全名列表、对应的桌名列表，以及一位以尊称加姓氏方式宣布的到达客人。返回该客人所坐的桌子名称；如果该客人不在座位安排上，则返回 `\"No table found\"`。"},{"key":"solveTightly.name","english":"Solve it tightly","target":"极简解法"},{"key":"solveTightly.description","english":"Bonus: this can be written far more compactly than you might expect. Can you get the whole solution down to just a handful of lines?","target":"附加题：这道题可以写得比想象中简短很多。你能把整个解法缩减到寥寥几行吗？"}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty seating plan","target":"空的座位安排"},{"key":"emptyList.description","english":"Nobody's sitting anywhere when the plan is empty.","target":"座位安排为空时，无人入座。"},{"key":"nameMissing.name","english":"Brad's turned away","target":"Brad 被拒之门外"},{"key":"nameMissing.description","english":"The name's not on the seating plan.","target":"该名字不在座位安排上。"},{"key":"namePresent.name","english":"Brad's shown to his seat","target":"Brad 被带到座位"},{"key":"namePresent.description","english":"Brad Pitt is on the plan, so Mr Pitt gets his table.","target":"Brad Pitt 在座位安排上，因此 Mr Pitt 得到了他的桌子。"},{"key":"differentHonorific.name","english":"Knight of the realm","target":"王国骑士"},{"key":"differentHonorific.description","english":"A different honorific, and a guest who isn't first on the plan.","target":"使用另一种尊称，且该客人并非座位安排上的第一个。"},{"key":"bondSeated.name","english":"Mr Bond, I presume","target":"看来是 Bond 先生"},{"key":"bondSeated.description","english":"James Bond is on the plan.","target":"James Bond 在座位安排上。"},{"key":"bondNotSeated.name","english":"Hmmm... Mr Bond, I presume","target":"嗯... 是 Bond 先生吗？"},{"key":"bondNotSeated.description","english":"Only Jason Bourne is on the plan, not James Bond.","target":"座位安排上只有 Jason Bourne，没有 James Bond。"},{"key":"partialSurname.name","english":"Not quite Mr Pitt","target":"并非 Pitt 先生"},{"key":"partialSurname.description","english":"Neither Ada Spitt nor Hugo Ross-Pitt is Mr Pitt, so he has no seat here.","target":"Ada Spitt 和 Hugo Ross-Pitt 都不是 Mr Pitt，因此他在这里没有座位。"},{"key":"lloydWebber.name","english":"How about a Baron?","target":"男爵呢？"},{"key":"lloydWebber.description","english":"Baron Lloyd Webber has two words in his surname.","target":"Baron Lloyd Webber 的姓氏包含两个单词。"},{"key":"markWebber.name","english":"Is Mark the Baron?","target":"Mark 是男爵吗？"},{"key":"markWebber.description","english":"A different Webber doesn't count - the surname has to match in full.","target":"不同的 Webber 不算——姓氏必须完全匹配。"},{"key":"formalDinnerBonusLineCount.name","english":"Neat and tidy: Lord Doyle","target":"干净利落：Lord Doyle"},{"key":"formalDinnerBonusLineCount.description","english":"The same seating plan as before, but this time your solution has to fit into a much smaller number of lines.","target":"同样的座位安排，但这次你的解法必须精简到极少的行数。"}]},{"name":"hints","rows":[{"key":"twoLists.question","english":"How do the two lists relate to each other?","target":"两个列表之间是什么关系？"},{"key":"twoLists.answer","english":"They're a pair. The first guest sits at the first table, the second guest at the second table, and so on. So it's not enough to know *that* a guest is on the plan - you need to know *where* on the plan they are.","target":"它们是一一对应的。第一位客人坐第一张桌子，第二位客人坐第二张桌子，依此类推。因此，仅仅知道一位客人在座位安排上还不够——你需要知道他在座位安排上的*位置*。"},{"key":"comparingNames.question","english":"The guest says 'Mr Pitt' but the plan says 'Brad Pitt'. How do I compare those?","target":"客人说“Mr Pitt”，但座位安排上是“Brad Pitt”。该如何比较它们？"},{"key":"comparingNames.answer","english":"Those two strings will never be equal, so a straight comparison won't get you anywhere. Have a think about which part of what the guest announced actually appears on the plan, and whereabouts in the plan's entry you'd expect to find it.","target":"这两个字符串永远不相等，所以直接比较是行不通的。想一想客人报出的信息中有哪一部分真正出现在了座位安排上，以及你预期会在座位安排条目中的哪个位置找到它。"},{"key":"lookalikeSurnames.question","english":"Could a surname match the wrong guest?","target":"姓氏会不会错误匹配到别的客人？"},{"key":"lookalikeSurnames.answer","english":"It absolutely could. Read 'Ada Spitt' and 'Hugo Ross-Pitt' out loud, and then think about Mr Pitt. Ask yourself what makes a surname a real surname on that line, rather than just some letters that happen to sit at the end of it.","target":"完全有可能。大声读一下“Ada Spitt”和“Hugo Ross-Pitt”，然后再想想 Mr Pitt。问问自己，是什么让那一行中的某个部分成为真正的姓氏，而不仅仅是恰好出现在末尾的几个字母。"},{"key":"noMatch.question","english":"What should I return when nobody matches?","target":"当没有人匹配时，应该返回什么？"},{"key":"noMatch.answer","english":"The string `\"No table found\"`, exactly as written. The trickier bit is knowing when you're allowed to say it. If you've checked the very first guest on the plan and they're not your man, do you actually know yet that he isn't seated somewhere?","target":"返回字符串 `\"No table found\"`，一字不差。更难的部分在于，要明白你什么时候才能这么说。如果你只检查了座位安排上的第一位客人，发现他不是你要找的人，你就能确定他没有入座吗？"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"加油！试试看能不能用更少的行数来解答。"}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in a list - the same length property you've used on strings (provided by level stdlib)","target":"列表中项目的数量——与你在字符串上使用过的相同的 length 属性（由关卡标准库提供）"},{"key":"length.category","english":"List Operations","target":"列表操作"},{"key":"split.description","english":"Split a string into a list of pieces, breaking at each separator (provided by level stdlib)","target":"按照分隔符将字符串拆分成一个片段列表（由关卡标准库提供）"},{"key":"split.category","english":"String Operations","target":"字符串操作"},{"key":"slice.description","english":"Make a new list from part of a list, starting at a position (provided by level stdlib)","target":"从列表的某个位置开始，提取一部分元素构成新列表（由关卡标准库提供）"},{"key":"slice.category","english":"List Operations","target":"列表操作"},{"key":"join.description","english":"Join the items of a list into one string, with a separator between them (provided by level stdlib)","target":"将列表中的项目连接成一个字符串，项目之间用分隔符隔开（由关卡标准库提供）"},{"key":"join.category","english":"List Operations","target":"列表操作"},{"key":"endsWith.description","english":"Check whether a string ends with a smaller string (provided by level stdlib)","target":"检查一个字符串是否以另一个较短的字符串结尾（由关卡标准库提供）"},{"key":"endsWith.category","english":"String Operations","target":"字符串操作"}]}]}]
---

你又回来当你的兼职门卫了。那是“余兴派对”之后的晚上，又有一场派对。这一次是正式晚宴，所以今晚你不再是一个“门口的大块头”，而更像是一个“拿着写字板和漂亮马甲的人”。

这里绝对不是只用**名字**的场合。事实上，这里根本不会使用你的名字。在这里，每个人都以尊称（英语：honorific）加姓氏来称呼——比如小姐、先生、博士等。

组织者给了你两份独立的座位安排表。一份是客人的全名，另一份是每位客人所在桌子的名称（桌名以树木和花朵命名）。和“余兴派对”一样，这份列表是对齐的：第一个列表中位置 3 的客人就坐在第二个列表中位置 3 的桌子。

所以当 Mr Pitt 潇洒地走进来时，你需要判断出他就是你名单上的“Brad Pitt”，然后告诉他坐在哪一桌。

编写一个名为 `tableFor`（查找每位客人所坐的桌子）的函数。这个函数有三个输入：

- 第一个是客人的全名列表，为字符串类型
- 第二个是桌名列表，顺序与客人列表相同
- 第三个是到达的客人，格式为尊称后跟姓氏（例如“Mr Pitt”）

返回客人所坐的桌子名称。如果客人完全不在座位安排上，则返回字符串 `"No table found"`（这里不许蒙混过关！）。

尊称总是一个单词，其后的所有内容都是客人的姓氏。大多数姓氏是一个单词，但少数显赫的姓氏有两个单词。

不过要小心：很多姓氏看起来很像其他姓氏。

### 字符串/数组方法及属性

除了你在上一道练习中学过的 `.length` 属性外，还有四个方法可能会对你有用。解决这道练习的方法有很多，但借助这几个方法，你可以得到最短的解决方案。

`"...".split(substring)` 方法会使用另一个字符串来分割字符串。例如：

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` 方法会截取数组的一部分，从索引 `start` 开始，一直取到数组末尾。截取的元素会被复制到一个新的数组中并返回给你。实际上，这就是丢弃了前 `start` 个元素。例如：

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)` 方法会用指定的字符串将数组元素连接起来。例如：

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)` 方法会告诉你一个字符串是否以另一个字符串结尾。例如：

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
