---
lang: "fa"
type: "exercise"
slug: "hamming"
title: "همینگ"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hamming"
en_md5: "00c98b21780410fd419205c5850e1f4b"
governance_sha: "c80036b"
content_version: "8ef50682a023"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"You used more lines than needed — see if you can trim it down.","target":"شما خطوط بیشتری از حد نیاز به کار برده‌اید — ببینید می‌توانید کد را کوتاه‌تر کنید."}]},{"name":"tasks","rows":[{"key":"calculateHammingDistance.name","english":"Calculate the Hamming Distance","target":"محاسبه فاصله همینگ"},{"key":"calculateHammingDistance.description","english":"Write a function that calculates the Hamming distance between two DNA strands of equal length. The Hamming distance is the number of positions where the corresponding characters differ.","target":"تابعی بنویسید که فاصله همینگ بین دو رشته دی‌ان‌ای با طول مساوی را محاسبه کند. فاصله همینگ تعداد موقعیت‌هایی است که کاراکترهای متناظر در آن‌ها اختلاف دارند."},{"key":"solveInElevenLines.name","english":"Solve in eleven lines of code","target":"در ۱۱ خط کد حل کنید"},{"key":"solveInElevenLines.description","english":"Can you solve this using no more than eleven lines of code?","target":"آیا می‌توانید این را با حداکثر ۱۱ خط کد حل کنید؟"}]},{"name":"scenarios","rows":[{"key":"hammingEmptyStrands.name","english":"Empty strands","target":"رشته‌های خالی"},{"key":"hammingEmptyStrands.description","english":"Empty strands have a Hamming distance of 0.","target":"فاصله همینگ رشته‌های خالی ۰ است."},{"key":"hammingSingleLetterIdentical.name","english":"Single letter identical strands","target":"رشته‌های یک حرفی یکسان"},{"key":"hammingSingleLetterIdentical.description","english":"Single-letter identical strands have a Hamming distance of 0.","target":"فاصله همینگ رشته‌های یک حرفی یکسان ۰ است."},{"key":"hammingLongIdenticalStrands.name","english":"Long identical strands","target":"رشته‌های بلند یکسان"},{"key":"hammingLongIdenticalStrands.description","english":"Long identical strands have a Hamming distance of 0.","target":"فاصله همینگ رشته‌های بلند یکسان ۰ است."},{"key":"hammingSingleLetterDifferent.name","english":"Single letter different strands","target":"رشته‌های یک حرفی متفاوت"},{"key":"hammingSingleLetterDifferent.description","english":"Single-letter different strands have a Hamming distance of 1.","target":"فاصله همینگ رشته‌های یک حرفی متفاوت ۱ است."},{"key":"hammingLongDifferentStrands.name","english":"Long different strands","target":"رشته‌های بلند متفاوت"},{"key":"hammingLongDifferentStrands.description","english":"Long strands with differences have a calculated Hamming distance.","target":"فاصله همینگ رشته‌های بلند با اختلاف محاسبه می‌شود."},{"key":"hammingBonusElevenLines.name","english":"Eleven lines of code","target":"۱۱ خط کد"},{"key":"hammingBonusElevenLines.description","english":"Solve the exercise using no more than eleven lines of code.","target":"تمرین را با حداکثر ۱۱ خط کد حل کنید."}]},{"name":"hints","rows":[{"key":"hammingDistanceMeaning.question","english":"What does 'Hamming distance' mean in plain terms?","target":"«فاصله همینگ» به زبان ساده یعنی چه؟"},{"key":"hammingDistanceMeaning.answer","english":"It's the number of positions where the two strings differ. So 'GAGA' vs 'GATA' differ at position 3 only, giving a distance of 1.","target":"این تعداد موقعیت‌هایی است که دو رشته در آن‌ها اختلاف دارند. برای مثال، «GAGA» و «GATA» فقط در موقعیت ۳ اختلاف دارند، بنابراین فاصله ۱ است."},{"key":"compareCharactersAtPosition.question","english":"How do I compare characters at the same position in both strings?","target":"چطور می‌توانم کاراکترهای هم‌موقعیت را در هر دو رشته مقایسه کنم؟"},{"key":"compareCharactersAtPosition.answer","english":"You'll need to move through both strings in sync, so you can pull out the character at the same spot from each one as you go.","target":"باید همزمان در هر دو رشته حرکت کنید و کاراکتر متناظر را از هر کدام بردارید."},{"key":"trackDifferenceCount.question","english":"How do I track 'how many differences' there are?","target":"چگونه تعداد اختلاف‌ها را پیگیری کنم؟"},{"key":"trackDifferenceCount.answer","english":"You'll need something that keeps a running total, adjusted whenever you spot a mismatch, so it's ready to hand back once you've checked every position.","target":"به موردی نیاز دارید که یک مجموع جاری را نگه دارد و هربار که یک اختلاف پیدا کردید آن را به‌روز کند، تا بعد از بررسی همه موقعیت‌ها آماده تحویل باشد."}]}]}]
---

این یک تمرین کلاسیک Exercism درباره‌ی زیست‌شناسی مولکولی است!

بدن شما از سلول‌هایی تشکیل شده است که حاوی دی‌ان‌ای هستند. این سلول‌ها به‌طور منظم فرسوده می‌شوند و نیاز به جایگزینی دارند، که این کار را با تقسیم شدن به سلول‌های دختری انجام می‌دهند. در واقع، بدن انسان به‌طور متوسط در طول عمر خود حدود ۱۰ کوادریلیون تقسیم سلولی را تجربه می‌کند!

وقتی سلول‌ها تقسیم می‌شوند، دی‌ان‌ای آن‌ها نیز همانندسازی می‌کند. گاهی در طی این فرایند اشتباهاتی رخ می‌دهد و بخش‌هایی از دی‌ان‌ای با اطلاعات نادرست کدگذاری می‌شوند. اگر دو رشته دی‌ان‌ای را با هم مقایسه کنیم و تفاوت‌های بین آن‌ها را بشماریم، می‌توانیم ببینیم چند اشتباه رخ داده است. این به «فاصله همینگ» معروف است.

فاصله همینگ نه‌تنها در زیست‌شناسی، بلکه در بسیاری از حوزه‌های علمی کاربرد دارد، بنابراین عبارت خوبی برای آشنا شدن است!

وظیفه‌ی شما محاسبه‌ی فاصله همینگ بین دو رشته دی‌ان‌ای است. دی‌ان‌ای از حروف C، A، G و T استفاده می‌کند. دو رشته ممکن است به این شکل باشند:

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

آن‌ها ۷ تفاوت دارند، بنابراین فاصله همینگ ۷ است.

تابعی به نام `hammingDistance` (فاصله همینگ) بسازید که دو ورودی داشته باشد: دو رشته دی‌ان‌ای به‌صورت رشته. باید یک عدد به‌عنوان فاصله برگرداند.

همیشه طول دو رشته دی‌ان‌ای یکسان خواهد بود.
