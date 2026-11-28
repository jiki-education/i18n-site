---
lang: "pl"
type: "concept"
slug: "while-loops"
title: "Zrozumieć pętle `while`"
status: "published"
source_repo: "i18n"
source_path: "locales/pl/curriculum/concepts/while-loops/page.md"
en_md5: "aeceed2abb1434307cfd7c9a0df55c81"
governance_sha: "a5ccff6a"
content_version: "8a5f8f867686"
published_at: "2026-11-28"
---

Następna pętla, którą warto poznać, to pętla `while` (czyli „dopóki”).

Ta pętla mówi: „Dopóki jakiś warunek jest spełniony, wykonuj pętlę”. Załóżmy więc, że mamy zasadę: w Space Invaders można strzelać tylko pięć razy. Mielibyśmy wtedy pętlę, która mówi: dopóki liczba strzałów jest mniejsza niż pięć, wykonuj pętlę pozwalającą grać.

```javascript
while (numShots < 5) {
  // zestrzel obcego
  numShots++
}
```

Za każdym razem, gdy ktoś strzela, zwiększamy `numShots` o jeden. W końcu osiągniemy pięć i pętla się zakończy.

Pętle `while` mają jednak pewien problem: bardzo łatwo o buga, przez którego pętla nigdy się nie kończy. Takie pętle nazywamy pętlami nieskończonymi (ang. _infinite loops_) i są one jednym z najczęstszych bugów w programach.

Kiedy komputer zwalnia, wentylatory zaczynają się kręcić, a wszystko staje się głośne, to często dlatego, że ktoś zostawił w kodzie pętlę nieskończoną, która nigdy się nie kończy.
