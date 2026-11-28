---
lang: "cs"
type: "concept"
slug: "break"
title: "Klíčové slovo `break`"
status: "published"
source_repo: "i18n"
source_path: "locales/cs/curriculum/concepts/break/page.md"
en_md5: "bd746b6c93016dcb2789bd26e38ab33a"
governance_sha: "a5ccff6a"
content_version: "50d292c24b87"
published_at: "2026-11-28"
---

Klíčové slovo `break` můžeš použít kdekoli v těle jakéhokoli cyklu.

Část mezi složenými závorkami, to je tělo cyklu. A když ho tam Jiki uvidí, okamžitě z cyklu vyskočí a přejde na kód, který je pod cyklem.

Takže když máme zadání, podle kterého se má cyklus spustit padesátkrát, ale chceme skončit, když uživatel vystřelí pětkrát, můžeme nahoře mít cyklus `for`, který počítá až k padesáti.

Uprostřed cyklu ale pak můžeme mít podmínku, která ověří, jestli uživatel už vystřelil pětkrát. Pokud ano, použijeme `break` a cyklus ukončíme.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // ukonči cyklus
  }
}
```
