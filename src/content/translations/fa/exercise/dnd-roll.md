---
lang: "fa"
type: "exercise"
slug: "dnd-roll"
title: "پرتاب D&D"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/dnd-roll"
en_md5: "9f9dc476ef35afe5b76effc918ca5771"
governance_sha: "c80036b"
content_version: "e369c1a29930"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"unknownDice","english":"Sorry - Jiki doesn't have a {{sides}} sided dice handy!","target":"متأسفانه جیکی تاس {{sides}} وجهی در دسترس ندارد!"},{"key":"announceNumber","english":"You can only announce a number","target":"فقط می‌توانید یک عدد را اعلام کنید"},{"key":"attackNumber","english":"Attack must be a number","target":"حمله باید یک عدد باشد"},{"key":"damageNumber","english":"Damage must be a number","target":"آسیب باید یک عدد باشد"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled a die and got ${return}","target":"تاسی ریخته شد و ${return} به دست آمد"},{"key":"announce","english":"announced ${arg1}","target":"${arg1} اعلام شد"},{"key":"strike","english":"struck the goblin with attack ${arg1} and damage ${arg2}","target":"با حمله ${arg1} و آسیب ${arg2} به گابلین ضربه زده شد"}]},{"name":"checks","rows":[{"key":"announcementCount","english":"Expected 3 announcements but got {{got}}. Make sure you announce each roll.","target":"انتظار ۳ اعلام بود ولی {{got}} دریافت شد. مطمئن شوید که هر تاس را اعلام می‌کنید."},{"key":"firstAnnouncement","english":"Expected the first announcement to be {{attack}} (the attack roll) but got {{got}}.","target":"انتظار می‌رفت اولین اعلام {{attack}} (پرتاب حمله) باشد، اما {{got}} دریافت شد."},{"key":"secondAnnouncement","english":"Expected the second announcement to be {{damage}} (the base damage roll) but got {{got}}.","target":"انتظار می‌رفت دومین اعلام {{damage}} (پرتاب آسیب پایه) باشد، اما {{got}} دریافت شد."},{"key":"thirdAnnouncement","english":"Expected the third announcement to be {{bonus}} (the bonus roll) but got {{got}}.","target":"انتظار می‌رفت سومین اعلام {{bonus}} (پرتاب امتیاز) باشد، اما {{got}} دریافت شد."},{"key":"notStruck","english":"You didn't strike the goblin. Make sure you call <code>strike()</code>.","target":"شما به گابلین ضربه نزدید. مطمئن شوید که <code>strike()</code> را فراخوانی می‌کنید."},{"key":"wrongAttack","english":"Expected the attack to be {{attack}} but got {{got}}. Pass the attack roll to <code>strike()</code>.","target":"انتظار می‌رفت حمله {{attack}} باشد، اما {{got}} دریافت شد. نمره حمله را به <code>strike()</code> بدهید."},{"key":"wrongDamage","english":"Expected total damage to be {{totalDamage}} ({{damage}} + {{bonus}}) but got {{got}}. Add the base damage and bonus together.","target":"انتظار می‌رفت آسیب کل {{totalDamage}} ({{damage}} + {{bonus}}) باشد، اما {{got}} دریافت شد. آسیب پایه و امتیاز را با هم جمع کنید."}]},{"name":"tasks","rows":[{"key":"rollAndStrike.name","english":"Roll the dice and strike the goblin","target":"تاس‌ها را بریزید و به گابلین ضربه بزنید"},{"key":"rollAndStrike.description","english":"Roll three dice (d20 for attack, d12 for base damage, d10 for bonus), announce each roll, then strike the goblin with your attack roll and total damage (base + bonus).","target":"سه تاس بریزید (d20 برای حمله، d12 برای آسیب پایه، d10 برای امتیاز)، هر تاس را اعلام کنید، سپس با نمره حمله و آسیب کل (پایه + امتیاز) به گابلین ضربه بزنید."}]},{"name":"scenarios","rows":[{"key":"randomRolls.name","english":"Roll and strike","target":"تاس انداختن و ضربه"},{"key":"randomRolls.description","english":"Roll d20 for attack, d12 for base damage, d10 for bonus. Strike the goblin with your attack and total damage.","target":"برای حمله d20، برای آسیب پایه d12، و برای امتیاز d10 بیندازید. با نمره حمله و آسیب کل خود به گابلین ضربه بزنید."}]},{"name":"hints","rows":[{"key":"chooseDie.question","english":"How do I choose what type of die to use?","target":"چطور می‌توانم نوع تاس را انتخاب کنم؟"},{"key":"chooseDie.answer","english":"For a 20 sided dice, use 20 as the input to roll - e.g. `roll(20)`. For a 12 sided dice, call `roll(12)`.","target":"برای یک تاس ۲۰ وجهی، ۲۰ را به‌عنوان ورودی `roll` استفاده کنید - مثلاً `roll(20)`. برای یک تاس ۱۲ وجهی، `roll(12)` را فراخوانی کنید."}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls a die with the given number of sides and **returns** the result.","target":"با تعداد وجه داده‌شده یک تاس می‌ریزد و نتیجه را **برمی‌گرداند**."},{"key":"roll.category","english":"Dice","target":"تاس"},{"key":"announce.description","english":"Announces a dice roll value.","target":"مقدار تاس انداخته شده را اعلام می‌کند."},{"key":"announce.category","english":"Action","target":"اقدام"},{"key":"strike.description","english":"Strikes the goblin with the given attack roll and total damage.","target":"با نمره حمله و آسیب کل داده‌شده به گابلین ضربه می‌زند."},{"key":"strike.category","english":"Action","target":"اقدام"}]}]}]
---

شما در حال ساختن رباتی هستید که می‌تواند بازی «سیاه‌چال‌ها و اژدهایان» (DnD) را انجام دهد. اگر با DnD آشنا نیستید، فرض اصلی این است که با سناریوهای زیادی روبرو می‌شوید و برای فهمیدن اینکه چه اتفاقی می‌افتد، «تاس» می‌ریزید. تاس‌های گوناگونی با تعداد وجه‌های مختلف وجود دارند (نه فقط تاس شش‌وجهی که ممکن است به آن عادت داشته باشید!)

یکی از سناریوهایی که باید مدیریت کنید، روبه‌رو شدن با یک گابلین است. برای حمله به گابلین باید:

- با ریختن یک تاس ۲۰ وجهی، یک **نمره حمله** تولید کنید.
- با ریختن یک تاس ۱۲ وجهی، یک **نمره آسیب پایه** تولید کنید.
- با ریختن یک تاس ۱۰ وجهی، یک **نمره آسیب اضافی** تولید کنید.
- آسیب پایه و آسیب اضافی را با هم جمع کنید تا **آسیب کل** خود را به‌دست آورید.
- با نمره حمله و آسیب کل خود، به گابلین ضربه بزنید.

هر بار که یک تاس می‌ریزید، باید عددی را که آورده‌اید به بازیکنان دیگر اعلام کنید. اگر سعی کنید بدون اعلام عددها ضربه بزنید، ممکن است فکر کنند تقلب می‌کنید!

سه «تابع» دارید که می‌توانید از آن‌ها استفاده کنید:

- `roll(sides)` (تاس انداختن با تعداد وجه داده‌شده) یک تاس با تعداد وجه داده‌شده می‌ریزد. این تابع نتیجه را «برمی‌گرداند».
- `announce(value)` (اعلام نتیجه تاس) عدد تاس را اعلام می‌کند.
- `strike(attack, damage)` (ضربه زدن با نمره حمله و آسیب) با نمره حمله و آسیب کل به گابلین ضربه می‌زند.

**مهم:** هر بار که `roll()` را صدا می‌زنید، جیکی یک تاس می‌ریزد و عدد متفاوتی می‌گیرد. انتظار نداشته باشید که ریختن یک تاس یکسان دو بار، هر بار همان عدد را بدهد.
