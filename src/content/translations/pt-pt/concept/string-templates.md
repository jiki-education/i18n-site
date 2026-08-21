---
lang: "pt-pt"
type: "concept"
slug: "string-templates"
title: "Modelos de strings"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-pt/curriculum/concepts/string-templates/page.md"
en_md5: "7fd0e09ac3b32db5f159f8e772872104"
governance_sha: "0284360"
content_version: "b56aa5c21dab"
published_at: "2026-08-21"
---

Podemos usar algo chamado _template literals_ (modelos de texto) para inserir strings dentro de outras strings.

Assim, em vez de juntarmos strings, podemos ter uma string, ou um modelo, que tem espaços para outras strings lá dentro.

Para isso, usamos acentos graves (_backticks_ em inglês) em vez de aspas.

Os acentos graves são, como o nome em inglês sugere, apóstrofos ao contrário, mas é bem possível que nunca os tenhas usado, por isso precisas de encontrar a tecla certa no teu teclado.

Servem para criar um modelo que pode conter outras strings. E depois, para inserir uma string no modelo, usamos outra sintaxe esquisita, com cifrões e chavetas. Assim, por exemplo, para obter o mesmo efeito de `"hello " + name` que acabámos de ver na concatenação, podíamos escrever:

```javascript
`hello ${name}` // "hello Jeremy" ou "hello Jiki"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/string-templates/jiki-name-box.webp"
  alt="O Jiki a segurar uma caixa com a etiqueta name, o valor que é encaixado no modelo"
  width="207"
  height="400"
/>

E isto faz exatamente a mesma coisa que juntar as strings.

Mas quando tens várias strings que precisam de ser todas montadas no mesmo sítio, isto pode ser muito mais eficiente.

Vais demorar um pouco a habituar-te a esta sintaxe específica, mas não há nada de muito complexo nela.
