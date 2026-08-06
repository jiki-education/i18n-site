---
lang: "zh-CN"
type: "exercise"
slug: "tile-search"
title: "字母牌搜索"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/tile-search"
en_md5: "964730f77d4f532aa178b26e5504da86"
governance_sha: "c80036b"
content_version: "7b03506546c1"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"你的代码行数太多了。可以缩短一些吗？"}]},{"name":"tasks","rows":[{"key":"searchForTile.name","english":"Search for a Tile","target":"搜索字母牌"},{"key":"searchForTile.description","english":"Write a function that checks whether a specific letter tile is in the rack. Return true if found, false if not.","target":"编写一个函数，检查牌架中是否有特定的字母牌。如果找到，返回 true；否则返回 false。"},{"key":"solveInEightLines.name","english":"Solve in 8 lines of code","target":"用 8 行代码完成"},{"key":"solveInEightLines.description","english":"Can you solve this exercise with only 8 lines of code?","target":"你能只用 8 行代码完成这个练习吗？"}]},{"name":"scenarios","rows":[{"key":"letterFoundAtStart.name","english":"Letter at the start","target":"字母在开头"},{"key":"letterFoundAtStart.description","english":"The letter is the first tile in the rack.","target":"字母是牌架中的第一张牌。"},{"key":"letterFoundInMiddle.name","english":"Letter in the middle","target":"字母在中间"},{"key":"letterFoundInMiddle.description","english":"The letter is in the middle of the rack.","target":"字母在牌架的中间。"},{"key":"letterFoundAtEnd.name","english":"Letter at the end","target":"字母在末尾"},{"key":"letterFoundAtEnd.description","english":"The letter is the last tile in the rack.","target":"字母是牌架中的最后一张牌。"},{"key":"letterNotFound.name","english":"Letter not found","target":"未找到字母"},{"key":"letterNotFound.description","english":"The letter isn't in the rack.","target":"牌架中没有这个字母。"},{"key":"emptyRack.name","english":"Empty rack","target":"空牌架"},{"key":"emptyRack.description","english":"An empty rack has no tiles to find.","target":"空牌架中没有牌可找。"},{"key":"duplicateLetters.name","english":"Rack with duplicates","target":"有重复牌的牌架"},{"key":"duplicateLetters.description","english":"The letter appears among duplicate tiles.","target":"字母出现在重复的牌中。"},{"key":"singleTileFound.name","english":"Single tile found","target":"单张牌找到"},{"key":"singleTileFound.description","english":"A rack with one tile that matches.","target":"牌架中只有一张牌，并且匹配。"},{"key":"singleTileNotFound.name","english":"Single tile not found","target":"单张牌未找到"},{"key":"singleTileNotFound.description","english":"A rack with one tile that doesn't match.","target":"牌架中只有一张牌，但不匹配。"},{"key":"bonus1.name","english":"8 lines of code","target":"8 行代码"},{"key":"bonus1.description","english":"Solve the exercise with only 8 lines of code.","target":"只用 8 行代码完成这个练习。"}]},{"name":"hints","rows":[{"key":"byHand.question","english":"How would I do this by hand?","target":"如何手动完成？"},{"key":"byHand.answer","english":"You'd go through the haystack one letter at a time, comparing each to the needle. As soon as you found a match you'd stop. If you got to the end without a match, the needle isn't there.","target":"你会逐个字母浏览待搜索的字母牌组，将每个字母与要查找的字母比较。一旦找到匹配的就停下来。如果到了末尾还没匹配，说明要查找的字母不在里面。"},{"key":"loopAndCompare.question","english":"How do I loop and compare?","target":"怎样循环和比较？"},{"key":"loopAndCompare.answer","english":"A for-of loop gives you each letter of the string in turn. Inside, an if-statement compares the current letter to the needle.","target":"for-of 循环会依次给出字符串中的每个字母。在循环体内，用 if 语句比较当前字母和要查找的字母。"},{"key":"returnTrue.question","english":"When should I return true?","target":"什么时候返回 true？"},{"key":"returnTrue.answer","english":"As soon as you find a match. There's no point checking the remaining letters.","target":"一找到匹配的就返回 true。没必要继续检查剩下的字母。"},{"key":"returnFalse.question","english":"When should I return false?","target":"什么时候返回 false？"},{"key":"returnFalse.answer","english":"ONLY after the loop has finished without finding a match. A common mistake is putting `return false` inside the loop. That gives up after the very first non-matching letter, before you've checked the rest.","target":"只有在循环结束且没找到匹配时，才返回 false。一个常见的错误是把 `return false` 放在循环体内。这样会在检查第一个不匹配的字母后就放弃，还没检查完其余的。"}]}]}]
---

你正在构建一个拼字游戏机器人。在机器人尝试出一个词之前，它需要检查自己的牌架上是否有某个特定的字母牌。

牌架表示为一个字母字符串（例如 `"SCRAB"`）。

编写一个名为 `contains`（包含）的函数，它接受两个输入：

- `haystack`（待搜索的字母牌组）：牌架中的字母，以字符串表示
- `needle`（要查找的字母）：需要寻找的字母

如果该字母在牌架上，返回 `true`，否则返回 `false`。

示例：

- `contains("SCRAB", "A")` 返回 `true`
- `contains("SCRAB", "Z")` 返回 `false`
- `contains("", "A")` 返回 `false`
