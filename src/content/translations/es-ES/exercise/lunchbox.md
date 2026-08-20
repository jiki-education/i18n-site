---
lang: "es-ES"
type: "exercise"
slug: "lunchbox"
title: "Fiambrera"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/lunchbox"
en_md5: "dd6e26a7a9ab2d70f7d582c81cda86c0"
governance_sha: "16f805d"
content_version: "4377eb5a077d"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"oneListOnly","english":"You should only create one list. Make sure you only use <code>[]</code> once.","target":null},{"key":"usePush","english":"You should use <code>push()</code> to add items to your list.","target":null}]},{"name":"tasks","rows":[{"key":"packALunch.name","english":"Pack a Lunch","target":null},{"key":"packALunch.description","english":"Write a function that packs a lunchbox with a sandwich, drink, and snack. If the drink is a milkshake, leave it out of the lunchbox because it's too big.","target":null}]},{"name":"scenarios","rows":[{"key":"regularLunch.name","english":"Regular lunch","target":null},{"key":"regularLunch.description","english":"A normal lunch with water - everything fits in the lunchbox.","target":null},{"key":"milkshakeLunch.name","english":"Milkshake lunch","target":null},{"key":"milkshakeLunch.description","english":"The milkshake is too big for the lunchbox, so it gets left out.","target":null},{"key":"anotherRegular.name","english":"Another regular lunch","target":null},{"key":"anotherRegular.description","english":"Another normal lunch where everything fits.","target":null},{"key":"anotherMilkshake.name","english":"Another milkshake lunch","target":null},{"key":"anotherMilkshake.description","english":"Another lunch with a milkshake that doesn't fit.","target":null}]},{"name":"hints","rows":[{"key":"basicShape.question","english":"What's the basic shape of my answer?","target":null},{"key":"basicShape.answer","english":"A list. Start with an empty list and add the allowed items to it one at a time.","target":null},{"key":"addItems.question","english":"How do I add items to a list?","target":null},{"key":"addItems.answer","english":"Use `push()`. It takes the list and the item, and gives back the new (longer) list.","target":null},{"key":"leaveMilkshakeOut.question","english":"How do I leave the milkshake out?","target":null},{"key":"leaveMilkshakeOut.answer","english":"Use an if-statement. Only push the drink if it's not equal to `\"milkshake\"`.","target":null},{"key":"listNotGrowing.question","english":"Why isn't my list growing?","target":null},{"key":"listNotGrowing.answer","english":"`push()` doesn't modify the list in place. It returns the new list. You need to reassign, for example `lunchbox = lunchbox.push(item)` (or the equivalent in your language).","target":null}]},{"name":"functions","rows":[{"key":"push.description","english":"Returns a new list with the element added to the end (provided by level stdlib)","target":null},{"key":"push.category","english":"List Operations","target":null}]}]}]
---

You really like your lunchbox packed a certain way: sandwich on the left, drink in the middle, and snack on the right. However, sometimes you get a milkshake, which is too big to go in the lunchbox, so you carry it instead, and just put the sandwich and the snack in.

Write a function called <define>`packALunch`</define> that takes three inputs: <define>`sandwich`</define>, <define>`drink`</define>, and <define>`snack`</define> (all strings). It should return a list of the items packed into the lunchbox.

You must create only one list and use <define>`push`</define> to add items to it.
