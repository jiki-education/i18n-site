---
lang: "ko"
type: "exercise"
slug: "after-party"
title: "애프터 파티"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/after-party"
en_md5: "c59f1ee2393ff34f318369c56b15789f"
governance_sha: "c80036b"
content_version: "af1ccd9d602b"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"lookUpPlusOnes.name","english":"Check the Plus-Ones","target":"동반객 수 확인하기"},{"key":"lookUpPlusOnes.description","english":"Someone gives you their first name. Return the number of extra guests they're allowed to bring in, or `\"Not on the list!\"` if they're not invited.","target":"누군가가 자신의 이름을 알려주면 데려올 수 있는 동반객 수를 반환하거나, 초대받지 않은 사람이면 `\"Not on the list!\"`를 반환하세요."}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty register","target":"빈 목록"},{"key":"emptyList.description","english":"Nobody's bringing anyone in when the list is empty.","target":"목록이 비어 있으면 아무도 들어올 수 없어요."},{"key":"nameMissing.name","english":"Brad's turned away","target":"Brad의 입장 거부"},{"key":"nameMissing.description","english":"The name's not on the list at all.","target":"이름이 목록에 전혀 없어요."},{"key":"namePresent.name","english":"Brad's allowed in","target":"Brad 입장 허용"},{"key":"namePresent.description","english":"Brad's invited, and he's not travelling alone.","target":"Brad는 초대받았고, 혼자 오지 않아요."},{"key":"similarName.name","english":"Close, but nope","target":"비슷하지만 아니에요"},{"key":"similarName.description","english":"Bradley is not Brad, so Brad's still on the wrong side of the rope.","target":"Bradley는 Brad가 아니에요. 그래서 Brad는 여전히 줄 밖에 있어요."},{"key":"doubleBarrelled.name","english":"A dutchman","target":"하이픈이 들어간 이름"},{"key":"doubleBarrelled.description","english":"The name's on the list, but it's hyphenated.","target":"이름이 목록에 있지만, 하이픈(-)이 들어 있어요."},{"key":"allowedNobody.name","english":"Brad's flying solo","target":"Brad는 혼자 와요"},{"key":"allowedNobody.description","english":"Brad is definitely invited. He's just not bringing anybody with him.","target":"Brad는 분명히 초대받았어요. 다만 아무도 데려오지 않을 뿐이에요."},{"key":"twoBrads.name","english":"Two Brads","target":"두 명의 Brad"},{"key":"twoBrads.description","english":"There's more than one Brad on the list tonight, and the first one down is the one at the door.","target":"오늘 밤 목록에 Brad가 둘 이상 있고, 가장 먼저 나오는 Brad가 입장을 시도해요."},{"key":"cher.name","english":"Cher's in town","target":"Cher가 왔어요"},{"key":"cher.description","english":"Some people only have one name, and she's brought an entourage.","target":"이름이 하나뿐인 사람도 있어요. 그런데 Cher는 일행을 많이 데려왔어요."},{"key":"cheryl.name","english":"Getting tough now","target":"점점 까다로워져요"},{"key":"cheryl.description","english":"Are Cheryl Crow and Cher friends? Doesn't matter - Cheryl is not Cher.","target":"Cheryl Crow와 Cher가 친구인지는 중요하지 않아요. Cheryl은 Cher가 아니에요."}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where do I even start with this?","target":"이걸 도대체 어디서부터 시작해야 하나요?"},{"key":"whereToStart.answer","english":"Picture yourself actually doing it on the door. Someone says a name, and you read down the clipboard until you spot them. It's worth noticing that the answer you have to give them isn't written next to their name on the list you're reading.","target":"실제로 문 앞에서 일하는 모습을 상상해 보세요. 누군가가 이름을 말하면, 그 사람을 찾을 때까지 클립보드를 죽 훑어보게 되죠. 그런데 그 사람에게 알려줘야 할 답이 읽고 있는 목록의 이름 바로 옆에 적혀 있지 않다는 점을 알아두는 게 중요해요."},{"key":"twoLists.question","english":"There are two lists. How do they relate to each other?","target":"두 개의 목록이 있어요. 이 둘은 서로 어떤 관계인가요?"},{"key":"twoLists.answer","english":"Whatever you learn about *where* someone is in one list is just as true in the other. A position is a more useful thing to hold onto than a name.","target":"한 목록에서 어떤 사람의 *위치*에 대해 알아낸 것은 다른 목록에서도 똑같아요. 이름보다 위치를 기억하는 게 더 유용해요."},{"key":"whatCountsAsAMatch.question","english":"When does a first name actually count as a match?","target":"이름이 실제로 일치한다고 판단하는 기준은 무엇인가요?"},{"key":"whatCountsAsAMatch.answer","english":"\"Brad\" should get Brad Pitt in, but not Bradley Cooper. Think about what's different about those two entries at the point where the letters you were given run out. There's more than one reasonable way to make that comparison, so pick whichever one you can explain to yourself.","target":"\"Brad\"는 Brad Pitt를 입장시키지만, Bradley Cooper는 입장시키지 않아야 해요. 주어진 글자가 끝나는 지점에서 두 항목에 어떤 차이가 있는지 생각해 보세요. 비교하는 합리적인 방법이 여러 가지 있을 테니, 자신이 설명할 수 있는 방법을 골라 보세요."},{"key":"noSurname.question","english":"Cher hasn't got a surname. Does that break anything?","target":"Cher는 성이 없어요. 그게 문제가 될까요?"},{"key":"noSurname.answer","english":"Have another look at what your match test assumes about a list entry. If it assumes there's always something after the first name, an entry that's *only* a first name won't get past it. And going the other way, a longer name shouldn't be able to claim a shorter entry.","target":"일치 여부를 검사하는 코드가 목록의 각 항목에 대해 무슨 가정을 하는지 다시 살펴보세요. 이름 뒤에 항상 뭔가 더 있을 거라고 가정한다면, 이름*만* 있는 항목은 그 검사를 통과하지 못할 거예요. 그리고 반대로, 더 긴 이름이 더 짧은 항목을 가로채서도 안 돼요."},{"key":"notOnTheList.question","english":"What do I do when they're not on the list?","target":"목록에 없으면 어떻게 해야 하나요?"},{"key":"notOnTheList.answer","english":"Then they get the string `\"Not on the list!\"`, exactly as written. Two things are worth thinking about here. First, at what point can you be *certain* that someone isn't on the list? Second, notice that this is a genuinely different answer from a guest who's invited but allowed 0 extra guests, so make sure your function never confuses the two.","target":"그러면 정확히 `\"Not on the list!\"` 문자열을 반환해요. 여기서 생각해 볼 게 두 가지 있어요. 첫째, 언제 그 사람이 목록에 *없다고* 확신할 수 있을까요? 둘째, 이 답은 초대는 받았지만 동반객을 0명 데려올 수 있는 손님과는 완전히 다른 답이에요. 그러니 함수가 이 둘을 절대 혼동하면 안 돼요."}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in a list - the same length property you've used on strings (provided by level stdlib)","target":"목록의 항목 개수로, 문자열에서 사용했던 length 속성과 같아요 (레벨 표준 라이브러리에서 제공)."},{"key":"length.category","english":"List Operations","target":"목록 작업"},{"key":"startsWith.description","english":"Check whether a string begins with a smaller string (provided by level stdlib)","target":"문자열이 어떤 문자열로 시작하는지 확인해요 (레벨 표준 라이브러리에서 제공)."},{"key":"startsWith.category","english":"String Operations","target":"문자열 작업"}]}]}]
---

다시 한 번 경비원 역할을 맡게 되었어요. 그런데 이번에는 애프터 파티에 온 A급 유명 인사들을 상대해야 해요.

이런 사람들이 파티에 나타나면 자신의 이름만 말해도 바로 알아보길 기대해요. Brad Pitt가 성까지 말하며 숨을 낭비할 리 없죠. 그냥 "Brad"라고 말한 뒤, 오히려 당신이 이상한 사람이라는 듯 쳐다볼 거예요.

오늘 밤 당신의 클립보드에는 두 개의 목록이 있어요. 첫 번째는 `names`, 초대된 모든 사람의 전체 이름이에요. 두 번째는 `plusOnes`, 각 손님이 데려올 수 있는 추가 인원 수, 즉 동반객(영어: _plus-ones_) 수예요. 두 목록은 한 명씩, 같은 순서로 짝을 맞춰 적었기 때문에 서로 일치해요. 예를 들어 이름 목록의 세 번째 항목은 동반객 목록의 세 번째 항목과 같은 사람이에요.

`plusOnesFor`(동반객 수 확인 함수)라는 함수를 작성하세요. 이 함수는 세 개의 인자를 받아요: `names` 목록, `plusOnes` 목록, 그리고 지금 앞에 서 있는 사람의 **이름**이에요. 그 사람이 데려올 수 있는 동반객 수를 반환해야 해요.

하지만 조심할 점이 있어요. 뒤에 줄이 생기기 시작했고, 이 사람들은 조용히 기다리지 않아요. "Brad"는 Brad Pitt를 뜻하지 Bradley Cooper가 아니에요. 그리고 그중에는 성을 아예 빼고 다닐 정도로 유명한 사람도 한두 명 있어요.

초대받았지만 동반객을 데려올 수 없는 손님도 있어요. 그러니까 목록에 있는 이름이라면 `0`도 완전히 올바른 답이에요. 목록에 아예 없는 사람은 완전히 다른 문제예요. 그런 경우에는 정확히 `"Not on the list!"`라는 문자열을 반환해야 해요.

### 배열 메서드와 속성

문자열처럼 배열도 메서드와 속성을 가지고 있어요. 이번 연습 문제에서는 `.length` 속성을 사용해 보면 좋아요. 문자열의 `.length`와 완전히 같은 방식으로 작동하지만, 이번에는 문자열의 글자 수가 아니라 배열의 원소 개수를 알려줘요. 예를 들어:

```js
["Jeremy", "Erik", "Aron"].length
// 3
```

즐거운 시간 보내세요!
