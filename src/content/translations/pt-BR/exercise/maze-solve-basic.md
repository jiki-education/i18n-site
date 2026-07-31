---
lang: "pt-BR"
type: "exercise"
slug: "maze-solve-basic"
title: "Resolva o labirinto"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "6ed23a25576883e0f33304cffc408fe0"
governance_sha: "33fd2de"
content_version: "02a255e3cce4"
published_at: "2026-07-31"
forum_topic_id: 288
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Você não chegou ao fim do labirinto."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Leve o bonequinho até o fim do labirinto"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Percorra o labirinto até chegar ao alvo verde"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Leve o bonequinho até o fim do labirinto"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Sua missão é guiar o bonequinho pelo labirinto até o quadrado verde de chegada."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"O que eu estou movendo, e para onde?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Você está levando o bonequinho, que começa no canto superior esquerdo, até o círculo verde no canto inferior direito, desviando das células listradas de vermelho."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Quando eu viro à esquerda, o bonequinho vira à direita!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if you are facing right, and turn left, the person will change to face up.","target":"O bonequinho vira em relação à direção para onde ele está olhando. Então, se ele estiver olhando para a direita e você virar à esquerda, ele passa a olhar para cima."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"Ah, não! Você tentou sair pela borda do labirinto!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Ai! Você bateu numa parede!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Ai! Você andou direto para o fogo!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Eca! Você pisou no cocô! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Move o bonequinho uma célula para frente"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Gira o bonequinho 90 graus para a esquerda"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Gira o bonequinho 90 graus para a direita"}]}]}]
---

Boas-vindas ao seu primeiro exercício!

O objetivo deste exercício é te familiarizar com o funcionamento do ambiente de aprendizado. Sua tarefa é resolver o labirinto que aparece à esquerda dando instruções ao bonequinho. Você escreve todas as instruções que ele precisa seguir e depois clica em **Executar código** para ele segui-las.

As três instruções que você pode usar são:

- `move()` (mover) move o bonequinho um passo para a frente
- `turnLeft()` (virar à esquerda) vira o bonequinho para a esquerda (em relação à direção para onde ele está olhando)
- `turnRight()` (virar à direita) vira o bonequinho para a direita (em relação à direção para onde ele está olhando)

Repare que já escrevemos as três primeiras instruções do lado esquerdo. Comece clicando no botão **“Executar código”** para ver o que elas fazem. Depois, **acrescente mais instruções** para levar o bonequinho até o fim do labirinto. Coloque uma instrução por linha e clique em **Executar código** para rodar todas.

Pegar o hábito de rodar o código com frequência é uma ótima prática!

Depois de resolver o labirinto, você pode voltar ao Painel e começar a próxima lição.
