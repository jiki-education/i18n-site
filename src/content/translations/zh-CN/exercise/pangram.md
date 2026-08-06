---
lang: "zh-CN"
type: "exercise"
slug: "pangram"
title: "全字母句"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/pangram"
en_md5: "205c5f475fea9213d1eaedbe6583844e"
governance_sha: "c80036b"
content_version: "cab69561a10f"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"checkPangram.name","english":"Check Pangram","target":"检查全字母句"},{"key":"checkPangram.description","english":"Write a function that checks if a sentence is a pangram (contains every letter of the alphabet at least once). The check should be case-insensitive.","target":"编写一个函数，检查一个句子是否为全字母句（包含字母表中的每个字母至少一次）。检查应忽略大小写。"}]},{"name":"scenarios","rows":[{"key":"pangramEmptySentence.name","english":"Empty sentence","target":"空句子"},{"key":"pangramEmptySentence.description","english":"An empty sentence is not a pangram.","target":"空句子不是全字母句。"},{"key":"pangramPerfectLowercase.name","english":"Perfect lowercase","target":"完美小写"},{"key":"pangramPerfectLowercase.description","english":"A perfect lowercase alphabet is a pangram.","target":"一个完整的小写字母表是全字母句。"},{"key":"pangramOnlyLowercase.name","english":"Only lowercase","target":"仅小写"},{"key":"pangramOnlyLowercase.description","english":"A sentence with only lowercase letters covering all letters is a pangram.","target":"仅包含小写字母且覆盖所有字母的句子是全字母句。"},{"key":"pangramMissingX.name","english":"Missing letter 'x'","target":"缺少字母 'x'"},{"key":"pangramMissingX.description","english":"A sentence missing the letter 'x' is not a pangram.","target":"缺少字母 'x' 的句子不是全字母句。"},{"key":"pangramMissingH.name","english":"Missing letter 'h'","target":"缺少字母 'h'"},{"key":"pangramMissingH.description","english":"A sentence missing the letter 'h' is not a pangram.","target":"缺少字母 'h' 的句子不是全字母句。"},{"key":"pangramMissingAM.name","english":"Missing letters beyond a-m","target":"缺少 a-m 之后的字母"},{"key":"pangramMissingAM.description","english":"A string with 'a' to 'm' in lowercase and uppercase is not a pangram.","target":"仅含 a 到 m 的大小写字母的字符串不是全字母句。"},{"key":"pangramWithUnderscores.name","english":"With underscores","target":"含下划线"},{"key":"pangramWithUnderscores.description","english":"A pangram sentence with underscores.","target":"含有下划线的全字母句。"},{"key":"pangramWithNumbers.name","english":"With numbers","target":"含数字"},{"key":"pangramWithNumbers.description","english":"A pangram sentence with numbers included.","target":"包含数字的全字母句。"},{"key":"pangramNumbersReplacingLetters.name","english":"Numbers replacing letters","target":"数字替换字母"},{"key":"pangramNumbersReplacingLetters.description","english":"A sentence where letters are replaced by numbers is not a pangram.","target":"字母被数字替代的句子不是全字母句。"},{"key":"pangramMixedCasePunctuation.name","english":"Mixed case and punctuation","target":"大小写与标点混合"},{"key":"pangramMixedCasePunctuation.description","english":"A pangram with mixed case and punctuation.","target":"混合大小写和标点的全字母句。"},{"key":"pangramCaseInsensitive.name","english":"Case insensitive missing letters","target":"忽略大小写缺失字母"},{"key":"pangramCaseInsensitive.description","english":"A case-insensitive sentence without all letters is not a pangram.","target":"一个忽略大小写但不包含所有字母的句子不是全字母句。"}]},{"name":"hints","rows":[{"key":"helpers.question","english":"What helpers will save me trouble here?","target":"这里哪些辅助函数可以帮我省事？"},{"key":"helpers.answer","english":"A `includes()` helper (which asks 'does this character appear in this string?') and a `toLowerCase()` helper (so case differences don't trip you up) make the main logic short and clear.","target":"一个 `includes()` 辅助函数（询问“这个字符是否出现在这个字符串里？”）和一个 `toLowerCase()` 辅助函数（这样大小写差异就不会绊住你了）能让主要逻辑简短明了。"},{"key":"whyLowercase.question","english":"Why should I lowercase the sentence?","target":"为什么我要把句子转为小写？"},{"key":"whyLowercase.answer","english":"'The quick brown fox...' contains both 'T' and 't'. If you only check against lowercase letters, the capitals won't match. Convert the sentence to lowercase once at the start so every comparison is consistent.","target":"The quick brown fox... 同时包含 'T' 和 't'。如果你只检查小写字母，大写字母就匹配不上。一开始就把句子转为小写，这样每次比较就一致了。"},{"key":"checkEveryLetter.question","english":"How do I check every letter is there?","target":"如何检查每个字母都出现了？"},{"key":"checkEveryLetter.answer","english":"Loop through each letter of the alphabet `\"abcdefghijklmnopqrstuvwxyz\"`. For each, use `includes()` to check if it appears in the lowercased sentence.","target":"遍历字母表 \"abcdefghijklmnopqrstuvwxyz\" 中的每个字母。对每个字母，使用 `includes()` 检查它是否出现在转为小写的句子中。"},{"key":"stopEarly.question","english":"When can I stop early?","target":"什么时候我可以提前停止？"},{"key":"stopEarly.answer","english":"As soon as you find a letter that's missing, return `false`. There's no point checking the rest. Only return `true` after the entire alphabet has been confirmed.","target":"一旦发现一个字母缺失，就返回 `false`。没必要继续检查剩余字母。只有在整个字母表都确认存在之后，才返回 `true`。"}]}]}]
---

欢迎来到全字母句系列的第 2 部分。回忆一下，全字母句是一个使用了字母表中每个字母至少一次的句子。

这个练习是之前你解决的全字母句练习的升级版，因为它还需要处理大写字母。这大大增加了难度。

创建一个名为 `isPangram`（判断是否为全字母句）的函数，它接收一个句子字符串，返回一个布尔值，表示它是否为全字母句。

我们已经把你之前的代码作为起点提供给你。

### 辅助函数

除了你已有的辅助函数（我们建议你命名为 `includes`），我们推荐你再创建两个新的辅助函数来帮你解决这个问题。这些函数的名字是标准名称，我们建议你沿用它们：

1. `indexOf(haystack, needle)`：一个计算 `needle` 在 `haystack` 中**位置**的函数。所以它不是像 `includes` 那样返回 `true`/`false`，而是返回 `needle` 的**下标**。例如，`indexOf("Jeremy", "r")` 会返回 `2`（记住我们从 0 开始计数）。
2. `toLowerCase(someString)`：一个接收字符串并将其转换为小写字母的函数。例如，`toLowerCase("JeReMy")` 会返回 `"jeremy"`。

祝你玩得开心！
