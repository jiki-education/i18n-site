---
lang: "hi"
type: "exercise"
slug: "reverse-string"
title: "स्ट्रिंग उलटना"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/reverse-string"
en_md5: "d01eea6cf18d953304631f4a8015c3ea"
governance_sha: "c80036b"
content_version: "3be9a9fbf7c0"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"reverseStrings.name","english":"Reverse Strings","target":"स्ट्रिंग उलटिए"},{"key":"reverseStrings.description","english":"Reverse a string so that it reads from right to left instead of left to right.","target":"एक स्ट्रिंग को उलटिए ताकि वह बाएँ से दाएँ के बजाय दाएँ से बाएँ पढ़ी जाए।"}]},{"name":"scenarios","rows":[{"key":"reverseEmptyString.name","english":"Empty string","target":"खाली स्ट्रिंग"},{"key":"reverseEmptyString.description","english":"An empty string should return an empty string when reversed.","target":"खाली स्ट्रिंग को उलटने पर खाली स्ट्रिंग ही लौटानी चाहिए।"},{"key":"reverseWord.name","english":"A word","target":"एक शब्द"},{"key":"reverseWord.description","english":"Reverse the word 'robot'.","target":"शब्द 'robot' को उलटिए।"},{"key":"reverseCapitalizedWord.name","english":"A capitalized word","target":"बड़े अक्षर से शुरू होने वाला शब्द"},{"key":"reverseCapitalizedWord.description","english":"Reverse a capitalized word 'Ramen'.","target":"बड़े अक्षर से शुरू होने वाले शब्द 'Ramen' को उलटिए।"},{"key":"reverseSentencePunctuation.name","english":"Sentence with punctuation","target":"विराम चिह्न वाला वाक्य"},{"key":"reverseSentencePunctuation.description","english":"Reverse a sentence with punctuation 'I'm hungry!'","target":"विराम चिह्न वाले वाक्य 'I'm hungry!' को उलटिए।"},{"key":"reversePalindrome.name","english":"Palindrome","target":"पैलिंड्रोम"},{"key":"reversePalindrome.description","english":"A palindrome remains the same when reversed.","target":"पैलिंड्रोम को उलटने पर भी वह वैसा का वैसा रहता है।"},{"key":"reverseEvenSizedWord.name","english":"Even-sized word","target":"सम अक्षरों वाला शब्द"},{"key":"reverseEvenSizedWord.description","english":"Reverse an even-sized word 'drawer'.","target":"सम अक्षरों वाले शब्द 'drawer' को उलटिए।"},{"key":"reverseWideCharacters.name","english":"Wide characters","target":"चौड़े अक्षर"},{"key":"reverseWideCharacters.description","english":"Reverse wide Unicode characters '子猫'.","target":"चौड़े यूनिकोड अक्षरों '子猫' को उलटिए।"},{"key":"reverseEmojiFamily.name","english":"Emoji Family","target":"इमोजी परिवार"},{"key":"reverseEmojiFamily.description","english":"Reverse an emoji family.","target":"एक इमोजी परिवार को उलटिए।"},{"key":"reverseEmojiRainbowFlag.name","english":"Rainbow Flag","target":"इंद्रधनुष झंडा"},{"key":"reverseEmojiRainbowFlag.description","english":"Make a rainbow flag by reversing.","target":"उलटकर एक इंद्रधनुष झंडा बनाइए।"}]},{"name":"hints","rows":[{"key":"reverseByHand.question","english":"How would I reverse a word by hand?","target":"मैं किसी शब्द को हाथ से कैसे उलटूँ?"},{"key":"reverseByHand.answer","english":"You'd read it left-to-right but write it right-to-left. Equivalently, you'd take each letter in turn and put it in front of what you've written so far.","target":"आप इसे बाएँ से दाएँ पढ़ेंगे, पर दाएँ से बाएँ लिखेंगे। या, आप हर अक्षर को बारी-बारी से लेकर अब तक जो लिखा है उसके आगे लगाएँगे।"},{"key":"mapToCode.question","english":"How does that map to code?","target":"यह तरीका कोड में कैसे लिखा जाए?"},{"key":"mapToCode.answer","english":"Loop through the input string character by character. For each character, build the result by prepending. That means putting it at the FRONT of your result, not the back.","target":"इनपुट स्ट्रिंग के हर अक्षर पर लूप चलाइए। हर अक्षर के लिए, परिणाम को आगे जोड़ते हुए बनाइए। इसका मतलब है उसे अपने परिणाम के आगे जोड़ना, पीछे नहीं।"},{"key":"prepend.question","english":"How do I 'prepend' instead of append?","target":"पीछे जोड़ने के बजाय आगे कैसे जोड़ें?"},{"key":"prepend.answer","english":"With the `+` operator, prepending is just a matter of order. Instead of `result + char` (which appends), use `char + result` (which prepends).","target":"`+` ऑपरेटर के साथ, आगे जोड़ना सिर्फ क्रम का खेल है। `result + char` (जो पीछे जोड़ता है) के बजाय, `char + result` (जो आगे जोड़ता है) इस्तेमाल कीजिए।"}]}]}]
---

प्रोग्रामिंग में स्ट्रिंग को उलटना (उन्हें बाएँ से दाएँ नहीं, बल्कि दाएँ से बाएँ पढ़ना) एक हैरान करने वाला आम काम है।

उदाहरण के लिए, बायोइन्फॉर्मेटिक्स में, DNA या RNA स्ट्रिंग के अनुक्रम को उलटना विभिन्न विश्लेषणों के लिए अक्सर ज़रूरी होता है, जैसे कि पूरक स्ट्रैंड खोजना या पैलिंड्रोमिक अनुक्रमों की पहचान करना।

आपको एक फंक्शन बनाना है जिसका नाम `reverse` (उलटना) हो, जो एक स्ट्रिंग इनपुट के रूप में लेता है और उसका उलटा हुआ संस्करण लौटाता है।

उदाहरण:

- "stressed" को "desserts" में बदलना।
- "strops" को "sports" में बदलना।
- "racecar" को "racecar" में बदलना (एक पैलिंड्रोम)।

### वे आखिरी दो सिनेरियो…

आखिरी दो सिनेरियो कुछ अजीब लगते हैं, है न? आखिर हो क्या रहा है?

पता चला है कि बहुत सी इमोजी असल में दूसरी इमोजी को मिलाकर बनी होती हैं, जिन्हें छिपी हुई (शून्य चौड़ाई वाली) स्पेस से जोड़ा जाता है।

परिवार वाली इमोजी (👩‍👩‍👧‍👦) दो महिलाओं और दो बच्चों से बनी है। जब इसे उलटा जाता है, तो आपको अलग-अलग अक्षर (👦‍👧‍👩‍👩) दिखते हैं।

दूसरी इमोजी एक इंद्रधनुष और एक झंडे (🌈‍️🏳) से बनी है। जब आप इसे उलटकर झंडा फिर इंद्रधनुष करते हैं, तो वह एक इंद्रधनुषी झंडा (🏳️‍🌈️) बन जाती है!

अगर आप अपना परिणाम एक-एक अक्षर करके बनाएँगे, तो ये सही से काम करेंगी। अगर आप इसके बजाय कोई चालाकी भरा तरीका अपनाएँगे, तो हो सकता है कि इमोजी टूट जाएँ।
