---
lang: "zh-CN"
type: "exercise"
slug: "raindrops"
title: "雨滴声"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/raindrops"
en_md5: "0bf4b9da3621fc60bdeab8dd785c918a"
governance_sha: "c80036b"
content_version: "c470a079ff08"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixteenLines","english":"You used more than sixteen lines of code.","target":"你使用了超过十六行的代码。"}]},{"name":"tasks","rows":[{"key":"plings.name","english":"Plings","target":"Pling 声音"},{"key":"plings.description","english":"Start off by getting the Pling sounds right. If the number is divisible by 3, return \"Pling\".","target":"首先，确保 Pling 声音正确。如果数字能被 3 整除，返回 \"Pling\"。"},{"key":"plangs.name","english":"Plangs","target":"Plang 声音"},{"key":"plangs.description","english":"Now get the Plang sounds right. If the number is divisible by 5, add \"Plang\" to the result. If it's divisible by both 3 and 5, return \"PlingPlang\".","target":"现在，确保 Plang 声音正确。如果数字能被 5 整除，将 \"Plang\" 添加到结果中。如果它能同时被 3 和 5 整除，返回 \"PlingPlang\"。"},{"key":"plongs.name","english":"Plongs","target":"Plong 声音"},{"key":"plongs.description","english":"Now get the Plong sounds right. If the number is divisible by 7, add \"Plong\" to the result. Numbers can be divisible by multiple factors.","target":"现在，确保 Plong 声音正确。如果数字能被 7 整除，将 \"Plong\" 添加到结果中。数字可以被多个因数整除。"},{"key":"noSound.name","english":"Numbers with no raindrop sound","target":"没有雨滴声的数字"},{"key":"noSound.description","english":"Finally, if the number is not divisible by 3, 5, or 7, return the number itself as a string.","target":"最后，如果数字不能被 3、5 或 7 整除，返回数字本身的字符串形式。"},{"key":"solveInSixteenLines.name","english":"Solve in sixteen lines of code","target":"用十六行代码解答"},{"key":"solveInSixteenLines.description","english":"Can you solve this with only sixteen lines of code?","target":"你能只用十六行代码解答这道题吗？"}]},{"name":"scenarios","rows":[{"key":"number3.name","english":"Number 3","target":"数字 3"},{"key":"number3.description","english":"If 3 is input, return \"Pling\".","target":"如果输入数字 3，返回 \"Pling\"。"},{"key":"number27.name","english":"Number 27","target":"数字 27"},{"key":"number27.description","english":"If 27 is input, return \"Pling\".","target":"如果输入数字 27，返回 \"Pling\"。"},{"key":"number5.name","english":"Number 5","target":"数字 5"},{"key":"number5.description","english":"If 5 is input, return \"Plang\".","target":"如果输入数字 5，返回 \"Plang\"。"},{"key":"number3125.name","english":"Number 3125","target":"数字 3125"},{"key":"number3125.description","english":"If 3125 is input, return \"Plang\".","target":"如果输入数字 3125，返回 \"Plang\"。"},{"key":"number15.name","english":"Number 15","target":"数字 15"},{"key":"number15.description","english":"If 15 is input, return \"PlingPlang\".","target":"如果输入数字 15，返回 \"PlingPlang\"。"},{"key":"number7.name","english":"Number 7","target":"数字 7"},{"key":"number7.description","english":"If 7 is input, return \"Plong\".","target":"如果输入数字 7，返回 \"Plong\"。"},{"key":"number21.name","english":"Number 21","target":"数字 21"},{"key":"number21.description","english":"If 21 is input, return \"PlingPlong\".","target":"如果输入数字 21，返回 \"PlingPlong\"。"},{"key":"number35.name","english":"Number 35","target":"数字 35"},{"key":"number35.description","english":"If 35 is input, return \"PlangPlong\".","target":"如果输入数字 35，返回 \"PlangPlong\"。"},{"key":"number105.name","english":"Number 105","target":"数字 105"},{"key":"number105.description","english":"If 105 is input, return \"PlingPlangPlong\".","target":"如果输入数字 105，返回 \"PlingPlangPlong\"。"},{"key":"number8.name","english":"Number 8","target":"数字 8"},{"key":"number8.description","english":"If 8 is input, return \"8\".","target":"如果输入数字 8，返回 \"8\"。"},{"key":"number52.name","english":"Number 52","target":"数字 52"},{"key":"number52.description","english":"If 52 is input, return \"52\".","target":"如果输入数字 52，返回 \"52\"。"},{"key":"bonus1.name","english":"Sixteen lines of code","target":"十六行代码"},{"key":"bonus1.description","english":"Solve the exercise with only sixteen lines of code.","target":"用十六行代码解答该练习。"}]},{"name":"hints","rows":[{"key":"onlyOneSound.question","english":"Why does my function only return one sound?","target":"为什么我的函数只返回一种声音？"},{"key":"onlyOneSound.answer","english":"If you `return` inside each `if`, you give up as soon as the first divisor matches. You want to combine them. Instead of returning, append the sound to a result string and keep going.","target":"如果你在每个 `if` 语句中都 `return`，那么第一个匹配的除数就会让你提前退出。你需要把它们组合起来。不要直接返回，而是将声音添加到结果字符串后面，然后继续检查。"},{"key":"buildCombinedSound.question","english":"How do I build up the combined sound?","target":"如何构建组合声音？"},{"key":"buildCombinedSound.answer","english":"Start with an empty result string. For each divisor (3, 5, 7), if it divides the number, append the corresponding sound onto the end of the result using concatenation with `+`.","target":"从一个空的结果字符串开始。对于每个除数（3、5、7），如果它能整除该数字，就用 `+` 拼接将对应的声音追加到结果的末尾。"},{"key":"noneMatch.question","english":"What if none of the divisors match?","target":"如果没有除数匹配怎么办？"},{"key":"noneMatch.answer","english":"If the result is still empty after all three checks, the answer is just the number itself as a string. Convert the number and return that.","target":"如果三次检查后结果仍为空，答案就是数字本身的字符串形式。将数字转换然后返回它。"},{"key":"convertToString.question","english":"I return the number but it wants me to return it as a string. How do I do that?","target":"我返回了数字，但要求返回字符串，我该怎么做？"},{"key":"convertToString.answer","english":"Numbers and strings are different types, even if they look the same. You can convert a number to a string by putting it inside a template string with `${...}`.","target":"数字和字符串是不同的类型，即使它们看起来一样。你可以通过将数字放入带有 `${...}` 的模板字符串中来将其转换为字符串。"},{"key":"howManyReturns.question","english":"How many return statements should I have?","target":"我应该有几个 return 语句？"},{"key":"howManyReturns.answer","english":"Just one or two, typically. The whole point is letting the if-statements modify the result string, then returning that result once at the end.","target":"通常一到两个就够了。关键在于让 if 语句修改结果字符串，最后一次性返回它。"}]}]}]
---

Raindrops 是经典编程面试题 FizzBuzz 的一个变体。

你的任务是，编写程序，根据一个数字输出对应的雨滴声。

实现方式是判断该数字能被哪些数字整除（例如，数字 10 能被 1、2、5 和 10 整除；数字 12 能被 1、2、3、4、6 和 12 整除）。

给定一个数字，如果它：

- 能被 3 整除，则在结果中添加 "Pling"。
- 能被 5 整除，则在结果中添加 "Plang"。
- 能被 7 整除，则在结果中添加 "Plong"。
- 不能被 3、5 或 7 整除，结果应为该数字对应的字符串。

你需要创建一个名为 `raindrops(num)`（输入数字，返回雨滴声）的函数，它接收一个数字作为输入，并返回对应的雨滴声。

使用拼接（英语：concatenation）（`+`）或模板字符串（英语：template string）来构建结果字符串。

### 示例

- `raindrops(28)` 返回 "Plong"，因为 28 能被 7 整除，但不能被 3 或 5 整除。
- `raindrops(30)` 返回 "PlingPlang"，因为 30 能被 3 和 5 整除，但不能被 7 整除。
- `raindrops(34)` 返回 "34"，因为 34 不能被 3、5 或 7 整除。
