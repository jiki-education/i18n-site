---
lang: "bn"
type: "exercise"
slug: "chop-shop"
title: "চটজলদি সেলুন"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/chop-shop"
en_md5: "eef10493cf2492b9996e60c7771b3a8f"
governance_sha: "accabaea"
content_version: "5f3675d67da0"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"canFitIn.name","english":"Can You Fit Them In?","target":"জায়গা করে দেওয়া যাবে কি?"},{"key":"canFitIn.description","english":"Write a function that determines if a new customer can be served before closing time, given the current queue and time remaining.","target":"লাইনে থাকা কাজ আর দিনের বাকি সময় ধরে, দোকান বন্ধ হওয়ার আগে নতুন কাস্টমারকে সেবা দেওয়া যাবে কি না, তা নির্ণয় করে এমন একটি ফাংশন লিখুন।"}]},{"name":"scenarios","rows":[{"key":"emptyQueue.name","english":"No one in the queue","target":"লাইনে কেউ নেই"},{"key":"emptyQueue.description","english":"No-one in the queue, plenty of time.","target":"লাইনে কেউ নেই, হাতে অনেক সময়।"},{"key":"emptyQueueButNoTime.name","english":"Late in the day","target":"দিনের শেষ দিকে"},{"key":"emptyQueueButNoTime.description","english":"No-one in the queue but not enough time.","target":"লাইনে কেউ নেই, কিন্তু যথেষ্ট সময়ও নেই।"},{"key":"busyDayNoTime.name","english":"A full day","target":"ব্যস্ত একটি দিন"},{"key":"busyDayNoTime.description","english":"A full queue and not enough time.","target":"লাইন ভর্তি, আর যথেষ্ট সময়ও নেই।"},{"key":"busyDayButTime.name","english":"Just squeezes in","target":"কোনোমতে জায়গা হয়ে যায়"},{"key":"busyDayButTime.description","english":"A full day but there's just enough time.","target":"দিনটি ব্যস্ত, তবে ঠিক যতটুকু সময় দরকার ততটুকুই আছে।"},{"key":"stillEarly.name","english":"Still early","target":"এখনও দিনের শুরুর দিক"},{"key":"stillEarly.description","english":"It's still early in the day.","target":"দিন এখনও শুরুর দিকেই আছে।"},{"key":"cuttingItFine.name","english":"Just in time","target":"একেবারে শেষ মুহূর্তে"},{"key":"cuttingItFine.description","english":"They've made it just in time!","target":"তিনি একেবারে শেষ মুহূর্তে এসে পৌঁছেছেন!"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start. The queue, or the new customer?","target":"কোথা থেকে শুরু করব? লাইন থেকে, নাকি নতুন কাস্টমার থেকে?"},{"key":"whereToStart.answer","english":"First work out how much time the queue will eat up, then see what's left over for the new customer. A helper that turns a haircut name into its duration (in minutes) will make this much cleaner.","target":"প্রথমে হিসাব করুন লাইনে থাকা কাজগুলো কতটা সময় নিয়ে নেবে, তারপর দেখুন নতুন কাস্টমারের জন্য কতটুকু সময় বাকি থাকে। ছাঁটের নাম থেকে তার সময়কাল (মিনিটে) বের করে দেয় এমন একটি হেল্পার ফাংশন লিখলে কাজটি অনেক পরিষ্কার হয়ে যাবে।"},{"key":"subtractQueueTime.question","english":"How do I subtract each haircut's time from the remaining time?","target":"লাইনের প্রতিটি চুল কাটার সময় বাকি সময় থেকে কীভাবে বিয়োগ করব?"},{"key":"subtractQueueTime.answer","english":"Loop through the queue. For each haircut, look up its duration with your helper and subtract that from your running total of time left in the day.","target":"লাইনের ওপর একটি লুপ চালান। প্রতিটি চুল কাটার জন্য আপনার হেল্পার ফাংশন দিয়ে তার সময়কাল বের করুন, আর দিনের বাকি সময়ের চলতি হিসাব থেকে সেটি বিয়োগ করুন।"},{"key":"decideIfFits.question","english":"How do I decide if the new haircut fits?","target":"নতুন ছাঁটের জন্য জায়গা হবে কি না, তা কীভাবে ঠিক করব?"},{"key":"decideIfFits.answer","english":"After processing the queue, compare the remaining time against the duration of the new haircut. If the new haircut's time is less than or equal to the time left, it fits.","target":"লাইনের হিসাব শেষ করার পর বাকি সময়ের সাথে নতুন ছাঁটের সময়কালের তুলনা করুন। নতুন ছাঁটের সময় যদি বাকি সময়ের চেয়ে কম বা সমান হয়, তাহলে জায়গা হয়ে যাবে।"}]}]}]
---

আপনি একটি ছোট হেয়ারড্রেসিং সেলুন চালান, যেখানে মানের চেয়ে গতির দিকেই বেশি নজর দেওয়া হয়। চুল কাটার পর কারও চেহারা হয়তো একটু এলোমেলো থেকে যেতে পারে, কিন্তু কাউকে চেয়ারে বেশিক্ষণ বসে থাকতে হয় না।

স্টাইলিং থেকে শুরু করে পুরো চুল কাটা পর্যন্ত আপনি কয়েক ধরনের সেবা দেন, আর একেকটি সম্পন্ন করতে একেক রকম সময় লাগে। সেলুনটি চলে "আগে এলে আগে পাবেন" নিয়মে। কোনো অ্যাপয়েন্টমেন্ট ব্যবস্থা নেই।

দিন শেষ হয়ে আসার সময় আপনার জানা দরকার, দোকানে নতুন কেউ এলে তার জন্য সময় আছে কি না।

`canFitIn` (জায়গা করে দেওয়া যাবে কি না) নামে একটি ফাংশন লিখুন, যেটি তিনটি ইনপুট নেয়:

- প্রথমটি হলো ইতিমধ্যে লাইনে থাকা চুল কাটার কাজগুলো (স্ট্রিংয়ের অ্যারে)
- দ্বিতীয়টি হলো নতুন ব্যক্তি যে ছাঁটটি চান সেটি (স্ট্রিং)
- তৃতীয়টি হলো দিনের বাকি থাকা মিনিটের পরিমাণ (সংখ্যা)

ব্যক্তিটিকে জায়গা করে দেওয়া যাবে কি না, সেটি জানিয়ে একটি বুলিয়ান রিটার্ন করুন।

আপনি যে স্টাইলগুলো দেন:

- Mohawk: ২০ মিনিট
- Slicked-Back Pixie: ১৫ মিনিট
- Bob: ২৫ মিনিট
- Shave and Polish: ১৫ মিনিট
- Afro Trim: ৪৫ মিনিট
- Up-do: ৩০ মিনিট

### নেস্টেড অ্যারে

এটিই প্রথম অনুশীলনী যেখানে আপনি এমন একটি অ্যারে নিয়ে কাজ করছেন, যার এলিমেন্ট হিসেবে আরও কিছু অ্যারে রয়েছে। এগুলোকে আমরা বলি "নেস্টেড অ্যারে"। নেস্টেড অ্যারে আর দশটা অ্যারের মতোই, শুধু পার্থক্য হলো, অ্যারেটির ভেতরে স্ট্রিং বা সংখ্যা না থেকে আরও কিছু অ্যারে থাকে।

`cuts` (ছাঁটগুলো) অ্যারেটির দিকে একবার তাকান। এর ভেতরে আরও কিছু অ্যারে আছে, প্রতিটি চুল কাটার জন্য একটি করে, আর এই অ্যারেগুলোর প্রত্যেকটিতে দুটি করে এলিমেন্ট আছে: একটি নাম আর একটি সময়কাল।

এটি বোঝার সবচেয়ে সহজ উপায় হলো, প্রথমে ভেতরের অ্যারেগুলোর কথা ভাবা, অর্থাৎ নাম আর সময়কালের জোড়াগুলোর কথা, আর তারপর ভাবা যে সেগুলোকে একসাথে জড়ো করে আরেকটি অ্যারের ভেতরে রাখা হয়েছে।

ইনডেক্সিং এখানেও আর সব জায়গার মতোই কাজ করে, তবে আপনি এভাবে একের পর এক ইনডেক্স জুড়ে দিতে পারেন...

```javascript
const cuts = [
  ["Mohawk", 20],
  ["Slicked-Back Pixie", 15],
  ["Bob", 25],
  //...
]

cuts[0] // ["Mohawk", 20]
cuts[0][0] // "Mohawk"
cuts[0][1] // 20
cuts[2][0] // "Bob"
```
