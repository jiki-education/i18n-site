---
lang: "fa"
type: "exercise"
slug: "tile-search"
title: "جستجوی کاشی"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/tile-search"
en_md5: "964730f77d4f532aa178b26e5504da86"
governance_sha: "c80036b"
content_version: "b3722a91c67d"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"کد شما خطوط زیادی دارد. می‌توانید آن را کوتاه‌تر کنید؟"}]},{"name":"tasks","rows":[{"key":"searchForTile.name","english":"Search for a Tile","target":"جستجوی کاشی"},{"key":"searchForTile.description","english":"Write a function that checks whether a specific letter tile is in the rack. Return true if found, false if not.","target":"تابعی بنویسید که بررسی کند آیا یک کاشی حرف مشخص در ردیف هست یا نه. اگر پیدا شد true برگردانید، وگرنه false."},{"key":"solveInEightLines.name","english":"Solve in 8 lines of code","target":"در ۸ خط کد حل کنید"},{"key":"solveInEightLines.description","english":"Can you solve this exercise with only 8 lines of code?","target":"می‌توانید این تمرین را فقط با ۸ خط کد حل کنید؟"}]},{"name":"scenarios","rows":[{"key":"letterFoundAtStart.name","english":"Letter at the start","target":"حرف در ابتدا"},{"key":"letterFoundAtStart.description","english":"The letter is the first tile in the rack.","target":"حرف اولین کاشی در ردیف است."},{"key":"letterFoundInMiddle.name","english":"Letter in the middle","target":"حرف در وسط"},{"key":"letterFoundInMiddle.description","english":"The letter is in the middle of the rack.","target":"حرف در وسط ردیف قرار دارد."},{"key":"letterFoundAtEnd.name","english":"Letter at the end","target":"حرف در انتها"},{"key":"letterFoundAtEnd.description","english":"The letter is the last tile in the rack.","target":"حرف آخرین کاشی در ردیف است."},{"key":"letterNotFound.name","english":"Letter not found","target":"حرف پیدا نشد"},{"key":"letterNotFound.description","english":"The letter isn't in the rack.","target":"حرف در ردیف نیست."},{"key":"emptyRack.name","english":"Empty rack","target":"ردیف خالی"},{"key":"emptyRack.description","english":"An empty rack has no tiles to find.","target":"ردیف خالی هیچ کاشی‌ای برای پیدا کردن ندارد."},{"key":"duplicateLetters.name","english":"Rack with duplicates","target":"ردیف با کاشی‌های تکراری"},{"key":"duplicateLetters.description","english":"The letter appears among duplicate tiles.","target":"حرف در میان کاشی‌های تکراری ظاهر می‌شود."},{"key":"singleTileFound.name","english":"Single tile found","target":"کاشی تکی پیدا شد"},{"key":"singleTileFound.description","english":"A rack with one tile that matches.","target":"ردیفی با یک کاشی که تطابق دارد."},{"key":"singleTileNotFound.name","english":"Single tile not found","target":"کاشی تکی پیدا نشد"},{"key":"singleTileNotFound.description","english":"A rack with one tile that doesn't match.","target":"ردیفی با یک کاشی که تطابق ندارد."},{"key":"bonus1.name","english":"8 lines of code","target":"۸ خط کد"},{"key":"bonus1.description","english":"Solve the exercise with only 8 lines of code.","target":"تمرین را تنها با ۸ خط کد حل کنید."}]},{"name":"hints","rows":[{"key":"byHand.question","english":"How would I do this by hand?","target":"چطور این کار را به‌صورت دستی انجام می‌دادم؟"},{"key":"byHand.answer","english":"You'd go through the haystack one letter at a time, comparing each to the needle. As soon as you found a match you'd stop. If you got to the end without a match, the needle isn't there.","target":"انبار کاه را حرف به حرف بررسی می‌کردید و هر حرف را با سوزن مقایسه می‌کردید. به‌محض اینکه تطابقی پیدا می‌شد، متوقف می‌شدید. اگر تا آخر پیش بروید و تطابقی پیدا نکنید، سوزن آنجا نیست."},{"key":"loopAndCompare.question","english":"How do I loop and compare?","target":"چطور می‌توانم حلقه بزنم و مقایسه کنم؟"},{"key":"loopAndCompare.answer","english":"A for-of loop gives you each letter of the string in turn. Inside, an if-statement compares the current letter to the needle.","target":"حلقه‌ی for-of هر حرف رشته را به‌نوبت در اختیارتان قرار می‌دهد. درون آن، یک دستور if حرف جاری را با سوزن مقایسه می‌کند."},{"key":"returnTrue.question","english":"When should I return true?","target":"چه زمانی باید true برگردانم؟"},{"key":"returnTrue.answer","english":"As soon as you find a match. There's no point checking the remaining letters.","target":"به‌محض اینکه تطابقی پیدا کردید. بررسی بقیه‌ی حروف فایده‌ای ندارد."},{"key":"returnFalse.question","english":"When should I return false?","target":"چه زمانی باید false برگردانم؟"},{"key":"returnFalse.answer","english":"ONLY after the loop has finished without finding a match. A common mistake is putting `return false` inside the loop. That gives up after the very first non-matching letter, before you've checked the rest.","target":"فقط بعد از اینکه حلقه تمام شد و هیچ تطابقی پیدا نشد. اشتباه رایج این است که `return false` را داخل حلقه قرار می‌دهید. این کار بعد از اولین حرف غیرمنطبق، دست از کار می‌کشد، قبل از اینکه بقیه را بررسی کرده باشید."}]}]}]
---

شما در حال ساختن یک ربات اسکربل هستید. قبل از اینکه ربات سعی کند کلمه‌ای را بازی کند، باید بررسی کند که آیا کاشی حرف مشخصی را در ردیف خود دارد یا نه.

ردیف به‌صورت یک رشته از حروف نمایش داده می‌شود (مثلاً `"SCRAB"`).

تابعی به نام `contains` (شامل بودن) بنویسید که دو ورودی بگیرد:

- `haystack` (انبار کاه): ردیف کاشی‌ها، به‌صورت یک رشته
- `needle` (سوزن): حرفی که باید جستجو شود

اگر حرف در ردیف وجود داشت `true` را برگردانید وگرنه `false`.

مثال‌ها:

- `contains("SCRAB", "A")` مقدار `true` را برمی‌گرداند
- `contains("SCRAB", "Z")` مقدار `false` را برمی‌گرداند
- `contains("", "A")` مقدار `false` را برمی‌گرداند
