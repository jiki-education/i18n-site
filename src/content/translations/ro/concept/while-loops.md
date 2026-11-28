---
lang: "ro"
type: "concept"
slug: "while-loops"
title: "Înțelegerea buclelor `while`"
status: "published"
source_repo: "i18n"
source_path: "locales/ro/curriculum/concepts/while-loops/page.md"
en_md5: "aeceed2abb1434307cfd7c9a0df55c81"
governance_sha: "a5ccff6a"
content_version: "5b3a9c64fa95"
published_at: "2026-11-28"
---

Următoarea buclă despre care trebuie să afli este bucla while.

Asta spune: „Cât timp o condiție este îndeplinită, rulează bucla.” Așa că am putea avea o regulă care spune că poți trage doar de cinci ori în Space Invaders. Atunci am avea aici o buclă care spune: ei bine, cât timp numărul de focuri este mai mic decât cinci, rulează o buclă care îi permite cuiva să joace jocul.

```javascript
while (numShots < 5) {
  // trage în extraterestru
  numShots++
}
```

De fiecare dată când cineva trage, creștem `numShots` cu unu, iar într-un final ajungem la cinci și bucla se oprește.

Acum, o problemă cu buclele while este că e destul de ușor să ai buguri din cauza cărora bucla nu se termină niciodată. Și acestea se numesc bucle infinite (engl. _infinite loops_), iar ele sunt printre cele mai frecvente buguri din programe.

Când calculatorul tău devine lent, ventilatoarele încep să se învârtă, totul devine zgomotos, de multe ori asta se întâmplă pentru că cineva a lăsat în codul lui o buclă infinită care nu se termină niciodată.
