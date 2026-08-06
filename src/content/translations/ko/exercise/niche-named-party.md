---
lang: "ko"
type: "exercise"
slug: "niche-named-party"
title: "이름으로 가려내는 파티"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/niche-named-party"
en_md5: "470a19833eba55849106588dfa7326f2"
governance_sha: "c80036b"
content_version: "e9272da6f924"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"checkTheName.name","english":"Check the name","target":"이름 확인하기"},{"key":"checkTheName.description","english":"Write a `handleGuest` function that checks whether the person's name starts with the allowed letters for tonight's party. Return `true` if it does, or `false` if it doesn't.","target":"손님의 이름이 오늘 밤 파티에 허용된 글자로 시작하는지 확인하는 `handleGuest` 함수를 작성하세요. 시작하면 `true`, 시작하지 않으면 `false`를 반환해야 해요."},{"key":"solveTightly.name","english":"Solve it in 20 lines","target":"20줄로 해결하기"},{"key":"solveTightly.description","english":"Bonus: with the length-counting pulled out into a helper function that `handleGuest` reuses, the whole solution fits in 20 lines. Can you match it?","target":"보너스: 길이를 세는 기능을 도우미 함수로 빼내어 `handleGuest`가 재사용하면 전체 해결책이 20줄에 딱 맞아요. 해볼 수 있을까요?"}]},{"name":"scenarios","rows":[{"key":"sarahSParty.name","english":"S Party: Sarah arrives","target":"S 파티: Sarah 도착"},{"key":"sarahSParty.description","english":"Tonight only names starting with \"S\" are allowed. Sarah should get in!","target":"오늘 밤은 \"S\"로 시작하는 이름만 허용돼요. Sarah는 입장할 수 있어요!"},{"key":"bradSParty.name","english":"S Party: Brad arrives","target":"S 파티: Brad 도착"},{"key":"bradSParty.description","english":"Tonight only names starting with \"S\" are allowed. Brad should be turned away.","target":"오늘 밤은 \"S\"로 시작하는 이름만 허용돼요. Brad는 입장할 수 없어요!"},{"key":"bradleyBradParty.name","english":"Brad Party: Bradley arrives","target":"Brad 파티: Bradley 도착"},{"key":"bradleyBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Bradley should get in!","target":"오늘 밤은 \"Brad\"로 시작하는 이름만 허용돼요. Bradley는 입장할 수 있어요!"},{"key":"bradBradleyParty.name","english":"Bradley Party: Brad arrives","target":"Bradley 파티: Brad 도착"},{"key":"bradBradleyParty.description","english":"Tonight only names starting with \"Bradley\" are allowed. Brad is too short, so he's not allowed.","target":"오늘 밤은 \"Bradley\"로 시작하는 이름만 허용돼요. Brad는 이름이 짧아서 입장할 수 없어요."},{"key":"brianBradParty.name","english":"Brad Party: Brian arrives","target":"Brad 파티: Brian 도착"},{"key":"brianBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Brian should be turned away.","target":"오늘 밤은 \"Brad\"로 시작하는 이름만 허용돼요. Brian은 입장할 수 없어요!"},{"key":"silence.name","english":"S Party: Silence...","target":"S 파티: 침묵..."},{"key":"silence.description","english":"The person doesn't say their name. An empty name can't start with anything. Turn them away!","target":"손님이 이름을 말하지 않아요. 빈 이름은 아무 글자로도 시작할 수 없어요. 입장을 거절하세요!"},{"key":"cherCherParty.name","english":"Cher Party: Cher arrives","target":"Cher 파티: Cher 도착"},{"key":"cherCherParty.description","english":"Tonight only names starting with \"Cher\" are allowed. Cher's name is exactly \"Cher\" — let her in!","target":"오늘 밤은 \"Cher\"로 시작하는 이름만 허용돼요. Cher의 이름은 정확히 \"Cher\"예요 — 입장시켜 주세요!"},{"key":"nicheNamedPartyBonusLineCount.name","english":"Neat and tidy","target":"간결하게"},{"key":"nicheNamedPartyBonusLineCount.description","english":"The shortest solution fits in 20 lines. Can you find it?","target":"가장 짧은 해결책은 20줄에 들어맞아요. 찾을 수 있을까요?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"계속해 보세요! 더 적은 줄로 해결할 수 있을지 한번 해봐요."}]},{"name":"hints","rows":[{"key":"checkStartsWith.question","english":"How do I check that a name starts with certain letters?","target":"이름이 특정 글자로 시작하는지 어떻게 확인하죠?"},{"key":"checkStartsWith.answer","english":"Compare each character of the allowed prefix with the character at the same position in the name. If any character differs, the name doesn't match.","target":"허용된 접두사의 각 글자를 이름의 같은 위치 글자와 비교하세요. 하나라도 다르면 이름이 일치하지 않아요."},{"key":"loopCharacters.question","english":"How do I look at one character at a time?","target":"글자를 하나씩 어떻게 살펴보죠?"},{"key":"loopCharacters.answer","english":"Use string iteration to step through a string.","target":"문자열 반복을 사용해 문자열을 한 글자씩 살펴봐요."},{"key":"findEquivalentLetter.question","english":"How do I find the equivalent letter in the other word?","target":"다른 단어에서 같은 위치의 글자를 어떻게 찾죠?"},{"key":"findEquivalentLetter.answer","english":"Use string indexing to find a specific letter.","target":"문자열 인덱싱을 사용해서 특정 글자를 찾아요."},{"key":"longerAllowedPrefix.question","english":"What if the allowed prefix is longer than the name?","target":"허용된 접두사가 이름보다 더 길면 어떡하죠?"},{"key":"longerAllowedPrefix.answer","english":"That person can't match, so you should return `false`.","target":"그 사람은 일치할 수 없으니 `false`를 반환해야 해요."}]}]}]
---

오늘 밤 파티는 매우 까다로워요, 이름이 특정한 글자 순서로 시작하는 사람만 입장할 수 있어요!

이번에 할 일은 두 개의 입력을 받는 `handleGuest`(손님 처리)라는 함수를 작성하는 거예요:

- `name` - 문 앞에 있는 사람의 이름
- `allowedPrefix` - 오늘 밤 파티에 필요한 시작 글자

함수는 그 사람이 입장할 수 있으면 `true`를, 거절해야 하면 `false`를 반환해야 해요.

예를 들어:

- 오늘 밤 허용 접두사가 `"S"`라면, Sarah는 입장할 수 있고 (`true`를 반환), Brad은 입장할 수 없어요 (`false`를 반환).
- 허용 접두사가 `"Brad"`라면, Brad과 Bradley는 입장할 수 있지만 Brian은 입장할 수 없어요.

### 도우미 함수

이 연습 문제를 해결하면서 손님 이름의 길이와 허용 접두사의 길이를 알아내야 할 필요성을 느끼게 될 거예요. 이때 문자열에 몇 개의 글자가 있는지 세어 주는 `getLength(someString)`이라는 도우미 함수를 만들기에 완벽한 기회예요. 그런 다음 이 함수를 `handleGuest(...)` 안의 여러 곳에서 사용할 수 있어요.

보너스 시나리오에서는 가능한 한 최소한의 줄로 이 문제를 해결하는 데 도전해요. 더 많은 줄을 사용하는, 여러분이 선호하는 다른 해결책을 떠올릴 수도 있어요. 그렇게 해도 전혀 괜찮아요(다양한 접근 방식을 탐구하도록 권장해요). 하지만 가장 짧은 버전도 찾아보세요.

재미있게 해봐요!
