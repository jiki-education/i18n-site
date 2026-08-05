---
lang: "hu"
type: "exercise"
slug: "golf-rolling-ball-loop"
title: "Guruló labda"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-loop"
en_md5: "e581ca0b932527b029cef23f9ad49a5e"
governance_sha: "861d572"
content_version: "cabf233501d8"
published_at: "2026-08-05"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball rolled to {{ballX}}, which isn't 60 from where it started.","target":"A labda {{ballX}} helyre gurult, ami nem 60 lépésre van a kezdőponttól."},{"key":"missingPositions","english":"The ball must roll through each position one step at a time, starting from 29.","target":"A labdának egyesével kell áthaladnia minden pozíción, 29-től kezdve."},{"key":"codeQuality.tooManyLines","english":"Your solution has too many lines of code. Try using a loop to make it shorter.","target":"A megoldásod túl sok kódsort tartalmaz. Próbálj ciklust használni, hogy rövidebb legyen."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Gurítsd a labdát a lyukba"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Gurítsd a labdát a lyukba."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Gurítsd a labdát a lyukba"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Gurítsd a labdát a lyukba."}]},{"name":"hints","rows":[{"key":"icantWorkItOut.question","english":"I can't work it out","target":"Nem tudom megoldani"},{"key":"icantWorkItOut.answer","english":"You have two tools to use:\n- A repeat loop, which you use by writing `repeat(n) { }` where `n` is the amount of times you want to roll and where you can put anything inside the braces (`{ }`).\n- A `roll()` function that rolls the ball one step to the right.\n\nHow can you combine them?","target":"Két eszközt használhatsz:\n- Egy repeat ciklus, amelyet úgy használsz, hogy beírod: `repeat(n) { }`, ahol `n` az, ahányszor gurítani szeretnél, és a kapcsos zárójelek (`{ }`) közé bármit írhatsz.\n- Egy `roll()` függvény, amely egy lépéssel jobbra gurítja a labdát.\n\nHogyan tudod ezeket kombinálni?"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls the ball **one step to the right**.","target":"**Egy lépéssel jobbra** gurítja a labdát."},{"key":"roll.category","english":"Movement","target":"Mozgás"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled the ball one step to the right","target":"a labdát egy lépéssel jobbra gurította"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":"x-nek számnak kell lennie"},{"key":"yNotNumber","english":"y must be a number","target":"y-nek számnak kell lennie"}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":"a labdát egy egységgel jobbra gurította"},{"key":"moveTo","english":"moved the ball to the given position","target":"a labdát a megadott pozícióba mozgatta"},{"key":"getShotLength","english":"retrieved the shot length","target":"a lövés hosszát lekérte"},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":"ünnepi tűzijátékot fellőtt"}]}]}]
---

Lássuk működés közben a `repeat` ciklust (_loop_ angolul)!

A golflabda a tee-n ül. A feladatod, hogy gurítsd be a lyukba, ami 60 lépésnyire van.

Oldd meg ezt a feladatot **három kódsorban**. Jó szórakozást!
