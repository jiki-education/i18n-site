---
lang: "pt-pt"
name: "European Portuguese"
family: "pt"
governance_sha: "1d91ad4"
content_version: "acb80d55f637"
published_at: "2026-07-30"
term_count: 77
forum_topic_id: 341
---

# Portuguese (pt) family glossary

The agreed term list shared by every Portuguese locale: Brazilian Portuguese (`pt-BR`) and
European Portuguese (`pt-pt`). Every term here has been agreed and is binding for both
locales: use it exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file;
it surfaces new terms it had to decide on as proposals in its output (a "glossary delta").
Those proposals are discussed, and only once agreed are they written in (by a human or by
Claude). So everything in this file is, by definition, already agreed.

A term lives in **exactly one** glossary file: this family file, or one locale's own
`glossary.md`, **never both**. A term defaults to the locale file; it only moves here once
its rendering, Use column, and Notes are confirmed identical across `pt-BR` and
`pt-pt`, not merely assumed to be. When reading a locale's effective glossary, it is this
file's rows plus that locale's own `glossary.md` rows (concatenation, not an override
lookup, because of the one-place rule). If a term is not here, check the relevant locale
file; it has not necessarily gone unagreed, it may simply diverge by locale.

## Core decisions

| English | Portuguese | Use (pt/en) | Notes |
|---------|------------|-------------|-------|
| streak | sequência | pt | |

## Localize (use the Portuguese term)

These are terms where the Portuguese is used in prose, so the "Use (pt/en)" column is `pt` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Portuguese | Use (pt/en) | Notes |
|---------|------------|-------------|-------|
| value | valor | pt | Ordinary word. |
| number | número | pt | Ordinary word. |
| true / false | verdadeiro / falso | pt | Lowercase in prose. |
| integer | número inteiro | pt | |
| index | índice | pt | |

### Functions & control flow

| English | Portuguese | Use (pt/en) | Notes |
|---------|------------|-------------|-------|
| if statement | condicional | pt | Plural: _condicionais_. Corroborated for pt-pt via Univ. Évora course material. |
| condition | condição | pt | Ordinary word; stands alone. |
| comparison | comparação | pt | Ordinary word; stands alone. |
| expression | expressão | pt | |
| operator | operador | pt | |
| statement (executable) | instrução | pt | The imperative sense: a line of code that does something and gets executed. Corroborated for pt-pt via Univ. Évora course material. |
| statement (logical claim) | afirmação | pt | The proposition / true-or-false sense. Pick by meaning, not by the English word. |
| function | função | pt | The keyword `function` in code stays English; the concept in prose is _função_. |
| to call (a function) | chamar | pt | _chamar uma função_ |
| to define (a function) | definir | pt | |
| parameter | parâmetro | pt | |
| argument | argumento | pt | Call-site value sense. |
| input (to a function) | entrada | pt | |
| output | saída | pt | |

### Loops, state & program flow

| English | Portuguese | Use (pt/en) | Notes |
|---------|------------|-------------|-------|
| keyword | palavra-chave | pt | |
| variable | variável | pt | |
| assignment | atribuição | pt | |
| to assign | atribuir | pt | |
| code block | bloco de código | pt | |
| error | erro | pt | |
| nested | aninhado | pt | Combines with each locale's own word for "loop" to mean nested loop; see the locale glossary's `loop` entry. |
| element | elemento | pt | Array element = _elemento do array_. |
| object | objeto | pt | |
| method | método | pt | |
| property | propriedade | pt | |

### Tooling & engineering

| English | Portuguese | Use (pt/en) | Notes |
|---------|------------|-------------|-------|
| workflow | fluxo de trabalho | pt | |
| pitfall | armadilha | pt | Ordinary word; stands alone. |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Portuguese in the gloss column below (per the format in `global/voice.md`); with no
`<define>`, use the English bare, with no gloss.

| Term | Portuguese gloss (on `<define>`) | Notes |
|------|----------------------------------|-------|
| string | _cadeia de caracteres_ | Exception: in the string concept itself, explain _cadeia de caracteres_ where the source defines it, then use _string_ throughout. |
| array | _vetor_ | Exception: in the array concept itself, explain _vetor_ where the source defines it, then use _array_. Confirmed for pt-pt as the dominant academic usage (Univ. Évora keeps `array` in prose). |
| Boolean | _booleano_ | Exception: in the Boolean concept, explain _booleano_ where the source defines it, then use _Boolean_. |
| component | _componente_ | |
| API | explain what it is in Portuguese | Not a word a beginner knows; where the source defines it, explain the concept in Portuguese, not just gloss the acronym. |
| JavaScript, Python, React | (no gloss) | Product / language names. |
| Debug, Test | (no gloss) | As keywords / technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Portuguese rendering | Notes |
|-----------------|---------------------|-------|
| box (value container) | caixa | A box that holds a value. |
| input slot | ranhura | The narrow slot you insert a coin into, like on a piggy bank. |
| return chute | calha de saída | A chute a value slides out of. Low-to-medium confidence; flag for native-speaker confirmation on first real use. |

## Brackets

Shared glyph word. Each locale's own glossary states its default bracket-naming
convention, its disambiguating term for `()`, and the divergent `[]`, `{}`, and `<>`
renderings.

| Glyph | Portuguese | Notes |
|-------|-----------|-------|
| `()` | parênteses | The base glyph word is the same in both locales; the disambiguating term added when a specific bracket type matters (e.g. _parênteses redondos_ vs _parênteses curvos_) diverges. See the locale glossary. |

---

# European Portuguese (pt-PT) glossary

The agreed term list for what is distinct about European Portuguese. Read
`../pt/glossary.md` first for the terms shared with Brazilian Portuguese (`pt-BR`); this
file holds only the terms that diverge between the two locales, plus terms that exist only
for European Portuguese. A term lives in **exactly one** glossary file, this one or the
family's, **never both**. A locale's effective glossary is `../pt/glossary.md`'s rows plus
this file's rows, read together. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document.

Nothing is written here without prior agreement; see `../pt/glossary.md` § "How this file
changes" for how proposals get agreed; that explainer applies equally to this file and is
not repeated here. Each term's "Use (pt-pt/en)" column records which language is primary in
prose: `pt-pt` when Portuguese is primary, `en` when English is kept primary; see
`global/voice.md` § "Direction comes from the glossary". The `Agreed by` column records who
decided each row; see `global/workflow.md` § "The provenance column".

## Core decisions

| English | Portuguese | Use (pt-pt/en) | Notes | Agreed by |
|---------|------------|-----------------|-------|-----------|
| programming / coding | **programação** | pt-pt | Use `programação` consistently. | agent |
| tech / tech industry | setor tecnológico | pt-pt | More restrained register than pt-BR's "mercado de tech"; loanword "tech" alone reads too casual for European Portuguese written prose. | agent |
| developer | programador(a) | pt-pt | "Desenvolvedor" is a Brazilian-leaning form; "programador(a)" is the natural European Portuguese equivalent. | agent |

## Localize (use the Portuguese term)

Terms below diverge from `../pt/glossary.md` or exist only for European Portuguese.

### Values & data types

| English | Portuguese | Use (pt-pt/en) | Notes | Agreed by |
|---------|------------|-----------------|-------|-----------|
| character | caráter (pl. carateres) | pt-pt | Post-1990 spelling: European Portuguese silences the `c`, giving "carateres" (Brazilian keeps it: "caractere/caracteres"). | agent |
| float / decimal | número de vírgula flutuante | pt-pt | European Portuguese says "vírgula flutuante" (decimal comma); Brazilian says "ponto flutuante" (decimal point). Use "decimal" alone when the floating-point nature does not matter. | agent |

### Functions & control flow

| English | Portuguese | Use (pt-pt/en) | Notes | Agreed by |
|---------|------------|-----------------|-------|-----------|
| to return (a value) | devolver | pt-pt | "A função devolve um valor." European Portuguese idiom, confirmed against Univ. Évora course material ("Devolve o valor..."); deliberately diverges from Brazilian "retornar". | agent |
| return value | valor devolvido | pt-pt | Follows the verb `devolver` above. | agent |
| brackets (the two after a function name) | parênteses | pt-pt | The prose rendering of "those two brackets" written after a function name: _os parênteses_, or _dois parênteses_ on first mention. The glyph naming convention (and when to disambiguate `()` as _parênteses curvos_) is in § Brackets below. | agent |

### Loops, state & program flow

| English | Portuguese | Use (pt-pt/en) | Notes | Agreed by |
|---------|------------|-----------------|-------|-----------|
| interpreter | intérprete | pt-pt | The one who interprets, a person doing a job: on concept pages Jiki **is** the interpreter. _Intérprete_ is the ordinary Portuguese word for a person who interprets, so it is the only candidate that can name Jiki. Do not use _interpretador_, which names a piece of software and cannot describe a character. Plural: _intérpretes_. | agent |
| instruction (given to Jiki) | instrução | pt-pt | Everyday register, not the legal/administrative sense of _instrução_. Plural _instruções_: "escrever instruções num quadro". Deliberately the same word as `statement (executable)` in `../pt/glossary.md`: they are the same idea (a thing you tell the interpreter to do), and beginners meet the metaphor first. | agent |
| mental model | modelo mental | pt-pt | The standard Portuguese phrase; it reads naturally in beginner prose. | agent |
| (programming) language | linguagem (de programação) | pt-pt | Always _linguagem_, never the English borrowing. _Língua_ is for human languages; a programming language is a _linguagem_. Shorten to _linguagem_ once the context is established ("numa linguagem que o computador entende"). | agent |
| iteration | iteração | pt-pt | Verb: _iterar_; "percorrer cada elemento" also natural. | agent |
| to run / execute (code) | executar / correr | pt-pt | `correr` in warm/casual register ("experimenta correr este código"); `executar` in formal or procedural steps. Deliberately diverges from Brazilian "rodar", which is not natural European Portuguese usage. | agent |
| loop | ciclo | pt-pt | Deliberately diverges from Brazilian "laço". Source: Univ. Évora, FEUP course descriptions. `for`/`while` keywords stay English. | agent |
| scope | âmbito | pt-pt | Deliberately diverges from Brazilian "escopo". | agent |

### Tooling & engineering

| English | Portuguese | Use (pt-pt/en) | Notes | Agreed by |
|---------|------------|-----------------|-------|-----------|
| deploy (verb: to deploy) | publicar | pt-pt | "Publica o código" for go-live, beginner-facing (tu-imperative, matches `tu` formality). "Fazer deploy" appears in professional dev prose but is avoided here. | agent |

### Platform & curriculum vocabulary

| English | Portuguese | Use (pt-pt/en) | Notes | Agreed by |
|---------|------------|-----------------|-------|-----------|
| course | curso | pt-pt | The whole Jiki course ("Neste curso, o teu intérprete é o Jiki"). Keep distinct from _aula_ (lesson) and _currículo_ (curriculum). | agent |

## Keep in English

Terms below diverge from `../pt/glossary.md` or exist only for European Portuguese. These
stay in English in prose; where the source `<define>`s one, use the Portuguese in the gloss
column below (per the format in `global/voice.md`), and with no `<define>`, use the English
bare, with no gloss.

| Term | Portuguese gloss (on `<define>`) | Notes | Agreed by |
|------|----------------------------------|-------|-----------|
| framework | _estrutura de trabalho_ | The native term is understood but rarely forced in practice; explain where the source `<define>`s it, then use _framework_ freely. Diverges from pt-BR, which glosses simply as _framework_. | agent |
| CLI (the concept) | interface de linha de comandos | Explain CLI as _interface de linha de comandos_ (plural "comandos") where the source `<define>`s it. Diverges from pt-BR's singular "comando". | agent |

## Jiki physical metaphors

Terms below diverge from `../pt/glossary.md` or exist only for European Portuguese.

| English metaphor | Portuguese rendering | Notes | Agreed by |
|-----------------|---------------------|-------|-----------|
| chain (array metaphor) | corrente | Physical chain of links; links = _elos_. Keep the context physical to avoid collision with "cadeia" (used for _cadeia de caracteres_, the string gloss). (pt-BR's equivalent entry warns of a different collision risk, with electric current; both are valid for their own locale.) | agent |
| machine (function metaphor) | máquina | Direct, concrete. Not currently used in pt-BR material. | agent |
| shelves (storage) | prateleiras | The shelves where variables and functions are stored. Singular _prateleira_ for Jiki's one shelf of machines. | agent |
| board / whiteboard | quadro | **One object, one word.** The board the learner puts instructions on for Jiki to follow, and the board a function keeps its own instructions on, are the same object: always _quadro_. _Quadro_ is the everyday Portuguese word for a board in a room, and it is what a Portuguese reader pictures. Never _quadro branco_ (over-specific, and it split one metaphor into two words) and never _painel_ (a control panel or a signboard, not something you write on). | agent |
| warehouse (Jiki's warehouse) | armazém | Where Jiki hangs out and keeps his shelf of machines. Ordinary word for a storage building. | agent |
| crank (machine crank) | manivela | The handle Jiki turns to power a machine up. Verb phrase: _rodar a manivela_. | agent |

## Brackets

Default to plain **parênteses**; see `../pt/glossary.md` § Brackets for the shared `()`
glyph word. When a specific bracket type matters, name it and show the glyph immediately
after; for `()` itself, add _parênteses curvos_ + glyph only when disambiguating (pt-BR
uses "parênteses redondos" instead). This locale's `[]`, `{}`, `<>` renderings diverge from
pt-BR's and are given below.

| Glyph | Portuguese | Notes | Agreed by |
|-------|-----------|-------|-----------|
| `[]` | parênteses retos | Diverges from pt-BR's "colchetes". | agent |
| `{}` | chavetas | Diverges from pt-BR's "chaves". | agent |
| `<>` | sinais de menor e maior | Diverges from pt-BR's "sinais de maior e menor" (reversed order). | agent |

Example: _para chamar uma função, escreve o nome dela seguido de parênteses de abertura e
fecho (`()`)._
