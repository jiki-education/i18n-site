---
lang: "es-ES"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/two-fer"
en_md5: "259ef6df34222c26ac1869815e38f66e"
governance_sha: "16f805d"
content_version: "9d1df6c80a90"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"Has usado más de seis líneas de código."}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"Crea la función twoFer"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"Escribe una función twoFer que tome un nombre y devuelva 'One for [name], one for me.' Si no se da un nombre (cadena vacía), usa 'you' en lugar del nombre."},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"Resuelve en seis líneas de código"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"¿Puedes resolver esto en solo seis líneas de código?"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"Sin nombre"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"No se da un nombre, así que devuelve 'One for you, one for me.'"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"Nombre dado: Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"Su nombre es 'Alice', así que devuelve 'One for Alice, one for me.'"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"Nombre dado: Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"Su nombre es 'Tom', así que devuelve 'One for Tom, one for me.'"},{"key":"bonus1.name","english":"Six lines of code","target":"Seis líneas de código"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"Resuelve el ejercicio en solo seis líneas de código."}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"¿Qué cambia según el argumento?"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"Solo una cosa. El nombre en medio de la oración. Si te dan un nombre, úsalo. Si no, usa el valor por defecto `\\\"you\\\"`."},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"¿Cómo verifico si me dieron un nombre?"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"Un condicional que compara el argumento con la cadena vacía `\\\"\\\"`. Si está vacía, usa `\\\"you\\\"`. De lo contrario, usa el argumento."},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"¿Cómo construyo la oración final?"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"Une las tres partes (`\\\"One for \\\"`, el nombre elegido y `\\\", one for me.\\\"`) usando concatenación (`+`) o una plantilla de cadena."}]}]}]
---

Ahora vamos a ampliar ese sencillo ejercicio «Hello» y a añadirle algunas reglas más.

En algunos acentos del inglés, cuando dices «two for» rápido, suena como «two fer». «Two-for-one» es una forma de decir que si compras uno, te llevas otro gratis.

Imagina una pastelería que tiene una oferta de temporada en la que puedes comprar dos galletas por el precio de una. Aceptas la oferta y decides regalar la galleta extra a otra persona.

Tu tarea es elegir qué decir al regalar la galleta extra.

- Si conoces el nombre de la persona (por ejemplo, Alice), dirás: `"One for Alice, one for me."`
- Si no conoces el nombre de la persona, dirás: `"One for you, one for me."`

Escribe una función llamada `twoFer(name)` (dos para uno) que devuelva el diálogo correspondiente.

Aquí tienes algunos ejemplos:

| Llamada a la función | Devuelve                        |
| :------------------- | :------------------------------ |
| `twoFer("Alice")`    | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")`   | `"One for Jeremy, one for me."` |
| `twoFer("")`         | `"One for you, one for me."`    |

Como reto extra: ¿puedes escribir esto en **solo 6 líneas de código**?

¡Buena suerte!
