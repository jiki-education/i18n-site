---
lang: "it"
type: "exercise"
slug: "digital-root"
title: "Radice numerica"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/digital-root"
en_md5: "554e48db79141f8304144e152643a47c"
governance_sha: "c80036b"
content_version: "dd5698d90385"
published_at: "2026-08-06"
forum_topic_id: 1043
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"sumTheDigits.name","english":"Sum the digits","target":"Somma le cifre"},{"key":"sumTheDigits.description","english":"Write a function called digitalRoot that takes a number and adds its digits together. For numbers that are already a single digit, and for numbers whose digits sum to a single digit, this first pass is enough.","target":"Scrivi una funzione chiamata digitalRoot che prende un numero e somma le sue cifre. Per i numeri già composti da una sola cifra, e per quelli le cui cifre sommate danno una sola cifra, questo primo passaggio basta."},{"key":"collapseToSingleDigit.name","english":"Keep collapsing until one digit is left","target":"Continua a ridurre finché resta una sola cifra"},{"key":"collapseToSingleDigit.description","english":"Sometimes summing the digits once still leaves more than one digit (for example 942 sums to 15). Keep summing the digits of the result until a single digit remains.","target":"A volte sommare le cifre una volta lascia ancora più di una cifra (per esempio 942 sommato dà 15). Continua a sommare le cifre del risultato finché non resta una sola cifra."},{"key":"keepItTight.name","english":"Bonus: keep it short","target":"Bonus: mantienila corta"},{"key":"keepItTight.description","english":"Your solution already works. For this bonus, tidy it up so the whole function fits in a small number of lines, without any extra clutter.","target":"La tua soluzione funziona già. Per questo bonus, sistemala in modo che tutta la funzione stia in poche righe, senza niente di superfluo."}]},{"name":"scenarios","rows":[{"key":"drZero.name","english":"Zero","target":"Zero"},{"key":"drZero.description","english":"The digital root of 0 is 0.","target":"La radice numerica di 0 è 0."},{"key":"drSingleDigit.name","english":"Already a single digit","target":"Già una sola cifra"},{"key":"drSingleDigit.description","english":"A number that is already a single digit is its own digital root.","target":"Un numero che è già composto da una sola cifra è la propria radice numerica."},{"key":"drTwoDigits.name","english":"Two digits","target":"Due cifre"},{"key":"drTwoDigits.description","english":"16 collapses to 7 in a single pass (1 + 6).","target":"16 si riduce a 7 in un solo passaggio (1 + 6)."},{"key":"drThreeDigits.name","english":"Three digits, one pass","target":"Tre cifre, un passaggio"},{"key":"drThreeDigits.description","english":"132 collapses to 6 in a single pass (1 + 3 + 2).","target":"132 si riduce a 6 in un solo passaggio (1 + 3 + 2)."},{"key":"drThirtyNine.name","english":"Two passes needed","target":"Servono due passaggi"},{"key":"drThirtyNine.description","english":"39 sums to 12, which then sums to 3.","target":"39 sommato dà 12, che a sua volta dà 3."},{"key":"drTwoPasses.name","english":"A number that needs a second pass","target":"Un numero che richiede un secondo passaggio"},{"key":"drTwoPasses.description","english":"942 sums to 15, which then sums to 6.","target":"942 sommato dà 15, che a sua volta dà 6."},{"key":"drLarge.name","english":"A larger number","target":"Un numero più grande"},{"key":"drLarge.description","english":"493193 collapses all the way down to 2.","target":"493193 si riduce fino a 2."},{"key":"drNines.name","english":"All nines","target":"Tutti nove"},{"key":"drNines.description","english":"99999 sums to 45, which then sums to 9.","target":"99999 sommato dà 45, che a sua volta dà 9."},{"key":"drBonusTight.name","english":"A tidy, short solution","target":"Una soluzione corta e ordinata"},{"key":"drBonusTight.description","english":"12345 collapses down to 6 (1 + 2 + 3 + 4 + 5 = 15, then 1 + 5 = 6).","target":"12345 si riduce a 6 (1 + 2 + 3 + 4 + 5 = 15, poi 1 + 5 = 6)."}]},{"name":"hints","rows":[{"key":"whatIsIt.question","english":"What exactly is a digital root?","target":"Che cos'è esattamente una radice numerica?"},{"key":"whatIsIt.answer","english":"Add up all the digits of the number. If that gives you a single digit, that's the answer. If it gives you more than one digit, add up the digits of that result too, and keep going until only one digit is left.","target":"Somma tutte le cifre del numero. Se ottieni una sola cifra, quella è la risposta. Se ottieni più di una cifra, somma anche le cifre di quel risultato, e vai avanti finché non resta una sola cifra."},{"key":"sumDigits.question","english":"How do I add up the digits of a number?","target":"Come sommo le cifre di un numero?"},{"key":"sumDigits.answer","english":"Turn the number into a string so you can walk through it character by character with a `for...of` loop. Keep a running total, adding each digit as you go.","target":"Trasforma il numero in una stringa, così puoi scorrerla carattere per carattere con un ciclo `for...of`. Tieni un totale parziale e aggiungi ogni cifra man mano."},{"key":"digitsToNumbers.question","english":"Each digit is a character though, not a number.","target":"Però ogni cifra è un carattere, non un numero."},{"key":"digitsToNumbers.answer","english":"When you loop over the string, each character (like `\"4\"`) is text. Use `Number(char)` to turn it into the number `4` before adding it to your total.","target":"Quando scorri la stringa, ogni carattere (come `\"4\"`) è testo. Usa `Number(char)` per trasformarlo nel numero `4` prima di aggiungerlo al totale."},{"key":"whichLoop.question","english":"How do I keep going without knowing how many passes I need?","target":"Come faccio a continuare senza sapere quanti passaggi mi servono?"},{"key":"whichLoop.answer","english":"You don't know in advance how many times you'll need to sum the digits, so a `while` loop is a great fit. Keep looping while the number has more than one digit.","target":"Non sai in anticipo quante volte dovrai sommare le cifre, quindi un ciclo `while` è perfetto. Continua il ciclo finché il numero ha più di una cifra."},{"key":"keepGoing.question","english":"When do I stop?","target":"Quando mi fermo?"},{"key":"keepGoing.answer","english":"Stop as soon as the number is a single digit. At that point, return it.","target":"Fermati appena il numero è una sola cifra. A quel punto, restituiscilo."}]},{"name":"checks","rows":[{"key":"mustUseWhile","english":"Almost! For this exercise we want you to use a `while` loop to keep collapsing until a single digit remains.","target":"Ci sei quasi! In questo esercizio vogliamo che tu usi un ciclo `while` per continuare a ridurre finché non resta una sola cifra."},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long. See if you can tighten it up.","target":"Manca pochissimo! La tua soluzione funziona, ma è un po' lunga. Prova ad accorciarla."}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":"Converte una stringa che contiene cifre in un numero"},{"key":"number.category","english":"Type Conversion","target":"Conversione di tipo"},{"key":"string.description","english":"Convert a number into a string","target":"Converte un numero in una stringa"},{"key":"string.category","english":"Type Conversion","target":"Conversione di tipo"}]}]}]
---

La radice numerica (_digital root_ in inglese) di un numero è ciò che ottieni continuando a sommare le sue cifre finché non resta una sola cifra.

Se sommando le cifre una volta ottieni ancora più di una cifra, sommi le cifre di _quel_ risultato, e vai avanti finché non rimane una sola cifra.

Per esempio, per trovare la radice numerica di `942`:

```
9 + 4 + 2 = 15
1 + 5 = 6
```

Quindi la radice numerica di `942` è `6`.

Un numero che è già composto da una sola cifra (come `7`) è la propria radice numerica.

Crea una funzione chiamata `digitalRoot` che prende un numero e restituisce la sua radice numerica.

### La funzione `String()`

Nelle ultime lezioni hai avuto a disposizione la funzione `Number(str)`, che converte una stringa in un numero.

Puoi fare la stessa cosa al contrario e trasformare un numero in una stringa con la funzione `String(num)`. Per esempio:

```js
String(147) === "147"
```

Anche qui, nota la lettera maiuscola all'inizio, e anche qui non preoccuparti del perché per ora!

### Mettiamo in pratica quello che hai imparato.

Anche se ci sono tanti modi per risolvere questo esercizio, la soluzione a cui vogliamo che tu arrivi usa un ciclo `while`.

Buon divertimento!
