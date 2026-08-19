---
lang: "bn"
type: "exercise"
slug: "reverse-string"
title: "স্ট্রিং উল্টানো"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/reverse-string"
en_md5: "d01eea6cf18d953304631f4a8015c3ea"
governance_sha: "7e75c64"
content_version: "78f8a8ad283b"
published_at: "2026-08-19"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"reverseStrings.name","english":"Reverse Strings","target":"স্ট্রিং উল্টানো"},{"key":"reverseStrings.description","english":"Reverse a string so that it reads from right to left instead of left to right.","target":"একটি স্ট্রিংকে এমনভাবে উল্টে ফেলুন, যেন সেটি বাম থেকে ডানে না পড়ে ডান থেকে বামে পড়া যায়।"}]},{"name":"scenarios","rows":[{"key":"reverseEmptyString.name","english":"Empty string","target":"খালি স্ট্রিং"},{"key":"reverseEmptyString.description","english":"An empty string should return an empty string when reversed.","target":"একটি খালি স্ট্রিংকে উল্টালে একটি খালি স্ট্রিংই রিটার্ন হওয়া উচিত।"},{"key":"reverseWord.name","english":"A word","target":"একটি শব্দ"},{"key":"reverseWord.description","english":"Reverse the word 'robot'.","target":"'robot' শব্দটি উল্টে ফেলুন।"},{"key":"reverseCapitalizedWord.name","english":"A capitalized word","target":"বড় হাতের অক্ষরে শুরু হওয়া শব্দ"},{"key":"reverseCapitalizedWord.description","english":"Reverse a capitalized word 'Ramen'.","target":"বড় হাতের অক্ষরে শুরু হওয়া শব্দ 'Ramen' উল্টে ফেলুন।"},{"key":"reverseSentencePunctuation.name","english":"Sentence with punctuation","target":"যতিচিহ্নসহ বাক্য"},{"key":"reverseSentencePunctuation.description","english":"Reverse a sentence with punctuation 'I'm hungry!'","target":"যতিচিহ্নসহ একটি বাক্য উল্টে ফেলুন: 'I'm hungry!'"},{"key":"reversePalindrome.name","english":"Palindrome","target":"প্যালিনড্রোম"},{"key":"reversePalindrome.description","english":"A palindrome remains the same when reversed.","target":"একটি প্যালিনড্রোম উল্টালেও একই থাকে।"},{"key":"reverseEvenSizedWord.name","english":"Even-sized word","target":"জোড় সংখ্যক অক্ষরের শব্দ"},{"key":"reverseEvenSizedWord.description","english":"Reverse an even-sized word 'drawer'.","target":"জোড় সংখ্যক অক্ষরের শব্দ 'drawer' উল্টে ফেলুন।"},{"key":"reverseWideCharacters.name","english":"Wide characters","target":"ওয়াইড ক্যারেক্টার"},{"key":"reverseWideCharacters.description","english":"Reverse wide Unicode characters '子猫'.","target":"ওয়াইড ইউনিকোড ক্যারেক্টার '子猫' উল্টে ফেলুন।"},{"key":"reverseEmojiFamily.name","english":"Emoji Family","target":"ফ্যামিলি ইমোজি"},{"key":"reverseEmojiFamily.description","english":"Reverse an emoji family.","target":"একটি ফ্যামিলি ইমোজি উল্টে ফেলুন।"},{"key":"reverseEmojiRainbowFlag.name","english":"Rainbow Flag","target":"রংধনু পতাকা"},{"key":"reverseEmojiRainbowFlag.description","english":"Make a rainbow flag by reversing.","target":"উল্টিয়ে একটি রংধনু পতাকা তৈরি করুন।"}]},{"name":"hints","rows":[{"key":"reverseByHand.question","english":"How would I reverse a word by hand?","target":"হাতে-কলমে একটি শব্দ আমি কীভাবে উল্টাব?"},{"key":"reverseByHand.answer","english":"You'd read it left-to-right but write it right-to-left. Equivalently, you'd take each letter in turn and put it in front of what you've written so far.","target":"আপনি শব্দটি বাম থেকে ডানে পড়বেন, কিন্তু লিখবেন ডান থেকে বামে। অন্যভাবে বললে, প্রতিটি অক্ষর একে একে নিয়ে এখন পর্যন্ত যা লিখেছেন তার সামনে বসাবেন।"},{"key":"mapToCode.question","english":"How does that map to code?","target":"তাহলে কোডে এটা কেমন দেখতে হবে?"},{"key":"mapToCode.answer","english":"Loop through the input string character by character. For each character, build the result by prepending. That means putting it at the FRONT of your result, not the back.","target":"ইনপুট স্ট্রিংটির মধ্য দিয়ে এক ক্যারেক্টার করে করে লুপ চালান। প্রতিটি ক্যারেক্টারের জন্য সেটিকে সামনে বসিয়ে ফলাফল গড়ে তুলুন। অর্থাৎ ক্যারেক্টারটি আপনার ফলাফলের শেষে নয়, একেবারে সামনে বসাতে হবে।"},{"key":"prepend.question","english":"How do I 'prepend' instead of append?","target":"শেষে যোগ না করে সামনে বসাই কীভাবে?"},{"key":"prepend.answer","english":"With the `+` operator, prepending is just a matter of order. Instead of `result + char` (which appends), use `char + result` (which prepends).","target":"`+` অপারেটরের ক্ষেত্রে সামনে বসানোটা শুধু ক্রমের ব্যাপার। `result + char` (যা শেষে যোগ করে) না লিখে `char + result` লিখুন (যা সামনে বসায়)।"}]}]}]
---

স্ট্রিং উল্টানো (বাম থেকে ডানে না পড়ে ডান থেকে বামে পড়া) প্রোগ্রামিংয়ে আশ্চর্যরকম কমন একটি কাজ।

উদাহরণস্বরূপ, বায়োইনফরম্যাটিক্সে DNA বা RNA স্ট্রিংয়ের ক্রম উল্টানো নানা ধরনের বিশ্লেষণের জন্য প্রায়ই গুরুত্বপূর্ণ, যেমন কমপ্লিমেন্টারি স্ট্র্যান্ড খুঁজে বের করা বা প্যালিনড্রোমিক সিকোয়েন্স শনাক্ত করা।

আপনার কাজ হলো `reverse` (উল্টানো) নামের একটি ফাংশন তৈরি করা, যেটি একটি স্ট্রিংকে ইনপুট হিসেবে নেয় এবং তার উল্টানো সংস্করণটি রিটার্ন করে।

উদাহরণ:

- "stressed"-কে "desserts" বানান
- "strops"-কে "sports" বানান
- "racecar"-কে "racecar" বানান (একটি প্যালিনড্রোম)

### শেষের ওই দুটি সিনারিও...

শেষ দুটি সিনারিও অদ্ভুত দেখাচ্ছে, তাই না? আসলে কী ঘটছে?

দেখা যায়, অনেক ইমোজি আসলে অন্য কয়েকটি ইমোজিকে লুকানো (জিরো উইডথ) স্পেস দিয়ে জুড়ে তৈরি।

ফ্যামিলি ইমোজিটি (👩‍👩‍👧‍👦) দুজন নারী আর দুটি শিশু দিয়ে তৈরি। এটিকে উল্টালে আলাদা আলাদা ক্যারেক্টারগুলো দেখা যায় (👦‍👧‍👩‍👩)।

অন্যটি হলো একটি রংধনু আর একটি পতাকা (🌈‍️🏳)। ক্রমটি উল্টে আগে পতাকা তারপর রংধনু করলে এটি একটি রংধনু পতাকা হয়ে যায় (🏳️‍🌈️)!

আপনি যদি ফলাফলটি এক ক্যারেক্টার করে করে গড়ে তোলেন, তাহলে এগুলো এমনিতেই কাজ করবে। আর যদি এর বদলে কোনো চালাক কৌশলের দিকে হাত বাড়ান, তাহলে দেখতে পারেন ইমোজিগুলো ভেঙে আলাদা হয়ে যাচ্ছে।
