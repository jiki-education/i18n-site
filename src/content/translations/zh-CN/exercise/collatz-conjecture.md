---
lang: "zh-CN"
type: "exercise"
slug: "collatz-conjecture"
title: "科拉茨猜想"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/collatz-conjecture"
en_md5: "6fbe47d0456ca4f5db8e74b3f6de3cb0"
governance_sha: "c80036b"
content_version: "b486bb909e60"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"calculateCollatzSteps.name","english":"Calculate Collatz steps","target":"计算科拉茨步数"},{"key":"calculateCollatzSteps.description","english":"Write a function that takes a number and returns how many steps it takes to reach 1 following the Collatz Conjecture rules: if even, divide by 2; if odd, multiply by 3 and add 1.","target":"编写一个函数，接收一个数字，并返回按照科拉茨猜想的规则到达 1 所需的步数：如果是偶数，除以 2；如果是奇数，乘以 3 再加 1。"}]},{"name":"scenarios","rows":[{"key":"number1.name","english":"Number 1","target":"数字 1"},{"key":"number1.description","english":"Zero steps for one.","target":"数字 1 需要 0 步。"},{"key":"number16.name","english":"Number 16","target":"数字 16"},{"key":"number16.description","english":"Divide if even.","target":"偶数则除以 2。"},{"key":"number12.name","english":"Number 12","target":"数字 12"},{"key":"number12.description","english":"Even and odd steps.","target":"包含偶数和奇数步骤。"},{"key":"number1000000.name","english":"Number 1000000","target":"数字 1000000"},{"key":"number1000000.description","english":"Large number of even and odd steps.","target":"大量奇偶交替的步数。"}]},{"name":"hints","rows":[{"key":"loopUntilOne.question","english":"How do I keep going until the number reaches 1?","target":"如何让循环一直运行，直到数字变为 1？"},{"key":"loopUntilOne.answer","english":"Use a `repeat()` loop with no number — it repeats forever until you `return` out of it. Inside the loop, replace the number with the next number in the sequence, and return once it reaches 1.","target":"使用不带数字的 `repeat()` 循环——它会一直重复，直到你用 `return` 跳出循环。在循环内部，将数字替换为序列中的下一个数字，并在它到达 1 时返回。"},{"key":"chooseRule.question","english":"How do I decide which rule to apply on each step?","target":"如何决定在每一步中应用哪条规则？"},{"key":"chooseRule.answer","english":"Check whether the number is even. The modulo operator does this. `number % 2 === 0` means it's even. If even, halve it. Otherwise, do `3 * number + 1`.","target":"检查数字是否是偶数。求模运算符可以做到这一点。`number % 2 === 0` 表示它是偶数。如果是偶数，就除以 2。否则，执行 `3 * number + 1`。"},{"key":"trackSteps.question","english":"How do I track the answer (the number of steps)?","target":"如何跟踪答案（步数）？"},{"key":"trackSteps.answer","english":"Keep a counter variable for how many times you've applied the rules. Think about what needs to happen to it each time round the loop, and what your function should return when the number reaches 1.","target":"用一个计数器变量记录你应用了多少次规则。思考每次循环时它需要如何变化，以及当数字到达 1 时，你的函数应该返回什么。"}]}]}]
---

一天晚上，你偶然发现了一本旧笔记本，里面满是神秘的潦草字迹，仿佛有人曾执着地追逐着某个想法。其中一页上，有一个问题格外醒目：**每个数字都能找到通往 1 的路吗？**它与所谓的**科拉茨猜想**有关，这个谜题几十年来一直困扰着众多思考者。

规则看似简单得不可思议：

1. 选择一个数字。
2. 如果是偶数，除以 2。
3. 如果是奇数，乘以 3 再加 1。
4. 对得到的结果重复此操作，无限继续。

例如，从 12 开始：

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

从第二个数字（6）开始计数，到达 1 一共用了 9 步。

创建一个名为 `collatzSteps`（科拉茨步数）的函数，它接收一个输入——一个数字。返回按照科拉茨猜想的规则，从任意给定数字到达 1 所需的**步数**。
