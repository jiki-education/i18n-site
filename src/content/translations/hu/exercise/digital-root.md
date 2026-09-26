---
lang: "hu"
type: "exercise"
slug: "digital-root"
title: "Digitális gyök"
status: "published"
source_repo: "i18n"
source_path: "locales/hu/curriculum/exercises/digital-root"
en_md5: "defdd57bb547464b7d3e0e8c5aefb5dc"
governance_sha: "4caf34be"
content_version: "11928b857afb"
published_at: "2026-09-26"
forum_topic_id: 1221
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"sumTheDigits.name","english":"Sum the digits","target":"Add össze a számjegyeket"},{"key":"sumTheDigits.description","english":"Write a function called digitalRoot that takes a number and adds its digits together. For numbers that are already a single digit, and for numbers whose digits sum to a single digit, this first pass is enough.","target":"Írj egy digitalRoot nevű függvényt, amely egy számot fogad, és összeadja a számjegyeit. Azoknál a számoknál, amelyek már eleve egyjegyűek, és azoknál, amelyeknek a számjegyei egyetlen számjegyre adódnak össze, ez elég is."},{"key":"collapseToSingleDigit.name","english":"Keep collapsing until one digit is left","target":"Addig összegezz, amíg egyjegyű nem lesz"},{"key":"collapseToSingleDigit.description","english":"Sometimes summing the digits once still leaves more than one digit (for example 942 sums to 15). Keep summing the digits of the result until a single digit remains.","target":"Néha a számjegyek egyszeri összeadása után még mindig több számjegy marad (például a 942 összege 15). Add össze az eredmény számjegyeit mindaddig, amíg egyetlen számjegy nem marad."},{"key":"keepItTight.name","english":"Solve it in 10 lines","target":"Oldd meg 10 sorban"},{"key":"keepItTight.description","english":"Your solution already works. For this bonus, try and solve this in 10 lines of code or fewer.","target":"A megoldásod már működik. Ebben a bónuszban próbáld meg 10 vagy annál kevesebb sorból álló kóddal megoldani."}]},{"name":"scenarios","rows":[{"key":"drZero.name","english":"Zero","target":"Nulla"},{"key":"drZero.description","english":"The digital root of 0 is 0.","target":"A 0 digitális gyöke 0."},{"key":"drSingleDigit.name","english":"Already a single digit","target":"Már eleve egyjegyű"},{"key":"drSingleDigit.description","english":"A number that is already a single digit is its own digital root.","target":"Egy már eleve egyjegyű szám önmaga digitális gyöke."},{"key":"drTwoDigits.name","english":"Two digits","target":"Kétjegyű"},{"key":"drTwoDigits.description","english":"16 collapses to 7 in a single pass (1 + 6).","target":"A 16 egyetlen menetben 7-re adódik össze (1 + 6)."},{"key":"drThreeDigits.name","english":"Three digits, one pass","target":"Háromjegyű, egy menet"},{"key":"drThreeDigits.description","english":"132 collapses to 6 in a single pass (1 + 3 + 2).","target":"A 132 egyetlen menetben 6-ra adódik össze (1 + 3 + 2)."},{"key":"drThirtyNine.name","english":"Two passes needed","target":"Két menet kell"},{"key":"drThirtyNine.description","english":"39 sums to 12, which then sums to 3.","target":"A 39 összege 12, ami aztán 3-ra adódik össze."},{"key":"drTwoPasses.name","english":"A number that needs a second pass","target":"Egy szám, amelyikhez második menet kell"},{"key":"drTwoPasses.description","english":"942 sums to 15, which then sums to 6.","target":"A 942 összege 15, ami aztán 6-ra adódik össze."},{"key":"drLarge.name","english":"A larger number","target":"Egy nagyobb szám"},{"key":"drLarge.description","english":"493193 collapses all the way down to 2.","target":"A 493193 egészen 2-ig adódik össze."},{"key":"drNines.name","english":"All nines","target":"Csupa kilences"},{"key":"drNines.description","english":"99999 sums to 45, which then sums to 9.","target":"A 99999 összege 45, ami aztán 9-ra adódik össze."},{"key":"drBonusTight.name","english":"A tidy, short solution","target":"Egy tömör, rövid megoldás"},{"key":"drBonusTight.description","english":"Try and solve this in 10 lines of code or fewer. 12345 collapses down to 6 (1 + 2 + 3 + 4 + 5 = 15, then 1 + 5 = 6).","target":"Próbáld meg 10 vagy annál kevesebb sorból álló kóddal megoldani. A 12345 egészen 6-ig adódik össze (1 + 2 + 3 + 4 + 5 = 15, majd 1 + 5 = 6)."}]},{"name":"hints","rows":[{"key":"whatIsIt.question","english":"What exactly is a digital root?","target":"Mi is pontosan a digitális gyök?"},{"key":"whatIsIt.answer","english":"Add up all the digits of the number. If that gives you a single digit, that's the answer. If it gives you more than one digit, add up the digits of that result too, and keep going until only one digit is left.","target":"Add össze a szám összes számjegyét. Ha egyetlen számjegyet kapsz, az a válasz. Ha egynél több számjegyet kapsz, add össze annak az eredménynek a számjegyeit is, és folytasd, amíg csak egy számjegy nem marad."},{"key":"sumDigits.question","english":"How do I add up the digits of a number?","target":"Hogyan adom össze egy szám számjegyeit?"},{"key":"sumDigits.answer","english":"Turn the number into a string so you can walk through it character by character with a `for...of` loop. Keep a running total, adding each digit as you go.","target":"Alakítsd a számot stringgé, hogy egy `for...of` ciklussal karakterenként végig tudj rajta menni. Tarts nyilván egy futó összeget, és közben add hozzá az egyes számjegyeket."},{"key":"digitsToNumbers.question","english":"Each digit is a character though, not a number.","target":"De minden számjegy karakter, nem szám."},{"key":"digitsToNumbers.answer","english":"When you loop over the string, each character (like `\"4\"`) is text. Use `Number(char)` to turn it into the number `4` before adding it to your total.","target":"Amikor végigmész a stringen, minden karakter (például `\"4\"`) szöveg. Használd a `Number(char)`-t, hogy a `4`-et számmá alakítsd át, mielőtt hozzáadnád az összeghez."},{"key":"whichLoop.question","english":"How do I keep going without knowing how many passes I need?","target":"Hogyan folytassam, ha nem tudom, hány menetre van szükségem?"},{"key":"whichLoop.answer","english":"You don't know in advance how many times you'll need to sum the digits, so a `while` loop is a great fit. Keep looping while the number has more than one digit.","target":"Nem tudod előre, hányszor kell összeadnod a számjegyeket, ezért a `while` ciklus remek választás. Addig fusson a ciklus, amíg a számnak egynél több számjegye van."},{"key":"keepGoing.question","english":"When do I stop?","target":"Mikor álljak meg?"},{"key":"keepGoing.answer","english":"Stop as soon as the number is a single digit. At that point, return it.","target":"Állj meg, amint a szám egyjegyű. Ekkor add vissza."}]},{"name":"checks","rows":[{"key":"mustUseWhile","english":"Almost! For this exercise we want you to use a `while` loop to keep collapsing until a single digit remains.","target":"Majdnem! Ehhez a feladathoz azt szeretnénk, hogy egy `while` ciklust használj, és addig összegezz, amíg egy számjegy marad."},{"key":"tooManyLines","english":"Keep going! See if you can get down to 10 lines of code.","target":"Folytasd! Nézd meg, le tudod-e rövidíteni 10 sornyi kódra."}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":"Alakíts át egy számjegyeket tartalmazó stringet számmá."},{"key":"number.category","english":"Type Conversion","target":"Típuskonverzió"},{"key":"string.description","english":"Convert a number into a string","target":"Alakíts át egy számot stringgé."},{"key":"string.category","english":"Type Conversion","target":"Típuskonverzió"}]}]}]
---

Egy szám digitális gyöke (_digital root_ angolul) az, amit akkor kapsz, amikor addig adod össze a számjegyeit, amíg már csak egyetlen számjegy marad.

Ha a számjegyek egyszeri összeadása után még mindig több számjegyből álló eredményt kapsz, akkor ennek az eredménynek a számjegyeit adod össze, és ezt addig folytatod, amíg egyetlen számjegy nem marad.

Például a `942` digitális gyökének kiszámításához:

```
9 + 4 + 2 = 15
1 + 5 = 6
```

Tehát `942` digitális gyöke `6`.

Egy olyan szám, amely már eleve egyjegyű (például `7`), önmaga digitális gyöke.

Hozz létre egy `digitalRoot` nevű függvényt, amely egy számot fogad, és visszaadja annak digitális gyökét.

### A `String()` függvény

Az utóbbi pár leckében hozzáférhettél a `Number(str)` függvényhez, amely egy stringet számmá alakít.

Ugyanezt fordítva is megteheted, és a `String(num)` függvénnyel egy számot stringgé alakíthatsz. Például:

```js
String(147) === "147"
```

Figyeld meg, hogy itt is nagy kezdőbetűvel írjuk, és egyelőre ne törődj az okával!

### A tanultak gyakorlatba ültetése

Bár ezt a feladatot sokféleképpen meg lehet oldani, a megoldás, amit szeretnénk, ha kitalálnál, egy `while` ciklust használ.

Jó szórakozást!
