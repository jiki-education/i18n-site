---
lang: "fr"
type: "exercise"
slug: "formal-dinner"
title: "Dîner de gala"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/formal-dinner"
en_md5: "b0628bfad9d662c21ab91a40b9e5bc2b"
governance_sha: "4caf34be"
content_version: "7b8b6292fce9"
published_at: "2026-09-26"
forum_topic_id: 1604
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findGuestTable.name","english":"Find the Guest's Table","target":"Trouve la table de l'invité"},{"key":"findGuestTable.description","english":"Write a function that takes the array of guests' full names, the matching array of table names, and an arriving guest announced as an honorific and a surname. Return the name of the table that guest is sitting at, or `\"No table found\"` if they aren't on the seating plan.","target":"Écris une fonction qui prend le tableau des noms complets des invités, le tableau correspondant des noms de tables, et un invité qui arrive, annoncé par son titre de civilité suivi de son nom de famille. Renvoie le nom de la table à laquelle cet invité est assis, ou `\"No table found\"` s'il ne figure pas sur le plan de table."},{"key":"solveTightly.name","english":"Solve it in 9 lines","target":"Résous-le en 9 lignes"},{"key":"solveTightly.description","english":"Bonus: this can be written far more compactly than you might expect. Try and solve this in 9 lines of code or fewer.","target":"Bonus : cet exercice peut s'écrire de façon bien plus compacte que tu ne le penses. Essaie de le résoudre en 9 lignes de code ou moins."}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty seating plan","target":"Plan de table vide"},{"key":"emptyList.description","english":"Nobody's sitting anywhere when the plan is empty.","target":"Personne n'est assis nulle part quand le plan est vide."},{"key":"nameMissing.name","english":"Brad's turned away","target":"Brad est refoulé"},{"key":"nameMissing.description","english":"The name's not on the seating plan.","target":"Le nom ne figure pas sur le plan de table."},{"key":"namePresent.name","english":"Brad's shown to his seat","target":"Brad est conduit à sa place"},{"key":"namePresent.description","english":"Brad Pitt is on the plan, so Mr Pitt gets his table.","target":"Brad Pitt figure sur le plan, alors Mr Pitt obtient sa table."},{"key":"differentHonorific.name","english":"Knight of the realm","target":"Chevalier du royaume"},{"key":"differentHonorific.description","english":"A different honorific, and a guest who isn't first on the plan.","target":"Un autre titre de civilité, et un invité qui n'est pas premier sur le plan."},{"key":"bondSeated.name","english":"Mr Bond, I presume","target":"Mr Bond, je présume"},{"key":"bondSeated.description","english":"James Bond is on the plan.","target":"James Bond figure sur le plan."},{"key":"bondNotSeated.name","english":"Hmmm... Mr Bond, I presume","target":"Hmmm... Mr Bond, je présume"},{"key":"bondNotSeated.description","english":"Only Jason Bourne is on the plan, not James Bond.","target":"Seul Jason Bourne figure sur le plan, pas James Bond."},{"key":"partialSurname.name","english":"Not quite Mr Pitt","target":"Pas tout à fait Mr Pitt"},{"key":"partialSurname.description","english":"Neither Ada Spitt nor Hugo Ross-Pitt is Mr Pitt, so he has no seat here.","target":"Ni Ada Spitt ni Hugo Ross-Pitt n'est Mr Pitt, alors pas de place pour lui ici."},{"key":"lloydWebber.name","english":"How about a Baron?","target":"Et pourquoi pas un Baron ?"},{"key":"lloydWebber.description","english":"Baron Lloyd Webber has two words in his surname.","target":"Le nom de famille de Baron Lloyd Webber compte deux mots."},{"key":"markWebber.name","english":"Is Mark the Baron?","target":"Mark est-il le Baron ?"},{"key":"markWebber.description","english":"A different Webber doesn't count - the surname has to match in full.","target":"Un autre Webber ne compte pas : le nom de famille doit correspondre en entier."},{"key":"formalDinnerBonusLineCount.name","english":"Neat and tidy: Lord Doyle","target":"Propre et net : Lord Doyle"},{"key":"formalDinnerBonusLineCount.description","english":"The same seating plan as before, but this time try and solve this in 9 lines of code or fewer.","target":"Le même plan de table qu'avant, mais cette fois, essaie de résoudre l'exercice en 9 lignes de code ou moins."}]},{"name":"hints","rows":[{"key":"twoLists.question","english":"How do the two arrays relate to each other?","target":"Quel est le lien entre les deux tableaux ?"},{"key":"twoLists.answer","english":"They're a pair. The first guest sits at the first table, the second guest at the second table, and so on. So it's not enough to know *that* a guest is on the plan - you need to know *where* on the plan they are.","target":"Elles vont par paire. Le premier invité est assis à la première table, le deuxième invité à la deuxième table, et ainsi de suite. Il ne suffit donc pas de savoir *que* l'invité figure sur le plan : tu dois aussi savoir *où* il se trouve."},{"key":"comparingNames.question","english":"The guest says 'Mr Pitt' but the plan says 'Brad Pitt'. How do I compare those?","target":"L'invité annonce « Mr Pitt », mais le plan indique « Brad Pitt ». Comment les comparer ?"},{"key":"comparingNames.answer","english":"Those two strings will never be equal, so a straight comparison won't get you anywhere. Have a think about which part of what the guest announced actually appears on the plan, and whereabouts in the plan's entry you'd expect to find it.","target":"Ces deux _strings_ ne seront jamais égales, alors une comparaison directe ne te mènera nulle part. Demande-toi quelle partie de ce que l'invité a annoncé figure vraiment sur le plan, et où, dans la ligne du plan, tu t'attends à la trouver."},{"key":"lookalikeSurnames.question","english":"Could a surname match the wrong guest?","target":"Un nom de famille peut-il correspondre au mauvais invité ?"},{"key":"lookalikeSurnames.answer","english":"It absolutely could. Read 'Ada Spitt' and 'Hugo Ross-Pitt' out loud, and then think about Mr Pitt. Ask yourself what makes a surname a real surname on that line, rather than just some letters that happen to sit at the end of it.","target":"Absolument. Lis « Ada Spitt » et « Hugo Ross-Pitt » à voix haute, puis pense à Mr Pitt. Demande-toi ce qui fait d'un nom de famille un vrai nom de famille sur cette ligne, plutôt que quelques lettres qui se trouvent simplement à la fin."},{"key":"noMatch.question","english":"What should I return when nobody matches?","target":"Que renvoyer quand personne ne correspond ?"},{"key":"noMatch.answer","english":"The string `\"No table found\"`, exactly as written. The trickier bit is knowing when you're allowed to say it. If you've checked the very first guest on the plan and they're not your man, do you actually know yet that he isn't seated somewhere?","target":"La _string_ `\"No table found\"`, exactement comme elle est écrite. Le plus délicat, c'est de savoir à quel moment tu as le droit de la renvoyer. Si tu as vérifié le tout premier invité du plan et que ce n'est pas le bon, sais-tu déjà vraiment qu'il n'est pas assis quelque part ?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can get down to 9 lines of code.","target":"Continue ! Vois si tu peux descendre à 9 lignes de code."}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in an array - the same length property you've used on strings","target":"Le nombre d'éléments d'un tableau, la même propriété `.length` que tu as utilisée sur les _strings_"},{"key":"length.category","english":"Array Operations","target":"Opérations sur les tableaux"},{"key":"split.description","english":"Split a string into an array of pieces, breaking at each separator","target":"Découpe une _string_ en un tableau de morceaux, en coupant à chaque séparateur"},{"key":"split.category","english":"String Operations","target":"Opérations sur les _strings_"},{"key":"slice.description","english":"Make a new array from part of an array, starting at a position","target":"Crée un nouveau tableau à partir d'une partie d'un tableau, en commençant à une position donnée"},{"key":"slice.category","english":"Array Operations","target":"Opérations sur les tableaux"},{"key":"join.description","english":"Join the items of an array into one string, with a separator between them","target":"Assemble les éléments d'un tableau en une seule _string_, avec un séparateur entre eux"},{"key":"join.category","english":"Array Operations","target":"Opérations sur les tableaux"},{"key":"endsWith.description","english":"Check whether a string ends with a smaller string","target":"Vérifie si une _string_ se termine par une autre _string_ plus courte"},{"key":"endsWith.category","english":"String Operations","target":"Opérations sur les _strings_"}]}]}]
---

On reprend notre petit boulot de videur. On est le lendemain de l'after, et il y a encore une sauterie. Cette fois, c'est un dîner de gala : ce soir, tu es moins « costaud posté devant la porte » et plus « personne au porte-bloc et au joli gilet ».

Ici, pas question de se présenter avec **seulement** son prénom. En fait, pas question de prénom du tout. Tout le monde se présente par son titre de civilité (_honorific_ en anglais), comme Miss, Mr ou Dr, suivi de son nom de famille.

Les organisateurs t'ont remis le plan de table sous forme de deux tableaux séparés. Le premier contient les noms complets des invités. Le second contient le nom de la table à laquelle chaque invité est assis (des tables baptisées d'après des arbres et des fleurs). Comme dans « L'after », les deux tableaux sont alignés : l'invité en position 3 du premier tableau est assis à la table en position 3 du second.

Alors quand Mr Pitt fait son entrée, à toi de comprendre qu'il s'agit du « Brad Pitt » de ta liste, puis de lui indiquer sa table.

Écris une fonction appelée `tableFor` (« la table de », elle cherche la table à laquelle un invité est assis). La fonction a trois entrées :

- La première est le tableau des noms complets des invités, sous forme de _strings_
- La deuxième est le tableau des noms de tables, dans le même ordre que les invités
- La troisième est l'invité qui arrive, sous la forme d'un titre de civilité suivi de son nom de famille (par exemple « Mr Pitt »)

Renvoie le nom de la table à laquelle l'invité est assis. S'il ne figure pas du tout sur le plan de table, renvoie à la place la _string_ `"No table found"` (aucune table trouvée), exactement comme elle est écrite (pas de resquilleurs ici !).

Le titre de civilité tient toujours en un seul mot, et tout ce qui suit est le nom de famille de l'invité. La plupart des noms de famille tiennent en un seul mot, mais quelques noms prestigieux en comptent deux.

Attention, cependant : de nombreux noms de famille se ressemblent beaucoup.

### Méthodes et propriétés des _strings_ et des tableaux

En plus de la propriété `.length` que tu as découverte dans l'exercice précédent, quatre méthodes peuvent t'être utiles. Il existe de nombreuses façons de résoudre cet exercice, mais celles-ci te mèneront à la solution la plus courte possible.

`"...".split(substring)` découpe une _string_ à l'aide d'une autre _string_. Par exemple :

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` capture une partie d'un tableau, en partant de l'indice `start` et en continuant jusqu'à la fin du tableau. Les éléments capturés sont copiés dans un NOUVEAU tableau, qui t'est renvoyé. En pratique, cela revient à laisser tomber les `start` premiers éléments. Par exemple :

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)` assemble les éléments d'un tableau en les reliant par la _string_ fournie. Par exemple :

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)` t'indique si une _string_ se termine par une autre _string_. Par exemple :

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
