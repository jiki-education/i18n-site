---
lang: "es-ES"
type: "exercise"
slug: "collatz-conjecture"
title: "Conjetura de Collatz"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/collatz-conjecture"
en_md5: "6fbe47d0456ca4f5db8e74b3f6de3cb0"
governance_sha: "16f805d"
content_version: "c123e71cafd1"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"calculateCollatzSteps.name","english":"Calculate Collatz steps","target":"Calcular los pasos de Collatz"},{"key":"calculateCollatzSteps.description","english":"Write a function that takes a number and returns how many steps it takes to reach 1 following the Collatz Conjecture rules: if even, divide by 2; if odd, multiply by 3 and add 1.","target":"Escribe una función que tome un número y devuelva cuántos pasos toma llegar al 1 siguiendo las reglas de la Conjetura de Collatz: si es par, divide entre 2; si es impar, multiplica por 3 y suma 1."}]},{"name":"scenarios","rows":[{"key":"number1.name","english":"Number 1","target":"Número 1"},{"key":"number1.description","english":"Zero steps for one.","target":"Cero pasos para el uno."},{"key":"number16.name","english":"Number 16","target":"Número 16"},{"key":"number16.description","english":"Divide if even.","target":"Divide si es par."},{"key":"number12.name","english":"Number 12","target":"Número 12"},{"key":"number12.description","english":"Even and odd steps.","target":"Pasos pares e impares."},{"key":"number1000000.name","english":"Number 1000000","target":"Número 1000000"},{"key":"number1000000.description","english":"Large number of even and odd steps.","target":"Gran cantidad de pasos pares e impares."}]},{"name":"hints","rows":[{"key":"loopUntilOne.question","english":"How do I keep going until the number reaches 1?","target":"¿Cómo sigo hasta que el número llegue a 1?"},{"key":"loopUntilOne.answer","english":"Use a `repeat()` loop with no number — it repeats forever until you `return` out of it. Inside the loop, replace the number with the next number in the sequence, and return once it reaches 1.","target":"Usa un bucle `repeat()` sin número: se repite indefinidamente hasta que uses `return` para salir de él. Dentro del bucle, reemplaza el número por el siguiente número de la secuencia, y devuelve una vez que llegue a 1."},{"key":"chooseRule.question","english":"How do I decide which rule to apply on each step?","target":"¿Cómo decido qué regla aplicar en cada paso?"},{"key":"chooseRule.answer","english":"Check whether the number is even. The modulo operator does this. `number % 2 === 0` means it's even. If even, halve it. Otherwise, do `3 * number + 1`.","target":"Comprueba si el número es par. El operador de módulo lo hace. `number % 2 === 0` significa que es par. Si es par, divídelo entre 2. De lo contrario, haz `3 * number + 1`."},{"key":"trackSteps.question","english":"How do I track the answer (the number of steps)?","target":"¿Cómo llevo la cuenta de la respuesta (el número de pasos)?"},{"key":"trackSteps.answer","english":"Keep a counter variable for how many times you've applied the rules. Think about what needs to happen to it each time round the loop, and what your function should return when the number reaches 1.","target":"Mantén una variable contador para cuántas veces has aplicado las reglas. Piensa en qué debe sucederle cada vez que das una vuelta al bucle, y qué debe devolver tu función cuando el número llegue a 1."}]}]}]
---

Una noche, te topaste con un viejo cuaderno lleno de garabatos crípticos, como si alguien hubiera estado persiguiendo obsesivamente una idea. En una página, una sola pregunta destacaba: **¿Puede todo número encontrar su camino al 1?** Estaba relacionada con algo llamado la **Conjetura de Collatz**, un acertijo que ha desconcertado a los pensadores durante décadas.

Las reglas son engañosamente simples:

1. Elige un número.
2. Si es par, divídelo entre 2.
3. Si es impar, multiplícalo por 3 y luego súmale 1.
4. Repite con el resultado, continuando indefinidamente.

Por ejemplo, empezando con 12:

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

Contando a partir del segundo número (6), tomó 9 pasos alcanzar el 1.

Crea una función llamada `collatzSteps` (pasos de Collatz) que toma un argumento, un número. Devuelve **cuántos pasos** toma para que cualquier número llegue al 1, siguiendo las reglas de la conjetura de Collatz.
