---
lang: "bn"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/two-fer"
en_md5: "259ef6df34222c26ac1869815e38f66e"
governance_sha: "8228bf1"
content_version: "1c6711a76f87"
published_at: "2026-08-18"
forum_topic_id: 1694
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"আপনি ছয় লাইনের বেশি কোড ব্যবহার করেছেন।"}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"Two-fer ফাংশনটি তৈরি করুন"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"twoFer নামে একটি ফাংশন লিখুন, যা একটি নাম নেয় এবং 'One for [name], one for me.' রিটার্ন করে। নাম দেওয়া না থাকলে (খালি স্ট্রিং), নামের জায়গায় 'you' ব্যবহার করুন।"},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"ছয় লাইনের কোডে সমাধান করুন"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"মাত্র ছয় লাইনের কোডে কি এটি সমাধান করতে পারবেন?"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"কোনো নাম দেওয়া হয়নি"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"কোনো নাম দেওয়া হয়নি, তাই 'One for you, one for me.' রিটার্ন করুন।"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"নাম হিসেবে Alice দেওয়া হয়েছে"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"তার নাম 'Alice', তাই 'One for Alice, one for me.' রিটার্ন করুন।"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"নাম হিসেবে Tom দেওয়া হয়েছে"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"তার নাম 'Tom', তাই 'One for Tom, one for me.' রিটার্ন করুন।"},{"key":"bonus1.name","english":"Six lines of code","target":"ছয় লাইনের কোড"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"মাত্র ছয় লাইনের কোডে অনুশীলনীটি সমাধান করুন।"}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"ইনপুটের ওপর ভিত্তি করে কী পরিবর্তন হয়?"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"শুধু একটা জিনিস, বাক্যের মাঝখানের নামটি। নাম দেওয়া থাকলে সেটি ব্যবহার করুন, আর না থাকলে ডিফল্ট `\"you\"` ব্যবহার করুন।"},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"'নাম দেওয়া হয়েছে কি না' তা কীভাবে চেক করব?"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"একটি `if` স্টেটমেন্ট দিয়ে ইনপুটকে খালি স্ট্রিং `\"\"`-এর সাথে তুলনা করুন। খালি হলে `\"you\"` ব্যবহার করুন। নাহলে ইনপুটটিই ব্যবহার করুন।"},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"চূড়ান্ত বাক্যটি কীভাবে তৈরি করব?"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"তিনটি অংশ (`\"One for \"`, বেছে নেওয়া নামটি, এবং `\", one for me.\"`) কনক্যাটেনেশন (`+`) বা একটি টেমপ্লেট স্ট্রিং দিয়ে জুড়ে দিন।"}]}]}]
---

এবার আমরা সেই সহজ "হ্যালো" অনুশীলনীটির উপর ভিত্তি করে কিছু বাড়তি নিয়ম যোগ করব।

ইংরেজির কিছু উচ্চারণভঙ্গিতে 'two for' দ্রুত বললে শুনতে লাগে 'two fer'-এর মতো। Two-for-one হলো বলার একটি ধরন, যার মানে: একটি কিনলে আরেকটি ফ্রি পাবেন।

কল্পনা করুন, একটি বেকারিতে ছুটির বিশেষ অফার চলছে, যেখানে একটির দামে দুটি কুকি কেনা যায়। আপনি অফারটি নিলেন এবং ঠিক করলেন, বাড়তি কুকিটি অন্য কাউকে দিয়ে দেবেন।

আপনার কাজ হলো ঠিক করা, বাড়তি কুকিটি দেওয়ার সময় আপনি কী বলবেন।

- ব্যক্তিটির নাম জানা থাকলে (যেমন Alice), আপনি বলবেন: `"One for Alice, one for me."`
- নাম জানা না থাকলে বলবেন: `"One for you, one for me."`

`twoFer(name)` (twoFer এসেছে ইংরেজি "two for" থেকে, আর name মানে নাম) নামে একটি ফাংশন লিখুন, যা উপযুক্ত সংলাপটি রিটার্ন করে।

কিছু উদাহরণ দেখুন:

| ফাংশন কল           | রিটার্ন করে                     |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

বোনাস: এটি কি **মাত্র ৬ লাইনের কোডে** লিখে দেখাতে পারবেন?

শুভকামনা!
