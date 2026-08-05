---
type: "exercise"
slug: "battle-procedures"
title: "Battle Procedures"
en_md5: "ab16d83f6a45d12645032159192cd109"
source_repo: "front-end"
source_path: "curriculum/src/exercises/battle-procedures"
captured_at: "2026-08-05"
---

In the last level, you worked out how to move a laser cannon back and forth, shooting down aliens. We've brought your solution over for you to continue on;

The previous code worked, but the shooting logic was mixed in with everything else. As you get better at coding, one of the things that will make you succeed is breaking your code into small chunks that each do one thing.

In this exercise, you need to extract the shooting logic into its own function called <define>`shootIfAlienAbove`</define>. This function has the responsibility of checking if there's an alien above the laser cannon and, if so, shooting it down.

The rest of the game logic (tracking position, changing direction at boundaries, moving the laser) stays in the loop as before.

Create your `shootIfAlienAbove` function, then use it inside the loop alongside the movement logic.
