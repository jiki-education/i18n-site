---
lang: "fa"
type: "exercise"
slug: "leap"
title: "سال کبیسه"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/leap"
en_md5: "0e6c7c50ad01b4d9fe07d721fd973afb"
governance_sha: "c80036b"
content_version: "f423e6a7be5c"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanOneLine","english":"You used more than one line of code within the function.","target":"شما بیش از یک خط کد در داخل تابع استفاده کردید."}]},{"name":"tasks","rows":[{"key":"determineLeapYear.name","english":"Determine if the year is a leap year","target":"تشخیص سال کبیسه"},{"key":"determineLeapYear.description","english":"Write a function called isLeapYear that takes a year as its input and returns true if it is a leap year, or false if it is not.","target":"تابعی به اسم isLeapYear بنویسید که یک سال را به عنوان ورودی دریافت می‌کند و اگر سال کبیسه باشد `true` و در غیر این صورت `false` برمی‌گرداند."},{"key":"solveInOneLine.name","english":"Solve in one line of code","target":"حل در یک خط کد"},{"key":"solveInOneLine.description","english":"Can you solve this with only one line of code within the function?","target":"آیا می‌توانید این را فقط با یک خط کد در داخل تابع حل کنید؟"}]},{"name":"scenarios","rows":[{"key":"year2015.name","english":"Year 2015","target":"سال ۲۰۱۵"},{"key":"year2015.description","english":"2015 is not divisible by 4 so is not a leap year.","target":"۲۰۱۵ بر ۴ بخش‌پذیر نیست، بنابراین سال کبیسه نیست."},{"key":"year1970.name","english":"Year 1970","target":"سال ۱۹۷۰"},{"key":"year1970.description","english":"1970 is not divisible by 4 so is not a leap year.","target":"۱۹۷۰ بر ۴ بخش‌پذیر نیست، بنابراین سال کبیسه نیست."},{"key":"year2100.name","english":"Year 2100","target":"سال ۲۱۰۰"},{"key":"year2100.description","english":"2100 is divisible by 100 but not by 400 so is not a leap year.","target":"۲۱۰۰ بر ۱۰۰ بخش‌پذیر است اما بر ۴۰۰ بخش‌پذیر نیست، بنابراین سال کبیسه نیست."},{"key":"year1900.name","english":"Year 1900","target":"سال ۱۹۰۰"},{"key":"year1900.description","english":"1900 is divisible by 100 but not by 400 so is not a leap year.","target":"۱۹۰۰ بر ۱۰۰ بخش‌پذیر است اما بر ۴۰۰ بخش‌پذیر نیست، بنابراین سال کبیسه نیست."},{"key":"year1800.name","english":"Year 1800","target":"سال ۱۸۰۰"},{"key":"year1800.description","english":"1800 is divisible by 100 but not by 400 so is not a leap year.","target":"۱۸۰۰ بر ۱۰۰ بخش‌پذیر است اما بر ۴۰۰ بخش‌پذیر نیست، بنابراین سال کبیسه نیست."},{"key":"year2000.name","english":"Year 2000","target":"سال ۲۰۰۰"},{"key":"year2000.description","english":"2000 is divisible by 400 so is a leap year.","target":"۲۰۰۰ بر ۴۰۰ بخش‌پذیر است، بنابراین سال کبیسه است."},{"key":"year2400.name","english":"Year 2400","target":"سال ۲۴۰۰"},{"key":"year2400.description","english":"2400 is divisible by 400 so is a leap year.","target":"۲۴۰۰ بر ۴۰۰ بخش‌پذیر است، بنابراین سال کبیسه است."},{"key":"year1996.name","english":"Year 1996","target":"سال ۱۹۹۶"},{"key":"year1996.description","english":"1996 is divisible by 4 but not by 100 so is a leap year.","target":"۱۹۹۶ بر ۴ بخش‌پذیر است اما بر ۱۰۰ بخش‌پذیر نیست، بنابراین سال کبیسه است."},{"key":"year1960.name","english":"Year 1960","target":"سال ۱۹۶۰"},{"key":"year1960.description","english":"1960 is divisible by 4 but not by 100 so is a leap year.","target":"۱۹۶۰ بر ۴ بخش‌پذیر است اما بر ۱۰۰ بخش‌پذیر نیست، بنابراین سال کبیسه است."},{"key":"bonus1.name","english":"One line of code","target":"یک خط کد"},{"key":"bonus1.description","english":"Solve the exercise with only one line of code within the function.","target":"تمرین را فقط با یک خط کد در داخل تابع حل کنید."}]},{"name":"hints","rows":[{"key":"basicRule.question","english":"What's the basic rule for a leap year?","target":"قانون اصلی سال کبیسه چیست؟"},{"key":"basicRule.answer","english":"Years divisible by 4 are leap years. So `year % 4 === 0` is the starting test.","target":"سال‌هایی که بر ۴ بخش‌پذیر هستند، سال کبیسه‌اند. بنابراین `year % 4 === 0` آزمون اولیه است."},{"key":"exceptions.question","english":"Are there exceptions?","target":"آیا استثناهایی وجود دارد؟"},{"key":"exceptions.answer","english":"Yes. Years divisible by 100 are NOT leap years, even though they're divisible by 4. For example, 1900 isn't a leap year.","target":"بله. سال‌هایی که بر ۱۰۰ بخش‌پذیر هستند، سال کبیسه نیستند، حتی اگر بر ۴ بخش‌پذیر باشند. برای مثال، ۱۹۰۰ سال کبیسه نیست."},{"key":"exceptionsToExceptions.question","english":"Are there exceptions to the exception?","target":"آیا استثنایی برای این استثنا وجود دارد؟"},{"key":"exceptionsToExceptions.answer","english":"Yes. Years divisible by 400 ARE leap years after all. For example, 2000 is. So the rule cascades: divisible by 4, but not by 100, unless also by 400.","target":"بله. سال‌هایی که بر ۴۰۰ بخش‌پذیر هستند، در نهایت سال کبیسه‌اند. برای مثال، ۲۰۰۰ کبیسه است. پس قاعده به این صورت زنجیره‌ای است: بر ۴ بخش‌پذیر، اما بر ۱۰۰ نه، مگر آن‌که بر ۴۰۰ هم بخش‌پذیر باشد."},{"key":"checkDivisibility.question","english":"How do I check divisibility?","target":"چطور بخش‌پذیری را بررسی کنم؟"},{"key":"checkDivisibility.answer","english":"Use the remainder operator `%`. `year % 4 === 0` is true when the year divides exactly by 4 with nothing left over. Same trick with 100 and 400.","target":"از عملگر باقی‌مانده `%` استفاده کنید. `year % 4 === 0` زمانی درست است که سال دقیقاً بر ۴ بخش‌پذیر باشد و چیزی باقی نماند. همین ترفند برای ۱۰۰ و ۴۰۰ هم به کار می‌رود."}]}]}]
---

در این تمرین، با سال کبیسه آشنا می‌شویم!

یک سال کبیسه (در گاهشماری میلادی) در موارد زیر رخ می‌دهد:

- در هر سالی که بر ۴ بخش‌پذیر باشد.
- مگر آن‌که سال بر ۱۰۰ بخش‌پذیر باشد، که در این صورت تنها در صورتی سال کبیسه خواهد بود که بر ۴۰۰ نیز بخش‌پذیر باشد.

چند مثال:

- ۱۹۹۷ سال کبیسه نبود، زیرا بر ۴ بخش‌پذیر نیست.
- ۱۹۰۰ سال کبیسه نبود، زیرا بر ۴۰۰ بخش‌پذیر نیست.
- ۲۰۰۰ سال کبیسه بود!

وظیفه‌ی شما نوشتن تابعی به نام `isLeapYear` (سال کبیسه) است که یک سال را به عنوان ورودی دریافت می‌کند و در صورت کبیسه بودن سال، `true` و در غیر این صورت `false` برمی‌گرداند.

برای این تمرین وقت بگذارید. قبل از شروع، خوب فکر کنید!
