---
lang: "hu"
type: "concept"
slug: "break"
title: "A `break` kulcsszó"
status: "published"
source_repo: "i18n"
source_path: "locales/hu/curriculum/concepts/break/page.md"
en_md5: "30148766de67ae467ab1a4852ad35895"
governance_sha: "3d354c0"
content_version: "3e54dd7ee13b"
published_at: "2026-08-10"
---

A `break` kulcsszót bármelyik ciklus törzsében bárhol használhatod.

A kapcsos zárójelek (`{}`) közötti rész a ciklus törzse. Amikor Jiki meglát egy `break`-et, azonnal kilép a ciklusból, és azzal a kóddal folytatja, ami a ciklus alatt következik.

Tegyük fel, hogy van egy megkötésünk: a ciklusnak 50-szer kell lefutnia, de meg akarunk állni, ha a játékos már ötször lőtt. Ilyenkor a tetejére írhatunk egy `for` ciklust, ami `i = 0`-tól addig megy, amíg az `i` kisebb, mint 50.

A ciklus közepére viszont betehetünk egy feltételt, ami azt mondja: ha `numShots >= 5`, akkor jöjjön a `break` (szakítsd meg), vagyis a ciklus álljon le.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // kilépés a ciklusból
  }
}
```
