---
lang: "es-419"
type: "exercise"
slug: "leap"
title: "Años bisiestos"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/leap"
en_md5: "0e6c7c50ad01b4d9fe07d721fd973afb"
governance_sha: "c80036b"
content_version: "ab3383a60d3a"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanOneLine","english":"You used more than one line of code within the function.","target":"Usaste más de una línea de código dentro de la función."}]},{"name":"tasks","rows":[{"key":"determineLeapYear.name","english":"Determine if the year is a leap year","target":"Determina si el año es bisiesto"},{"key":"determineLeapYear.description","english":"Write a function called isLeapYear that takes a year as its input and returns true if it is a leap year, or false if it is not.","target":"Escribe una función llamada `isLeapYear` que recibe un año como argumento y devuelve `true` si es bisiesto, o `false` si no lo es."},{"key":"solveInOneLine.name","english":"Solve in one line of code","target":"Resuelve en una línea de código"},{"key":"solveInOneLine.description","english":"Can you solve this with only one line of code within the function?","target":"¿Puedes resolver esto con solo una línea de código dentro de la función?"}]},{"name":"scenarios","rows":[{"key":"year2015.name","english":"Year 2015","target":"Año 2015"},{"key":"year2015.description","english":"2015 is not divisible by 4 so is not a leap year.","target":"2015 no es divisible por 4, así que no es bisiesto."},{"key":"year1970.name","english":"Year 1970","target":"Año 1970"},{"key":"year1970.description","english":"1970 is not divisible by 4 so is not a leap year.","target":"1970 no es divisible por 4, así que no es bisiesto."},{"key":"year2100.name","english":"Year 2100","target":"Año 2100"},{"key":"year2100.description","english":"2100 is divisible by 100 but not by 400 so is not a leap year.","target":"2100 es divisible por 100 pero no por 400, así que no es bisiesto."},{"key":"year1900.name","english":"Year 1900","target":"Año 1900"},{"key":"year1900.description","english":"1900 is divisible by 100 but not by 400 so is not a leap year.","target":"1900 es divisible por 100 pero no por 400, así que no es bisiesto."},{"key":"year1800.name","english":"Year 1800","target":"Año 1800"},{"key":"year1800.description","english":"1800 is divisible by 100 but not by 400 so is not a leap year.","target":"1800 es divisible por 100 pero no por 400, así que no es bisiesto."},{"key":"year2000.name","english":"Year 2000","target":"Año 2000"},{"key":"year2000.description","english":"2000 is divisible by 400 so is a leap year.","target":"2000 es divisible por 400, así que es bisiesto."},{"key":"year2400.name","english":"Year 2400","target":"Año 2400"},{"key":"year2400.description","english":"2400 is divisible by 400 so is a leap year.","target":"2400 es divisible por 400, así que es bisiesto."},{"key":"year1996.name","english":"Year 1996","target":"Año 1996"},{"key":"year1996.description","english":"1996 is divisible by 4 but not by 100 so is a leap year.","target":"1996 es divisible por 4 pero no por 100, así que es bisiesto."},{"key":"year1960.name","english":"Year 1960","target":"Año 1960"},{"key":"year1960.description","english":"1960 is divisible by 4 but not by 100 so is a leap year.","target":"1960 es divisible por 4 pero no por 100, así que es bisiesto."},{"key":"bonus1.name","english":"One line of code","target":"Una línea de código"},{"key":"bonus1.description","english":"Solve the exercise with only one line of code within the function.","target":"Resuelve el ejercicio con solo una línea de código dentro de la función."}]},{"name":"hints","rows":[{"key":"basicRule.question","english":"What's the basic rule for a leap year?","target":"¿Cuál es la regla básica para un año bisiesto?"},{"key":"basicRule.answer","english":"Years divisible by 4 are leap years. So `year % 4 === 0` is the starting test.","target":"Los años divisibles por 4 son bisiestos. Así que `year % 4 === 0` es la prueba inicial."},{"key":"exceptions.question","english":"Are there exceptions?","target":"¿Hay excepciones?"},{"key":"exceptions.answer","english":"Yes. Years divisible by 100 are NOT leap years, even though they're divisible by 4. For example, 1900 isn't a leap year.","target":"Sí. Los años divisibles por 100 NO son bisiestos, aunque sean divisibles por 4. Por ejemplo, 1900 no es bisiesto."},{"key":"exceptionsToExceptions.question","english":"Are there exceptions to the exception?","target":"¿Hay excepciones a la excepción?"},{"key":"exceptionsToExceptions.answer","english":"Yes. Years divisible by 400 ARE leap years after all. For example, 2000 is. So the rule cascades: divisible by 4, but not by 100, unless also by 400.","target":"Sí. Los años divisibles por 400 SÍ son bisiestos después de todo. Por ejemplo, 2000 lo es. Así que la regla es: divisible por 4, pero no por 100, a menos que también sea divisible por 400."},{"key":"checkDivisibility.question","english":"How do I check divisibility?","target":"¿Cómo verifico la divisibilidad?"},{"key":"checkDivisibility.answer","english":"Use the remainder operator `%`. `year % 4 === 0` is true when the year divides exactly by 4 with nothing left over. Same trick with 100 and 400.","target":"Usa el operador de residuo `%`. `year % 4 === 0` es verdadero cuando el año se divide exactamente por 4 sin dejar residuo. El mismo truco funciona para 100 y 400."}]}]}]
---

¡En este ejercicio vamos a explorar los años bisiestos!

Un año bisiesto (en el calendario gregoriano) ocurre:

- En todo año que es divisible por 4.
- Salvo que el año sea divisible por 100, en cuyo caso solo es bisiesto si también es divisible por 400.

Algunos ejemplos:

- 1997 no fue bisiesto porque no es divisible por 4.
- 1900 no fue bisiesto porque no es divisible por 400.
- ¡2000 sí fue bisiesto!

Tu trabajo es escribir una función llamada `isLeapYear` (determina si un año es bisiesto) que recibe un año como argumento y devuelve `true` si es bisiesto, o `false` si no lo es.

Tómate tu tiempo. ¡Piénsalo bien antes de empezar!
