---
lang: "ur"
type: "exercise"
slug: "maze-solve-basic"
title: "بھول بھلیاں حل کریں"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "6ed23a25576883e0f33304cffc408fe0"
governance_sha: "33fd2de"
content_version: "f4ea733edf98"
published_at: "2026-07-31"
forum_topic_id: 476
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"آپ بھول بھلیاں کے آخر تک نہیں پہنچے۔"}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"کردار کو بھول بھلیاں کے آخر تک پہنچائیں"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"سبز ہدف تک پہنچنے کے لیے بھول بھلیاں میں سے راستہ نکالیں"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"کردار کو بھول بھلیاں کے آخر تک پہنچائیں"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"آپ کا کام یہ ہے کہ اپنے کردار کو بھول بھلیاں میں سے گزار کر سبز منزل والے خانے تک پہنچائیں۔"}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"میں کس چیز کو کہاں لے جا رہا ہوں؟"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"آپ اُس چھوٹے کردار کو، جو اوپر بائیں کونے سے شروع ہوتا ہے، نیچے دائیں طرف موجود سبز دائرے تک لے جا رہے ہیں، اور راستے میں سرخ دھاری والے خانوں سے بچ رہے ہیں۔"},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"جب میں بائیں مڑتا ہوں تو کردار دائیں مڑ جاتا ہے!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if you are facing right, and turn left, the person will change to face up.","target":"کردار اُس سمت کے لحاظ سے مڑتا ہے جس کی طرف وہ دیکھ رہا ہے۔ تو اگر آپ دائیں طرف دیکھ رہے ہوں اور بائیں مڑیں، تو کردار اوپر کی طرف رُخ کر لے گا۔"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"ارے نہیں! آپ بھول بھلیوں کے کنارے سے گرنے ہی والے تھے!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"اُف! آپ دیوار سے جا ٹکرائے!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"اُف! آپ آگ میں چل پڑے!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"چھی! آپ گندگی میں چل پڑے! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"کردار کو ایک خانہ آگے بڑھانا"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"کردار کو 90 درجے بائیں گھمانا"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"کردار کو 90 درجے دائیں گھمانا"}]}]}]
---

آپ کی پہلی مشق میں خوش آمدید!

اس مشق کا مقصد یہ ہے کہ آپ سیکھنے کے اس ماحول سے واقف ہو جائیں۔ آپ کا کام یہ ہے کہ بائیں طرف نظر آنے والی بھول بھلیاں کو اُس چھوٹے کردار کو ہدایات دے کر حل کریں۔ آپ وہ تمام ہدایات لکھتے ہیں جن پر کردار کو عمل کرنا ہے، پھر **Run Code** پر کلک کرتے ہیں تاکہ وہ اُن پر عمل کرے۔

آپ یہ تین ہدایات استعمال کر سکتے ہیں:

- `move()` (آگے بڑھنا) کردار کو ایک قدم آگے لے جاتا ہے
- `turnLeft()` (بائیں مڑنا) کردار کو بائیں طرف گھماتا ہے (اُس سمت کے لحاظ سے جس کی طرف وہ اِس وقت دیکھ رہا ہے)
- `turnRight()` (دائیں مڑنا) کردار کو دائیں طرف گھماتا ہے (اُس سمت کے لحاظ سے جس کی طرف وہ اِس وقت دیکھ رہا ہے)

آپ دیکھ سکتے ہیں کہ بائیں طرف پہلی تین ہدایات ہم پہلے ہی لکھ چکے ہیں۔ سب سے پہلے **”Run Code“** بٹن پر کلک کر کے دیکھیں کہ وہ کیا کرتی ہیں۔ پھر **مزید ہدایات شامل کریں** تاکہ آپ کا کردار بھول بھلیاں کے آخر تک پہنچ جائے۔ ہر لائن پر ایک ہدایت لکھیں، پھر **Run Code** دبا کر اُن سب کو چلائیں۔

اپنے کوڈ کو باقاعدگی سے چلاتے رہنے کی عادت ڈالنا بہت اچھی بات ہے!

جیسے ہی آپ بھول بھلیاں حل کر لیں، آپ ڈیش بورڈ پر واپس جا کر اگلا سبق شروع کر سکتے ہیں۔
