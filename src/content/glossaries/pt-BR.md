---
lang: "pt-BR"
name: "Brazilian Portuguese"
family: "pt"
governance_sha: "1d91ad4"
content_version: "378e65aa83a4"
published_at: "2026-07-30"
term_count: 83
forum_topic_id: 288
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

# Brazilian Portuguese (pt-BR) glossary

The agreed term list for what is distinct about Brazilian Portuguese. Read
`../pt/glossary.md` first for the terms shared with European Portuguese (`pt-pt`); this
file holds only the terms that diverge between the two locales, plus terms that exist only
for Brazilian Portuguese. A term lives in **exactly one** glossary file, this one or the
family's, **never both**. A locale's effective glossary is `../pt/glossary.md`'s rows plus
this file's rows, read together. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document.

Nothing is written here without prior agreement; see `../pt/glossary.md` § "How this file
changes" for how proposals get agreed. See `global/voice.md` § "Direction comes from the
glossary" for what the Use column means; that explainer applies equally to this file and is
not repeated here. The final `Agreed by` column records who decided each row (`agent` or
`human`, with the forum topic where it was settled); see `global/workflow.md` § "The
provenance column".

## Core decisions

| English | Portuguese | Use (pt-BR/en) | Notes | Agreed by |
|---------|------------|-----------------|-------|-----------|
| programming / coding | **programação** | pt-BR | Use `programação` consistently. `codificação` is not natural in Brazilian informal register; avoid. | agent |
| tech / tech industry | mercado de tech | pt-BR | "tech" kept as-is (established in Brazilian dev culture); "mercado de tech" for "tech industry". | agent |
| developer | desenvolvedor | pt-BR | Standard term. Use gender-neutral rephrasing where practical; see guide § Gender-neutral phrasing. | agent |

## Localize (use the Portuguese term)

Terms below diverge from `../pt/glossary.md` or exist only for Brazilian Portuguese. Same
column structure as the family file.

### Values & data types

| English | Portuguese | Use (pt-BR/en) | Notes | Agreed by |
|---------|------------|-----------------|-------|-----------|
| character | caractere | pt-BR | Singular is `caractere` (not `caracter`). Diverges from pt-pt's `caráter`/`carateres`. | agent |
| float / decimal | número de ponto flutuante | pt-BR | Or _decimal_ when the floating-point nature does not matter. Diverges from pt-pt's "vírgula flutuante". | agent |

### Functions & control flow

| English | Portuguese | Use (pt-BR/en) | Notes | Agreed by |
|---------|------------|-----------------|-------|-----------|
| to return (a value) | retornar | pt-BR | "A função retorna um valor." Diverges from pt-pt's "devolver". | agent |
| return value | valor de retorno | pt-BR | Follows the verb `retornar` above. | agent |
| brackets (the two after a function name) | parênteses | pt-BR | The `()` pair written after a function name to call it: _escreva o nome dela e depois os parênteses_. Always `parênteses`, never `colchetes` (which is `[]`). See § Brackets below for the glyph names. | agent |

### Loops, state & program flow

| English | Portuguese | Use (pt-BR/en) | Notes | Agreed by |
|---------|------------|-----------------|-------|-----------|
| interpreter | intérprete | pt-BR | The **person** who interprets, because on concept pages Jiki is the interpreter ("o trabalho dele é interpretar o código"). `interpretador` is the word for interpreter *software* and cannot describe Jiki, so it is not used. | agent |
| instruction (given to Jiki) | instrução | pt-BR | Everyday word: _dar as instruções certas ao intérprete_. Shares the word with `statement (executable)` in `../pt/glossary.md`, which is intended: a statement is an instruction. | agent |
| mental model | modelo mental | pt-BR | The picture-in-your-head framing: _é um modelo mental poderoso_. | agent |
| (programming) language | linguagem (de programação) | pt-BR | `linguagem` alone once context is set; `linguagem de programação` on introduction. Never `língua` (natural languages only). | agent |
| iteration | iteração | pt-BR | Verb: _iterar_; "passar por cada elemento" also natural. | agent |
| to run / execute (code) | rodar / executar | pt-BR | `rodar` in warm/casual register; `executar` in formal or procedural steps. Diverges from pt-pt, where "rodar" is not natural usage. | agent |
| loop | laço | pt-BR | `for`/`while` keywords stay English. Diverges from pt-pt's "ciclo". | agent |
| scope | escopo | pt-BR | Fully nativized in Brazilian tech writing. Diverges from pt-pt's "âmbito". | agent |

### Tooling & engineering

| English | Portuguese | Use (pt-BR/en) | Notes | Agreed by |
|---------|------------|-----------------|-------|-----------|
| deploy (verb: to deploy) | publicar | pt-BR | "Publique o código" for go-live (subjunctive imperative, matches `você` formality). "Fazer deploy" is natural in dev prose; prefer `publicar` for beginner-facing text. | agent |

### Platform & curriculum vocabulary

| English | Portuguese | Use (pt-BR/en) | Notes | Agreed by |
|---------|------------|-----------------|-------|-----------|
| course | curso | pt-BR | The whole Jiki course: _neste curso, o seu intérprete é o Jiki_. Keep distinct from `lição` (lesson). | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Portuguese in the gloss column below (per the format in `global/voice.md`); with no
`<define>`, use the English bare, with no gloss. Terms below diverge from
`../pt/glossary.md` or exist only for Brazilian Portuguese.

| Term | Portuguese gloss (on `<define>`) | Notes | Agreed by |
|------|----------------------------------|-------|-----------|
| framework | _framework_ | Both _framework_ and _estrutura_ appear in Brazilian dev writing; _framework_ is more natural. Where the source `<define>`s it, explain it means a reusable structure. Diverges from pt-pt's "estrutura de trabalho" gloss. | agent |
| CLI (the concept) | interface de linha de comando | Where the source `<define>`s it, explain CLI as _interface de linha de comando_ (singular "comando"). Diverges from pt-pt's plural "comandos". | agent |

## Jiki physical metaphors

Terms below diverge from `../pt/glossary.md` or exist only for Brazilian Portuguese.

| English metaphor | Portuguese rendering | Notes | Agreed by |
|-----------------|---------------------|-------|-----------|
| chain (array metaphor) | corrente | Physical chain of links; links = _elos_. Context must be physical to avoid collision with `corrente` = electric current / "current/present". (pt-pt's equivalent entry warns of a different collision risk, with "cadeia"; both are valid for their own locale.) | agent |
| machine (function metaphor) | máquina | Diminutive _maquininha_ for the affectionate "little machines". | agent |
| shelves (storage) | prateleira | _a prateleira do Jiki_; plural _prateleiras_ when there is more than one. | agent |
| warehouse (Jiki's warehouse) | galpão | The big shed where Jiki hangs out and keeps his machine shelf. Preferred over `armazém`, which reads commercial/industrial in Brazil. | agent |
| crank (machine crank) | manivela | The handle Jiki turns to power a machine up: _girar a manivela_. | agent |
| board / whiteboard | quadro | **One word for one object.** Both the board the learner puts instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on. The ordinary Brazilian word for a board on a wall; no collision with any array word. Never a second word such as `quadro branco` or `lousa` for the same object. | agent |

## Provisional terms (🟡)

These terms have been decided but not yet used in a real translated file. Confirm the choice on
first actual use and move to the sections above once confirmed.

| English | Portuguese | Notes | Agreed by |
|---------|------------|-------|-----------|
| for loop | laço `for` | Keep `for` in backticks (real keyword) + _laço_. | agent |
| while loop | laço `while` | As above. | agent |
| loop body | corpo do laço | | agent |
| dictionary | dicionário | | agent |
| condition is true/false | a condição é verdadeira / falsa | | agent |
| auth (authentication / authorization) | autenticação / autorização | Pick by meaning. Standard Brazilian Portuguese; not abbreviated to "auth" in beginner-facing prose. | agent |

## Brackets

Default to plain **parênteses**; see `../pt/glossary.md` § Brackets for the shared `()`
glyph word. When a specific bracket type matters, name it and show the glyph immediately
after; for `()` itself, add _parênteses redondos_ + glyph only when disambiguating (pt-pt
uses "parênteses curvos" instead). This locale's `[]`, `{}`, `<>` renderings diverge from
pt-pt's and are given below.

| Glyph | Portuguese | Notes | Agreed by |
|-------|-----------|-------|-----------|
| `[]` | colchetes | Diverges from pt-pt's "parênteses retos". | agent |
| `{}` | chaves | Diverges from pt-pt's "chavetas". | agent |
| `<>` | sinais de maior e menor | Diverges from pt-pt's "sinais de menor e maior" (reversed order). | agent |

Example: _para chamar uma função, escreva o nome dela seguido de parênteses de abertura e
fechamento (`()`)._
