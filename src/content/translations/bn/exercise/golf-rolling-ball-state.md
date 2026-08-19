---
lang: "bn"
type: "exercise"
slug: "golf-rolling-ball-state"
title: "স্টেটফুল বল"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/golf-rolling-ball-state"
en_md5: "f203d7c055cd4ad8de235218c470df98"
governance_sha: "7e75c64"
content_version: "89ab96605d0b"
published_at: "2026-08-19"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"positionNotNumber","english":"position must be a number","target":"position অবশ্যই একটি সংখ্যা হতে হবে।"}]},{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball didn't reach the hole. It's at position {{ballX}}, but needs to be at position 88.","target":"বলটি গর্তে পৌঁছায়নি। এটি এখন {{ballX}} অবস্থানে আছে, কিন্তু এটিকে 88 অবস্থানে থাকতে হবে।"},{"key":"missingPositions","english":"The ball must roll through each position individually, not jump directly to the end.","target":"বলটিকে প্রতিটি অবস্থানের মধ্য দিয়ে একটি একটি করে গড়িয়ে যেতে হবে, সরাসরি শেষ অবস্থানে লাফিয়ে গেলে হবে না।"}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"বলটিকে গড়িয়ে গর্তে নিয়ে যান"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"বলটিকে গড়িয়ে গর্তে নিয়ে যান।"}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"বলটিকে গড়িয়ে গর্তে নিয়ে যান"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"বলটিকে গড়িয়ে গর্তে নিয়ে যান।"}]},{"name":"hints","rows":[{"key":"dontKnowWhereToStart.question","english":"I don't know where to start","target":"কোথা থেকে শুরু করব বুঝতে পারছি না"},{"key":"dontKnowWhereToStart.answer","english":"The key is to move the ball one step forward each time. You can use a variable to do this. Think about how that might work.","target":"মূল বিষয় হলো প্রতিবার বলটিকে এক ধাপ করে সামনে এগিয়ে নেওয়া। এর জন্য আপনি একটি ভ্যারিয়েবল ব্যবহার করতে পারেন। এটি কীভাবে কাজ করতে পারে, তা একটু ভেবে দেখুন।"},{"key":"stillCantFigureItOut.question","english":"I still can't figure it out","target":"এখনও বুঝে উঠতে পারছি না"},{"key":"stillCantFigureItOut.answer","english":"You want to create a variable to track where the ball is. It should start where it is now, then many times increase by one. Every time it increases you should `moveTo(...)` using the variable as an input.","target":"বলটি কোথায় আছে তা ট্র্যাক করার জন্য আপনাকে একটি ভ্যারিয়েবল তৈরি করতে হবে। এটি বলের বর্তমান অবস্থান থেকে শুরু হবে, তারপর অনেকবার এক করে বাড়বে। প্রতিবার বাড়ানোর পর ভ্যারিয়েবলটিকে ইনপুট হিসেবে ব্যবহার করে আপনাকে `moveTo(...)` কল করতে হবে।"}]},{"name":"functions","rows":[{"key":"moveTo.description","english":"Moves the ball to **position**.","target":"বলটিকে **position** অবস্থানে সরিয়ে দেয়।"},{"key":"moveTo.category","english":"Movement","target":"চলাচল"}]},{"name":"describers","rows":[{"key":"moveTo","english":"moved the ball to position ${arg1}","target":"বলটিকে ${arg1} অবস্থানে সরানো হয়েছে"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":"x অবশ্যই একটি সংখ্যা হতে হবে"},{"key":"yNotNumber","english":"y must be a number","target":"y অবশ্যই একটি সংখ্যা হতে হবে"}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":"বলটিকে ডান দিকে এক একক গড়িয়ে দিয়েছে"},{"key":"moveTo","english":"moved the ball to the given position","target":"বলটিকে নির্দিষ্ট অবস্থানে সরিয়ে নিয়েছে"},{"key":"getShotLength","english":"retrieved the shot length","target":"শটের দৈর্ঘ্য সংগ্রহ করেছে"},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":"উদযাপনের আতশবাজি ফাটিয়েছে"}]}]}]
---

আমরা আবার গলফ গেম তৈরির জগতে ফিরে এসেছি, তবে এবার আমরা যা তৈরি করছি তা বদলে গেছে।

আগে আমাদের কাছে যে `roll()` (গড়িয়ে দেওয়া) ফাংশনটি ছিল, তার বদলে এবার আছে `moveTo(position)` (নির্দিষ্ট অবস্থানে সরানো) ফাংশন, যা বলটিকে মুহূর্তেই কোনো একটি জায়গায় সরিয়ে দেয়।

এখন, খেলোয়াড় বলটিতে আঘাত করলে আমরা চাইলে সেটিকে সরাসরি শেষ জায়গায় সরিয়ে দিতে পারতাম, কিন্তু কোনো অ্যানিমেশন ছাড়া বলটিকে পৌঁছে যেতে দেখাটা মোটেও তৃপ্তিদায়ক নয়। তাই আমরা `moveTo(position)` অনেকবার ব্যবহার করতে চাই, যেন দেখে মনে হয় বলটি গড়িয়ে যাচ্ছে।

বলটি **28** অবস্থান থেকে শুরু করে এবং সেটিকে **88** অবস্থানে পৌঁছাতে হবে।

আপনাকে এটি **৫ লাইনের কোডে** সমাধান করতে হবে। শুভকামনা!
