---
lang: "hi"
type: "exercise"
slug: "leap"
title: "लीप ईयर"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/leap"
en_md5: "0e6c7c50ad01b4d9fe07d721fd973afb"
governance_sha: "c80036b"
content_version: "b6a69ff07856"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanOneLine","english":"You used more than one line of code within the function.","target":"आपने फंक्शन के अंदर एक से ज़्यादा कोड लाइन लिखी हैं।"}]},{"name":"tasks","rows":[{"key":"determineLeapYear.name","english":"Determine if the year is a leap year","target":"लीप ईयर की जाँच कीजिए"},{"key":"determineLeapYear.description","english":"Write a function called isLeapYear that takes a year as its input and returns true if it is a leap year, or false if it is not.","target":"isLeapYear नाम का एक फंक्शन बनाइए जो एक साल लेता है और true लौटाता है अगर वह लीप ईयर है, या false अगर नहीं है।"},{"key":"solveInOneLine.name","english":"Solve in one line of code","target":"एक लाइन कोड में हल कीजिए"},{"key":"solveInOneLine.description","english":"Can you solve this with only one line of code within the function?","target":"क्या आप फंक्शन के अंदर सिर्फ एक लाइन कोड में इसे हल कर सकते हैं?"}]},{"name":"scenarios","rows":[{"key":"year2015.name","english":"Year 2015","target":"साल 2015"},{"key":"year2015.description","english":"2015 is not divisible by 4 so is not a leap year.","target":"2015, 4 से विभाज्य नहीं है, इसलिए लीप ईयर नहीं है।"},{"key":"year1970.name","english":"Year 1970","target":"साल 1970"},{"key":"year1970.description","english":"1970 is not divisible by 4 so is not a leap year.","target":"1970, 4 से विभाज्य नहीं है, इसलिए लीप ईयर नहीं है।"},{"key":"year2100.name","english":"Year 2100","target":"साल 2100"},{"key":"year2100.description","english":"2100 is divisible by 100 but not by 400 so is not a leap year.","target":"2100, 100 से विभाज्य तो है लेकिन 400 से नहीं, इसलिए लीप ईयर नहीं है।"},{"key":"year1900.name","english":"Year 1900","target":"साल 1900"},{"key":"year1900.description","english":"1900 is divisible by 100 but not by 400 so is not a leap year.","target":"1900, 100 से विभाज्य तो है लेकिन 400 से नहीं, इसलिए लीप ईयर नहीं है।"},{"key":"year1800.name","english":"Year 1800","target":"साल 1800"},{"key":"year1800.description","english":"1800 is divisible by 100 but not by 400 so is not a leap year.","target":"1800, 100 से विभाज्य तो है लेकिन 400 से नहीं, इसलिए लीप ईयर नहीं है।"},{"key":"year2000.name","english":"Year 2000","target":"साल 2000"},{"key":"year2000.description","english":"2000 is divisible by 400 so is a leap year.","target":"2000, 400 से विभाज्य है, इसलिए लीप ईयर है।"},{"key":"year2400.name","english":"Year 2400","target":"साल 2400"},{"key":"year2400.description","english":"2400 is divisible by 400 so is a leap year.","target":"2400, 400 से विभाज्य है, इसलिए लीप ईयर है।"},{"key":"year1996.name","english":"Year 1996","target":"साल 1996"},{"key":"year1996.description","english":"1996 is divisible by 4 but not by 100 so is a leap year.","target":"1996, 4 से विभाज्य है लेकिन 100 से नहीं, इसलिए लीप ईयर है।"},{"key":"year1960.name","english":"Year 1960","target":"साल 1960"},{"key":"year1960.description","english":"1960 is divisible by 4 but not by 100 so is a leap year.","target":"1960, 4 से विभाज्य है लेकिन 100 से नहीं, इसलिए लीप ईयर है।"},{"key":"bonus1.name","english":"One line of code","target":"एक लाइन कोड"},{"key":"bonus1.description","english":"Solve the exercise with only one line of code within the function.","target":"अभ्यास को फंक्शन के अंदर सिर्फ एक लाइन कोड में हल कीजिए।"}]},{"name":"hints","rows":[{"key":"basicRule.question","english":"What's the basic rule for a leap year?","target":"लीप ईयर का बुनियादी नियम क्या है?"},{"key":"basicRule.answer","english":"Years divisible by 4 are leap years. So `year % 4 === 0` is the starting test.","target":"जो साल 4 से विभाज्य होते हैं, वे लीप ईयर होते हैं। इसलिए `year % 4 === 0` शुरुआती जाँच है।"},{"key":"exceptions.question","english":"Are there exceptions?","target":"क्या कोई अपवाद हैं?"},{"key":"exceptions.answer","english":"Yes. Years divisible by 100 are NOT leap years, even though they're divisible by 4. For example, 1900 isn't a leap year.","target":"हाँ। जो साल 100 से विभाज्य होते हैं, वे लीप ईयर नहीं होते, भले ही वे 4 से विभाज्य हों। उदाहरण के लिए, 1900 लीप ईयर नहीं है।"},{"key":"exceptionsToExceptions.question","english":"Are there exceptions to the exception?","target":"क्या अपवाद के भी अपवाद हैं?"},{"key":"exceptionsToExceptions.answer","english":"Yes. Years divisible by 400 ARE leap years after all. For example, 2000 is. So the rule cascades: divisible by 4, but not by 100, unless also by 400.","target":"हाँ। जो साल 400 से विभाज्य होते हैं, वे वास्तव में लीप ईयर होते हैं। उदाहरण के लिए, 2000 लीप ईयर है। तो नियम यूँ काम करता है: 4 से विभाज्य, लेकिन 100 से नहीं, सिवाय अगर 400 से भी विभाज्य हो।"},{"key":"checkDivisibility.question","english":"How do I check divisibility?","target":"विभाज्यता की जाँच कैसे करें?"},{"key":"checkDivisibility.answer","english":"Use the remainder operator `%`. `year % 4 === 0` is true when the year divides exactly by 4 with nothing left over. Same trick with 100 and 400.","target":"शेषफल ऑपरेटर `%` का इस्तेमाल कीजिए। `year % 4 === 0` तब सही होता है जब साल 4 से पूरी तरह विभाजित हो और कुछ शेष न बचे। यही तरीका 100 और 400 के लिए भी लागू होता है।"}]}]}]
---

इस अभ्यास में, हम लीप ईयर के बारे में जानेंगे!

लीप ईयर (ग्रेगोरियन कैलेंडर में) निम्नलिखित स्थितियों में होता है:

- वह साल 4 से पूर्णतः विभाज्य हो।
- पर यदि वह साल 100 से भी पूर्णतः विभाज्य हो, तो वह तभी लीप ईयर होता है जब वह 400 से भी पूर्णतः विभाज्य हो।

कुछ उदाहरण:

- 1997 लीप ईयर नहीं था क्योंकि वह 4 से विभाज्य नहीं है।
- 1900 लीप ईयर नहीं था क्योंकि वह 400 से विभाज्य नहीं है।
- 2000 लीप ईयर था!

आपको `isLeapYear` (लीप ईयर जाँचने वाला फंक्शन) नाम का एक फंक्शन बनाना है, जो एक साल लेता है और `true` लौटाता है अगर वह लीप ईयर हो, और `false` अगर न हो।

इसमें अपना समय लीजिए। शुरू करने से पहले अच्छी तरह सोच लीजिए।
