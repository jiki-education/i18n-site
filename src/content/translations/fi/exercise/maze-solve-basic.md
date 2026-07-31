---
lang: "fi"
type: "exercise"
slug: "maze-solve-basic"
title: "Ratkaise sokkelo"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "f33003b"
content_version: "a3685c9748c5"
published_at: "2026-07-31"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Et päässyt sokkelon loppuun."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Vie hahmo sokkelon loppuun"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Kulje sokkelon läpi vihreään maaliin"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Vie hahmo sokkelon loppuun"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Tehtäväsi on ohjata hahmo sokkelon läpi vihreään maaliruutuun."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Mitä minun pitää siirtää ja minne?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Siirrät pientä hahmoa, joka aloittaa vasemmasta yläkulmasta, oikeassa alakulmassa olevaan vihreään ympyrään. Väistä matkalla punaraidalliset ruudut."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Käännyn vasemmalle, mutta hahmo kääntyykin oikealle!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"Hahmo kääntyy aina suhteessa siihen suuntaan, johon se katsoo. Jos se siis katsoo oikealle ja käännät sitä vasemmalle, se katsoo sen jälkeen ylöspäin."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"Voi ei! Yritit pudota sokkelon reunalta!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Auts! Kävelit päin seinää!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Auts! Kävelit tuleen!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Yäk! Kävelit kakkaan! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Siirtää hahmoa yhden ruudun eteenpäin"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Kääntää hahmoa 90 astetta vasemmalle"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Kääntää hahmoa 90 astetta oikealle"}]}]}]
---

Tervetuloa ensimmäiseen harjoitukseesi!

Tämän harjoituksen tarkoitus on tutustuttaa sinut oppimisympäristön toimintaan. Tehtäväsi on ratkaista vasemmalla näkyvä sokkelo antamalla pienelle hahmolle ohjeita. Kirjoitat kaikki ohjeet, joita hahmon pitää seurata, ja klikkaat sitten **Suorita koodi** -painiketta, jolloin hahmo lähtee seuraamaan niitä.

Käytössäsi on kolme ohjetta:

- `move()` (liiku) siirtää hahmoa yhden askeleen eteenpäin
- `turnLeft()` (käänny vasemmalle) kääntää hahmoa vasemmalle (suhteessa siihen suuntaan, johon se juuri nyt katsoo)
- `turnRight()` (käänny oikealle) kääntää hahmoa oikealle (suhteessa siihen suuntaan, johon se juuri nyt katsoo)

Vasemmalla näet, että kolme ensimmäistä ohjetta on jo kirjoitettu valmiiksi. Aloita klikkaamalla **”Suorita koodi”** -painiketta ja katso, mitä ne tekevät. **Lisää sitten uusia ohjeita**, jotta hahmosi pääsee sokkelon loppuun. Kirjoita jokainen ohje omalle rivilleen ja suorita ne sitten kaikki kerralla painamalla **Suorita koodi**.

Kannattaa ottaa tavaksi suorittaa koodi säännöllisesti!

Kun olet ratkaissut sokkelon, voit palata koontinäytölle ja aloittaa seuraavan oppitunnin.
