---
lang: "uk"
type: "exercise"
slug: "maze-solve-basic"
title: "Пройти лабіринт"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "e4864f3"
content_version: "6442ff01e88f"
published_at: "2026-07-31"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Не вдалося дійти до кінця лабіринту."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Провести чоловічка до кінця лабіринту"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Пройти лабіринт і дістатися зеленої цілі"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Провести чоловічка до кінця лабіринту"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Наше завдання: провести чоловічка через лабіринт до зеленої клітинки-цілі."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Що і куди я рухаю?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Ми рухаємо маленького чоловічка, який починає у верхньому лівому куті, до зеленого кола в правому нижньому куті, оминаючи клітинки в червону смужку."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Коли я повертаю ліворуч, чоловічок повертає праворуч!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"Чоловічок повертає відносно того напрямку, куди він зараз дивиться. Тож якщо він дивиться праворуч і повернути ліворуч, він стане дивитися вгору."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"О ні! Чоловічок мало не впав з краю лабіринту!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Ой! Чоловічок врізався в стіну!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Ой! Чоловічок ступив прямо у вогонь!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Фу! Чоловічок вступив у купку! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Рухає чоловічка на одну клітинку вперед"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Повертає чоловічка на 90 градусів ліворуч"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Повертає чоловічка на 90 градусів праворуч"}]}]}]
---

Вітаємо на першій вправі!

Мета цієї вправи: познайомитися з тим, як працює навчальне середовище. Наше завдання: пройти лабіринт, який видно ліворуч, даючи маленькому чоловічку вказівки. Записуємо всі вказівки, які чоловічок має виконати, а потім натискаємо **Запустити код**, щоб він їх виконав.

Ось три вказівки, які можна використати:

- `move()` (рухатися) рухає чоловічка на один крок уперед
- `turnLeft()` (повернути ліворуч) повертає чоловічка ліворуч (відносно напрямку, куди він зараз дивиться)
- `turnRight()` (повернути праворуч) повертає чоловічка праворуч (відносно напрямку, куди він зараз дивиться)

Ліворуч видно, що перші три вказівки ми вже написали. Почнімо з натискання кнопки **«Запустити код»**, щоб побачити, що вони роблять. А потім **додайте ще вказівок**, щоб довести чоловічка до кінця лабіринту. Пишемо по одній вказівці в кожному рядку, а потім натискаємо **Запустити код**, щоб виконати їх усі.

Корисно виробити звичку регулярно запускати свій код!

Щойно лабіринт буде пройдено, можна повернутися на панель і почати наступний урок.
