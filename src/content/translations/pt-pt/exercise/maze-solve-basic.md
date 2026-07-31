---
lang: "pt-pt"
type: "exercise"
slug: "maze-solve-basic"
title: "Resolve o labirinto"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "6ed23a25576883e0f33304cffc408fe0"
governance_sha: "45feeea"
content_version: "ff2262c30eb3"
published_at: "2026-07-31"
forum_topic_id: 822
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Não chegaste ao fim do labirinto."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Guia a personagem até ao fim do labirinto"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Percorre o labirinto até chegares ao alvo verde"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Guia a personagem até ao fim do labirinto"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"A tua missão é levar a tua personagem pelo labirinto até ao quadrado verde de destino."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"O que é que estou a mover e para onde?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Estás a mover a pequena personagem, que começa no canto superior esquerdo, até ao círculo verde no canto inferior direito, evitando as células às riscas vermelhas."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Quando viro à esquerda, a personagem vira à direita!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if you are facing right, and turn left, the person will change to face up.","target":"A personagem vira em relação à direção para onde está virada. Por isso, se estiver virada para a direita e virares à esquerda, a personagem passa a estar virada para cima."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"Oh não! Tentaste cair pela borda do labirinto!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Ai! Foste contra uma parede!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Ai! Entraste no fogo!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Que nojo! Pisaste o cocó! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Move a personagem uma célula para a frente"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Vira a personagem 90 graus para a esquerda"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Vira a personagem 90 graus para a direita"}]}]}]
---

Damos-te as boas-vindas ao teu primeiro exercício!

O objetivo deste exercício é familiarizares-te com o funcionamento do ambiente de aprendizagem. A tua tarefa é resolver o labirinto que vês à esquerda, dando instruções à personagem. Escreves todas as instruções que a personagem tem de seguir e depois clicas em **Executar Código** para que ela as siga.

As três instruções que podes usar são:

- `move()` (mover), que move a personagem um passo em frente
- `turnLeft()` (virar à esquerda) vira a personagem para a esquerda (em relação à direção para onde está virada nesse momento)
- `turnRight()` (virar à direita) vira a personagem para a direita (em relação à direção para onde está virada nesse momento)

Como vês, já escrevemos as três primeiras instruções do lado esquerdo. Começa por clicar no botão **«Executar Código»** para veres o que fazem. Depois, **acrescenta mais instruções** para levares a tua personagem até ao fim do labirinto. Escreve uma instrução em cada linha e depois carrega em **Executar Código** para as executares todas.

É boa prática ganhares o hábito de correr o teu código com frequência!

Assim que resolveres o labirinto, podes voltar ao Painel e começar a lição seguinte.
