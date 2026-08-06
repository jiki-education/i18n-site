---
lang: "ko"
type: "exercise"
slug: "collatz-conjecture"
title: "콜라츠 추측"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/collatz-conjecture"
en_md5: "6fbe47d0456ca4f5db8e74b3f6de3cb0"
governance_sha: "c80036b"
content_version: "98c217c32d22"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"calculateCollatzSteps.name","english":"Calculate Collatz steps","target":"콜라츠 추측의 단계 수 계산"},{"key":"calculateCollatzSteps.description","english":"Write a function that takes a number and returns how many steps it takes to reach 1 following the Collatz Conjecture rules: if even, divide by 2; if odd, multiply by 3 and add 1.","target":"숫자를 받아서 콜라츠 추측 규칙(짝수면 2로 나누고, 홀수면 3을 곱한 뒤 1을 더함)을 따라 1에 도달하기까지 몇 단계가 걸리는지 반환하는 함수를 만들어 보세요."}]},{"name":"scenarios","rows":[{"key":"number1.name","english":"Number 1","target":"숫자 1"},{"key":"number1.description","english":"Zero steps for one.","target":"1은 0단계예요."},{"key":"number16.name","english":"Number 16","target":"숫자 16"},{"key":"number16.description","english":"Divide if even.","target":"짝수면 2로 나눠요."},{"key":"number12.name","english":"Number 12","target":"숫자 12"},{"key":"number12.description","english":"Even and odd steps.","target":"짝수와 홀수 단계를 모두 거침."},{"key":"number1000000.name","english":"Number 1000000","target":"숫자 1000000"},{"key":"number1000000.description","english":"Large number of even and odd steps.","target":"큰 수에 대해 짝수와 홀수 단계가 여러 번 일어남."}]},{"name":"hints","rows":[{"key":"loopUntilOne.question","english":"How do I keep going until the number reaches 1?","target":"숫자가 1이 될 때까지 반복하려면 어떻게 해야 하나요?"},{"key":"loopUntilOne.answer","english":"Use a `repeat()` loop with no number — it repeats forever until you `return` out of it. Inside the loop, replace the number with the next number in the sequence, and return once it reaches 1.","target":"`repeat()` 루프에 숫자를 지정하지 않으면 무한히 반복되다가 `return`으로 빠져나와요. 루프 안에서 숫자를 수열의 다음 값으로 바꾸고, 1이 되면 반환해요."},{"key":"chooseRule.question","english":"How do I decide which rule to apply on each step?","target":"각 단계에서 어떤 규칙을 적용할지 어떻게 결정하나요?"},{"key":"chooseRule.answer","english":"Check whether the number is even. The modulo operator does this. `number % 2 === 0` means it's even. If even, halve it. Otherwise, do `3 * number + 1`.","target":"숫자가 짝수인지 확인해요. 모듈로 연산자로 확인할 수 있어요. `number % 2 === 0`이면 짝수예요. 짝수면 2로 나누고, 아니면 `3 * number + 1`을 계산해요."},{"key":"trackSteps.question","english":"How do I track the answer (the number of steps)?","target":"답(단계 수)을 어떻게 추적하나요?"},{"key":"trackSteps.answer","english":"Keep a counter variable for how many times you've applied the rules. Think about what needs to happen to it each time round the loop, and what your function should return when the number reaches 1.","target":"규칙을 적용한 횟수를 세는 카운터 변수를 유지하세요. 루프를 돌 때마다 그 변수에 어떤 일이 일어나야 하는지, 그리고 숫자가 1이 되면 함수가 무엇을 반환해야 하는지 생각해 보세요."}]}]}]
---

어느 저녁, 온통 수수께끼 같은 낙서로 빼곡한 오래된 노트를 우연히 발견했어요. 마치 누군가 어떤 생각에 사로잡혀 끊임없이 쫓고 있었던 것처럼 말이죠. 한 페이지에는 이런 질문이 눈에 띄었어요: **모든 숫자가 결국 1로 갈 수 있을까요?** 그 질문은 수십 년 동안 많은 이들을 당황시켜 온 **콜라츠 추측**이라는 퍼즐에 관한 것이었어요.

규칙은 믿을 수 없을 정도로 단순해요.

1. 숫자 하나를 골라요.
2. 짝수면 2로 나눠요.
3. 홀수면 3을 곱한 뒤 1을 더해요.
4. 결과로 같은 과정을 무한히 반복해요.

예를 들어 12에서 시작하면:

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

두 번째 숫자(6)부터 세면 1에 도달하기까지 9단계가 걸려요.

`collatzSteps`(콜라츠 추측의 단계 수)라는 함수를 만들어 보세요. 이 함수는 하나의 입력(숫자)을 받아요. 콜라츠 추측의 규칙을 따라, 어떤 숫자가 주어지든 1까지 도달하는 데 **몇 단계**가 걸리는지 반환해요.
