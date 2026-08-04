---
lang: "hu"
type: "exercise"
slug: "digital-root"
title: "Digitális gyök"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/digital-root"
en_md5: "554e48db79141f8304144e152643a47c"
governance_sha: "fe54e35"
content_version: "a4b81d60f8ab"
published_at: "2026-08-04"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"sumTheDigits.name","english":"Sum the digits","target":"Add össze a számjegyeket"},{"key":"sumTheDigits.description","english":"Write a function called digitalRoot that takes a number and adds its digits together. For numbers that are already a single digit, and for numbers whose digits sum to a single digit, this first pass is enough.","target":"Írj egy `digitalRoot` nevű függvényt, amely egy számot fogad, és összeadja a számjegyeit. Azoknál a számoknál, amelyek már egyjegyűek, illetve amelyeknek a számjegyei egyjegyűre összegződnek, ez az első menet elég."},{"key":"collapseToSingleDigit.name","english":"Keep collapsing until one digit is left","target":"Add össze, amíg egyjegyű nem lesz"},{"key":"collapseToSingleDigit.description","english":"Sometimes summing the digits once still leaves more than one digit (for example 942 sums to 15). Keep summing the digits of the result until a single digit remains.","target":"Néha a számjegyek egyszeri összeadása után még mindig több számjegy marad (például a 942 15-re összegződik). Add össze az eredmény számjegyeit, amíg egyetlen számjegy nem marad."},{"key":"keepItTight.name","english":"Bonus: keep it short","target":"Bónusz: legyen rövid"},{"key":"keepItTight.description","english":"Your solution already works. For this bonus, tidy it up so the whole function fits in a small number of lines, without any extra clutter.","target":"A megoldásod már működik. Ennél a bónusznál tisztogasd meg úgy, hogy a függvény elférjen néhány sorban, felesleges dolgok nélkül."}]},{"name":"scenarios","rows":[{"key":"drZero.name","english":"Zero","target":"Nulla"},{"key":"drZero.description","english":"The digital root of 0 is 0.","target":"A 0 digitális gyöke 0."},{"key":"drSingleDigit.name","english":"Already a single digit","target":"Már eleve egyjegyű"},{"key":"drSingleDigit.description","english":"A number that is already a single digit is its own digital root.","target":"Egy már eleve egyjegyű szám a saját digitális gyöke."},{"key":"drTwoDigits.name","english":"Two digits","target":"Két számjegy"},{"key":"drTwoDigits.description","english":"16 collapses to 7 in a single pass (1 + 6).","target":"A 16 egy menetben 7-re összegződik (1 + 6)."},{"key":"drThreeDigits.name","english":"Three digits, one pass","target":"Három számjegy, egy menet"},{"key":"drThreeDigits.description","english":"132 collapses to 6 in a single pass (1 + 3 + 2).","target":"A 132 egy menetben 6-ra összegződik (1 + 3 + 2)."},{"key":"drThirtyNine.name","english":"Two passes needed","target":"Két menet szükséges"},{"key":"drThirtyNine.description","english":"39 sums to 12, which then sums to 3.","target":"A 39 12-re összegződik, ami aztán 3-ra összegződik."},{"key":"drTwoPasses.name","english":"A number that needs a second pass","target":"Egy szám, amelyik második menetet igényel"},{"key":"drTwoPasses.description","english":"942 sums to 15, which then sums to 6.","target":"A 942 15-re összegződik, ami aztán 6-ra összegződik."},{"key":"drLarge.name","english":"A larger number","target":"Egy nagyobb szám"},{"key":"drLarge.description","english":"493193 collapses all the way down to 2.","target":"A 493193 egészen 2-re összegződik."},{"key":"drNines.name","english":"All nines","target":"Csupa kilences"},{"key":"drNines.description","english":"99999 sums to 45, which then sums to 9.","target":"A 99999 45-re összegződik, ami aztán 9-re összegződik."},{"key":"drBonusTight.name","english":"A tidy, short solution","target":"Egy tiszta, rövid megoldás"},{"key":"drBonusTight.description","english":"12345 collapses down to 6 (1 + 2 + 3 + 4 + 5 = 15, then 1 + 5 = 6).","target":"A 12345 6-ra összegződik (1 + 2 + 3 + 4 + 5 = 15, majd 1 + 5 = 6)."}]},{"name":"hints","rows":[{"key":"whatIsIt.question","english":"What exactly is a digital root?","target":"Pontosan mi a digitális gyök?"},{"key":"whatIsIt.answer","english":"Add up all the digits of the number. If that gives you a single digit, that's the answer. If it gives you more than one digit, add up the digits of that result too, and keep going until only one digit is left.","target":"Add össze a szám összes számjegyét. Ha ez egyjegyű számot ad, az a válasz. Ha egynél több számjegyet kapsz, add össze ennek az eredménynek a számjegyeit is, és folytasd, amíg csak egy számjegy marad."},{"key":"sumDigits.question","english":"How do I add up the digits of a number?","target":"Hogyan adjam össze egy szám számjegyeit?"},{"key":"sumDigits.answer","english":"Turn the number into a string so you can walk through it character by character with a `for...of` loop. Keep a running total, adding each digit as you go.","target":"Alakítsd a számot stringgé, hogy egy `for...of` ciklussal karakterenként végig tudj menni rajta. Tarts nyilván egy futó összeget, és minden számjegyet adj hozzá."},{"key":"digitsToNumbers.question","english":"Each digit is a character though, not a number.","target":"De minden számjegy karakter, nem szám."},{"key":"digitsToNumbers.answer","english":"When you loop over the string, each character (like `\"4\"`) is text. Use `Number(char)` to turn it into the number `4` before adding it to your total.","target":"Amikor végigmész a stringen, minden karakter (például `\"4\"`) szöveg. Használd a `Number(char)`-t, hogy átalakítsd a `4` számmá, mielőtt hozzáadnád az összeghez."},{"key":"whichLoop.question","english":"How do I keep going without knowing how many passes I need?","target":"Hogyan haladjak tovább, ha nem tudom, hány menetre van szükség?"},{"key":"whichLoop.answer","english":"You don't know in advance how many times you'll need to sum the digits, so a `while` loop is a great fit. Keep looping while the number has more than one digit.","target":"Előre nem tudod, hányszor kell összeadnod a számjegyeket, ezért a `while` ciklus remek választás. Csináld tovább a ciklust, amíg a számnak egynél több számjegye van."},{"key":"keepGoing.question","english":"When do I stop?","target":"Mikor álljak meg?"},{"key":"keepGoing.answer","english":"Stop as soon as the number is a single digit. At that point, return it.","target":"Állj meg, amint a szám egyjegyű. Ekkor add vissza."}]},{"name":"checks","rows":[{"key":"mustUseWhile","english":"Almost! For this exercise we want you to use a `while` loop to keep collapsing until a single digit remains.","target":"Majdnem! Ebben a feladatban azt szeretnénk, hogy egy `while` ciklust használj, hogy addig összegezd, amíg egy számjegy marad."},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long. See if you can tighten it up.","target":"Nagyon közel! A megoldásod működik, de egy kicsit hosszú. Nézd meg, hogy tudod-e egyszerűsíteni."}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":"Számjegyeket tartalmazó string átalakítása számmá"},{"key":"number.category","english":"Type Conversion","target":"Típuskonverzió"},{"key":"string.description","english":"Convert a number into a string","target":"Szám átalakítása stringgé"},{"key":"string.category","english":"Type Conversion","target":"Típuskonverzió"}]}]}]
---

Egy szám digitális gyöke (_digital root_ angolul) az, amit akkor kapsz, amikor addig adod össze a számjegyeit, amíg már csak egyetlen számjegy marad.

Ha a számjegyek egyszeri összeadása után még mindig több számjegyből álló eredményt kapsz, akkor ennek az eredménynek a számjegyeit adod össze, és ezt addig folytatod, amíg egyetlen számjegy nem marad.

Például a `942` digitális gyökének kiszámításához:

```
9 + 4 + 2 = 15
1 + 5 = 6
```

Tehát `942` digitális gyöke `6`.

Egy olyan szám, amely már eleve egyjegyű (például `7`), a saját digitális gyöke.

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
