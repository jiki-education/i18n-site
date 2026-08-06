---
lang: "ko"
type: "exercise"
slug: "leap"
title: "윤년"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/leap"
en_md5: "0e6c7c50ad01b4d9fe07d721fd973afb"
governance_sha: "c80036b"
content_version: "e8dc6f96eb6f"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanOneLine","english":"You used more than one line of code within the function.","target":"함수 안에서 한 줄보다 더 많은 코드를 사용했어요."}]},{"name":"tasks","rows":[{"key":"determineLeapYear.name","english":"Determine if the year is a leap year","target":"연도가 윤년인지 판단하기"},{"key":"determineLeapYear.description","english":"Write a function called isLeapYear that takes a year as its input and returns true if it is a leap year, or false if it is not.","target":"isLeapYear 함수를 작성하세요. 연도를 입력으로 받아 윤년이면 true, 아니면 false를 반환해요."},{"key":"solveInOneLine.name","english":"Solve in one line of code","target":"한 줄의 코드로 풀기"},{"key":"solveInOneLine.description","english":"Can you solve this with only one line of code within the function?","target":"함수 안에서 코드 한 줄만으로 풀 수 있을까요?"}]},{"name":"scenarios","rows":[{"key":"year2015.name","english":"Year 2015","target":"2015년"},{"key":"year2015.description","english":"2015 is not divisible by 4 so is not a leap year.","target":"2015년은 4로 나누어 떨어지지 않아서 윤년이 아니에요."},{"key":"year1970.name","english":"Year 1970","target":"1970년"},{"key":"year1970.description","english":"1970 is not divisible by 4 so is not a leap year.","target":"1970년은 4로 나누어 떨어지지 않아서 윤년이 아니에요."},{"key":"year2100.name","english":"Year 2100","target":"2100년"},{"key":"year2100.description","english":"2100 is divisible by 100 but not by 400 so is not a leap year.","target":"2100년은 100으로 나누어 떨어지지만 400으로는 나누어 떨어지지 않아서 윤년이 아니에요."},{"key":"year1900.name","english":"Year 1900","target":"1900년"},{"key":"year1900.description","english":"1900 is divisible by 100 but not by 400 so is not a leap year.","target":"1900년은 100으로 나누어 떨어지지만 400으로는 나누어 떨어지지 않아서 윤년이 아니에요."},{"key":"year1800.name","english":"Year 1800","target":"1800년"},{"key":"year1800.description","english":"1800 is divisible by 100 but not by 400 so is not a leap year.","target":"1800년은 100으로 나누어 떨어지지만 400으로는 나누어 떨어지지 않아서 윤년이 아니에요."},{"key":"year2000.name","english":"Year 2000","target":"2000년"},{"key":"year2000.description","english":"2000 is divisible by 400 so is a leap year.","target":"2000년은 400으로 나누어 떨어져서 윤년이에요."},{"key":"year2400.name","english":"Year 2400","target":"2400년"},{"key":"year2400.description","english":"2400 is divisible by 400 so is a leap year.","target":"2400년은 400으로 나누어 떨어져서 윤년이에요."},{"key":"year1996.name","english":"Year 1996","target":"1996년"},{"key":"year1996.description","english":"1996 is divisible by 4 but not by 100 so is a leap year.","target":"1996년은 4로 나누어 떨어지지만 100으로는 나누어 떨어지지 않아서 윤년이에요."},{"key":"year1960.name","english":"Year 1960","target":"1960년"},{"key":"year1960.description","english":"1960 is divisible by 4 but not by 100 so is a leap year.","target":"1960년은 4로 나누어 떨어지지만 100으로는 나누어 떨어지지 않아서 윤년이에요."},{"key":"bonus1.name","english":"One line of code","target":"한 줄의 코드"},{"key":"bonus1.description","english":"Solve the exercise with only one line of code within the function.","target":"함수 안에서 한 줄의 코드만으로 문제를 풀었는지 확인해요."}]},{"name":"hints","rows":[{"key":"basicRule.question","english":"What's the basic rule for a leap year?","target":"윤년의 기본 규칙이 뭐예요?"},{"key":"basicRule.answer","english":"Years divisible by 4 are leap years. So `year % 4 === 0` is the starting test.","target":"4로 나누어 떨어지는 연도는 윤년이에요. 그래서 `year % 4 === 0`이 기본 검사예요."},{"key":"exceptions.question","english":"Are there exceptions?","target":"예외가 있나요?"},{"key":"exceptions.answer","english":"Yes. Years divisible by 100 are NOT leap years, even though they're divisible by 4. For example, 1900 isn't a leap year.","target":"네. 100으로 나누어 떨어지는 해는 4로 나누어 떨어져도 윤년이 아니에요. 예를 들면 1900년은 윤년이 아니에요."},{"key":"exceptionsToExceptions.question","english":"Are there exceptions to the exception?","target":"예외에도 예외가 있나요?"},{"key":"exceptionsToExceptions.answer","english":"Yes. Years divisible by 400 ARE leap years after all. For example, 2000 is. So the rule cascades: divisible by 4, but not by 100, unless also by 400.","target":"네. 400으로 나누어 떨어지는 해는 결국 윤년이에요. 예를 들어 2000년이 그래요. 그래서 규칙이 단계적으로 적용돼요: 4로 나누어 떨어지지만 100으로는 나누어 떨어지지 않아야 하고, 400으로 나누어 떨어지면 윤년이에요."},{"key":"checkDivisibility.question","english":"How do I check divisibility?","target":"나누어 떨어지는지 어떻게 확인하나요?"},{"key":"checkDivisibility.answer","english":"Use the remainder operator `%`. `year % 4 === 0` is true when the year divides exactly by 4 with nothing left over. Same trick with 100 and 400.","target":"나머지 연산자 `%`를 사용해요. `year % 4 === 0`이 참이면 연도가 4로 나누어 떨어지는 거예요. 100이나 400에도 똑같이 확인할 수 있어요."}]}]}]
---

이번 연습 문제에서는 윤년에 대해 알아봐요!

윤년(그레고리력 기준)은 다음과 같은 규칙으로 정해져요:

- 4로 나누어 떨어지는 해는 모두 윤년이에요.
- 단, 100으로 나누어 떨어지는 해는 400으로도 나누어 떨어질 때만 윤년이에요.

몇 가지 예를 살펴볼까요?

- 1997년은 4로 나누어 떨어지지 않아서 윤년이 아니에요.
- 1900년은 400으로 나누어 떨어지지 않아서 윤년이 아니었어요.
- 2000년은 윤년이었어요!

여기서 할 일은 `isLeapYear`(윤년 확인)라는 함수를 작성하는 거예요. 이 함수는 연도를 입력으로 받아서 윤년이면 `true`를, 아니면 `false`를 반환해요.

이 문제는 천천히 풀어 봐요. 시작하기 전에 꼼꼼히 생각해 보세요!
