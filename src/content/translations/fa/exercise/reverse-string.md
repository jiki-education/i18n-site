---
lang: "fa"
type: "exercise"
slug: "reverse-string"
title: "معکوس کردن رشته"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/reverse-string"
en_md5: "d01eea6cf18d953304631f4a8015c3ea"
governance_sha: "c80036b"
content_version: "f82e0a25a57e"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"reverseStrings.name","english":"Reverse Strings","target":"معکوس کردن رشته"},{"key":"reverseStrings.description","english":"Reverse a string so that it reads from right to left instead of left to right.","target":"یک رشته را طوری معکوس کنید که به جای چپ به راست، از راست به چپ خوانده شود."}]},{"name":"scenarios","rows":[{"key":"reverseEmptyString.name","english":"Empty string","target":"رشته‌ی خالی"},{"key":"reverseEmptyString.description","english":"An empty string should return an empty string when reversed.","target":"یک رشته‌ی خالی هنگام معکوس شدن باید یک رشته‌ی خالی برگرداند."},{"key":"reverseWord.name","english":"A word","target":"یک کلمه"},{"key":"reverseWord.description","english":"Reverse the word 'robot'.","target":"کلمه‌ی «robot» را معکوس کنید."},{"key":"reverseCapitalizedWord.name","english":"A capitalized word","target":"کلمه‌ای با حرف اول بزرگ"},{"key":"reverseCapitalizedWord.description","english":"Reverse a capitalized word 'Ramen'.","target":"کلمه‌ی «Ramen» را که با حرف بزرگ شروع می‌شود معکوس کنید."},{"key":"reverseSentencePunctuation.name","english":"Sentence with punctuation","target":"جمله‌ای با علائم نگارشی"},{"key":"reverseSentencePunctuation.description","english":"Reverse a sentence with punctuation 'I'm hungry!'","target":"جمله‌ی «I'm hungry!» را همراه با علائم نگارشی‌اش معکوس کنید."},{"key":"reversePalindrome.name","english":"Palindrome","target":"پالیندروم"},{"key":"reversePalindrome.description","english":"A palindrome remains the same when reversed.","target":"یک پالیندروم وقتی معکوس شود، همان باقی می‌ماند."},{"key":"reverseEvenSizedWord.name","english":"Even-sized word","target":"کلمه‌ای با طول زوج"},{"key":"reverseEvenSizedWord.description","english":"Reverse an even-sized word 'drawer'.","target":"کلمه‌ی «drawer» را که طول زوج دارد، معکوس کنید."},{"key":"reverseWideCharacters.name","english":"Wide characters","target":"کاراکترهای پهن"},{"key":"reverseWideCharacters.description","english":"Reverse wide Unicode characters '子猫'.","target":"کاراکترهای پهن یونیکد «子猫» را معکوس کنید."},{"key":"reverseEmojiFamily.name","english":"Emoji Family","target":"ایموجی خانواده"},{"key":"reverseEmojiFamily.description","english":"Reverse an emoji family.","target":"ایموجی خانواده را معکوس کنید."},{"key":"reverseEmojiRainbowFlag.name","english":"Rainbow Flag","target":"پرچم رنگین‌کمان"},{"key":"reverseEmojiRainbowFlag.description","english":"Make a rainbow flag by reversing.","target":"با معکوس کردن، پرچم رنگین‌کمان بسازید."}]},{"name":"hints","rows":[{"key":"reverseByHand.question","english":"How would I reverse a word by hand?","target":"چطور می‌توانم یک کلمه را به صورت دستی معکوس کنم؟"},{"key":"reverseByHand.answer","english":"You'd read it left-to-right but write it right-to-left. Equivalently, you'd take each letter in turn and put it in front of what you've written so far.","target":"شما آن را از چپ به راست می‌خوانید، اما از راست به چپ می‌نویسید. معادل آن، هر حرف را به ترتیب برمی‌دارید و جلوی آنچه تاکنون نوشته‌اید می‌گذارید."},{"key":"mapToCode.question","english":"How does that map to code?","target":"این کار چطور به کد تبدیل می‌شود؟"},{"key":"mapToCode.answer","english":"Loop through the input string character by character. For each character, build the result by prepending. That means putting it at the FRONT of your result, not the back.","target":"حلقه‌ای بزنید و رشته‌ی ورودی را کاراکتر به کاراکتر پیمایش کنید. برای هر کاراکتر، نتیجه را با اضافه کردن به جلو بسازید. یعنی آن را در جلوی نتیجه‌ی خود قرار دهید، نه در انتهای آن."},{"key":"prepend.question","english":"How do I 'prepend' instead of append?","target":"چطور به جای اضافه کردن به انتها، به ابتدا اضافه کنم؟"},{"key":"prepend.answer","english":"With the `+` operator, prepending is just a matter of order. Instead of `result + char` (which appends), use `char + result` (which prepends).","target":"با عملگر `+`، اضافه کردن به ابتدا فقط به ترتیب نوشتن بستگی دارد. به جای `result + char` (که به انتها اضافه می‌کند)، باید از `char + result` (که به ابتدا اضافه می‌کند) استفاده کنید."}]}]}]
---

معکوس کردن رشته‌ها (خواندن آن‌ها از راست به چپ، به جای چپ به راست) در برنامه‌نویسی کاری بسیار رایج است.

به عنوان مثال، در بیوانفورماتیک، معکوس کردن توالی رشته‌های DNA یا RNA برای تحلیل‌های مختلف، مانند یافتن رشته‌های مکمل یا شناسایی توالی‌های پالیندرومیک، اهمیت دارد.

وظیفه‌ی شما این است که تابعی به اسم `reverse` (معکوس کردن) بسازید که یک رشته را به عنوان ورودی دریافت می‌کند و نسخه‌ی معکوس آن را برمی‌گرداند.

مثال‌ها:

- «stressed» را به «desserts» تبدیل کند.
- «strops» را به «sports» تبدیل کند.
- «racecar» را به «racecar» (یک پالیندروم) تبدیل کند.

### دو سناریوی آخر...

دو سناریوی آخر عجیب به نظر می‌رسند، اینطور نیست؟ ماجرا چیست؟

معلوم می‌شود که بسیاری از ایموجی‌ها در واقع از ایموجی‌های دیگری تشکیل شده‌اند که با فاصله‌های پنهان (با عرض صفر) به هم چسبیده‌اند.

ایموجی خانواده (👩‍👩‍👧‍👦) از دو زن و دو کودک تشکیل شده است. وقتی معکوس می‌شود، می‌توانید کاراکترهای جداگانه (👦‍👧‍👩‍👩) را ببینید.

اموجی دیگر یک رنگین‌کمان و یک پرچم است (🌈‍️🏳). وقتی ترتیب را معکوس کنید تا اول پرچم و بعد رنگین‌کمان بیاید، به پرچم رنگین‌کمان (🏳️‍🌈️) تبدیل می‌شود!

اگر نتیجه را یک کاراکتر در هر بار بسازید، این موارد به راحتی کار خواهند کرد. اگر به جای آن یک ترفند هوشمندانه‌تر به کار ببرید، ممکن است ایموجی‌ها از هم جدا شوند.
