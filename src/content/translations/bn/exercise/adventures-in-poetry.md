---
lang: "bn"
type: "exercise"
slug: "adventures-in-poetry"
title: "কবিতার অভিযান"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/adventures-in-poetry"
en_md5: "444b0a68f443ccb86f15cc0f43fb63d7"
governance_sha: "e619d11e"
content_version: "b9498212d9c9"
published_at: "2026-09-01"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"endOfPath","english":"The poet has walked off the end of the path. Something should have stopped the walk before now.","target":"কবি পথের শেষ ছাড়িয়ে হেঁটে চলে গেছে। এর আগেই কিছু একটার হাঁটা থামানোর কথা ছিল।"},{"key":"isEmojiString","english":"You can only check whether a piece of text is an emoji.","target":"শুধু একটি টেক্সট ইমোজি কি না, সেটিই পরীক্ষা করা যায়।"},{"key":"reciteString","english":"You can only recite a piece of text.","target":"শুধু একটি টেক্সটই আবৃত্তি করা যায়।"}]},{"name":"checks","rows":[{"key":"notRecited","english":"The poet never recited anything. Make sure you call <code>recite()</code> once the walk is over.","target":"কবি কিছুই আবৃত্তি করেনি। হাঁটা শেষ হওয়ার পর <code>recite()</code> একবার কল করা হয়েছে কি না, নিশ্চিত করুন।"},{"key":"wrongPoem","english":"The poet recited \"{{got}}\" but the poem should be \"{{expected}}\".","target":"কবি আবৃত্তি করেছে \"{{got}}\", কিন্তু কবিতাটি হওয়ার কথা \"{{expected}}\"."},{"key":"noFunctions","english":"Write your solution as one walk, without defining any functions of your own.","target":"নিজের কোনো ফাংশন ডিফাইন না করে, পুরো সমাধানটি একটি হাঁটা হিসেবেই লিখুন।"},{"key":"reciteOnce","english":"The poet should recite the poem once, after the walk has finished.","target":"হাঁটা শেষ হওয়ার পর কবির কবিতাটি একবারই আবৃত্তি করা উচিত।"},{"key":"tooDeeplyNested","english":"Your code nests too deeply. You are only allowed two levels, so a loop with an <code>if</code> inside it, but nothing inside that <code>if</code>.","target":"আপনার কোড খুব গভীরভাবে নেস্টেড হয়ে গেছে। শুধু দুটি লেভেল ব্যবহার করা যাবে: অর্থাৎ একটি লুপের ভিতরে একটি <code>if</code>, কিন্তু সেই <code>if</code>-এর ভিতরে আর কিছু নয়।"},{"key":"noAndOrNot","english":"This exercise is about a different way of making decisions, so <code>&&</code> and <code>!</code> are not allowed here. <code>||</code> is fine.","target":"এই অনুশীলনীটি সিদ্ধান্ত নেওয়ার একটি ভিন্ন উপায় নিয়ে, তাই এখানে <code>&&</code> আর <code>!</code> ব্যবহার করা যাবে না। <code>||</code> ব্যবহার করা যাবে।"},{"key":"needsContinue","english":"Your solution needs to use <code>continue</code>.","target":"আপনার সমাধানে <code>continue</code> ব্যবহার করতে হবে।"},{"key":"needsBreak","english":"Your solution needs to use <code>break</code>.","target":"আপনার সমাধানে <code>break</code> ব্যবহার করতে হবে।"},{"key":"tooManyLines","english":"Your solution is longer than it needs to be. See if you can get it down by handling each kind of square in one place.","target":"আপনার সমাধানটি প্রয়োজনের চেয়ে লম্বা হয়ে গেছে। প্রতিটি ধরনের ঘর এক জায়গায় সামলে কোডটি ছোট করা যায় কি না, দেখুন।"}]},{"name":"tasks","rows":[{"key":"collectThePoem.name","english":"Collect the poem and recite it","target":"কবিতাটি সংগ্রহ করে আবৃত্তি করুন"},{"key":"collectThePoem.description","english":"Walk along the path, gather the words of the poem, stop in the right place, and recite what you gathered.","target":"পথ ধরে হাঁটুন, কবিতার শব্দগুলি সংগ্রহ করুন, সঠিক জায়গায় থামুন, আর যা সংগ্রহ করেছেন তা আবৃত্তি করুন।"},{"key":"solveTightly.name","english":"Tighten it up","target":"আরও গুছিয়ে লিখুন"},{"key":"solveTightly.description","english":"Solve the same walk, but get your code down to the line limit.","target":"একই হাঁটার সমাধান করুন, তবে কোডটিকে লাইনের সীমার মধ্যে নামিয়ে আনুন।"}]},{"name":"scenarios","rows":[{"key":"hope.name","english":"A path with gaps","target":"ফাঁকা ঘরসহ একটি পথ"},{"key":"hope.description","english":"Six words with bare grass between them, and a checkered flag at the end.","target":"ছয়টি শব্দ, তাদের মাঝে শুধু খালি ঘাস, আর শেষে একটি চেক-কাটা পতাকা।"},{"key":"wandered.name","english":"Scenery on the path","target":"পথে দৃশ্যপট"},{"key":"wandered.description","english":"The same idea, but now there are plants and creatures growing between the words.","target":"ধারণা একই, তবে এবার শব্দগুলির মাঝে গাছপালা আর প্রাণীও গজিয়ে আছে।"},{"key":"mists.name","english":"Scenery next to the flag","target":"পতাকার পাশে দৃশ্যপট"},{"key":"mists.description","english":"A leaf sits on the square just before the checkered flag.","target":"চেক-কাটা পতাকার ঠিক আগের ঘরটিতে একটি পাতা বসে আছে।"},{"key":"notLost.name","english":"Exactly seven words","target":"ঠিক সাতটি শব্দ"},{"key":"notLost.description","english":"A line with seven words on it, so the poet stops counting before the flag.","target":"একটি লাইনে সাতটি শব্দ আছে, তাই পতাকায় পৌঁছানোর আগেই কবির শব্দ গোনা শেষ হয়ে যায়।"},{"key":"hopeContinued.name","english":"A poem that is too long","target":"খুব লম্বা একটি কবিতা"},{"key":"hopeContinued.description","english":"This path holds more than seven words, so the poet stops part way through the line.","target":"এই পথে সাতটির বেশি শব্দ আছে, তাই কবি লাইনের মাঝপথেই থেমে যায়।"},{"key":"highlands.name","english":"An apostrophe","target":"একটি অ্যাপস্ট্রফি"},{"key":"highlands.description","english":"A line of Burns, with an apostrophe sitting on its own square.","target":"বার্নসের একটি লাইন, যেখানে একটি অ্যাপস্ট্রফি নিজের আলাদা ঘরে বসে আছে।"},{"key":"heartScenery.name","english":"Scenery after an apostrophe","target":"অ্যাপস্ট্রফির পরে দৃশ্যপট"},{"key":"heartScenery.description","english":"A mushroom grows between the apostrophe and the word it joins to, so whatever remembers the spacing has to survive a skipped square.","target":"অ্যাপস্ট্রফি আর যে শব্দটির সাথে সেটি জুড়বে, তার মাঝে একটি মাশরুম গজিয়ে আছে; তাই স্পেসের হিসাব যে জিনিসটি মনে রাখে, তাকে একটি বাদ পড়া ঘর পেরিয়েও টিকে থাকতে হবে।"},{"key":"tyger.name","english":"A comma","target":"একটি কমা"},{"key":"tyger.description","english":"A line of Blake, with a comma sitting on its own square.","target":"ব্লেকের একটি লাইন, যেখানে একটি কমা নিজের আলাদা ঘরে বসে আছে।"},{"key":"pleure.name","english":"Bare grass to begin","target":"শুরুতে খালি ঘাস"},{"key":"pleure.description","english":"A line of Verlaine, with a few empty squares before the poem starts.","target":"ভেরলেনের একটি লাইন, যেখানে কবিতা শুরুর আগে কয়েকটি খালি ঘর আছে।"},{"key":"yasegaeru.name","english":"A line of Issa","target":"ইসার একটি লাইন"},{"key":"yasegaeru.description","english":"Seven words of haiku, with a line limit to keep your guards tight.","target":"হাইকুর সাতটি শব্দ, সাথে একটি লাইনের সীমা, যাতে আপনার শর্তগুলি আঁটসাঁট থাকে।"}]},{"name":"hints","rows":[{"key":"scenery.question","english":"The plants and creatures are ending up in my poem.","target":"গাছপালা আর প্রাণীগুলি আমার কবিতায় ঢুকে যাচ্ছে।"},{"key":"scenery.answer","english":"Only words belong in the poem. Everything else on the path needs to be left behind, which means your loop has to get to the next square without adding anything.","target":"কবিতায় শুধু শব্দই থাকবে। পথের বাকি সবকিছু পিছনে ফেলে যেতে হবে, অর্থাৎ আপনার লুপটিকে কিছু যোগ না করেই পরের ঘরে পৌঁছাতে হবে।"},{"key":"flagSkipped.question","english":"My poet never stops walking.","target":"আমার কবি কিছুতেই হাঁটা থামাচ্ছে না।"},{"key":"flagSkipped.answer","english":"The checkered flag is an emoji too. If you deal with scenery before you deal with the flag, the flag gets treated as scenery and the walk never ends. Order matters.","target":"চেক-কাটা পতাকাটিও একটি ইমোজি। পতাকা সামলানোর আগে যদি দৃশ্যপট সামলান, তাহলে পতাকাটিও দৃশ্যপট হিসেবে গণ্য হয়ে যায়, আর হাঁটা কখনো শেষ হয় না। ক্রমটাই এখানে আসল।"},{"key":"spacing.question","english":"My words are all squashed together, or there is a space at the start.","target":"আমার শব্দগুলি সব গায়ে গায়ে লেগে যাচ্ছে, নয়তো শুরুতে একটি স্পেস থেকে যাচ্ছে।"},{"key":"spacing.answer","english":"Think about when a space is needed. It is needed **between** two words, not before the first one, so something has to remember whether anything has been written yet.","target":"ভেবে দেখুন কখন একটি স্পেস দরকার। স্পেস দরকার দুটি শব্দের **মাঝে**, প্রথম শব্দটির আগে নয়; তাই কিছু একটাকে মনে রাখতে হবে এর আগে কিছু লেখা হয়েছে কি না।"},{"key":"apostrophe.question","english":"I am getting `heart ' s` instead of `heart's`.","target":"আমি `heart's`-এর বদলে `heart ' s` পাচ্ছি।"},{"key":"apostrophe.answer","english":"An apostrophe joins the words on either side of it, so no space belongs before it or after it. A comma is the opposite way round, with no space before it but a space after.","target":"একটি অ্যাপস্ট্রফি তার দুই পাশের শব্দ দুটিকে জুড়ে দেয়, তাই তার আগে বা পরে কোনো স্পেস থাকবে না। কমা ঠিক উল্টো, তার আগে স্পেস নেই কিন্তু পরে ঠিকই একটি স্পেস থাকে।"},{"key":"reciteOnce.question","english":"Why can I only call `recite()` once?","target":"আমি `recite()` শুধু একবারই কল করতে পারব কেন?"},{"key":"reciteOnce.answer","english":"The poet recites the finished poem, so there is only one moment where that can happen. There is more than one way for the walk to end, and all of them need to reach that same moment.","target":"কবি সম্পূর্ণ কবিতাটিই আবৃত্তি করে, তাই সেটি ঘটার মুহূর্ত একটিই। হাঁটা শেষ হওয়ার একাধিক উপায় আছে, আর তাদের সবগুলিকেই সেই একই মুহূর্তে পৌঁছাতে হবে।"}]},{"name":"describers","rows":[{"key":"move","english":"walked forward and found ${return}","target":"সামনে হাঁটা হয়েছে এবং ${return} পাওয়া গেছে"},{"key":"isEmoji","english":"checked whether ${arg1} was an emoji","target":"${arg1} ইমোজি কি না তা পরীক্ষা করা হয়েছে"},{"key":"recite","english":"recited \"${arg1}\"","target":"\"${arg1}\" আবৃত্তি করা হয়েছে"}]},{"name":"functions","rows":[{"key":"move.description","english":"Walks the poet forward onto the next square and **returns** whatever was on it.","target":"কবিকে পরের ঘরে এগিয়ে নিয়ে যায় এবং সেই ঘরে যা ছিল তা **রিটার্ন** করে।"},{"key":"move.category","english":"Movement","target":"চলাচল"},{"key":"isEmoji.description","english":"**Returns** `true` if the thing you pass it is an emoji.","target":"আপনার পাঠানো জিনিসটি ইমোজি হলে `true` **রিটার্ন** করে।"},{"key":"isEmoji.category","english":"Checks","target":"পরীক্ষা"},{"key":"recite.description","english":"Makes the poet recite a poem out loud.","target":"কবিকে দিয়ে একটি কবিতা জোরে আবৃত্তি করায়।"},{"key":"recite.category","english":"Action","target":"কাজ"}]}]}]
---

আপনি "কবিতার অভিযান" নামে একটি রোবটিক কবিতার গেম বানাচ্ছেন। প্রথম ধাপ হিসেবে রোবটটিকে এমনভাবে প্রোগ্রাম করতে হবে যাতে সে হাঁটতে হাঁটতে শব্দ সংগ্রহ করে এবং শেষে পুরো কবিতাটি আবৃত্তি করে।

প্রতিটি ঘরে চারটি জিনিসের যেকোনো একটি থাকে:

1. কিছুই না (`""`)
2. কবিতার একটি **শব্দ**।
3. পাতা বা প্রজাপতির মতো দৃশ্যপট (একটি ইমোজি)।
4. একটি চেক-কাটা পতাকা, যা রোবটকে থামতে বলে।

আপনাকে সাহায্য করার জন্য কয়েকটি ফাংশন আছে। প্রথমত, আছে একটি `move()` ফাংশন, যা কবি রোবটটিকে সামনের ঘরে এগিয়ে যেতে বলে এবং সেই ঘরে যা ছিল তা রিটার্ন করে। আছে একটি `isEmoji(thing)` ফাংশন, যা একটি বুলিয়ান রিটার্ন করে জানিয়ে দেয় আপনার পাঠানো স্ট্রিংটি ইমোজি কি না। আর সবশেষে আছে একটি `recite(poem)` ফাংশন, যা চূড়ান্ত কবিতাটির সাথে ব্যবহার করতে হবে।

আপনার কাজ হলো পথটি ধরে হাঁটা, ধাপে ধাপে কবিতাটি গড়ে তোলা, তারপর সেটি আবৃত্তি করা।

## নিয়মগুলি

- **শব্দগুলি** কবিতায় যাবে, **প্রতিটির মাঝে একটি স্পেস** রেখে।
- **দৃশ্যপট** কবিতার অংশ নয়, তাই সেটিকে উপেক্ষা করতে হবে।
- একটি **অ্যাপস্ট্রফি** নিজের আলাদা ঘরে বসে থাকে, এবং সেটি দুই পাশের শব্দ দুটিকে জুড়ে দেয়। `heart` তারপর `'` তারপর `s` মিলে হয় `heart's`.
- একটি **কমা**-ও নিজের আলাদা ঘরে বসে থাকে। সেটি আগের শব্দটির গায়ে লেগে যায়, তবে তার পরে ঠিকই একটি স্পেস থাকে।
- **চেক-কাটা পতাকায়** পৌঁছালে, অথবা **সাতটি শব্দ** সংগ্রহ করা হয়ে গেলে, কবি হাঁটা থামিয়ে দেয়। যেটি আগে ঘটে, সেটিই।
- কবি যখনই থামুক, আর যেভাবেই থামুক, সে যা সংগ্রহ করেছে তা আবৃত্তি করে। আপনি `recite()` **একবারই** কল করতে পারবেন।

## বিধিনিষেধ

এই অনুশীলনীটি সমাধানের অনেক উপায় আছে, কিন্তু আমরা চাই আপনি সদ্য শেখা `continue` আর `break` কিওয়ার্ড দুটি ব্যবহার করুন। তাই কয়েকটি নিয়ম আছে:

1. আপনার সমাধানে `continue` এবং `break` দুটিই ব্যবহার করতে হবে।
2. সমাধানে `&&` বা `!` ব্যবহার করা যাবে না।
3. কোনো হেল্পার ফাংশন লেখা যাবে না।
4. ইন্ডেন্টেশনের সর্বোচ্চ দুটি লেভেল ব্যবহার করা যাবে:

```javascript

// অনুমোদিত - ইন্ডেন্টেশনের ২টি লেভেল
repeat() {
  if(...) {
    //...
  }
}

// অনুমোদিত নয় - ইন্ডেন্টেশনের ৩টি লেভেল
repeat() {
  if(...) {
    if(...) {
    }
  }
}
```

তার মানে, আপনি যে সমাধানটি বের করবেন সেটি বেশ "ফ্ল্যাট" হবে।

শুভকামনা!
