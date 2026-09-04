---
lang: "es-ES"
type: "exercise"
slug: "digital-root"
title: "Raíz digital"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/digital-root"
en_md5: "defdd57bb547464b7d3e0e8c5aefb5dc"
governance_sha: "8c74f1c7"
content_version: "fa24ce3563c7"
published_at: "2026-09-04"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"sumTheDigits.name","english":"Sum the digits","target":"Suma los dígitos"},{"key":"sumTheDigits.description","english":"Write a function called digitalRoot that takes a number and adds its digits together. For numbers that are already a single digit, and for numbers whose digits sum to a single digit, this first pass is enough.","target":"Escribe una función llamada digitalRoot que recibe un número y suma sus dígitos. Para los números que ya son de un solo dígito, y para los números cuyos dígitos suman un solo dígito, este primer paso es suficiente."},{"key":"collapseToSingleDigit.name","english":"Keep collapsing until one digit is left","target":"Sigue reduciendo hasta que quede un solo dígito"},{"key":"collapseToSingleDigit.description","english":"Sometimes summing the digits once still leaves more than one digit (for example 942 sums to 15). Keep summing the digits of the result until a single digit remains.","target":"A veces, sumar los dígitos una vez todavía deja más de un dígito (por ejemplo, 942 suma 15). Sigue sumando los dígitos del resultado hasta que quede un solo dígito."},{"key":"keepItTight.name","english":"Solve it in 10 lines","target":"Resuélvelo en 10 líneas"},{"key":"keepItTight.description","english":"Your solution already works. For this bonus, try and solve this in 10 lines of code or fewer.","target":"Tu solución ya funciona. En este extra, intenta resolverlo en 10 líneas de código o menos."}]},{"name":"scenarios","rows":[{"key":"drZero.name","english":"Zero","target":"Cero"},{"key":"drZero.description","english":"The digital root of 0 is 0.","target":"La raíz digital de 0 es 0."},{"key":"drSingleDigit.name","english":"Already a single digit","target":"Ya es un solo dígito"},{"key":"drSingleDigit.description","english":"A number that is already a single digit is its own digital root.","target":"Un número que ya es de un solo dígito es su propia raíz digital."},{"key":"drTwoDigits.name","english":"Two digits","target":"Dos dígitos"},{"key":"drTwoDigits.description","english":"16 collapses to 7 in a single pass (1 + 6).","target":"16 se reduce a 7 en un solo paso (1 + 6)."},{"key":"drThreeDigits.name","english":"Three digits, one pass","target":"Tres dígitos, un solo paso"},{"key":"drThreeDigits.description","english":"132 collapses to 6 in a single pass (1 + 3 + 2).","target":"132 se reduce a 6 en un solo paso (1 + 3 + 2)."},{"key":"drThirtyNine.name","english":"Two passes needed","target":"Se necesitan dos pasos"},{"key":"drThirtyNine.description","english":"39 sums to 12, which then sums to 3.","target":"39 suma 12, que luego suma 3."},{"key":"drTwoPasses.name","english":"A number that needs a second pass","target":"Un número que necesita un segundo paso"},{"key":"drTwoPasses.description","english":"942 sums to 15, which then sums to 6.","target":"942 suma 15, que luego suma 6."},{"key":"drLarge.name","english":"A larger number","target":"Un número mayor"},{"key":"drLarge.description","english":"493193 collapses all the way down to 2.","target":"493193 se reduce por completo hasta 2."},{"key":"drNines.name","english":"All nines","target":"Todo nueves"},{"key":"drNines.description","english":"99999 sums to 45, which then sums to 9.","target":"99999 suma 45, que luego suma 9."},{"key":"drBonusTight.name","english":"A tidy, short solution","target":"Una solución ordenada y corta"},{"key":"drBonusTight.description","english":"Try and solve this in 10 lines of code or fewer. 12345 collapses down to 6 (1 + 2 + 3 + 4 + 5 = 15, then 1 + 5 = 6).","target":"Intenta resolverlo en 10 líneas de código o menos. 12345 se reduce a 6 (1 + 2 + 3 + 4 + 5 = 15, luego 1 + 5 = 6)."}]},{"name":"hints","rows":[{"key":"whatIsIt.question","english":"What exactly is a digital root?","target":"¿Qué es exactamente la raíz digital?"},{"key":"whatIsIt.answer","english":"Add up all the digits of the number. If that gives you a single digit, that's the answer. If it gives you more than one digit, add up the digits of that result too, and keep going until only one digit is left.","target":"Suma todos los dígitos del número. Si eso te da un solo dígito, esa es la respuesta. Si te da más de un dígito, suma también los dígitos de ese resultado, y sigue así hasta que quede solo un dígito."},{"key":"sumDigits.question","english":"How do I add up the digits of a number?","target":"¿Cómo sumo los dígitos de un número?"},{"key":"sumDigits.answer","english":"Turn the number into a string so you can walk through it character by character with a `for...of` loop. Keep a running total, adding each digit as you go.","target":"Convierte el número en un string para que puedas recorrerlo carácter por carácter con un bucle `for...of`. Mantén un total acumulado, sumando cada dígito a medida que avanzas."},{"key":"digitsToNumbers.question","english":"Each digit is a character though, not a number.","target":"Pero cada dígito es un carácter, no un número."},{"key":"digitsToNumbers.answer","english":"When you loop over the string, each character (like `\"4\"`) is text. Use `Number(char)` to turn it into the number `4` before adding it to your total.","target":"Cuando recorres el string, cada carácter (como `\"4\"`) es texto. Usa `Number(char)` para convertirlo en el número `4` antes de sumarlo a tu total."},{"key":"whichLoop.question","english":"How do I keep going without knowing how many passes I need?","target":"¿Cómo sigo sin saber cuántos pasos necesito?"},{"key":"whichLoop.answer","english":"You don't know in advance how many times you'll need to sum the digits, so a `while` loop is a great fit. Keep looping while the number has more than one digit.","target":"No sabes de antemano cuántas veces necesitarás sumar los dígitos, así que un bucle `while` es una gran opción. Sigue repitiendo mientras el número tenga más de un dígito."},{"key":"keepGoing.question","english":"When do I stop?","target":"¿Cuándo paro?"},{"key":"keepGoing.answer","english":"Stop as soon as the number is a single digit. At that point, return it.","target":"Para tan pronto como el número sea de un solo dígito. En ese momento, devuélvelo."}]},{"name":"checks","rows":[{"key":"mustUseWhile","english":"Almost! For this exercise we want you to use a `while` loop to keep collapsing until a single digit remains.","target":"¡Casi! Para este ejercicio queremos que uses un bucle `while` para seguir colapsando hasta que quede un solo dígito."},{"key":"tooManyLines","english":"Keep going! See if you can get down to 10 lines of code.","target":"¡Sigue adelante! A ver si puedes conseguirlo en 10 líneas de código."}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":"Convierte un string que contiene dígitos en un número"},{"key":"number.category","english":"Type Conversion","target":"Conversión de tipos"},{"key":"string.description","english":"Convert a number into a string","target":"Convierte un número en un string"},{"key":"string.category","english":"Type Conversion","target":"Conversión de tipos"}]}]}]
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
