---
lang: "hu"
type: "exercise"
slug: "maze-solve-basic"
title: "Oldd meg a labirintust!"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "6ed23a25576883e0f33304cffc408fe0"
governance_sha: "45feeea"
content_version: "6319b9696641"
published_at: "2026-07-31"
forum_topic_id: 805
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Nem jutottál el a labirintus végéig."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Vezesd el a figurát a labirintus végéig"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Juss át a labirintuson a zöld célmezőig"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Vezesd el a figurát a labirintus végéig"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Az a dolgod, hogy átvezesd a figurádat a labirintuson a zöld célmezőig."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Mit hova kell mozgatnom?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"A bal felső sarokból induló kis figurát kell eljuttatnod a jobb alsó sarokban lévő zöld körig, közben pedig kerüld el a piros csíkos mezőket."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Balra fordítom, mégis jobbra fordul a figura!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if you are facing right, and turn left, the person will change to face up.","target":"A figura mindig ahhoz képest fordul, amerre éppen néz. Ha tehát jobbra néz, és balra fordítod, akkor utána felfelé fog nézni."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"Jaj ne, majdnem leléptél a labirintus széléről!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Aú, nekimentél a falnak!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Aú! Belesétáltál a tűzbe!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Fúj! Belesétáltál a kakiba! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Egy mezővel előre viszi a figurát"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"90 fokkal balra fordítja a figurát"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"90 fokkal jobbra fordítja a figurát"}]}]}]
---

Üdvözlünk az első feladatodban!

Ez a feladat azt a célt szolgálja, hogy megismerkedj a tanulási környezet működésével. Az a dolgod, hogy megoldd a bal oldalon látható labirintust úgy, hogy utasításokat adsz a kis figurának. Leírod az összes utasítást, amit a figurának követnie kell, majd a **Kód futtatása** gombra kattintasz, hogy végre is hajtsa őket.

Ezt a három utasítást használhatod:

- `move()` (mozogj) egy lépéssel előre viszi a figurát
- `turnLeft()` (fordulj balra) balra fordítja a figurát (ahhoz képest, amerre éppen néz)
- `turnRight()` (fordulj jobbra) jobbra fordítja a figurát (ahhoz képest, amerre éppen néz)

A bal oldalon láthatod, hogy az első három utasítást már leírtuk helyetted. Először kattints a **„Kód futtatása”** gombra, és nézd meg, mit csinálnak. Ezután **adj hozzá további utasításokat**, hogy a figurád eljusson a labirintus végéig. Minden utasítást külön sorba írj, majd nyomd meg a **Kód futtatása** gombot, hogy mind lefusson.

Érdemes rászoknod arra, hogy a kódodat rendszeresen lefuttasd!

Ha megoldottad a labirintust, visszatérhetsz az irányítópultra, és elkezdheted a következő leckét.
