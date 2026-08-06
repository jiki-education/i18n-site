---
lang: "ko"
type: "exercise"
slug: "gold-panning"
title: "사금 채취"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/gold-panning"
en_md5: "e62d584285e129af1ec13bb8d337d0fc"
governance_sha: "c80036b"
content_version: "58763862e39d"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"needsRecharge","english":"The robot needs to recharge after selling.","target":"판매 후에는 로봇을 재충전해야 해요."},{"key":"sellBeforeAnythingElse","english":"The robot needs to go and sell before it does anything else.","target":"로봇은 다른 일을 하기 전에 먼저 판매하러 가야 해요."},{"key":"sellNumber","english":"You can only sell a number of nuggets","target":"금 조각의 개수만 판매할 수 있어요."}]},{"name":"checks","rows":[{"key":"notSold","english":"You didn't sell your nuggets. Make sure you call <code>sell()</code> after panning.","target":"금 조각을 판매하지 않았어요. 채취 후에 <code>sell()</code>을 사용하는지 확인하세요."},{"key":"wrongSoldTotal","english":"Expected to sell {{expectedTotal}} nuggets ({{panValues}}) but you sold {{got}}. Make sure you add each pan result to your running total.","target":"{{expectedTotal}}개의 금 조각({{panValues}})을 판매해야 하는데, {{got}}개를 판매했어요. 각 채취 결과를 누적 합계에 더했는지 확인하세요."}]},{"name":"tasks","rows":[{"key":"panAndSell.name","english":"Pan for gold and sell your haul","target":"금을 채취하고 판매하세요"},{"key":"panAndSell.description","english":"Pan 5 times to collect gold nuggets, keeping a running total, then sell everything at the trading post.","target":"5번 채취하여 금 조각을 모으고, 누적 합계를 유지한 다음, 교역소에서 전부 판매하세요."}]},{"name":"scenarios","rows":[{"key":"randomPans.name","english":"Pan and sell","target":"채취와 판매"},{"key":"randomPans.description","english":"Pan 5 times for a random number of nuggets each time, then sell the total.","target":"5회 채취하여 매번 무작위 수의 금 조각을 얻은 후 총합을 판매합니다."}]},{"name":"hints","rows":[{"key":"wrongSellAmount.question","english":"It says I'm selling the wrong amount of gold.","target":"판매할 금의 양이 잘못되었다고 나와요."},{"key":"wrongSellAmount.answer","english":"You need to sell ALL the gold you find in the 5 pans in one go at the end, not selling after each pan.","target":"5번의 채취에서 찾은 금을 각 채취 후에 판매하지 말고, 마지막에 한꺼번에 모두 판매해야 해요."},{"key":"trackingTotal.question","english":"I am using pan multiple times but I don't know how to keep track of how much I have.","target":"채취를 여러 번 사용하고 있는데, 얼마나 모았는지 어떻게 추적해야 할지 모르겠어요."},{"key":"trackingTotal.answer","english":"Think about what you've learned in recent video lessons. You need to use a variable to keep track of the **total** amount of gold that you have collected across **all** the pans together.","target":"최근 동영상 강의에서 배운 내용을 생각해 보세요. **모든** 채취를 통해 모은 금의 **총** 양을 추적하려면 변수를 사용해야 해요."},{"key":"fiveLines.question","english":"I've got it working, but I can't get down to 5 lines.","target":"작동은 하는데, 5줄로 줄일 수가 없어요."},{"key":"fiveLines.answer","english":"Do you have repetitive code in your solution? If so, what can we use to reduce that repetitiveness?","target":"해결책에 반복되는 코드가 있나요? 그렇다면, 반복을 줄이기 위해 무엇을 사용할 수 있을까요?"},{"key":"stillFiveLines.question","english":"I still can't get it down to 5 lines of code.","target":"아직도 코드를 5줄로 줄이지 못하겠어요."},{"key":"stillFiveLines.answer","english":"You should only need to use one variable. Are you using more?","target":"변수는 하나만 사용하면 돼요. 더 많은 변수를 사용하고 있나요?"}]},{"name":"describers","rows":[{"key":"pan","english":"panned and found ${return} nuggets","target":"채취하여 금 조각 ${return}개를 찾았어요."},{"key":"sell","english":"sold ${arg1} nuggets at the trading post","target":"교역소에서 금 조각 ${arg1}개를 판매했어요."}]},{"name":"functions","rows":[{"key":"pan.description","english":"Dips your pan in the river and **gives back** the number of gold nuggets found.","target":"채취판을 강물에 담가 찾은 금 조각의 개수를 **반환**해요."},{"key":"pan.category","english":"Mining","target":"채취"},{"key":"sell.description","english":"Sells your gold nuggets at the trading post.","target":"교역소에서 금 조각을 판매해요."},{"key":"sell.category","english":"Action","target":"행동"}]}]}]
---

캘리포니아가 오늘날 IT 산업의 중심지가 되기 전에는, 사실 금의 고장이었답니다! 30만 명이 넘는 사람들이 몰려들어 강에서 팔 수 있는 작은 금 조각들을 찾기 시작했어요.

이번 연습 문제에서는 금을 채취하러 나가는 로봇을 만들 거예요.

`pan()`(금을 채취하는 함수)를 사용해 물에서 금을 걸러낼 수 있어요. 이 함수는 찾은 금 조각 수를 반환해요(영어: _returns_).

또한 `sell(numberOfNuggets)`(금 조각을 판매하는 함수)를 사용하면 찾은 금 조각을 모두 팔 수 있어요.

로봇은 금을 팔기 전에 몇 번 더 채취할 수 있는 용량을 갖추고 있어요. 강으로 가서 **다섯 번** 채취하고, 채취할 때마다 모은 금 조각 수를 세어 두고, 마지막에 (5번의 채취에서 얻은 전체 금 조각을 모두 합쳐) 찾은 금 조각의 총 개수를 팔도록 코드를 작성해야 해요.

이 퍼즐을 **5줄** 이하의 코드로 풀어 보세요!
