---
lang: "sr"
type: "concept"
slug: "continue"
title: "Ključna reč `continue`"
status: "published"
source_repo: "i18n"
source_path: "locales/sr/curriculum/concepts/continue/page.md"
en_md5: "6cd21a2f25c493f61d000f865014709d"
governance_sha: "45861691"
content_version: "fc296bf369eb"
published_at: "2026-08-24"
---

Ponekad želimo da preskočimo određenu iteraciju petlje umesto da iz nje potpuno izađemo. Zamisli da hoćemo da radimo samo sa neparnim brojevima.

Hoćemo da možemo da kažemo: ako je `i` (indeks) neparan, nemoj da pokrećeš petlju ovaj put.

Ali ne želimo da potpuno izađemo iz petlje. Samo želimo da preskočimo ovu jednu iteraciju i onda pogledamo sledeću.

Za to imamo još jednu ključnu reč koja se zove `continue`.

Kada Džiki vidi `continue`, on samo skoči nazad na vrh petlje i započne sledeću iteraciju. Tako u `for-of` petlji, ako vidi `continue`, pređe na sledeći element u nizu.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Preskače ostatak petlje za "something"
  }
  // Ostatak petlje...
}
```

U `for` petlji, Džiki nailazi na uvećanje `i++`, a onda započinje sledeću iteraciju.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Preskače ostatak petlje za parne brojeve
  }
  // Ostatak petlje...
}
```
