---
lang: "hi"
type: "exercise"
slug: "plant-the-flowers"
title: "फूल लगाइए"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/plant-the-flowers"
en_md5: "4cdf23fd99e55e08a5eece1751d712e2"
governance_sha: "c80036b"
content_version: "99dd2472ad07"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"flowerCount","english":"Expected 9 flowers, but found {{got}}.","target":"9 फूल अपेक्षित थे, लेकिन {{got}} मिले।"},{"key":"missingFlowerAt10","english":"Missing a flower at position 10.","target":"स्थान 10 पर एक फूल नहीं लगा।"},{"key":"missingFlowerAt50","english":"Missing a flower at position 50.","target":"स्थान 50 पर एक फूल नहीं लगा।"},{"key":"missingFlowerAt90","english":"Missing a flower at position 90.","target":"स्थान 90 पर एक फूल नहीं लगा।"},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try to find a way to make it shorter.","target":"आपके हल में कोड की बहुत ज़्यादा पंक्तियाँ हैं। इसे छोटा करने का कोई तरीका ढूँढिए।"}]},{"name":"tasks","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"9 फूल लगाइए"},{"key":"plantFlowers.description","english":"Use a variable and a repeat loop to plant 9 flowers at positions 10, 20, 30, ..., 90.","target":"एक वेरिएबल और एक `repeat` लूप का इस्तेमाल करके स्थान 10, 20, 30, ..., 90 पर 9 फूल लगाइए।"}]},{"name":"scenarios","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"9 फूल लगाइए"},{"key":"plantFlowers.description","english":"Plant flowers at positions 10, 20, 30, 40, 50, 60, 70, 80, and 90.","target":"स्थान 10, 20, 30, 40, 50, 60, 70, 80 और 90 पर फूल लगाइए।"}]},{"name":"hints","rows":[{"key":"stuck.question","english":"I'm totally stuck","target":"मैं बिलकुल अटक गया हूँ।"},{"key":"stuck.answer","english":"Check the recent videos on how to use repeat loops and how to update variables to track state. They should tell you everything you need to know.","target":"हाल के वीडियो देखिए जिनमें `repeat` लूप का इस्तेमाल करना और स्थिति पर नज़र रखने के लिए वेरिएबल अपडेट करना बताया गया है। उनमें आपको वह सब बताया गया होगा जो आपको जानना चाहिए।"}]},{"name":"functions","rows":[{"key":"plant.description","english":"Plants a flower at the given **position**.","target":"दिए गए **स्थान** पर एक फूल लगाता है।"},{"key":"plant.category","english":"Gardening","target":"बागवानी"}]},{"name":"describers","rows":[{"key":"plant","english":"planted a flower at position ${arg1}","target":"स्थान ${arg1} पर एक फूल लगाया।"}]}]},{"heading":"Shared \"flower-planting\" messages","note":"Shared by every exercise in the flower-planting category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"positionNumber","english":"Position must be a number","target":null}]}]}]
---

आप एक स्वचालित फूल लगाने की मशीन बना रहे हैं।

इसे पूरे लॉन में 10 के अंतराल पर फूल लगाने चाहिएँ। इसलिए पहला फूल स्थान 10 पर होना चाहिए, दूसरा 20 पर, इत्यादि।

आपके पास एक `plant(position)` (स्थान पर फूल लगाना) फंक्शन है जो इनपुट के रूप में एक स्थान लेता है। उदाहरण के लिए: `plant(10)` स्थान 10 पर एक फूल लगाता है।

आपको यह अभ्यास **कोड की 5 पंक्तियों** में हल करना है। इसलिए आपको सिर्फ `plant(10)`, `plant(20)` वगैरह लिखने के बजाय कोई और तरीका ढूँढना होगा।

शुभकामनाएँ!
