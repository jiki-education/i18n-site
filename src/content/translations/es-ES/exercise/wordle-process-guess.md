---
lang: "es-ES"
type: "exercise"
slug: "wordle-process-guess"
title: "Wordle: Procesar el intento"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/wordle-process-guess"
en_md5: "254c70c1d31167d8cb61b6c37c6cc701"
governance_sha: "16f805d"
content_version: "fae84d37f3c6"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"allCorrect","english":"We expected all the letters to be green","target":null},{"key":"absent","english":"We expected the 'a' and 'u' to be absent","target":null},{"key":"present","english":"We expected the 'l' and 'e' to be present.","target":null},{"key":"complex","english":"We expected present, present, present, correct, absent","target":null},{"key":"differentWord","english":"We expected correct, present, present, present, absent","target":null}]},{"name":"tasks","rows":[{"key":"processGuess.name","english":"Process a single guess","target":null},{"key":"processGuess.description","english":"Create a function called processGuess that takes a target word and a guess, works out the state of each letter (correct, present, or absent), then calls colorRow(1, states) with the results.","target":null}]},{"name":"scenarios","rows":[{"key":"allCorrect.name","english":"All correct","target":null},{"key":"allCorrect.description","english":"Deal with a fully correct guess","target":null},{"key":"absent.name","english":"Some absent","target":null},{"key":"absent.description","english":"Handle when some letters are wrong","target":null},{"key":"present.name","english":"Some present","target":null},{"key":"present.description","english":"Deal with letters in the wrong place","target":null},{"key":"complex.name","english":"Complex","target":null},{"key":"complex.description","english":"Deal with a more complex scenario","target":null},{"key":"differentWord.name","english":"A different word","target":null},{"key":"differentWord.description","english":"And finally a different word!","target":null}]},{"name":"hints","rows":[{"key":"compareLetters.question","english":"How do I compare each letter of the guess to the target?","target":null},{"key":"compareLetters.answer","english":"Loop through the positions `0` to `4`. For each position, compare `guess[i]` with `target[i]`.","target":null},{"key":"stateRules.question","english":"When is a letter `\"correct\"` vs `\"present\"` vs `\"absent\"`?","target":null},{"key":"stateRules.answer","english":"If `guess[i]` equals `target[i]`, it's `\"correct\"`. Otherwise, if the letter exists somewhere in `target`, it's `\"present\"`. If not, it's `\"absent\"`.","target":null},{"key":"buildList.question","english":"How do I build up the list of states?","target":null},{"key":"buildList.answer","english":"Start with an empty list, then use `push(states, value)` inside the loop to append each state in order.","target":null},{"key":"checkPresence.question","english":"How can I check if a letter appears anywhere in the target word?","target":null},{"key":"checkPresence.answer","english":"Write a small helper that loops through the target's letters and returns `true` if it finds a match. It keeps your main code clean.","target":null},{"key":"finishedList.question","english":"Where does the finished list go?","target":null},{"key":"finishedList.answer","english":"Pass it to `colorRow(1, states)` to colour the first row of the board with your computed states.","target":null}]},{"name":"functions","rows":[{"key":"colorRow.description","english":"Colors a row on the Wordle board with the given states.","target":null},{"key":"colorRow.category","english":"Wordle","target":null},{"key":"push.description","english":"Adds an element to a list and returns the new list. Does not change the original list.","target":null},{"key":"push.category","english":"Lists","target":null}]},{"name":"describers","rows":[{"key":"colorRow","english":"colored a row on the wordle board","target":null}]}]}]
---

Welcome to Wordle! The game works like this: there is a correct secret word, and you have 6 guesses to get it right. For each guess, if a letter is correct it goes green, if a letter is present in the word but in the wrong place it goes yellow, and if a letter is missing it goes grey.

Your job is to create a function called <define>`processGuess`</define> that takes two inputs: the secret target word, and the guess the player has made. You should work out the state of each letter then call the <define>`colorRow(1, states)`</define> function with a list of states for each letter: either `"correct"`, `"present"`, or `"absent"`.

For example, if the guess was correct, you would call:

```
colorRow(1, ["correct", "correct", "correct", "correct", "correct"])
```

You also have access to the <define>`push(list, element)`</define> function which adds an element to a list and returns the new list.
