---
lang: "zh-CN"
type: "exercise"
slug: "acronym"
title: "首字母缩写"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/acronym"
en_md5: "f42dbd1b0fe85c42e70bb2c37a4746c2"
governance_sha: "c80036b"
content_version: "0cfc0c94b901"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":"创建首字母缩写函数"},{"key":"createAcronymFunction.description","english":"Write a function that takes a phrase and returns its acronym: the first letter of each word, in uppercase. Words are separated by spaces and hyphens, and any other punctuation is ignored.","target":"编写一个函数，接收一个短语，返回其首字母缩写：取每个单词的首字母并将其大写。单词由空格和连字符分隔，其他所有标点符号均忽略。"},{"key":"solveTightly.name","english":"Solve it in 46 lines","target":"用 46 行完成"},{"key":"solveTightly.description","english":"Bonus: with the letter-testing and case-swapping pulled into helper functions that `acronym` reuses, the whole solution fits in 46 lines. Can you match it?","target":"加分项：将字母检测和大小写转换提取到 `acronym` 可复用的辅助函数中，整个解答可以控制在 46 行内。试试看能否做到？"}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Basic acronym: PNG","target":"基本首字母缩写：PNG"},{"key":"png.description","english":"Convert 'Portable Network Graphics' to 'PNG'.","target":"将 'Portable Network Graphics' 转换为 'PNG'。"},{"key":"ror.name","english":"Lowercase words: ROR","target":"小写单词：ROR"},{"key":"ror.description","english":"Convert 'Ruby on Rails' to 'ROR'.","target":"将 'Ruby on Rails' 转换为 'ROR'。"},{"key":"gimp.name","english":"All caps word: GIMP","target":"全大写单词：GIMP"},{"key":"gimp.description","english":"Convert 'GNU Image Manipulation Program' to 'GIMP'.","target":"将 'GNU Image Manipulation Program' 转换为 'GIMP'。"},{"key":"firstWordOnly.name","english":"Single word: H","target":"单个单词：H"},{"key":"firstWordOnly.description","english":"Convert 'HyperText' to 'H'.","target":"将 'HyperText' 转换为 'H'。"},{"key":"hyphenated.name","english":"Hyphenated phrase: CMOS","target":"连字符短语：CMOS"},{"key":"hyphenated.description","english":"Convert 'Complementary metal-oxide semiconductor' to 'CMOS'.","target":"将 'Complementary metal-oxide semiconductor' 转换为 'CMOS'。"},{"key":"fifo.name","english":"Comma-separated: FIFO","target":"逗号分隔：FIFO"},{"key":"fifo.description","english":"Convert 'First In, First Out' to 'FIFO'.","target":"将 'First In, First Out' 转换为 'FIFO'。"},{"key":"punctuation.name","english":"With punctuation: PHT","target":"带标点：PHT"},{"key":"punctuation.description","english":"Convert 'Portable, HyperText, Transmitter' to 'PHT'.","target":"将 'Portable, HyperText, Transmitter' 转换为 'PHT'。"},{"key":"hc.name","english":"With an apostrophe: HC","target":"带撇号：HC"},{"key":"hc.description","english":"Convert 'Halley's Comet' to 'HC'.","target":"将 'Halley's Comet' 转换为 'HC'。"},{"key":"simufta.name","english":"Consecutive delimiters: SIMUFTA","target":"连续分隔符：SIMUFTA"},{"key":"simufta.description","english":"Convert 'Something - I made up from thin air' to 'SIMUFTA'.","target":"将 'Something - I made up from thin air' 转换为 'SIMUFTA'。"},{"key":"trnt.name","english":"Underscore emphasis: TRNT","target":"下划线强调：TRNT"},{"key":"trnt.description","english":"Convert 'The Road _Not_ Taken' to 'TRNT'.","target":"将 'The Road _Not_ Taken' 转换为 'TRNT'。"},{"key":"long.name","english":"A very long one: ROTFLSHTMDCOALM","target":"超长首字母缩写：ROTFLSHTMDCOALM"},{"key":"long.description","english":"Convert 'Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me' to 'ROTFLSHTMDCOALM'.","target":"将 'Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me' 转换为 'ROTFLSHTMDCOALM'。"},{"key":"emoji.name","english":"With an emoji: HW","target":"带表情符号：HW"},{"key":"emoji.description","english":"Convert 'Hello 👋 World' to 'HW'.","target":"将 'Hello 👋 World' 转换为 'HW'。"},{"key":"acronymBonusLineCount.name","english":"Neat and tidy","target":"整洁优雅"},{"key":"acronymBonusLineCount.description","english":"The tidiest solution reuses its helpers and fits in 46 lines. Can you find it?","target":"最整洁的解答会复用辅助函数，且控制在 46 行以内。你能找到它吗？"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"继续加油！看看能否用更少的行数解决它。"},{"key":"noMethods","english":"This exercise is about building the tools yourself. Solve it without using any built-in methods.","target":"本次练习的目的是自己构建工具。请在不使用任何内置方法的情况下完成。"}]},{"name":"hints","rows":[{"key":"pickLetters.question","english":"How do I pick out which letters become the acronym?","target":"如何选择构成首字母缩写的字母？"},{"key":"pickLetters.answer","english":"The acronym is built from the letter that starts each word: the very first letter of the phrase, plus the first letter after every space or hyphen.","target":"首字母缩写由每个单词开头的字母组成：短语的第一个字母，加上每个空格或连字符后的第一个字母。"},{"key":"findWordStarts.question","english":"How do I know when a new word starts?","target":"如何知道一个新单词开始了？"},{"key":"findWordStarts.answer","english":"Walk the phrase one character at a time and keep track of whether you're at the start of a new word. You are at the very beginning, and again straight after any space or hyphen. Anything that isn't a letter (punctuation, underscores, apostrophes) should be skipped rather than counted as the start of a word.","target":"逐个字符遍历短语，并跟踪是否处于新单词的开头。在短语开头，以及每个空格或连字符之后，都是新单词的开头。任何非字母字符（标点、下划线、撇号）都应跳过，不计作新单词的开头。"},{"key":"buildResult.question","english":"How do I build up the result as I go?","target":"如何边遍历边构建结果？"},{"key":"buildResult.answer","english":"Start with an empty string and add each chosen letter onto the end using `+`.","target":"从一个空字符串开始，用 `+` 将选出的每个字母追加到末尾。"},{"key":"uppercaseLetters.question","english":"How do I make a letter uppercase when there's no built-in for it?","target":"在没有内置大写方法时，如何将字母转为大写？"},{"key":"uppercaseLetters.answer","english":"There's no ready-made uppercaser here. Just like in Pangram, you can line up a lowercase alphabet against an uppercase one and swap a letter for the one at the same position. Letters that are already uppercase can stay as they are.","target":"这里没有现成的大写转换工具。就像在 Pangram 练习中一样，你可以将小写字母表和大写字母表对齐，并按位置替换字母。已经是大写的字母可以保持不变。"}]}]}]
---

你已经解决过简单的三字母缩写，比如把 `Portable Network Graphics` 转换成 `PNG`。

不过，在本次练习中，我们将更进一步，处理所有首字母缩写，而不仅仅是三个字母的。而这会困难得多……

你的任务是编写一个名为 `acronym(phrase)` 的函数，它接受一个短语作为输入，并返回该短语的首字母缩写。

## 规则

一个新的单词开始于**空格**或**连字符**（`-`）之后。所有其他字符，比如逗号、撇号、下划线、感叹号等等，都**不是**分隔符，也永远不会成为缩写的一部分。只有字母才算数。

| 短语                      | 首字母缩写 |
| ------------------------- | ---------- |
| As Soon As Possible       | ASAP       |
| Liquid-crystal display    | LCD        |
| Thank George It's Friday! | TGIF       |

## 注意

我们还没有给你提供这门课程后面才会出现的更高级的 JavaScript 方法（没有什么能神奇地把字母变成大写，或者直接告诉你一个字符是不是字母）。你需要自己构建所有这些辅助函数，然后才能把整个方案组合起来。

这个练习比听起来要难。祝你解题愉快！
