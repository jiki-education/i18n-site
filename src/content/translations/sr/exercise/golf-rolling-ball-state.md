---
lang: "sr"
type: "exercise"
slug: "golf-rolling-ball-state"
title: "Loptica sa stanjem"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-state"
en_md5: "f203d7c055cd4ad8de235218c470df98"
governance_sha: "c80036b"
content_version: "147773add0c0"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"positionNotNumber","english":"position must be a number","target":"pozicija mora biti broj"}]},{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball didn't reach the hole. It's at position {{ballX}}, but needs to be at position 88.","target":"Loptica nije stigla do rupe. Nalazi se na poziciji {{ballX}}, ali treba da bude na poziciji 88."},{"key":"missingPositions","english":"The ball must roll through each position individually, not jump directly to the end.","target":"Loptica mora da se kotrlja kroz svaku poziciju pojedinačno, a ne da skoči direktno na kraj."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Zakotrljaj lopticu u rupu"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Zakotrljaj lopticu u rupu."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Zakotrljaj lopticu u rupu"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Zakotrljaj lopticu u rupu."}]},{"name":"hints","rows":[{"key":"dontKnowWhereToStart.question","english":"I don't know where to start","target":"Ne znam gde da počnem."},{"key":"dontKnowWhereToStart.answer","english":"The key is to move the ball one step forward each time. You can use a variable to do this. Think about how that might work.","target":"Ključno je da svaki put pomeriš lopticu za jedan korak napred. Možeš da koristiš promenljivu da to uradiš. Razmisli kako bi to moglo da funkcioniše."},{"key":"stillCantFigureItOut.question","english":"I still can't figure it out","target":"Još uvek ne mogu da shvatim."},{"key":"stillCantFigureItOut.answer","english":"You want to create a variable to track where the ball is. It should start where it is now, then many times increase by one. Every time it increases you should `moveTo(...)` using the variable as an input.","target":"Treba da napraviš promenljivu koja prati gde je loptica. Treba da počne tamo gde je sada, a zatim mnogo puta da se poveća za jedan. Svaki put kada se poveća, treba da pozoveš `moveTo(...)` koristeći promenljivu kao ulaz."}]},{"name":"functions","rows":[{"key":"moveTo.description","english":"Moves the ball to **position**.","target":"Pomera lopticu na **poziciju**."},{"key":"moveTo.category","english":"Movement","target":"Kretanje"}]},{"name":"describers","rows":[{"key":"moveTo","english":"moved the ball to position ${arg1}","target":"pomerila lopticu na poziciju ${arg1}"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":null},{"key":"yNotNumber","english":"y must be a number","target":null}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":null},{"key":"moveTo","english":"moved the ball to the given position","target":null},{"key":"getShotLength","english":"retrieved the shot length","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]}]}]
---

Ponovo smo u svetu pravljenja golf igre, ali ovog puta ono što pravimo je drugačije.

Umesto funkcije `roll()` (kotrljati) koju smo imali ranije, sada imamo funkciju `moveTo(position)` (pomeri na poziciju) koja trenutno pomera lopticu na određeno mesto.

Kada igrač udari lopticu, mogli bismo je odmah pomeriti direktno na krajnje mesto, ali nije nimalo zadovoljavajuće videti je bez animacije. Zato umesto toga želimo da iskoristimo `moveTo(position)` mnogo puta kako bismo postigli da izgleda kao da se kotrlja.

Loptica počinje na poziciji **28** i treba da stigne do pozicije **88**.

Moraš ovo rešiti u **5 linija koda**. Srećno!
