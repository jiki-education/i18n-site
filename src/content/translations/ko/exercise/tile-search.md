---
lang: "ko"
type: "exercise"
slug: "tile-search"
title: "타일 검색"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/tile-search"
en_md5: "964730f77d4f532aa178b26e5504da86"
governance_sha: "c80036b"
content_version: "0fbbeb341bfa"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"코드 줄 수가 너무 많아요. 더 짧게 만들 수 있나요?"}]},{"name":"tasks","rows":[{"key":"searchForTile.name","english":"Search for a Tile","target":"타일 찾기"},{"key":"searchForTile.description","english":"Write a function that checks whether a specific letter tile is in the rack. Return true if found, false if not.","target":"특정 문자 타일이 랙에 있는지 확인하는 함수를 작성하세요. 있으면 true를, 없으면 false를 반환하세요."},{"key":"solveInEightLines.name","english":"Solve in 8 lines of code","target":"코드 8줄로 해결하기"},{"key":"solveInEightLines.description","english":"Can you solve this exercise with only 8 lines of code?","target":"이 연습 문제를 단 8줄의 코드로 풀 수 있나요?"}]},{"name":"scenarios","rows":[{"key":"letterFoundAtStart.name","english":"Letter at the start","target":"첫 번째 문자"},{"key":"letterFoundAtStart.description","english":"The letter is the first tile in the rack.","target":"찾는 문자가 랙의 첫 번째 타일인 경우"},{"key":"letterFoundInMiddle.name","english":"Letter in the middle","target":"중간에 있는 문자"},{"key":"letterFoundInMiddle.description","english":"The letter is in the middle of the rack.","target":"찾는 문자가 랙의 중간에 있는 경우"},{"key":"letterFoundAtEnd.name","english":"Letter at the end","target":"마지막 문자"},{"key":"letterFoundAtEnd.description","english":"The letter is the last tile in the rack.","target":"찾는 문자가 랙의 마지막 타일인 경우"},{"key":"letterNotFound.name","english":"Letter not found","target":"문자 없음"},{"key":"letterNotFound.description","english":"The letter isn't in the rack.","target":"찾는 문자가 랙에 없는 경우"},{"key":"emptyRack.name","english":"Empty rack","target":"빈 랙"},{"key":"emptyRack.description","english":"An empty rack has no tiles to find.","target":"빈 랙에는 찾을 타일이 하나도 없어요."},{"key":"duplicateLetters.name","english":"Rack with duplicates","target":"중복 문자가 있는 랙"},{"key":"duplicateLetters.description","english":"The letter appears among duplicate tiles.","target":"찾는 문자가 중복된 타일 사이에 있는 경우"},{"key":"singleTileFound.name","english":"Single tile found","target":"타일 하나 일치"},{"key":"singleTileFound.description","english":"A rack with one tile that matches.","target":"찾는 문자와 일치하는 타일이 하나 있는 랙"},{"key":"singleTileNotFound.name","english":"Single tile not found","target":"타일 하나 불일치"},{"key":"singleTileNotFound.description","english":"A rack with one tile that doesn't match.","target":"찾는 문자와 일치하지 않는 타일이 하나 있는 랙"},{"key":"bonus1.name","english":"8 lines of code","target":"코드 8줄"},{"key":"bonus1.description","english":"Solve the exercise with only 8 lines of code.","target":"이 연습 문제를 단 8줄의 코드로 해결하세요."}]},{"name":"hints","rows":[{"key":"byHand.question","english":"How would I do this by hand?","target":"직접 한다면 어떻게 할까요?"},{"key":"byHand.answer","english":"You'd go through the haystack one letter at a time, comparing each to the needle. As soon as you found a match you'd stop. If you got to the end without a match, the needle isn't there.","target":"haystack을 한 글자씩 살펴보면서 needle과 비교해요. 일치하는 글자를 찾으면 바로 멈춰요. 끝까지 일치하는 글자가 없으면 needle이 없는 거예요."},{"key":"loopAndCompare.question","english":"How do I loop and compare?","target":"반복문과 비교는 어떻게 하나요?"},{"key":"loopAndCompare.answer","english":"A for-of loop gives you each letter of the string in turn. Inside, an if-statement compares the current letter to the needle.","target":"for...of문은 문자열의 각 문자를 차례대로 줘요. 그 안에서 if문으로 현재 문자를 needle과 비교해요."},{"key":"returnTrue.question","english":"When should I return true?","target":"언제 true를 반환해야 하나요?"},{"key":"returnTrue.answer","english":"As soon as you find a match. There's no point checking the remaining letters.","target":"일치하는 걸 찾자마자 바로 반환해요. 남은 문자를 계속 확인할 필요가 없어요."},{"key":"returnFalse.question","english":"When should I return false?","target":"언제 false를 반환해야 하나요?"},{"key":"returnFalse.answer","english":"ONLY after the loop has finished without finding a match. A common mistake is putting `return false` inside the loop. That gives up after the very first non-matching letter, before you've checked the rest.","target":"루프를 끝까지 돌았는데도 일치하는 글자를 찾지 못했을 때만 false를 반환해요. 흔히 하는 실수는 `return false`를 루프 안에 넣는 거예요. 그러면 첫 번째로 일치하지 않는 문자에서 바로 포기하게 돼요, 나머지는 확인하기도 전에 말이에요."}]}]}]
---

스크래블 봇을 만들고 있어요. 봇이 단어를 놓기 전에, 자신의 랙에 특정 문자 타일이 있는지 확인해야 해요.

랙은 문자들의 문자열(예: `"SCRAB"`)로 나타내요.

다음 두 개의 매개변수를 받는 `contains`(포함) 함수를 작성하세요:

- `haystack`(찾을 대상): 타일 랙을 나타내는 문자열
- `needle`(찾을 문자): 찾으려는 문자

문자가 랙에 있으면 `true`를, 없으면 `false`를 반환하세요.

예시:

- `contains("SCRAB", "A")`는 `true`를 반환해요.
- `contains("SCRAB", "Z")`는 `false`를 반환해요.
- `contains("", "A")`는 `false`를 반환해요.
