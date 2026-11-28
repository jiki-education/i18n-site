---
lang: "pl"
type: "concept"
slug: "continue"
title: "Słowo kluczowe `continue`"
status: "published"
source_repo: "i18n"
source_path: "locales/pl/curriculum/concepts/continue/page.md"
en_md5: "6cd21a2f25c493f61d000f865014709d"
governance_sha: "a5ccff6a"
content_version: "9ae200d37376"
published_at: "2026-11-28"
---

Czasami chcemy pominąć konkretną iterację pętli, zamiast wychodzić z niej całkiem. Wyobraź sobie, że chcemy coś zrobić tylko dla liczb nieparzystych.

Chcemy móc powiedzieć: jeśli `i` (licznik pętli) jest nieparzyste, nie wykonuj tej iteracji.

Ale nie chcemy całkiem wychodzić z pętli. Chcemy tylko pominąć tę jedną iterację i spojrzeć na następną.

I właśnie do tego mamy kolejne słowo kluczowe: `continue`.

Kiedy Jiki widzi `continue`, po prostu wraca na początek pętli i zaczyna kolejną iterację. Więc w pętli `for...of`, jeśli natrafi na `continue`, przechodzi do kolejnego elementu tablicy.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Pomija resztę pętli dla "something"
  }
  // Reszta pętli...
}
```

W pętli `for` trafia na inkrementację `i++` i zaczyna kolejną iterację.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Pomija resztę pętli dla liczb parzystych
  }
  // Reszta pętli...
}
```
