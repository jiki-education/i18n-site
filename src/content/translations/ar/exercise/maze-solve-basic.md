---
lang: "ar"
type: "exercise"
slug: "maze-solve-basic"
title: "حل المتاهة"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "f5a48d9"
content_version: "0385dfc0c64c"
published_at: "2026-08-06"
forum_topic_id: 795
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"لم تصل إلى نهاية المتاهة."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"وجّه الشخصية إلى نهاية المتاهة"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"انتقل عبر المتاهة للوصول إلى الهدف الأخضر"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"وجّه الشخصية إلى نهاية المتاهة"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"مهمتك هي توجيه شخصيتك عبر المتاهة إلى المربع الأخضر."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"ما الذي أحركه وإلى أين؟"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"أنت تحرك الشخص الصغير، الذي يبدأ من الأعلى على اليسار، إلى الدائرة الخضراء في الأسفل على اليمين، متجنبًا أي خلايا مخططة باللون الأحمر."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"عندما أستدير لليسار، تستدير الشخصية لليمين!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"تستدير الشخصية بناءً على الاتجاه الذي تواجهه. لذا، إذا كانت تواجه اليمين، واستدارت لليسار، فستتغير لتواجه الأعلى."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"يا للهول! لقد حاولت السقوط من حافة المتاهة!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"آخ! لقد اصطدمت بالجدار!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"آخ! لقد دخلت في النار!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"يا للقرف! لقد دست على البراز! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"تحريك الشخصية خلية واحدة إلى الأمام"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"تدوير الشخصية 90 درجة نحو اليسار"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"تدوير الشخصية 90 درجة نحو اليمين"}]}]}]
---

مرحبًا بك في أول تمرين لك!

الهدف من هذا التمرين هو أن تتعرف على كيفية عمل بيئة التعلّم. مهمتك هي حل المتاهة التي تراها على اليسار بإعطاء الشخصية الصغيرة تعليمات. تكتب كل التعليمات التي تحتاجها الشخصية لتتبعها، ثم تنقر على زر **"شغّل الكود"** لتجعلها تتبعها.

التعليمات الثلاث التي يمكنك استخدامها هي:

- `move()` (يتحرك خطوة واحدة للأمام)
- `turnLeft()` (يستدير لليسار) بالنسبة للاتجاه الذي تواجهه حاليًا
- `turnRight()` (يستدير لليمين) بالنسبة للاتجاه الذي تواجهه حاليًا

يمكنك أن ترى أننا قد كتبنا بالفعل التعليمات الثلاث الأولى على الجانب الأيسر. ابدأ بالنقر على زر **"شغّل الكود"** لترى ما تفعله. ثم **أضف المزيد من التعليمات** لتحريك شخصيتك إلى نهاية المتاهة. ضع تعليمة واحدة في كل سطر ثم اضغط **"شغّل الكود"** لتشغيلها جميعًا.

من الممارسات الجيدة أن تعتاد على تشغيل الكود بانتظام!

بمجرد أن تحل المتاهة، يمكنك العودة إلى لوحة التحكم وبدء الدرس التالي.
