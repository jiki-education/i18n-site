---
lang: "ko"
type: "exercise"
slug: "raindrops"
title: "빗방울 소리"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/raindrops"
en_md5: "0bf4b9da3621fc60bdeab8dd785c918a"
governance_sha: "c80036b"
content_version: "d892510fb2c1"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixteenLines","english":"You used more than sixteen lines of code.","target":"code를 16줄 넘게 사용했어요."}]},{"name":"tasks","rows":[{"key":"plings.name","english":"Plings","target":"Pling 소리"},{"key":"plings.description","english":"Start off by getting the Pling sounds right. If the number is divisible by 3, return \"Pling\".","target":"Pling 소리를 제대로 만드는 것부터 시작해요. 숫자가 3으로 나누어떨어지면, \"Pling\"을 반환해요."},{"key":"plangs.name","english":"Plangs","target":"Plang 소리"},{"key":"plangs.description","english":"Now get the Plang sounds right. If the number is divisible by 5, add \"Plang\" to the result. If it's divisible by both 3 and 5, return \"PlingPlang\".","target":"이제 Plang 소리를 제대로 만들어요. 숫자가 5로 나누어떨어지면, 결과에 \"Plang\"을 추가해요. 3과 5 모두로 나누어떨어지면, \"PlingPlang\"을 반환해요."},{"key":"plongs.name","english":"Plongs","target":"Plong 소리"},{"key":"plongs.description","english":"Now get the Plong sounds right. If the number is divisible by 7, add \"Plong\" to the result. Numbers can be divisible by multiple factors.","target":"이제 Plong 소리를 제대로 만들어요. 숫자가 7로 나누어떨어지면, 결과에 \"Plong\"을 추가해요. 어떤 수는 여러 수로 동시에 나누어떨어질 수 있어요."},{"key":"noSound.name","english":"Numbers with no raindrop sound","target":"빗방울 소리가 없는 숫자"},{"key":"noSound.description","english":"Finally, if the number is not divisible by 3, 5, or 7, return the number itself as a string.","target":"마지막으로, 숫자가 3, 5, 7 중 어느 것으로도 나누어떨어지지 않으면, 그 숫자 자체를 문자열로 반환해요."},{"key":"solveInSixteenLines.name","english":"Solve in sixteen lines of code","target":"16줄 code로 풀기"},{"key":"solveInSixteenLines.description","english":"Can you solve this with only sixteen lines of code?","target":"이 문제를 16줄의 code만으로 풀 수 있을까요?"}]},{"name":"scenarios","rows":[{"key":"number3.name","english":"Number 3","target":"숫자 3"},{"key":"number3.description","english":"If 3 is input, return \"Pling\".","target":"3이 입력되면, \"Pling\"을 반환해요."},{"key":"number27.name","english":"Number 27","target":"숫자 27"},{"key":"number27.description","english":"If 27 is input, return \"Pling\".","target":"27이 입력되면, \"Pling\"을 반환해요."},{"key":"number5.name","english":"Number 5","target":"숫자 5"},{"key":"number5.description","english":"If 5 is input, return \"Plang\".","target":"5가 입력되면, \"Plang\"을 반환해요."},{"key":"number3125.name","english":"Number 3125","target":"숫자 3125"},{"key":"number3125.description","english":"If 3125 is input, return \"Plang\".","target":"3125가 입력되면, \"Plang\"을 반환해요."},{"key":"number15.name","english":"Number 15","target":"숫자 15"},{"key":"number15.description","english":"If 15 is input, return \"PlingPlang\".","target":"15가 입력되면, \"PlingPlang\"을 반환해요."},{"key":"number7.name","english":"Number 7","target":"숫자 7"},{"key":"number7.description","english":"If 7 is input, return \"Plong\".","target":"7이 입력되면, \"Plong\"을 반환해요."},{"key":"number21.name","english":"Number 21","target":"숫자 21"},{"key":"number21.description","english":"If 21 is input, return \"PlingPlong\".","target":"21이 입력되면, \"PlingPlong\"을 반환해요."},{"key":"number35.name","english":"Number 35","target":"숫자 35"},{"key":"number35.description","english":"If 35 is input, return \"PlangPlong\".","target":"35가 입력되면, \"PlangPlong\"을 반환해요."},{"key":"number105.name","english":"Number 105","target":"숫자 105"},{"key":"number105.description","english":"If 105 is input, return \"PlingPlangPlong\".","target":"105가 입력되면, \"PlingPlangPlong\"을 반환해요."},{"key":"number8.name","english":"Number 8","target":"숫자 8"},{"key":"number8.description","english":"If 8 is input, return \"8\".","target":"8이 입력되면, \"8\"을 반환해요."},{"key":"number52.name","english":"Number 52","target":"숫자 52"},{"key":"number52.description","english":"If 52 is input, return \"52\".","target":"52가 입력되면, \"52\"를 반환해요."},{"key":"bonus1.name","english":"Sixteen lines of code","target":"16줄 code"},{"key":"bonus1.description","english":"Solve the exercise with only sixteen lines of code.","target":"연습 문제를 16줄의 code만으로 풀어요."}]},{"name":"hints","rows":[{"key":"onlyOneSound.question","english":"Why does my function only return one sound?","target":"왜 제 함수는 소리를 하나만 반환할까요?"},{"key":"onlyOneSound.answer","english":"If you `return` inside each `if`, you give up as soon as the first divisor matches. You want to combine them. Instead of returning, append the sound to a result string and keep going.","target":"각 `if` 안에서 `return`하면, 첫 번째 나누어떨어지는 조건에서 바로 끝나버려요. 소리들을 합쳐야 해요. 결과를 바로 반환하지 말고, 결과 문자열에 소리를 추가하고 계속 진행해요."},{"key":"buildCombinedSound.question","english":"How do I build up the combined sound?","target":"합쳐진 소리를 어떻게 만들어요?"},{"key":"buildCombinedSound.answer","english":"Start with an empty result string. For each divisor (3, 5, 7), if it divides the number, append the corresponding sound onto the end of the result using concatenation with `+`.","target":"빈 결과 문자열로 시작해요. 각 나누는 수 (3, 5, 7)에 대해, 그 수로 나누어떨어지면, `+`를 사용한 연결로 결과 끝에 해당 소리를 추가해요."},{"key":"noneMatch.question","english":"What if none of the divisors match?","target":"나누어떨어지는 수가 하나도 없으면 어떻게 하나요?"},{"key":"noneMatch.answer","english":"If the result is still empty after all three checks, the answer is just the number itself as a string. Convert the number and return that.","target":"세 가지 확인을 모두 마친 후에도 결과가 여전히 비어 있다면, 답은 그 숫자 자체를 문자열로 바꾼 거예요. 숫자를 변환하고 그것을 반환해요."},{"key":"convertToString.question","english":"I return the number but it wants me to return it as a string. How do I do that?","target":"숫자를 반환했지만 문자열로 반환하라고 해요. 어떻게 하나요?"},{"key":"convertToString.answer","english":"Numbers and strings are different types, even if they look the same. You can convert a number to a string by putting it inside a template string with `${...}`.","target":"숫자와 문자열은 겉보기에는 같아도 다른 타입이에요. 숫자를 ${...}와 함께 템플릿 문자열 안에 넣어서 문자열로 변환할 수 있어요."},{"key":"howManyReturns.question","english":"How many return statements should I have?","target":"`return`문이 몇 개나 있어야 하나요?"},{"key":"howManyReturns.answer","english":"Just one or two, typically. The whole point is letting the if-statements modify the result string, then returning that result once at the end.","target":"보통 한두 개면 돼요. 핵심은 if문으로 결과 문자열을 수정하고, 마지막에 한 번만 그 결과를 반환하는 거예요."}]}]}]
---

Raindrops는 프로그래밍 면접에서 오랫동안 사용되어 온 고전적인 FizzBuzz 문제의 변형 버전이에요.

여러분이 해야 할 일은 숫자를 그에 해당하는 빗방울 소리로 변환하는 거예요.

어떤 수로 나누어떨어지는지 살펴보면 돼요. (예를 들어 10은 1, 2, 5, 10으로 나누어떨어져요. 12는 1, 2, 3, 4, 6, 12로 나누어떨어져요.)

주어진 숫자가:

- 3으로 나누어떨어지면, 결과에 "Pling"을 추가해요.
- 5로 나누어떨어지면, "Plang"을 추가해요.
- 7로 나누어떨어지면, "Plong"을 추가해요.
- 3, 5, 7 중 어느 것으로도 나누어떨어지지 않으면, 결과는 그 숫자를 문자열로 바꾼 값이에요.

숫자를 입력으로 받아 해당하는 빗방울 소리를 반환하는, `raindrops(num)`(빗방울)이라는 함수를 만들어야 해요.

결과 문자열은 연결(영어: _concatenation_) (`+`)이나 템플릿 문자열(영어: _template string_)을 사용해 만들어요.

### 예시

- `raindrops(28)`은 "Plong"을 반환해요. 28은 7로 나누어떨어지지만 3과 5로는 나누어떨어지지 않기 때문이에요.
- `raindrops(30)`은 "PlingPlang"을 반환해요. 30은 3과 5로 나누어떨어지지만 7로는 나누어떨어지지 않기 때문이에요.
- `raindrops(34)`는 "34"를 반환해요. 34는 3, 5, 7 중 어느 것으로도 나누어떨어지지 않기 때문이에요.
