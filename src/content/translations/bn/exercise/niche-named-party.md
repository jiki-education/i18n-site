---
lang: "bn"
type: "exercise"
slug: "niche-named-party"
title: "বিশেষ নামের পার্টি"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/niche-named-party"
en_md5: "470a19833eba55849106588dfa7326f2"
governance_sha: "7e75c64"
content_version: "067ac8be1179"
published_at: "2026-08-19"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"checkTheName.name","english":"Check the name","target":"নামটি যাচাই করুন"},{"key":"checkTheName.description","english":"Write a `handleGuest` function that checks whether the person's name starts with the allowed letters for tonight's party. Return `true` if it does, or `false` if it doesn't.","target":"একটি `handleGuest` ফাংশন লিখুন, যেটি যাচাই করে ব্যক্তির নাম আজ রাতের পার্টির অনুমোদিত অক্ষরগুলো দিয়ে শুরু হয়েছে কি না। শুরু হলে `true` রিটার্ন করুন, না হলে `false` রিটার্ন করুন।"},{"key":"solveTightly.name","english":"Solve it in 20 lines","target":"২০ লাইনে সমাধান করুন"},{"key":"solveTightly.description","english":"Bonus: with the length-counting pulled out into a helper function that `handleGuest` reuses, the whole solution fits in 20 lines. Can you match it?","target":"বোনাস: দৈর্ঘ্য গোনার কাজটি একটি হেল্পার ফাংশনে আলাদা করে নিয়ে সেটি `handleGuest`-এর ভেতরে বারবার ব্যবহার করলে পুরো সমাধানটি ২০ লাইনের মধ্যে এঁটে যায়। আপনি কি সেটা পারবেন?"}]},{"name":"scenarios","rows":[{"key":"sarahSParty.name","english":"S Party: Sarah arrives","target":"S পার্টি: Sarah এসেছেন"},{"key":"sarahSParty.description","english":"Tonight only names starting with \"S\" are allowed. Sarah should get in!","target":"আজ রাতে শুধুমাত্র \"S\" দিয়ে শুরু হওয়া নামগুলোই অনুমোদিত। Sarah ঢুকতে পারবেন!"},{"key":"bradSParty.name","english":"S Party: Brad arrives","target":"S পার্টি: Brad এসেছেন"},{"key":"bradSParty.description","english":"Tonight only names starting with \"S\" are allowed. Brad should be turned away.","target":"আজ রাতে শুধুমাত্র \"S\" দিয়ে শুরু হওয়া নামগুলোই অনুমোদিত। Brad-কে ফিরিয়ে দিতে হবে।"},{"key":"bradleyBradParty.name","english":"Brad Party: Bradley arrives","target":"Brad পার্টি: Bradley এসেছেন"},{"key":"bradleyBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Bradley should get in!","target":"আজ রাতে শুধুমাত্র \"Brad\" দিয়ে শুরু হওয়া নামগুলোই অনুমোদিত। Bradley ঢুকতে পারবেন!"},{"key":"bradBradleyParty.name","english":"Bradley Party: Brad arrives","target":"Bradley পার্টি: Brad এসেছেন"},{"key":"bradBradleyParty.description","english":"Tonight only names starting with \"Bradley\" are allowed. Brad is too short, so he's not allowed.","target":"আজ রাতে শুধুমাত্র \"Bradley\" দিয়ে শুরু হওয়া নামগুলোই অনুমোদিত। Brad-এর নামটি খুব ছোট, তাই তিনি ঢুকতে পারবেন না।"},{"key":"brianBradParty.name","english":"Brad Party: Brian arrives","target":"Brad পার্টি: Brian এসেছেন"},{"key":"brianBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Brian should be turned away.","target":"আজ রাতে শুধুমাত্র \"Brad\" দিয়ে শুরু হওয়া নামগুলোই অনুমোদিত। Brian-কে ফিরিয়ে দিতে হবে।"},{"key":"silence.name","english":"S Party: Silence...","target":"S পার্টি: নীরবতা..."},{"key":"silence.description","english":"The person doesn't say their name. An empty name can't start with anything. Turn them away!","target":"ব্যক্তিটি নিজের নাম বলছেন না। খালি নাম কোনো কিছু দিয়েই শুরু হতে পারে না। তাঁকে ফিরিয়ে দিন!"},{"key":"cherCherParty.name","english":"Cher Party: Cher arrives","target":"Cher পার্টি: Cher এসেছেন"},{"key":"cherCherParty.description","english":"Tonight only names starting with \"Cher\" are allowed. Cher's name is exactly \"Cher\" — let her in!","target":"আজ রাতে শুধুমাত্র \"Cher\" দিয়ে শুরু হওয়া নামগুলোই অনুমোদিত। Cher-এর নাম হুবহু \"Cher\", তাই তাঁকে ঢুকতে দিন!"},{"key":"nicheNamedPartyBonusLineCount.name","english":"Neat and tidy","target":"ছিমছাম ও গোছানো"},{"key":"nicheNamedPartyBonusLineCount.description","english":"The shortest solution fits in 20 lines. Can you find it?","target":"সবচেয়ে ছোট সমাধানটি ২০ লাইনের মধ্যে এঁটে যায়। আপনি কি সেটি খুঁজে বের করতে পারবেন?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"চালিয়ে যান! আরও কম লাইনে সমাধান করা যায় কি না দেখুন।"}]},{"name":"hints","rows":[{"key":"checkStartsWith.question","english":"How do I check that a name starts with certain letters?","target":"একটি নাম নির্দিষ্ট কিছু অক্ষর দিয়ে শুরু হয়েছে কি না তা কীভাবে যাচাই করব?"},{"key":"checkStartsWith.answer","english":"Compare each character of the allowed prefix with the character at the same position in the name. If any character differs, the name doesn't match.","target":"অনুমোদিত প্রিফিক্সের প্রতিটি অক্ষরের সাথে নামের একই অবস্থানের অক্ষরটির তুলনা করুন। কোনো একটি অক্ষরও আলাদা হলে নামটি মিলবে না।"},{"key":"loopCharacters.question","english":"How do I look at one character at a time?","target":"একবারে একটি করে অক্ষর কীভাবে দেখব?"},{"key":"loopCharacters.answer","english":"Use string iteration to step through a string.","target":"স্ট্রিংয়ের ভেতর দিয়ে ধাপে ধাপে এগোতে স্ট্রিং ইটারেশন ব্যবহার করুন।"},{"key":"findEquivalentLetter.question","english":"How do I find the equivalent letter in the other word?","target":"অন্য শব্দটির সমতুল্য অক্ষরটি কীভাবে খুঁজে পাব?"},{"key":"findEquivalentLetter.answer","english":"Use string indexing to find a specific letter.","target":"নির্দিষ্ট একটি অক্ষর খুঁজে পেতে স্ট্রিং ইনডেক্সিং ব্যবহার করুন।"},{"key":"longerAllowedPrefix.question","english":"What if the allowed prefix is longer than the name?","target":"অনুমোদিত প্রিফিক্স যদি নামের চেয়ে লম্বা হয়, তাহলে কী হবে?"},{"key":"longerAllowedPrefix.answer","english":"That person can't match, so you should return `false`.","target":"সেই ব্যক্তির নাম কোনোভাবেই মিলতে পারে না, তাই আপনার `false` রিটার্ন করা উচিত।"}]}]}]
---

আজ রাতের পার্টিটি খুবই বাছাই করা: শুধুমাত্র যাঁদের নাম নির্দিষ্ট কিছু অক্ষর দিয়ে শুরু হয়, তাঁরাই ঢুকতে পারবেন!

আপনার কাজ হলো `handleGuest` (অতিথি সামলানো) নামের একটি ফাংশন লেখা, যেটি দুটি ইনপুট নেয়:

- `name` - দরজায় দাঁড়ানো ব্যক্তির নাম
- `allowedPrefix` - আজ রাতের পার্টির জন্য নামের শুরুতে যে অক্ষরগুলো থাকা বাধ্যতামূলক

ব্যক্তিটি ঢুকতে পারলে ফাংশনটি `true` রিটার্ন করবে, আর তাঁকে ফিরিয়ে দিতে হলে `false` রিটার্ন করবে।

উদাহরণস্বরূপ:

- আজ রাতের অনুমোদিত প্রিফিক্স যদি `"S"` হয়, তাহলে Sarah ঢুকতে পারবেন (`true` রিটার্ন হবে), কিন্তু Brad পারবেন না (`false` রিটার্ন হবে)।
- অনুমোদিত প্রিফিক্স যদি `"Brad"` হয়, তাহলে Brad আর Bradley ঢুকতে পারবেন, কিন্তু Brian পারবেন না।

### হেল্পার ফাংশন

এই অনুশীলনীটি করার সময় আপনাকে অতিথির নামের দৈর্ঘ্য এবং অনুমোদিত প্রিফিক্সের দৈর্ঘ্যও বের করতে হবে। এটি `getLength(someString)` নামের একটি হেল্পার ফাংশন তৈরি করার দারুণ সুযোগ, যেটি স্ট্রিংয়ে কতগুলো অক্ষর আছে তা গোনে। এরপর `handleGuest(...)`-এর ভেতরে বিভিন্ন জায়গায় আপনি এই ফাংশনটি ব্যবহার করতে পারবেন।

বোনাস সিনারিওটির চ্যালেঞ্জ হলো যত কম লাইনে সম্ভব এটি সমাধান করা। আপনার পছন্দের অন্য সমাধানও থাকতে পারে, যেগুলোতে বেশি লাইন লাগে। তাতে কোনো সমস্যাই নেই (বরং বিভিন্ন পদ্ধতি নিয়ে পরীক্ষা করে দেখতে আপনাকে উৎসাহই দেওয়া হচ্ছে), তবে সবচেয়ে ছোট সংস্করণটিও খুঁজে বের করার চেষ্টা করুন।

শুভকামনা!
