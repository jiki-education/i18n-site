---
lang: "zh-CN"
type: "exercise"
slug: "nucleotide"
title: "核苷酸"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/nucleotide"
en_md5: "1a3fe935f5d7c6338efe81dc27d8e9f1"
governance_sha: "c80036b"
content_version: "2b38ee451e63"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"countNucleotide.name","english":"Count a Nucleotide","target":"计算核苷酸数量"},{"key":"countNucleotide.description","english":"Write a function that counts how many times a specific nucleotide (A, C, G, or T) appears in a DNA strand. Return -1 if the nucleotide or any character in the strand is invalid.","target":"编写一个函数，计算特定核苷酸（A、C、G 或 T）在 DNA 链中出现的次数。如果核苷酸无效或链中包含无效字符，返回 -1。"}]},{"name":"scenarios","rows":[{"key":"nucleotideEmptyStrand.name","english":"Empty strand","target":"空链"},{"key":"nucleotideEmptyStrand.description","english":"An empty strand should return 0 for any valid nucleotide.","target":"对于任何有效核苷酸，空链应返回 0。"},{"key":"nucleotideSingleMatch.name","english":"Single nucleotide strand","target":"单核苷酸链"},{"key":"nucleotideSingleMatch.description","english":"A single-character strand matching the target should return 1.","target":"与目标匹配的单字符链应返回 1。"},{"key":"nucleotideRepeated.name","english":"Repeated nucleotide","target":"重复核苷酸"},{"key":"nucleotideRepeated.description","english":"A strand of repeated nucleotides should count all of them.","target":"由重复核苷酸组成的链应计算所有出现的次数。"},{"key":"nucleotideMixedStrandA.name","english":"Count A in mixed strand","target":"计数混合链中的 A"},{"key":"nucleotideMixedStrandA.description","english":"Count a specific nucleotide in a mixed strand.","target":"在混合链中计数特定核苷酸。"},{"key":"nucleotideMixedStrandT.name","english":"Count T in mixed strand","target":"计数混合链中的 T"},{"key":"nucleotideMixedStrandT.description","english":"Count a different nucleotide in the same strand.","target":"在同一条链中计数另一种核苷酸。"},{"key":"nucleotideInvalidNucleotide.name","english":"Invalid nucleotide","target":"无效核苷酸"},{"key":"nucleotideInvalidNucleotide.description","english":"An invalid nucleotide character should return -1.","target":"无效的核苷酸字符应返回 -1。"},{"key":"nucleotideInvalidStrand.name","english":"Invalid strand","target":"无效链"},{"key":"nucleotideInvalidStrand.description","english":"A strand containing invalid characters should return -1.","target":"包含无效字符的链应返回 -1。"}]},{"name":"hints","rows":[{"key":"checkValid.question","english":"How do I check that the character I'm asked about is valid?","target":"如何检查我所要查找的字符是否有效？"},{"key":"checkValid.answer","english":"Strings have an `includes()` method that tells you whether one string appears inside another. That's a handy way to ask whether a character is one of the valid nucleotides. Validate before you start counting.","target":"字符串有一个 `includes()` 方法，可以告诉你一个字符串是否出现在另一个字符串中。这是检查某个字符是否为有效核苷酸的好方法。先验证，再开始计数。"},{"key":"invalidNucleotide.question","english":"What do I do if the nucleotide is invalid?","target":"如果核苷酸无效怎么办？"},{"key":"invalidNucleotide.answer","english":"Return `-1` immediately. The spec uses that value to signal an invalid input.","target":"立即返回 `-1`。规范使用该值来表示无效输入。"},{"key":"countOccurrences.question","english":"How do I count occurrences in the strand?","target":"如何计算链中出现的次数？"},{"key":"countOccurrences.answer","english":"Loop through each character of the strand. If the character matches the nucleotide you're counting, add 1 to a counter. Return the counter at the end.","target":"遍历链中的每个字符。如果该字符与你正在计数的核苷酸匹配，则将计数器加 1。最后返回计数器的值。"},{"key":"validateStrand.question","english":"Should I validate the strand too?","target":"我也需要验证链吗？"},{"key":"validateStrand.answer","english":"Yes. If any character in the strand isn't a valid nucleotide, return `-1`. Check each character before counting.","target":"是的。如果链中有任何字符不是有效核苷酸，返回 `-1`。在计数之前检查每个字符。"}]},{"name":"functions","rows":[{"key":"includes.description","english":"Check whether a string contains a smaller string (provided by level stdlib)","target":"检查一个字符串是否包含另一个较短的字符串（由关卡标准库提供）"},{"key":"includes.category","english":"String Operations","target":"字符串操作"}]}]}]
---

DNA 是由其他化学物质组成的长链，其中最重要的四种是核苷酸：腺嘌呤、胞嘧啶、鸟嘌呤和胸腺嘧啶。一条 DNA 链可能包含数十亿个这四种核苷酸，它们排列的顺序非常关键！我们用一个字符字符串来表示 DNA 序列，例如 "ATTACG"。'A' 代表腺嘌呤，'C' 代表胞嘧啶，'G' 代表鸟嘌呤，'T' 代表胸腺嘧啶。

创建一个名为 `countNucleotide`（计算核苷酸数量）的函数，它接收一个 DNA 链和一个单独的核苷酸字符，并返回该核苷酸在链中出现的次数。

如果核苷酸字符无效（即不是 A、C、G、T 中的一个），返回 `-1`。
如果链中包含任何无效字符，也返回 `-1`。

例如：

- `countNucleotide("GATTACA", "A")` 返回 `3`
- `countNucleotide("GATTACA", "T")` 返回 `2`
- `countNucleotide("GATTACA", "X")` 返回 `-1`

如果需要，你可以使用 `"...".includes(someString)`。
