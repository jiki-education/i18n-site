---
lang: "fr"
name: "French"
family: null
stage: "refining"
governance_sha: "4d3b92c"
content_version: "9d7fe10ade58"
published_at: "2026-08-01"
term_count: 67
category_id: 72
forum_topic_id: 314
video_player_forum_topic_id: 755
---

# French (fr) glossary

The agreed term list for French. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document. Why each term was chosen is in
the decision log (`glossary-notes.md`).

## Core decisions

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| streak | série | fr | A run of consecutive days, as in the learning-platform sense. |
| foot-gun | piège involontaire | fr | Use a descriptive phrase rather than forcing a fixed term, per `global/terms.md`. |

## Localize (use the French term)

These are terms where the French is used in prose, so the "Use (fr/en)" column is `fr` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| true / false | vrai / faux | fr | Not capitalised in prose. Keywords `true`/`false` stay English in code. |
| float / decimal | nombre décimal | fr | Use _nombre à virgule flottante_ only when the IEEE-754 floating-point nature specifically matters. |
| array / list | tableau | fr | Exercise prose sometimes says "list" informally for the same concept; render both as _tableau_, do not introduce a separate word. |
| dictionary | dictionnaire | fr | In JS-specific prose this is usually an _objet_ or a `Map`; use the concept word _dictionnaire_ only when teaching the general idea. |
| index | indice | fr | Not "index", which carries a book/database sense in French. "par son indice". |
| Boolean | booléen | fr | The code type name `Boolean` stays as-is in code. |
| number / digit | nombre / chiffre | fr | _nombre_ for a number of any size (the value or the type); _chiffre_ only for a single digit symbol, as in _deux chiffres après la virgule_ (two digits after the decimal point). Both masculine. |

### Functions & control flow

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| if statement | instruction `if` | fr | Keep `if` as the real keyword. |
| NOT operator / logical negation | opérateur NON / négation logique | fr | The `!` symbol stays as-is in code. |
| statement (executable) | instruction | fr | The imperative sense: a line of code that does something and gets executed. Deliberate overlap with _instruction_ (given to Jiki) below: the contexts never compete on a page. |
| statement (logical claim) | assertion | fr | The proposition sense: a claim that is true or false; also a test assertion. Deliberately distinct from _instruction_ above. |
| function | fonction | fr | The *keyword* `function` in code stays English; the concept in prose is _fonction_. |
| parameter | paramètre | fr | Declaration-site name. |
| argument | argument | fr | Call-site value. |
| to return (a value) | renvoyer | fr | "La fonction renvoie 30." Not "retourner". |
| return value | valeur de retour | fr | Noun form; keep distinct from the verb _renvoyer_ above. |
| brackets (the two after a function name) | parenthèses | fr | The `()` pair written after a function name to call it: _écris son nom, puis ces parenthèses_. French names the bracket type, so always say which; see the Brackets section below. |

### Loops, state & program flow

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| interpreter | interprète | fr | **The person who interprets, not a piece of software.** On concept pages Jiki *is* the interpreter ("son travail consiste à interpréter le code que tu écris"). Not _interpréteur_, which in French only ever names the program. |
| instruction (given to Jiki) | instruction | fr | A single thing the learner tells Jiki to do: _donner à Jiki les bonnes instructions_, _écrire des instructions sur le tableau blanc_. Everyday word, not a formal/legal register one. See the note on _statement (executable)_ above about the shared word. |
| (programming) language | langage (de programmation) | fr | _langage_ for a programming language (_langage de programmation_ on first mention, then _langage_). Use _langue_ only for the human-language framing ("une langue que l'ordinateur comprend"), which is what French actually distinguishes; never mix the two words for the same sense on one page. |
| assignment | affectation | fr | Not "assignation", which is a flagged anglicism in French. |
| to assign | affecter | fr | Matches _affectation_ above: "affecter une valeur à une variable." |
| code block | bloc d'instructions | fr | Deliberately distinct from _portée_ (scope) below. |
| iteration | itération | fr | Verb: _itérer_; "parcourir" also natural for iterating over a collection. |
| break (loop control) | instruction `break` | fr | The keyword `break` in code stays English; this is the prose concept of breaking out of a loop. |
| modulo / remainder operator | modulo (opérateur) / le reste (valeur) | fr | _modulo_ for the `%` operator; _le reste (de la division)_ for the resulting value. |
| toggle | basculer | fr | Verb only; no crisp noun exists. "basculer une valeur booléenne." |
| state / stateful | état / à état | fr | "à état" or "avec état" for "stateful". |
| scope | portée | fr | Deliberately distinct from _bloc d'instructions_ (code block) above. |

### Tooling & engineering

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| auth (authentication / authorization) | authentification / autorisation | fr | Pick by meaning. |
| tool / tooling | outil / outillage | fr | _outils_ reads more naturally than _outillage_ in most prose; _outillage_ for the collective sense ("toolchain" = _chaîne d'outils_). |
| edge case | cas limite | fr | The agreed rendering; no official French ruling exists, so do not coin an alternative. |
| backwards compatibility | rétrocompatibilité | fr | Not "compatibilité descendante". |

### Platform & curriculum vocabulary

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| feature (platform capability) | fonctionnalité | fr | Deliberately distinct from _fonction_ (function) to avoid collision. |
| course | cours | fr | The whole Jiki course the learner is taking: _dans ce cours_. Keep distinct from _leçon_ (lesson) and _programme_ (curriculum). |
| curriculum | programme | fr | Avoid the false friend "curriculum", which in French means a CV/résumé. |
| pathway | parcours | fr | A structured learning sequence. Deliberately distinct from _filière_ (track) below. |
| track (curriculum path) | filière | fr | Deliberately distinct from _parcours_ (pathway) above. |
| syllabus | programme (du cours) | fr | Note the deliberate overlap with _curriculum → programme_; disambiguate with "du cours" when both appear in the same context. |

## Keep in English

These stay in English in prose, because a beginner reader already knows the English form
of them from surrounding tooling, or the French official term is not what French
developers actually say. Where the source `<define>`s one of these terms, use the French
in the gloss column below; with no `<define>`, use the English bare, no gloss.

| Term | French gloss (on `<define>`) | Notes |
|------|--------------------------------|-------|
| string | _chaîne de caractères_ | Exception: in the string concept itself, use _chaîne de caractères_ where the source defines it, then use _string_ throughout. Keeping it English leaves _chaîne_ free for the array chain metaphor. Open question: French dev writing genuinely says "chaîne de caractères", so the ordinary-word principle points the other way; not yet revisited (see `glossary-notes.md`). |
| API | explain what it is in French | Where the source defines it, explain the concept in French, not just gloss the acronym. Gender: _une API_ (feminine). |
| framework | _cadre de développement_ | Where the source defines it, explain it means a reusable _cadre de développement_, then use _framework_ freely. |
| workflow | _flux de travail_ | The software-engineering sense (a sequence of dev tasks). Where the source defines it, explain it means _flux de travail_, then use _workflow_. |
| template literal | _littéral de gabarit_ | Where the source defines it, explain it as a _littéral de gabarit_ (the official term), then use _template literal_. |
| CLI (the concept) | _interface en ligne de commande_ | Where the source defines it, explain CLI as _interface en ligne de commande_ (command-line interface). |
| canvas (graphics exercises) | _zone de dessin_ | The drawing surface in creative-coding exercises. Where the source defines it, explain it as the _zone de dessin_ (the `canvas` element), then use _canvas_. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | French rendering | Notes |
|-------------------|-------------------|-------|
| box (value container) | boîte | Gender: _la boîte_. |
| chain (array metaphor) | chaîne | Link = _maillon_. Works cleanly because _string_ stays English above (its literal sense, _chaîne de caractères_, doesn't collide in prose). |
| input slot | fente | **Under reconsideration**: flagged by native speakers as carrying an unwanted slang/anatomical connotation in informal French (see `glossary-notes.md` 2026-08-01). Do not propagate to new content until replaced. Gender: _la fente_. |
| return chute | toboggan | Gender: _le toboggan_. Alternative _goulotte_ (a vending-machine delivery chute) is more mechanically precise if a future pass wants a stricter machine image. |
| machine (function metaphor) | machine | A function modelled as a machine, with an input slot and a return chute. Gender: _la machine_. |
| crank (machine crank) | manivelle | The handle Jiki turns to start a machine: _tourner la manivelle_. Gender: _la manivelle_. |
| shelves (storage) | étagères | The shelves where variables and functions are stored. Gender: _les étagères_ (plural), _une étagère_ (singular). |
| warehouse (Jiki's warehouse) | entrepôt | The place where Jiki hangs out and keeps his machine shelf. Gender: _l'entrepôt_ (masculine). |
| board / whiteboard | tableau blanc | **One object, one word**, per `global/terms.md`: the same board the learner writes instructions on for Jiki to follow, and the one a function keeps its own notes on. Always written in full, never shortened to _tableau_, so it never collides with _tableau_ (array). Gender: _le tableau blanc_. |

## Brackets

Default to naming the bracket type. When a specific bracket type matters, name it and show the glyph in a code tag immediately after: _crochets (`[]`)_.

| Glyph | French | Notes |
|-------|--------|-------|
| `()` | parenthèses | Default bracket word. Gender: _une parenthèse_ (feminine). The plural already implies the pair, so write _des parenthèses_, never _une paire de parenthèses_. |
| `[]` | crochets | |
| `{}` | accolades | |
| `<>` | chevrons | Or name the signs directly (_signes inférieur et supérieur_) when clearer. |

Example: _pour appeler une fonction, écris son identifiant, suivi de parenthèses (`()`)._

---

## Decision log

### 2026-08-01: `input slot` (_fente_) flagged as having an unwanted slang connotation

**Decided by:** not yet decided — open question. Flagged by native speakers (williamapc,
resu-xunil) on the pinned French glossary thread, forum topic 314, post #9
(https://forum.jiki.io/t/314/9). **Terms affected:** `input slot`.

_fente_ was confirmed earlier today (see the entry below) on the strength of a different
review, but a fresh point supersedes that: in informal/slang French, _fente_ can carry a
sexual/anatomical connotation, which is not acceptable for a beginner-facing course. **Do
not treat _fente_ as settled** despite the "confirmed" wording below; asked the reviewers
for a replacement (candidates floated: _fente à monnaie_, _ouverture_) rather than picking
one ourselves, since assessing slang risk needs a native ear, not a guess.

### 2026-08-01: Native-speaker review of the term list

**Decided by:** native speaker (myrtarazona) on the forum, topic 314, post 6.
**Terms affected:** `edge case`, `(programming) language`, `backwards compatibility`,
`chain`, `input slot`, `auth`, `API`, `()` (parentheses), and a new `number / digit` row.

A compilation post going through the glossary section by section. Most of it confirms what
is already there; three things changed.

- **Confirmations (rendering unchanged, rows now protected).** `edge case` → _cas limite_,
  called "the most appropriate"; its Notes no longer say it is awaiting confirmation.
  `(programming) language` → _langage (de programmation)_, with the _langue_ (a human
  language) / _langage_ (a programming language) split confirmed as the real French
  distinction, which the 2026-07-30 entry had flagged as unreviewed. `backwards
  compatibility` → _rétrocompatibilité_. The metaphor rows `chain` → _chaîne_ and `input
  slot` → _fente_ (feminine), both including their gender. `auth`, split by meaning into
  _authentification_ / _autorisation_, with the point that a beginner will not read a bare
  "auth" as _autorisation_, so it is always expanded.
- **`API` is feminine**, _une API_, added to its Notes. The row itself (kept English, the
  concept explained rather than the acronym expanded) is unchanged.
- **Never write _une paire de parenthèses_.** Technically correct but neither natural nor
  concise: the French plural _parenthèses_ already implies the pair. The example under the
  Brackets section used the "paire" phrasing and now reads _écris son identifiant, suivi de
  parenthèses_. Gender (_une parenthèse_) recorded on the `()` row.
- **New row `number / digit` → _nombre / chiffre_.** The reviewer raised the split as a
  trap for translators, and it is one: English "number" covers both. The rule recorded is
  the strict one, _chiffre_ for a single digit symbol and _nombre_ for a number of any size.
  The reviewer framed it as 0 to 9 being _chiffre_ and anything above 9 being _nombre_,
  which is the common informal shorthand rather than the actual distinction (5 is a _nombre_
  as much as 500 is, and their own example, _deux chiffres après la virgule_, is "two
  digits", not "two numbers"). **This wording of the row is not yet confirmed and should be
  put back to the reviewer.** `number` had been pruned on 2026-07-31 as an ordinary word;
  it earns a row again only because of the digit distinction, which is something to decide.
- **No action, consistent with the prune.** `programming / coding` (_programmation /
  codage_, and _développement (informatique)_ in everyday usage), `developer`
  (_développeur_ / _développeuse_), `tech / tech industry` (_la tech_, _secteur
  technologique_), `pitfall` (_piège_), `value` (_valeur_), `character` (_caractère_),
  `condition`, `comparison` (_comparaison_), `mental model` (_modèle mental_), `deploy`
  (_déployer_), `module`, `component` (_composant_). The reviewer's renderings match what
  the 2026-07-31 prune recorded, so they are confirmed as correct but stay out of the
  glossary as ordinary vocabulary with nothing to decide.
- **Open, not actioned:** `template literal`. The reviewer accepts keeping the English term,
  which is what the glossary does, but glosses it _littéral template_ / _template littéral_
  where the row uses the official _littéral de gabarit_. The gloss only ever appears where
  the source `<define>`s the term, so this is narrow, but it is a genuine difference and
  needs the reviewer's view rather than a silent swap.

The post also links https://blog.stephane-robert.info/glossaire/, a free French DevOps
glossary (911 terms) worth consulting when a future term needs checking. It is a resource,
not a term decision.

### 2026-07-31: Pruned ordinary vocabulary

Removed 47 rows whose French rendering was the plain dictionary word with nothing to
decide (`programming`, `developer`, `tech industry`, `pitfall`, `value`, `number`,
`character`, `integer`, `element`, `key-value pair`, `condition`, `comparison`,
`expression`, `operator`, `to call`, `to define`, `input`, `output`, `pure function`,
`keyword`, `mental model`, `variable`, `error`, `nested`, `to run/execute`, `loop`, `for
loop`, `while loop`, `for-of loop`, `increment`, `concatenation/to concatenate`, `class`,
`method`, `property`, `object`, `deploy`, `module`, `algorithm`, `component`, `lesson`,
`exercise`, `scenario`, `level`, `milestone`, `mentor/mentoring`, `tutorial`, `solution`).
A reviewer might query cutting `for loop`/`while loop`/`for-of loop` and `variable`/`loop`
despite their gender or keyword notes: those notes were mechanical (keep the code keyword;
grammatical gender), not a translation choice, so the rows carried nothing worth keeping.

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, `board / whiteboard`, and, as a principle, every row.

Three decisions came out of that pass that bind French:

- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. **French changed.** The earlier
  choice was _interpréteur_, picked deliberately *to avoid* _interprète_, on the reasoning
  that _interprète_ means a human (spoken-language) translator and would be misleading for
  a piece of software. That reasoning inverted here: the page needs the person-word,
  because Jiki is a character whose job is interpreting ("son travail consiste à
  interpréter le code"), and _interpréteur_ names only the program, not the person doing
  the job. The row moved to **`interprète`**.
- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have. French
  had coined **panneau** for the instruction board specifically to keep it distinct from
  _tableau blanc_ (the whiteboard) and from _tableau_ (which the guide reserves for
  arrays). With the merge, both uses now render as **`tableau blanc`**, always written in
  full so it still never collides with _tableau_.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: French glossary filled out for the concept page

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**Rows added** for the using-functions concept page: `instruction (given to Jiki)`,
`mental model`, `brackets (the two after a function name)`, and the metaphor rows
`crank`, `warehouse`, plus `course` for the platform-vocabulary section.

Worth flagging specifically: **`(programming) language`**, rendered `langage (de
programmation)`. This records a real trap: French splits _langue_ (a human language, as in
"une langue que l'ordinateur comprend") from _langage_ (a programming language), where
English uses "language" for both. The row instructs never mixing the two words for the
same sense on one page, but the split itself has not been reviewed by a native speaker.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`interpreter`, `board / whiteboard`) is not repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| programming / coding | Standard, unambiguous rendering. |
| developer | Standard French equivalent. |
| tech / tech industry | Natural in French tech media; "industrie technologique" is heavier. |
| pitfall | Ordinary French word. |
| foot-gun | Idiomatic English term with no clean one-word French equivalent. |

#### Values & data types

| Term | Why |
|------|-----|
| value, number, character | Ordinary French words. |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary French words, so they stand alone. |
| statement (executable) / instruction (given to Jiki) | French uses the same everyday word for both the imperative-statement sense and the given-to-Jiki sense; coining a second word would read worse than the overlap does. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| mental model | Ordinary and current in French. |
| toggle | No crisp noun exists in French for this concept, so the term is verb-only. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| auth | Both _authentification_ and _autorisation_ are standard, unambiguous French terms; pick whichever meaning applies. |
| deploy | Standard, no loanword competition. |
| module | Identical form in French. |
| backwards compatibility | Unambiguous, unlike "compatibilité descendante", which requires knowing which direction "descendante" means. |
| component | Native French term, not a loanword, unlike in some other languages. |

#### Keep in English

| Term | Why |
|------|-----|
| string | Kept English so _chaîne_ stays free for the array-chain metaphor. This is in tension with the ordinary-word principle above, since French dev writing genuinely says "chaîne de caractères"; flagged as an open question, not re-decided. |
| API | Not a word a beginner knows, so the concept has to be explained, not just the acronym expanded. |
| framework | Established loanword in French dev writing. |
| template literal | This is what real French developers actually say, even though an official French term exists. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Plain, concrete French word for a box. |
| chain | Standard French word for a physical chain. |
| input slot | Evokes the narrow slot you post a coin or letter into (a piggy bank, a vending machine, a letterbox). |
| return chute | The playground-slide image: concrete and child-vivid, matching the informal register of the other metaphors. |
