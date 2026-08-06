---
lang: "zh-CN"
type: "exercise"
slug: "leap"
title: "闰年"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/leap"
en_md5: "0e6c7c50ad01b4d9fe07d721fd973afb"
governance_sha: "c80036b"
content_version: "113fbfa98b35"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanOneLine","english":"You used more than one line of code within the function.","target":"你在函数中使用了不止一行代码。"}]},{"name":"tasks","rows":[{"key":"determineLeapYear.name","english":"Determine if the year is a leap year","target":"判断年份是否为闰年"},{"key":"determineLeapYear.description","english":"Write a function called isLeapYear that takes a year as its input and returns true if it is a leap year, or false if it is not.","target":"编写一个名为 isLeapYear 的函数，它接收一个年份作为输入，如果是闰年则返回 true，否则返回 false。"},{"key":"solveInOneLine.name","english":"Solve in one line of code","target":"用一行代码完成"},{"key":"solveInOneLine.description","english":"Can you solve this with only one line of code within the function?","target":"你能仅用函数内的一行代码完成吗？"}]},{"name":"scenarios","rows":[{"key":"year2015.name","english":"Year 2015","target":"2015 年"},{"key":"year2015.description","english":"2015 is not divisible by 4 so is not a leap year.","target":"2015 不能被 4 整除，所以不是闰年。"},{"key":"year1970.name","english":"Year 1970","target":"1970 年"},{"key":"year1970.description","english":"1970 is not divisible by 4 so is not a leap year.","target":"1970 不能被 4 整除，所以不是闰年。"},{"key":"year2100.name","english":"Year 2100","target":"2100 年"},{"key":"year2100.description","english":"2100 is divisible by 100 but not by 400 so is not a leap year.","target":"2100 能被 100 整除但不能被 400 整除，所以不是闰年。"},{"key":"year1900.name","english":"Year 1900","target":"1900 年"},{"key":"year1900.description","english":"1900 is divisible by 100 but not by 400 so is not a leap year.","target":"1900 能被 100 整除但不能被 400 整除，所以不是闰年。"},{"key":"year1800.name","english":"Year 1800","target":"1800 年"},{"key":"year1800.description","english":"1800 is divisible by 100 but not by 400 so is not a leap year.","target":"1800 能被 100 整除但不能被 400 整除，所以不是闰年。"},{"key":"year2000.name","english":"Year 2000","target":"2000 年"},{"key":"year2000.description","english":"2000 is divisible by 400 so is a leap year.","target":"2000 能被 400 整除，所以是闰年。"},{"key":"year2400.name","english":"Year 2400","target":"2400 年"},{"key":"year2400.description","english":"2400 is divisible by 400 so is a leap year.","target":"2400 能被 400 整除，所以是闰年。"},{"key":"year1996.name","english":"Year 1996","target":"1996 年"},{"key":"year1996.description","english":"1996 is divisible by 4 but not by 100 so is a leap year.","target":"1996 能被 4 整除但不能被 100 整除，所以是闰年。"},{"key":"year1960.name","english":"Year 1960","target":"1960 年"},{"key":"year1960.description","english":"1960 is divisible by 4 but not by 100 so is a leap year.","target":"1960 能被 4 整除但不能被 100 整除，所以是闰年。"},{"key":"bonus1.name","english":"One line of code","target":"一行代码"},{"key":"bonus1.description","english":"Solve the exercise with only one line of code within the function.","target":"只用函数内的一行代码完成练习。"}]},{"name":"hints","rows":[{"key":"basicRule.question","english":"What's the basic rule for a leap year?","target":"闰年的基本规则是什么？"},{"key":"basicRule.answer","english":"Years divisible by 4 are leap years. So `year % 4 === 0` is the starting test.","target":"能被 4 整除的年份是闰年。所以 `year % 4 === 0` 是起始的判断条件。"},{"key":"exceptions.question","english":"Are there exceptions?","target":"有例外吗？"},{"key":"exceptions.answer","english":"Yes. Years divisible by 100 are NOT leap years, even though they're divisible by 4. For example, 1900 isn't a leap year.","target":"有的。能被 100 整除的年份不是闰年，即使它们也能被 4 整除。例如，1900 年就不是闰年。"},{"key":"exceptionsToExceptions.question","english":"Are there exceptions to the exception?","target":"例外中还有例外吗？"},{"key":"exceptionsToExceptions.answer","english":"Yes. Years divisible by 400 ARE leap years after all. For example, 2000 is. So the rule cascades: divisible by 4, but not by 100, unless also by 400.","target":"是的。能被 400 整除的年份仍然是闰年。例如，2000 年就是。所以规则层层递进：能被 4 整除，但不能被 100 整除，除非也能被 400 整除。"},{"key":"checkDivisibility.question","english":"How do I check divisibility?","target":"如何判断整除？"},{"key":"checkDivisibility.answer","english":"Use the remainder operator `%`. `year % 4 === 0` is true when the year divides exactly by 4 with nothing left over. Same trick with 100 and 400.","target":"使用求模运算符 `%`。`year % 4 === 0` 表示该年份能被 4 整除，无余数。对 100 和 400 同样适用。"}]}]}]
---

在本练习中，我们来探索闰年！

闰年（公历）的规则是：

- 能被 4 整除的年份是闰年。
- 但如果该年份能被 100 整除，那么只有当它同时也能被 400 整除时，才是闰年。

举几个例子：

- 1997 年不是闰年，因为它不能被 4 整除。
- 1900 年不是闰年，因为它不能被 400 整除。
- 2000 年是闰年！

你的任务是编写一个名为 `isLeapYear`（判断闰年）的函数，它接收一个年份作为输入，如果该年是闰年，则返回 `true`，否则返回 `false`。

别着急，先想清楚再动手！
