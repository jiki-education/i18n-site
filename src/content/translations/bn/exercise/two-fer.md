---
lang: "bn"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/two-fer"
en_md5: "259ef6df34222c26ac1869815e38f66e"
governance_sha: "22c97e3"
content_version: "9baa1c25f3c2"
published_at: "2026-08-16"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"�"}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"�"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"�"},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"�"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"�"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"�"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"�"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"�"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"�"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"�"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"�"},{"key":"bonus1.name","english":"Six lines of code","target":"�"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"�"}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"�"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"�"},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"�"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"�"},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"�"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"�"}]}]}]
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

বোনাসের জন্য: এটি কি **মাত্র ৬ লাইনের কোডে** লিখে দেখাতে পারবেন?

শুভকামনা!
