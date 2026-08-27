---
lang: "hu"
type: "exercise"
slug: "wordle-process-guess"
title: "Wordle: Tipp feldolgozása"
status: "published"
source_repo: "i18n"
source_path: "locales/hu/curriculum/exercises/wordle-process-guess"
en_md5: "3947aa1be7871fcfb0e523cb3c036d7f"
governance_sha: "accabaea"
content_version: "11f699805e2d"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"allCorrect","english":"We expected all the letters to be green","target":"Azt vártuk, hogy minden betű zöld legyen."},{"key":"absent","english":"We expected the 'a' and 'u' to be absent","target":"Azt vártuk, hogy az 'a' és az 'u' hiányoznak."},{"key":"present","english":"We expected the 'l' and 'e' to be present.","target":"Azt vártuk, hogy az 'l' és az 'e' jelen vannak."},{"key":"complex","english":"We expected present, present, present, correct, absent","target":"Azt vártuk, hogy present, present, present, correct, absent"},{"key":"differentWord","english":"We expected correct, present, present, present, absent","target":"Azt vártuk, hogy correct, present, present, present, absent"}]},{"name":"tasks","rows":[{"key":"processGuess.name","english":"Process a single guess","target":"Egy tipp feldolgozása"},{"key":"processGuess.description","english":"Create a function called processGuess that takes a target word and a guess, works out the state of each letter (correct, present, or absent), then calls colorRow(1, states) with the results.","target":"Hozz létre egy processGuess nevű függvényt, amely egy célszót és egy tippet kap, megállapítja minden betű állapotát (correct, present vagy absent), majd meghívja a colorRow(1, states) függvényt az eredményekkel."}]},{"name":"scenarios","rows":[{"key":"allCorrect.name","english":"All correct","target":"Minden helyes"},{"key":"allCorrect.description","english":"Deal with a fully correct guess","target":"Teljesen helyes tipp kezelése"},{"key":"absent.name","english":"Some absent","target":"Néhány hiányzik"},{"key":"absent.description","english":"Handle when some letters are wrong","target":"Rossz betűk kezelése"},{"key":"present.name","english":"Some present","target":"Néhány jelen van"},{"key":"present.description","english":"Deal with letters in the wrong place","target":"Rossz helyen lévő betűk kezelése"},{"key":"complex.name","english":"Complex","target":"Összetett"},{"key":"complex.description","english":"Deal with a more complex scenario","target":"Egy összetettebb forgatókönyv kezelése"},{"key":"differentWord.name","english":"A different word","target":"Egy másik szó"},{"key":"differentWord.description","english":"And finally a different word!","target":"És végül egy másik szó!"}]},{"name":"hints","rows":[{"key":"compareLetters.question","english":"How do I compare each letter of the guess to the target?","target":"Hogyan hasonlítsam össze a tipp minden betűjét a célszóval?"},{"key":"compareLetters.answer","english":"Loop through the positions `0` to `4`. For each position, compare `guess[i]` with `target[i]`.","target":"Menj végig a `0`-tól `4`-ig terjedő pozíciókon. Minden pozíciónál hasonlítsd össze a `guess[i]` értéket a `target[i]` értékkel."},{"key":"stateRules.question","english":"When is a letter `\"correct\"` vs `\"present\"` vs `\"absent\"`?","target":"Mikor mondjuk, hogy egy betű \"correct\", mikor \"present\", és mikor \"absent\"?"},{"key":"stateRules.answer","english":"If `guess[i]` equals `target[i]`, it's `\"correct\"`. Otherwise, if the letter exists somewhere in `target`, it's `\"present\"`. If not, it's `\"absent\"`.","target":"Ha a `guess[i]` egyenlő a `target[i]` értékkel, akkor \"correct\". Egyébként, ha a betű valahol megtalálható a `target`-ben, akkor \"present\". Ha nem, akkor \"absent\"."},{"key":"buildList.question","english":"How do I build up the array of states?","target":"Hogyan építem fel az állapotok tömbjét?"},{"key":"buildList.answer","english":"Start with an empty array, then use `states.push(value)` inside the loop to add each state onto the end in order.","target":"Kezdj egy üres tömbbel, majd a cikluson belül használd a `states.push(value)` hívást, hogy sorban minden állapotot a tömb végéhez adj."},{"key":"finishedList.question","english":"Where does the finished array go?","target":"Hová kerül a kész tömb?"},{"key":"finishedList.answer","english":"Pass it to `colorRow(1, states)` to color the first row of the board with your computed states.","target":"Add át a `colorRow(1, states)` függvénynek, hogy a tábla első sorát a kiszámított állapotokkal színezze ki."}]},{"name":"functions","rows":[{"key":"colorRow.description","english":"Colors a row on the Wordle board with the given states.","target":"Kiszínez egy sort a Wordle-táblán a megadott állapotokkal."},{"key":"colorRow.category","english":"Wordle","target":"Wordle"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Hozzáad egy elemet a tömb végéhez, helyben módosítva a tömböt."},{"key":"push.category","english":"Arrays","target":"Tömbök"},{"key":"includes.description","english":"Checks whether a string contains another string, returning true or false.","target":"Ellenőrzi, hogy egy string tartalmaz-e egy másik stringet, és igaz vagy hamis értéket ad vissza."},{"key":"includes.category","english":"Strings","target":"Stringek"}]},{"name":"describers","rows":[{"key":"colorRow","english":"colored a row on the wordle board","target":"kiszínezett egy sort a Wordle-táblán"}]}]}]
---

Üdvözlünk a Wordle-játékban, ami a Covid-19 miatti lezárások alatt hódította meg a világot!

A játék így működik:

- Van egy titkos szó, amit a játékos próbál kitalálni.
- A játékosnak 6 tippje van arra, hogy eltalálja.
- Minden tipphez 5 doboz tartozik, betűnként egy:
  - Ha egy betű a jó helyen van, a doboz zöldre vált.
  - Ha egy betű benne van a titkos szóban, de rossz helyen, a doboz sárgára vált.
  - Ha egy betű nincs benne a titkos szóban, a doboz szürkére vált.

Néhány feladatban majd megvalósítod az egész Wordle-játékot, de **ebben a feladatban** egyelőre csak az első sort kell működésre bírnod.

Ehhez létre kell hoznod egy `processGuess(target, guess)` (tipp feldolgozása) nevű függvényt. A függvénynek meg kell állapítania a tippben lévő minden betű állapotát, majd meg kell hívnia a `colorRow(1, states)` (sor kiszínezése) függvényt az egyes betűk állapotát tartalmazó tömbbel: `"correct"`, `"present"` vagy `"absent"`.

Például a `processGuess("Hello", "Holes")` esetében a `colorRow` függvényt ezzel kell meghívni:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

Mielőtt továbblépnél, győződj meg arról, hogy érted ezt!

### Metódusok

Ahogy az előző néhány feladatban is, az állapotok tömbjét a `push` metódussal építheted fel, amely egy elemet ad a tömb végéhez. Például a `states.push("correct")` a `"correct"` értéket a `states` tömb végéhez adja.

Ha azt szeretnéd ellenőrizni, hogy egy string tartalmaz-e egy másik stringet, az `includes` metódust is használhatod.

Sok sikert!
