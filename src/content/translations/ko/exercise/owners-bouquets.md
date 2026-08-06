---
lang: "ko"
type: "exercise"
slug: "owners-bouquets"
title: "집주인의 꽃다발"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/owners-bouquets"
en_md5: "412a9f3a6ed5bb6b797c6239d51492be"
governance_sha: "c80036b"
content_version: "b4d4834c2a4c"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"flowerCount_one","english":"The owner expected to see {{count}} flower planted. But you planted {{got}}.","target":"집주인은 꽃 {{count}}송이가 심어지길 바랐지만, {{got}}송이를 심었어요."},{"key":"flowerCount_other","english":"The owner expected to see {{count}} flowers planted. But you planted {{got}}.","target":"집주인은 꽃 {{count}}송이가 심어지길 바랐지만, {{got}}송이를 심었어요."},{"key":"flowerAtPosition","english":"Expected a flower at position {{position}}, but didn't find one.","target":"{{position}} 위치에 꽃이 있어야 하는데 없었어요."},{"key":"strayFlower","english":"Found a flower at position {{position}}, which isn't where the owner wanted one. The flowers should be evenly spaced.","target":"{{position}} 위치에 꽃이 발견되었지만, 그곳은 집주인이 원한 자리가 아니에요. 꽃은 고르게 심어야 해요."}]},{"name":"tasks","rows":[{"key":"plantFlowersEvenly.name","english":"Plant flowers evenly","target":"꽃을 고르게 심기"},{"key":"plantFlowersEvenly.description","english":"Use askNumberOfFlowers() to find out how many flowers to plant, calculate the gap, and plant them evenly spaced.","target":"askNumberOfFlowers()를 사용해 심을 꽃의 개수를 알아내고, 간격을 계산한 뒤 꽃을 고르게 심어요."}]},{"name":"scenarios","rows":[{"key":"oneFlower.name","english":"The owner wants 1 flower","target":"집주인이 꽃 1송이를 원해요"},{"key":"oneFlower.description","english":"In this scenario, `askNumberOfFlowers()` will return 1. Plant 1 flower at position 50.","target":"이 시나리오에서는 `askNumberOfFlowers()`가 1을 반환해요. 위치 50에 꽃 1송이를 심어요."},{"key":"threeFlowers.name","english":"The owner wants 3 flowers","target":"집주인이 꽃 3송이를 원해요"},{"key":"threeFlowers.description","english":"In this scenario, `askNumberOfFlowers()` will return 3. Plant 3 flowers at positions 25, 50, and 75.","target":"이 시나리오에서는 `askNumberOfFlowers()`가 3을 반환해요. 위치 25, 50, 75에 꽃 3송이를 심어요."},{"key":"fourFlowers.name","english":"The owner wants 4 flowers","target":"집주인이 꽃 4송이를 원해요"},{"key":"fourFlowers.description","english":"In this scenario, `askNumberOfFlowers()` will return 4. Plant 4 flowers at positions 20, 40, 60, and 80.","target":"이 시나리오에서는 `askNumberOfFlowers()`가 4를 반환해요. 위치 20, 40, 60, 80에 꽃 4송이를 심어요."},{"key":"nineFlowers.name","english":"The owner wants 9 flowers","target":"집주인이 꽃 9송이를 원해요"},{"key":"nineFlowers.description","english":"In this scenario, `askNumberOfFlowers()` will return 9. Plant 9 flowers at positions 10, 20, 30, 40, 50, 60, 70, 80, and 90.","target":"이 시나리오에서는 `askNumberOfFlowers()`가 9를 반환해요. 위치 10, 20, 30, 40, 50, 60, 70, 80, 90에 꽃 9송이를 심어요."}]},{"name":"hints","rows":[{"key":"chooseGap.question","english":"How do I work out where to plant each flower?","target":"꽃을 심을 위치를 어떻게 계산하나요?"},{"key":"chooseGap.answer","english":"First work out the gap between flowers:\n\n```javascript\n100 / (numberOfFlowers + 1)\n```\n\nThe first flower goes at that position, and each next flower is one more gap along. So if there are 3 flowers the gap is 25, and they go at 25, 50 and 75.","target":"먼저 꽃 사이의 간격을 계산해요:\n\n```javascript\n100 / (numberOfFlowers + 1)\n```\n\n첫 번째 꽃은 그 간격만큼 떨어진 지점에 심고, 그다음 꽃들은 차례대로 간격을 더해 가며 심어요. 예를 들어 꽃이 3송이면 간격은 25이고, 25, 50, 75 지점에 심어요."},{"key":"seeScenarios.question","english":"How do I see the different scenarios","target":"다른 시나리오는 어떻게 보나요?"},{"key":"seeScenarios.answer","english":"Click on the circles on the left hand side in between your code and the results.","target":"코드와 결과 사이 왼쪽에 있는 점들을 클릭해요."}]},{"name":"functions","rows":[{"key":"askNumberOfFlowers.description","english":"Returns the **number of flowers** to plant.","target":"심을 **꽃의 개수**를 반환해요."},{"key":"askNumberOfFlowers.category","english":"Gardening","target":"정원 가꾸기"},{"key":"plant.description","english":"Plants a flower at the given **position**.","target":"주어진 **위치**에 꽃을 심어요."},{"key":"plant.category","english":"Gardening","target":"정원 가꾸기"}]},{"name":"describers","rows":[{"key":"askNumberOfFlowers","english":"asked for the number of flowers to plant","target":"심을 꽃의 개수를 물어봤어요."},{"key":"plant","english":"planted a flower at position ${arg1}","target":"위치 ${arg1}에 꽃을 심었어요."}]}]},{"heading":"Shared \"flower-planting\" messages","note":"Shared by every exercise in the flower-planting category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"positionNumber","english":"Position must be a number","target":null}]}]}]
---

시나리오가 있는 두 번째 연습 문제에 오신 것을 환영해요.

자동 정원 가꾸기 기계로 다시 돌아왔어요. 이전에는 항상 꽃 9송이를 심었지만, 이제는 상황이 달라졌어요. 이제는 집주인이 알려주는 개수만큼 꽃을 심을 수 있도록 로봇을 만들어야 해요.

이를 위해 `askNumberOfFlowers()`(꽃의 개수를 묻는 함수)라는 함수가 있어요. 이 함수를 사용하면 집주인에게 꽃을 몇 송이 심을지 물어보고, 함수가 그 답을 숫자로 반환해요. 함수가 3을 반환하면 꽃 3송이를 심어야 하고, 8을 반환하면 꽃 8송이를 심어야 해요.

정원을 깔끔하게 유지하라는 엄격한 지시가 있어서, 꽃을 정원 전체에 고르게 심어야 해요. 꽃이 3송이라면 25, 50, 75 지점에 심어야 하고, 꽃이 4송이라면 20, 40, 60, 80 지점에 심어야 하는 식이에요(평소처럼 정원의 너비는 100이에요).

### 시나리오

방금 풀었던 골프 연습 문제와 마찬가지로, 왼쪽에 네 가지 시나리오를 나타내는 회색 점 네 개가 보여요. **각 점을 클릭하면** 다른 시나리오가 나타나지만, 이번에는 `askNumberOfFlowers()`가 매번 다른 숫자를 반환해요.

할 일은 `askNumberOfFlowers()`가 반환할 수 있는 모든 값에 대해 동작하는 프로그램 하나를 작성하는 거예요.

행운을 빌어요!
