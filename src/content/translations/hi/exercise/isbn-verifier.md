---
lang: "hi"
type: "exercise"
slug: "isbn-verifier"
title: "आईएसबीएन जाँच"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/isbn-verifier"
en_md5: "aaa075db8f213a7a09416e8003eafb94"
governance_sha: "c80036b"
content_version: "8e405021f010"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"validateBasicIsbn.name","english":"Validate a basic ISBN","target":null},{"key":"validateBasicIsbn.description","english":"Write a function called isValidIsbn that takes an ISBN-10 string and returns true if valid, false if not. ISBN-10s contain dashes which should be skipped. Multiply each digit by a weight counting down from 10 to 1, sum them, and check if the total is divisible by 11.","target":null},{"key":"handleXCheckDigit.name","english":"Handle X as a check digit","target":null},{"key":"handleXCheckDigit.description","english":"Sometimes an ISBN ends with an X, which represents 10. Update your function to handle X in the last position.","target":null},{"key":"handleEdgeCases.name","english":"Handle edge cases","target":null},{"key":"handleEdgeCases.description","english":"Make your function robust: handle ISBNs without dashes, reject invalid characters, reject X in non-last positions, and ensure exactly 10 digits are processed.","target":null},{"key":"useContinue.name","english":"Bonus: skip dashes with continue","target":null},{"key":"useContinue.description","english":"Rather than only doing work when a character is a digit, use continue to skip straight past the dashes and move on to the next character.","target":null}]},{"name":"scenarios","rows":[{"key":"isbnValid.name","english":"Valid ISBN","target":null},{"key":"isbnValid.description","english":"A valid ISBN-10 should return true.","target":null},{"key":"isbnValidCheckDigitX.name","english":"Valid ISBN with X as check digit","target":null},{"key":"isbnValidCheckDigitX.description","english":"A valid ISBN-10 with check digit 'X' should return true.","target":null},{"key":"isbnValidNoDashes.name","english":"Valid ISBN without dashes","target":null},{"key":"isbnValidNoDashes.description","english":"A valid ISBN-10 without separating dashes should return true.","target":null},{"key":"isbnValidNoDashesXCheck.name","english":"Valid ISBN without dashes and X as check digit","target":null},{"key":"isbnValidNoDashesXCheck.description","english":"A valid ISBN-10 without dashes and check digit 'X' should return true.","target":null},{"key":"isbnInvalidCheckDigit.name","english":"Invalid ISBN check digit","target":null},{"key":"isbnInvalidCheckDigit.description","english":"An ISBN-10 with an incorrect check digit should return false.","target":null},{"key":"isbnInvalidCharacter.name","english":"Check digit is a character other than X","target":null},{"key":"isbnInvalidCharacter.description","english":"An ISBN-10 containing an invalid character should return false.","target":null},{"key":"isbnInvalidCharacterNotZero.name","english":"Invalid check digit not treated as zero","target":null},{"key":"isbnInvalidCharacterNotZero.description","english":"An invalid check digit should not be treated as zero.","target":null},{"key":"isbnInvalidNonNumeric.name","english":"Invalid character in ISBN","target":null},{"key":"isbnInvalidNonNumeric.description","english":"Invalid characters in ISBN should not be ignored.","target":null},{"key":"isbnInvalidXPosition.name","english":"X only valid as a check digit","target":null},{"key":"isbnInvalidXPosition.description","english":"An 'X' should only be valid as a check digit.","target":null},{"key":"isbnInvalidMissingCheckDigit.name","english":"ISBN without check digit","target":null},{"key":"isbnInvalidMissingCheckDigit.description","english":"An ISBN-10 without a check digit should return false.","target":null},{"key":"isbnInvalidTooLong.name","english":"Too long ISBN","target":null},{"key":"isbnInvalidTooLong.description","english":"An ISBN-10 that is too long should return false.","target":null},{"key":"isbnInvalidTooShort.name","english":"Too short ISBN","target":null},{"key":"isbnInvalidTooShort.description","english":"An ISBN-10 that is too short should return false.","target":null},{"key":"isbnInvalidEmpty.name","english":"Empty ISBN","target":null},{"key":"isbnInvalidEmpty.description","english":"An empty ISBN string should return false.","target":null},{"key":"isbnInvalidLengthNine.name","english":"ISBN is 9 characters","target":null},{"key":"isbnInvalidLengthNine.description","english":"An input with 9 characters should return false.","target":null},{"key":"isbnInvalidNonNumericBeforeCheck.name","english":"Invalid character before checking length","target":null},{"key":"isbnInvalidNonNumericBeforeCheck.description","english":"Invalid characters should not be ignored before checking length.","target":null},{"key":"isbnInvalidExtraLength.name","english":"Input too long but contains a valid ISBN","target":null},{"key":"isbnInvalidExtraLength.description","english":"An input longer than 10 characters should return false.","target":null},{"key":"isbnBonusUseContinue.name","english":"Skipped dashes with continue","target":null},{"key":"isbnBonusUseContinue.description","english":"Your solution works and uses continue to skip over the dashes.","target":null}]},{"name":"hints","rows":[{"key":"howChecked.question","english":"How does an ISBN-10 actually get checked?","target":null},{"key":"howChecked.answer","english":"Each of the 10 digits is multiplied by a decreasing weight. The first digit by 10, the second by 9, all the way down to the last by 1. You sum all those products. If the total is divisible by 11, the ISBN is valid.","target":null},{"key":"dashes.question","english":"What do I do with the dashes?","target":null},{"key":"dashes.answer","english":"Dashes are just for human readability. Skip over them entirely. They don't count as a digit and they don't move you forward in the weighting.","target":null},{"key":"trackWeight.question","english":"How do I keep track of the weight?","target":null},{"key":"trackWeight.answer","english":"Start a multiplier variable at 10. Every time you process a digit, multiply it by the current multiplier, add the product to the running sum, then decrease the multiplier by 1.","target":null},{"key":"stringToNumber.question","english":"How do I turn the string into a number?","target":null},{"key":"stringToNumber.answer","english":"You have two options. Firstly, the intended way in this exercise is to find a way using the `indexOf` method. Have a think about that. If you can't figure that out, check the next hint for an answer.","target":null},{"key":"stringToNumberAgain.question","english":"No seriously, how do I turn the string into a number?","target":null},{"key":"stringToNumberAgain.answer","english":"Two options. Firstly you can use the `Number()` function (with a capital \"N\"), so `Number(\"5\")` gives `5`. Read the <a href=\"/concepts/type-conversion\" target=\"_blank\" rel=\"noopener noreferrer\">Type Conversion</a> concept page if you'd like a refresher. There's also a neat `indexOf` trick worth exploring afterwards.","target":null},{"key":"handleX.question","english":"How do I handle 'X'. That's not a digit, is it?","target":null},{"key":"handleX.answer","english":"'X' is special. It represents the value 10, but only as the very last character. Treat it like a digit with value 10 when you see it at the end, and reject the ISBN if 'X' appears anywhere else.","target":null},{"key":"exactlyTenDigits.question","english":"How do I make sure there are exactly 10 digits?","target":null},{"key":"exactlyTenDigits.answer","english":"Your multiplier started at 10 and decreased by 1 per digit. If you processed exactly 10 digits, it'll have ended up at 0. Anything else means the wrong number of digits, so reject it.","target":null},{"key":"finalCheck.question","english":"What's the final validity check?","target":null},{"key":"finalCheck.answer","english":"After processing everything, the ISBN is valid if the total sum is divisible by 11 (i.e. `sum % 11 == 0`).","target":null}]},{"name":"checks","rows":[{"key":"mustUseContinue","english":"So close! For this bonus, use `continue` to skip the dashes.","target":null},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long.","target":null}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":null},{"key":"number.category","english":"Type Conversion","target":null},{"key":"includes.description","english":"Check whether a string contains a smaller string (provided by level stdlib)","target":null},{"key":"includes.category","english":"String Operations","target":null},{"key":"indexOf.description","english":"Find the position of a smaller string within a string, or -1 if it isn't found (provided by level stdlib)","target":null},{"key":"indexOf.category","english":"String Operations","target":null}]}]}]
---

हर किताब का एक आईएसबीएन होता है, यह एक 10 अंकों की संख्या होती है जो उसे विशिष्ट रूप से पहचानती है। हर आईएसबीएन अद्वितीय होता है और एक तय प्रारूप का पालन करता है। एक औपचारिक सत्यापन प्रक्रिया भी होती है, जो जाँचती है कि कोई स्ट्रिंग आईएसबीएन है या नहीं — इस अभ्यास में आप यही बनाने वाले हैं।

आईएसबीएन में आमतौर पर हाइफ़न होते हैं और ये कुछ इस तरह दिखते हैं: `3-598-21508-8`

(13 अंकों वाले आईएसबीएन भी होते हैं, लेकिन इस अभ्यास के लिए उन्हें नज़रअंदाज़ किया जा सकता है!)

### आईएसबीएन सत्यापित करना

आईएसबीएन सत्यापित करने के लिए हम:

- सबसे बाएँ से शुरू करके, हर अंक को उसके भार (10 से 1 तक घटते क्रम में) से गुणा करके सभी का जोड़ निकालते हैं।
- उस जोड़ को 11 से भाग देने पर बचा शेषफल निकालते हैं।
- जाँचते हैं कि वह शेषफल शून्य है या नहीं।

उदाहरण के लिए, आईएसबीएन `3-598-21508-8` के लिए हम जाँचेंगे कि:

```
(3*10 + 5*9 + 9*8 + 8*7 + 2*6 + 1*5 + 5*4 + 0*3 + 8*2 + 8*1) % 11 === 0
```

क्योंकि परिणाम 0 आता है, इससे सिद्ध होता है कि हमारा आईएसबीएन मान्य है।

कुछ और ज़रूरी बातें:

- कभी-कभी आईएसबीएन के अंत में X हो सकता है। ऐसे में, X का मतलब `10` होता है। अगर X कहीं और आता है, तो आईएसबीएन अमान्य है।
- आईएसबीएन को हाइफ़न के साथ या बिना हाइफ़न के लिखा जा सकता है।
- कोई भी अन्य अक्षर आईएसबीएन को अमान्य बना देते हैं।

### आपका काम

आपको एक `isValidIsbn(isbn)` (आईएसबीएन के मान्य होने की जाँच करने वाला फंक्शन) नाम का फंक्शन बनाना है, जो एक आईएसबीएन स्ट्रिंग लेकर, मान्य होने पर `true` और अमान्य होने पर `false` लौटाए।

### Number(...) फंक्शन

एक चीज़ जो हमने अब तक कवर नहीं की और जो आपको जानना ज़रूरी है, वह है `Number(str)` फंक्शन। यह फंक्शन एक स्ट्रिंग लेता है और उस स्ट्रिंग को एक संख्या के रूप में लौटाता है। तो अगर आप `Number("1234")` लिखते हैं, तो आपको `1234` मिलता है। यह फंक्शन थोड़ा अजीब है क्योंकि यह बड़े अक्षर से शुरू होता है। अभी इसकी चिंता न करें — हम बहुत बाद में समझाएँगे कि ऐसा क्यों होता है।

<a href="/concepts/type-conversion" target="_blank" rel="noopener noreferrer">टाइप कन्वर्ज़न कॉन्सेप्ट पेज</a> पर ज़्यादा जानें।

### जो आपने अभी सीखा, उसका इस्तेमाल

पिछले अभ्यास की तरह, इस अभ्यास को हल करने के कई मान्य तरीके हो सकते हैं, लेकिन हम चाहते हैं कि आपका हल `continue` स्टेटमेंट का इस्तेमाल करे।

बोनस सिनेरियो में आपको इस अभ्यास को 22 लाइनों के कोड में हल करना है। इससे भी छोटे हल मौजूद हैं, लेकिन अगर आप 22 लाइनों तक पहुँच गए, तो आपने ऑप्टिमाइज़ेशन का अच्छा काम किया है।

मज़े कीजिए!
