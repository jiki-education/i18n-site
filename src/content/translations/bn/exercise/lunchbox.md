---
lang: "bn"
type: "exercise"
slug: "lunchbox"
title: "টিফিন বক্স"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/lunchbox"
en_md5: "b6274dbfc7f2e050c514feb7da65b588"
governance_sha: "3af8e97d"
content_version: "93c354267732"
published_at: "2026-08-28"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"আপনার সমাধানে কোডের লাইন অনেক বেশি হয়ে গেছে। একটু ছোট করতে পারবেন কি?"}]},{"name":"tasks","rows":[{"key":"packLunchbox.name","english":"Pack the Lunchbox","target":"টিফিন বক্স গুছিয়ে নিন"},{"key":"packLunchbox.description","english":"Split the items into a lunchbox and a backpack: fit as many as you can into the lunchbox without going over its capacity, and put everything else in the backpack.","target":"জিনিসগুলোকে টিফিন বক্স আর ব্যাকপ্যাকে ভাগ করুন: ধারণক্ষমতা না ছাড়িয়ে যতগুলো সম্ভব জিনিস টিফিন বক্সে ভরুন, আর বাকি সবকিছু ব্যাকপ্যাকে রাখুন।"},{"key":"solveInSixteenLines.name","english":"Solve in 16 lines of code","target":"১৬ লাইনের কোডে সমাধান করুন"},{"key":"solveInSixteenLines.description","english":"Can you solve this exercise with only 16 lines of code?","target":"মাত্র ১৬ লাইনের কোডে এই অনুশীলনীটি সমাধান করতে পারবেন কি?"}]},{"name":"scenarios","rows":[{"key":"everythingFits.name","english":"Everything fits","target":"সবকিছু ধরে যায়"},{"key":"everythingFits.description","english":"A roomy lunchbox where every item fits, so the backpack stays empty.","target":"বড়সড় একটি টিফিন বক্স, যাতে প্রতিটি জিনিসই ধরে যায়, তাই ব্যাকপ্যাক খালি থাকে।"},{"key":"packTheMost.name","english":"Fit the most","target":"যতগুলো সম্ভব ভরুন"},{"key":"packTheMost.description","english":"Space is tight, so the small items go in the lunchbox and the big ones are left for the backpack.","target":"জায়গা কম, তাই ছোট জিনিসগুলো টিফিন বক্সে যায় আর বড়গুলো ব্যাকপ্যাকের জন্য থেকে যায়।"},{"key":"justTheSnack.name","english":"Just the snack","target":"শুধুই স্ন্যাক"},{"key":"justTheSnack.description","english":"Only the very smallest item fits; the rest go in the backpack.","target":"কেবল সবচেয়ে ছোট জিনিসটিই ধরে; বাকিগুলো ব্যাকপ্যাকে যায়।"},{"key":"nothingFits.name","english":"Nothing fits","target":"কিছুই ধরে না"},{"key":"nothingFits.description","english":"Even the smallest item is too big, so everything ends up in the backpack.","target":"সবচেয়ে ছোট জিনিসটিও বেশি বড়, তাই সবকিছুই শেষমেশ ব্যাকপ্যাকে যায়।"},{"key":"emptyLunchbox.name","english":"Empty lunchbox","target":"খালি টিফিন বক্স"},{"key":"emptyLunchbox.description","english":"There are no items at all, so both the lunchbox and the backpack come back empty.","target":"কোনো জিনিসই নেই, তাই টিফিন বক্স আর ব্যাকপ্যাক দুটোই খালি ফেরত আসে।"},{"key":"bonus1.name","english":"16 lines of code","target":"১৬ লাইনের কোড"},{"key":"bonus1.description","english":"Solve the exercise with only 16 lines of code.","target":"মাত্র ১৬ লাইনের কোডে অনুশীলনীটি সমাধান করুন।"}]},{"name":"hints","rows":[{"key":"readEachItem.question","english":"How do I get each item's name and size?","target":"প্রতিটি জিনিসের নাম আর আকার কীভাবে পাব?"},{"key":"readEachItem.answer","english":"Each item is a pair. The first part is the name and the second is the size, so you can read them out of the item one at a time.","target":"প্রতিটি জিনিস একটি জোড়া। প্রথম অংশটি নাম আর দ্বিতীয়টি আকার, তাই জিনিসটি থেকে একটি একটি করে সেগুলো পড়ে নিতে পারবেন।"},{"key":"fitTheMost.question","english":"How do I fit in as many items as possible?","target":"যতগুলো সম্ভব জিনিস কীভাবে ভরব?"},{"key":"fitTheMost.answer","english":"Think about which items to add first. Smaller items leave more room for others, so it pays to deal with them before the big ones.","target":"কোন জিনিসগুলো আগে যোগ করবেন, সেটা ভাবুন। ছোট জিনিস অন্যগুলোর জন্য বেশি জায়গা রাখে, তাই বড়গুলোর আগে ছোটগুলো নিয়ে কাজ করাই লাভজনক।"},{"key":"goSmallestFirst.question","english":"The items are listed largest first — how do I go through them smallest first?","target":"জিনিসগুলো বড় থেকে ছোট ক্রমে সাজানো, ছোট থেকে শুরু করে কীভাবে এগোব?"},{"key":"goSmallestFirst.answer","english":"There's an array method that gives you back a reversed copy of an array. Reverse the items first, then work through them in that new order.","target":"এমন একটি অ্যারে মেথড আছে, যেটি একটি অ্যারের উল্টো ক্রমের একটি কপি ফেরত দেয়। প্রথমে জিনিসগুলো উল্টে নিন, তারপর সেই নতুন ক্রমে একটি একটি করে এগিয়ে যান।"},{"key":"knowWhenFull.question","english":"How do I decide where each item goes?","target":"প্রতিটি জিনিস কোথায় যাবে, সেটা কীভাবে ঠিক করব?"},{"key":"knowWhenFull.answer","english":"Keep a running total of the sizes you've added. Before adding an item, check whether the total plus its size would still fit within the capacity. If it does, it goes in the lunchbox, otherwise it goes in the backpack.","target":"আপনি যে আকারগুলো যোগ করেছেন, তার একটি চলমান যোগফল রাখুন। কোনো জিনিস যোগ করার আগে দেখে নিন, যোগফলের সাথে তার আকার যোগ করলে সেটা ধারণক্ষমতার মধ্যে থাকবে কি না। থাকলে জিনিসটি টিফিন বক্সে যাবে, না থাকলে ব্যাকপ্যাকে।"}]},{"name":"functions","rows":[{"key":"toReversed.description","english":"Returns a copy of the array with the elements in reverse order, without changing the original.","target":"মূল অ্যারেটি না বদলে, তার এলিমেন্টগুলো উল্টো ক্রমে সাজিয়ে একটি কপি রিটার্ন করে।"},{"key":"toReversed.category","english":"Arrays","target":"অ্যারে"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"একটি অ্যারের শেষে একটি এলিমেন্ট যোগ করে, অ্যারেটিকেই সরাসরি বদলে দেয়।"},{"key":"push.category","english":"Arrays","target":"অ্যারে"}]}]}]
---

ছোটবেলায় আমি প্রতিদিন স্কুলের জন্য নিজের টিফিন বক্স গুছিয়ে নিতাম। আমার মা জিনিসগুলো বের করে রাখতেন (বড় থেকে ছোট ক্রমে সুন্দর করে সাজিয়ে), আর আমি যতটা সম্ভব টিফিন বক্সে ভরার চেষ্টা করতাম। কিন্তু স্বাভাবিকভাবেই তাতে একটা নির্দিষ্ট পরিমাণের বেশি ধরত না। যা ঢুকত না, সেগুলো লকারে রেখে যাওয়ার বদলে আমাকে ব্যাকপ্যাকে ভরে সারাদিন বয়ে বেড়াতে হতো।

এই অনুশীলনীতে আপনার কাজ হলো এমন একটি অ্যালগরিদম তৈরি করা, যা বের করে দেবে কোন জিনিসগুলো আমি টিফিন বক্সে ভরতে পারব আর কোনগুলো আমাকে ব্যাকপ্যাকে নিতে হবে।

আপনার কাজ হলো `packLunch(items, capacity)` (টিফিন গুছিয়ে নেওয়া) নামে একটি ফাংশন লেখা, যেটি দুটি ইনপুট নেয়: জিনিসগুলোর অ্যারে (বড়টি আগে), আর টিফিন বক্সের আকার `capacity` (ধারণক্ষমতা), যা একটি সংখ্যা।

জিনিসগুলোর অ্যারেটি একটি নেস্টেড অ্যারে। প্রতিটি জিনিস নিজেও দুটি এলিমেন্টের একটি অ্যারে: জিনিসটির নাম আর তার আকার। জিনিসগুলো সবসময় বড় থেকে ছোট ক্রমে সাজানো থাকে। উদাহরণস্বরূপ, জিনিসগুলোর অ্যারেটি হতে পারে:

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

টিফিন বক্সের একটি সর্বোচ্চ ধারণক্ষমতা আছে। কোন কোন জিনিস টিফিন বক্সে যেতে পারবে, সেটা আপনাকে বের করতে হবে। যতগুলো জিনিস সম্ভব, ততগুলো ভরুন। বাকি সবকিছু যাবে ব্যাকপ্যাকে।

আপনার ফাংশনটি এমন একটি অ্যারে রিটার্ন করবে, যাতে দুটি এলিমেন্ট থাকবে। প্রথম এলিমেন্টটি টিফিন বক্সের জিনিসগুলোর একটি অ্যারে, আর দ্বিতীয়টি ব্যাকপ্যাকের জিনিসগুলোর। দুটি অ্যারেই ছোট থেকে বড় ক্রমে সাজানো থাকবে।

উদাহরণস্বরূপ, উপরের অ্যারেটির ক্ষেত্রে ধারণক্ষমতা 20 হলে আপনার ফাংশনের কাছ থেকে এটি আশা করা হবে:

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### সাহায্যের জন্য কিছু মেথড

এই অংশের বাকি সব অনুশীলনীর মতো এখানেও অ্যারে তৈরি করতে আপনি `.push(element)` মেথডটি ব্যবহার করবেন।

আপনার হাতে `[...].toReversed()` নামে একটি নতুন মেথডও আছে, যেটি একটি অ্যারের সব জিনিস উল্টো ক্রমে সাজিয়ে তার একটি কপি তৈরি করে। উদাহরণস্বরূপ:

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

এটি ব্যবহার করা বাধ্যতামূলক নয়, তবে কাজে লাগতে পারে।

শুভকামনা!
