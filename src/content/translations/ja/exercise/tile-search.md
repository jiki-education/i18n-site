---
lang: "ja"
type: "exercise"
slug: "tile-search"
title: "タイル探索"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/tile-search"
en_md5: "964730f77d4f532aa178b26e5504da86"
governance_sha: "c80036b"
content_version: "8102a80e6fa5"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"解答のコード行数が多すぎます。もっと短くできますか？"}]},{"name":"tasks","rows":[{"key":"searchForTile.name","english":"Search for a Tile","target":"タイルを探す"},{"key":"searchForTile.description","english":"Write a function that checks whether a specific letter tile is in the rack. Return true if found, false if not.","target":"特定の文字タイルがタイルの並びに含まれているかどうかを調べる関数を作成してください。見つかった場合は `true`、そうでなければ `false` を返します。"},{"key":"solveInEightLines.name","english":"Solve in 8 lines of code","target":"8行のコードで解く"},{"key":"solveInEightLines.description","english":"Can you solve this exercise with only 8 lines of code?","target":"この演習を8行のコードだけで解けますか？"}]},{"name":"scenarios","rows":[{"key":"letterFoundAtStart.name","english":"Letter at the start","target":"先頭の文字"},{"key":"letterFoundAtStart.description","english":"The letter is the first tile in the rack.","target":"その文字はタイルの並びの最初のタイルです。"},{"key":"letterFoundInMiddle.name","english":"Letter in the middle","target":"中間の文字"},{"key":"letterFoundInMiddle.description","english":"The letter is in the middle of the rack.","target":"その文字はタイルの並びの途中にあります。"},{"key":"letterFoundAtEnd.name","english":"Letter at the end","target":"末尾の文字"},{"key":"letterFoundAtEnd.description","english":"The letter is the last tile in the rack.","target":"その文字はタイルの並びの最後のタイルです。"},{"key":"letterNotFound.name","english":"Letter not found","target":"文字が見つからない"},{"key":"letterNotFound.description","english":"The letter isn't in the rack.","target":"その文字はタイルの並びにありません。"},{"key":"emptyRack.name","english":"Empty rack","target":"空のタイル並び"},{"key":"emptyRack.description","english":"An empty rack has no tiles to find.","target":"空のタイルの並びには、見つかるタイルはありません。"},{"key":"duplicateLetters.name","english":"Rack with duplicates","target":"重複タイルを含む並び"},{"key":"duplicateLetters.description","english":"The letter appears among duplicate tiles.","target":"その文字は重複しているタイルの中に現れます。"},{"key":"singleTileFound.name","english":"Single tile found","target":"1枚のタイルが見つかる"},{"key":"singleTileFound.description","english":"A rack with one tile that matches.","target":"タイルが1枚だけの並びで、その文字と一致する場合。"},{"key":"singleTileNotFound.name","english":"Single tile not found","target":"1枚のタイルが見つからない"},{"key":"singleTileNotFound.description","english":"A rack with one tile that doesn't match.","target":"タイルが1枚だけの並びで、その文字と一致しない場合。"},{"key":"bonus1.name","english":"8 lines of code","target":"8行のコード"},{"key":"bonus1.description","english":"Solve the exercise with only 8 lines of code.","target":"この演習を8行のコードで解いてください。"}]},{"name":"hints","rows":[{"key":"byHand.question","english":"How would I do this by hand?","target":"手作業で行うとしたら、どうしますか？"},{"key":"byHand.answer","english":"You'd go through the haystack one letter at a time, comparing each to the needle. As soon as you found a match you'd stop. If you got to the end without a match, the needle isn't there.","target":"探索対象を1文字ずつ調べ、それぞれを探す文字と比較します。一致するものが見つかったら、そこで止めます。最後まで一致するものがなければ、探す文字は存在しません。"},{"key":"loopAndCompare.question","english":"How do I loop and compare?","target":"ループと比較はどうやりますか？"},{"key":"loopAndCompare.answer","english":"A for-of loop gives you each letter of the string in turn. Inside, an if-statement compares the current letter to the needle.","target":"`for-of`ループを使うと、文字列の各文字を順番に取り出せます。その中で、現在の文字を探す文字と`if`文で比較します。"},{"key":"returnTrue.question","english":"When should I return true?","target":"いつ`true`を返せばよいですか？"},{"key":"returnTrue.answer","english":"As soon as you find a match. There's no point checking the remaining letters.","target":"一致するものが見つかったらすぐにです。残りの文字を調べても意味がありません。"},{"key":"returnFalse.question","english":"When should I return false?","target":"いつ`false`を返せばよいですか？"},{"key":"returnFalse.answer","english":"ONLY after the loop has finished without finding a match. A common mistake is putting `return false` inside the loop. That gives up after the very first non-matching letter, before you've checked the rest.","target":"`return false`を返すのは、ループが終了しても一致するものが見つからなかった場合だけです。よくある間違いは、`return false`をループの中に書いてしまうことです。そうすると、最初に一致しなかった文字で諦めてしまい、残りを調べる前に終わってしまいます。"}]}]}]
---

Scrabbleのボットを作っています。ボットが単語をプレイする前に、手元のタイルに特定の文字タイルがあるかを確認する必要があります。

タイルの並びは文字列（例: `"SCRAB"`）として表されます。

`contains`（含む）という関数を作成してください。この関数は2つの入力を受け取ります。

- `haystack`（探索対象）: タイルの並びを表す文字列
- `needle`（探す文字）: 検索する文字

その文字がタイルの並びに含まれていれば `true` を、そうでなければ `false` を返します。

例:

- `contains("SCRAB", "A")` は `true` を返します
- `contains("SCRAB", "Z")` は `false` を返します
- `contains("", "A")` は `false` を返します
