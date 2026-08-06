---
lang: "hi"
type: "exercise"
slug: "tile-search"
title: "टाइल खोज"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/tile-search"
en_md5: "964730f77d4f532aa178b26e5504da86"
governance_sha: "c80036b"
content_version: "c5126bd51a17"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"आपके हल में बहुत ज़्यादा कोड की लाइनें हैं। क्या आप इसे छोटा कर सकते हैं?"}]},{"name":"tasks","rows":[{"key":"searchForTile.name","english":"Search for a Tile","target":"टाइल खोजिए"},{"key":"searchForTile.description","english":"Write a function that checks whether a specific letter tile is in the rack. Return true if found, false if not.","target":"एक ऐसा फंक्शन बनाइए जो जाँचता है कि कोई खास अक्षर वाली टाइल रैक में है या नहीं। यदि वह टाइल मिल जाए तो `true` लौटाए, और न मिले तो `false`।"},{"key":"solveInEightLines.name","english":"Solve in 8 lines of code","target":"8 लाइनों में हल कीजिए"},{"key":"solveInEightLines.description","english":"Can you solve this exercise with only 8 lines of code?","target":"क्या आप इस अभ्यास को सिर्फ 8 लाइनों में हल कर सकते हैं?"}]},{"name":"scenarios","rows":[{"key":"letterFoundAtStart.name","english":"Letter at the start","target":"शुरू में अक्षर"},{"key":"letterFoundAtStart.description","english":"The letter is the first tile in the rack.","target":"रैक में यह अक्षर पहली टाइल है।"},{"key":"letterFoundInMiddle.name","english":"Letter in the middle","target":"बीच में अक्षर"},{"key":"letterFoundInMiddle.description","english":"The letter is in the middle of the rack.","target":"रैक के बीच में अक्षर है।"},{"key":"letterFoundAtEnd.name","english":"Letter at the end","target":"अंत में अक्षर"},{"key":"letterFoundAtEnd.description","english":"The letter is the last tile in the rack.","target":"रैक में यह अक्षर अंतिम टाइल है।"},{"key":"letterNotFound.name","english":"Letter not found","target":"अक्षर नहीं मिला"},{"key":"letterNotFound.description","english":"The letter isn't in the rack.","target":"रैक में वह अक्षर नहीं है।"},{"key":"emptyRack.name","english":"Empty rack","target":"खाली रैक"},{"key":"emptyRack.description","english":"An empty rack has no tiles to find.","target":"खाली रैक में ढूँढने के लिए कोई टाइल नहीं होती।"},{"key":"duplicateLetters.name","english":"Rack with duplicates","target":"दोहरे अक्षरों वाली रैक"},{"key":"duplicateLetters.description","english":"The letter appears among duplicate tiles.","target":"वह अक्षर दोहरी टाइलों के बीच में है।"},{"key":"singleTileFound.name","english":"Single tile found","target":"एक टाइल मिली"},{"key":"singleTileFound.description","english":"A rack with one tile that matches.","target":"एक टाइल वाली रैक जो मेल खाती है।"},{"key":"singleTileNotFound.name","english":"Single tile not found","target":"एक टाइल नहीं मिली"},{"key":"singleTileNotFound.description","english":"A rack with one tile that doesn't match.","target":"एक टाइल वाली रैक जो मेल नहीं खाती।"},{"key":"bonus1.name","english":"8 lines of code","target":"कोड की 8 लाइनें"},{"key":"bonus1.description","english":"Solve the exercise with only 8 lines of code.","target":"अभ्यास को सिर्फ 8 लाइनों में हल कीजिए।"}]},{"name":"hints","rows":[{"key":"byHand.question","english":"How would I do this by hand?","target":"हाथ से यह कैसे करूँ?"},{"key":"byHand.answer","english":"You'd go through the haystack one letter at a time, comparing each to the needle. As soon as you found a match you'd stop. If you got to the end without a match, the needle isn't there.","target":"आप भूसे में एक-एक अक्षर करके जाइए, हर अक्षर की तुलना सुई से कीजिए। जैसे ही कोई मिलान मिले, रुक जाइए। यदि आप अंत तक बिना मिलान के पहुँच जाएँ, तो इसका मतलब है कि सुई वहाँ नहीं है।"},{"key":"loopAndCompare.question","english":"How do I loop and compare?","target":"लूप चलाकर तुलना कैसे करूँ?"},{"key":"loopAndCompare.answer","english":"A for-of loop gives you each letter of the string in turn. Inside, an if-statement compares the current letter to the needle.","target":"एक for-of लूप आपको स्ट्रिंग का हर अक्षर बारी-बारी से देता है। उसके अंदर, एक if स्टेटमेंट मौजूदा अक्षर की तुलना सुई से करता है।"},{"key":"returnTrue.question","english":"When should I return true?","target":"मुझे `true` कब लौटाना चाहिए?"},{"key":"returnTrue.answer","english":"As soon as you find a match. There's no point checking the remaining letters.","target":"जैसे ही आपको मिलान मिले। बाकी के अक्षरों को जाँचने का कोई फायदा नहीं है।"},{"key":"returnFalse.question","english":"When should I return false?","target":"मुझे `false` कब लौटाना चाहिए?"},{"key":"returnFalse.answer","english":"ONLY after the loop has finished without finding a match. A common mistake is putting `return false` inside the loop. That gives up after the very first non-matching letter, before you've checked the rest.","target":"`false` सिर्फ तब लौटाइए जब लूप पूरा हो जाए और कोई मिलान न मिले। एक आम गलती है `return false` को लूप के अंदर डाल देना। इससे पहले ही गैर-मिलान वाले पहले अक्षर पर हार मान ली जाती है, जबकि बाकी अक्षरों की जाँच अभी बाकी होती है।"}]}]}]
---

आप एक Scrabble बॉट बना रहे हैं। बॉट कोई शब्द डालने से पहले, उसे जाँचना होता है कि उसकी रैक में कोई खास अक्षर वाली टाइल है या नहीं।

रैक, अक्षरों की एक स्ट्रिंग होती है (जैसे `"SCRAB"`)।

एक `contains` (जाँचना) नाम का फंक्शन बनाइए, जो दो इनपुट लेता है:

- `haystack` (भूसा): टाइलों की रैक, एक स्ट्रिंग के रूप में
- `needle` (सुई): वह अक्षर जिसे ढूँढना है

यदि वह अक्षर रैक में मौजूद है तो `true` लौटाए, और यदि नहीं है तो `false`।

उदाहरण:

- `contains("SCRAB", "A")` `true` लौटाता है
- `contains("SCRAB", "Z")` `false` लौटाता है
- `contains("", "A")` `false` लौटाता है
