---
lang: "fr"
type: "exercise"
slug: "wordle-process-guess"
title: "Wordle : traite l'essai"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/wordle-process-guess"
en_md5: "3947aa1be7871fcfb0e523cb3c036d7f"
governance_sha: "ad474b93"
content_version: "f7175cca394b"
published_at: "2026-08-29"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"allCorrect","english":"We expected all the letters to be green","target":"On s'attendait à ce que toutes les lettres soient vertes"},{"key":"absent","english":"We expected the 'a' and 'u' to be absent","target":"On s'attendait à l'état absent pour le « a » et le « u »"},{"key":"present","english":"We expected the 'l' and 'e' to be present.","target":"On s'attendait à l'état present pour le « l » et le « e »."},{"key":"complex","english":"We expected present, present, present, correct, absent","target":"On s'attendait à : present, present, present, correct, absent"},{"key":"differentWord","english":"We expected correct, present, present, present, absent","target":"On s'attendait à : correct, present, present, present, absent"}]},{"name":"tasks","rows":[{"key":"processGuess.name","english":"Process a single guess","target":"Traite un essai"},{"key":"processGuess.description","english":"Create a function called processGuess that takes a target word and a guess, works out the state of each letter (correct, present, or absent), then calls colorRow(1, states) with the results.","target":"Crée une fonction appelée processGuess qui prend un mot cible et un essai, détermine l'état de chaque lettre (correct, present ou absent), puis appelle colorRow(1, states) avec les résultats."}]},{"name":"scenarios","rows":[{"key":"allCorrect.name","english":"All correct","target":"Tout est correct"},{"key":"allCorrect.description","english":"Deal with a fully correct guess","target":"Gère un essai entièrement correct"},{"key":"absent.name","english":"Some absent","target":"Des lettres absentes"},{"key":"absent.description","english":"Handle when some letters are wrong","target":"Gère le cas où certaines lettres sont fausses"},{"key":"present.name","english":"Some present","target":"Des lettres présentes"},{"key":"present.description","english":"Deal with letters in the wrong place","target":"Gère des lettres qui ne sont pas à la bonne place"},{"key":"complex.name","english":"Complex","target":"Complexe"},{"key":"complex.description","english":"Deal with a more complex scenario","target":"Gère un scénario un peu plus complexe"},{"key":"differentWord.name","english":"A different word","target":"Un autre mot"},{"key":"differentWord.description","english":"And finally a different word!","target":"Et pour finir, un autre mot !"}]},{"name":"hints","rows":[{"key":"compareLetters.question","english":"How do I compare each letter of the guess to the target?","target":"Comment comparer chaque lettre de l'essai avec le mot cible ?"},{"key":"compareLetters.answer","english":"Loop through the positions `0` to `4`. For each position, compare `guess[i]` with `target[i]`.","target":"Parcours les positions `0` à `4`. Pour chaque position, compare `guess[i]` avec `target[i]`."},{"key":"stateRules.question","english":"When is a letter `\"correct\"` vs `\"present\"` vs `\"absent\"`?","target":"Quand une lettre est-elle `\"correct\"`, `\"present\"` ou `\"absent\"` ?"},{"key":"stateRules.answer","english":"If `guess[i]` equals `target[i]`, it's `\"correct\"`. Otherwise, if the letter exists somewhere in `target`, it's `\"present\"`. If not, it's `\"absent\"`.","target":"Si `guess[i]` est égal à `target[i]`, c'est `\"correct\"`. Sinon, si la lettre apparaît ailleurs dans `target`, c'est `\"present\"`. Dans le cas contraire, c'est `\"absent\"`."},{"key":"buildList.question","english":"How do I build up the array of states?","target":"Comment construire le tableau des états ?"},{"key":"buildList.answer","english":"Start with an empty array, then use `states.push(value)` inside the loop to add each state onto the end in order.","target":"Commence avec un tableau vide, puis utilise `push(states, value)` dans la boucle pour ajouter chaque état dans l'ordre."},{"key":"finishedList.question","english":"Where does the finished array go?","target":"Où va le tableau une fois terminé ?"},{"key":"finishedList.answer","english":"Pass it to `colorRow(1, states)` to color the first row of the board with your computed states.","target":"Passe-le à `colorRow(1, states)` pour colorier la première rangée de la grille avec les états que tu as calculés."}]},{"name":"functions","rows":[{"key":"colorRow.description","english":"Colors a row on the Wordle board with the given states.","target":"Colorie une rangée de la grille de Wordle avec les états donnés."},{"key":"colorRow.category","english":"Wordle","target":"Wordle"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Ajoute un élément à la fin d'un tableau, en modifiant directement le tableau."},{"key":"push.category","english":"Arrays","target":"Tableaux"},{"key":"includes.description","english":"Checks whether a string contains another string, returning true or false.","target":"Vérifie si une _string_ contient une autre _string_, en renvoyant `true` ou `false`."},{"key":"includes.category","english":"Strings","target":"Chaînes"}]},{"name":"describers","rows":[{"key":"colorRow","english":"colored a row on the wordle board","target":"a colorié une rangée de la grille de Wordle"}]}]}]
---

Bienvenue dans Wordle, le jeu devenu viral pendant les confinements du Covid-19 !

Le jeu fonctionne comme ceci :

- Il y a un mot secret que le joueur essaie de deviner.
- Le joueur a 6 essais pour le trouver.
- À chaque essai, il y a 5 cases, une pour chaque lettre :
  - Si une lettre est correcte, la case devient verte.
  - Si une lettre est dans le mot secret mais à la mauvaise place, la case devient jaune.
  - Si une lettre n'est pas dans le mot secret, la case devient grise.

Dans quelques exercices, tu implémenteras le jeu Wordle en entier, mais pour **cet exercice**, tu vas simplement faire fonctionner la première rangée.

Pour cela, tu dois créer une fonction appelée `processGuess(target, guess)` (« traiter l'essai »). Elle doit déterminer l'état de chaque lettre de l'essai, puis appeler la fonction `colorRow(1, states)` (« colorier la rangée ») avec un tableau contenant l'état de chaque lettre : soit `"correct"`, soit `"present"`, soit `"absent"`.

Par exemple, `processGuess("Hello", "Holes")` doit utiliser `colorRow` avec :

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

Assure-toi d'avoir bien compris cet exemple avant de continuer !

### Méthodes

Comme dans les derniers exercices, tu peux construire le tableau des états avec la méthode `push`, qui ajoute un élément à la fin d'un tableau. Par exemple, `states.push("correct")` ajoute `"correct"` à la fin du tableau `states`.

Tu as aussi la méthode `includes` si tu veux vérifier si une _string_ en contient une autre.

Bonne chance !
