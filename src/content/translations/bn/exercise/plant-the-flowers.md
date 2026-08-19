---
lang: "bn"
type: "exercise"
slug: "plant-the-flowers"
title: "ফুল লাগান"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/plant-the-flowers"
en_md5: "4cdf23fd99e55e08a5eece1751d712e2"
governance_sha: "7e75c64"
content_version: "138f60be9209"
published_at: "2026-08-19"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"flowerCount","english":"Expected 9 flowers, but found {{got}}.","target":"৯টি ফুল থাকার কথা, কিন্তু পাওয়া গেছে {{got}}টি।"},{"key":"missingFlowerAt10","english":"Missing a flower at position 10.","target":"10 অবস্থানে একটি ফুল নেই।"},{"key":"missingFlowerAt50","english":"Missing a flower at position 50.","target":"50 অবস্থানে একটি ফুল নেই।"},{"key":"missingFlowerAt90","english":"Missing a flower at position 90.","target":"90 অবস্থানে একটি ফুল নেই।"},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try to find a way to make it shorter.","target":"আপনার সমাধানে কোডের লাইন বেশি হয়ে গেছে। আরেকটু ছোট করার একটি উপায় খুঁজে দেখুন।"}]},{"name":"tasks","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"৯টি ফুল লাগান"},{"key":"plantFlowers.description","english":"Use a variable and a repeat loop to plant 9 flowers at positions 10, 20, 30, ..., 90.","target":"10, 20, 30, ..., 90 অবস্থানে ৯টি ফুল লাগাতে একটি ভ্যারিয়েবল এবং একটি repeat লুপ ব্যবহার করুন।"}]},{"name":"scenarios","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"৯টি ফুল লাগান"},{"key":"plantFlowers.description","english":"Plant flowers at positions 10, 20, 30, 40, 50, 60, 70, 80, and 90.","target":"10, 20, 30, 40, 50, 60, 70, 80 এবং 90 অবস্থানে ফুল লাগান।"}]},{"name":"hints","rows":[{"key":"stuck.question","english":"I'm totally stuck","target":"আমি একেবারে আটকে গেছি"},{"key":"stuck.answer","english":"Check the recent videos on how to use repeat loops and how to update variables to track state. They should tell you everything you need to know.","target":"repeat লুপ কীভাবে ব্যবহার করতে হয় এবং অবস্থার হিসাব রাখতে ভ্যারিয়েবল কীভাবে আপডেট করতে হয়, সে বিষয়ের সাম্প্রতিক ভিডিওগুলো দেখে নিন। আপনার যা যা জানা দরকার, সবই সেখানে পাবেন।"}]},{"name":"functions","rows":[{"key":"plant.description","english":"Plants a flower at the given **position**.","target":"নির্দিষ্ট **অবস্থানে** একটি ফুল লাগায়।"},{"key":"plant.category","english":"Gardening","target":"বাগান করা"}]},{"name":"describers","rows":[{"key":"plant","english":"planted a flower at position ${arg1}","target":"${arg1} অবস্থানে একটি ফুল লাগানো হয়েছে"}]}]},{"heading":"Shared \"flower-planting\" messages","note":"Shared by every exercise in the flower-planting category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"positionNumber","english":"Position must be a number","target":"পজিশন অবশ্যই একটি সংখ্যা হতে হবে।"}]}]}]
---

আপনি একটি স্বয়ংক্রিয় ফুল লাগানোর মেশিন তৈরি করছেন।

মেশিনটির কাজ হলো লন জুড়ে সমান দূরত্বে, `10` ব্যবধানে ফুল লাগানো। অর্থাৎ প্রথম ফুলটি থাকবে `10` অবস্থানে, দ্বিতীয়টি `20` অবস্থানে, এভাবে চলতে থাকবে।

আপনার কাছে একটি `plant(position)` (plant অর্থ লাগানো, position অর্থ অবস্থান) ফাংশন আছে, যা ইনপুট হিসেবে একটি অবস্থান নেয়। যেমন: `plant(10)` লিখলে 10 অবস্থানে একটি ফুল লাগানো হয়।

এই অনুশীলনীটি আপনাকে **৫ লাইন কোডে** সমাধান করতে হবে, তাই শুধু `plant(10)`, `plant(20)` এভাবে লিখে গেলে চলবে না; অন্য একটি উপায় খুঁজে বের করতে হবে।

শুভকামনা!
