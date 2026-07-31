---
lang: "ca"
type: "exercise"
slug: "maze-solve-basic"
title: "Resol el laberint"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "6ed23a25576883e0f33304cffc408fe0"
governance_sha: "45feeea"
content_version: "d30ad7fe8868"
published_at: "2026-07-31"
forum_topic_id: 797
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"No has arribat al final del laberint."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Guia el personatge fins al final del laberint"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Recorre el laberint per arribar a l'objectiu verd"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Guia el personatge fins al final del laberint"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"La teva feina és guiar el personatge pel laberint fins a la casella verda d'arribada."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Què moc i cap a on?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Mous el personatge, que comença a dalt a l'esquerra, fins al cercle verd de baix a la dreta, evitant les caselles ratllades de vermell."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Quan giro a l'esquerra, el personatge gira a la dreta!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if you are facing right, and turn left, the person will change to face up.","target":"El personatge gira respecte a la direcció cap a on mira. Així, si mira cap a la dreta i gires a l'esquerra, passarà a mirar cap amunt."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"Oh, no! Has intentat caure per la vora del laberint!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Ai! Has topat amb una paret!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Ai! T'has ficat al foc!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Ecs! Has trepitjat la caca! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Mou el personatge una casella endavant"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Gira el personatge 90 graus a l'esquerra"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Gira el personatge 90 graus a la dreta"}]}]}]
---

Et donem la benvinguda al teu primer exercici!

L'objectiu d'aquest exercici és que et familiaritzis amb el funcionament de l'entorn d'aprenentatge. La teva tasca és resoldre el laberint que veus a l'esquerra donant instruccions al personatge. Escrius totes les instruccions que ha de seguir el personatge i, tot seguit, fas clic a **Executa el codi** perquè les segueixi.

Les tres instruccions que pots fer servir són:

- `move()` (mou) que fa avançar el personatge una casella
- `turnLeft()` (gira a l'esquerra) gira el personatge cap a l'esquerra (respecte a la direcció cap a on mira en aquell moment)
- `turnRight()` (gira a la dreta) gira el personatge cap a la dreta (respecte a la direcció cap a on mira en aquell moment)

A l'esquerra pots veure que ja hem escrit les tres primeres instruccions. Per començar, fes clic al botó **«Executa el codi»** per veure què fan. Després, **afegeix més instruccions** per portar el personatge fins al final del laberint. Posa una instrucció a cada línia i prem **Executa el codi** per executar-les totes.

Val la pena agafar el costum d'executar el codi sovint!

Quan hagis resolt el laberint, pots tornar al Tauler i començar la lliçó següent.
