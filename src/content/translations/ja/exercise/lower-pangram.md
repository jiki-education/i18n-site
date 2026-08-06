---
lang: "ja"
type: "exercise"
slug: "lower-pangram"
title: "シンプルなパングラム"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/lower-pangram"
en_md5: "5559219b53e3710c746f0bffd6314e62"
governance_sha: "c80036b"
content_version: "42d1682f92e5"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"noNestedLoops","english":"Try not to put one loop inside another. Move the search for a single letter into its own function, then call it from <code>isPangram</code>.","target":"ループの中に別のループを入れないようにしましょう。1文字の検索を別の関数に移し、それを<code>isPangram</code>から呼び出してください。"},{"key":"tooManyLines","english":"Almost! See if you can solve it in fewer lines by leaning on your helper function.","target":"惜しい！ヘルパー関数を活用して、もっと少ない行数で解けるか試してみてください。"}]},{"name":"tasks","rows":[{"key":"checkLowerPangram.name","english":"Check Lower Pangram","target":"小文字パングラムのチェック"},{"key":"checkLowerPangram.description","english":"Write a function that checks whether a lowercase sentence contains every letter of the alphabet. Have it call a small helper function to do the per-letter search.","target":"小文字の文章がアルファベットのすべての文字を含むかどうかを判定する関数を書いてください。1文字ずつの検索を行う小さなヘルパー関数を呼び出すようにします。"},{"key":"decomposeTightly.name","english":"Solve it in 16 lines","target":"16行で解く"},{"key":"decomposeTightly.description","english":"Bonus: with the search pulled out into a helper, the whole solution fits in 16 lines. Can you match it?","target":"おまけ：検索をヘルパー関数に切り出すと、全体の解答が16行に収まります。同じようにできますか？"}]},{"name":"scenarios","rows":[{"key":"lowerPangramEmpty.name","english":"Empty sentence","target":"空の文章"},{"key":"lowerPangramEmpty.description","english":"An empty sentence is not a pangram.","target":"空の文章はパングラムではありません。"},{"key":"lowerPangramFullAlphabet.name","english":"Full lowercase alphabet","target":"完全な小文字アルファベット"},{"key":"lowerPangramFullAlphabet.description","english":"The complete lowercase alphabet is a pangram.","target":"完全な小文字アルファベットはパングラムです。"},{"key":"lowerPangramClassic.name","english":"Classic pangram","target":"古典的なパングラム"},{"key":"lowerPangramClassic.description","english":"The classic pangram sentence contains all 26 letters.","target":"古典的なパングラムの文章は、26文字すべてを含みます。"},{"key":"lowerPangramMissingX.name","english":"Missing letter 'x'","target":"文字'x'がない"},{"key":"lowerPangramMissingX.description","english":"A sentence missing the letter 'x' is not a pangram.","target":"文字'x'がない文章はパングラムではありません。"},{"key":"lowerPangramMissingH.name","english":"Missing letter 'h'","target":"文字'h'がない"},{"key":"lowerPangramMissingH.description","english":"A sentence missing the letter 'h' is not a pangram.","target":"文字'h'がない文章はパングラムではありません。"},{"key":"lowerPangramWithUnderscores.name","english":"With underscores","target":"アンダースコアを含む"},{"key":"lowerPangramWithUnderscores.description","english":"A pangram with underscores instead of spaces.","target":"スペースの代わりにアンダースコアを使ったパングラム。"},{"key":"lowerPangramWithNumbers.name","english":"With numbers","target":"数字を含む"},{"key":"lowerPangramWithNumbers.description","english":"A pangram with numbers included.","target":"数字が含まれたパングラム。"},{"key":"lowerPangramNumbersReplacingLetters.name","english":"Numbers replacing letters","target":"数字が文字を置き換えたもの"},{"key":"lowerPangramNumbersReplacingLetters.description","english":"A sentence where letters are replaced by numbers is not a pangram.","target":"文字が数字に置き換えられた文章はパングラムではありません。"},{"key":"lowerPangramBonusLineCount.name","english":"Tight and tidy","target":"コンパクト"},{"key":"lowerPangramBonusLineCount.description","english":"The complete solution fits in 16 lines when the search lives in its own function.","target":"検索を別の関数に切り出すと、全体の解答が16行に収まります。"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where do I start?","target":"どこから始めればいいですか？"},{"key":"whereToStart.answer","english":"You need to check whether every letter of the alphabet is in the string. So you're going to need to do some looping and comparing.","target":"アルファベットのすべての文字が文字列の中にあるかどうかを調べる必要があります。そのために、ループと比較が必要になります。"},{"key":"checkEveryLetter.question","english":"How do I check that every letter of the alphabet is there?","target":"アルファベットのすべての文字があることをどうやって確認しますか？"},{"key":"checkEveryLetter.answer","english":"Loop through `\"abcdefghijklmnopqrstuvwxyz\"`, one letter at a time. For each letter, check whether the sentence contains it.","target":"`\"abcdefghijklmnopqrstuvwxyz\"`を1文字ずつループします。各文字について、文章がその文字を含むかどうかを調べます。"},{"key":"avoidNestedLoops.question","english":"I've solved the exercise but I don't know how to use the helper function.","target":"演習は解けましたが、ヘルパー関数の使い方がわかりません。"},{"key":"avoidNestedLoops.answer","english":"If you've solved this, it's likely you have one outer loop and then an inner loop. That inner loop is checking if something includes something else. Extracting the inner loop into a helper function called `includes(...)`, and then use that from in the outer loop, is probably a good approach. A helper function is just a normal function defined in the normal way.","target":"もし解けているなら、おそらく外側のループと内側のループを使っているでしょう。その内側のループは、何かが何かを含んでいるかどうかをチェックしています。その内側のループを`includes(...)`というヘルパー関数に切り出し、それを外側のループから使うのが良い方法です。ヘルパー関数は、普通の方法で定義された普通の関数です。"}]}]}]
---

パングラム（英: _pangram_）は、**アルファベットのすべての文字を少なくとも1回ずつ使う文章こと**です。最も有名な英語のパングラムは、"the quick brown fox jumps over the lazy dog" です！

これからの3つの演習は、どれも文章がパングラムかどうかを判定する内容です。

この最初の演習では、小文字だけを扱います。入力は小文字と、スペースや数字、句読点などの他の文字のみを含み、大文字は含まれません。

`isPangram(sentence)`（与えられた文がアルファベットのすべての文字を含むかどうかを判定する関数）を作成してください。この関数は、文章を入力として受け取り、'a'から'z'までのすべての文字を少なくとも1回ずつ含む場合は`true`、そうでなければ`false`を返します。

### ヘルパー関数

この演習をクリアするためには、入れ子のループを使ってはいけません。代わりに、ひとつ前の演習と同じように、`isPangram(...)` が使うヘルパー関数を作成することがポイントです。

このヘルパー関数は、ある文字列が別の文字列を含むかどうかを判定するのに役立ちます。この関数を`includes`と名付け、引数を`haystack`（干し草の山）と`needle`（針）と呼ぶことをお勧めします。これは、「干し草の山の中から針を探す」という古い英語のフレーズに由来する考え方です。

複数の関数を作るのが大変そうに感じたら、まずはヘルパー関数を使わずに入れ子のループで演習を解いてみて、その後に、それをどうヘルパー関数に分解するか考えてみるのも良いでしょう。

楽しんでください！
