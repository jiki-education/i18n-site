---
lang: "pt-BR"
type: "concept"
slug: "continue"
title: "A palavra-chave `continue`"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-BR/curriculum/concepts/continue/page.md"
en_md5: "6cd21a2f25c493f61d000f865014709d"
governance_sha: "bd48403"
content_version: "9a822d700413"
published_at: "2026-08-21"
---

Às vezes, a gente pode querer pular uma iteração específica de um laço em vez de sair dele. Imagine que a gente só quer fazer coisas com números ímpares.

A gente quer poder dizer: se `i` (índice) for ímpar, não rode o laço desta vez.

Mas a gente não quer sair completamente do laço. Só quer pular esta única iteração e depois passar à seguinte.

E para isso, a gente tem outra palavra-chave chamada `continue`.

Quando o Jiki vê `continue`, ele pula para o início do laço para a iteração seguinte. Assim, num laço for-of, se ele vir `continue`, passa ao item seguinte da lista.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Salta o resto do ciclo quando o item é "something"
  }
  // Resto do ciclo...
}
```

Num laço for, o Jiki faz o incremento `i++` e depois começa a iteração seguinte.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Salta o resto do ciclo quando o número é par
  }
  // Resto do ciclo...
}
```
