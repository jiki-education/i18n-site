---
lang: "ko"
type: "exercise"
slug: "alphanumeric"
title: "영숫자"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/alphanumeric"
en_md5: "c8cd152f90c7fb519617ff5757e02c36"
governance_sha: "90a620a"
content_version: "5ad6aa3f1312"
published_at: "2026-08-07"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"classifyString.name","english":"Classify a string","target":"문자열 분류하기"},{"key":"classifyString.description","english":"Write helper functions to check if a string is alpha, numeric, or alphanumeric, then use them to classify the input string.","target":"문자열이 알파벳, 숫자, 또는 영숫자인지 확인하는 헬퍼 함수를 작성하고, 이를 사용해 입력 문자열을 분류하세요."},{"key":"useContinue.name","english":"Use continue","target":"continue 사용하기"},{"key":"useContinue.description","english":"In your isAlphanumeric check, once a character is a letter or a digit you're happy with it. Use continue to move straight on to the next character instead of nesting more conditions.","target":"isAlphanumeric 확인에서, 문자가 알파벳이나 숫자이면 그대로 넘어가도 됩니다. 조건문을 중첩하지 말고, continue를 사용해 바로 다음 문자로 이동하세요."}]},{"name":"scenarios","rows":[{"key":"duck.name","english":"Duck","target":"Duck"},{"key":"duck.description","english":"A purely alphabetic string should be classified as \"Alpha\".","target":"순수한 알파벳 문자열은 \"Alpha\"로 분류돼야 해요."},{"key":"number.name","english":"42","target":"42"},{"key":"number.description","english":"A purely numeric string should be classified as \"Numeric\".","target":"순수한 숫자 문자열은 \"Numeric\"으로 분류돼야 해요."},{"key":"alphanumeric.name","english":"Duck42","target":"Duck42"},{"key":"alphanumeric.description","english":"A string with both letters and numbers should be classified as \"Alphanumeric\".","target":"알파벳과 숫자가 모두 포함된 문자열은 \"Alphanumeric\"으로 분류돼야 해요."},{"key":"notAlphanumeric1.name","english":"It's not 42!","target":"It's not 42!"},{"key":"notAlphanumeric1.description","english":"A string with special characters should be classified as \"Unknown\".","target":"특수 문자가 포함된 문자열은 \"Unknown\"으로 분류돼야 해요."},{"key":"notAlphanumeric2.name","english":"42 Rubber Duck!","target":"42 Rubber Duck!"},{"key":"notAlphanumeric2.description","english":"A string with spaces and special characters should be classified as \"Unknown\".","target":"공백과 특수 문자가 포함된 문자열은 \"Unknown\"으로 분류돼야 해요."},{"key":"alphanumericUsesContinue.name","english":"Used continue","target":"continue 사용"},{"key":"alphanumericUsesContinue.description","english":"Your solution works and uses continue to move past characters that are already accounted for.","target":"여러분의 해결책이 제대로 작동하며, continue를 사용해 이미 확인된 문자는 건너뛰어요."}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start when there are several functions to write?","target":"여러 함수를 작성해야 할 때 어디서부터 시작해야 하나요?"},{"key":"whereToStart.answer","english":"Pick the smallest helper first. Each helper loops over the characters of the string and asks the same kind of yes/no question about every one of them. Get one working and the others follow the same shape.","target":"가장 작은 헬퍼 함수부터 고르세요. 각 헬퍼 함수는 문자열의 문자들을 순회하며 각 문자에 대해 동일한 예/아니오 질문을 던집니다. 하나를 작동시키면 나머지도 같은 방식으로 따라 하면 됩니다."},{"key":"checkAllLetters.question","english":"How do I check if every character in the input is a letter?","target":"입력값의 모든 문자가 알파벳 문자인지 어떻게 확인하나요?"},{"key":"checkAllLetters.answer","english":"Loop through each character and check whether it appears in the alphabet. A string's `.includes()` method answers exactly that: `\"...\".includes(char)`. Remember to include both lowercase and uppercase letters, otherwise a capital like the \"D\" in \"Duck\" won't count. If any character isn't in the alphabet, it isn't all alpha.","target":"각 문자를 순회하며 알파벳에 포함되는지 확인하세요. 문자열의 `.includes()` 메서드가 바로 그 역할을 합니다: `\"...\".includes(char)`. 소문자와 대문자를 모두 포함해야 한다는 점을 잊지 마세요. 그렇지 않으면 \"Duck\"의 \"D\" 같은 대문자는 알파벳으로 인식되지 않습니다. 어떤 문자라도 알파벳에 포함되지 않으면, 전체가 알파벳이 아닙니다."},{"key":"checkAllDigits.question","english":"How do I do the same check for digits?","target":"숫자에 대해 동일한 확인을 어떻게 하나요?"},{"key":"checkAllDigits.answer","english":"Exactly the same pattern, but check against `\"0123456789\"` instead of the alphabet.","target":"완전히 동일한 방식으로, 알파벳 대신 `\"0123456789\"`를 기준으로 확인하면 됩니다."},{"key":"alphanumericMeaning.question","english":"What does 'alphanumeric' mean. Does it mean both?","target":"'영숫자'가 무슨 뜻인가요? 알파벳과 숫자 모두를 의미하나요?"},{"key":"alphanumericMeaning.answer","english":"Alphanumeric means each character is either a letter OR a digit. So for each character, if it's alpha you're happy, and if it's numeric you're also happy. Use `continue` to skip on. Only if it's neither should you reject.","target":"영숫자는 각 문자가 알파벳 문자이거나 숫자임을 의미합니다. 따라서 각 문자에 대해, 알파벳이면 통과이고 숫자여도 통과입니다. `continue`를 사용해 건너뛰세요. 알파벳도 숫자도 아닐 때만 거부하면 됩니다."},{"key":"pickingLabels.question","english":"How do I pick between the four labels in whatAmI()?","target":"whatAmI()에서 네 가지 레이블 중 어떻게 선택하나요?"},{"key":"pickingLabels.answer","english":"Call all three helpers and use if/else. The order matters. Check the stricter cases ('alpha only' and 'numeric only') before 'alphanumeric', which is the looser case.","target":"세 헬퍼 함수를 모두 호출하고 if/else를 사용하세요. 순서가 중요합니다. 더 엄격한 경우('알파벳만', '숫자만')를 먼저 확인하고, 그다음에 덜 엄격한 '영숫자'를 확인하세요."}]},{"name":"checks","rows":[{"key":"mustUseContinue","english":"So close! Use `continue` to skip on to the next character.","target":"거의 다 왔어요! `continue`를 사용해 다음 문자로 건너뛰세요."},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long.","target":"거의 다 왔어요! 해결책이 작동하지만, 조금 길어요."},{"key":"useIsAlpha","english":"This exercise wants you to write an `isAlpha()` helper and use it to classify the string.","target":"이 연습 문제에서는 `isAlpha()` 헬퍼 함수를 작성하고 이를 사용해 문자열을 분류해야 합니다."},{"key":"useIsNumeric","english":"This exercise wants you to write an `isNumeric()` helper and use it to classify the string.","target":"이 연습 문제에서는 `isNumeric()` 헬퍼 함수를 작성하고 이를 사용해 문자열을 분류해야 합니다."},{"key":"useIsAlphanumeric","english":"This exercise wants you to write an `isAlphanumeric()` helper and use it to classify the string.","target":"이 연습 문제에서는 `isAlphanumeric()` 헬퍼 함수를 작성하고 이를 사용해 문자열을 분류해야 합니다."}]}]}]
---

이 연습 문제에서는 문자열에 알파벳과 숫자가 포함되어 있는지 확인하는 함수를 만들어야 해요.

세 가지 헬퍼 함수를 작성해야 해요:

- `isAlpha(string)`(알파벳 여부) — 문자열이 ASCII 알파벳 문자로만 구성되어 있는지 확인해요 (예: "A", "a", "Hello")
- `isNumeric(string)`(숫자 여부) — 문자열이 숫자로만 구성되어 있는지 확인해요 (예: "0", "1", "456")
- `isAlphanumeric(string)`(영숫자 여부) — 문자열이 ASCII 알파벳 문자나 숫자로만 구성되어 있는지 확인해요 (예: "Hello", "42", "Hello42")

느낌표, 물음표 같은 다른 기호나 비ASCII 문자(예: "じき", "正直")가 포함되면 세 함수 모두 `false`를 반환해야 해요.

그다음, `whatAmI(string)`(문자열 유형 판별) 함수를 만들어 앞에서 만든 함수를 사용해서 문자열을 분류해야 해요:

- 알파벳만 있는 문자열은 `"Alpha"`를 반환해요
- 숫자만 있는 문자열은 `"Numeric"`을 반환해요
- 알파벳과 숫자가 모두 있는 문자열은 `"Alphanumeric"`을 반환해요
- 그 외의 경우는 `"Unknown"`을 반환해요

### 방금 배운 내용을 활용해 보세요

이 연습 문제를 푸는 방법은 여러 가지가 있지만, 우리가 원하는 해결 방법은 `continue`문과 위에서 만든 세 함수를 사용하는 거예요.

또한 이 연습 문제는 코드를 42줄 이하로 작성하는 도전 과제예요. 이 목표가 반드시 가장 실무적인 코드를 만드는 것은 아니에요. 몇 줄 더 추가하면 더 보기 좋은 코드가 나올 수도 있고, 더 짧은 해결책도 있을 거예요. 하지만 실력을 키우기에는 좋은 목표예요.

재미있게 풀어 보세요!
