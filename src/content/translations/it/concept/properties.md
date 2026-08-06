---
lang: "it"
type: "concept"
slug: "properties"
title: "Proprietà"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/concepts/properties/source.md"
en_md5: "0634cd72388bef118e9dd22131a3c1cd"
governance_sha: "c80036b"
content_version: "e19ecc6103be"
published_at: "2026-08-06"
---

Finora, quando abbiamo pensato a stringhe e numeri, li abbiamo considerati oggetti piuttosto statici.

E anche se lo sono, hanno anche molte funzionalità incorporate che Jiki può usare.

Ci sono due tipi di capacità che vedremo: le proprietà e i metodi.

Le proprietà sono fatti che possiamo chiedere a Jiki di raccontarci sulle cose. Per esempio, le stringhe hanno una proprietà chiamata `length` (lunghezza), che Jiki può usare per dirci quanto è lunga una stringa.

Quindi, invece di dover scorrere tutte le lettere per capire quanto è grande una stringa, possiamo semplicemente chiedere a Jiki di dircelo.

E per farlo, usiamo una nuova forma di sintassi, un punto.

Per esempio, se abbiamo la stringa `"Jeremy"` e vogliamo ottenere la sua lunghezza, possiamo scrivere:

```javascript
"Jeremy".length // 6
```

Quando Jiki crea una stringa, conta le lettere e, più o meno, scrive un numero nell'angolo con quante ce ne sono.

<img
  class="concept-image"
  src="/static/images/concept-assets/properties/jiki-counting-letters.webp"
  alt="Jiki che conta le lettere della stringa Jeremy e scrive il numero nell'angolo"
  width="359"
  height="400"
/>

E poi quando usiamo la proprietà `length`, Jiki va semplicemente a controllare qual era quel numero. Quindi nell'esempio `"Jeremy".length`, quando Jiki crea la stringa `"Jeremy"`, conta le lettere, scrive il numero sei nell'angolo, e poi quando scriviamo `"Jeremy".length`, lui va a controllarlo. Quindi puoi pensare alle proprietà come a dei fatti su quella cosa.
