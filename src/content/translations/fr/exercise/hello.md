---
lang: "fr"
type: "exercise"
slug: "hello"
title: "Hello"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/hello"
en_md5: "0e1932189205e5eaa4f7ddfa58b16f6c"
governance_sha: "b951b19"
content_version: "ee9f4ab6963c"
published_at: "2026-08-16"
forum_topic_id: 1383
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createSayHelloFunction.name","english":"Create sayHello function","target":"Crée la fonction sayHello"},{"key":"createSayHelloFunction.description","english":"Write a sayHello function that takes a name and returns a greeting in the format 'Hello, [name]!'.","target":"Écris une fonction sayHello qui prend un nom et renvoie une salutation au format 'Hello, [name]!'."}]},{"name":"scenarios","rows":[{"key":"helloAiko.name","english":"Greet Aiko","target":"Salue Aiko"},{"key":"helloAiko.description","english":"Return 'Hello, Aiko!'","target":"Renvoie 'Hello, Aiko!'"},{"key":"helloPriya.name","english":"Greet Priya","target":"Salue Priya"},{"key":"helloPriya.description","english":"Return 'Hello, Priya!'","target":"Renvoie 'Hello, Priya!'"},{"key":"helloMei.name","english":"Greet Mei","target":"Salue Mei"},{"key":"helloMei.description","english":"Return 'Hello, Mei!'","target":"Renvoie 'Hello, Mei!'"}]},{"name":"hints","rows":[{"key":"answerShape.question","english":"What's the basic shape of the answer I'm trying to build?","target":"Quelle est la forme de base de la réponse que j'essaie de construire ?"},{"key":"answerShape.answer","english":"Three pieces joined together: the fixed start `\"Hello, \"`, then the name, then the fixed end `\"!\"`.","target":"Trois morceaux assemblés : le début fixe `\"Hello, \"`, puis le nom, puis la fin fixe `\"!\"`."},{"key":"joinStrings.question","english":"How do I join strings together?","target":"Comment assembler des strings ?"},{"key":"joinStrings.answer","english":"Use concatenation with `+`, or a template string with `${}` placeholders, to stick all three pieces together into a single string.","target":"Utilise la concaténation avec `+`, ou une template string avec des emplacements `${}`, pour coller les trois morceaux en une seule string."}]}]}]
---

Dans les deux prochains exercices, on va continuer à s'entraîner à créer des fonctions, et commencer à manipuler des _strings_.

Pour commencer, on va regarder le cas le plus simple.

Ta mission est de créer une fonction appelée `sayHello(name)` (« dire bonjour », où `name` est le nom de la personne).

Elle doit renvoyer une salutation pour la personne : si tu écris `sayHello("Jeremy")`, la fonction doit renvoyer `"Hello, Jeremy!"`. Si tu écris `sayHello("Nicole")`, elle doit renvoyer `"Hello, Nicole!"`.

Cet exercice devrait être rapide, et poser les bases du suivant, plus intéressant.
