---
lang: "fa"
type: "exercise"
slug: "plant-the-flowers"
title: "کاشت گل‌ها"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/plant-the-flowers"
en_md5: "4cdf23fd99e55e08a5eece1751d712e2"
governance_sha: "c80036b"
content_version: "b5191586e807"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"flowerCount","english":"Expected 9 flowers, but found {{got}}.","target":"انتظار ۹ گل وجود داشت، اما {{got}} یافت شد."},{"key":"missingFlowerAt10","english":"Missing a flower at position 10.","target":"گلی در موقعیت ۱۰ کاشته نشده است."},{"key":"missingFlowerAt50","english":"Missing a flower at position 50.","target":"گلی در موقعیت ۵۰ کاشته نشده است."},{"key":"missingFlowerAt90","english":"Missing a flower at position 90.","target":"گلی در موقعیت ۹۰ کاشته نشده است."},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try to find a way to make it shorter.","target":"راه‌حل شما خطوط کد زیادی دارد. سعی کنید راهی برای کوتاه‌تر کردن آن پیدا کنید."}]},{"name":"tasks","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"کاشت ۹ گل"},{"key":"plantFlowers.description","english":"Use a variable and a repeat loop to plant 9 flowers at positions 10, 20, 30, ..., 90.","target":"از یک متغیر و یک حلقه‌ی Repeat برای کاشت ۹ گل در موقعیت‌های ۱۰، ۲۰، ۳۰، ...، ۹۰ استفاده کنید."}]},{"name":"scenarios","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"کاشت ۹ گل"},{"key":"plantFlowers.description","english":"Plant flowers at positions 10, 20, 30, 40, 50, 60, 70, 80, and 90.","target":"گل‌ها را در موقعیت‌های ۱۰، ۲۰، ۳۰، ۴۰، ۵۰، ۶۰، ۷۰، ۸۰ و ۹۰ بکارید."}]},{"name":"hints","rows":[{"key":"stuck.question","english":"I'm totally stuck","target":"من کاملاً گیر کرده‌ام."},{"key":"stuck.answer","english":"Check the recent videos on how to use repeat loops and how to update variables to track state. They should tell you everything you need to know.","target":"ویدیوهای اخیر درباره نحوه استفاده از حلقه‌های Repeat و نحوه به‌روزرسانی متغیرها برای پیگیری وضعیت را بررسی کنید. باید هر آنچه لازم دارید را به شما بگویند."}]},{"name":"functions","rows":[{"key":"plant.description","english":"Plants a flower at the given **position**.","target":"یک گل را در **موقعیت** مشخص شده می‌کارد."},{"key":"plant.category","english":"Gardening","target":"باغبانی"}]},{"name":"describers","rows":[{"key":"plant","english":"planted a flower at position ${arg1}","target":"گلی در موقعیت ${arg1} کاشته شد."}]}]},{"heading":"Shared \"flower-planting\" messages","note":"Shared by every exercise in the flower-planting category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"positionNumber","english":"Position must be a number","target":null}]}]}]
---

شما در حال ساخت یک دستگاه خودکار کاشت گل هستید.

این دستگاه باید گل‌ها را به‌طور مساوی در سراسر چمن‌زار بکارد، با فاصله‌های `10` از هم. بنابراین اولین گل باید در موقعیت `10` باشد، دومین گل در `20` و ...

شما تابع `plant(position)` (کاشتن) دارید که یک موقعیت را به‌عنوان ورودی می‌گیرد. برای مثال: `plant(10)` یک گل را در موقعیت ۱۰ می‌کارد.

باید این تمرین را در **۵ خط کد** حل کنید، پس باید راهی پیدا کنید که فقط `plant(10)`، `plant(20)` و ... را ننویسید.

موفق باشید!
