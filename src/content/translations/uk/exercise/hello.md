---
lang: "uk"
type: "exercise"
slug: "hello"
title: "Привіт"
status: "published"
source_repo: "i18n"
source_path: "locales/uk/curriculum/exercises/hello"
en_md5: "0e1932189205e5eaa4f7ddfa58b16f6c"
governance_sha: "43fcfe5"
content_version: "29a45988b7b4"
published_at: "2026-08-11"
forum_topic_id: 880
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createSayHelloFunction.name","english":"Create sayHello function","target":"Створіть функцію sayHello"},{"key":"createSayHelloFunction.description","english":"Write a sayHello function that takes a name and returns a greeting in the format 'Hello, [name]!'.","target":"Напишіть функцію sayHello, яка приймає імʼя і повертає привітання у форматі 'Hello, [name]!'."}]},{"name":"scenarios","rows":[{"key":"helloAiko.name","english":"Greet Aiko","target":"Привітайте Aiko"},{"key":"helloAiko.description","english":"Return 'Hello, Aiko!'","target":"Поверніть 'Hello, Aiko!'"},{"key":"helloPriya.name","english":"Greet Priya","target":"Привітайте Priya"},{"key":"helloPriya.description","english":"Return 'Hello, Priya!'","target":"Поверніть 'Hello, Priya!'"},{"key":"helloMei.name","english":"Greet Mei","target":"Привітайте Mei"},{"key":"helloMei.description","english":"Return 'Hello, Mei!'","target":"Поверніть 'Hello, Mei!'"}]},{"name":"hints","rows":[{"key":"answerShape.question","english":"What's the basic shape of the answer I'm trying to build?","target":"Яку загальну форму має відповідь, яку ми намагаємося побудувати?"},{"key":"answerShape.answer","english":"Three pieces joined together: the fixed start `\"Hello, \"`, then the name, then the fixed end `\"!\"`.","target":"Три частини, поєднані разом: незмінний початок `\"Hello, \"`, потім імʼя, потім незмінний кінець `\"!\"`."},{"key":"joinStrings.question","english":"How do I join strings together?","target":"Як поєднати рядки тексту?"},{"key":"joinStrings.answer","english":"Use concatenation with `+`, or a template string with `${}` placeholders, to stick all three pieces together into a single string.","target":"Скористайтеся конкатенацією з `+` або шаблонним рядком із заповнювачами `${}`, щоб поєднати всі три частини в один рядок тексту."}]}]}]
---

У наступних двох вправах ми продовжимо практикуватися у створенні функцій і почнемо потроху працювати з рядками тексту (англ. _string_).

Для початку, розглянемо найпростіший випадок.

Завдання: створіть функцію з назвою `sayHello(name)` (привітати людину на імʼя).

Вона має повертати привітання для цієї людини: якщо ми напишемо `sayHello("Jeremy")`, функція має повернути `"Hello, Jeremy!"`. Якщо напишемо `sayHello("Nicole")`, вона має повернути `"Hello, Nicole!"`.

Сподіваємося, ця вправа буде швидкою і закладе основу для наступної, цікавішої.
