---
lang: "ja"
type: "exercise"
slug: "tile-rack"
title: "タイルラック"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/tile-rack"
en_md5: "52c62656cef271937ae0912d3772b3e3"
governance_sha: "c80036b"
content_version: "0c0449b7ece7"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findTilePosition.name","english":"Find Tile Position","target":"タイルの位置を探す"},{"key":"findTilePosition.description","english":"Write a function that finds the position of a specific letter tile in the rack. Return \"Move to position X\" if found, or \"Error: Tile not on rack\" if not.","target":"特定の文字タイルの位置をラック内で探す関数を作りましょう。見つかった場合は \"Move to position X\" を返し、見つからなかった場合は \"Error: Tile not on rack\" を返します。"}]},{"name":"scenarios","rows":[{"key":"tileAtStart.name","english":"Tile at start","target":"先頭のタイル"},{"key":"tileAtStart.description","english":"The letter is the first tile in the rack.","target":"その文字がラックの先頭のタイルです。"},{"key":"tileInMiddle.name","english":"Tile in middle","target":"途中のタイル"},{"key":"tileInMiddle.description","english":"The letter is in the middle of the rack.","target":"その文字がラックの途中にあります。"},{"key":"tileAtEnd.name","english":"Tile at end","target":"最後のタイル"},{"key":"tileAtEnd.description","english":"The letter is the last tile in the rack.","target":"その文字がラックの最後のタイルです。"},{"key":"tileNotFound.name","english":"Tile not found","target":"タイルが見つからない"},{"key":"tileNotFound.description","english":"The letter isn't in the rack.","target":"その文字がラックにありません。"},{"key":"emptyRack.name","english":"Empty rack","target":"空のラック"},{"key":"emptyRack.description","english":"An empty rack has no tiles to find.","target":"空のラックには探すべきタイルがありません。"},{"key":"firstOfDuplicates.name","english":"First of duplicates","target":"最初の重複タイル"},{"key":"firstOfDuplicates.description","english":"When the letter appears multiple times, return the first position.","target":"同じ文字が複数回現れる場合、最初の位置を返します。"},{"key":"longerRack.name","english":"Longer rack","target":"長いラック"},{"key":"longerRack.description","english":"Finding a tile in a longer rack.","target":"長いラック内でタイルを探します。"}]},{"name":"hints","rows":[{"key":"trackPosition.question","english":"How do I keep track of where I am in the rack?","target":"ラック内の現在位置をどうやって追跡しますか？"},{"key":"trackPosition.answer","english":"Use a position variable starting at 1. Each time you look at a new tile, you'll increase it by 1.","target":"1から始まる位置の変数を使います。新しいタイルを見るたびに、その変数を1ずつ増やします。"},{"key":"lookAtEachTile.question","english":"How do I look at each tile?","target":"各タイルを順番に見るにはどうしますか？"},{"key":"lookAtEachTile.answer","english":"A for-each loop gives you each character of the rack in turn.","target":"for-ofループを使うと、ラックの各文字を順番に取り出せます。"},{"key":"onFound.question","english":"What do I do when I find the letter?","target":"目的の文字を見つけたら、どうしますか？"},{"key":"onFound.answer","english":"Build the success message. Convert the position number to a string, then combine it with the surrounding text the exercise asks for using concatenation (`+`) or a template string. Return immediately. There's no need to keep looking.","target":"成功メッセージを組み立てます。位置の数値を文字列に変換し、それを \"Move to position X\" の形式になるように、連結（+）またはテンプレート文字列で組み合わせます。すぐにreturnしてください。それ以上探す必要はありません。"},{"key":"addNumberToString.question","english":"I cannot add a number to a string","target":"数値を文字列に連結できません"},{"key":"addNumberToString.answer","english":"You've learned two ways to join strings together. Rather than concatenating strings, try the other method you've learned.","target":"文字列を組み合わせる方法は2つ学びました。文字列の連結の代わりに、もう一方の方法（テンプレート文字列）を試してください。"},{"key":"positionAlwaysWrong.question","english":"Why is my position always wrong?","target":"なぜ位置がいつも正しくないのですか？"},{"key":"positionAlwaysWrong.answer","english":"Make sure you're increasing the position counter every iteration, not just sometimes. Otherwise every tile reports the same position.","target":"各繰り返しで必ず位置カウンターを増やしていることを確認してください。時々だけ増やしていると、すべてのタイルが同じ位置になってしまいます。"},{"key":"notInRack.question","english":"What if the letter isn't in the rack?","target":"文字がラックにない場合はどうしますか？"},{"key":"notInRack.answer","english":"Only after the loop has finished without finding the letter should you return the error message. Returning the error inside the loop would give up after the first non-matching tile.","target":"ループがすべて終了しても文字が見つからなかった場合にのみ、エラーメッセージを返してください。ループの中でエラーを返すと、最初のタイルが一致しなかった時点で探索を中止してしまいます。"}]}]}]
---

スクラブル自動ボットを作っています。このボットは、文字列（例：`"AERHBT"`）で表される文字タイルのラックを持っています。ボットがどの文字をプレイするか決めたら、そのタイルを取り上げるために手をどの位置に動かせばよいかを知る必要があります。

`findTile`（タイルを探す）という関数を作りましょう。この関数は、ラック（文字列）と探す文字を受け取ります。タイルが見つかった場合、最初に見つかったタイルの位置（1から数えます）をXとして、`"Move to position X"` という文字列を返します。タイルがラックにない場合は、`"Error: Tile not on rack"` を返します。

結果の文字列を作るには、位置の数値を文字列に変換し、連結（`+`）またはテンプレート文字列を使って各部分を組み合わせる必要があります。

例：

- `findTile("ABCDE", "A")` は `"Move to position 1"` を返します。
- `findTile("ABCDE", "C")` は `"Move to position 3"` を返します。
- `findTile("BANANA", "A")` は `"Move to position 2"` を返します。（最初のA）
- `findTile("ABCDE", "Z")` は `"Error: Tile not on rack"` を返します。
