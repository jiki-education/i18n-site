---
lang: "pt-BR"
type: "concept"
slug: "while-loops"
title: "Laços while"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/concepts/while-loops/source.md"
en_md5: "daef89c6551b1d1cbc0e58668fd368bc"
governance_sha: "e4d40de"
content_version: "63861f5f1015"
published_at: "2026-08-03"
---

O próximo laço que você precisa conhecer é o laço `while` (enquanto).

Ele diz: "Enquanto uma condição valer, rode o laço." Imagine que temos uma regra dizendo que você só pode atirar cinco vezes no Space Invaders. Então teríamos aqui um laço que diz: enquanto o número de tiros for menor que cinco, rode um laço que permite que alguém jogue o jogo.

```javascript
while (numShots < 5) {
  // atirar no alienígena
  numShots++
}
```

Cada vez que alguém atira, aumentamos o `numShots` em um e, em algum momento, chegamos a cinco e o laço termina.

Agora, um problema dos laços `while` é que é bem fácil ter bugs que fazem o laço nunca acabar. Esses são chamados de laços infinitos (_infinite loops_ em inglês) e são um dos bugs mais comuns em programas.

Quando o seu computador fica lento, as ventoinhas começam a girar e tudo fica barulhento, muitas vezes é porque alguém deixou no código um laço infinito que nunca acaba.
