---
type: "exercise"
slug: "space-invaders-conditional"
title: "Space Invaders: Conditional"
en_md5: "2c12d98894f082b513ed99f1364f5a27"
source_repo: "front-end"
source_path: "curriculum/src/exercises/space-invaders-conditional"
captured_at: "2026-08-04"
---

The aliens have changed their formation! They're now arranged in two rows, but not every column has an alien.

You have three functions:

- <define>`move()`</define> moves your laser cannon one position to the right
- <define>`shoot()`</define> fires the laser upwards
- <define>`isAlienAbove()`</define> returns `true` if there's an alien above you, or `false` if not

You need to move across the screen, checking each position. If there's an alien above you, shoot it! If not, just move on.

**Don't shoot when there's no alien above you, or you lose!**
