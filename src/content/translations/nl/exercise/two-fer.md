---
lang: "nl"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "i18n"
source_path: "locales/nl/curriculum/exercises/two-fer"
en_md5: "259ef6df34222c26ac1869815e38f66e"
governance_sha: "0e11138"
content_version: "3c28f16360e1"
published_at: "2026-08-10"
forum_topic_id: 1045
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"Je hebt meer dan zes regels code gebruikt."}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"Maak de two-fer-functie"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"Schrijf een twoFer-functie die een naam aanneemt en 'One for [name], one for me.' teruggeeft. Als er geen naam is gegeven (lege string), gebruik dan 'you' in plaats van de naam."},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"Los het op in zes regels code"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"Kun je dit oplossen met slechts zes regels code?"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"Geen naam gegeven"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"Er is geen naam gegeven, dus geef 'One for you, one for me.' terug."},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"De naam is Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"Haar naam is 'Alice', dus geef 'One for Alice, one for me.' terug."},{"key":"twoFerTom.name","english":"Name given as Tom","target":"De naam is Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"Zijn naam is 'Tom', dus geef 'One for Tom, one for me.' terug."},{"key":"bonus1.name","english":"Six lines of code","target":"Zes regels code"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"Los de opdracht op met slechts zes regels code."}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"Wat verandert er op basis van de invoer?"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"Maar één ding: de naam in het midden van de zin. Heb je een naam gekregen, gebruik die dan. Zo niet, gebruik dan de standaardwaarde `\"you\"`."},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"Hoe controleer ik of ik een naam heb gekregen?"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"Met een if-statement dat de invoer vergelijkt met de lege string `\"\"`. Is die leeg, gebruik dan `\"you\"`. Anders gebruik je de invoer."},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"Hoe bouw ik de uiteindelijke zin op?"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"Plak de drie stukken (`\"One for \"`, de gekozen naam en `\", one for me.\"`) aan elkaar met concatenatie (`+`) of een template string."}]}]}]
---

We bouwen nu verder op die eenvoudige “Hello”-opdracht en voegen een paar extra regels toe.

In sommige Engelse accenten klinkt “two for”, als je het snel uitspreekt, als “two fer”. “Two-for-one” is een manier om te zeggen: koop er één en je krijgt er één gratis bij.

Stel je een bakkerij voor met een feestaanbieding: twee koekjes voor de prijs van één. Je maakt gebruik van de aanbieding en besluit het extra koekje aan iemand anders te geven.

Jouw taak is om te bepalen wat je zegt terwijl je het extra koekje weggeeft.

- Ken je de naam van de persoon (bijvoorbeeld Alice), dan zeg je: `“One for Alice, one for me.”`
- Ken je de naam van de persoon niet, dan zeg je: `“One for you, one for me.”`

Schrijf een functie met de naam `twoFer(name)` (letterlijk “twee voor”, waarbij `name` de naam is) die de juiste zin teruggeeft.

Hier zijn een paar voorbeelden:

| Functieaanroep     | Geeft terug                     |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

Voor de bonus: kun je dit in **slechts 6 regels code** schrijven?

Veel succes!
