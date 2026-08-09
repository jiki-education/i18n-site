---
type: "exercise"
slug: "wordle-process-guess"
title: "Wordle: Process Guess"
en_md5: "254c70c1d31167d8cb61b6c37c6cc701"
source_repo: "front-end"
source_path: "curriculum/src/exercises/wordle-process-guess"
captured_at: "2026-08-08"
---

Welcome to Wordle! The game works like this: there is a correct secret word, and you have 6 guesses to get it right. For each guess, if a letter is correct it goes green, if a letter is present in the word but in the wrong place it goes yellow, and if a letter is missing it goes grey.

Your job is to create a function called <define>`processGuess`</define> that takes two inputs: the secret target word, and the guess the player has made. You should work out the state of each letter then call the <define>`colorRow(1, states)`</define> function with a list of states for each letter: either `"correct"`, `"present"`, or `"absent"`.

For example, if the guess was correct, you would call:

```
colorRow(1, ["correct", "correct", "correct", "correct", "correct"])
```

You also have access to the <define>`push(list, element)`</define> function which adds an element to a list and returns the new list.
