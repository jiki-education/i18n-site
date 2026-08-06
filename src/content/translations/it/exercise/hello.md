---
lang: "it"
type: "exercise"
slug: "hello"
title: "Hello"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hello"
en_md5: "0e1932189205e5eaa4f7ddfa58b16f6c"
governance_sha: "c80036b"
content_version: "665f86089e8e"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createSayHelloFunction.name","english":"Create sayHello function","target":"Crea la funzione sayHello"},{"key":"createSayHelloFunction.description","english":"Write a sayHello function that takes a name and returns a greeting in the format 'Hello, [name]!'.","target":"Scrivi una funzione sayHello che prende un nome e restituisce un saluto nella forma 'Hello, [name]!'."}]},{"name":"scenarios","rows":[{"key":"helloAiko.name","english":"Greet Aiko","target":"Saluta Aiko"},{"key":"helloAiko.description","english":"Return 'Hello, Aiko!'","target":"Restituisce 'Hello, Aiko!'"},{"key":"helloPriya.name","english":"Greet Priya","target":"Saluta Priya"},{"key":"helloPriya.description","english":"Return 'Hello, Priya!'","target":"Restituisce 'Hello, Priya!'"},{"key":"helloMei.name","english":"Greet Mei","target":"Saluta Mei"},{"key":"helloMei.description","english":"Return 'Hello, Mei!'","target":"Restituisce 'Hello, Mei!'"}]},{"name":"hints","rows":[{"key":"answerShape.question","english":"What's the basic shape of the answer I'm trying to build?","target":"Qual è la struttura di base della risposta che sto cercando di costruire?"},{"key":"answerShape.answer","english":"Three pieces joined together: the fixed start `\"Hello, \"`, then the name, then the fixed end `\"!\"`.","target":"Tre pezzi uniti insieme: l'inizio fisso `\"Hello, \"`, poi il nome, quindi la fine fissa `\"!\"`."},{"key":"joinStrings.question","english":"How do I join strings together?","target":"Come posso unire le stringhe?"},{"key":"joinStrings.answer","english":"Use concatenation with `+`, or a template string with `${}` placeholders, to stick all three pieces together into a single string.","target":"Usa la concatenazione con `+`, oppure una stringa interpolata con i segnaposto `${}`, per unire tutti e tre i pezzi in un'unica stringa."}]}]}]
---

Nei prossimi due esercizi continueremo a esercitarci a creare funzioni e inizieremo a usare la manipolazione delle stringhe.

Per prima cosa vediamo il caso più semplice.

Il tuo compito è creare una funzione di nome `sayHello(name)` (dire ciao col nome).

Dovrebbe restituire un saluto per la persona: quindi, se scrivi `sayHello("Jeremy")`, la funzione dovrebbe restituire `"Hello, Jeremy!"`. Se scrivi `sayHello("Nicole")`, dovrebbe restituire `"Hello, Nicole!"`.

Speriamo che questo esercizio sia veloce e getti le basi per il prossimo, più interessante.
