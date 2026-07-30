---
lang: "it"
name: "Italian"
family: null
governance_sha: "1d91ad4"
content_version: "34b9e9a4f79b"
published_at: "2026-07-30"
term_count: 113
forum_topic_id: 319
---

# Italian (it) glossary

The agreed term list for Italian. Every term here has been agreed and is binding: use it exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file; it surfaces new terms it had to decide on as proposals in its output (a "glossary delta"). Those proposals are discussed, and only once agreed are they written in (by a human or by Claude). So everything in this file is, by definition, already agreed. Terms that have not been agreed simply are not here yet.

Writes are additive, and every row carries an `Agreed by` value recording who decided it (`agent` or `human`, per "The provenance column" in `global/workflow.md`).

## Core decisions

| English | Italian | Use (it/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| programming / coding | programmazione | it | Standard, unambiguous. | agent |
| developer | sviluppatore / sviluppatrice | it | Agree gender with the referent; use the masculine as the generic/plural default. | agent |
| tech / tech industry | settore tech | it | Natural in Italian tech media; "industria tecnologica" is heavier. | agent |
| streak | serie | it | A run of consecutive days, as in the learning-platform sense. Flagged low-confidence: real Italian products (e.g. Duolingo IT) render this inconsistently; confirm on first real use. | agent |
| pitfall | insidia | it | Ordinary word; stands alone. | agent |
| foot-gun | trappola involontaria | it | Idiomatic English term with no clean one-word Italian equivalent; use a descriptive phrase rather than forcing a fixed term, per `global/terms.md`. | agent |

## Localize (use the Italian term)

These are terms where the Italian is used in prose, so the "Use (it/en)" column is `it` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Italian | Use (it/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| value | valore | it | Ordinary word. | agent |
| number | numero | it | Ordinary word. | agent |
| true / false | vero / falso | it | Not capitalised in prose. Literals `true`/`false` stay English in code. | agent |
| character | carattere | it | Ordinary word. | agent |
| integer | numero intero | it | The type keyword (`int`) stays as-is in code. | agent |
| float / decimal | numero in virgola mobile | it | This is the standard Italian idiom for floating-point; use _numero decimale_ only for the plain "has a decimal point" sense, not the technical float type. | agent |
| array / list | array | it | A bare _array (array)_ gloss is unnecessary; where the source `<define>`s it, gloss with a one-line explanation of the concept instead, since the word itself is already English. Plural is invariant: _gli array_. "vettore" is a legitimate but linear-algebra-flavoured alternative; do not mix the two in one document. Never use "matrice" (means 2D matrix). Exercise prose sometimes says "list" informally for the same concept; render both as _array_. | agent |
| dictionary | dizionario | it | | agent |
| element | elemento | it | Array element = _elemento dell'array_. | agent |
| index | indice | it | Ordinary word. Plural: _indici_. | agent |
| key-value pair | coppia chiave-valore | it | The key itself is _chiave_ (an ordinary word). | agent |
| string | stringa | it | Fully native Italian vocabulary, so it is localized rather than kept English. Never left bare in English. | agent |
| Boolean | booleano | it | Adjective agrees: _booleano/booleana_. The code type name `Boolean` stays as-is in code. | agent |

### Functions & control flow

| English | Italian | Use (it/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| if statement | istruzione `if` | it | Keep `if` as the real keyword. | agent |
| condition | condizione | it | Ordinary word; stands alone. | agent |
| comparison | confronto | it | Ordinary word; stands alone. Avoid "comparazione", which is rarer and heavier. | agent |
| expression | espressione | it | | agent |
| operator | operatore | it | | agent |
| NOT operator / logical negation | negazione logica | it | The `!` symbol and `NOT` keyword stay as-is in code. | agent |
| statement (executable) | istruzione | it | The imperative sense: a line of code that does something and gets executed. | agent |
| statement (logical claim) | proposizione | it | The proposition sense: a claim that is true or false; also a test assertion. Deliberately distinct from _istruzione_ above; never cross-use. | agent |
| function | funzione | it | The *keyword* `function` in code stays English; the concept in prose is _funzione_. | agent |
| to call (a function) | chiamare (una funzione) | it | Plainer and more beginner-friendly than the equally-correct "invocare"; use _chiamare_ consistently. | agent |
| to define (a function) | definire (una funzione) | it | Distinct from _dichiarare_ (declare), which is not used for this concept here. | agent |
| parameter | parametro | it | Declaration-site name. | agent |
| argument | argomento | it | Call-site value. Deliberately distinct from _parametro_ above. | agent |
| input (to a function) | input | en | Kept English in the software sense; _ingresso_ is reserved for hardware/circuit contexts, not used here. | agent |
| output | output | en | As above; _uscita_ not used here. | agent |
| to return (a value) | restituire | it | "La funzione restituisce 30." Not "ritornare", which used transitively is a common but linguistically criticized anglicism (standard Italian "ritornare" is intransitive). | agent |
| return value | valore restituito | it | Noun form; matches the verb _restituire_ above for consistency. | agent |
| pure function | funzione pura | it | | agent |
| brackets (the two after a function name) | parentesi | it | The `()` pair written after a function name to call it: _parentesi tonde (`()`)_ where the type matters, plain _parentesi_ once the round pair is established in context. See the Brackets table below for the glyph names. | agent |

### Loops, state & program flow

| English | Italian | Use (it/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| keyword | parola chiave | it | | agent |
| interpreter | interprete | it | **A person doing a job, not a program.** Jiki *is* the interprete ("il tuo interprete è Jiki", "l'interprete amichevole"). _Interprete_ is the ordinary Italian word for a human interpreter and is also the standard CS term, with no machine or program morpheme in it, so the person reading applies naturally. Never "interpretatore" or a device-flavoured coinage. Masculine/feminine invariant in form: _l'interprete_. | agent |
| instruction (given to Jiki) | istruzione | it | A single thing the learner tells Jiki to do. Everyday word, not a legal/formal register one. Deliberately the same word as _statement (executable)_ above: in Italian these are one concept and splitting them would invent a distinction the language does not make. | agent |
| mental model | modello mentale | it | The picture-in-your-head framing ("un ometto che vive nel computer"). Standard Italian collocation. | agent |
| (programming) language | linguaggio (di programmazione) | it | _linguaggio_, never _lingua_ (which means a natural human language). Also used for the "language a computer understands" framing: _un linguaggio che il computer capisce_. | agent |
| variable | variabile | it | | agent |
| assignment | assegnazione | it | | agent |
| to assign | assegnare | it | Matches _assegnazione_ above: "assegnare un valore a una variabile." | agent |
| code block | blocco di codice | it | Deliberately distinct from _scope_ below. | agent |
| error | errore | it | | agent |
| nested | annidato | it | e.g. _ciclo annidato_ = nested loop. Prefer over "nidificato", which survives mainly in database/query contexts. | agent |
| iteration | iterazione | it | Verb: _iterare_. | agent |
| to run / execute (code) | eseguire | it | | agent |
| loop | ciclo | it | | agent |
| for loop | ciclo `for` | it | Keep `for` as the real keyword + _ciclo_. | agent |
| while loop | ciclo `while` | it | As above, with `while`. | agent |
| for-of loop | ciclo `for...of` | it | As above, with `for...of`. | agent |
| loop body | corpo del ciclo | it | | agent |
| break (loop control) | istruzione `break` | it | The keyword `break` in code stays English; this is the prose concept of breaking out of a loop. | agent |
| increment | incremento | it | Verb: _incrementare_. | agent |
| modulo / remainder operator | operatore modulo (operator) / resto (value) | it | Use _operatore modulo_ for the `%` operator; _resto_ for the resulting value. | agent |
| concatenation / to concatenate | concatenazione / concatenare | it | | agent |
| toggle | alternare | it | Verb; a plain, natural Italian word, no need to borrow "toggle". | agent |
| state / stateful | stato | it | "con stato" for "stateful". | agent |
| scope | scope | en | The word Italian developer writing actually uses; kept English on that basis. Where the source `<define>`s it, gloss as _ambito (di visibilità)_, then use _scope_. | agent |
| class | classe | it | | agent |
| method | metodo | it | | agent |
| property | proprietà | it | | agent |
| object | oggetto | it | | agent |

### Tooling & engineering

| English | Italian | Use (it/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| workflow | flusso di lavoro | it | The software-engineering sense (a sequence of dev tasks). | agent |
| auth (authentication / authorization) | autenticazione / autorizzazione | it | Pick by meaning; both are standard, unambiguous. | agent |
| deploy (verb / noun) | rilascio / rilasciare | it | Low-confidence pick: developer speech commonly keeps "deploy" in Italy, but _rilascio/rilasciare_ is chosen for consistency with how Hungarian and French both localize this term, and reads more naturally in beginner-facing prose. Flag for native-speaker confirmation via `/action-forum-post`. | agent |
| tool / tooling | strumento | it | Covers "tool"; bare "tooling" as a collective noun is left undecided (no authoritative source found), do not use it yet. | agent |
| module | modulo | it | | agent |
| algorithm | algoritmo | it | | agent |
| edge case | caso limite | it | No official ruling exists; flagged for native-speaker confirmation. | agent |
| backwards compatibility | retrocompatibilità | it | | agent |
| component | componente | it | | agent |

### Platform & curriculum vocabulary

| English | Italian | Use (it/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| feature (platform capability) | funzionalità | it | Deliberately distinct from _funzione_ (function) to avoid collision. | agent |
| course | corso | it | The whole Jiki course the learner is taking: _in questo corso_. Distinct from _lezione_ (lesson) and _percorso_ (curriculum). | agent |
| lesson | lezione | it | | agent |
| exercise | esercizio | it | | agent |
| scenario | scenario | it | Jiki-specific structured variant within an exercise. | agent |
| curriculum | percorso | it | Never bare "curriculum": in Italian it means a CV/résumé, a false friend. Use _percorso_ for the learning-curriculum sense. | agent |
| level | livello | it | The curriculum's structural unit. | agent |
| pathway | percorso | it | A structured learning sequence. Same word as _curriculum_ above; the two senses rarely appear together in one document. | agent |
| track (curriculum path) | indirizzo | it | Low-confidence pick: no established Italian pair mirrors the pathway/track distinction. "Indirizzo" is a real Italian school term for a curricular specialization, chosen to stay distinct from _percorso_ (pathway). Flag for native-speaker confirmation. | agent |
| syllabus | programma del corso | it | | agent |
| mentor / mentoring | mentore / mentoring | it | "Mentoring" is used as-is; "mentore" is the native word for the person. | agent |
| tutorial | tutorial | en | Established as-is in Italian tech/education writing. | agent |
| solution (learner's submission) | soluzione | it | | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the Italian
in the gloss column below (per the format in `global/voice.md`); with no `<define>`, use the
English bare, with no gloss.

| Term | Italian gloss (on `<define>`) | Notes | Agreed by |
|------|----------------------------------|-------|-----------|
| API | explain what it is in Italian | Not a word a beginner knows; where the source `<define>`s it, explain the concept in Italian ("un'API, cioè un modo per far comunicare due programmi tra loro"), not just gloss the acronym. Feminine: _l'API_. | agent |
| framework | _struttura di sviluppo riutilizzabile_ | Where the source `<define>`s it, explain it means a reusable _framework_, then use the English word freely. Masculine: _il framework_. Established loanword in Italian dev writing. | agent |
| CLI (the concept) | _interfaccia a riga di comando_ | Where the source `<define>`s it, explain CLI as _interfaccia a riga di comando_ (command-line interface). | agent |
| template literal | _stringa con espressioni incorporate_ | Where the source `<define>`s it, explain it as a _stringa con espressioni incorporate_ (a string built with embedded expressions), then use _template literal_. Low-confidence: no canonical human-authored Italian source found; flag for native-speaker confirmation. | agent |
| canvas (graphics exercises) | _area di disegno_ | The drawing surface in creative-coding exercises. Where the source `<define>`s it, explain it as the _area di disegno_ (the `canvas` element), then use _canvas_. | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | As keywords/technical tokens. | agent |
| Code, Bug, Frontend, Backend | (no gloss) | | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Italian rendering | Notes | Agreed by |
|-------------------|--------------------|-------|-----------|
| box (value container) | scatola | Plain, concrete Italian word for a box. Feminine: _la scatola_. | agent |
| chain (array metaphor) | catena | Standard Italian for a physical chain; a link = _anello_/_maglia_. Confirmed to not collide with _stringa_ (string), which is a fully separate word. Feminine: _la catena_. | agent |
| input slot | fessura | The narrow slot you post a coin or letter into (a piggy bank, a vending machine, a letterbox). Feminine: _la fessura_. The dictionary-precise alternative _feritoia_ is more technical/less concrete; not used here. | agent |
| return chute | scivolo | The playground-slide image: concrete and child-vivid, matching the informal register of the other metaphors. Masculine: _lo scivolo_. Treccani confirms both the playground-slide and vending-machine-delivery-chute senses. | agent |
| machine (function metaphor) | macchina | A function modelled as a machine, with an input slot and a return chute. Feminine: _la macchina_. Note: colloquially "macchina" can mean "car"; keep enough surrounding context that the machine sense is unambiguous, do not switch words over this. | agent |
| crank (machine crank) | manovella | The handle Jiki turns to power a machine up: _girare la manovella_. Feminine: _la manovella_. | agent |
| shelves (storage) | scaffali | The shelves where variables and functions are stored. Masculine plural: _gli scaffali_ (plural), _uno scaffale_ (singular). | agent |
| warehouse (Jiki's warehouse) | magazzino | The place where Jiki hangs out and keeps his machine shelf. Masculine: _il magazzino_. Distinct from _officina_ (workshop). | agent |
| board / whiteboard | lavagna | **One object, one word**, per `global/terms.md`: the board the learner writes instructions on for Jiki to follow, and the board a function keeps its own notes on, are the same thing. Feminine: _la lavagna_. Use _lavagna bianca_ only if the whiteness of the surface specifically matters to the sentence; otherwise plain _lavagna_ is the natural everyday word for a board in a room. No collision with _array_. | agent |

## Brackets

Naming convention and worked example are in `guide.md`.

| Glyph | Italian | Notes | Agreed by |
|-------|---------|-------|-----------|
| `()` | parentesi tonde | Default bracket word when unqualified: plain _parentesi_. | agent |
| `[]` | parentesi quadre | | agent |
| `{}` | parentesi graffe | | agent |
| `<>` | parentesi angolari | | agent |
