---
lang: "zh-CN"
type: "exercise"
slug: "three-letter-acronym"
title: "三字母缩写"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/three-letter-acronym"
en_md5: "89ed5e0d5e09a14bbc4ae5dd39768af5"
governance_sha: "c80036b"
content_version: "4e83033059ae"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"你的解答代码行数太多了，能再短一点吗？"}]},{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":"创建 `acronym` 函数"},{"key":"createAcronymFunction.description","english":"Write an acronym function that takes three words and returns a three-letter acronym formed by taking the first letter of each word.","target":"编写一个首字母缩写函数，接收三个单词，返回一个由每个单词的首字母组成的三字母缩写。"},{"key":"solveInThreeLines.name","english":"Solve in 3 lines of code","target":"用3行代码完成"},{"key":"solveInThreeLines.description","english":"Can you solve this exercise with only 3 lines of code?","target":"你能只用3行代码完成这个练习吗？"}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Portable Network Graphics","target":"便携式网络图形"},{"key":"png.description","english":"Create the acronym 'PNG' from 'Portable', 'Network', 'Graphics'.","target":"从单词 'Portable'、'Network'、'Graphics' 创建首字母缩写 'PNG'。"},{"key":"css.name","english":"Cascading Style Sheets","target":"层叠样式表"},{"key":"css.description","english":"Create the acronym 'CSS' from 'Cascading', 'Style', 'Sheets'.","target":"从单词 'Cascading'、'Style'、'Sheets' 创建首字母缩写 'CSS'。"},{"key":"www.name","english":"World Wide Web","target":"万维网"},{"key":"www.description","english":"Create the acronym 'WWW' from 'World', 'Wide', 'Web'.","target":"从单词 'World'、'Wide'、'Web' 创建首字母缩写 'WWW'。"},{"key":"lol.name","english":"Lowercase words","target":"小写单词"},{"key":"lol.description","english":"Create the acronym 'lol' from 'laugh', 'out', 'loud'.","target":"从单词 'laugh'、'out'、'loud' 创建首字母缩写 'lol'。"},{"key":"bonus1.name","english":"3 lines of code","target":"3行代码"},{"key":"bonus1.description","english":"Solve the exercise with only 3 lines of code.","target":"只用3行代码完成这个练习。"}]},{"name":"hints","rows":[{"key":"firstCharacter.question","english":"How do I get just the first character of a word?","target":"如何只获取一个单词的第一个字符？"},{"key":"firstCharacter.answer","english":"Indexing into the string. The first character is at index `[0]`.","target":"对字符串使用下标。第一个字符的下标是 `[0]`。"},{"key":"buildResult.question","english":"How do I build the three-letter result?","target":"如何构建这个三字母的结果？"},{"key":"buildResult.answer","english":"Take the first character of each word and join them together in order using concatenation (`+`) or a template string.","target":"获取每个单词的第一个字符，然后使用拼接（`+`）或模板字符串按顺序将它们连接起来。"}]}]}]
---

首字母缩写是由其他单词的首字母组成的词。例如，'Portable Network Graphics' 变成了 'PNG'。

编写一个名为 `acronym`（首字母缩写）的函数，它接收三个单词，并通过取每个单词的首字母返回一个三字母缩写。

例如，如果给定 'Cascading'、'Style' 和 'Sheets'，你应该返回 'CSS'。
