---
lang: "pt-PT"
name: "European Portuguese"
family: "pt"
stage: "reviewing"
governance_sha: "a347f3f"
content_version: "0c3a41ac1896"
published_at: "2026-08-22"
term_count: 70
category_id: 73
forum_topic_id: 341
video_player_forum_topic_id: 775
---

# Portuguese (pt) family glossary

The agreed term list shared by every Portuguese locale: Brazilian Portuguese (`pt-BR`) and
European Portuguese (`pt-PT`). Every term here has been agreed and is binding for both
locales: use it exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file;
it surfaces new terms it had to decide on as proposals in its output (a "glossary delta").
Those proposals are discussed, and only once agreed are they written in (by a human or by
Claude). So everything in this file is, by definition, already agreed.

A term lives in **exactly one** glossary file: this family file, or one locale's own
`glossary.md`, **never both**. A term defaults to the locale file; it only moves here once
its rendering, Use column, and Notes are confirmed identical across `pt-BR` and
`pt-PT`, not merely assumed to be. When reading a locale's effective glossary, it is this
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
| if statement | condicional | pt | Plural: _condicionais_. Corroborated for pt-PT via Univ. Évora course material. |
| statement (executable) | instrução | pt | The imperative sense: a line of code that does something and gets executed. Corroborated for pt-PT via Univ. Évora course material. |
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
| string | "chain of characters", spelled with the locale's own `character` plural | Exception: in the string concept itself, explain the term where the source defines it, then use _string_ throughout. Never hardcode one locale's spelling here; see each locale glossary's `character` row. |
| array | _vetor_ | Exception: in the array concept itself, explain _vetor_ where the source defines it, then use _array_. Confirmed for pt-PT as the dominant academic usage (Univ. Évora keeps `array` in prose). |
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

# European Portuguese (pt-PT) glossary

The agreed term list for what is distinct about European Portuguese. Read
`../pt/glossary.md` first for the terms shared with Brazilian Portuguese (`pt-BR`); this
file holds only the terms that diverge between the two locales, plus terms that exist only
for European Portuguese. A term lives in **exactly one** glossary file, this one or the
family's, **never both**. A locale's effective glossary is `../pt/glossary.md`'s rows plus
this file's rows, read together. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

Each term's "Use (pt-PT/en)" column records which language is primary in prose: `pt-PT` when
Portuguese is primary, `en` when English is kept primary; see `global/voice.md` §
"Direction comes from the glossary".

## Core decisions

| English | Portuguese | Use (pt-PT/en) | Notes |
|---------|------------|-----------------|-------|
| programming / coding | **programação** | pt-PT | Use `programação` consistently. |
| tech / tech industry | setor tecnológico | pt-PT | Loanword "tech" alone reads too casual for European Portuguese written prose; use `setor tecnológico`. |
| developer | programador(a) | pt-PT | Not `desenvolvedor`, which is a Brazilian-leaning form. |

## Localize (use the Portuguese term)

Terms below diverge from `../pt/glossary.md` or exist only for European Portuguese.

### Values & data types

| English | Portuguese | Use (pt-PT/en) | Notes |
|---------|------------|-----------------|-------|
| character | caráter (pl. carateres) | pt-PT | Post-1990 spelling: European Portuguese silences the `c`, giving "carateres" (Brazilian keeps it: "caractere/caracteres"). |
| float / decimal | número de vírgula flutuante | pt-PT | Use "decimal" alone when the floating-point nature does not matter. |
| digit | algarismo | pt-PT | The individual symbol inside a number ("soma os seus algarismos", "um número de três algarismos"). Not _dígito_, which reads technical next to the school-register _algarismo_. |
| dictionary | dicionário | pt-PT | The data structure. Masculine: _um dicionário_, _o dicionário_. |
| key (of a dictionary) | chave | pt-PT | The label on the left of a dictionary pair ("encontra a chave `name`"). Plural _chaves_. Safe in this locale because `{}` is _chavetas_ here (see § Brackets), so nothing collides; never assume the same for pt-BR. |
| apostrophe | apóstrofo | pt-PT | Plural _apóstrofos_. Never _apóstrofe_, which is the rhetorical figure, not the punctuation mark. |
| case-insensitive | não distinguir maiúsculas de minúsculas | pt-PT | Render as a verb phrase, not an adjective: _as palavras não distinguem maiúsculas de minúsculas_, _conta as palavras independentemente de serem maiúsculas ou minúsculas_. Case-sensitive is the same phrase without _não_. |

### Functions & control flow

| English | Portuguese | Use (pt-PT/en) | Notes |
|---------|------------|-----------------|-------|
| to return (a value) | devolver | pt-PT | "A função devolve um valor." Deliberately diverges from Brazilian `retornar`; never mix the two. |
| return value | valor devolvido | pt-PT | Follows the verb `devolver` above. |
| input (one a function declares) | parâmetro de entrada | pt-PT | Use only where the English word is **input** and it names one of the inputs a function declares or expects ("give it four inputs: `left`, `top`, `radius`, `color`"). Plural _parâmetros de entrada_. Never bare _entrada_. Never _fenda_, which translates the English **slot** only (see `../pt/glossary.md` § Jiki physical metaphors): pick between the three by the English word in front of you, not by what the sentence is about, and where one paragraph uses both English words, use both renderings. |
| input (a value passed in at a call) | valor de entrada | pt-PT | Use only where the English word is **input** and it names the value written at one position of a call ("for the fifth input, we write `"blue"`"). Masculine, so agreement follows: _um valor de entrada extra_, _o quinto valor de entrada_. Never bare _entrada_. Never _fenda_, on the same three-way distinction as the row above. |
| else clause | cláusula else | pt-PT | The keyword `else` stays English inside the phrase: _uma cláusula else_. |
| brackets (the two after a function name) | parênteses | pt-PT | The prose rendering of "those two brackets" written after a function name: _os parênteses_, or _dois parênteses_ on first mention. The glyph naming convention (and when to disambiguate `()` as _parênteses curvos_) is in § Brackets below. |

### Loops, state & program flow

| English | Portuguese | Use (pt-PT/en) | Notes |
|---------|------------|-----------------|-------|
| interpreter | intérprete | pt-PT | Never use _interpretador_, which names a piece of software, not a person. Plural: _intérpretes_. |
| instruction (given to Jiki) | instrução | pt-PT | Everyday register, not the legal/administrative sense of _instrução_. Plural _instruções_: "escrever instruções num quadro". |
| mental model | modelo mental | pt-PT | |
| (programming) language | linguagem (de programação) | pt-PT | Always _linguagem_, never the English borrowing. _Língua_ is for human languages; a programming language is a _linguagem_. Shorten to _linguagem_ once the context is established ("numa linguagem que o computador entende"). |
| iteration | iteração | pt-PT | Verb: _iterar_; "percorrer cada elemento" also natural. |
| to run / execute (code) | executar / correr | pt-PT | `correr` in warm/casual register ("experimenta correr este código"); `executar` in formal or procedural steps. Deliberately diverges from Brazilian "rodar", which is not natural European Portuguese usage. |
| loop | ciclo | pt-PT | Deliberately diverges from Brazilian `laço`. `for`/`while` keywords stay English. |
| scope | âmbito | pt-PT | Deliberately diverges from Brazilian `escopo`. |
| pass (one sweep over the data) | passagem | pt-PT | One run of an algorithm over its data: _numa única passagem_, _uma segunda passagem_. Never _passe_. |

### Tooling & engineering

| English | Portuguese | Use (pt-PT/en) | Notes |
|---------|------------|-----------------|-------|
| deploy (verb: to deploy) | publicar | pt-PT | "Publica o código" for go-live, beginner-facing (tu-imperative, matches `tu` formality). Avoid "fazer deploy" here, though it appears in professional dev prose. |

### Exercise vocabulary

Domain words the exercises are built on. Use the same rendering in the instructions and in
the exercise's message catalog (`locales/pt-PT/translation.json`), never one in each.

| English | Portuguese | Use (pt-PT/en) | Notes |
|---------|------------|-----------------|-------|
| bouncer | porteiro | pt-PT | The door supervisor of the `bouncer*` exercises. Feminine _porteira_ where the person is a woman. Not _segurança_, which names the security role rather than the person on the door. |
| venue (the bouncer's club) | espaço | pt-PT | The place the bouncer lets people into ("deixa a pessoa entrar no espaço"). Unrelated to the family's `input slot` (_fenda_): pick by the English word in front of you. |
| to turn away (a person) | mandar embora | pt-PT | "Manda a pessoa embora." The pronoun splits the phrase, so keep the verb and _embora_ agreeing with the object. |
| smart (attire) | elegante | pt-PT | _roupa elegante_ in the dress-code exercise. Keep distinct from **formal** (_formal_), which is a separate dress-code value in the same list. |
| dead end | beco sem saída | pt-PT | The maze's no-exit corridor. Plural _becos sem saída_. |
| checksum | soma de verificação | pt-PT | "a soma de verificação de Luhn". |
| Sensing (scenario category) | Deteção | pt-PT | The scenario-category label in exercise catalogs. Post-1990 European spelling, with no `c` (Brazilian keeps _Detecção_). |

### Platform & curriculum vocabulary

| English | Portuguese | Use (pt-PT/en) | Notes |
|---------|------------|-----------------|-------|
| course | curso | pt-PT | The whole Jiki course ("Neste curso, o teu intérprete é o Jiki"). Keep distinct from _aula_ (lesson) and _currículo_ (curriculum). |

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
| spiral notebook (dictionary metaphor) | bloco de notas de espiral | The notebook a dictionary is pictured as. One entry is a page: _uma página do bloco de notas_. Keep _de espiral_ on first mention, then _bloco de notas_ is enough. |
| shelves (storage) | prateleiras | The shelves where variables and functions are stored. Singular _prateleira_ for Jiki's one shelf of machines. |
| board / whiteboard | quadro | **One object, one word.** Always _quadro_. Never _quadro branco_ or _painel_. |
| warehouse (Jiki's warehouse) | armazém | Where Jiki hangs out and keeps his shelf of machines. |
| crank (machine crank) | manivela | The handle Jiki turns to power a machine up. Verb phrase: _rodar a manivela_. |
| return chute | calha de saída | A chute a value slides out of. Low-to-medium confidence; still awaiting European Portuguese native-speaker confirmation. Do not carry over pt-BR's _boca da máquina_, which is a Brazilian colloquialism. |

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

### 2026-08-22: the shared `string` gloss stops hardcoding the Brazilian spelling

**Decided by:** native speaker (rlsmota), forum topic 341 post 6, replying to the glossary
update in post 3097. **Terms affected:** the family row `string` in `../pt/glossary.md`;
this locale's `character` row is unchanged.

The family file's `string` row glossed the term as _cadeia de caracteres_ and repeated that
spelling in its Notes. `caracteres` is the Brazilian plural, and the family file binds
`pt-PT` as well as `pt-BR`, so the shared row was imposing one locale's spelling on both.
This was flagged as an open question in the 2026-08-02 entry below and put to the reviewer in
post 3097. The row now says "chain of characters" and points at each locale's own `character`
row for the spelling, so neither locale is hardcoded in the shared file.

**What the reviewer actually said about the spelling.** Post-agreement European Portuguese
accepts **both** _carateres_ and _caracteres_, the choice following how the speaker
pronounces the word, and rlsmota, who learned to write before the agreement, uses
_caracteres_ himself. He did not ask for a change. So this is not a ruling that _carateres_
is the only correct European form; the locale keeps _caráter (pl. carateres)_ as its single
convention for internal consistency, and pt-PT content was swept to match it. If a future
reviewer prefers _caracteres_, the `character` row is free to change: nothing here rules it
out as European Portuguese.

**Also confirmed in the same post, no change needed:** the `true / false` concept-versus-token
split reads right; `return chute` stays _calha de saída_ (the reviewer finds pt-BR's _boca da
máquina_ harder to understand in European Portuguese); `apóstrofo` is correct.

### 2026-08-05: Sixteen rows proposed from the website-copy translation pass (unconfirmed drafts)

**Decided by:** nobody. **Status: unconfirmed drafts**, proposed by the workers translating
website copy (`namespaces=codingExercise,seo,articles,blog,checkout`). **Terms affected:**
`password`, `sign in / log in`, `breakpoint`, `to throw (an error)`, `tooltip`, `achievement
(gamification)`, `dashboard`, `email`, `reset (password)`, `computer science`, `post (blog
post)`, `learner`, `feedback`, `roadmap`, `LLM-era`, `blog`.

No European Portuguese speaker has ruled on any of them. They are written down so the choices
made in this pass are visible and repeatable, not so they are treated as settled.

**`dashboard` → `painel` wants checking before it is agreed.** This locale's file already
rejects `painel` once, for a different term: the 2026-07-30 `board / whiteboard` decision
picked `quadro` and explicitly ruled out `painel` as reading like a control panel or a
signboard, not something you write on. That objection was about the whiteboard metaphor, not
about `dashboard`, and `painel` (control panel) is the ordinary Portuguese word for a
software dashboard, so the two uses are not necessarily in conflict. But the two words now
sit close enough in the same glossary that a native speaker should confirm `painel` reads
unambiguously as "dashboard" and never gets misread against the whiteboard metaphor.

**`learner` → `aluno`** is masculine-generic. Flag if a gender-neutral policy is wanted here;
this pass did not attempt one.

**`post` (blog post) vs `article`.** The pass distinguished `post → publicação` from
`article → artigo`, matching the English source's own distinction between the two content
types rather than collapsing them onto one Portuguese word.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| password | palavra-passe | Standard European Portuguese; Brazilian Portuguese says "senha". | high |
| sign in / log in | iniciar sessão | Standard European Portuguese; Brazilian Portuguese says "fazer login" / "entrar". | high |
| breakpoint | ponto de paragem | | medium |
| to throw (an error) | lançar (um erro) | | medium |
| tooltip | dica | | medium |
| achievement (gamification) | conquista | | medium |
| dashboard | painel | Check against the `board / whiteboard` → `quadro` decision, which rejected `painel` for a different metaphor; see note above. | medium |
| email | email | Kept as the ordinary word, not glossed. | high |
| reset (password) | repor | | medium |
| computer science | informática | | medium |
| post (blog post) | publicação | Distinguished from `article → artigo`. | medium |
| learner | aluno | Masculine-generic; flag if a gender-neutral policy is wanted. | medium |
| feedback | kept English | | medium |
| roadmap | kept English ("Roadmap") | | low |
| LLM-era | era da inteligência artificial | Loses the LLM specificity in favour of the broader "AI" framing. | low |
| blog | kept English | Alternative: "blogue". | medium |

### 2026-08-04: fifteen rows added from the Stage 2 batch-3 translation pass

**Decided by:** nobody. **Status: unconfirmed drafts**, proposed by the translation workers
that produced the ten batch-3 items (`else-if`, `for-loops`, `else`, `while-loops`,
`dictionaries`, `maze-turn-around`, `luhn`, `digital-root`, `word-count`,
`bouncer-dress-code`). **Terms affected:** `digit`, `dictionary`, `key (of a dictionary)`,
`apostrophe`, `case-insensitive`, `else clause`, `pass (one sweep over the data)`,
`bouncer`, `venue (the bouncer's club)`, `to turn away (a person)`, `smart (attire)`,
`dead end`, `checksum`, `Sensing (scenario category)`, `spiral notebook`.

No European Portuguese speaker has ruled on any of them. They are written down so that the
next pass reuses the wording already shipped in those ten items rather than drifting, and
each rendering here was read back out of the translated files, not invented for the
glossary. Every one of them is open for a native speaker to change.

**All fifteen go in this locale file, not `../pt/glossary.md`.** A term is only promoted to
the family file once it is confirmed identical in both locales, and none of these has been
checked against Brazilian usage at all. `key → chave` is the clearest case of why that
default matters: it is unambiguous here because this locale calls `{}` _chavetas_, but pt-BR
calls `{}` _chaves_, so the same row in the family file would collide with the bracket
naming on the Brazilian side.

**Confidence, as the workers reported it.** `chave`, `dicionário` and `algarismo` are
straightforward. The exercise-domain words (`porteiro`, `espaço`, `mandar embora`,
`elegante`, `beco sem saída`, `soma de verificação`, `Deteção`, `cláusula else`, `bloco de
notas de espiral`, `passagem`, and the `case-insensitive` phrasing) are ordinary Portuguese
that reads correctly but has alternatives worth a speaker's opinion. `apóstrofo` is the
weakest: it is the standard name for the punctuation mark, and the row exists mainly to rule
out _apóstrofe_, the rhetorical figure, which is the mistake worth guarding against.

**Two of the workers' labels were corrected against the actual text.** What one worker
proposed as `slot → espaço` is the English word **venue** in `bouncer-dress-code` ("working
at a venue with a strict dress code"), not **slot**; filing it as `slot` would have
contradicted the family's confirmed `input slot → fenda`, which Brazilian native speakers
settled, so the row is written as `venue`. And `case-insensitive` is recorded as the verb
phrase the files actually use (_não distinguem maiúsculas de minúsculas_) rather than as an
adjective, because European Portuguese has no natural adjective for it.

### 2026-08-03: `return chute` inherited down from the family file, unchanged and still unconfirmed

**Decided by:** nobody, for European Portuguese. **Status: unconfirmed draft**, exactly as it
was before. **Terms affected:** `return chute`.

`return chute → calha de saída` used to live in `../pt/glossary.md` as a shared row. Brazilian
native speakers rejected that rendering for their locale and picked `boca da máquina` instead
(see `../pt-BR/glossary-notes.md`), so the term stopped being family-shared and each locale
now carries its own row.

Nothing about European Portuguese was decided here. `calha de saída` is copied down verbatim,
including its original low-to-medium confidence warning, and no pt-PT translated file was
touched. It is still open for a European Portuguese speaker to confirm or replace, and the
Brazilian discussion is worth reading first: the objection there was that the phrase reads
oddly in isolation, which may or may not apply in Portugal, and `boca` may read differently.

### 2026-08-03: "input" splits into two rows, and neither of them is _fenda_

**Decided by:** native speaker (rlsmota), reviewing the European Portuguese Strings concept
page. **Terms affected:** `input (one a function declares)`, `input (a value passed in at a
call)`, and, by exclusion, the family row `input slot`.

The Strings page had rendered the English word **input** as _fenda_ ("uma fenda extra", "na
quinta fenda"). The reviewer's correction is that the natural European Portuguese for an
input is _valor de entrada_: "valor de entrada extra", "no quinto valor de entrada".

**This is not a correction to `input slot`.** The English source uses two different words in
the same passage, and it uses them deliberately: **input** where it means the thing you
supply, and **slot** where it means the physical opening in the machine that a coin or a
piece of paper goes into ("put some coins in the first four slots"). _Fenda_ is the agreed
rendering of the second, confirmed by Brazilian native speakers on the pt-BR glossary thread
and binding on the whole family, and the reviewer flagged neither of the sentences that use
it correctly. So the family row is untouched: what was wrong was reaching for the metaphor
word where the English had not used the metaphor.

**Two `input` rows, not one.** An earlier round with the same reviewer settled "inputs" as
_parâmetros de entrada_ on the Variables page, where the sentence names what the `circle`
function declares ("give it four inputs. Its `left`, `top`, `radius`, and `color`"). That is
a different object from the one settled here, which is the value written at one position of
a particular call. European Portuguese distinguishes them naturally, _parâmetro_ being the
declared input and _valor_ being what is passed for it, so both renderings are right for
their own sense and neither generalises to the other. Unifying them would have had to
overrule one of the reviewer's own two corrections, so the glossary carries both rows, each
scoped to the English wording that triggers it, and each ruling out _fenda_ explicitly. A
future pass that finds them redundant is looking at the sense, which is exactly the mistake
that produced _fenda_; the rows are keyed on the English word for that reason.

Both rows are in the **locale** file, not the family file: the distinction is settled for
European Portuguese only, and nobody has confirmed that Brazilian Portuguese draws it the
same way.

**This supersedes** the unconfirmed 2026-08-02 proposal below of `input (the value passed
in)` as _o valor recebido_, which nobody confirmed and which was avoiding _entrada_ on the
grounds that it collided with _fenda_. The collision is real, and this is the resolution of
it.

**Left unfixed, flagged rather than changed:** the JavaScript interpreter's pt-PT message
catalog renders the `inputCount` plural family as bare _entrada_ / _entradas_, which these
rows now rule out (its `slotCount` family correctly uses _fenda_, matching the English
"input slot"). It is a different content type with its own validated write path, so it wants
a `/translate-interpreters` pass, not a hand edit.

### 2026-08-02: Proposed terms from the Stage 2 batch 2 catch-up pass (unconfirmed drafts)

**Decided by:** agent (proposals only, nothing written to `glossary.md`). The catch-up pass
translating `two-fer`, `strings`, `digital-clock`, `arrays`, `weather-symbols`.

**Family-glossary spelling conflict, needs settling.** `languages/pt/glossary.md:68`
(family) spells the `string` gloss `cadeia de caracteres` — the Brazilian spelling. But
`languages/pt-PT/glossary.md:31` (`character`) mandates the post-1990 European spelling
`carateres`, explicitly noting `caracteres` is the Brazilian form. The family file is
carrying a Brazilian spelling that binds pt-PT too. This pass followed the locale rule
(`carateres`), but the family row is wrong for pt-PT as written. Fix options: add a
per-locale spelling note to the family row, or move the gloss into each locale file.

**Also unrecorded:** `string`'s grammatical gender — this pass used feminine (`uma string`);
a future pass could defensibly pick masculine. Worth one note on the existing row.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| data type | tipo de dados | Recurs across every concept page; likely family-level (pt-BR should match). | high |
| compound data type | tipo de dados composto | Adjective could vary (_composto_ vs _combinado_). | medium |
| concatenation | concatenação | Pairs with `+` across many exercises; probably the one canonical word, may not earn a row. | high |
| default (value) | valor por omissão | European form (pt-BR would say _valor padrão_); belongs in the **locale** file, not the family file. Alternatives: _predefinido_, _por defeito_. | medium |
| to display (on screen/clock) | mostrar | Chosen over _apresentar_/_exibir_; recurs across visual exercises. | medium |
| input (the value passed in) | o valor recebido | Avoids bare _input_ and _entrada_ (which collides with the _fenda_ input-slot metaphor). | medium |
| quotation marks | aspas (duplas) | Portugal traditionally uses angle quotes («»), so _aspas_ alone is mildly ambiguous where the page teaches straight double quotes as syntax. | medium |
| meridiem (am/pm indicator) | kept English | It is the literal parameter name in `displayTime`; translating it would break the tie to the code. | medium |
| template string | kept English | Alternatives exist (_string de template_, _literal de modelo_), so passes could diverge. | low |

Flags, not glossary rows: `arrays` renders "the posh word for true and false" as _o nome
pomposo_ — a native reviewer may prefer _chique_ or _fino_. `weather-symbols`'
`functions.draw.category` renders as _Desenho_; checked the shared `draw` catalog for a
competing category label, found none, but worth a glance if that file gains one. Possible
`global/terms.md` gaps: "data type" / "compound data type", possibly "quotation marks".

**Casing bug (not a glossary item, flag for Aron/Jeremy):** `exercise-categories/draw/
locales/` is on disk as `pt-PT` (capital PT) while this batch and everything else write
`pt-PT`. macOS's case-insensitive filesystem hides this; a case-sensitive Linux CI box would
treat them as two different locales and the shared `draw` messages would fall back to raw
keys. Not renamed by this pass.

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

### 2026-08-01: Guide pruned; rationale moved here

**Decided by:** agent (guide-pruning pass). **Status: no rule changed.**

`guide.md` is loaded into the prompt for every European Portuguese item, so the reasoning
behind its rules was moved here. Every instruction survives in the guide; what follows is
only the justification that was sitting next to it.

- **Audience.** The removed text: Portuguese tech education leans more formal and more
  restrained with anglicisms than Brazil's. The rule that follows from it (be restrained with
  anglicisms; the warmth comes from register and encouragement, not from loanwords) stays in
  the guide, stated imperatively.
- **`tu` over `você`.** The removed text: `tu` is the register used by real Portuguese online
  tutorials and learning platforms, and `você` reads as distancing, overly formal, or even
  brusque. The rules ("Use `tu` throughout", "Never default to `você`") are unchanged.
- **Separate locale, not a variant.** The guide said that where it diverges from
  `languages/pt-BR/guide.md` the divergence is deliberate and researched. A pt-PT pass never
  loads the pt-BR guide, so the cross-reference could not be acted on; the actionable half,
  "never carry a Brazilian choice over by default", stays.
- **Duplicated rules cut, not weakened.** The § "Contractions are mandatory" bullet was
  word-for-word the same rule as pt-BR's and now sits once in `../pt/guide.md` § Grammar,
  which this locale inherits (see `../pt/glossary-notes.md`). The § "Common EN→pt-PT
  pitfalls" tail restated the family guide's null-subject rule, this guide's own `estar a` +
  infinitive rule, and its own "never default to `você`" rule; the gerund bullet's one extra
  clause (it creeps in from English or Brazilian source material) is folded into the `estar
  a` rule, and the two genuinely new items ("just" → só/apenas, "make sure" → certifica-te de
  que) are folded into § "Style notes (pt-PT specifics)" as calque traps. "Try running this
  code" appeared both in the before/after table and in § "Natural phrasing"; the table row
  keeps it.
- **A false attribution fixed.** § "Information structure and emphasis" credited "given
  information first, new information last" to `global/voice.md`, which does not state it. It
  is now stated plainly as this guide's own rule, unchanged in substance.

### 2026-08-21: Three open terminology questions from the locale-parity batch (PR #49)

**Decided by:** nobody yet — open. Flagged here, not acted on, so a native speaker or
Jeremy has full context when one of these comes up.

The PR that brought pt-PT to full-catalog parity with hu (`0f93d83`, deepseek route) surfaced
three terminology inconsistencies while translating, none blocking, none fixed:

- **"Arrays"**: left untranslated, identical to the English, in both `levels` (the level
  title) and the `arrays` concept's own title. Worth a native-speaker call on whether pt-PT
  keeps it as a loanword deliberately (and if so, a glossary row saying so) or wants a
  Portuguese rendering.
- **"Deep Dive"**: rendered three different ways across the app-messages catalog —
  `Análise aprofundada` (5 keys), left as bare `Deep Dive` (3 keys), and `Mergulhos
  profundos` (1 key, plural "deep dives" read literally, clearly wrong on its own). Needs
  one term picked and swept across all 9 keys.
- Once those two are settled, both are candidates for a glossary row so future passes don't
  reintroduce the inconsistency.

Source: PR #49 description (`../i18n`, merged commit `0f93d83`).
