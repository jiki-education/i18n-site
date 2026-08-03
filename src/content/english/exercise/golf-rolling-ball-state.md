---
type: "exercise"
slug: "golf-rolling-ball-state"
title: "Stateful Ball"
en_md5: "f203d7c055cd4ad8de235218c470df98"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-state"
captured_at: "2026-08-03"
---

We're back in the world of building a golf game, but this time what we're building has changed.

Instead of the <define>`roll()`</define> function we had before, we now have a <define>`moveTo(position)`</define> function that moves the ball to a spot instantly.

Now, when the player hits the ball, we could just move it directly to the final place, but it's very unsatisfying seeing it not animate. So instead we want to use `moveTo(position)` lots of times to make it look like it's rolling.

The ball starts at position **28** and needs to reach position **88**.

You must solve this in **5 lines of code**. Good luck!
