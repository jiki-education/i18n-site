---
lang: "zh-CN"
type: "exercise"
slug: "driving-test"
title: "驾驶考试"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/driving-test"
en_md5: "98e0dc4c13cbedbd859f1cf05363faa2"
governance_sha: "c80036b"
content_version: "787bb19b3567"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"你的解答代码行数太多了，能写得更短吗？"}]},{"name":"tasks","rows":[{"key":"didTheyPass.name","english":"Did They Pass?","target":"通过了吗？"},{"key":"didTheyPass.description","english":"Write a function that analyzes driving test marks and determines if the student passed. A student fails if they have any major faults (💥) or 5 or more minor faults (❌).","target":"编写一个函数，分析驾驶考试的标记并判断学员是否通过。如果学员有任何大错（💥）或5个及以上小错（❌），则不通过。"},{"key":"solveInElevenLines.name","english":"Solve in 12 lines of code","target":"用12行代码解决"},{"key":"solveInElevenLines.description","english":"Can you solve this exercise with only 12 lines of code?","target":"你能只用12行代码完成这个练习吗？"}]},{"name":"scenarios","rows":[{"key":"perfectMarks.name","english":"The perfect student!","target":"完美的学员！"},{"key":"perfectMarks.description","english":"They did everything right - wow!","target":"他们全都做对了——真厉害！"},{"key":"dangerous.name","english":"Danger to society","target":"马路杀手！"},{"key":"dangerous.description","english":"We can't let this one on the road!","target":"我们可不能让他上路！"},{"key":"oneBigMistake.name","english":"One big mistake","target":"一个大错"},{"key":"oneBigMistake.description","english":"One big mistake is all it takes to fail!","target":"只犯一个大错就会不通过！"},{"key":"scrapedThrough.name","english":"Scraped through","target":"勉强通过"},{"key":"scrapedThrough.description","english":"They cut it close but they passed!","target":"他们惊险地通过了！"},{"key":"oneMistakeTooMany.name","english":"One mistake too many!","target":"多了一个小错！"},{"key":"oneMistakeTooMany.description","english":"All those little errors added up.","target":"所有的小错加起来就导致不通过了。"},{"key":"bonus1.name","english":"12 lines of code","target":"12行代码"},{"key":"bonus1.description","english":"Solve the exercise with only 12 lines of code.","target":"只用12行代码完成这个练习。"}]},{"name":"hints","rows":[{"key":"lookAtEachMark.question","english":"How do I look at each individual mark?","target":"我该如何逐个查看每个标记？"},{"key":"lookAtEachMark.answer","english":"Loop through the marks string one character at a time. Each character is either ✅, ❌, or 💥.","target":"遍历标记字符串，一次一个字符。每个字符要么是✅，要么是❌，要么是💥。"},{"key":"emojiInQuotes.question","english":"Why is my code complaining about 💥?","target":"为什么我的代码遇到💥会报错？"},{"key":"emojiInQuotes.answer","english":"Emoji like 💥 and ❌ still need to be wrapped in quotation marks. They're characters in a string just like letters are.","target":"像💥和❌这样的表情符号也需要用引号括起来。它们和字母一样，都是字符串里的字符。"},{"key":"majorFault.question","english":"What should I do when I see a 💥 (major)?","target":"当我看到💥（大错）时该怎么办？"},{"key":"majorFault.answer","english":"Any single major fails the test, no matter what else has happened. So you can return `false` straight away as soon as you see one. There's no need to keep looking.","target":"任何单个大错都会导致考试不通过，无论之前发生了什么。所以只要你看到一个💥，就可以立即返回`false`，没必要继续查看了。"},{"key":"minorCount.question","english":"How do I handle minors, where the count matters?","target":"对于小错，计数很关键，我该怎么处理？"},{"key":"minorCount.answer","english":"Keep a counter variable and add 1 to it each time you see a ❌. Ignore the ✅s, they don't change anything.","target":"维护一个计数变量，每次看到❌就加1。忽略✅，它们不影响结果。"},{"key":"finalCheck.question","english":"What do I check at the end?","target":"最后需要检查什么？"},{"key":"finalCheck.answer","english":"Once the loop's finished and you haven't seen a major, the test passes if there were fewer than 5 minors. Return `true` if the minor count is less than 5, otherwise `false`.","target":"循环结束后，如果没有遇到大错，那么当小错少于5个时考试就通过。如果小错计数少于5，返回`true`，否则返回`false`。"}]}]}]
---

在英国参加驾驶考试时，你会在多个方面被评分，比如观察能力、技术技能、停车等。

你允许犯一些小错（“小错”），但不能犯大错（“大错”）。如果犯了一个大错，或者 5 个或以上的小错，你就不通过。否则，他们就会让你上路开车！

在你空闲时间，你负责监考这些驾驶考试。当学员开车时，你记录每个方面的表现：

- 如果他们犯了小错，就在表格上加一个 ❌
- 如果他们犯了大错，就加一个 💥
- 如果他们顺利通过了那个方面，就写一个 ✅

编写一个名为 `didTheyPass`（判断是否通过）的函数，它接收一个包含通过（✅）、小错（❌）和大错（💥）符号的字符串作为输入。它需要判断是否通过，如果通过返回 `true`，否则返回 `false`。
