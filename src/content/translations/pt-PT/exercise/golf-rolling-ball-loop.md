---
lang: "pt-PT"
type: "exercise"
slug: "golf-rolling-ball-loop"
title: "Bola a rolar"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-PT/curriculum/exercises/golf-rolling-ball-loop"
en_md5: "e581ca0b932527b029cef23f9ad49a5e"
governance_sha: "a347f3f"
content_version: "ba1cebb18177"
published_at: "2026-08-22"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball rolled to {{ballX}}, which isn't 60 from where it started.","target":"A bola rolou até {{ballX}}, que não fica a 60 do ponto de partida."},{"key":"missingPositions","english":"The ball must roll through each position one step at a time, starting from 29.","target":"A bola tem de passar por cada posição, um passo de cada vez, a começar em 29."},{"key":"codeQuality.tooManyLines","english":"Your solution has too many lines of code. Try using a loop to make it shorter.","target":"A tua solução tem demasiadas linhas de código. Experimenta usar um ciclo para a encurtar."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Faz rolar a bola até ao buraco"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Faz rolar a bola até ao buraco."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Faz rolar a bola até ao buraco"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Faz rolar a bola até ao buraco."}]},{"name":"hints","rows":[{"key":"icantWorkItOut.question","english":"I can't work it out","target":"Não consigo resolver"},{"key":"icantWorkItOut.answer","english":"You have two tools to use:\n- A repeat loop, which you use by writing `repeat(n) { }` where `n` is the amount of times you want to roll and where you can put anything inside the braces (`{ }`).\n- A `roll()` function that rolls the ball one step to the right.\n\nHow can you combine them?","target":"Tens duas ferramentas à tua disposição:\n- Um ciclo repeat, que usas ao escrever `repeat(n) { }`, onde `n` é o número de vezes que queres fazer a bola rolar e onde podes pôr o que quiseres dentro das chavetas (`{ }`).\n- Uma função `roll()` que faz a bola rolar um passo para a direita.\n\nComo podes combiná-las?"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls the ball **one step to the right**.","target":"Faz a bola rolar **um passo para a direita**."},{"key":"roll.category","english":"Movement","target":"Movimento"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled the ball one step to the right","target":"fez a bola rolar um passo para a direita"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":"x tem de ser um número"},{"key":"yNotNumber","english":"y must be a number","target":"y tem de ser um número"}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":"fez a bola rolar uma unidade para a direita"},{"key":"moveTo","english":"moved the ball to the given position","target":"moveu a bola para a posição indicada"},{"key":"getShotLength","english":"retrieved the shot length","target":"obteve o comprimento da tacada"},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":"lançou fogo de artifício para celebrar"}]}]}]
---

Vamos pôr o ciclo (_loop_ em inglês) `repeat` em ação!

Há uma bola de golfe pousada no tee. O teu trabalho é fazê-la rolar até ao buraco, que fica a 60 passos de distância.

Resolve este exercício em **três linhas de código**. Diverte-te!
