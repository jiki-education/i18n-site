---
lang: "hi"
type: "exercise"
slug: "three-letter-acronym"
title: "तीन अक्षरों का एक्रोनिम"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/three-letter-acronym"
en_md5: "89ed5e0d5e09a14bbc4ae5dd39768af5"
governance_sha: "c80036b"
content_version: "b807b1122f5d"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"आपके हल में कोड की बहुत सारी लाइनें हैं। क्या आप इसे छोटा कर सकते हैं?"}]},{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":"एक्रोनिम फंक्शन बनाइए"},{"key":"createAcronymFunction.description","english":"Write an acronym function that takes three words and returns a three-letter acronym formed by taking the first letter of each word.","target":"एक ऐसा एक्रोनिम फंक्शन लिखिए जो तीन शब्द लेता है और हर शब्द का पहला अक्षर लेकर तीन अक्षरों का एक्रोनिम लौटाता है।"},{"key":"solveInThreeLines.name","english":"Solve in 3 lines of code","target":"कोड की 3 लाइनों में हल कीजिए"},{"key":"solveInThreeLines.description","english":"Can you solve this exercise with only 3 lines of code?","target":"क्या आप इस अभ्यास को सिर्फ 3 कोड लाइनों में हल कर सकते हैं?"}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Portable Network Graphics","target":"पोर्टेबल नेटवर्क ग्राफिक्स"},{"key":"png.description","english":"Create the acronym 'PNG' from 'Portable', 'Network', 'Graphics'.","target":"'Portable', 'Network', और 'Graphics' से एक्रोनिम 'PNG' बनाइए।"},{"key":"css.name","english":"Cascading Style Sheets","target":"कैस्केडिंग स्टाइल शीट"},{"key":"css.description","english":"Create the acronym 'CSS' from 'Cascading', 'Style', 'Sheets'.","target":"'Cascading', 'Style', और 'Sheets' से एक्रोनिम 'CSS' बनाइए।"},{"key":"www.name","english":"World Wide Web","target":"वर्ल्ड वाइड वेब"},{"key":"www.description","english":"Create the acronym 'WWW' from 'World', 'Wide', 'Web'.","target":"'World', 'Wide', और 'Web' से एक्रोनिम 'WWW' बनाइए।"},{"key":"lol.name","english":"Lowercase words","target":"लोअरकेस शब्द"},{"key":"lol.description","english":"Create the acronym 'lol' from 'laugh', 'out', 'loud'.","target":"'laugh', 'out', और 'loud' से एक्रोनिम 'lol' बनाइए।"},{"key":"bonus1.name","english":"3 lines of code","target":"3 कोड लाइनें"},{"key":"bonus1.description","english":"Solve the exercise with only 3 lines of code.","target":"अभ्यास को सिर्फ 3 कोड लाइनों में हल कीजिए।"}]},{"name":"hints","rows":[{"key":"firstCharacter.question","english":"How do I get just the first character of a word?","target":"मैं किसी शब्द का सिर्फ पहला अक्षर कैसे निकालूँ?"},{"key":"firstCharacter.answer","english":"Indexing into the string. The first character is at index `[0]`.","target":"स्ट्रिंग में इंडेक्सिंग करके। पहला अक्षर इंडेक्स `[0]` पर होता है।"},{"key":"buildResult.question","english":"How do I build the three-letter result?","target":"मैं तीन अक्षरों का परिणाम कैसे बनाऊँ?"},{"key":"buildResult.answer","english":"Take the first character of each word and join them together in order using concatenation (`+`) or a template string.","target":"हर शब्द का पहला अक्षर लीजिए और उन्हें क्रम से जोड़ने के लिए कॉनकैटिनेशन (`+`) या टेम्पलेट स्ट्रिंग का उपयोग कीजिए।"}]}]}]
---

एक्रोनिम एक ऐसा शब्द है जो दूसरे शब्दों के पहले अक्षरों से बनता है। उदाहरण के लिए, 'Portable Network Graphics' का एक्रोनिम 'PNG' बनता है।

एक फंक्शन बनाइए जिसका नाम `acronym` (एक्रोनिम) है। यह फंक्शन तीन शब्द लेता है और हर शब्द का पहला अक्षर लेकर तीन अक्षरों का एक्रोनिम लौटाता है।

उदाहरण के लिए, अगर 'Cascading', 'Style' और 'Sheets' दिए जाएँ, तो आपको 'CSS' लौटाना चाहिए।
