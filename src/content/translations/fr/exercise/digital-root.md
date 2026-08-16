---
lang: "fr"
type: "exercise"
slug: "digital-root"
title: "Racine numérique"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/digital-root"
en_md5: "554e48db79141f8304144e152643a47c"
governance_sha: "b951b19"
content_version: "e85613afa464"
published_at: "2026-08-16"
forum_topic_id: 1228
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"sumTheDigits.name","english":"Sum the digits","target":"Additionne les chiffres"},{"key":"sumTheDigits.description","english":"Write a function called digitalRoot that takes a number and adds its digits together. For numbers that are already a single digit, and for numbers whose digits sum to a single digit, this first pass is enough.","target":"Écris une fonction appelée digitalRoot qui prend un nombre et additionne ses chiffres. Pour les nombres qui ne comptent déjà qu'un seul chiffre, et pour ceux dont la somme des chiffres tient en un seul, ce premier passage suffit."},{"key":"collapseToSingleDigit.name","english":"Keep collapsing until one digit is left","target":"Continue à réduire jusqu'à n'avoir plus qu'un seul chiffre"},{"key":"collapseToSingleDigit.description","english":"Sometimes summing the digits once still leaves more than one digit (for example 942 sums to 15). Keep summing the digits of the result until a single digit remains.","target":"Parfois, additionner les chiffres une seule fois laisse encore un nombre à plusieurs chiffres (par exemple, la somme des chiffres de 942 est 15). Continue à additionner les chiffres du résultat jusqu'à ce qu'il ne reste plus qu'un seul chiffre."},{"key":"keepItTight.name","english":"Bonus: keep it short","target":"Bonus : garde ton code concis"},{"key":"keepItTight.description","english":"Your solution already works. For this bonus, tidy it up so the whole function fits in a small number of lines, without any extra clutter.","target":"Ta solution fonctionne déjà. Pour ce bonus, fais le ménage pour que la fonction entière tienne en quelques lignes, sans rien de superflu."}]},{"name":"scenarios","rows":[{"key":"drZero.name","english":"Zero","target":"Zéro"},{"key":"drZero.description","english":"The digital root of 0 is 0.","target":"La racine numérique de 0 est 0."},{"key":"drSingleDigit.name","english":"Already a single digit","target":"Déjà un seul chiffre"},{"key":"drSingleDigit.description","english":"A number that is already a single digit is its own digital root.","target":"Un nombre qui ne compte déjà qu'un seul chiffre est sa propre racine numérique."},{"key":"drTwoDigits.name","english":"Two digits","target":"Deux chiffres"},{"key":"drTwoDigits.description","english":"16 collapses to 7 in a single pass (1 + 6).","target":"16 se réduit à 7 en un seul passage (1 + 6)."},{"key":"drThreeDigits.name","english":"Three digits, one pass","target":"Trois chiffres, un seul passage"},{"key":"drThreeDigits.description","english":"132 collapses to 6 in a single pass (1 + 3 + 2).","target":"132 se réduit à 6 en un seul passage (1 + 3 + 2)."},{"key":"drThirtyNine.name","english":"Two passes needed","target":"Deux passages nécessaires"},{"key":"drThirtyNine.description","english":"39 sums to 12, which then sums to 3.","target":"La somme des chiffres de 39 est 12, et celle de 12 est 3."},{"key":"drTwoPasses.name","english":"A number that needs a second pass","target":"Un nombre qui demande un deuxième passage"},{"key":"drTwoPasses.description","english":"942 sums to 15, which then sums to 6.","target":"La somme des chiffres de 942 est 15, et celle de 15 est 6."},{"key":"drLarge.name","english":"A larger number","target":"Un nombre plus grand"},{"key":"drLarge.description","english":"493193 collapses all the way down to 2.","target":"493193 se réduit jusqu'à 2."},{"key":"drNines.name","english":"All nines","target":"Que des neufs"},{"key":"drNines.description","english":"99999 sums to 45, which then sums to 9.","target":"La somme des chiffres de 99999 est 45, et celle de 45 est 9."},{"key":"drBonusTight.name","english":"A tidy, short solution","target":"Une solution courte et soignée"},{"key":"drBonusTight.description","english":"12345 collapses down to 6 (1 + 2 + 3 + 4 + 5 = 15, then 1 + 5 = 6).","target":"12345 se réduit à 6 (1 + 2 + 3 + 4 + 5 = 15, puis 1 + 5 = 6)."}]},{"name":"hints","rows":[{"key":"whatIsIt.question","english":"What exactly is a digital root?","target":"C'est quoi, exactement, une racine numérique ?"},{"key":"whatIsIt.answer","english":"Add up all the digits of the number. If that gives you a single digit, that's the answer. If it gives you more than one digit, add up the digits of that result too, and keep going until only one digit is left.","target":"Additionne tous les chiffres du nombre. Si tu obtiens un seul chiffre, c'est la réponse. Si tu en obtiens plusieurs, additionne aussi les chiffres de ce résultat, et continue jusqu'à ce qu'il ne reste plus qu'un seul chiffre."},{"key":"sumDigits.question","english":"How do I add up the digits of a number?","target":"Comment additionner les chiffres d'un nombre ?"},{"key":"sumDigits.answer","english":"Turn the number into a string so you can walk through it character by character with a `for...of` loop. Keep a running total, adding each digit as you go.","target":"Transforme le nombre en string pour pouvoir le parcourir caractère par caractère avec une boucle `for...of`. Retiens la somme au fur et à mesure que tu y ajoutes chaque chiffre."},{"key":"digitsToNumbers.question","english":"Each digit is a character though, not a number.","target":"Mais chaque chiffre est un caractère, pas un nombre."},{"key":"digitsToNumbers.answer","english":"When you loop over the string, each character (like `\"4\"`) is text. Use `Number(char)` to turn it into the number `4` before adding it to your total.","target":"Quand tu parcours la string, chaque caractère (comme `\"4\"`) est du texte. Utilise `Number(char)` pour le transformer en nombre `4` avant de l'ajouter à ton total."},{"key":"whichLoop.question","english":"How do I keep going without knowing how many passes I need?","target":"Comment continuer sans savoir combien de passages il me faut ?"},{"key":"whichLoop.answer","english":"You don't know in advance how many times you'll need to sum the digits, so a `while` loop is a great fit. Keep looping while the number has more than one digit.","target":"Tu ne sais pas à l'avance combien de fois tu devras additionner les chiffres, donc une boucle `while` est parfaite. Continue à boucler tant que le nombre contient plus d'un chiffre."},{"key":"keepGoing.question","english":"When do I stop?","target":"Quand est-ce que je m'arrête ?"},{"key":"keepGoing.answer","english":"Stop as soon as the number is a single digit. At that point, return it.","target":"Arrête-toi dès que le nombre ne compte plus qu'un seul chiffre. À ce moment-là, renvoie-le."}]},{"name":"checks","rows":[{"key":"mustUseWhile","english":"Almost! For this exercise we want you to use a `while` loop to keep collapsing until a single digit remains.","target":"Presque ! Pour cet exercice, on attend que tu utilises une boucle `while` pour continuer à réduire jusqu'à ce qu'il ne reste plus qu'un seul chiffre."},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long. See if you can tighten it up.","target":"Tu y es presque ! Ta solution fonctionne, mais elle est un peu longue. Vois si tu peux la raccourcir."}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":"Convertit une string composée de chiffres en nombre"},{"key":"number.category","english":"Type Conversion","target":"Conversion de type"},{"key":"string.description","english":"Convert a number into a string","target":"Convertit un nombre en string"},{"key":"string.category","english":"Type Conversion","target":"Conversion de type"}]}]}]
---

La racine numérique (_digital root_ en anglais) d'un nombre est ce qu'on obtient quand on additionne ses chiffres encore et encore, jusqu'à ce qu'il ne reste plus qu'un seul chiffre.

Si la première addition des chiffres te laisse encore un nombre à plusieurs chiffres, tu additionnes à nouveau les chiffres de _ce_ résultat, et ainsi de suite jusqu'à ce qu'il ne reste plus qu'un seul chiffre.

Par exemple, pour trouver la racine numérique de `942` :

```
9 + 4 + 2 = 15
1 + 5 = 6
```

La racine numérique de `942` est donc `6`.

Un nombre qui ne compte déjà qu'un seul chiffre (comme `7`) est sa propre racine numérique.

Crée une fonction appelée `digitalRoot` qui prend un nombre et renvoie sa racine numérique.

### La fonction `String()`

Au cours des dernières leçons, tu as eu accès à la fonction `Number(str)`, qui convertit une _string_ en nombre.

Tu peux faire la même chose dans l'autre sens, et transformer un nombre en _string_ grâce à la fonction `String(num)`. Par exemple :

```js
String(147) === "147"
```

Là encore, remarque la majuscule au début du nom, et là encore, ne te préoccupe pas du pourquoi pour l'instant !

### Mets en pratique ce que tu as appris.

Il existe bien des façons de résoudre cet exercice, mais la solution attendue ici passe par l'utilisation d'une boucle `while`.

Amuse-toi bien !
