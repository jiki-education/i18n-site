---
lang: "it"
type: "concept"
slug: "break"
title: "La parola chiave `break`"
status: "published"
source_repo: "i18n"
source_path: "locales/it/curriculum/concepts/break/page.md"
en_md5: "bd746b6c93016dcb2789bd26e38ab33a"
governance_sha: "1c9913c"
content_version: "e36a087906cd"
published_at: "2026-08-21"
forum_topic_id: 1305
---

La parola chiave `break` può essere usata in qualsiasi punto del corpo del ciclo.

Il codice racchiuso tra le parentesi graffe è il corpo del ciclo. Quando Jiki incontra `break`, interrompe immediatamente il ciclo ed esegue il codice che si trova dopo.

Quindi, se abbiamo un vincolo che dice di eseguire il ciclo 50 volte, ma vogliamo fermarlo quando l'utente ha sparato cinque volte, possiamo iniziare con un ciclo `for` che conta fino a 50.

Dopo all'interno del corpo del ciclo, possiamo aggiungere una condizione che controlla se l'utente ha sparato cinque volte e, in tal caso, usare `break` per uscire dal ciclo in anticipo.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // esci dal ciclo
  }
}
```
