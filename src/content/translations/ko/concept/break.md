---
lang: "ko"
type: "concept"
slug: "break"
title: "`break` 키워드"
status: "published"
source_repo: "i18n"
source_path: "locales/ko/curriculum/concepts/break/page.md"
en_md5: "30148766de67ae467ab1a4852ad35895"
governance_sha: "3d354c0"
content_version: "b4893678e3a0"
published_at: "2026-08-10"
---

`break` 키워드는 어떤 루프의 본문 안에서도 어디서든 사용할 수 있어요.

중괄호 안쪽이 바로 루프의 본문이에요. Jiki는 그 본문 안에서 `break`를 만나면 곧바로 루프를 빠져나와 루프 아래의 코드로 넘어가요.

예를 들어, '이 루프를 50번 실행하세요'라는 제약이 있는데, 사용자가 다섯 번 발사하면 멈추고 싶다면, 맨 위에 50까지 세는 `for` 루프를 둘 수 있어요.

그리고 루프 중간에 조건을 넣어서 사용자가 다섯 번 발사했는지 확인하고, 그렇다면 루프를 중단하기 위해 `break`(중단)을 사용해요.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // 루프 종료
  }
}
```
