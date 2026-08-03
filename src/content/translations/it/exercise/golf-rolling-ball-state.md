---
lang: "it"
type: "exercise"
slug: "golf-rolling-ball-state"
title: "Palla con stato"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-state"
en_md5: "f203d7c055cd4ad8de235218c470df98"
governance_sha: "576126f"
content_version: "41e475fbf92d"
published_at: "2026-08-03"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"positionNotNumber","english":"position must be a number","target":"la posizione deve essere un numero"}]},{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball didn't reach the hole. It's at position {{ballX}}, but needs to be at position 88.","target":"La pallina non ha raggiunto la buca. Si trova alla posizione {{ballX}}, ma deve essere alla posizione 88."},{"key":"missingPositions","english":"The ball must roll through each position individually, not jump directly to the end.","target":"La pallina deve rotolare attraverso ogni posizione singolarmente, non saltare direttamente alla fine."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Fai rotolare la pallina nella buca"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Fai rotolare la pallina nella buca."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Fai rotolare la pallina nella buca"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Fai rotolare la pallina nella buca."}]},{"name":"hints","rows":[{"key":"dontKnowWhereToStart.question","english":"I don't know where to start","target":"Non so da dove iniziare"},{"key":"dontKnowWhereToStart.answer","english":"The key is to move the ball one step forward each time. You can use a variable to do this. Think about how that might work.","target":"La chiave è muovere la pallina di un passo in avanti ogni volta. Puoi usare una variabile per farlo. Pensa a come potrebbe funzionare."},{"key":"stillCantFigureItOut.question","english":"I still can't figure it out","target":"Non riesco ancora a capirlo"},{"key":"stillCantFigureItOut.answer","english":"You want to create a variable to track where the ball is. It should start where it is now, then many times increase by one. Every time it increases you should `moveTo(...)` using the variable as an input.","target":"Devi creare una variabile per tenere traccia di dove si trova la pallina. Dovrebbe iniziare da dove è ora, poi aumentare di uno molte volte. Ogni volta che aumenta, dovresti chiamare `moveTo(...)` usando la variabile come input."}]},{"name":"functions","rows":[{"key":"moveTo.description","english":"Moves the ball to **position**.","target":"Sposta la pallina alla **posizione** indicata."},{"key":"moveTo.category","english":"Movement","target":"Movimento"}]},{"name":"describers","rows":[{"key":"moveTo","english":"moved the ball to position ${arg1}","target":"ha spostato la pallina alla posizione ${arg1}"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":"x deve essere un numero"},{"key":"yNotNumber","english":"y must be a number","target":"y deve essere un numero"}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":"ha fatto rotolare la pallina di un'unità verso destra"},{"key":"moveTo","english":"moved the ball to the given position","target":"ha spostato la pallina nella posizione indicata"},{"key":"getShotLength","english":"retrieved the shot length","target":"ha recuperato la lunghezza del colpo"},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":"ha sparato i fuochi d'artificio per festeggiare"}]}]}]
---

Siamo tornati nel mondo della creazione di un gioco di golf, ma questa volta ciò che stiamo costruendo è cambiato.

Al posto della funzione `roll()` (far rotolare) che avevamo prima, adesso abbiamo una funzione `moveTo(position)` (sposta in posizione) che sposta la pallina in un punto all'istante.

Ora, quando il giocatore colpisce la pallina, potremmo semplicemente spostarla direttamente nel punto finale, ma è molto insoddisfacente vederla non animarsi. Quindi invece vogliamo usare `moveTo(position)` tante volte per far sì che sembri rotolare.

La pallina parte dalla posizione **28** e deve raggiungere la posizione **88**.

Devi risolvere questo in **5 righe di codice**. Buona fortuna!
