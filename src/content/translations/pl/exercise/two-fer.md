---
lang: "pl"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "i18n"
source_path: "locales/pl/curriculum/exercises/two-fer"
en_md5: "259ef6df34222c26ac1869815e38f66e"
governance_sha: "0e11138"
content_version: "98c015d80bd2"
published_at: "2026-08-10"
forum_topic_id: 1072
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"Twój kod ma więcej niż sześć linijek."}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"Stwórz funkcję two-fer"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"Napisz funkcję twoFer, która przyjmuje imię i zwraca „One for [name], one for me.” Jeśli nie podano imienia (pusty string), użyj „you” zamiast imienia."},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"Rozwiąż w sześciu linijkach kodu"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"Czy uda Ci się rozwiązać to w zaledwie sześciu linijkach kodu?"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"Nie podano imienia"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"Nie podano imienia, więc zwróć „One for you, one for me.”"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"Podano imię Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"Ma na imię Alice, więc zwróć „One for Alice, one for me.”"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"Podano imię Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"Ma na imię Tom, więc zwróć „One for Tom, one for me.”"},{"key":"bonus1.name","english":"Six lines of code","target":"Sześć linijek kodu"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"Rozwiąż to ćwiczenie w zaledwie sześciu linijkach kodu."}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"Co zmienia się w zależności od danych wejściowych?"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"Tylko jedna rzecz: imię w środku zdania. Jeśli podano imię, użyj go. Jeśli nie, użyj domyślnego `\"you\"`."},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"Jak sprawdzić, czy podano imię?"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"Instrukcją warunkową porównującą dane wejściowe z pustym stringiem `\"\"`. Jeśli jest pusty, użyj `\"you\"`. W przeciwnym razie użyj danych wejściowych."},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"Jak zbudować końcowe zdanie?"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"Połącz trzy części (`\"One for \"`, wybrane imię oraz `\", one for me.\"`) za pomocą konkatenacji (`+`) lub template stringa."}]}]}]
---

Teraz rozbudujemy tamto proste ćwiczenie „Hello” i dodamy kilka dodatkowych reguł.

W niektórych angielskich akcentach „two for” wypowiedziane szybko brzmi jak „two fer”. „Two-for-one” to sposób powiedzenia, że kupując jedną rzecz, drugą dostajesz gratis.

Wyobraź sobie piekarnię, która ma świąteczną ofertę: dwa ciastka w cenie jednego. Korzystasz z oferty i postanawiasz oddać dodatkowe ciastko komuś innemu.

Twoim zadaniem jest ustalić, co powiesz, wręczając to dodatkowe ciastko.

- Jeśli znasz imię tej osoby (np. Alice), powiesz: `„One for Alice, one for me.”`
- Jeśli nie znasz jej imienia, powiesz: `„One for you, one for me.”`

Napisz funkcję o nazwie `twoFer(name)` (`twoFer` oznacza „dwa dla”, a `name` to imię), która zwraca odpowiednią kwestię.

Oto kilka przykładów:

| Wywołanie funkcji  | Wartość zwracana                |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

A jako bonus: czy uda Ci się napisać to w **zaledwie 6 linijkach kodu**?

Powodzenia!
