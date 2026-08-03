---
lang: "ca"
name: "Catalan"
family: null
stage: "setup"
governance_sha: "c72a8bd"
content_version: "095fc33c1a65"
published_at: "2026-08-03"
term_count: 53
category_id: 298
forum_topic_id: 536
video_player_forum_topic_id: 745
---

# Catalan (ca) glossary

The agreed term list for Catalan. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| developer | **desenvolupador** | ca | Masculine generic default in flowing prose; see guide § Style notes. |
| tech / tech industry | **sector tecnològic** | ca | Prose form; use plain "tecnologia" for the general field. |

## Localize (use the Catalan term)

These are terms where the Catalan is used in prose. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| float / decimal | nombre decimal | ca | Use the simpler _decimal_ form for learner-facing prose. |
| array / list | llista | ca | _Llista_ is Jiki's single array/list term; keep it distinct from _matriu_ (2-D matrix, a different concept). |
| Boolean | booleà | ca | Fully localized; do not keep "Boolean" in English. |

### Functions & control flow

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| statement (executable) | sentència | ca | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | afirmació | ca | The proposition sense: a claim that is true or false. Keep distinct from _sentència_ above; pick by meaning, not by the English word. |
| function | funció | ca | The *keyword* `function` in code stays English; the concept in prose is _funció_. |
| parameter | paràmetre | ca | The declaration-site name. |
| argument | argument | ca | The call-site value. |
| brackets (the two after a function name) | parèntesis | ca | The `()` pair. Catalan names the shapes separately, so the word has to say which: _parèntesis_ are round, _claudàtors_ are square, _claus_ are curly. In running prose: "escriu-ne el nom i, tot seguit, els dos parèntesis". |

### Loops, state & program flow

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| interpreter | intèrpret | ca | **A person doing a job, not a program.** On concept pages Jiki *is* the intèrpret, so the word has to be able to name a character. Never a machine-forming coinage (_interpretador_, _programa intèrpret_): those name a tool and cannot name Jiki. |
| instruction (given to Jiki) | instrucció | ca | Everyday word, as in "donar les instruccions correctes al Jiki". Not a formal or legal register word (_ordre_, _directiva_). |
| mental model | model mental | ca | Use it verbatim, not a paraphrase like _manera de pensar_. |
| (programming) language | llenguatge (de programació) | ca | _Llenguatge_ for both senses on a page: the programming language, and "a language a computer understands". Never _idioma_, which is a natural human language. |
| error | error | ca | |
| bug | error | ca | Same word as _error_ above: Catalan does not keep the English "bug" in learner-facing prose. Where a sentence needs both senses in one breath, rephrase rather than reintroducing "bug". |
| exception | excepció | ca | Keep distinct from _error_ above (the catchable-error-object sense). |
| loop | bucle | ca | Not _llaç_. |
| for loop | bucle `for` | ca | Keyword-last: _bucle_ + the keyword, with `for` in backticks (real keyword). Never `for` bucle. |
| while loop | bucle `while` | ca | As above. |
| for-of loop | bucle `for...of` | ca | As above. |
| break (loop control) | sortir del bucle | ca | The keyword `break` itself always stays English in code; this is the prose concept of breaking out of a loop. |
| encapsulation | encapsulament | ca | Abstract OOP concept; gloss even though the word is a transparent cognate. |

### Tooling & engineering

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| auth (authentication / authorization) | autenticació / autorització | ca | Pick by meaning; the two concepts render differently in Catalan. |
| algorithm | algorisme | ca | Also spelled _algoritme_; prefer _algorisme_ for consistency. |
| code | codi | ca | Both the mass noun ("el teu codi") and the countable sense. Never kept in English. Code inside `<code>` tags and real keywords are untouched, as always. |
| debug / debugging | depuració | ca | Verb form _depurar_. Never kept in English. |

## Platform & curriculum vocabulary

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| feature (platform capability) | funcionalitat | ca | Kept distinct from _funció_ (function) to avoid collision, per `global/terms.md`. |
| course | curs | ca | The whole Jiki course the learner is taking ("En aquest curs, el teu intèrpret és el Jiki"). Keep distinct from _lliçó_ (lesson) and _currículum_ (curriculum). |
| pathway | camí | ca | Kept distinct from _itinerari_ (track) even though they're near-synonyms in English too. |
| track (curriculum path) | itinerari | ca | The curriculum path a learner follows. Never _recorregut_. |
| canvas (graphics exercises) | llenç | ca | |
| Q&A | preguntes i respostes | ca | Expand in Catalan; don't keep the English acronym. |

## Keep in English

These stay in English in Catalan prose, with the Catalan gloss to use for each (per the
format in `global/voice.md`); with no `<define>`, use the English bare, no gloss.

| Term | Catalan gloss (on `<define>`) | Notes |
|------|--------------------------------|-------|
| API | _interfície de programació d'aplicacions_ | |
| framework | _entorn de treball_ | "Framework" is what Catalan developers actually say, so it is the ordinary word here (`global/voice.md`). |
| CLI | _interfície de línia d'ordres_ | Note: Catalan says "ordres", not "comandos"/"comandes" as Spanish content often does. |
| bootcamp | (no gloss needed, transparent) | |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Test | (no gloss) | As a keyword/technical token. |
| Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Catalan rendering | Notes |
|-------------------|--------------------|-------|
| box (value container) | capsa | Not _caixa_: too many competing technical senses (crate, cash register, gearbox casing). |
| chain (array metaphor) | reguitzell | **Collision:** _cadena_ is already the established term for **string** (see Values & data types), so it cannot also mean the array/chain metaphor. |
| input slot | ranura d'entrada | |
| return chute | conducte de sortida | |
| machine (function metaphor) | màquina | |
| crank (machine crank) | maneta | Verb phrase: _girar la maneta_ ("girar la maneta i posar-la en marxa"). |
| shelves (storage) | prestatges | Singular _prestatge_ for one shelf. |
| warehouse (Jiki's warehouse) | magatzem | The place Jiki hangs out and keeps his machine shelf. |
| board / whiteboard | pissarra | **One object, one word.** The same _pissarra_ everywhere: the board the learner writes instructions on for Jiki to come and follow, and the board where a function keeps its own instructions and notes. Never two different words. No collision with _llista_ (array). |

---

## Decision log

### 2026-08-04: Loop word order, track/pathway swap, and three terms brought into Catalan

**Decided by:** mnoe (native speaker), on the Catalan website-copy review thread
(forum topic 994, posts 2 and 3). Single reviewer, no dispute, clear recommendations,
so actioned directly per the project's rule that the guide and glossary defer to native
speakers when the two disagree.

#### Loop names go keyword-last

The glossary previously rendered the loop names keyword-first (`for` bucle, `while` bucle,
`for...of` bucle), which is English word order carried over unchanged. Catalan puts the
head noun first and the qualifier after it, so the natural forms are _bucle `for`_,
_bucle `while`_ and _bucle `for...of`_. This also matches the levels catalog, which had
already been translated as "Bucle repeat" and "Bucles avançats", so the glossary was the
outlier rather than the content. The backticks are unchanged: `for`, `while` and `for...of`
are real keywords and stay in code formatting either way.

#### track and pathway swap words

The original glossary gave _itinerari_ to **pathway** and _recorregut_ to **track**, on the
reasoning that "itinerari formatiu" is well established in Catalan education contexts. That
reasoning was right about the word and wrong about which English term it belongs to:
_itinerari_ is precisely a structured course of study someone follows to the end, which is
what Jiki calls a **track**. _Recorregut_ is a route travelled, with no curricular sense,
and reads oddly for a curriculum path. **Pathway**, the looser "way in" sense, takes _camí_,
the ordinary everyday word, which is already how the app catalog renders the marketing
phrasings ("el teu camí en la programació", "el teu camí d'aprenentatge"). The net effect is
that _itinerari_ moved from pathway's row to track's row and _recorregut_ is no longer used
for anything. The older "Platform & curriculum vocabulary" table below still records the
original pathway rationale; it is kept as a record of what was decided then, and this entry
supersedes it.

#### Debug, Code and Bug are translated, not kept in English

All three sat in the "Keep in English" table. The reviewer's position is that Catalan has
ordinary, current words for all of them and there is no reason for a learner to meet the
English:

- **Debug → _depuració_** (verb _depurar_). This was already the word used elsewhere in the
  translated app catalog ("depuració d'errors"), so keeping "Debug" in the glossary made the
  catalog internally inconsistent with itself.
- **Code → _codi_.** The catalog had in practice translated this everywhere already ("el teu
  codi", "Executa el codi"), so this change makes the glossary describe what the content
  actually does. Code inside `<code>` tags, real keywords and command names are untouched;
  that is a separate rule and is unaffected.
- **Bug → _error_.** Catalan has no distinct everyday word for the bug/error split that
  English makes, and inventing one (or keeping the English loanword) would teach a
  distinction the language does not draw. The cost is that **bug** and **error** now render
  identically, which is a real collision and is noted on the glossary row: where a sentence
  genuinely needs both senses at once, it gets rephrased rather than reintroducing "bug".
  Only one occurrence existed in the Catalan app catalog ("com arreglar un bug"), and it
  reads naturally as "com arreglar un error" with no surrounding grammar change.

_Test_, _Frontend_ and _Backend_ stay in the "Keep in English" table; the reviewer did not
raise them.

### 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout), run as a single fable
worker per `orchestrator.md`'s one-worker-per-scope rule. Logged here for review, not
written to `glossary.md`. (This pass superseded an earlier attempt corrupted by a
scratchpad collision with concurrent language passes; that draft was discarded unmerged.)

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| challenge (content type) | repte | Sits alongside exercici/lliçó; must be one word in nav, tabs, statuses. | high |
| streak | ratxa | | high |
| hint | pista | "consell" reserved for "tip". | high |
| dashboard | tauler | Softcatalà convention; "tauler de control" too long for a nav label. | medium |
| badge (gamification) | insígnia | Distinct from "medalla". | medium |
| bonus (scenario/task) | extra | "escenari extra"; "de bonificació" too long for buttons. | medium |
| Deep Dive | anàlisi a fons | Feminine; could arguably stay English as a feature name. | medium |
| upgrade (plan) | passa a Premium / millora el pla | Two renderings by context. | medium |
| scrubber (timeline control) | control de reproducció | No established Catalan term; paraphrase. | low |

Flags, not glossary rows: Pass/Fail badges render "Superat" / "No superat" — "No superat" is
two words in a small badge, may be tight. `modals.premiumUpgrade.basic.subheading` is a
loose rendering ("accelera el teu camí cap al món laboral") since Catalan has no compact
equivalent of "job-ready".

### 2026-08-01: Guide pruned of rationale and duplication

**Decided by:** agent, per `orchestrator.md` § "Where each piece of the feedback goes".
`guide.md` is loaded into the prompt for every Catalan item, so research provenance and
justification were moved here. No behavioural instruction was dropped. What moved:

- **Why "tu" and not "vós"/"vostè".** Catalan has three address registers: "tu" (informal
  singular), "vós" (semi-formal/institutional plural) and "vostè" (formal singular).
  Software UI copy conventionally uses "vós" (the Softcatalà/TERMCAT localization
  convention), and UOC distance-learning material recommends "vosaltres" for a mixed-age
  student body, but neither is Jiki's genre. Real tutorial/mentor-voice writing (e.g. the
  UPC-affiliated Catalan edition of "Introducció a la programació", 2014) uses "tu"
  throughout, and it matches the informal register Jiki uses in its other languages.
- **Why Catalan technical terms are used rather than invented or borrowed.**
  Catalan-medium computer-science teaching is well established at university level (UPC,
  UB, UOC and UdG all publish CS course material in Catalan), so learners are not meeting
  an invented vocabulary: real, current Catalan terms exist for almost every core concept
  Jiki teaches. As a rule this is already `global/voice.md` § "Default to the ordinary,
  common word", so the guide no longer restates it.
- **Why cognate glosses are dropped.** Catalan and English share the Latin script and most
  of this vocabulary, so the great majority of prose `<define>` terms would gloss to
  something the reader can already see is the same word. A parenthetical there teaches
  nothing, so `global/voice.md` § "Skip a gloss that would teach nothing" drops it. The
  imperative and the "no glosses at all is expected" reassurance stay in the guide; the
  reasoning is here. (The policy itself remains an unconfirmed draft, per the 2026-07-30
  entry below.)
- **Why the masculine generic is the default for people-nouns.** It matches the register
  of the real Catalan CS teaching material reviewed when the guide was written.
- **Why topic-fronting is called out.** The guide previously compared Catalan word-order
  freedom to Hungarian's; the cross-language comparison taught the translator nothing and
  was cut.

Duplication removed at the same time, with the surviving statement named:

- "Don't drop hi/en" and "don't skip gender agreement", which appeared both as Grammar
  bullets and again in a "Common EN→CA pitfalls" tail. Merged into the Grammar bullets,
  keeping the better example of each; the pitfalls section is gone. Its third bullet (the
  "que" relative clause) survives as its own Grammar bullet.
- The "First, install Node.js" and "The function returns a value" / "We put the value in
  the box" worked examples, which only re-demonstrated the formality rule and glossary
  rows (`capsa`) stated elsewhere.
- The guide's "Audience specifics" section, whose readership note is now one line in the
  guide's lead.

**Contradiction fixes in the same pass:**

- **API acronym handling.** The guide told the translator to expand API "on first use",
  which contradicts `global/voice.md`: only a `<define>` triggers a gloss and there is no
  first-use auto-detection. The expansion itself duplicated the glossary's API row, so the
  first-occurrence framing and the example were both removed. What survived, because it is
  Catalan-specific and lived nowhere else, is the **gender and elision** the example was
  silently carrying: an acronym or English-kept term takes the gender of its Catalan
  expansion, and the normal article and elision with it ("una API", "l'API", "de l'API").
  This also settles the `l'`/`de l'` question for English-kept terms, which the guide's
  general elision rule covered only implicitly. **Status: unconfirmed draft** (agent's
  reading of the existing elision rule, not a native speaker's decision).
- **Quote glyphs.** Checked for the mismatched-glyph defect: the rule names «guillemets»
  and every example already used them. No defect. The rule stated the ban on English
  quotes twice (once as "not curly quotes", once as "never in English double quotes");
  now stated once.
- **Term mappings out of guide prose.** `Q&A` → _preguntes i respostes_ moved verbatim
  into `glossary.md` (Platform & curriculum vocabulary) as a row. The gloss-test examples
  in the guide were switched to terms that are glossary rows (_bucle_, _sentència_) so the
  guide no longer carries mappings of its own; in particular _cadena de caràcters_ was
  dropped as an example rather than being re-added to the glossary, since the 2026-07-31
  prune deliberately removed it.

**Known gaps** (reported, not filled, since this pass was scoped to pruning): the guide
gives no general rule for the **article and gender of English-kept nouns** beyond the
acronym case above (is it "el framework", "la CLI"?), and says nothing about **sentence
rhythm** (whether Catalan prefers subordination or splitting long English sentences).

### 2026-07-31: Glossary pruned of ordinary vocabulary

**Decided by:** agent, per the pruning test in `global/pass-mechanics.md` § "Proposed glossary delta". Removed 58
rows across every section (Core decisions, Values & data types, Functions & control flow,
Loops/state & program flow, Tooling & engineering, Platform & curriculum vocabulary) where
the English term has one obvious Catalan rendering and nothing was left to decide: mostly
transparent cognates (`variable`, `object`, `error`'s neighbours like `class`/`method`/
`property`) and ordinary dictionary words (`streak`, `pitfall`, `value`, `lesson`,
`exercise`). Nothing in the "Keep in English" or "Jiki physical metaphors" sections was
touched, and no row this file records as an owner decision (`board / whiteboard`,
`interpreter`) was removed. A reviewer might query cutting `if statement` (condicional) and
`string` (cadena de caràcters): both were dropped because their Notes column carried no
recorded alternative or collision, even though the renderings aren't literal word-for-word
translations.

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind Catalan:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. Catalan did not change: it already used
  **pissarra** for both, so this row widened to say so explicitly rather than changing the
  rendering.
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter, so the word has to be able to name a character.
  Catalan did not change: _intèrpret_ was already right, because it is the everyday Catalan
  word for a human interpreter or translator and doubles as the CS term without sounding
  like a device. What changed is that the row now says so, and rules out a
  machine-forming coinage (_interpretador_, _programa intèrpret_), which names a tool and
  cannot name Jiki.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: Catalan glossary drafted for the using-functions pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

The rows the using-functions concept page needed were drafted in this pass: the metaphor
rows (`machine`, `crank`, `shelves`, `warehouse`, `box`, `chain`, `input slot`, `return
chute`, `board / whiteboard`), `interpreter`, `instruction (given to Jiki)`, `mental model`,
and `(programming) language`, among others across the file. None of these has been checked
by a native speaker.

**Standing cognate-gloss policy, also unconfirmed:** a prose `<define>` gloss is dropped
when the Catalan is a recognisable cognate of the English (`intèrpret`/interpreter,
`error`/error, `funcions`/functions, and most of the file), on the reasoning that a
parenthetical teaching the reader something they can already see is the same word teaches
nothing. This is a deliberate policy, not an oversight, but it means a Catalan concept page
can carry no English glosses at all, which is an unusual outcome for this repo. The
translator who applied it flagged that it specifically wants a native speaker's view before
being treated as settled.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`) is not repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| streak | Standard Catalan word for a run/streak (sports, games, daily habits). Medium confidence, single source; flagged for native-speaker confirmation on first real use. |
| pitfall | Literally "trap"; closest natural fit for "a mistake to watch out for." Medium confidence, flagged for review. |

#### Values & data types

| Term | Why |
|------|-----|
| value, number | Ordinary words. |
| true / false | Medium confidence; not independently cross-verified, flagged for review on first real use. |
| float / decimal | TERMCAT also has _nombre de coma flotant_ for the floating-point representation specifically; _decimal_ was chosen as the simpler learner-facing form. |
| array / list | Real Catalan CS usage (UPC OCW, Jutge.org) distinguishes _vector_/_taula_ (fixed array), _llista_ (Python-style dynamic list), and _matriu_ (2-D matrix); _llista_ was chosen as Jiki's single term since it avoids the matrix collision. |
| string | Confirmed by TERMCAT and by direct textbook usage (chapter title "Cadenes de caràcters"). |
| Boolean | Unlike some languages, Catalan fully localizes this term. |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary words, so they stand alone. |
| if statement | Confirmed by textbook chapter usage ("Condicionals encadenats"). |
| expression, operator, NOT operator, to define, pure function | Transparent cognates or phrases. |
| function | Transparent cognate. |
| to call (a function) | Medium confidence; standard verb by analogy with other Romance-language CS usage. |
| parameter, argument | Transparent cognates. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| mental model | Established Catalan phrase. |
| variable, assignment, code block, error, exception, iteration, loop body, increment, concatenation, state, class, method, property, object | Transparent cognates or phrases. |
| assignment | Also confirmed by textbook usage ("Assignacions repetides"). |
| nested | Confirmed by textbook usage ("condicionals... niats"). |
| loop | Confirmed dominant term. |
| toggle | Medium confidence; "to alternate/switch." |
| scope | Confirmed by direct textbook usage; no dedicated TERMCAT entry yet, medium confidence. |
| method | Also confirmed by textbook usage. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| deploy | Noun form _desplegament_ is solidly confirmed (Softcatalà); the verb's exact CI/CD sense is lower confidence, no dedicated TERMCAT entry found. Flagged for native-speaker confirmation on first real use. |
| tool / tooling | Ordinary word. |
| module, edge case, backwards compatibility | Transparent cognates or phrases. |
| algorithm | Transparent cognate. |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| pathway | Well-established in Catalan education contexts ("itinerari formatiu"). |
| tutorial | Transparent cognate. |
| canvas | Medium-low confidence; the painting-canvas word. Flagged for review since "canvas" as a bare tech loanword is also plausible. |

#### Keep in English

| Term | Why |
|------|-----|
| API | TERMCAT confirms the acronym is accepted as-is once explained. |
| framework | TERMCAT lists it as an accepted synonym alongside _entorn de treball_. |
| bootcamp | Jiki's predecessor intensive program; no natural Catalan equivalent found, kept English like in other languages. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Small-container word (matchbox-scale); the right physical size for "a value goes in a box." |
| chain | _Reguitzell_ ("a long series of things," used idiomatically for lining things up in a row) is more literary and less common in spoken register than _cadena_ would have been. This is the highest-priority metaphor term to confirm with a native speaker. |
| input slot | _entrada_ (input) + _ranura_ (a slot/opening). Catalan already uses _ranura_ for a hardware expansion slot, which reinforces rather than undermines the metaphor. |
| return chute | _sortida_ (output) + _conducte_ (a duct/channel). No established term exists since this is a Jiki-only coinage; no collision found. |
| machine | Direct cognate; both the general and everyday-appliance senses map onto "takes an input, does work, produces output." |
| crank | The small hand crank on a machine; ordinary everyday word, no technical double meaning. |
| shelves | Plain word for storage shelves; no technical double meaning found. |
| warehouse | Ordinary everyday word for a storeroom/warehouse. |
| board / whiteboard | Covers both the classroom blackboard and the modern whiteboard sense. |
