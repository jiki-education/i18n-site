---
lang: "ja"
type: "exercise"
slug: "nucleotide"
title: "ヌクレオチド"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/nucleotide"
en_md5: "1a3fe935f5d7c6338efe81dc27d8e9f1"
governance_sha: "c80036b"
content_version: "aab1b14e2e21"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"countNucleotide.name","english":"Count a Nucleotide","target":"ヌクレオチドを数える"},{"key":"countNucleotide.description","english":"Write a function that counts how many times a specific nucleotide (A, C, G, or T) appears in a DNA strand. Return -1 if the nucleotide or any character in the strand is invalid.","target":"特定のヌクレオチド（A、C、G、T）がDNA鎖に出現する回数を数える関数を作成してください。ヌクレオチドまたは鎖内の文字が無効な場合は -1 を返します。"}]},{"name":"scenarios","rows":[{"key":"nucleotideEmptyStrand.name","english":"Empty strand","target":"空の鎖"},{"key":"nucleotideEmptyStrand.description","english":"An empty strand should return 0 for any valid nucleotide.","target":"空の鎖の場合、任意の有効なヌクレオチドに対して 0 を返す必要があります。"},{"key":"nucleotideSingleMatch.name","english":"Single nucleotide strand","target":"1文字の鎖"},{"key":"nucleotideSingleMatch.description","english":"A single-character strand matching the target should return 1.","target":"指定されたヌクレオチドと一致する1文字の鎖は、1 を返す必要があります。"},{"key":"nucleotideRepeated.name","english":"Repeated nucleotide","target":"ヌクレオチドの繰り返し"},{"key":"nucleotideRepeated.description","english":"A strand of repeated nucleotides should count all of them.","target":"同じヌクレオチドが繰り返される鎖では、そのすべてを数える必要があります。"},{"key":"nucleotideMixedStrandA.name","english":"Count A in mixed strand","target":"混合鎖でAを数える"},{"key":"nucleotideMixedStrandA.description","english":"Count a specific nucleotide in a mixed strand.","target":"混合鎖で特定のヌクレオチドを数えます。"},{"key":"nucleotideMixedStrandT.name","english":"Count T in mixed strand","target":"混合鎖でTを数える"},{"key":"nucleotideMixedStrandT.description","english":"Count a different nucleotide in the same strand.","target":"同じ鎖で別のヌクレオチドを数えます。"},{"key":"nucleotideInvalidNucleotide.name","english":"Invalid nucleotide","target":"無効なヌクレオチド"},{"key":"nucleotideInvalidNucleotide.description","english":"An invalid nucleotide character should return -1.","target":"無効なヌクレオチド文字の場合は -1 を返す必要があります。"},{"key":"nucleotideInvalidStrand.name","english":"Invalid strand","target":"無効な鎖"},{"key":"nucleotideInvalidStrand.description","english":"A strand containing invalid characters should return -1.","target":"無効な文字を含む鎖の場合は -1 を返す必要があります。"}]},{"name":"hints","rows":[{"key":"checkValid.question","english":"How do I check that the character I'm asked about is valid?","target":"指定された文字が有効かどうかを確認するにはどうすればよいですか？"},{"key":"checkValid.answer","english":"Strings have an `includes()` method that tells you whether one string appears inside another. That's a handy way to ask whether a character is one of the valid nucleotides. Validate before you start counting.","target":"文字列には `includes()` メソッドがあり、ある文字列が別の文字列の中に含まれているかどうかを調べることができます。これは、文字が有効なヌクレオチドの1つであるかどうかを確認する便利な方法です。カウントを始める前に検証しましょう。"},{"key":"invalidNucleotide.question","english":"What do I do if the nucleotide is invalid?","target":"ヌクレオチドが無効な場合はどうすればよいですか？"},{"key":"invalidNucleotide.answer","english":"Return `-1` immediately. The spec uses that value to signal an invalid input.","target":"すぐに `-1` を返します。仕様では、無効な入力を示すためにその値を使用します。"},{"key":"countOccurrences.question","english":"How do I count occurrences in the strand?","target":"鎖内での出現回数を数えるにはどうすればよいですか？"},{"key":"countOccurrences.answer","english":"Loop through each character of the strand. If the character matches the nucleotide you're counting, add 1 to a counter. Return the counter at the end.","target":"鎖の各文字をループします。その文字が数えているヌクレオチドと一致する場合、カウンターに 1 を加えます。最後にカウンターを返します。"},{"key":"validateStrand.question","english":"Should I validate the strand too?","target":"鎖も検証する必要がありますか？"},{"key":"validateStrand.answer","english":"Yes. If any character in the strand isn't a valid nucleotide, return `-1`. Check each character before counting.","target":"はい。鎖内のいずれかの文字が有効なヌクレオチドでない場合は、`-1` を返します。カウントする前に各文字を確認してください。"}]},{"name":"functions","rows":[{"key":"includes.description","english":"Check whether a string contains a smaller string (provided by level stdlib)","target":"文字列が指定された部分文字列を含むかどうかを確認します（レベル標準ライブラリにより提供）"},{"key":"includes.category","english":"String Operations","target":"文字列操作"}]}]}]
---

DNAは、他の化学物質が連なる長い鎖です。その中でも特に重要なのが、アデニン、シトシン、グアニン、チミンという4種類のヌクレオチドです。1本のDNA鎖には、これら4種類のヌクレオチドが何十億個も並び、その順序が重要なのです！
DNAの配列は`"ATTACG"`のような文字列で表します。`'A'`はアデニン、`'C'`はシトシン、`'G'`はグアニン、`'T'`はチミンを表します。

`countNucleotide`（指定されたヌクレオチドの出現回数を数える）という関数を作成してください。この関数は、DNA鎖と1文字のヌクレオチドを受け取り、そのヌクレオチドが鎖に出現する回数を返します。

ヌクレオチド文字が無効（`A`、`C`、`G`、`T`のいずれでもない）である場合は、`-1`を返します。
鎖に無効な文字が含まれている場合も、`-1`を返します。

例：

- `countNucleotide("GATTACA", "A")` は `3` を返します
- `countNucleotide("GATTACA", "T")` は `2` を返します
- `countNucleotide("GATTACA", "X")` は `-1` を返します

必要に応じて `"...".includes(someString)` を使うこともできます。
