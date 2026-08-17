---
lang: "it"
type: "concept"
slug: "while-loops"
title: "Capire i cicli `while`"
status: "published"
source_repo: "i18n"
source_path: "locales/it/curriculum/concepts/while-loops/page.md"
en_md5: "aeceed2abb1434307cfd7c9a0df55c81"
governance_sha: "9ad9247"
content_version: "d561c8f5abb8"
published_at: "2026-08-17"
forum_topic_id: 989
---

Il prossimo ciclo da conoscere è il ciclo `while` (mentre).

Questo dice: "Finché una certa condizione è vera, esegui il ciclo." Per esempio, potremmo avere una regola per cui in Space Invaders si può sparare solo cinque volte. In questo caso avremmo un ciclo che dice: finché il numero di colpi è minore di cinque, esegui un ciclo che permette di continuare a giocare.

```javascript
while (numShots < 5) {
  // spara all'alieno
  numShots++
}
```

Ogni volta che qualcuno spara, aumentiamo `numShots` di uno. Prima o poi arriveremo a cinque e il ciclo terminerà.

Ora, un problema dei cicli while è che è abbastanza facile avere bug che fanno sì che il ciclo non finisca mai. Questi si chiamano cicli infiniti (_infinite loops_ in inglese) e sono uno dei bug più comuni nei programmi.

Quando il tuo computer rallenta, le ventole iniziano a girare e tutto diventa rumoroso: spesso è perché qualcuno ha lasciato nel codice un ciclo infinito che non finisce mai.
