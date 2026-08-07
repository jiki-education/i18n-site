---
lang: "hi"
type: "exercise"
slug: "maze-solve-basic"
title: "भूलभुलैया से बाहर निकलिए"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "123a109"
content_version: "b17f0d86953c"
published_at: "2026-08-07"
forum_topic_id: 804
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"आप भूलभुलैया के अंत तक नहीं पहुँचे।"}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"पात्र को भूलभुलैया के अंत तक पहुँचाइए"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"हरे निशान तक पहुँचने के लिए भूलभुलैया में से रास्ता निकालिए"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"पात्र को भूलभुलैया के अंत तक पहुँचाइए"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"आपको अपने पात्र को भूलभुलैया में से निकालकर हरे रंग के लक्ष्य वाले खाने तक पहुँचाना है।"}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"मुझे किसे कहाँ ले जाना है?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"जो छोटा पात्र ऊपरी बाईं कोने में है, उसे आपको नीचे दाईं तरफ बने हरे गोले तक ले जाना है। रास्ते में लाल धारियों वाले खानों से बचते हुए आगे बढ़िए।"},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"मेरे बाएँ मोड़ने पर पात्र दाएँ मुड़ जाता है!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"पात्र उसी दिशा के हिसाब से मुड़ता है जिस तरफ वह इस समय देख रहा है। तो अगर पात्र दाईं तरफ देख रहा है और बाएँ मुड़ता है, तो अब वह ऊपर की तरफ देखेगा।"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"अरे नहीं! आपने भूलभुलैया के किनारे से बाहर गिरने की कोशिश की!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"आउच! आप दीवार से टकरा गए!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"आउच! आप आग में चले गए!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"छी! आपने पॉटी पर पैर रख दिया! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"पात्र को एक खाना आगे ले जाता है"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"पात्र को 90 डिग्री बाएँ घुमाता है"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"पात्र को 90 डिग्री दाएँ घुमाता है"}]}]}]
---

आपके पहले अभ्यास में आपका स्वागत है!

इस अभ्यास का उद्देश्य आपको यह परिचित कराना है कि सीखने का यह वातावरण (_learning environment_) कैसे काम करता है। आपका काम यह है कि बाईं ओर दिख रही भूलभुलैया में फँसे हुए एक छोटे पात्र को निर्देश देकर बाहर निकालना है। आप वे सारे निर्देश लिखते हैं जिनका पात्र को पालन करना है। फिर **कोड चलाएँ** बटन पर क्लिक करने से वह पात्र उन निर्देशों का पालन करता है।

आप ये तीन निर्देश इस्तेमाल कर सकते हैं:

- `move()` (आगे बढ़ना) पात्र को एक कदम आगे ले जाता है
- `turnLeft()` (बाएँ मुड़ना) पात्र जिस दिशा में देख रहा है उसके हिसाब से बाईं ओर घुमाता है
- `turnRight()` (दाएँ मुड़ना) पात्र जिस दिशा में देख रहा है उसके हिसाब से दाईं ओर घुमाता है

आप देख सकते हैं कि बाईं ओर पहले तीन निर्देश हमने पहले से ही लिख दिए हैं। सबसे पहले **"कोड चलाएँ"** बटन पर क्लिक करके देखिए कि वे क्या करते हैं। फिर **और निर्देश जोड़िए**, ताकि आपका पात्र भूलभुलैया के अंत तक पहुँच जाए। हर लाइन पर एक निर्देश लिखिए, फिर **कोड चलाएँ** दबाकर उन सबको एक साथ चलाइए।

अपने कोड को बार-बार चलाकर देखना एक अच्छी आदत है!

भूलभुलैया से बाहर निकलने के बाद आप डैशबोर्ड पर वापस जाकर अगला पाठ शुरू कर सकते हैं।
