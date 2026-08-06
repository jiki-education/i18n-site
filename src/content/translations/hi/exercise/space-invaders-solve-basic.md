---
lang: "hi"
type: "exercise"
slug: "space-invaders-solve-basic"
title: "Space Invaders"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/space-invaders-solve-basic"
en_md5: "832d47151ead209ebf0f931a8472ec30"
governance_sha: "c80036b"
content_version: "ceabad83abb3"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"describers","rows":[{"key":"move","english":"moved the laser cannon to the right","target":"लेज़र कैनन को दाईं ओर खिसकाया"}]},{"name":"checks","rows":[{"key":"notShotAllAliens","english":"You didn't shoot down all the aliens.","target":"आपने सभी एलियन नहीं मार गिराए।"}]},{"name":"tasks","rows":[{"key":"shootTheAliens.name","english":"Shoot all the aliens","target":"सभी एलियन को मार गिराइए"},{"key":"shootTheAliens.description","english":"Move your laser cannon to the right and shoot each alien as you pass underneath it. Don't miss or move off the edge!","target":"अपनी लेज़र कैनन को दाईं ओर खिसकाइए। हर एलियन को तब मार गिराइए जब आप उसके ठीक नीचे से गुज़रें। निशाना चूकिए मत और किनारे से बाहर मत जाइए।"}]},{"name":"scenarios","rows":[{"key":"shootTheAliens.name","english":"Shoot the Aliens","target":"एलियन मार गिराइए"},{"key":"shootTheAliens.description","english":"Move right and shoot all the aliens","target":"दाईं ओर खिसकाइए और सभी एलियन को मार गिराइए।"}]},{"name":"hints","rows":[{"key":"whatDoINeedToDo.question","english":"What do I need to do?","target":"मुझे क्या करना है?"},{"key":"whatDoINeedToDo.answer","english":"Like the maze, you need to move your character (this time a laser, not a person). But you also need to shoot from the laser! Move the laser underneath an alien then shoot. Then move again until you're under the next alien, and shoot again. Continue until you've shot down the last alien!","target":"भूलभुलैया की तरह, आपको अपने पात्र को खिसकाना है (इस बार यह एक लेज़र है, कोई व्यक्ति नहीं)। लेकिन आपको लेज़र से गोली भी चलानी है! लेज़र को किसी एलियन के ठीक नीचे ले जाइए, फिर गोली चलाइए। फिर दोबारा खिसकाइए जब तक आप अगले एलियन के नीचे न पहुँच जाएँ, और दोबारा गोली चलाइए। यह तब तक करते रहिए जब तक आप आखिरी एलियन को मार न गिराएँ!"},{"key":"cantWasteAmmo.question","english":"I get told I can't waste ammo.","target":"मुझे बताया जाता है कि मैं बारूद बरबाद नहीं कर सकता।"},{"key":"cantWasteAmmo.answer","english":"You should only `shoot()` when you're directly below an alien. Try moving one step further (or maybe you've gone one too far?)","target":"आपको केवल तभी `shoot()` करना चाहिए जब आप ठीक किसी एलियन के नीचे हों। एक कदम और आगे खिसकने की कोशिश कीजिए (या हो सकता है आप एक कदम ज़्यादा आगे चले गए हों?)"}]},{"name":"functions","rows":[{"key":"move.description","english":"Moves the laser cannon **one position to the right**. If you move off the right edge of the screen, you lose!","target":"लेज़र कैनन को **एक स्थान दाईं ओर** खिसकाता है। यदि आप स्क्रीन के दाएँ किनारे से बाहर निकल जाते हैं, तो आप हार जाते हैं!"},{"key":"move.category","english":"Movement","target":"गति"},{"key":"shoot.description","english":"Shoots the laser upwards. **Only shoot when there's an alien above you**, or you lose the game!","target":"लेज़र को ऊपर की ओर चलाता है। **केवल तभी गोली चलाइए जब आपके ऊपर कोई एलियन हो**, वरना आप गेम हार जाएँगे!"},{"key":"shoot.category","english":"Action","target":"क्रिया"}]}]},{"heading":"Shared \"space-invaders\" messages","note":"Shared by every exercise in the space-invaders category, not just this one. A change here changes all of them.","namespaces":[{"name":"describers","rows":[{"key":"moveLeft","english":"moved the laser cannon to the left","target":null},{"key":"moveRight","english":"moved the laser cannon to the right","target":null},{"key":"shoot","english":"shot the laser upwards","target":null},{"key":"isAlienAbove","english":"determined if there was an alien above the laser cannon","target":null},{"key":"getStartingAliensInRow","english":"retrieved the starting positions of row ${arg1} of aliens","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]},{"name":"errors","rows":[{"key":"laserOverheated","english":"Oh no! Your laser cannon overheated from shooting too fast! You need to move before you can shoot a second time.","target":null},{"key":"missedShot","english":"Oh no, you missed. Wasting ammo is not allowed!","target":null},{"key":"moveOffEdge","english":"Oh no, you tried to move off the edge!","target":null},{"key":"rowNotNumber","english":"Oh no, the row input you provided is not a number.","target":null},{"key":"rowOutOfRange","english":"Oh no, you tried to access a row of aliens that doesn't exist. You asked for row {{row}}, but the rows are numbered 0 to {{max}}.","target":null},{"key":"notAllAliensDead","english":"You need to defeat all the aliens before you can celebrate!","target":null}]}]}]
---

आपके दूसरे अभ्यास - Space Invaders - में आपका स्वागत है! यह 1970 के दशक का एक क्लासिक आर्केड गेम है, और मेरे द्वारा खेले गए पहले गेम में से एक है। आने वाले हफ्तों में आप एलियन को मार गिराने के लिए पूरी तरह से स्वचालित लेज़र बनाएँगे। लेकिन अभी, आपका काम सिर्फ सभी एलियन को खुद मार गिराना है!

आपके पास दो फंक्शन (_function_) हैं:

- `move()` (खिसकाना) आपकी लेज़र कैनन को एक स्थान दाईं ओर खिसकाता है।
- `shoot()` (लेज़र चलाना) लेज़र को ऊपर की ओर चलाता है।

हमने आपके लिए पहला `move()` पहले से रख दिया है। **एलियन कहाँ हैं, यह देखिए**, फिर उन सभी को खत्म करने के लिए `move()` और `shoot()` कॉलों का एक क्रम लिखिए।

सावधान रहिए:

- यदि आप तब गोली चलाते हैं जब आपके ऊपर कोई एलियन न हो, तो आपको एक एरर (_error_) मिलेगी (क्योंकि बारूद बरबाद करना मना है!)।
- यदि आप स्क्रीन के दाएँ किनारे से बाहर निकल जाते हैं, तो आपको एरर मिलेगी।

मज़े कीजिए!
