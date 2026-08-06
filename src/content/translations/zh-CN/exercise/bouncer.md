---
lang: "zh-CN"
type: "exercise"
slug: "bouncer"
title: "门卫"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/bouncer"
en_md5: "eefcfb32249cce303d014044e557b2af"
governance_sha: "c80036b"
content_version: "47405f74893c"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"age25NotLetIn","english":"The person is 25 — they should have been let in, but weren't.","target":"顾客 25 岁，本应被允许进入，但没有。"},{"key":"age18LetIn","english":"The person is 18 — they should not have been let in, but were.","target":"顾客 18 岁，本不应被允许进入，但被允许进入了。"},{"key":"age21NotLetIn","english":"The person is 21 — they should have been let in, but weren't.","target":"顾客 21 岁，本应被允许进入，但没有。"},{"key":"age20LetIn","english":"The person is exactly 20 — not over 20, so they should not have been let in, but were.","target":"顾客正好 20 岁，没有超过 20 岁，所以不应该被允许进入，但却被允许了。"}]},{"name":"tasks","rows":[{"key":"checkAge.name","english":"Check the person's age","target":"检查顾客的年龄"},{"key":"checkAge.description","english":"Get the person's age and check if they're over 20. If they are, let them in.","target":"获取顾客的年龄，并检查是否超过 20 岁。如果超过，就允许他们进入。"}]},{"name":"scenarios","rows":[{"key":"age25.name","english":"Age 25","target":"25 岁"},{"key":"age25.description","english":"The person is 25 years old — they should be let in.","target":"顾客 25 岁，应该被允许进入。"},{"key":"age18.name","english":"Age 18","target":"18 岁"},{"key":"age18.description","english":"The person is 18 years old — they should not be let in.","target":"顾客 18 岁，不应该被允许进入。"},{"key":"age21.name","english":"Age 21","target":"21 岁"},{"key":"age21.description","english":"The person is 21 years old — just above 20, they should be let in.","target":"顾客 21 岁，刚超过 20 岁，应该被允许进入。"},{"key":"age20.name","english":"Age 20","target":"20 岁"},{"key":"age20.description","english":"The person is exactly 20 — not over 20, so they should not be let in.","target":"顾客正好 20 岁，没有超过 20 岁，所以不应该被允许进入。"}]},{"name":"hints","rows":[{"key":"askAge.question","english":"How do I know their age?","target":"如何知道他们的年龄？"},{"key":"askAge.answer","english":"Use the `askAge()` function. It will return a different value in each scenario.","target":"使用`askAge()`函数。它会在每个场景中返回不同的值。"},{"key":"ifStatement.question","english":"How do I vary what I do?","target":"如何根据年龄采取不同行动？"},{"key":"ifStatement.answer","english":"Use an `if` statement - check the concept if you need more help!","target":"使用`if`语句——如果需要更多帮助，请查看相关概念！"}]},{"name":"describers","rows":[{"key":"askAge","english":"asked the person's age","target":"询问了顾客的年龄"},{"key":"letIn","english":"let the person in","target":"允许顾客进入"}]},{"name":"functions","rows":[{"key":"askAge.description","english":"Returns the **age** of the person waiting outside.","target":"返回在外面等待的顾客的**年龄**。"},{"key":"askAge.category","english":"Information","target":"信息"},{"key":"letIn.description","english":"Lets the person in.","target":"允许顾客进入。"},{"key":"letIn.category","english":"Action","target":"操作"}]}]}]
---

你正在为 The Neon Gates 酒吧编写一个机器人门卫的代码。这个机器人的工作是检查顾客的年龄，并决定是否允许他们进入。

你有两个函数：

- `askAge()`（询问年龄）返回在外面等待的人的年龄
- `letIn()`（允许进入）让人进去

该场所的规定是只允许 **21 岁及以上** 的人进入。

询问顾客的年龄，如果他们年龄足够，就让他们进去！
