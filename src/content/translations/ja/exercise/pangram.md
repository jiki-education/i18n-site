---
lang: "ja"
type: "exercise"
slug: "pangram"
title: "Pangram"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/pangram"
en_md5: "205c5f475fea9213d1eaedbe6583844e"
governance_sha: "c80036b"
content_version: "351d220e37f8"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"checkPangram.name","english":"Check Pangram","target":null},{"key":"checkPangram.description","english":"Write a function that checks if a sentence is a pangram (contains every letter of the alphabet at least once). The check should be case-insensitive.","target":null}]},{"name":"scenarios","rows":[{"key":"pangramEmptySentence.name","english":"Empty sentence","target":null},{"key":"pangramEmptySentence.description","english":"An empty sentence is not a pangram.","target":null},{"key":"pangramPerfectLowercase.name","english":"Perfect lowercase","target":null},{"key":"pangramPerfectLowercase.description","english":"A perfect lowercase alphabet is a pangram.","target":null},{"key":"pangramOnlyLowercase.name","english":"Only lowercase","target":null},{"key":"pangramOnlyLowercase.description","english":"A sentence with only lowercase letters covering all letters is a pangram.","target":null},{"key":"pangramMissingX.name","english":"Missing letter 'x'","target":null},{"key":"pangramMissingX.description","english":"A sentence missing the letter 'x' is not a pangram.","target":null},{"key":"pangramMissingH.name","english":"Missing letter 'h'","target":null},{"key":"pangramMissingH.description","english":"A sentence missing the letter 'h' is not a pangram.","target":null},{"key":"pangramMissingAM.name","english":"Missing letters beyond a-m","target":null},{"key":"pangramMissingAM.description","english":"A string with 'a' to 'm' in lowercase and uppercase is not a pangram.","target":null},{"key":"pangramWithUnderscores.name","english":"With underscores","target":null},{"key":"pangramWithUnderscores.description","english":"A pangram sentence with underscores.","target":null},{"key":"pangramWithNumbers.name","english":"With numbers","target":null},{"key":"pangramWithNumbers.description","english":"A pangram sentence with numbers included.","target":null},{"key":"pangramNumbersReplacingLetters.name","english":"Numbers replacing letters","target":null},{"key":"pangramNumbersReplacingLetters.description","english":"A sentence where letters are replaced by numbers is not a pangram.","target":null},{"key":"pangramMixedCasePunctuation.name","english":"Mixed case and punctuation","target":null},{"key":"pangramMixedCasePunctuation.description","english":"A pangram with mixed case and punctuation.","target":null},{"key":"pangramCaseInsensitive.name","english":"Case insensitive missing letters","target":null},{"key":"pangramCaseInsensitive.description","english":"A case-insensitive sentence without all letters is not a pangram.","target":null}]},{"name":"hints","rows":[{"key":"helpers.question","english":"What helpers will save me trouble here?","target":null},{"key":"helpers.answer","english":"A `includes()` helper (which asks 'does this character appear in this string?') and a `toLowerCase()` helper (so case differences don't trip you up) make the main logic short and clear.","target":null},{"key":"whyLowercase.question","english":"Why should I lowercase the sentence?","target":null},{"key":"whyLowercase.answer","english":"'The quick brown fox...' contains both 'T' and 't'. If you only check against lowercase letters, the capitals won't match. Convert the sentence to lowercase once at the start so every comparison is consistent.","target":null},{"key":"checkEveryLetter.question","english":"How do I check every letter is there?","target":null},{"key":"checkEveryLetter.answer","english":"Loop through each letter of the alphabet `\"abcdefghijklmnopqrstuvwxyz\"`. For each, use `includes()` to check if it appears in the lowercased sentence.","target":null},{"key":"stopEarly.question","english":"When can I stop early?","target":null},{"key":"stopEarly.answer","english":"As soon as you find a letter that's missing, return `false`. There's no point checking the rest. Only return `true` after the entire alphabet has been confirmed.","target":null}]}]}]
---

Pangramシリーズのパート2にようこそ。パングラムとは、アルファベットのすべての文字を少なくとも1回ずつ使った文のことでしたね。

今回の演習は、以前解いたPangramの演習をより複雑にしたものです。大文字も使うからです。そのせいで、驚くほど複雑さが増します。

`isPangram`（パングラムかどうかを判定する）という名前の関数を作成してください。この関数は、文字列の文を受け取り、その文がパングラムかどうかを真偽値で返します。

前回のコードを出発点として用意してあります。

### ヘルパー関数

すでにあるヘルパー関数（`includes`という名前をおすすめしました）に加えて、新たに2つのヘルパー関数を作ることをおすすめします。関数名は標準的な名前なので、これに従うのがよいでしょう。

1. `indexOf(haystack, needle)`: haystackの中で、needleが**どこに**あるかを計算する関数です。つまり、`includes`のように`true`/`false`を返すのではなく、needleの**インデックス**を返します。たとえば、`indexOf("Jeremy", "r")`は`2`を返します（0から数えることを思い出してください）。
2. `toLowerCase(someString)`: 文字列を受け取り、それを小文字に変換して返す関数です。たとえば、`toLowerCase("JeReMy")`は`"jeremy"`を返します。

楽しんでください！
