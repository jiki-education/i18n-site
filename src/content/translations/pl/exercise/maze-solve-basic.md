---
lang: "pl"
type: "exercise"
slug: "maze-solve-basic"
title: "Rozwiąż labirynt"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "0f2a416"
content_version: "5738a88e9ef6"
published_at: "2026-08-03"
forum_topic_id: 811
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Ludzik nie dotarł do końca labiryntu."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Poprowadź ludzika do końca labiryntu"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Przeprowadź ludzika przez labirynt do zielonego celu"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Poprowadź ludzika do końca labiryntu"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Twoim zadaniem jest przeprowadzenie ludzika przez labirynt na zielone pole mety."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Co i gdzie mam przesunąć?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Musisz przeprowadzić małego ludzika z lewego górnego rogu do zielonego kółka w prawym dolnym rogu, omijając pola oznaczone czerwonymi paskami."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Każę ludzikowi obrócić się w lewo, a on obraca się w prawo!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"Ludzik zawsze obraca się względem kierunku, w którym jest zwrócony. Jeśli więc patrzy w prawą stronę i dostanie polecenie obrotu w lewo, zacznie patrzeć do góry."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"O nie! Ludzik o mało nie spadł z krawędzi labiryntu!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Auć! Ludzik wszedł w ścianę!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Auć! Ludzik wszedł w ogień!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"O fuj! Ludzik wszedł w kupę! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Przesuwa ludzika o jedno pole do przodu"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Obraca ludzika o 90 stopni w lewo"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Obraca ludzika o 90 stopni w prawo"}]}]}]
---

Pora na Twoje pierwsze ćwiczenie!

Jego celem jest zapoznanie Cię z działaniem platformy. Twoim zadaniem jest rozwiązanie labiryntu, który widzisz po lewej stronie, poprzez wydawanie poleceń małemu ludzikowi. Aby to zrobić, zapisz wszystkie polecenia, którymi ludzik ma się kierować, a następnie kliknij **Uruchom kod**, aby je wykonała.

Masz do dyspozycji trzy polecenia:

- `move()` (ruch) przesuwa ludzika o jeden krok do przodu
- `turnLeft()` (obrót w lewo) sprawia, że ludzik obraca się w lewo (względem kierunku, w którym jest aktualnie zwrócony)
- `turnRight()` (obrót w prawo) sprawia, że ludzik obraca się w prawo (względem kierunku, w którym jest aktualnie zwrócony)

Po lewej stronie napisaliśmy już dla Ciebie trzy pierwsze polecenia. Najpierw kliknij przycisk **„Uruchom kod”**, aby zobaczyć, jak działają. Następnie **dodaj kolejne polecenia**, aby doprowadzić ludzika do końca labiryntu. Każde z nich zapisz w osobnej linii, a na końcu naciśnij **Uruchom kod**, aby wykonać je wszystkie.

Warto wyrobić sobie nawyk regularnego uruchamiania kodu!

Po rozwiązaniu labiryntu możesz wrócić do panelu głównego i przejść do kolejnej lekcji.
