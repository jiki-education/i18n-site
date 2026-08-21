---
lang: "pt-BR"
type: "exercise"
slug: "plant-the-flowers"
title: "Plante as flores"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-BR/curriculum/exercises/plant-the-flowers"
en_md5: "4cdf23fd99e55e08a5eece1751d712e2"
governance_sha: "215346b"
content_version: "4874b081265a"
published_at: "2026-08-21"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"flowerCount","english":"Expected 9 flowers, but found {{got}}.","target":"Esperavam-se 9 flores, mas encontramos {{got}}."},{"key":"missingFlowerAt10","english":"Missing a flower at position 10.","target":"Falta uma flor na posição 10."},{"key":"missingFlowerAt50","english":"Missing a flower at position 50.","target":"Falta uma flor na posição 50."},{"key":"missingFlowerAt90","english":"Missing a flower at position 90.","target":"Falta uma flor na posição 90."},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try to find a way to make it shorter.","target":"Sua solução tem linhas de código demais. Tente encontrar uma forma de deixá-la mais curta."}]},{"name":"tasks","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"Plante 9 flores"},{"key":"plantFlowers.description","english":"Use a variable and a repeat loop to plant 9 flowers at positions 10, 20, 30, ..., 90.","target":"Use uma variável e um laço repeat para plantar 9 flores nas posições 10, 20, 30, ..., 90."}]},{"name":"scenarios","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"Plante 9 flores"},{"key":"plantFlowers.description","english":"Plant flowers at positions 10, 20, 30, 40, 50, 60, 70, 80, and 90.","target":"Plante flores nas posições 10, 20, 30, 40, 50, 60, 70, 80 e 90."}]},{"name":"hints","rows":[{"key":"stuck.question","english":"I'm totally stuck","target":"Estou completamente travado"},{"key":"stuck.answer","english":"Check the recent videos on how to use repeat loops and how to update variables to track state. They should tell you everything you need to know.","target":"Assista aos vídeos recentes sobre como usar laços repeat e como atualizar variáveis para acompanhar o estado. Eles devem te dizer tudo o que você precisa saber."}]},{"name":"functions","rows":[{"key":"plant.description","english":"Plants a flower at the given **position**.","target":"Planta uma flor na **posição** dada."},{"key":"plant.category","english":"Gardening","target":"Jardinagem"}]},{"name":"describers","rows":[{"key":"plant","english":"planted a flower at position ${arg1}","target":"plantou uma flor na posição ${arg1}"}]}]},{"heading":"Shared \"flower-planting\" messages","note":"Shared by every exercise in the flower-planting category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"positionNumber","english":"Position must be a number","target":"A posição tem que ser um número"}]}]}]
---

Você está criando uma máquina automática de plantar flores.

A máquina deve plantar flores de forma uniforme em um gramado, com intervalos de `10`. Assim, a primeira flor deve ficar na posição `10`, a segunda na `20`, e assim por diante.

Você tem uma função `plant(position)` (planta uma flor numa posição) que recebe uma posição como entrada. Por exemplo: `plant(10)` planta uma flor na posição 10.

Você tem que resolver este exercício em **5 linhas de código**, então precisa encontrar um jeito de não escrever só `plant(10)`, `plant(20)` e assim por diante.

Boa sorte!
