---
lang: "it"
name: "Italian"
family: null
stage: "reviewing"
governance_sha: "dec20ea"
content_version: "7a9faa926722"
published_at: "2026-08-04"
term_count: 67
category_id: 133
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
| tech / tech industry | settore tech | it | Not _industria tecnologica_. _Settore tecnologico_ is real but much rarer in Italian tech writing; do not substitute it. |
| streak | slancio / giorni di slancio | it | A run of consecutive days, as in the learning-platform sense. Confirmed by a native speaker: works standalone as a UI label ("Slancio" above a number), and "uno slancio di 5 giorni" is grammatically correct (masculine noun). Replaces an earlier draft, _serie_, which doesn't carry the unbroken-run sense on its own. |
| foot-gun | arma a doppio taglio | it | Use a descriptive phrase rather than forcing a fixed term, per `global/terms.md`. Native speaker frasanga preferred this (double-edged weapon, for the object/code sense — "code that seems right but isn't and can cause harm") over an earlier draft, _trappola involontaria_; _darsi la zappa sui piedi_ (to hoe one's own feet) was offered as the action-sense alternative if a verb phrase is ever needed instead of a noun. |

## Localize (use the Italian term)

These are terms where the Italian is used in prose, so the "Use (it/en)" column is `it` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Italian | Use (it/en) | Notes |
|---------|---------|-------------|-------|
| float / decimal | numero in virgola mobile | it | Use _numero decimale_ only for the plain "has a decimal point" sense, not the technical float type. |
| array / list | array | it | A bare _array (array)_ gloss is unnecessary; where the source `<define>`s it, gloss with a one-line explanation of the concept instead, since the word itself is already English. Plural is invariant: _gli array_. Do not mix in "vettore" within one document. Never use "matrice" (means 2D matrix). Exercise prose sometimes says "list" informally for the same concept; render both as _array_. |
| string | stringa | it | Never left bare in English. |
| template literal / template string | stringa interpolata | it | Confirmed by a native speaker. Never leave a bare _template literal_ or _template string_ in Italian prose. The `${...}` syntax itself is _interpolazione_; the verb is _interpolare_. Where the source `<define>`s it, explain it as a _stringa interpolata_, a string with values inserted directly into it. |

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
| input (to a function) | input | en | Not _ingresso_, which is the construction/building-entrance term (see `entrance` below), not this sense. |
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
| to refactor / refactoring | riorganizzare / riorganizzazione | it | Reworking code without changing what it does. Never _rifattorizzare_, a literal calque that is not natural Italian. _Modificare_ (to edit) is too weak: it loses the "same behaviour, better structure" sense. |
| nested | annidato | it | e.g. _ciclo annidato_ = nested loop. Prefer over "nidificato". |
| modulo / remainder operator | operatore modulo (operator) / resto (value) | it | Use _operatore modulo_ for the `%` operator; _resto_ for the resulting value. |
| toggle | azionare | it | Verb. "Ian azionò l'interruttore e la luce si accese." Confirmed by two native speakers: a single plain verb, more natural than the earlier draft _alternare_, which invited an on/off two-word pairing. |
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
| track (curriculum path) | indirizzo | it | Confirmed by a native speaker: the standard Italian word for a course of study (secondary-school _indirizzo_, university track). Stays distinct from _percorso_ (pathway). |
| mentor / mentoring | mentore / mentoring | it | "Mentoring" is used as-is; "mentore" is the native word for the person. |
| tutorial | tutorial | en | Established as-is in Italian tech/education writing. |
| "Run Code" (the button) | Esegui il codice | it | The app's run button. Prose that tells the learner to press it quotes the button's own label, so use this exact wording every time, never the shorter _Esegui codice_. |
| drawing shapes (function category) | disegno di forme geometriche | it | The graphics-exercise function category. Use _forme geometriche_ for "shapes" in drawing contexts; bare _forme_ is acceptable only where the geometric sense is already unambiguous from the sentence. |
| basic / simple (exercise-title modifier) | semplice | it | Where two exercises share a subject and one is the basic version (`-basic` and its fuller counterpart), mark the basic one's Italian title with _semplice_ **before** the noun phrase: _Semplice pupazzo di neve_. The fuller exercise keeps the undecorated title (_Pupazzo di neve_), so only the basic one carries a modifier. Applies to the title only, not to the noun inside the prose or the message catalog. Agrees with the noun in gender and number (_Semplice X_, _Semplici X_). |

### Exercise domain vocabulary

Everyday words from an exercise's subject matter where the obvious rendering is not the right one.

| English | Italian | Use (it/en) | Notes |
|---------|---------|-------------|-------|
| weather | meteo | it | Confirmed by a native speaker: more precise than _tempo_, which also means "time" and so reads ambiguously in an exercise. Masculine and invariant: _il meteo_, _previsioni meteo_, _simboli meteo_. Never use _tempo_ for the weather sense. |
| tee (golf) | tee | en | Keep the English word: it is the standard term in Italian golf usage. Never _chiodino_. Masculine and invariant: _il tee_, _sul tee_. |
| radial width / radial height (ellipse) | raggio orizzontale / raggio verticale | it | Confirmed by a native speaker: the wording Italian graphics usage actually employs for an ellipse's two radii. Masculine, so the article and preposition agree with _raggio_: _un raggio orizzontale di 40_, _ed un raggio verticale di 20_. Never _larghezza radiale_ / _altezza radiale_, which are literally correct but not what is said. |
| jumbled (parts swapped/rearranged) | stravolto / stravolta | it | Confirmed by native speakers. The sense is a thing whose own parts have been shuffled and swapped around, not a thing that is untidy inside. Agree gender with the noun: _casa stravolta_. Never _disordinato_ / _in disordine_ (that is interior mess), and not _scombinato_. |
| entrance (building) | ingresso | it | Confirmed by a native speaker: the construction/building term. Masculine: _un ingresso_, never the feminine _un'entrata_. Distinct from `input (to a function)` below, which is a different English word and stays _input_. |

## Keep in English

These stay in English in Italian prose, with the Italian gloss to use for each.

| Term | Italian gloss (on `<define>`) | Notes |
|------|----------------------------------|-------|
| API | explain what it is in Italian | Where the source `<define>`s it, explain the concept in Italian ("un'API, cioè un modo per far comunicare due programmi tra loro"), not just gloss the acronym. Feminine: _l'API_. |
| framework | _struttura di sviluppo riutilizzabile_ | Where the source `<define>`s it, explain it means a reusable _framework_, then use the English word freely. Masculine: _il framework_. |
| CLI (the concept) | _interfaccia a riga di comando_ | Where the source `<define>`s it, explain CLI as _interfaccia a riga di comando_ (command-line interface). |
| canvas (graphics exercises) | _area di disegno_ | The drawing surface in creative-coding exercises. Where the source `<define>`s it, explain it as the _area di disegno_ (the `canvas` element), then use _canvas_. Where the source does not `<define>` it (exercise tasks, describers, hints), never leave a bare _canvas_: use _area di disegno_. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |
| `move()` (exercise function) | _muovi_ | Gloss the command with the imperative _muovi_, matching the command's behaviour. Never the reflexive infinitive _muoversi_, which describes the character moving itself rather than instructing it. The same imperative pattern applies to any other exercise function glossed this way. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Italian rendering | Notes |
|-------------------|--------------------|-------|
| box (value container) | scatola | Feminine: _la scatola_. |
| chain (array metaphor) | catena | A link = _anello_/_maglia_. Confirmed to not collide with _stringa_ (string). Feminine: _la catena_. |
| input slot | fessura | Feminine: _la fessura_. Not _feritoia_, which is more technical/less concrete. |
| return chute | scivolo | Masculine: _lo scivolo_. |
| machine (function metaphor) | macchina | A function modelled as a machine, with an input slot and a return chute. Feminine: _la macchina_. Note: colloquially "macchina" can mean "car"; keep enough surrounding context that the machine sense is unambiguous, do not switch words over this. |
| crank (machine crank) | manovella | The handle Jiki turns to power a machine up: _girare la manovella_. Feminine: _la manovella_. The verb for powering the machine up this way is _caricare_ (wind up), never _accendere_ (switch on), which belongs to an electrical machine. |
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

### 2026-08-04: a building entrance is `ingresso`, never `entrata`

**Decided by:** native speaker kernelaklees on the Skyline exercise review thread
(https://forum.jiki.io/t/1180, post_id 3332). **Human-decided, agent-applied.** **Terms
affected:** `entrance (building)` (new row); the `buildEntrance` describer string in the
shared `cityscape` category message catalog, which reaches every cityscape-family exercise.

The describer read _ha costruito un'entrata alla posizione (X, Y)_. kernelaklees said "It's
fine `ha costruito un'entrata` is fine, but in construction terminology the correct term is
`ingresso`." The swap also changes the article's gender: _entrata_ is feminine, _ingresso_
is masculine, so _un'entrata_ becomes _un ingresso_.

This sits next to the existing `input (to a function)` row, which already says "not
_ingresso_". That note originally called _ingresso_ "reserved for hardware/circuit
contexts", which this decision shows was too narrow: it is also the ordinary word for a
building entrance. The note is corrected to point at this row instead of repeating the
narrower claim; the underlying instruction (don't use it for "input") is unchanged.

### 2026-08-04: an ellipse has a `raggio orizzontale` and a `raggio verticale`

**Decided by:** native speaker kernelaklees on the Build the Wall exercise review thread
(https://forum.jiki.io/t/1179, post_id 3330). **Human-decided, agent-applied.** **Terms
affected:** `radial width / radial height (ellipse)` (new row, under "Exercise domain
vocabulary"); the ellipse describer strings in the shared `draw` category message catalog,
which every drawing exercise renders.

The ellipse describers read _una larghezza radiale di X_ and _un'altezza radiale di Y_.
kernelaklees confirmed those are correct, and then said that in graphics Italian usually
says _raggio orizzontale_ and _raggio verticale_. That is the distinction the row records:
not an error being corrected, but a literal rendering being replaced by the collocation a
reader in the domain expects. It also lines the ellipse up with the circle describer, which
already says _un raggio di X_, so the two shapes now describe the same quantity with the
same word instead of one calling it a radius and the other a radial width.

The swap changes the gender of the head noun (_larghezza_ and _altezza_ are feminine,
_raggio_ is masculine), so the articles move with it: _una larghezza radiale_ becomes _un
raggio orizzontale_, and _ed un'altezza radiale_ becomes _ed un raggio verticale_.

It earns a row rather than a one-off catalog edit because the strings live in the shared
`draw` category catalog, so the wording is the same in every drawing exercise, and because
the trap is that the literal rendering is not wrong: nothing in a per-exercise review flags
it unless the reviewer happens to know the graphics idiom.

Ukrainian settled the identical point on its own thread earlier the same day. The two
decisions are independent (each language decides for itself); they are noted together only
because the same shared catalog strings are involved.

### 2026-08-04: a jumbled thing is `stravolto`, never `in disordine` / `disordinato`

**Decided by:** native speakers kernelaklees and FraSanga on the Jumbled House exercise
review thread (https://forum.jiki.io/t/1089, posts 2 and 4). **Human-decided,
agent-applied.** **Terms affected:** `jumbled (parts swapped/rearranged)` (new row, under
"Exercise domain vocabulary"); the `exercise/jumbled-house` Italian title, description and
image alt text.

The exercise was titled _Casa in disordine_. kernelaklees objected that _disordinata_ /
_in disordine_ translates back as "messy": a house whose contents are strewn about inside.
That is not what the exercise shows. The house's own structural elements (frame, roof,
windows, door) have been detached, resized and swapped around on the outside; nothing about
the interior is involved. The word has to describe a thing whose parts have been rearranged,
not a thing that is untidy.

He offered two candidates, _scombinata_ and _stravolta_, and preferred _stravolta_.
_Scombinata_ is accurate but weaker and more colloquial: it suggests things mixed up or
muddled, and is often used of people ("scombinato" as scatterbrained), which risks reading
as a comment on the house's tidiness again. _Stravolta_ means upended, drastically
rearranged, turned inside out, and carries the sense of a form violently reordered while
its pieces all remain present. That is exactly the puzzle the learner is being asked to
undo, and it keeps the title's promise consistent with the task ("riordinare i pezzi").

FraSanga, who had already approved the translation, quoted kernelaklees's preference and
replied "I agree with you", so both reviewers are on _stravolta_ and the runner-up is
settled, not merely unpicked.

It earns a row rather than being a one-off title fix because "jumbled" and its neighbours
recur across the drawing exercises, and the trap (reaching for the obvious _disordinato_,
which is a real word that reads fine and means the wrong thing) is invisible to anyone
translating a single title in isolation.

### 2026-08-04: the basic exercise of a pair is marked `semplice`, before the noun

**Decided by:** native speakers kernelaklees and FraSanga, across the two Snowman review
threads (raised on https://forum.jiki.io/t/1085, for `exercise/snowman-basic`; confirmed on
https://forum.jiki.io/t/1118, post_id 3094, for `exercise/snowman`). **Human-decided,
agent-applied.** **Terms affected:** `basic / simple (exercise-title modifier)` (new row,
under "Platform & curriculum vocabulary"); the `exercise/snowman-basic` Italian title.

Both Snowman exercises had the identical Italian title _Pupazzo di neve_, because English
distinguishes them by a slug (`snowman-basic` versus `snowman`) that never reaches the
learner-visible title. kernelaklees raised it on the basic exercise's thread and proposed a
word meaning "basic/simple", suggesting _semplice_. We held off replying until the second
thread so the pair could be named consistently rather than one exercise at a time.

FraSanga then confirmed it on the fuller exercise's thread: he called separating the two
with _semplice_ a good idea and gave the exact phrasing, _Semplice pupazzo di neve_. That
fixes the word order as adjective-before-noun. Italian allows _pupazzo di neve semplice_,
but postposed _semplice_ reads as a description of the snowman itself (a plain, unelaborate
snowman) rather than of the exercise, and a compound noun like _pupazzo di neve_ takes a
trailing adjective awkwardly. Preposed, it reads as the qualifier on the lesson.

Only the basic exercise is marked. The fuller one keeps the plain _Pupazzo di neve_,
because the distinction is carried entirely by the presence of the modifier on the simpler
of the two; decorating both would restore the ambiguity in a longer form.

It earns a row because the curriculum has many `-basic`/fuller exercise pairs (the maze and
space-invaders sequences among them), so a future pass hitting any of them would otherwise
re-decide both the word and its position.

### 2026-08-04: an animal's face is `faccia`, not `viso` and not `muso`

**Decided by:** native speakers kernelaklees and FraSanga on the Foxy Face exercise review
thread (https://forum.jiki.io/t/1086, posts 5, 6, 7 and 9). **Human-decided,
agent-applied.** **Terms affected:** none as a glossary row (see below); the Foxy Face
translation and its message catalog.

FraSanga originally asked for the fox's face halves to read _viso_ rather than _faccia_
(post 1), and that was applied. kernelaklees then objected (post 5): _viso_ carries a human,
aesthetic register in Italian (_viso pallido_, _viso sorridente_, _viso armonioso_), so on
an animal it sounds odd and almost anthropomorphizing. FraSanga proposed _muso_ as a middle
ground (post 6); kernelaklees ruled that out too (post 7), because _muso_ names only the
snout or mouth region, not the whole face. FraSanga closed the question in post 9 by
accepting _faccia_ and giving the go-ahead to edit the page.

So both reviewers converged on _faccia_ for an animal's face. _viso_ is reserved for human
faces and _muso_ for a snout specifically. Every _viso_ on the Foxy Face page and in its
message catalog was changed to _faccia_ (eight occurrences: one in the instructions prose
and seven across `checks` and `hints`), which also undoes the earlier _viso_ fix rather than
leaving the prose and the catalog disagreeing.

No glossary row was added. _faccia_ was already what the translation reached for by default,
so there is no mapping a future pass would get wrong without one; what needed recording is
why the page did not move to _viso_, and why _muso_ is not the compromise it looks like.

### 2026-08-03: `move()` glossed as the imperative `muovi`, never the reflexive `muoversi`

**Decided by:** native speaker kernelaklees on the Take a Walk exercise review thread
(https://forum.jiki.io/t/1083/3). **Human-decided, agent-applied.** **Terms affected:**
`move()` (exercise function) (new row, under "Keep in English").

The Italian instructions for `maze-solve-walk` glossed the command as _muoversi_. He pointed
out that _muoversi_ is reflexive (the character moving itself), while _muovi_ is the
imperative and so matches what the command actually is: an instruction the learner gives.
The rest of the page he read as fine.

The imperative is also what the neighbouring `maze-solve-basic` page already used
(_`move()` (muovi)_), so the reflexive was an inconsistency rather than a settled choice,
and fixing it aligns the two maze exercises on one gloss.

It earns a row because every exercise that introduces a command glosses it the same way in
parentheses, so the imperative-not-infinitive rule generalizes beyond this one function and
would otherwise be re-decided per exercise.

### 2026-08-03: `tee` (golf) settled on the English word, never `chiodino`

**Decided by:** native speaker kernelaklees on the Rolling Ball exercise review thread
(https://forum.jiki.io/t/1090), answering a question native speaker FraSanga left open on
the same thread. **Human-decided, agent-applied.** **Terms affected:** `tee (golf)` (new
row, under "Exercise domain vocabulary").

FraSanga read _Una pallina da golf si trova sul tee_ and said either the English technical
term or _chiodino_ would be acceptable, but that he does not play golf and so could not say
which is actually used. Nobody on our side could either, so the question was posted back to
the thread and left open.

kernelaklees answered it independently: he checked, and _tee_ is what Italian golf
terminology uses, exactly as in English, so keeping it is correct. That is one reviewer
resolving another's open question, not two reviewers disagreeing, so it settles cleanly and
no further consultation was needed.

_Chiodino_ (literally "little nail") loses on the same evidence: it describes the shape of
the object rather than naming it as the sport does, so it would read as a translator's
invention to anyone who plays.

It earns a row because golf recurs across several exercises (`golf-rolling-ball-loop`,
`golf-rolling-ball-state`, `golf-scenarios`, `golf-shot-checker`), and the neighbouring
golf words are already localized (_buca_, _pallina_), which is exactly the pattern that
tempts a later pass into localizing this one too.

### 2026-08-03: `ballNotAtEnd` on `golf-rolling-ball-loop` moved off the past simple

**Decided by:** agent, on the proposal of native speaker kernelaklees on the Rolling Ball
exercise review thread (https://forum.jiki.io/t/1090). **Human-proposed, agent-applied.**
**Terms affected:** none. This is a single-message wording fix, recorded in
`languages/it/exercise/golf-rolling-ball-loop.md`.

The check message read _La pallina è rotolata fino a {{ballX}}_, tracking the English past
simple "The ball rolled to". kernelaklees explained that Italian does not use a marked past
this way in technical description: English narrates the action, Italian states the resulting
position, in the present or a resultative form. He offered _spostata_ as a more precise verb
than _rotolata_ but was explicit that the verb itself can stay and that the tense is the
real point.

The message is now _La pallina si trova a {{ballX}}_, which is the resultative he described
and is also what the sibling exercise `golf-rolling-ball-state` already says in its own
`ballNotAtEnd` (_Si trova alla posizione {{ballX}}_). Swapping the verb to _spostata_ was
not taken up: it would have kept the tense he objected to, and it describes displacement
rather than the rolling the exercise is about.

No general rule is drawn from this into `guide.md`. One reviewer's observation about one
message is not yet evidence about every past tense in Italian content, and a blanket
"never narrate in the past" instruction would be paid for on every item in every pass.

### 2026-08-03: `refactor` settled on `riorganizzare`, never `rifattorizzare`

**Decided by:** agent, from the two options native speaker FraSanga offered on the
loopy-maze exercise review thread (https://forum.jiki.io/t/1091). **Human-proposed,
agent-applied.** **Terms affected:** `to refactor / refactoring` (new row, under "Loops,
state & program flow").

The `maze-solve-repeat` task and scenario names read _Rifattorizza la soluzione del
labirinto_. FraSanga called _rifattorizzare_ literal and unnatural and offered
_riorganizzare_ (reorganise) or _modificare_ (edit) instead.

_Riorganizzare_ wins because it says what refactoring is: reorganising code without
changing what it does. _Modificare_ is any edit at all, so a learner told to _modificare_
the maze solution has been told nothing about the point of the exercise, which is that the
behaviour must stay identical while the code gets shorter.

It earns a row because this was the **first** occurrence of the term in Italian content and
several later exercises are refactoring exercises. Fixing one page and leaving the choice
unrecorded guarantees the next pass invents a third rendering; the same page already had a
third (_Riscrivi_, "rewrite", in the instruction frontmatter), now aligned.

### 2026-08-03: The "Run Code" button label fixed on `Esegui il codice`

**Decided by:** agent, from established Italian usage, prompted by native speaker FraSanga
on the penguin exercise review thread (https://forum.jiki.io/t/1087). **Human-flagged,
agent-applied.** **Terms affected:** `"Run Code" (the button)` (new row, under "Platform &
curriculum vocabulary").

FraSanga flagged that the label appeared in two forms across Italian content. It does: the
app catalog (`app/messages/it.json`) and the approved `maze-solve-basic` translation both
say _Esegui il codice_, while `penguin` had shrunk it to _Esegui codice_. He did not pick a
form and was not asked to: the established one already existed, so this is bookkeeping, not
a new choice.

It earns a glossary row even though it is not interesting vocabulary. Exercise prose quotes
a button the learner is looking at, and a pass writing that prose loads the glossary but not
the app's UI catalog, so nothing else in the inputs of a pass carries the agreed string.
Article-dropping is exactly the kind of small liberty a translator takes without noticing,
and it produces prose that names a button that does not exist.

### 2026-08-03: Quotation-mark rule narrowed: UI labels are not quotations

**Decided by:** agent, on the proposal of native speaker FraSanga on the maze-solve-walk
exercise review thread (https://forum.jiki.io/t/1083). **Human-proposed, agent-applied.**
**Terms affected:** none. This is a `guide.md` Style notes change.

The 2026-08-02 switch to _caporali_ (below) recorded a native speaker's convention for
quoted dialogue, and the rule as written then stretched it to "a value or label named rather
than used". FraSanga read the result, _troverai una sezione «Funzioni»_, and said guillemets
are wrong there: nobody is being quoted, the sentence is pointing at a panel on the screen.

So the guide now says guillemets are for quoted speech and quoted material, and the name of
an on-screen element (button, panel, section) takes plain double quotes. That is the same
reviewer refining his own convention rather than a reversal of it, and it matches what the
rest of the Italian content already does (`maze-solve-basic`, `penguin`). It also scopes the
outstanding straight-quote sweep noted in the 2026-08-02 entry: that sweep converts quoted
material, and must leave UI labels alone.

### 2026-08-03: Function input names stay in English in Italian prose

**Decided by:** agent, on the proposal of native speaker FraSanga on the fix-wall exercise
review thread (https://forum.jiki.io/t/1084). **Human-proposed, agent-applied.**
**Terms affected:** none. This is a `guide.md` rule, not a term mapping.

`fix-wall` teaches four inputs, `left`, `top`, `width` and `height`, then closes with a
sentence naming all four. The Italian had translated two of them and left two ("i valori di
top, left, altezza e larghezza"), because `top` and `left` have no natural Italian while
_larghezza_ and _altezza_ are the obvious words. FraSanga asked for all four in English.

The rule is general, not one sentence's wording, so it goes in `guide.md` rather than only
in the reviewer notes: whenever prose names a function's inputs it names identifiers the
learner types, and the fact that the source writes some of them without backticks is not
evidence that they are prose. The same words used descriptively ("how wide the rectangle
is") are still translated, and the guide says so, because that distinction is the whole
reason the mistake happens.

### 2026-08-02: `weather` settled on `meteo`, never `tempo`

**Decided by:** agent, on the proposal of native speaker FraSanga on the weather-symbols
exercise review thread (https://forum.jiki.io/t/1026/1). **Human-proposed, agent-applied.**
**Terms affected:** `weather` (new row, under a new "Exercise domain vocabulary" heading).

FraSanga passed the translation as linguistically correct but asked for one swap: _tempo_
replaced by _meteo_, "to be more precise". _Tempo_ is the ordinary Italian word for weather,
but it also means "time", and in an exercise about reading a forecast out of an array that
ambiguity is a real cost. _Meteo_ carries only the weather sense.

The row earns its place rather than being ordinary vocabulary: two renderings were genuinely
available, a translator could reasonably have picked either, and the choice sets a precedent
for the other weather exercise (`cloud-rain-sun`) that is not yet in Italian. It goes under a
new "Exercise domain vocabulary" subheading, because it is subject-matter vocabulary rather
than programming or platform vocabulary and did not fit any existing table.

The row is protected: a native speaker settled it, so no later pass may change the target
without a fresh human agreement logged here.

### 2026-08-02: `template literal` localized to `stringa interpolata`

**Decided by:** agent, on the confirmation of native speaker FraSanga on the two-fer review
thread (https://forum.jiki.io/t/1020/2). **Human-proposed, agent-applied.**
**Terms affected:** `template literal / template string`.

The row sat under "Keep in English": it glossed the term as _stringa con espressioni
incorporate_ and then used the English _template literal_ in prose, with an agent's
low-confidence flag asking for native-speaker confirmation, because no canonical
human-authored Italian source had been found. FraSanga gave that confirmation and rejected
the English: he asked for _stringa interpolata_ (interpolated string), with
_interpolazione_ naming the `${...}` syntax itself. The row therefore moves out of "Keep in
English" into "Values & data types" as a localized term, and the low-confidence flag is
gone. The row is protected: a native speaker has settled it, so no later pass may change
the target without a fresh human agreement logged here.

Reviewing the two-fer exercise catalog, where the Italian read "una template string",
FraSanga separately suggested _stringa speciale_ (special string) rather than the full
technical term, because that hint is the learner's first sight of the idea and the exercise
never introduces it. That is a wording call about one hint, not about the term, so it lives
in `languages/it/exercise/two-fer.md` and the glossary keeps the single technical
rendering.

### 2026-08-02: Quotation marks switched from straight quotes to caporali (« »)

**Decided by:** agent, on the proposal of native speaker FraSanga on
https://forum.jiki.io/t/762/10. **Human-proposed, agent-applied.**
**Terms affected:** none. No glossary row was added, changed or removed; this is a
`guide.md` Style notes change.

The guide's "Quotation marks" rule required straight double quotes (" ") in prose. That
rule had no Italian reasoning behind it: it came in with the original bootstrap draft, and
the 2026-08-01 guide review only recorded it as "checked and left alone" because it matched
the glyphs the guide's own examples already used, which is self-consistency, not a
typographic decision.

FraSanga rewrote the interpreter paragraph of `concept/using-functions` using «...» for
Jiki's reported speech and said explicitly that this is how quoted dialogue is marked. That
is the standard Italian book convention (_caporali_ as the first quotation level, high
double quotes as the second), and it matches what the other Romance guides already do after
their own native speakers asked for it (`fr`, `es`). A native speaker's clear, specific
convention outranks an unreasoned bootstrap default, so the rule now reads guillemets, with
no space inside the marks, the second level on “ ”, and the existing carve-out kept intact:
code blocks, inline code and string literals stay plain ASCII.

Applied to `concept/using-functions` in the same pass. Italian content published before
this date still carries straight quotes in prose and needs a separate sweep to match.

### 2026-08-02: Crank verb note added to the `crank` row

**Decided by:** agent, on the proposal of native speaker FraSanga on
https://forum.jiki.io/t/762/10. **Human-proposed, agent-applied.**
**Terms affected:** `crank (machine crank)`, Notes column only. The target, _manovella_,
is unchanged.

The `crank` row fixed the noun but not the verb, and `concept/using-functions` had Jiki
_girare la manovella_ and then _accendere_ the machine. FraSanga: once you commit to
_girare la manovella_, the verb that goes with it is **_caricare_** (to wind up), as with a
wind-up toy car, where the more you wind it the further it goes. _Accendere_ (to switch on)
belongs to a different, electrical machine. He offered _tirare la leva_ (pull the lever) as
an alternative framing for a one-shot action, but that would replace the crank metaphor
rather than fix its verb, and the crank is the metaphor the English and the illustrations
use, so it was not taken.

The verb recurs everywhere the machine metaphor appears, so it is recorded in the row's
Notes rather than only on one page.

### 2026-08-01: Stage 2c — proposed deltas from the batch 3 pass (unconfirmed drafts)

**Decided by:** nobody yet. **Status: unconfirmed drafts**, proposed by the fable workers of
the Stage 2c batch (concepts: else, else-if, for-loops, while-loops, dictionaries;
exercises: maze-turn-around, bouncer-dress-code, luhn, digital-root, word-count). No
glossary row has been written; these await agreement.
**Terms affected (proposed only):** `else clause`, `loop`, `infinite loop`,
`dictionary (data type)`, `key / value`, `spiral notebook (dictionary metaphor)`,
`Sensing (function category)`, `to turn around`, `checksum`, `digital root`,
`case insensitive`, `standard library (level stdlib)`, `dress code`, `outfit`,
`formal / smart (dress categories)`, `canapés`, plus a Notes clarification on the
existing `chain` row.

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| else clause | clausola else | "ramo else" also defensible; else page sets the precedent for else-if/conditionals. Keyword `else` stays English. | medium |
| loop | ciclo | Proposed independently by the for-loops and while-loops workers (and earlier by repeat). Bare _loop_ is the live loanword alternative; _ciclo_ matches the existing _ciclo annidato_ row. | high |
| infinite loop | ciclo infinito | Fixed phrase tied to the loop row; recurs across concept pages and interpreter errors. | high |
| dictionary (data type) | dizionario | Proposed by both dictionaries and word-count workers. Array stayed English, so this sets the it/en direction for this type; also decides against _mappa_. | high |
| key / value (dictionary pair) | chiave / valore | Core dictionary vocabulary ("coppie chiave-valore"); _chiave_ is not a cognate so its gloss direction is worth fixing. | high |
| spiral notebook (dictionary metaphor) | blocco note a spirale | Jiki metaphor; source alternates notepad/notebook, one rendering needed. Alternative: _quaderno a spirale_. | medium |
| Sensing (function category) | Percezione | Family-wide category label (maze); _Rilevamento_/_Sensori_ also defensible. | medium |
| to turn around / turn-around | fare dietrofront | _girarsi_/_voltarsi_/_tornare indietro_ available; _tornare indietro_ would wrongly imply retracing steps. Names both a function and a maze action. | medium |
| checksum | somma di controllo | Loanword _checksum_ vs native phrase; native is self-explaining for beginners. | medium |
| digital root | radice numerica | Standard Italian mathematical term; the calque _radice digitale_ also circulates. Feminine. | medium-high |
| case insensitive / case sensitivity | senza distinzione tra maiuscole e minuscole | Multiple defensible renderings including bare English; register call worth fixing once. | medium |
| standard library (level stdlib) | libreria standard del livello | "provided by level stdlib" recurs across exercise function catalogs; _libreria_ vs _biblioteca_ should be settled. | medium |
| dress code | dress code (masc., il dress code) | Italian venue writing uses the English term; _codice di abbigliamento_ is stiffer. Bouncer series will reuse it. | medium |
| outfit (what a person is wearing) | abbigliamento | Avoids collision with _abito_ (suit) and _vestito_ (dress), both needed in the same exercises. | medium |
| formal / smart (dress categories) | formale / elegante | _elegante_ could plausibly map to formal instead; the fork must stay consistent across bouncer exercises. | medium |
| canapés | canapè (plural invariant) | _tartine_ is the everyday alternative; _canapè_ fits the upscale register. | low |

Also proposed, as a clarification rather than a row: the else and else-if workers both
avoided _catena_ for "chain" in the run-of-conditions sense (rendered _sequenza_ /
_scorre i controlli_), since the glossary's `chain` row is the array metaphor. Suggest
scoping the existing _catena_ row's Notes to the array metaphor.

Repeat proposals from earlier batches, reaffirmed this pass: `Boolean` → _booleano_
(dictionaries page).

### 2026-08-01: Proposed deltas from the Stage 2 batch 2 pass (unconfirmed drafts)

**Decided by:** nobody yet. **Status: unconfirmed drafts**, proposed by the fable workers of
the second Stage 2 batch (two-fer, strings, digital-clock, arrays, weather-symbols). No
glossary row has been written; these await agreement.
**Terms affected (proposed only):** `default (value)`, `piece of paper (string metaphor)`,
`meridiem`, `Time (function category)`, `data type`, `compound data type`, `Boolean`,
`to iterate`, `box (display/grid panel)`.

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| default (value) | valore predefinito | _di default_ is the common loan alternative; worth settling so passes don't split. Used in a two-fer hint. | medium |
| piece of paper (string metaphor) | foglio di carta | Recurring string metaphor (Jiki writes text on paper); _pezzo di carta_ is the defensible alternative. Also proposed in batch 1 (`if` page). | high |
| meridiem (am/pm indicator) | meridiem (kept in English) | It is also the code parameter name, so prose and code match; _indicatore am/pm_ is the paraphrase alternative. Clock exercises will reuse it. | medium |
| Time (function category label) | Ora | Category labels must stay one term across exercises; _Tempo_ reads as duration, not clock time. | medium |
| data type | tipo di dati | _tipo di dato_ (singular) equally defensible; the plural/singular choice should be settled once. | medium |
| compound data type | tipo di dati composto | Follows the `data type` row above. | medium |
| Boolean (data type) | booleano | Data-type names are a do-not-decide-ad-hoc category; keeping English "Boolean" is also defensible. Also proposed in batch 1. | medium |
| to iterate (over an array/string) | scorrere | The calque _iterare_ is the live alternative; recurs on every loop page. | medium |
| box (display/grid panel, not the value metaphor) | riquadro | Needs to stay distinct from _scatola_ (value-container metaphor), which can appear on the same screen; _casella_ leans form-field/checkbox. | medium |

Deliberate glossary-adjacent calls made in the batch, for the reviewer: forecast "box" in
weather-symbols rendered as _riquadro_, not _scatola_ (panel, not the value metaphor);
"Drawing" category kept as _Disegno_ per the existing family catalog; `meridiem` kept
English in prose and catalog alike.

### 2026-08-01: "drawing shapes" added; "canvas" note tightened, from the rainbow review

**Decided by:** native speaker @FraSanga on forum topic 952 ("[Italian Review] Exercise:
Rainbow"), applied by agent.
**Terms affected:** `drawing shapes (function category)` added; `canvas (graphics
exercises)` Notes column extended (gloss unchanged).

@FraSanga asked for "drawing shapes" to be pinned down, offering _forme geometriche_ as
his reading of it and _forme_ as an acceptable fallback. The geometric reading is the
right one for the function category, which lists rectangle, triangle, circle, ellipse and
line, so the row records _disegno di forme geometriche_ and keeps bare _forme_ only for
sentences where the geometric sense is already obvious.

He also flagged that `drawRainbow.description` used a bare "canvas" although nothing in
the curriculum has explained the word yet. The glossary already chose _area di disegno_,
but its note only covered the `<define>`d case, which left catalog strings (task
descriptions, describers, hints) with no instruction and so falling back to the English
loanword. The note now states explicitly that an undefined occurrence is always _area di
disegno_. No new term was introduced: this is the existing decision applied to a case it
had not been written for. Nothing was added to the Italian prose to explain "canvas",
because the English source does not explain it either; the underlying gap (the source
arguably wants a `<define>` on its first use of "canvas") is an English source-markup
question, not an Italian one.

### 2026-08-01: Conjunction and subject-repetition style rules, from the variables review

**Decided by:** native speakers @kernelaklees and @FraSanga on forum topic 947
("[Italian Review] Concept page: Creating and Using Variables"), applied by agent.
**Terms affected:** none. No glossary row was added, changed or removed.

Both reviewers were positive about `concept/variables` overall, and their specific
suggestions were applied verbatim to the translated file. Two of them were symptoms of a
general pattern rather than one-off slips, so they were also generalized into `guide.md`
under "Information structure and emphasis":

- **Too many conjunctions.** @FraSanga: English clause-chaining ("and", "so", "but")
  carried over word-for-word makes Italian sentences read badly, and long sentences lose
  the thread of the argument. The remedy he gave is to favour punctuation, so the rule is
  stated as "prefer punctuation to conjunctions", with @kernelaklees's own rewrite ("ci
  sono tante scatole: queste scatole sono le variabili") as the worked example. This was
  not chased as a hunt for every existing instance: it needs per-occurrence judgement, so
  it belongs in the guide where every future pass reads it.
- **Restating an inferable subject.** @FraSanga notes Italian implies the subject rather
  than restating it within one sentence. @kernelaklees's rewrite of the box/function
  sentence is the example.
- **"Quindi, invece".** @FraSanga flagged this as a redundant repetition; "Invece" alone
  is correct. Recorded as its own rule because the doubled adversative is a recognizable
  machine-translation artefact, not a judgement call.

@FraSanga also noted that `left` and `top` had been dissolved into prose ("la posizione da
sinistra, quella dall'alto") on their second mention, where the English keeps all four
inputs as inline code. Identifiers naming a function's inputs stay in code formatting; no
new rule was written, because `global/rules.md` already forbids translating code.

### 2026-08-01: Trimmed `guide.md` to rules only

**Decided by:** agent, per `orchestrator.md` § "Where each piece of the feedback goes".
**Terms affected:** none. No glossary row was added, changed or removed.

`guide.md` is loaded into the prompt for every Italian item in every pass, so rationale,
research and anything already stated in a global file or in `glossary.md` was removed from
it. Every behavioural instruction was kept, in the guide or (where it already lived there)
in the glossary. What came out, and why:

- **Audience specifics section, removed.** "Readers are in Italy" moved into the guide's
  opening line. The second bullet ("the Italian tech-education market values clear,
  structured, supportive learning, with a conversational rather than academic tone") was a
  restatement of `global/voice.md`'s audience and tone sections with no Italian-specific
  content, so it was dropped rather than moved.
- **Formality rationale, removed.** "tu" was justified as "the standard register for modern
  Italian online tutorials and learning platforms", and "Lei" was rejected because "it reads
  as distant and bureaucratic for a mentor voice, not as respectful". Both are true and
  neither changes what a translator does; the imperative rules stay. The noi/tu paragraph's
  justification ("this is what real Italian tutorial prose does") became an imperative,
  keeping the operative half: noi carries the narration, tu carries the action.
- **Information-structure preamble, shortened.** The explanation that Italian's SVO order
  makes its failure mode different from a free-word-order language's was analysis, not
  instruction. The rule ("do not map English clause-by-clause"; the risk is flat, monotone
  prose that keeps the English shape and sentence boundaries) is unchanged.
- **Cognate-gloss rationale, removed.** The rule that a `<define>` on a transparent cognate
  expands to nothing extra was justified by Italian and English sharing the Latin alphabet
  and a large Latinate vocabulary, by its being an instance of "Skip a gloss that would
  teach nothing" in `global/voice.md`, and by "it matches the Catalan precedent". The rule
  and its examples stay; the derivation and the cross-language provenance do not. The clause
  making it a standing rule rather than a per-page judgement was kept, because it is
  behavioural: it overrides `voice.md`'s framing of that call as one made per expansion.
- **Worked gloss examples, removed as glossary duplication.** The guide listed _CLI_ →
  _interfaccia a riga di comando_, _framework_ → _struttura di sviluppo riutilizzabile_ and
  _scope_ → _ambito di visibilità_ as examples of glosses worth keeping. All three are rows
  in `glossary.md` already. The guide now names the categories and points at the glossary
  for the wording; the code-identifier example (`turnLeft` (gira a sinistra)) stays, being
  the one category with no glossary row.
- **"Acronyms" worked example, removed.** It gave API and CLI "first use" renderings that
  `glossary.md` already carries verbatim in its Keep-in-English table. Removing it also
  settles a wording conflict with `global/voice.md`: glossing is triggered only by a
  `<define>` tag and there is no first-use auto-detection, so instructions phrased as "first
  use" invite exactly the auto-gloss `voice.md` forbids. The acronym category is still
  listed in Term clarification, and the two glossary rows are untouched.
- **"Titles and headlines" worked examples, removed.** The two Avoid/Prefer pairs ("È Nato
  Jiki!" → "Ecco Jiki" / "Jiki è arrivato"; "Un nuovo modo di imparare a programmare che
  cambia tutto" → "Un nuovo modo di imparare a programmare") only demonstrated two rules
  already stated imperatively: sentence case in Style notes, and "no melodrama, no
  redundancy" in `global/voice.md`. Kept here for reference; they are correct Italian.
- **"Common EN→IT pitfalls" section, removed entirely.** Every item was already a glossary
  row: _restituire_ not _ritornare_ (`to return (a value)`, with the anglicism reasoning in
  the Term rationale below), _percorso_ not bare "curriculum" (`curriculum`), _linguaggio_
  not _lingua_ (`(programming) language`). The fourth, dropping the subject pronoun,
  duplicated the Grammar bullet of the same name; the one thing it added, that "tu" is kept
  when genuinely contrastive ("tu puoi provarlo, io ho già finito"), was merged into that
  bullet.
- **Calls to action, compressed** from a two-line worked example to one line, keeping all
  four Italian phrasings and the rejected "Unisciti a noi!".

Checked and left alone: the quotation-mark rule (straight double quotes) matches the glyphs
used throughout the guide's own examples and in every published Italian translation, so
there was no convention to reconcile. Nothing in the guide contradicted `global/rules.md`,
`global/voice.md` or a glossary row apart from the "first use" phrasing dealt with above.

### 2026-08-01: Confirmed `track (curriculum path)` on `indirizzo`

**Decided by:** owner (iHiD), on native speaker FraSanga's confirmation on the pinned
Italian glossary thread (https://forum.jiki.io/t/319/8). **Human-decided: settled.**
**Terms affected:** `track (curriculum path)`.

The row already read _indirizzo_ but carried an agent's low-confidence flag asking for
native-speaker confirmation. FraSanga gave exactly that: _indirizzo_ "is a suitable
translation", used in Italy when choosing a course of study at secondary school (general
academic, music, technical) and at university to distinguish tracks such as cybersecurity
and AI within one field. The flag was left in place after that reply and FraSanga noticed
it was still there (https://forum.jiki.io/t/895/2). The Notes column now records the
confirmation instead of requesting it, and the row is protected: a native speaker has
settled it, so no later pass may change the target without a fresh human agreement logged
here.

### 2026-08-01: Moved `toggle` from `alternare` to `azionare`

**Decided by:** owner (iHiD), on the proposal of native speaker FraSanga and the agreement of
native speaker giorgx12 on the pinned Italian glossary thread
(https://forum.jiki.io/t/319/11, https://forum.jiki.io/t/319/12,
https://forum.jiki.io/t/319/13). **Human-decided: settled.**
**Terms affected:** `toggle`.

The row carried _alternare_, drafted only because it was a plain, natural Italian word with
no need to borrow "toggle", which is not a reason to prefer it over another plain word.
FraSanga looked for synonyms and proposed **`azionare`**, with the example "Ian toggled the
switch and the light came on." rendering as _Ian azionò l'interruttore e la luce si accese._,
calling it much simpler than _alternare_ or than having to use two separate words to express
the on/off pairing. giorgx12 independently agreed: "azionare is more natural". No reviewer
argued for keeping _alternare_.

The row now reads _azionare_ and is protected: two native speakers have settled it, so no
later pass may change the target without a fresh human agreement logged here.

### 2026-07-31: Settled `streak` on `slancio` / `giorni di slancio`

**Decided by:** owner (iHiD), on native speaker kernelaklees's confirmation on the pinned
Italian glossary thread (https://forum.jiki.io/t/319/7). **Human-decided: settled.**
**Terms affected:** `streak`.

The row previously carried a low-confidence agent draft, _serie_, flagged for confirmation
on first real use. iHiD asked in-thread whether "slancio" (raised via a Duolingo-terminology
pointer from kernelaklees) works as a UI label on its own and whether "uno slancio di 5
giorni" is grammatically sound. kernelaklees confirmed both: "slancio" reads fine bare above
a number, and the phrase is correct (the noun is masculine). The row now reads _slancio /
giorni di slancio_ and is protected: a native speaker has settled it, so no later pass may
change the target without a fresh human agreement logged here.

### 2026-07-31: Confirmed `tech / tech industry`

**Decided by:** owner (iHiD), on the confirmation of native speaker kernelaklees on the
pinned Italian glossary thread (https://forum.jiki.io/t/319/4). **Human-decided: settled.**
**Terms affected:** `tech / tech industry`.

kernelaklees reviewed the Core decisions and confirmed the existing rendering: "You can keep
**settore tech**". She also confirmed the row's existing exclusion, that _industria
tecnologica_ should not be used, because in Italian _industria_ refers to physical
production (a factory). She noted _settore tecnologico_ also exists but is "much less
common", rarely seen in newspapers, startup culture, LinkedIn posts, tech communication or
digital communities, so it stays a rejected alternative rather than a permitted variant; the
Notes column now says so.

Nothing moved. The row was an unconfirmed agent draft and is now a native-speaker-confirmed
decision, so it is protected: no later pass may change the target, the `Use` column or the
meaning of the Notes without a fresh human agreement logged here.

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

**Decided by:** agent, per the pruning test in `global/pass-mechanics.md` § "Proposed glossary delta". Removed 56
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
| template literal / template string | See the dated entry above. |

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
| toggle | See the dated entry above. |
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

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Plain, concrete Italian word for a box. |
| chain | Standard Italian for a physical chain. |
| input slot | The narrow slot you post a coin or letter into (a piggy bank, a vending machine, a letterbox); the dictionary-precise alternative _feritoia_ is more technical/less concrete. |
| return chute | The playground-slide image: concrete and child-vivid, matching the informal register of the other metaphors. Treccani confirms both the playground-slide and vending-machine-delivery-chute senses. |
