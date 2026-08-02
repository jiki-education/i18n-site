---
lang: "de"
type: "exercise"
slug: "maze-solve-basic"
title: "Löse das Labyrinth!"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "cc9d623"
content_version: "e004db01c8da"
published_at: "2026-08-02"
forum_topic_id: 798
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Du hast das Ende des Labyrinths nicht erreicht."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Führe die Figur ans Ende des Labyrinths"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Navigiere durch das Labyrinth zum grünen Ziel"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Führe die Figur ans Ende des Labyrinths"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Deine Aufgabe ist es, deine Figur durch das Labyrinth zum grünen Zielfeld zu führen."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Was bewege ich wohin?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Du bewegst die kleine Figur, die oben links startet, zum grünen Kreis unten rechts. Den rot gestreiften Feldern weichst du dabei aus."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Wenn ich nach links drehe, dreht sich die Figur nach rechts!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"Die Figur dreht sich relativ zu der Richtung, in die sie gerade schaut. Wenn sie also nach rechts schaut und sich nach links dreht, schaut sie danach nach oben."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"Oh nein - du wolltest über den Rand des Labyrinths hinauslaufen!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Autsch - du bist gegen eine Wand gelaufen!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Autsch! Du bist ins Feuer gelaufen!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Igitt! Du bist in den Haufen getreten! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Bewegt die Figur ein Feld nach vorne"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Dreht die Figur um 90 Grad nach links"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Dreht die Figur um 90 Grad nach rechts"}]}]}]
---

Willkommen bei deiner ersten Übung!

Diese Übung soll dich mit der Lernumgebung vertraut machen. Deine Aufgabe ist es, das Labyrinth links zu lösen, indem du der kleinen Figur Befehle gibst. Du schreibst alle Befehle auf, die die Figur befolgen soll, und klickst dann auf **Code ausführen**, damit sie sie befolgt.

Diese drei Befehle kannst du benutzen:

- `move()` (bewegen) bewegt die Figur einen Schritt vorwärts
- `turnLeft()` (nach links drehen) dreht die Figur nach links (relativ zu der Richtung, in die sie gerade schaut)
- `turnRight()` (nach rechts drehen) dreht die Figur nach rechts (relativ zu der Richtung, in die sie gerade schaut)

Links siehst du, dass wir die ersten drei Befehle schon für dich geschrieben haben. Klick zuerst auf den Button **„Code ausführen“**, um zu sehen, was sie bewirken. **Füge dann weitere Befehle hinzu**, damit deine Figur ans Ende des Labyrinths kommt. Schreib jeden Befehl in eine eigene Zeile und klick dann auf **Code ausführen**, um alle auszuführen.

Mach es dir zur Gewohnheit, deinen Code regelmäßig auszuführen!

Sobald du das Labyrinth gelöst hast, kannst du zurück zum Dashboard gehen und die nächste Lektion starten.
