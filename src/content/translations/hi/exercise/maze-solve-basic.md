---
lang: "hi"
type: "exercise"
slug: "maze-solve-basic"
title: "भूलभुलैया हल कीजिए"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "6ed23a25576883e0f33304cffc408fe0"
governance_sha: "45feeea"
content_version: "c955f7ed6cb9"
published_at: "2026-07-31"
forum_topic_id: 804
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"आप भूलभुलैया के आख़िर तक नहीं पहुंचे."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"किरदार को भूलभुलैया के आख़िर तक पहुंचाइए"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"हरे निशान तक पहुंचने के लिए भूलभुलैया में से रास्ता निकालिए"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"किरदार को भूलभुलैया के आख़िर तक पहुंचाइए"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"आपका काम है, अपने किरदार को भूलभुलैया में से निकालकर हरे रंग के लक्ष्य वाले खाने तक पहुंचाना."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"मुझे किसे कहां ले जाना है?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"आपको उस छोटे किरदार को, जो ऊपर बाईं तरफ़ से शुरू होता है, नीचे दाईं तरफ़ बने हरे गोले तक ले जाना है, और रास्ते में लाल धारियों वाले खानों से बचना है."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"मेरे बाएं मोड़ने पर किरदार दाएं मुड़ जाता है!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if you are facing right, and turn left, the person will change to face up.","target":"किरदार उसी दिशा के हिसाब से मुड़ता है जिस तरफ़ वह इस वक़्त देख रहा है. तो अगर आपका किरदार दाईं तरफ़ देख रहा है और आप उसे बाएं मोड़ते हैं, तो अब वह ऊपर की तरफ़ देखने लगेगा."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"अरे नहीं! आपने भूलभुलैया के किनारे से बाहर गिरने की कोशिश की!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"आउच! आप दीवार से टकरा गए!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"आउच! आप आग में चले गए!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"छी! आपने पॉटी पर पैर रख दिया! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"किरदार को एक खाना आगे ले जाता है"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"किरदार को 90 डिग्री बाएं घुमाता है"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"किरदार को 90 डिग्री दाएं घुमाता है"}]}]}]
---

आपके पहले exercise में आपका स्वागत है!

इस exercise का मक़सद है कि आप सीखने के इस माहौल से वाक़िफ़ हो जाएं. आपका काम है, बाईं तरफ़ दिख रही भूलभुलैया को उस छोटे किरदार को इंस्ट्रक्शन देकर हल करना. आप वे सारे इंस्ट्रक्शन लिखते हैं जिन पर किरदार को चलना है, फिर **Run Code** पर क्लिक करते हैं ताकि वह उन पर अमल करे.

आप ये तीन इंस्ट्रक्शन इस्तेमाल कर सकते हैं:

- `move()` (आगे बढ़ना) किरदार को एक क़दम आगे ले जाता है
- `turnLeft()` (बाएं मुड़ना) किरदार को बाईं तरफ़ घुमाता है (जिस दिशा में वह इस वक़्त देख रहा है, उसके हिसाब से)
- `turnRight()` (दाएं मुड़ना) किरदार को दाईं तरफ़ घुमाता है (जिस दिशा में वह इस वक़्त देख रहा है, उसके हिसाब से)

आप देख सकते हैं कि बाईं तरफ़ पहले तीन इंस्ट्रक्शन हमने पहले ही लिख दिए हैं. सबसे पहले **"Run Code"** बटन पर क्लिक करके देखिए कि वे क्या करते हैं. फिर **और इंस्ट्रक्शन जोड़िए**, ताकि आपका किरदार भूलभुलैया के आख़िर तक पहुंच जाए. हर लाइन पर एक इंस्ट्रक्शन लिखिए, फिर **Run Code** दबाकर उन सबको एक साथ चलाइए.

अपने कोड को बार-बार चलाकर देखने की आदत डालना बहुत अच्छी बात है!

जैसे ही आप भूलभुलैया हल कर लेंगे, आप डैशबोर्ड पर वापस जाकर अगला पाठ शुरू कर सकते हैं.
