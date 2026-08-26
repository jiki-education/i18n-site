---
lang: "ar"
type: "exercise"
slug: "golf-rolling-ball-loop"
title: "الكرة المتدحرجة"
status: "published"
source_repo: "i18n"
source_path: "locales/ar/curriculum/exercises/golf-rolling-ball-loop"
en_md5: "e581ca0b932527b029cef23f9ad49a5e"
governance_sha: "955b8514"
content_version: "1947f84431b7"
published_at: "2026-08-26"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball rolled to {{ballX}}, which isn't 60 from where it started.","target":"تدحرجت الكرة إلى {{ballX}}، وهذا ليس على بعد 60 من نقطة البداية."},{"key":"missingPositions","english":"The ball must roll through each position one step at a time, starting from 29.","target":"يجب أن تتدحرج الكرة عبر كل موضع خطوة بخطوة، بدءًا من 29."},{"key":"codeQuality.tooManyLines","english":"Your solution has too many lines of code. Try using a loop to make it shorter.","target":"يحتوي حلك على عدد كبير جدًا من أسطر الكود. جرّب استخدام حلقة لجعله أقصر."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"دحرج الكرة إلى الحفرة"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"دحرج الكرة إلى الحفرة."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"دحرج الكرة إلى الحفرة"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"دحرج الكرة إلى الحفرة."}]},{"name":"hints","rows":[{"key":"icantWorkItOut.question","english":"I can't work it out","target":"لا أستطيع حلّها"},{"key":"icantWorkItOut.answer","english":"You have two tools to use:\n- A repeat loop, which you use by writing `repeat(n) { }` where `n` is the amount of times you want to roll and where you can put anything inside the braces (`{ }`).\n- A `roll()` function that rolls the ball one step to the right.\n\nHow can you combine them?","target":"لديك أداتان يمكنك استخدامهما:\n- حلقة `repeat`، التي تستخدمها بكتابة `repeat(n) { }` حيث `n` هو عدد المرات التي تريد أن تدحرج فيها الكرة، وحيث يمكنك وضع أي شيء داخل الأقواس المعقوفة (`{ }`).\n- دالة `roll()` تدحرج الكرة خطوة واحدة إلى اليمين.\n\nكيف يمكنك دمجهما؟"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls the ball **one step to the right**.","target":"تدحرج الكرة **خطوة واحدة إلى اليمين**."},{"key":"roll.category","english":"Movement","target":"حركة"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled the ball one step to the right","target":"دحرج الكرة خطوة واحدة إلى اليمين"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":"يجب أن يكون x عددًا"},{"key":"yNotNumber","english":"y must be a number","target":"يجب أن يكون y عددًا"}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":"دحرج الكرة وحدة واحدة إلى اليمين"},{"key":"moveTo","english":"moved the ball to the given position","target":"نقل الكرة إلى الموضع المحدد"},{"key":"getShotLength","english":"retrieved the shot length","target":"استرجع طول الضربة"},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":"أطلق ألعابًا نارية احتفالية"}]}]}]
---

لنستخدم حلقة `repeat` (‏_loop_ بالإنجليزية)!

كرة غولف تستقر عند نقطة الانطلاق. مهمتك أن تدحرجها إلى الحفرة التي تبعد 60 خطوة.

حُل هذا التمرين في **ثلاثة أسطر من الكود**. استمتع!
