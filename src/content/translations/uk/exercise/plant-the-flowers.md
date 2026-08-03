---
lang: "uk"
type: "exercise"
slug: "plant-the-flowers"
title: "Посадіть квіти"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/plant-the-flowers"
en_md5: "4cdf23fd99e55e08a5eece1751d712e2"
governance_sha: "1115f13"
content_version: "e86263b2caa5"
published_at: "2026-08-03"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"flowerCount","english":"Expected 9 flowers, but found {{got}}.","target":"Очікувалося 9 квіток, але знайдено {{got}}."},{"key":"missingFlowerAt10","english":"Missing a flower at position 10.","target":"Бракує квітки на позиції 10."},{"key":"missingFlowerAt50","english":"Missing a flower at position 50.","target":"Бракує квітки на позиції 50."},{"key":"missingFlowerAt90","english":"Missing a flower at position 90.","target":"Бракує квітки на позиції 90."},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try to find a way to make it shorter.","target":"У рішенні забагато рядків коду. Спробуйте знайти спосіб зробити його коротшим."}]},{"name":"tasks","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"Посадити 9 квіток"},{"key":"plantFlowers.description","english":"Use a variable and a repeat loop to plant 9 flowers at positions 10, 20, 30, ..., 90.","target":"Використайте змінну та цикл `repeat`, щоб посадити 9 квіток на позиціях 10, 20, 30, ..., 90."}]},{"name":"scenarios","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"Посадити 9 квіток"},{"key":"plantFlowers.description","english":"Plant flowers at positions 10, 20, 30, 40, 50, 60, 70, 80, and 90.","target":"Посадіть квіти на позиціях 10, 20, 30, 40, 50, 60, 70, 80 і 90."}]},{"name":"hints","rows":[{"key":"stuck.question","english":"I'm totally stuck","target":"Я зовсім не знаю, що робити"},{"key":"stuck.answer","english":"Check the recent videos on how to use repeat loops and how to update variables to track state. They should tell you everything you need to know.","target":"Перегляньте останні відео про те, як використовувати цикли `repeat` і як оновлювати змінні, щоб відстежувати стан. Там є все, що потрібно знати."}]},{"name":"functions","rows":[{"key":"plant.description","english":"Plants a flower at the given **position**.","target":"Садить квітку на вказаній **позиції**."},{"key":"plant.category","english":"Gardening","target":"Садівництво"}]},{"name":"describers","rows":[{"key":"plant","english":"planted a flower at position ${arg1}","target":"посадив квітку на позиції ${arg1}"}]}]},{"heading":"Shared \"flower-planting\" messages","note":"Shared by every exercise in the flower-planting category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"positionNumber","english":"Position must be a number","target":"Позиція має бути числом"}]}]}]
---

Ми створюємо автоматичну машину для садіння квітів.

Вона має садити квіти рівномірно по всій галявині, з інтервалом `10` між ними. Тож перша квітка має опинитися на позиції `10`, друга на позиції `20` і так далі.

У нас є функція `plant(position)` (садити на позиції), яка приймає позицію як вхідні дані. Наприклад, `plant(10)` садить квітку на позиції 10.

Розвʼязати цю вправу потрібно за **5 рядків коду**, тож доведеться знайти спосіб не просто писати `plant(10)`, `plant(20)` і так далі.

Успіхів!
