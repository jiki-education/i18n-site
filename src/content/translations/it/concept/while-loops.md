---
lang: "it"
type: "concept"
slug: "while-loops"
title: "Cicli while"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/concepts/while-loops/source.md"
en_md5: "daef89c6551b1d1cbc0e58668fd368bc"
governance_sha: "6351e0e"
content_version: "a298b5948d2f"
published_at: "2026-08-02"
forum_topic_id: 989
---

Il prossimo ciclo da conoscere è il ciclo `while` (mentre).

Questo dice: "Finché una certa condizione è vera, esegui il ciclo." Per esempio, potremmo avere una regola per cui in Space Invaders si può sparare solo cinque volte. Quindi qui avremmo un ciclo che dice: finché il numero di colpi è minore di cinque, esegui un ciclo che permette di continuare a giocare.

```javascript
while (numShots < 5) {
  // spara all'alieno
  numShots++
}
```

Ogni volta che qualcuno spara, aumentiamo `numShots` di uno. Prima o poi arriveremo a cinque e il ciclo terminerà.

Ora, un problema dei cicli while è che è abbastanza facile avere bug che fanno sì che il ciclo non finisca mai. Questi si chiamano cicli infiniti (_infinite loops_ in inglese) e sono uno dei bug più comuni nei programmi.

Quando il tuo computer rallenta, le ventole iniziano a girare e tutto diventa rumoroso: spesso è perché qualcuno ha lasciato nel codice un ciclo infinito che non finisce mai.
