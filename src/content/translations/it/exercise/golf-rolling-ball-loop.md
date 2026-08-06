---
lang: "it"
type: "exercise"
slug: "golf-rolling-ball-loop"
title: "Pallina che rotola"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-loop"
en_md5: "e581ca0b932527b029cef23f9ad49a5e"
governance_sha: "c80036b"
content_version: "e306733ddaa3"
published_at: "2026-08-06"
forum_topic_id: 1090
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball rolled to {{ballX}}, which isn't 60 from where it started.","target":"La pallina si trova a {{ballX}}, che non è 60 rispetto al punto di partenza."},{"key":"missingPositions","english":"The ball must roll through each position one step at a time, starting from 29.","target":"La pallina deve rotolare attraverso ogni posizione un passo alla volta, partendo da 29."},{"key":"codeQuality.tooManyLines","english":"Your solution has too many lines of code. Try using a loop to make it shorter.","target":"La tua soluzione ha troppe righe di codice. Prova a usare un ciclo per accorciarla."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Fai rotolare la pallina nella buca"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Fai rotolare la pallina nella buca."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Fai rotolare la pallina nella buca"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Fai rotolare la pallina nella buca."}]},{"name":"hints","rows":[{"key":"icantWorkItOut.question","english":"I can't work it out","target":"Non riesco a capirlo"},{"key":"icantWorkItOut.answer","english":"You have two tools to use:\n- A repeat loop, which you use by writing `repeat(n) { }` where `n` is the amount of times you want to roll and where you can put anything inside the braces (`{ }`).\n- A `roll()` function that rolls the ball one step to the right.\n\nHow can you combine them?","target":"Hai due strumenti da usare:\n- Un ciclo repeat, che usi scrivendo `repeat(n) { }` dove `n` è il numero di volte che vuoi far rotolare la pallina e dove puoi mettere qualsiasi cosa dentro le parentesi graffe (`{ }`).\n- Una funzione `roll()` che fa rotolare la pallina di un passo verso destra.\n\nCome puoi combinarli?"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls the ball **one step to the right**.","target":"Fa rotolare la pallina **di un passo verso destra**."},{"key":"roll.category","english":"Movement","target":"Movimento"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled the ball one step to the right","target":"ha fatto rotolare la pallina di un passo verso destra"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":"x deve essere un numero"},{"key":"yNotNumber","english":"y must be a number","target":"y deve essere un numero"}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":"ha fatto rotolare la pallina di un'unità verso destra"},{"key":"moveTo","english":"moved the ball to the given position","target":"ha spostato la pallina nella posizione indicata"},{"key":"getShotLength","english":"retrieved the shot length","target":"ha recuperato la lunghezza del colpo"},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":"ha sparato i fuochi d'artificio per festeggiare"}]}]}]
---

Mettiamo in azione il ciclo `repeat` (_loop_ in inglese)!

Una pallina da golf si trova sul tee. Il tuo compito è farla rotolare nella buca, che si trova a 60 passi di distanza.

Risolvi questo esercizio in **tre righe di codice**. Buon divertimento!
