---
lang: "es-419"
type: "exercise"
slug: "alphanumeric"
title: "Alfanumérico"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/alphanumeric"
en_md5: "c8cd152f90c7fb519617ff5757e02c36"
governance_sha: "c80036b"
content_version: "39feb5e27f44"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"classifyString.name","english":"Classify a string","target":null},{"key":"classifyString.description","english":"Write helper functions to check if a string is alpha, numeric, or alphanumeric, then use them to classify the input string.","target":null},{"key":"useContinue.name","english":"Use continue","target":null},{"key":"useContinue.description","english":"In your isAlphanumeric check, once a character is a letter or a digit you're happy with it. Use continue to move straight on to the next character instead of nesting more conditions.","target":null}]},{"name":"scenarios","rows":[{"key":"duck.name","english":"Duck","target":null},{"key":"duck.description","english":"A purely alphabetic string should be classified as \"Alpha\".","target":null},{"key":"number.name","english":"42","target":null},{"key":"number.description","english":"A purely numeric string should be classified as \"Numeric\".","target":null},{"key":"alphanumeric.name","english":"Duck42","target":null},{"key":"alphanumeric.description","english":"A string with both letters and numbers should be classified as \"Alphanumeric\".","target":null},{"key":"notAlphanumeric1.name","english":"It's not 42!","target":null},{"key":"notAlphanumeric1.description","english":"A string with special characters should be classified as \"Unknown\".","target":null},{"key":"notAlphanumeric2.name","english":"42 Rubber Duck!","target":null},{"key":"notAlphanumeric2.description","english":"A string with spaces and special characters should be classified as \"Unknown\".","target":null},{"key":"alphanumericUsesContinue.name","english":"Used continue","target":null},{"key":"alphanumericUsesContinue.description","english":"Your solution works and uses continue to move past characters that are already accounted for.","target":null}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start when there are several functions to write?","target":null},{"key":"whereToStart.answer","english":"Pick the smallest helper first. Each helper loops over the characters of the string and asks the same kind of yes/no question about every one of them. Get one working and the others follow the same shape.","target":null},{"key":"checkAllLetters.question","english":"How do I check if every character in the input is a letter?","target":null},{"key":"checkAllLetters.answer","english":"Loop through each character and check whether it appears in the alphabet. A string's `.includes()` method answers exactly that: `\"...\".includes(char)`. Remember to include both lowercase and uppercase letters, otherwise a capital like the \"D\" in \"Duck\" won't count. If any character isn't in the alphabet, it isn't all alpha.","target":null},{"key":"checkAllDigits.question","english":"How do I do the same check for digits?","target":null},{"key":"checkAllDigits.answer","english":"Exactly the same pattern, but check against `\"0123456789\"` instead of the alphabet.","target":null},{"key":"alphanumericMeaning.question","english":"What does 'alphanumeric' mean. Does it mean both?","target":null},{"key":"alphanumericMeaning.answer","english":"Alphanumeric means each character is either a letter OR a digit. So for each character, if it's alpha you're happy, and if it's numeric you're also happy. Use `continue` to skip on. Only if it's neither should you reject.","target":null},{"key":"pickingLabels.question","english":"How do I pick between the four labels in whatAmI()?","target":null},{"key":"pickingLabels.answer","english":"Call all three helpers and use if/else. The order matters. Check the stricter cases ('alpha only' and 'numeric only') before 'alphanumeric', which is the looser case.","target":null}]},{"name":"checks","rows":[{"key":"mustUseContinue","english":"So close! Use `continue` to skip on to the next character.","target":null},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long.","target":null},{"key":"useIsAlpha","english":"This exercise wants you to write an `isAlpha()` helper and use it to classify the string.","target":null},{"key":"useIsNumeric","english":"This exercise wants you to write an `isNumeric()` helper and use it to classify the string.","target":null},{"key":"useIsAlphanumeric","english":"This exercise wants you to write an `isAlphanumeric()` helper and use it to classify the string.","target":null}]}]}]
---

En este ejercicio, tu tarea es crear funciones que verifiquen si un string contiene letras y/o números.

Necesitarás escribir tres funciones auxiliares:

- `isAlpha(string)` (es alfabética) — determina si un string solo contiene letras ASCII (por ejemplo, "A", "a", "Hello")
- `isNumeric(string)` (es numérica) — determina si un string solo contiene caracteres numéricos (por ejemplo, "0", "1", "456")
- `isAlphanumeric(string)` (es alfanumérica) — determina si un string solo contiene letras ASCII o números (por ejemplo, "Hello", "42", "Hello42")

Para cualquier otro símbolo (por ejemplo, "! ?") o caracteres no ASCII (por ejemplo, "じき", "正直"), las tres funciones deben devolver false.

Luego, escribe una función `whatAmI(string)` (qué soy) que use esos ayudantes para clasificar un string:

- Los strings que solo contienen letras deben devolver `"Alpha"`
- Los strings que solo contienen números deben devolver `"Numeric"`
- Los strings que contienen tanto letras como números deben devolver `"Alphanumeric"`
- Todo lo demás debe devolver `"Unknown"`

### Usa lo que acabas de aprender

Aunque hay muchas formas válidas de resolver este ejercicio, la solución que queremos que crees usa una sentencia `continue` y las tres funciones anteriores.

Este ejercicio también te reta a resolver todo en 42 líneas de código o menos. Ese objetivo no es necesariamente la solución de mayor calidad de producción. Un par de líneas adicionales probablemente den una más bonita, y también hay soluciones más cortas. Pero es una buena meta para ampliar tus capacidades.

¡Diviértete!
