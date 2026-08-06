---
lang: "ko"
type: "exercise"
slug: "luhn"
title: "Luhn"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/luhn"
en_md5: "6325652b095bb16f3d5b8950b2c6389a"
governance_sha: "c80036b"
content_version: "a87e1bd1b1f1"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"doubleAndSum.name","english":"Double every second digit and sum","target":"두 번째 자리마다 두 배로 하고 합산하기"},{"key":"doubleAndSum.description","english":"Write a function called valid that ignores spaces, then doubles every second digit counting from the right (subtracting 9 from any result over 9), sums all the digits, and returns true when the total is divisible by 10.","target":"공백을 무시하고, 오른쪽에서부터 두 번째 자리마다 숫자를 두 배로 한 다음(9보다 크면 9를 빼고), 모든 자릿수를 더한 합계가 10으로 나누어 떨어지면 true를 반환하는 valid 함수를 작성하세요."},{"key":"spotInvalidNumbers.name","english":"Spot invalid numbers","target":"유효하지 않은 번호 찾기"},{"key":"spotInvalidNumbers.description","english":"Numbers whose digits are all valid but whose checksum doesn't come out divisible by 10 should return false.","target":"모든 자릿수가 유효하지만 체크섬이 10으로 나누어 떨어지지 않는 번호는 false를 반환해야 해요."},{"key":"rejectBadInput.name","english":"Reject bad input","target":"잘못된 입력 거부하기"},{"key":"rejectBadInput.description","english":"Reject strings that are a single character or shorter, and reject any string containing a character that isn't a digit or a space.","target":"길이가 한 글자 이하인 문자열, 그리고 숫자나 공백이 아닌 문자가 포함된 문자열은 모두 거부해야 해요."}]},{"name":"scenarios","rows":[{"key":"luhnSimpleValid.name","english":"A simple valid number","target":"간단한 유효한 번호"},{"key":"luhnSimpleValid.description","english":"A valid number should return true.","target":"유효한 번호는 true를 반환해야 해요."},{"key":"luhnValidTwoDigit.name","english":"Valid two-digit number","target":"유효한 두 자리 번호"},{"key":"luhnValidTwoDigit.description","english":"A valid two-digit number should return true.","target":"유효한 두 자리 번호는 true를 반환해야 해요."},{"key":"luhnValidCanadianSin.name","english":"Valid Canadian SIN","target":"유효한 캐나다 SIN"},{"key":"luhnValidCanadianSin.description","english":"A valid number with spaces should return true.","target":"공백이 포함된 유효한 번호는 true를 반환해야 해요."},{"key":"luhnValidEvenDigits.name","english":"Valid number with an even number of digits","target":"자릿수가 짝수인 유효한 번호"},{"key":"luhnValidEvenDigits.description","english":"A valid number with an even number of digits should return true.","target":"자릿수가 짝수인 유효한 번호는 true를 반환해야 해요."},{"key":"luhnValidVeryLong.name","english":"Very long number","target":"아주 긴 번호"},{"key":"luhnValidVeryLong.description","english":"A very long valid number should still return true.","target":"아주 긴 유효한 번호도 여전히 true를 반환해야 해요."},{"key":"luhnInvalidCanadianSin.name","english":"Invalid Canadian SIN","target":"유효하지 않은 캐나다 SIN"},{"key":"luhnInvalidCanadianSin.description","english":"A number whose checksum fails should return false.","target":"체크섬이 맞지 않는 번호는 false를 반환해야 해요."},{"key":"luhnInvalidCreditCard.name","english":"Invalid credit card","target":"유효하지 않은 신용 카드 번호"},{"key":"luhnInvalidCreditCard.description","english":"An invalid credit card number should return false.","target":"유효하지 않은 신용 카드 번호는 false를 반환해야 해요."},{"key":"luhnInvalidLongRemainderDiv5.name","english":"Invalid long number with a remainder divisible by 5","target":"나머지가 5인 유효하지 않은 긴 번호"},{"key":"luhnInvalidLongRemainderDiv5.description","english":"A long number whose total is divisible by 5 but not 10 should return false.","target":"합계가 5로 나누어 떨어지지만 10으로는 나누어 떨어지지 않는 긴 번호는 false를 반환해야 해요."},{"key":"luhnSingleDigit.name","english":"Single digit is invalid","target":"한 자리 숫자는 유효하지 않음"},{"key":"luhnSingleDigit.description","english":"A single-digit string can never be valid.","target":"한 자리 문자열은 절대 유효할 수 없어요."},{"key":"luhnZeroWithSpace.name","english":"Single zero with a space","target":"공백이 포함된 한 개의 0"},{"key":"luhnZeroWithSpace.description","english":"A single zero with a space is invalid, because only one digit remains once spaces are ignored.","target":"공백이 포함된 한 개의 0은 유효하지 않아요. 공백을 무시하면 숫자가 하나만 남기 때문이에요."},{"key":"luhnTrailingLetter.name","english":"Trailing letter","target":"끝에 붙은 문자"},{"key":"luhnTrailingLetter.description","english":"A valid number with a non-digit added at the end becomes invalid.","target":"끝에 숫자가 아닌 문자가 붙으면 유효했던 번호도 유효하지 않게 돼요."},{"key":"luhnColon.name","english":"Colon character","target":"콜론 문자"},{"key":"luhnColon.description","english":"A colon is one less than the character '0', and must not be treated as a digit.","target":"콜론은 문자 '0'보다 1 작은 값이므로 숫자로 취급하면 안 돼요."},{"key":"luhnPercent.name","english":"Percent character in the middle","target":"중간에 있는 퍼센트 문자"},{"key":"luhnPercent.description","english":"A non-digit, non-space character in the middle makes the number invalid, even when the digits alone would sum to a multiple of 10.","target":"중간에 숫자도 공백도 아닌 문자가 있으면, 숫자만으로는 10의 배수가 되더라도 번호가 유효하지 않아요."}]},{"name":"hints","rows":[{"key":"whatIsLuhn.question","english":"How does the Luhn check actually work?","target":"Luhn 검사는 실제로 어떻게 동작하나요?"},{"key":"whatIsLuhn.answer","english":"Ignore any spaces first. Then, starting from the rightmost digit and moving left, double every second digit. If a doubled value goes above 9, subtract 9. Add all the resulting digits together. If that total divides evenly by 10, the number is valid.","target":"먼저 공백을 무시하세요. 그 후, 가장 오른쪽 자리에서 왼쪽으로 이동하면서 두 번째 자리마다 값을 두 배로 해요. 두 배로 한 값이 9보다 크면 9를 빼요. 모든 자릿수를 더한 합이 10으로 나누어 떨어지면 번호가 유효해요."},{"key":"stripSpaces.question","english":"What do I do with the spaces?","target":"공백은 어떻게 처리하나요?"},{"key":"stripSpaces.answer","english":"Spaces are only there for readability. Skip over them with `continue` so they don't count as digits and don't affect the positions of the real digits.","target":"공백은 단지 가독성을 위해 있어요. `continue`로 건너뛰면 공백이 숫자로 세어지지 않고 실제 자릿수의 위치에 영향을 주지 않아요."},{"key":"rejectNonDigits.question","english":"How do I reject invalid characters?","target":"유효하지 않은 문자는 어떻게 거부하나요?"},{"key":"rejectNonDigits.answer","english":"As you look at each character, if it isn't a space and isn't one of `0123456789`, you can immediately return `false`. A handy check is `\"0123456789\".includes(char)`.","target":"각 문자를 살펴볼 때, 공백이 아니고 `0123456789` 중 하나가 아니면 바로 `false`를 반환할 수 있어요. 편리한 확인 방법은 `\\\"0123456789\\\".includes(char)`예요."},{"key":"everySecondDigit.question","english":"Which digits do I double?","target":"어떤 자릿수를 두 배로 하나요?"},{"key":"everySecondDigit.answer","english":"Every second one. It helps to build up a clean string of just the digits first, then loop over it with an index so you can tell each digit's position.","target":"두 번째 자리마다요. 먼저 숫자만으로 이루어진 깨끗한 문자열을 만든 다음 인덱스를 사용해 반복문으로 각 자릿수의 위치를 알 수 있어요."},{"key":"fromTheRight.question","english":"But I need to count from the right, not the left.","target":"그런데 왼쪽이 아니라 오른쪽부터 세어야 하잖아요."},{"key":"fromTheRight.answer","english":"If your clean digit string has length `len` and you're at index `i` (counting from 0 on the left), then its distance from the right is `len - 1 - i`. Double the digit whenever that distance is odd.","target":"깨끗한 숫자 문자열의 길이가 `len`이고 현재 인덱스가 `i`(왼쪽에서 0부터 세어요)라면, 오른쪽에서부터의 거리는 `len - 1 - i`예요. 그 거리가 홀수일 때 그 자릿수를 두 배로 하면 돼요."},{"key":"doublingOverNine.question","english":"What happens when doubling gives me a two-digit number?","target":"두 배로 했을 때 두 자리 숫자가 나오면 어떻게 하나요?"},{"key":"doublingOverNine.answer","english":"If doubling makes the digit greater than 9, subtract 9 from it. For example 6 doubles to 12, and 12 - 9 = 3. (This gives the same answer as adding the two digits together.)","target":"두 배로 했을 때 자릿수가 9보다 커지면 9를 빼요. 예를 들어 6을 두 배로 하면 12가 되고, 12 - 9 = 3이에요. (이건 두 자릿수를 더하는 것과 같은 결과예요.)"},{"key":"finalCheck.question","english":"What's the final validity check?","target":"최종 유효성 검사는 무엇인가요?"},{"key":"finalCheck.answer","english":"Add up every digit (doubled or not) and check whether the total is divisible by 10, i.e. `total % 10 === 0`. Remember to also reject strings that have one digit or fewer.","target":"모든 자릿수(두 배로 한 것과 안 한 것 모두)를 더해서 합계가 10으로 나누어 떨어지는지, 즉 `total % 10 === 0`인지 확인하세요. 한 자리 이하인 문자열도 거부해야 한다는 걸 잊지 마세요."}]},{"name":"checks","rows":[{"key":"mustUseFor","english":"So close! This exercise wants you to solve it using a `for` loop.","target":"거의 다 됐어요! 이 연습 문제는 `for`문을 사용해서 풀어야 해요."}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing a digit to a number","target":"숫자가 포함된 문자열을 숫자로 변환해요."},{"key":"number.category","english":"Type Conversion","target":"형 변환"},{"key":"includes.description","english":"Check whether a string contains a smaller string","target":"문자열이 특정 부분 문자열을 포함하는지 확인해요."},{"key":"includes.category","english":"String Operations","target":"문자열 연산"},{"key":"length.description","english":"The number of characters in a string","target":"문자열의 길이예요."},{"key":"length.category","english":"String Operations","target":"문자열 연산"}]}]}]
---

방금 전에는 책의 ISBN 번호 유효성을 검증하는 방법을 살펴봤어요. 다양한 상황에서 숫자를 검사하는 데 쓰이는 또 다른 공식이 있는데, 바로 Luhn 공식(영어: _Luhn formula_)이에요. 신용 카드 번호의 오타를 잡아내는 용도로 가장 유명해요.

### Luhn 검사

Luhn 검사는 다음 단계로 이루어져 있어요.

- 가장 **오른쪽** 자리에서 왼쪽으로 이동하면서, **두 번째 자리마다 숫자를 두 배로** 늘려요.
- 어떤 자리의 숫자를 두 배로 했을 때 9보다 크면, 거기서 9를 빼요.
- 그다음 모든 자릿수를 더해요.
- 합계가 10으로 나누어 떨어지면, 그 번호는 유효해요.

예를 들어 `"067"`을 가지고 단계를 밟아 보면,

```
0   6   7     // 원래 자릿수
0  12   7     // 오른쪽에서 두 번째 자리마다 두 배로
0   3   7     // 12는 9보다 크므로 9를 빼면 → 3
       10     // 모든 자릿수를 더함
     true     // 10이 10으로 나누어 떨어지므로 067은 유효함
```

### 해볼 과제

`valid`(유효성 검사)라는 함수를 만들어 보세요. 문자열 하나를 받아서, Luhn 검사를 통과하면 `true`를, 그렇지 않으면 `false`를 반환해요.

숫자는 문자열로 주어지며, 가독성을 위해 공백이 포함될 수 있어요(예: `"4539 1488 0343 6467"`). 공백은 무시해야 해요.

몇 가지 중요한 사항이 있어요.

- 입력에 공백이 포함될 수 있어요. 공백은 무시해야 해요.
- 입력에 그 밖의 다른 문자가 들어 있으면 `false`를 반환해야 해요.
- 공백을 제거한 후 길이가 1 이하인 문자열은 **유효하지 않아요**.

### 지금까지 배운 내용을 실습해 보기

이 연습 문제를 푸는 방법은 여러 가지가 있어요. 우리가 원하는 해결 방법은 `for`문을 사용하는 거예요.

또, 지난 연습 문제에서 소개한 <a href="/concepts/type-conversion" target="_blank" rel="noopener noreferrer">`Number(str)`</a> 함수도 필요해요.

즐겁게 해보세요!
