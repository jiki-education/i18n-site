---
lang: "fa"
type: "exercise"
slug: "collatz-conjecture"
title: "حدس کولاتز"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/collatz-conjecture"
en_md5: "6fbe47d0456ca4f5db8e74b3f6de3cb0"
governance_sha: "c80036b"
content_version: "f696275955d5"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"calculateCollatzSteps.name","english":"Calculate Collatz steps","target":"محاسبه‌ی مراحل کولاتز"},{"key":"calculateCollatzSteps.description","english":"Write a function that takes a number and returns how many steps it takes to reach 1 following the Collatz Conjecture rules: if even, divide by 2; if odd, multiply by 3 and add 1.","target":"تابعی بنویسید که یک عدد می‌گیرد و تعداد مراحل لازم برای رسیدن به ۱ را با پیروی از قوانین حدس کولاتز برمی‌گرداند: اگر زوج بود، بر ۲ تقسیمش کن؛ اگر فرد بود، ۳ برابرش کن و ۱ اضافه کن."}]},{"name":"scenarios","rows":[{"key":"number1.name","english":"Number 1","target":"عدد ۱"},{"key":"number1.description","english":"Zero steps for one.","target":"برای ۱، صفر مرحله."},{"key":"number16.name","english":"Number 16","target":"عدد ۱۶"},{"key":"number16.description","english":"Divide if even.","target":"اگر زوج باشد، تقسیم بر ۲."},{"key":"number12.name","english":"Number 12","target":"عدد ۱۲"},{"key":"number12.description","english":"Even and odd steps.","target":"مراحل زوج و فرد."},{"key":"number1000000.name","english":"Number 1000000","target":"عدد ۱۰۰۰۰۰۰"},{"key":"number1000000.description","english":"Large number of even and odd steps.","target":"تعداد زیادی از مراحل زوج و فرد."}]},{"name":"hints","rows":[{"key":"loopUntilOne.question","english":"How do I keep going until the number reaches 1?","target":"چطور ادامه دهم تا عدد به ۱ برسد؟"},{"key":"loopUntilOne.answer","english":"Use a `repeat()` loop with no number — it repeats forever until you `return` out of it. Inside the loop, replace the number with the next number in the sequence, and return once it reaches 1.","target":"از یک حلقه‌ی `repeat()` بدون عدد استفاده کنید — این حلقه تا ابد ادامه می‌یابد تا وقتی که `return` کنید. داخل حلقه، عدد را با عدد بعدی در دنباله جایگزین کنید، و وقتی به ۱ رسید، `return` کنید."},{"key":"chooseRule.question","english":"How do I decide which rule to apply on each step?","target":"چطور تصمیم بگیرم در هر مرحله کدام قانون را اعمال کنم؟"},{"key":"chooseRule.answer","english":"Check whether the number is even. The modulo operator does this. `number % 2 === 0` means it's even. If even, halve it. Otherwise, do `3 * number + 1`.","target":"بررسی کنید که عدد زوج است یا نه. عملگر باقی‌مانده این کار را می‌کند. `number % 2 === 0` یعنی عدد زوج است. اگر زوج بود، نصفش کنید. در غیر این صورت، `3 * number + 1` را انجام دهید."},{"key":"trackSteps.question","english":"How do I track the answer (the number of steps)?","target":"چطور پاسخ (تعداد مراحل) را ثبت کنم؟"},{"key":"trackSteps.answer","english":"Keep a counter variable for how many times you've applied the rules. Think about what needs to happen to it each time round the loop, and what your function should return when the number reaches 1.","target":"یک متغیر شمارنده برای تعداد دفعاتی که قوانین را اعمال کرده‌اید نگه دارید. به این فکر کنید که هر بار حلقه تکرار می‌شود چه اتفاقی باید برای آن بیفتد، و وقتی عدد به ۱ رسید تابع شما چه چیزی باید برگرداند."}]}]}]
---

یک غروب، به دفتری قدیمی برخوردید که پر از خط‌خطی‌های مرموز بود، انگار که کسی با وسواس به دنبال یک ایده بوده است. در یک صفحه، یک سوال خاص خودنمایی می‌کرد: **آیا هر عددی می‌تواند راهش را به ۱ پیدا کند؟** این سوال به چیزی به نام «حدس کولاتز» مربوط بود، معمایی که دهه‌هاست ذهن متفکران را به خود مشغول کرده است.

قوانین به طرز فریبنده‌ای ساده هستند:

1. عددی انتخاب کنید.
2. اگر زوج بود، آن را بر ۲ تقسیم کنید.
3. اگر فرد بود، آن را در ۳ ضرب کنید و سپس ۱ اضافه کنید.
4. با نتیجه این کار را تکرار کنید و به‌طور نامحدود ادامه دهید.

برای مثال، با شروع از ۱۲:

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

با شمارش از دومین عدد (۶)، ۹ مرحله طول کشید تا به ۱ برسد.

تابعی به نام `collatzSteps` (مراحل کولاتز) ایجاد کنید که یک ورودی، یعنی یک عدد، می‌گیرد. تعداد مراحل لازم برای رسیدن از آن عدد به ۱ را، با پیروی از قواعد حدس کولاتز، برگردانید.
