---
lang: "fa"
type: "exercise"
slug: "formal-dinner"
title: "شام رسمی"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/formal-dinner"
en_md5: "8d6a2f3dd90b3a487a6bf855f31ef025"
governance_sha: "c80036b"
content_version: "d737f2d122a0"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findGuestTable.name","english":"Find the Guest's Table","target":"پیدا کردن میز مهمان"},{"key":"findGuestTable.description","english":"Write a function that takes the list of guests' full names, the matching list of table names, and an arriving guest announced as an honorific and a surname. Return the name of the table that guest is sitting at, or `\"No table found\"` if they aren't on the seating plan.","target":"تابعی بنویسید که لیست نام کامل مهمان‌ها، لیست متناظر نام میزها، و مهمان ورودی که با عنوان احترام‌آمیز و نام خانوادگی اعلام می‌شود را بگیرد. نام میزی را که آن مهمان در آن نشسته است برگردانید، یا اگر در نقشه‌ی صندلی‌ها نباشد، `\"No table found\"` را برگردانید."},{"key":"solveTightly.name","english":"Solve it tightly","target":"راه‌حل فشرده"},{"key":"solveTightly.description","english":"Bonus: this can be written far more compactly than you might expect. Can you get the whole solution down to just a handful of lines?","target":"امتیاز: این می‌تواند خیلی فشرده‌تر از چیزی که انتظار دارید نوشته شود. آیا می‌توانید کل راه‌حل را فقط در چند خط بنویسید؟"}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty seating plan","target":"نقشه‌ی خالی صندلی‌ها"},{"key":"emptyList.description","english":"Nobody's sitting anywhere when the plan is empty.","target":"وقتی نقشه خالی است، هیچ‌کس جایی ننشسته است."},{"key":"nameMissing.name","english":"Brad's turned away","target":"برد پذیرفته نمی‌شود"},{"key":"nameMissing.description","english":"The name's not on the seating plan.","target":"اسمش در نقشه‌ی صندلی‌ها نیست."},{"key":"namePresent.name","english":"Brad's shown to his seat","target":"برد به صندلی‌اش هدایت می‌شود"},{"key":"namePresent.description","english":"Brad Pitt is on the plan, so Mr Pitt gets his table.","target":"برد پیت در نقشه هست، پس آقای پیت میز خودش را می‌گیرد."},{"key":"differentHonorific.name","english":"Knight of the realm","target":"شوالیه‌ی قلمرو"},{"key":"differentHonorific.description","english":"A different honorific, and a guest who isn't first on the plan.","target":"عنوان احترام‌آمیز متفاوت، و مهمانی که اول نقشه نیست."},{"key":"bondSeated.name","english":"Mr Bond, I presume","target":"آقای باند، حدس می‌زنم"},{"key":"bondSeated.description","english":"James Bond is on the plan.","target":"جیمز باند در نقشه هست."},{"key":"bondNotSeated.name","english":"Hmmm... Mr Bond, I presume","target":"هوم... آقای باند، حدس می‌زنم"},{"key":"bondNotSeated.description","english":"Only Jason Bourne is on the plan, not James Bond.","target":"فقط جیسون بورن در نقشه هست، جیمز باند نیست."},{"key":"partialSurname.name","english":"Not quite Mr Pitt","target":"کاملاً آقای پیت نیست"},{"key":"partialSurname.description","english":"Neither Ada Spitt nor Hugo Ross-Pitt is Mr Pitt, so he has no seat here.","target":"نه آدا اسپیت و نه هیوگو راس-پیت آقای پیت نیستند، بنابراین اینجا جایی برای نشستن ندارد."},{"key":"lloydWebber.name","english":"How about a Baron?","target":"یک بارون چطور؟"},{"key":"lloydWebber.description","english":"Baron Lloyd Webber has two words in his surname.","target":"بارون لوید وبر نام خانوادگی دو کلمه‌ای دارد."},{"key":"markWebber.name","english":"Is Mark the Baron?","target":"مارک بارون است؟"},{"key":"markWebber.description","english":"A different Webber doesn't count - the surname has to match in full.","target":"وبر متفاوت محسوب نمی‌شود - نام خانوادگی باید کاملاً منطبق باشد."},{"key":"formalDinnerBonusLineCount.name","english":"Neat and tidy: Lord Doyle","target":"مرتب و کوتاه: لرد دویل"},{"key":"formalDinnerBonusLineCount.description","english":"The same seating plan as before, but this time your solution has to fit into a much smaller number of lines.","target":"همان نقشه‌ی صندلی‌های قبلی، اما این بار راه‌حل شما باید در تعداد خطوط بسیار کمتری جا شود."}]},{"name":"hints","rows":[{"key":"twoLists.question","english":"How do the two lists relate to each other?","target":"دو لیست چه ارتباطی با هم دارند؟"},{"key":"twoLists.answer","english":"They're a pair. The first guest sits at the first table, the second guest at the second table, and so on. So it's not enough to know *that* a guest is on the plan - you need to know *where* on the plan they are.","target":"آن‌ها یک جفت هستند. مهمان اول پشت میز اول می‌نشیند، مهمان دوم پشت میز دوم، و الی آخر. بنابراین فقط دانستن *که* یک مهمان در نقشه هست کافی نیست - باید بدانید *کجا* در نقشه قرار دارد."},{"key":"comparingNames.question","english":"The guest says 'Mr Pitt' but the plan says 'Brad Pitt'. How do I compare those?","target":"مهمان می‌گوید «آقای پیت» اما نقشه «برد پیت» را نشان می‌دهد. چطور این‌ها را مقایسه کنم؟"},{"key":"comparingNames.answer","english":"Those two strings will never be equal, so a straight comparison won't get you anywhere. Have a think about which part of what the guest announced actually appears on the plan, and whereabouts in the plan's entry you'd expect to find it.","target":"این دو رشته هرگز برابر نخواهند بود، بنابراین مقایسه‌ی مستقیم به جایی نمی‌رسد. فکر کنید که کدام قسمت از چیزی که مهمان اعلام کرده واقعاً در نقشه ظاهر می‌شود، و در کجای ورودی نقشه انتظار دارید آن را پیدا کنید."},{"key":"lookalikeSurnames.question","english":"Could a surname match the wrong guest?","target":"آیا ممکن است نام خانوادگی با مهمان اشتباهی تطابق پیدا کند؟"},{"key":"lookalikeSurnames.answer","english":"It absolutely could. Read 'Ada Spitt' and 'Hugo Ross-Pitt' out loud, and then think about Mr Pitt. Ask yourself what makes a surname a real surname on that line, rather than just some letters that happen to sit at the end of it.","target":"قطعاً می‌تواند. «آدا اسپیت» و «هیوگو راس-پیت» را بلند بخوانید، و بعد به آقای پیت فکر کنید. از خودتان بپرسید چه چیزی یک نام خانوادگی را واقعاً نام خانوادگی در آن خط می‌کند، نه صرفاً حروفی که در انتهای آن قرار گرفته‌اند."},{"key":"noMatch.question","english":"What should I return when nobody matches?","target":"وقتی هیچ‌کسی تطابق نداشت چه چیزی برگردانم؟"},{"key":"noMatch.answer","english":"The string `\"No table found\"`, exactly as written. The trickier bit is knowing when you're allowed to say it. If you've checked the very first guest on the plan and they're not your man, do you actually know yet that he isn't seated somewhere?","target":"رشته‌ی `\"No table found\"` را، دقیقاً همان‌طور که نوشته شده. بخش دشوارتر این است که بدانید کی مجاز به گفتن آن هستید. اگر اولین مهمان در نقشه را بررسی کرده‌اید و آن شخص مورد نظر شما نبود، آیا واقعاً می‌دانید که او در جایی نشسته نیست؟"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"ادامه بدهید! ببینید آیا می‌توانید آن را در خطوط کمتری حل کنید."}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in a list - the same length property you've used on strings (provided by level stdlib)","target":"تعداد عناصر در یک لیست - همان ویژگی `length` که روی رشته‌ها استفاده کرده‌اید (فراهم‌شده توسط stdlib سطح)"},{"key":"length.category","english":"List Operations","target":"عملیات لیست"},{"key":"split.description","english":"Split a string into a list of pieces, breaking at each separator (provided by level stdlib)","target":"تقسیم یک رشته به لیستی از قطعات، با شکستن در هر جداکننده (فراهم‌شده توسط stdlib سطح)"},{"key":"split.category","english":"String Operations","target":"عملیات رشته"},{"key":"slice.description","english":"Make a new list from part of a list, starting at a position (provided by level stdlib)","target":"ساختن یک لیست جدید از بخشی از یک لیست، از یک موقعیت مشخص (فراهم‌شده توسط stdlib سطح)"},{"key":"slice.category","english":"List Operations","target":"عملیات لیست"},{"key":"join.description","english":"Join the items of a list into one string, with a separator between them (provided by level stdlib)","target":"چسباندن عناصر یک لیست به یک رشته، با یک جداکننده بین آن‌ها (فراهم‌شده توسط stdlib سطح)"},{"key":"join.category","english":"List Operations","target":"عملیات لیست"},{"key":"endsWith.description","english":"Check whether a string ends with a smaller string (provided by level stdlib)","target":"بررسی اینکه آیا یک رشته با یک رشته‌ی کوچک‌تر تمام می‌شود یا خیر (فراهم‌شده توسط stdlib سطح)"},{"key":"endsWith.category","english":"String Operations","target":"عملیات رشته"}]}]}]
---

شما دوباره در شغل جانبی خود در نقش بادیگارد هستید. عصر روز بعد از مهمانی «بعد از مهمانی» است و یک جشن دیگر در راه است. این بار یک شام رسمی است، بنابراین امشب کمتر «مرد قلدر جلوی در» هستید و بیشتر «کسی با یک کلیپ‌بورد و جلیقه‌ای شیک».

اینجا قطعاً جایی نیست که **فقط** اسم کوچک خودتان را بگویید. در واقع اینجا اصلاً جایی برای اسم کوچک نیست. اینجا همه با «عنوان احترام‌آمیز» (خانم، آقا، دکتر و غیره) و نام خانوادگی‌شان معرفی می‌شوند.

برگزارکنندگان نقشه‌ی صندلی‌ها را به‌صورت دو لیست جداگانه به شما داده‌اند. یکی شامل نام کامل مهمان‌هاست. دیگری شامل نام میزی است که هر مهمان در آن می‌نشیند (که به اسم درختان و گل‌ها نام‌گذاری شده‌اند). مانند مهمانی «بعد از مهمانی»، این دو لیست هم‌ترازند: مهمان در جایگاه ۳ در لیست اول، پشت میز در جایگاه ۳ در لیست دوم می‌نشیند.

بنابراین وقتی آقای پیت وارد می‌شود، باید متوجه شوید که این همان «برد پیت» در لیست شماست و بعد به او بگویید که روی کدام میز نشسته است.

تابعی به نام `tableFor` (میز مهمان را پیدا می‌کند) بنویسید. این تابع سه ورودی دارد:

- اولی لیست نام کامل مهمان‌ها به‌صورت رشته
- دومی لیست نام میزها، به همان ترتیب مهمان‌ها
- سومی مهمان ورودی، که به‌صورت عنوان احترام‌آمیز و سپس نام خانوادگی فرمت شده است (مثلاً "آقای پیت")

نام میزی را که مهمان در آن نشسته است برگردانید. اگر اصلاً در نقشه‌ی صندلی‌ها نیست، به‌جای آن رشته‌ی `"No table found"` را برگردانید (اینجا کلاشی ممنوع!).

عنوان احترام‌آمیز همیشه دقیقاً یک کلمه است و هرچه بعد از آن می‌آید نام خانوادگی مهمان است. بیشتر نام‌های خانوادگی یک کلمه‌ای هستند، اما بعضی از نام‌های بزرگ دو کلمه‌ای می‌شوند.

با این حال، مواظب باشید. بسیاری از نام‌های خانوادگی خیلی شبیه به نام‌های خانوادگی دیگر هستند.

### متدها و ویژگی‌های رشته و آرایه

علاوه بر ویژگی `.length` که در تمرین قبلی با آن آشنا شدید، چهار متد دیگر وجود دارد که ممکن است به کارتان بیاید. راه‌های زیادی برای حل این تمرین وجود دارد، اما این‌ها شما را به کوتاه‌ترین راه‌حل ممکن می‌رسانند.

`"...".split(substring)` یک رشته را با استفاده از یک رشته‌ی دیگر تقسیم می‌کند. برای مثال:

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` بخشی از یک آرایه را از شاخص `start` گرفته و تا انتهای آرایه ادامه می‌دهد. عناصر گرفته‌شده در یک آرایه‌ی **جدید** کپی می‌شوند که به شما برگردانده می‌شود. در واقع این کار، `start` عنصر اول را حذف می‌کند. برای مثال:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)` عناصر یک آرایه را با رشته‌ی داده‌شده به هم می‌چسباند. برای مثال:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)` به شما می‌گوید که آیا یک رشته با یک رشته‌ی دیگر تمام می‌شود یا خیر. برای مثال:

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
