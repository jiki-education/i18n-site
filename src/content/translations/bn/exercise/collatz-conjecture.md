---
lang: "bn"
type: "exercise"
slug: "collatz-conjecture"
title: "কোলাটজ অনুমান"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/collatz-conjecture"
en_md5: "6fbe47d0456ca4f5db8e74b3f6de3cb0"
governance_sha: "7e75c64"
content_version: "4f7aecf745ee"
published_at: "2026-08-19"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"calculateCollatzSteps.name","english":"Calculate Collatz steps","target":"কোলাটজের ধাপ গণনা করুন"},{"key":"calculateCollatzSteps.description","english":"Write a function that takes a number and returns how many steps it takes to reach 1 following the Collatz Conjecture rules: if even, divide by 2; if odd, multiply by 3 and add 1.","target":"এমন একটি ফাংশন লিখুন, যেটি একটি সংখ্যা নেবে এবং কোলাটজ অনুমানের নিয়ম মেনে সেই সংখ্যা থেকে 1-এ পৌঁছাতে কতটি ধাপ লাগে তা রিটার্ন করবে। নিয়মগুলো: সংখ্যাটি জোড় হলে 2 দিয়ে ভাগ করুন; বিজোড় হলে 3 দিয়ে গুণ করে 1 যোগ করুন।"}]},{"name":"scenarios","rows":[{"key":"number1.name","english":"Number 1","target":"সংখ্যা 1"},{"key":"number1.description","english":"Zero steps for one.","target":"1-এর জন্য শূন্য ধাপ।"},{"key":"number16.name","english":"Number 16","target":"সংখ্যা 16"},{"key":"number16.description","english":"Divide if even.","target":"জোড় হলে ভাগ করা হয়।"},{"key":"number12.name","english":"Number 12","target":"সংখ্যা 12"},{"key":"number12.description","english":"Even and odd steps.","target":"জোড় ও বিজোড় ধাপ।"},{"key":"number1000000.name","english":"Number 1000000","target":"সংখ্যা 1000000"},{"key":"number1000000.description","english":"Large number of even and odd steps.","target":"বিপুল সংখ্যক জোড় ও বিজোড় ধাপ।"}]},{"name":"hints","rows":[{"key":"loopUntilOne.question","english":"How do I keep going until the number reaches 1?","target":"সংখ্যাটি 1-এ না পৌঁছানো পর্যন্ত কীভাবে চালিয়ে যাব?"},{"key":"loopUntilOne.answer","english":"Use a `repeat()` loop with no number — it repeats forever until you `return` out of it. Inside the loop, replace the number with the next number in the sequence, and return once it reaches 1.","target":"সংখ্যা ছাড়া একটি `repeat()` লুপ ব্যবহার করুন। এটি চিরকাল চলতে থাকে, যতক্ষণ না আপনি `return` দিয়ে বেরিয়ে আসেন। লুপের ভেতরে সংখ্যাটিকে ধারার পরবর্তী সংখ্যা দিয়ে বদলে দিন, আর সংখ্যাটি 1-এ পৌঁছালে রিটার্ন করুন।"},{"key":"chooseRule.question","english":"How do I decide which rule to apply on each step?","target":"প্রতিটি ধাপে কোন নিয়মটি প্রয়োগ করব, তা কীভাবে ঠিক করব?"},{"key":"chooseRule.answer","english":"Check whether the number is even. The modulo operator does this. `number % 2 === 0` means it's even. If even, halve it. Otherwise, do `3 * number + 1`.","target":"সংখ্যাটি জোড় কি না তা যাচাই করুন। মডুলো অপারেটর এই কাজটিই করে। `number % 2 === 0` মানে সংখ্যাটি জোড়। জোড় হলে সেটিকে অর্ধেক করুন, নাহলে `3 * number + 1` করুন।"},{"key":"trackSteps.question","english":"How do I track the answer (the number of steps)?","target":"উত্তরটির (ধাপের সংখ্যার) হিসাব কীভাবে রাখব?"},{"key":"trackSteps.answer","english":"Keep a counter variable for how many times you've applied the rules. Think about what needs to happen to it each time round the loop, and what your function should return when the number reaches 1.","target":"নিয়মগুলো কতবার প্রয়োগ করেছেন তা গোনার জন্য একটি কাউন্টার ভ্যারিয়েবল রাখুন। লুপের প্রতিটি চক্করে সেটির কী হওয়া দরকার, আর সংখ্যাটি 1-এ পৌঁছালে আপনার ফাংশনের কী রিটার্ন করা উচিত, তা ভেবে দেখুন।"}]}]}]
---

এক সন্ধ্যায় আপনি একটি পুরনো নোটবুক খুঁজে পেলেন, যার পাতাগুলো রহস্যময় হিজিবিজি লেখায় ভরা, যেন কেউ একটি ভাবনার পেছনে নাছোড়ভাবে ছুটে বেড়িয়েছে। একটি পাতায় একটিমাত্র প্রশ্ন চোখে পড়ল: **প্রতিটি সংখ্যা কি শেষ পর্যন্ত 1-এ পৌঁছাতে পারে?** প্রশ্নটি জড়িয়ে ছিল **কোলাটজ অনুমান** নামের এক ধাঁধার সঙ্গে, যা কয়েক দশক ধরে চিন্তাবিদদের ভাবিয়ে তুলেছে।

নিয়মগুলো আপাতদৃষ্টিতে খুবই সহজ:

1. একটি সংখ্যা বেছে নিন।
2. সংখ্যাটি জোড় হলে সেটিকে 2 দিয়ে ভাগ করুন।
3. সংখ্যাটি বিজোড় হলে সেটিকে 3 দিয়ে গুণ করে তারপর 1 যোগ করুন।
4. ফলাফলটি নিয়ে একই নিয়ম আবার প্রয়োগ করুন, এভাবে চলতেই থাকুন।

উদাহরণস্বরূপ, 12 দিয়ে শুরু করলে:

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

দ্বিতীয় সংখ্যা (6) থেকে গুনলে, 1-এ পৌঁছাতে ৯টি ধাপ লেগেছে।

`collatzSteps` (কোলাটজের ধাপ) নামে একটি ফাংশন তৈরি করুন, যেটি একটি ইনপুট নেবে: একটি সংখ্যা। কোলাটজ অনুমানের নিয়ম মেনে যেকোনো সংখ্যা থেকে 1-এ পৌঁছাতে **কতটি ধাপ** লাগে, সেটি রিটার্ন করুন।
