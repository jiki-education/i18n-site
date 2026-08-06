---
lang: "hi"
type: "exercise"
slug: "collatz-conjecture"
title: "कोलैट्ज़ अनुमान"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/collatz-conjecture"
en_md5: "6fbe47d0456ca4f5db8e74b3f6de3cb0"
governance_sha: "c80036b"
content_version: "83140e8e06dc"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"calculateCollatzSteps.name","english":"Calculate Collatz steps","target":"कोलैट्ज़ के कदम गिनिए"},{"key":"calculateCollatzSteps.description","english":"Write a function that takes a number and returns how many steps it takes to reach 1 following the Collatz Conjecture rules: if even, divide by 2; if odd, multiply by 3 and add 1.","target":"एक फंक्शन लिखिए जो एक संख्या लेता है और कोलैट्ज़ अनुमान के नियमों के अनुसार 1 तक पहुँचने में कितने कदम लगते हैं, यह लौटाता है: यदि संख्या सम है तो उसे 2 से भाग दीजिए; यदि विषम है तो 3 से गुणा करके 1 जोड़िए।"}]},{"name":"scenarios","rows":[{"key":"number1.name","english":"Number 1","target":"संख्या 1"},{"key":"number1.description","english":"Zero steps for one.","target":"1 के लिए शून्य कदम।"},{"key":"number16.name","english":"Number 16","target":"संख्या 16"},{"key":"number16.description","english":"Divide if even.","target":"सम होने पर भाग करें।"},{"key":"number12.name","english":"Number 12","target":"संख्या 12"},{"key":"number12.description","english":"Even and odd steps.","target":"सम और विषम कदम।"},{"key":"number1000000.name","english":"Number 1000000","target":"संख्या 1000000"},{"key":"number1000000.description","english":"Large number of even and odd steps.","target":"बहुत से सम और विषम कदम।"}]},{"name":"hints","rows":[{"key":"loopUntilOne.question","english":"How do I keep going until the number reaches 1?","target":"जब तक संख्या 1 तक न पहुँच जाए, मैं कैसे चलता रहूँ?"},{"key":"loopUntilOne.answer","english":"Use a `repeat()` loop with no number — it repeats forever until you `return` out of it. Inside the loop, replace the number with the next number in the sequence, and return once it reaches 1.","target":"बिना किसी संख्या के `repeat()` लूप का इस्तेमाल कीजिए। यह तब तक हमेशा चलता रहता है जब तक आप `return` करके बाहर नहीं निकल जाते। लूप के अंदर, संख्या को अनुक्रम की अगली संख्या से बदल दीजिए, और जब यह 1 पर पहुँच जाए तब `return` करें।"},{"key":"chooseRule.question","english":"How do I decide which rule to apply on each step?","target":"हर कदम पर कौन सा नियम लागू करना है, यह मैं कैसे तय करूँ?"},{"key":"chooseRule.answer","english":"Check whether the number is even. The modulo operator does this. `number % 2 === 0` means it's even. If even, halve it. Otherwise, do `3 * number + 1`.","target":"यह जाँचने के लिए कि संख्या सम है या नहीं, मॉड्यूलो ऑपरेटर का इस्तेमाल कीजिए। `number % 2 === 0` का अर्थ है कि यह सम है। यदि सम है, तो उसका आधा कर दीजिए। नहीं तो, `3 * number + 1` कीजिए।"},{"key":"trackSteps.question","english":"How do I track the answer (the number of steps)?","target":"मैं कदमों की संख्या (उत्तर) को कैसे ट्रैक करूँ?"},{"key":"trackSteps.answer","english":"Keep a counter variable for how many times you've applied the rules. Think about what needs to happen to it each time round the loop, and what your function should return when the number reaches 1.","target":"एक काउंटर वेरिएबल रखिए जो बताए कि आपने नियम कितनी बार लागू किए हैं। सोचिए कि लूप के हर चक्कर में इसका क्या होना चाहिए, और जब संख्या 1 तक पहुँच जाए तो आपके फंक्शन को क्या लौटाना चाहिए।"}]}]}]
---

एक शाम, आपको एक पुरानी नोटबुक मिली जो रहस्यमय लिखाई से भरी हुई थी, जैसे किसी ने किसी विचार का पीछा करते-करते बहुत कुछ लिख डाला हो। एक पन्ने पर एक सवाल उभरकर आया: **क्या हर संख्या 1 तक पहुँच सकती है?** यह सवाल **कोलैट्ज़ अनुमान** नामक एक पहेली से जुड़ा था, जिसने दशकों से सोचने वालों को चकित कर रखा है।

नियम बेहद सरल लगते हैं:

1. एक संख्या चुनिए।
2. अगर वह सम है, तो उसे 2 से भाग दीजिए।
3. अगर वह विषम है, तो उसे 3 से गुणा करके 1 जोड़िए।
4. परिणाम के साथ यही प्रक्रिया दोहराइए, और ऐसा लगातार करते रहिए।

उदाहरण के लिए, 12 से शुरू करने पर:

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

दूसरी संख्या (6) से गिनने पर, 1 तक पहुँचने में 9 कदम लगे।

`collatzSteps` (कोलैट्ज़ के कदम) नाम का एक फंक्शन बनाइए जो एक इनपुट लेता है—एक संख्या। यह फंक्शन, कोलैट्ज़ अनुमान के नियमों के अनुसार, किसी भी दी गई संख्या से 1 तक पहुँचने में **कितने कदम** लगते हैं, यह लौटाए।
