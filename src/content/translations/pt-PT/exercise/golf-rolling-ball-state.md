---
lang: "pt-PT"
type: "exercise"
slug: "golf-rolling-ball-state"
title: "Bola com estado"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-PT/curriculum/exercises/golf-rolling-ball-state"
en_md5: "f203d7c055cd4ad8de235218c470df98"
governance_sha: "a347f3f"
content_version: "c181d8231772"
published_at: "2026-08-22"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"positionNotNumber","english":"position must be a number","target":"position tem de ser um número"}]},{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball didn't reach the hole. It's at position {{ballX}}, but needs to be at position 88.","target":"A bola não chegou ao buraco. Está na posição {{ballX}}, mas tem de estar na posição 88."},{"key":"missingPositions","english":"The ball must roll through each position individually, not jump directly to the end.","target":"A bola tem de rolar por cada posição, uma de cada vez, em vez de saltar diretamente para o fim."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Faz rolar a bola até ao buraco"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Faz rolar a bola até ao buraco."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Faz rolar a bola até ao buraco"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Faz rolar a bola até ao buraco."}]},{"name":"hints","rows":[{"key":"dontKnowWhereToStart.question","english":"I don't know where to start","target":"Não sei por onde começar"},{"key":"dontKnowWhereToStart.answer","english":"The key is to move the ball one step forward each time. You can use a variable to do this. Think about how that might work.","target":"O truque é mover a bola um passo de cada vez. Podes usar uma variável para isso. Pensa em como isso poderia funcionar."},{"key":"stillCantFigureItOut.question","english":"I still can't figure it out","target":"Continuo sem conseguir resolver"},{"key":"stillCantFigureItOut.answer","english":"You want to create a variable to track where the ball is. It should start where it is now, then many times increase by one. Every time it increases you should `moveTo(...)` using the variable as an input.","target":"Queres criar uma variável para acompanhar onde a bola está. Deve começar onde a bola está agora e depois aumentar uma unidade muitas vezes. Sempre que aumentar, deves usar `moveTo(...)` com a variável como valor de entrada."}]},{"name":"functions","rows":[{"key":"moveTo.description","english":"Moves the ball to **position**.","target":"Move a bola para **position**."},{"key":"moveTo.category","english":"Movement","target":"Movimento"}]},{"name":"describers","rows":[{"key":"moveTo","english":"moved the ball to position ${arg1}","target":"moveu a bola para a posição ${arg1}"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":"x tem de ser um número"},{"key":"yNotNumber","english":"y must be a number","target":"y tem de ser um número"}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":"fez a bola rolar uma unidade para a direita"},{"key":"moveTo","english":"moved the ball to the given position","target":"moveu a bola para a posição indicada"},{"key":"getShotLength","english":"retrieved the shot length","target":"obteve o comprimento da tacada"},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":"lançou fogo de artifício para celebrar"}]}]}]
---

Estamos de volta ao mundo da construção de um jogo de golfe, mas desta vez o que estamos a construir mudou.

Em vez da função `roll()` (rolar) que tínhamos antes, temos agora uma função `moveTo(position)` (mover para uma posição) que move a bola instantaneamente para um sítio.

Agora, quando o jogador bate na bola, podíamos simplesmente movê-la logo para o sítio final, mas ver a bola mudar de posição sem qualquer animação não é nada satisfatório. Por isso, queremos usar `moveTo(position)` muitas vezes, para dar a ideia de que ela está a rolar.

A bola começa na posição **28** e tem de chegar à posição **88**.

Tens de resolver isto em **5 linhas de código**. Boa sorte!
