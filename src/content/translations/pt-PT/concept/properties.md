---
lang: "pt-PT"
type: "concept"
slug: "properties"
title: "Propriedades"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-PT/curriculum/concepts/properties/page.md"
en_md5: "0634cd72388bef118e9dd22131a3c1cd"
governance_sha: "a347f3f"
content_version: "11ce7a8a2887"
published_at: "2026-08-22"
---

Até agora, quando pensávamos em strings ou em números, tínhamos a ideia de que eram coisas bastante estáticas.

E, embora o sejam, também têm muitas funcionalidades integradas que o Jiki pode usar.

Há dois tipos de capacidades que vamos ver: propriedades e métodos.

As propriedades são factos que podemos pedir ao Jiki que nos diga sobre as coisas.

Assim, por exemplo, as strings têm uma propriedade chamada `length` (comprimento), que o Jiki pode usar para nos dizer qual é o comprimento de uma string.

Portanto, em vez de termos de percorrer todas as letras para descobrir o tamanho de uma string, podemos simplesmente pedir ao Jiki que nos diga.

E, para isso, usamos uma nova forma de sintaxe: um ponto.

Por exemplo, se tivermos a string `"Jeremy"` e quisermos obter o comprimento dela, podemos escrever:

```javascript
"Jeremy".length // 6
```

Quando o Jiki cria uma string, conta as letras e, digamos assim, escreve um número no canto com quantas são.

<img
  class="concept-image"
  src="/static/images/concept-assets/properties/jiki-counting-letters.webp"
  alt="O Jiki a contar as letras da string Jeremy e a escrever o número no canto"
  width="359"
  height="400"
/>

E depois, quando usamos a propriedade `length`, o Jiki vai ver qual era esse número.

Assim, no nosso exemplo `"Jeremy".length`, quando o Jiki cria a string `"Jeremy"`, conta as letras, escreve o número seis no canto e, depois, quando escrevemos `"Jeremy".length`, vai verificar esse número.

Portanto, podes pensar nas propriedades como factos sobre essa coisa.
