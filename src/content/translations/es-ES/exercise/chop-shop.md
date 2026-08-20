---
lang: "es-ES"
type: "exercise"
slug: "chop-shop"
title: "The Chop Shop"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/chop-shop"
en_md5: "caea992c4cec6eb25313de524e294df9"
governance_sha: "16f805d"
content_version: "c96ce70b621c"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"canFitIn.name","english":"Can You Fit Them In?","target":null},{"key":"canFitIn.description","english":"Write a function that determines if a new customer can be served before closing time, given the current queue and time remaining.","target":null}]},{"name":"scenarios","rows":[{"key":"emptyQueue.name","english":"No one in the queue","target":null},{"key":"emptyQueue.description","english":"No-one in the queue, plenty of time.","target":null},{"key":"emptyQueueButNoTime.name","english":"Late in the day","target":null},{"key":"emptyQueueButNoTime.description","english":"No-one in the queue but not enough time.","target":null},{"key":"busyDayNoTime.name","english":"A full day","target":null},{"key":"busyDayNoTime.description","english":"A full queue and not enough time.","target":null},{"key":"busyDayButTime.name","english":"Just squeezes in","target":null},{"key":"busyDayButTime.description","english":"A full day but there's just enough time.","target":null},{"key":"stillEarly.name","english":"Still early","target":null},{"key":"stillEarly.description","english":"It's still early in the day.","target":null},{"key":"cuttingItFine.name","english":"Just in time","target":null},{"key":"cuttingItFine.description","english":"They've made it just in time!","target":null}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start. The queue, or the new customer?","target":null},{"key":"whereToStart.answer","english":"First work out how much time the queue will eat up, then see what's left over for the new customer. A helper that turns a haircut name into its duration (in minutes) will make this much cleaner.","target":null},{"key":"subtractQueueTime.question","english":"How do I subtract each haircut's time from the remaining time?","target":null},{"key":"subtractQueueTime.answer","english":"Loop through the queue. For each haircut, look up its duration with your helper and subtract that from your running total of time left in the day.","target":null},{"key":"decideIfFits.question","english":"How do I decide if the new haircut fits?","target":null},{"key":"decideIfFits.answer","english":"After processing the queue, compare the remaining time against the duration of the new haircut. If the new haircut's time is less than or equal to the time left, it fits.","target":null}]}]}]
---

You run a small hairdressing salon that focusses on speed over quality. People might leave a little rough around the edges, but they're not having to spend too long in the chair.

You offer a few different services from styling to full haircuts, which take different times to complete. You run the salon on a first-come, first-serve basis. There's no appointment system.

As it gets towards the end of the day, you need a way of knowing if you have time for any new people that come into the shop.

Write a function called <define>`canFitIn`</define> which takes three inputs:

- The first is the haircuts that you have in the queue already (list of strings)
- The second is the haircut that the new person wants (string)
- The third is the amount of minutes left in the day (number)

Return a boolean for whether you can fit the person in.

The styles you offer are:

- Mohawk: 20 minutes
- Slicked-Back Pixie: 15 minutes
- Bob: 25 minutes
- Shave and Polish: 15 minutes
- Afro Trim: 45 minutes
- Up-do: 30 minutes
