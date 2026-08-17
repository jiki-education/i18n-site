---
lang: "bn"
type: "exercise"
slug: "digital-root"
title: "ডিজিটাল রুট"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/digital-root"
en_md5: "554e48db79141f8304144e152643a47c"
governance_sha: "faa83ff"
content_version: "1b561576ea13"
published_at: "2026-08-17"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"sumTheDigits.name","english":"Sum the digits","target":"অঙ্কগুলো যোগ করুন"},{"key":"sumTheDigits.description","english":"Write a function called digitalRoot that takes a number and adds its digits together. For numbers that are already a single digit, and for numbers whose digits sum to a single digit, this first pass is enough.","target":"digitalRoot নামে একটি ফাংশন লিখুন, যা একটি সংখ্যা নেয় এবং তার অঙ্কগুলো একসাথে যোগ করে। যে সংখ্যা আগে থেকেই একটি মাত্র অঙ্কের, এবং যে সংখ্যার অঙ্কগুলোর যোগফল একটি মাত্র অঙ্ক, তাদের জন্য এই প্রথমবারের যোগই যথেষ্ট।"},{"key":"collapseToSingleDigit.name","english":"Keep collapsing until one digit is left","target":"একটি মাত্র অঙ্ক অবশিষ্ট না থাকা পর্যন্ত চালিয়ে যান"},{"key":"collapseToSingleDigit.description","english":"Sometimes summing the digits once still leaves more than one digit (for example 942 sums to 15). Keep summing the digits of the result until a single digit remains.","target":"কখনো কখনো একবার অঙ্কগুলো যোগ করার পরও একাধিক অঙ্ক থেকে যায় (যেমন 942-এর যোগফল 15)। একটি মাত্র অঙ্ক অবশিষ্ট না থাকা পর্যন্ত ফলাফলের অঙ্কগুলো যোগ করতে থাকুন।"},{"key":"keepItTight.name","english":"Bonus: keep it short","target":"বোনাস: ছোট রাখুন"},{"key":"keepItTight.description","english":"Your solution already works. For this bonus, tidy it up so the whole function fits in a small number of lines, without any extra clutter.","target":"আপনার সমাধান এরই মধ্যে কাজ করছে। এই বোনাসের জন্য এটিকে একটু গুছিয়ে নিন, যাতে কোনো বাড়তি জঞ্জাল ছাড়াই পুরো ফাংশনটি অল্প কয়েকটি লাইনে ধরে যায়।"}]},{"name":"scenarios","rows":[{"key":"drZero.name","english":"Zero","target":"শূন্য"},{"key":"drZero.description","english":"The digital root of 0 is 0.","target":"0-এর ডিজিটাল রুট হলো 0।"},{"key":"drSingleDigit.name","english":"Already a single digit","target":"আগে থেকেই একটি মাত্র অঙ্ক"},{"key":"drSingleDigit.description","english":"A number that is already a single digit is its own digital root.","target":"যে সংখ্যা আগে থেকেই একটি মাত্র অঙ্কের, সেটি নিজেই নিজের ডিজিটাল রুট।"},{"key":"drTwoDigits.name","english":"Two digits","target":"দুই অঙ্ক"},{"key":"drTwoDigits.description","english":"16 collapses to 7 in a single pass (1 + 6).","target":"16 এক ধাপেই 7-এ নেমে আসে (1 + 6)।"},{"key":"drThreeDigits.name","english":"Three digits, one pass","target":"তিন অঙ্ক, এক ধাপ"},{"key":"drThreeDigits.description","english":"132 collapses to 6 in a single pass (1 + 3 + 2).","target":"132 এক ধাপেই 6-এ নেমে আসে (1 + 3 + 2)।"},{"key":"drThirtyNine.name","english":"Two passes needed","target":"দুই ধাপ প্রয়োজন"},{"key":"drThirtyNine.description","english":"39 sums to 12, which then sums to 3.","target":"39-এর যোগফল 12, যার যোগফল আবার 3।"},{"key":"drTwoPasses.name","english":"A number that needs a second pass","target":"যে সংখ্যার দ্বিতীয় ধাপ দরকার"},{"key":"drTwoPasses.description","english":"942 sums to 15, which then sums to 6.","target":"942-এর যোগফল 15, যার যোগফল আবার 6।"},{"key":"drLarge.name","english":"A larger number","target":"আরও বড় একটি সংখ্যা"},{"key":"drLarge.description","english":"493193 collapses all the way down to 2.","target":"493193 ধাপে ধাপে নেমে এসে শেষে 2-এ পৌঁছায়।"},{"key":"drNines.name","english":"All nines","target":"সবগুলোই নয়"},{"key":"drNines.description","english":"99999 sums to 45, which then sums to 9.","target":"99999-এর যোগফল 45, যার যোগফল আবার 9।"},{"key":"drBonusTight.name","english":"A tidy, short solution","target":"গোছানো, ছোট একটি সমাধান"},{"key":"drBonusTight.description","english":"12345 collapses down to 6 (1 + 2 + 3 + 4 + 5 = 15, then 1 + 5 = 6).","target":"12345 ধাপে ধাপে 6-এ নেমে আসে (1 + 2 + 3 + 4 + 5 = 15, তারপর 1 + 5 = 6)।"}]},{"name":"hints","rows":[{"key":"whatIsIt.question","english":"What exactly is a digital root?","target":"ডিজিটাল রুট আসলে কী?"},{"key":"whatIsIt.answer","english":"Add up all the digits of the number. If that gives you a single digit, that's the answer. If it gives you more than one digit, add up the digits of that result too, and keep going until only one digit is left.","target":"সংখ্যাটির সব অঙ্ক যোগ করুন। যদি ফলাফল একটি মাত্র অঙ্ক হয়, সেটিই উত্তর। যদি একাধিক অঙ্ক হয়, তাহলে সেই ফলাফলের অঙ্কগুলোও যোগ করুন, এবং একটি মাত্র অঙ্ক অবশিষ্ট না থাকা পর্যন্ত এভাবেই চালিয়ে যান।"},{"key":"sumDigits.question","english":"How do I add up the digits of a number?","target":"কোনো সংখ্যার অঙ্কগুলো কীভাবে যোগ করব?"},{"key":"sumDigits.answer","english":"Turn the number into a string so you can walk through it character by character with a `for...of` loop. Keep a running total, adding each digit as you go.","target":"সংখ্যাটিকে স্ট্রিংয়ে রূপান্তর করুন, যাতে একটি `for...of` লুপ দিয়ে ক্যারেক্টার ধরে ধরে এগোতে পারেন। একটি চলমান যোগফল রাখুন, আর যেতে যেতে প্রতিটি অঙ্ক তাতে যোগ করুন।"},{"key":"digitsToNumbers.question","english":"Each digit is a character though, not a number.","target":"কিন্তু প্রতিটি অঙ্ক তো একটি ক্যারেক্টার, সংখ্যা নয়।"},{"key":"digitsToNumbers.answer","english":"When you loop over the string, each character (like `\"4\"`) is text. Use `Number(char)` to turn it into the number `4` before adding it to your total.","target":"স্ট্রিংয়ের ওপর লুপ চালালে প্রতিটি ক্যারেক্টার (যেমন `\"4\"`) আসলে টেক্সট। যোগফলে যোগ করার আগে `Number(char)` ব্যবহার করে সেটিকে সংখ্যা `4`-এ রূপান্তর করুন।"},{"key":"whichLoop.question","english":"How do I keep going without knowing how many passes I need?","target":"কত ধাপ লাগবে তা না জেনে কীভাবে চালিয়ে যাব?"},{"key":"whichLoop.answer","english":"You don't know in advance how many times you'll need to sum the digits, so a `while` loop is a great fit. Keep looping while the number has more than one digit.","target":"অঙ্কগুলো কতবার যোগ করতে হবে তা আগে থেকে জানার উপায় নেই, তাই এখানে একটি `while` লুপ দারুণ মানানসই। সংখ্যাটিতে একাধিক অঙ্ক থাকা পর্যন্ত লুপ চালাতে থাকুন।"},{"key":"keepGoing.question","english":"When do I stop?","target":"কখন থামব?"},{"key":"keepGoing.answer","english":"Stop as soon as the number is a single digit. At that point, return it.","target":"সংখ্যাটি একটি মাত্র অঙ্কে নেমে আসামাত্রই থামুন। তখন সেটিই রিটার্ন করুন।"}]},{"name":"checks","rows":[{"key":"mustUseWhile","english":"Almost! For this exercise we want you to use a `while` loop to keep collapsing until a single digit remains.","target":"প্রায় হয়ে গেছে! এই অনুশীলনীতে আমরা চাই আপনি একটি `while` লুপ ব্যবহার করে একটি মাত্র অঙ্ক অবশিষ্ট না থাকা পর্যন্ত চালিয়ে যান।"},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long. See if you can tighten it up.","target":"খুব কাছাকাছি! আপনার সমাধান কাজ করছে, তবে একটু লম্বা হয়ে গেছে। এটিকে আরেকটু ছোট করা যায় কি না দেখুন।"}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":"অঙ্কযুক্ত একটি স্ট্রিংকে সংখ্যায় রূপান্তর করে"},{"key":"number.category","english":"Type Conversion","target":"টাইপ রূপান্তর"},{"key":"string.description","english":"Convert a number into a string","target":"একটি সংখ্যাকে স্ট্রিংয়ে রূপান্তর করে"},{"key":"string.category","english":"Type Conversion","target":"টাইপ রূপান্তর"}]}]}]
---

কোনো সংখ্যার অঙ্কগুলো বারবার একসাথে যোগ করতে থাকলে শেষে যে একটি মাত্র অঙ্ক অবশিষ্ট থাকে, সেটিই সংখ্যাটির ডিজিটাল রুট।

একবার অঙ্কগুলো যোগ করার পরও যদি ফলাফলে একাধিক অঙ্ক থেকে যায়, তাহলে _সেই_ ফলাফলের অঙ্কগুলো আবার যোগ করবেন, এবং একটি মাত্র অঙ্ক অবশিষ্ট না থাকা পর্যন্ত এভাবেই চালিয়ে যাবেন।

উদাহরণস্বরূপ, `942`-এর ডিজিটাল রুট বের করতে:

```
9 + 4 + 2 = 15
1 + 5 = 6
```

তাহলে `942`-এর ডিজিটাল রুট হলো `6`।

যে সংখ্যা আগে থেকেই একটি মাত্র অঙ্কের (যেমন `7`), সেটি নিজেই নিজের ডিজিটাল রুট।

`digitalRoot` নামে একটি ফাংশন তৈরি করুন, যা একটি সংখ্যা নেয় এবং তার ডিজিটাল রুট রিটার্ন করে।

### `String()` ফাংশন

গত কয়েকটি পাঠে আপনি `Number(str)` ফাংশন ব্যবহার করার সুযোগ পেয়েছেন, যা একটি স্ট্রিংকে সংখ্যায় রূপান্তর করে।

আপনি উল্টোটাও করতে পারেন: `String(num)` ফাংশন ব্যবহার করে একটি সংখ্যাকে স্ট্রিংয়ে পরিণত করতে পারেন। যেমন:

```js
String(147) === "147"
```

আবারও লক্ষ করুন, এর শুরুতে একটি বড় হাতের অক্ষর আছে, আর কেন এমন, তা নিয়ে এখনই ভাবতে হবে না!

### যা শিখেছেন, এবার তা কাজে লাগান।

এই অনুশীলনীটি সমাধানের অনেক উপায় থাকলেও, আমরা চাই আপনি এমন একটি সমাধান নিয়ে আসুন যেখানে একটি `while` লুপ ব্যবহার করা হয়।

মজা করুন!
