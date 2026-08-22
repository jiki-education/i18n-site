---
lang: "pt-PT"
type: "concept"
slug: "while-loops"
title: "Compreender os ciclos `while`"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-PT/curriculum/concepts/while-loops/page.md"
en_md5: "aeceed2abb1434307cfd7c9a0df55c81"
governance_sha: "a347f3f"
content_version: "a87ffd3df850"
published_at: "2026-08-22"
forum_topic_id: 941
---

O próximo ciclo a conhecer é o ciclo `while` (enquanto).

Este ciclo diz: "Enquanto uma condição se verificar, corre o ciclo." Imagina que temos uma regra que diz que só podes disparar cinco vezes no Space Invaders. Então teríamos aqui um ciclo que diz: enquanto o número de disparos for menor que cinco, corre um ciclo que permite a alguém jogar o jogo.

```javascript
while (numShots < 5) {
  // disparar contra o alienígena
  numShots++
}
```

Cada vez que alguém dispara, aumentamos o `numShots` em um e, a certa altura, chegamos a cinco e o ciclo termina.

Ora, um problema dos ciclos `while` é que é bastante fácil ter bugs que fazem com que o ciclo nunca acabe. Estes chamam-se ciclos infinitos (_infinite loops_ em inglês) e são um dos bugs mais comuns nos programas.

Quando o teu computador fica lento, as ventoinhas começam a girar e tudo fica barulhento, muitas vezes é porque alguém deixou no código um ciclo infinito que nunca acaba.
