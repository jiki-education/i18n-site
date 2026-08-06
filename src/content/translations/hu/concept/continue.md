---
lang: "hu"
type: "concept"
slug: "continue"
title: "Continue"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/concepts/continue/source.md"
en_md5: "6c3f7483826e27d44d6c404cc9f621dd"
governance_sha: "c80036b"
content_version: "1168dfdfd4f5"
published_at: "2026-08-06"
---

Néha előfordul, hogy egy ciklusnak csak egy adott iterációját szeretnénk kihagyni, nem pedig teljesen kilépni belőle. Képzeld el, hogy csak a páratlan számokkal akarunk csinálni valamit.

Azt szeretnénk tudni mondani, hogy ha az `i` (a ciklusváltozó) páratlan, akkor ezúttal ne fusson le a ciklus.

De nem akarunk teljesen kilépni a ciklusból. Csak ezt az egyetlen iterációt szeretnénk kihagyni, és utána máris a következőt nézni.

Erre való egy újabb kulcsszó: a `continue`.

Amikor Jiki meglátja a `continue`-t, egyszerűen visszaugrik a ciklus elejére, a következő iterációhoz. Egy `for-of` ciklusban tehát, ha `continue`-t lát, a lista következő elemére lép.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // A "something" esetén kihagyja a ciklus hátralévő részét
  }
  // A ciklus többi része...
}
```

Egy `for` ciklusban pedig eljut az `i++` növeléshez, majd elkezdi a következő iterációt.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Páros számoknál kihagyja a ciklus hátralévő részét
  }
  // A ciklus többi része...
}
```
