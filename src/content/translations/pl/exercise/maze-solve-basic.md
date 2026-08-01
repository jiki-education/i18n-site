---
lang: "pl"
type: "exercise"
slug: "maze-solve-basic"
title: "Rozwiąż labirynt"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "77fba11"
content_version: "9bcd62aab1d2"
published_at: "2026-08-01"
forum_topic_id: 811
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Postać nie dotarła do końca labiryntu."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Poprowadź postać do końca labiryntu"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Przeprowadź postać przez labirynt do zielonego celu"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Poprowadź postać do końca labiryntu"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Twoim zadaniem jest przeprowadzenie postaci przez labirynt na zielone pole mety."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Co i gdzie mam przesunąć?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Musisz przeprowadzić małą postać z lewego górnego rogu do zielonego kółka w prawym dolnym rogu, omijając pola oznaczone czerwonymi paskami."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Każę postaci skręcić w lewo, a ona skręca w prawo!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"Postać zawsze skręca względem kierunku, w którym jest zwrócona. Jeśli więc patrzy w prawą stronę i dostanie polecenie skręcenia w lewo, zwróci się ku górze."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"O nie! Postać o mało nie spadła z krawędzi labiryntu!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Auć! Postać weszła w ścianę!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Auć! Postać weszła w ogień!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Fuj! Postać weszła w kupę! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Przesuwa postać o jedno pole do przodu"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Obraca postać o 90 stopni w lewo"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Obraca postać o 90 stopni w prawo"}]}]}]
---

Pora na Twoje pierwsze ćwiczenie!

Jego celem jest zapoznanie Cię z działaniem platformy. Twoim zadaniem jest rozwiązanie labiryntu, który widzisz po lewej stronie, poprzez wydawanie poleceń małej postaci. Aby to zrobić, zapisz wszystkie polecenia, którymi postać ma się kierować, a następnie kliknij **Uruchom kod**, aby je wykonała.

Masz do dyspozycji trzy polecenia:

- `move()` (ruch) przesuwa postać o jeden krok do przodu
- `turnLeft()` (skręt w lewo) sprawia, że postać skręca w lewo (względem kierunku, w którym jest aktualnie zwrócona)
- `turnRight()` (skręt w prawo) sprawia, że postać skręca w prawo (względem kierunku, w którym jest aktualnie zwrócona)

Po lewej stronie napisaliśmy już dla Ciebie trzy pierwsze polecenia. Najpierw kliknij przycisk **„Uruchom kod”**, aby zobaczyć, jak działają. Następnie **dodaj kolejne polecenia**, aby doprowadzić postać do końca labiryntu. Każde z nich zapisz w osobnej linii, a na końcu naciśnij **Uruchom kod**, aby wykonać je wszystkie.

Warto wyrobić sobie nawyk regularnego uruchamiania kodu!

Po rozwiązaniu labiryntu możesz wrócić do panelu głównego i przejść do kolejnej lekcji.
