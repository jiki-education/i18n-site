---
lang: "pt-BR"
name: "Brazilian Portuguese"
family: "pt"
stage: "refining"
governance_sha: "e4d40de"
content_version: "244d50dbd1b7"
published_at: "2026-08-03"
term_count: 79
category_id: 74
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
| true / false | verdadeiro / falso | pt | Lowercase in prose. **Concept sense only**: use _verdadeiro / falso_ where the words describe whether something is the case ("se a condição for verdadeira"). Where **true** or **false** names the literal value a function returns or a comparison evaluates to, it is a code token and stays English, whether it is written in code font (`true`) or bolded in a function description (**true**). Pick by which of the two the sentence is doing, not by formatting alone. |

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
| tech / tech industry | mercado de tech | pt-BR | "tech" kept as-is; "mercado de tech" for "tech industry" in the broad/generic sense. |
| tech industry (software/programming jobs specifically) | mercado de TI | pt-BR | Use when the context is specifically the software/programming job market, not "mercado de tech". "TI" = "tecnologia da informação". |
| developer | desenvolvedor | pt-BR | Use gender-neutral rephrasing where practical; see guide § Gender-neutral phrasing. |
| welcome (greeting / interjection) | Bem-vindo | pt-BR | Never `Boas-vindas` as a standalone greeting: it is a noun and only works inside a construction like "damos as boas-vindas a você". Masculine fallback per guide § Gender-neutral phrasing, or recast to avoid the greeting entirely ("Vamos ao seu primeiro exercício!"). |

## Localize (use the Portuguese term)

Terms below diverge from `../pt/glossary.md` or exist only for Brazilian Portuguese. Same
column structure as the family file.

### Values & data types

| English | Portuguese | Use (pt-BR/en) | Notes |
|---------|------------|-----------------|-------|
| character | caractere | pt-BR | Singular is `caractere` (not `caracter`). Diverges from pt-pt's `caráter`/`carateres`. |
| float / decimal | número de ponto flutuante | pt-BR | Or _decimal_ when the floating-point nature does not matter. Diverges from pt-pt's "vírgula flutuante". |
| dictionary | dicionário | pt-BR | _um dicionário_; pairs with `key`/`value` below. |
| key (in a dictionary) | chave | pt-BR | _a chave_, plural _as chaves_. **Unconfirmed draft.** Deliberately locale-only: `{}` is also _chaves_ in pt-BR (see § Brackets), so where both senses appear near each other, disambiguate (_a chave do dicionário_ vs _a chave de fechamento_) rather than changing either word. pt-pt has no such collision (`{}` is _chavetas_ there), so this row must not be moved to `../pt/glossary.md`. |
| value (in a dictionary) | valor | pt-BR | _o valor associado à chave_. **Unconfirmed draft.** Pairs with `key` above; keep the same pair of words throughout a page. |
| data structure | estrutura de dados | pt-BR | **Unconfirmed draft.** Feminine: _uma estrutura de dados_, _essas estruturas de dados_. |

### Functions & control flow

| English | Portuguese | Use (pt-BR/en) | Notes |
|---------|------------|-----------------|-------|
| to return (a value) | retornar | pt-BR | "A função retorna um valor." Diverges from pt-pt's "devolver". |
| return value | valor de retorno | pt-BR | Follows the verb `retornar` above. |
| input (one a function declares) | entrada | pt-BR | Use only where the English word is **input** and it names one of the inputs a function declares or expects ("give it four inputs: `left`, `top`, `radius`, `color`"; "an extra input where you specified the color"). Feminine: _uma entrada extra_, _as quatro entradas_. Never _fenda_, which translates the English **slot** only (see `../pt/glossary.md` § Jiki physical metaphors): pick by the English word in front of you, not by what the sentence is about, and where one paragraph uses both English words, use both renderings. |
| input (a value passed in at a call) | valor de entrada | pt-BR | Use only where the English word is **input** and it names the value written at one position of a call ("for the fifth input, we write `"blue"`"). Masculine, so agreement follows: _o quinto valor de entrada_. Bare _entrada_ is also natural here once context is set; _valor de entrada_ is the default where the sentence needs to name the value itself. Never _fenda_, on the same distinction as the row above. |
| condition is true / false | a condição é verdadeira / falsa | pt-BR | Prose form. After _se_ or _quando_ the verb goes to the future subjunctive: _quando a condição for verdadeira_. The code literals `true`/`false` stay English (see `../pt/glossary.md`). |
| else clause | cláusula `else` | pt-BR | _podemos colocar uma cláusula `else` depois da chave de fechamento_. Keep `else` in backticks (real keyword). **Unconfirmed draft.** |
| branch (of a conditional) | bloco | pt-BR | The chunk of code one arm of a conditional runs: _o Jiki roda esse bloco quando a condição é verdadeira_. **Unconfirmed draft, low confidence**: _bloco_ describes the code, not the fork; where the source is about the fork itself, the road-fork metaphor (_bifurcação_) reads better. Native-speaker input wanted. |
| brackets (the two after a function name) | parênteses | pt-BR | The `()` pair written after a function name to call it: _escreva o nome dela e depois os parênteses_. Always `parênteses`, never `colchetes` (which is `[]`). See § Brackets below for the glyph names. |

### Loops, state & program flow

| English | Portuguese | Use (pt-BR/en) | Notes |
|---------|------------|-----------------|-------|
| interpreter | intérprete | pt-BR | Use for the person doing the interpreting, including Jiki himself ("o trabalho dele é interpretar o código"). Never `interpretador`, which names interpreter *software*, not a person. Confirmed by a native speaker (oxe-b) on the pt-BR glossary thread; do not revisit. |
| instruction (given to Jiki) | instrução | pt-BR | Everyday word: _dar as instruções certas ao intérprete_. Shares the word with `statement (executable)` in `../pt/glossary.md`; this is intended, not a collision, since a statement is an instruction. |
| mental model | modelo mental | pt-BR | _é um modelo mental poderoso_. |
| (programming) language | linguagem (de programação) | pt-BR | `linguagem` alone once context is set; `linguagem de programação` on introduction. Never `língua` (natural languages only). |
| iteration | iteração | pt-BR | Verb: _iterar_, taking **sobre**: _iterar sobre um array_, _iteramos sobre strings_. Never _iterar por_. "passar por cada elemento" also natural. |
| to run / execute (code) | rodar / executar | pt-BR | `rodar` in warm/casual register; `executar` in formal or procedural steps. Diverges from pt-pt, where "rodar" is not natural usage. |
| loop | laço | pt-BR | `for`/`while` keywords stay English. Diverges from pt-pt's "ciclo". |
| for loop | laço `for` | pt-BR | Keep `for` in backticks (real keyword) + _laço_. |
| while loop | laço `while` | pt-BR | As above. |
| scope | escopo | pt-BR | Diverges from pt-pt's "âmbito". |
| comment (code comment) | comentário | pt-BR | The `//` line a learner writes as a private note; Jiki ignores it and moves to the next line. **Unconfirmed:** added for the function-inputs concept page, not yet used in a real translated file; likely identical in pt-pt, so a candidate to move to `../pt/glossary.md` once confirmed. |

### Tooling & engineering

| English | Portuguese | Use (pt-BR/en) | Notes |
|---------|------------|-----------------|-------|
| checksum | soma de verificação | pt-BR | **Unconfirmed draft.** Feminine: _a soma de verificação_. Used for the Luhn-style check-digit idea; keep the full phrase rather than the English _checksum_ in beginner-facing prose. |
| standard library (stdlib) | biblioteca padrão | pt-BR | **Unconfirmed draft.** Never abbreviated in prose; _stdlib_ is not used. |
| deploy (verb: to deploy) | publicar | pt-BR | "Publique o código" for go-live (subjunctive imperative, matches `você` formality). "Fazer deploy" is natural in dev prose; prefer `publicar` for beginner-facing text. |

### Platform & curriculum vocabulary

| English | Portuguese | Use (pt-BR/en) | Notes |
|---------|------------|-----------------|-------|
| course | curso | pt-BR | The whole Jiki course: _neste curso, o seu intérprete é o Jiki_. Keep distinct from `lição` (lesson). |
| cell (grid square, e.g. maze exercises) | casa | pt-BR | "Move the character forward one cell" → "avance uma casa" (like a square on a board game), not "uma célula", which reads as a biology/spreadsheet term and feels unnatural here. |
| character / figure (the walker in maze exercises) | bonequinho | pt-BR | The little figure the learner moves around the grid. Confirmed as natural by a native speaker (sorrizo) on https://forum.jiki.io/t/812/5; already in use across the maze exercises. |
| bouncer (the door-staff character) | segurança | pt-BR | _o segurança da balada_. Masculine despite the `-a` ending. Chosen over _porteiro_ (which reads as a residential doorman rather than club door staff). **Unconfirmed draft.** |
| to turn (someone) away | barrar | pt-BR | _barrar a pessoa na porta_. **Unconfirmed draft.** _recusar a entrada_ is the natural alternative where the sentence needs an object phrase rather than a single verb; keep one of the two consistently within a page. |
| dress code | código de vestimenta | pt-BR | **Unconfirmed draft.** The rule about what may be worn, as posted at a club door. |
| smart (of clothing, in a dress code) | roupa elegante | pt-BR | **Unconfirmed draft.** English "smart" here means dressed-up, never _inteligente_. Adjectivally: _elegante_. |
| Sensing (exercise function category label) | Percepção | pt-BR | **Unconfirmed draft.** The category heading grouping the functions that let the character sense its surroundings, in exercise message catalogs. |
| digital root | raiz digital | pt-BR | **Unconfirmed draft.** The repeated-digit-sum result; keep the mathematical calque, do not leave it in English. |

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
| board / whiteboard | quadro | **One word for one object.** Both the board the learner writes instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on. Never a second word such as `quadro branco` or `lousa` for the same object. Confirmed by a native speaker (oxe-b) on the pt-BR glossary thread; do not revisit. |
| return chute | boca da máquina | The opening a value comes out of, as on a vending machine or an ATM. Replaces the earlier draft, _calha de saída_, which must not be used. Contracts normally: _na boca da máquina_, _da boca da máquina_. Where the machine is already named in the same sentence, _a boca_ alone is fine. |

## Provisional terms (🟡)

These terms have been decided but not yet used in a real translated file. Confirm the choice on
first actual use and move to the sections above once confirmed.

| English | Portuguese | Notes |
|---------|------------|-------|
| loop body | corpo do laço | |
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

### 2026-08-03: _iterar_ takes _sobre_, not _por_

**Decided by:** native speaker (oxe-b), forum post https://forum.jiki.io/t/1109/1, reviewing
the Arrays concept page. **Status: confirmed.**
**Terms affected:** `iteration`.

oxe-b flagged that "iterate through" should be _iterar sobre_. The `iteration` row was an
unconfirmed draft: it gave the verb _iterar_ but said nothing about which preposition follows
it, and the Arrays translation had reached for _iterar por_. _Iterar sobre_ is the standard
collocation in Brazilian technical writing, so the row's Notes now name it and rule out
_iterar por_. The rendering _iteração_ itself does not move; only the usage note is new.

The same post's other two suggestions were phrasing, not terms, and are recorded in
`languages/pt-BR/concept/arrays.md` instead.

### 2026-08-03: "input" splits away from _fenda_, and `intérprete` + `quadro` are confirmed

**Decided by:** native speaker (oxe-b), forum post https://forum.jiki.io/t/288/15, answering
our question at https://forum.jiki.io/t/288/14. **Status: confirmed.**
**Terms affected:** `input (one a function declares)`, `input (a value passed in at a call)`,
`interpreter`, `board / whiteboard`, and, by exclusion, the family row `input slot`.

We asked whether keeping _fenda_ for the physical vending-machine slot and using
_entrada_ / _valor de entrada_ for the ordinary "a value passed in" sense would read cleanly
as a split, or whether the two side by side would confuse a reader. oxe-b: "'Entrada' is a
good default word. 'Input value' is usually translated as 'valor de entrada' or just
'entrada'." So the split stands, and this resolves the conflict the 2026-08-02 catch-up pass
flagged below (the `strings` worker had merged both senses onto _fenda_, while the `two-fer`
and `weather-symbols` workers had proposed _entrada_ for the ordinary sense).

**This is not a correction to `input slot`.** The English source uses two words in the same
passage and uses them deliberately: **slot** for the physical opening a coin or a piece of
paper goes into ("put some coins in the first four slots"), **input** for the thing you
supply ("an extra input", "the fifth input"). _Fenda_ stays the rendering of the first, and
is confirmed family-wide. What was wrong was reaching for the metaphor word where the English
had not used the metaphor, so the new rows are keyed on the **English word**, not on what the
sentence is about. A future pass that finds them redundant is reading the sense, which is
exactly the mistake that produced _fenda_.

**Two `input` rows, not one**, mirroring the split European Portuguese settled independently
on the same day: _entrada_ where the English names an input a function declares or offers,
_valor de entrada_ where it names the value written at one position of a call. The two rows
differ from pt-pt's (which uses _parâmetro de entrada_ for the first), so both stay in this
locale file rather than moving up to `../pt/glossary.md`.

Applied to `curriculum/src/concepts/strings/pt-BR.md`: "uma fenda extra" → "uma entrada
extra" and "na quinta fenda" → "no quinto valor de entrada". The two genuine **slot**
sentences in the same page (the coins in the first four slots, the paper in the fifth slot,
and the image `alt` text) keep _fenda_ / _fendas_, as does "a fenda de uma máquina" on the
Arrays page, which renders the English "an input slot of a machine". The JavaScript
interpreter's pt-BR catalog was checked and already draws the distinction correctly
(`slotCount` → _fenda(s) de entrada_, `inputCount` → _entrada(s)_), so nothing was changed
there.

**Two existing rows were confirmed in the same post**, both of which had been our own calls
flagged as wanting a second opinion:

- **`interpreter` → intérprete** is right, and _interpretador_ is not. This was reversed once
  before (see the 2026-07-30 owner-decisions entry below), so the confirmation matters.
- **`board / whiteboard` → quadro** is clean for the whiteboard/instruction-board sense.

Neither rendering moves; both rows are now protected, and their Notes say so.

**Forward guidance, no glossary row yet: a chess/checkers-style board is _tabuleiro_, not
_quadro_.** oxe-b added that if a grid-of-squares board ever appears, _tabuleiro_ is the word
for it, and _quadro_ would be wrong there. No Jiki content needs it today, so there is
nothing for a translator to act on and no row was added; this note is here so that the first
pass that does hit one reaches for _tabuleiro_ and does not widen _quadro_ to cover it. It
pairs with the existing `cell (grid square)` → _casa_ row, which already borrows the
board-game frame.

### 2026-08-03: `return chute` corrected to `boca da máquina`, and the row left the family file

**Decided by:** native speakers (alanprofeta, oxe-b), forum posts
https://forum.jiki.io/t/288/10 and https://forum.jiki.io/t/288/12.
**Status: confirmed.**
**Terms affected:** `return chute`.

The previous rendering, `calha de saída`, was an unconfirmed draft carrying its own
"low-to-medium confidence; flag for native-speaker confirmation on first real use" warning.
alanprofeta read it in isolation and said it struck him as very odd, but had no alternative
to offer. We replied with the metaphor's actual context (Jiki's machine is a vending
machine: you post a value into the input slot at the top, and the return value comes out of
the opening at the bottom) and asked for a suggestion.

oxe-b answered with two candidates:

- **`bandeja de retirada`**, the more formal, manual-style term (literally a "collection
  tray").
- **`boca da máquina`**, the colloquial term Brazilians actually use for the opening on a
  vending machine or an ATM.

`boca da máquina` is the choice, on oxe-b's own stated preference for exactly this context.
It also fits the two rules that were already going to decide it: `global/voice.md`'s
"default to the ordinary, common word", and the requirement that the metaphor keep teaching.
`bandeja de retirada` is accurate but reads as signage rather than as something Jiki would
say, and it names a tray, which pictures a value resting in a receptacle rather than being
pushed out of the machine. `boca` is what a Brazilian reader already calls that opening, and
it binds the chute to the machine that owns it, which is the whole point of the metaphor.

It also sits well beside the confirmed `input slot → fenda`: `fenda` is the narrow slot a
value goes *in*, `boca` is the wide opening it comes *out* of, and the two words are not
confusable with each other.

**The row moved out of `../pt/glossary.md` into the two locale glossaries.** `boca da
máquina` is a Brazilian colloquialism, and no European Portuguese speaker has been asked
about it, so promoting it family-wide would be assuming what the family rule
(`global/workflow.md`, "only move it up to the family file once it is confirmed identical
across every locale") says must be confirmed. pt-pt keeps `calha de saída` verbatim, warning
and all, now in `../pt-pt/glossary.md`; its effective glossary is unchanged, and its
translated content was not touched.

### 2026-08-02: Proposed terms from the Stage 2 batch 2 catch-up pass (unconfirmed drafts)

**Decided by:** agent (proposals only, nothing written to `glossary.md`). The catch-up pass
translating `two-fer`, `strings`, `digital-clock`, `arrays`, `weather-symbols`.

**The one real conflict, needs a native-speaker ruling.** `languages/pt/glossary.md`
(family) already has a human-confirmed row: `input slot → fenda`. The `strings` worker
extended `fenda` to cover ordinary "input" too, merging the source's "an extra input" and
"the fifth slot" onto the one metaphor word. The `two-fer` and `weather-symbols` workers
went the other way, proposing `entrada` for ordinary "input" and deliberately keeping it
distinct from the `fenda` metaphor. Both can't stand — recommend keeping `fenda` for the
physical-slot metaphor and adding `entrada` for the ordinary "value passed in" sense, with a
Notes line on each pointing at the other, but this is a native-speaker call and `strings` is
already published with the merged reading.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| input (ordinary sense, distinct from the fenda metaphor — see conflict above) | entrada | | medium |
| compound data type | tipo de dado composto | Core teaching term, recurs on later compound-type pages. Pairs with "tipo de dado". | high |
| template string | kept English, no gloss | Brazilian dev writing uses the English term; alternatives (_literal de modelo_, _string de modelo_) exist, so this sets a precedent. | medium |
| display (the time) | mostrar | Chosen over _exibir_ for warmer register; other display-style exercises should match. | medium |
| meridiem | kept as-is / quoted | Source names it as a term of art; alternative is paraphrasing as "o indicador de am/pm". | medium |

**Note:** the `arrays` item's proposed delta was lost (its worker stopped responding across
three relay attempts) despite the page itself translating and publishing cleanly (stamped
`012da550948ba2ebcfaf953cd0906f3f`, first real use of "calha de saída" flagged for the
native-speaker confirmation the family glossary asks for). Worth a `tidy` re-ask later to
recover whatever term choices it made. Possible `global/terms.md` gap: "template string".

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

### 2026-07-31: `tech industry` split into a software/programming-specific sense from forum feedback

**Decided by:** native speaker (oxe-b), forum post https://forum.jiki.io/t/288/3.
**Status: confirmed.**
**Terms affected:** `tech / tech industry`.

Reviewing the pt-BR glossary, oxe-b noted that "mercado de tech" carries a job/business
sense that works for "tech industry" broadly, but when the context is specifically
software/programming jobs, "mercado de TI" ("TI" = "tecnologia da informação", a literal
translation of "information technology") is more natural and common. They also noted
"setor de tecnologia" as an option for the broad/generic sense, but the existing "mercado
de tech" row already covers that case, so only the specific software/programming-jobs
sense was added as a new row rather than replacing the existing one.

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

### 2026-08-01: `welcome` moved from the guide into the glossary, and the guide pruned

**Decided by:** native speaker (oxe-b), forum posts https://forum.jiki.io/t/812/2 and
https://forum.jiki.io/t/288/7, re-recorded here. **Status: confirmed** (the decision is
unchanged; only the file it lives in changed).
**Terms affected:** `welcome (greeting / interjection)`.

Reviewing the published `pt-BR` translation of `Solve the Maze`, oxe-b flagged "Welcome"
rendered as "Boas-vindas". `Boas-vindas` is a **noun**, something you wish or celebrate, and
only works inside a construction like "damos as boas-vindas a você" or "uma festa de
boas-vindas"; `Bem-vindo` is what directly addresses a person and is the right form for the
standalone greeting. That decision was written into `guide.md` § "Gender-neutral phrasing"
at the time, but a term mapping is a glossary row, not guide prose, so it now sits in
`glossary.md` § "Core decisions" with the instruction intact. The guide keeps only the
behavioural residue that is not about this one word: do not use a noun as an interjection to
dodge gender agreement, recast the sentence instead. Nothing was reworded away from what
oxe-b decided.

**The rest of the guide was pruned in the same pass**, with the removed reasoning recorded
here:

- **Audience research.** The guide described the Brazilian ed-tech market as large and
  diverse, shaped by platforms like Rocketseat and Curso em Vídeo, which set a warm, direct,
  encouraging, informal tone, and noted that learners span a wide range of educational
  backgrounds so one should write as if the reader is intelligent but has never typed a line
  of code. That is the research behind the register, and every instruction in it is already
  stated in `global/voice.md` (§ Audience, § Voice and tone). Only "Readers are in Brazil."
  survives in the guide.
- **Formality rationale.** "It is the standard second-person address in Brazilian Portuguese
  for online learning and informal writing" justified `você`; the rule itself is unchanged.
- **Duplicated rules cut, not weakened.** The `## Grammar` section restated "`você` +
  third-person conjugation", which § Formality already required; the two are merged into the
  Formality bullet, keeping the note that mixing them is the most common translator error.
  Its "Prepositions contract with articles" bullet and its "Contractions are mandatory"
  bullet were the same rule twice, and both are now the single family-level bullet in
  `../pt/guide.md` § Grammar (see `../pt/glossary-notes.md`). The § "Common EN→pt-BR
  pitfalls" tail restated the family guide's null-subject rule and its
  break-up-long-subordination rule; only its two genuinely new items ("just" → só/apenas,
  "make sure" → certifique-se de que) survive, folded into § "Style notes (pt-BR specifics)"
  as calque traps.
- **A false attribution fixed.** § "Information structure and emphasis" opened by comparing
  Portuguese word order to Hungarian's and credited "given information first, new information
  last" to `global/voice.md`, which does not state it. The comparison is gone and the
  principle is now stated plainly as this guide's own rule, which is what it always was. No
  instruction changed.

### 2026-08-04: Stage 2 batch-3 delta (12 draft rows), and four provisional terms promoted

**Decided by:** nobody yet, apart from `bonequinho` (see below). **Status: unconfirmed
drafts**, added from the ten-item Stage 2 batch (`else-if`, `for-loops`, `else`,
`while-loops`, `dictionaries`, `maze-turn-around`, `luhn`, `digital-root`, `word-count`,
`bouncer-dress-code`). Native-speaker confirmation is wanted on all of them.
**Terms affected:** `bouncer`, `to turn (someone) away`, `character / figure`, `checksum`,
`digital root`, `standard library`, `dress code`, `smart (of clothing)`, `Sensing`, `key`,
`value`, `data structure`, `else clause`, `branch (of a conditional)`, plus the four
promotions listed at the end.

**All of these went into the locale file, not `../pt/glossary.md`.** Per the family rule a
term defaults to the locale file and only moves up once it is confirmed identical in both
locales, and several of these (`checksum`, `estrutura de dados`, `biblioteca padrão`) are
plausibly identical in pt-pt but have not been checked there. Whoever confirms them can move
them up later; guessing now would have written unagreed rows that bind pt-pt.

`key` → _chave_ is a deliberate exception that must **never** move to the family file. In
pt-BR `{}` is also _chaves_, so dictionary keys and closing braces share a word, and the row
carries the disambiguation instruction for that. pt-pt has no collision (`{}` is _chavetas_
there), so its reasoning for the same rendering is a different reasoning, and one shared row
could not state both. The same collision was already flagged independently by the
JavaScript interpreter-catalog pass.

`bouncer` → _segurança_ was proposed by two workers independently, over _porteiro_, which
reads as a residential doorman rather than club door staff. It is masculine despite ending
in `-a`. A related pt-BR delta from an earlier pass had proposed the same word at medium
confidence, so this is the second time it has come up unprompted.

`to turn away` → _barrar_ is the single-verb rendering; `else`'s translation reached for
_recusar a entrada_ in the same sentence position. Both read naturally, so the row asks for
consistency within a page rather than ruling one out.

`branch (of a conditional)` → _bloco_ is the weakest of the set and is marked low
confidence in the row. _Bloco_ names the code a branch runs, not the fork itself, and where
the English is about the fork the translations reached for the road-fork metaphor
(_bifurcação_) instead. This one genuinely needs a native speaker.

`character / figure` → _bonequinho_ is **not** a draft: sorrizo confirmed it as natural at
https://forum.jiki.io/t/812/5 while flagging a different word on the same page. It was in de
facto use across the maze exercises without ever being written down, which is exactly the
state that lets a later pass quietly replace it, so it now has a row.

**Four provisional terms promoted out of § "Provisional terms".** That section's own rule is
to confirm on first actual use, and this batch is that first use: `for loop` → _laço `for`_
(`for-loops`), `while loop` → _laço `while`_ (`while-loops`), `dictionary` → _dicionário_
(`dictionaries`), and `condition is true/false` → _a condição é verdadeira / falsa_ (`else`,
`else-if`, `while-loops`). Each read naturally in place and none was reworded to fit, so the
rendering each row already carried is what moved; nothing new was invented. The
true/false row gained one usage note that the translations demonstrated and the old row did
not state: after _se_ or _quando_ the verb takes the future subjunctive (_quando a condição
for verdadeira_). `loop body` → _corpo do laço_ stays provisional: it did not appear in
either loops page, so it still has no first use. `auth` stays provisional for the same
reason.

**Not changed, flagged instead:** the family row `true / false` → _verdadeiro / falso_ says
only "Lowercase in prose" and does not state that the code literals stay English. The
pt-BR `condition is true / false` row now says so for this locale. Adding it to the family
file was deliberately not done here: a family edit binds pt-pt and obliges republishing and
announcing on every sibling locale, and a pt-pt session was working in the same checkout at
the time. It is worth doing as its own family-level change.
