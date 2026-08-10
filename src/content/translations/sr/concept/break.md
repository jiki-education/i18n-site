---
lang: "sr"
type: "concept"
slug: "break"
title: "Ključna reč `break`"
status: "published"
source_repo: "i18n"
source_path: "locales/sr/curriculum/concepts/break/page.md"
en_md5: "30148766de67ae467ab1a4852ad35895"
governance_sha: "3d354c0"
content_version: "1af12b2a839e"
published_at: "2026-08-10"
---

Ključna reč `break` može da se koristi bilo gde u telu bilo koje petlje.

Deo između vitičastih zagrada, to je telo. I kada ga Jiki vidi, odmah će izaći iz petlje i preći na sledeći kod ispod petlje.

Zato, ako imamo ograničenje da se ova petlja izvrši 50 puta, ali želimo da se zaustavimo ako je korisnik pucao pet puta, mogli bismo da imamo `for` petlju na početku koja broji do 50.

Ali zatim bismo mogli da imamo uslov u sredini petlje koji proverava da li je korisnik pucao pet puta, i ako jeste, prekinemo (engl. _break_) petlju.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // izađi iz petlje
  }
}
```
