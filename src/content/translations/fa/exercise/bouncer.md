---
lang: "fa"
type: "exercise"
slug: "bouncer"
title: "بادیگارد"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/bouncer"
en_md5: "eefcfb32249cce303d014044e557b2af"
governance_sha: "c80036b"
content_version: "0b70365c484f"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"age25NotLetIn","english":"The person is 25 — they should have been let in, but weren't.","target":"فرد ۲۵ سال دارد، باید اجازه‌ی ورود می‌گرفت اما اجازه‌ی ورود نگرفت."},{"key":"age18LetIn","english":"The person is 18 — they should not have been let in, but were.","target":"فرد ۱۸ سال دارد، نباید اجازه‌ی ورود می‌گرفت اما اجازه‌ی ورود گرفت."},{"key":"age21NotLetIn","english":"The person is 21 — they should have been let in, but weren't.","target":"فرد ۲۱ سال دارد، باید اجازه‌ی ورود می‌گرفت اما اجازه‌ی ورود نگرفت."},{"key":"age20LetIn","english":"The person is exactly 20 — not over 20, so they should not have been let in, but were.","target":"فرد دقیقاً ۲۰ سال دارد. سنش بالای ۲۰ نیست، پس نباید اجازه‌ی ورود می‌گرفت اما این‌طور شد."}]},{"name":"tasks","rows":[{"key":"checkAge.name","english":"Check the person's age","target":"سن فرد را بررسی کنید"},{"key":"checkAge.description","english":"Get the person's age and check if they're over 20. If they are, let them in.","target":"سن فرد را بگیرید و بررسی کنید که بیش از ۲۰ سال دارد یا نه. اگر داشت، اجازه‌ی ورود بدهید."}]},{"name":"scenarios","rows":[{"key":"age25.name","english":"Age 25","target":"سن ۲۵"},{"key":"age25.description","english":"The person is 25 years old — they should be let in.","target":"فرد ۲۵ سال دارد و باید اجازه‌ی ورود بگیرد."},{"key":"age18.name","english":"Age 18","target":"سن ۱۸"},{"key":"age18.description","english":"The person is 18 years old — they should not be let in.","target":"فرد ۱۸ سال دارد و نباید اجازه‌ی ورود بگیرد."},{"key":"age21.name","english":"Age 21","target":"سن ۲۱"},{"key":"age21.description","english":"The person is 21 years old — just above 20, they should be let in.","target":"فرد ۲۱ سال دارد. سنش درست بالای ۲۰ است، بنابراین باید اجازه‌ی ورود بگیرد."},{"key":"age20.name","english":"Age 20","target":"سن ۲۰"},{"key":"age20.description","english":"The person is exactly 20 — not over 20, so they should not be let in.","target":"فرد دقیقاً ۲۰ سال دارد. بالای ۲۰ سال ندارد، پس نباید اجازه‌ی ورود بگیرد."}]},{"name":"hints","rows":[{"key":"askAge.question","english":"How do I know their age?","target":"چطور سنش را بفهمم؟"},{"key":"askAge.answer","english":"Use the `askAge()` function. It will return a different value in each scenario.","target":"از تابع `askAge()` استفاده کنید. این تابع در هر سناریو مقدار متفاوتی برمی‌گرداند."},{"key":"ifStatement.question","english":"How do I vary what I do?","target":"چطور کاری را که انجام می‌دهم تغییر دهم؟"},{"key":"ifStatement.answer","english":"Use an `if` statement - check the concept if you need more help!","target":"از دستور `if` استفاده کنید. اگر به راهنمایی بیش‌تری نیاز داشتید، مفهوم آن را ببینید!"}]},{"name":"describers","rows":[{"key":"askAge","english":"asked the person's age","target":"سن فرد پرسیده شد"},{"key":"letIn","english":"let the person in","target":"به فرد اجازه‌ی ورود داده شد"}]},{"name":"functions","rows":[{"key":"askAge.description","english":"Returns the **age** of the person waiting outside.","target":"**سن** فردی را که بیرون منتظر است برمی‌گرداند."},{"key":"askAge.category","english":"Information","target":"اطلاعات"},{"key":"letIn.description","english":"Lets the person in.","target":"فرد را وارد می‌کند."},{"key":"letIn.category","english":"Action","target":"عملیات"}]}]}]
---

شما در حال کدنویسی یک بادیگارد رباتیک برای بار «The Neon Gates» هستید. وظیفه‌ی ربات این است که سن فرد را بررسی کند و تصمیم بگیرد که آیا اجازه‌ی ورود بدهد یا نه.

شما دو تابع در اختیار دارید: `askAge()` (سن را بپرس) سن فردی را که بیرون منتظر است برمی‌گرداند، و `letIn()` (وارد کن) فرد را وارد می‌کند.

سیاست این مکان این است که فقط افراد **۲۱ سال و بالاتر** اجازه‌ی ورود دارند.

سن فرد را بپرسید، و اگر به اندازه‌ی کافی بزرگ باشد، اجازه‌ی ورود بدهید!
