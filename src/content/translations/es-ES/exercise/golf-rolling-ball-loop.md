---
lang: "es-ES"
type: "exercise"
slug: "golf-rolling-ball-loop"
title: "Pelota rodante"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/golf-rolling-ball-loop"
en_md5: "e581ca0b932527b029cef23f9ad49a5e"
governance_sha: "16f805d"
content_version: "eeb3d2292a6c"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball rolled to {{ballX}}, which isn't 60 from where it started.","target":"La pelota rodó hasta {{ballX}}, pero no está a 60 pasos de donde empezó."},{"key":"missingPositions","english":"The ball must roll through each position one step at a time, starting from 29.","target":"La pelota debe rodar por cada posición, un paso a la vez, empezando desde 29."},{"key":"codeQuality.tooManyLines","english":"Your solution has too many lines of code. Try using a loop to make it shorter.","target":"Tu solución tiene demasiadas líneas de código. Intenta usar un bucle para acortarla."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Haz rodar la pelota hasta el hoyo"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Haz rodar la pelota hasta el hoyo."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Haz rodar la pelota hasta el hoyo"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Haz rodar la pelota hasta el hoyo."}]},{"name":"hints","rows":[{"key":"icantWorkItOut.question","english":"I can't work it out","target":"No puedo resolverlo"},{"key":"icantWorkItOut.answer","english":"You have two tools to use:\n- A repeat loop, which you use by writing `repeat(n) { }` where `n` is the amount of times you want to roll and where you can put anything inside the braces (`{ }`).\n- A `roll()` function that rolls the ball one step to the right.\n\nHow can you combine them?","target":"Tienes dos herramientas que usar:\n- Un bucle `repeat`, que usas escribiendo `repeat(n) { }`, donde `n` es la cantidad de veces que quieres rodar y puedes poner cualquier cosa dentro de las llaves (`{ }`).\n- Una función `roll()` que hace rodar la pelota un paso a la derecha.\n\n¿Cómo puedes combinarlas?"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls the ball **one step to the right**.","target":"Hace rodar la pelota **un paso a la derecha**."},{"key":"roll.category","english":"Movement","target":"Movimiento"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled the ball one step to the right","target":"Rodó la pelota un paso a la derecha"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":"x debe ser un número"},{"key":"yNotNumber","english":"y must be a number","target":"y debe ser un número"}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":"hizo rodar la pelota una unidad hacia la derecha"},{"key":"moveTo","english":"moved the ball to the given position","target":"movió la pelota a la posición indicada"},{"key":"getShotLength","english":"retrieved the shot length","target":"obtuvo la longitud del tiro"},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":"lanzó fuegos artificiales para celebrar"}]}]}]
---

¡Vamos a poner en acción el bucle `repeat` (_loop_ en inglés)!

Una pelota de golf está sobre el tee. Tu trabajo es hacerla rodar hasta el hoyo, que está a 60 pasos de distancia.

Resuelve este ejercicio en **tres líneas de código**. ¡Diviértete!
