---
lang: "es-419"
type: "exercise"
slug: "maze-solve-basic"
title: "Resuelve el laberinto"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "1a9f130"
content_version: "99e3bd536d1d"
published_at: "2026-08-02"
forum_topic_id: 800
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"No llegaste al final del laberinto."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Guía al personaje hasta el final del laberinto"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Recorre el laberinto para llegar al objetivo verde"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Guía al personaje hasta el final del laberinto"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Tu tarea es llevar a tu personaje por el laberinto hasta la casilla verde de meta."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"¿Qué muevo y hacia dónde?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Estás moviendo al personaje chiquito, que empieza arriba a la izquierda, hasta el círculo verde de abajo a la derecha, esquivando las casillas con rayas rojas."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"¡Cuando giro a la izquierda, el personaje gira a la derecha!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"El personaje gira respecto a la dirección hacia la que está mirando. Así que si está mirando a la derecha y gira a la izquierda, pasará a mirar hacia arriba."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"¡Ay, no! ¡Intentaste salirte por el borde del laberinto!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"¡Ay! ¡Te chocaste con una pared!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"¡Ay! ¡Caminaste directo al fuego!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"¡Puaj! ¡Pisaste la caca! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Mueve al personaje una casilla hacia adelante"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Gira al personaje 90 grados a la izquierda"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Gira al personaje 90 grados a la derecha"}]}]}]
---

¡Te damos la bienvenida a tu primer ejercicio!

El objetivo de este ejercicio es que te familiarices en como funciona este entorno de aprendizaje. Tu tarea es resolver el laberinto que ves a la izquierda dándole instrucciones al personaje chiquito. Escribes todas las instrucciones que el personaje tiene que seguir y después haces clic en **Ejecutar código** para que las siga.

Las tres instrucciones que puedes usar son:

- `move()` (mover) mueve al personaje un paso hacia adelante
- `turnLeft()` (girar a la izquierda) gira al personaje hacia la izquierda (respecto a la dirección hacia la que está mirando)
- `turnRight()` (girar a la derecha) gira al personaje hacia la derecha (respecto a la dirección hacia la que está mirando)

En el lado izquierdo puedes ver que ya escribimos las primeras tres instrucciones. Empieza por hacer clic en el botón **“Ejecutar código”** para ver qué hacen. Después, **agrega más instrucciones** para llevar a tu personaje hasta el final del laberinto. Escribe una instrucción por línea y luego presiona **Ejecutar código** para ejecutarlas todas.

¡Es una buena costumbre ejecutar tu código con frecuencia!

Cuando resuelvas el laberinto, puedes volver al panel principal y empezar la siguiente lección.
