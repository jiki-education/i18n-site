---
lang: "zh-CN"
type: "exercise"
slug: "lower-pangram"
title: "简单全字母句"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/lower-pangram"
en_md5: "5559219b53e3710c746f0bffd6314e62"
governance_sha: "c80036b"
content_version: "96ebbb8371b4"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"noNestedLoops","english":"Try not to put one loop inside another. Move the search for a single letter into its own function, then call it from <code>isPangram</code>.","target":"试着不要使用嵌套循环。将对单个字母的搜索移到它自己的函数里，然后从 <code>isPangram</code> 中调用它。"},{"key":"tooManyLines","english":"Almost! See if you can solve it in fewer lines by leaning on your helper function.","target":"就差一点！看看能不能借助你的辅助函数，用更少的行数来解决这个问题。"}]},{"name":"tasks","rows":[{"key":"checkLowerPangram.name","english":"Check Lower Pangram","target":"检查小写全字母句"},{"key":"checkLowerPangram.description","english":"Write a function that checks whether a lowercase sentence contains every letter of the alphabet. Have it call a small helper function to do the per-letter search.","target":"编写一个函数，检查一个小写句子是否包含字母表中的每个字母。让它调用一个小型辅助函数来进行逐字母搜索。"},{"key":"decomposeTightly.name","english":"Solve it in 16 lines","target":"在 16 行内完成"},{"key":"decomposeTightly.description","english":"Bonus: with the search pulled out into a helper, the whole solution fits in 16 lines. Can you match it?","target":"加分项：将搜索抽离到辅助函数后，整套解决方案不超过 16 行。你能做到吗？"}]},{"name":"scenarios","rows":[{"key":"lowerPangramEmpty.name","english":"Empty sentence","target":"空句子"},{"key":"lowerPangramEmpty.description","english":"An empty sentence is not a pangram.","target":"空句子不是全字母句。"},{"key":"lowerPangramFullAlphabet.name","english":"Full lowercase alphabet","target":"完整的小写字母表"},{"key":"lowerPangramFullAlphabet.description","english":"The complete lowercase alphabet is a pangram.","target":"完整的小写字母表是一个全字母句。"},{"key":"lowerPangramClassic.name","english":"Classic pangram","target":"经典全字母句"},{"key":"lowerPangramClassic.description","english":"The classic pangram sentence contains all 26 letters.","target":"经典全字母句包含全部 26 个字母。"},{"key":"lowerPangramMissingX.name","english":"Missing letter 'x'","target":"缺少字母 'x'"},{"key":"lowerPangramMissingX.description","english":"A sentence missing the letter 'x' is not a pangram.","target":"缺少字母 'x' 的句子不是全字母句。"},{"key":"lowerPangramMissingH.name","english":"Missing letter 'h'","target":"缺少字母 'h'"},{"key":"lowerPangramMissingH.description","english":"A sentence missing the letter 'h' is not a pangram.","target":"缺少字母 'h' 的句子不是全字母句。"},{"key":"lowerPangramWithUnderscores.name","english":"With underscores","target":"包含下划线"},{"key":"lowerPangramWithUnderscores.description","english":"A pangram with underscores instead of spaces.","target":"用下划线代替空格的全字母句。"},{"key":"lowerPangramWithNumbers.name","english":"With numbers","target":"包含数字"},{"key":"lowerPangramWithNumbers.description","english":"A pangram with numbers included.","target":"包含数字的全字母句。"},{"key":"lowerPangramNumbersReplacingLetters.name","english":"Numbers replacing letters","target":"数字替换字母"},{"key":"lowerPangramNumbersReplacingLetters.description","english":"A sentence where letters are replaced by numbers is not a pangram.","target":"字母被数字替换的句子不是全字母句。"},{"key":"lowerPangramBonusLineCount.name","english":"Tight and tidy","target":"紧凑整洁"},{"key":"lowerPangramBonusLineCount.description","english":"The complete solution fits in 16 lines when the search lives in its own function.","target":"当搜索独立成一个函数时，完整的解决方案不超过 16 行。"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where do I start?","target":"从哪里开始？"},{"key":"whereToStart.answer","english":"You need to check whether every letter of the alphabet is in the string. So you're going to need to do some looping and comparing.","target":"你需要检查字母表中的每个字母是否都在字符串中。因此，你需要进行一些循环和比较。"},{"key":"checkEveryLetter.question","english":"How do I check that every letter of the alphabet is there?","target":"如何检查字母表中的每个字母都存在？"},{"key":"checkEveryLetter.answer","english":"Loop through `\"abcdefghijklmnopqrstuvwxyz\"`, one letter at a time. For each letter, check whether the sentence contains it.","target":"遍历 `\"abcdefghijklmnopqrstuvwxyz\"`，一次一个字母。对于每个字母，检查句子是否包含它。"},{"key":"avoidNestedLoops.question","english":"I've solved the exercise but I don't know how to use the helper function.","target":"我已经解决了练习，但不知道如何使用辅助函数。"},{"key":"avoidNestedLoops.answer","english":"If you've solved this, it's likely you have one outer loop and then an inner loop. That inner loop is checking if something includes something else. Extracting the inner loop into a helper function called `includes(...)`, and then use that from in the outer loop, is probably a good approach. A helper function is just a normal function defined in the normal way.","target":"如果你已经解决了这个问题，很可能你有一个外层循环和一个内层循环。这个内层循环正在检查某个东西是否包含另一个东西。将内层循环提取到一个名为 `includes(...)` 的辅助函数中，然后在外层循环中使用它，这可能是一个好方法。辅助函数只是一个用常规方式定义的普通函数。"}]}]}]
---

一个全字母句（英语：_pangram_）是指一个句子，它使用了**字母表中的每一个字母至少一次**。最著名的英文全字母句是 "the quick brown fox jumps over the lazy dog"！

接下来的三个练习都将用于判断句子是否为全字母句。

在这个第一个练习中，你只需要处理小写字母。输入将只包含小写字母以及其他字符，比如空格、数字或标点符号，但不包含大写字母。

你的任务是编写 `isPangram(sentence)`（判断一个句子是否为全字母句的函数），它接受一个句子作为输入，如果它包含从 "a" 到 "z" 的每个字母至少一次，则返回 `true`，否则返回 `false`。

### 辅助函数

为了通过这个练习，你不允许在这个练习中使用嵌套循环。相反，和上一个练习一样，关键是创建一个 `isPangram(...)` 会使用的**辅助函数**。

这个辅助函数会帮助你判断一个字符串是否包含另一个字符串。我们建议你将这个函数命名为 `includes`，并将其输入命名为 `haystack`（草堆）和 `needle`（针）。意思是我们要“在草堆里找针”——一句古老的英语谚语。

如果创建多个函数让你感到压力，你可以先在不使用辅助函数的情况下用嵌套循环来解决这个练习，然后再考虑如何将其拆分为一个辅助函数。

玩得开心！
