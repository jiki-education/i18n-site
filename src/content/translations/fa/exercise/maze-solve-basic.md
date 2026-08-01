---
lang: "fa"
type: "exercise"
slug: "maze-solve-basic"
title: "از هزارتو عبور کنید"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "63b88af"
content_version: "653b29a4fec0"
published_at: "2026-08-01"
forum_topic_id: 802
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"به انتهای هزارتو نرسیدید."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"آدمک را تا انتهای هزارتو راهنمایی کنید"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"از هزارتو عبور کنید تا به هدف سبز برسید"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"آدمک را تا انتهای هزارتو راهنمایی کنید"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"کار شما این است که آدمک‌تان را از هزارتو عبور دهید و به خانه‌ی سبز مقصد برسانید."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"چه چیزی را کجا حرکت می‌دهم؟"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"آدمک را از گوشه‌ی بالا سمت چپ به دایره‌ی سبز پایین سمت راست ببرید؛ اما از خانه‌های قرمز راه‌راه رد نشوید."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"وقتی به چپ می‌چرخانم، آدمک به راست می‌چرخد!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"آدمک نسبت به جهتی که رو به آن است می‌چرخد. پس اگر رو به راست باشد و به چپ بچرخد، رو به بالا خواهد شد."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"وای نه! داشتید از لبه‌ی هزارتو می‌افتادید!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"آخ! به دیوار خوردید!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"آخ! رفتید توی آتش!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"اَه! رفتید توی پی‌پی! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"شخصیت را یک خانه به جلو می‌برد"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"شخصیت را ۹۰ درجه به چپ می‌چرخاند"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"شخصیت را ۹۰ درجه به راست می‌چرخاند"}]}]}]
---

به اولین تمرین‌تان خوش آمدید!

هدف تمرین این است که با نحوه‌ی کار محیط یادگیری آشنا شوید. کار شما این است که با دادن دستور به آدمک، از هزارتویی که در سمت چپ می‌بینید عبور کنید. همه‌ی دستورهایی را که آدمک باید دنبال کند می‌نویسید، بعد روی **«اجرای کد»** کلیک می‌کنید تا آن‌ها را انجام دهد.

سه دستوری که از آن‌ها می‌توانید استفاده کنید:

- `move()` (حرکت کن) که آدمک را یک قدم به جلو می‌برد
- `turnLeft()` (به چپ بچرخ) آدمک را به چپ می‌چرخاند (نسبت به جهتی که در حال حاضر رو به آن است)
- `turnRight()` (به راست بچرخ) آدمک را به راست می‌چرخاند (نسبت به جهتی که در حال حاضر رو به آن است)

می‌بینید که ما سه دستور اول را از قبل در سمت چپ نوشته‌ایم. اول روی دکمه‌ی **«اجرای کد»** کلیک کنید تا ببینید چه کار می‌کنند. بعد **دستورهای بیشتری اضافه کنید** تا آدمک‌تان به انتهای هزارتو برسد. هر دستور را در یک خط جداگانه بنویسید و بعد **«اجرای کد»** را بزنید تا همه‌ی آن‌ها اجرا شوند.

از این به بعد عادت کنید که کدتان را به جای فقط یک‌بار، چندین بار اجرا کنید!

وقتی از هزارتو عبور کردید، می‌توانید به داشبورد برگردید و درس بعدی را شروع کنید.
