---
lang: "zh-CN"
type: "exercise"
slug: "sign-price"
title: "招牌价格"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/sign-price"
en_md5: "213371ff2930f42dcaf9062f99d59618"
governance_sha: "c80036b"
content_version: "8be8b8fe95a8"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"你的代码行数太多了。可以缩短一些吗？"}]},{"name":"tasks","rows":[{"key":"calculateSignPrice.name","english":"Calculate Sign Price","target":"计算招牌价格"},{"key":"calculateSignPrice.description","english":"Write a function that calculates the price of a sign. Each letter costs $12. Spaces are free and should not be counted. Return the result as a formatted string.","target":"编写一个计算招牌价格的函数。每个字母收费 12 美元，空格免费且不计数。将结果作为格式化字符串返回。"},{"key":"solveInNineLines.name","english":"Solve in 9 lines of code","target":"用 9 行代码解决"},{"key":"solveInNineLines.description","english":"Can you solve this exercise with only 9 lines of code?","target":"你能只用 9 行代码完成这个练习吗？"}]},{"name":"scenarios","rows":[{"key":"simpleWord.name","english":"Simple word","target":"简单单词"},{"key":"simpleWord.description","english":"A single word with no spaces.","target":"一个没有空格的单字。"},{"key":"singleLetter.name","english":"Single letter","target":"单个字母"},{"key":"singleLetter.description","english":"A sign with just one letter.","target":"只有一个字母的招牌。"},{"key":"twoWords.name","english":"Two words","target":"两个单词"},{"key":"twoWords.description","english":"Two words with a space that should be skipped.","target":"两个单词间有一个空格，应被跳过。"},{"key":"multipleSpaces.name","english":"Multiple spaces","target":"多个空格"},{"key":"multipleSpaces.description","english":"Multiple words with several spaces to skip.","target":"多个单词，包含多个需要跳过的空格。"},{"key":"longText.name","english":"Long text","target":"长文本"},{"key":"longText.description","english":"A longer sign with more letters.","target":"一个更长的招牌，字母更多。"},{"key":"allSpaces.name","english":"All spaces","target":"全是空格"},{"key":"allSpaces.description","english":"A sign with only spaces has no letters to charge for.","target":"只有空格的招牌没有字母需要收费。"},{"key":"bonus1.name","english":"9 lines of code","target":"9 行代码"},{"key":"bonus1.description","english":"Solve the exercise with only 9 lines of code.","target":"只用 9 行代码完成练习。"}]},{"name":"hints","rows":[{"key":"whatCounting.question","english":"What am I actually counting?","target":"我实际上在计算什么？"},{"key":"whatCounting.answer","english":"Letters. Specifically, anything that isn't a space. So you want a counter that goes up for each non-space character in the sign text.","target":"字母。具体来说，任何不是空格的字符。因此你需要一个计数器，每遇到招牌文本中的一个非空格字符就加一。"},{"key":"loopCharacters.question","english":"How do I loop through the characters?","target":"如何遍历字符？"},{"key":"loopCharacters.answer","english":"A `for...of` loop gives you each character in turn, so you can look at them one at a time.","target":"使用 `for...of` 循环可以逐个获取字符，这样你就能一次查看一个字符。"},{"key":"checkSpace.question","english":"How do I check whether a character is a space?","target":"如何检查一个字符是否为空格？"},{"key":"checkSpace.answer","english":"Inside the loop, use an if-statement to compare the character against `\" \"`. Only count the character when it isn't a space.","target":"在循环内部，使用 if 语句将字符与 `\" \"` 进行比较。只有当字符不是空格时才计数。"},{"key":"buildResultString.question","english":"How do I build the result string?","target":"如何构建结果字符串？"},{"key":"buildResultString.answer","english":"Use string concatenation or template strings. Check the concepts if you need a reminder on these.","target":"使用字符串拼接或模板字符串。如果需要复习这些概念，可以查看相关概念页。"}]}]}]
---

你开了一家招牌制作店。每制作一块招牌，每个字母收费 12 美元。空格免费（不收费）。

编写一个名为 `signPrice`（招牌价格）的函数，它接收招牌的文本，并返回一条包含总价的格式化消息。该消息以 `"That will cost "`（意为“总共需要 $”）开头，后面跟着价格。例如：

- `signPrice("Burgers")`（7 个字母）应返回 `"That will cost $84"`
- `signPrice("Frank's Hotdogs")`（14 个字母，空格不计）应返回 `"That will cost $168"`

玩得开心！
