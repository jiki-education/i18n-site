---
lang: "uk"
type: "exercise"
slug: "golf-rolling-ball-loop"
title: "Котимо мʼяч"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-loop"
en_md5: "e581ca0b932527b029cef23f9ad49a5e"
governance_sha: "f6ef867"
content_version: "5a7450ecbbe7"
published_at: "2026-08-02"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball rolled to {{ballX}}, which isn't 60 from where it started.","target":"Мʼяч докотився до позиції {{ballX}}, а це не 60 кроків від місця старту."},{"key":"missingPositions","english":"The ball must roll through each position one step at a time, starting from 29.","target":"Мʼяч має прокотитися через кожну позицію, крок за кроком, починаючи з 29."},{"key":"codeQuality.tooManyLines","english":"Your solution has too many lines of code. Try using a loop to make it shorter.","target":"У рішенні забагато рядків коду. Спробуйте скоротити його за допомогою циклу."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Закотіть мʼяч у лунку"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Закотіть мʼяч у лунку."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Закотіть мʼяч у лунку"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Закотіть мʼяч у лунку."}]},{"name":"hints","rows":[{"key":"icantWorkItOut.question","english":"I can't work it out","target":"Не можу розібратися"},{"key":"icantWorkItOut.answer","english":"You have two tools to use:\n- A repeat loop, which you use by writing `repeat(n) { }` where `n` is the amount of times you want to roll and where you can put anything inside the braces (`{ }`).\n- A `roll()` function that rolls the ball one step to the right.\n\nHow can you combine them?","target":"У нас є два інструменти:\n- Цикл `repeat`, який використовується так: пишемо `repeat(n) { ... }`, де `n` означає, скільки разів потрібно покотити мʼяч, а всередині фігурних дужок можна розмістити будь-який код.\n- Функція `roll()`, що котить мʼяч на один крок праворуч.\n\nЯк їх поєднати?"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls the ball **one step to the right**.","target":"Котить мʼяч на **один крок праворуч**."},{"key":"roll.category","english":"Movement","target":"Рух"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled the ball one step to the right","target":"покотив мʼяч на один крок праворуч"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":"x має бути числом"},{"key":"yNotNumber","english":"y must be a number","target":"y має бути числом"}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":"покотив мʼяч на одну одиницю праворуч"},{"key":"moveTo","english":"moved the ball to the given position","target":"перемістив мʼяч у вказану позицію"},{"key":"getShotLength","english":"retrieved the shot length","target":"отримав довжину удару"},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":"запустив святковий феєрверк"}]}]}]
---

Випробуймо цикл (англ. _loop_) `repeat` у дії!

Мʼяч для гольфу лежить на кілочку. Наше завдання: закотити його в лунку, що за 60 кроків звідси.

Розвʼяжіть цю вправу, використавши лише **три рядки коду**. Буде весело!
