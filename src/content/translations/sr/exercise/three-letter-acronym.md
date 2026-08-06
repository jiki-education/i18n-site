---
lang: "sr"
type: "exercise"
slug: "three-letter-acronym"
title: "Tročlani akronim"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/three-letter-acronym"
en_md5: "89ed5e0d5e09a14bbc4ae5dd39768af5"
governance_sha: "c80036b"
content_version: "fcf269ece276"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":null}]},{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":null},{"key":"createAcronymFunction.description","english":"Write an acronym function that takes three words and returns a three-letter acronym formed by taking the first letter of each word.","target":null},{"key":"solveInThreeLines.name","english":"Solve in 3 lines of code","target":null},{"key":"solveInThreeLines.description","english":"Can you solve this exercise with only 3 lines of code?","target":null}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Portable Network Graphics","target":null},{"key":"png.description","english":"Create the acronym 'PNG' from 'Portable', 'Network', 'Graphics'.","target":null},{"key":"css.name","english":"Cascading Style Sheets","target":null},{"key":"css.description","english":"Create the acronym 'CSS' from 'Cascading', 'Style', 'Sheets'.","target":null},{"key":"www.name","english":"World Wide Web","target":null},{"key":"www.description","english":"Create the acronym 'WWW' from 'World', 'Wide', 'Web'.","target":null},{"key":"lol.name","english":"Lowercase words","target":null},{"key":"lol.description","english":"Create the acronym 'lol' from 'laugh', 'out', 'loud'.","target":null},{"key":"bonus1.name","english":"3 lines of code","target":null},{"key":"bonus1.description","english":"Solve the exercise with only 3 lines of code.","target":null}]},{"name":"hints","rows":[{"key":"firstCharacter.question","english":"How do I get just the first character of a word?","target":null},{"key":"firstCharacter.answer","english":"Indexing into the string. The first character is at index `[0]`.","target":null},{"key":"buildResult.question","english":"How do I build the three-letter result?","target":null},{"key":"buildResult.answer","english":"Take the first character of each word and join them together in order using concatenation (`+`) or a template string.","target":null}]}]}]
---

Akronim je reč nastala od prvih slova drugih reči. Na primer, 'Portable Network Graphics' postaje 'PNG'.

Napiši funkciju pod nazivom `acronym` (akronim) koja prima tri reči i vraća akronim od tri slova tako što uzima prvo slovo svake reči.

Na primer, ako dobiješ reči 'Cascading', 'Style' i 'Sheets', treba da vratiš 'CSS'.
