---
lang: "nl"
type: "exercise"
slug: "maze-solve-basic"
title: "Los het doolhof op"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "5d6460b"
content_version: "eb82a90a1822"
published_at: "2026-08-01"
forum_topic_id: 810
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Je hebt het einde van het doolhof niet bereikt."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Breng het poppetje naar het einde van het doolhof"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Navigeer door het doolhof naar het groene doel"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Breng het poppetje naar het einde van het doolhof"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Jouw taak is om je poppetje door het doolhof naar het groene doelvakje te navigeren."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Wat verplaats ik waarheen?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Je verplaatst het poppetje, dat linksboven begint, naar de groene cirkel rechtsonder. Rood gestreepte vakjes moet je vermijden."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Als ik naar links draai, draait het poppetje naar rechts!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"Het poppetje draait ten opzichte van de richting waarin het kijkt. Kijkt het naar rechts en draait het naar links, dan kijkt het poppetje daarna omhoog."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"Oh nee, je probeerde van de rand van het doolhof te vallen!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Au, je bent tegen een muur gelopen!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Au! Je bent het vuur in gelopen!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Gadver! Je bent in de poep gestapt! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Beweegt het personage één vakje naar voren"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Draait het personage 90 graden naar links"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Draait het personage 90 graden naar rechts"}]}]}]
---

Welkom bij je eerste opdracht!

Deze opdracht is bedoeld om je vertrouwd te maken met de leeromgeving. Je taak is om het doolhof links op te lossen door het poppetje instructies te geven. Je schrijft alle instructies op die het poppetje moet opvolgen en klikt daarna op **Code uitvoeren**, zodat het ze gaat opvolgen.

Dit zijn de drie instructies die je kunt gebruiken:

- `move()` (bewegen) verplaatst het poppetje één stap vooruit
- `turnLeft()` (naar links draaien) draait het poppetje naar links (ten opzichte van de richting waarin het nu kijkt)
- `turnRight()` (naar rechts draaien) draait het poppetje naar rechts (ten opzichte van de richting waarin het nu kijkt)

Links zie je dat we de eerste drie instructies al voor je hebben geschreven. Klik eerst op de knop **"Code uitvoeren"** om te zien wat ze doen. **Voeg daarna meer instructies toe** om je poppetje naar het einde van het doolhof te brengen. Zet elke instructie op een eigen regel en klik dan op **Code uitvoeren** om ze allemaal uit te voeren.

Het is een goede gewoonte om je code regelmatig uit te voeren!

Zodra je het doolhof hebt opgelost, kun je terug gaan naar het Dashboard om met de volgende les te beginnen.
