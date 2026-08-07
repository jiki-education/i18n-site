---
lang: "ja"
type: "exercise"
slug: "pangram"
title: "Pangram"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/pangram"
en_md5: "205c5f475fea9213d1eaedbe6583844e"
governance_sha: "1011050"
content_version: "b444af604fdd"
published_at: "2026-08-07"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"checkPangram.name","english":"Check Pangram","target":"パングラムのチェック"},{"key":"checkPangram.description","english":"Write a function that checks if a sentence is a pangram (contains every letter of the alphabet at least once). The check should be case-insensitive.","target":"文がパングラム（アルファベットのすべての文字を少なくとも1回ずつ含む）かどうかをチェックする関数を書いてください。大文字小文字は区別しません。"}]},{"name":"scenarios","rows":[{"key":"pangramEmptySentence.name","english":"Empty sentence","target":"空の文"},{"key":"pangramEmptySentence.description","english":"An empty sentence is not a pangram.","target":"空の文はパングラムではありません。"},{"key":"pangramPerfectLowercase.name","english":"Perfect lowercase","target":"完全な小文字アルファベット"},{"key":"pangramPerfectLowercase.description","english":"A perfect lowercase alphabet is a pangram.","target":"完全な小文字アルファベットはパングラムです。"},{"key":"pangramOnlyLowercase.name","english":"Only lowercase","target":"小文字のみ"},{"key":"pangramOnlyLowercase.description","english":"A sentence with only lowercase letters covering all letters is a pangram.","target":"小文字だけで全文字を含む文はパングラムです。"},{"key":"pangramMissingX.name","english":"Missing letter 'x'","target":"'x'が欠けている"},{"key":"pangramMissingX.description","english":"A sentence missing the letter 'x' is not a pangram.","target":"'x'の文字がない文はパングラムではありません。"},{"key":"pangramMissingH.name","english":"Missing letter 'h'","target":"'h'が欠けている"},{"key":"pangramMissingH.description","english":"A sentence missing the letter 'h' is not a pangram.","target":"'h'の文字がない文はパングラムではありません。"},{"key":"pangramMissingAM.name","english":"Missing letters beyond a-m","target":"aからmまでの文字だけ（nからzがない）"},{"key":"pangramMissingAM.description","english":"A string with 'a' to 'm' in lowercase and uppercase is not a pangram.","target":"'a'から'm'までの文字が小文字と大文字で含まれている文字列はパングラムではありません。"},{"key":"pangramWithUnderscores.name","english":"With underscores","target":"アンダースコアを含む"},{"key":"pangramWithUnderscores.description","english":"A pangram sentence with underscores.","target":"アンダースコアを含むパングラム文。"},{"key":"pangramWithNumbers.name","english":"With numbers","target":"数字を含む"},{"key":"pangramWithNumbers.description","english":"A pangram sentence with numbers included.","target":"数字を含むパングラム文。"},{"key":"pangramNumbersReplacingLetters.name","english":"Numbers replacing letters","target":"数字が文字を置き換えている"},{"key":"pangramNumbersReplacingLetters.description","english":"A sentence where letters are replaced by numbers is not a pangram.","target":"文字が数字に置き換えられている文はパングラムではありません。"},{"key":"pangramMixedCasePunctuation.name","english":"Mixed case and punctuation","target":"大文字小文字混在と句読点"},{"key":"pangramMixedCasePunctuation.description","english":"A pangram with mixed case and punctuation.","target":"大文字小文字と句読点を含むパングラム。"},{"key":"pangramCaseInsensitive.name","english":"Case insensitive missing letters","target":"大文字小文字を区別せず、足りない文字がある"},{"key":"pangramCaseInsensitive.description","english":"A case-insensitive sentence without all letters is not a pangram.","target":"大文字小文字を区別せず、全文字を含まない文はパングラムではありません。"}]},{"name":"hints","rows":[{"key":"helpers.question","english":"What helpers will save me trouble here?","target":"ここで作業を楽にしてくれるヘルパー関数は何ですか？"},{"key":"helpers.answer","english":"A `includes()` helper (which asks 'does this character appear in this string?') and a `toLowerCase()` helper (so case differences don't trip you up) make the main logic short and clear.","target":"`includes()`ヘルパー関数（「この文字はこの文字列に含まれますか？」を問う）と`toLowerCase()`ヘルパー関数（大文字小文字の違いに惑わされないようにする）を使えば、主な処理が短く明快になります。"},{"key":"whyLowercase.question","english":"Why should I lowercase the sentence?","target":"なぜ文を小文字にするのですか？"},{"key":"whyLowercase.answer","english":"'The quick brown fox...' contains both 'T' and 't'. If you only check against lowercase letters, the capitals won't match. Convert the sentence to lowercase once at the start so every comparison is consistent.","target":"'The quick brown fox...'には'T'と't'の両方が含まれています。小文字だけと照合すると大文字が一致しません。文を最初に小文字に変換することで、すべての比較が一貫します。"},{"key":"checkEveryLetter.question","english":"How do I check every letter is there?","target":"すべての文字があるかどうかをどのようにチェックしますか？"},{"key":"checkEveryLetter.answer","english":"Loop through each letter of the alphabet `\"abcdefghijklmnopqrstuvwxyz\"`. For each, use `includes()` to check if it appears in the lowercased sentence.","target":"アルファベットの各文字 \"abcdefghijklmnopqrstuvwxyz\" をループで回します。それぞれについて、`includes()` を使って小文字化した文に含まれているか確認します。"},{"key":"stopEarly.question","english":"When can I stop early?","target":"いつ早期に終了できますか？"},{"key":"stopEarly.answer","english":"As soon as you find a letter that's missing, return `false`. There's no point checking the rest. Only return `true` after the entire alphabet has been confirmed.","target":"欠けている文字が見つかったら、すぐに`false`を返します。残りをチェックする意味はありません。アルファベット全体が揃っていることを確認してから`true`を返します。"}]}]}]
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
