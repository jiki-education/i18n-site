---
type: "exercise"
slug: "methodic-pangram"
title: "Methodic Pangram"
en_md5: "ab05b1c47cdeeb83698a830f79c8b738"
source_repo: "front-end"
source_path: "curriculum/src/exercises/methodic-pangram"
captured_at: "2026-08-06"
---

Welcome to the third Pangram exercise, where we're going to take all those helper functions you've made and simplify things a lot!

Each of the functions I encouraged you to write (`includes`, `indexOf` and `toLowerCase`) is actually built into strings as a method.

So rather than writing `includes("Jeremy", "r")`, you can write `"Jeremy".includes("r")` and it does exactly the same thing. But because this method is built into the string, you don't need to write it yourself!

For this exercise, you only need two of them:

- `"Jeremy".toLowerCase()`
- `"Jeremy".includes("r")`

You won't need `indexOf` at all any more - you only wrote it to help build `toLowerCase`, and now the built-in `toLowerCase` does that job for you.

So you can delete all those functions you wrote (but at least you now know how these methods actually work under the hood, so don't shout at me too hard!) and use these instead.

Have fun!
