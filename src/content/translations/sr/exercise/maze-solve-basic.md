---
lang: "sr"
type: "exercise"
slug: "maze-solve-basic"
title: "Reši lavirint"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "e4864f3"
content_version: "450bbf0d5fd8"
published_at: "2026-07-31"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Lik nije stigao do kraja lavirinta."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Provedi lika do kraja lavirinta"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Prođi kroz lavirint i stigni do zelenog cilja"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Provedi lika do kraja lavirinta"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Tvoj zadatak je da provedeš svog lika kroz lavirint do zelenog polja koje je cilj."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Šta pomeram i kuda?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Pomeraš malog lika, koji kreće iz gornjeg levog ugla, do zelenog kruga u donjem desnom uglu, zaobilazeći sva crveno prugasta polja."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Kada skrenem levo, lik skreće desno!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"Lik se okreće u odnosu na smer u kom trenutno gleda. Ako gleda udesno, a ti skreneš levo, lik će se okrenuti nagore."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"O ne, umalo da padneš sa ivice lavirinta!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Jao, ideš pravo u zid!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Jao! Ideš pravo u vatru!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Bljak! Ideš pravo u kaku! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Pomera lika za jedno polje napred"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Okreće lika za 90 stepeni ulevo"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Okreće lika za 90 stepeni udesno"}]}]}]
---

Drago nam je što si tu! Ovo je tvoja prva vežba.

Cilj ove vežbe je da se upoznaš sa tim kako funkcioniše okruženje za učenje. Tvoj zadatak je da rešiš lavirint koji vidiš sa leve strane, tako što ćeš malom liku davati instrukcije. Napišeš sve instrukcije koje lik treba da prati, a zatim klikneš na **Pokreni kod** da bi ih on izvršio.

Tri instrukcije koje možeš da koristiš su:

- `move()` (pomeri) koja pomera lika jedan korak napred
- `turnLeft()` (skreni levo) okreće lika ulevo (u odnosu na smer u kom trenutno gleda)
- `turnRight()` (skreni desno) okreće lika udesno (u odnosu na smer u kom trenutno gleda)

Sa leve strane možeš da vidiš da smo prve tri instrukcije već napisali umesto tebe. Za početak klikni na dugme **„Pokreni kod"** da vidiš šta one rade. Zatim **dodaj još instrukcija** da bi tvoj lik stigao do kraja lavirinta. Svaku instrukciju piši u zasebnom redu, pa pritisni **Pokreni kod** da se sve izvrše.

Dobra je navika da svoj kod pokrećeš često!

Kada rešiš lavirint, možeš da se vratiš na kontrolnu tablu i započneš sledeću lekciju.
