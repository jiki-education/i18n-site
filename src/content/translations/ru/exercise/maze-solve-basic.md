---
lang: "ru"
type: "exercise"
slug: "maze-solve-basic"
title: "Пройдите лабиринт"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "6ed23a25576883e0f33304cffc408fe0"
governance_sha: "45feeea"
content_version: "ff9538ecf242"
published_at: "2026-07-31"
forum_topic_id: 813
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Вы не дошли до конца лабиринта."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Проведите человечка до конца лабиринта"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Пройдите лабиринт и доберитесь до зелёной цели"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Проведите человечка до конца лабиринта"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Ваша цель: провести человечка через лабиринт до зелёной клетки-финиша."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Что и куда я двигаю?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Вы ведёте маленького человечка, который стоит в левом верхнем углу, к зелёному кружку в правом нижнем углу, обходя клетки в красную полоску."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Я поворачиваю налево, а человечек поворачивает направо!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if you are facing right, and turn left, the person will change to face up.","target":"Человечек поворачивает относительно того направления, в которое он смотрит. Например, если он смотрит вправо и вы поворачиваете налево, он станет смотреть вверх."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"О нет, вы чуть не шагнули за край лабиринта!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Ой, вы врезались в стену!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Ой! Вы шагнули прямо в огонь!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Фу! Вы наступили в какашку! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Перемещает персонажа на одну клетку вперёд"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Поворачивает персонажа на 90 градусов налево"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Поворачивает персонажа на 90 градусов направо"}]}]}]
---

Добро пожаловать в ваше первое упражнение!

Это упражнение знакомит вас с тем, как устроена учебная среда. Вам нужно пройти лабиринт, который вы видите слева, давая инструкции маленькому человечку. Вы записываете все инструкции, которые он должен выполнить, а потом нажимаете **Запустить код**, чтобы он их выполнил.

Вам доступны три инструкции:

- `move()` (двигаться) перемещает персонажа на один шаг вперёд
- `turnLeft()` (повернуть налево) поворачивает персонажа налево (относительно того направления, в которое он сейчас смотрит)
- `turnRight()` (повернуть направо) поворачивает персонажа направо (относительно того направления, в которое он сейчас смотрит)

Слева вы увидите, что первые три инструкции мы уже написали за вас. Начните с того, что нажмёте кнопку **«Запустить код»**, чтобы посмотреть, что они делают. Затем **добавьте ещё инструкции**, чтобы ваш персонаж дошёл до конца лабиринта. Пишите каждую инструкцию на отдельной строке, а потом нажимайте **Запустить код**, чтобы выполнить их все.

Возьмите за привычку почаще запускать свой код, это очень полезно!

Как только вы пройдёте лабиринт, вернитесь на главную страницу и начните следующий урок.
