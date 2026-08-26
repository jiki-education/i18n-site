---
lang: "ar"
type: "exercise"
slug: "golf-rolling-ball-state"
title: "الكرة ذات الحالة"
status: "published"
source_repo: "i18n"
source_path: "locales/ar/curriculum/exercises/golf-rolling-ball-state"
en_md5: "f203d7c055cd4ad8de235218c470df98"
governance_sha: "955b8514"
content_version: "71118f99d72e"
published_at: "2026-08-26"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"positionNotNumber","english":"position must be a number","target":"يجب أن يكون الموضع عددًا"}]},{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball didn't reach the hole. It's at position {{ballX}}, but needs to be at position 88.","target":"لم تصل الكرة إلى الحفرة. موضعها {{ballX}}، لكن يجب أن تكون في الموضع 88."},{"key":"missingPositions","english":"The ball must roll through each position individually, not jump directly to the end.","target":"يجب أن تتدحرج الكرة عبر كل موضع على حدة، لا أن تقفز مباشرة إلى النهاية."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"دحرج الكرة إلى الحفرة"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"دحرج الكرة إلى الحفرة."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"دحرج الكرة إلى الحفرة"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"دحرج الكرة إلى الحفرة."}]},{"name":"hints","rows":[{"key":"dontKnowWhereToStart.question","english":"I don't know where to start","target":"لا أعرف من أين أبدأ"},{"key":"dontKnowWhereToStart.answer","english":"The key is to move the ball one step forward each time. You can use a variable to do this. Think about how that might work.","target":"المفتاح هو تحريك الكرة خطوة واحدة إلى الأمام في كل مرة. يمكنك استخدام متغير للقيام بذلك. فكر في كيفية عمل ذلك."},{"key":"stillCantFigureItOut.question","english":"I still can't figure it out","target":"ما زلت لا أستطيع فهم ذلك"},{"key":"stillCantFigureItOut.answer","english":"You want to create a variable to track where the ball is. It should start where it is now, then many times increase by one. Every time it increases you should `moveTo(...)` using the variable as an input.","target":"تريد إنشاء متغير لتتبع موضع الكرة. يجب أن يبدأ من موضعه الحالي، ثم يزيد بمقدار واحد عدة مرات. في كل مرة يزيد فيها يجب عليك استدعاء `moveTo(...)` مع تمرير المتغير كمدخل."}]},{"name":"functions","rows":[{"key":"moveTo.description","english":"Moves the ball to **position**.","target":"ينقل الكرة إلى **الموضع**."},{"key":"moveTo.category","english":"Movement","target":"الحركة"}]},{"name":"describers","rows":[{"key":"moveTo","english":"moved the ball to position ${arg1}","target":"نقل الكرة إلى الموضع ${arg1}"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":"يجب أن يكون x عددًا"},{"key":"yNotNumber","english":"y must be a number","target":"يجب أن يكون y عددًا"}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":"دحرج الكرة وحدة واحدة إلى اليمين"},{"key":"moveTo","english":"moved the ball to the given position","target":"نقل الكرة إلى الموضع المحدد"},{"key":"getShotLength","english":"retrieved the shot length","target":"استرجع طول الضربة"},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":"أطلق ألعابًا نارية احتفالية"}]}]}]
---

عدنا إلى عالم بناء لعبة الغولف، لكن ما نبنيه تغيّر هذه المرة.

بدلًا من الدالة `roll()` (بمعنى «يدحرج») التي استخدمناها من قبل، أصبح لدينا الآن دالة `moveTo(position)` (بمعنى «ينقل إلى موضع») تنقل الكرة إلى موضع ما فورًا.

الآن، عندما يضرب اللاعب الكرة، يمكننا ببساطة نقلها مباشرة إلى المكان النهائي، لكن من غير المُرضي أن نراها لا تتحرك. لذلك، بدلًا من نقلها مباشرة، نريد استخدام `moveTo(position)` مرات عديدة حتى تبدو وكأنها تتدحرج.

تبدأ الكرة من الموضع **28** ويجب أن تصل إلى الموضع **88**.

عليك حلّ هذا في **5 أسطر من الكود**. بالتوفيق!
