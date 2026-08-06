---
lang: "fa"
type: "exercise"
slug: "digital-root"
title: "ریشه‌ی رقمی"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/digital-root"
en_md5: "554e48db79141f8304144e152643a47c"
governance_sha: "c80036b"
content_version: "76c7003f4c46"
published_at: "2026-08-06"
forum_topic_id: 1230
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"sumTheDigits.name","english":"Sum the digits","target":"جمع ارقام"},{"key":"sumTheDigits.description","english":"Write a function called digitalRoot that takes a number and adds its digits together. For numbers that are already a single digit, and for numbers whose digits sum to a single digit, this first pass is enough.","target":"تابعی به نام `digitalRoot` بنویسید که عددی می‌گیرد و ارقام آن را با هم جمع می‌کند. برای اعدادی که خودشان یک رقمی هستند، و برای اعدادی که جمع ارقامشان یک رقم می‌شود، همین یک مرحله کافی است."},{"key":"collapseToSingleDigit.name","english":"Keep collapsing until one digit is left","target":"تا زمانی که به یک عدد یک رقمی نرسیدید، ادامه دهید"},{"key":"collapseToSingleDigit.description","english":"Sometimes summing the digits once still leaves more than one digit (for example 942 sums to 15). Keep summing the digits of the result until a single digit remains.","target":"گاهی یک بار جمع کردن ارقام، هنوز بیش از یک رقم باقی می‌گذارد (برای مثال ۹۴۲ تبدیل به ۱۵ می‌شود). به جمع کردن ارقام نتیجه ادامه دهید تا فقط یک رقم باقی بماند."},{"key":"keepItTight.name","english":"Bonus: keep it short","target":"امتیاز: کوتاه نگه دارید"},{"key":"keepItTight.description","english":"Your solution already works. For this bonus, tidy it up so the whole function fits in a small number of lines, without any extra clutter.","target":"راه‌حل شما کار می‌کند. برای این امتیاز، آن را مرتب کنید تا کل تابع در چند خط جا شود، بدون اضافات."}]},{"name":"scenarios","rows":[{"key":"drZero.name","english":"Zero","target":"صفر"},{"key":"drZero.description","english":"The digital root of 0 is 0.","target":"ریشه‌ی رقمی ۰ برابر با ۰ است."},{"key":"drSingleDigit.name","english":"Already a single digit","target":"عدد پیش‌رو یک رقمی است"},{"key":"drSingleDigit.description","english":"A number that is already a single digit is its own digital root.","target":"عددی که پیش‌رو یک رقمی است، ریشه‌ی رقمی خودش است."},{"key":"drTwoDigits.name","english":"Two digits","target":"دو رقمی"},{"key":"drTwoDigits.description","english":"16 collapses to 7 in a single pass (1 + 6).","target":"۱۶ در یک مرحله به ۷ تبدیل می‌شود (۱ + ۶)."},{"key":"drThreeDigits.name","english":"Three digits, one pass","target":"سه رقمی، یک مرحله"},{"key":"drThreeDigits.description","english":"132 collapses to 6 in a single pass (1 + 3 + 2).","target":"۱۳۲ در یک مرحله به ۶ تبدیل می‌شود (۱ + ۳ + ۲)."},{"key":"drThirtyNine.name","english":"Two passes needed","target":"دو مرحله نیاز است"},{"key":"drThirtyNine.description","english":"39 sums to 12, which then sums to 3.","target":"۳۹ تبدیل به ۱۲ می‌شود که آن هم به ۳ تبدیل می‌شود"},{"key":"drTwoPasses.name","english":"A number that needs a second pass","target":"این عدد باید در بیش‌تر از یک دور عملیات بر روی آن اجرا شود"},{"key":"drTwoPasses.description","english":"942 sums to 15, which then sums to 6.","target":"۹۴۲ تبدیل به ۱۵ می‌شود که آن هم به ۶ تبدیل می‌شود"},{"key":"drLarge.name","english":"A larger number","target":"عددی بزرگتر"},{"key":"drLarge.description","english":"493193 collapses all the way down to 2.","target":"۴۹۳۱۹۳ در نهایت به ۲ تبدیل می‌شود."},{"key":"drNines.name","english":"All nines","target":"همه‌ی نُه‌ها"},{"key":"drNines.description","english":"99999 sums to 45, which then sums to 9.","target":"۹۹۹۹۹ تبدیل به ۴۵ می‌شود که آن هم به ۹ تبدیل می‌شود"},{"key":"drBonusTight.name","english":"A tidy, short solution","target":"یک راه‌حل مرتب و کوتاه"},{"key":"drBonusTight.description","english":"12345 collapses down to 6 (1 + 2 + 3 + 4 + 5 = 15, then 1 + 5 = 6).","target":"۱۲۳۴۵ به ۶ تبدیل می‌شود (۱ + ۲ + ۳ + ۴ + ۵ = ۱۵، سپس ۱ + ۵ = ۶)."}]},{"name":"hints","rows":[{"key":"whatIsIt.question","english":"What exactly is a digital root?","target":"ریشه‌ی رقمی دقیقاً چیست؟"},{"key":"whatIsIt.answer","english":"Add up all the digits of the number. If that gives you a single digit, that's the answer. If it gives you more than one digit, add up the digits of that result too, and keep going until only one digit is left.","target":"همه‌ی ارقام عدد را با هم جمع کنید. اگر حاصل یک رقم شد، همان پاسخ است. اگر بیش از یک رقم شد، ارقام آن نتیجه را هم جمع کنید و ادامه دهید تا فقط یک رقم باقی بماند."},{"key":"sumDigits.question","english":"How do I add up the digits of a number?","target":"چطور ارقام یک عدد را جمع کنم؟"},{"key":"sumDigits.answer","english":"Turn the number into a string so you can walk through it character by character with a `for...of` loop. Keep a running total, adding each digit as you go.","target":"عدد را به رشته تبدیل کنید تا بتوانید با یک حلقه‌ی `for...of` روی آن نویسه به نویسه جلو بروید. یک مجموع در حال افزایش نگه دارید و هر رقم را در طول مسیر به آن اضافه کنید."},{"key":"digitsToNumbers.question","english":"Each digit is a character though, not a number.","target":"هر رقم یک نویسه است، نه یک عدد."},{"key":"digitsToNumbers.answer","english":"When you loop over the string, each character (like `\"4\"`) is text. Use `Number(char)` to turn it into the number `4` before adding it to your total.","target":"وقتی روی رشته‌ای پیمایش می‌کنید، هر نویسه (مثل `\\\"4\\\"`) یک متن است. از `Number(char)` استفاده کنید تا قبل از اضافه کردن به مجموع، آن را به عدد `4` تبدیل کنید."},{"key":"whichLoop.question","english":"How do I keep going without knowing how many passes I need?","target":"چطور بدون اینکه بدانم چند مرحله نیاز دارم، ادامه دهم؟"},{"key":"whichLoop.answer","english":"You don't know in advance how many times you'll need to sum the digits, so a `while` loop is a great fit. Keep looping while the number has more than one digit.","target":"شما از قبل نمی‌دانید که چند بار باید ارقام را جمع کنید، بنابراین حلقه‌ی `while` گزینه‌ی بسیار مناسبی است. تا وقتی عدد بیش از یک رقم دارد، به دور زدن ادامه دهید"},{"key":"keepGoing.question","english":"When do I stop?","target":"کی متوقف شوم؟"},{"key":"keepGoing.answer","english":"Stop as soon as the number is a single digit. At that point, return it.","target":"به محض اینکه عدد یک رقمی شد، متوقف شوید. در آن لحظه، آن را برگردانید."}]},{"name":"checks","rows":[{"key":"mustUseWhile","english":"Almost! For this exercise we want you to use a `while` loop to keep collapsing until a single digit remains.","target":"نزدیک شدید! برای این تمرین می‌خواهیم از حلقه‌ی `while` استفاده کنید تا جمع کردن را ادامه دهید تا یک رقم باقی بماند."},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long. See if you can tighten it up.","target":"خیلی نزدیک بود! راه‌حلتان کار می‌کند، اما کمی طولانی است. ببینید می‌توانید آن را جمع‌وجورتر کنید."}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":"رشته‌ای را از ارقام به عدد تبدیل می‌کند"},{"key":"number.category","english":"Type Conversion","target":"تبدیل نوع"},{"key":"string.description","english":"Convert a number into a string","target":"یک عدد را به رشته تبدیل می‌کند"},{"key":"string.category","english":"Type Conversion","target":"تبدیل نوع"}]}]}]
---

«ریشه‌ی رقمی» یک عدد، حاصل جمع کردن ارقام آن است تا جایی که تنها یک رقم باقی بماند.

اگر عدد حاصل جمع ارقام چند رقمی بود(هنوز بیشتر از یک رقم داشت)، ارقام آن عدد را دوباره با هم جمع می‌کنیم. این کار را تا زمانی تکرار می‌کنیم که مطمئن شویم عدد نهایی ما فقط یک رقم دارد.

برای مثال، برای پیدا کردن ریشه‌ی رقمی `942`:

```
9 + 4 + 2 = 15
1 + 5 = 6
```

پس ریشه‌ی رقمی `942` برابر با `6` است.

عددی که خودش یک رقم است (مثل `7`) ریشه‌ی رقمی خودش است.

یک تابع به نام `digitalRoot` بسازید که یک عدد می‌گیرد و ریشه‌ی رقمی آن را برمی‌گرداند.

### تابع `String()`

در چند درس گذشته، به تابع `Number(str)` دسترسی داشته‌اید که یک رشته را به عدد تبدیل می‌کند.

می‌توانید همین کار را برعکس انجام دهید و با استفاده از تابع `String(num)` یک عدد را به رشته تبدیل کنید.

برای مثال:

```js
String(147) === "147"
```

باز هم، توجه کنید که با یک حرف بزرگ شروع می‌شود، و فعلا لازم نیست دلیل آن را بدانید

### آن‌چه را یادگرفته‌اید، به کار ببندید

اگرچه راه‌های زیادی برای حل این تمرین وجود دارد، راه‌حلی که از شما می‌خواهیم این است که از یک حلقه‌ی `while` استفاده کند.

لذت ببرید!
