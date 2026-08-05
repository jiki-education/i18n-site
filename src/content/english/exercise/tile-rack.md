---
type: "exercise"
slug: "tile-rack"
title: "Tile Rack"
en_md5: "52c62656cef271937ae0912d3772b3e3"
source_repo: "front-end"
source_path: "curriculum/src/exercises/tile-rack"
captured_at: "2026-08-05"
---

You're building an automated Scrabble bot. The bot has a rack of letter tiles represented as a string (e.g. `"AERHBT"`). When the bot decides which letter to play, it needs to know which <define>position</define> to move its hand to in order to pick up the tile.

Write a function called <define>`findTile`</define> that takes the rack (a string of letters) and the letter to find. If the tile is found, return `"Move to position X"` where X is the position of the first matching tile (starting from 1). If the tile isn't in the rack, return `"Error: Tile not on rack"`.

To build the result string, you'll need to convert the position number to a string and combine the parts together using concatenation (`+`) or a template string.

Examples:

- `findTile("ABCDE", "A")` returns `"Move to position 1"`
- `findTile("ABCDE", "C")` returns `"Move to position 3"`
- `findTile("BANANA", "A")` returns `"Move to position 2"` (the first A)
- `findTile("ABCDE", "Z")` returns `"Error: Tile not on rack"`
