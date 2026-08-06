---
lang: "fa"
type: "exercise"
slug: "golf-rolling-ball-state"
title: "توپ وضعیت‌دار"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-state"
en_md5: "f203d7c055cd4ad8de235218c470df98"
governance_sha: "c80036b"
content_version: "208e8a90848c"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"positionNotNumber","english":"position must be a number","target":"position باید یک عدد باشد"}]},{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball didn't reach the hole. It's at position {{ballX}}, but needs to be at position 88.","target":"توپ به سوراخ نرسید. در موقعیت {{ballX}} قرار دارد، اما باید در موقعیت ۸۸ باشد."},{"key":"missingPositions","english":"The ball must roll through each position individually, not jump directly to the end.","target":"توپ باید از تک‌تک موقعیت‌ها عبور کند، نه اینکه یک‌راست به انتها بپرد."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"توپ را به درون سوراخ بغلتانید."},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"توپ را به درون سوراخ بغلتانید."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"توپ را به درون سوراخ بغلتانید."},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"توپ را به درون سوراخ بغلتانید."}]},{"name":"hints","rows":[{"key":"dontKnowWhereToStart.question","english":"I don't know where to start","target":"نمی‌دانم از کجا شروع کنم"},{"key":"dontKnowWhereToStart.answer","english":"The key is to move the ball one step forward each time. You can use a variable to do this. Think about how that might work.","target":"نکته این است که توپ را هر بار یک قدم به جلو حرکت دهید. می‌توانید از یک متغیر برای این کار استفاده کنید. فکر کنید چطور ممکن است کار کند."},{"key":"stillCantFigureItOut.question","english":"I still can't figure it out","target":"هنوز نمی‌توانم حلش کنم"},{"key":"stillCantFigureItOut.answer","english":"You want to create a variable to track where the ball is. It should start where it is now, then many times increase by one. Every time it increases you should `moveTo(...)` using the variable as an input.","target":"می‌خواهید یک متغیر برای ردیابی موقعیت توپ ایجاد کنید. این متغیر باید از موقعیت فعلی شروع شود، سپس بارها یکی افزایش یابد. هر بار که افزایش یافت باید `moveTo(...)` را با استفاده از آن متغیر به عنوان ورودی فراخوانی کنید."}]},{"name":"functions","rows":[{"key":"moveTo.description","english":"Moves the ball to **position**.","target":"توپ را به **position** می‌برد."},{"key":"moveTo.category","english":"Movement","target":"حرکت"}]},{"name":"describers","rows":[{"key":"moveTo","english":"moved the ball to position ${arg1}","target":"توپ به موقعیت ${arg1} برده شد."}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":null},{"key":"yNotNumber","english":"y must be a number","target":null}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":null},{"key":"moveTo","english":"moved the ball to the given position","target":null},{"key":"getShotLength","english":"retrieved the shot length","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]}]}]
---

به دنیای ساخت بازی گلف بازگشته‌ایم، اما این بار چیزی که می‌سازیم تغییر کرده است.

به جای تابع `roll()` (غلتیدن) که قبلاً داشتیم، حالا یک تابع `moveTo(position)` (حرکت به موقعیت) داریم که توپ را فوراً به یک نقطه می‌برد.

حالا، وقتی بازیکن به توپ ضربه می‌زند، می‌توانیم توپ را مستقیم به مقصد نهایی ببریم، اما دیدن اینکه توپ هیچ انیمیشنی ندارد خیلی ناخوشایند است. پس به‌جای آن می‌خواهیم بارها از `moveTo(position)` استفاده کنیم تا به نظر برسد توپ در حال غلتیدن است.

توپ از موقعیت **۲۸** شروع می‌کند و باید به موقعیت **۸۸** برسد.

باید این مسئله را در **۵ خط کد** حل کنید. موفق باشید!
