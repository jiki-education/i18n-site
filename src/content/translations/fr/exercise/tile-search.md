---
lang: "fr"
type: "exercise"
slug: "tile-search"
title: "Recherche de jeton"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/tile-search"
en_md5: "964730f77d4f532aa178b26e5504da86"
governance_sha: "b951b19"
content_version: "91e98e745017"
published_at: "2026-08-16"
forum_topic_id: 1627
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"Ta solution contient trop de lignes de code. Peux-tu la raccourcir ?"}]},{"name":"tasks","rows":[{"key":"searchForTile.name","english":"Search for a Tile","target":"Cherche un jeton"},{"key":"searchForTile.description","english":"Write a function that checks whether a specific letter tile is in the rack. Return true if found, false if not.","target":"Écris une fonction qui vérifie si le jeton d'une lettre précise se trouve sur le chevalet. Renvoie `true` si tu la trouves, et `false` dans le cas contraire."},{"key":"solveInEightLines.name","english":"Solve in 8 lines of code","target":"Résous en 8 lignes de code"},{"key":"solveInEightLines.description","english":"Can you solve this exercise with only 8 lines of code?","target":"Peux-tu résoudre cet exercice en seulement 8 lignes de code ?"}]},{"name":"scenarios","rows":[{"key":"letterFoundAtStart.name","english":"Letter at the start","target":"Lettre au début"},{"key":"letterFoundAtStart.description","english":"The letter is the first tile in the rack.","target":"La lettre est le premier jeton du chevalet."},{"key":"letterFoundInMiddle.name","english":"Letter in the middle","target":"Lettre au milieu"},{"key":"letterFoundInMiddle.description","english":"The letter is in the middle of the rack.","target":"La lettre se trouve au milieu du chevalet."},{"key":"letterFoundAtEnd.name","english":"Letter at the end","target":"Lettre à la fin"},{"key":"letterFoundAtEnd.description","english":"The letter is the last tile in the rack.","target":"La lettre est le dernier jeton du chevalet."},{"key":"letterNotFound.name","english":"Letter not found","target":"Lettre introuvable"},{"key":"letterNotFound.description","english":"The letter isn't in the rack.","target":"La lettre n'est pas sur le chevalet."},{"key":"emptyRack.name","english":"Empty rack","target":"Chevalet vide"},{"key":"emptyRack.description","english":"An empty rack has no tiles to find.","target":"Un chevalet vide ne contient aucun jeton à trouver."},{"key":"duplicateLetters.name","english":"Rack with duplicates","target":"Chevalet avec doublons"},{"key":"duplicateLetters.description","english":"The letter appears among duplicate tiles.","target":"La lettre apparaît parmi des jetons en double."},{"key":"singleTileFound.name","english":"Single tile found","target":"Jeton unique trouvé"},{"key":"singleTileFound.description","english":"A rack with one tile that matches.","target":"Un chevalet avec un seul jeton, qui correspond."},{"key":"singleTileNotFound.name","english":"Single tile not found","target":"Jeton unique introuvable"},{"key":"singleTileNotFound.description","english":"A rack with one tile that doesn't match.","target":"Un chevalet avec un seul jeton, qui ne correspond pas."},{"key":"bonus1.name","english":"8 lines of code","target":"8 lignes de code"},{"key":"bonus1.description","english":"Solve the exercise with only 8 lines of code.","target":"Résous l'exercice en seulement 8 lignes de code."}]},{"name":"hints","rows":[{"key":"byHand.question","english":"How would I do this by hand?","target":"Comment est-ce que je ferais ça à la main ?"},{"key":"byHand.answer","english":"You'd go through the haystack one letter at a time, comparing each to the needle. As soon as you found a match you'd stop. If you got to the end without a match, the needle isn't there.","target":"Tu parcours « la botte de foin » lettre par lettre en comparant chaque lettre à « l'aiguille ». Dès qu'une correspondance est trouvée, tu t'arrêtes. Si tu parviens au bout sans avoir trouvé de correspondance, c'est que « l'aiguille » n'y est pas."},{"key":"loopAndCompare.question","english":"How do I loop and compare?","target":"Comment boucler et comparer ?"},{"key":"loopAndCompare.answer","english":"A for-of loop gives you each letter of the string in turn. Inside, an if-statement compares the current letter to the needle.","target":"Une boucle `for-of` te donne chaque lettre de la string l'une après l'autre. À l'intérieur, une instruction `if` compare la lettre courante à « l'aiguille »."},{"key":"returnTrue.question","english":"When should I return true?","target":"Quand renvoyer `true` ?"},{"key":"returnTrue.answer","english":"As soon as you find a match. There's no point checking the remaining letters.","target":"Dès que tu trouves une correspondance. Inutile de vérifier les lettres restantes."},{"key":"returnFalse.question","english":"When should I return false?","target":"Quand renvoyer `false` ?"},{"key":"returnFalse.answer","english":"ONLY after the loop has finished without finding a match. A common mistake is putting `return false` inside the loop. That gives up after the very first non-matching letter, before you've checked the rest.","target":"SEULEMENT après la fin de la boucle, si aucune correspondance n'a été trouvée. Une erreur courante consiste à placer `return false` à l'intérieur de la boucle. La fonction abandonne alors dès la première lettre qui ne correspond pas, avant même d'avoir vérifié le reste."}]}]}]
---

Tu construis un bot qui joue au Scrabble. Avant de tenter de poser un mot, le bot doit vérifier s'il possède le jeton d'une lettre précise sur son chevalet.

Le chevalet est représenté par une _string_ de lettres (par exemple `"SCRAB"`).

Écris une fonction appelée `contains` (contient) qui prend deux entrées :

- `haystack` (botte de foin) : le chevalet de jetons, sous forme de _string_
- `needle` (aiguille) : la lettre à chercher

Renvoie `true` si la lettre se trouve sur le chevalet, ou `false` sinon.

Exemples :

- `contains("SCRAB", "A")` renvoie `true`
- `contains("SCRAB", "Z")` renvoie `false`
- `contains("", "A")` renvoie `false`
