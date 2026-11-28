---
lang: "ca"
type: "concept"
slug: "string-templates"
title: "Plantilles de cordes"
status: "published"
source_repo: "i18n"
source_path: "locales/ca/curriculum/concepts/string-templates/page.md"
en_md5: "7fd0e09ac3b32db5f159f8e772872104"
governance_sha: "a5ccff6a"
content_version: "5aeec7e393cc"
published_at: "2026-11-28"
---

Podem fer servir una cosa que s'anomena les plantilles de corda (_template literals_ en anglès) per inserir cordes dins d'altres cordes.

Així, en lloc de sumar cordes, podem tenir una corda o una plantilla que té espais a dins per a altres cordes.

Per fer-ho, fem servir accents oberts (_backticks_ en anglès) en lloc de cometes.

Els accents oberts són accents inclinats cap enrere, com el nom anglès suggereix, però és molt possible que no els hagis fet servir mai, així que hauràs de trobar la tecla correcta al teu teclat.

Els fem servir per crear una plantilla que pot contenir altres cordes. I després, per inserir una corda dins la plantilla, fem servir una altra sintaxi estranya amb signes de dòlar i claus. Així, per exemple, per aconseguir el mateix que acabem de veure amb la concatenació, `"hello " + name`, podríem escriure:

```javascript
`hello ${name}` // "hello Jeremy" o "hello Jiki"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/string-templates/jiki-name-box.webp"
  alt="el Jiki sostenint una capsa amb l'etiqueta name, el valor que s'insereix dins de la plantilla"
  width="207"
  height="400"
/>

I això fa exactament el mateix que ajuntar les cordes.

Però quan tens diverses cordes que cal encaixar totes en un sol lloc, això pot ser molt més eficient.

Et costarà una mica acostumar-te a aquesta sintaxi exacta, però no té res de gaire complicat.
