---
type: "exercise"
slug: "wordle-process-guess"
title: "Wordle: Process Guess"
en_md5: "9c8afa4a4caa91fe2e3243fc4cd4f81d"
source_repo: "front-end"
source_path: "curriculum/src/exercises/wordle-process-guess"
captured_at: "2026-09-02"
---

Welcome to Wordle, the game that went viral during Covid-19 lockdowns!

The game works like this:

- There is a secret word the user is trying to guess.
- The user has 6 guesses to get it right.
- For each guess there are 5 boxes, one for each letter:
  - If a letter is correct, the box goes green.
  - If a letter is in the secret word but in the wrong place, the box goes yellow.
  - If a letter is not in the secret word, the box goes gray.

In a few exercises, you'll implement the whole Wordle game, but for **this exercise**, you're just going to get things working for the first row.

To do that, you need to create a function called <define>`processGuess(target, guess)`</define>. It should work out the state of each letter in the guess, then call the <define>`colorRow(1, states)`</define> function with an array of states for each letter: either `"correct"`, `"present"`, or `"absent"`.

For example, `processGuess("Hello", "Holes")`, should use `colorRow` with:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

Check you understand that before continuing!

### Methods

As in the last couple of exercises, you can build up the array of states using the `push` method, which adds an element onto the end of an array. For example, `states.push("correct")` adds `"correct"` to the end of the `states` array.

You also have the `includes` method if you want to check if one string contains another string.

Good luck!
