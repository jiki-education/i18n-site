---
lang: "hu"
type: "exercise"
slug: "maze-solve-basic"
title: "Oldd meg a labirintust!"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "6ed23a25576883e0f33304cffc408fe0"
governance_sha: "38ce600"
content_version: "b1101f81bd75"
published_at: "2026-07-30"
forum_topic_id: 289
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

---

## Messages shown in the exercise

### checks

| Key | Message |
|-----|---------|
| `didNotReachEnd` | Nem jutottál el a labirintus végéig. |

### tasks

| Key | Message |
|-----|---------|
| `solveMaze.name` | Vezesd el a figurát a labirintus végéig |
| `solveMaze.description` | Juss át a labirintuson a zöld célmezőig |

### scenarios

| Key | Message |
|-----|---------|
| `maze1.name` | Vezesd el a figurát a labirintus végéig |
| `maze1.description` | Az a dolgod, hogy átvezesd a figurádat a labirintuson a zöld célmezőig. |

### hints

| Key | Message |
|-----|---------|
| `whatAmIMoving.question` | Mit hova kell mozgatnom? |
| `whatAmIMoving.answer` | A bal felső sarokból induló kis figurát kell eljuttatnod a jobb alsó sarokban lévő zöld körig, közben pedig kerüld el a piros csíkos mezőket. |
| `turnLeftTurnsRight.question` | Balra fordítom, mégis jobbra fordul a figura! |
| `turnLeftTurnsRight.answer` | A figura mindig ahhoz képest fordul, amerre éppen néz. Ha tehát jobbra néz, és balra fordítod, akkor utána felfelé fog nézni. |

---

## Shared "maze" messages

Shared by every exercise in the maze category, not just this one. A change here changes all of them.

### errors

| Key | Message |
|-----|---------|
| `fellOffEdge` | Jaj ne, majdnem leléptél a labirintus széléről! |
| `hitWall` | Aú, nekimentél a falnak! |
| `walkedIntoFire` | Aú! Belesétáltál a tűzbe! |
| `walkedIntoPoop` | Fúj! Belesétáltál a kakiba! 💩💩💩 |

### describers

| Key | Message |
|-----|---------|
| `move` | Egy mezővel előre viszi a figurát |
| `turnLeft` | 90 fokkal balra fordítja a figurát |
| `turnRight` | 90 fokkal jobbra fordítja a figurát |
