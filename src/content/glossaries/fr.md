---
lang: "fr"
name: "French"
family: null
stage: "refining"
governance_sha: "e50c4c0"
content_version: "fcbad8b27b27"
published_at: "2026-08-03"
term_count: 70
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
| Solve the Maze (exercise title) | Évade-toi du labyrinthe | fr | Title only, and no exclamation mark. Prose about the maze keeps "faire sortir le personnage du labyrinthe". |

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
| CLI (the concept) | _interface en ligne de commande_ | Where the source defines it, explain CLI as _interface en ligne de commande_ (command-line interface), then "la CLI". Gender: _la CLI_ (feminine). |
| canvas (graphics exercises) | _zone de dessin_ | The drawing surface in creative-coding exercises. Where the source defines it, explain it as the _zone de dessin_ (the `canvas` element), then use _canvas_. |
| camel case | (no gloss; the spelling is the example) | Always write the term itself as one word, in code style: `camelCase`. Never the two-word phrase « camel case », in guillemets or otherwise: the capital C is the whole point, so the term has to *show* the rule it names. Where the source explains it, keep the explanation (camel = chameau, case = casse, and the chameau/bosses metaphor), which still reads correctly against `camelCase`. Same for any other named case style: `snake_case`, `kebab-case`. |
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
| input slot | entonnoir | Replaces _fente_ (unwanted slang/anatomical connotation) and _Champ de saisie_/_Zone de saisie_ (too office-form-specific for the illustrated funnel). Gender: _l'entonnoir_. |
| return chute | tapis roulant | Replaces _toboggan_ (read as unintelligible) and _canal de retour_/_rampe de retour_. Gender: _le tapis roulant_. |
| machine (function metaphor) | machine | A function modelled as a machine, with an input slot and a return chute. Gender: _la machine_. |
| crank (machine crank) | manivelle | The handle Jiki turns to start a machine: _tourner la manivelle_. Gender: _la manivelle_. |
| shelves (storage) | étagères | The shelves where variables and functions are stored. Gender: _les étagères_ (plural), _une étagère_ (singular). |
| warehouse (Jiki's warehouse) | entrepôt | The place where Jiki hangs out and keeps his machine shelf. Gender: _l'entrepôt_ (masculine). |
| piece of paper (string metaphor) | bout de papier | Never _morceau de papier_ (correct, but stilted in casual French) or _feuille de papier_. Plural _des bouts de papier_. Gender: _le bout de papier_ (masculine). |
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

### 2026-08-03: "Solve the Maze" exercise title → `Évade-toi du labyrinthe` (reviewer vote)

**Decided by:** a vote of native speakers on forum topic 803
(https://forum.jiki.io/t/803), which we ran as a ranking of three candidates and committed
in advance to following.
**Terms affected:** the `Solve the Maze (exercise title)` row.
**Files affected:** `glossary.md` (Core decisions), `exercise/maze-solve-basic` reviewer
notes, and the `fr` title of the `maze-solve-basic` instructions.

The title had been debated at length (`Fais sortir le personnage du labyrinthe` vs `Sors du
labyrinthe` vs a "Solve"-faithful option), so the three candidates were put to a ranking
vote. Results: mirina picked `Évade-toi du labyrinthe`; resu-xunil ranked `Évade-toi` 1st,
`Sors` 2nd, `Résous` 3rd; williamapc ranked `Sors` 1st, `Évade-toi` 2nd and explicitly
disliked `Résous le labyrinthe`, saying it reads like solving a maths problem. `Évade-toi du
labyrinthe` took two first places, was never ranked last, and nobody argued against it, so
it wins. This row is protected: it is a native speakers' decision and is not to be
re-opened by a translation pass.

No exclamation mark, even though one reviewer liked the energy of `Résous le labyrinthe !`:
the English exercise titles carry none, so neither do the French ones.

The decision is scoped to the **title**. The guide's general rule (French doesn't "solve" a
maze; prose says "faire sortir le personnage du labyrinthe") is unchanged, and reviewers
explicitly said that phrasing is fine in the body prose.

### 2026-08-03: `piece of paper` → `bout de papier` confirmed

**Decided by:** native speaker (myrtarazona), forum topic 976
(https://forum.jiki.io/t/976/8).
**Terms affected:** `piece of paper (string metaphor)`.
**Files affected:** `glossary.md` (Jiki physical metaphors), `concept/strings`,
`concept/variables`, `concept/if`, `concept/arrays` translations and their reviewer notes.

The Stage 2 batch 2 pass proposed `morceau de papier` as an unconfirmed, medium-confidence
draft, with `bout de papier` and `feuille de papier` noted as equally defensible.
myrtarazona settled it on the arrays page: `morceau de papier` is correct but can sound
strange in casual French, and `bout de papier` is the more common and natural expression.
The draft row is therefore promoted to a confirmed glossary row reading `bout de papier`,
and every existing occurrence of `morceau(x) de papier` in French content was swapped.
`feuille de papier` was not raised by the reviewer and is excluded as an A4-sheet reading
rather than the scrap Jiki scribbles on. The row is now protected.

Note that `morceau` remains correct in other senses and was deliberately left alone where
it does not mean the paper metaphor: _morceaux de texte_ (pieces of text, in the strings
page description), _morceaux de code_ (`concept/else`, `concept/else-if`), and _les trois
morceaux_ (the three concatenated fragments, `exercise/two-fer`).

### 2026-08-02: "get (something) out" → `récupérer` confirmed

**Decided by:** two native speakers (myrtarazona and resu-xunil), forum topic 976
(https://forum.jiki.io/t/976/5, .../6).

For the technical action of retrieving a value out of an array/string/box (English "get
something out"), `récupérer` is the agreed rendering, not `obtenir` (too generic/standard)
or the `sortir`/`ressortir` phrasing used inconsistently elsewhere on the page. Applied
throughout `concepts/arrays/fr.md`.

### 2026-08-02: `code block` → `bloc d'instructions` confirmed

**Decided by:** native speaker (myrtarazona), forum topic 926 (https://forum.jiki.io/t/926/16).
**Terms affected:** `code block`. **No rendering changed.**

The row already read `bloc d'instructions`, deliberately distinct from `portée` (scope).
myrtarazona confirmed it should stay as-is: a generic programming concept common across
languages, worth keeping fixed early for consistent naming. The row is now protected.

### 2026-08-02: `camelCase`, written as one word, not « camel case »

**Decided by:** native speaker (williamapc), forum topic 946 ("[French Review] Concept:
Créer et utiliser des variables"), post #6 (https://forum.jiki.io/t/946/6).
**Terms affected:** `camel case`.
**Files affected:** `glossary.md` (Keep in English), `concept/variables` reviewer notes,
`concept/variables` translation.

The page named the convention as the two-word phrase « camel case ». williamapc pointed out
that French writing on the subject overwhelmingly writes `camelCase`, one word with the
capital, and that the spelling is doing teaching work: it demonstrates the rule at the same
moment it names it, which the spaced-out phrase cannot. That reasoning holds for any named
case style, so the row covers `snake_case` and `kebab-case` too.

This supersedes the earlier guillemets decision on this page (« camel case » at first
mention): the term is now code-styled rather than quoted. The two-word gloss that follows
it (camel = chameau, case = casse) stays, because the reader still needs to know what the
two English words mean, and it reads correctly against `camelCase`.

Note that the English source still writes "camel case" as two words. This is a French-side
call, not a divergence to be fixed by rewriting the source; if the English is ever changed
to match, nothing here needs to change.

### 2026-08-01: Stage 2 batch 2 proposed additions (unconfirmed drafts, not yet in the glossary)

**Decided by:** nobody yet. These are agent proposals from the Stage 2 batch 2 translation
pass (two-fer, strings, digital-clock, arrays, weather-symbols). Additive drafts awaiting
review; nothing has been written to `glossary.md`.

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| string (gender) | une string (feminine) | Existing "keep _string_ English" row records no gender. Feminine follows dev usage (by analogy with _chaîne_) and avoids the garment reading of "un string". Proposed independently by two workers. | high |
| input (value given to a function/program) | entrée (feminine) | Used across exercise hints and errors; _argument_, _donnée d'entrée_ or kept-English _input_ are all defensible. The draw family fr catalog already uses _entrées_. Proposed independently by two workers. | high |
| quotation marks (string delimiters) | guillemets (doubles) | Must mean the straight `"` characters code uses, not typographic « »; "guillemets droits/anglais" are defensible alternatives. | medium |
| coin (machine input metaphor) | pièce | Jiki metaphor set; _pièce_ is polysemous, "pièce de monnaie" available for first-mention disambiguation. | medium |
| piece of paper (string metaphor) | ~~morceau de papier~~ | Settled: a native speaker chose `bout de papier` instead, see the 2026-08-03 entry above. Now a confirmed glossary row. | resolved |
| compound data type | type de données composé | _composé_ vs _composite_ is a real fork across concept pages. | medium |
| template string | template string (kept English, une ~) | Parallel to the existing _template literal_ row, which does not obviously cover this phrasing. | medium |
| meridiem (am/pm indicator) | meridiem (kept English/Latin) | Also the literal parameter name in `displayTime`; a French prose rendering would split prose from code. | medium |
| indicator (the am/pm argument, prose sense) | indicateur | Overlaps with meridiem above; the pair should be settled together. | medium |
| "Expected X but got Y" (check-message formula) | On attendait « X » mais on a obtenu « Y » | Recurs across many exercise catalogs; attendu/reçu/obtenu variants would otherwise diverge. | medium |

Open questions flagged by the pass, not proposals: whether "la string vide" should instead
read "la chaîne vide" (the existing string row's open question applies with extra force
here), and whether guillemets or straight quotes should wrap sentinel strings inside catalog
values (guillemets were used this pass).

### 2026-08-01: Prefer a relative clause over a compressed modifier

**Decided by:** native speaker (resu-xunil), forum topics 951 ("[French Review] Exercise:
Arc-en-ciel", https://forum.jiki.io/t/951) and the same reviewer's earlier threads.
**Files affected:** `guide.md` (Style notes), `exercise/rainbow` catalog, shared
draw-category catalog.

Two of the three suggestions in topic 951 were the same shape: "du code répétitif" ->
"du code qui se répète", and "une couleur hexadécimale commençant par #" -> "une couleur
hexadécimale qui commence par #". Neither original is wrong, but the compressed forms (an
adjective, a present participle) belong to a more formal, written register than the rest of
the page. A relative clause with **qui** is what a French speaker says out loud, and Jiki's
prose is meant to sound spoken. Recorded as a general style rule rather than two per-item
notes, because the participle pattern recurs constantly in translations from English.

The third suggestion, "Comment mettre la couleur..." -> "Comment mettre de la couleur...",
is a separate point: the partitive is right because the hint question is asked before any
particular colour has been introduced, so the definite article refers back to nothing.
Logged as a per-item note only.

### 2026-08-01: "C'est une égalité. Annonce-la correctement !" confirmed feminine

**Decided by:** us, answering a question from resu-xunil, forum topic 949 ("[French Review]
Exercise: Pierre-feuille-ciseaux", https://forum.jiki.io/t/949).
**Files affected:** none (no change made); `exercise/rock-paper-scissors` reviewer notes.

resu-xunil asked whether the pronoun should be "-le" (agreeing with an implied masculine
_résultat_) or "-la" (agreeing with _égalité_). The string is self-contained: the only noun
in it is "une égalité", in the sentence immediately before, so the antecedent is feminine
and "Annonce-la" is correct. _Résultat_ appears nowhere in that scenario description; it is
in the instructions, in a different string entirely. Left unchanged.

### 2026-08-01: "un espace", not "une espace"

**Decided by:** native speaker (resu-xunil), forum topic 946 ("[French Review] Concept:
Créer et utiliser des variables"), post #1 (https://forum.jiki.io/t/946).
**Files affected:** `guide.md` (Grammar), `concept/variables` translation.

The variables page said "deux mots séparés par une espace". The feminine _une espace_ is
genuine printers'/typographers' jargon for the blank itself, which is why it can look
defensible, but in ordinary prose (and to a beginner) the space between words is _un
espace_. resu-xunil corrected it in his review. Recorded as a grammar rule in `guide.md`
rather than as a per-item note, because the trap will recur on any page that talks about
spaces in names, whitespace, or indentation.

### 2026-08-01: `input slot` / `return chute` settled — entonnoir / tapis roulant

**Decided by:** native speakers (myrtarazona, resu-xunil, williamapc), forum topic 314
("[French Review] Glossary"), posts #16-21 (https://forum.jiki.io/t/314/16 onward).
**Terms affected:** `input slot`, `return chute`.

Long-running open item (see the earlier `fente`/`toboggan` entries below). After
`fente` was flagged as carrying an unwanted slang connotation and several office-form
alternatives (_Champ de saisie_/_Zone de saisie_ for input, _canal de retour_/_rampe de
retour_ for return) were floated without full agreement, myrtarazona pointed out (post #19)
that none of these actually matched Jiki's own illustration: the input slot is drawn as a
**funnel** and the return chute as a **conveyor belt**. She proposed _entonnoir_ (funnel) and
_tapis roulant_ (conveyor belt) instead. resu-xunil agreed immediately and strongly ("These
are the words I was looking for!", post #20); williamapc's later reply (post #21) also reads
as onboard once the machine metaphor was made explicit. `glossary.md` updated to
`entonnoir`/`tapis roulant`.

### 2026-08-01: Typography examples now carry the non-breaking spaces they mandate

**Decided by:** agent, applying the guide's own imperative rules over its own examples.
**Terms affected:** none.

The Typography section requires U+00A0 before `:`, `;`, `!` and `?` and immediately inside
each guillemet, but the guide contained no U+00A0 anywhere: every French example was written
with an ordinary space ("C'est parti !", "À toi de jouer !", "« comme ceci »", "la syntaxe
suivante :", "Tu es prêt ?", "Alors, à quoi ça ressemble ?"). A guide is loaded into the
prompt for every French item in every pass, so examples that contradict the rule teach the
wrong spacing. The rule wins: those six examples now use real non-breaking spaces. The
deliberately-wrong counter-examples ("la syntaxe suivante:", "Tu es prêt?") keep their
ordinary spacing, because that is the point of them.

Also, house style: an em dash in the "Decided by" line of the open-question entry below was
replaced with a comma, per the no-em-dash rule in `CLAUDE.md` and `global/rules.md`.

### 2026-08-01: `guide.md` trimmed to rules only (rationale moved here)

**Decided by:** owner (iHiD), as a repo-hygiene pass, not a term decision. **Terms
affected:** none changed; `CLI` gained a gender note moved out of the guide.

`languages/fr/guide.md` had drifted into recording the conversations that produced its
rules. It is loaded into the prompt for every French item in every pass, so the rationale,
provenance and duplication were being paid for thousands of times. Every behavioural
instruction was kept; what came out is recorded below. No rule was reworded into a
different rule, and no glossary row was changed except the `CLI` addition noted below.

**Why "tu", and the tutorial-culture research behind it.** The guide justified the
tutoiement choice with a survey of French online tutorial culture: OpenClassrooms,
Grafikart and Pierre Giraud, the established French tutorial platforms, all use "vous",
and Jiki deliberately breaks from that convention. The models for Jiki's French voice are
Duolingo's French app and spoken YouTube coding content, both of which use "tu" for a
young, informal, modern audience. The tone target was described as "closer in spirit to a
modern app like Duolingo than to a classic reference manual", which is `global/voice.md`'s
audience principle rather than anything French-specific. The rule itself ("use tu, never
vous") survives in the guide; all of this justification came out.

**Audience section removed entirely.** It said readers are primarily in France with a
secondary audience across other Francophone regions, which is the same fact as the guide's
opening instruction to write general international French and default to France's form
where usage splits. The rest of the section was the tutorial-culture research above.

**Native-speaker sourcing for two rules, previously cited inline in the guide.**

- **"Partir" takes "de" before a starting location** ("qui part **d'**en haut à gauche").
  Native-speaker feedback on https://forum.jiki.io/t/803/2. Also recorded as a bullet in
  `languages/fr/exercise/maze-solve-basic.md`.
- **French doesn't "solve" a maze.** Confirmed by two native speakers on the same thread
  (https://forum.jiki.io/t/803/2 and /4): the concrete phrasing **"faire sortir le
  personnage du labyrinthe"** (make the character exit the maze), naming the character as
  the one exiting rather than treating the maze itself as an object being solved, reads
  best. The guide keeps the rule and the preferred phrasing; the attribution and thread
  links live here.

**"digital" → _numérique_** was attributed in the guide to Académie française guidance.
The rule stays; the attribution is here.

**The U+00A0 rendering check.** The guide justified keeping standard French spacing before
`; ! ?` with a rendering argument: translated content is rendered by the front-end app and
mirrored to i18n-site, both via `marked`, which passes U+00A0 through as an ordinary
Unicode character with no mangling, so there is no rendering reason to drop the
typography. That is research into the pipeline, not an instruction, and it is only worth
revisiting if the renderer changes.

**Why "qui" rather than "ceux qui" after a parenthetical gloss.** The parenthetical is an
aside, not a new sentence, so the relative clause should read as if it were never
interrupted. The rule stays in the guide; the reasoning is here. Original source: the
reviewer note in `languages/fr/concept/using-functions.md`.

**Removed as duplication (rule already lives elsewhere, nothing lost):**

- The `tableau` collision watch (reserve bare _tableau_ for the array, always write
  _tableau blanc_ in full) duplicated the `array / list` and `board / whiteboard` glossary
  rows, which both state it.
- The em-dash bullet restated `global/rules.md`'s house-style ban. Only the French-specific
  half survives in the guide: a hyphen is not an em-dash substitute in running prose.
- The whole **Worked examples** section. Its title/headline and call-to-action examples
  restated `global/voice.md` (plus the sentence-case rule already in the guide's typography
  section); its acronym examples restated the `CLI` and `API` glossary rows; its "natural
  phrasing" examples restated the formality section's tu-register and "on" framing; and its
  "common EN→FR pitfalls" re-ran three anglicisms (supporter, adresser, définitivement)
  already listed in the anglicisms section verbatim.
- Pointer sentences saying that the general audience profile is in `global/voice.md`, that
  the formality section realizes its "modern, informal address" principle, and that
  glossary terms are binding (`global/rules.md` says so).
- Emphasis-only framing on the sentence-rhythm section ("the single biggest quality lever,
  and where machine-produced translations characteristically fail"); the heading still says
  "(critical)".

**One term detail moved into the glossary:** the guide's acronym example carried the gender
of `CLI` (_la CLI_). That is a term fact, not a rule, so it moved verbatim into the `CLI`
row's Notes, matching how the `API` row records _une API_. No other row was touched.

**Gaps noticed and deliberately not filled** (they need native-speaker input, not an
agent's guess): reader gender agreement (the guide never says what to do when an adjective
or past participle has to agree with the reader, e.g. "tu es prêt(e)"); articles and
plurals for terms kept in English (_le framework_ / _les frameworks_, _une API_ is recorded
but the others are not); which apostrophe character to type (U+0027 vs U+2019) in elisions;
and the thousands separator in prose, where the decimal-comma rule has a counterpart the
guide does not state.

### 2026-08-01: `input slot` (_fente_) flagged as having an unwanted slang connotation

**Decided by:** not yet decided, open question. Flagged by native speakers (williamapc,
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
