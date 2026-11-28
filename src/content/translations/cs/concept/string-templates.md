---
lang: "cs"
type: "concept"
slug: "string-templates"
title: "Šablonové řetězce"
status: "published"
source_repo: "i18n"
source_path: "locales/cs/curriculum/concepts/string-templates/page.md"
en_md5: "7fd0e09ac3b32db5f159f8e772872104"
governance_sha: "a5ccff6a"
content_version: "1daf89b60892"
published_at: "2026-11-28"
---

Pomocí takzvaných šablonových literálů (anglicky *template literals*) můžeme vkládat řetězce do jiných řetězců.

Takže místo toho, abychom řetězce spojovali dohromady, můžeme mít řetězec nebo šablonu, která má uvnitř místa pro další řetězce.

K tomu použijeme místo uvozovek obrácené apostrofy (anglicky *backticks*).

Obrácené apostrofy vypadají jako obrácené čárky, jak už název napovídá. Možná je ale ještě neznáš, takže budeš muset najít ten správný klíč na klávesnici.

Pomocí nich vytvoříme šablonu, která může obsahovat další řetězce. A když do šablony chceme vložit řetězec, použijeme další podivnou syntaxi, a to dolar a složené závorky. Takže stejnou věc, jakou jsme právě viděli u spojování, tedy `"hello " + name`, můžeme napsat takhle:

```javascript
`hello ${name}` // "hello Jeremy" nebo "hello Jiki"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/string-templates/jiki-name-box.webp"
  alt="Jiki drží krabici s nápisem name, hodnotu, která se vloží do šablony"
  width="207"
  height="400"
/>

A dělá to přesně to samé, jako když řetězce spojujeme dohromady.

Ale když máš víc řetězců, které je potřeba poskládat na jedno místo, může to být mnohem efektivnější.

Chvíli ti potrvá, než si na tuhle konkrétní syntaxi zvykneš, ale nic tak složitého na ní vlastně není.
