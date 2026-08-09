---
type: "exercise"
slug: "wordle-process-game"
title: "Wordle: Play a Game"
en_md5: "7608ad70842face3e19d316b4ee980f5"
source_repo: "front-end"
source_path: "curriculum/src/exercises/wordle-process-game"
captured_at: "2026-08-08"
---

Now that you can process a single guess, it's time to process a whole game!

Create a function called <define>`processGame`</define> that takes two inputs:

1. The secret target word.
2. A list of guesses the player has made.

You should work out the state of each row then call the <define>`colorRow(row, states)`</define> function with the row number (`1-6`) and a list of states for each letter.

For example, if the first guess was correct:

```
colorRow(1, ["correct", "correct", "correct", "correct", "correct"])
```
