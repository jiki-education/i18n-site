---
lang: "fr"
type: "exercise"
slug: "lunchbox"
title: "La lunchbox"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/lunchbox"
en_md5: "b6274dbfc7f2e050c514feb7da65b588"
governance_sha: "a49e255a"
content_version: "ee3409b40197"
published_at: "2026-08-31"
forum_topic_id: 1671
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"Ta solution contient trop de lignes de code. Peux-tu la raccourcir ?"}]},{"name":"tasks","rows":[{"key":"packLunchbox.name","english":"Pack the Lunchbox","target":"Range la boîte à repas"},{"key":"packLunchbox.description","english":"Split the items into a lunchbox and a backpack: fit as many as you can into the lunchbox without going over its capacity, and put everything else in the backpack.","target":"Répartis les aliments entre la boîte à repas et le sac à dos : fais-en tenir le plus possible dans la boîte sans dépasser sa capacité, et mets tout le reste dans le sac à dos."},{"key":"solveInSixteenLines.name","english":"Solve in 16 lines of code","target":"Résous en 16 lignes de code"},{"key":"solveInSixteenLines.description","english":"Can you solve this exercise with only 16 lines of code?","target":"Peux-tu résoudre cet exercice en seulement 16 lignes de code ?"}]},{"name":"scenarios","rows":[{"key":"everythingFits.name","english":"Everything fits","target":"Tout rentre"},{"key":"everythingFits.description","english":"A roomy lunchbox where every item fits, so the backpack stays empty.","target":"Une boîte à repas spacieuse où tous les aliments rentrent, si bien que le sac à dos reste vide."},{"key":"packTheMost.name","english":"Fit the most","target":"Fais-en tenir le plus possible"},{"key":"packTheMost.description","english":"Space is tight, so the small items go in the lunchbox and the big ones are left for the backpack.","target":"La place manque, donc les petits aliments vont dans la boîte à repas et les gros restent pour le sac à dos."},{"key":"justTheSnack.name","english":"Just the snack","target":"Juste la collation"},{"key":"justTheSnack.description","english":"Only the very smallest item fits; the rest go in the backpack.","target":"Seul le tout petit aliment rentre ; le reste va dans le sac à dos."},{"key":"nothingFits.name","english":"Nothing fits","target":"Rien ne rentre"},{"key":"nothingFits.description","english":"Even the smallest item is too big, so everything ends up in the backpack.","target":"Même le plus petit aliment est trop grand, donc tout finit dans le sac à dos."},{"key":"emptyLunchbox.name","english":"Empty lunchbox","target":"Boîte à repas vide"},{"key":"emptyLunchbox.description","english":"There are no items at all, so both the lunchbox and the backpack come back empty.","target":"Il n'y a aucun aliment, donc la boîte à repas et le sac à dos reviennent tous les deux vides."},{"key":"bonus1.name","english":"16 lines of code","target":"16 lignes de code"},{"key":"bonus1.description","english":"Solve the exercise with only 16 lines of code.","target":"Résous l'exercice en seulement 16 lignes de code."}]},{"name":"hints","rows":[{"key":"readEachItem.question","english":"How do I get each item's name and size?","target":"Comment récupérer le nom et la taille de chaque aliment ?"},{"key":"readEachItem.answer","english":"Each item is a pair. The first part is the name and the second is the size, so you can read them out of the item one at a time.","target":"Chaque aliment est une paire. La première partie est le nom et la seconde est la taille, donc tu peux les récupérer un par un depuis l'aliment."},{"key":"fitTheMost.question","english":"How do I fit in as many items as possible?","target":"Comment faire tenir le plus d'aliments possible ?"},{"key":"fitTheMost.answer","english":"Think about which items to add first. Smaller items leave more room for others, so it pays to deal with them before the big ones.","target":"Réfléchis à l'ordre dans lequel ajouter les aliments. Les petits aliments laissent plus de place pour les autres, donc il vaut mieux s'en occuper avant les gros."},{"key":"goSmallestFirst.question","english":"The items are listed largest first — how do I go through them smallest first?","target":"Les aliments sont listés du plus grand au plus petit, comment les parcourir du plus petit au plus grand ?"},{"key":"goSmallestFirst.answer","english":"There's an array method that gives you back a reversed copy of an array. Reverse the items first, then work through them in that new order.","target":"Il existe une méthode de tableau qui te renvoie une copie inversée d'un tableau. Inverse d'abord les aliments, puis parcours-les dans ce nouvel ordre."},{"key":"knowWhenFull.question","english":"How do I decide where each item goes?","target":"Comment décider où va chaque aliment ?"},{"key":"knowWhenFull.answer","english":"Keep a running total of the sizes you've added. Before adding an item, check whether the total plus its size would still fit within the capacity. If it does, it goes in the lunchbox, otherwise it goes in the backpack.","target":"Garde, au fur et à mesure, un total cumulé des tailles déjà ajoutées. Avant d'ajouter un aliment, vérifie si le total plus sa taille tiendrait encore dans la capacité. Si c'est le cas, il va dans la boîte à repas, sinon il va dans le sac à dos."}]},{"name":"functions","rows":[{"key":"toReversed.description","english":"Returns a copy of the array with the elements in reverse order, without changing the original.","target":"Renvoie une copie du tableau avec les éléments dans l'ordre inverse, sans modifier l'original."},{"key":"toReversed.category","english":"Arrays","target":"Tableaux"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Ajoute un élément à la fin d'un tableau, en modifiant directement le tableau."},{"key":"push.category","english":"Arrays","target":"Tableaux"}]}]}]
---

Enfant, je préparais tous les jours ma boîte à repas pour l'école. Ma mère me sortait les aliments à emporter (soigneusement rangés du plus grand au plus petit) et j'essayais d'en faire tenir le plus possible dans la boîte, mais elle ne pouvait évidemment pas tout contenir. Tout ce qui ne rentrait pas, je devais le mettre dans mon sac à dos et le traîner avec moi toute la journée plutôt que de le laisser dans mon casier.

Dans cet exercice, ta mission est de créer un algorithme qui détermine ce que je peux ranger dans la boîte et ce que je dois mettre dans mon sac à dos.

Tu dois écrire une fonction appelée `packLunch(items, capacity)` qui prend deux entrées : le tableau des aliments (les plus grands d'abord), et la taille de la boîte à repas, `capacity` (un nombre).

Le tableau des aliments est un tableau imbriqué : chaque aliment est lui-même un tableau de deux éléments, le nom de l'aliment et sa taille. Les aliments vont toujours du plus grand au plus petit. Par exemple, le tableau des aliments pourrait être :

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

La boîte à repas a une capacité maximale. Tu dois déterminer quels aliments peuvent rentrer dans la boîte. Fais-y tenir autant d'aliments que possible. Tout le reste doit aller dans le sac à dos.

Ta fonction doit renvoyer un tableau qui contient deux éléments. Le premier est le tableau des aliments destinés à la boîte à repas, le second celui des aliments pour le sac à dos. Les deux tableaux doivent être rangés du plus petit au plus grand.

Par exemple, pour le tableau ci-dessus, avec une capacité de 20, voici ce qui est attendu :

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Des méthodes pour t'aider

Comme pour tous les exercices de cette section, tu voudras utiliser la méthode `.push(element)` pour construire tes tableaux.

Tu disposes aussi d'une nouvelle méthode, `[...].toReversed()`, qui crée une copie d'un tableau avec tous les éléments inversés. Par exemple :

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

Tu n'es pas obligé de l'utiliser, mais elle pourrait t'être utile.

Amuse-toi bien !
