---
lang: "es-ES"
type: "exercise"
slug: "stars"
title: "Estrellas"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/stars"
en_md5: "4f2a6c0db0b364b0292f57efa1d55751"
governance_sha: "16f805d"
content_version: "5c9f74c17b4e"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createStarsFunction.name","english":"Create stars function","target":null},{"key":"createStarsFunction.description","english":"Write a stars function that takes a count and returns a list of strings, where each string has an increasing number of stars. For example, stars(3) returns [\"*\", \"**\", \"***\"].","target":null}]},{"name":"scenarios","rows":[{"key":"count0.name","english":"Count is 0","target":null},{"key":"count0.description","english":"Zero stars returns an empty list.","target":null},{"key":"count1.name","english":"Count is 1","target":null},{"key":"count1.description","english":"One star returns a list with a single star string.","target":null},{"key":"count3.name","english":"Count is 3","target":null},{"key":"count3.description","english":"Three stars returns three strings with increasing stars.","target":null},{"key":"count5.name","english":"Count is 5","target":null},{"key":"count5.description","english":"Five stars returns five strings with increasing stars.","target":null}]},{"name":"hints","rows":[{"key":"shapeOfAnswer.question","english":"What's the shape of my answer?","target":null},{"key":"shapeOfAnswer.answer","english":"A list of strings, each one a bit longer than the last. Start with an empty list and an empty string. Each iteration, the string grows by one star, and the new string goes into the list.","target":null},{"key":"loopCount.question","english":"How do I run the loop the right number of times?","target":null},{"key":"loopCount.answer","english":"A `repeat(n)` loop matches the input directly. If `n` is 3, you go around 3 times.","target":null},{"key":"insideLoop.question","english":"What happens inside the loop?","target":null},{"key":"insideLoop.answer","english":"Two steps. First, append a star onto your growing string using concatenation with `+`. Second, `push()` the growing string onto your list. Order matters here. Do the concatenation first, so the first thing pushed is `\"*\"`, not the empty string.","target":null}]},{"name":"functions","rows":[{"key":"push.description","english":"Add an item to the end of a list (provided by level stdlib)","target":null},{"key":"push.category","english":"List Operations","target":null}]}]}]
---

You're building a simple text-based pattern generator. Given a number, create a list of strings where each string contains an increasing number of stars.

For example, given the number 3, you should return:

```
["*", "**", "***"]
```

The first element has 1 star, the second has 2 stars, and so on up to the given count.

If the count is 0, return an empty list.

Create a function called <define>`stars`</define> that takes one input, a count, and returns the list of star strings.
