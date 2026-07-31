---
lang: "bn"
type: "exercise"
slug: "maze-solve-basic"
title: "গোলকধাঁধাটি সমাধান করুন"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "b21d29b"
content_version: "75ff38dcbc92"
published_at: "2026-07-31"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"আপনি গোলকধাঁধার শেষ পর্যন্ত পৌঁছাতে পারেননি।"}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"মানুষটিকে গোলকধাঁধার শেষ পর্যন্ত পথ দেখান"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"সবুজ লক্ষ্যে পৌঁছাতে গোলকধাঁধার ভেতর দিয়ে পথ করে নিন"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"মানুষটিকে গোলকধাঁধার শেষ পর্যন্ত পথ দেখান"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"আপনার কাজ হলো নিজের মানুষটিকে গোলকধাঁধার ভেতর দিয়ে সবুজ লক্ষ্যের ঘরটিতে পৌঁছে দেওয়া।"}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"আমি কাকে কোথায় নিয়ে যাচ্ছি?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"উপরের বাঁ দিক থেকে শুরু করা ছোট্ট মানুষটিকে আপনি নিচের ডান দিকের সবুজ বৃত্তটিতে পৌঁছে দিচ্ছেন, আর পথে লাল ডোরাকাটা ঘরগুলো এড়িয়ে চলছেন।"},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"আমি বাঁ দিকে ঘোরাতে বললে মানুষটি ডান দিকে ঘোরে!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"মানুষটি এখন যে দিকে মুখ করে আছে, তার সাপেক্ষেই ঘোরে। তাই মুখ যদি ডান দিকে থাকে এবং সে বাঁ দিকে ঘোরে, তাহলে মানুষটির মুখ উপরের দিকে চলে যাবে।"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"ওহ না! আপনি তো গোলকধাঁধার কিনারা দিয়ে পড়ে যাওয়ার চেষ্টা করলেন!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"উফ! আপনি দেয়ালে গিয়ে ধাক্কা খেলেন!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"উফ! আপনি আগুনের মধ্যে হেঁটে ঢুকে গেলেন!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"ইয়াক! আপনি পটির উপর দিয়ে হেঁটে গেলেন! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"মানুষটিকে এক ঘর সামনে এগিয়ে নেয়"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"মানুষটিকে ৯০ ডিগ্রি বাঁ দিকে ঘোরায়"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"মানুষটিকে ৯০ ডিগ্রি ডান দিকে ঘোরায়"}]}]}]
---

আপনার প্রথম অনুশীলনীতে স্বাগতম!

এই অনুশীলনীর উদ্দেশ্য হলো শেখার পরিবেশটি কীভাবে কাজ করে তার সঙ্গে আপনাকে পরিচয় করিয়ে দেওয়া। আপনার কাজ হলো বাঁ দিকে যে গোলকধাঁধাটি দেখতে পাচ্ছেন, ছোট্ট মানুষটিকে নির্দেশ দিয়ে সেটি সমাধান করা। মানুষটিকে যে নির্দেশগুলো মেনে চলতে হবে তার সবগুলো আপনি লিখে ফেলবেন, তারপর **কোড রান করুন** বোতামে ক্লিক করলে সে সেগুলো অনুসরণ করবে।

আপনি যে তিনটি নির্দেশ ব্যবহার করতে পারেন সেগুলো হলো:

- `move()` (চলা) মানুষটিকে এক ধাপ সামনে এগিয়ে নেয়
- `turnLeft()` (বাঁ দিকে ঘোরা) মানুষটিকে বাঁ দিকে ঘোরায় (সে এখন যে দিকে মুখ করে আছে তার সাপেক্ষে)
- `turnRight()` (ডান দিকে ঘোরা) মানুষটিকে ডান দিকে ঘোরায় (সে এখন যে দিকে মুখ করে আছে তার সাপেক্ষে)

আপনি দেখতে পাচ্ছেন যে বাঁ দিকে প্রথম তিনটি নির্দেশ আমরা আগেই লিখে দিয়েছি। শুরুতে **“কোড রান করুন”** বোতামে ক্লিক করে দেখুন সেগুলো কী করে। তারপর আপনার মানুষটিকে গোলকধাঁধার শেষ পর্যন্ত পৌঁছে দিতে **আরও নির্দেশ যোগ করুন**। প্রতিটি নির্দেশ আলাদা লাইনে লিখুন, তারপর সবগুলো একসঙ্গে চালাতে **কোড রান করুন** চাপুন।

নিয়মিত নিজের কোড রান করার অভ্যাস গড়ে তোলা ভালো!

গোলকধাঁধাটি সমাধান করার পর আপনি ড্যাশবোর্ডে ফিরে গিয়ে পরের পাঠটি শুরু করতে পারেন।
