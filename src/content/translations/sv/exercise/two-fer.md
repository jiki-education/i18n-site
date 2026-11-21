---
lang: "sv"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "i18n"
source_path: "locales/sv/curriculum/exercises/two-fer"
en_md5: "259ef6df34222c26ac1869815e38f66e"
governance_sha: "51d8294a"
content_version: "46e0666618cf"
published_at: "2026-11-21"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"Du använde fler än sex rader kod."}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"Skapa twoFer-funktionen"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"Skriv en funktion som heter twoFer, som tar ett namn och returnerar ”One for [name], one for me.”. Om inget namn ges (en tom sträng) använder du ”you” i stället för namnet."},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"Lös med sex rader kod"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"Kan du lösa det här med bara sex rader kod?"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"Inget namn angivet"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"Inget namn anges, så returnera ”One for you, one for me.”"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"Namn angivet som Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"Hon heter ”Alice”, så returnera ”One for Alice, one for me.”"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"Namn angivet som Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"Han heter ”Tom”, så returnera ”One for Tom, one for me.”"},{"key":"bonus1.name","english":"Six lines of code","target":"Sex rader kod"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"Lös övningen med bara sex rader kod."}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"Vad är det som ändras beroende på indata?"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"Bara en sak. Namnet i mitten av meningen. Om du fick ett namn använder du det. Annars använder du standardvärdet `\"you\"`."},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"Hur kollar jag om jag fick ett namn?"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"En `if`-sats som jämför indata med den tomma strängen `\"\"`. Om den är tom använder du `\"you\"`. Annars använder du indata."},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"Hur bygger jag den färdiga meningen?"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"Sätt ihop de tre delarna (`\"One for \"`, det valda namnet och `\", one for me.\"`) med sammanfogning (`+`) eller en strängmall."}]}]}]
---

Nu ska vi bygga vidare på den enkla övningen ”Hej” och lägga till några extra regler.

I vissa engelska dialekter låter ”two for” som ”two fer” när du säger det snabbt. ”Two-for-one” är ett sätt att säga att om du köper en får du en på köpet.

Tänk dig ett bageri som har ett erbjudande under helgerna där du kan köpa två kakor för priset av en. Du nappar på erbjudandet och bestämmer dig för att ge den extra kakan till någon annan.

Din uppgift är att avgöra vad du säger när du ger bort den extra kakan.

- Om du vet vad personen heter (till exempel Alice) säger du: `"One for Alice, one for me."`
- Om du inte vet vad personen heter säger du: `"One for you, one for me."`

Skriv en funktion som heter `twoFer(name)` (två för) och som returnerar rätt replik.

Här är några exempel:

| Funktionsanrop     | Returnerar                      |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

Kan du som bonus skriva det här med **bara 6 rader kod**?

Lycka till!
