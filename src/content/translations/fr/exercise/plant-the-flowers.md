---
lang: "fr"
type: "exercise"
slug: "plant-the-flowers"
title: "Plante les fleurs"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/plant-the-flowers"
en_md5: "4cdf23fd99e55e08a5eece1751d712e2"
governance_sha: "15e00d5"
content_version: "b0d163a33107"
published_at: "2026-08-08"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"flowerCount","english":"Expected 9 flowers, but found {{got}}.","target":"On attendait 9 fleurs, mais on en a trouvé {{got}}."},{"key":"missingFlowerAt10","english":"Missing a flower at position 10.","target":"Il manque une fleur à la position 10."},{"key":"missingFlowerAt50","english":"Missing a flower at position 50.","target":"Il manque une fleur à la position 50."},{"key":"missingFlowerAt90","english":"Missing a flower at position 90.","target":"Il manque une fleur à la position 90."},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try to find a way to make it shorter.","target":"Ta solution comporte trop de lignes de code. Essaie de trouver un moyen de la raccourcir."}]},{"name":"tasks","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"Plante 9 fleurs"},{"key":"plantFlowers.description","english":"Use a variable and a repeat loop to plant 9 flowers at positions 10, 20, 30, ..., 90.","target":"Utilise une variable et une boucle `repeat` pour planter 9 fleurs aux positions 10, 20, 30, ..., 90."}]},{"name":"scenarios","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"Plante 9 fleurs"},{"key":"plantFlowers.description","english":"Plant flowers at positions 10, 20, 30, 40, 50, 60, 70, 80, and 90.","target":"Plante des fleurs aux positions 10, 20, 30, 40, 50, 60, 70, 80 et 90."}]},{"name":"hints","rows":[{"key":"stuck.question","english":"I'm totally stuck","target":"Je bloque complètement"},{"key":"stuck.answer","english":"Check the recent videos on how to use repeat loops and how to update variables to track state. They should tell you everything you need to know.","target":"Regarde les vidéos récentes sur l'utilisation des boucles `repeat` et sur la mise à jour des variables pour suivre un état. Elles devraient te dire tout ce qu'il faut savoir."}]},{"name":"functions","rows":[{"key":"plant.description","english":"Plants a flower at the given **position**.","target":"Plante une fleur à la **position** donnée."},{"key":"plant.category","english":"Gardening","target":"Jardinage"}]},{"name":"describers","rows":[{"key":"plant","english":"planted a flower at position ${arg1}","target":"a planté une fleur à la position ${arg1}"}]}]},{"heading":"Shared \"flower-planting\" messages","note":"Shared by every exercise in the flower-planting category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"positionNumber","english":"Position must be a number","target":"La position doit être un nombre"}]}]}]
---

Tu vas créer une machine pour planter des fleurs automatiquement.

Elle doit planter des fleurs sur la pelouse à intervalles réguliers de `10`. La première fleur doit donc être à la position `10`, la deuxième à la position `20`, et ainsi de suite.

Tu disposes d'une fonction `plant(position)` (planter) qui prend une position en entrée. Par exemple, `plant(10)` plante une fleur à la position 10.

Tu dois résoudre cet exercice en **5 lignes de code** : il te faudra donc trouver un moyen de ne pas simplement écrire `plant(10)`, `plant(20)`, etc.

Bonne chance !
