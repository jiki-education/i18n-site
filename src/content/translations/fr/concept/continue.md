---
lang: "fr"
type: "concept"
slug: "continue"
title: "Continue"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/concepts/continue/page.md"
en_md5: "6c3f7483826e27d44d6c404cc9f621dd"
governance_sha: "84303b0"
content_version: "54c3ec2dcfc6"
published_at: "2026-08-08"
---

Il arrive parfois qu'on veuille sauter une itération précise d'une boucle plutôt que d'en sortir complètement. Imagine qu'on veuille agir uniquement sur les nombres impairs.

On aimerait pouvoir dire : si `i` (le compteur de la boucle) est impair, ne lance pas la boucle cette fois-ci.

Mais on ne veut pas sortir complètement de la boucle. On veut juste sauter cette itération, puis passer à la suivante.

Et pour ça, il existe un autre mot-clé : `continue`.

Quand Jiki voit `continue`, il retourne directement en haut de la boucle pour l'itération suivante. Ainsi, dans une boucle for-of, s'il voit `continue`, il passe à l'élément suivant du tableau.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Saute le reste de la boucle pour "something"
  }
  // Le reste de la boucle...
}
```

Dans une boucle for, il passe par l'incrémentation `i++`, puis démarre l'itération suivante.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Saute le reste de la boucle pour les nombres pairs
  }
  // Le reste de la boucle...
}
```
