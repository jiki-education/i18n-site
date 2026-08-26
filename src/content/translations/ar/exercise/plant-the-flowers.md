---
lang: "ar"
type: "exercise"
slug: "plant-the-flowers"
title: "ازرع الزهور"
status: "published"
source_repo: "i18n"
source_path: "locales/ar/curriculum/exercises/plant-the-flowers"
en_md5: "4cdf23fd99e55e08a5eece1751d712e2"
governance_sha: "955b8514"
content_version: "c0be62ce47f1"
published_at: "2026-08-26"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"flowerCount","english":"Expected 9 flowers, but found {{got}}.","target":"كان من المتوقع 9 زهور، لكن وُجدت {{got}}."},{"key":"missingFlowerAt10","english":"Missing a flower at position 10.","target":"لا توجد زهرة عند الموضع 10."},{"key":"missingFlowerAt50","english":"Missing a flower at position 50.","target":"لا توجد زهرة عند الموضع 50."},{"key":"missingFlowerAt90","english":"Missing a flower at position 90.","target":"لا توجد زهرة عند الموضع 90."},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try to find a way to make it shorter.","target":"يحتوي حلك على عدد كبير جدًا من أسطر الكود. حاول إيجاد طريقة لجعله أقصر."}]},{"name":"tasks","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"ازرع 9 زهور"},{"key":"plantFlowers.description","english":"Use a variable and a repeat loop to plant 9 flowers at positions 10, 20, 30, ..., 90.","target":"استخدم متغيرًا وحلقة `repeat` لزراعة 9 زهور عند المواضع 10، 20، 30، ...، 90."}]},{"name":"scenarios","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"ازرع 9 زهور"},{"key":"plantFlowers.description","english":"Plant flowers at positions 10, 20, 30, 40, 50, 60, 70, 80, and 90.","target":"ازرع زهورًا عند المواضع 10، 20، 30، 40، 50، 60، 70، 80، و90."}]},{"name":"hints","rows":[{"key":"stuck.question","english":"I'm totally stuck","target":"أنا عالق تمامًا"},{"key":"stuck.answer","english":"Check the recent videos on how to use repeat loops and how to update variables to track state. They should tell you everything you need to know.","target":"شاهد الفيديوهات الأخيرة حول كيفية استخدام حلقات `repeat` وكيفية تحديث المتغيرات لتتبع الحالة. ستخبرك بكل ما تحتاج إلى معرفته."}]},{"name":"functions","rows":[{"key":"plant.description","english":"Plants a flower at the given **position**.","target":"يزرع زهرة عند **الموضع** المحدد."},{"key":"plant.category","english":"Gardening","target":"البستنة"}]},{"name":"describers","rows":[{"key":"plant","english":"planted a flower at position ${arg1}","target":"زرع زهرة عند الموضع ${arg1}"}]}]},{"heading":"Shared \"flower-planting\" messages","note":"Shared by every exercise in the flower-planting category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"positionNumber","english":"Position must be a number","target":"يجب أن يكون الموضع عددًا"}]}]}]
---

ستبني آلة تلقائية لزراعة الزهور.

يجب أن تزرع الزهور بالتساوي على امتداد العشب، بمسافة `10` بين كل زهرة وأخرى. لذا يجب أن تكون الزهرة الأولى عند الموضع `10`، والثانية عند الموضع `20`، وهكذا.

لديك دالة `plant(position)` (تزرع عند الموضع المحدد) تأخذ موضعًا كمدخل. على سبيل المثال: `plant(10)` يزرع زهرة عند الموضع 10.

عليك حل هذا التمرين في **5 أسطر من الكود**، لذا ستحتاج إلى إيجاد طريقة لا تكتفي فيها بكتابة `plant(10)` و`plant(20)` وهكذا.

بالتوفيق!
