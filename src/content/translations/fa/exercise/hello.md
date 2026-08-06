---
lang: "fa"
type: "exercise"
slug: "hello"
title: "سلام"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hello"
en_md5: "0e1932189205e5eaa4f7ddfa58b16f6c"
governance_sha: "c80036b"
content_version: "2b2305c067d7"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createSayHelloFunction.name","english":"Create sayHello function","target":"ایجاد تابع sayHello"},{"key":"createSayHelloFunction.description","english":"Write a sayHello function that takes a name and returns a greeting in the format 'Hello, [name]!'.","target":"تابع sayHello بنویسید که یک اسم دریافت کند و یک خوش‌آمدگویی به شکل 'Hello, [name]!' برگرداند."}]},{"name":"scenarios","rows":[{"key":"helloAiko.name","english":"Greet Aiko","target":"خوش‌آمدگویی به Aiko"},{"key":"helloAiko.description","english":"Return 'Hello, Aiko!'","target":"برگرداندن 'Hello, Aiko!'"},{"key":"helloPriya.name","english":"Greet Priya","target":"خوش‌آمدگویی به Priya"},{"key":"helloPriya.description","english":"Return 'Hello, Priya!'","target":"برگرداندن 'Hello, Priya!'"},{"key":"helloMei.name","english":"Greet Mei","target":"خوش‌آمدگویی به Mei"},{"key":"helloMei.description","english":"Return 'Hello, Mei!'","target":"برگرداندن 'Hello, Mei!'"}]},{"name":"hints","rows":[{"key":"answerShape.question","english":"What's the basic shape of the answer I'm trying to build?","target":"ساختار کلی جوابی که می‌خواهم بسازم چیست؟"},{"key":"answerShape.answer","english":"Three pieces joined together: the fixed start `\"Hello, \"`, then the name, then the fixed end `\"!\"`.","target":"سه تکه که به هم چسبانده شده‌اند: ابتدای ثابت `\"Hello, \"`، سپس اسم، و انتهای ثابت `\"!\"`."},{"key":"joinStrings.question","english":"How do I join strings together?","target":"چطور رشته‌ها را به هم بچسبانم؟"},{"key":"joinStrings.answer","english":"Use concatenation with `+`, or a template string with `${}` placeholders, to stick all three pieces together into a single string.","target":"برای چسباندن هر سه تکه به هم و ساختن یک رشته‌ی واحد، از الحاق با `+` یا یک رشته‌ی الگو با جایگزین‌های `${}` استفاده کنید."}]}]}]
---

در دو تمرین بعدی، به تمرین ساخت تابع‌ها ادامه می‌دهیم و شروع به استفاده از مقداری دستکاری رشته می‌کنیم.

اول از همه، ساده‌ترین حالت را بررسی می‌کنیم.

کار شما ایجاد تابعی به اسم `sayHello(name)` (سلام گفتن به اسم) است.

این تابع باید برای آن شخص یک خوش‌آمدگویی برگرداند، پس اگر `sayHello("Jeremy")` را بنویسید، تابع باید `"Hello, Jeremy!"` را برگرداند. اگر `sayHello("Nicole")` را بنویسید، باید `"Hello, Nicole!"` را برگرداند.

امیدواریم این یک تمرین سریع باشد و پایه‌ای برای تمرین بعدی جذاب‌تر بنا کند.
