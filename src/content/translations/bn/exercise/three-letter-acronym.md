---
lang: "bn"
type: "exercise"
slug: "three-letter-acronym"
title: "তিন অক্ষরের অ্যাক্রোনিম"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/three-letter-acronym"
en_md5: "89ed5e0d5e09a14bbc4ae5dd39768af5"
governance_sha: "7e75c64"
content_version: "cb436260bb84"
published_at: "2026-08-19"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"আপনার সমাধানে কোডের লাইন খুব বেশি হয়ে গেছে। আরেকটু ছোট করতে পারবেন কি?"}]},{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":"অ্যাক্রোনিম ফাংশন তৈরি করুন"},{"key":"createAcronymFunction.description","english":"Write an acronym function that takes three words and returns a three-letter acronym formed by taking the first letter of each word.","target":"একটি অ্যাক্রোনিম ফাংশন লিখুন, যা তিনটি শব্দ নেয় এবং প্রতিটি শব্দের প্রথম অক্ষর নিয়ে তিন অক্ষরের একটি অ্যাক্রোনিম রিটার্ন করে।"},{"key":"solveInThreeLines.name","english":"Solve in 3 lines of code","target":"৩ লাইনের কোডে সমাধান করুন"},{"key":"solveInThreeLines.description","english":"Can you solve this exercise with only 3 lines of code?","target":"মাত্র ৩ লাইনের কোডে কি এই অনুশীলনীটি সমাধান করতে পারবেন?"}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Portable Network Graphics","target":"Portable Network Graphics"},{"key":"png.description","english":"Create the acronym 'PNG' from 'Portable', 'Network', 'Graphics'.","target":"'Portable', 'Network', 'Graphics' থেকে 'PNG' অ্যাক্রোনিমটি তৈরি করুন।"},{"key":"css.name","english":"Cascading Style Sheets","target":"Cascading Style Sheets"},{"key":"css.description","english":"Create the acronym 'CSS' from 'Cascading', 'Style', 'Sheets'.","target":"'Cascading', 'Style', 'Sheets' থেকে 'CSS' অ্যাক্রোনিমটি তৈরি করুন।"},{"key":"www.name","english":"World Wide Web","target":"World Wide Web"},{"key":"www.description","english":"Create the acronym 'WWW' from 'World', 'Wide', 'Web'.","target":"'World', 'Wide', 'Web' থেকে 'WWW' অ্যাক্রোনিমটি তৈরি করুন।"},{"key":"lol.name","english":"Lowercase words","target":"ছোট হাতের অক্ষরের শব্দ"},{"key":"lol.description","english":"Create the acronym 'lol' from 'laugh', 'out', 'loud'.","target":"'laugh', 'out', 'loud' থেকে 'lol' অ্যাক্রোনিমটি তৈরি করুন।"},{"key":"bonus1.name","english":"3 lines of code","target":"৩ লাইনের কোড"},{"key":"bonus1.description","english":"Solve the exercise with only 3 lines of code.","target":"মাত্র ৩ লাইনের কোডে অনুশীলনীটি সমাধান করুন।"}]},{"name":"hints","rows":[{"key":"firstCharacter.question","english":"How do I get just the first character of a word?","target":"কোনো শব্দের শুধু প্রথম অক্ষরটি কীভাবে পাব?"},{"key":"firstCharacter.answer","english":"Indexing into the string. The first character is at index `[0]`.","target":"স্ট্রিংয়ে ইনডেক্স করে। প্রথম অক্ষরটি `[0]` ইনডেক্সে থাকে।"},{"key":"buildResult.question","english":"How do I build the three-letter result?","target":"তিন অক্ষরের ফলাফলটি কীভাবে তৈরি করব?"},{"key":"buildResult.answer","english":"Take the first character of each word and join them together in order using concatenation (`+`) or a template string.","target":"প্রতিটি শব্দের প্রথম অক্ষর নিয়ে কনক্যাটেনেশন (`+`) বা টেমপ্লেট স্ট্রিং ব্যবহার করে সেগুলো ক্রম অনুযায়ী জুড়ে দিন।"}]}]}]
---

অ্যাক্রোনিম হলো অন্য কয়েকটি শব্দের প্রথম অক্ষর দিয়ে তৈরি একটি শব্দ। যেমন, 'Portable Network Graphics' সংক্ষেপে হয় 'PNG'.

`acronym` (অ্যাক্রোনিম) নামে একটি ফাংশন লিখুন, যা তিনটি শব্দ নেয় এবং প্রতিটি শব্দের প্রথম অক্ষর নিয়ে তিন অক্ষরের একটি অ্যাক্রোনিম রিটার্ন করে।

যেমন, 'Cascading', 'Style' এবং 'Sheets' দেওয়া হলে আপনাকে 'CSS' রিটার্ন করতে হবে।
