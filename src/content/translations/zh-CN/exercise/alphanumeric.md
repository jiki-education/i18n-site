---
lang: "zh-CN"
type: "exercise"
slug: "alphanumeric"
title: "字母数字"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/alphanumeric"
en_md5: "c8cd152f90c7fb519617ff5757e02c36"
governance_sha: "c80036b"
content_version: "b05845fbd892"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"classifyString.name","english":"Classify a string","target":null},{"key":"classifyString.description","english":"Write helper functions to check if a string is alpha, numeric, or alphanumeric, then use them to classify the input string.","target":null},{"key":"useContinue.name","english":"Use continue","target":null},{"key":"useContinue.description","english":"In your isAlphanumeric check, once a character is a letter or a digit you're happy with it. Use continue to move straight on to the next character instead of nesting more conditions.","target":null}]},{"name":"scenarios","rows":[{"key":"duck.name","english":"Duck","target":null},{"key":"duck.description","english":"A purely alphabetic string should be classified as \"Alpha\".","target":null},{"key":"number.name","english":"42","target":null},{"key":"number.description","english":"A purely numeric string should be classified as \"Numeric\".","target":null},{"key":"alphanumeric.name","english":"Duck42","target":null},{"key":"alphanumeric.description","english":"A string with both letters and numbers should be classified as \"Alphanumeric\".","target":null},{"key":"notAlphanumeric1.name","english":"It's not 42!","target":null},{"key":"notAlphanumeric1.description","english":"A string with special characters should be classified as \"Unknown\".","target":null},{"key":"notAlphanumeric2.name","english":"42 Rubber Duck!","target":null},{"key":"notAlphanumeric2.description","english":"A string with spaces and special characters should be classified as \"Unknown\".","target":null},{"key":"alphanumericUsesContinue.name","english":"Used continue","target":null},{"key":"alphanumericUsesContinue.description","english":"Your solution works and uses continue to move past characters that are already accounted for.","target":null}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start when there are several functions to write?","target":null},{"key":"whereToStart.answer","english":"Pick the smallest helper first. Each helper loops over the characters of the string and asks the same kind of yes/no question about every one of them. Get one working and the others follow the same shape.","target":null},{"key":"checkAllLetters.question","english":"How do I check if every character in the input is a letter?","target":null},{"key":"checkAllLetters.answer","english":"Loop through each character and check whether it appears in the alphabet. A string's `.includes()` method answers exactly that: `\"...\".includes(char)`. Remember to include both lowercase and uppercase letters, otherwise a capital like the \"D\" in \"Duck\" won't count. If any character isn't in the alphabet, it isn't all alpha.","target":null},{"key":"checkAllDigits.question","english":"How do I do the same check for digits?","target":null},{"key":"checkAllDigits.answer","english":"Exactly the same pattern, but check against `\"0123456789\"` instead of the alphabet.","target":null},{"key":"alphanumericMeaning.question","english":"What does 'alphanumeric' mean. Does it mean both?","target":null},{"key":"alphanumericMeaning.answer","english":"Alphanumeric means each character is either a letter OR a digit. So for each character, if it's alpha you're happy, and if it's numeric you're also happy. Use `continue` to skip on. Only if it's neither should you reject.","target":null},{"key":"pickingLabels.question","english":"How do I pick between the four labels in whatAmI()?","target":null},{"key":"pickingLabels.answer","english":"Call all three helpers and use if/else. The order matters. Check the stricter cases ('alpha only' and 'numeric only') before 'alphanumeric', which is the looser case.","target":null}]},{"name":"checks","rows":[{"key":"mustUseContinue","english":"So close! Use `continue` to skip on to the next character.","target":null},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long.","target":null},{"key":"useIsAlpha","english":"This exercise wants you to write an `isAlpha()` helper and use it to classify the string.","target":null},{"key":"useIsNumeric","english":"This exercise wants you to write an `isNumeric()` helper and use it to classify the string.","target":null},{"key":"useIsAlphanumeric","english":"This exercise wants you to write an `isAlphanumeric()` helper and use it to classify the string.","target":null}]}]}]
---

在本练习中，你的任务是创建一些函数，用于检查字符串是否包含字母和/或数字。

你需要编写三个辅助函数：

- `isAlpha(string)`（判断是否全为字母）：确定一个字符串是否仅由 ASCII 字母组成（例如 "A"、"a"、"Hello"）
- `isNumeric(string)`（判断是否全为数字）：确定一个字符串是否仅由数字字符组成（例如 "0"、"1"、"456"）
- `isAlphanumeric(string)`（判断是否全为字母或数字）：确定一个字符串是否仅由 ASCII 字母或数字组成（例如 "Hello"、"42"、"Hello42"）

对于任何其他符号（例如 "! ?"）或非 ASCII 字符（例如 "じき"、"正直"），这三个函数都应该返回 false。

然后，编写一个 `whatAmI(string)`（判断字符串类型）函数，利用这些辅助函数对字符串进行分类：

- 只包含字母的字符串应返回 `"Alpha"`
- 只包含数字的字符串应返回 `"Numeric"`
- 同时包含字母和数字的字符串应返回 `"Alphanumeric"`
- 其他所有情况应返回 `"Unknown"`

### 运用你刚学到的知识

虽然有很多方法可以解决这个练习，但我们希望你给出的解法使用了 `continue` 语句以及上述三个函数。

这个练习还挑战你在不超过 42 行代码内完成整个任务。这个目标不一定是最佳生产级解法。多几行代码可能得到更优雅的答案，并且也存在更短的解法。但这是一个推动你能力提升的不错目标。

祝你愉快！
