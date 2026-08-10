---
lang: "hu"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "i18n"
source_path: "locales/hu/curriculum/exercises/two-fer"
en_md5: "259ef6df34222c26ac1869815e38f66e"
governance_sha: "0e11138"
content_version: "f93c077f4c66"
published_at: "2026-08-10"
forum_topic_id: 1154
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"Hatnál több sor kódot használtál."}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"Hozd létre a two-fer függvényt"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"Írj egy twoFer függvényt, amely kap egy nevet, és a 'One for [name], one for me.' mondatot adja vissza. Ha nincs megadva név (üres string), a név helyett a 'you' szót használd."},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"Oldd meg hat sor kóddal"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"Meg tudod ezt oldani mindössze hat sor kóddal?"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"Nincs megadva név"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"Nincs megadva név, ezért a 'One for you, one for me.' mondatot add vissza."},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"A megadott név Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"A neve 'Alice', ezért a 'One for Alice, one for me.' mondatot add vissza."},{"key":"twoFerTom.name","english":"Name given as Tom","target":"A megadott név Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"A neve 'Tom', ezért a 'One for Tom, one for me.' mondatot add vissza."},{"key":"bonus1.name","english":"Six lines of code","target":"Hat sor kód"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"Oldd meg a feladatot mindössze hat sor kóddal."}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"Mi változik a bemenettől függően?"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"Csak egyetlen dolog: a név a mondat közepén. Ha kaptál nevet, azt használd. Ha nem, használd az alapértelmezett `\"you\"` értéket."},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"Hogyan ellenőrzöm, hogy kaptam-e nevet?"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"Egy elágazással, amely a bemenetet az üres `\"\"` stringgel hasonlítja össze. Ha üres, használd a `\"you\"` értéket. Ha nem, akkor magát a bemenetet."},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"Hogyan rakom össze a kész mondatot?"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"Fűzd össze a három darabot (`\"One for \"`, a kiválasztott név és `\", one for me.\"`) összefűzéssel (`+`) vagy egy template stringgel."}]}]}]
---

Most az egyszerű „Hello” feladatra építünk, és néhány extra szabályt adunk hozzá.

Néhány angol akcentusban a gyorsan kimondott „two for” úgy hangzik, mint a „two fer”. A „two-for-one” kifejezés azt jelenti, hogy ha megveszel egyet, kapsz mellé még egyet ingyen.

Képzelj el egy pékséget, ahol ünnepi akció keretében két sütit vehetsz egy áráért. Élsz az ajánlattal, és úgy döntesz, hogy a plusz sütit odaadod valakinek.

A feladatod eldönteni, hogy mit mondasz, amikor odaadod a plusz sütit.

- Ha ismered az illető nevét (pl. Alice), akkor ezt mondod: `„One for Alice, one for me.”`
- Ha nem ismered a nevét, ezt mondod: `„One for you, one for me.”`

Írj egy `twoFer(name)` (kettőt egyért; a `name` a név) nevű függvényt, amely a megfelelő mondatot adja vissza.

Íme néhány példa:

| Függvényhívás      | Visszatérési érték              |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

Bónuszként: meg tudod ezt oldani **mindössze 6 sor kóddal**?

Sok szerencsét!
