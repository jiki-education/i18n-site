---
lang: "ko"
type: "exercise"
slug: "cityscape-skyscraper"
title: "마천루"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/cityscape-skyscraper"
en_md5: "f9e50084e5ed2badccc2e35a8a790fc5"
governance_sha: "c80036b"
content_version: "7abf3e3f863d"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"totalCells","english":"Expected {{expected}} cells but found {{got}}.","target":"{{expected}}개의 셀을 예상했지만 {{got}}개를 찾았어요."},{"key":"groundWalls","english":"The ground floor should have walls at positions (17, 2) and (21, 2).","target":"입구 층에는 (17, 2)와 (21, 2) 위치에 벽이 있어야 해요."},{"key":"groundGlass","english":"The ground floor should have glass at positions (18, 2) and (20, 2).","target":"입구 층에는 (18, 2)와 (20, 2) 위치에 유리가 있어야 해요."},{"key":"groundEntrance","english":"The ground floor should have an entrance at position (19, 2).","target":"입구 층에는 (19, 2) 위치에 입구가 있어야 해요."},{"key":"floorWalls","english":"Floor {{y}} should have walls at positions (17, {{y}}) and (21, {{y}}).","target":"{{y}}층에는 (17, {{y}})와 (21, {{y}}) 위치에 벽이 있어야 해요."},{"key":"floorGlass","english":"Floor {{y}} should have glass at positions (18, {{y}}), (19, {{y}}), and (20, {{y}}).","target":"{{y}}층에는 (18, {{y}}), (19, {{y}}), (20, {{y}}) 위치에 유리가 있어야 해요."},{"key":"roof","english":"The roof at y={{roofY}} should be all walls.","target":"y={{roofY}}의 지붕은 전체가 벽으로 채워져야 해요."},{"key":"codeQuality.allArgumentsAreVariables","english":"You should use <strong>variables</strong> as arguments to functions, not literal values. Store values in variables first, then pass the variables.","target":"함수에 인자로 숫자 값 자체가 아닌 <strong>변수</strong>를 사용해야 해요. 먼저 값을 변수에 저장한 다음, 변수를 전달하세요."}]},{"name":"tasks","rows":[{"key":"buildSkyscraper.name","english":"Build the skyscraper","target":"마천루 세우기"},{"key":"buildSkyscraper.description","english":"Build a skyscraper with the correct number of floors, including a ground floor with entrance, upper floors with glass, and a wall roof.","target":"올바른 층수로, 입구 층(입구 포함), 유리 층, 벽 지붕을 포함하는 마천루를 세우세요."}]},{"name":"scenarios","rows":[{"key":"floors6.name","english":"6-floor skyscraper","target":"6층 마천루"},{"key":"floors6.description","english":"Build a skyscraper with 6 floors.","target":"6층짜리 마천루를 세우세요."},{"key":"floors8.name","english":"8-floor skyscraper","target":"8층 마천루"},{"key":"floors8.description","english":"Build a skyscraper with 8 floors.","target":"8층짜리 마천루를 세우세요."},{"key":"floors10.name","english":"10-floor skyscraper","target":"10층 마천루"},{"key":"floors10.description","english":"Build a skyscraper with 10 floors.","target":"10층짜리 마천루를 세우세요."},{"key":"floors12.name","english":"12-floor skyscraper","target":"12층 마천루"},{"key":"floors12.description","english":"Build a skyscraper with 12 floors.","target":"12층짜리 마천루를 세우세요."},{"key":"floors16.name","english":"16-floor skyscraper","target":"16층 마천루"},{"key":"floors16.description","english":"Build a skyscraper with 16 floors.","target":"16층짜리 마천루를 세우세요."}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"I don't know where to start.","target":"어디서부터 시작해야 할지 모르겠어요."},{"key":"whereToStart.answer","english":"Firstly try drawing a wall, some glass, and an entrance to check you understand the functions. Then draw the base floor - this is always the same. Then use the `numFloors()` function to find out how many floors there are in total and draw the remaining floors and then the roof.","target":"먼저 벽, 유리, 입구를 하나씩 그려서 함수들을 이해했는지 확인해 보세요. 그런 다음 기본 층(항상 동일한 형태)을 그리세요. 이후 `numFloors()` 함수를 사용해 총 층수를 알아내고, 나머지 층과 지붕을 그리면 돼요."},{"key":"tooManyTooFewFloors.question","english":"I have too many/too few floors.","target":"층이 너무 많거나 적어요."},{"key":"tooManyTooFewFloors.answer","english":"If `numFloors()` returns 5, that should be one entrance floor, 4 glass floors, and 1 roof. Check your logic is correct!","target":"`numFloors()`가 5를 반환한다면, 입구 층 하나, 유리 층 네 개, 지붕 하나로 구성되어야 해요. 로직이 맞는지 확인해 보세요!"}]},{"name":"functions","rows":[{"key":"buildWall.description","english":"Places a **wall block** at grid position (x, y).","target":"그리드의 (x, y) 위치에 **벽 블록**을 배치해요."},{"key":"buildWall.category","english":"Building","target":"건물"},{"key":"buildGlass.description","english":"Places a **glass panel** at grid position (x, y).","target":"그리드의 (x, y) 위치에 **유리 패널**을 배치해요."},{"key":"buildGlass.category","english":"Building","target":"건물"},{"key":"buildEntrance.description","english":"Places an **entrance door** at grid position (x, y).","target":"그리드의 (x, y) 위치에 **입구**를 배치해요."},{"key":"buildEntrance.category","english":"Building","target":"건물"},{"key":"numFloors.description","english":"Returns the **number of floors** for this building.","target":"이 건물의 **층수**를 반환해요."},{"key":"numFloors.category","english":"Info","target":"정보"}]},{"name":"describers","rows":[{"key":"buildWall","english":"built a wall at position (${arg1}, ${arg2})","target":"위치 (${arg1}, ${arg2})에 벽을 배치했어요."},{"key":"buildEntrance","english":"built an entrance at position (${arg1}, ${arg2})","target":"위치 (${arg1}, ${arg2})에 입구를 배치했어요."},{"key":"buildGlass","english":"built a glass panel at position (${arg1}, ${arg2})","target":"위치 (${arg1}, ${arg2})에 유리를 배치했어요."},{"key":"numFloors","english":"retrieved the number of floors","target":"층수를 가져왔어요."}]}]},{"heading":"Shared \"cityscape\" messages","note":"Shared by every exercise in the cityscape category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xyMustBeNumbers","english":"x and y must be numbers","target":null},{"key":"xNotWhole","english":"You must use whole numbers for `x` and `y`. You provided `x` as `{{x}}`, which isn't allowed.","target":null},{"key":"yNotWhole","english":"You must use whole numbers for `x` and `y`. You provided `y` as `{{y}}`, which isn't allowed.","target":null},{"key":"outsideGrid","english":"Position ({{x}}, {{y}}) is outside the grid","target":null},{"key":"alreadyBuilt","english":"The builders are stuck. There's already a {{existing}} at the coordinates `({{x}}, {{y}})` so they can't build here!","target":null}]},{"name":"describers","rows":[{"key":"buildWall","english":"built a wall at position (${arg1}, ${arg2})","target":null},{"key":"buildEntrance","english":"built an entrance at position (${arg1}, ${arg2})","target":null},{"key":"buildGlass","english":"built a glass panel at position (${arg1}, ${arg2})","target":null},{"key":"numFloors","english":"retrieved the number of floors","target":null},{"key":"numBuildings","english":"retrieved the number of buildings","target":null}]}]}]
---

마천루를 만드는 두 개의 연습 문제 중 첫 번째예요.

이번 연습 문제에서는 장면 한가운데에 마천루 한 동을 세우는 게 할 일이에요. 시나리오마다 마천루의 높이가 달라져요.

몇 층을 지을지 결정하려면 건물의 전체 높이를 반환하는 `numFloors()`(층 수) 함수를 이용해요.

사용할 수 있는 부품은 세 가지예요: 벽(W), 유리(G), 입구(E). 아래 함수들을 보면 이 부품들을 만드는 함수를 확인할 수 있어요.

땅에서 가장 가까운 층(지역에 따라 '1층'이거나 '그라운드 플로어'일 거예요!)은 항상 입구가 유리 두 개 사이에 끼워지고 양 옆에 벽이 붙은 형태(WGEGW)예요. 나머지 층들은 벽 사이에 유리 세 개가 끼워진 형태(WGGGW)고요. 그리고 층들 위에는 지붕(WWWWW)이 올라가요.

그래서 5층짜리 마천루에는 입구 층 하나, 유리 층 네 개, 지붕이 들어가요. 모양은 이렇게 생겼어요:

```
WWWWW
WGGGW
WGGGW
WGGGW
WGGGW
WGEGW
```

마천루의 중심은 열 `19`에 위치해야 해요. 땅에서 가장 가까운 층은 지표면 바로 위인 `2`에서 시작해 위로 올라가요(위 예시에서는 입구 층이 `2`에, 지붕이 `7`에 위치하겠네요).

이 연습 문제에서 중요한 규칙 하나는 함수에 전달하는 모든 값이 반드시 변수나 수식이어야 한다는 점이에요. `20` 같은 숫자를 직접 넣으면 안 돼요.

이 연습 문제를 완료하면, 다양한 층수와 너비를 가진 빌딩들로 도시 스카이라인 전체를 만드는 프로젝트가 잠금 해제돼요.
