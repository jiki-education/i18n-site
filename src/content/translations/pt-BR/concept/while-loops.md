---
lang: "pt-BR"
type: "concept"
slug: "while-loops"
title: "Entendendo os laços `while`"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-BR/curriculum/concepts/while-loops/page.md"
en_md5: "aeceed2abb1434307cfd7c9a0df55c81"
governance_sha: "494ce4b"
content_version: "63861f5f1015"
published_at: "2026-08-10"
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
