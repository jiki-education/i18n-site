---
lang: "zh-CN"
type: "exercise"
slug: "hello"
title: "你好"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hello"
en_md5: "0e1932189205e5eaa4f7ddfa58b16f6c"
governance_sha: "c80036b"
content_version: "4344de3bd2df"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createSayHelloFunction.name","english":"Create sayHello function","target":"创建 sayHello 函数"},{"key":"createSayHelloFunction.description","english":"Write a sayHello function that takes a name and returns a greeting in the format 'Hello, [name]!'.","target":"编写一个 sayHello 函数，它接收一个名字，并返回格式为 'Hello, [name]!' 的问候语。"}]},{"name":"scenarios","rows":[{"key":"helloAiko.name","english":"Greet Aiko","target":"向 Aiko 打招呼"},{"key":"helloAiko.description","english":"Return 'Hello, Aiko!'","target":"返回 'Hello, Aiko!'"},{"key":"helloPriya.name","english":"Greet Priya","target":"向 Priya 打招呼"},{"key":"helloPriya.description","english":"Return 'Hello, Priya!'","target":"返回 'Hello, Priya!'"},{"key":"helloMei.name","english":"Greet Mei","target":"向 Mei 打招呼"},{"key":"helloMei.description","english":"Return 'Hello, Mei!'","target":"返回 'Hello, Mei!'"}]},{"name":"hints","rows":[{"key":"answerShape.question","english":"What's the basic shape of the answer I'm trying to build?","target":"我要构建的答案的基本结构是什么？"},{"key":"answerShape.answer","english":"Three pieces joined together: the fixed start `\"Hello, \"`, then the name, then the fixed end `\"!\"`.","target":"三部分拼接在一起：固定的起始部分 `\"Hello, \"`，然后是名字，最后是固定的结束部分 `\"!\"`。"},{"key":"joinStrings.question","english":"How do I join strings together?","target":"如何拼接字符串？"},{"key":"joinStrings.answer","english":"Use concatenation with `+`, or a template string with `${}` placeholders, to stick all three pieces together into a single string.","target":"使用 `+` 进行拼接，或者使用带 `${}` 占位符的模板字符串，将这三部分合并成一个字符串。"}]}]}]
---

在接下来的两个练习中，我们将继续练习编写函数，并开始使用一些字符串操作。

首先，我们来看一个最简单的例子。

你的任务是创建一个名为 `sayHello(name)`（向特定名字的人打招呼）的函数。

它应该返回对这个人的问候，所以如果你写 `sayHello("Jeremy")`，函数应该返回 `"Hello, Jeremy!"`；如果你写 `sayHello("Nicole")`，它应该返回 `"Hello, Nicole!"`。

希望这会是一个快速的练习，并为下一个更有趣的练习打下基础。
