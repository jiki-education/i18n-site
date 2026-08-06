---
lang: "fa"
type: "exercise"
slug: "three-letter-acronym"
title: "سرنام سه‌حرفی"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/three-letter-acronym"
en_md5: "89ed5e0d5e09a14bbc4ae5dd39768af5"
governance_sha: "c80036b"
content_version: "a24af5e3eef2"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"راه‌حل شما خیلی خط کد دارد. می‌توانید آن را کوتاه‌تر کنید؟"}]},{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":"ساخت تابع سرنام"},{"key":"createAcronymFunction.description","english":"Write an acronym function that takes three words and returns a three-letter acronym formed by taking the first letter of each word.","target":"تابع سرنامی بنویسید که سه کلمه بگیرد و با گرفتن اولین حرف هر کلمه، یک سرنام سه‌حرفی برگرداند."},{"key":"solveInThreeLines.name","english":"Solve in 3 lines of code","target":"حل با ۳ خط کد"},{"key":"solveInThreeLines.description","english":"Can you solve this exercise with only 3 lines of code?","target":"می‌توانید این تمرین را فقط با ۳ خط کد حل کنید؟"}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Portable Network Graphics","target":"گرافیک شبکه‌ی قابل حمل"},{"key":"png.description","english":"Create the acronym 'PNG' from 'Portable', 'Network', 'Graphics'.","target":"سرنام 'PNG' را از 'Portable'، 'Network' و 'Graphics' بسازید."},{"key":"css.name","english":"Cascading Style Sheets","target":"شیوه‌نامهٔ آبشاری"},{"key":"css.description","english":"Create the acronym 'CSS' from 'Cascading', 'Style', 'Sheets'.","target":"سرنام 'CSS' را از 'Cascading'، 'Style' و 'Sheets' بسازید."},{"key":"www.name","english":"World Wide Web","target":"وب جهان‌گستر"},{"key":"www.description","english":"Create the acronym 'WWW' from 'World', 'Wide', 'Web'.","target":"سرنام 'WWW' را از 'World'، 'Wide' و 'Web' بسازید."},{"key":"lol.name","english":"Lowercase words","target":"کلمات با حروف کوچک"},{"key":"lol.description","english":"Create the acronym 'lol' from 'laugh', 'out', 'loud'.","target":"سرنام 'lol' را از 'laugh'، 'out' و 'loud' بسازید."},{"key":"bonus1.name","english":"3 lines of code","target":"۳ خط کد"},{"key":"bonus1.description","english":"Solve the exercise with only 3 lines of code.","target":"تمرین را فقط با ۳ خط کد حل کنید."}]},{"name":"hints","rows":[{"key":"firstCharacter.question","english":"How do I get just the first character of a word?","target":"چطور فقط اولین حرف یک کلمه را دریافت کنم؟"},{"key":"firstCharacter.answer","english":"Indexing into the string. The first character is at index `[0]`.","target":"با ایندکس‌گذاری رشته. اولین حرف در ایندکس `[0]` قرار دارد."},{"key":"buildResult.question","english":"How do I build the three-letter result?","target":"چطور نتیجهٔ سه‌حرفی را بسازم؟"},{"key":"buildResult.answer","english":"Take the first character of each word and join them together in order using concatenation (`+`) or a template string.","target":"اولین حرف هر کلمه را بگیرید و با استفاده از الصاق (`+`) یا template string آن‌ها را به ترتیب به هم بچسبانید."}]}]}]
---

سرنام کلمه‌ای است که از اولین حروف کلمات دیگر تشکیل می‌شود. برای مثال، «Portable Network Graphics» به «PNG» تبدیل می‌شود.

تابعی به اسم `acronym` (سرنام) بنویسید که سه کلمه بگیرد و با گرفتن اولین حرف هر کلمه، یک سرنام سه‌حرفی برگرداند.

برای مثال، اگر «Cascading»، «Style» و «Sheets» به آن داده شود، باید «CSS» را برگرداند.
