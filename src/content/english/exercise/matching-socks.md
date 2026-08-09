---
type: "exercise"
slug: "matching-socks"
title: "Matching Socks"
en_md5: "2ddf4515c7e76ecc36e9a8f7b4ecf12e"
source_repo: "front-end"
source_path: "curriculum/src/exercises/matching-socks"
captured_at: "2026-08-08"
---

There's little in life more annoying than having odd socks where you can't find its partner. So one day you finally decide to sort those socks out!

You get all of the clean clothes from your drawers and put them into one basket. Then you go searching under every surface and behind every cushion to find any other clothes lying around, and put them in a second basket of dirty items.

You now have two baskets and want to go through, finding whether each sock has a pair or not.

Write a function called <define>`matchingSocks`</define>. It takes two inputs, the clean basket and the dirty basket - both as lists of strings. Return a list of all the pairs of socks.

For example:

- If the clean basket contains: `["left blue sock", "green sweater"]`
- And the dirty basket contains: `["blue shorts", "right blue sock", "left green sock"]`
- You should return `["blue socks"]`

The descriptions follow these rules:

- They are always lower case.
- They are always one or more words separated by spaces.
- For things that can be pairs, they will always start with `"left "` or `"right "`
