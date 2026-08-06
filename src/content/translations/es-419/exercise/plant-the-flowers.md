---
lang: "es-419"
type: "exercise"
slug: "plant-the-flowers"
title: "Planta las flores"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/plant-the-flowers"
en_md5: "4cdf23fd99e55e08a5eece1751d712e2"
governance_sha: "c80036b"
content_version: "421316e9b2c0"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"flowerCount","english":"Expected 9 flowers, but found {{got}}.","target":"Se esperaban 9 flores, pero se encontraron {{got}}."},{"key":"missingFlowerAt10","english":"Missing a flower at position 10.","target":"Falta una flor en la posición 10."},{"key":"missingFlowerAt50","english":"Missing a flower at position 50.","target":"Falta una flor en la posición 50."},{"key":"missingFlowerAt90","english":"Missing a flower at position 90.","target":"Falta una flor en la posición 90."},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try to find a way to make it shorter.","target":"Tu solución tiene demasiadas líneas de código. Intenta encontrar una manera de hacerla más corta."}]},{"name":"tasks","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"Planta 9 flores"},{"key":"plantFlowers.description","english":"Use a variable and a repeat loop to plant 9 flowers at positions 10, 20, 30, ..., 90.","target":"Usa una variable y un bucle repeat para plantar 9 flores en las posiciones 10, 20, 30, ..., 90."}]},{"name":"scenarios","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"Planta 9 flores"},{"key":"plantFlowers.description","english":"Plant flowers at positions 10, 20, 30, 40, 50, 60, 70, 80, and 90.","target":"Plantar flores en las posiciones 10, 20, 30, 40, 50, 60, 70, 80 y 90."}]},{"name":"hints","rows":[{"key":"stuck.question","english":"I'm totally stuck","target":"Estoy totalmente atascado."},{"key":"stuck.answer","english":"Check the recent videos on how to use repeat loops and how to update variables to track state. They should tell you everything you need to know.","target":"Revisa los videos recientes sobre cómo usar bucles repeat y actualizar variables para rastrear el estado. Te dirán todo lo que necesitas saber."}]},{"name":"functions","rows":[{"key":"plant.description","english":"Plants a flower at the given **position**.","target":"Planta una flor en la **posición** dada."},{"key":"plant.category","english":"Gardening","target":"Jardinería"}]},{"name":"describers","rows":[{"key":"plant","english":"planted a flower at position ${arg1}","target":"plantó una flor en la posición ${arg1}"}]}]},{"heading":"Shared \"flower-planting\" messages","note":"Shared by every exercise in the flower-planting category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"positionNumber","english":"Position must be a number","target":null}]}]}]
---

Vas a crear una máquina automática para plantar flores.

Debe plantar flores uniformemente por todo el césped, con intervalos de 10 de separación. Así que la primera flor debe estar en la posición 10, la segunda en la 20, etc.

Tienes una función `plant(position)` (plantar en una posición) que toma una posición como argumento. Por ejemplo: `plant(10)` planta una flor en la posición 10.

Debes resolver este ejercicio en 5 líneas de código, así que necesitarás encontrar una manera de no solo escribir `plant(10)`, `plant(20)`, etc.

¡Buena suerte!
