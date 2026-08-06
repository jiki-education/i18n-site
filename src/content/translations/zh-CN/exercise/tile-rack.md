---
lang: "zh-CN"
type: "exercise"
slug: "tile-rack"
title: "瓷砖架"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/tile-rack"
en_md5: "52c62656cef271937ae0912d3772b3e3"
governance_sha: "c80036b"
content_version: "cd2a08c44c6b"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findTilePosition.name","english":"Find Tile Position","target":"查找瓷砖位置"},{"key":"findTilePosition.description","english":"Write a function that finds the position of a specific letter tile in the rack. Return \"Move to position X\" if found, or \"Error: Tile not on rack\" if not.","target":"编写一个函数，找出特定字母瓷砖在字母架上的位置。如果找到了，返回 \"Move to position X\"；如果没找到，返回 \"Error: Tile not on rack\"。"}]},{"name":"scenarios","rows":[{"key":"tileAtStart.name","english":"Tile at start","target":"瓷砖在开头"},{"key":"tileAtStart.description","english":"The letter is the first tile in the rack.","target":"字母是字母架上的第一块瓷砖。"},{"key":"tileInMiddle.name","english":"Tile in middle","target":"瓷砖在中间"},{"key":"tileInMiddle.description","english":"The letter is in the middle of the rack.","target":"字母在字母架的中间。"},{"key":"tileAtEnd.name","english":"Tile at end","target":"瓷砖在末尾"},{"key":"tileAtEnd.description","english":"The letter is the last tile in the rack.","target":"字母是字母架上的最后一块瓷砖。"},{"key":"tileNotFound.name","english":"Tile not found","target":"未找到瓷砖"},{"key":"tileNotFound.description","english":"The letter isn't in the rack.","target":"字母不在字母架上。"},{"key":"emptyRack.name","english":"Empty rack","target":"空字母架"},{"key":"emptyRack.description","english":"An empty rack has no tiles to find.","target":"空字母架上没有要查找的瓷砖。"},{"key":"firstOfDuplicates.name","english":"First of duplicates","target":"多个匹配中的第一个"},{"key":"firstOfDuplicates.description","english":"When the letter appears multiple times, return the first position.","target":"当字母多次出现时，返回第一个位置。"},{"key":"longerRack.name","english":"Longer rack","target":"更长的字母架"},{"key":"longerRack.description","english":"Finding a tile in a longer rack.","target":"在更长的字母架中找到瓷砖。"}]},{"name":"hints","rows":[{"key":"trackPosition.question","english":"How do I keep track of where I am in the rack?","target":"如何跟踪我在字母架中的位置？"},{"key":"trackPosition.answer","english":"Use a position variable starting at 1. Each time you look at a new tile, you'll increase it by 1.","target":"使用一个初始值为 1 的位置变量。每查看一块新瓷砖，就将其加 1。"},{"key":"lookAtEachTile.question","english":"How do I look at each tile?","target":"如何查看每一块瓷砖？"},{"key":"lookAtEachTile.answer","english":"A for-each loop gives you each character of the rack in turn.","target":"for-each 循环会依次给出字母架中的每个字符。"},{"key":"onFound.question","english":"What do I do when I find the letter?","target":"找到字母后我该做什么？"},{"key":"onFound.answer","english":"Build the success message. Convert the position number to a string, then combine it with the surrounding text the exercise asks for using concatenation (`+`) or a template string. Return immediately. There's no need to keep looking.","target":"构建成功消息。将位置数字转换成字符串，然后使用拼接（`+`）或模板字符串将其与练习要求的周围文本组合起来。立即返回，无需继续查找。"},{"key":"addNumberToString.question","english":"I cannot add a number to a string","target":"我无法将数字与字符串相加"},{"key":"addNumberToString.answer","english":"You've learned two ways to join strings together. Rather than concatenating strings, try the other method you've learned.","target":"你已经学过两种拼接字符串的方法。与其使用字符串拼接，不如试试你学过的另一种方法。"},{"key":"positionAlwaysWrong.question","english":"Why is my position always wrong?","target":"为什么我的位置总是不对？"},{"key":"positionAlwaysWrong.answer","english":"Make sure you're increasing the position counter every iteration, not just sometimes. Otherwise every tile reports the same position.","target":"请确保你在每次迭代中都递增位置计数器，而不仅仅是某些时候。否则每块瓷砖都会报告相同的位置。"},{"key":"notInRack.question","english":"What if the letter isn't in the rack?","target":"如果字母不在字母架上怎么办？"},{"key":"notInRack.answer","english":"Only after the loop has finished without finding the letter should you return the error message. Returning the error inside the loop would give up after the first non-matching tile.","target":"只有在循环完成且未找到字母后，才应返回错误消息。在循环内部返回错误会在第一块不匹配的瓷砖后就放弃了。"}]}]}]
---

你正在构建一个自动化拼字游戏机器人。机器人有一个字母瓷砖架，用字符串表示（例如 `"AERHBT"`）。当机器人决定要出哪个字母时，它需要知道要将手移动到哪个位置（英语：position）才能拿起瓷砖。

编写一个名为 `findTile`（查找瓷砖）的函数，它接收字母架（一个字母串）和需要查找的字母。如果找到了瓷砖，则返回 `"Move to position X"`，其中 X 是第一个匹配瓷砖的位置（从 1 开始）。如果瓷砖不在架子上，则返回 `"Error: Tile not on rack"`。

要构建结果字符串，你需要将位置数字转换为字符串，然后使用拼接（`+`）或模板字符串将各部分组合起来。

例子：

- `findTile("ABCDE", "A")` 返回 `"Move to position 1"`
- `findTile("ABCDE", "C")` 返回 `"Move to position 3"`
- `findTile("BANANA", "A")` 返回 `"Move to position 2"`（第一个 A）
- `findTile("ABCDE", "Z")` 返回 `"Error: Tile not on rack"`
