---
lang: "pt-BR"
type: "exercise"
slug: "hello"
title: "Olá"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-BR/curriculum/exercises/hello"
en_md5: "0e1932189205e5eaa4f7ddfa58b16f6c"
governance_sha: "215346b"
content_version: "5917e5b46258"
published_at: "2026-08-21"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createSayHelloFunction.name","english":"Create sayHello function","target":"Crie a função sayHello"},{"key":"createSayHelloFunction.description","english":"Write a sayHello function that takes a name and returns a greeting in the format 'Hello, [name]!'.","target":"Escreva uma função sayHello que recebe um nome e retorna uma saudação no formato 'Hello, [name]!'."}]},{"name":"scenarios","rows":[{"key":"helloAiko.name","english":"Greet Aiko","target":"Cumprimente a Aiko"},{"key":"helloAiko.description","english":"Return 'Hello, Aiko!'","target":"Retorna 'Hello, Aiko!'"},{"key":"helloPriya.name","english":"Greet Priya","target":"Cumprimente a Priya"},{"key":"helloPriya.description","english":"Return 'Hello, Priya!'","target":"Retorna 'Hello, Priya!'"},{"key":"helloMei.name","english":"Greet Mei","target":"Cumprimente a Mei"},{"key":"helloMei.description","english":"Return 'Hello, Mei!'","target":"Retorna 'Hello, Mei!'"}]},{"name":"hints","rows":[{"key":"answerShape.question","english":"What's the basic shape of the answer I'm trying to build?","target":"Qual é a estrutura básica da resposta que estou tentando construir?"},{"key":"answerShape.answer","english":"Three pieces joined together: the fixed start `\"Hello, \"`, then the name, then the fixed end `\"!\"`.","target":"Três partes juntas: o início fixo `\"Hello, \"`, depois o nome, e por fim o fim fixo `\"!\"`."},{"key":"joinStrings.question","english":"How do I join strings together?","target":"Como eu posso juntar strings?"},{"key":"joinStrings.answer","english":"Use concatenation with `+`, or a template string with `${}` placeholders, to stick all three pieces together into a single string.","target":"Use a concatenação com `+`, ou uma template string com espaços reservados `${}`, para colar as três partes numa única string."}]}]}]
---

Nos próximos dois exercícios, vamos continuar praticando a criação de funções e começar a usar um pouco de manipulação de strings.

Primeiro, vamos ver o caso mais simples.

A sua tarefa é criar uma função chamada `sayHello(name)` (diz olá).

Ela deve retornar uma saudação para a pessoa, então, se você escrever `sayHello("Jeremy")`, a função deve retornar `"Hello, Jeremy!"`. Se você escrever `sayHello("Nicole")`, deve retornar `"Hello, Nicole!"`.

Esperamos que este exercício seja rápido e prepare o caminho para o próximo, que vai ser mais interessante.
