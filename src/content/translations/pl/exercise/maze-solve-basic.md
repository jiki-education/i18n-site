---
lang: "pl"
type: "exercise"
slug: "maze-solve-basic"
title: "Rozwiąż labirynt"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "e4864f3"
content_version: "d3bb8ed928dd"
published_at: "2026-07-31"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Twoja postać nie dotarła do końca labiryntu."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Poprowadź postać do końca labiryntu"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Przejdź przez labirynt, aby dotrzeć do zielonego celu"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Poprowadź postać do końca labiryntu"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Twoim zadaniem jest przeprowadzenie postaci przez labirynt do zielonego pola mety."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Co i gdzie mam przesuwać?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Przesuwasz małą postać, która zaczyna w lewym górnym rogu, do zielonego kółka w prawym dolnym rogu, omijając pola w czerwone paski."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Obracam w lewo, a postać obraca się w prawo!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"Postać obraca się względem kierunku, w którym patrzy. Jeśli więc patrzy w prawo, a Ty obrócisz w lewo, postać zacznie patrzeć w górę."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"O nie, postać zaraz spadnie z krawędzi labiryntu!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Auć, postać wchodzi prosto w ścianę!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Auć! Postać wchodzi prosto w ogień!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Fuj! Postać wchodzi prosto w kupę! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Przesuwa postać o jedno pole do przodu"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Obraca postać o 90 stopni w lewo"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Obraca postać o 90 stopni w prawo"}]}]}]
---

Witaj w swoim pierwszym ćwiczeniu!

Celem tego ćwiczenia jest zapoznanie się z tym, jak działa środowisko nauki. Twoim zadaniem jest rozwiązanie labiryntu widocznego po lewej stronie przez podawanie instrukcji małej postaci. Zapisujesz wszystkie instrukcje, które postać ma wykonać, a potem klikasz **Uruchom kod**, żeby je wykonała.

Trzy instrukcje, których możesz użyć, to:

- `move()` (przesuń) przesuwa postać o jeden krok do przodu
- `turnLeft()` (obróć w lewo) obraca postać w lewo (względem kierunku, w którym aktualnie patrzy)
- `turnRight()` (obróć w prawo) obraca postać w prawo (względem kierunku, w którym aktualnie patrzy)

Po lewej stronie widzisz, że pierwsze trzy instrukcje już za Ciebie napisaliśmy. Zacznij od kliknięcia przycisku **„Uruchom kod”**, żeby zobaczyć, co robią. Następnie **dodaj kolejne instrukcje**, żeby Twoja postać dotarła do końca labiryntu. Każdą instrukcję zapisz w osobnej linii, a potem naciśnij **Uruchom kod**, żeby uruchomić je wszystkie.

Warto wyrobić sobie nawyk regularnego uruchamiania kodu!

Gdy rozwiążesz labirynt, możesz wrócić do panelu głównego i zacząć następną lekcję.
