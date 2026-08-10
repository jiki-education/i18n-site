---
lang: "es-419"
type: "concept"
slug: "while-loops"
title: "Cómo funcionan los bucles `while`"
status: "published"
source_repo: "i18n"
source_path: "locales/es-419/curriculum/concepts/while-loops/page.md"
en_md5: "aeceed2abb1434307cfd7c9a0df55c81"
governance_sha: "494ce4b"
content_version: "51b471634c7c"
published_at: "2026-08-10"
forum_topic_id: 1247
---

El siguiente bucle que debes conocer es el bucle `while` (mientras).

Esto significa: «Mientras se cumpla una condición, ejecuta el bucle». Así que podríamos tener una regla que diga que solo puedes disparar cinco veces en Space Invaders. Entonces tendríamos un bucle que diga: mientras el número de disparos sea menor que cinco, ejecuta un bucle que permita jugar.

```javascript
while (numShots < 5) {
  // disparar a un alien
  numShots++
}
```

Cada vez que alguien dispara, aumentamos `numShots` en uno, y al final llegamos a cinco y el bucle termina.

Ahora, un problema con los bucles `while` es que es muy fácil tener errores que hagan que el bucle nunca termine. Estos se llaman bucles infinitos (_infinite loops_ en inglés), y son uno de los errores más comunes en los programas.

Cuando tu computadora se pone lenta, los ventiladores empiezan a girar, todo se vuelve ruidoso, a menudo es porque alguien dejó un bucle infinito que nunca termina en su código.
