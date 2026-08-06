---
lang: "ko"
type: "exercise"
slug: "formal-dinner"
title: "정식 만찬"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/formal-dinner"
en_md5: "8d6a2f3dd90b3a487a6bf855f31ef025"
governance_sha: "c80036b"
content_version: "e494fa6266fc"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findGuestTable.name","english":"Find the Guest's Table","target":"손님의 테이블 찾기"},{"key":"findGuestTable.description","english":"Write a function that takes the list of guests' full names, the matching list of table names, and an arriving guest announced as an honorific and a surname. Return the name of the table that guest is sitting at, or `\"No table found\"` if they aren't on the seating plan.","target":"손님들의 전체 이름 목록과 이에 대응하는 테이블 이름 목록, 그리고 존칭과 성으로 알려진 도착한 손님을 받는 함수를 작성하세요. 손님이 앉은 테이블 이름을 반환하고, 좌석 배치도에 없으면 `\"No table found\"`를 반환해요."},{"key":"solveTightly.name","english":"Solve it tightly","target":"간결하게 해결하기"},{"key":"solveTightly.description","english":"Bonus: this can be written far more compactly than you might expect. Can you get the whole solution down to just a handful of lines?","target":"보너스: 생각보다 훨씬 간결하게 작성할 수 있어요. 전체 솔루션을 몇 줄로 줄일 수 있을까요?"}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty seating plan","target":"빈 좌석 배치도"},{"key":"emptyList.description","english":"Nobody's sitting anywhere when the plan is empty.","target":"배치도가 비어 있으면 아무도 앉지 않아요."},{"key":"nameMissing.name","english":"Brad's turned away","target":"Brad 거절"},{"key":"nameMissing.description","english":"The name's not on the seating plan.","target":"이름이 좌석 배치도에 없어요."},{"key":"namePresent.name","english":"Brad's shown to his seat","target":"Brad 자리 안내"},{"key":"namePresent.description","english":"Brad Pitt is on the plan, so Mr Pitt gets his table.","target":"Brad Pitt가 배치도에 있어서 Pitt 씨의 테이블을 알아내요."},{"key":"differentHonorific.name","english":"Knight of the realm","target":"다른 존칭"},{"key":"differentHonorific.description","english":"A different honorific, and a guest who isn't first on the plan.","target":"다른 존칭을 사용하고, 배치도에서 첫 번째가 아닌 손님이에요."},{"key":"bondSeated.name","english":"Mr Bond, I presume","target":"본드 씨 착석"},{"key":"bondSeated.description","english":"James Bond is on the plan.","target":"James Bond가 배치도에 있어요."},{"key":"bondNotSeated.name","english":"Hmmm... Mr Bond, I presume","target":"흠... 본드 씨, 맞으시죠?"},{"key":"bondNotSeated.description","english":"Only Jason Bourne is on the plan, not James Bond.","target":"James Bond가 아니라 Jason Bourne만 배치도에 있어요."},{"key":"partialSurname.name","english":"Not quite Mr Pitt","target":"Pitt 씨가 아니에요"},{"key":"partialSurname.description","english":"Neither Ada Spitt nor Hugo Ross-Pitt is Mr Pitt, so he has no seat here.","target":"Ada Spitt도 Hugo Ross-Pitt도 Pitt 씨가 아니어서, 자리가 없어요."},{"key":"lloydWebber.name","english":"How about a Baron?","target":"남작님은 어떠세요?"},{"key":"lloydWebber.description","english":"Baron Lloyd Webber has two words in his surname.","target":"Lloyd Webber 남작님의 성은 두 단어예요."},{"key":"markWebber.name","english":"Is Mark the Baron?","target":"Mark가 남작인가요?"},{"key":"markWebber.description","english":"A different Webber doesn't count - the surname has to match in full.","target":"다른 Webber는 안 돼요 - 성이 완전히 일치해야 해요."},{"key":"formalDinnerBonusLineCount.name","english":"Neat and tidy: Lord Doyle","target":"간결하게: Doyle 경"},{"key":"formalDinnerBonusLineCount.description","english":"The same seating plan as before, but this time your solution has to fit into a much smaller number of lines.","target":"이전과 같은 좌석 배치도지만, 이번에는 솔루션을 훨씬 적은 줄로 작성해야 해요."}]},{"name":"hints","rows":[{"key":"twoLists.question","english":"How do the two lists relate to each other?","target":"두 리스트는 서로 어떤 관계인가요?"},{"key":"twoLists.answer","english":"They're a pair. The first guest sits at the first table, the second guest at the second table, and so on. So it's not enough to know *that* a guest is on the plan - you need to know *where* on the plan they are.","target":"두 리스트는 짝을 이뤄요. 첫 번째 손님은 첫 번째 테이블에, 두 번째 손님은 두 번째 테이블에 앉아요. 그래서 손님이 배치도에 *있는지* 아는 것만으로는 부족해요 - 배치도에서 *어디에* 있는지 알아야 해요."},{"key":"comparingNames.question","english":"The guest says 'Mr Pitt' but the plan says 'Brad Pitt'. How do I compare those?","target":"손님은 'Pitt 씨'라고 말하는데 배치도에는 'Brad Pitt'라고 적혀 있어요. 어떻게 비교하나요?"},{"key":"comparingNames.answer","english":"Those two strings will never be equal, so a straight comparison won't get you anywhere. Have a think about which part of what the guest announced actually appears on the plan, and whereabouts in the plan's entry you'd expect to find it.","target":"두 문자열은 절대 같지 않을 거예요, 그래서 단순 비교로는 안 돼요. 손님이 말한 부분 중에서 실제로 배치도에 나타나는 부분이 무엇인지, 그리고 배치도의 항목에서 그 부분을 어디에서 찾을 수 있을지 생각해 보세요."},{"key":"lookalikeSurnames.question","english":"Could a surname match the wrong guest?","target":"성씨가 엉뚱한 손님과 일치할 수 있나요?"},{"key":"lookalikeSurnames.answer","english":"It absolutely could. Read 'Ada Spitt' and 'Hugo Ross-Pitt' out loud, and then think about Mr Pitt. Ask yourself what makes a surname a real surname on that line, rather than just some letters that happen to sit at the end of it.","target":"충분히 그럴 수 있어요. 'Ada Spitt'와 'Hugo Ross-Pitt'를 소리 내어 읽어보고, 그런 다음 Pitt 씨에 대해 생각해 보세요. 단순히 끝에 있는 몇 글자가 아니라, 그 줄에서 무엇이 진짜 성씨인지 자문해 보세요."},{"key":"noMatch.question","english":"What should I return when nobody matches?","target":"일치하는 사람이 없을 때는 무엇을 반환해야 하나요?"},{"key":"noMatch.answer","english":"The string `\"No table found\"`, exactly as written. The trickier bit is knowing when you're allowed to say it. If you've checked the very first guest on the plan and they're not your man, do you actually know yet that he isn't seated somewhere?","target":"정확히 `\"No table found\"` 문자열이에요. 더 까다로운 부분은 언제 그것을 말할 수 있는지 아는 거예요. 배치도의 첫 번째 손님을 확인했는데 그 사람이 아니라면, 아직 그가 어딘가에 앉아 있지 않다는 것을 확실히 알 수 있을까요?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"계속해 보세요! 더 적은 줄로 해결할 수 있는지 보세요."}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in a list - the same length property you've used on strings (provided by level stdlib)","target":"목록의 항목 개수 - 문자열에서 사용했던 것과 같은 length 속성이에요 (레벨 stdlib 제공)"},{"key":"length.category","english":"List Operations","target":"목록 연산"},{"key":"split.description","english":"Split a string into a list of pieces, breaking at each separator (provided by level stdlib)","target":"문자열을 구분자마다 나누어 조각들의 목록으로 만들어요 (레벨 stdlib 제공)"},{"key":"split.category","english":"String Operations","target":"문자열 연산"},{"key":"slice.description","english":"Make a new list from part of a list, starting at a position (provided by level stdlib)","target":"목록의 일부로 새로운 목록을 만들어요, 특정 위치부터 시작해요 (레벨 stdlib 제공)"},{"key":"slice.category","english":"List Operations","target":"목록 연산"},{"key":"join.description","english":"Join the items of a list into one string, with a separator between them (provided by level stdlib)","target":"목록의 항목들을 하나의 문자열로 이어 붙여요, 구분자를 사이에 넣어요 (레벨 stdlib 제공)"},{"key":"join.category","english":"List Operations","target":"목록 연산"},{"key":"endsWith.description","english":"Check whether a string ends with a smaller string (provided by level stdlib)","target":"문자열이 더 작은 문자열로 끝나는지 확인해요 (레벨 stdlib 제공)"},{"key":"endsWith.category","english":"String Operations","target":"문자열 연산"}]}]}]
---

바운서 부업으로 다시 돌아왔어요. After Party가 끝난 후 저녁, 또 다른 파티가 열렸어요. 이번에는 정식 만찬이에요. 그래서 오늘 밤은 "문 앞의 덩치 큰 남자"보다는 "멋진 조끼와 클립보드를 든 사람"에 가까워요.

여기서는 절대 **이름만**으로 부르면 안 돼요. 사실 여기에서는 이름을 아예 사용하지 않아요. 여기에서는 모두가 존칭(영어: _honorific_) (미스, 미스터, 박사 등)과 성을 사용해요.

주최 측에서 좌석 배치도를 두 개의 별도 리스트로 건네주었어요. 하나는 손님들의 전체 이름을 담고 있어요. 다른 하나는 각 손님이 앉은 테이블의 이름(나무나 꽃 이름을 따서 지은)을 담고 있어요. 'After Party' 때처럼 두 리스트는 순서대로 대응돼요. 첫 번째 리스트의 3번 위치에 있는 손님이 두 번째 리스트의 3번 위치에 있는 테이블에 앉아요.

그래서 Pitt 씨가 들어서면, 이 사람이 리스트에 있는 'Brad Pitt'라는 것을 알아내야 해요. 그리고 그에게 어느 테이블에 앉았는지 알려줘야 해요.

`tableFor`(손님이 앉은 테이블을 찾는 함수)라는 함수를 작성해요. 함수는 세 개의 입력을 받아요.

- 첫 번째는 손님들의 전체 이름 목록으로, 문자열들이에요.
- 두 번째는 테이블 이름 목록으로, 손님 목록과 같은 순서로 정렬되어 있어요.
- 세 번째는 도착한 손님으로, 존칭 뒤에 성이 오는 형식이에요 (예: "Mr Pitt").

손님이 앉은 테이블 이름을 반환해요. 만약 좌석 배치도에 전혀 없다면, 대신 `"No table found"` 문자열을 반환해요 (여기서는 요행은 없어요!).

존칭은 항상 정확히 한 단어이고, 그 뒤의 모든 것이 손님의 성이에요. 대부분의 성은 한 단어지만, 몇몇 거창한 성은 두 단어로 이루어져 있어요.

하지만 조심해야 해요. 많은 성이 다른 성과 비슷하게 생겼어요.

### 문자열/배열 메서드와 속성

지난 연습 문제에서 배운 `.length` 속성 외에도 유용하게 사용할 수 있는 네 가지 메서드가 있어요. 이 연습 문제를 푸는 방법은 많지만, 이 메서드들을 사용하면 가장 짧은 해결책을 얻을 수 있어요.

`"...".split(substring)`은 다른 문자열을 이용해 문자열을 나눠요. 예를 들어:

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)`는 배열의 일부를 인덱스 `start`부터 배열 끝까지 캡처해요. 캡처된 요소들은 새로운 배열에 복사돼서 반환돼요. 사실상 처음 `start`개의 요소를 떨궈내는 거예요. 예를 들어:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)`은 배열의 요소들을 주어진 문자열로 이어 붙여요. 예를 들어:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)`은 문자열이 다른 문자열로 끝나는지 알려줘요. 예를 들어:

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
