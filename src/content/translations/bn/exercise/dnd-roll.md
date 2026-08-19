---
lang: "bn"
type: "exercise"
slug: "dnd-roll"
title: "D&D রোল"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/dnd-roll"
en_md5: "9f9dc476ef35afe5b76effc918ca5771"
governance_sha: "7e75c64"
content_version: "f0e37de37fb0"
published_at: "2026-08-19"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"unknownDice","english":"Sorry - Jiki doesn't have a {{sides}} sided dice handy!","target":"দুঃখিত, জিকির কাছে {{sides}} তলের কোনো ডাইস নেই!"},{"key":"announceNumber","english":"You can only announce a number","target":"আপনি শুধু একটি সংখ্যাই ঘোষণা করতে পারেন"},{"key":"attackNumber","english":"Attack must be a number","target":"অ্যাটাক অবশ্যই একটি সংখ্যা হতে হবে"},{"key":"damageNumber","english":"Damage must be a number","target":"ড্যামেজ অবশ্যই একটি সংখ্যা হতে হবে"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled a die and got ${return}","target":"একটি ডাইস গড়ানো হয়েছে এবং ${return} পাওয়া গেছে"},{"key":"announce","english":"announced ${arg1}","target":"${arg1} ঘোষণা করা হয়েছে"},{"key":"strike","english":"struck the goblin with attack ${arg1} and damage ${arg2}","target":"অ্যাটাক ${arg1} আর ড্যামেজ ${arg2} দিয়ে গবলিনকে আঘাত করা হয়েছে"}]},{"name":"checks","rows":[{"key":"announcementCount","english":"Expected 3 announcements but got {{got}}. Make sure you announce each roll.","target":"৩টি ঘোষণা আশা করা হয়েছিল, কিন্তু {{got}}টি পাওয়া গেছে। প্রতিটি রোল ঘোষণা করেছেন কি না দেখে নিন।"},{"key":"firstAnnouncement","english":"Expected the first announcement to be {{attack}} (the attack roll) but got {{got}}.","target":"প্রথম ঘোষণাটি {{attack}} (অ্যাটাক রোল) হওয়ার কথা ছিল, কিন্তু {{got}} পাওয়া গেছে।"},{"key":"secondAnnouncement","english":"Expected the second announcement to be {{damage}} (the base damage roll) but got {{got}}.","target":"দ্বিতীয় ঘোষণাটি {{damage}} (বেস ড্যামেজ রোল) হওয়ার কথা ছিল, কিন্তু {{got}} পাওয়া গেছে।"},{"key":"thirdAnnouncement","english":"Expected the third announcement to be {{bonus}} (the bonus roll) but got {{got}}.","target":"তৃতীয় ঘোষণাটি {{bonus}} (বোনাস রোল) হওয়ার কথা ছিল, কিন্তু {{got}} পাওয়া গেছে।"},{"key":"notStruck","english":"You didn't strike the goblin. Make sure you call <code>strike()</code>.","target":"আপনি গবলিনটিকে আঘাত করেননি। <code>strike()</code> কল করেছেন কি না দেখে নিন।"},{"key":"wrongAttack","english":"Expected the attack to be {{attack}} but got {{got}}. Pass the attack roll to <code>strike()</code>.","target":"অ্যাটাক {{attack}} হওয়ার কথা ছিল, কিন্তু {{got}} পাওয়া গেছে। অ্যাটাক রোলটি <code>strike()</code>-এ পাস করুন।"},{"key":"wrongDamage","english":"Expected total damage to be {{totalDamage}} ({{damage}} + {{bonus}}) but got {{got}}. Add the base damage and bonus together.","target":"মোট ড্যামেজ {{totalDamage}} ({{damage}} + {{bonus}}) হওয়ার কথা ছিল, কিন্তু {{got}} পাওয়া গেছে। বেস ড্যামেজ আর বোনাস যোগ করে নিন।"}]},{"name":"tasks","rows":[{"key":"rollAndStrike.name","english":"Roll the dice and strike the goblin","target":"ডাইস গড়িয়ে গবলিনকে আঘাত করুন"},{"key":"rollAndStrike.description","english":"Roll three dice (d20 for attack, d12 for base damage, d10 for bonus), announce each roll, then strike the goblin with your attack roll and total damage (base + bonus).","target":"তিনটি ডাইস গড়ান (অ্যাটাকের জন্য d20, বেস ড্যামেজের জন্য d12, বোনাসের জন্য d10), প্রতিটি রোল ঘোষণা করুন, তারপর আপনার অ্যাটাক রোল আর মোট ড্যামেজ (বেস + বোনাস) দিয়ে গবলিনটিকে আঘাত করুন।"}]},{"name":"scenarios","rows":[{"key":"randomRolls.name","english":"Roll and strike","target":"গড়ান আর আঘাত করুন"},{"key":"randomRolls.description","english":"Roll d20 for attack, d12 for base damage, d10 for bonus. Strike the goblin with your attack and total damage.","target":"অ্যাটাকের জন্য d20, বেস ড্যামেজের জন্য d12, বোনাসের জন্য d10 গড়ান। আপনার অ্যাটাক আর মোট ড্যামেজ দিয়ে গবলিনটিকে আঘাত করুন।"}]},{"name":"hints","rows":[{"key":"chooseDie.question","english":"How do I choose what type of die to use?","target":"কোন ধরনের ডাইস ব্যবহার করব তা কীভাবে ঠিক করব?"},{"key":"chooseDie.answer","english":"For a 20 sided dice, use 20 as the input to roll - e.g. `roll(20)`. For a 12 sided dice, call `roll(12)`.","target":"২০ তলের ডাইসের জন্য roll-এর ইনপুট হিসেবে 20 ব্যবহার করুন, যেমন `roll(20)`। ১২ তলের ডাইসের জন্য `roll(12)` কল করুন।"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls a die with the given number of sides and **returns** the result.","target":"নির্দিষ্ট সংখ্যক তলের একটি ডাইস গড়ায় এবং ফলাফলটি **রিটার্ন** করে।"},{"key":"roll.category","english":"Dice","target":"ডাইস"},{"key":"announce.description","english":"Announces a dice roll value.","target":"একটি ডাইস রোলের মান ঘোষণা করে।"},{"key":"announce.category","english":"Action","target":"অ্যাকশন"},{"key":"strike.description","english":"Strikes the goblin with the given attack roll and total damage.","target":"নির্দিষ্ট অ্যাটাক রোল আর মোট ড্যামেজ দিয়ে গবলিনটিকে আঘাত করে।"},{"key":"strike.category","english":"Action","target":"অ্যাকশন"}]}]}]
---

আপনি এমন একটি বট তৈরি করছেন যা Dungeons and Dragons (DnD) খেলতে পারে। DnD-এর সাথে পরিচিত না থাকলে জেনে রাখুন, খেলাটির মূল ধারণা হলো আপনি নানা রকম পরিস্থিতির মুখোমুখি হবেন, আর কী ঘটবে তা ঠিক করতে ডাইস গড়াবেন। এখানে বিভিন্ন সংখ্যক তলের নানা রকম ডাইস আছে (শুধু আপনার চেনা ছয় তলের ডাইসটিই নয়!)

যেসব পরিস্থিতি আপনাকে সামলাতে হবে তার একটি হলো গবলিনের মুখোমুখি হওয়া। গবলিনটিকে আক্রমণ করতে হলে আপনাকে যা করতে হবে:

- ২০ তলের একটি ডাইস গড়িয়ে একটি **অ্যাটাক স্কোর** তৈরি করুন।
- ১২ তলের একটি ডাইস গড়িয়ে একটি **বেস ড্যামেজ স্কোর** তৈরি করুন।
- ১০ তলের একটি ডাইস গড়িয়ে একটি **বোনাস ড্যামেজ স্কোর** তৈরি করুন।
- বেস ড্যামেজ আর বোনাস ড্যামেজ যোগ করে আপনার **মোট ড্যামেজ** বের করুন।
- আপনার অ্যাটাক রোল আর মোট ড্যামেজ দিয়ে গবলিনটিকে আঘাত করুন।

প্রতিবার ডাইস গড়ানোর পর, কত উঠল সেই সংখ্যাটি আপনার সাথে যাঁরা খেলছেন তাঁদের জানিয়ে দিতে হবে। সংখ্যাগুলো ঘোষণা না করে আঘাত করতে গেলে তাঁরা ভাবতে পারেন আপনি চিটিং করছেন!

আপনার হাতে তিনটি ফাংশন আছে:

- `roll(sides)` (অর্থ: ডাইস গড়ানো) নির্দিষ্ট সংখ্যক তলের একটি ডাইস গড়ায়। ফাংশনটি ফলাফলটি রিটার্ন করে।
- `announce(value)` (অর্থ: ঘোষণা করা) একটি ডাইস রোল ঘোষণা করে।
- `strike(attack, damage)` (অর্থ: আঘাত করা) আপনার অ্যাটাক রোল আর মোট ড্যামেজ দিয়ে গবলিনটিকে আঘাত করে।

**গুরুত্বপূর্ণ:** প্রতিবার আপনি `roll()` কল করলে জিকি একটি ডাইস গড়ায় এবং ভিন্ন একটি সংখ্যা পায়। একই ডাইস দুবার গড়ালে দুবারই একই সংখ্যা উঠবে, এমনটা আশা করবেন না।
