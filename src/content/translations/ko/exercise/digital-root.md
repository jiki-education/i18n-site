---
lang: "ko"
type: "exercise"
slug: "digital-root"
title: "디지털 루트"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/digital-root"
en_md5: "554e48db79141f8304144e152643a47c"
governance_sha: "c80036b"
content_version: "3c469e82b688"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"sumTheDigits.name","english":"Sum the digits","target":"자릿수 더하기"},{"key":"sumTheDigits.description","english":"Write a function called digitalRoot that takes a number and adds its digits together. For numbers that are already a single digit, and for numbers whose digits sum to a single digit, this first pass is enough.","target":"숫자를 받아서 자릿수를 모두 더하는 `digitalRoot`라는 함수를 만들어 보세요. 처음부터 한 자리인 숫자나, 자릿수를 한 번만 더해도 한 자리가 되는 숫자는 이 첫 번째 단계로 충분해요."},{"key":"collapseToSingleDigit.name","english":"Keep collapsing until one digit is left","target":"한 자리만 남을 때까지 반복하기"},{"key":"collapseToSingleDigit.description","english":"Sometimes summing the digits once still leaves more than one digit (for example 942 sums to 15). Keep summing the digits of the result until a single digit remains.","target":"가끔은 자릿수를 한 번 더해도 여전히 두 자리 이상 남을 때가 있어요 (예를 들어 942는 15가 돼요). 한 자리만 남을 때까지 결과의 자릿수를 계속 더해 보세요."},{"key":"keepItTight.name","english":"Bonus: keep it short","target":"보너스: 코드를 간결하게"},{"key":"keepItTight.description","english":"Your solution already works. For this bonus, tidy it up so the whole function fits in a small number of lines, without any extra clutter.","target":"여러분의 해결책은 이미 잘 동작해요. 이 보너스 과제에서는 불필요한 부분을 없애고 함수 전체를 몇 줄 안으로 간결하게 정리해 보세요."}]},{"name":"scenarios","rows":[{"key":"drZero.name","english":"Zero","target":"0"},{"key":"drZero.description","english":"The digital root of 0 is 0.","target":"0의 디지털 루트는 0이에요."},{"key":"drSingleDigit.name","english":"Already a single digit","target":"이미 한 자리 숫자"},{"key":"drSingleDigit.description","english":"A number that is already a single digit is its own digital root.","target":"이미 한 자리인 숫자는 그 자체가 자신의 디지털 루트예요."},{"key":"drTwoDigits.name","english":"Two digits","target":"두 자리 숫자"},{"key":"drTwoDigits.description","english":"16 collapses to 7 in a single pass (1 + 6).","target":"16은 한 번 더해서 7이 돼요 (1 + 6)."},{"key":"drThreeDigits.name","english":"Three digits, one pass","target":"세 자리, 한 번 더하기"},{"key":"drThreeDigits.description","english":"132 collapses to 6 in a single pass (1 + 3 + 2).","target":"132는 한 번 더해서 6이 돼요 (1 + 3 + 2)."},{"key":"drThirtyNine.name","english":"Two passes needed","target":"두 번 더하기 필요"},{"key":"drThirtyNine.description","english":"39 sums to 12, which then sums to 3.","target":"39는 12가 되고, 그 다음에 3이 돼요."},{"key":"drTwoPasses.name","english":"A number that needs a second pass","target":"두 번째 더하기가 필요한 숫자"},{"key":"drTwoPasses.description","english":"942 sums to 15, which then sums to 6.","target":"942는 15가 되고, 그 다음에 6이 돼요."},{"key":"drLarge.name","english":"A larger number","target":"더 큰 숫자"},{"key":"drLarge.description","english":"493193 collapses all the way down to 2.","target":"493193은 결국 2까지 줄어들어요."},{"key":"drNines.name","english":"All nines","target":"모두 9"},{"key":"drNines.description","english":"99999 sums to 45, which then sums to 9.","target":"99999는 45가 되고, 그 다음에 9가 돼요."},{"key":"drBonusTight.name","english":"A tidy, short solution","target":"간결하고 짧은 해결책"},{"key":"drBonusTight.description","english":"12345 collapses down to 6 (1 + 2 + 3 + 4 + 5 = 15, then 1 + 5 = 6).","target":"12345는 6으로 줄어들어요 (1 + 2 + 3 + 4 + 5 = 15, 그 다음에 1 + 5 = 6)."}]},{"name":"hints","rows":[{"key":"whatIsIt.question","english":"What exactly is a digital root?","target":"디지털 루트가 정확히 뭔가요?"},{"key":"whatIsIt.answer","english":"Add up all the digits of the number. If that gives you a single digit, that's the answer. If it gives you more than one digit, add up the digits of that result too, and keep going until only one digit is left.","target":"숫자의 모든 자릿수를 더해 보세요. 한 자리 숫자가 나오면 그게 답이에요. 만약 두 자리 이상이 나오면, 그 결과의 자릿수를 다시 더하세요. 한 자리만 남을 때까지 계속 반복하면 돼요."},{"key":"sumDigits.question","english":"How do I add up the digits of a number?","target":"숫자의 자릿수를 어떻게 더하나요?"},{"key":"sumDigits.answer","english":"Turn the number into a string so you can walk through it character by character with a `for...of` loop. Keep a running total, adding each digit as you go.","target":"숫자를 문자열로 바꾸면 `for...of` 루프로 한 글자씩 살펴볼 수 있어요. 합계를 저장할 변수를 만들고, 각 자릿수를 더해가면서 진행하세요."},{"key":"digitsToNumbers.question","english":"Each digit is a character though, not a number.","target":"하지만 각 자릿수는 숫자가 아니라 문자인데요."},{"key":"digitsToNumbers.answer","english":"When you loop over the string, each character (like `\"4\"`) is text. Use `Number(char)` to turn it into the number `4` before adding it to your total.","target":"문자열을 루프로 돌면 각 문자(예: `\"4\"`)는 텍스트예요. 합계에 더하기 전에 `Number(char)`를 사용해서 숫자 `4`로 바꾸세요."},{"key":"whichLoop.question","english":"How do I keep going without knowing how many passes I need?","target":"몇 번 더해야 할지 모를 때는 어떻게 계속하나요?"},{"key":"whichLoop.answer","english":"You don't know in advance how many times you'll need to sum the digits, so a `while` loop is a great fit. Keep looping while the number has more than one digit.","target":"자릿수를 몇 번이나 더해야 할지 미리 알 수 없으니까 `while` 루프가 아주 적합해요. 숫자가 한 자리보다 크면 계속 루프를 돌리세요."},{"key":"keepGoing.question","english":"When do I stop?","target":"언제 멈추나요?"},{"key":"keepGoing.answer","english":"Stop as soon as the number is a single digit. At that point, return it.","target":"숫자가 한 자리가 되자마자 멈추세요. 그때 그 값을 반환하면 돼요."}]},{"name":"checks","rows":[{"key":"mustUseWhile","english":"Almost! For this exercise we want you to use a `while` loop to keep collapsing until a single digit remains.","target":"거의 다 됐어요! 이 연습 문제에서는 한 자리만 남을 때까지 계속 더하기 위해 `while` 루프를 사용해 보세요."},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long. See if you can tighten it up.","target":"아주 근접했어요! 해결책이 동작하지만 조금 길어요. 좀 더 간결하게 줄여볼 수 있을까요?"}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":"숫자로 된 문자열을 숫자로 변환해요."},{"key":"number.category","english":"Type Conversion","target":"형 변환"},{"key":"string.description","english":"Convert a number into a string","target":"숫자를 문자열로 변환해요."},{"key":"string.category","english":"Type Conversion","target":"형 변환"}]}]}]
---

숫자의 디지털 루트(영어: _digital root_)란, 그 숫자의 자릿수를 계속 더해, 한 자리 숫자만 남을 때까지 반복해서 얻는 값이에요.

한 번 더했을 때도 여전히 두 자리 이상이 남으면, _그_ 결과의 자릿수를 다시 더하고, 이걸 한 자리 숫자가 남을 때까지 계속해요.

예를 들어, `942`의 디지털 루트를 구하려면:

```
9 + 4 + 2 = 15
1 + 5 = 6
```

따라서 `942`의 디지털 루트는 `6`이에요.

이미 한 자리 숫자인 수(예: `7`)는 그 자체로 자신의 디지털 루트예요.

숫자를 받아서 그 숫자의 디지털 루트를 반환하는 `digitalRoot`라는 함수를 만들어 보세요.

### `String()` 함수

지난 몇 강의 동안 문자열을 숫자로 변환하는 `Number(str)` 함수를 사용할 수 있었어요.

이제 그 반대 방향으로, `String(num)` 함수를 사용해 숫자를 문자열로 바꿀 수 있어요. 예를 들어:

```js
String(147) === "147"
```

또, 함수 이름이 대문자로 시작한다는 점을 눈여겨보세요. 왜 그런지는 지금은 걱정하지 않아도 돼요!

### 배운 내용을 실습해 보기

이 연습 문제는 여러 방법으로 풀 수 있지만, 우리가 원하는 해결책은 `while` 루프를 사용하는 거예요.

재미있게 해봐요!
