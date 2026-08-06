---
lang: "hi"
type: "exercise"
slug: "dnd-roll"
title: "D&D रोल"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/dnd-roll"
en_md5: "9f9dc476ef35afe5b76effc918ca5771"
governance_sha: "c80036b"
content_version: "946a93c7325b"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"unknownDice","english":"Sorry - Jiki doesn't have a {{sides}} sided dice handy!","target":"माफ़ कीजिए - Jiki के पास {{sides}} भुजाओं वाला पासा उपलब्ध नहीं है!"},{"key":"announceNumber","english":"You can only announce a number","target":"आप केवल एक संख्या की घोषणा कर सकते हैं"},{"key":"attackNumber","english":"Attack must be a number","target":"अटैक एक संख्या होना चाहिए"},{"key":"damageNumber","english":"Damage must be a number","target":"डैमेज एक संख्या होना चाहिए"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled a die and got ${return}","target":"पासा फेंका और ${return} प्राप्त किया"},{"key":"announce","english":"announced ${arg1}","target":"घोषणा की: ${arg1}"},{"key":"strike","english":"struck the goblin with attack ${arg1} and damage ${arg2}","target":"गोबलिन पर अटैक ${arg1} और डैमेज ${arg2} से प्रहार किया"}]},{"name":"checks","rows":[{"key":"announcementCount","english":"Expected 3 announcements but got {{got}}. Make sure you announce each roll.","target":"3 घोषणाओं की अपेक्षा थी लेकिन {{got}} मिली। सुनिश्चित कीजिए कि आप हर रोल की घोषणा करें।"},{"key":"firstAnnouncement","english":"Expected the first announcement to be {{attack}} (the attack roll) but got {{got}}.","target":"पहली घोषणा के रूप में {{attack}} (अटैक रोल) की अपेक्षा थी। लेकिन {{got}} मिली।"},{"key":"secondAnnouncement","english":"Expected the second announcement to be {{damage}} (the base damage roll) but got {{got}}.","target":"दूसरी घोषणा के रूप में {{damage}} (बेस डैमेज रोल) की अपेक्षा थी। लेकिन {{got}} मिली।"},{"key":"thirdAnnouncement","english":"Expected the third announcement to be {{bonus}} (the bonus roll) but got {{got}}.","target":"तीसरी घोषणा के रूप में {{bonus}} (बोनस रोल) की अपेक्षा थी। लेकिन {{got}} मिली।"},{"key":"notStruck","english":"You didn't strike the goblin. Make sure you call <code>strike()</code>.","target":"आपने गोबलिन पर प्रहार नहीं किया। सुनिश्चित कीजिए कि आप <code>strike()</code> को कॉल करें।"},{"key":"wrongAttack","english":"Expected the attack to be {{attack}} but got {{got}}. Pass the attack roll to <code>strike()</code>.","target":"अटैक के {{attack}} होने की अपेक्षा थी लेकिन {{got}} मिला। अटैक रोल को <code>strike()</code> को पास कीजिए।"},{"key":"wrongDamage","english":"Expected total damage to be {{totalDamage}} ({{damage}} + {{bonus}}) but got {{got}}. Add the base damage and bonus together.","target":"टोटल डैमेज के {{totalDamage}} ({{damage}} + {{bonus}}) होने की अपेक्षा थी लेकिन {{got}} मिला। बेस डैमेज और बोनस को जोड़िए।"}]},{"name":"tasks","rows":[{"key":"rollAndStrike.name","english":"Roll the dice and strike the goblin","target":"पासे फेंकिए और गोबलिन पर प्रहार कीजिए"},{"key":"rollAndStrike.description","english":"Roll three dice (d20 for attack, d12 for base damage, d10 for bonus), announce each roll, then strike the goblin with your attack roll and total damage (base + bonus).","target":"तीन पासे फेंकिए (अटैक के लिए d20, बेस डैमेज के लिए d12, बोनस के लिए d10), हर रोल की घोषणा कीजिए, फिर अपने अटैक रोल और टोटल डैमेज (बेस + बोनस) से गोबलिन पर प्रहार कीजिए।"}]},{"name":"scenarios","rows":[{"key":"randomRolls.name","english":"Roll and strike","target":"रोल और प्रहार कीजिए"},{"key":"randomRolls.description","english":"Roll d20 for attack, d12 for base damage, d10 for bonus. Strike the goblin with your attack and total damage.","target":"अटैक के लिए d20, बेस डैमेज के लिए d12, बोनस के लिए d10 फेंकिए। अपने अटैक और टोटल डैमेज से गोबलिन पर प्रहार कीजिए।"}]},{"name":"hints","rows":[{"key":"chooseDie.question","english":"How do I choose what type of die to use?","target":"मैं किस प्रकार का पासा इस्तेमाल करूँ, यह कैसे चुनूँ?"},{"key":"chooseDie.answer","english":"For a 20 sided dice, use 20 as the input to roll - e.g. `roll(20)`. For a 12 sided dice, call `roll(12)`.","target":"20 भुजाओं वाले पासे के लिए, `roll()` में इनपुट के रूप में 20 दीजिए - उदाहरण के लिए `roll(20)`. 12 भुजाओं वाले पासे के लिए `roll(12)` कॉल कीजिए।"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls a die with the given number of sides and **returns** the result.","target":"दी गई भुजाओं की संख्या वाला पासा फेंकता है और परिणाम **लौटाता** है।"},{"key":"roll.category","english":"Dice","target":"पासे"},{"key":"announce.description","english":"Announces a dice roll value.","target":"पासे के रोल की वैल्यू की घोषणा करता है।"},{"key":"announce.category","english":"Action","target":"एक्शन"},{"key":"strike.description","english":"Strikes the goblin with the given attack roll and total damage.","target":"दिए गए अटैक रोल और टोटल डैमेज से गोबलिन पर प्रहार करता है।"},{"key":"strike.category","english":"Action","target":"एक्शन"}]}]}]
---

आप एक ऐसा बॉट बना रहे हैं जो Dungeons and Dragons (DnD) खेल सके। अगर आप DnD से परिचित नहीं हैं, तो इसका मूल विचार यह है कि आप कई सिनेरियो में पड़ते हैं और यह पता करने के लिए कि क्या होता है, पासे फेंकते हैं। बहुत सारे अलग-अलग पासे होते हैं जिनकी भुजाओं की संख्या अलग-अलग होती है (सिर्फ छह भुजाओं वाला पासा ही नहीं जिसके आप आदी होंगे!)

एक सिनेरियो, जिसे आपको संभालना है, गोबलिन से सामना करना है। गोबलिन पर हमला करने के लिए आपको यह करना होगा:

- **अटैक स्कोर** बनाने के लिए 20 भुजाओं वाला पासा फेंकिए।
- **बेस डैमेज स्कोर** बनाने के लिए 12 भुजाओं वाला पासा फेंकिए।
- **बोनस डैमेज स्कोर** बनाने के लिए 10 भुजाओं वाला पासा फेंकिए।
- अपना **टोटल डैमेज** पाने के लिए बेस डैमेज और बोनस डैमेज को जोड़िए।
- अपने अटैक रोल और टोटल डैमेज से गोबलिन पर प्रहार कीजिए।

हर बार जब आप पासा फेंकते हैं, तो आपको जो संख्या आई है, उसे उन लोगों को बताना होगा जिनके साथ आप खेल रहे हैं। अगर आप संख्याओं को बताए बिना प्रहार करने की कोशिश करते हैं, तो उन्हें लग सकता है कि आप धोखा दे रहे हैं!

आपके पास तीन फंक्शन हैं जिनका इस्तेमाल आप कर सकते हैं:

- `roll(sides)` (पासा फेंकना) दिए गए भुजाओं की संख्या वाला पासा फेंकता है। यह फंक्शन परिणाम लौटाता है (_returns_)।
- `announce(value)` (घोषणा करना) पासे के रोल की घोषणा करता है।
- `strike(attack, damage)` (प्रहार करना) गोबलिन पर आपके अटैक रोल और टोटल डैमेज से प्रहार करता है।

**महत्वपूर्ण:** हर बार जब आप `roll()` को कॉल करते हैं, Jiki एक पासा फेंकता है और एक अलग संख्या प्राप्त करता है। यह उम्मीद न रखें कि एक ही पासा दो बार फेंकने पर हर बार वही संख्या मिलेगी।
