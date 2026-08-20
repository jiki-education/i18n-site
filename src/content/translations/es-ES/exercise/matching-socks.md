---
lang: "es-ES"
type: "exercise"
slug: "matching-socks"
title: "Calcetines a juego"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/matching-socks"
en_md5: "2ddf4515c7e76ecc36e9a8f7b4ecf12e"
governance_sha: "16f805d"
content_version: "8dbfec58ab1e"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findMatchingSocks.name","english":"Find Matching Socks","target":null},{"key":"findMatchingSocks.description","english":"Write a function that takes two baskets of clothes (as lists of strings) and returns a list of all the pairs of socks found across both baskets. Items that are socks end with ' sock' and always start with 'left ' or 'right '.","target":null}]},{"name":"scenarios","rows":[{"key":"emptyBaskets.name","english":"Empty baskets","target":null},{"key":"emptyBaskets.description","english":"Both baskets are empty.","target":null},{"key":"nothingClean.name","english":"Nothing clean","target":null},{"key":"nothingClean.description","english":"There's nothing clean.","target":null},{"key":"nothingDirty.name","english":"Nothing dirty","target":null},{"key":"nothingDirty.description","english":"There's nothing dirty.","target":null},{"key":"noSocks.name","english":"No socks","target":null},{"key":"noSocks.description","english":"There are no socks anywhere.","target":null},{"key":"oneInEach.name","english":"One in each","target":null},{"key":"oneInEach.description","english":"There's a matching sock in each basket.","target":null},{"key":"aBigMix.name","english":"A big mix!","target":null},{"key":"aBigMix.description","english":"A mix of clothes with multiple matching pairs.","target":null},{"key":"someAddedPain.name","english":"Odds and ends","target":null},{"key":"someAddedPain.description","english":"A few oddities snuck in.","target":null}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start when there are lots of moving parts?","target":null},{"key":"whereToStart.answer","english":"Start by writing small helper functions, like `length()`, `startsWith()`, and `endsWith()`, that you'll need everywhere. Get those working first before touching the main logic.","target":null},{"key":"isItASock.question","english":"How do I tell if something in the basket is actually a sock?","target":null},{"key":"isItASock.answer","english":"Socks have the form `\"left X\"` or `\"right X\"`. A small helper that returns true only when the item starts with one of those prefixes will save you from re-checking everywhere.","target":null},{"key":"compareSockPair.question","english":"How do I compare a left sock to its right pair?","target":null},{"key":"compareSockPair.answer","english":"Two helpers make this easier. One to strip off the `\"left \"` or `\"right \"` prefix (so you can compare just the colour or pattern), and another to flip `\"left\"` and `\"right\"` so you can build the partner of any sock.","target":null},{"key":"avoidDuplicates.question","english":"How do I avoid counting the same pair twice?","target":null},{"key":"avoidDuplicates.answer","english":"A helper that adds an item to a list only if it's not already there will keep duplicates out of your result.","target":null},{"key":"overallPlan.question","english":"What's a good overall plan?","target":null},{"key":"overallPlan.answer","english":"Extract all socks from both baskets into one combined list, then for each sock, build what its partner would look like and check whether that partner is also in the list.","target":null}]},{"name":"functions","rows":[{"key":"push.description","english":"Returns a new list with the element added to the end (provided by level stdlib)","target":null},{"key":"push.category","english":"List Operations","target":null},{"key":"concat.description","english":"Takes two lists, joins them together into one list, then returns the result (provided by level stdlib)","target":null},{"key":"concat.category","english":"List Operations","target":null}]}]}]
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
