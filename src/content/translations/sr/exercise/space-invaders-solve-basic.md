---
lang: "sr"
type: "exercise"
slug: "space-invaders-solve-basic"
title: "Space Invaders"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/space-invaders-solve-basic"
en_md5: "832d47151ead209ebf0f931a8472ec30"
governance_sha: "c80036b"
content_version: "870598aaec9a"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"describers","rows":[{"key":"move","english":"moved the laser cannon to the right","target":"pomerio laserski top udesno"}]},{"name":"checks","rows":[{"key":"notShotAllAliens","english":"You didn't shoot down all the aliens.","target":"Nisu oboreni svi vanzemaljci."}]},{"name":"tasks","rows":[{"key":"shootTheAliens.name","english":"Shoot all the aliens","target":"Obori sve vanzemaljce"},{"key":"shootTheAliens.description","english":"Move your laser cannon to the right and shoot each alien as you pass underneath it. Don't miss or move off the edge!","target":"Pomeri svoj laserski top udesno i pucaj na svakog vanzemaljca dok prolaziš ispod njega. Nemoj promašiti i nemoj se pomeriti sa ivice!"}]},{"name":"scenarios","rows":[{"key":"shootTheAliens.name","english":"Shoot the Aliens","target":"Pucaj na vanzemaljce"},{"key":"shootTheAliens.description","english":"Move right and shoot all the aliens","target":"Pomeri se udesno i pucaj na sve vanzemaljce"}]},{"name":"hints","rows":[{"key":"whatDoINeedToDo.question","english":"What do I need to do?","target":"Šta treba da uradim?"},{"key":"whatDoINeedToDo.answer","english":"Like the maze, you need to move your character (this time a laser, not a person). But you also need to shoot from the laser! Move the laser underneath an alien then shoot. Then move again until you're under the next alien, and shoot again. Continue until you've shot down the last alien!","target":"Kao i u lavirintu, treba da pomeraš svog lika (ovoga puta laser, a ne osobu). Ali takođe treba da pucaš iz lasera! Pomeri laser ispod vanzemaljca, a zatim pucaj. Zatim pomeri laser ponovo dok ne budeš ispod sledećeg vanzemaljca i pucaj ponovo. Nastavi dok ne oboriš poslednjeg vanzemaljca!"},{"key":"cantWasteAmmo.question","english":"I get told I can't waste ammo.","target":"Kažu mi da ne smem da trošim municiju."},{"key":"cantWasteAmmo.answer","english":"You should only `shoot()` when you're directly below an alien. Try moving one step further (or maybe you've gone one too far?)","target":"Treba da koristiš `shoot()` samo kada si tačno ispod vanzemaljca. Probaj da se pomeriš za jedno mesto dalje (ili si možda preterao/la?)"}]},{"name":"functions","rows":[{"key":"move.description","english":"Moves the laser cannon **one position to the right**. If you move off the right edge of the screen, you lose!","target":"Pomera laserski top **jedno mesto udesno**. Ako se pomeriš sa desne ivice ekrana, gubiš!"},{"key":"move.category","english":"Movement","target":"Pokret"},{"key":"shoot.description","english":"Shoots the laser upwards. **Only shoot when there's an alien above you**, or you lose the game!","target":"Ispaljuje laser nagore. **Pucaj samo kada je vanzemaljac iznad tebe**, ili gubiš igru!"},{"key":"shoot.category","english":"Action","target":"Akcija"}]}]},{"heading":"Shared \"space-invaders\" messages","note":"Shared by every exercise in the space-invaders category, not just this one. A change here changes all of them.","namespaces":[{"name":"describers","rows":[{"key":"moveLeft","english":"moved the laser cannon to the left","target":null},{"key":"moveRight","english":"moved the laser cannon to the right","target":null},{"key":"shoot","english":"shot the laser upwards","target":null},{"key":"isAlienAbove","english":"determined if there was an alien above the laser cannon","target":null},{"key":"getStartingAliensInRow","english":"retrieved the starting positions of row ${arg1} of aliens","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]},{"name":"errors","rows":[{"key":"laserOverheated","english":"Oh no! Your laser cannon overheated from shooting too fast! You need to move before you can shoot a second time.","target":null},{"key":"missedShot","english":"Oh no, you missed. Wasting ammo is not allowed!","target":null},{"key":"moveOffEdge","english":"Oh no, you tried to move off the edge!","target":null},{"key":"rowNotNumber","english":"Oh no, the row input you provided is not a number.","target":null},{"key":"rowOutOfRange","english":"Oh no, you tried to access a row of aliens that doesn't exist. You asked for row {{row}}, but the rows are numbered 0 to {{max}}.","target":null},{"key":"notAllAliensDead","english":"You need to defeat all the aliens before you can celebrate!","target":null}]}]}]
---

Dobro došli u svoju drugu vežbu - Space Invaders! Ovo je klasična arkadna igra iz sedamdesetih, i jedna od prvih koje sam ikada igrao. U narednim nedeljama ćeš napraviti potpuno automatizovani laser koji će oboriti vanzemaljce. Ali za sada, tvoj zadatak je samo da ručno oboriš sve vanzemaljce!

Imaš dve funkcije (engl. _functions_):

- `move()` (pomeri top) pomera tvoj laserski top za jedno mesto udesno.
- `shoot()` (pucaj) ispaljuje laser nagore.

Prvi poziv `move()` smo već napisali za tebe. **Pogledaj gde se nalaze vanzemaljci**, a zatim napiši niz poziva `move()` i `shoot()` da ih sve uništiš.

Pazi:

- Ako pucaš kada nema vanzemaljca iznad tebe, dobićeš grešku (engl. _error_) (na kraju krajeva, trošenje municije nije dozvoljeno!).
- Ako se pomeriš sa desne ivice ekrana, dobićeš grešku.

Zabavi se!
