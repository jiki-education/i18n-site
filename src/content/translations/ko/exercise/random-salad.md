---
lang: "ko"
type: "exercise"
slug: "random-salad"
title: "랜덤 샐러드"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/random-salad"
en_md5: "e5aaa7fb66d90d3c7074f04bc6296752"
governance_sha: "c80036b"
content_version: "9fb56e328945"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"leavesNumber","english":"Leaves must be a number","target":"Leaves는 숫자여야 해요."},{"key":"tomatoesNumber","english":"Tomatoes must be a number","target":"Tomatoes는 숫자여야 해요."},{"key":"croutonsNumber","english":"Croutons must be a number","target":"Croutons는 숫자여야 해요."},{"key":"olivesNumber","english":"Olives must be a number","target":"Olives는 숫자여야 해요."}]},{"name":"checks","rows":[{"key":"saladNotMade","english":"You didn't make the salad. Make sure you call <code>makeSalad()</code> with all four ingredients.","target":"샐러드를 만들지 않았어요. 네 가지 재료를 모두 사용해 <code>makeSalad()</code>를 호출했는지 확인해 주세요."},{"key":"needLeavesRandomInt","english":"You need to call <code>Math.randomInt(40, 100)</code> to generate the number of leaves.","target":"잎의 개수를 생성하려면 <code>Math.randomInt(40, 100)</code>을 호출해야 해요."},{"key":"needTomatoesRandomInt","english":"You need to call <code>Math.randomInt(5, leaves / 5)</code> to generate the number of tomatoes.","target":"토마토의 개수를 생성하려면 <code>Math.randomInt(5, leaves / 5)</code>을 호출해야 해요."},{"key":"needCroutonsRandomInt","english":"You need to call <code>Math.randomInt(tomatoes, tomatoes * 2)</code> to generate the number of croutons.","target":"크루통의 개수를 생성하려면 <code>Math.randomInt(tomatoes, tomatoes * 2)</code>을 호출해야 해요."},{"key":"needOlivesRandomInt","english":"You need to call <code>Math.randomInt(1, tomatoes / 2)</code> to generate the number of olives.","target":"올리브의 개수를 생성하려면 <code>Math.randomInt(1, tomatoes / 2)</code>을 호출해야 해요."}]},{"name":"tasks","rows":[{"key":"makeRandomSalad.name","english":"Make a random salad","target":"무작위 샐러드 만들기"},{"key":"makeRandomSalad.description","english":"Generate a random amount of each ingredient using Math.randomInt() and make the salad.","target":"Math.randomInt()를 사용하여 각 재료의 양을 무작위로 생성하고 샐러드를 만드세요."}]},{"name":"scenarios","rows":[{"key":"randomSalad.name","english":"Random salad","target":"무작위 샐러드"},{"key":"randomSalad.description","english":"Make a salad with random amounts of each ingredient.","target":"각 재료의 양을 무작위로 정하여 샐러드를 만듭니다."}]},{"name":"hints","rows":[{"key":"leavesExample.question","english":"Give me an example of how to work out the leaves","target":"잎의 개수를 계산하는 예시를 보여주세요."},{"key":"leavesExample.answer","english":"Use `let leaves = Math.randomInt(40, 100)` to generate a random amount of salad leaves that you can then use in the other functions.","target":"`let leaves = Math.randomInt(40, 100)`을 사용하여 무작위로 잎의 양을 생성할 수 있어요."},{"key":"leavesCount.question","english":"How many leaves do I need?","target":"잎이 몇 개 필요한가요?"},{"key":"leavesCount.answer","english":"Between 40 and 100.","target":"40에서 100 사이예요."},{"key":"tomatoesCount.question","english":"How many tomatoes do I need?","target":"토마토가 몇 개 필요한가요?"},{"key":"tomatoesCount.answer","english":"At least 5, but no more than leaves / 5","target":"최소 5개, 그리고 leaves / 5를 넘지 않아야 해요."},{"key":"croutonsCount.question","english":"How many croutons do I need?","target":"크루통이 몇 개 필요한가요?"},{"key":"croutonsCount.answer","english":"At least as many as tomatoes, up to double the amount of tomatoes","target":"최소 tomatoes 개수만큼, 최대 tomatoes 개수의 두 배예요."},{"key":"olivesCount.question","english":"How many olives do I need?","target":"올리브가 몇 개 필요한가요?"},{"key":"olivesCount.answer","english":"At least 1, up to half the number of tomatoes","target":"최소 1개, 최대 tomatoes 개수의 절반이에요."},{"key":"makeSalad.question","english":"How do I make the salad?","target":"샐러드를 어떻게 만드나요?"},{"key":"makeSalad.answer","english":"Once you've worked out how many ingredients you need for each, input leaves, tomatoes, croutons, olives into makeSalad().","target":"각 재료의 필요한 개수를 계산한 후, leaves, tomatoes, croutons, olives를 makeSalad()에 넣어요."}]},{"name":"describers","rows":[{"key":"makeSalad","english":"made a salad with ${arg1} leaves, ${arg2} tomatoes, ${arg3} croutons, and ${arg4} olives","target":"${arg1}개의 잎, ${arg2}개의 토마토, ${arg3}개의 크루통, ${arg4}개의 올리브로 샐러드를 만들었어요."}]},{"name":"functions","rows":[{"key":"makeSalad.description","english":"Makes a salad with the given amounts of each ingredient.","target":"주어진 양의 각 재료로 샐러드를 만들어요."},{"key":"makeSalad.category","english":"Action","target":"동작"}]}]}]
---

저와 파트너는 샐러드 재료 비율을 놓고 항상 의견이 달라요, 저는 잎을 많이 넣고 싶고 파트너는 크루통을 더 듬뿍 넣고 싶어 해요. 둘 다 양보할 수 없어서 결국 무작위로 결정하기로 했어요.

잎, 토마토, 올리브, 크루통으로 샐러드를 만들 거예요. 몇 가지 엄격한 (치열하게 합의한!) 규칙이 있어요:

- 잎은 40에서 100개 사이로 적당한 기본량이 들어가야 해요.
- 토마토가 너무 많으면 샐러드가 질척하고 시어져요. 최소 5개의 토마토를 넣어야 하지만, 잎 5개당 토마토 1개를 넘지 않아야 해요.
- 토마토 즙을 흡수할 만큼 충분히 크루통이 필요하지만, 너무 많으면 빵 그릇이 돼 버려요. 그래서 크루통 개수가 토마토 개수 이상이면서 토마토 개수의 두 배를 넘지 않도록 합의했어요.
- 올리브는 맛이 강해서 적게 넣지 않으면 다른 맛을 다 덮어버려요. 최소 1개의 올리브를 넣되, 토마토 개수의 절반을 넘지 않도록 해요.
- 가장 중요한 규칙: 모든 재료의 개수는 무작위로 생성해야 해요!

먼저 **코드 실행** 버튼을 몇 번 클릭해서 샐러드가 어떻게 만들어지는지 살펴봐요. 연습 문제의 맛을 봤다면 (말 그대로의 농담이에요), `Math.randomInt`(임의의 정수 생성)를 사용해서 위 규칙에 따라 올바른 재료 선택을 해 보세요:

다양한 조합을 시도해 보며 즐겨 보세요!
