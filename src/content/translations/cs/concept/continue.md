---
lang: "cs"
type: "concept"
slug: "continue"
title: "Klíčové slovo `continue`"
status: "published"
source_repo: "i18n"
source_path: "locales/cs/curriculum/concepts/continue/page.md"
en_md5: "6cd21a2f25c493f61d000f865014709d"
governance_sha: "a5ccff6a"
content_version: "0a17cd1f8c32"
published_at: "2026-11-28"
---

Někdy chceme přeskočit konkrétní průchod cyklem, místo abychom z něj úplně vyskočili. Představ si, že chceme pracovat jen s lichými čísly.

Chceme umět říct: když je `i` (počítadlo) liché, tenhle cyklus se tentokrát neprovede.

Ale nechceme z cyklu úplně vyskočit. Chceme přeskočit jen tenhle jediný průchod a pak se podívat na další.

A právě na to máme další klíčové slovo: `continue`.

Když Jiki uvidí `continue`, prostě skočí zpátky na začátek cyklu a jde na další průchod. Takže v cyklu for-of, když uvidí `continue`, přesune se na další položku v poli.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Přeskočí zbytek cyklu pro "something"
  }
  // Zbytek cyklu...
}
```

V cyklu `for` narazí na zvýšení o jedna v `i++` a pak začne další průchod.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Přeskočí zbytek cyklu pro sudá čísla
  }
  // Zbytek cyklu...
}
```
