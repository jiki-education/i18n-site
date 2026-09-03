---
lang: "bn"
type: "exercise"
slug: "formal-dinner"
title: "আনুষ্ঠানিক নৈশভোজ"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/formal-dinner"
en_md5: "b0628bfad9d662c21ab91a40b9e5bc2b"
governance_sha: "a35c7492"
content_version: "87c748f21467"
published_at: "2026-09-03"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findGuestTable.name","english":"Find the Guest's Table","target":"অতিথির টেবিল খুঁজে বের করুন"},{"key":"findGuestTable.description","english":"Write a function that takes the array of guests' full names, the matching array of table names, and an arriving guest announced as an honorific and a surname. Return the name of the table that guest is sitting at, or `\"No table found\"` if they aren't on the seating plan.","target":"এমন একটি ফাংশন লিখুন যেটি ইনপুট হিসেবে নেয় অতিথিদের পুরো নামের অ্যারে, তার সাথে মিলিয়ে সাজানো টেবিলের নামের অ্যারে, এবং সম্মানসূচক সম্বোধন ও পদবি দিয়ে ঘোষিত আগত অতিথিকে। অতিথি যে টেবিলে বসেছেন সেই টেবিলের নাম রিটার্ন করুন, আর তিনি আসন পরিকল্পনায় না থাকলে `\"No table found\"` রিটার্ন করুন।"},{"key":"solveTightly.name","english":"Solve it in 9 lines","target":"ছোট করে সমাধান করুন"},{"key":"solveTightly.description","english":"Bonus: this can be written far more compactly than you might expect. Try and solve this in 9 lines of code or fewer.","target":"বোনাস: এটি আপনার ধারণার চেয়ে অনেক বেশি সংক্ষেপে লেখা যায়। পুরো সমাধানটি কি মাত্র কয়েক লাইনে নামিয়ে আনতে পারবেন?"}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty seating plan","target":"খালি আসন পরিকল্পনা"},{"key":"emptyList.description","english":"Nobody's sitting anywhere when the plan is empty.","target":"পরিকল্পনা খালি থাকলে কেউ কোথাও বসেন না।"},{"key":"nameMissing.name","english":"Brad's turned away","target":"Brad-কে ফিরিয়ে দেওয়া হলো"},{"key":"nameMissing.description","english":"The name's not on the seating plan.","target":"নামটি আসন পরিকল্পনায় নেই।"},{"key":"namePresent.name","english":"Brad's shown to his seat","target":"Brad-কে আসনে বসানো হলো"},{"key":"namePresent.description","english":"Brad Pitt is on the plan, so Mr Pitt gets his table.","target":"Brad Pitt পরিকল্পনায় আছেন, তাই Mr Pitt তাঁর টেবিল পেয়ে যান।"},{"key":"differentHonorific.name","english":"Knight of the realm","target":"রাজ্যের নাইট"},{"key":"differentHonorific.description","english":"A different honorific, and a guest who isn't first on the plan.","target":"ভিন্ন একটি সম্মানসূচক সম্বোধন, আর এমন একজন অতিথি যিনি পরিকল্পনার প্রথমে নেই।"},{"key":"bondSeated.name","english":"Mr Bond, I presume","target":"আপনিই নিশ্চয়ই Mr Bond"},{"key":"bondSeated.description","english":"James Bond is on the plan.","target":"James Bond পরিকল্পনায় আছেন।"},{"key":"bondNotSeated.name","english":"Hmmm... Mr Bond, I presume","target":"হুমম... আপনিই নিশ্চয়ই Mr Bond"},{"key":"bondNotSeated.description","english":"Only Jason Bourne is on the plan, not James Bond.","target":"পরিকল্পনায় শুধু Jason Bourne আছেন, James Bond নেই।"},{"key":"partialSurname.name","english":"Not quite Mr Pitt","target":"ঠিক Mr Pitt নন"},{"key":"partialSurname.description","english":"Neither Ada Spitt nor Hugo Ross-Pitt is Mr Pitt, so he has no seat here.","target":"Ada Spitt বা Hugo Ross-Pitt কেউই Mr Pitt নন, তাই এখানে তাঁর কোনো আসন নেই।"},{"key":"lloydWebber.name","english":"How about a Baron?","target":"একজন Baron এলে কেমন হয়?"},{"key":"lloydWebber.description","english":"Baron Lloyd Webber has two words in his surname.","target":"Baron Lloyd Webber-এর পদবিতে দুটি শব্দ আছে।"},{"key":"markWebber.name","english":"Is Mark the Baron?","target":"Mark-ই কি সেই Baron?"},{"key":"markWebber.description","english":"A different Webber doesn't count - the surname has to match in full.","target":"অন্য কোনো Webber হলে চলবে না, পদবিটি পুরোপুরি মিলতে হবে।"},{"key":"formalDinnerBonusLineCount.name","english":"Neat and tidy: Lord Doyle","target":"ছিমছাম সমাধান: Lord Doyle"},{"key":"formalDinnerBonusLineCount.description","english":"The same seating plan as before, but this time try and solve this in 9 lines of code or fewer.","target":"আগের মতোই একই আসন পরিকল্পনা, তবে এবার আপনার সমাধানটিকে অনেক কম সংখ্যক লাইনের মধ্যে আঁটতে হবে।"}]},{"name":"hints","rows":[{"key":"twoLists.question","english":"How do the two arrays relate to each other?","target":"অ্যারে দুটি একে অপরের সাথে কীভাবে সম্পর্কিত?"},{"key":"twoLists.answer","english":"They're a pair. The first guest sits at the first table, the second guest at the second table, and so on. So it's not enough to know *that* a guest is on the plan - you need to know *where* on the plan they are.","target":"এরা একটি জোড়া। প্রথম অতিথি প্রথম টেবিলে বসেন, দ্বিতীয় অতিথি দ্বিতীয় টেবিলে, এভাবেই চলে। তাই কোনো অতিথি পরিকল্পনায় *আছেন কি না* শুধু এটুকু জানা যথেষ্ট নয়, জানতে হবে তিনি পরিকল্পনার *কোথায়* আছেন।"},{"key":"comparingNames.question","english":"The guest says 'Mr Pitt' but the plan says 'Brad Pitt'. How do I compare those?","target":"অতিথি বলছেন 'Mr Pitt', কিন্তু পরিকল্পনায় লেখা 'Brad Pitt'। এই দুটি কীভাবে তুলনা করব?"},{"key":"comparingNames.answer","english":"Those two strings will never be equal, so a straight comparison won't get you anywhere. Have a think about which part of what the guest announced actually appears on the plan, and whereabouts in the plan's entry you'd expect to find it.","target":"স্ট্রিং দুটি কখনোই সমান হবে না, তাই সরাসরি তুলনা করে কোনো লাভ হবে না। ভেবে দেখুন, অতিথি যা ঘোষণা করলেন তার কোন অংশটি আসলে পরিকল্পনায় আছে, আর পরিকল্পনার এন্ট্রিটির ঠিক কোন জায়গায় সেটি খুঁজে পাওয়ার কথা।"},{"key":"lookalikeSurnames.question","english":"Could a surname match the wrong guest?","target":"কোনো পদবি কি ভুল অতিথির সাথে মিলে যেতে পারে?"},{"key":"lookalikeSurnames.answer","english":"It absolutely could. Read 'Ada Spitt' and 'Hugo Ross-Pitt' out loud, and then think about Mr Pitt. Ask yourself what makes a surname a real surname on that line, rather than just some letters that happen to sit at the end of it.","target":"অবশ্যই পারে। 'Ada Spitt' আর 'Hugo Ross-Pitt' জোরে পড়ে দেখুন, তারপর Mr Pitt-এর কথা ভাবুন। নিজেকে জিজ্ঞেস করুন, ওই লাইনে কোনটি একটি পদবিকে সত্যিকারের পদবি করে তোলে, আর কোনটি শুধু লাইনের শেষে বসে থাকা কিছু অক্ষর মাত্র।"},{"key":"noMatch.question","english":"What should I return when nobody matches?","target":"কারও সাথে না মিললে কী রিটার্ন করব?"},{"key":"noMatch.answer","english":"The string `\"No table found\"`, exactly as written. The trickier bit is knowing when you're allowed to say it. If you've checked the very first guest on the plan and they're not your man, do you actually know yet that he isn't seated somewhere?","target":"`\"No table found\"` স্ট্রিংটি, ঠিক যেমনটি লেখা আছে। কঠিন অংশটি হলো, কখন এটি বলার অনুমতি আপনার আছে তা বোঝা। পরিকল্পনার একেবারে প্রথম অতিথিকে যাচাই করে দেখলেন তিনি আপনার কাঙ্ক্ষিত ব্যক্তি নন, তাহলেই কি আপনি নিশ্চিত জানেন যে তিনি কোথাও বসেননি?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can get down to 9 lines of code.","target":"চালিয়ে যান! আরও কম লাইনে সমাধান করতে পারেন কি না দেখুন।"}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in an array - the same length property you've used on strings","target":"একটি অ্যারেতে কতটি এলিমেন্ট আছে সেই সংখ্যা, স্ট্রিংয়ের ক্ষেত্রে আপনি যে length প্রপার্টি ব্যবহার করেছেন এটি সেটিই"},{"key":"length.category","english":"Array Operations","target":"অ্যারে অপারেশন"},{"key":"split.description","english":"Split a string into an array of pieces, breaking at each separator","target":"একটি স্ট্রিংকে টুকরোর একটি অ্যারেতে ভাগ করে, প্রতিটি বিভাজকের জায়গায় ভেঙে"},{"key":"split.category","english":"String Operations","target":"স্ট্রিং অপারেশন"},{"key":"slice.description","english":"Make a new array from part of an array, starting at a position","target":"একটি অ্যারের অংশবিশেষ থেকে নতুন একটি অ্যারে তৈরি করে, নির্দিষ্ট একটি অবস্থান থেকে শুরু করে"},{"key":"slice.category","english":"Array Operations","target":"অ্যারে অপারেশন"},{"key":"join.description","english":"Join the items of an array into one string, with a separator between them","target":"একটি অ্যারের এলিমেন্টগুলোকে জুড়ে একটি স্ট্রিং বানায়, মাঝে একটি বিভাজক বসিয়ে"},{"key":"join.category","english":"Array Operations","target":"অ্যারে অপারেশন"},{"key":"endsWith.description","english":"Check whether a string ends with a smaller string","target":"একটি স্ট্রিং অন্য একটি ছোট স্ট্রিং দিয়ে শেষ হয়েছে কি না যাচাই করে"},{"key":"endsWith.category","english":"String Operations","target":"স্ট্রিং অপারেশন"}]}]}]
---

বাউন্সারের সেই পার্শ্ব-কাজে আপনি আবার ফিরে এসেছেন। আফটার পার্টির পরের সন্ধ্যা এটি, আর আজও আরেকটি জমকালো আয়োজন চলছে। তবে এবার সেটি একটি আনুষ্ঠানিক নৈশভোজ, তাই আজ রাতে আপনি ঠিক "দরজায় দাঁড়ানো পেশিবহুল মানুষ" নন, বরং "হাতে ক্লিপবোর্ড আর গায়ে সুন্দর ওয়েস্টকোট পরা একজন মানুষ"।

এটি নিশ্চিতভাবেই এমন জায়গা নয় যেখানে **শুধু** নামের প্রথম অংশ ব্যবহার করা চলে। আসলে এখানে নামের প্রথম অংশ ব্যবহারের প্রশ্নই ওঠে না। এখানে সবাই পরিচিত হন সম্মানসূচক সম্বোধন (ইংরেজিতে _honorific_) যেমন Miss, Mr, Dr ইত্যাদি, এবং তার সাথে তাঁদের পদবি দিয়ে।

আয়োজকেরা আসন পরিকল্পনাটি আপনার হাতে তুলে দিয়েছেন দুটি আলাদা অ্যারে হিসেবে। একটিতে রয়েছে অতিথিদের পুরো নাম। অন্যটিতে রয়েছে প্রতিটি অতিথি যে টেবিলে বসেছেন সেই টেবিলের নাম (টেবিলগুলোর নাম রাখা হয়েছে গাছ ও ফুলের নামে)। "আফটার পার্টি"-র মতোই, অ্যারে দুটি একে অপরের সাথে মিলে যায়: প্রথম অ্যারের ৩ নম্বর অবস্থানের অতিথি দ্বিতীয় অ্যারের ৩ নম্বর অবস্থানের টেবিলেই বসেছেন।

তাই Mr Pitt যখন গটগট করে ঢুকে পড়েন, তখন আপনাকে বুঝে নিতে হবে যে ইনিই আপনার অ্যারেতে থাকা "Brad Pitt", তারপর তাঁকে জানাতে হবে তিনি কোন টেবিলে বসছেন।

`tableFor` (কোনো অতিথি কোন টেবিলে বসেছেন তা খুঁজে বের করে) নামে একটি ফাংশন লিখুন। ফাংশনটির তিনটি ইনপুট আছে:

- প্রথমটি হলো অতিথিদের পুরো নামের অ্যারে, স্ট্রিং হিসেবে
- দ্বিতীয়টি হলো টেবিলের নামের অ্যারে, অতিথিদের ক্রম অনুযায়ী সাজানো
- তৃতীয়টি হলো আগত অতিথি, সম্মানসূচক সম্বোধন ও তারপরে পদবি এই ফরম্যাটে (যেমন "Mr Pitt")

অতিথি যে টেবিলে বসেছেন সেই টেবিলের নাম রিটার্ন করুন। তিনি যদি আসন পরিকল্পনায় একেবারেই না থাকেন, তাহলে বদলে `"No table found"` স্ট্রিংটি রিটার্ন করুন (এখানে ফাঁকতালে ঢুকে পড়ার সুযোগ নেই!)।

সম্মানসূচক সম্বোধনটি সবসময় ঠিক এক শব্দের হয়, আর তার পরের সবটুকুই অতিথির পদবি। বেশিরভাগ পদবি এক শব্দের, তবে দু-একটি জমকালো পদবি দুই শব্দ পর্যন্ত গড়ায়।

তবে সাবধান। অনেক পদবি দেখতে অন্য পদবির সাথে অনেকটাই মিলে যায়।

### স্ট্রিং/অ্যারে মেথড ও প্রপার্টি

আগের অনুশীলনীতে শেখা `.length` প্রপার্টির পাশাপাশি আরও চারটি মেথড আছে, যেগুলো আপনার কাজে লাগতে পারে। এই অনুশীলনীটি সমাধানের অনেক উপায় আছে, তবে এগুলো ব্যবহার করলে আপনি সবচেয়ে ছোট সমাধানে পৌঁছাতে পারবেন।

`"...".split(substring)` একটি স্ট্রিংকে অন্য একটি স্ট্রিং দিয়ে ভাগ করে। যেমন:

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` একটি অ্যারের অংশবিশেষ ধরে নেয়, `start` ইনডেক্স থেকে শুরু করে অ্যারের শেষ পর্যন্ত। ধরা পড়া এলিমেন্টগুলো একটি নতুন অ্যারেতে কপি করা হয়, আর সেটিই আপনাকে রিটার্ন করা হয়। কার্যত, এটি প্রথম `start` সংখ্যক এলিমেন্ট বাদ দিয়ে দেয়। যেমন:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)` একটি অ্যারের এলিমেন্টগুলোকে দেওয়া স্ট্রিংটি দিয়ে জুড়ে দেয়। যেমন:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)` জানায়, একটি স্ট্রিং অন্য একটি স্ট্রিং দিয়ে শেষ হয়েছে কি না। যেমন:

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
