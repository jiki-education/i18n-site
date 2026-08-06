---
lang: "fa"
type: "exercise"
slug: "niche-named-party"
title: "میهمانی ویژه"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/niche-named-party"
en_md5: "470a19833eba55849106588dfa7326f2"
governance_sha: "c80036b"
content_version: "318e66a910d9"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"checkTheName.name","english":"Check the name","target":"بررسی اسم"},{"key":"checkTheName.description","english":"Write a `handleGuest` function that checks whether the person's name starts with the allowed letters for tonight's party. Return `true` if it does, or `false` if it doesn't.","target":"تابع `handleGuest` را بنویسید که بررسی می‌کند آیا اسم شخص با پیشوند مجاز برای میهمانی امشب شروع می‌شود یا نه. اگر شروع می‌شود `true` برگردانید و اگر نمی‌شود `false`."},{"key":"solveTightly.name","english":"Solve it in 20 lines","target":"حل در ۲۰ خط"},{"key":"solveTightly.description","english":"Bonus: with the length-counting pulled out into a helper function that `handleGuest` reuses, the whole solution fits in 20 lines. Can you match it?","target":"امتیازی: با خارج کردن بخش شمارش طول به یک تابع کمکی که `handleGuest` از آن استفاده مجدد می‌کند، کل راه‌حل در ۲۰ خط جا می‌شود. آیا می‌توانید آن را پیدا کنید؟"}]},{"name":"scenarios","rows":[{"key":"sarahSParty.name","english":"S Party: Sarah arrives","target":"میهمانی S: Sarah می‌رسد"},{"key":"sarahSParty.description","english":"Tonight only names starting with \"S\" are allowed. Sarah should get in!","target":"امشب فقط اسم‌هایی که با «S» شروع می‌شوند مجاز هستند. Sarah باید اجازه ورود داشته باشد!"},{"key":"bradSParty.name","english":"S Party: Brad arrives","target":"میهمانی S: Brad می‌رسد"},{"key":"bradSParty.description","english":"Tonight only names starting with \"S\" are allowed. Brad should be turned away.","target":"امشب فقط اسم‌هایی که با «S» شروع می‌شوند مجاز هستند. Brad باید برگشت داده شود."},{"key":"bradleyBradParty.name","english":"Brad Party: Bradley arrives","target":"میهمانی Brad: Bradley می‌رسد"},{"key":"bradleyBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Bradley should get in!","target":"امشب فقط اسم‌هایی که با «Brad» شروع می‌شوند مجاز هستند. Bradley باید اجازه ورود داشته باشد!"},{"key":"bradBradleyParty.name","english":"Bradley Party: Brad arrives","target":"میهمانی Bradley: Brad می‌رسد"},{"key":"bradBradleyParty.description","english":"Tonight only names starting with \"Bradley\" are allowed. Brad is too short, so he's not allowed.","target":"امشب فقط اسم‌هایی که با «Bradley» شروع می‌شوند مجاز هستند. اسم Brad خیلی کوتاه است، بنابراین اجازه ورود ندارد."},{"key":"brianBradParty.name","english":"Brad Party: Brian arrives","target":"میهمانی Brad: Brian می‌رسد"},{"key":"brianBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Brian should be turned away.","target":"امشب فقط اسم‌هایی که با «Brad» شروع می‌شوند مجاز هستند. Brian باید برگشت داده شود."},{"key":"silence.name","english":"S Party: Silence...","target":"میهمانی S: سکوت..."},{"key":"silence.description","english":"The person doesn't say their name. An empty name can't start with anything. Turn them away!","target":"شخص اسمش را نمی‌گوید. یک اسم خالی نمی‌تواند با چیزی شروع شود. او را برگشت دهید!"},{"key":"cherCherParty.name","english":"Cher Party: Cher arrives","target":"میهمانی Cher: Cher می‌رسد"},{"key":"cherCherParty.description","english":"Tonight only names starting with \"Cher\" are allowed. Cher's name is exactly \"Cher\" — let her in!","target":"امشب فقط اسم‌هایی که با «Cher» شروع می‌شوند مجاز هستند. اسم Cher دقیقاً «Cher» است، پس به او اجازه ورود بدهید!"},{"key":"nicheNamedPartyBonusLineCount.name","english":"Neat and tidy","target":"کوتاه و تمیز"},{"key":"nicheNamedPartyBonusLineCount.description","english":"The shortest solution fits in 20 lines. Can you find it?","target":"کوتاه‌ترین راه‌حل در ۲۰ خط جا می‌شود. آیا می‌توانید آن را پیدا کنید؟"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"ادامه دهید! ببینید آیا می‌توانید آن را در خط‌های کمتری حل کنید."}]},{"name":"hints","rows":[{"key":"checkStartsWith.question","english":"How do I check that a name starts with certain letters?","target":"چطور بررسی کنم که یک اسم با حروف خاصی شروع می‌شود؟"},{"key":"checkStartsWith.answer","english":"Compare each character of the allowed prefix with the character at the same position in the name. If any character differs, the name doesn't match.","target":"هر نویسه از پیشوند مجاز را با نویس‌ی که در همان موقعیت در اسم قرار دارد مقایسه کنید. اگر هر نویسه‌ای تفاوت داشت، اسم مطابقت ندارد."},{"key":"loopCharacters.question","english":"How do I look at one character at a time?","target":"چطور می‌توانم هر بار یک نویسه را بررسی کنم؟"},{"key":"loopCharacters.answer","english":"Use string iteration to step through a string.","target":"از پیمایش رشته برای حرکت گام‌به‌گام در آن استفاده کنید."},{"key":"findEquivalentLetter.question","english":"How do I find the equivalent letter in the other word?","target":"چطور حرف متناظر را در رشته دیگر پیدا کنم؟"},{"key":"findEquivalentLetter.answer","english":"Use string indexing to find a specific letter.","target":"از اندیس‌گذاری رشته برای پیدا کردن یک حرف خاص استفاده کنید."},{"key":"longerAllowedPrefix.question","english":"What if the allowed prefix is longer than the name?","target":"اگر پیشوند مجاز از اسم بلندتر باشد چه؟"},{"key":"longerAllowedPrefix.answer","english":"That person can't match, so you should return `false`.","target":"آن شخص نمی‌تواند مطابقت داشته باشد، بنابراین باید `false` برگردانید."}]}]}]
---

میهمانی امشب بسیار خاص است - فقط افرادی اجازه ورود دارند که اسمشان با یک ترتیب مشخص از حروف شروع شود!

وظیفه شما نوشتن تابعی به نام `handleGuest` (بررسی مهمان) است که دو ورودی می‌گیرد:

- `name` - اسم شخصی که پشت در است
- `allowedPrefix` - حروف ابتدایی مورد نیاز برای میهمانی امشب

اگر شخص اجازه ورود داشته باشد، تابع باید `true` را برگرداند، و اگر باید برگشت داده شود، `false` را برگرداند.

برای مثال:

- اگر پیشوند مجاز امشب `"S"` باشد، آنگاه Sarah اجازه ورود دارد (`true` برمی‌گرداند) اما Brad اجازه ورود ندارد (`false` برمی‌گرداند).
- اگر پیشوند مجاز `"Brad"` باشد، آنگاه Brad و Bradley اجازه ورود دارند اما Brian ندارد.

### تابع‌های کمکی

در طول انجام این تمرین، متوجه می‌شوید که باید طول اسم مهمان و همچنین طول پیشوند مجاز را محاسبه کنید. این یک موقعیت عالی برای ایجاد یک تابع کمکی به نام `getLength(someString)` است که تعداد حروف موجود در رشته را می‌شمارد. سپس می‌توانید از این تابع در مکان‌های مختلفی داخل `handleGuest(...)` استفاده کنید.

سناریوی امتیازی از شما می‌خواهد که این مسئله را در حداقل تعداد خط ممکن حل کنید. ممکن است راه‌حل‌های دیگری هم پیدا کنید که خطوط بیشتری دارند و ترجیح می‌دهید. این کاملاً اشکالی ندارد (و حتی شما را تشویق می‌کنیم تا روش‌های مختلف را امتحان کنید)، اما سعی کنید کوتاه‌ترین نسخه را هم پیدا کنید.

لذت ببرید!
