---
lang: "fr"
type: "concept"
slug: "while-loops"
title: "Les boucles while"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/concepts/while-loops/source.md"
en_md5: "daef89c6551b1d1cbc0e58668fd368bc"
governance_sha: "fa246be"
content_version: "afb2086e3c93"
published_at: "2026-08-01"
---

La prochaine boucle à connaître est la boucle `while` (tant que).

Elle dit : « Tant qu'une certaine condition est vraie, exécute la boucle. » Par exemple, on pourrait avoir une règle qui dit qu'on ne peut tirer que cinq fois dans Space Invaders. On aurait donc ici une boucle qui dit : tant que le nombre de tirs est inférieur à cinq, exécute une boucle qui permet de continuer à jouer.

```javascript
while (numShots < 5) {
  // tirer sur l'alien
  numShots++
}
```

Chaque fois que quelqu'un tire, on augmente `numShots` de un, si bien qu'on finira par atteindre cinq et que la boucle s'arrêtera.

Cela dit, les boucles while posent un problème : il est assez facile d'introduire des bugs qui font que la boucle ne se termine jamais. On appelle cela des boucles infinies (_infinite loops_ en anglais), et c'est l'un des bugs les plus courants dans les programmes.

Quand ton ordinateur ralentit, que les ventilateurs se mettent à tourner et que tout devient bruyant, c'est souvent parce que quelqu'un a laissé dans son code une boucle infinie qui ne se termine jamais.
