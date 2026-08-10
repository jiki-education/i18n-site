---
lang: "ko"
type: "concept"
slug: "continue"
title: "`continue` 키워드"
status: "published"
source_repo: "i18n"
source_path: "locales/ko/curriculum/concepts/continue/page.md"
en_md5: "6c3f7483826e27d44d6c404cc9f621dd"
governance_sha: "3d354c0"
content_version: "80ca712b5062"
published_at: "2026-08-10"
---

루프를 완전히 빠져나오지 않고 특정 반복만 건너뛰고 싶을 때가 있어요. 예를 들어 홀수에 대해서만 어떤 작업을 하고 싶다고 상상해 봐요.

`i`(인덱스)가 홀수라면 이번에는 루프를 실행하지 않는다고 말할 수 있으면 좋겠죠.

하지만 루프를 완전히 빠져나가고 싶은 건 아니에요. 그냥 이번 반복만 건너뛰고 다음 반복으로 넘어가고 싶은 거예요.

이럴 때 사용하는 키워드가 바로 `continue`예요.

Jiki는 `continue`를 보면 루프의 맨 위로 돌아가서 다음 반복을 시작해요. 그래서 `for...of`문에서는 `continue`를 만나면 리스트의 다음 항목으로 넘어가요.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // "something"일 때는 루프의 나머지를 건너뛰어요.
  }
  // 루프의 나머지...
}
```

`for`문에서는 `i++`로 i가 증가한 후에 다음 반복을 시작해요.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // 짝수일 때는 루프의 나머지를 건너뛰어요.
  }
  // 루프의 나머지...
}
```
