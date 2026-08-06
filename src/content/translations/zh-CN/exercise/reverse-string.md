---
lang: "zh-CN"
type: "exercise"
slug: "reverse-string"
title: "反转字符串"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/reverse-string"
en_md5: "d01eea6cf18d953304631f4a8015c3ea"
governance_sha: "c80036b"
content_version: "f4029a8abf36"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"reverseStrings.name","english":"Reverse Strings","target":null},{"key":"reverseStrings.description","english":"Reverse a string so that it reads from right to left instead of left to right.","target":null}]},{"name":"scenarios","rows":[{"key":"reverseEmptyString.name","english":"Empty string","target":null},{"key":"reverseEmptyString.description","english":"An empty string should return an empty string when reversed.","target":null},{"key":"reverseWord.name","english":"A word","target":null},{"key":"reverseWord.description","english":"Reverse the word 'robot'.","target":null},{"key":"reverseCapitalizedWord.name","english":"A capitalized word","target":null},{"key":"reverseCapitalizedWord.description","english":"Reverse a capitalized word 'Ramen'.","target":null},{"key":"reverseSentencePunctuation.name","english":"Sentence with punctuation","target":null},{"key":"reverseSentencePunctuation.description","english":"Reverse a sentence with punctuation 'I'm hungry!'","target":null},{"key":"reversePalindrome.name","english":"Palindrome","target":null},{"key":"reversePalindrome.description","english":"A palindrome remains the same when reversed.","target":null},{"key":"reverseEvenSizedWord.name","english":"Even-sized word","target":null},{"key":"reverseEvenSizedWord.description","english":"Reverse an even-sized word 'drawer'.","target":null},{"key":"reverseWideCharacters.name","english":"Wide characters","target":null},{"key":"reverseWideCharacters.description","english":"Reverse wide Unicode characters '子猫'.","target":null},{"key":"reverseEmojiFamily.name","english":"Emoji Family","target":null},{"key":"reverseEmojiFamily.description","english":"Reverse an emoji family.","target":null},{"key":"reverseEmojiRainbowFlag.name","english":"Rainbow Flag","target":null},{"key":"reverseEmojiRainbowFlag.description","english":"Make a rainbow flag by reversing.","target":null}]},{"name":"hints","rows":[{"key":"reverseByHand.question","english":"How would I reverse a word by hand?","target":null},{"key":"reverseByHand.answer","english":"You'd read it left-to-right but write it right-to-left. Equivalently, you'd take each letter in turn and put it in front of what you've written so far.","target":null},{"key":"mapToCode.question","english":"How does that map to code?","target":null},{"key":"mapToCode.answer","english":"Loop through the input string character by character. For each character, build the result by prepending. That means putting it at the FRONT of your result, not the back.","target":null},{"key":"prepend.question","english":"How do I 'prepend' instead of append?","target":null},{"key":"prepend.answer","english":"With the `+` operator, prepending is just a matter of order. Instead of `result + char` (which appends), use `char + result` (which prepends).","target":null}]}]}]
---

反转字符串（从右向左读取，而不是从左向右）是编程中一个常见的任务。

例如，在生物信息学中，反转 DNA 或 RNA 的序列对于各种分析往往很重要，比如寻找互补链或识别回文序列。

你的任务是创建一个名为 `reverse`（反转）的函数，它接收一个字符串作为输入，并返回其反转后的结果。

示例：

- 把 "stressed" 变成 "desserts"
- 把 "strops" 变成 "sports"
- 把 "racecar" 变成 "racecar"（一个回文）

### 最后那两个场景……

最后两个场景看起来很奇怪，对吧？这是怎么回事？

原来很多 emoji 其实是由其他 emoji 通过隐藏的（零宽）空格拼接而成的。

家庭 emoji（👩‍👩‍👧‍👦）由两个女性和两个孩子组成。当它被反转后，你就能看到各个独立的字符（👦‍👧‍👩‍👩）。

另一个是彩虹加旗帜（🌈‍️🏳）。当顺序反过来，先得到旗帜再得到彩虹时，它就变成了一面彩虹旗（🏳️‍🌈️）！

如果你一个字符一个字符地构建结果，它们应该就直接能工作了。如果你改用更巧妙的方法，可能会发现 emoji 会散架。
