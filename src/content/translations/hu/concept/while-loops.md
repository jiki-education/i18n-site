---
lang: "hu"
type: "concept"
slug: "while-loops"
title: "Amíg-ciklusok"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/concepts/while-loops/source.md"
en_md5: "daef89c6551b1d1cbc0e58668fd368bc"
governance_sha: "fe54e35"
content_version: "de6cbfd6fa02"
published_at: "2026-08-04"
---

A következő ciklus, amit meg kell ismerned, a `while` (amíg) ciklus.

Ez azt mondja: »Amíg egy feltétel teljesül, futtasd a ciklust.« Tehát lehet egy szabály, ami azt mondja, hogy a Space Invaders-ben csak ötször lőhetsz. Ezért lenne egy ciklusunk, ami azt mondja, nos, amíg a lövések száma kisebb, mint öt, futtassunk egy ciklust, ami lehetővé teszi, hogy valaki játsszon.

```javascript
while (numShots < 5) {
  // lövés az idegenre
  numShots++
}
```

Minden lövésnél megnöveljük a `numShots` értékét eggyel, és végül elérjük az ötöt, és a ciklus kilép.

Most az egyik probléma az amíg-ciklusokkal, hogy könnyen előfordulhatnak olyan bug-ok, amik miatt a ciklus soha nem ér véget. És ezeket végtelen ciklusoknak (_infinite loops_ angolul) nevezzük, és ezek a programok egyik leggyakoribb bug-jai.

Amikor a számítógéped lelassul, a ventilátorok felpörögnek, minden hangos lesz, ez gyakran azért van, mert valaki egy végtelen ciklust hagyott a kódjában, ami soha nem ér véget.
