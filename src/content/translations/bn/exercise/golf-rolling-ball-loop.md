---
lang: "bn"
type: "exercise"
slug: "golf-rolling-ball-loop"
title: "গড়িয়ে চলা বল"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/golf-rolling-ball-loop"
en_md5: "e581ca0b932527b029cef23f9ad49a5e"
governance_sha: "e5d1876"
content_version: "122b8b05c745"
published_at: "2026-08-19"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball rolled to {{ballX}}, which isn't 60 from where it started.","target":"বলটি {{ballX}} পর্যন্ত গড়িয়েছে, যা শুরুর জায়গা থেকে 60 ধাপ দূরে নয়।"},{"key":"missingPositions","english":"The ball must roll through each position one step at a time, starting from 29.","target":"বলটিকে 29 থেকে শুরু করে এক ধাপ করে প্রতিটি অবস্থানের মধ্য দিয়ে গড়াতে হবে।"},{"key":"codeQuality.tooManyLines","english":"Your solution has too many lines of code. Try using a loop to make it shorter.","target":"আপনার সমাধানে কোডের লাইন খুব বেশি হয়ে গেছে। একটি লুপ ব্যবহার করে এটি ছোট করার চেষ্টা করুন।"}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"বলটি গর্তে গড়িয়ে দিন"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"বলটি গর্তে গড়িয়ে দিন।"}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"বলটি গর্তে গড়িয়ে দিন"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"বলটি গর্তে গড়িয়ে দিন।"}]},{"name":"hints","rows":[{"key":"icantWorkItOut.question","english":"I can't work it out","target":"আমি কিছুতেই সমাধান করতে পারছি না"},{"key":"icantWorkItOut.answer","english":"You have two tools to use:\n- A repeat loop, which you use by writing `repeat(n) { }` where `n` is the amount of times you want to roll and where you can put anything inside the braces (`{ }`).\n- A `roll()` function that rolls the ball one step to the right.\n\nHow can you combine them?","target":"আপনার হাতে দুটি টুল আছে:\n- একটি repeat লুপ, যা ব্যবহার করতে লিখবেন `repeat(n) { }`, যেখানে `n` হলো আপনি যতবার গড়াতে চান সেই সংখ্যা, আর দ্বিতীয় বন্ধনীর (`{ }`) ভেতরে যেকোনো কিছু রাখতে পারেন।\n- একটি `roll()` ফাংশন, যা বলটিকে ডান দিকে এক ধাপ গড়িয়ে দেয়।\n\nএই দুটিকে কীভাবে একসাথে ব্যবহার করবেন?"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls the ball **one step to the right**.","target":"বলটিকে **ডান দিকে এক ধাপ** গড়িয়ে দেয়।"},{"key":"roll.category","english":"Movement","target":"চলাচল"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled the ball one step to the right","target":"বলটিকে ডান দিকে এক ধাপ গড়িয়ে দিয়েছে"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":"x অবশ্যই একটি সংখ্যা হতে হবে"},{"key":"yNotNumber","english":"y must be a number","target":"y অবশ্যই একটি সংখ্যা হতে হবে"}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":"বলটিকে ডান দিকে এক একক গড়িয়ে দিয়েছে"},{"key":"moveTo","english":"moved the ball to the given position","target":"বলটিকে নির্দিষ্ট অবস্থানে সরিয়ে নিয়েছে"},{"key":"getShotLength","english":"retrieved the shot length","target":"শটের দৈর্ঘ্য সংগ্রহ করেছে"},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":"উদযাপনের আতশবাজি ফাটিয়েছে"}]}]}]
---

চলুন `repeat` লুপটি কাজে লাগাই!

একটি গলফ বল টি (tee)-এর ওপর রাখা আছে। আপনার কাজ হলো বলটিকে গড়িয়ে ৬০ ধাপ দূরের গর্তে পৌঁছে দেওয়া।

এই অনুশীলনীটি **তিন লাইনের কোডে** সমাধান করুন। শুভকামনা!
