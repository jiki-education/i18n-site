---
lang: "ro"
type: "exercise"
slug: "maze-solve-basic"
title: "Rezolvă labirintul"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "b21d29b"
content_version: "6c08fe930de2"
published_at: "2026-07-31"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Nu ai ajuns la capătul labirintului."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Condu personajul până la capătul labirintului"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Navighează prin labirint ca să ajungi la ținta verde"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Condu personajul până la capătul labirintului"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Treaba ta este să-ți conduci personajul prin labirint până la pătratul verde de sosire."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Ce mut și unde?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Muți omulețul, care pornește din stânga sus, până la cercul verde din dreapta jos, ocolind celulele cu dungi roșii."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Când întorc la stânga, personajul se întoarce la dreapta!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"Personajul se întoarce față de direcția în care este orientat. Deci dacă este orientat spre dreapta și se întoarce la stânga, va ajunge să fie orientat în sus."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"Vai! Ai încercat să cazi de pe marginea labirintului!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Au! Ai intrat într-un zid!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Au! Ai intrat direct în foc!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Bleah! Ai călcat direct în caca! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Mută personajul cu o celulă înainte"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Întoarce personajul cu 90 de grade la stânga"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Întoarce personajul cu 90 de grade la dreapta"}]}]}]
---

Bine ai venit la primul tău exercițiu!

Scopul acestui exercițiu este să te familiarizezi cu felul în care funcționează mediul de învățare. Sarcina ta este să rezolvi labirintul din stânga, dându-i instrucțiuni omulețului. Scrii toate instrucțiunile pe care personajul trebuie să le urmeze, apoi apeși pe **Rulează codul** ca să le execute.

Cele trei instrucțiuni pe care le poți folosi sunt:

- `move()` (mișcă-te), care mută personajul cu un pas înainte
- `turnLeft()` (întoarce-te la stânga) întoarce personajul la stânga (față de direcția în care este orientat în acel moment)
- `turnRight()` (întoarce-te la dreapta) întoarce personajul la dreapta (față de direcția în care este orientat în acel moment)

După cum vezi, primele trei instrucțiuni sunt deja scrise în stânga. Începe prin a apăsa butonul **„Rulează codul”** ca să vezi ce fac. Apoi **adaugă mai multe instrucțiuni** ca să-ți duci personajul până la capătul labirintului. Scrie câte o instrucțiune pe fiecare rând, apoi apasă **Rulează codul** ca să le rulezi pe toate.

E bine să-ți faci obiceiul de a-ți rula codul des!

După ce rezolvi labirintul, te poți întoarce la panoul de control și poți începe lecția următoare.
