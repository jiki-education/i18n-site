---
lang: "bn"
type: "exercise"
slug: "caesar-cipher"
title: "সিজার সাইফার"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/caesar-cipher"
en_md5: "d3e1c006a952dafab93205195f0af6db"
governance_sha: "7e75c64"
content_version: "b24429f604e1"
published_at: "2026-08-19"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"encodeMessage.name","english":"Encode a message","target":"একটি বার্তা এনকোড করুন"},{"key":"encodeMessage.description","english":"Write an encode function that shifts each letter in a message by a given amount. Spaces should remain as spaces. Letters that shift past 'z' should wrap around to the beginning of the alphabet.","target":"এমন একটি encode ফাংশন লিখুন, যেটি বার্তার প্রতিটি অক্ষরকে নির্দিষ্ট সংখ্যক ঘর সরিয়ে দেয়। স্পেসগুলো স্পেস হিসেবেই থাকবে। সরাতে গিয়ে 'z' পেরিয়ে গেলে অক্ষরটি ঘুরে আবার বর্ণমালার শুরুতে ফিরে আসবে।"}]},{"name":"scenarios","rows":[{"key":"caesarSimpleShift.name","english":"Simple shift by 1","target":"সহজভাবে 1 ঘর সরানো"},{"key":"caesarSimpleShift.description","english":"Shift each letter forward by 1: a->b, b->c, c->d.","target":"প্রতিটি অক্ষর 1 ঘর সামনে সরে যায়: a->b, b->c, c->d."},{"key":"caesarShiftBy3.name","english":"Shift by 3","target":"3 ঘর সরানো"},{"key":"caesarShiftBy3.description","english":"Shift each letter forward by 3: h->k, e->h, l->o, o->r.","target":"প্রতিটি অক্ষর 3 ঘর সামনে সরে যায়: h->k, e->h, l->o, o->r."},{"key":"caesarWrapAround.name","english":"Wrap around the alphabet","target":"বর্ণমালার শুরুতে ঘুরে ফিরে আসা"},{"key":"caesarWrapAround.description","english":"When shifting goes past 'z', it wraps around: x->a, y->b, z->c.","target":"সরাতে গিয়ে 'z' পেরিয়ে গেলে তা ঘুরে আবার শুরুতে ফিরে আসে: x->a, y->b, z->c."},{"key":"caesarWithSpaces.name","english":"Message with spaces","target":"স্পেসসহ বার্তা"},{"key":"caesarWithSpaces.description","english":"Spaces should remain as spaces, only letters are shifted.","target":"স্পেসগুলো স্পেস হিসেবেই থাকবে, শুধু অক্ষরগুলোই সরানো হবে।"},{"key":"caesarRot13.name","english":"ROT13 encryption","target":"ROT13 এনক্রিপশন"},{"key":"caesarRot13.description","english":"ROT13 is a special case of the Caesar cipher with a shift of 13.","target":"ROT13 হলো সিজার সাইফারের একটি বিশেষ রূপ, যেখানে 13 ঘর সরানো হয়।"}]},{"name":"hints","rows":[{"key":"shiftingLetterByN.question","english":"How do I think about shifting a letter by N positions?","target":"একটি অক্ষরকে N ঘর সরানোর বিষয়টি কীভাবে ভাবব?"},{"key":"shiftingLetterByN.answer","english":"Each letter has a position in the alphabet (a is at position 0, b at 1, and so on). To shift, you find that position, add the shift amount, then turn the new position back into a letter by looking it up in the alphabet.","target":"বর্ণমালায় প্রতিটি অক্ষরের একটি অবস্থান আছে (a আছে 0 অবস্থানে, b আছে 1-এ, এভাবে চলতে থাকে)। সরানোর জন্য প্রথমে সেই অবস্থানটি বের করুন, তার সাথে সরানোর পরিমাণ যোগ করুন, তারপর নতুন অবস্থানটি বর্ণমালায় খুঁজে দেখে আবার অক্ষরে ফিরিয়ে আনুন।"},{"key":"letterPosition.question","english":"How do I find the position of a letter in the alphabet?","target":"বর্ণমালায় একটি অক্ষরের অবস্থান কীভাবে বের করব?"},{"key":"letterPosition.answer","english":"You can search a string for a smaller piece with `indexOf`. Calling it on the alphabet string gives you a letter's position, or -1 if the letter isn't found. To go the other way, index back into the alphabet string with the position to get the letter.","target":"`indexOf` দিয়ে আপনি একটি স্ট্রিংয়ের ভেতরে ছোট একটি অংশ খুঁজতে পারেন। বর্ণমালার স্ট্রিংয়ের ওপর এটি কল করলে অক্ষরটির অবস্থান পাবেন, আর অক্ষরটি না পাওয়া গেলে পাবেন -1। উল্টো দিকে যেতে হলে, অবস্থানটি দিয়ে বর্ণমালার স্ট্রিংয়ে ইনডেক্স করে অক্ষরটি বের করে নিন।"},{"key":"wrapPastZ.question","english":"What happens when the shift goes past 'z'?","target":"সরাতে গিয়ে 'z' পেরিয়ে গেলে কী হবে?"},{"key":"wrapPastZ.answer","english":"It needs to wrap around back to 'a'. The modulo operator (`%`) is perfect for this. Taking the position modulo 26 brings any number back into the 0 to 25 range.","target":"তখন ঘুরে আবার 'a'-তে ফিরে আসতে হবে। এর জন্য মডুলো অপারেটর (`%`) একেবারে উপযুক্ত। অবস্থানের মডুলো 26 নিলে যেকোনো সংখ্যা 0 থেকে 25-এর সীমার মধ্যে ফিরে আসে।"},{"key":"applyToWholeMessage.question","english":"How do I apply this to a whole message?","target":"পুরো বার্তার ওপর এটি কীভাবে প্রয়োগ করব?"},{"key":"applyToWholeMessage.answer","english":"Loop through each character of the message, shift it using your single-letter helper, and use concatenation (`+`) to build up the result string from the shifted letters.","target":"বার্তার প্রতিটি ক্যারেক্টারের ওপর লুপ চালান, আপনার এক-অক্ষরের সহায়ক ফাংশন দিয়ে সেটি সরান, তারপর কনক্যাটেনেশন (`+`) ব্যবহার করে সরানো অক্ষরগুলো থেকে ফলাফলের স্ট্রিংটি ধাপে ধাপে তৈরি করুন।"}]},{"name":"functions","rows":[{"key":"indexOf.description","english":"Find the position of a smaller string within a string, or -1 if it isn't found (provided by level stdlib)","target":"একটি স্ট্রিংয়ের ভেতরে ছোট একটি স্ট্রিংয়ের অবস্থান বের করে, না পাওয়া গেলে -1 দেয় (লেভেল stdlib থেকে দেওয়া)"},{"key":"indexOf.category","english":"String Operations","target":"স্ট্রিং অপারেশন"}]}]}]
---

সিজার সাইফার সবচেয়ে পুরোনো ও সহজ এনক্রিপশন কৌশলগুলোর একটি। জুলিয়াস সিজার তাঁর সেনাপতিদের কাছে গোপন বার্তা পাঠাতে এটি ব্যবহার করতেন।

এই সাইফারটি কাজ করে বার্তার প্রতিটি অক্ষরকে বর্ণমালায় নির্দিষ্ট সংখ্যক ঘর সরিয়ে দিয়ে। যেমন, 3 ঘর সরালে 'a' হয়ে যায় 'd', 'b' হয়ে যায় 'e', এভাবে চলতে থাকে। সরাতে গিয়ে 'z' পেরিয়ে গেলে তা ঘুরে আবার বর্ণমালার শুরুতে ফিরে আসে।

স্পেসগুলো স্পেস হিসেবেই থাকবে (সরানো হবে না)।

`encode(message, shift)` (message মানে বার্তা, shift মানে কত ঘর সরাতে হবে) নামের একটি ফাংশন তৈরি করুন, যেটি ছোট হাতের অক্ষরে লেখা একটি বার্তা আর সরানোর পরিমাণ নেয় এবং এনকোড করা বার্তাটি রিটার্ন করে।

যেমন:

- `encode("abc", 1)` রিটার্ন করে `"bcd"`
- `encode("xyz", 3)` রিটার্ন করে `"abc"` (ঘুরে শুরুতে ফিরে আসে)
- `encode("hello world", 5)` রিটার্ন করে `"mjqqt btwqi"`

ইঙ্গিত: সমস্যাটিকে ছোট ছোট সহায়ক ফাংশনে ভেঙে নিলে সুবিধা হবে!

### মজার তথ্য

একবার আমি পর্তুগালের ব্রাগা শহরে একটি টেক কনফারেন্সে সঞ্চালকের দায়িত্বে ছিলাম। মঞ্চে ওঠার মিনিট পাঁচেক আগে আয়োজকেরা এসে খানিকটা লজ্জিত মুখে জিজ্ঞেস করলেন, ব্রাগার রোমান ঐতিহ্য উদ্‌যাপন করতে দিনের প্রথম অংশে আমি জুলিয়াস সিজারের সাজে সাজতে রাজি আছি কি না। কেমন মানিয়েছিল, বলুন তো...?

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="সিজারের সাজে জেরেমি"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
