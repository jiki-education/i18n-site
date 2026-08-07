---
lang: "zh-CN"
type: "exercise"
slug: "reverse-string"
title: "反转字符串"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/reverse-string"
en_md5: "d01eea6cf18d953304631f4a8015c3ea"
governance_sha: "90a620a"
content_version: "152c0f803f3b"
published_at: "2026-08-07"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"reverseStrings.name","english":"Reverse Strings","target":"反转字符串"},{"key":"reverseStrings.description","english":"Reverse a string so that it reads from right to left instead of left to right.","target":"反转字符串，使其从右向左读，而不是从左向右。"}]},{"name":"scenarios","rows":[{"key":"reverseEmptyString.name","english":"Empty string","target":"空字符串"},{"key":"reverseEmptyString.description","english":"An empty string should return an empty string when reversed.","target":"空字符串反转后应返回空字符串。"},{"key":"reverseWord.name","english":"A word","target":"一个单词"},{"key":"reverseWord.description","english":"Reverse the word 'robot'.","target":"反转单词 'robot'。"},{"key":"reverseCapitalizedWord.name","english":"A capitalized word","target":"首字母大写的单词"},{"key":"reverseCapitalizedWord.description","english":"Reverse a capitalized word 'Ramen'.","target":"反转首字母大写的单词 'Ramen'。"},{"key":"reverseSentencePunctuation.name","english":"Sentence with punctuation","target":"带标点符号的句子"},{"key":"reverseSentencePunctuation.description","english":"Reverse a sentence with punctuation 'I'm hungry!'","target":"反转带标点符号的句子 'I'm hungry!'。"},{"key":"reversePalindrome.name","english":"Palindrome","target":"回文"},{"key":"reversePalindrome.description","english":"A palindrome remains the same when reversed.","target":"回文反转后保持不变。"},{"key":"reverseEvenSizedWord.name","english":"Even-sized word","target":"偶数长度单词"},{"key":"reverseEvenSizedWord.description","english":"Reverse an even-sized word 'drawer'.","target":"反转偶数长度单词 'drawer'。"},{"key":"reverseWideCharacters.name","english":"Wide characters","target":"宽字符"},{"key":"reverseWideCharacters.description","english":"Reverse wide Unicode characters '子猫'.","target":"反转宽 Unicode 字符 '子猫'。"},{"key":"reverseEmojiFamily.name","english":"Emoji Family","target":"家庭 Emoji"},{"key":"reverseEmojiFamily.description","english":"Reverse an emoji family.","target":"反转一个家庭 Emoji。"},{"key":"reverseEmojiRainbowFlag.name","english":"Rainbow Flag","target":"彩虹旗"},{"key":"reverseEmojiRainbowFlag.description","english":"Make a rainbow flag by reversing.","target":"通过反转制作一面彩虹旗。"}]},{"name":"hints","rows":[{"key":"reverseByHand.question","english":"How would I reverse a word by hand?","target":"如何手动反转一个单词？"},{"key":"reverseByHand.answer","english":"You'd read it left-to-right but write it right-to-left. Equivalently, you'd take each letter in turn and put it in front of what you've written so far.","target":"你会从左向右读，但从右向左写。等价地，依次取每个字母，放在你已经写下的内容的前面。"},{"key":"mapToCode.question","english":"How does that map to code?","target":"这如何映射成代码？"},{"key":"mapToCode.answer","english":"Loop through the input string character by character. For each character, build the result by prepending. That means putting it at the FRONT of your result, not the back.","target":"逐个字符地遍历输入字符串。对每个字符，通过前置来构建结果。这意味着把它放在结果的前面，而不是后面。"},{"key":"prepend.question","english":"How do I 'prepend' instead of append?","target":"如何“前置”而不是追加？"},{"key":"prepend.answer","english":"With the `+` operator, prepending is just a matter of order. Instead of `result + char` (which appends), use `char + result` (which prepends).","target":"使用 `+` 运算符，前置只需要改变顺序。使用 `char + result`（前置），而不是 `result + char`（追加）。"}]}]}]
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
