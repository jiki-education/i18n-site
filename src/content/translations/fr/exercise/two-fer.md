---
lang: "fr"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/two-fer"
en_md5: "7e59867ebe08e4bd9b598aae4a8be76a"
governance_sha: "7a404b3"
content_version: "04e55594c27e"
published_at: "2026-08-01"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"Tu as utilisé plus de six lignes de code."}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"Créer la fonction two-fer"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"Écris une fonction twoFer qui prend un nom et renvoie 'One for [name], one for me.' Si aucun nom n'est donné (string vide), utilise 'you' à la place du nom."},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"Résoudre en six lignes de code"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"Est-ce que tu peux résoudre ça en seulement six lignes de code ?"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"Aucun nom donné"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"Aucun nom n'est donné, donc renvoie 'One for you, one for me.'"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"Le nom donné est Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"Elle s'appelle 'Alice', donc renvoie 'One for Alice, one for me.'"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"Le nom donné est Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"Il s'appelle 'Tom', donc renvoie 'One for Tom, one for me.'"},{"key":"bonus1.name","english":"Six lines of code","target":"Six lignes de code"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"Résous l'exercice en seulement six lignes de code."}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"Qu'est-ce qui change selon l'entrée ?"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"Une seule chose : le nom au milieu de la phrase. Si on t'a donné un nom, utilise-le. Sinon, utilise la valeur par défaut `\"you\"`."},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"Comment vérifier si on m'a donné un nom ?"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"Avec une instruction `if` qui compare l'entrée à la string vide `\"\"`. Si elle est vide, utilise `\"you\"`. Sinon, utilise l'entrée."},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"Comment construire la phrase finale ?"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"Assemble les trois morceaux (`\"One for \"`, le nom choisi et `\", one for me.\"`) avec la concaténation (`+`) ou une template string."}]}]}]
---

On va maintenant partir de ce simple exercice « Hello » et ajouter quelques règles supplémentaires.

Dans certains accents anglais, quand on prononce « two for » rapidement, ça sonne comme « two fer ». « Two-for-one », c'est une façon de dire que si tu en achètes un, tu en reçois un autre gratuitement.

Imagine une boulangerie qui propose une offre spéciale pour les fêtes : deux cookies pour le prix d'un. Tu profites de l'offre et tu décides de donner le cookie en trop à quelqu'un d'autre.

Ta mission est de déterminer ce que tu vas dire en offrant ce cookie supplémentaire.

- Si tu connais le nom de la personne (par exemple Alice), tu diras : "One for Alice, one for me."
- Si tu ne connais pas le nom de la personne, tu diras : "One for you, one for me."

Écris une fonction appelée `twoFer(name)` (littéralement « deux pour », `name` étant le nom) qui renvoie la réplique appropriée.

Voici quelques exemples :

| Appel de fonction  | Valeur renvoyée                 |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

Pour le bonus, est-ce que tu peux écrire tout ça en **seulement 6 lignes de code** ?

Bonne chance !
