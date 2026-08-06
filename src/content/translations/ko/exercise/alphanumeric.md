---
lang: "ko"
type: "exercise"
slug: "alphanumeric"
title: "영숫자"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/alphanumeric"
en_md5: "c8cd152f90c7fb519617ff5757e02c36"
governance_sha: "c80036b"
content_version: "c163ac367d88"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"classifyString.name","english":"Classify a string","target":null},{"key":"classifyString.description","english":"Write helper functions to check if a string is alpha, numeric, or alphanumeric, then use them to classify the input string.","target":null},{"key":"useContinue.name","english":"Use continue","target":null},{"key":"useContinue.description","english":"In your isAlphanumeric check, once a character is a letter or a digit you're happy with it. Use continue to move straight on to the next character instead of nesting more conditions.","target":null}]},{"name":"scenarios","rows":[{"key":"duck.name","english":"Duck","target":null},{"key":"duck.description","english":"A purely alphabetic string should be classified as \"Alpha\".","target":null},{"key":"number.name","english":"42","target":null},{"key":"number.description","english":"A purely numeric string should be classified as \"Numeric\".","target":null},{"key":"alphanumeric.name","english":"Duck42","target":null},{"key":"alphanumeric.description","english":"A string with both letters and numbers should be classified as \"Alphanumeric\".","target":null},{"key":"notAlphanumeric1.name","english":"It's not 42!","target":null},{"key":"notAlphanumeric1.description","english":"A string with special characters should be classified as \"Unknown\".","target":null},{"key":"notAlphanumeric2.name","english":"42 Rubber Duck!","target":null},{"key":"notAlphanumeric2.description","english":"A string with spaces and special characters should be classified as \"Unknown\".","target":null},{"key":"alphanumericUsesContinue.name","english":"Used continue","target":null},{"key":"alphanumericUsesContinue.description","english":"Your solution works and uses continue to move past characters that are already accounted for.","target":null}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start when there are several functions to write?","target":null},{"key":"whereToStart.answer","english":"Pick the smallest helper first. Each helper loops over the characters of the string and asks the same kind of yes/no question about every one of them. Get one working and the others follow the same shape.","target":null},{"key":"checkAllLetters.question","english":"How do I check if every character in the input is a letter?","target":null},{"key":"checkAllLetters.answer","english":"Loop through each character and check whether it appears in the alphabet. A string's `.includes()` method answers exactly that: `\"...\".includes(char)`. Remember to include both lowercase and uppercase letters, otherwise a capital like the \"D\" in \"Duck\" won't count. If any character isn't in the alphabet, it isn't all alpha.","target":null},{"key":"checkAllDigits.question","english":"How do I do the same check for digits?","target":null},{"key":"checkAllDigits.answer","english":"Exactly the same pattern, but check against `\"0123456789\"` instead of the alphabet.","target":null},{"key":"alphanumericMeaning.question","english":"What does 'alphanumeric' mean. Does it mean both?","target":null},{"key":"alphanumericMeaning.answer","english":"Alphanumeric means each character is either a letter OR a digit. So for each character, if it's alpha you're happy, and if it's numeric you're also happy. Use `continue` to skip on. Only if it's neither should you reject.","target":null},{"key":"pickingLabels.question","english":"How do I pick between the four labels in whatAmI()?","target":null},{"key":"pickingLabels.answer","english":"Call all three helpers and use if/else. The order matters. Check the stricter cases ('alpha only' and 'numeric only') before 'alphanumeric', which is the looser case.","target":null}]},{"name":"checks","rows":[{"key":"mustUseContinue","english":"So close! Use `continue` to skip on to the next character.","target":null},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long.","target":null},{"key":"useIsAlpha","english":"This exercise wants you to write an `isAlpha()` helper and use it to classify the string.","target":null},{"key":"useIsNumeric","english":"This exercise wants you to write an `isNumeric()` helper and use it to classify the string.","target":null},{"key":"useIsAlphanumeric","english":"This exercise wants you to write an `isAlphanumeric()` helper and use it to classify the string.","target":null}]}]}]
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
