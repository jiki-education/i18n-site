---
lang: "ko"
type: "exercise"
slug: "two-fer"
title: "둘을 하나로"
status: "published"
source_repo: "i18n"
source_path: "locales/ko/curriculum/exercises/two-fer"
en_md5: "259ef6df34222c26ac1869815e38f66e"
governance_sha: "0e11138"
content_version: "73e2b8a75e05"
published_at: "2026-08-10"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"6줄보다 많은 코드를 사용했어요."}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"둘을 하나로 함수 작성하기"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"이름을 받아 'One for [name], one for me.'를 반환하는 twoFer 함수를 작성해요. 이름이 주어지지 않으면(빈 문자열) 'you'를 사용해요."},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"6줄로 풀기"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"이 문제를 단 6줄의 코드로 풀 수 있을까요?"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"이름이 주어지지 않음"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"이름이 주어지지 않으면 'One for you, one for me.'를 반환해요."},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"'Alice'가 주어짐"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"이름이 'Alice'이므로 'One for Alice, one for me.'를 반환해요."},{"key":"twoFerTom.name","english":"Name given as Tom","target":"'Tom'이 주어짐"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"이름이 'Tom'이므로 'One for Tom, one for me.'를 반환해요."},{"key":"bonus1.name","english":"Six lines of code","target":"6줄의 코드"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"단 6줄의 코드로 문제를 풀어요."}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"입력에 따라 무엇이 달라지나요?"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"단 한 가지예요. 문장 중간에 있는 이름이에요. 이름이 주어지면 그 이름을 사용하고, 없으면 기본값 `\\\"you\\\"`를 사용해요."},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"'이름이 주어졌는지'를 어떻게 확인할까요?"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"입력값을 빈 문자열 \\\"\\\"과 비교하는 if문을 사용해요. 빈 문자열이면 \\\"you\\\"를 사용하고, 그렇지 않으면 입력값을 사용해요."},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"최종 문장을 어떻게 만들까요?"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"세 조각(`\\\"One for \\\"`, 선택한 이름, 그리고 `\\\", one for me.\\\"`)을 연결(`+`)이나 템플릿 문자열로 합쳐요."}]}]}]
---

이번에는 간단한 "Hello" 연습 문제에 덧붙여서 몇 가지 규칙을 추가해볼게요.

어떤 영어 억양에서는 'two for'를 빠르게 말하면 'two fer'처럼 들려요. 'Two-for-one'은 하나를 사면 하나를 무료로 준다는 뜻이에요.

어느 빵집에서 휴일 프로모션으로 쿠키를 하나 사면 하나를 더 주는 행사를 하고 있다고 상상해봐요. 이 제안을 받아들여서 추가 쿠키를 다른 사람에게 나눠주기로 했어요.

이번 과제는 추가 쿠키를 건네면서 어떤 말을 해야 하는지 정하는 거예요.

- 그 사람의 이름을 알고 있다면 (예: Alice), 이렇게 말해요: `"One for Alice, one for me."`
- 이름을 모른다면, 이렇게 말해요: `"One for you, one for me."`

`twoFer(name)` (둘을 하나로) 함수를 작성해서 적절한 대화를 반환하도록 해요.

예시는 다음과 같아요:

| 함수 호출          | 반환값                          |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

보너스: 이걸 단 6줄의 코드로 작성할 수 있을까요?

잘 해봐요!
