---
lang: "sv"
type: "exercise"
slug: "maze-solve-basic"
title: "Lös labyrinten"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "b21d29b"
content_version: "fbacdb4e9935"
published_at: "2026-07-31"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Du kom inte fram till slutet av labyrinten."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Vägled figuren till slutet av labyrinten"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Ta dig genom labyrinten fram till det gröna målet"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Vägled figuren till slutet av labyrinten"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Din uppgift är att ta figuren genom labyrinten fram till den gröna målrutan."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Vad är det jag ska flytta, och vart?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Du flyttar den lilla figuren, som börjar uppe till vänster, till den gröna cirkeln nere till höger, utan att gå på de rödrandiga rutorna."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"När jag svänger vänster svänger figuren höger!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"Figuren svänger i förhållande till det håll den är vänd åt. Om den är vänd åt höger och svänger vänster, blir figuren vänd uppåt."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"Åh nej, du försökte gå ut över kanten på labyrinten!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Aj, du gick rakt in i en vägg!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Aj! Du gick rakt in i elden!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Usch! Du klev rakt i bajset! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Flytta figuren en ruta framåt"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Sväng figuren 90 grader åt vänster"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Sväng figuren 90 grader åt höger"}]}]}]
---

Välkommen till din första övning!

Den här övningen är till för att du ska lära dig hur inlärningsmiljön fungerar. Din uppgift är att lösa labyrinten till vänster genom att ge den lilla figuren instruktioner. Du skriver ner alla instruktioner som figuren ska följa och klickar sedan på **Kör koden** för att få den att följa dem.

De tre instruktioner du kan använda är:

- `move()` (flytta) som flyttar figuren ett steg framåt
- `turnLeft()` (sväng vänster) svänger figuren åt vänster (i förhållande till det håll den är vänd åt just nu)
- `turnRight()` (sväng höger) svänger figuren åt höger (i förhållande till det håll den är vänd åt just nu)

Till vänster ser du att vi redan har skrivit de tre första instruktionerna åt dig. Börja med att klicka på knappen **”Kör koden”** för att se vad de gör. **Lägg sedan till fler instruktioner** så att figuren tar sig till slutet av labyrinten. Skriv en instruktion per rad och tryck sedan på **Kör koden** för att köra alla på en gång.

Det är en bra vana att köra koden ofta!

När du har löst labyrinten kan du gå tillbaka till översikten och börja med nästa lektion.
