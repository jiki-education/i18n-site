---
lang: "fr"
type: "exercise"
slug: "stars"
title: "Étoiles"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/stars"
en_md5: "4f2a6c0db0b364b0292f57efa1d55751"
governance_sha: "b951b19"
content_version: "847729deee00"
published_at: "2026-08-16"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createStarsFunction.name","english":"Create stars function","target":"Crée la fonction stars"},{"key":"createStarsFunction.description","english":"Write a stars function that takes a count and returns a list of strings, where each string has an increasing number of stars. For example, stars(3) returns [\"*\", \"**\", \"***\"].","target":"Écris une fonction stars qui prend un nombre et renvoie un tableau de strings, où chaque string contient un nombre croissant d'étoiles. Par exemple, stars(3) renvoie [\"*\", \"**\", \"***\"]."}]},{"name":"scenarios","rows":[{"key":"count0.name","english":"Count is 0","target":"Le nombre est 0"},{"key":"count0.description","english":"Zero stars returns an empty list.","target":"Zéro étoile renvoie un tableau vide."},{"key":"count1.name","english":"Count is 1","target":"Le nombre est 1"},{"key":"count1.description","english":"One star returns a list with a single star string.","target":"Une étoile renvoie un tableau avec une seule string d'étoile."},{"key":"count3.name","english":"Count is 3","target":"Le nombre est 3"},{"key":"count3.description","english":"Three stars returns three strings with increasing stars.","target":"Trois étoiles renvoient trois strings avec de plus en plus d'étoiles."},{"key":"count5.name","english":"Count is 5","target":"Le nombre est 5"},{"key":"count5.description","english":"Five stars returns five strings with increasing stars.","target":"Cinq étoiles renvoient cinq strings avec de plus en plus d'étoiles."}]},{"name":"hints","rows":[{"key":"shapeOfAnswer.question","english":"What's the shape of my answer?","target":"Quelle forme doit avoir ma réponse ?"},{"key":"shapeOfAnswer.answer","english":"A list of strings, each one a bit longer than the last. Start with an empty list and an empty string. Each iteration, the string grows by one star, and the new string goes into the list.","target":"Un tableau de strings, chacune un peu plus longue que la précédente. Commence avec un tableau vide et une string vide. À chaque itération, la string grandit d'une étoile, et la nouvelle string va dans le tableau."},{"key":"loopCount.question","english":"How do I run the loop the right number of times?","target":"Comment faire tourner la boucle le bon nombre de fois ?"},{"key":"loopCount.answer","english":"A `repeat(n)` loop matches the input directly. If `n` is 3, you go around 3 times.","target":"Une boucle `repeat(n)` correspond directement à l'entrée. Si `n` vaut 3, tu fais 3 tours."},{"key":"insideLoop.question","english":"What happens inside the loop?","target":"Que se passe-t-il dans la boucle ?"},{"key":"insideLoop.answer","english":"Two steps. First, append a star onto your growing string using concatenation with `+`. Second, `push()` the growing string onto your list. Order matters here. Do the concatenation first, so the first thing pushed is `\"*\"`, not the empty string.","target":"Deux étapes. D'abord, ajoute une étoile à la string qui grandit grâce à la concaténation avec `+`. Ensuite, ajoute cette string au tableau avec `push()`. L'ordre compte ici : fais la concaténation en premier, pour que la première string ajoutée au tableau soit `\"*\"`, et non la string vide."}]},{"name":"functions","rows":[{"key":"push.description","english":"Add an item to the end of a list (provided by level stdlib)","target":"Ajoute un élément à la fin d'un tableau (fourni par la bibliothèque standard du niveau)"},{"key":"push.category","english":"List Operations","target":"Opérations sur les tableaux"}]}]}]
---

Tu vas construire un petit générateur de motifs en mode texte. À partir d'un nombre, crée un tableau de _strings_ où chaque _string_ contient un nombre croissant d'étoiles.

Par exemple, pour le nombre 3, tu dois renvoyer :

```
["*", "**", "***"]
```

Le premier élément a 1 étoile, le deuxième en a 2, et ainsi de suite jusqu'au nombre demandé.

Si le nombre est 0, renvoie un tableau vide.

Crée une fonction appelée `stars` (étoiles) qui prend une entrée, le nombre demandé, et renvoie le tableau de _strings_ d'étoiles.
