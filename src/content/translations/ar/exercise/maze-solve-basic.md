---
lang: "ar"
type: "exercise"
slug: "maze-solve-basic"
title: "حلّ المتاهة"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "6ed23a25576883e0f33304cffc408fe0"
governance_sha: "33fd2de"
content_version: "e5ca7b49d604"
published_at: "2026-07-31"
forum_topic_id: 470
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"لم تصل إلى نهاية المتاهة."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"وجّه الشخصية إلى نهاية المتاهة"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"تنقّل عبر المتاهة للوصول إلى الهدف الأخضر"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"وجّه الشخصية إلى نهاية المتاهة"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"مهمتك أن تقود شخصيتك عبر المتاهة إلى المربع الأخضر الهدف."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"ما الذي أحرّكه وإلى أين؟"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"أنت تحرّك الشخصية الصغيرة، التي تبدأ في أعلى اليسار، إلى الدائرة الخضراء في أسفل اليمين، مع تجنّب الخلايا المخطّطة بالأحمر."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"عندما أستدير يسارًا، تستدير الشخصية يمينًا!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if you are facing right, and turn left, the person will change to face up.","target":"تستدير الشخصية بالنسبة إلى الاتجاه الذي تنظر إليه. فإذا كانت تنظر إلى اليمين واستدارت يسارًا، فستصبح تنظر إلى الأعلى."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"يا للهول! لقد حاولت السقوط من حافة المتاهة!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"آخ! لقد اصطدمت بالجدار!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"آخ! لقد دخلت في النار!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"يا للقرف! لقد دست على البراز! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"تحريك الشخصية خلية واحدة إلى الأمام"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"تدوير الشخصية 90 درجة نحو اليسار"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"تدوير الشخصية 90 درجة نحو اليمين"}]}]}]
---

أهلًا بك في تمرينك الأول!

الهدف من هذا التمرين أن تتعرّف على طريقة عمل بيئة التعلّم. مهمتك أن تحلّ المتاهة التي تراها على اليسار، بإعطاء الشخصية الصغيرة تعليمات. تكتب كل التعليمات التي على الشخصية أن تتبعها، ثم تضغط **تشغيل الكود** كي تتبعها الشخصية.

التعليمات الثلاث التي يمكنك استخدامها هي:

- `move()` (تحرَّك) تنقل الشخصية خطوة واحدة إلى الأمام
- `turnLeft()` (استدر يسارًا) تُدير الشخصية إلى اليسار (بالنسبة إلى الاتجاه الذي تنظر إليه حاليًا)
- `turnRight()` (استدر يمينًا) تُدير الشخصية إلى اليمين (بالنسبة إلى الاتجاه الذي تنظر إليه حاليًا)

تلاحظ أننا كتبنا لك بالفعل التعليمات الثلاث الأولى على الجانب الأيسر. ابدأ بالضغط على زر **«تشغيل الكود»** لترى ما تفعله. ثم **أضف تعليمات أخرى** لتوصل شخصيتك إلى نهاية المتاهة. اكتب كل تعليمة في سطر منفصل، ثم اضغط **تشغيل الكود** لتشغيلها جميعًا.

من الجيد أن تعتاد على تشغيل الكود بانتظام!

بعد أن تحلّ المتاهة، يمكنك العودة إلى لوحة التحكم والبدء في الدرس التالي.
