---
lang: "it"
name: "Italian"
family: null
stage: "setup"
governance_sha: "e50cba2"
content_version: "e27af0c6ec65"
published_at: "2026-07-31"
term_count: 57
forum_topic_id: 319
video_player_forum_topic_id: 763
---

# Italian (it) glossary

The agreed term list for Italian. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Italian | Use (it/en) | Notes |
|---------|---------|-------------|-------|
| developer | sviluppatore / sviluppatrice | it | Agree gender with the referent; use the masculine as the generic/plural default. |
| tech / tech industry | settore tech | it | Not _industria tecnologica_. |
| streak | serie | it | A run of consecutive days, as in the learning-platform sense. Flagged low-confidence: confirm on first real use. |
| foot-gun | trappola involontaria | it | Use a descriptive phrase rather than forcing a fixed term, per `global/terms.md`. |

## Localize (use the Italian term)

These are terms where the Italian is used in prose, so the "Use (it/en)" column is `it` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Italian | Use (it/en) | Notes |
|---------|---------|-------------|-------|
| float / decimal | numero in virgola mobile | it | Use _numero decimale_ only for the plain "has a decimal point" sense, not the technical float type. |
| array / list | array | it | A bare _array (array)_ gloss is unnecessary; where the source `<define>`s it, gloss with a one-line explanation of the concept instead, since the word itself is already English. Plural is invariant: _gli array_. Do not mix in "vettore" within one document. Never use "matrice" (means 2D matrix). Exercise prose sometimes says "list" informally for the same concept; render both as _array_. |
| string | stringa | it | Never left bare in English. |

### Functions & control flow

| English | Italian | Use (it/en) | Notes |
|---------|---------|-------------|-------|
| comparison | confronto | it | Stands alone. Avoid "comparazione". |
| statement (executable) | istruzione | it | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | proposizione | it | The proposition sense: a claim that is true or false; also a test assertion. Deliberately distinct from _istruzione_ above; never cross-use. |
| to call (a function) | chiamare (una funzione) | it | Use _chiamare_ consistently (not "invocare"). |
| to define (a function) | definire (una funzione) | it | Distinct from _dichiarare_ (declare), which is not used for this concept here. |
| parameter | parametro | it | Declaration-site name. |
| argument | argomento | it | Call-site value. Deliberately distinct from _parametro_ above. |
| input (to a function) | input | en | Not _ingresso_, which is reserved for hardware/circuit contexts. |
| output | output | en | Not _uscita_. |
| to return (a value) | restituire | it | "La funzione restituisce 30." Not "ritornare". |
| return value | valore restituito | it | Noun form; matches the verb _restituire_ above for consistency. |
| brackets (the two after a function name) | parentesi | it | The `()` pair written after a function name to call it: _parentesi tonde (`()`)_ where the type matters, plain _parentesi_ once the round pair is established in context. See the Brackets table below for the glyph names. |

### Loops, state & program flow

| English | Italian | Use (it/en) | Notes |
|---------|---------|-------------|-------|
| interpreter | interprete | it | **A person doing a job, not a program.** Jiki *is* the interprete ("il tuo interprete è Jiki", "l'interprete amichevole"). Never "interpretatore" or a device-flavoured coinage. Masculine/feminine invariant in form: _l'interprete_. |
| instruction (given to Jiki) | istruzione | it | A single thing the learner tells Jiki to do. Everyday word, not a legal/formal register one. Deliberately the same word as _statement (executable)_ above: in Italian these are one concept and splitting them would invent a distinction the language does not make. |
| (programming) language | linguaggio (di programmazione) | it | _linguaggio_, never _lingua_ (which means a natural human language). Also used for the "language a computer understands" framing: _un linguaggio che il computer capisce_. |
| code block | blocco di codice | it | Deliberately distinct from _scope_ below. |
| comment (in code) | commento | it | A `//` or `#` note in the source that the computer ignores. Masculine: _il commento_, plural _i commenti_. The word stands alone: qualify it as _commento nel codice_ only where the surrounding sentence could be read as a remark or a piece of feedback. Verb: _commentare_ ("aggiungere un commento"); for commenting a line out, say _trasformare in commento_, never "commentare fuori". |
| nested | annidato | it | e.g. _ciclo annidato_ = nested loop. Prefer over "nidificato". |
| modulo / remainder operator | operatore modulo (operator) / resto (value) | it | Use _operatore modulo_ for the `%` operator; _resto_ for the resulting value. |
| toggle | alternare | it | Verb. |
| scope | scope | en | Where the source `<define>`s it, gloss as _ambito (di visibilità)_, then use _scope_. |

### Tooling & engineering

| English | Italian | Use (it/en) | Notes |
|---------|---------|-------------|-------|
| deploy (verb / noun) | rilascio / rilasciare | it | Low-confidence pick. Flag for native-speaker confirmation via `/action-forum-post`. |
| tool / tooling | strumento | it | Covers "tool"; bare "tooling" as a collective noun is left undecided, do not use it yet. |
| edge case | caso limite | it | No official ruling exists; flagged for native-speaker confirmation. |

### Platform & curriculum vocabulary

| English | Italian | Use (it/en) | Notes |
|---------|---------|-------------|-------|
| feature (platform capability) | funzionalità | it | Deliberately distinct from _funzione_ (function) to avoid collision. |
| course | corso | it | The whole Jiki course the learner is taking: _in questo corso_. Distinct from _lezione_ (lesson) and _percorso_ (curriculum). |
| curriculum | percorso | it | Never bare "curriculum": in Italian it means a CV/résumé, a false friend. Use _percorso_ for the learning-curriculum sense. |
| pathway | percorso | it | A structured learning sequence. Same word as _curriculum_ above; the two senses rarely appear together in one document. |
| track (curriculum path) | indirizzo | it | Low-confidence pick. Flag for native-speaker confirmation. |
| mentor / mentoring | mentore / mentoring | it | "Mentoring" is used as-is; "mentore" is the native word for the person. |
| tutorial | tutorial | en | Established as-is in Italian tech/education writing. |

## Keep in English

These stay in English in Italian prose, with the Italian gloss to use for each.

| Term | Italian gloss (on `<define>`) | Notes |
|------|----------------------------------|-------|
| API | explain what it is in Italian | Where the source `<define>`s it, explain the concept in Italian ("un'API, cioè un modo per far comunicare due programmi tra loro"), not just gloss the acronym. Feminine: _l'API_. |
| framework | _struttura di sviluppo riutilizzabile_ | Where the source `<define>`s it, explain it means a reusable _framework_, then use the English word freely. Masculine: _il framework_. |
| CLI (the concept) | _interfaccia a riga di comando_ | Where the source `<define>`s it, explain CLI as _interfaccia a riga di comando_ (command-line interface). |
| template literal | _stringa con espressioni incorporate_ | Where the source `<define>`s it, explain it as a _stringa con espressioni incorporate_ (a string built with embedded expressions), then use _template literal_. Low-confidence: flag for native-speaker confirmation. |
| canvas (graphics exercises) | _area di disegno_ | The drawing surface in creative-coding exercises. Where the source `<define>`s it, explain it as the _area di disegno_ (the `canvas` element), then use _canvas_. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Italian rendering | Notes |
|-------------------|--------------------|-------|
| box (value container) | scatola | Feminine: _la scatola_. |
| chain (array metaphor) | catena | A link = _anello_/_maglia_. Confirmed to not collide with _stringa_ (string). Feminine: _la catena_. |
| input slot | fessura | Feminine: _la fessura_. Not _feritoia_, which is more technical/less concrete. |
| return chute | scivolo | Masculine: _lo scivolo_. |
| machine (function metaphor) | macchina | A function modelled as a machine, with an input slot and a return chute. Feminine: _la macchina_. Note: colloquially "macchina" can mean "car"; keep enough surrounding context that the machine sense is unambiguous, do not switch words over this. |
| crank (machine crank) | manovella | The handle Jiki turns to power a machine up: _girare la manovella_. Feminine: _la manovella_. |
| shelves (storage) | scaffali | The shelves where variables and functions are stored. Masculine plural: _gli scaffali_ (plural), _uno scaffale_ (singular). |
| warehouse (Jiki's warehouse) | magazzino | The place where Jiki hangs out and keeps his machine shelf. Masculine: _il magazzino_. Distinct from _officina_ (workshop). |
| board / whiteboard | lavagna | **One object, one word.** The board the learner writes instructions on for Jiki to follow, and the board a function keeps its own notes on, are the same thing. Feminine: _la lavagna_. Use _lavagna bianca_ only if the whiteness of the surface specifically matters to the sentence; otherwise plain _lavagna_ is the natural everyday word for a board in a room. No collision with _array_. |

## Brackets

Naming convention and worked example are in `guide.md`.

| Glyph | Italian | Notes |
|-------|---------|-------|
| `()` | parentesi tonde | Default bracket word when unqualified: plain _parentesi_. |
| `[]` | parentesi quadre | |
| `{}` | parentesi graffe | |
| `<>` | parentesi angolari | |

---

## Decision log

### 2026-07-31: Added `comment (in code)`

**Decided by:** owner (iHiD), on the proposal of native speaker giorgx12 on the pinned
Italian glossary thread (https://forum.jiki.io/t/319/3). **Human-decided: settled.**
**Terms affected:** `comment (in code)`.

giorgx12 proposed adding "Comment" (the `//` kind) rendered as _Commento (nel codice)_.
Added as **`commento`**, with "(in code)" kept on the English side of the row only. The
parenthetical is disambiguation for us, not part of what a translator writes: _commento_ is
the ordinary Italian word and carries the code sense unaided in programming prose, exactly
as English "comment" does. Writing _commento nel codice_ every time would read as a
permanent gloss. The row keeps the qualifier available for the rare sentence where the
remark/feedback sense could be misread, and the notes column carries the gender, the plural
and the verb form.

### 2026-07-31: Pruned ordinary vocabulary

**Decided by:** agent, per the pruning test in `global/translating.md` step 6. Removed 56
rows whose Italian rendering was the single obvious dictionary word with nothing to decide
(e.g. `value`, `number`, `variable`, `loop`, `class`, `object`, `error`, `module`, `exercise`,
plus the trivial "no gloss" rows for product names and code tokens). Kept everything with a
live alternative, a rejected alternative, a collision, a register/scope distinction, or a
protected native-speaker decision, including `interpreter` and `board / whiteboard` from the
entry below, `array / list`, `(programming) language`, `curriculum`/`pathway`, and `deploy`.

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind Italian:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have. Italian
  had coined **`tabellone`** for the board purely to avoid `lavagna`, which was bound to the
  function whiteboard, and rated that choice low confidence (a `tabellone` is a
  stadium-scale display, not a room fixture). With the merge that constraint disappeared,
  and the term moved to **`lavagna`**, the ordinary word for a board in a room.
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. Several languages had reached
  for their term for interpreter *software*, which cannot. **Italian did not change:**
  _interprete_ was already right, being both the everyday human-interpreter word and the
  standard CS term, with no machine or program morpheme in it. What changed is that the row
  now says so, and rules out "interpretatore" or any device-flavoured coinage.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: Agent's own drafting for the concept-page pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

Rows added to cover terms the using-functions concept page needed: `instruction (given to
Jiki)`, `mental model`, `(programming) language`, `variable`, `assignment`, `to assign`,
`code block`, `error`, and the metaphor rows `machine`, `crank`, `shelves`, `warehouse`,
`board / whiteboard`.

`(programming) language` records a trap worth flagging explicitly: Italian has two words
where English has one. _linguaggio_ is the word for a programming language (or any
technical/formal system of signs); _lingua_ is a natural human language (Italian, English,
and so on). The row is rendered as _linguaggio_, never _lingua_, including in the "a
language a computer understands" framing.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`) is not repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| programming / coding | Standard, unambiguous. |
| tech / tech industry | Natural in Italian tech media; "industria tecnologica" is heavier. |
| pitfall | Ordinary word, so it stands alone. |
| foot-gun | Idiomatic English term with no clean one-word Italian equivalent. |

#### Values & data types

| Term | Why |
|------|-----|
| value, number, character | Ordinary words. |
| float / decimal | _numero in virgola mobile_ is the standard Italian idiom for floating-point. |
| array / list | A bare _array (array)_ gloss is unnecessary since the word is already English. "vettore" is a legitimate but linear-algebra-flavoured alternative. |
| index | Ordinary word. |
| string | Fully native Italian vocabulary, so it is localized rather than kept English. |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition | Ordinary word. |
| comparison | Ordinary word; "comparazione" is rarer and heavier. |
| to call (a function) | _chiamare_ is plainer and more beginner-friendly than the equally-correct "invocare". |
| input, output | Kept English in the software sense; _ingresso_/_uscita_ are reserved for hardware/circuit contexts. |
| to return (a value) | "ritornare" used transitively is a common but linguistically criticized anglicism (standard Italian "ritornare" is intransitive). |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| mental model | The picture-in-your-head framing ("un ometto che vive nel computer"); standard Italian collocation. |
| nested | "nidificato" survives mainly in database/query contexts. |
| toggle | A plain, natural Italian word; no need to borrow "toggle". |
| scope | The word Italian developer writing actually uses; kept English on that basis. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| auth | Both _autenticazione_ and _autorizzazione_ are standard, unambiguous. |
| deploy | Developer speech commonly keeps "deploy" in Italy, but _rilascio/rilasciare_ is chosen for consistency with how Hungarian and French both localize this term, and reads more naturally in beginner-facing prose. |
| tool / tooling | No authoritative source found for "tooling" as a collective noun. |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| tutorial | Established as-is in Italian tech/education writing. |
| track (curriculum path) | No established Italian pair mirrors the pathway/track distinction. "Indirizzo" is a real Italian school term for a curricular specialization, chosen to stay distinct from _percorso_ (pathway). |

#### Keep in English

| Term | Why |
|------|-----|
| API | Not a word a beginner knows. |
| framework | Established loanword in Italian dev writing. |
| template literal | No canonical human-authored Italian source found. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Plain, concrete Italian word for a box. |
| chain | Standard Italian for a physical chain. |
| input slot | The narrow slot you post a coin or letter into (a piggy bank, a vending machine, a letterbox); the dictionary-precise alternative _feritoia_ is more technical/less concrete. |
| return chute | The playground-slide image: concrete and child-vivid, matching the informal register of the other metaphors. Treccani confirms both the playground-slide and vending-machine-delivery-chute senses. |
