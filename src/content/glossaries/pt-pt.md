---
lang: "pt-pt"
name: "European Portuguese"
family: "pt"
stage: "refining"
governance_sha: "63b88af"
content_version: "9147c6878292"
published_at: "2026-08-01"
term_count: 53
category_id: 73
forum_topic_id: 341
video_player_forum_topic_id: 775
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

# European Portuguese (pt-PT) glossary

The agreed term list for what is distinct about European Portuguese. Read
`../pt/glossary.md` first for the terms shared with Brazilian Portuguese (`pt-BR`); this
file holds only the terms that diverge between the two locales, plus terms that exist only
for European Portuguese. A term lives in **exactly one** glossary file, this one or the
family's, **never both**. A locale's effective glossary is `../pt/glossary.md`'s rows plus
this file's rows, read together. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

Each term's "Use (pt-pt/en)" column records which language is primary in prose: `pt-pt` when
Portuguese is primary, `en` when English is kept primary; see `global/voice.md` §
"Direction comes from the glossary".

## Core decisions

| English | Portuguese | Use (pt-pt/en) | Notes |
|---------|------------|-----------------|-------|
| programming / coding | **programação** | pt-pt | Use `programação` consistently. |
| tech / tech industry | setor tecnológico | pt-pt | Loanword "tech" alone reads too casual for European Portuguese written prose; use `setor tecnológico`. |
| developer | programador(a) | pt-pt | Not `desenvolvedor`, which is a Brazilian-leaning form. |

## Localize (use the Portuguese term)

Terms below diverge from `../pt/glossary.md` or exist only for European Portuguese.

### Values & data types

| English | Portuguese | Use (pt-pt/en) | Notes |
|---------|------------|-----------------|-------|
| character | caráter (pl. carateres) | pt-pt | Post-1990 spelling: European Portuguese silences the `c`, giving "carateres" (Brazilian keeps it: "caractere/caracteres"). |
| float / decimal | número de vírgula flutuante | pt-pt | Use "decimal" alone when the floating-point nature does not matter. |

### Functions & control flow

| English | Portuguese | Use (pt-pt/en) | Notes |
|---------|------------|-----------------|-------|
| to return (a value) | devolver | pt-pt | "A função devolve um valor." Deliberately diverges from Brazilian `retornar`; never mix the two. |
| return value | valor devolvido | pt-pt | Follows the verb `devolver` above. |
| brackets (the two after a function name) | parênteses | pt-pt | The prose rendering of "those two brackets" written after a function name: _os parênteses_, or _dois parênteses_ on first mention. The glyph naming convention (and when to disambiguate `()` as _parênteses curvos_) is in § Brackets below. |

### Loops, state & program flow

| English | Portuguese | Use (pt-pt/en) | Notes |
|---------|------------|-----------------|-------|
| interpreter | intérprete | pt-pt | Never use _interpretador_, which names a piece of software, not a person. Plural: _intérpretes_. |
| instruction (given to Jiki) | instrução | pt-pt | Everyday register, not the legal/administrative sense of _instrução_. Plural _instruções_: "escrever instruções num quadro". |
| mental model | modelo mental | pt-pt | |
| (programming) language | linguagem (de programação) | pt-pt | Always _linguagem_, never the English borrowing. _Língua_ is for human languages; a programming language is a _linguagem_. Shorten to _linguagem_ once the context is established ("numa linguagem que o computador entende"). |
| iteration | iteração | pt-pt | Verb: _iterar_; "percorrer cada elemento" also natural. |
| to run / execute (code) | executar / correr | pt-pt | `correr` in warm/casual register ("experimenta correr este código"); `executar` in formal or procedural steps. Deliberately diverges from Brazilian "rodar", which is not natural European Portuguese usage. |
| loop | ciclo | pt-pt | Deliberately diverges from Brazilian `laço`. `for`/`while` keywords stay English. |
| scope | âmbito | pt-pt | Deliberately diverges from Brazilian `escopo`. |

### Tooling & engineering

| English | Portuguese | Use (pt-pt/en) | Notes |
|---------|------------|-----------------|-------|
| deploy (verb: to deploy) | publicar | pt-pt | "Publica o código" for go-live, beginner-facing (tu-imperative, matches `tu` formality). Avoid "fazer deploy" here, though it appears in professional dev prose. |

### Platform & curriculum vocabulary

| English | Portuguese | Use (pt-pt/en) | Notes |
|---------|------------|-----------------|-------|
| course | curso | pt-pt | The whole Jiki course ("Neste curso, o teu intérprete é o Jiki"). Keep distinct from _aula_ (lesson) and _currículo_ (curriculum). |

## Keep in English

Terms below diverge from `../pt/glossary.md` or exist only for European Portuguese. These
stay in English in prose.

| Term | Portuguese gloss (on `<define>`) | Notes |
|------|----------------------------------|-------|
| framework | _estrutura de trabalho_ | Explain where the source `<define>`s it, then use `framework` freely. |
| CLI (the concept) | interface de linha de comandos | Explain CLI as _interface de linha de comandos_ (plural "comandos") where the source `<define>`s it. Diverges from pt-BR's singular "comando". |

## Jiki physical metaphors

Terms below diverge from `../pt/glossary.md` or exist only for European Portuguese.

| English metaphor | Portuguese rendering | Notes |
|-----------------|---------------------|-------|
| chain (array metaphor) | corrente | Physical chain of links; links = _elos_. Keep the context physical to avoid collision with "cadeia" (used for _cadeia de caracteres_, the string gloss). |
| machine (function metaphor) | máquina | |
| shelves (storage) | prateleiras | The shelves where variables and functions are stored. Singular _prateleira_ for Jiki's one shelf of machines. |
| board / whiteboard | quadro | **One object, one word.** Always _quadro_. Never _quadro branco_ or _painel_. |
| warehouse (Jiki's warehouse) | armazém | Where Jiki hangs out and keeps his shelf of machines. |
| crank (machine crank) | manivela | The handle Jiki turns to power a machine up. Verb phrase: _rodar a manivela_. |

## Brackets

Default to plain **parênteses**; see `../pt/glossary.md` § Brackets for the shared `()`
glyph word. When a specific bracket type matters, name it and show the glyph immediately
after; for `()` itself, add _parênteses curvos_ + glyph only when disambiguating (pt-BR
uses "parênteses redondos" instead). This locale's `[]`, `{}`, `<>` renderings diverge from
pt-BR's and are given below.

| Glyph | Portuguese | Notes |
|-------|-----------|-------|
| `[]` | parênteses retos | Diverges from pt-BR's "colchetes". |
| `{}` | chavetas | Diverges from pt-BR's "chaves". |
| `<>` | sinais de menor e maior | Diverges from pt-BR's "sinais de maior e menor" (reversed order). |

Example: _para chamar uma função, escreve o nome dela seguido de parênteses de abertura e
fecho (`()`)._

---

## Decision log

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, `board / whiteboard`, and, as a principle, every row.

Three decisions came out of that pass that bind European Portuguese:

- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. **European Portuguese changed**:
  earlier translation work had deliberately avoided _intérprete_ because it "reads as a
  human interpreter", and that reasoning inverted once Jiki is understood as a character
  whose job is interpreting: a human interpreter is exactly what the word needs to name.
  The row now reads **intérprete**, and rules out _interpretador_, which names interpreter
  software and cannot describe a character.
- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have.
  European Portuguese merged both onto **quadro**, rejecting _quadro branco_ as
  over-specific (it split one metaphor into two words) and _painel_ as a control panel or a
  signboard, not something you write on.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: European Portuguese glossary filled out and a guide contradiction fixed

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**Rows added** for the terms the using-functions concept page needed: `interpreter`,
`instruction (given to Jiki)`, `mental model`, `(programming) language`, `brackets (the two
after a function name)`, `course`, and the metaphor rows `board / whiteboard`, `warehouse`,
`crank`. None of these change an existing decision; they fill gaps the page hit.

**One guide contradiction fixed.** The formality section stated that the `tu` form takes
"escreves" and not "escreve" with no qualification, while the guide's own worked examples
correctly used the bare `escreve` as a tu-imperative ("Escreve o nome da função"). Since the
tu-imperative of most verbs is spelled identically to the `você` present indicative, an
unqualified "always escreves" rule would have told a translator to write the wrong form in
every imperative sentence: a live mistranslation risk, not just a wording nit. The
formality section now scopes "escreves (not escreve)" to the indicative, and adds a
separate bullet ("Watch the imperative, which looks like the `você` indicative") covering
the imperative case explicitly.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`interpreter`, `board / whiteboard`) is not repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| tech / tech industry | More restrained register than pt-BR's "mercado de tech". |
| developer | The natural European Portuguese equivalent; `desenvolvedor` leans Brazilian. |

#### Values & data types

| Term | Why |
|------|-----|
| float / decimal | European Portuguese says "vírgula flutuante" (decimal comma); Brazilian says "ponto flutuante" (decimal point). |

#### Functions & control flow

| Term | Why |
|------|-----|
| to return (a value) | European Portuguese idiom, confirmed against Univ. Évora course material ("Devolve o valor..."). |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| mental model | The standard Portuguese phrase; it reads naturally in beginner prose. |
| loop | Source: Univ. Évora, FEUP course descriptions. |

#### Keep in English

| Term | Why |
|------|-----|
| framework | The native term is understood but rarely forced in practice, so European Portuguese keeps the English word in running prose after a single gloss; diverges from pt-BR, which glosses simply as `framework`. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| chain | pt-BR's equivalent entry warns of a different collision risk, with electric current; both renderings are valid for their own locale. |
| machine | Direct, concrete word; not currently used in pt-BR material. |
| warehouse | Ordinary word for a storage building. |
