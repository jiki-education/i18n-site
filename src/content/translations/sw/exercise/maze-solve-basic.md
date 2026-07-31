---
lang: "sw"
type: "exercise"
slug: "maze-solve-basic"
title: "Tatua Mzingile"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "6ed23a25576883e0f33304cffc408fe0"
governance_sha: "45feeea"
content_version: "5fbf2e96e9a2"
published_at: "2026-07-31"
forum_topic_id: 815
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Hukufika mwisho wa mzingile."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Mwongoze mtu hadi mwisho wa mzingile"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Pita ndani ya mzingile hadi ufikie lengo la kijani"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Mwongoze mtu hadi mwisho wa mzingile"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Kazi yako ni kumwongoza mtu wako kupitia mzingile hadi kwenye mraba wa kijani wa lengo."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Ninamsogeza nani na kumpeleka wapi?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Unamsogeza yule mtu mdogo, anayeanzia juu kushoto, hadi kwenye duara la kijani lililo chini kulia, huku ukiepuka mraba wote wenye mistari mekundu."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Ninapogeuka kushoto, mtu anageuka kulia!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if you are facing right, and turn left, the person will change to face up.","target":"Mtu anageuka kulingana na upande anaoutazama. Kwa hiyo ukiwa unatazama kulia, na ukageuka kushoto, mtu atageuka kutazama juu."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"Lo, umejaribu kuanguka kutoka ukingoni mwa mzingile!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Ayaa, umegonga ukuta!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Ayaa! Umeingia motoni!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Ashakum! Umekanyaga kinyesi! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Msogeze mhusika mbele mraba mmoja"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Mgeuze mhusika digrii 90 kushoto"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Mgeuze mhusika digrii 90 kulia"}]}]}]
---

Karibu kwenye zoezi lako la kwanza!

Lengo la zoezi hili ni kukuzoeza jinsi mazingira ya kujifunzia yanavyofanya kazi. Kazi yako ni kutatua mzingile unaouona upande wa kushoto kwa kumpa yule mtu mdogo maagizo. Unaandika maagizo yote ambayo mtu huyo anapaswa kuyafuata, kisha unabofya **Run Code** ili ayafuate.

Maagizo matatu unayoweza kutumia ni:

- `move()` (sogea) ambalo humsogeza mhusika hatua moja mbele
- `turnLeft()` (geuka kushoto) humgeuza mhusika kushoto (kulingana na upande anaoutazama kwa sasa)
- `turnRight()` (geuka kulia) humgeuza mhusika kulia (kulingana na upande anaoutazama kwa sasa)

Unaweza kuona kwamba tayari tumeandika maagizo matatu ya kwanza upande wa kushoto. Anza kwa kubofya kitufe cha **"Run Code"** ili uone yanafanya nini. Kisha **ongeza maagizo zaidi** ili kumfikisha mhusika wako mwisho wa mzingile. Weka agizo moja katika kila mstari, kisha bonyeza **Run Code** ili kuyaendesha yote.

Ni vizuri kujenga tabia ya kuendesha msimbo wako mara kwa mara!

Ukishatatua mzingile, unaweza kurudi kwenye Dashboard na kuanza somo linalofuata.
