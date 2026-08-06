---
lang: "ko"
type: "exercise"
slug: "plant-the-flowers"
title: "꽃 심기"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/plant-the-flowers"
en_md5: "4cdf23fd99e55e08a5eece1751d712e2"
governance_sha: "c80036b"
content_version: "39005472ec62"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"flowerCount","english":"Expected 9 flowers, but found {{got}}.","target":"꽃을 9개 심어야 하는데 {{got}}개만 심었어요."},{"key":"missingFlowerAt10","english":"Missing a flower at position 10.","target":"위치 10에 꽃을 심지 않았어요."},{"key":"missingFlowerAt50","english":"Missing a flower at position 50.","target":"위치 50에 꽃을 심지 않았어요."},{"key":"missingFlowerAt90","english":"Missing a flower at position 90.","target":"위치 90에 꽃을 심지 않았어요."},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try to find a way to make it shorter.","target":"코드 줄 수가 너무 많아요. 더 짧게 만드는 방법을 찾아보세요."}]},{"name":"tasks","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"꽃 9개 심기"},{"key":"plantFlowers.description","english":"Use a variable and a repeat loop to plant 9 flowers at positions 10, 20, 30, ..., 90.","target":"변수와 반복 루프를 사용해 위치 10, 20, 30, ..., 90에 꽃 9개를 심어요."}]},{"name":"scenarios","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"꽃 9개 심기"},{"key":"plantFlowers.description","english":"Plant flowers at positions 10, 20, 30, 40, 50, 60, 70, 80, and 90.","target":"위치 10, 20, 30, 40, 50, 60, 70, 80, 90에 꽃을 심어요."}]},{"name":"hints","rows":[{"key":"stuck.question","english":"I'm totally stuck","target":"완전히 막혔어요."},{"key":"stuck.answer","english":"Check the recent videos on how to use repeat loops and how to update variables to track state. They should tell you everything you need to know.","target":"반복 루프 사용법과 상태를 추적하는 변수 업데이트 방법에 대한 최근 동영상을 확인해 보세요. 필요한 모든 것이 거기에 다 나와 있을 거예요."}]},{"name":"functions","rows":[{"key":"plant.description","english":"Plants a flower at the given **position**.","target":"주어진 **위치**에 꽃을 심어요."},{"key":"plant.category","english":"Gardening","target":"원예"}]},{"name":"describers","rows":[{"key":"plant","english":"planted a flower at position ${arg1}","target":"위치 ${arg1}에 꽃을 심었어요."}]}]},{"heading":"Shared \"flower-planting\" messages","note":"Shared by every exercise in the flower-planting category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"positionNumber","english":"Position must be a number","target":null}]}]}]
---

자동으로 꽃을 심는 기계를 만들어요.

잔디밭에 10 간격으로 꽃을 고르게 심어야 해요. 그래서 첫 번째 꽃은 위치 10에, 두 번째 꽃은 20에 심어야 해요, 이런 식이죠.

위치를 입력으로 받는 `plant(position)`(꽃 심기) 함수가 있어요. 예를 들어, `plant(10)`은 위치 10에 꽃을 심어요.

이 연습 문제는 **5줄의 코드**로 풀어야 해요. 그러려면 `plant(10)`, `plant(20)`처럼 하나씩 쓰지 않고 해결할 방법을 찾아야 해요.

잘해봐요!
