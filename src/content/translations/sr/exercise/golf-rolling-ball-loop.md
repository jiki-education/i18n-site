---
lang: "sr"
type: "exercise"
slug: "golf-rolling-ball-loop"
title: "Kotrljajuća loptica"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-loop"
en_md5: "e581ca0b932527b029cef23f9ad49a5e"
governance_sha: "c80036b"
content_version: "91fec0a6875e"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball rolled to {{ballX}}, which isn't 60 from where it started.","target":"Loptica se dokotrljala do {{ballX}}, što nije 60 koraka od početne pozicije."},{"key":"missingPositions","english":"The ball must roll through each position one step at a time, starting from 29.","target":"Loptica mora da se kotrlja kroz svaku poziciju korak po korak, počevši od 29."},{"key":"codeQuality.tooManyLines","english":"Your solution has too many lines of code. Try using a loop to make it shorter.","target":"Tvoje rešenje ima previše linija koda. Probaj da koristiš petlju da ga skratiš."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Zakotrljaj lopticu u rupu"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Zakotrljaj lopticu u rupu."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Zakotrljaj lopticu u rupu"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Zakotrljaj lopticu u rupu."}]},{"name":"hints","rows":[{"key":"icantWorkItOut.question","english":"I can't work it out","target":"Ne mogu da rešim."},{"key":"icantWorkItOut.answer","english":"You have two tools to use:\n- A repeat loop, which you use by writing `repeat(n) { }` where `n` is the amount of times you want to roll and where you can put anything inside the braces (`{ }`).\n- A `roll()` function that rolls the ball one step to the right.\n\nHow can you combine them?","target":"Imaš dva alata na raspolaganju:\n- `repeat` petlju, koju koristiš tako što napišeš `repeat(n) { }`, gde `n` predstavlja broj puta koliko želiš da kotrljaš, a unutar vitičastih zagrada (`{ }`) možeš da staviš bilo šta.\n- Funkciju `roll()` koja kotrlja lopticu jedan korak udesno.\n\nKako možeš da ih kombinuješ?"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls the ball **one step to the right**.","target":"Kotrlja lopticu **jedan korak udesno**."},{"key":"roll.category","english":"Movement","target":"Kretanje"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled the ball one step to the right","target":"zakotrljao lopticu jedan korak udesno"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":null},{"key":"yNotNumber","english":"y must be a number","target":null}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":null},{"key":"moveTo","english":"moved the ball to the given position","target":null},{"key":"getShotLength","english":"retrieved the shot length","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]}]}]
---

Hajde da stavimo `repeat` petlju (engl. _loop_) u akciju!

Golf loptica se nalazi na tištu. Tvoj zadatak je da je zakotrljaš u rupu, koja je udaljena 60 koraka.

Reši ovu vežbu u **tri linije koda**. Zabavi se!
