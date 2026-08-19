---
lang: "bn"
type: "exercise"
slug: "hamming"
title: "Hamming"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/hamming"
en_md5: "00c98b21780410fd419205c5850e1f4b"
governance_sha: "7e75c64"
content_version: "008ca374f989"
published_at: "2026-08-19"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"You used more lines than needed — see if you can trim it down.","target":"আপনি প্রয়োজনের চেয়ে বেশি লাইন ব্যবহার করেছেন। দেখুন তো, এটি আরও ছোট করা যায় কি না।"}]},{"name":"tasks","rows":[{"key":"calculateHammingDistance.name","english":"Calculate the Hamming Distance","target":"হ্যামিং দূরত্ব হিসাব করুন"},{"key":"calculateHammingDistance.description","english":"Write a function that calculates the Hamming distance between two DNA strands of equal length. The Hamming distance is the number of positions where the corresponding characters differ.","target":"এমন একটি ফাংশন লিখুন, যা সমান দৈর্ঘ্যের দুটি DNA স্ট্র্যান্ডের মধ্যে হ্যামিং দূরত্ব হিসাব করে। যে অবস্থানগুলোতে দুটি স্ট্র্যান্ডের অক্ষর আলাদা, সেগুলোর সংখ্যাই হলো হ্যামিং দূরত্ব।"},{"key":"solveInElevenLines.name","english":"Solve in eleven lines of code","target":"এগারো লাইনের কোডে সমাধান করুন"},{"key":"solveInElevenLines.description","english":"Can you solve this using no more than eleven lines of code?","target":"আপনি কি এগারো লাইনের বেশি কোড ব্যবহার না করে এটি সমাধান করতে পারবেন?"}]},{"name":"scenarios","rows":[{"key":"hammingEmptyStrands.name","english":"Empty strands","target":"খালি স্ট্র্যান্ড"},{"key":"hammingEmptyStrands.description","english":"Empty strands have a Hamming distance of 0.","target":"খালি স্ট্র্যান্ডের হ্যামিং দূরত্ব ০।"},{"key":"hammingSingleLetterIdentical.name","english":"Single letter identical strands","target":"এক অক্ষরের অভিন্ন স্ট্র্যান্ড"},{"key":"hammingSingleLetterIdentical.description","english":"Single-letter identical strands have a Hamming distance of 0.","target":"এক অক্ষরের অভিন্ন স্ট্র্যান্ডের হ্যামিং দূরত্ব ০।"},{"key":"hammingLongIdenticalStrands.name","english":"Long identical strands","target":"লম্বা অভিন্ন স্ট্র্যান্ড"},{"key":"hammingLongIdenticalStrands.description","english":"Long identical strands have a Hamming distance of 0.","target":"লম্বা অভিন্ন স্ট্র্যান্ডের হ্যামিং দূরত্ব ০।"},{"key":"hammingSingleLetterDifferent.name","english":"Single letter different strands","target":"এক অক্ষরের ভিন্ন স্ট্র্যান্ড"},{"key":"hammingSingleLetterDifferent.description","english":"Single-letter different strands have a Hamming distance of 1.","target":"এক অক্ষরের ভিন্ন স্ট্র্যান্ডের হ্যামিং দূরত্ব ১।"},{"key":"hammingLongDifferentStrands.name","english":"Long different strands","target":"লম্বা ভিন্ন স্ট্র্যান্ড"},{"key":"hammingLongDifferentStrands.description","english":"Long strands with differences have a calculated Hamming distance.","target":"লম্বা স্ট্র্যান্ডে পার্থক্য থাকলে সেগুলোর হ্যামিং দূরত্ব হিসাব করা হয়।"},{"key":"hammingBonusElevenLines.name","english":"Eleven lines of code","target":"এগারো লাইনের কোড"},{"key":"hammingBonusElevenLines.description","english":"Solve the exercise using no more than eleven lines of code.","target":"এগারো লাইনের বেশি কোড ব্যবহার না করে অনুশীলনীটি সমাধান করুন।"}]},{"name":"hints","rows":[{"key":"hammingDistanceMeaning.question","english":"What does 'Hamming distance' mean in plain terms?","target":"'হ্যামিং দূরত্ব' মানে সহজ কথায় কী?"},{"key":"hammingDistanceMeaning.answer","english":"It's the number of positions where the two strings differ. So 'GAGA' vs 'GATA' differ at position 3 only, giving a distance of 1.","target":"দুটি স্ট্রিং যে অবস্থানগুলোতে আলাদা, সেগুলোর সংখ্যাই হ্যামিং দূরত্ব। যেমন 'GAGA' আর 'GATA' শুধু ৩ নম্বর অবস্থানে আলাদা, তাই এদের দূরত্ব ১।"},{"key":"compareCharactersAtPosition.question","english":"How do I compare characters at the same position in both strings?","target":"দুটি স্ট্রিংয়ের একই অবস্থানের ক্যারেক্টার কীভাবে তুলনা করব?"},{"key":"compareCharactersAtPosition.answer","english":"You'll need to move through both strings in sync, so you can pull out the character at the same spot from each one as you go.","target":"আপনাকে দুটি স্ট্রিংয়ের মধ্য দিয়ে একসাথে এগোতে হবে, যাতে যেতে যেতে দুটি স্ট্রিং থেকেই একই জায়গার ক্যারেক্টারটি বের করে নিতে পারেন।"},{"key":"trackDifferenceCount.question","english":"How do I track 'how many differences' there are?","target":"কতগুলো পার্থক্য আছে, সেটার হিসাব কীভাবে রাখব?"},{"key":"trackDifferenceCount.answer","english":"You'll need something that keeps a running total, adjusted whenever you spot a mismatch, so it's ready to hand back once you've checked every position.","target":"আপনার এমন একটি জিনিস লাগবে, যা মোট সংখ্যার হিসাব রাখবে এবং যখনই কোনো অমিল চোখে পড়বে তখন সেটি বদলে যাবে, যাতে সব অবস্থান পরীক্ষা করা শেষ হলে সেটি রিটার্ন করার জন্য প্রস্তুত থাকে।"}]}]}]
---

এটি আণবিক জীববিজ্ঞান নিয়ে Exercism-এর একটি ক্লাসিক অনুশীলনী!

আপনার শরীর এমন সব কোষ দিয়ে তৈরি, যেগুলোর ভেতরে DNA থাকে। এই কোষগুলো নিয়মিত ক্ষয়ে যায় এবং সেগুলো বদলানোর প্রয়োজন হয়, আর সেই কাজটি তারা করে বিভাজিত হয়ে নতুন কোষ তৈরির মাধ্যমে। আসলে, একজন মানুষের শরীরে সারা জীবনে গড়ে প্রায় ১০ কোয়াড্রিলিয়ন বার কোষ বিভাজন ঘটে!

কোষ যখন বিভাজিত হয়, তখন তাদের DNA-ও প্রতিলিপি তৈরি করে। কখনো কখনো এই প্রক্রিয়ার সময় ভুল হয়ে যায়, আর DNA-এর কোনো কোনো অংশে ভুল তথ্য লেখা হয়ে যায়। দুটি DNA স্ট্র্যান্ড তুলনা করে তাদের মধ্যে পার্থক্যগুলো গুনলে আমরা দেখতে পারি কতগুলো ভুল ঘটেছে। এটিই "হ্যামিং দূরত্ব" নামে পরিচিত।

শুধু জীববিজ্ঞান নয়, বিজ্ঞানের আরও অনেক ক্ষেত্রেই হ্যামিং দূরত্ব কাজে লাগে, তাই শব্দটির সাথে পরিচিত থাকা বেশ কাজের!

আপনার কাজ হলো দুটি DNA স্ট্র্যান্ডের মধ্যে হ্যামিং দূরত্ব হিসাব করা। DNA-তে C, A, G ও T এই অক্ষরগুলো ব্যবহার করা হয়। দুটি স্ট্র্যান্ড দেখতে এমন হতে পারে:

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

এই দুটির মধ্যে ৭টি পার্থক্য আছে, তাই এদের হ্যামিং দূরত্ব ৭।

`hammingDistance` (হ্যামিং দূরত্ব) নামে একটি ফাংশন তৈরি করুন, যার দুটি ইনপুট থাকবে: স্ট্রিং হিসেবে দুটি DNA স্ট্র্যান্ড। ফাংশনটি দূরত্ব হিসেবে একটি সংখ্যা রিটার্ন করবে।

দুটি DNA স্ট্র্যান্ড সবসময় একই দৈর্ঘ্যের হবে।
