---
lang: "es-419"
type: "exercise"
slug: "raindrops"
title: "Sonidos de gotas de lluvia"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/raindrops"
en_md5: "0bf4b9da3621fc60bdeab8dd785c918a"
governance_sha: "c80036b"
content_version: "498a2c3daf38"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixteenLines","english":"You used more than sixteen lines of code.","target":null}]},{"name":"tasks","rows":[{"key":"plings.name","english":"Plings","target":null},{"key":"plings.description","english":"Start off by getting the Pling sounds right. If the number is divisible by 3, return \"Pling\".","target":null},{"key":"plangs.name","english":"Plangs","target":null},{"key":"plangs.description","english":"Now get the Plang sounds right. If the number is divisible by 5, add \"Plang\" to the result. If it's divisible by both 3 and 5, return \"PlingPlang\".","target":null},{"key":"plongs.name","english":"Plongs","target":null},{"key":"plongs.description","english":"Now get the Plong sounds right. If the number is divisible by 7, add \"Plong\" to the result. Numbers can be divisible by multiple factors.","target":null},{"key":"noSound.name","english":"Numbers with no raindrop sound","target":null},{"key":"noSound.description","english":"Finally, if the number is not divisible by 3, 5, or 7, return the number itself as a string.","target":null},{"key":"solveInSixteenLines.name","english":"Solve in sixteen lines of code","target":null},{"key":"solveInSixteenLines.description","english":"Can you solve this with only sixteen lines of code?","target":null}]},{"name":"scenarios","rows":[{"key":"number3.name","english":"Number 3","target":null},{"key":"number3.description","english":"If 3 is input, return \"Pling\".","target":null},{"key":"number27.name","english":"Number 27","target":null},{"key":"number27.description","english":"If 27 is input, return \"Pling\".","target":null},{"key":"number5.name","english":"Number 5","target":null},{"key":"number5.description","english":"If 5 is input, return \"Plang\".","target":null},{"key":"number3125.name","english":"Number 3125","target":null},{"key":"number3125.description","english":"If 3125 is input, return \"Plang\".","target":null},{"key":"number15.name","english":"Number 15","target":null},{"key":"number15.description","english":"If 15 is input, return \"PlingPlang\".","target":null},{"key":"number7.name","english":"Number 7","target":null},{"key":"number7.description","english":"If 7 is input, return \"Plong\".","target":null},{"key":"number21.name","english":"Number 21","target":null},{"key":"number21.description","english":"If 21 is input, return \"PlingPlong\".","target":null},{"key":"number35.name","english":"Number 35","target":null},{"key":"number35.description","english":"If 35 is input, return \"PlangPlong\".","target":null},{"key":"number105.name","english":"Number 105","target":null},{"key":"number105.description","english":"If 105 is input, return \"PlingPlangPlong\".","target":null},{"key":"number8.name","english":"Number 8","target":null},{"key":"number8.description","english":"If 8 is input, return \"8\".","target":null},{"key":"number52.name","english":"Number 52","target":null},{"key":"number52.description","english":"If 52 is input, return \"52\".","target":null},{"key":"bonus1.name","english":"Sixteen lines of code","target":null},{"key":"bonus1.description","english":"Solve the exercise with only sixteen lines of code.","target":null}]},{"name":"hints","rows":[{"key":"onlyOneSound.question","english":"Why does my function only return one sound?","target":null},{"key":"onlyOneSound.answer","english":"If you `return` inside each `if`, you give up as soon as the first divisor matches. You want to combine them. Instead of returning, append the sound to a result string and keep going.","target":null},{"key":"buildCombinedSound.question","english":"How do I build up the combined sound?","target":null},{"key":"buildCombinedSound.answer","english":"Start with an empty result string. For each divisor (3, 5, 7), if it divides the number, append the corresponding sound onto the end of the result using concatenation with `+`.","target":null},{"key":"noneMatch.question","english":"What if none of the divisors match?","target":null},{"key":"noneMatch.answer","english":"If the result is still empty after all three checks, the answer is just the number itself as a string. Convert the number and return that.","target":null},{"key":"convertToString.question","english":"I return the number but it wants me to return it as a string. How do I do that?","target":null},{"key":"convertToString.answer","english":"Numbers and strings are different types, even if they look the same. You can convert a number to a string by putting it inside a template string with `${...}`.","target":null},{"key":"howManyReturns.question","english":"How many return statements should I have?","target":null},{"key":"howManyReturns.answer","english":"Just one or two, typically. The whole point is letting the if-statements modify the result string, then returning that result once at the end.","target":null}]}]}]
---

Raindrops es una versión del clásico desafío FizzBuzz que se ha usado en entrevistas de programación desde siempre.

Tu tarea es convertir un número en sus correspondientes sonidos de gotas de lluvia.

Hacemos esto viendo entre qué números es divisible el número (por ejemplo, el número 10 es divisible entre 1, 2, 5 y 10. El número 12 es divisible entre 1, 2, 3, 4, 6 y 12).

Si el número dado:

- es divisible entre 3, añade "Pling" al resultado.
- es divisible entre 5, añade "Plang" al resultado.
- es divisible entre 7, añade "Plong" al resultado.
- no es divisible entre 3, 5, ni 7, el resultado debe ser el número como string.

Debes crear una función llamada `raindrops(num)` (gotas de lluvia) que tome el número como argumento y devuelva sus sonidos de gotas de lluvia.

Construye la cadena de resultado usando concatenación (_concatenation_ en inglés) (`+`) o una plantilla de cadena (_template string_ en inglés).

### Ejemplos

- `raindrops(28)` devuelve "Plong" porque 28 es divisible entre 7, pero no entre 3 ni 5.
- `raindrops(30)` devuelve "PlingPlang" porque 30 es divisible entre 3 y 5, pero no entre 7.
- `raindrops(34)` devuelve "34" porque 34 no es divisible entre 3, 5, ni 7.
