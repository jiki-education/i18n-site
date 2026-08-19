---
lang: "bn"
type: "exercise"
slug: "tile-search"
title: "টাইল খোঁজা"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/tile-search"
en_md5: "964730f77d4f532aa178b26e5504da86"
governance_sha: "7e75c64"
content_version: "80a15b140d65"
published_at: "2026-08-19"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"আপনার সমাধানে কোডের লাইন খুব বেশি হয়ে গেছে। এটি কি আরও ছোট করতে পারবেন?"}]},{"name":"tasks","rows":[{"key":"searchForTile.name","english":"Search for a Tile","target":"টাইল খোঁজা"},{"key":"searchForTile.description","english":"Write a function that checks whether a specific letter tile is in the rack. Return true if found, false if not.","target":"এমন একটি ফাংশন লিখুন যা যাচাই করে যে নির্দিষ্ট অক্ষরের টাইলটি র‍্যাকে আছে কি না। পাওয়া গেলে true রিটার্ন করুন, না পাওয়া গেলে false."},{"key":"solveInEightLines.name","english":"Solve in 8 lines of code","target":"৮ লাইনের কোডে সমাধান করুন"},{"key":"solveInEightLines.description","english":"Can you solve this exercise with only 8 lines of code?","target":"মাত্র ৮ লাইনের কোডে কি এই অনুশীলনীটি সমাধান করতে পারবেন?"}]},{"name":"scenarios","rows":[{"key":"letterFoundAtStart.name","english":"Letter at the start","target":"শুরুতে অক্ষর"},{"key":"letterFoundAtStart.description","english":"The letter is the first tile in the rack.","target":"অক্ষরটি র‍্যাকের প্রথম টাইল।"},{"key":"letterFoundInMiddle.name","english":"Letter in the middle","target":"মাঝখানে অক্ষর"},{"key":"letterFoundInMiddle.description","english":"The letter is in the middle of the rack.","target":"অক্ষরটি র‍্যাকের মাঝখানে আছে।"},{"key":"letterFoundAtEnd.name","english":"Letter at the end","target":"শেষে অক্ষর"},{"key":"letterFoundAtEnd.description","english":"The letter is the last tile in the rack.","target":"অক্ষরটি র‍্যাকের শেষ টাইল।"},{"key":"letterNotFound.name","english":"Letter not found","target":"অক্ষর পাওয়া যায়নি"},{"key":"letterNotFound.description","english":"The letter isn't in the rack.","target":"অক্ষরটি র‍্যাকে নেই।"},{"key":"emptyRack.name","english":"Empty rack","target":"খালি র‍্যাক"},{"key":"emptyRack.description","english":"An empty rack has no tiles to find.","target":"খালি র‍্যাকে খোঁজার মতো কোনো টাইল নেই।"},{"key":"duplicateLetters.name","english":"Rack with duplicates","target":"ডুপ্লিকেটসহ র‍্যাক"},{"key":"duplicateLetters.description","english":"The letter appears among duplicate tiles.","target":"অক্ষরটি একই রকম একাধিক টাইলের মধ্যে রয়েছে।"},{"key":"singleTileFound.name","english":"Single tile found","target":"একটি মাত্র টাইল, পাওয়া গেছে"},{"key":"singleTileFound.description","english":"A rack with one tile that matches.","target":"একটি মাত্র টাইলের র‍্যাক, যেটি মিলে যায়।"},{"key":"singleTileNotFound.name","english":"Single tile not found","target":"একটি মাত্র টাইল, পাওয়া যায়নি"},{"key":"singleTileNotFound.description","english":"A rack with one tile that doesn't match.","target":"একটি মাত্র টাইলের র‍্যাক, যেটি মেলে না।"},{"key":"bonus1.name","english":"8 lines of code","target":"৮ লাইনের কোড"},{"key":"bonus1.description","english":"Solve the exercise with only 8 lines of code.","target":"মাত্র ৮ লাইনের কোডে অনুশীলনীটি সমাধান করুন।"}]},{"name":"hints","rows":[{"key":"byHand.question","english":"How would I do this by hand?","target":"হাতে করলে আমি এটা কীভাবে করতাম?"},{"key":"byHand.answer","english":"You'd go through the haystack one letter at a time, comparing each to the needle. As soon as you found a match you'd stop. If you got to the end without a match, the needle isn't there.","target":"আপনি haystack-এর অক্ষরগুলি একটি একটি করে দেখতেন, আর প্রতিটিকে needle-এর সাথে তুলনা করতেন। মিল পাওয়া মাত্রই থেমে যেতেন। কোনো মিল না পেয়ে শেষ পর্যন্ত পৌঁছে গেলে বুঝতেন, needle সেখানে নেই।"},{"key":"loopAndCompare.question","english":"How do I loop and compare?","target":"আমি কীভাবে লুপ চালিয়ে তুলনা করব?"},{"key":"loopAndCompare.answer","english":"A for-of loop gives you each letter of the string in turn. Inside, an if-statement compares the current letter to the needle.","target":"একটি for-of লুপ আপনাকে স্ট্রিংয়ের অক্ষরগুলি একটির পর একটি করে দেয়। এর ভিতরে একটি if স্টেটমেন্ট বর্তমান অক্ষরটিকে needle-এর সাথে তুলনা করে।"},{"key":"returnTrue.question","english":"When should I return true?","target":"আমি কখন true রিটার্ন করব?"},{"key":"returnTrue.answer","english":"As soon as you find a match. There's no point checking the remaining letters.","target":"মিল পাওয়া মাত্রই। বাকি অক্ষরগুলি যাচাই করে যাওয়ার আর কোনো দরকার নেই।"},{"key":"returnFalse.question","english":"When should I return false?","target":"আমি কখন false রিটার্ন করব?"},{"key":"returnFalse.answer","english":"ONLY after the loop has finished without finding a match. A common mistake is putting `return false` inside the loop. That gives up after the very first non-matching letter, before you've checked the rest.","target":"কেবলমাত্র লুপটি কোনো মিল না পেয়ে শেষ হয়ে যাওয়ার পরে। একটি কমন ভুল হলো `return false` লুপের ভিতরে বসিয়ে দেওয়া। তাতে প্রথম যে অক্ষরটি মেলে না, তার পরেই হাল ছেড়ে দেওয়া হয়, বাকি অক্ষরগুলি যাচাই করার আগেই।"}]}]}]
---

আপনি একটি Scrabble বট তৈরি করছেন। কোনো শব্দ খেলার চেষ্টা করার আগে, বটটিকে যাচাই করতে হবে যে তার র‍্যাকে নির্দিষ্ট অক্ষরের টাইলটি আছে কি না।

র‍্যাকটিকে অক্ষরের একটি স্ট্রিং হিসেবে প্রকাশ করা হয় (যেমন `"SCRAB"`)।

`contains` (অর্থ: ধারণ করে) নামে একটি ফাংশন লিখুন, যেটি দুটি ইনপুট নেয়:

- `haystack` (অর্থ: খড়ের গাদা): টাইলের র‍্যাক, একটি স্ট্রিং হিসেবে
- `needle` (অর্থ: সুঁচ): যে অক্ষরটি খুঁজতে হবে

অক্ষরটি র‍্যাকে থাকলে `true` রিটার্ন করুন, আর না থাকলে `false`।

উদাহরণ:

- `contains("SCRAB", "A")` `true` রিটার্ন করে
- `contains("SCRAB", "Z")` `false` রিটার্ন করে
- `contains("", "A")` `false` রিটার্ন করে
