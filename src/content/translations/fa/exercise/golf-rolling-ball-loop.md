---
lang: "fa"
type: "exercise"
slug: "golf-rolling-ball-loop"
title: "توپ غلتان"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-loop"
en_md5: "e581ca0b932527b029cef23f9ad49a5e"
governance_sha: "c80036b"
content_version: "41898818dcfa"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball rolled to {{ballX}}, which isn't 60 from where it started.","target":"توپ تا {{ballX}} غلتید، در حالی که ۶۰ قدم از نقطهٔ شروع فاصله ندارد."},{"key":"missingPositions","english":"The ball must roll through each position one step at a time, starting from 29.","target":"توپ باید یک‌قدم‌یک‌قدم از تمام موقعیت‌ها عبور کند، با شروع از ۲۹."},{"key":"codeQuality.tooManyLines","english":"Your solution has too many lines of code. Try using a loop to make it shorter.","target":"راه‌حل شما تعداد خطوط زیادی دارد. سعی کنید با استفاده از حلقه آن را کوتاه‌تر کنید."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"توپ را به درون سوراخ بغلتانید"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"توپ را به درون سوراخ بغلتانید."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"توپ را به درون سوراخ بغلتانید"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"توپ را به درون سوراخ بغلتانید."}]},{"name":"hints","rows":[{"key":"icantWorkItOut.question","english":"I can't work it out","target":"نمی‌توانم حلش کنم"},{"key":"icantWorkItOut.answer","english":"You have two tools to use:\n- A repeat loop, which you use by writing `repeat(n) { }` where `n` is the amount of times you want to roll and where you can put anything inside the braces (`{ }`).\n- A `roll()` function that rolls the ball one step to the right.\n\nHow can you combine them?","target":"دو ابزار در اختیار دارید:\n- یک حلقهٔ Repeat، که با نوشتن `repeat(n) { }` از آن استفاده می‌کنید، جایی که `n` تعداد دفعاتی است که می‌خواهید توپ را بغلتانید و می‌توانید هر چیزی را داخل آکولادها (`{ }`) بگذارید.\n- یک تابع `roll()` که توپ را یک قدم به سمت راست می‌غلتاند.\n\nچطور می‌توانید این دو را ترکیب کنید؟"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls the ball **one step to the right**.","target":"توپ را **یک قدم به سمت راست** می‌غلتاند."},{"key":"roll.category","english":"Movement","target":"حرکت"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled the ball one step to the right","target":"توپ یک قدم به سمت راست غلتانده شد."}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":null},{"key":"yNotNumber","english":"y must be a number","target":null}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":null},{"key":"moveTo","english":"moved the ball to the given position","target":null},{"key":"getShotLength","english":"retrieved the shot length","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]}]}]
---

بیایید «حلقه»ی Repeat را به کار بگیریم!

یک توپ گلف روی تی قرار دارد. وظیفه‌ی شما این است که آن را به درون سوراخ بغلتانید، که ۶۰ قدم فاصله دارد.

این تمرین را در **سه خط کد** حل کنید. خوش بگذرانید!
