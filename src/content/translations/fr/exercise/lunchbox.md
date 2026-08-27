---
lang: "fr"
type: "exercise"
slug: "lunchbox"
title: "La boîte à repas"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/lunchbox"
en_md5: "1b10370bd59c8562e032443bbe98c6b3"
governance_sha: "accabaea"
content_version: "69ed901f5a8d"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":null},{"key":"oneListOnly","english":null,"target":"Tu ne dois créer qu'un seul tableau. Vérifie que tu n'utilises <code>[]</code> qu'une seule fois."},{"key":"usePush","english":null,"target":"Tu dois utiliser <code>push()</code> pour ajouter des éléments à ton tableau."}]},{"name":"tasks","rows":[{"key":"packLunchbox.name","english":"Pack the Lunchbox","target":null},{"key":"packLunchbox.description","english":"Split the items into a lunchbox and a rucksack: fit as many as you can into the lunchbox without going over its capacity, and put everything else in the rucksack.","target":null},{"key":"solveInSixteenLines.name","english":"Solve in 16 lines of code","target":null},{"key":"solveInSixteenLines.description","english":"Can you solve this exercise with only 16 lines of code?","target":null},{"key":"packALunch.name","english":null,"target":"Prépare un déjeuner"},{"key":"packALunch.description","english":null,"target":"Écris une fonction qui remplit une boîte à repas avec un sandwich, une boisson et un encas. Si la boisson est un milkshake, laisse-la en dehors de la boîte, car elle est trop volumineuse."}]},{"name":"scenarios","rows":[{"key":"everythingFits.name","english":"Everything fits","target":null},{"key":"everythingFits.description","english":"A roomy lunchbox where every item fits, so the rucksack stays empty.","target":null},{"key":"packTheMost.name","english":"Fit the most","target":null},{"key":"packTheMost.description","english":"Space is tight, so the small items go in the lunchbox and the big ones are left for the rucksack.","target":null},{"key":"justTheSnack.name","english":"Just the snack","target":null},{"key":"justTheSnack.description","english":"Only the very smallest item fits; the rest go in the rucksack.","target":null},{"key":"nothingFits.name","english":"Nothing fits","target":null},{"key":"nothingFits.description","english":"Even the smallest item is too big, so everything ends up in the rucksack.","target":null},{"key":"emptyLunchbox.name","english":"Empty lunchbox","target":null},{"key":"emptyLunchbox.description","english":"There are no items at all, so both the lunchbox and the rucksack come back empty.","target":null},{"key":"bonus1.name","english":"16 lines of code","target":null},{"key":"bonus1.description","english":"Solve the exercise with only 16 lines of code.","target":null},{"key":"regularLunch.name","english":null,"target":"Déjeuner classique"},{"key":"regularLunch.description","english":null,"target":"Un déjeuner normal avec de l'eau : tout tient dans la boîte à repas."},{"key":"milkshakeLunch.name","english":null,"target":"Déjeuner avec milkshake"},{"key":"milkshakeLunch.description","english":null,"target":"Le milkshake est trop gros pour la boîte à repas, alors il reste en dehors."},{"key":"anotherRegular.name","english":null,"target":"Un autre déjeuner classique"},{"key":"anotherRegular.description","english":null,"target":"Un autre déjeuner normal où tout tient dans la boîte."},{"key":"anotherMilkshake.name","english":null,"target":"Un autre déjeuner avec milkshake"},{"key":"anotherMilkshake.description","english":null,"target":"Un autre déjeuner avec un milkshake qui ne tient pas dans la boîte."}]},{"name":"hints","rows":[{"key":"readEachItem.question","english":"How do I get each item's name and size?","target":null},{"key":"readEachItem.answer","english":"Each item is a pair. The first part is the name and the second is the size, so you can read them out of the item one at a time.","target":null},{"key":"fitTheMost.question","english":"How do I fit in as many items as possible?","target":null},{"key":"fitTheMost.answer","english":"Think about which items to add first. Smaller items leave more room for others, so it pays to deal with them before the big ones.","target":null},{"key":"goSmallestFirst.question","english":"The items are listed largest first — how do I go through them smallest first?","target":null},{"key":"goSmallestFirst.answer","english":"There's an array method that gives you back a reversed copy of an array. Reverse the items first, then work through them in that new order.","target":null},{"key":"knowWhenFull.question","english":"How do I decide where each item goes?","target":null},{"key":"knowWhenFull.answer","english":"Keep a running total of the sizes you've added. Before adding an item, check whether the total plus its size would still fit within the capacity. If it does, it goes in the lunchbox, otherwise it goes in the rucksack.","target":null},{"key":"basicShape.question","english":null,"target":"Quelle est la forme générale de ma réponse ?"},{"key":"basicShape.answer","english":null,"target":"Un tableau. Commence avec un tableau vide et ajoutes-y les éléments autorisés un par un."},{"key":"addItems.question","english":null,"target":"Comment ajouter des éléments à un tableau ?"},{"key":"addItems.answer","english":null,"target":"Utilise `push()`. Cette fonction prend le tableau et l'élément, et renvoie le nouveau tableau (plus long)."},{"key":"leaveMilkshakeOut.question","english":null,"target":"Comment laisser le milkshake en dehors ?"},{"key":"leaveMilkshakeOut.answer","english":null,"target":"Utilise une instruction `if`. N'ajoute la boisson avec `push()` que si elle n'est pas égale à `\"milkshake\"`."},{"key":"listNotGrowing.question","english":null,"target":"Pourquoi mon tableau ne grandit-il pas ?"},{"key":"listNotGrowing.answer","english":null,"target":"`push()` ne modifie pas le tableau existant : elle renvoie le nouveau tableau. Tu dois réaffecter le résultat, par exemple `lunchbox = lunchbox.push(item)` (ou l'équivalent dans ton langage)."}]},{"name":"functions","rows":[{"key":"toReversed.description","english":"Returns a copy of the array with the elements in reverse order, without changing the original.","target":null},{"key":"toReversed.category","english":"Arrays","target":null},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Renvoie un nouveau tableau avec l'élément ajouté à la fin (fournie par la bibliothèque standard du niveau)"},{"key":"push.category","english":"Arrays","target":"Opérations sur les tableaux"}]}]}]
---

Quand j'étais enfant, je préparais ma boîte à repas tous les jours pour l'école. Ma mère me sortait les éléments à emporter (soigneusement rangés du plus grand au plus petit) et j'essayais d'en faire tenir le plus possible dans la boîte à repas, mais elle ne pouvait évidemment pas tout contenir. Tout ce qui ne rentrait pas, je devais le mettre dans mon sac à dos et le porter avec moi toute la journée, au lieu de le laisser dans mon casier.

Dans cet exercice, ton travail consiste à créer un algorithme qui détermine ce que je peux ranger dans la boîte à repas et ce que je dois mettre dans mon sac à dos.

Tu dois écrire une fonction appelée `packLunch(items, capacity)` (prépare le déjeuner) qui prend deux entrées : le tableau des éléments (les plus grands d'abord) et la taille de la boîte à repas, `capacity` (capacité), qui est un nombre.

Le tableau des éléments est un tableau imbriqué : chaque élément est lui-même un tableau de deux valeurs, le nom de l'élément et sa taille. Les éléments vont toujours du plus grand au plus petit. Par exemple, le tableau des éléments pourrait être :

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

La boîte à repas a une capacité maximale. Tu dois déterminer quels éléments peuvent aller dans la boîte à repas. Fais-y tenir autant d'éléments que possible. Tout le reste doit aller dans le sac à dos.

Ta fonction doit renvoyer un tableau qui contient deux éléments. Le premier est le tableau des éléments destinés à la boîte à repas, le second celui des éléments pour le sac à dos. Les deux tableaux doivent être rangés du plus petit au plus grand.

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

Amuse-toi bien !
