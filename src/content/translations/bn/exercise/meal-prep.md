---
lang: "bn"
type: "exercise"
slug: "meal-prep"
title: "রান্নার প্রস্তুতি"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/meal-prep"
en_md5: "8bcf8310b9da1c637816c3b85a27725c"
governance_sha: "accabaea"
content_version: "21823d60cbf7"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createShoppingList.name","english":"Create Shopping List","target":"বাজারের তালিকা তৈরি করুন"},{"key":"createShoppingList.description","english":"Write a function that takes the contents of your fridge and a recipe's ingredients, and returns the items you need to buy (items in the recipe that aren't in the fridge).","target":"এমন একটি ফাংশন লিখুন, যা আপনার ফ্রিজে যা আছে আর একটি রেসিপির উপকরণগুলি নেয়, এবং যা যা কিনতে হবে সেগুলি রিটার্ন করে (রেসিপির যে উপকরণগুলি ফ্রিজে নেই)।"}]},{"name":"scenarios","rows":[{"key":"emptyFridge.name","english":"Empty fridge","target":"খালি ফ্রিজ"},{"key":"emptyFridge.description","english":"When the fridge is empty, you need to buy everything.","target":"ফ্রিজ খালি থাকলে সবকিছুই কিনতে হবে।"},{"key":"youHaveEverything.name","english":"You have everything","target":"সবকিছুই আছে"},{"key":"youHaveEverything.description","english":"When you have all ingredients, the shopping list is empty.","target":"সব উপকরণ থাকলে বাজারের তালিকা খালি থাকে।"},{"key":"oneThing.name","english":"One thing","target":"একটি জিনিস"},{"key":"oneThing.description","english":"When you're missing just one ingredient.","target":"যখন শুধু একটি উপকরণ নেই।"},{"key":"fewThings.name","english":"A few things","target":"কয়েকটি জিনিস"},{"key":"fewThings.description","english":"When you're missing a few ingredients.","target":"যখন কয়েকটি উপকরণ নেই।"}]},{"name":"hints","rows":[{"key":"realLifeApproach.question","english":"How would I do this in real life?","target":"বাস্তব জীবনে আমি এটা কীভাবে করতাম?"},{"key":"realLifeApproach.answer","english":"You'd go through the recipe one ingredient at a time and check the fridge for each. Anything missing goes on the shopping list. Your code does the same thing.","target":"আপনি রেসিপির উপকরণগুলি একটি একটি করে দেখতেন, আর প্রতিটির জন্য ফ্রিজে খুঁজে দেখতেন। যা নেই, তা বাজারের তালিকায় উঠত। আপনার কোডও ঠিক একই কাজ করে।"},{"key":"checkFridgeItem.question","english":"How do I check if a fridge item is there?","target":"ফ্রিজে কোনো জিনিস আছে কি না তা আমি কীভাবে দেখব?"},{"key":"checkFridgeItem.answer","english":"The `includes` method does this for you. Calling it on the fridge with an ingredient gives you back `true` or `false`.","target":"`includes` মেথডটি আপনার হয়ে এই কাজটি করে দেয়। ফ্রিজের উপর একটি উপকরণ দিয়ে এটি কল করলে আপনি `true` বা `false` ফেরত পাবেন।"},{"key":"buildShoppingList.question","english":"How do I build up the shopping list?","target":"বাজারের তালিকাটি আমি কীভাবে ধাপে ধাপে গড়ে তুলব?"},{"key":"buildShoppingList.answer","english":"Start with an empty array. For each recipe item that the fridge doesn't contain, `push()` it onto the shopping list.","target":"একটি খালি অ্যারে দিয়ে শুরু করুন। রেসিপির যে উপকরণগুলি ফ্রিজে নেই, তার প্রতিটিকে `push()` করে বাজারের তালিকায় যোগ করুন।"}]},{"name":"functions","rows":[{"key":"includes.description","english":"Checks whether an array contains a specific item, returning true or false.","target":"একটি অ্যারেতে নির্দিষ্ট কোনো জিনিস আছে কি না তা পরীক্ষা করে, আর ট্রু বা ফলস রিটার্ন করে।"},{"key":"includes.category","english":"Arrays","target":"অ্যারে"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"একটি অ্যারের শেষে একটি এলিমেন্ট যোগ করে, অ্যারেটিকে সরাসরি সেখানেই বদলে দেয়।"},{"key":"push.category","english":"Arrays","target":"অ্যারে"}]}]}]
---

আপনি এমন একজন মানুষ, যিনি প্রতিদিন দোকানে গিয়ে রাতের খাবারের জন্য প্রয়োজনীয় উপকরণগুলি কিনে আনতে পছন্দ করেন। এতে একটু হাঁটাচলা করার আর পাড়ার দোকানদারের সাথে গল্প করার একটা চমৎকার অজুহাতও পাওয়া যায়।

প্রতিদিন আপনি একটি রেসিপি বেছে নেন, তারপর ফ্রিজে কী কী আছে তা দেখে নেন, আর কী কী কিনতে হবে তা লিখে রাখেন।

এখন আপনি ঠিক করেছেন, কঠিন কাজটুকু আপনার হয়ে করে দেওয়ার জন্য একটি প্রোগ্রাম লিখে জীবনটা একটু সহজ করে নেবেন! এটি আপনার তালিকায় কী কী আছে তা ফ্রিজে যা আছে তার সাথে মিলিয়ে দেখে, আর পার্থক্যটুকু আউটপুট করে।

আপনার কাজ হলো `shoppingList(fridgeContents, recipeItems)` (বাজারের তালিকা) নামে একটি ফাংশন লেখা। এটি দুটি ইনপুট নেয়: আপনার ফ্রিজে যা যা আছে তা স্ট্রিংয়ের একটি অ্যারে হিসেবে, আর রেসিপির উপকরণগুলি, সেগুলিও স্ট্রিংয়ের একটি অ্যারে হিসেবে। যা যা কিনতে হবে সেগুলি এটি স্ট্রিংয়ের একটি অ্যারে হিসেবে রিটার্ন করবে।

উদাহরণস্বরূপ:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### push মেথড

অনুশীলনীটি সমাধান করতে আপনাকে `.push(element)` মেথড ব্যবহার করে আপনার অ্যারেটি ধাপে ধাপে গড়ে তুলতে হবে। আপনার কোডে আপনি শুধু একটিই নতুন অ্যারে তৈরি করতে পারবেন। কী করতে হবে তা নিয়ে সন্দেহ থাকলে আগের ভিডিওটি আরেকবার দেখে নিন।

আপনি চাইলে `includes` মেথডটিও ব্যবহার করতে পারেন (মনে করিয়ে দেওয়ার জন্য নিচে দেখুন)।

শুভকামনা!
