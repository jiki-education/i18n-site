---
lang: "fa"
type: "exercise"
slug: "two-fer"
title: "دو-به-یک"
status: "published"
source_repo: "i18n"
source_path: "locales/fa/curriculum/exercises/two-fer"
en_md5: "259ef6df34222c26ac1869815e38f66e"
governance_sha: "0e11138"
content_version: "20cecccf5092"
published_at: "2026-08-10"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"شما بیش از ۶ خط کد نوشته‌اید."}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"ساخت تابع دو-به-یک"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"یک تابع `twoFer` بنویسید که نامی دریافت می‌کند و «One for [name], one for me.» را برمی‌گرداند. اگر نامی داده نشد (رشته‌ی خالی)، به‌جای نام از `\"you\"` استفاده کنید."},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"حل با ۶ خط کد"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"آیا می‌توانید این را تنها با ۶ خط کد حل کنید؟"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"نامی داده نشده است"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"نامی داده نشده است، بنابراین «One for you, one for me.» را برمی‌گردانیم."},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"نام داده شده: Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"نامش «Alice» است، پس «One for Alice, one for me.» را برمی‌گردانیم."},{"key":"twoFerTom.name","english":"Name given as Tom","target":"نام داده شده: Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"نامش «Tom» است، بنابراین «One for Tom, one for me.» را برمی‌گردانیم."},{"key":"bonus1.name","english":"Six lines of code","target":"۶ خط کد"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"تمرین را تنها با ۶ خط کد حل کنید."}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"چه چیزی بر اساس ورودی تغییر می‌کند؟"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"فقط یک چیز: نامی که در وسط جمله قرار می‌گیرد. اگر نامی دریافت کردید، از آن استفاده کنید. در غیر این صورت، از مقدار پیش‌فرض `\"you\"` استفاده کنید."},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"چگونه بررسی کنم که آیا نامی به من داده شده است؟"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"با یک دستور `if` که ورودی را با رشته‌ی خالی `\"\"` مقایسه می‌کند. اگر خالی بود، از `\"you\"` استفاده کنید. وگرنه از خود ورودی استفاده کنید."},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"چگونه جمله‌ی نهایی را بسازم؟"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"سه بخش (`\"One for \"`، نام انتخاب‌شده و `\", one for me.\"`) را با استفاده از الحاق (`+`) یا رشته‌ی الگو به هم متصل کنید."}]}]}]
---

حالا می‌خواهیم از آن تمرین ساده‌ی «Hello» فراتر برویم و چند قانون اضافی به آن بیفزاییم.

در برخی لهجه‌های انگلیسی، اگر «two for» را سریع بگویید، شبیه «two fer» می‌شود. دو-به-یک یعنی وقتی یکی می‌خرید، یکی هم رایگان می‌گیرید.

یک شیرینی‌فروشی را تصور کنید که تخفیف ویژه‌ای دارد: دو شیرینی را به قیمت یکی می‌توانید بخرید. شما از این تخفیف استفاده می‌کنید و تصمیم می‌گیرید شیرینی اضافه را به دیگری بدهید.

وظیفه‌ی شما این است که مشخص کنید هنگام دادن شیرینی اضافه چه می‌گویید.

- اگر اسم فرد را بدانید (مثلاً Alice)، آن‌وقت می‌گویید: `"One for Alice, one for me."`
- اگر اسم فرد را ندانید، می‌گویید: `"One for you, one for me."`

تابعی با نام `twoFer(name)` (دو-به-یک) بنویسید که گفتگوی مناسب را برگرداند.

چند مثال:

| فراخوانی تابع      | برمی‌گرداند                     |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

به عنوان امتیاز اضافه، می‌توانید این تابع را تنها با **۶ خط کد** بنویسید؟

موفق باشید!
