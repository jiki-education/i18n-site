---
lang: "hi"
type: "exercise"
slug: "hamming"
title: "Hamming"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hamming"
en_md5: "00c98b21780410fd419205c5850e1f4b"
governance_sha: "c80036b"
content_version: "4ffc6e6682f0"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"You used more lines than needed — see if you can trim it down.","target":"आपने ज़रूरत से ज़्यादा लाइनें इस्तेमाल की हैं। देखिए क्या आप इसे छोटा कर सकते हैं।"}]},{"name":"tasks","rows":[{"key":"calculateHammingDistance.name","english":"Calculate the Hamming Distance","target":"Hamming दूरी निकालिए"},{"key":"calculateHammingDistance.description","english":"Write a function that calculates the Hamming distance between two DNA strands of equal length. The Hamming distance is the number of positions where the corresponding characters differ.","target":"एक फंक्शन लिखिए जो समान लंबाई के दो DNA स्ट्रैंड के बीच Hamming दूरी निकालता है। Hamming दूरी उन स्थानों की संख्या है जहाँ संबंधित अक्षर भिन्न होते हैं।"},{"key":"solveInElevenLines.name","english":"Solve in eleven lines of code","target":"ग्यारह लाइन में हल कीजिए"},{"key":"solveInElevenLines.description","english":"Can you solve this using no more than eleven lines of code?","target":"क्या आप इसे ग्यारह से अधिक लाइनों का इस्तेमाल किए बिना हल कर सकते हैं?"}]},{"name":"scenarios","rows":[{"key":"hammingEmptyStrands.name","english":"Empty strands","target":"खाली स्ट्रैंड"},{"key":"hammingEmptyStrands.description","english":"Empty strands have a Hamming distance of 0.","target":"खाली स्ट्रैंड की Hamming दूरी 0 होती है।"},{"key":"hammingSingleLetterIdentical.name","english":"Single letter identical strands","target":"एक अक्षर वाले समान स्ट्रैंड"},{"key":"hammingSingleLetterIdentical.description","english":"Single-letter identical strands have a Hamming distance of 0.","target":"एक अक्षर वाले समान स्ट्रैंड की Hamming दूरी 0 होती है।"},{"key":"hammingLongIdenticalStrands.name","english":"Long identical strands","target":"लंबे समान स्ट्रैंड"},{"key":"hammingLongIdenticalStrands.description","english":"Long identical strands have a Hamming distance of 0.","target":"लंबे समान स्ट्रैंड की Hamming दूरी 0 होती है।"},{"key":"hammingSingleLetterDifferent.name","english":"Single letter different strands","target":"एक अक्षर वाले भिन्न स्ट्रैंड"},{"key":"hammingSingleLetterDifferent.description","english":"Single-letter different strands have a Hamming distance of 1.","target":"एक अक्षर वाले भिन्न स्ट्रैंड की Hamming दूरी 1 होती है।"},{"key":"hammingLongDifferentStrands.name","english":"Long different strands","target":"लंबे भिन्न स्ट्रैंड"},{"key":"hammingLongDifferentStrands.description","english":"Long strands with differences have a calculated Hamming distance.","target":"जिन लंबे स्ट्रैंड में अंतर होते हैं, उनकी Hamming दूरी की गणना की जाती है।"},{"key":"hammingBonusElevenLines.name","english":"Eleven lines of code","target":"ग्यारह लाइन कोड"},{"key":"hammingBonusElevenLines.description","english":"Solve the exercise using no more than eleven lines of code.","target":"इस अभ्यास को ग्यारह से अधिक लाइनों का इस्तेमाल किए बिना हल कीजिए।"}]},{"name":"hints","rows":[{"key":"hammingDistanceMeaning.question","english":"What does 'Hamming distance' mean in plain terms?","target":"सरल शब्दों में 'Hamming दूरी' का क्या अर्थ है?"},{"key":"hammingDistanceMeaning.answer","english":"It's the number of positions where the two strings differ. So 'GAGA' vs 'GATA' differ at position 3 only, giving a distance of 1.","target":"यह उन स्थानों की संख्या है जहाँ दोनों स्ट्रिंग भिन्न होती हैं। इसलिए 'GAGA' और 'GATA' केवल स्थान 3 पर भिन्न हैं, जिससे दूरी 1 होती है।"},{"key":"compareCharactersAtPosition.question","english":"How do I compare characters at the same position in both strings?","target":"दोनों स्ट्रिंग में एक ही स्थान पर अक्षरों की तुलना कैसे करें?"},{"key":"compareCharactersAtPosition.answer","english":"You'll need to move through both strings in sync, so you can pull out the character at the same spot from each one as you go.","target":"आपको दोनों स्ट्रिंग पर एक साथ आगे बढ़ना होगा, ताकि हर बार दोनों में से एक ही स्थान का अक्षर निकाल सकें।"},{"key":"trackDifferenceCount.question","english":"How do I track 'how many differences' there are?","target":"कितने अंतर हैं, इसका हिसाब कैसे रखें?"},{"key":"trackDifferenceCount.answer","english":"You'll need something that keeps a running total, adjusted whenever you spot a mismatch, so it's ready to hand back once you've checked every position.","target":"आपको एक ऐसी संख्या रखनी होगी जो कुल अंतर गिनती रहे, और जब भी आप कोई बेमेल देखें तो उसे एक बढ़ा दें, ताकि सभी स्थान जाँच लेने के बाद वह लौटाने के लिए तैयार हो।"}]}]}]
---

यह आणविक जीवविज्ञान पर आधारित एक क्लासिक Exercism अभ्यास है!

आपका शरीर उन कोशिकाओं से बना है जिनमें DNA होता है। ये कोशिकाएँ नियमित रूप से खराब हो जाती हैं और बदलने की ज़रूरत पड़ती है, जो वे नई कोशिकाओं में विभाजित होकर पूरा करती हैं। वास्तव में, एक औसत मानव शरीर में जीवनकाल में लगभग 10 क्वाड्रिलियन बार कोशिका विभाजन होता है!

जब कोशिकाएँ विभाजित होती हैं, तब उनका DNA भी अपनी नकल बना लेता है। कभी-कभी इस प्रक्रिया के दौरान गलतियाँ हो जाती हैं और DNA के अकेले टुकड़े गलत जानकारी के साथ कोडित हो जाते हैं। यदि हम DNA की दो स्ट्रैंड की तुलना करें और उनके बीच अंतर गिनें, तो हम देख सकते हैं कि कितनी गलतियाँ हुईं। इसे ‘Hamming दूरी’ कहा जाता है।

Hamming दूरी केवल जीवविज्ञान ही नहीं, विज्ञान के कई क्षेत्रों में उपयोगी है, इसलिए यह जानने लायक एक अच्छा शब्द है!

आपका काम दो DNA स्ट्रैंड के बीच Hamming दूरी की गणना करना है। DNA में C, A, G और T अक्षर इस्तेमाल होते हैं। दो स्ट्रैंड ऐसे दिख सकते हैं:

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

इनमें 7 अंतर हैं, और इसलिए Hamming दूरी 7 है।

`hammingDistance` (हैमिंग दूरी) नामक एक फंक्शन बनाइए जो दो इनपुट ले: दो DNA स्ट्रैंड, स्ट्रिंग के रूप में। इसे एक संख्या लौटानी चाहिए, जो दूरी हो।

दोनों DNA स्ट्रैंड की लंबाई हमेशा समान होगी।
