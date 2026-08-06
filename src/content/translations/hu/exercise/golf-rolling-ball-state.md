---
lang: "hu"
type: "exercise"
slug: "golf-rolling-ball-state"
title: "Állapotos labda"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-state"
en_md5: "f203d7c055cd4ad8de235218c470df98"
governance_sha: "c80036b"
content_version: "a7660a9f1625"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"positionNotNumber","english":"position must be a number","target":"A pozíciónak számnak kell lennie."}]},{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball didn't reach the hole. It's at position {{ballX}}, but needs to be at position 88.","target":"A labda nem érte el a lyukat. Jelenleg {{ballX}} pozícióban van, de a 88-as pozíción kell lennie."},{"key":"missingPositions","english":"The ball must roll through each position individually, not jump directly to the end.","target":"A labdának egyesével végig kell gurulnia az összes pozíción, nem ugorhat közvetlenül a végére."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Gurítsd a labdát a lyukba"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Gurítsd a labdát a lyukba."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Gurítsd a labdát a lyukba"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Gurítsd a labdát a lyukba."}]},{"name":"hints","rows":[{"key":"dontKnowWhereToStart.question","english":"I don't know where to start","target":"Nem tudom, hol kezdjem"},{"key":"dontKnowWhereToStart.answer","english":"The key is to move the ball one step forward each time. You can use a variable to do this. Think about how that might work.","target":"A lényeg, hogy a labdát minden alkalommal egy lépéssel előbbre mozgasd. Használhatsz egy változót erre. Gondold át, hogyan működhet ez."},{"key":"stillCantFigureItOut.question","english":"I still can't figure it out","target":"Még mindig nem jövök rá"},{"key":"stillCantFigureItOut.answer","english":"You want to create a variable to track where the ball is. It should start where it is now, then many times increase by one. Every time it increases you should `moveTo(...)` using the variable as an input.","target":"Készítened kell egy változót, ami nyomon követi, hol van a labda. Kezdőértéke az legyen, ahol most van, majd sokszor növeld eggyel. Minden növelés után hívd meg a `moveTo(...)` függvényt a változóval bemenetként."}]},{"name":"functions","rows":[{"key":"moveTo.description","english":"Moves the ball to **position**.","target":"A labdát **pozícióra** mozgatja."},{"key":"moveTo.category","english":"Movement","target":"Mozgás"}]},{"name":"describers","rows":[{"key":"moveTo","english":"moved the ball to position ${arg1}","target":"a labdát ${arg1} pozícióra mozgatta"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":"x-nek számnak kell lennie"},{"key":"yNotNumber","english":"y must be a number","target":"y-nek számnak kell lennie"}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":"a labdát egy egységgel jobbra gurította"},{"key":"moveTo","english":"moved the ball to the given position","target":"a labdát a megadott pozícióba mozgatta"},{"key":"getShotLength","english":"retrieved the shot length","target":"a lövés hosszát lekérte"},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":"ünnepi tűzijátékot fellőtt"}]}]}]
---

Ismét egy golfozós játék készítésénél tartunk, de most más a feladat.

A korábban használt `roll()` (gurítás) függvény helyett most egy `moveTo(position)` (áthelyezés egy pontra) függvényt használunk, amely azonnal a megadott pontra mozgatja a labdát.

Amikor a játékos elüti a labdát, akár közvetlenül a végső helyére is áthelyezhetnénk, de nagyon kiábrándító, ha nem látjuk animálni. Ezért inkább sokszor használjuk a `moveTo(position)` függvényt, hogy úgy tűnjön, mintha gurulna.

A labda a **28**-as pozíción kezd, és a **88**-as pozícióra kell eljutnia.

Ezt **5 kódsorban** kell megoldanod. Sok sikert!
