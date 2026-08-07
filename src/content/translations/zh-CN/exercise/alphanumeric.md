---
lang: "zh-CN"
type: "exercise"
slug: "alphanumeric"
title: "字母数字"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/alphanumeric"
en_md5: "c8cd152f90c7fb519617ff5757e02c36"
governance_sha: "90a620a"
content_version: "05e120b347bc"
published_at: "2026-08-07"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"classifyString.name","english":"Classify a string","target":"分类字符串"},{"key":"classifyString.description","english":"Write helper functions to check if a string is alpha, numeric, or alphanumeric, then use them to classify the input string.","target":"编写辅助函数以检查字符串是否为字母、数字或字母数字，然后使用它们对输入字符串进行分类。"},{"key":"useContinue.name","english":"Use continue","target":"使用 continue"},{"key":"useContinue.description","english":"In your isAlphanumeric check, once a character is a letter or a digit you're happy with it. Use continue to move straight on to the next character instead of nesting more conditions.","target":"在 isAlphanumeric 检查中，当一个字符是字母或数字时，你已经确认它没问题。使用 continue 直接跳到下一个字符，而不是嵌套更多的条件。"}]},{"name":"scenarios","rows":[{"key":"duck.name","english":"Duck","target":"Duck"},{"key":"duck.description","english":"A purely alphabetic string should be classified as \"Alpha\".","target":"纯字母的字符串应分类为 \"Alpha\"。"},{"key":"number.name","english":"42","target":"42"},{"key":"number.description","english":"A purely numeric string should be classified as \"Numeric\".","target":"纯数字的字符串应分类为 \"Numeric\"。"},{"key":"alphanumeric.name","english":"Duck42","target":"Duck42"},{"key":"alphanumeric.description","english":"A string with both letters and numbers should be classified as \"Alphanumeric\".","target":"同时包含字母和数字的字符串应分类为 \"Alphanumeric\"。"},{"key":"notAlphanumeric1.name","english":"It's not 42!","target":"It's not 42!"},{"key":"notAlphanumeric1.description","english":"A string with special characters should be classified as \"Unknown\".","target":"包含特殊字符的字符串应分类为 \"Unknown\"。"},{"key":"notAlphanumeric2.name","english":"42 Rubber Duck!","target":"42 Rubber Duck!"},{"key":"notAlphanumeric2.description","english":"A string with spaces and special characters should be classified as \"Unknown\".","target":"包含空格和特殊字符的字符串应分类为 \"Unknown\"。"},{"key":"alphanumericUsesContinue.name","english":"Used continue","target":"使用了 continue"},{"key":"alphanumericUsesContinue.description","english":"Your solution works and uses continue to move past characters that are already accounted for.","target":"你的解法有效，并且使用了 continue 来跳过已经处理过的字符。"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start when there are several functions to write?","target":"当需要编写多个函数时，我应该从哪里开始？"},{"key":"whereToStart.answer","english":"Pick the smallest helper first. Each helper loops over the characters of the string and asks the same kind of yes/no question about every one of them. Get one working and the others follow the same shape.","target":"先从最小的辅助函数开始。每个辅助函数都会遍历字符串中的每个字符，并对每个字符进行同样的是/否判断。先让其中一个运行起来，其他的就会遵循同样的模式。"},{"key":"checkAllLetters.question","english":"How do I check if every character in the input is a letter?","target":"如何检查输入中的每个字符是否都是字母？"},{"key":"checkAllLetters.answer","english":"Loop through each character and check whether it appears in the alphabet. A string's `.includes()` method answers exactly that: `\"...\".includes(char)`. Remember to include both lowercase and uppercase letters, otherwise a capital like the \"D\" in \"Duck\" won't count. If any character isn't in the alphabet, it isn't all alpha.","target":"遍历每个字符，检查它是否出现在字母表中。字符串的 `.includes()` 方法正好能回答这个问题：`\"...\".includes(char)`。记得要包含小写和大写字母，否则像 \"Duck\" 中的 \"D\" 这样的大写字母就不会被计入。如果任何一个字符不在字母表中，那就不是全字母。"},{"key":"checkAllDigits.question","english":"How do I do the same check for digits?","target":"如何对数字进行同样的检查？"},{"key":"checkAllDigits.answer","english":"Exactly the same pattern, but check against `\"0123456789\"` instead of the alphabet.","target":"完全相同的模式，只不过检查的是 `\"0123456789\"` 而不是字母表。"},{"key":"alphanumericMeaning.question","english":"What does 'alphanumeric' mean. Does it mean both?","target":"“字母数字”是什么意思？是指同时包含两者吗？"},{"key":"alphanumericMeaning.answer","english":"Alphanumeric means each character is either a letter OR a digit. So for each character, if it's alpha you're happy, and if it's numeric you're also happy. Use `continue` to skip on. Only if it's neither should you reject.","target":"字母数字意味着每个字符要么是字母，要么是数字。所以对于每个字符，如果是字母就没问题，如果是数字也没问题。使用 `continue` 跳过去。只有当字符既不是字母也不是数字时才拒绝。"},{"key":"pickingLabels.question","english":"How do I pick between the four labels in whatAmI()?","target":"如何在 whatAmI() 的四种标签中做出选择？"},{"key":"pickingLabels.answer","english":"Call all three helpers and use if/else. The order matters. Check the stricter cases ('alpha only' and 'numeric only') before 'alphanumeric', which is the looser case.","target":"调用三个辅助函数并使用 if/else。顺序很重要。先检查更严格的情况（“仅字母”和“仅数字”），再检查更宽松的“字母数字”情况。"}]},{"name":"checks","rows":[{"key":"mustUseContinue","english":"So close! Use `continue` to skip on to the next character.","target":"非常接近！使用 `continue` 跳到下一个字符。"},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long.","target":"非常接近！你的解法有效，但稍微有点长。"},{"key":"useIsAlpha","english":"This exercise wants you to write an `isAlpha()` helper and use it to classify the string.","target":"本练习要求你编写一个 `isAlpha()` 辅助函数，并用它来对字符串进行分类。"},{"key":"useIsNumeric","english":"This exercise wants you to write an `isNumeric()` helper and use it to classify the string.","target":"本练习要求你编写一个 `isNumeric()` 辅助函数，并用它来对字符串进行分类。"},{"key":"useIsAlphanumeric","english":"This exercise wants you to write an `isAlphanumeric()` helper and use it to classify the string.","target":"本练习要求你编写一个 `isAlphanumeric()` 辅助函数，并用它来对字符串进行分类。"}]}]}]
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
