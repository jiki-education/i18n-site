---
lang: "de"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "i18n"
source_path: "locales/de/curriculum/exercises/two-fer"
en_md5: "259ef6df34222c26ac1869815e38f66e"
governance_sha: "22c97e3"
content_version: "842cff4545fc"
published_at: "2026-08-16"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"�"}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"�"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"�"},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"�"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"�"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"�"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"�"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"�"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"�"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"�"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"�"},{"key":"bonus1.name","english":"Six lines of code","target":"�"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"�"}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"�"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"�"},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"�"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"�"},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"�"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"�"}]}]}]
---

Jetzt bauen wir auf der einfachen „Hello“-Übung auf und ergänzen ein paar zusätzliche Regeln.

In manchen englischen Akzenten klingt „two for“, also „zwei für“, wie „two fer“, wenn man es schnell ausspricht. „Two-for-one“ ist eine Redewendung dafür, dass du beim Kauf von einem Stück ein zweites gratis dazubekommst.

Stell dir eine Bäckerei vor, die ein Feiertagsangebot hat: zwei Kekse zum Preis von einem. Du nimmst das Angebot an und beschließt, den zusätzlichen Keks jemand anderem zu schenken.

Deine Aufgabe ist es herauszufinden, was du sagst, während du den zusätzlichen Keks verschenkst.

- Wenn du den Namen der Person kennst (z. B. Alice), sagst du: `"One for Alice, one for me."`
- Wenn du den Namen der Person nicht kennst, sagst du: `"One for you, one for me."`

Schreibe eine Funktion namens `twoFer(name)` (zwei für einen, mit dem Namen als Eingabewert), die den passenden Satz zurückgibt.

Hier sind ein paar Beispiele:

| Funktionsaufruf    | Rückgabewert                    |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

Für den Bonus: Schaffst du es mit **nur 6 Codezeilen**?

Viel Erfolg!
