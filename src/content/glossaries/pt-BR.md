---
lang: "pt-BR"
name: "Brazilian Portuguese"
family: "pt"
stage: "refining"
governance_sha: "1e9b16b"
content_version: "2603f068e6df"
published_at: "2026-07-31"
term_count: 61
forum_topic_id: 288
video_player_forum_topic_id: 773
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
| true / false | verdadeiro / falso | pt | Lowercase in prose. |

### Functions & control flow

| English | Portuguese | Use (pt/en) | Notes |
|---------|------------|-------------|-------|
| if statement | condicional | pt | Plural: _condicionais_. Corroborated for pt-pt via Univ. Évora course material. |
| statement (executable) | instrução | pt | The imperative sense: a line of code that does something and gets executed. Corroborated for pt-pt via Univ. Évora course material. |
| statement (logical claim) | afirmação | pt | The proposition / true-or-false sense. Pick by meaning, not by the English word. |
| function | função | pt | The keyword `function` in code stays English; the concept in prose is _função_. |
| argument | argumento | pt | Call-site value sense. |

### Loops, state & program flow

| English | Portuguese | Use (pt/en) | Notes |
|---------|------------|-------------|-------|
| nested | aninhado | pt | Combines with each locale's own word for "loop" to mean nested loop; see the locale glossary's `loop` entry. |

### Tooling & engineering

| English | Portuguese | Use (pt/en) | Notes |
|---------|------------|-------------|-------|
| workflow | fluxo de trabalho | pt | |

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
| input slot | fenda | The narrow slot you insert a coin into, like on a piggy bank. Confirmed by multiple native speakers (oxe-b, alanprofeta) on the pt-BR glossary thread: _ranhura_ reads formal/dated, _fenda_ is the natural word for a piggy-bank-style coin slot specifically (as opposed to _entrada_ for a hardware slot, or _ficha_ for arcade tokens). Replaces the earlier draft, _ranhura_. |
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
`../pt/glossary.md` first for the terms shared with European Portuguese (`pt-pt`) and for
how this file relates to it; this file holds only the terms that diverge between the two
locales, plus terms that exist only for Brazilian Portuguese.

Why each term here was chosen is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Portuguese | Use (pt-BR/en) | Notes |
|---------|------------|-----------------|-------|
| programming / coding | **programação** | pt-BR | Use `programação` consistently. `codificação` is not natural in Brazilian informal register; avoid. |
| tech / tech industry | mercado de tech | pt-BR | "tech" kept as-is; "mercado de tech" for "tech industry". |
| developer | desenvolvedor | pt-BR | Use gender-neutral rephrasing where practical; see guide § Gender-neutral phrasing. |

## Localize (use the Portuguese term)

Terms below diverge from `../pt/glossary.md` or exist only for Brazilian Portuguese. Same
column structure as the family file.

### Values & data types

| English | Portuguese | Use (pt-BR/en) | Notes |
|---------|------------|-----------------|-------|
| character | caractere | pt-BR | Singular is `caractere` (not `caracter`). Diverges from pt-pt's `caráter`/`carateres`. |
| float / decimal | número de ponto flutuante | pt-BR | Or _decimal_ when the floating-point nature does not matter. Diverges from pt-pt's "vírgula flutuante". |

### Functions & control flow

| English | Portuguese | Use (pt-BR/en) | Notes |
|---------|------------|-----------------|-------|
| to return (a value) | retornar | pt-BR | "A função retorna um valor." Diverges from pt-pt's "devolver". |
| return value | valor de retorno | pt-BR | Follows the verb `retornar` above. |
| brackets (the two after a function name) | parênteses | pt-BR | The `()` pair written after a function name to call it: _escreva o nome dela e depois os parênteses_. Always `parênteses`, never `colchetes` (which is `[]`). See § Brackets below for the glyph names. |

### Loops, state & program flow

| English | Portuguese | Use (pt-BR/en) | Notes |
|---------|------------|-----------------|-------|
| interpreter | intérprete | pt-BR | Use for the person doing the interpreting, including Jiki himself ("o trabalho dele é interpretar o código"). Never `interpretador`, which names interpreter *software*, not a person. |
| instruction (given to Jiki) | instrução | pt-BR | Everyday word: _dar as instruções certas ao intérprete_. Shares the word with `statement (executable)` in `../pt/glossary.md`; this is intended, not a collision, since a statement is an instruction. |
| mental model | modelo mental | pt-BR | _é um modelo mental poderoso_. |
| (programming) language | linguagem (de programação) | pt-BR | `linguagem` alone once context is set; `linguagem de programação` on introduction. Never `língua` (natural languages only). |
| iteration | iteração | pt-BR | Verb: _iterar_; "passar por cada elemento" also natural. |
| to run / execute (code) | rodar / executar | pt-BR | `rodar` in warm/casual register; `executar` in formal or procedural steps. Diverges from pt-pt, where "rodar" is not natural usage. |
| loop | laço | pt-BR | `for`/`while` keywords stay English. Diverges from pt-pt's "ciclo". |
| scope | escopo | pt-BR | Diverges from pt-pt's "âmbito". |
| comment (code comment) | comentário | pt-BR | The `//` line a learner writes as a private note; Jiki ignores it and moves to the next line. **Unconfirmed:** added for the function-inputs concept page, not yet used in a real translated file; likely identical in pt-pt, so a candidate to move to `../pt/glossary.md` once confirmed. |

### Tooling & engineering

| English | Portuguese | Use (pt-BR/en) | Notes |
|---------|------------|-----------------|-------|
| deploy (verb: to deploy) | publicar | pt-BR | "Publique o código" for go-live (subjunctive imperative, matches `você` formality). "Fazer deploy" is natural in dev prose; prefer `publicar` for beginner-facing text. |

### Platform & curriculum vocabulary

| English | Portuguese | Use (pt-BR/en) | Notes |
|---------|------------|-----------------|-------|
| course | curso | pt-BR | The whole Jiki course: _neste curso, o seu intérprete é o Jiki_. Keep distinct from `lição` (lesson). |
| cell (grid square, e.g. maze exercises) | casa | pt-BR | "Move the character forward one cell" → "avance uma casa" (like a square on a board game), not "uma célula", which reads as a biology/spreadsheet term and feels unnatural here. |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Portuguese in the gloss column below (per the format in `global/voice.md`); with no
`<define>`, use the English bare, with no gloss. Terms below diverge from
`../pt/glossary.md` or exist only for Brazilian Portuguese.

| Term | Portuguese gloss (on `<define>`) | Notes |
|------|----------------------------------|-------|
| framework | _framework_ | Where the source `<define>`s it, explain it means a reusable structure. Diverges from pt-pt's "estrutura de trabalho" gloss. |
| CLI (the concept) | interface de linha de comando | Where the source `<define>`s it, explain CLI as _interface de linha de comando_ (singular "comando"). Diverges from pt-pt's plural "comandos". |

## Jiki physical metaphors

Terms below diverge from `../pt/glossary.md` or exist only for Brazilian Portuguese.

| English metaphor | Portuguese rendering | Notes |
|-----------------|---------------------|-------|
| chain (array metaphor) | corrente | Physical chain of links; links = _elos_. Context must be physical to avoid collision with `corrente` = electric current / "current/present". (pt-pt's equivalent entry warns of a different collision risk, with "cadeia"; both are valid for their own locale.) |
| machine (function metaphor) | máquina | Diminutive _maquininha_ for the affectionate "little machines". |
| shelves (storage) | prateleira | _a prateleira do Jiki_; plural _prateleiras_ when there is more than one. |
| warehouse (Jiki's warehouse) | galpão | The big shed where Jiki hangs out and keeps his machine shelf. |
| crank (machine crank) | manivela | The handle Jiki turns to power a machine up: _girar a manivela_. |
| board / whiteboard | quadro | **One word for one object.** Both the board the learner writes instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on. Never a second word such as `quadro branco` or `lousa` for the same object. |

## Provisional terms (🟡)

These terms have been decided but not yet used in a real translated file. Confirm the choice on
first actual use and move to the sections above once confirmed.

| English | Portuguese | Notes |
|---------|------------|-------|
| for loop | laço `for` | Keep `for` in backticks (real keyword) + _laço_. |
| while loop | laço `while` | As above. |
| loop body | corpo do laço | |
| dictionary | dicionário | |
| condition is true/false | a condição é verdadeira / falsa | |
| auth (authentication / authorization) | autenticação / autorização | Pick by meaning. Standard Brazilian Portuguese; not abbreviated to "auth" in beginner-facing prose. |

## Brackets

Default to plain **parênteses**; see `../pt/glossary.md` § Brackets for the shared `()`
glyph word. When a specific bracket type matters, name it and show the glyph immediately
after; for `()` itself, add _parênteses redondos_ + glyph only when disambiguating (pt-pt
uses "parênteses curvos" instead). This locale's `[]`, `{}`, `<>` renderings diverge from
pt-pt's and are given below.

| Glyph | Portuguese | Notes |
|-------|-----------|-------|
| `[]` | colchetes | Diverges from pt-pt's "parênteses retos". |
| `{}` | chaves | Diverges from pt-pt's "chavetas". |
| `<>` | sinais de maior e menor | Diverges from pt-pt's "sinais de menor e maior" (reversed order). |

Example: _para chamar uma função, escreva o nome dela seguido de parênteses de abertura e
fechamento (`()`)._

---

## Decision log

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, `board / whiteboard`, and, as a principle, every row.

Three decisions came out of that pass that bind Brazilian Portuguese:

- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. **Brazilian Portuguese
  reversed an earlier choice here.** An earlier pass had deliberately picked
  `interpretador` over `intérprete`, on the grounds that `intérprete` names a human
  spoken-language interpreter and would read as the wrong kind of person. That reasoning
  inverted once Jiki is understood as a character whose job is interpreting ("o trabalho
  dele é interpretar o código"): a human-shaped word is exactly what is needed, and
  `intérprete` is that word, while `interpretador` names interpreter *software* and cannot
  describe a character. The row now reads `intérprete`, and rules out `interpretador`.
- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have.
  Brazilian Portuguese renders both as **quadro**, the ordinary word for a board on a
  wall, with no second word (never `quadro branco` or `lousa`) for the same object.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: `comment` added for the function-inputs concept page

**Decided by:** agent. **Status: unconfirmed draft.**
**Terms affected:** `comment (code comment)`.

Checked the source of the three using-functions concept pages
(`using-functions`, `using-functions-with-inputs`, `using-functions-with-return-values`)
against the combined pt/pt-BR glossary. Every term they need was already covered except
one: `using-functions-with-inputs` defines `<define>comments</define>` (the `//` line a
learner writes as a private note), which had no row in either file. `global/terms.md`
lists it as a term needing a glossary entry in every language. Added `comentário` to this
locale's glossary, not yet used in a real translated file. It reads as an ordinary word
with no reason to diverge from pt-pt, so it is a candidate to move to `../pt/glossary.md`
once confirmed identical there.

No other gap was found: the `board / whiteboard`, `machine`, `crank`, `shelves`,
`warehouse`, `interpreter`, `mental model`, `(programming) language`, `instruction (given
to Jiki)` and `brackets` rows this pass expected to need adding were already present in
this file from an earlier pass. A search of this locale's guide and glossary also found no
instance of `brackets` glossed as `colchetes` where `parênteses` was meant; the file
already used `parênteses` consistently for the function-call bracket pair.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections. A term whose reasoning is already covered
by a dated entry above (`interpreter`, `board / whiteboard`) is not repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| tech / tech industry | "tech" is established in Brazilian dev culture as a bare loanword. |
| developer | Standard term; no rationale beyond that. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| instruction (given to Jiki) | Portuguese has one ordinary word (`instrução`) for both an executable statement and an instruction given to Jiki; coining a second would read worse than sharing it. |
| scope | `escopo` is fully nativized in Brazilian tech writing, unlike pt-pt's `âmbito`. |

#### Keep in English

| Term | Why |
|------|-----|
| framework | Both _framework_ and _estrutura_ appear in Brazilian dev writing; _framework_ reads more natural. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| warehouse | `galpão` preferred over `armazém`, which reads commercial/industrial in Brazil. |

### 2026-07-31: `cell` added from forum feedback on maze-solve-basic

**Decided by:** native speaker (sorrizo), forum post
https://forum.jiki.io/t/812/5. **Status: confirmed.**
**Terms affected:** `cell (grid square, e.g. maze exercises)`.

Reviewing the published `pt-BR` translation of `Solve the Maze`, sorrizo flagged "one cell"
translated as "uma célula" (move() description) as not sounding natural: "célula" reads as
a biology/spreadsheet term, not a board-game square. Suggested "uma casa" instead, which
matches the board-game sense (as in a chess/checkers square) and is the ordinary word.
Added to the glossary as a general term for a maze/grid square, since it will recur in any
grid-based exercise, not just this one.

The same post confirmed the existing "bonequinho" choice for the maze walker/character is
fine as-is (flagged only as "not the most literal translation", not as wrong), so no
glossary change there.
