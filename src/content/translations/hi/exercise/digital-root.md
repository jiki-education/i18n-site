---
lang: "hi"
type: "exercise"
slug: "digital-root"
title: "डिजिटल रूट"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/digital-root"
en_md5: "554e48db79141f8304144e152643a47c"
governance_sha: "c80036b"
content_version: "c905b4f5caec"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"sumTheDigits.name","english":"Sum the digits","target":"अंक जोड़िए"},{"key":"sumTheDigits.description","english":"Write a function called digitalRoot that takes a number and adds its digits together. For numbers that are already a single digit, and for numbers whose digits sum to a single digit, this first pass is enough.","target":"digitalRoot नाम का एक फंक्शन बनाइए जो एक संख्या लेता है और उसके अंकों को जोड़ता है। जो संख्या पहले से एक अंक की हो, या जिसके अंकों का जोड़ एक अंक आता हो, उसके लिए यह पहला चरण ही काफी है।"},{"key":"collapseToSingleDigit.name","english":"Keep collapsing until one digit is left","target":"एक अंक बचने तक जोड़ते जाइए"},{"key":"collapseToSingleDigit.description","english":"Sometimes summing the digits once still leaves more than one digit (for example 942 sums to 15). Keep summing the digits of the result until a single digit remains.","target":"कभी-कभी एक बार अंक जोड़ने के बाद भी एक से अधिक अंक बचते हैं (जैसे 942 का जोड़ 15 होता है)। तब तक परिणाम के अंकों को जोड़ते रहिए जब तक कि एक अंक बचता है।"},{"key":"keepItTight.name","english":"Bonus: keep it short","target":"बोनस: इसे संक्षिप्त रखिए"},{"key":"keepItTight.description","english":"Your solution already works. For this bonus, tidy it up so the whole function fits in a small number of lines, without any extra clutter.","target":"आपका हल पहले से काम करता है। इस बोनस के लिए, इसे साफ-सुथरा कीजिए ताकि पूरा फंक्शन कुछ ही पंक्तियों में आ जाए, और कोई अतिरिक्त अनावश्यक चीज़ न हो।"}]},{"name":"scenarios","rows":[{"key":"drZero.name","english":"Zero","target":"शून्य"},{"key":"drZero.description","english":"The digital root of 0 is 0.","target":"0 का डिजिटल रूट 0 होता है।"},{"key":"drSingleDigit.name","english":"Already a single digit","target":"एक अंक वाली संख्या"},{"key":"drSingleDigit.description","english":"A number that is already a single digit is its own digital root.","target":"जो संख्या पहले से एक अंक की होती है, उसका डिजिटल रूट वही संख्या होती है।"},{"key":"drTwoDigits.name","english":"Two digits","target":"दो अंकों वाली संख्या"},{"key":"drTwoDigits.description","english":"16 collapses to 7 in a single pass (1 + 6).","target":"16 का डिजिटल रूट एक ही चरण में 7 होता है (1 + 6)।"},{"key":"drThreeDigits.name","english":"Three digits, one pass","target":"तीन अंक, एक चरण"},{"key":"drThreeDigits.description","english":"132 collapses to 6 in a single pass (1 + 3 + 2).","target":"132 का डिजिटल रूट एक ही चरण में 6 होता है (1 + 3 + 2)।"},{"key":"drThirtyNine.name","english":"Two passes needed","target":"दो चरण ज़रूरी"},{"key":"drThirtyNine.description","english":"39 sums to 12, which then sums to 3.","target":"39 के अंकों को जोड़ने पर 12 मिलता है, फिर 12 के अंकों को जोड़ने पर 3 मिलता है।"},{"key":"drTwoPasses.name","english":"A number that needs a second pass","target":"दो चरण वाली संख्या"},{"key":"drTwoPasses.description","english":"942 sums to 15, which then sums to 6.","target":"942 के अंकों को जोड़ने पर 15 मिलता है, फिर 15 के अंकों को जोड़ने पर 6 मिलता है।"},{"key":"drLarge.name","english":"A larger number","target":"एक बड़ी संख्या"},{"key":"drLarge.description","english":"493193 collapses all the way down to 2.","target":"493193 को बार-बार जोड़ने पर 2 बचता है।"},{"key":"drNines.name","english":"All nines","target":"सभी नौ"},{"key":"drNines.description","english":"99999 sums to 45, which then sums to 9.","target":"99999 के अंकों को जोड़ने पर 45 मिलता है, फिर 45 के अंकों को जोड़ने पर 9 मिलता है।"},{"key":"drBonusTight.name","english":"A tidy, short solution","target":"संक्षिप्त और साफ-सुथरा हल"},{"key":"drBonusTight.description","english":"12345 collapses down to 6 (1 + 2 + 3 + 4 + 5 = 15, then 1 + 5 = 6).","target":"12345 का डिजिटल रूट 6 होता है (1 + 2 + 3 + 4 + 5 = 15, फिर 1 + 5 = 6)।"}]},{"name":"hints","rows":[{"key":"whatIsIt.question","english":"What exactly is a digital root?","target":"डिजिटल रूट वास्तव में क्या है?"},{"key":"whatIsIt.answer","english":"Add up all the digits of the number. If that gives you a single digit, that's the answer. If it gives you more than one digit, add up the digits of that result too, and keep going until only one digit is left.","target":"संख्या के सभी अंकों को जोड़िए। अगर एक ही अंक बचता है, तो वही उत्तर है। अगर एक से अधिक अंक बचते हैं, तो उस परिणाम के अंकों को भी जोड़िए, और यह तब तक करते रहिए जब तक कि केवल एक अंक बचता है।"},{"key":"sumDigits.question","english":"How do I add up the digits of a number?","target":"किसी संख्या के अंक कैसे जोड़ें?"},{"key":"sumDigits.answer","english":"Turn the number into a string so you can walk through it character by character with a `for...of` loop. Keep a running total, adding each digit as you go.","target":"संख्या को एक स्ट्रिंग में बदलिए ताकि आप `for...of` लूप से उसके हर अक्षर पर जा सकें। एक जोड़ बनाइए और हर अक्षर को उसमें जोड़ते जाइए।"},{"key":"digitsToNumbers.question","english":"Each digit is a character though, not a number.","target":"पर हर अंक एक अक्षर है, संख्या नहीं।"},{"key":"digitsToNumbers.answer","english":"When you loop over the string, each character (like `\"4\"`) is text. Use `Number(char)` to turn it into the number `4` before adding it to your total.","target":"जब आप स्ट्रिंग पर लूप करते हैं, तब हर अक्षर (जैसे `\"4\"`) एक टेक्स्ट होता है। उसे अपने जोड़ में डालने से पहले `Number(char)` का इस्तेमाल करके संख्या `4` में बदलिए।"},{"key":"whichLoop.question","english":"How do I keep going without knowing how many passes I need?","target":"कितने चरण चाहिए यह न पता हो, तब भी कैसे करते रहें?"},{"key":"whichLoop.answer","english":"You don't know in advance how many times you'll need to sum the digits, so a `while` loop is a great fit. Keep looping while the number has more than one digit.","target":"आपको पहले से नहीं पता कि अंकों को कितनी बार जोड़ना पड़ेगा, इसलिए `while` लूप यहाँ बिल्कुल सही रहता है। जब तक संख्या में एक से अधिक अंक हों, तब तक लूप चलाते रहिए।"},{"key":"keepGoing.question","english":"When do I stop?","target":"कब रुकना है?"},{"key":"keepGoing.answer","english":"Stop as soon as the number is a single digit. At that point, return it.","target":"जैसे ही संख्या एक अंक की हो जाए, रुक जाइए। उसी समय, उसे लौटा दीजिए।"}]},{"name":"checks","rows":[{"key":"mustUseWhile","english":"Almost! For this exercise we want you to use a `while` loop to keep collapsing until a single digit remains.","target":"लगभग सही है! इस अभ्यास में हम चाहते हैं कि आप एक अंक बचने तक जोड़ने के लिए `while` लूप का इस्तेमाल करें।"},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long. See if you can tighten it up.","target":"बहुत करीब! आपका हल सही है, बस थोड़ा लंबा है। कोशिश कीजिए कि इसे और छोटा कर सकें।"}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":"अंकों वाली स्ट्रिंग को संख्या में बदलें"},{"key":"number.category","english":"Type Conversion","target":"टाइप बदलना"},{"key":"string.description","english":"Convert a number into a string","target":"संख्या को स्ट्रिंग में बदलें"},{"key":"string.category","english":"Type Conversion","target":"टाइप बदलना"}]}]}]
---

किसी संख्या का डिजिटल रूट (_digital root_) वह होता है जो आपको तब मिलता है जब आप उसके अंकों को बार-बार जोड़ते जाते हैं जब तक कि केवल एक अंक बचता है।

अगर एक बार अंकों को जोड़ने के बाद भी एक से अधिक अंक बचते हैं, तो आप _उस_ परिणाम के अंकों को जोड़ते हैं, और तब तक जारी रखते हैं जब तक कि एक अंक बचता है।

उदाहरण के लिए, `942` का डिजिटल रूट निकालने के लिए:

```
9 + 4 + 2 = 15
1 + 5 = 6
```

इसलिए `942` का डिजिटल रूट `6` है।

जो संख्या पहले से एक अंक की हो (जैसे `7`), उसका डिजिटल रूट वही संख्या होती है।

`digitalRoot` नाम का एक फंक्शन बनाइए जो एक संख्या लेता है और उसका डिजिटल रूट लौटाता है।

### `String()` फंक्शन

पिछले कुछ पाठों में आपको `Number(str)` फंक्शन मिला है, जो एक स्ट्रिंग को संख्या में बदलता है।

आप इसका उल्टा भी कर सकते हैं, और `String(num)` फंक्शन का इस्तेमाल करके किसी संख्या को स्ट्रिंग में बदल सकते हैं। उदाहरण के लिए:

```js
String(147) === "147"
```

फिर से ध्यान दीजिए कि इसकी शुरुआत में एक बड़ा अक्षर है, और फिर से, अभी के लिए इसकी वजह की चिंता मत कीजिए!

### सीखी हुई चीज़ों को प्रयोग में लाना

हालाँकि इस अभ्यास को हल करने के कई तरीके हैं, हम चाहते हैं कि आप जो हल निकालें, उसमें `while` लूप इस्तेमाल करें।

मज़े कीजिए!
