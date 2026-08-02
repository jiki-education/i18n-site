---
lang: "it"
type: "exercise"
slug: "maze-solve-basic"
title: "Risolvi il labirinto"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "ffe72c0"
content_version: "6ff01630560c"
published_at: "2026-08-02"
forum_topic_id: 807
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Non hai raggiunto la fine del labirinto."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Guida il personaggio fino alla fine del labirinto"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Attraversa il labirinto per raggiungere il bersaglio verde"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Guida il personaggio fino alla fine del labirinto"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Il tuo compito è guidare il personaggio attraverso il labirinto fino alla casella verde di arrivo."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Che cosa devo spostare, e dove?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Devi portare l'omino, che parte in alto a sinistra, fino al cerchio verde in basso a destra, evitando le caselle a righe rosse."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Quando giro a sinistra, il personaggio gira a destra!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"Il personaggio gira rispetto alla direzione in cui è rivolto. Quindi, se è rivolto verso destra e gira a sinistra, il personaggio si ritroverà rivolto verso l'alto."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"Oh no, hai provato a cadere oltre il bordo del labirinto!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Ahi, hai sbattuto contro un muro!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Ahi! Hai camminato dritto nel fuoco!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Bleah! Hai camminato dritto nella cacca! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Sposta il personaggio in avanti di una casella"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Gira il personaggio di 90 gradi a sinistra"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Gira il personaggio di 90 gradi a destra"}]}]}]
---

Ti diamo il benvenuto al tuo primo esercizio!

Lo scopo di questo esercizio è farti familiarizzare con l'ambiente di apprendimento. Il tuo compito è risolvere il labirinto che vedi a sinistra, dando istruzioni all'omino. Scrivi tutte le istruzioni che deve seguire, poi clicca su **Esegui il codice** e lui le eseguirà.

Le tre istruzioni che puoi usare sono:

- `move()` (muovi): sposta il personaggio di un passo in avanti
- `turnLeft()` (gira a sinistra): fa girare il personaggio a sinistra (rispetto alla direzione in cui è rivolto in quel momento)
- `turnRight()` (gira a destra): fa girare il personaggio a destra (rispetto alla direzione in cui è rivolto in quel momento)

Come vedi, le prime tre istruzioni sono già scritte sulla sinistra. Comincia cliccando sul pulsante **"Esegui il codice"** per vedere che cosa fanno. Poi **aggiungi altre istruzioni** per portare il tuo personaggio fino alla fine del labirinto. Scrivi una sola istruzione per riga, poi premi **Esegui il codice** per eseguirle tutte.

Prendere l'abitudine di eseguire il codice spesso è un'ottima idea!

Una volta risolto il labirinto, puoi tornare alla Dashboard e iniziare la lezione successiva.
