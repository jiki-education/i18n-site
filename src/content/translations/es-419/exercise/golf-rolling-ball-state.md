---
lang: "es-419"
type: "exercise"
slug: "golf-rolling-ball-state"
title: "Pelota con estado"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-state"
en_md5: "f203d7c055cd4ad8de235218c470df98"
governance_sha: "c80036b"
content_version: "8089a66cf6e9"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"positionNotNumber","english":"position must be a number","target":"La posición debe ser un número."}]},{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball didn't reach the hole. It's at position {{ballX}}, but needs to be at position 88.","target":"La pelota no llegó al hoyo. Está en la posición {{ballX}}, pero debe estar en la posición 88."},{"key":"missingPositions","english":"The ball must roll through each position individually, not jump directly to the end.","target":"La pelota debe rodar por cada posición una por una, sin saltar directamente al final."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Rodar la pelota hasta el hoyo"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Rodar la pelota hasta el hoyo."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Rodar la pelota hasta el hoyo"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Rodar la pelota hasta el hoyo."}]},{"name":"hints","rows":[{"key":"dontKnowWhereToStart.question","english":"I don't know where to start","target":"No sé por dónde empezar"},{"key":"dontKnowWhereToStart.answer","english":"The key is to move the ball one step forward each time. You can use a variable to do this. Think about how that might work.","target":"La clave es mover la pelota un paso hacia adelante cada vez. Puedes usar una variable para hacerlo. Piensa en cómo podría funcionar."},{"key":"stillCantFigureItOut.question","english":"I still can't figure it out","target":"Sigo sin poder resolverlo"},{"key":"stillCantFigureItOut.answer","english":"You want to create a variable to track where the ball is. It should start where it is now, then many times increase by one. Every time it increases you should `moveTo(...)` using the variable as an input.","target":"Quieres crear una variable para rastrear dónde está la pelota. Debe comenzar donde está ahora, luego aumentar en uno muchas veces. Cada vez que aumente, debes usar `moveTo(...)` pasando la variable como argumento."}]},{"name":"functions","rows":[{"key":"moveTo.description","english":"Moves the ball to **position**.","target":"Mueve la pelota a la **posición**."},{"key":"moveTo.category","english":"Movement","target":"Movimiento"}]},{"name":"describers","rows":[{"key":"moveTo","english":"moved the ball to position ${arg1}","target":"movió la pelota a la posición ${arg1}"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":null},{"key":"yNotNumber","english":"y must be a number","target":null}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":null},{"key":"moveTo","english":"moved the ball to the given position","target":null},{"key":"getShotLength","english":"retrieved the shot length","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]}]}]
---

Estamos de vuelta en el mundo de construir un juego de golf, pero esta vez lo que estamos construyendo ha cambiado.

En lugar de la función `roll()` (rodar) que teníamos antes, ahora tenemos una función `moveTo(position)` (mover a posición) que mueve la pelota a un lugar al instante.

Ahora, cuando el jugador golpea la pelota, podríamos moverla directamente al lugar final, pero no es muy satisfactorio ver que no se anima. Así que, en vez de eso, queremos usar `moveTo(position)` muchas veces para que parezca que está rodando.

La pelota comienza en la posición **28** y necesita llegar a la posición **88**.

Debes resolver esto en **5 líneas de código**. ¡Buena suerte!
