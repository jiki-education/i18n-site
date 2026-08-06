---
lang: "zh-CN"
type: "exercise"
slug: "methodic-pangram"
title: "方法化的 Pangram"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/methodic-pangram"
en_md5: "ab05b1c47cdeeb83698a830f79c8b738"
governance_sha: "c80036b"
content_version: "8761e1b91404"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"checkPangram.name","english":"Check Pangram","target":"检查 Pangram"},{"key":"checkPangram.description","english":"Write a function that checks if a sentence is a pangram (contains every letter of the alphabet at least once). The check should be case-insensitive.","target":"编写一个函数，检查一个句子是否是 Pangram（包含字母表中的每个字母至少一次）。检查应该不区分大小写。"}]},{"name":"scenarios","rows":[{"key":"pangramEmptySentence.name","english":"Empty sentence","target":"空句子"},{"key":"pangramEmptySentence.description","english":"An empty sentence is not a pangram.","target":"空句子不是 Pangram。"},{"key":"pangramPerfectLowercase.name","english":"Perfect lowercase","target":"完美小写"},{"key":"pangramPerfectLowercase.description","english":"A perfect lowercase alphabet is a pangram.","target":"一个完美的小写字母表是一个 Pangram。"},{"key":"pangramOnlyLowercase.name","english":"Only lowercase","target":"仅小写"},{"key":"pangramOnlyLowercase.description","english":"A sentence with only lowercase letters covering all letters is a pangram.","target":"一个只包含小写字母且覆盖所有字母的句子是一个 Pangram。"},{"key":"pangramMissingX.name","english":"Missing letter 'x'","target":"缺少字母 'x'"},{"key":"pangramMissingX.description","english":"A sentence missing the letter 'x' is not a pangram.","target":"缺少字母 'x' 的句子不是 Pangram。"},{"key":"pangramMissingH.name","english":"Missing letter 'h'","target":"缺少字母 'h'"},{"key":"pangramMissingH.description","english":"A sentence missing the letter 'h' is not a pangram.","target":"缺少字母 'h' 的句子不是 Pangram。"},{"key":"pangramMissingAM.name","english":"Missing letters beyond a-m","target":"缺少 a-m 以外的字母"},{"key":"pangramMissingAM.description","english":"A string with 'a' to 'm' in lowercase and uppercase is not a pangram.","target":"一个包含 'a' 到 'm'（大小写都有）的字符串不是 Pangram。"},{"key":"pangramWithUnderscores.name","english":"With underscores","target":"包含下划线"},{"key":"pangramWithUnderscores.description","english":"A pangram sentence with underscores.","target":"一个包含下划线的 Pangram 句子。"},{"key":"pangramWithNumbers.name","english":"With numbers","target":"包含数字"},{"key":"pangramWithNumbers.description","english":"A pangram sentence with numbers included.","target":"一个包含数字的 Pangram 句子。"},{"key":"pangramNumbersReplacingLetters.name","english":"Numbers replacing letters","target":"数字替换字母"},{"key":"pangramNumbersReplacingLetters.description","english":"A sentence where letters are replaced by numbers is not a pangram.","target":"字母被数字替换的句子不是 Pangram。"},{"key":"pangramMixedCasePunctuation.name","english":"Mixed case and punctuation","target":"大小写和标点混合"},{"key":"pangramMixedCasePunctuation.description","english":"A pangram with mixed case and punctuation.","target":"一个大小写和标点混合的 Pangram。"},{"key":"pangramCaseInsensitive.name","english":"Case insensitive missing letters","target":"不区分大小写且缺少字母"},{"key":"pangramCaseInsensitive.description","english":"A case-insensitive sentence without all letters is not a pangram.","target":"一个不区分大小写但没有包含所有字母的句子不是 Pangram。"}]},{"name":"hints","rows":[{"key":"recall.question","english":"I already solved this by hand. What actually changes?","target":"我已经手动解决过这个问题了。到底有什么变化？"},{"key":"recall.answer","english":"The logic is identical: lowercase the sentence, then check every letter from a to z is present. The only thing that changes is *how* you do those two steps — you can now use built-in string methods instead of your own helper functions.","target":"逻辑是一样的：将句子转为小写，然后检查从 a 到 z 的每个字母是否都存在。唯一改变的是你执行这两个步骤的*方式*——现在你可以使用内建的字符串方法，而不是你自己写的辅助函数。"},{"key":"lowercaseMethod.question","english":"Is there a built-in way to lowercase a string?","target":"有没有内建的方法可以把字符串转为小写？"},{"key":"lowercaseMethod.answer","english":"Yes. Strings have a `toLowerCase()` method that returns a lowercase copy. Call it on the sentence once at the start, instead of looping over the characters yourself. Remember it returns a *new* string — you need to store the result.","target":"有的。字符串有一个 `toLowerCase()` 方法，它返回一个小写副本。在开头对句子调用一次它，而不是自己循环遍历字符。记住它返回的是一个*新*字符串——你需要存储这个结果。"},{"key":"includesMethod.question","english":"Do I still need my own helper to check a letter is present?","target":"我还需要自己写的辅助函数来检查某个字母是否存在吗？"},{"key":"includesMethod.answer","english":"No. Strings have an `includes()` method that tells you whether one string appears inside another. Use `sentence.includes(letter)` in place of the helper you wrote last time.","target":"不需要。字符串有一个 `includes()` 方法，它告诉你一个字符串是否出现在另一个字符串的内部。使用 `sentence.includes(letter)` 来代替你上次写的辅助函数。"},{"key":"stopEarly.question","english":"When can I stop early?","target":"什么时候可以提前停止？"},{"key":"stopEarly.answer","english":"As soon as one letter is missing, return `false` — there's no point checking the rest. Only return `true` once the whole alphabet has been confirmed.","target":"一旦有一个字母缺失，就返回 `false`，没有必要再去检查剩下的字母了。只有在确认了整个字母表都齐了之后，才返回 `true`。"}]},{"name":"functions","rows":[{"key":"toLowerCase.description","english":"Return a lowercase copy of a string (provided by level stdlib)","target":"返回一个字符串的小写副本（由关卡 stdlib 提供）"},{"key":"toLowerCase.category","english":"String Operations","target":"字符串操作"},{"key":"includes.description","english":"Check whether a string contains a smaller string (provided by level stdlib)","target":"检查一个字符串是否包含一个更小的字符串（由关卡 stdlib 提供）"},{"key":"includes.category","english":"String Operations","target":"字符串操作"}]}]}]
---

欢迎来到第三个 Pangram 练习，在这里我们会把你之前写的那些辅助函数大幅简化！

我鼓励你编写的每个函数（`includes`、`indexOf` 和 `toLowerCase`）其实都已经作为方法内建在字符串里了。

所以，与其写 `includes("Jeremy", "r")`，你可以写 `"Jeremy".includes("r")`，它们的效果完全一样。而因为这个方法已经内建在字符串里，你就不需要自己去实现它了！

在这个练习中，你只需要用到其中的两个：

- `"Jeremy".toLowerCase()`
- `"Jeremy".includes("r")`

你完全不再需要 `indexOf` 了——你之前写它只是为了辅助实现 `toLowerCase`，而现在内建的 `toLowerCase` 已经帮你完成了这份工作。

所以，你可以把你之前写的那些函数都删掉（但至少你现在知道了这些方法在底层是怎么运作的，所以千万别来吼我！），改用这里的方法就行了。

玩得开心！
