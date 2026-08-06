---
lang: "hi"
type: "exercise"
slug: "niche-named-party"
title: "एक खास नाम वाली पार्टी"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/niche-named-party"
en_md5: "470a19833eba55849106588dfa7326f2"
governance_sha: "c80036b"
content_version: "0ccdd7a4ba01"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"checkTheName.name","english":"Check the name","target":"नाम जाँचिए"},{"key":"checkTheName.description","english":"Write a `handleGuest` function that checks whether the person's name starts with the allowed letters for tonight's party. Return `true` if it does, or `false` if it doesn't.","target":"एक `handleGuest` फंक्शन लिखिए जो जाँचता है कि व्यक्ति का नाम आज रात की पार्टी के अनुमत अक्षरों से शुरू होता है या नहीं। यदि ऐसा है तो `true` लौटाइए, वर्ना `false`।"},{"key":"solveTightly.name","english":"Solve it in 20 lines","target":"20 पंक्तियों में हल कीजिए"},{"key":"solveTightly.description","english":"Bonus: with the length-counting pulled out into a helper function that `handleGuest` reuses, the whole solution fits in 20 lines. Can you match it?","target":"बोनस: लंबाई की गिनती को एक सहायक फंक्शन में डालकर, जिसे `handleGuest` दोबारा इस्तेमाल करता है, पूरा हल 20 पंक्तियों में फिट हो जाता है। क्या आप भी ऐसा कर सकते हैं?"}]},{"name":"scenarios","rows":[{"key":"sarahSParty.name","english":"S Party: Sarah arrives","target":"S पार्टी: Sarah आती है"},{"key":"sarahSParty.description","english":"Tonight only names starting with \"S\" are allowed. Sarah should get in!","target":"आज रात सिर्फ \"S\" से शुरू होने वाले नाम अनुमत हैं। Sarah को अंदर आना चाहिए!"},{"key":"bradSParty.name","english":"S Party: Brad arrives","target":"S पार्टी: Brad आता है"},{"key":"bradSParty.description","english":"Tonight only names starting with \"S\" are allowed. Brad should be turned away.","target":"आज रात सिर्फ \"S\" से शुरू होने वाले नाम अनुमत हैं। Brad को वापस कर देना चाहिए।"},{"key":"bradleyBradParty.name","english":"Brad Party: Bradley arrives","target":"Brad पार्टी: Bradley आता है"},{"key":"bradleyBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Bradley should get in!","target":"आज रात सिर्फ \"Brad\" से शुरू होने वाले नाम अनुमत हैं। Bradley को अंदर आना चाहिए!"},{"key":"bradBradleyParty.name","english":"Bradley Party: Brad arrives","target":"Bradley पार्टी: Brad आता है"},{"key":"bradBradleyParty.description","english":"Tonight only names starting with \"Bradley\" are allowed. Brad is too short, so he's not allowed.","target":"आज रात सिर्फ \"Bradley\" से शुरू होने वाले नाम अनुमत हैं। Brad का नाम बहुत छोटा है, इसलिए उसे अंदर आने की अनुमति नहीं है।"},{"key":"brianBradParty.name","english":"Brad Party: Brian arrives","target":"Brad पार्टी: Brian आता है"},{"key":"brianBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Brian should be turned away.","target":"आज रात सिर्फ \"Brad\" से शुरू होने वाले नाम अनुमत हैं। Brian को वापस कर देना चाहिए।"},{"key":"silence.name","english":"S Party: Silence...","target":"S पार्टी: सन्नाटा..."},{"key":"silence.description","english":"The person doesn't say their name. An empty name can't start with anything. Turn them away!","target":"व्यक्ति अपना नाम नहीं बताता। खाली नाम किसी भी चीज़ से शुरू नहीं हो सकता। उसे वापस कर दीजिए!"},{"key":"cherCherParty.name","english":"Cher Party: Cher arrives","target":"Cher पार्टी: Cher आती है"},{"key":"cherCherParty.description","english":"Tonight only names starting with \"Cher\" are allowed. Cher's name is exactly \"Cher\" — let her in!","target":"आज रात सिर्फ \"Cher\" से शुरू होने वाले नाम अनुमत हैं। Cher का नाम बिल्कुल \"Cher\" है। उसे अंदर आने दीजिए!"},{"key":"nicheNamedPartyBonusLineCount.name","english":"Neat and tidy","target":"साफ-सुथरा हल"},{"key":"nicheNamedPartyBonusLineCount.description","english":"The shortest solution fits in 20 lines. Can you find it?","target":"सबसे छोटा हल 20 पंक्तियों में समा जाता है। क्या आप इसे ढूँढ़ सकते हैं?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"लगे रहिए! देखिए कि क्या आप इसे कम पंक्तियों में हल कर सकते हैं।"}]},{"name":"hints","rows":[{"key":"checkStartsWith.question","english":"How do I check that a name starts with certain letters?","target":"यह कैसे जाँचें कि कोई नाम कुछ खास अक्षरों से शुरू होता है?"},{"key":"checkStartsWith.answer","english":"Compare each character of the allowed prefix with the character at the same position in the name. If any character differs, the name doesn't match.","target":"अनुमत प्रीफिक्स के हर अक्षर को नाम में उसी जगह के अक्षर से मिलाइए। अगर कोई अक्षर अलग हुआ, तो नाम मैच नहीं करता।"},{"key":"loopCharacters.question","english":"How do I look at one character at a time?","target":"एक बार में एक अक्षर को कैसे देखें?"},{"key":"loopCharacters.answer","english":"Use string iteration to step through a string.","target":"स्ट्रिंग के हर अक्षर तक पहुँचने के लिए स्ट्रिंग इटरेशन का इस्तेमाल कीजिए।"},{"key":"findEquivalentLetter.question","english":"How do I find the equivalent letter in the other word?","target":"दूसरे शब्द में बराबर वाला अक्षर कैसे ढूँढ़ें?"},{"key":"findEquivalentLetter.answer","english":"Use string indexing to find a specific letter.","target":"किसी खास अक्षर को ढूँढ़ने के लिए स्ट्रिंग इंडेक्सिंग का इस्तेमाल कीजिए।"},{"key":"longerAllowedPrefix.question","english":"What if the allowed prefix is longer than the name?","target":"अगर अनुमत प्रीफिक्स नाम से लंबा हो तो क्या करें?"},{"key":"longerAllowedPrefix.answer","english":"That person can't match, so you should return `false`.","target":"उस व्यक्ति का मैच नहीं हो सकता, इसलिए आपको `false` लौटाना चाहिए।"}]}]}]
---

आज रात की पार्टी बहुत खास है। सिर्फ वही लोग अंदर आ सकते हैं जिनके नाम की शुरुआत किसी खास अक्षरों के समूह से होती है।

आपको एक `handleGuest` (मेहमान की जाँच करना) नाम का फंक्शन लिखना है जो दो इनपुट लेता है:

- `name` - दरवाज़े पर मौजूद व्यक्ति का नाम
- `allowedPrefix` - आज रात की पार्टी के लिए ज़रूरी प्रीफिक्स

यदि व्यक्ति को अंदर आने की अनुमति है तो इसे `true` लौटाना चाहिए, और यदि उसे वापस करना चाहिए तो `false`।

उदाहरण के लिए:

- अगर आज रात का अनुमत प्रीफिक्स `"S"` है, तो Sarah अंदर आ सकती है (`true` लौटाता है) लेकिन Brad नहीं आ सकता (`false` लौटाता है)।
- अगर अनुमत प्रीफिक्स `"Brad"` है, तो Brad और Bradley अंदर आ सकते हैं लेकिन Brian नहीं आ सकता।

### सहायक फंक्शन

जैसे-जैसे आप यह अभ्यास करेंगे, आपको मेहमान के नाम की लंबाई पता करनी होगी, और अनुमत प्रीफिक्स की लंबाई भी। यह एक सहायक फंक्शन `getLength(someString)` बनाने का बढ़िया मौका है, जो स्ट्रिंग में कितने अक्षर हैं, गिनता है। फिर आप इस फंक्शन को `handleGuest(...)` में अलग-अलग जगहों पर इस्तेमाल कर सकते हैं।

बोनस सिनेरियो में आपको चुनौती दी जाती है कि इसे कम से कम पंक्तियों में हल करें। आप शायद अपनी पसंद के और भी हल निकालें, जिनमें ज़्यादा पंक्तियाँ हों। यह बिल्कुल ठीक है (और आपको अलग तरीके आज़माने के लिए प्रोत्साहित किया जाता है), लेकिन कोशिश कीजिए कि सबसे छोटा तरीका भी ढूँढ़ निकालें।

मज़ा कीजिए!
