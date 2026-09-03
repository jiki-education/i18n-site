---
lang: "bn"
type: "exercise"
slug: "wordle-process-guess"
title: "Wordle: অনুমান প্রসেস করা"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/wordle-process-guess"
en_md5: "267d47d51164b59f054018bd4877368d"
governance_sha: "4f119a7e"
content_version: "036947aceb8b"
published_at: "2026-09-03"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"rowMismatch","english":"The \"{{letter}}\" at square {{square}} should be \"{{expected}}\", not \"{{actual}}\".","target":"{{square}} নম্বর বাক্সের \"{{letter}}\" অক্ষরটির অবস্থা \"{{expected}}\" হওয়ার কথা, \"{{actual}}\" নয়।"},{"key":"rowNotColored","english":"The row wasn't colored.","target":"সারিটি রং করা হয়নি।"},{"key":"rowWrongLength","english":"The row got {{actual}} states, but a row needs {{expected}}.","target":"সারিটি {{actual}}টি অবস্থা পেয়েছে, কিন্তু একটি সারির জন্য {{expected}}টি দরকার।"},{"key":"allCorrect","english":null,"target":"আমরা আশা করেছিলাম সব অক্ষরই সবুজ হবে"},{"key":"absent","english":null,"target":"আমরা আশা করেছিলাম 'a' আর 'u' absent হবে"},{"key":"present","english":null,"target":"আমরা আশা করেছিলাম 'l' আর 'e' present হবে।"},{"key":"complex","english":null,"target":"আমরা আশা করেছিলাম present, present, present, correct, absent"},{"key":"differentWord","english":null,"target":"আমরা আশা করেছিলাম correct, present, present, present, absent"}]},{"name":"tasks","rows":[{"key":"processGuess.name","english":"Process a single guess","target":"একটি অনুমান প্রসেস করা"},{"key":"processGuess.description","english":"Create a function called processGuess that takes a target word and a guess, works out the state of each letter (correct, present, or absent), then calls colorRow(1, states) with the results.","target":"processGuess নামে একটি ফাংশন তৈরি করুন, যা একটি টার্গেট শব্দ এবং একটি অনুমান নেয়, প্রতিটি অক্ষরের অবস্থা (correct, present বা absent) বের করে, তারপর ফলাফলগুলি দিয়ে colorRow(1, states) কল করে।"}]},{"name":"scenarios","rows":[{"key":"allCorrect.name","english":"All correct","target":"সব সঠিক"},{"key":"allCorrect.description","english":"Deal with a fully correct guess","target":"পুরোপুরি সঠিক একটি অনুমান সামলান"},{"key":"absent.name","english":"Some absent","target":"কিছু অনুপস্থিত"},{"key":"absent.description","english":"Handle when some letters are wrong","target":"কিছু অক্ষর ভুল হলে সেটি সামলান"},{"key":"present.name","english":"Some present","target":"কিছু উপস্থিত"},{"key":"present.description","english":"Deal with letters in the wrong place","target":"ভুল জায়গায় থাকা অক্ষরগুলি সামলান"},{"key":"complex.name","english":"Complex","target":"জটিল"},{"key":"complex.description","english":"Deal with a more complex scenario","target":"আরেকটু জটিল একটি পরিস্থিতি সামলান"},{"key":"differentWord.name","english":"A different word","target":"ভিন্ন একটি শব্দ"},{"key":"differentWord.description","english":"And finally a different word!","target":"আর সবশেষে ভিন্ন একটি শব্দ!"}]},{"name":"hints","rows":[{"key":"compareLetters.question","english":"How do I compare each letter of the guess to the target?","target":"অনুমানের প্রতিটি অক্ষরকে টার্গেটের সাথে কীভাবে তুলনা করব?"},{"key":"compareLetters.answer","english":"Loop through the positions `0` to `4`. For each position, compare `guess[i]` with `target[i]`.","target":"`0` থেকে `4` পর্যন্ত অবস্থানগুলির উপর লুপ চালান। প্রতিটি অবস্থানের জন্য `guess[i]`-এর সাথে `target[i]` তুলনা করুন।"},{"key":"stateRules.question","english":"When is a letter `\"correct\"` vs `\"present\"` vs `\"absent\"`?","target":"কোন অক্ষর কখন `\"correct\"`, কখন `\"present\"` আর কখন `\"absent\"` হয়?"},{"key":"stateRules.answer","english":"Under this exercise's simplified rules: if `guess[i]` equals `target[i]`, it's `\"correct\"`. Otherwise, if the letter exists somewhere in `target`, it's `\"present\"`. If not, it's `\"absent\"`.","target":"এই এক্সারসাইজের সরলীকৃত নিয়ম অনুযায়ী: `guess[i]` আর `target[i]` সমান হলে সেটি `\"correct\"`। তা না হলে, অক্ষরটি `target`-এর কোথাও থাকলে সেটি `\"present\"`। সেখানেও না থাকলে সেটি `\"absent\"`।"},{"key":"buildList.question","english":"How do I build up the array of states?","target":"অবস্থাগুলির অ্যারেটি কীভাবে ধাপে ধাপে তৈরি করব?"},{"key":"buildList.answer","english":"Start with an empty array, then use `states.push(value)` inside the loop to add each state onto the end in order.","target":"একটি খালি অ্যারে দিয়ে শুরু করুন, তারপর লুপের ভেতরে `states.push(value)` ব্যবহার করে প্রতিটি অবস্থা ক্রমানুসারে অ্যারেটির শেষে যোগ করুন।"},{"key":"finishedList.question","english":"Where does the finished array go?","target":"তৈরি হয়ে যাওয়া অ্যারেটি কোথায় যাবে?"},{"key":"finishedList.answer","english":"Pass it to `colorRow(1, states)` to color the first row of the board with your computed states.","target":"বোর্ডের প্রথম সারিটি আপনার বের করা অবস্থাগুলি দিয়ে রং করতে অ্যারেটি `colorRow(1, states)`-এ পাস করুন।"}]},{"name":"functions","rows":[{"key":"colorRow.description","english":"Colors a row on the Wordle board with the given states.","target":"Wordle বোর্ডের একটি সারি দেওয়া অবস্থাগুলি দিয়ে রং করে।"},{"key":"colorRow.category","english":"Wordle","target":"Wordle"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"একটি অ্যারের শেষে একটি এলিমেন্ট যোগ করে, অ্যারেটিকেই সরাসরি বদলে দেয়।"},{"key":"push.category","english":"Arrays","target":"অ্যারে"},{"key":"includes.description","english":"Checks whether a string contains another string, returning true or false.","target":"একটি স্ট্রিং-এর ভেতরে আরেকটি স্ট্রিং আছে কি না যাচাই করে, আর ট্রু বা ফলস রিটার্ন করে।"},{"key":"includes.category","english":"Strings","target":"স্ট্রিং"}]},{"name":"describers","rows":[{"key":"colorRow","english":"colored a row on the wordle board","target":"Wordle বোর্ডের একটি সারি রং করা হয়েছে"}]}]}]
---

Wordle-এ স্বাগতম! এটি সেই গেম, যা কোভিড-১৯ লকডাউনের সময় ভাইরাল হয়ে গিয়েছিল!

গেমটি এভাবে কাজ করে:

- একটি গোপন শব্দ আছে, যা ব্যবহারকারী অনুমান করার চেষ্টা করেন।
- সেটি ঠিকঠাক বের করার জন্য ব্যবহারকারী ৬টি অনুমানের সুযোগ পান।
- প্রতিটি অনুমানের জন্য ৫টি বাক্স থাকে, প্রতিটি অক্ষরের জন্য একটি:
  - কোনো অক্ষর সঠিক হলে বাক্সটি সবুজ হয়ে যায়।
  - অক্ষরটি গোপন শব্দে থাকলেও ভুল জায়গায় থাকলে বাক্সটি হলুদ হয়ে যায়।
  - অক্ষরটি গোপন শব্দে না থাকলে বাক্সটি ধূসর হয়ে যায়।

কয়েকটি অনুশীলনীর মধ্যে আপনি পুরো Wordle গেমটি বানিয়ে ফেলবেন, তবে **এই অনুশীলনীতে** আপনি শুধু প্রথম সারিটির জন্য সবকিছু কাজ করাবেন।

সেটি করতে আপনাকে `processGuess(target, guess)` (অনুমান প্রসেস করা) নামে একটি ফাংশন তৈরি করতে হবে। আপনার ফাংশনে যে শব্দগুলি আসবে, সেগুলি সবসময় ছোট হাতের অক্ষরে থাকবে।

ফাংশনটি অনুমানের প্রতিটি অক্ষরের অবস্থা বের করবে, তারপর প্রতিটি অক্ষরের অবস্থা নিয়ে তৈরি একটি অ্যারে দিয়ে `colorRow(1, states)` (সারি রং করা) ফাংশনটি কল করবে: প্রতিটি অবস্থা হবে `"correct"`, `"present"` বা `"absent"`।

উদাহরণস্বরূপ, `processGuess("hello", "holes")` হলে `colorRow` এভাবে ব্যবহার করতে হবে:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

এগিয়ে যাওয়ার আগে বিষয়টি ঠিকঠাক বুঝেছেন কি না, যাচাই করে নিন!

আর আপনি যদি একজন Wordle-ভক্ত হন, তাহলে হয়তো লক্ষ করবেন, উপরের নিয়মগুলি অফিসিয়াল গেমের তুলনায় **কিছুটা সরলীকৃত**। এই অনুশীলনীতে দয়া করে এই সরলীকৃত নিয়মগুলিই মেনে চলুন, পরের Wordle অনুশীলনীতে আমরা পুরো নিয়মের সেটটি নিয়ে আসব!

### মেথড

আগের কয়েকটি অনুশীলনীর মতোই, অবস্থাগুলির অ্যারেটি ধাপে ধাপে তৈরি করতে আপনি `push` মেথডটি ব্যবহার করতে পারেন, যা একটি অ্যারের শেষে একটি এলিমেন্ট যোগ করে। উদাহরণস্বরূপ, `states.push("correct")` লিখলে `states` অ্যারেটির শেষে `"correct"` যোগ হয়।

একটি স্ট্রিং-এর ভেতরে আরেকটি স্ট্রিং আছে কি না যাচাই করতে চাইলে আপনার হাতে `includes` মেথডটিও আছে।

শুভকামনা!
