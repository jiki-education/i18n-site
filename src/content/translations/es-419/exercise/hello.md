---
lang: "es-419"
type: "exercise"
slug: "hello"
title: "Hola"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hello"
en_md5: "0e1932189205e5eaa4f7ddfa58b16f6c"
governance_sha: "c80036b"
content_version: "f4da4f526629"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createSayHelloFunction.name","english":"Create sayHello function","target":"Crear la función sayHello"},{"key":"createSayHelloFunction.description","english":"Write a sayHello function that takes a name and returns a greeting in the format 'Hello, [name]!'.","target":"Escribe una función sayHello que tome un nombre y devuelva un saludo en el formato 'Hello, [name]!'."}]},{"name":"scenarios","rows":[{"key":"helloAiko.name","english":"Greet Aiko","target":"Saludar a Aiko"},{"key":"helloAiko.description","english":"Return 'Hello, Aiko!'","target":"Devolver 'Hello, Aiko!'"},{"key":"helloPriya.name","english":"Greet Priya","target":"Saludar a Priya"},{"key":"helloPriya.description","english":"Return 'Hello, Priya!'","target":"Devolver 'Hello, Priya!'"},{"key":"helloMei.name","english":"Greet Mei","target":"Saludar a Mei"},{"key":"helloMei.description","english":"Return 'Hello, Mei!'","target":"Devolver 'Hello, Mei!'"}]},{"name":"hints","rows":[{"key":"answerShape.question","english":"What's the basic shape of the answer I'm trying to build?","target":"¿Cuál es la estructura básica de la respuesta que estoy intentando construir?"},{"key":"answerShape.answer","english":"Three pieces joined together: the fixed start `\"Hello, \"`, then the name, then the fixed end `\"!\"`.","target":"Tres piezas unidas: el inicio fijo `\"Hello, \"`, luego el nombre, y luego el final fijo `\"!\"`."},{"key":"joinStrings.question","english":"How do I join strings together?","target":"¿Cómo uno strings?"},{"key":"joinStrings.answer","english":"Use concatenation with `+`, or a template string with `${}` placeholders, to stick all three pieces together into a single string.","target":"Usa la concatenación con `+`, o un template string con marcadores `${}`, para unir las tres piezas en un solo string."}]}]}]
---

En los próximos dos ejercicios, vamos a seguir practicando cómo crear funciones y comenzar a usar algo de manipulación de strings.

Primero vamos a ver el caso más simple.

Tu trabajo es crear una función llamada `sayHello(name)` (decir hola).

Debe devolver un saludo para la persona, así que si escribes `sayHello("Jeremy")`, la función debe devolver `"Hello, Jeremy!"`. Si escribes `sayHello("Nicole")`, debe devolver `"Hello, Nicole!"`.

Con suerte, este será un ejercicio rápido y sentará las bases para el próximo, que es más interesante.
