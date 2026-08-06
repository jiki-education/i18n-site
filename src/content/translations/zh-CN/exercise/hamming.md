---
lang: "zh-CN"
type: "exercise"
slug: "hamming"
title: "汉明"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hamming"
en_md5: "00c98b21780410fd419205c5850e1f4b"
governance_sha: "c80036b"
content_version: "71301da3a624"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"You used more lines than needed — see if you can trim it down.","target":"你用的代码行数比需要的多，看看能不能再精简一下吧。"}]},{"name":"tasks","rows":[{"key":"calculateHammingDistance.name","english":"Calculate the Hamming Distance","target":"计算汉明距离"},{"key":"calculateHammingDistance.description","english":"Write a function that calculates the Hamming distance between two DNA strands of equal length. The Hamming distance is the number of positions where the corresponding characters differ.","target":"编写一个函数，计算两条等长 DNA 链之间的汉明距离。汉明距离是相应位置上字符不同的位置数。"},{"key":"solveInElevenLines.name","english":"Solve in eleven lines of code","target":"用 11 行代码解答"},{"key":"solveInElevenLines.description","english":"Can you solve this using no more than eleven lines of code?","target":"你能用不超过 11 行代码完成这个练习吗？"}]},{"name":"scenarios","rows":[{"key":"hammingEmptyStrands.name","english":"Empty strands","target":"空链"},{"key":"hammingEmptyStrands.description","english":"Empty strands have a Hamming distance of 0.","target":"空链的汉明距离是 0。"},{"key":"hammingSingleLetterIdentical.name","english":"Single letter identical strands","target":"单个字母相同的链"},{"key":"hammingSingleLetterIdentical.description","english":"Single-letter identical strands have a Hamming distance of 0.","target":"单个字母相同的链汉明距离为 0。"},{"key":"hammingLongIdenticalStrands.name","english":"Long identical strands","target":"相同的长链"},{"key":"hammingLongIdenticalStrands.description","english":"Long identical strands have a Hamming distance of 0.","target":"相同的长链的汉明距离为 0。"},{"key":"hammingSingleLetterDifferent.name","english":"Single letter different strands","target":"单个字母不同的链"},{"key":"hammingSingleLetterDifferent.description","english":"Single-letter different strands have a Hamming distance of 1.","target":"单个字母不同的链汉明距离为 1。"},{"key":"hammingLongDifferentStrands.name","english":"Long different strands","target":"不同的长链"},{"key":"hammingLongDifferentStrands.description","english":"Long strands with differences have a calculated Hamming distance.","target":"有差异的长链会计算出一个汉明距离。"},{"key":"hammingBonusElevenLines.name","english":"Eleven lines of code","target":"11 行代码"},{"key":"hammingBonusElevenLines.description","english":"Solve the exercise using no more than eleven lines of code.","target":"使用不超过 11 行代码完成这个练习。"}]},{"name":"hints","rows":[{"key":"hammingDistanceMeaning.question","english":"What does 'Hamming distance' mean in plain terms?","target":"汉明距离用简单的话来解释是什么意思？"},{"key":"hammingDistanceMeaning.answer","english":"It's the number of positions where the two strings differ. So 'GAGA' vs 'GATA' differ at position 3 only, giving a distance of 1.","target":"它是两个字符串中不同的位置数。所以 'GAGA' 和 'GATA' 只在第 3 个位置不同，距离是 1。"},{"key":"compareCharactersAtPosition.question","english":"How do I compare characters at the same position in both strings?","target":"如何比较两个字符串中相同位置的字符？"},{"key":"compareCharactersAtPosition.answer","english":"You'll need to move through both strings in sync, so you can pull out the character at the same spot from each one as you go.","target":"你需要同步遍历两个字符串，这样在遍历过程中就可以从每个字符串的相同位置取出字符。"},{"key":"trackDifferenceCount.question","english":"How do I track 'how many differences' there are?","target":"如何统计有多少处不同？"},{"key":"trackDifferenceCount.answer","english":"You'll need something that keeps a running total, adjusted whenever you spot a mismatch, so it's ready to hand back once you've checked every position.","target":"你需要一个能累加计数的东西，每次发现不匹配就更新它，这样在检查完所有位置后，就可以直接返回。"}]}]}]
---

这是一个关于分子生物学的经典 Exercism 练习！

你的身体由含有 DNA 的细胞组成。这些细胞会定期磨损并需要替换，它们通过分裂成子细胞来实现这一点。事实上，一个人一生中平均大约会发生 10 千万亿次细胞分裂！

当细胞分裂时，它们的 DNA 也会复制。有时在这个过程中会发生错误，导致单个 DNA 片段被编码了错误的信息。如果我们比较两条 DNA 链并计算它们之间的差异，就可以看出发生了多少错误。这就是所谓的“汉明距离”。

汉明距离在科学的许多领域都有用，不仅仅是生物学，所以这是一个值得熟悉的好概念！

你的任务是计算两条 DNA 链之间的汉明距离。DNA 使用字母 C、A、G 和 T。两条链可能看起来像这样：

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

它们有 7 处差异，因此汉明距离为 7。

创建一个名为 `hammingDistance`（汉明距离）的函数，它有两个输入：两条 DNA 链，以字符串的形式。它应返回一个数字，即距离。

两条 DNA 链的长度始终相同。
