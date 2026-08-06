---
lang: "ko"
type: "exercise"
slug: "tile-rack"
title: "타일 랙"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/tile-rack"
en_md5: "52c62656cef271937ae0912d3772b3e3"
governance_sha: "c80036b"
content_version: "c580e49df116"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findTilePosition.name","english":"Find Tile Position","target":"타일 위치 찾기"},{"key":"findTilePosition.description","english":"Write a function that finds the position of a specific letter tile in the rack. Return \"Move to position X\" if found, or \"Error: Tile not on rack\" if not.","target":"랙에서 특정 글자 타일의 위치를 찾는 함수를 작성하세요. 찾으면 \"Move to position X\"를 반환하고, 없으면 \"Error: Tile not on rack\"를 반환해요."}]},{"name":"scenarios","rows":[{"key":"tileAtStart.name","english":"Tile at start","target":"맨 앞 타일"},{"key":"tileAtStart.description","english":"The letter is the first tile in the rack.","target":"찾는 글자가 랙의 첫 번째 타일인 경우예요."},{"key":"tileInMiddle.name","english":"Tile in middle","target":"중간 타일"},{"key":"tileInMiddle.description","english":"The letter is in the middle of the rack.","target":"찾는 글자가 랙의 중간에 있는 경우예요."},{"key":"tileAtEnd.name","english":"Tile at end","target":"맨 끝 타일"},{"key":"tileAtEnd.description","english":"The letter is the last tile in the rack.","target":"찾는 글자가 랙의 마지막 타일인 경우예요."},{"key":"tileNotFound.name","english":"Tile not found","target":"타일 없음"},{"key":"tileNotFound.description","english":"The letter isn't in the rack.","target":"찾는 글자가 랙에 없는 경우예요."},{"key":"emptyRack.name","english":"Empty rack","target":"빈 랙"},{"key":"emptyRack.description","english":"An empty rack has no tiles to find.","target":"빈 랙에는 찾을 타일이 없어요."},{"key":"firstOfDuplicates.name","english":"First of duplicates","target":"중복 첫 타일"},{"key":"firstOfDuplicates.description","english":"When the letter appears multiple times, return the first position.","target":"찾는 글자가 여러 번 나타날 때 첫 번째 위치를 반환해요."},{"key":"longerRack.name","english":"Longer rack","target":"긴 랙"},{"key":"longerRack.description","english":"Finding a tile in a longer rack.","target":"더 긴 랙에서 타일을 찾는 경우예요."}]},{"name":"hints","rows":[{"key":"trackPosition.question","english":"How do I keep track of where I am in the rack?","target":"랙에서 현재 위치를 어떻게 추적하나요?"},{"key":"trackPosition.answer","english":"Use a position variable starting at 1. Each time you look at a new tile, you'll increase it by 1.","target":"1부터 시작하는 위치 변수를 사용하세요. 새로운 타일을 하나 볼 때마다 1씩 증가시켜요."},{"key":"lookAtEachTile.question","english":"How do I look at each tile?","target":"각 타일을 어떻게 하나씩 살펴보나요?"},{"key":"lookAtEachTile.answer","english":"A for-each loop gives you each character of the rack in turn.","target":"for-each 루프를 사용하면 랙의 각 문자를 차례로 가져올 수 있어요."},{"key":"onFound.question","english":"What do I do when I find the letter?","target":"글자를 찾았을 때 어떻게 하나요?"},{"key":"onFound.answer","english":"Build the success message. Convert the position number to a string, then combine it with the surrounding text the exercise asks for using concatenation (`+`) or a template string. Return immediately. There's no need to keep looking.","target":"성공 메시지를 만드세요. 위치 번호를 문자열로 변환한 다음, 연결(`+`) 또는 템플릿 문자열을 사용해 연습 문제에서 요구하는 주변 텍스트와 합치세요. 찾으면 바로 반환하고 더 찾을 필요는 없어요."},{"key":"addNumberToString.question","english":"I cannot add a number to a string","target":"숫자를 문자열에 더할 수 없어요"},{"key":"addNumberToString.answer","english":"You've learned two ways to join strings together. Rather than concatenating strings, try the other method you've learned.","target":"문자열을 합치는 두 가지 방법을 배웠어요. 문자열을 연결하는 대신, 배운 다른 방법을 시도해 보세요."},{"key":"positionAlwaysWrong.question","english":"Why is my position always wrong?","target":"위치가 항상 잘못 나오는 이유가 뭔가요?"},{"key":"positionAlwaysWrong.answer","english":"Make sure you're increasing the position counter every iteration, not just sometimes. Otherwise every tile reports the same position.","target":"매 반복마다 위치 카운터를 증가시키고 있는지 확인하세요. 가끔만 증가시키면 모든 타일에서 같은 위치가 반환돼요."},{"key":"notInRack.question","english":"What if the letter isn't in the rack?","target":"글자가 랙에 없으면 어떻게 하나요?"},{"key":"notInRack.answer","english":"Only after the loop has finished without finding the letter should you return the error message. Returning the error inside the loop would give up after the first non-matching tile.","target":"루프가 끝날 때까지 글자를 찾지 못한 후에만 오류 메시지를 반환해야 해요. 루프 안에서 오류를 반환하면 첫 번째 불일치 타일에서 포기하게 돼요."}]}]}]
---

자동 스크래블 봇을 만들고 있어요. 봇은 문자열로 표현된 타일 랙(예: `"AERHBT"`)을 가지고 있어요. 봇이 어떤 글자를 놓을지 결정하면, 타일을 집기 위해 손을 어느 위치(영어: _position_)로 움직여야 할지 알아야 해요.

`findTile`(타일을 찾는 함수)이라는 함수를 작성하세요. 이 함수는 랙(문자열)과 찾을 글자를 받아요. 타일이 있으면 `"Move to position X"`를 반환해요. 여기서 X는 첫 번째로 일치하는 타일의 위치(1부터 시작)예요. 타일이 랙에 없으면 `"Error: Tile not on rack"`를 반환해요.

결과 문자열을 만들려면, 위치 번호를 문자열로 변환하고, 연결(`+`) 또는 템플릿 문자열을 사용해 부분들을 합쳐야 해요.

예시:

- `findTile("ABCDE", "A")`는 `"Move to position 1"`을 반환해요
- `findTile("ABCDE", "C")`는 `"Move to position 3"`을 반환해요
- `findTile("BANANA", "A")`는 `"Move to position 2"`를 반환해요 (첫 번째 A)
- `findTile("ABCDE", "Z")`는 `"Error: Tile not on rack"`을 반환해요
