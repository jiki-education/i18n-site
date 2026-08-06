---
lang: "hi"
type: "exercise"
slug: "caesar-cipher"
title: "सीज़र सिफर"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/caesar-cipher"
en_md5: "d3e1c006a952dafab93205195f0af6db"
governance_sha: "c80036b"
content_version: "624baf65ceda"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"encodeMessage.name","english":"Encode a message","target":"संदेश एनकोड कीजिए"},{"key":"encodeMessage.description","english":"Write an encode function that shifts each letter in a message by a given amount. Spaces should remain as spaces. Letters that shift past 'z' should wrap around to the beginning of the alphabet.","target":"एक एनकोड फंक्शन बनाइए जो किसी संदेश के हर अक्षर को एक दी गई मात्रा से शिफ्ट करता है। स्पेस को स्पेस ही रहने दीजिए (उन्हें शिफ्ट न करें)। जो अक्षर 'z' से आगे शिफ्ट होते हैं, उन्हें वापस वर्णमाला के शुरू में लौट आना चाहिए।"}]},{"name":"scenarios","rows":[{"key":"caesarSimpleShift.name","english":"Simple shift by 1","target":"1 से सरल शिफ्ट"},{"key":"caesarSimpleShift.description","english":"Shift each letter forward by 1: a->b, b->c, c->d.","target":"हर अक्षर को 1 से आगे शिफ्ट कीजिए: a->b, b->c, c->d."},{"key":"caesarShiftBy3.name","english":"Shift by 3","target":"3 से शिफ्ट"},{"key":"caesarShiftBy3.description","english":"Shift each letter forward by 3: h->k, e->h, l->o, o->r.","target":"हर अक्षर को 3 से आगे शिफ्ट कीजिए: h->k, e->h, l->o, o->r."},{"key":"caesarWrapAround.name","english":"Wrap around the alphabet","target":"वर्णमाला लपेट"},{"key":"caesarWrapAround.description","english":"When shifting goes past 'z', it wraps around: x->a, y->b, z->c.","target":"जब शिफ्ट 'z' से आगे बढ़ता है, तो वह वापस वर्णमाला के शुरू में लौट आता है: x->a, y->b, z->c."},{"key":"caesarWithSpaces.name","english":"Message with spaces","target":"स्पेस वाला संदेश"},{"key":"caesarWithSpaces.description","english":"Spaces should remain as spaces, only letters are shifted.","target":"स्पेस को स्पेस ही रहने दीजिए, सिर्फ अक्षर शिफ्ट होते हैं।"},{"key":"caesarRot13.name","english":"ROT13 encryption","target":"ROT13 एन्क्रिप्शन"},{"key":"caesarRot13.description","english":"ROT13 is a special case of the Caesar cipher with a shift of 13.","target":"ROT13, 13 की शिफ्ट वाला सीज़र सिफर का एक खास मामला है।"}]},{"name":"hints","rows":[{"key":"shiftingLetterByN.question","english":"How do I think about shifting a letter by N positions?","target":"किसी अक्षर को N स्थान शिफ्ट करने के बारे में मैं कैसे सोचूँ?"},{"key":"shiftingLetterByN.answer","english":"Each letter has a position in the alphabet (a is at position 0, b at 1, and so on). To shift, you find that position, add the shift amount, then turn the new position back into a letter by looking it up in the alphabet.","target":"हर अक्षर की वर्णमाला में एक स्थान होता है (a का स्थान 0 है, b का 1 है, और ऐसे ही)। शिफ्ट करने के लिए, आप वह स्थान ढूँढते हैं, शिफ्ट की मात्रा जोड़ते हैं, फिर नए स्थान को वर्णमाला में देखकर वापस अक्षर में बदलते हैं।"},{"key":"letterPosition.question","english":"How do I find the position of a letter in the alphabet?","target":"वर्णमाला में किसी अक्षर का स्थान मैं कैसे ढूँढूँ?"},{"key":"letterPosition.answer","english":"You can search a string for a smaller piece with `indexOf`. Calling it on the alphabet string gives you a letter's position, or -1 if the letter isn't found. To go the other way, index back into the alphabet string with the position to get the letter.","target":"आप एक स्ट्रिंग में कोई छोटा टुकड़ा `indexOf` से खोज सकते हैं। वर्णमाला वाली स्ट्रिंग पर इसे कॉल करने से आपको अक्षर का स्थान मिलता है, या -1 अगर अक्षर न मिले। दूसरी तरफ जाने के लिए, स्थान का इस्तेमाल करके वर्णमाला वाली स्ट्रिंग में से अक्षर निकालें।"},{"key":"wrapPastZ.question","english":"What happens when the shift goes past 'z'?","target":"जब शिफ्ट 'z' से आगे बढ़ता है तो क्या होता है?"},{"key":"wrapPastZ.answer","english":"It needs to wrap around back to 'a'. The modulo operator (`%`) is perfect for this. Taking the position modulo 26 brings any number back into the 0 to 25 range.","target":"उसे 'a' तक वापस लपेटना होता है। मॉड्यूलो ऑपरेटर (`%`) इसके लिए एकदम सही है। स्थान का 26 से मॉड्यूलो लेने पर कोई भी संख्या 0 से 25 की सीमा में वापस आ जाती है।"},{"key":"applyToWholeMessage.question","english":"How do I apply this to a whole message?","target":"मैं इसे पूरे संदेश पर कैसे लागू करूँ?"},{"key":"applyToWholeMessage.answer","english":"Loop through each character of the message, shift it using your single-letter helper, and use concatenation (`+`) to build up the result string from the shifted letters.","target":"संदेश के हर अक्षर पर लूप चलाइए, अपने एक-अक्षर वाले सहायक फंक्शन से इसे शिफ्ट कीजिए, और शिफ्ट हुए अक्षरों से नतीजे वाली स्ट्रिंग बनाने के लिए जोड़ (`+`) का इस्तेमाल कीजिए।"}]},{"name":"functions","rows":[{"key":"indexOf.description","english":"Find the position of a smaller string within a string, or -1 if it isn't found (provided by level stdlib)","target":"एक स्ट्रिंग के अंदर किसी छोटी स्ट्रिंग का स्थान ढूँढता है, या -1 अगर वह न मिले (लेवल stdlib द्वारा दिया गया)"},{"key":"indexOf.category","english":"String Operations","target":"स्ट्रिंग ऑपरेशंस"}]}]}]
---

सीज़र सिफर सबसे पुरानी और सबसे आसान एन्क्रिप्शन तकनीकों में से एक है। जूलियस सीज़र अपने सेनापतियों को गुप्त संदेश भेजने के लिए इसका इस्तेमाल करते थे।

यह सिफर संदेश के हर अक्षर को वर्णमाला में एक निश्चित संख्या से शिफ्ट करके काम करता है। उदाहरण के लिए, शिफ्ट 3 होने पर 'a', 'd' बन जाता है, 'b', 'e' बन जाता है, और ऐसे ही। अगर शिफ्ट करने पर 'z' से आगे बढ़ते हैं, तो वह वापस वर्णमाला के शुरू में लौट आता है।

स्पेस को स्पेस ही रहने दीजिए (उन्हें शिफ्ट न करें)।

`encode(message, shift)` (एनकोड करना) नाम का एक फंक्शन बनाइए जो एक लोअरकेस संदेश और एक शिफ्ट की मात्रा लेता है, और एनकोडेड संदेश लौटाता है।

उदाहरण के लिए:

- `encode("abc", 1)` `"bcd"` लौटाता है
- `encode("xyz", 3)` `"abc"` लौटाता है (वापस घूमकर शुरू में आ जाता है)
- `encode("hello world", 5)` `"mjqqt btwqi"` लौटाता है

संकेत: इस समस्या को छोटे-छोटे सहायक फंक्शनों में तोड़ना चाहेंगे!

### एक दिलचस्प बात

एक बार मैं पुर्तगाल के ब्रागा में एक टेक कॉन्फ्रेंस में एमसी की भूमिका निभा रहा था। मंच पर जाने से पाँच मिनट पहले, आयोजक मेरे पास आए और थोड़ा झिझकते हुए पूछा कि क्या मुझे ब्रागा की रोमन विरासत का जश्न मनाने के लिए दिन के पहले भाग में जूलियस सीज़र की पोशाक पहनने में कोई आपत्ति होगी। क्या मैं यह कर पाया...?

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="जेरेमी सीज़र की पोशाक में"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
