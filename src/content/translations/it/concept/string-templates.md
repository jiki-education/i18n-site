---
lang: "it"
type: "concept"
slug: "string-templates"
title: "Stringhe interpolate"
status: "published"
source_repo: "i18n"
source_path: "locales/it/curriculum/concepts/string-templates/page.md"
en_md5: "7fd0e09ac3b32db5f159f8e772872104"
governance_sha: "4be0456"
content_version: "47d3c6e50172"
published_at: "2026-08-10"
forum_topic_id: 1210
---

Possiamo usare le stringhe interpolate (_template literals_ in inglese) per inserire valori dinamici come variabili o espressioni all'interno di una stringa.

Quindi, invece di concatenare più stringhe, possiamo usare una singola stringa-modello che contiene dei punti in cui inserire valori dinamici, come variabili o espressioni.

Per farlo, usiamo i backtick invece delle virgolette.

I backtick sono apici inversi, come suggerisce il nome, ma è probabile che tu non li abbia mai usati prima, quindi devi trovare il tasto giusto sulla tastiera.

Li usiamo per creare una stringa-modello che contiene dei punti in cui inserire valori dinamici, come variabili o espressioni. E poi, per inserire un valore dinamico nel modello, usiamo una sintassi particolare. È fatta di dollari e parentesi graffe. Quindi, per esempio, per ottenere lo stesso effetto di `"hello " + name` che abbiamo appena visto con la concatenazione, potremmo scrivere:

```javascript
`hello ${name}` // "ciao Jeremy" o "ciao Jiki"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/string-templates/jiki-name-box.webp"
  alt="Jiki che tiene in mano una scatola con l'etichetta 'nome', il valore che viene inserito nel modello"
  width="207"
  height="400"
/>

E questo produce esattamente lo stesso risultato della concatenazione delle stringhe.

Quando hai più valori da inserire nella stessa stringa-modello, questo metodo può essere molto più efficiente.

All'inizio può sembrare strana, ma con un po' di pratica questa sintassi diventa naturale: non c'è nulla di complicato.
