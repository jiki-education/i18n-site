---
lang: "hu"
type: "concept"
slug: "while-loops"
title: "Amíg-ciklusok"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/concepts/while-loops/source.md"
en_md5: "daef89c6551b1d1cbc0e58668fd368bc"
governance_sha: "36f01d3"
content_version: "c38c0205bbff"
published_at: "2026-08-05"
forum_topic_id: 1216
---

A következő ciklus, amit meg kell ismerned, a `while` (amíg) ciklus.

Ez azt mondja: »Amíg egy feltétel teljesül, futtasd a ciklust.« Például létezhet egy szabály, ami azt mondja, hogy a Space Invaders-ben csak ötször lőhetsz. Ekkor lenne egy ciklusunk, ami azt mondja, nos, amíg a lövések száma kisebb, mint öt, futtassuk a ciklust, ami lehetővé teszi, hogy valaki játsszon.

```javascript
while (numShots < 5) {
  // lövés az űrlényre
  numShots++
}
```

Minden lövésnél megnöveljük a `numShots` értékét eggyel, és végül elérjük az ötöt, és a ciklus kilép.

Most az egyik probléma az amíg-ciklusokkal, hogy könnyen előfordulhatnak olyan bug-ok, amik miatt a ciklus soha nem ér véget. És ezeket végtelen ciklusoknak (_infinite loops_ angolul) nevezzük, és ezek a programok egyik leggyakoribb bug-jai.

Amikor a számítógéped lelassul, a ventilátorok felpörögnek, minden hangos lesz, ez gyakran azért van, mert valaki egy végtelen ciklust hagyott a kódjában, ami soha nem ér véget.
