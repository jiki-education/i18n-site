---
lang: "zh-CN"
type: "exercise"
slug: "two-fer"
title: "两份"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/two-fer"
en_md5: "7e59867ebe08e4bd9b598aae4a8be76a"
governance_sha: "c80036b"
content_version: "ef6904f5e098"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"你使用了超过 6 行代码。"}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"创建 twoFer 函数"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"编写一个 twoFer 函数，接受一个名字，并返回 'One for [name], one for me.'。如果没有提供名字（空字符串），则使用 'you' 代替名字。"},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"用 6 行代码解决"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"你能只用 6 行代码完成这个练习吗？"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"未提供名字"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"未提供名字，因此返回 'One for you, one for me.'。"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"名字为 Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"她的名字是 'Alice'，因此返回 'One for Alice, one for me.'。"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"名字为 Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"他的名字是 'Tom'，因此返回 'One for Tom, one for me.'。"},{"key":"bonus1.name","english":"Six lines of code","target":"6 行代码"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"只用 6 行代码解决这个练习。"}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"根据输入，什么会发生变化？"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"只有一样。句子中间的名字。如果提供了名字，就使用它。如果没有，就使用默认的 `\"you\"`。"},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"如何检查“是否提供了名字”？"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"用一个 if 语句将输入与空字符串 `\"\"` 进行比较。如果为空，则使用 `\"you\"`。否则，使用输入。"},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"如何构建最终的句子？"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"使用拼接（`+`）或模板字符串将三个部分（`\"One for \"`、所选名字和 `\", one for me.\"`）连接起来。"}]}]}]
---

现在我们要在那个简单的“Hello”练习的基础上增加一些额外的规则。

在某些英语口音中，快速说“two for”时听起来像“two fer”。Two-for-one 是一种说法，意思是如果你买一个，可以免费再得一个。

想象一家面包店有节日优惠：两块饼干只收一块的钱。你接受了这个优惠，并决定把多出的那块饼干送给别人。

你的任务是确定送饼干时你会说什么。

- 如果你知道对方的名字（例如 Alice），你会说：“One for Alice, one for me.”
- 如果你不知道对方的名字，你会说：“One for you, one for me.”

编写一个名为 `twoFer(name)`（两份）的函数，返回相应的对话。

以下是一些例子：

| 函数调用           | 返回值                          |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

作为附加挑战，你能**只用 6 行代码**完成吗？

祝你好运！
