---
lang: "hi"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "i18n"
source_path: "locales/hi/curriculum/exercises/two-fer"
en_md5: "259ef6df34222c26ac1869815e38f66e"
governance_sha: "0e11138"
content_version: "f605355b4af0"
published_at: "2026-08-10"
forum_topic_id: 1263
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"आपने छह से ज़्यादा कोड की लाइनें उपयोग की हैं।"}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"twoFer फंक्शन बनाइए"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"एक twoFer फंक्शन लिखिए जो एक नाम लेता है और 'One for [name], one for me.' लौटाता है। अगर कोई नाम नहीं दिया गया (खाली स्ट्रिंग), तो नाम की जगह 'you' का इस्तेमाल कीजिए।"},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"छह कोड की लाइनों में हल कीजिए"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"क्या आप इसे सिर्फ छह कोड की लाइनों में हल कर सकते हैं?"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"कोई नाम नहीं दिया गया"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"कोई नाम नहीं दिया है इसलिए 'One for you, one for me.' लौटाइए।"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"Alice नाम दिया गया"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"उसका नाम 'Alice' है इसलिए 'One for Alice, one for me.' लौटाइए।"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"Tom नाम दिया गया"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"उसका नाम 'Tom' है इसलिए 'One for Tom, one for me.' लौटाइए।"},{"key":"bonus1.name","english":"Six lines of code","target":"छह कोड की लाइनें"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"अभ्यास को सिर्फ छह कोड की लाइनों में हल करना है।"}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"इनपुट के आधार पर क्या बदलता है?"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"बस एक चीज़। वाक्य के बीच में नाम। अगर आपको कोई नाम दिया गया है, तो उसका इस्तेमाल कीजिए। नहीं, तो डिफॉल्ट `\"you\"` का इस्तेमाल कीजिए।"},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"मैं कैसे जाँचूँ कि मुझे कोई नाम दिया गया है या नहीं?"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"एक `if` स्टेटमेंट जो इनपुट की तुलना खाली स्ट्रिंग `\"\"` से करता है। अगर वह खाली है, तो `\"you\"` का इस्तेमाल कीजिए। वरना, इनपुट का इस्तेमाल कीजिए।"},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"मैं अंतिम वाक्य कैसे बनाऊँ?"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"तीन हिस्सों (`\"One for \"`, चुना गया नाम, और `\", one for me.\"`) को जोड़िए कंकैटनेशन (`+`) या टेम्पलेट स्ट्रिंग का इस्तेमाल करके।"}]}]}]
---

अब हम उस सरल "Hello" अभ्यास पर आगे बढ़ेंगे और कुछ और नियम जोड़ेंगे।

कुछ अंग्रेज़ी बोलियों में जब 'two for' तेज़ी से बोलते हैं तो वह 'two fer' जैसा सुनाई देता है। 'Two-for-one' का मतलब है कि एक के साथ एक मुफ्त।

सोचिए कि एक बेकरी पर छुट्टियों के लिए ऑफर चल रहा है - एक के साथ एक मुफ्त। आप वह ऑफर उपयोग करते हैं और तय करते हैं कि अतिरिक्त कुकी किसी और को दे देंगे।

आपका काम यह तय करना है कि अतिरिक्त कुकी देते समय आप क्या कहेंगे।

- अगर आपको उस व्यक्ति का नाम पता है (जैसे Alice), तो आप कहेंगे: `"One for Alice, one for me."`
- अगर आपको नाम नहीं पता, तो आप कहेंगे: `"One for you, one for me."`

`twoFer(name)` (एक के दाम में दो) नाम का फंक्शन बनाइए जो उचित संवाद लौटाता है।

यहाँ कुछ उदाहरण दिए गए हैं:

| फंक्शन कॉल         | लौटाता है                       |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

बोनस के लिए क्या आप इसे **सिर्फ 6 कोड की लाइनों** में लिख सकते हैं?

शुभकामनाएँ!
