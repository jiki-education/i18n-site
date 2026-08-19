---
lang: "bn"
type: "exercise"
slug: "hello"
title: "হ্যালো"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/hello"
en_md5: "0e1932189205e5eaa4f7ddfa58b16f6c"
governance_sha: "7e75c64"
content_version: "112663e8e952"
published_at: "2026-08-19"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createSayHelloFunction.name","english":"Create sayHello function","target":"sayHello ফাংশন তৈরি করুন"},{"key":"createSayHelloFunction.description","english":"Write a sayHello function that takes a name and returns a greeting in the format 'Hello, [name]!'.","target":"এমন একটি sayHello ফাংশন লিখুন যা একটি নাম নেয় এবং 'Hello, [name]!' ফরম্যাটে একটি শুভেচ্ছা রিটার্ন করে।"}]},{"name":"scenarios","rows":[{"key":"helloAiko.name","english":"Greet Aiko","target":"Aiko-কে শুভেচ্ছা জানান"},{"key":"helloAiko.description","english":"Return 'Hello, Aiko!'","target":"'Hello, Aiko!' রিটার্ন করুন"},{"key":"helloPriya.name","english":"Greet Priya","target":"Priya-কে শুভেচ্ছা জানান"},{"key":"helloPriya.description","english":"Return 'Hello, Priya!'","target":"'Hello, Priya!' রিটার্ন করুন"},{"key":"helloMei.name","english":"Greet Mei","target":"Mei-কে শুভেচ্ছা জানান"},{"key":"helloMei.description","english":"Return 'Hello, Mei!'","target":"'Hello, Mei!' রিটার্ন করুন"}]},{"name":"hints","rows":[{"key":"answerShape.question","english":"What's the basic shape of the answer I'm trying to build?","target":"আমি যে উত্তরটি বানাতে চাইছি, তার মূল গঠনটা কেমন?"},{"key":"answerShape.answer","english":"Three pieces joined together: the fixed start `\"Hello, \"`, then the name, then the fixed end `\"!\"`.","target":"তিনটি অংশ একসাথে জোড়া: শুরুর নির্দিষ্ট অংশ `\"Hello, \"`, তারপর নামটি, তারপর শেষের নির্দিষ্ট অংশ `\"!\"`."},{"key":"joinStrings.question","english":"How do I join strings together?","target":"স্ট্রিংগুলোকে কীভাবে একসাথে জোড়া যায়?"},{"key":"joinStrings.answer","english":"Use concatenation with `+`, or a template string with `${}` placeholders, to stick all three pieces together into a single string.","target":"তিনটি অংশকে একটি স্ট্রিংয়ে জুড়তে `+` দিয়ে কনক্যাটেনেশন ব্যবহার করুন, অথবা `${}` প্লেসহোল্ডার দিয়ে একটি টেমপ্লেট স্ট্রিং ব্যবহার করুন।"}]}]}]
---

পরের দুটি অনুশীলনীতে আমরা ফাংশন বানানোর অনুশীলন চালিয়ে যাব, আর সেই সঙ্গে স্ট্রিং ম্যানিপুলেশন ব্যবহার করা শুরু করব।

প্রথমে আমরা সবচেয়ে সহজ ক্ষেত্রটি দেখব।

আপনার কাজ হলো `sayHello(name)` (নাম ধরে হ্যালো বলা) নামের একটি ফাংশন তৈরি করা।

ফাংশনটি সেই ব্যক্তির জন্য একটি শুভেচ্ছা রিটার্ন করবে। অর্থাৎ আপনি `sayHello("Jeremy")` লিখলে ফাংশনটি `"Hello, Jeremy!"` রিটার্ন করবে। আবার `sayHello("Nicole")` লিখলে সেটি `"Hello, Nicole!"` রিটার্ন করবে।

আশা করা যায় এটি একটি ছোট অনুশীলনী হবে, আর এর পরের আরও মজার অনুশীলনীটির ভিত্তি গড়ে দেবে।
