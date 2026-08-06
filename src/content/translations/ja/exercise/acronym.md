---
lang: "ja"
type: "exercise"
slug: "acronym"
title: "頭字語"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/acronym"
en_md5: "f42dbd1b0fe85c42e70bb2c37a4746c2"
governance_sha: "c80036b"
content_version: "febf6e2ed706"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":"頭字語関数を作りましょう"},{"key":"createAcronymFunction.description","english":"Write a function that takes a phrase and returns its acronym: the first letter of each word, in uppercase. Words are separated by spaces and hyphens, and any other punctuation is ignored.","target":"フレーズを受け取り、その頭字語を返す関数を書きます。頭字語は各単語の先頭の文字を大文字にしたものです。単語の区切りはスペースまたはハイフンで、それ以外の句読点は無視します。"},{"key":"solveTightly.name","english":"Solve it in 46 lines","target":"46行で解きましょう"},{"key":"solveTightly.description","english":"Bonus: with the letter-testing and case-swapping pulled into helper functions that `acronym` reuses, the whole solution fits in 46 lines. Can you match it?","target":"ボーナス：文字かどうかの判定と大文字・小文字の変換を補助関数に切り出し、それを`acronym`が再利用することで、全体を46行以内に収められます。挑戦してみませんか？"}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Basic acronym: PNG","target":"基本的な頭字語：PNG"},{"key":"png.description","english":"Convert 'Portable Network Graphics' to 'PNG'.","target":"「Portable Network Graphics」を「PNG」に変換します。"},{"key":"ror.name","english":"Lowercase words: ROR","target":"小文字の単語：ROR"},{"key":"ror.description","english":"Convert 'Ruby on Rails' to 'ROR'.","target":"「Ruby on Rails」を「ROR」に変換します。"},{"key":"gimp.name","english":"All caps word: GIMP","target":"すべて大文字の単語：GIMP"},{"key":"gimp.description","english":"Convert 'GNU Image Manipulation Program' to 'GIMP'.","target":"「GNU Image Manipulation Program」を「GIMP」に変換します。"},{"key":"firstWordOnly.name","english":"Single word: H","target":"単語ひとつ：H"},{"key":"firstWordOnly.description","english":"Convert 'HyperText' to 'H'.","target":"「HyperText」を「H」に変換します。"},{"key":"hyphenated.name","english":"Hyphenated phrase: CMOS","target":"ハイフン付きフレーズ：CMOS"},{"key":"hyphenated.description","english":"Convert 'Complementary metal-oxide semiconductor' to 'CMOS'.","target":"「Complementary metal-oxide semiconductor」を「CMOS」に変換します。"},{"key":"fifo.name","english":"Comma-separated: FIFO","target":"カンマ区切り：FIFO"},{"key":"fifo.description","english":"Convert 'First In, First Out' to 'FIFO'.","target":"「First In, First Out」を「FIFO」に変換します。"},{"key":"punctuation.name","english":"With punctuation: PHT","target":"句読点あり：PHT"},{"key":"punctuation.description","english":"Convert 'Portable, HyperText, Transmitter' to 'PHT'.","target":"「Portable, HyperText, Transmitter」を「PHT」に変換します。"},{"key":"hc.name","english":"With an apostrophe: HC","target":"アポストロフィあり：HC"},{"key":"hc.description","english":"Convert 'Halley's Comet' to 'HC'.","target":"「Halley's Comet」を「HC」に変換します。"},{"key":"simufta.name","english":"Consecutive delimiters: SIMUFTA","target":"区切り文字が連続：SIMUFTA"},{"key":"simufta.description","english":"Convert 'Something - I made up from thin air' to 'SIMUFTA'.","target":"「Something - I made up from thin air」を「SIMUFTA」に変換します。"},{"key":"trnt.name","english":"Underscore emphasis: TRNT","target":"アンダースコア強調：TRNT"},{"key":"trnt.description","english":"Convert 'The Road _Not_ Taken' to 'TRNT'.","target":"「The Road _Not_ Taken」を「TRNT」に変換します。"},{"key":"long.name","english":"A very long one: ROTFLSHTMDCOALM","target":"とても長いもの：ROTFLSHTMDCOALM"},{"key":"long.description","english":"Convert 'Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me' to 'ROTFLSHTMDCOALM'.","target":"「Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me」を「ROTFLSHTMDCOALM」に変換します。"},{"key":"emoji.name","english":"With an emoji: HW","target":"絵文字あり：HW"},{"key":"emoji.description","english":"Convert 'Hello 👋 World' to 'HW'.","target":"「Hello 👋 World」を「HW」に変換します。"},{"key":"acronymBonusLineCount.name","english":"Neat and tidy","target":"きれいにまとめて"},{"key":"acronymBonusLineCount.description","english":"The tidiest solution reuses its helpers and fits in 46 lines. Can you find it?","target":"最も整理された解答は補助関数を再利用して46行に収まります。見つけられますか？"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"その調子！もっと少ない行数で解けるか試してみましょう。"},{"key":"noMethods","english":"This exercise is about building the tools yourself. Solve it without using any built-in methods.","target":"この演習では、道具を自分で作ることが目的です。組み込みのメソッドを使わずに解いてください。"}]},{"name":"hints","rows":[{"key":"pickLetters.question","english":"How do I pick out which letters become the acronym?","target":"頭字語になる文字をどうやって見つければいいですか？"},{"key":"pickLetters.answer","english":"The acronym is built from the letter that starts each word: the very first letter of the phrase, plus the first letter after every space or hyphen.","target":"頭字語は各単語の先頭の文字から作られます。つまり、フレーズの先頭の文字と、スペースまたはハイフンの直後の文字です。"},{"key":"findWordStarts.question","english":"How do I know when a new word starts?","target":"新しい単語が始まる時はどうやってわかりますか？"},{"key":"findWordStarts.answer","english":"Walk the phrase one character at a time and keep track of whether you're at the start of a new word. You are at the very beginning, and again straight after any space or hyphen. Anything that isn't a letter (punctuation, underscores, apostrophes) should be skipped rather than counted as the start of a word.","target":"フレーズを1文字ずつたどりながら、今が新しい単語の先頭かどうかを記録します。先頭はフレーズの最初と、スペースまたはハイフンの直後です。英字でないもの（句読点、アンダースコア、アポストロフィなど）は単語の開始と見なさず、スキップします。"},{"key":"buildResult.question","english":"How do I build up the result as I go?","target":"結果をどうやって組み立てていけばいいですか？"},{"key":"buildResult.answer","english":"Start with an empty string and add each chosen letter onto the end using `+`.","target":"空の文字列から始めて、選んだ文字を`+`で末尾に追加していきます。"},{"key":"uppercaseLetters.question","english":"How do I make a letter uppercase when there's no built-in for it?","target":"組み込みの大文字化機能がない場合、どうやって文字を大文字にしますか？"},{"key":"uppercaseLetters.answer","english":"There's no ready-made uppercaser here. Just like in Pangram, you can line up a lowercase alphabet against an uppercase one and swap a letter for the one at the same position. Letters that are already uppercase can stay as they are.","target":"ここにはあらかじめ用意された大文字化の道具はありません。Pangramのときと同じように、小文字のアルファベットと大文字のアルファベットを並べて、同じ位置の文字に置き換えます。すでに大文字の文字はそのままにします。"}]}]}]
---

以前に、`Portable Network Graphics` を `PNG` にするような、簡単な3文字の頭字語を解きましたね。

しかし、この演習では、さらに一歩進んで、3文字だけでなく、あらゆる頭字語を扱います。そして、これはずっと手ごわいです…

この演習では、`acronym(phrase)` という関数を書きます。この関数はフレーズを受け取り、その頭字語を返します。

## ルール

単語の区切りは、**スペース**または**ハイフン**（`-`）です。それ以外の文字（カンマ、アポストロフィ、アンダースコア、感嘆符など）は**区切り文字ではありません**し、頭字語の一部になることもありません。カウントされるのは文字だけです。

| フレーズ                  | 頭字語 |
| ------------------------- | ------ |
| As Soon As Possible       | ASAP   |
| Liquid-crystal display    | LCD    |
| Thank George It's Friday! | TGIF   |

## ご注意

コースの後半で登場するような、より高度なJavaScriptのメソッド（文字を大文字に変換したり、ある文字が文字かどうかを判定したりといったもの）は、まだ用意されていません。それらの補助関数をすべて自分で作り、それから全体を組み立てる必要があります。

これは思っているよりも難しいです。楽しんでください！
