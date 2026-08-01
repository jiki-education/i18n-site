---
type: "exercise"
slug: "maze-turn-around"
title: "Turn Around"
en_md5: "6f12ee7e3d539e17dffd242801c12c60"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-turn-around"
captured_at: "2026-08-01"
---

In the last exercise you worked out how to solve the maze automatically. Great work!

One of the nice things about the solution is that the code reads very naturally. It's very aligned to the algorithm. Except for one bit...

Did you find it a bit unsatisfying that you had to use <define>`turnLeft()`</define> twice to turn around, rather than having a <define>`turnAround()`</define> function?

Well, this is your opportunity to fix that!

Create a new function called `turnAround` at the top of your code. It has no inputs and doesn't return anything. It should simply call `turnLeft()` twice.

Then use that function in the solution in the final else statement.

Try and ensure your whole final program is 17 lines of code.
