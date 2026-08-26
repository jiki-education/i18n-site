---
lang: "ar"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "i18n"
source_path: "locales/ar/curriculum/exercises/two-fer"
en_md5: "259ef6df34222c26ac1869815e38f66e"
governance_sha: "7d77efea"
content_version: "f13aa28fd9f3"
published_at: "2026-08-26"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"لقد استخدمت أكثر من 6 أسطر من الكود."}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"أنشئ دالة two-fer"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"اكتب دالة `twoFer` تأخذ اسمًا وتُرجع 'One for [name], one for me.' إذا لم يُعطَ اسم (سلسلة نصية فارغة)، استخدم 'you' بدلاً من الاسم."},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"حلّ في 6 أسطر من الكود"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"هل يمكنك حل التمرين باستخدام 6 أسطر من الكود فقط؟"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"لم يُعطَ اسم"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"لم يُعطَ اسم لذا أعد 'One for you, one for me.'"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"الاسم: Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"الاسم هو 'Alice' لذا أعد 'One for Alice, one for me.'"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"الاسم: Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"الاسم هو 'Tom' لذا أعد 'One for Tom, one for me.'"},{"key":"bonus1.name","english":"Six lines of code","target":"6 أسطر من الكود"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"حل التمرين باستخدام 6 أسطر من الكود فقط."}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"ما الذي يتغير بناءً على المُدخل؟"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"شيء واحد فقط. الاسم في منتصف الجملة. إذا أُعطيت اسمًا، استخدمه. وإلا، استخدم القيمة الافتراضية `\"you\"`."},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"كيف أتحقق مما إذا \"أُعطيت اسمًا\"؟"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"جملة شرطية تقارن المُدخل بالسلسلة النصية الفارغة `\"\"`. إذا كانت فارغة، استخدم `\"you\"`. وإلا، استخدم المُدخل."},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"كيف أبني الجملة النهائية؟"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"ادمج الأجزاء الثلاثة (`\"One for \"`، الاسم المُختار، و`\", one for me.\"`) باستخدام الدمج (`+`) أو سلسلة نصية قالب."}]}]}]
---

الآن سنبني على تمرين "Hello" البسيط ذلك ونضيف بعض القواعد الإضافية.

في بعض اللهجات الإنجليزية، عندما تقول "two for" بسرعة، فإنها تبدو مثل "two fer". "عرض اثنان مقابل واحد" هو طريقة للقول إنك إذا اشتريت واحدة، تحصل على واحدة أخرى مجاناً.

تخيّل مخبزاً لديه عرض في العطلة حيث يمكنك شراء قطعتين من البسكويت بسعر قطعة واحدة. تستفيد من العرض وتقرر إعطاء القطعة الإضافية لشخص آخر.

مهمتك هي تحديد ما ستقوله بينما تمنح القطعة الإضافية.

- إذا كنت تعرف اسم الشخص (مثلاً Alice)، فستقول: `"One for Alice, one for me."`
- إذا كنت لا تعرف اسم الشخص، فستقول: `"One for you, one for me."`

اكتب دالة اسمها `twoFer(name)` (أي عرض "اثنان بواحد") تُرجع الحوار المناسب.

إليك بعض الأمثلة:

| استدعاء الدالة     | القيمة المعادة                   |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

كمكافأة، هل يمكنك كتابة هذا باستخدام **6 أسطر من الكود فقط**؟

بالتوفيق!
