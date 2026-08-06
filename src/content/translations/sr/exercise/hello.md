---
lang: "sr"
type: "exercise"
slug: "hello"
title: "Zdravo"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hello"
en_md5: "0e1932189205e5eaa4f7ddfa58b16f6c"
governance_sha: "c80036b"
content_version: "78022c9e9858"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createSayHelloFunction.name","english":"Create sayHello function","target":"Napravi sayHello funkciju"},{"key":"createSayHelloFunction.description","english":"Write a sayHello function that takes a name and returns a greeting in the format 'Hello, [name]!'.","target":"Napiši sayHello funkciju koja prima ime i vraća pozdrav u formatu 'Hello, [name]!'."}]},{"name":"scenarios","rows":[{"key":"helloAiko.name","english":"Greet Aiko","target":"Pozdravi Aiko"},{"key":"helloAiko.description","english":"Return 'Hello, Aiko!'","target":"Vrati 'Hello, Aiko!'"},{"key":"helloPriya.name","english":"Greet Priya","target":"Pozdravi Priya"},{"key":"helloPriya.description","english":"Return 'Hello, Priya!'","target":"Vrati 'Hello, Priya!'"},{"key":"helloMei.name","english":"Greet Mei","target":"Pozdravi Mei"},{"key":"helloMei.description","english":"Return 'Hello, Mei!'","target":"Vrati 'Hello, Mei!'"}]},{"name":"hints","rows":[{"key":"answerShape.question","english":"What's the basic shape of the answer I'm trying to build?","target":"Koji je osnovni oblik odgovora koji pokušavam da napravim?"},{"key":"answerShape.answer","english":"Three pieces joined together: the fixed start `\"Hello, \"`, then the name, then the fixed end `\"!\"`.","target":"Tri dela spojena: fiksni početak `\"Hello, \"`, zatim ime, pa fiksni kraj `\"!\"`."},{"key":"joinStrings.question","english":"How do I join strings together?","target":"Kako da spojim stringove?"},{"key":"joinStrings.answer","english":"Use concatenation with `+`, or a template string with `${}` placeholders, to stick all three pieces together into a single string.","target":"Koristi spajanje sa `+`, ili templejt string sa `${}` zamenjivačima, da spojiš sva tri dela u jedan string."}]}]}]
---

U narednim dvema vežbama, nastavićemo da vežbamo pravljenje funkcija i počećemo da koristimo manipulaciju stringovima.

Pre svega, hajde da pogledamo najjednostavniji slučaj.

Tvoj zadatak je da napraviš funkciju pod nazivom `sayHello(name)` (funkcija koja pozdravlja osobu po imenu).

Ona treba da vrati pozdrav za tu osobu, tako da ako napišeš `sayHello("Jeremy")`, funkcija treba da vrati `"Hello, Jeremy!"`. Ako napišeš `sayHello("Nicole")`, treba da vrati `"Hello, Nicole!"`.

Ovo bi trebalo da bude brza vežba i da postavi osnovu za interesantniju sledeću vežbu.
