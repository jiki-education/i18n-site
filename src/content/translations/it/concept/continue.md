---
lang: "it"
type: "concept"
slug: "continue"
title: "La parola chiave `continue`"
status: "published"
source_repo: "i18n"
source_path: "locales/it/curriculum/concepts/continue/page.md"
en_md5: "6c3f7483826e27d44d6c404cc9f621dd"
governance_sha: "3d354c0"
content_version: "cdcbb555ef5f"
published_at: "2026-08-10"
---

Ci sono situazioni in cui potremmo voler saltare un'iterazione specifica di un ciclo invece di uscirne. Immaginiamo di voler fare qualcosa solo con i numeri dispari.

Vogliamo poter dire che se `i` (l'indice del ciclo) è dispari, non deve eseguire il ciclo questa volta.

Ma non vogliamo uscire completamente dal ciclo. Vogliamo solo saltare questa singola iterazione e poi passare alla successiva.

E per questo, abbiamo un'altra parola chiave: `continue`.

Quando Jiki vede `continue`, torna all'inizio del ciclo per l'iterazione successiva. Quindi in un ciclo `for-of`, quando vede `continue`, passa all'elemento successivo della lista.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Salta il resto del ciclo per "something"
  }
  // Resto del ciclo...
}
```

In un ciclo `for`, esegue l'incremento di `i++` e poi avvia l'iterazione successiva.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Salta il resto del ciclo per i numeri pari
  }
  // Resto del ciclo...
}
```
