---
type: "exercise"
slug: "tile-search"
title: "Tile Search"
en_md5: "964730f77d4f532aa178b26e5504da86"
source_repo: "front-end"
source_path: "curriculum/src/exercises/tile-search"
captured_at: "2026-08-05"
---

You're building a Scrabble bot. Before the bot tries to play a word, it needs to check whether it has a specific letter tile in its rack.

The rack is represented as a string of letters (e.g. `"SCRAB"`).

Write a function called <define>`contains`</define> that takes two inputs:

- <define>`haystack`</define>: the rack of tiles, as a string
- <define>`needle`</define>: the letter to search for

Return `true` if the letter is in the rack, or `false` if it isn't.

Examples:

- `contains("SCRAB", "A")` returns `true`
- `contains("SCRAB", "Z")` returns `false`
- `contains("", "A")` returns `false`
