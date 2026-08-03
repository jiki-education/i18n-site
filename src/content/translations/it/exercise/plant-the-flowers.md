---
lang: "it"
type: "exercise"
slug: "plant-the-flowers"
title: "Pianta i Fiori"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/plant-the-flowers"
en_md5: "4cdf23fd99e55e08a5eece1751d712e2"
governance_sha: "576126f"
content_version: "e779a1b96f41"
published_at: "2026-08-03"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"flowerCount","english":"Expected 9 flowers, but found {{got}}.","target":"Previsti 9 fiori, ma trovati {{got}}."},{"key":"missingFlowerAt10","english":"Missing a flower at position 10.","target":"Manca un fiore alla posizione 10."},{"key":"missingFlowerAt50","english":"Missing a flower at position 50.","target":"Manca un fiore alla posizione 50."},{"key":"missingFlowerAt90","english":"Missing a flower at position 90.","target":"Manca un fiore alla posizione 90."},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try to find a way to make it shorter.","target":"La tua soluzione ha troppe righe di codice. Prova a trovare un modo per accorciarla."}]},{"name":"tasks","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"Pianta 9 fiori"},{"key":"plantFlowers.description","english":"Use a variable and a repeat loop to plant 9 flowers at positions 10, 20, 30, ..., 90.","target":"Usa una variabile e un ciclo repeat per piantare 9 fiori alle posizioni 10, 20, 30, ..., 90."}]},{"name":"scenarios","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"Pianta 9 fiori"},{"key":"plantFlowers.description","english":"Plant flowers at positions 10, 20, 30, 40, 50, 60, 70, 80, and 90.","target":"Pianta fiori alle posizioni 10, 20, 30, 40, 50, 60, 70, 80 e 90."}]},{"name":"hints","rows":[{"key":"stuck.question","english":"I'm totally stuck","target":"Sono completamente bloccato"},{"key":"stuck.answer","english":"Check the recent videos on how to use repeat loops and how to update variables to track state. They should tell you everything you need to know.","target":"Controlla i video recenti su come usare i cicli repeat e su come aggiornare le variabili per tenere traccia dello stato. Dovrebbero dirti tutto ciò che ti serve sapere."}]},{"name":"functions","rows":[{"key":"plant.description","english":"Plants a flower at the given **position**.","target":"Pianta un fiore alla **posizione** indicata."},{"key":"plant.category","english":"Gardening","target":"Giardinaggio"}]},{"name":"describers","rows":[{"key":"plant","english":"planted a flower at position ${arg1}","target":"piantato un fiore alla posizione ${arg1}"}]}]},{"heading":"Shared \"flower-planting\" messages","note":"Shared by every exercise in the flower-planting category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"positionNumber","english":"Position must be a number","target":"La posizione deve essere un numero"}]}]}]
---

Stai creando una macchina automatica per piantare fiori.

Dovrebbe piantare fiori in modo uniforme su un prato, a intervalli di `10` l'uno dall'altro. Quindi il primo fiore dovrebbe essere alla posizione `10`, il secondo alla `20`, ecc.

Hai una funzione `plant(position)` (pianta alla posizione) che prende una posizione come input. Per esempio: `plant(10)` pianta un fiore alla posizione 10.

Devi risolvere questo esercizio in **5 righe di codice**, quindi dovrai trovare un modo per non scrivere semplicemente `plant(10)`, `plant(20)` ecc.

Buona fortuna!
