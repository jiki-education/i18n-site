---
lang: "bn"
type: "exercise"
slug: "bouncer"
title: "বাউন্সার"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/bouncer"
en_md5: "eefcfb32249cce303d014044e557b2af"
governance_sha: "7e75c64"
content_version: "a244c64b3cb2"
published_at: "2026-08-19"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"age25NotLetIn","english":"The person is 25 — they should have been let in, but weren't.","target":"ব্যক্তির বয়স ২৫। তাকে ভেতরে ঢুকতে দেওয়ার কথা ছিল, কিন্তু দেওয়া হয়নি।"},{"key":"age18LetIn","english":"The person is 18 — they should not have been let in, but were.","target":"ব্যক্তির বয়স ১৮। তাকে ভেতরে ঢুকতে দেওয়ার কথা ছিল না, কিন্তু দেওয়া হয়েছে।"},{"key":"age21NotLetIn","english":"The person is 21 — they should have been let in, but weren't.","target":"ব্যক্তির বয়স ২১। তাকে ভেতরে ঢুকতে দেওয়ার কথা ছিল, কিন্তু দেওয়া হয়নি।"},{"key":"age20LetIn","english":"The person is exactly 20 — not over 20, so they should not have been let in, but were.","target":"ব্যক্তির বয়স ঠিক ২০, অর্থাৎ ২০-এর বেশি নয়। তাই তাকে ভেতরে ঢুকতে দেওয়ার কথা ছিল না, কিন্তু দেওয়া হয়েছে।"}]},{"name":"tasks","rows":[{"key":"checkAge.name","english":"Check the person's age","target":"ব্যক্তির বয়স যাচাই করুন"},{"key":"checkAge.description","english":"Get the person's age and check if they're over 20. If they are, let them in.","target":"ব্যক্তির বয়স জেনে নিন এবং তা ২০-এর বেশি কি না, যাচাই করুন। বেশি হলে তাকে ভেতরে ঢুকতে দিন।"}]},{"name":"scenarios","rows":[{"key":"age25.name","english":"Age 25","target":"বয়স ২৫"},{"key":"age25.description","english":"The person is 25 years old — they should be let in.","target":"ব্যক্তির বয়স ২৫ বছর। তাকে ভেতরে ঢুকতে দেওয়া উচিত।"},{"key":"age18.name","english":"Age 18","target":"বয়স ১৮"},{"key":"age18.description","english":"The person is 18 years old — they should not be let in.","target":"ব্যক্তির বয়স ১৮ বছর। তাকে ভেতরে ঢুকতে দেওয়া উচিত নয়।"},{"key":"age21.name","english":"Age 21","target":"বয়স ২১"},{"key":"age21.description","english":"The person is 21 years old — just above 20, they should be let in.","target":"ব্যক্তির বয়স ২১ বছর, ২০-এর ঠিক উপরে। তাকে ভেতরে ঢুকতে দেওয়া উচিত।"},{"key":"age20.name","english":"Age 20","target":"বয়স ২০"},{"key":"age20.description","english":"The person is exactly 20 — not over 20, so they should not be let in.","target":"ব্যক্তির বয়স ঠিক ২০, অর্থাৎ ২০-এর বেশি নয়। তাই তাকে ভেতরে ঢুকতে দেওয়া উচিত নয়।"}]},{"name":"hints","rows":[{"key":"askAge.question","english":"How do I know their age?","target":"ব্যক্তির বয়স কীভাবে জানব?"},{"key":"askAge.answer","english":"Use the `askAge()` function. It will return a different value in each scenario.","target":"`askAge()` ফাংশনটি ব্যবহার করুন। এটি প্রতিটি সিনারিওতে আলাদা মান রিটার্ন করবে।"},{"key":"ifStatement.question","english":"How do I vary what I do?","target":"পরিস্থিতি অনুযায়ী আলাদা কাজ কীভাবে করব?"},{"key":"ifStatement.answer","english":"Use an `if` statement - check the concept if you need more help!","target":"একটি `if` স্টেটমেন্ট ব্যবহার করুন। আরও সাহায্য দরকার হলে কনসেপ্টটি দেখে নিন!"}]},{"name":"describers","rows":[{"key":"askAge","english":"asked the person's age","target":"ব্যক্তির বয়স জিজ্ঞাসা করা হয়েছে"},{"key":"letIn","english":"let the person in","target":"ব্যক্তিকে ভেতরে ঢুকতে দেওয়া হয়েছে"}]},{"name":"functions","rows":[{"key":"askAge.description","english":"Returns the **age** of the person waiting outside.","target":"বাইরে অপেক্ষা করা ব্যক্তির **বয়স** রিটার্ন করে।"},{"key":"askAge.category","english":"Information","target":"তথ্য"},{"key":"letIn.description","english":"Lets the person in.","target":"ব্যক্তিকে ভেতরে ঢুকতে দেয়।"},{"key":"letIn.category","english":"Action","target":"অ্যাকশন"}]}]}]
---

আপনি The Neon Gates বারের জন্য একটি রোবট বাউন্সার প্রোগ্রাম করছেন। রোবটটির কাজ হলো কারও বয়স যাচাই করা এবং তাকে ভেতরে ঢুকতে দেওয়া হবে কি না, তা ঠিক করা।

আপনার কাছে দুটি ফাংশন আছে:

- `askAge()` (বয়স জিজ্ঞাসা করা) বাইরে অপেক্ষা করা ব্যক্তির বয়স রিটার্ন করে
- `letIn()` (ভেতরে ঢুকতে দেওয়া) ব্যক্তিকে ভেতরে ঢুকতে দেয়

এই ভেন্যুর নিয়ম হলো, শুধুমাত্র **২১ বছর বা তার বেশি** বয়সীরাই ভেতরে ঢুকতে পারবেন।

ব্যক্তির বয়স জিজ্ঞাসা করুন, আর যদি তার বয়স যথেষ্ট হয়, তাকে ভেতরে ঢুকতে দিন!
