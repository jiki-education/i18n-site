---
lang: "pt-pt"
type: "concept"
slug: "logical-or"
title: "O operador `||` (ou)"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-pt/curriculum/concepts/logical-or/page.md"
en_md5: "e7bc3f103a37719cdf3a77920d09e24e"
governance_sha: "0284360"
content_version: "a82d8cca2736"
published_at: "2026-08-21"
---

Também podemos usar `or`. Mas, mais uma vez, infelizmente não há uma palavra-chave simpática que signifique ou em JavaScript. Em vez disso, temos de usar estas duas barras (_bars_ em inglês) uma ao lado da outra para significar ou. Parece estranho, mas na verdade não é. Vais habituar-te.

Por isso, podemos dizer que, se alguém tiver mais de 20 anos ou estiver vestido para a discoteca, então pode entrar. Ou seja, vamos ter uma festa divertida com miúdos vestidos para a discoteca e adultos mal vestidos, o que parece razoável.

```javascript
if (age > 20 || outfit === "disco") {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-or/party-door.webp"
  alt="Jiki a receber, à porta de uma festa, uma mistura de miúdos vestidos para a discoteca e adultos vestidos de forma casual"
  width="327"
  height="400"
/>

Há uma coisa que costuma baralhar as pessoas, tanto no caso do e como no caso do ou: cada lado do e/ou tem de ser uma comparação completa. Por isso, mesmo que estejas a comparar a mesma variável dos dois lados, tens de a repetir. Não podes escrever `if age is less than 13 or greater than 20`. Tens de escrever `if age is less than 13 or age is greater than 20`. Tens de garantir que os dois lados são comparações completas.

```javascript
if (age < 13 || age > 20)
```

Tens de perceber quando é que as duas condições importam e quando é que basta uma delas ser verdadeira.
