---
lang: "uk"
type: "exercise"
slug: "golf-rolling-ball-state"
title: "Мʼяч зі станом"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-state"
en_md5: "f203d7c055cd4ad8de235218c470df98"
governance_sha: "b611259"
content_version: "38e8426b4784"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"positionNotNumber","english":"position must be a number","target":"position має бути числом"}]},{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball didn't reach the hole. It's at position {{ballX}}, but needs to be at position 88.","target":"Мʼяч не потрапив у лунку. Він на позиції {{ballX}}, а має бути на позиції 88."},{"key":"missingPositions","english":"The ball must roll through each position individually, not jump directly to the end.","target":"Мʼяч має прокотитися через кожну позицію по черзі, а не перестрибнути одразу в кінець."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Закотіть мʼяч у лунку"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Закотіть мʼяч у лунку."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Закотіть мʼяч у лунку"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Закотіть мʼяч у лунку."}]},{"name":"hints","rows":[{"key":"dontKnowWhereToStart.question","english":"I don't know where to start","target":"Я не знаю, з чого почати"},{"key":"dontKnowWhereToStart.answer","english":"The key is to move the ball one step forward each time. You can use a variable to do this. Think about how that might work.","target":"Головне: щоразу пересувати мʼяч на один крок уперед. Для цього можна скористатися змінною. Подумайте, як це могло би працювати."},{"key":"stillCantFigureItOut.question","english":"I still can't figure it out","target":"Я все ще не можу розібратися"},{"key":"stillCantFigureItOut.answer","english":"You want to create a variable to track where the ball is. It should start where it is now, then many times increase by one. Every time it increases you should `moveTo(...)` using the variable as an input.","target":"Створіть змінну, яка відстежуватиме, де перебуває мʼяч. Спочатку вона має містити його поточну позицію, а потім багато разів збільшуватися на одиницю. Щоразу після збільшення викликайте `moveTo(...)`, передаючи цю змінну як вхідні дані."}]},{"name":"functions","rows":[{"key":"moveTo.description","english":"Moves the ball to **position**.","target":"Переміщує мʼяч у позицію **position**."},{"key":"moveTo.category","english":"Movement","target":"Рух"}]},{"name":"describers","rows":[{"key":"moveTo","english":"moved the ball to position ${arg1}","target":"перемістив мʼяч у позицію ${arg1}"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":"x має бути числом"},{"key":"yNotNumber","english":"y must be a number","target":"y має бути числом"}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":"покотив мʼяч на одну одиницю праворуч"},{"key":"moveTo","english":"moved the ball to the given position","target":"перемістив мʼяч у вказану позицію"},{"key":"getShotLength","english":"retrieved the shot length","target":"отримав довжину удару"},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":"запустив святковий феєрверк"}]}]}]
---

Ми знову у світі створення гри в гольф, але цього разу дещо змінилося.

Замість функції `roll()` (покотити мʼяч), яку ми мали раніше, тепер у нас є функція `moveTo(position)` (перемістити в позицію), яка миттєво переміщує мʼяч у потрібне місце.

Тепер, коли гравець бʼє по мʼячу, ми могли би просто одразу перемістити його в кінцеву точку, але без анімації це виглядає зовсім не так переконливо. Тож натомість ми хочемо викликати `moveTo(position)` багато разів, щоб здавалося, ніби мʼяч котиться.

Мʼяч починає з позиції **28** і має опинитися на позиції **88**.

Розвʼяжіть цю вправу за **5 рядків коду**. Успіхів!
