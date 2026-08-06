---
lang: "hu"
type: "exercise"
slug: "hello"
title: "Hello"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hello"
en_md5: "0e1932189205e5eaa4f7ddfa58b16f6c"
governance_sha: "c80036b"
content_version: "28c293702fb8"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createSayHelloFunction.name","english":"Create sayHello function","target":"Hozd létre a sayHello függvényt"},{"key":"createSayHelloFunction.description","english":"Write a sayHello function that takes a name and returns a greeting in the format 'Hello, [name]!'.","target":"Írj egy sayHello függvényt, amely egy nevet vár paraméterül, és visszaadja az 'Hello, [name]!' formátumú üdvözlést."}]},{"name":"scenarios","rows":[{"key":"helloAiko.name","english":"Greet Aiko","target":"Köszöntsd Aiko-t"},{"key":"helloAiko.description","english":"Return 'Hello, Aiko!'","target":"Add vissza: 'Hello, Aiko!'"},{"key":"helloPriya.name","english":"Greet Priya","target":"Köszöntsd Priya-t"},{"key":"helloPriya.description","english":"Return 'Hello, Priya!'","target":"Add vissza: 'Hello, Priya!'"},{"key":"helloMei.name","english":"Greet Mei","target":"Köszöntsd Mei-t"},{"key":"helloMei.description","english":"Return 'Hello, Mei!'","target":"Add vissza: 'Hello, Mei!'"}]},{"name":"hints","rows":[{"key":"answerShape.question","english":"What's the basic shape of the answer I'm trying to build?","target":"Hogy néz ki alapvetően a válasz, amit meg kell alkotnom?"},{"key":"answerShape.answer","english":"Three pieces joined together: the fixed start `\"Hello, \"`, then the name, then the fixed end `\"!\"`.","target":"Három összeillesztett darab: a rögzített kezdő `\"Hello, \"`, aztán a név, végül a rögzített záró `\"!\"`."},{"key":"joinStrings.question","english":"How do I join strings together?","target":"Hogyan fűzök össze stringeket?"},{"key":"joinStrings.answer","english":"Use concatenation with `+`, or a template string with `${}` placeholders, to stick all three pieces together into a single string.","target":"Használj konkatenációt a `+` jellel, vagy template stringet `${}` helyőrzőkkel, hogy a három részt egyetlen stringgé illeszd össze."}]}]}]
---

A következő két feladatban tovább gyakoroljuk a függvények készítését, és elkezdünk string-műveleteket használni.

Először a legegyszerűbb esetet nézzük meg.

A feladatod egy `sayHello(name)` (köszönj, név) nevű függvény létrehozása.

Egy üdvözlést kell visszaadnia a személy számára, tehát ha azt írod, hogy `sayHello("Jeremy")`, a függvénynek a következőt kell visszaadnia: `"Hello, Jeremy!"`. Ha azt írod, hogy `sayHello("Nicole")`, akkor `"Hello, Nicole!"`-t kell visszaadnia.

Remélhetőleg ez egy gyors feladat lesz, és megalapozza a következő, izgalmasabb feladatot.
