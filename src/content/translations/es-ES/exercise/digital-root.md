---
lang: "es-ES"
type: "exercise"
slug: "digital-root"
title: "Raíz digital"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/digital-root"
en_md5: "554e48db79141f8304144e152643a47c"
governance_sha: "16f805d"
content_version: "b70bcb521c0a"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"sumTheDigits.name","english":"Sum the digits","target":"Suma los dígitos"},{"key":"sumTheDigits.description","english":"Write a function called digitalRoot that takes a number and adds its digits together. For numbers that are already a single digit, and for numbers whose digits sum to a single digit, this first pass is enough.","target":"Escribe una función llamada digitalRoot que toma un número y suma sus dígitos. Para números que ya son de un solo dígito, y para números cuyos dígitos suman un solo dígito, esta primera pasada es suficiente."},{"key":"collapseToSingleDigit.name","english":"Keep collapsing until one digit is left","target":"Sigue reduciendo hasta que quede un solo dígito"},{"key":"collapseToSingleDigit.description","english":"Sometimes summing the digits once still leaves more than one digit (for example 942 sums to 15). Keep summing the digits of the result until a single digit remains.","target":"A veces, sumar los dígitos una vez todavía deja más de un dígito (por ejemplo, 942 suma 15). Sigue sumando los dígitos del resultado hasta que quede un solo dígito."},{"key":"keepItTight.name","english":"Bonus: keep it short","target":"Bonus: manténlo corto"},{"key":"keepItTight.description","english":"Your solution already works. For this bonus, tidy it up so the whole function fits in a small number of lines, without any extra clutter.","target":"Tu solución ya funciona. Para este bonus, ordénala de modo que toda la función quepa en un número pequeño de líneas, sin ningún desorden adicional."}]},{"name":"scenarios","rows":[{"key":"drZero.name","english":"Zero","target":"Cero"},{"key":"drZero.description","english":"The digital root of 0 is 0.","target":"La raíz digital de 0 es 0."},{"key":"drSingleDigit.name","english":"Already a single digit","target":"Ya es un solo dígito"},{"key":"drSingleDigit.description","english":"A number that is already a single digit is its own digital root.","target":"Un número que ya es de un solo dígito es su propia raíz digital."},{"key":"drTwoDigits.name","english":"Two digits","target":"Dos dígitos"},{"key":"drTwoDigits.description","english":"16 collapses to 7 in a single pass (1 + 6).","target":"16 se reduce a 7 en una sola pasada (1 + 6)."},{"key":"drThreeDigits.name","english":"Three digits, one pass","target":"Tres dígitos, una pasada"},{"key":"drThreeDigits.description","english":"132 collapses to 6 in a single pass (1 + 3 + 2).","target":"132 se reduce a 6 en una sola pasada (1 + 3 + 2)."},{"key":"drThirtyNine.name","english":"Two passes needed","target":"Se necesitan dos pasadas"},{"key":"drThirtyNine.description","english":"39 sums to 12, which then sums to 3.","target":"39 suma 12, y luego suma 3."},{"key":"drTwoPasses.name","english":"A number that needs a second pass","target":"Un número que necesita una segunda pasada"},{"key":"drTwoPasses.description","english":"942 sums to 15, which then sums to 6.","target":"942 suma 15, y luego suma 6."},{"key":"drLarge.name","english":"A larger number","target":"Un número más grande"},{"key":"drLarge.description","english":"493193 collapses all the way down to 2.","target":"493193 se reduce completamente a 2."},{"key":"drNines.name","english":"All nines","target":"Puros nueves"},{"key":"drNines.description","english":"99999 sums to 45, which then sums to 9.","target":"99999 suma 45, y luego suma 9."},{"key":"drBonusTight.name","english":"A tidy, short solution","target":"Una solución ordenada y corta"},{"key":"drBonusTight.description","english":"12345 collapses down to 6 (1 + 2 + 3 + 4 + 5 = 15, then 1 + 5 = 6).","target":"12345 se reduce a 6 (1 + 2 + 3 + 4 + 5 = 15, luego 1 + 5 = 6)."}]},{"name":"hints","rows":[{"key":"whatIsIt.question","english":"What exactly is a digital root?","target":"¿Qué es exactamente una raíz digital?"},{"key":"whatIsIt.answer","english":"Add up all the digits of the number. If that gives you a single digit, that's the answer. If it gives you more than one digit, add up the digits of that result too, and keep going until only one digit is left.","target":"Suma todos los dígitos del número. Si eso te da un solo dígito, esa es la respuesta. Si te da más de un dígito, suma los dígitos de ese resultado también, y sigue así hasta que solo quede un dígito."},{"key":"sumDigits.question","english":"How do I add up the digits of a number?","target":"¿Cómo sumo los dígitos de un número?"},{"key":"sumDigits.answer","english":"Turn the number into a string so you can walk through it character by character with a `for...of` loop. Keep a running total, adding each digit as you go.","target":"Convierte el número en un string para que puedas recorrerlo carácter por carácter con un bucle `for...of`. Mantén un total acumulado, sumando cada dígito a medida que avanzas."},{"key":"digitsToNumbers.question","english":"Each digit is a character though, not a number.","target":"Aunque cada dígito es un carácter, no un número."},{"key":"digitsToNumbers.answer","english":"When you loop over the string, each character (like `\"4\"`) is text. Use `Number(char)` to turn it into the number `4` before adding it to your total.","target":"Cuando recorres el string, cada carácter (como `\"4\"`) es texto. Usa `Number(char)` para convertirlo en el número `4` antes de sumarlo a tu total."},{"key":"whichLoop.question","english":"How do I keep going without knowing how many passes I need?","target":"¿Cómo sigo sin saber cuántas pasadas necesito?"},{"key":"whichLoop.answer","english":"You don't know in advance how many times you'll need to sum the digits, so a `while` loop is a great fit. Keep looping while the number has more than one digit.","target":"No sabes de antemano cuántas veces necesitarás sumar los dígitos, así que un bucle `while` es perfecto. Sigue iterando mientras el número tenga más de un dígito."},{"key":"keepGoing.question","english":"When do I stop?","target":"¿Cuándo paro?"},{"key":"keepGoing.answer","english":"Stop as soon as the number is a single digit. At that point, return it.","target":"Para tan pronto como el número sea de un solo dígito. En ese momento, devuélvelo."}]},{"name":"checks","rows":[{"key":"mustUseWhile","english":"Almost! For this exercise we want you to use a `while` loop to keep collapsing until a single digit remains.","target":"¡Casi! Para este ejercicio queremos que uses un bucle `while` para seguir reduciendo hasta que quede un solo dígito."},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long. See if you can tighten it up.","target":"¡Muy cerca! Tu solución funciona, pero es un poco larga. Mira si puedes acortarla."}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":"Convierte un string que contiene dígitos a un número"},{"key":"number.category","english":"Type Conversion","target":"Conversión de tipo"},{"key":"string.description","english":"Convert a number into a string","target":"Convierte un número a un string"},{"key":"string.category","english":"Type Conversion","target":"Conversión de tipo"}]}]}]
---

La raíz digital (_digital root_ en inglés) de un número es lo que obtienes cuando sumas sus dígitos una y otra vez hasta que solo queda un dígito.

Si al sumar los dígitos una vez todavía quedan más de un dígito, sumas los dígitos de _ese_ resultado, y sigues así hasta que quede un solo dígito.

Por ejemplo, para encontrar la raíz digital de `942`:

```
9 + 4 + 2 = 15
1 + 5 = 6
```

Entonces, la raíz digital de `942` es `6`.

Un número que ya es un solo dígito (como `7`) es su propia raíz digital.

Crea una función llamada `digitalRoot` que recibe un número y devuelve su raíz digital.

### La función `String()`

En las últimas lecciones, tuviste acceso a la función `Number(str)`, que convierte un string en un número.

Puedes hacer lo mismo a la inversa, y convertir un número en un string usando la función `String(num)`. Por ejemplo:

```js
String(147) === "147"
```

De nuevo, nota que empieza con mayúscula, ¡y tampoco te preocupes por ahora del porqué!

### Pon en práctica lo que aprendiste

Aunque hay muchas formas de resolver este ejercicio, la solución que queremos que encuentres usa un bucle `while`.

¡Diviértete!
