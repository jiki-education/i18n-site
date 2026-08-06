---
lang: "fa"
type: "exercise"
slug: "caesar-cipher"
title: "رمز سزار"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/caesar-cipher"
en_md5: "d3e1c006a952dafab93205195f0af6db"
governance_sha: "c80036b"
content_version: "fe595e9691e7"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"encodeMessage.name","english":"Encode a message","target":"رمز کردن یک پیام"},{"key":"encodeMessage.description","english":"Write an encode function that shifts each letter in a message by a given amount. Spaces should remain as spaces. Letters that shift past 'z' should wrap around to the beginning of the alphabet.","target":"یک تابع `encode` بنویسید که هر حرف پیام را به اندازه‌ی یک مقدار مشخص جابجا کند. فاصله‌ها باید به صورت فاصله باقی بمانند. حروفی که جابجایی‌شان از 'z' عبور کند، باید به ابتدای الفبا دور بزنند."}]},{"name":"scenarios","rows":[{"key":"caesarSimpleShift.name","english":"Simple shift by 1","target":"جابجایی ساده به اندازه‌ی ۱"},{"key":"caesarSimpleShift.description","english":"Shift each letter forward by 1: a->b, b->c, c->d.","target":"هر حرف را به اندازه‌ی ۱ به جلو جابجا کنید: a→b، b→c، c→d."},{"key":"caesarShiftBy3.name","english":"Shift by 3","target":"جابجایی به اندازه‌ی ۳"},{"key":"caesarShiftBy3.description","english":"Shift each letter forward by 3: h->k, e->h, l->o, o->r.","target":"هر حرف را به اندازه‌ی ۳ به جلو جابجا کنید: h→k، e→h، l→o، o→r."},{"key":"caesarWrapAround.name","english":"Wrap around the alphabet","target":"دور زدن الفبا"},{"key":"caesarWrapAround.description","english":"When shifting goes past 'z', it wraps around: x->a, y->b, z->c.","target":"وقتی جابجایی از 'z' عبور کند، دور می‌زند: x→a، y→b، z→c."},{"key":"caesarWithSpaces.name","english":"Message with spaces","target":"پیام دارای فاصله"},{"key":"caesarWithSpaces.description","english":"Spaces should remain as spaces, only letters are shifted.","target":"فاصله‌ها باید به صورت فاصله باقی بمانند، فقط حروف جابجا می‌شوند."},{"key":"caesarRot13.name","english":"ROT13 encryption","target":"رمزگذاری ROT13"},{"key":"caesarRot13.description","english":"ROT13 is a special case of the Caesar cipher with a shift of 13.","target":"ROT13 یک حالت خاص از رمز سزار با جابجایی ۱۳ است."}]},{"name":"hints","rows":[{"key":"shiftingLetterByN.question","english":"How do I think about shifting a letter by N positions?","target":"چطور می‌توانم به جابجا کردن یک حرف به اندازه‌ی N موقعیت فکر کنم؟"},{"key":"shiftingLetterByN.answer","english":"Each letter has a position in the alphabet (a is at position 0, b at 1, and so on). To shift, you find that position, add the shift amount, then turn the new position back into a letter by looking it up in the alphabet.","target":"هر حرف یک موقعیت در الفبا دارد (a در موقعیت ۰، b در ۱ و به همین ترتیب). برای جابجا کردن، آن موقعیت را پیدا می‌کنید، مقدار جابجایی را به آن اضافه می‌کنید، سپس موقعیت جدید را با نگاه کردن در الفبا دوباره به حرف تبدیل می‌کنید."},{"key":"letterPosition.question","english":"How do I find the position of a letter in the alphabet?","target":"چطور موقعیت یک حرف را در الفبا پیدا کنم؟"},{"key":"letterPosition.answer","english":"You can search a string for a smaller piece with `indexOf`. Calling it on the alphabet string gives you a letter's position, or -1 if the letter isn't found. To go the other way, index back into the alphabet string with the position to get the letter.","target":"می‌توانید با `indexOf` یک رشته را برای یک قطعه‌ی کوچک‌تر جستجو کنید. فراخوانی آن روی رشته‌ی الفبا موقعیت یک حرف را به شما می‌دهد، یا اگر حرف پیدا نشود، -۱ را برمی‌گرداند. برای برعکس، دوباره به رشته‌ی الفبا با موقعیت ایندکس کنید تا حرف را دریافت کنید."},{"key":"wrapPastZ.question","english":"What happens when the shift goes past 'z'?","target":"وقتی جابجایی از 'z' عبور کند چه اتفاقی می‌افتد؟"},{"key":"wrapPastZ.answer","english":"It needs to wrap around back to 'a'. The modulo operator (`%`) is perfect for this. Taking the position modulo 26 brings any number back into the 0 to 25 range.","target":"باید به عقب دور بزند و به 'a' برگردد. عملگر باقی‌مانده (`%`) برای این کار عالی است. گرفتن باقی‌مانده‌ی موقعیت بر ۲۶ هر عددی را به بازه‌ی ۰ تا ۲۵ برمی‌گرداند."},{"key":"applyToWholeMessage.question","english":"How do I apply this to a whole message?","target":"چطور این کار را روی کل پیام اعمال کنم؟"},{"key":"applyToWholeMessage.answer","english":"Loop through each character of the message, shift it using your single-letter helper, and use concatenation (`+`) to build up the result string from the shifted letters.","target":"با یک حلقه روی هر کاراکتر پیام بچرخید، با استفاده از تابع کمکی تک‌حرفی‌تان آن را جابجا کنید، و با الحاق (`+`) رشته‌ی نتیجه را از حروف جابجاشده بسازید."}]},{"name":"functions","rows":[{"key":"indexOf.description","english":"Find the position of a smaller string within a string, or -1 if it isn't found (provided by level stdlib)","target":"موقعیت یک رشته‌ی کوچک‌تر را درون یک رشته پیدا می‌کند، یا اگر پیدا نشود -۱ برمی‌گرداند (ارائه‌شده توسط stdlib سطح)"},{"key":"indexOf.category","english":"String Operations","target":"عملیات رشته‌ای"}]}]}]
---

رمز سزار یکی از نخستین و ساده‌ترین روش‌های رمزنگاری است. ژولیوس سزار از آن برای ارسال پیام‌های مخفی به فرماندهان خود استفاده می‌کرد.

این رمز با جابجا کردن هر حرف در پیام به اندازه‌ی یک عدد ثابت در الفبا کار می‌کند. برای مثال، با جابجایی ۳، 'a' به 'd' تبدیل می‌شود، 'b' به 'e' و به همین ترتیب. اگر جابجایی از 'z' عبور کند، به ابتدای الفبا دور می‌زند.

فاصله‌ها باید به صورت فاصله باقی بمانند (جابجا نشوند).

یک تابع به اسم `encode(message, shift)` (رمز کردن پیام) بسازید که یک پیام تماماً با حروف کوچک و یک مقدار جابجایی بگیرد و پیام رمزگذاری‌شده را برگرداند.

برای مثال:

- `encode("abc", 1)` مقدار `"bcd"` را برمی‌گرداند
- `encode("xyz", 3)` مقدار `"abc"` را برمی‌گرداند (دور می‌زند)
- `encode("hello world", 5)` مقدار `"mjqqt btwqi"` را برمی‌گرداند

راهنمایی: بهتر است این مسئله را به توابع کمکی کوچک‌تری بشکنید!

### یک نکته‌ی جالب

یک بار در یک کنفرانس فناوری در شهر براگای پرتغال مجری برنامه بودم. پنج دقیقه مانده به اینکه روی صحنه بروم، برگزارکنندگان آمدند و با کمی خجالت از من پرسیدند که آیا مشکلی ندارم برای بخش نخست روز به مناسبت میراث رومی براگا لباس ژولیوس سزار بپوشم. بالاخره از پسش برآمدم...؟

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="جرمی با لباس سزار"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
