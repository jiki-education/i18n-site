---
lang: "fr"
name: "French"
family: null
stage: "reviewing"
governance_sha: "cd8ab70"
content_version: "b956fa3a1406"
published_at: "2026-08-16"
term_count: 99
category_id: 72
forum_topic_id: 314
video_player_forum_topic_id: 755
---

# French (fr) glossary

The agreed term list for French. Every term here is binding: use it exactly, with no
synonyms and no mixing within a document. Rows whose Notes begin "Unconfirmed draft" are
still binding for consistency, but no native speaker has checked them yet, so they are the
ones to raise on the forum. Why each term was chosen is in the decision log
(`glossary-notes.md`).

## Core decisions

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| streak | série | fr | A run of consecutive days, as in the learning-platform sense. |
| foot-gun | piège involontaire | fr | Settled 2026-08-10 on topic 314; do not reopen. On the first mention in a document, keep the English source's own explanation alongside it: _un « piège involontaire », de quoi se tirer une balle dans le pied sans le vouloir_. Later mentions in the same document may shorten to _piège_. Never _fonctionnalité pénalisante_, _effet de bord_ or _faux ami_. |
| Solve the Maze (exercise title) | Évade-toi du labyrinthe | fr | Title only, and no exclamation mark. Prose about the maze keeps "faire sortir le personnage du labyrinthe". |
| Take a Walk (exercise title) | Fais un tour | fr | Confirmed 2026-08-12 by mirina (topic 1241). Title only. The English is a call to action, so the French title is imperative; the earlier _Une petite marche_ read as the descriptive "a short walk". Never _Va faire un tour_: mirina flags it as harsh and derogatory in spoken French ("get lost"). |
| Loopy Maze (exercise title) | Le labyrinthe, version boucles | fr | Settled 2026-08-06 by an owner-authorised ruling after three native speakers did not converge (topic 314). Title only. Do not reopen. The title must not describe the maze itself as looping. |
| UI button label quoted in prose | the app's own `fr` catalog string | fr | Unconfirmed draft (agent, 2026-08-03). When prose tells the learner to press a button, quote the string the French app actually shows, in guillemets and italics: _« Exécuter le code »_. Never invent a fresh rendering of an English button label. |

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
| input(s) (beginner framing of what you give a function) | entrée(s) | fr | Unconfirmed draft (agent, 2026-08-03). Feminine: _une entrée_, _les entrées_. Use it where the English source itself says "input" in beginner prose (_la fonction `triangle` prend 7 entrées_). It does **not** replace _paramètre_ or _argument_ above: keep those where the English says "parameter"/"argument", which is the precise register. The two are in tension in practice, and the `draw` family catalog currently says _arguments_ in six places and _entrée_ in two, so this row is the open question, not a settled split. |
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
| code block | bloc de code | fr | Deliberately distinct from _portée_ (scope) below. Never _bloc d'instructions_, which excludes expressions. |
| iteration | itération | fr | Verb: _itérer_; "parcourir" also natural for iterating over a collection. |
| break (loop control) | instruction `break` | fr | The keyword `break` in code stays English; this is the prose concept of breaking out of a loop. |
| modulo / remainder operator | modulo (opérateur) / le reste (valeur) | fr | _modulo_ for the `%` operator; _le reste (de la division)_ for the resulting value. |
| toggle | basculer | fr | Verb only; no crisp noun exists. "basculer une valeur booléenne." |
| state / stateful | état / à état | fr | "à état" or "avec état" for "stateful". |
| scope | portée | fr | Deliberately distinct from _bloc de code_ (code block) above. |

### Tooling & engineering

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| auth (authentication / authorization) | authentification / autorisation | fr | Pick by meaning. |
| tool / tooling | outil / outillage | fr | _outils_ reads more naturally than _outillage_ in most prose; _outillage_ for the collective sense ("toolchain" = _chaîne d'outils_). |
| edge case | cas limite | fr | The agreed rendering; no official French ruling exists, so do not coin an alternative. |
| backwards compatibility | rétrocompatibilité | fr | Not "compatibilité descendante". |
| refactor | réécrire | fr | Unconfirmed draft (agent, 2026-08-03). Noun form: _réécriture_. Never the anglicism _refactoriser_/_refactoring_ in learner-facing prose. |
| standard library (level stdlib) | bibliothèque standard du niveau | fr | Flagged by native-speaker review (resu-xunil, t/1620, 2026-08-15): some exercises had drifted to "stdlib du niveau"; standardized on the majority spelled-out form. |

### Platform & curriculum vocabulary

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| feature (platform capability) | fonctionnalité | fr | Deliberately distinct from _fonction_ (function) to avoid collision. |
| course | cours | fr | The whole Jiki course the learner is taking: _dans ce cours_. Keep distinct from _leçon_ (lesson) and _programme_ (curriculum). |
| curriculum | programme | fr | Avoid the false friend "curriculum", which in French means a CV/résumé. |
| pathway | parcours | fr | A structured learning sequence. Deliberately distinct from _voie_ (track) below. |
| track (curriculum path) | voie | fr | Confirmed by a native speaker (2026-08-06), replacing the earlier unconfirmed _filière_. Deliberately distinct from _parcours_ (pathway) above. Feminine: _une voie_, _la voie_, e.g. "Choisis ta voie !". |
| syllabus | programme (du cours) | fr | Note the deliberate overlap with _curriculum → programme_; disambiguate with "du cours" when both appear in the same context. |
| challenge (platform content type) | défi | fr | Confirmed by a native speaker (2026-08-11, topic 314) and by the app's own French copy, which already says it: the sidebar item _Défis_, the heading _Défis associés_, _Défis récents_, and _Relève des **défis** plus difficiles_. Gender: _un défi_, plural _des défis_. The Jiki content type, capitalised _Défis_ where the English capitalises Challenges. Distinct from `puzzle`, which uses _casse-tête_/_énigme_/_défi_ depending on context: see that row, and avoid _défi_ for the puzzle sense wherever the platform sense could be read on the same screen. |
| Not started (progress status) | Non commencé / Non commencés | fr | Never _Pas commencé_. Agree in number with what the label describes: singular _Non commencé_ on a status badge for one item (e.g. one challenge), plural _Non commencés_ on a filter tab covering a list of items. |

### Exercise world vocabulary

The recurring nouns and verbs of the exercise families (space invaders, golf, the drawing
exercises). They matter because a family shares one message catalog across many exercises,
so a term that drifts between two exercises drifts inside one screen.

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| alien | alien | fr | Confirmed by native speakers (2026-08-04). Gender: _un alien_, plural _des aliens_. Never _extraterrestre_, which is heavier than the arcade register the exercise is written in. |
| row (of aliens) | rangée | fr | Unconfirmed draft (agent, 2026-08-03). Gender: _une rangée_. Never _ligne_ here, which in these pages already means a line of code. |
| to shoot down (an alien) | abattre | fr | Confirmed by a native speaker (2026-08-04), over _vaincre_, which is now settled and not to be reopened. The act of firing itself stays _tirer_ (_tire sur chaque alien_); _abattre_ is the outcome (_tu n'as pas abattu tous les aliens_). |
| shot (golf) | coup | fr | Unconfirmed draft (agent, 2026-08-03). Gender: _un coup_, as in _un coup de golf_, _la longueur du coup_. |
| unit (distance moved) | unité | fr | Confirmed by a native speaker (2026-08-05). Gender: _une unité_. The distance a thing moves in one call, as used by the `golf` family catalog: _faire rouler la balle d'une unité vers la droite_. |
| step (generic) | (no fixed term) | fr | Confirmed by a native speaker (2026-08-05): unlike `unit` above, "step" has no single fixed rendering. Pick by context: _étape_ (a stage in a sequence, "étape après étape"), _pas_ (a footstep or a discrete move, "pas à pas"), _marche_ (a stair step), or others. Do not render it as _unité_. |
| inset (drawing exercises) | en retrait / le retrait | fr | Confirmed by a native speaker (2026-08-05). Adjectival/adverbial use _en retrait_ (_un rectangle en retrait_), noun use _le retrait_. Recurs across the drawing exercises, so do not alternate with _décalage_ or _marge_. |
| nose / snout (of a snouted animal) | le museau | fr | Confirmed by native speakers (2026-08-04). Gender: _un museau_. The fox and similar snouted animals in the drawing exercises. Never _truffe_, which everyday French attaches to pigs and boars and reads oddly for a fox. Never _la pointe du museau_, which is too heavy for instructions. Applies only to snouted mammals: for birds (the `penguin` exercise) use _le bec_, never _museau_ and never _nez_. |
| beak (of a bird) | le bec | fr | Confirmed by native speakers (2026-08-05). Gender: _un bec_. The beak-shaped triangle in the `penguin` exercise. Never _le nez_: unlike snouted mammals, where everyday French tolerates _nez_ alongside _museau_, French never says _nez_ of a bird at any register. |
| penguin | pingouin | fr | Confirmed by native speakers (2026-08-04). Gender: _le pingouin_. The everyday French word, matching the cartoon drawing the exercise uses, not the zoologically stricter _manchot_. |
| to fill/plug (a hole) | combler | fr | Confirmed by a native speaker (2026-08-06), replacing the earlier unconfirmed _boucher_. Past participle _comblé_ agrees with its noun ("le trou... comblé"). |
| to cover (a hole with a shape) | recouvrir | fr | Confirmed by a native speaker (2026-08-06), replacing the earlier unconfirmed _couvrir_ in this context. |
| puzzle (the thing the learner has to solve) | casse-tête / énigme / défi (context decides) | fr | Confirmed by a native speaker (2026-08-11, topic 314). **Never _puzzle_**, whose ordinary French sense is a jigsaw, which misreads badly where the exercise also has a board or pieces. Pick by context: _casse-tête_ where the point is a brain-teaser to work out (_un petit casse-tête de logique_, _un célèbre casse-tête mathématique_); _énigme_ where the framing is a mystery or an investigation (_utiliser des fonctions pour résoudre des énigmes_); _défi_ where it simply means the task the learner is being set (_relève ce défi en 5 lignes de code_). Where the sense is just "this exercise", _exercice_ is also fine. One document picks one of them and stays with it. _défi_ is also the app's word for a platform Challenge (see the `challenge (platform content type)` row under Platform & curriculum vocabulary), so avoid it where both senses could be read on the same screen. |
| skyline (city) | la ligne d'horizon | fr | Provisional (orchestrator call, 2026-08-10), pending @fleurdelys44. Never the anglicism _skyline_. Recurs across the `cityscape` exercises and the Cityscape project, so do not alternate with _profil urbain_ or _panorama urbain_. Where the phrase is "a skyline of buildings" rather than the city's own skyline, _une silhouette de bâtiments_ reads better than repeating _ligne d'horizon_. |

## Keep in English

These stay in English in prose, because a beginner reader already knows the English form
of them from surrounding tooling, or the French official term is not what French
developers actually say. Where the source `<define>`s one of these terms, use the French
in the gloss column below; with no `<define>`, use the English bare, no gloss.

| Term | French gloss (on `<define>`) | Notes |
|------|--------------------------------|-------|
| string | _chaîne de caractères_ | Confirmed by native speakers (2026-08-14, topic 314), closing the open question. **Always italicize the bare English term in prose: _string_, _strings_.** In the string concept itself, use _chaîne de caractères_ where the source defines it, then _string_ throughout. Keeping it English leaves _chaîne_ free for the array chain metaphor. _chaîne de caractères_ may still be used sporadically in prose where it reads better, but never repeatedly through the same page, which reads as tedious. Three carve-outs where underscores would render literally rather than as italics: a page's frontmatter `description` field (the card component does not parse Markdown), video subtitles (`.vtt`), and HTML `alt=`/`src=` attributes (not parsed as Markdown either, so a screen reader would read the underscores aloud). |
| API | explain what it is in French | Where the source defines it, explain the concept in French, not just gloss the acronym. Gender: _une API_ (feminine). |
| framework | _cadre de développement_ | Where the source defines it, explain it means a reusable _cadre de développement_, then use _framework_ freely. |
| workflow | _flux de travail_ | The software-engineering sense (a sequence of dev tasks). Where the source defines it, explain it means _flux de travail_, then use _workflow_. |
| template literal | _littéral de gabarit_ | Where the source defines it, explain it as a _littéral de gabarit_ (the official term), then use _template literal_. **Italicize the bare English term in prose**, same as _string_ (2026-08-14, topic 314). Same `.vtt`, frontmatter, and HTML-attribute carve-outs. |
| CLI (the concept) | _interface en ligne de commande_ | Where the source defines it, explain CLI as _interface en ligne de commande_ (command-line interface), then "la CLI". Gender: _la CLI_ (feminine). |
| canvas (graphics exercises) | _zone de dessin_ | The drawing surface in creative-coding exercises. Where the source defines it, explain it as the _zone de dessin_ (the `canvas` element), then use _canvas_. |
| camel case | (no gloss; the spelling is the example) | Always write the term itself as one word, in code style: `camelCase`. Never the two-word phrase « camel case », in guillemets or otherwise: the capital C is the whole point, so the term has to *show* the rule it names. Where the source explains it, keep the explanation (camel = chameau, case = casse, and the chameau/bosses metaphor), which still reads correctly against `camelCase`. Same for any other named case style: `snake_case`, `kebab-case`. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

### Titles that stay as they are

Page and exercise titles whose French is the same text as the English, either because the
word is identical in both languages or because the title is a name, a named work or
wordplay. The body and the description are still translated as normal; only the title
stands. Settled 2026-08-13 by iHiD; see `glossary-notes.md`.

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| Animation (concept title) | Animation | en | Title only. The French word is spelled the same; prose about animation still uses _animation_ normally. |
| Hello (exercise title) | Hello | en | Title only. The exercise is named after the `"Hello"` string it returns, so the title has to match the code. |
| Luhn (exercise title) | Luhn | en | Title only. Hans Peter Luhn's surname; also used in prose as _la formule de Luhn_. |
| Space Invaders (exercise title) | Space Invaders | en | Title only. Decided 2026-08-14 (topic 1244): the 1978 arcade game's name, kept as a deliberate reference rather than translated to _Les envahisseurs de l'espace_. |
| Triangle (exercise title) | Triangle | en | Title only. The French word is spelled the same. |
| Two-Fer (exercise title) | Two-Fer | en | Title only. English wordplay ("two for one") that carries the exercise's `"One for you, one for me."` line; there is no French equivalent that keeps both. |
| Hello, World! 👋 (blog post title) | Hello, World! 👋 | en | Title only. The canonical first-program phrase, used as-is by French developers. |

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

### 2026-08-14: the `string` open question, closed (bare English terms now italicized)

**Decided by:** resu-xunil and williamapc, forum topic 314 (https://forum.jiki.io/t/314), posts 94-96.

The glossary had recorded a tension: `string` was kept English so _chaîne_ stayed free for
the array-chain metaphor, but the ordinary-word principle pointed at _chaîne de caractères_,
which French dev writing genuinely uses. resu-xunil reopened it (post 94), reporting that
bare English `string` sitting unmarked in French sentences read uncomfortably, and proposed
either italicizing it or switching to _chaîne de caractères_ outright, preferring the
former. williamapc agreed (post 95) and added the limiting condition from the other side:
the repetition _chaîne de caractères_ forces is fine when sporadic, tedious when it recurs
through a page.

The two positions combine into one rule rather than competing, so the original
English-keeping call stands and gains a typographic marker that answers the discomfort:
`string` stays English and is always italicized in prose, and _chaîne de caractères_ stays
available for occasional use where it reads better but must not repeat through the same
page. resu-xunil extended the same treatment to `template literal` (post 96). Whether it
extends to the other kept-English terms (`API`, `framework`, `workflow`, `CLI`, `canvas`)
was not asked and is not decided here.

Two mechanical carve-outs surfaced in posts 98-99, where the same italic markup would reach
the reader as literal underscore characters rather than as italics: a page's frontmatter
`description` field (not parsed as Markdown by the card component) and video subtitles
(`.vtt`). Both stay unitalicized.

**Terms affected:** `string`, `template literal` (glossary rows updated in the "Keep in
English" table).

### 2026-08-12: "Take a Walk" exercise title → `Fais un tour` (confirmed, replaces _Une petite marche_)

**Decided by:** mirina, forum topic 1241 (https://forum.jiki.io/t/1241), post 3.
**Terms affected:** the `Take a Walk (exercise title)` row.
**Files affected:** `glossary.md` (Core decisions), the `fr` title of the
`maze-solve-walk` instructions, and `languages/fr/exercise/maze-solve-walk.md`.

**What was wrong.** _Une petite marche_ was an agent draft from the Stage 3 batch 1 pass
(2026-08-03), never checked by a speaker. mirina's objection is twofold: it reads back into
English as "A short walk", which is not what the title says, and more importantly it is
**descriptive** where the English is a **call to action**. "Take a Walk" is an imperative
addressed to the learner, and the French lost that register entirely.

**The options she gave**, with her own worked examples in spoken French:

- _Fais un tour_ (her lead pick)
- _Va faire un tour_ (offered explicitly so it could be ruled out, see below)
- _Sors te promener_ / _Va te promener_
- _Sors faire une balade_ / _Va faire une balade_

**Why _Va faire un tour_ is rejected, permanently.** mirina raised it herself only to have
it eliminated: in spoken French it is double-edged and very derogatory, used verbatim to
tell someone to get lost ("Allez, allez, va plutôt faire un tour avant que ça dégénère..."
= "go take a walk before this gets out of hand"). It is recorded as rejected in the
glossary row so a future pass does not rediscover it as an obvious literal rendering. The
same caution applies by extension to _Va te promener_, which carries a comparable
send-someone-packing reading.

**Why _Fais un tour_ wins** over the _sors.../promener/balade_ variants:

- It is the native speaker's own first choice, and no competing speaker has been heard on
  this title.
- It is the shortest of the candidates, which matters for a title: it reads as a label, as
  the English does. _Sors faire une balade_ is a full sentence of instruction.
- It matches the register the fr titles already use. The sibling exercise `Solve the Maze`
  is _Évade-toi du labyrinthe_, also a bare imperative to the learner, so this keeps the
  maze titles consistent rather than mixing a description in among imperatives.
- _Va faire un tour_ being poisoned does not poison _Fais un tour_: mirina's own contrast
  puts the derogatory reading squarely on the _va_ construction, and her neutral example
  (« ça te dirait d'aller faire un tour ? ») shows the _faire un tour_ collocation itself is
  ordinary and friendly.

**The one thing given up.** The 2026-08-04 entry below declined resu-xunil's _une petite
balade_ partly because _marche_ tracks the `walk()` function the exercise teaches. _Fais un
tour_ drops that echo too. That is accepted deliberately: the link to `walk()` is carried
by the instructions prose, which glosses the function as « marcher » in the body text, and a
title's job here is register, not vocabulary matching. A speaker's reading of the register
outranks an agent's preference for a lexical echo.

### 2026-08-12: "Space Invaders" → _Les envahisseurs de l'espace_? (DECIDED 2026-08-14: keep English)

**Raised by:** mirina, forum topic 1244 (https://forum.jiki.io/t/1244), post 3.
**Status:** decided 2026-08-14. Keep "Space Invaders" in English everywhere, as it already is.
See the 2026-08-14 resolution note at the end of this entry.
**Terms affected:** `Space Invaders`, which is left in English everywhere it appears.
**Files affected so far:** `languages/fr/glossary-notes.md` only.

**What mirina proposed.** That the exercise title should not stay in English when a common
French option exists that is still part of everyday French speech regardless of the
speaker's age, and that "Space Invaders" should become _Les envahisseurs de l'espace_. She
illustrated it with two screenshots of the French dashboard showing the English title in
place. She added her own caveat, unprompted: "If approved, the change should apply
everywhere (« Space Invaders » has multiple use cases)."

Contingent on the title changing, she offered two replacement phrasings for the
`space-invaders-solve-basic` short description (English: "Shoot down some aliens in your
first taste of Space Invaders"), explicitly labelled as supplementary propositions
assuming the title change is approved:

- _Abats des aliens pour débuter avec les Envahisseurs de l'espace_
- _Abats des aliens pour découvrir les Envahisseurs de l'espace._

**Why this is not a normal wording fix.** Two things put it above the bar for actioning a
single reviewer's suggestion directly:

- **Scope.** Her own caveat is right, and the reach is wider than the one exercise under
  review. The four Space Invaders exercises (`space-invaders-solve-basic`,
  `space-invaders-repeat`, `space-invaders-conditional`, `space-invaders-nested-repeat`)
  all carry it in their titles, and the name also appears in `exercise/alien-detector`,
  `exercise/scroll-and-shoot`, `concept/state` and `concept/while-loops`, plus level and
  project copy. A half-applied rename would be worse than either consistent answer, so it
  has to be settled once and applied everywhere or not at all.
- **It is arguably a proper name, not vocabulary.** "Space Invaders" is the title of the
  1978 arcade game, and the English source treats it as a deliberate reference to it (the
  `space-invaders-solve-basic` instructions call it "a classic arcade game from the 1970s").
  Translating it turns a specific cultural reference into a generic descriptive phrase.
  Against that, mirina's point stands on its own: _les envahisseurs de l'espace_ is
  ordinary, current French, and a learner reading the French course should not have to
  parse an English phrase to know what the exercise is about. Both considerations are
  real; neither one obviously wins.

**Where it stands.** Asked back on the thread, inviting other French reviewers
(resu-xunil in particular, who opened t/1244 and is the most active fr reviewer, and anyone
active on the pinned glossary topic 314) to weigh in before anything moves. Until a second
native speaker answers, a translation pass meeting "Space Invaders" leaves it in English as
it is today, and must not adopt either of the two description phrasings above.

**Addendum, 2026-08-13.** A `Space Invaders (exercise title)` row now exists in
`glossary.md`, added as part of the titles-that-stay-as-they-are entry below. It records
what this entry already says a pass must do (leave the title in English), so that coverage
stops reporting the page as unreviewed; it decides nothing. mirina's question is still open
and a second French voice still settles it. If the rename is adopted, that row is removed
along with the English titles, and this entry is what says why.

**Resolution, 2026-08-14.** resu-xunil answered on t/1244, post 6 — the second native-speaker
voice this entry was waiting on. His answer: keep "Space Invaders" in English. He pointed to
the same reasoning already recorded above (the 1970s-arcade-game framing in the English
source) and said plainly he'd never thought of it as something to translate. mirina, having
weighed the tradeoff herself in post 5, had already come around to seeing value in keeping the
English reference too ("this is actually a great opportunity" for students to look it up).
With both active French voices landing on the same side, this is decided: **`Space Invaders`
stays in English everywhere it appears**, and the `Space Invaders (exercise title)` row in
`glossary.md` is now a settled decision, not a placeholder. Mirina's two contingent
description phrasings (_Abats des aliens pour débuter/découvrir avec/les Envahisseurs de
l'espace_) are not adopted and should not be used.

### 2026-08-13: seven titles recorded as staying as they are (owner decision)

**Decided by:** iHiD, 2026-08-13, in session. His instruction: "If you're not sure if
something's right (e.g. the English titles), that's fine, count that as done."
**Terms affected:** the seven rows under "Titles that stay as they are" in `glossary.md`.
**Files affected:** `glossary.md` only. No translated file was touched.

**What this is.** `coverage.mjs` cannot tell a title nobody translated from a title that is
correctly the same in both languages, so it reports every French frontmatter value that is
byte-identical to its English as needing review, and it reads a language's own glossary for
the answer: a row whose English and French columns hold the same text is that language
recording the decision. Seven fr pages were sitting in that bucket. Each was looked at on
its own; all seven come out the same way, but for four different reasons:

- **The French word is spelled the same.** `Animation`, `Triangle`. These are not English
  titles at all, they are the French translations, which happen to be homographs. Nothing
  else was ever going to be written.
- **The title is a name.** `Luhn` is Hans Peter Luhn's surname, and the French body already
  says _la formule de Luhn_. `Space Invaders` is the 1978 arcade game (see the open question
  above, which this does not settle).
- **The title has to match the code.** `Hello` is named after the `"Hello"` string the
  exercise returns. Translating the title to _Bonjour_ would make the page name something
  the learner's own code never produces, and the description (_Dis bonjour au monde..._)
  already carries the French sense.
- **The title is English wordplay with no French equivalent.** `Two-Fer` is "two for one",
  and it exists to set up the exercise's `"One for you, one for me."` line, which the French
  description keeps in English quotation for the same reason. `Hello, World! 👋` (the blog
  post) is the canonical first-program phrase, which French developers use as-is; rendering
  it _Bonjour, le monde !_ would lose the reference the post is built on.

**Scope.** Titles only. Every body, description, excerpt and SEO field on these pages is
translated as normal and stays that way, and none of these rows licenses leaving any other
field in English.

### 2026-08-11: `build` stays contextual, no glossary row (settled, question closed)

**Decided by:** resu-xunil, forum topic 314 (https://forum.jiki.io/t/314), post 83,
confirmed by mirina in post 92.
**Status:** settled. The question is closed, not open to a further round.
**Terms affected:** none. `build` deliberately has **no** row in
`languages/fr/glossary.md`, and adding one would contradict this decision.
**Files affected:** `languages/fr/glossary-notes.md` only.

**What was asked.** mirina had reported that `build` ("build a wall", "build a house",
"build a solution") recurs across exercise instructions and that she re-decided it every
time (_construire_, _réaliser_, _créer_, _concevoir_), which risked two translators
diverging on one English word. The thread was asked to choose between fixing one French
verb everywhere and writing "context decides" into the glossary. Either answer settled it.

**The answer.** resu-xunil answered "context decides" (post 83). mirina, who raised the
concern in the first place, then withdrew it in favour of his position: "in the end, it
comes that I totally agree with @resu-xunil, he's right => 'context decides' is the best
and most relevant approach" (post 92). Two native speakers, one of them the person who
opened the question, agree that no fixed rendering is wanted.

**What that means for a translation pass.** Judge `build` per instance, from what is being
built and how the sentence reads, exactly as any unglossed word is judged. The absence of a
row here is a decision, not a gap: a future pass that meets `build` should not treat it as
an unanswered question, propose a delta for it, or re-raise it on the thread. Nothing in
`i18n` needed re-translating, because no fixed term was imposed to apply.

### 2026-08-11: "challenge" (platform content type) → _défi_ gets its own row (settled)

**Decided by:** mirina, forum topic 314 (https://forum.jiki.io/t/314), post 90.
**Status:** settled.
**Terms affected:** new row `challenge (platform content type)` → _défi_ in
`languages/fr/glossary.md` (Platform & curriculum vocabulary); the existing
`puzzle (the thing the learner has to solve)` row now cross-references it instead of only
mentioning the collision in passing.
**Files affected:** `languages/fr/glossary.md`, `languages/fr/glossary-notes.md`.

**What was asked.** Earlier the same day, the `puzzle` resolution settled that French has
no single word for "puzzle" and picks _casse-tête_/_énigme_/_défi_ by context. That left an
open question: _défi_ is also the app's own word for the platform content type "Challenge",
so does "challenge" deserve a glossary row of its own rather than a passing note inside the
`puzzle` row?

**mirina's answer.** She agreed, on one condition: that "challenge" has a specific meaning
that flows throughout the course, rather than being an ordinary English word used loosely.

**Why the condition is already satisfied.** It is not a judgement call: the French app copy
already treats Challenge as a named content type and already renders it _défi_. The
`fr` app catalog has the sidebar item _Défis_, the section headings _Défis associés_ and
_Défis récents_, the page title _Défis_, and the marketing line _Relève des **défis** plus
difficiles_. A content type the learner navigates by name, in the sidebar, is exactly the
kind of term that has to be fixed once and never drift, so it earns a row.

**How the two rows now relate.** They are separate senses of one French word, and the
glossary says so from both sides: `challenge` is the platform noun and is always _défi_;
`puzzle` picks its word by context and may land on _défi_, but must not where the platform
sense could be read on the same screen.

### 2026-08-11: "partner in crime" → _compagnon_ on `concept/else` (settled, reverses _acolyte_)

**Decided by:** orchestrator, on the strength of two native speakers' picks, forum topic
1173 (https://forum.jiki.io/t/1173): williamapc ranked _compagnon_ first (post 4086) and
mirina's final word was _compagnon_ (posts 4352, 4353). resu-xunil, who argued for
_acolyte_, said twice he was happy with whichever word won (posts 4103, 3316) and himself
agreed _acolyte_ is not in younger learners' everyday lexicon (post 4355).
**Status:** settled. This reverses the earlier _acolyte_ pick, which had been marked
resolved on 2026-08-10 (post 4235) after resu-xunil confirmed it; mirina's review, already
written before that mark, arrived the next day and reopened the question with an argument
nobody had answered.
**Terms affected:** none; still no glossary row. "partner in crime" occurs exactly once in
the whole curriculum (`curriculum/src/concepts/else/source.md`), so it does not earn one.
**Files affected:** `../i18n/locales/fr/curriculum/concepts/else/page.md`,
`languages/fr/concept/else.md`.

The sentence is now _Découvrons maintenant son compagnon, l'instruction `else`
(« sinon »)._, keeping resu-xunil's possessive construction (post 3307), which carries the
"`else` cannot exist without `if`" idea regardless of which noun follows.

**Why _compagnon_ won.** The deciding rule is naturalness for the actual audience: Jiki
teaches absolute beginners, many of them young, so the register has to be everyday spoken
French, not literary French. _compagnon_ is understood across ages and education levels
(mirina), carries the belong-together, go-as-a-pair sense (_les compagnons de toujours_),
and was independently the first choice of both native speakers who ranked the candidates.

**Why the alternatives lost.** _acolyte_ and _compère_ are the closest literal matches for
"partner in crime" and _acolyte_ additionally carries the subordinate-helper sense
resu-xunil valued (CNRTL: "companion and usual servant of a person to whom he is
subordinate"), but both are formal/literary and rare in everyday speech, especially among
younger speakers, which is precisely the audience this page is written for. mirina's
concession that _acolyte_ is "by far the best" match is about the English idiom in
isolation, not about the sentence's readers, and the English idiom is itself playful rather
than technical, so a close idiomatic match is worth less here than an accessible word.
_camarade_ has the right register but misses the mutual dependency. _partenaire_ (mirina's
intermediate proposal) captures the pairing well but reads as a work/sport partner and was
not her final pick. _complice_ was the original draft wording and nobody defended it.

**The badge coincidence is not an argument.** resu-xunil noticed (post 4355, screenshot in
post 4201) that Jiki's own achievement badge already reads _Acolyte_, and presented it
lightly, as a coincidence. It carries no consistency cost either way: that badge translates
the English **Sidekick**, a different word in a different place, where _Acolyte_ remains a
good rendering. The badge is unchanged.

### 2026-08-11: `encrypt` → _chiffrer_, `encode` → _encoder_ (cryptography vs format)

**Decided by:** resu-xunil, native speaker, on forum topic 314
(https://forum.jiki.io/t/314), post 86, while reviewing `caesar-cipher`.
**Status:** settled.
**Terms affected:** `encrypt` / `encode`. No glossary row: the split is exercise-scoped and
recorded as a terminology bullet in `languages/fr/exercise/caesar-cipher.md`.
**Files affected:** `languages/fr/exercise/caesar-cipher.md` only.

French keeps a strict distinction that English blurs. _Chiffrer_ is cryptography: a key or
secret algorithm turns readable text into unreadable text, with the intent to hide it (the
cipher itself is _un chiffre_). _Encoder_ is representation only: Base64, UTF-8, ASCII, URL
encoding, run-length encoding, where anyone holding the rule can read the result. Translating
"encode a message" literally in a Caesar cipher context is a technical mistake in French: a
French developer reads it as "convert this to Base64". So the exercise's prose uses
_chiffrer / chiffré / chiffre_ throughout, while the identifiers `encode(message, shift)` and
`encodeMessage` stay English because they are code. _Encoder_ remains correct everywhere the
sense really is format-only, so this is not a sweep.

williamapc added a usage note (post 87) that does not change the decision. In everyday
professional French, especially among practitioners under 35, _encrypter / décrypter_ (and
_crypter_) are what people actually say, and _encrypter_ now has a Larousse entry; he reports
meeting only one developer in twenty years who said _chiffrer_. But his own citation settles
it the other way: Larousse calls _chiffrer_ "le terme technique correct en français, à
préférer à l'anglicisme crypter". Jiki teaches the correct technical term, so _chiffrer_
stands. Recorded here as real-world colour in case the choice is ever revisited.

### 2026-08-11: `puzzle` → _casse-tête_ / _énigme_ / _défi_, never _puzzle_

**Decided by:** resu-xunil, native speaker, on forum topic 314
(https://forum.jiki.io/t/314), post 84, raising it after replacing the word repeatedly in his
own reviews.
**Status:** settled for the "never _puzzle_" half; the three-way split is his own proposal
("défi, or another term depending on the context") shaped into a row.
**Terms affected:** `puzzle`.
**Files affected:** `glossary.md` (Exercise world vocabulary). No translated content was
touched: the five French items that render the word (`checkerboard`, `gold-panning`,
`collatz-conjecture`, `maze-automated-solve`, `annalyns-infiltration`) already use exactly the
three renderings this row now fixes, so the row records existing practice rather than changing
it.

The English source uses "puzzle" loosely, for a logic brain-teaser (`maze-automated-solve`,
"a little logic puzzle"), for a famous mathematical problem (`collatz-conjecture`), for the
RPG's obstacles (`annalyns-infiltration`, "use functions to solve puzzles"), and simply for the
task in front of the learner (`gold-panning`, "Solve the puzzle in 5 lines of code";
`checkerboard`, "One puzzle uses the classic 8x8 board"). French has no one word that covers
all four, which is why the row is contextual rather than fixed, the same shape as `step`.

Leaving it as _puzzle_ is the one thing ruled out. Its primary French sense is a jigsaw
(CNRTL: "jeu de patience fait d'un grand nombre de pièces découpées"), and resu-xunil's
`checkerboard` example shows the cost: "un puzzle utilise le damier classique de 8x8" reads as
a jigsaw, because jigsaws have boards too. The figurative sense the dictionary also records (a
truth to piece together from scattered elements) is not the sense our exercises use.

_défi_, resu-xunil's own default, is kept as one of the three rather than as the single answer,
for two reasons. It is not the natural word for a brain-teaser, where French says _casse-tête_,
and it is already the app catalog's rendering of `challenge`, the platform's own premium
content type (_Défis_ in the sidebar, "Relève des défis plus difficiles"), so used everywhere
it would blur two different things. Hence the caution in the row's note.

Open, and worth a native speaker's answer: whether `challenge` should have a glossary row of
its own recording the app's _défi_, so the boundary between the two words is written down and
not just implied here.

### 2026-08-10: `foot-gun` → _piège involontaire_ (owner-authorised ruling)

**Decided by:** the orchestrator, on Jeremy's explicit instruction to make the final call,
after ten days without convergence on forum topic 314 (https://forum.jiki.io/t/314), posts 24
to 80, involving resu-xunil, astyanax, williamapc and mirina, all native speakers.
**Status:** settled. Do not reopen.
**Terms affected:** `foot-gun`.
**Files affected:** `glossary.md` (Core decisions). No translated content was touched: the term
occurs only in three English items (`article/why-is-this-feature-not-implemented`,
`article/about-jiki-javascript`, `blog/the-backstory-of-jiki`), none of which has a French
translation yet, so the ruling lands before the first pass that needs it rather than after.

_piège involontaire_ was the standing entry and is confirmed rather than replaced. It is the
only candidate more than one participant accepted: resu-xunil proposed it, astyanax said he
would be "perfectly fine" with it, and mirina agreed with the case made for it. It is also
the most accurate reading of the coinage: a foot-gun is a trap nobody set on purpose, which
is precisely what _involontaire_ says, and unlike every rival it stays a countable noun that
drops into all three real source sentences ("Sensible Mode removes these foot-guns", "We call
some features foot-guns", "But I've removed the foot-guns").

Why the others lost, in the order they were floated:

- _fonctionnalité pénalisante_ (astyanax's own first choice, citing the French Wiktionary
  entry for "footgun") is natural French but semantically off-target: _pénalisant_ means
  disadvantageous or handicapping, so it describes a feature that costs you something, not one
  that hands you the means to hurt yourself. It also collides with the source's own phrasing:
  "we call some features foot-guns" becomes "nous appelons certaines fonctionnalités des
  fonctionnalités pénalisantes". Attestation in a dictionary is evidence a rendering exists,
  not evidence it reads well in our sentences.
- _fonctionnalité piégée_ / _piège à développeur_ were rejected by astyanax and mirina both.
  _fonctionnalité piégeuse_ (williamapc) is the best of that family and genuinely idiomatic,
  but it inherits mirina's objection that _fonctionnalité_ is too narrow, which matters
  because the blog uses the term for language behaviour generally, not only for listed
  features.
- _piège_ alone (mirina) is natural but is already this glossary's rendering of `pitfall`, and
  the source treats foot-gun as a coined term it stops to define. It survives as the permitted
  short form on later mentions, which is where the objection to heaviness really bites.
- _idée trompeuse_ / _idée minée_ (mirina) have no currency in French technical writing;
  _idée minée_ in particular is not an existing collocation.
- _effet de bord_ (williamapc) is a real and well-defined French CS term, but it means side
  effect. A foot-gun need not have side effects and a side effect need not be a foot-gun, so
  adopting it would teach learners the wrong concept under the right-sounding name.
- _une balle dans le pied_ (resu-xunil, williamapc) is the idiom French actually reaches for,
  but it is a verb phrase, not a noun for a thing the platform removes. It is kept, as the
  gloss attached to the first mention, which is exactly how the English source introduces the
  term too.
- Keeping "foot-gun" in English with a first-mention gloss (resu-xunil) was the fallback if
  nothing French fit. Something French does fit, and the term is a coinage rather than an
  established API word like `string`, so there is nothing to preserve by leaving it English.
- _piège classique_ and _faux ami_ (mirina, post 80, offered without endorsement) arrived last.
  _piège classique_ has the same clash with `pitfall`, and _faux ami_ is an established
  linguistics term for a deceptive cognate, which would actively mislead in a language-learning
  context.

resu-xunil's closing point on post 78, that context decides which expression fits, is honoured
by the row rather than overruled: the glossary now fixes the term for first mention, carries
the "balle dans le pied" idiom as its explanation, and lets later mentions shorten.

### 2026-08-10: `skyline` → _la ligne d'horizon_ (provisional, orchestrator call)

**Decided by:** the orchestrator, choosing between two options offered by resu-xunil, a native
speaker, on forum topic 1372 (https://forum.jiki.io/t/1372), reviewing
`exercise/cityscape-skyline`. **Status:** provisional, pending @fleurdelys44, who resu-xunil
tagged for an opinion and who has not yet replied. A native speaker's answer overrides this.
**Terms affected:** `skyline (city)`.
**Files affected:** `glossary.md` (Exercise world vocabulary), `exercise/cityscape-skyline.md`,
and the fr `cityscape-skyline` instructions and message catalog.

resu-xunil asked for the title "La skyline" to lose the anglicism and offered two candidates,
_la ligne d'horizon_ and _le profil urbain_, without picking one. _ligne d'horizon_ was chosen
because resu-xunil used it themselves in the same post for the body fix ("la skyline de la
ville" → "la ligne d'horizon de la ville"), so it is the option they already reached for
unprompted; _profil urbain_ is also the more technical, architectural-drawing register, which
sits above the beginner tone of these pages. It fits the general French stance against
anglicisms already recorded here (see _assignment → affectation_, _refactor → réécrire_).

The word earns a glossary row rather than a one-off note because it recurs: the
`cityscape-skyscraper` instructions close by promising "whole city skylines" (currently
rendered _panoramas urbains_, a third variant), and the Cityscape project itself is built on
the same image. One row keeps the three from drifting apart.

Where English says "a skyline of buildings" rather than the city's own skyline, resu-xunil
asked for _une silhouette de bâtiments_, which is kept: repeating _ligne d'horizon_ there
would read as the horizon itself being made of buildings.

The `X`/`Y` capitalisation also asked for on this topic is not a new decision; it is the rule
already settled on 2026-08-08 below, applied to another exercise.

On 2026-08-11, applying the row to `cityscape-skyscraper` (topic 1379) replaced _panoramas
urbains_ with _lignes d'horizon urbaines_. resu-xunil said he had noticed the varied wording
and liked that it was not repetitive, but deferred to consistency ("If you need consistancy,
go ahead"). So the row stands, with a native speaker's stylistic preference on record against
it: if it is ever revisited, the question to weigh is whether one page's prose variety is
worth a learner meeting the concept under two names.

### 2026-08-08: « en dur » always in guillemets; X/Y/Z capitalised in prose parentheticals

**Decided by:** resu-xunil, a native speaker, across forum topics 1313, 1315 and 1316
(https://forum.jiki.io/t/1313, https://forum.jiki.io/t/1315, https://forum.jiki.io/t/1316),
reviewing `exercise/relational-snowman`, `exercise/relational-sun` and
`exercise/relational-traffic-lights`. **Status:** settled.
**Terms affected:** none (typography/house-style rules, not term mappings).
**Files affected:** `guide.md` (Style notes), the four exercises fixed in the same pass, and
`state/content-updates-needed.md` for the outstanding sweep.

**« en dur ».** _en dur_ is developer jargon inside otherwise beginner-facing prose, so it
reads as an unmarked oddity when written bare. resu-xunil asked for it to be set in
guillemets everywhere it appears, and for a short gloss on first use where the sentence has
room: "utiliser une valeur fixe au lieu d'une variable que l'on peut modifier à tout
moment". The guillemets do the same job the quotes around a term do in English: they mark it
as a named thing rather than an ordinary adjective phrase. Applied in this pass to
`relational-snowman`, `relational-sun` and `relational-traffic-lights`; other already-published
French files may still carry it bare, which is logged for the next pass.

**X/Y/Z in parentheticals.** The parenthetical glosses that explain a coordinate variable
("(position x du soleil)", "(y du rouge)") were writing the axis letter in lower case, which
reads as a stray letter rather than as the name of an axis. resu-xunil asked for it
capitalised, and separately asked for every exercise to be checked. Code identifiers are
untouched: `sunX` and `sunY` are the program's own names and keep their casing. The
repo-wide sweep is logged rather than done here.

### 2026-08-06: "Loopy Maze" exercise title settled → `Le labyrinthe, version boucles`

**Decided by:** an owner-authorised ruling (Jeremy explicitly asked for a final call on this
one thread), after three native speakers on forum topic 314
(https://forum.jiki.io/t/314) had gone several rounds without converging. **Status:**
settled, not to be reopened by a translation pass.
**Terms affected:** the `Loopy Maze (exercise title)` row.
**Files affected:** `glossary.md` (Core decisions), `exercise/maze-solve-repeat` reviewer
notes, and the `fr` title of the `maze-solve-repeat` instructions.

Six candidates were on the table: _Labyrinthe en boucle_ (resu-xunil, the provisional pick),
_Labyrinthe avec boucle(s)_ and _Labyrinthe par boucle(s)_ (williamapc), _Bouclez le
labyrinthe_ and _Labyrinthe à boucler_ (resu-xunil), plus _Le labyrinthe des boucles_ (the
original agent draft) and mirina's _Tournoyez à travers le labyrinthe_ / _Tournez pour
traverser le labyrinthe_.

**The fact that unblocked it.** The thread had accepted resu-xunil's reading of the English
(post 51): that _Loopy Maze_ means a maze whose paths are full of loops, dead ends and closed
circuits. That is a fair reading of the English words, but it is not this exercise. The maze
in `scenarios.ts` is a single winding corridor with no loops and no dead ends, and the
English description is "Refactor a maze solution to use loops instead of repeated code": the
learner is given a working 40-odd-line solution and rewrites it with `repeat` down to 22
lines. So the loops belong to the *solution*, not to the maze, and the structural reading the
thread had settled on would have enshrined a misdescription of the exercise.

**Why none of the six was taken.** Every _<noun> + modifier_ candidate attaches _boucle_ to
_labyrinthe_, which is exactly the ambiguity the thread could not resolve: _en boucle_ and
_avec boucles_ both read most naturally as the maze looping (williamapc's objection to the
first, resu-xunil's to the second), _par boucle_ does not mean anything to a native ear
(resu-xunil), _le labyrinthe des boucles_ is the heavy genitive already rejected, and
_bouclez le labyrinthe_ / _à boucler_ invite the "cordon off the maze" reading mirina
described. mirina's _Tournoyez_ options are unambiguous but drop the link to `repeat`
entirely.

**Why _Le labyrinthe, version boucles_.** The apposition with _version_ is an ordinary, live
French construction (_le match, version 2026_), so nothing about it is invented or strained.
It attaches the loops to *this rendering of the exercise* rather than to the maze, which kills
the ambiguity outright instead of arbitrating it. And it is literally true of the exercise's
place in the curriculum: `maze-solve-basic` is the maze, and `maze-solve-repeat` is the same
maze done again with loops. It stays a noun phrase, as `guide.md` requires for an English
noun-phrase title, and it keeps the light tone of _Loopy_.

### 2026-08-06: Translation engine confirmed as `fable`

**Decided by:** williamapc, a native speaker, on the "Alternative translation model"
comparison thread (https://forum.jiki.io/t/924). **Status:** settled.
**Terms affected:** none (engine choice, not a glossary or guide change).
**Files affected:** `tracking.json` (`translation_engine`).

Jeremy posted an alternative-model rendering of a French page alongside the published one
and asked which read better. williamapc answered "I much prefer the original version", and
the thread was closed with "we'll stay on the original for French".

This is a **confirmation of the existing default, not a switch**: French was already running
on `fable`, and it continues to. What changed is that the choice is now native-speaker-backed
and therefore recorded as a `translation_engine` block, which per `orchestrator.md` means a
human has confirmed that model for this language.

### 2026-08-06: `exercise/fix-wall` — _boucher_/_couvrir_ → _combler_/_recouvrir_

**Decided by:** native speaker resu-xunil, forum topic 1233
(https://forum.jiki.io/t/1233/1).
**Terms affected:** new rows `to fill/plug (a hole)` → _combler_ and `to cover (a hole with
a shape)` → _recouvrir_, replacing the unconfirmed agent drafts _boucher_ and _couvrir_ used
throughout the exercise.
**Files affected:** `glossary.md` (Exercise world vocabulary);
`../front-end/curriculum/src/exercises/fix-wall/instructions/fr.md` and
`../front-end/curriculum/src/exercises/fix-wall/locales/fr/translation.json` (every
occurrence of the old verbs swapped and restamped).

resu-xunil flagged that _boucher_/_bouché_ reads wrong for patching a hole with a shape
(it carries a "stuff up, block" connotation) and that _couvrir_ undersells placing a
rectangle precisely over a gap; _combler_ and _recouvrir_ are the natural fits. Also fixed
the `### Réparer le mur` heading, which was still the infinitive: it should have already
been imperative per the guide's existing "gerund-style heading" rule (the frontmatter
`title` already correctly said "Répare le mur"), so this was a pre-existing inconsistency
within the file, not a new rule.

resu-xunil separately asked whether other exercises (naming `Luhn` and `Digital Root` as
already using the imperative) should be swept for the same infinitive-vs-imperative
inconsistency. That sweep is out of scope for this single-item fix and was reported back
rather than actioned here.

### 2026-08-06: `track (curriculum path)` → _voie_, replacing the unconfirmed _filière_

**Decided by:** native speaker mirina, forum topic 314 ("[French Review] Glossary"), post 71
(https://forum.jiki.io/t/314/71).
**Terms affected:** `track (curriculum path)` row (`filière` → `voie`); the `pathway` row's
cross-reference note updated to match.
**Files affected:** `glossary.md` (Platform & curriculum vocabulary).

The `filière` rendering had never actually been reviewed: it was written by an agent when
the Platform & curriculum vocabulary table was first drafted and carried no native-speaker
sign-off (its "Agreed by" column read "agent" in the row's early history), so there was
nothing here for mirina's correction to conflict with.

mirina argues `filière` is the wrong register for Jiki's "track": in French it names an
academic or professional field (_filière informatique_, _filière scientifique_), which
imports an institutional, somewhat rigid connotation from traditional education systems
that sits against Jiki's playful, Duolingo-inspired tone, and it does not read as
addressing "everyone" the way the platform wants to. She proposed two alternatives, _voie_
and _chemin_, both of which she says convey a dynamic, adaptable progression instead. She
gave `voie` more weight throughout: it is listed first, gets the fuller explanation (the
"freedom" reading of _la voie est libre_, "no barriers"), and is the one behind her sample
tagline "Choisis ta voie !" (Pick your track), which reads as an actual UI-style
call-to-action rather than just a dictionary gloss. `chemin`, by contrast, she frames as
carrying more of a "step-by-step" descriptive sense.

**Action taken.** Applied `voie` as the confirmed rendering, since it is the option she
gave primacy to and it is a feminine noun like the outgoing `filière`, so no other row's
agreement changes. `chemin` was not chosen but is recorded here as the alternative she also
offered, in case a second native speaker prefers it. No translated content used `filière`
anywhere in front-end or curriculum sources, so there is nothing else to swap; only the
published review-site glossary snapshot mirrored the old value, and that regenerates from
this file on the next `publish-glossary` run.


### 2026-08-05: Stage 3 exercise batch (space-invaders-repeat through golf-rolling-ball-state) — unconfirmed drafts

**Decided by:** no one yet. These are agent proposals from the Stage 3 fr batch translating
`exercise/space-invaders-repeat`, `exercise/snowman`, `exercise/traffic-lights`,
`exercise/relational-sun`, `exercise/relational-snowman`, `exercise/relational-traffic-lights`,
`exercise/structured-house`, `exercise/plant-the-flowers` and `exercise/golf-rolling-ball-state`
(fable subagent workers, one per item, fanned out via `/translate-exercise`). Not written to
`glossary.md`; every row below is open to being overruled on the forum.

**From `exercise/space-invaders-repeat`:**

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| pattern (repeating pattern in loop exercises) | motif | Recurs across loop/repeat exercises ("find the pattern"); *schéma* or *régularité* are also defensible alternatives, risk of drift across passes. | medium |

**From `exercise/traffic-lights`:**

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| Traffic Lights (exercise title) | Feu tricolore | Title-only, singular (one traffic light in the exercise); standard French term. | medium |
| light (lamp on a traffic light) | le feu | "le feu rouge / orange / vert". Rejected *lumière* as non-idiomatic. Note: the whole object is also "le feu (tricolore)" — the two senses coexist naturally in French, but future passes could drift toward *lumière* for the lamp sense. | medium |
| amber (traffic-light color, in prose) | orange | French traffic lights say "orange", never "ambre". Prose only — the sentinel string "amber" stays untranslated. | high |

**From `exercise/relational-sun`:**

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| Relational Sun (exercise title) | Soleil relationnel | Matches other agreed exercise-title rows (title only, no article); keeps the "derived from variable relationships" sense. | medium |
| hard-code | coder en dur | Two defensible renderings exist; recurs across exercises about derived values, worth locking in for consistency. | medium |

**From `exercise/relational-snowman`:**

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| to derive (a value from another) | calculer à partir de | Recurs across relational exercises; *dériver* reads as calculus differentiation in French, would mislead. *déduire de* also defensible — this sets a precedent. | medium |
| to scale (respond proportionally to `size`) | s'adapter | Used in `checks.notResponsive`. Alternatives *se mettre à l'échelle* / *grandir proportionnellement* also defensible; will recur in other responsive-drawing exercises. Note this partially overlaps with the `relational-traffic-lights` row proposing *se redimensionner* for the same underlying concept — worth reconciling. | low |

**From `exercise/relational-traffic-lights`:**

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| housing (traffic-light casing) | le boîtier | Recurs in prose + 6 catalog strings of this exercise and likely future traffic-light exercises; caisson/coffret/support were defensible alternatives, so drift is possible. | medium |
| traffic light | le feu tricolore | Already the de-facto choice in the approved traffic-lights fr files but recorded nowhere; feu de circulation/feu de signalisation are competing renderings. Individual lights are les feux. | high |
| to scale / rescale (drawing scales with a variable) | se redimensionner | The relational drawing series' recurring verb; se mettre à l'échelle and grandir (used contextually in relational-snowman) compete. | medium |
| padding (space around drawn content) | la marge | Distinct from the agreed inset → retrait; espacement was the plausible alternative. | low |

**From `exercise/plant-the-flowers`:**

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| "I'm totally stuck" (recurring hint question) | Je bloque complètement | The literal "Je suis totalement bloqué" gender-marks the learner; this neutral phrasing avoids that. Recurs across many exercise catalogs so different passes could drift between gendered/neutral forms; may belong in the guide rather than the glossary. | medium |

**From `exercise/golf-rolling-ball-state`:**

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| Stateful Ball (exercise title) | Balle à état | Matches sibling title "Balle qui roule" (no article) and the already-agreed `stateful` → _à état_ glossary row; only proposed because exercise titles have precedent rows. | medium |

**`exercise/snowman`, `exercise/structured-house`:** no delta proposed (workers judged the
terms they hit — e.g. "anchor" → *ancrage*, "hardcode" → *coder en dur* — to have one obvious
canonical rendering, not meeting the bar for a glossary row).

**`exercise/traffic-lights`, `exercise/relational-sun`, `exercise/relational-snowman`:** these
workers' proposed-delta sections could not be re-retrieved for this note (the orchestrator's
recap request to their completed subagents did not return a response in time). Their
translations are checker-passed, `en_md5`-stamped and published; only the delta text is
unconfirmed-missing. Worth a follow-up read of the actual translated files if term drift shows
up in review.

### 2026-08-06: Stage 3 exercise batch (finish-wall through owners-bouquets) — unconfirmed drafts

**Decided by:** no one yet. These are agent proposals from the Stage 3 fr batch translating
`exercise/finish-wall`, `exercise/dnd-roll`, `exercise/gold-panning`, `exercise/sunset`,
`exercise/sprouting-flower`, `exercise/random-salad`, `exercise/rainbow-splodges`,
`exercise/stock-market`, `exercise/golf-scenarios` and `exercise/owners-bouquets` (fable
subagent workers, one per item). Not written to `glossary.md`; every row below is open to
being overruled on the forum.

**From `exercise/finish-wall`:**

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| layer / row (of bricks, wall exercises) | rangée | English alternates "row"/"layer" for one object; *couche* also defensible. Wall exercises (fix-wall, finish-wall) share a screen with the draw family catalog, so drift between passes would show. | medium |

**From `exercise/dnd-roll`:**

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| roll (dice, D&D) | lancer (the act/throw) / jet (the scored result, "jet d'attaque") | Two defensible renderings that will recur if more D&D-flavoured exercises land; drifting between them inside one screen would read wrong. French D&D materials consistently say "jet d'attaque". | medium |

**From `exercise/gold-panning`:**

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| to pan (for gold) / a pan (one panning action) | orpailler / une batée | Core recurring verb+noun pair, shared between prose and catalog on one screen. *Orpailler* is standard; *une batée* is correct but somewhat specialised — a translator could defensibly pick *laver l'or* / *un lavage* instead. | medium |
| Gold Panning (exercise title) | Orpaillage | Title only, matches the term pair above. | medium |
| trading post | le comptoir | Recurs in describers, tasks, and function descriptions; *poste de traite* (Canadian) and *comptoir d'échange* were alternatives. | medium |

**From `exercise/sunset`:**

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| flipbook / flip-book style | flip book (le style flip book) | Used repeatedly for the animation model, will recur across every animation exercise. Loanword *flip book* (what French speakers actually say) chosen over the technical *folioscope*. Masculine: *un flip book*. | medium |

**From `exercise/sprouting-flower`:**

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| scrubber (bar) | la barre de lecture | First occurrence in any fr exercise; UI element that will recur. Alternatives *barre de défilement*, *timeline* also defensible. **Conflicts with the `exercise/stock-market` row below (*curseur*) — same batch, two different renderings; needs reconciling before either lands.** | medium |
| frame (animation) | image | *une image*. French dev prose also tolerates the loanword *frame*; recurs across all 10 `checks.*` and both coordinate hints. | medium |
| flower head | la tête de la fleur | Chosen over the botanically correct *corolle*, which is heavier than the exercise's register. Recurs in checks + prose. | medium |
| Sprouting Flower (exercise title) | La fleur qui pousse | Title only. Relative clause with *qui* per the guide's style preference. | medium |

**From `exercise/rainbow-splodges`:**

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| Rainbow Splodges (exercise title) | Taches arc-en-ciel | Title only. *Éclaboussures* considered for "splodges" but heavier; *tache* is the ordinary word and reads well in the task name too. | medium |
| box (drawing area bounds) | le cadre | Recurs across drawing exercises ("outside the box", "inside the box"). Deliberately distinct from *boîte* (the glossary's value-container metaphor) — the checker flags this collision. | medium |

**From `exercise/stock-market`:**

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| hint (exercise hints panel) | astuce | Genuine fork: the natural word *indice* is already bound to "index (array)" in the glossary and would collide on-screen. Every exercise has hints, so worth settling once. | medium |
| scrubber (timeline control) | curseur | No precedent anywhere in the fr catalogs or app copy at the time this worker ran. **Conflicts with the `exercise/sprouting-flower` row above (*la barre de lecture*) — same batch, two different renderings; needs reconciling before either lands.** | low |

**From `exercise/golf-scenarios`:**

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| step (golf distance) | position | The existing "step (generic)" row says pick by context and forbids *unité*; *position* matches the existing `golf-rolling-ball-state` fr strings, another translator could defensibly pick *pas*. Could land as a context note on the existing row rather than a new one. | medium |

**From `exercise/owners-bouquets`:**

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| gap (spacing between planted items, flower-planting family) | écart | *espacement* and *intervalle* equally defensible; recurs across the flower-planting family (hint, task description), so drift between exercises would show on one screen. | medium |

**`exercise/random-salad`:** no delta proposed (every term hit either already settled in the
glossary — button label, tutoiement, imperative task names — or has one obvious canonical
rendering: salade, feuille, tomate, croûton, olive, ingrédient).

**Note for whoever reconciles this batch:** two workers independently hit "scrubber" (a
timeline/play-position control) and proposed different French renderings — *la barre de
lecture* (sprouting-flower) vs *curseur* (stock-market) — because neither could see the
other's decision. Also flagged as a possible `global/terms.md` gap: "scrubber" looks like a
cross-language recurring UI term worth cataloguing there.

### 2026-08-05: curriculum-copy catalogs (video lessons, badges): judgment calls (unconfirmed draft, dated 2026-08-05)

**Decided by:** no one yet. Unconfirmed draft (agent, 2026-08-05), from the first `fr` pass
over the two curriculum-copy catalogs. Nothing here was written into `glossary.md`; these
are proposals to agree or correct.
**Files affected:** `curriculum/src/video-lessons/locales/fr/translation.json` and
`curriculum/src/badges/locales/fr/translation.json` in the front-end repo.

**Calls made, worth recording:**

- **Coding Fundamentals (course name)** → _Fondamentaux de la programmation_, matching the
  string the French app already shows (`app/messages/fr.json`, `layout.sidebar.nav.learn`),
  per the existing "UI button label quoted in prose" principle of reusing the app's own
  `fr` catalog string rather than inventing a fresh rendering. Lesson title: "Bienvenue
  dans les Fondamentaux de la programmation".
- **badge** and **fun fact** never appear as words inside either catalog's values, so no
  term was needed; no row proposed.
- **Badge descriptions** are rendered as second-person past ("Tu as terminé ta première
  leçon"), matching the tu-register, and deliberately using _avoir_-participle phrasings
  throughout so no participle agrees with the reader's gender.
- **Badge names**, proposed renderings: Beta User → _Utilisateur bêta_, Early Bird →
  _Lève-tôt_, First Steps → _Premiers pas_, Maze Navigator → _Explorateur de labyrinthe_
  (following the guide's "explorer le labyrinthe" phrasing; French doesn't "solve" a
  maze), Member → _Membre_, Night Owl → _Oiseau de nuit_, Premium → _Premium_ (kept
  English, matching _membre Premium_ in the app; needs its own glossary row, since that
  is now what lets the writer accept a value identical to English),
  Scenario Handler → _Maître des scénarios_, Sidekick → _Acolyte_ (matching the
  2026-08-04 "partner in crime" → _acolyte_ entry below), Townsfolk → _Villageois_.
- **maze_navigator.description** quotes the lesson title as _« Évade-toi du labyrinthe »_,
  reusing the agreed exercise-title row rather than translating "Solve a Maze" afresh.
- **early_bird.funFact**: the English proverb "The early bird catches the worm" is
  rendered by the equivalent French proverb _L'avenir appartient à ceux qui se lèvent
  tôt_, not literally.

### 2026-08-05: `inset (drawing exercises)` confirmed as _en retrait / le retrait_

**Decided by:** native speaker resu-xunil, forum topic 314, post 68
(https://forum.jiki.io/t/314/68).
**Terms affected:** `inset (drawing exercises)` row, promoted from "Unconfirmed draft" to
confirmed.
**Files affected:** `languages/fr/glossary.md`. No translated content changed:
`exercise/jumbled-house`'s `fr` instructions and message catalog already use _en retrait_ /
_le retrait_ throughout, matching the now-confirmed rendering.

**What happened.** Quoting the row as it stood since the 2026-08-03 Stage 3 batch 1 draft,
resu-xunil said it "fits perfect for Exercise: Jumbled House," a clean confirmation with no
correction or counter-proposal. The row is now protected rather than draft.

### 2026-08-05: `unit` confirmed as _unité_; `step` split out as context-dependent, not `unité`

**Decided by:** native speaker resu-xunil, forum topic 314, post 67
(https://forum.jiki.io/t/314/67).
**Terms affected:** the `step / unit (distance moved)` row is split into two: `unit
(distance moved)` → _unité_ (confirmed, was "Unconfirmed draft") and a new `step
(generic)` row recording that "step" has no single fixed rendering.
**Files affected:** `languages/fr/glossary.md`. No translated content changed: the
`golf` family catalog and `exercise/golf-rolling-ball-loop` already only use "unit", never
"step", so nothing there was wrong.

**What happened.** The 2026-08-03 batch wrote a single row, `step / unit (distance moved)`
→ _unité_, treating the two English words as interchangeable because the `golf` family
catalog only ever needed "unit". resu-xunil quoted that row on the pinned glossary thread
and confirmed _unité_ is correct for "unit" as used in `exercise/golf-rolling-ball-loop`,
but flagged that "step" is a different case: it "depends on the context," and can be
_étape_ (après étape), _pas_ (à pas), _marche_ (après marche), etc. Conflating the two
words under one fixed term would have been wrong the first time an English source actually
used "step" rather than "unit".

**Action taken.** Split the row rather than overwrite the confirmed half: `unit (distance
moved)` keeps _unité_, now marked confirmed instead of draft. A new `step (generic)` row
records that "step" has no fixed mapping and lists the candidate words by sense, so a
future translator picks by context instead of defaulting to _unité_.

### 2026-08-05: the penguin's `nose` is _le bec_, not _le nez_ (reverses the earlier scoping)

**Decided by:** native speakers mirina (who raised it) and resu-xunil (who confirmed it),
forum topic 314 (https://forum.jiki.io/t/314).
**Terms affected:** new row `beak (of a bird)` → _le bec_; the
`nose / snout (of a snouted animal)` → _le museau_ row keeps its translation but has its
scoping note corrected.
**Files affected:** `languages/fr/glossary.md`,
`curriculum/src/exercises/penguin/instructions/fr.md`,
`curriculum/src/exercises/penguin/locales/fr/translation.json`,
`languages/fr/exercise/penguin.md`.

**The earlier "the `penguin` exercise keeps _le nez_" call was wrong and is now
corrected.** When the `nose` → _le museau_ row was decided (and again when it was
reaffirmed against williamapc's challenge), the row was scoped to snouted animals and the
penguin was left with _le nez_ on the reasoning that a bird has no _museau_. That reasoning
was sound about _museau_ and wrong about the fallback: the alternative to _museau_ for a
bird is not _nez_, it is _bec_. mirina flagged that French simply does not use _nez_ of a
bird, at any register, so the penguin's beak-shaped triangle has to be _le bec_.
resu-xunil, who co-signed the original scoping, confirmed it without reservation ("Of
course, go for `bec`!"), so the two speakers who set the earlier scoping are the two who
have now reversed it.

**_museau_ for snouted mammals is untouched.** This changes only the bird case. The fox in
`exercise/foxy-face` keeps _le museau_, and everything decided in the 2026-08-04 entries
below about _museau_ vs _truffe_ vs _nez_ for snouted animals still stands; only the
"birds keep _le nez_" clause of that scoping is superseded.

### 2026-08-04: "partner in crime" → _acolyte_ on `concept/else` (unconfirmed, provisional)

**Decided by:** nobody yet. Provisional pick, awaiting a native speaker.
**Terms affected:** none; no glossary row added. This entry records an open question about
one page's wording.
**Files affected:** `curriculum/src/concepts/else/fr.md`,
`languages/fr/concept/else.md`.

Reviewing `concept/else` (forum topic 1173, https://forum.jiki.io/t/1173, post 3274),
resu-xunil flagged _le complice de `if`_ (English "if's partner in crime") and offered
three candidates, _complice_, _acolyte_ and _compère_, explicitly without choosing between
them. He also suggested glossing the keyword at its first mention, as
_l'instruction else (sinon)_.

_acolyte_ was applied so the sentence could carry the rest of his edits, and the gloss was
added: _Découvrons maintenant l'acolyte du `if`, l'instruction `else` (« sinon »)._ This is
an unconfirmed, provisional pick, not a decision: he has been asked on the thread to choose.
If he picks _complice_ or _compère_, swap the word on that page and update
`languages/fr/concept/else.md`. The phrase occurs once in the whole curriculum, so it earns
no glossary row unless it recurs.

### 2026-08-04: `nose` → _le museau_ reaffirmed, "Loopy Maze" title still open (two new candidates)

**Decided by:** native speaker resu-xunil, forum topic 314
(https://forum.jiki.io/t/314), posts 3275 and 3278, answering williamapc's challenge in
post 3252.
**Terms affected:** `nose (of an animal)` (reaffirmed, no change), the
`Loopy Maze (exercise title)` row (unchanged, still provisional).
**Files affected:** none. This entry records the state of two discussions, not an edit.

**`nose` → _le museau_ is settled.** williamapc (post 3252) challenged the row, asking why
_nez_ is not simply used for every animal now that it has entered common usage for animals
generally. Put back to the two speakers who originally decided the row, resu-xunil answers
(post 3275) with an explicit ranking, _museau_ > _truffe_ > _nez_, calling _museau_ "cute",
having read williamapc's argument first. That is the speaker who corroborated mirina's
original recommendation reaffirming it against a direct challenge, so the row stands as
confirmed and `exercise/foxy-face` keeps _museau_ unchanged. The scoping stays as it was:
the `penguin` exercise keeps _le nez_, since a bird has no _museau_.

**The "Loopy Maze" title now has four candidates and no agreement.** williamapc's
_Labyrinthe par boucle(s)_ and _Labyrinthe avec boucle(s)_ (post 3252) are both rejected by
resu-xunil (post 3278): _par boucle_ does not mean anything to him, and _avec boucles_ can
be read as the maze itself being made of loops, which lands back in exactly the ambiguity
williamapc was trying to remove. He counters with two new options, _bouclez le labyrinthe_
(imperative) and _Labyrinthe à boucler_, using _boucler_ in its "to finish, to close" sense.
He also clarifies the English: _Loopy Maze_ describes a maze whose paths are full of loops,
dead ends that lead back and closed circuits, as opposed to a linear one, so "the maze that
loops" is in fact the intended sense. Two native speakers are in genuine disagreement here,
each rejecting the other's proposals, so we do not pick a side. The title stays
_Labyrinthe en boucle_ (the current provisional pick) and the row keeps its "proposed by one
native speaker, not yet confirmed" note. williamapc has been asked on the thread whether
either of resu-xunil's new options lands better for him than his own.

### 2026-08-04: "Loopy Maze" exercise title → `Labyrinthe en boucle` (one speaker, not yet confirmed)

**Decided by:** one native speaker (resu-xunil), forum topic 314
(https://forum.jiki.io/t/314/42, post 3183). Not corroborated by a second speaker, so the
row stays provisional rather than protected.
**Terms affected:** the `Loopy Maze (exercise title)` row.
**Files affected:** `glossary.md` (Core decisions), the `fr` title of the
`maze-solve-repeat` instructions, and `languages/fr/exercise/maze-solve-repeat.md`.

The previous rendering, _Le labyrinthe des boucles_, was an agent draft from the Stage 3
batch 1 pass with no reasoning behind it beyond "a title is rendered for what it does"
(see the 2026-08-03 batch entry below). resu-xunil proposes _Labyrinthe en boucle_ so the
loop aspect stays the point of the title, and it is the better French on two counts he does
not spell out but which support him: _en boucle_ is a live idiomatic collocation (something
that runs round and round), whereas _le labyrinthe des boucles_ is a heavy possessive that
reads like the proper name of a place; and the English is an adjective on a noun, which
_en boucle_ mirrors and the genitive does not. Dropping the article also matches how the
English title reads as a label.

This is a swap of one unconfirmed draft for a better-informed unconfirmed draft, not a
settled decision. Nobody defended the old rendering, and no agent opinion is being placed
above a speaker's, so it is applied immediately; a second speaker agreeing (or objecting)
on the thread is what would move it to confirmed. The row's Notes say so.

A parallel suggestion on `Take a Walk` → _une petite balade_ (post 3229) is deliberately
**not** actioned here: it is phrased as an open question rather than a recommendation, and
_marche_ tracks the `walk()` function the exercise is about more directly than _balade_
does. It has been put back to him on the thread.

### 2026-08-04: Stage 3 batch 1 review (`nose` corrected, three rows confirmed)

**Decided by:** native speakers mirina and resu-xunil, forum topic 314
(https://forum.jiki.io/t/314), posts 3105, 3115, 3119, 3153, 3156, 3160, 3162.
**Terms affected:** `nose (of an animal)` (_la truffe_ → _le museau_), plus confirmation of
`alien`, `penguin` and `to shoot down`.
**Files affected:** `glossary.md` (Exercise world vocabulary),
`front-end/curriculum/src/exercises/foxy-face/instructions/fr.md` and
`.../foxy-face/locales/fr/translation.json`.

**`nose` → _le museau_** overturns the _truffe_ draft written the day before, which the
batch entry below already flagged as its shakiest call. mirina (post 3105) argues that
_truffe_ is technically defensible but unidiomatic for a fox: in everyday French it is the
word people attach to pigs and boars, and the Académie française entry for _museau_
(https://www.dictionnaire-academie.fr/article/A9M3243) uses the fox sense directly. Because
`foxy-face` draws the whole head rather than an isolated nose-tip, _museau_ is also the more
accurate description of the shape on screen. She explicitly rejects _la pointe du museau_ as
too heavy for instruction text. resu-xunil (post 3153) independently confirms with the CNRTL
entry (https://www.cnrtl.fr/definition/museau), while noting he says _truffe_ about cats and
dogs himself, which is exactly the pet-nose sense that does not carry to a fox's whole head.
Two native speakers agreeing outranks the agent draft, so the row is now confirmed rather
than reopened. The row is scoped to snouted animals: the `penguin` exercise keeps _le nez_,
since a bird has no _museau_, and mirina notes in the same post that _nez_ is unremarkable
French for an animal anyway.

**`alien` → _alien_** confirmed by mirina (post 3115) and resu-xunil (post 3160).
**`penguin` → _pingouin_** confirmed by mirina (post 3119) and resu-xunil (post 3156).
mirina corrects our stated reasoning while agreeing with the answer: the choice is not about
what a beginner expects but about the drawing, which is the cartoon penguin of games and
social media, an image that is a _manchot_ zoologically and _pingouin_ to everyone looking at
it. She adds that the pairing of young and beginner audiences is what makes it right.
resu-xunil notes the two are near-universally confused in French. The row's Notes now say
"matching the cartoon drawing" rather than "the word a beginner expects".

**`to shoot down` → _abattre_** confirmed by resu-xunil (post 3162), who prefers it to
_vaincre_ in this context. That settles the conflict recorded in the 2026-08-03 entry below:
the catalogs were already consistent on _abattre_, and a native speaker has now ruled, so the
row is no longer a draft and the question is closed rather than open to a further round.

**Left open: a glossary row for `build`.** mirina (post 3116) reports that `build` recurs
across exercise instructions and that she re-decides it each time (_construire_, _réaliser_,
_créer_, _concevoir_), which risks two translators diverging on one word. The observation is
sound but no single French verb was proposed and nobody has yet said whether one rendering
should be forced everywhere or the choice should stay contextual, so nothing has been written
to the glossary. Asked back on the thread. resu-xunil (post 3169) leans towards flexibility
over a forced single verb, on the grounds that the context should decide; mirina has not yet
answered, so the row stays unwritten until the two of them agree. **Since resolved:** they
agreed on "context decides" on 2026-08-11, and there is deliberately no row. See the
2026-08-11 `build` entry at the top of this file.

### 2026-08-03: `code block` → `bloc de code` (reviewer retraction)

**Decided by:** native speaker (myrtarazona), forum topic 926
(https://forum.jiki.io/t/926/18), retracting her own confirmation at
https://forum.jiki.io/t/926/16 three hours earlier. Corroborated by two further native
speakers on the same topic: williamapc (https://forum.jiki.io/t/926/20) and resu-xunil
(https://forum.jiki.io/t/926/21).
**Terms affected:** `code block` (`bloc d'instructions` → `bloc de code`), and the
cross-reference in the Notes of `scope` → `portée`.
**Files affected:** `glossary.md` (Loops, state & program flow).

myrtarazona confirmed `bloc d'instructions` on 2026-08-02 (see the superseded entry below),
then came back the same evening to say she had not been comfortable with that answer. Her
objection is one of precision, not of taste: `bloc d'instructions` names only the
statements, so a French explanation built on it teaches something narrower than the English
does. Her own worked example is the argument. "Dans une fonction, un bloc d'instructions
après un if contient uniquement des instructions à exécuter si la condition est vraie."
misleads a learner, because a block after an `if` also holds expressions such as
`x = 5 + 3`; "Dans une fonction, un bloc de code après un if peut contenir n'importe quel
code à exécuter si la condition est vraie, que ce soit des instructions, des expressions ou
des déclarations." is accurate. She also checked usage before writing, citing MDN's
French glossary (community-translated) and the French version of Coddy.Tech as evidence
that `bloc de code` is what French programming writing universally says, and noted the
practical cost of the narrower term: learners hitting the mismatch would ask about it on
the forum and Discord, which is avoidable confusion we would be generating ourselves.

williamapc agreed with her reasoning while considering both renderings usable ("I think you
are absolutely right", "you can mostly use both with the same meaning", "after a few days of
coding you won't notice any difference"), so his position argues against nothing here.
resu-xunil supported the substantive point from the other side: instructions exist
perfectly well without code (wiring diagrams, safety procedures, recipes, step-by-step
manuals all give instructions and contain no programming), so `instructions` is the weaker
half of the pair to build the term on. No reviewer argued for keeping `bloc d'instructions`.

**This is a correction of a retracted decision, not an overwrite of a live one.** The
protection on a native-speaker row exists so an agent's opinion cannot displace a speaker's
judgement; here the speaker who made the call withdrew it herself, on the record, in the
same thread, with two other reviewers weighing in and neither objecting. The owner
authorised actioning it. The row is protected again in its new form, and reopening it means
going back to topic 926.

The `scope` → `portée` row cross-references this one to keep the two concepts apart, so its
Notes were updated in the same edit; the `portée` rendering itself did not change.

### 2026-08-03: Stage 3 batch 1 additions (13 unconfirmed drafts, written into the glossary)

**Decided by:** nobody yet. These are agent proposals from the Stage 3 batch 1 translation
pass (space-invaders-solve-basic, maze-solve-walk, fix-wall, snowman-basic, foxy-face,
penguin, cloud-rain-sun, jumbled-house, golf-rolling-ball-loop, maze-solve-repeat, plus the
shared `space-invaders` and `golf` family catalogs). Unlike the 2026-08-01 batch below,
these **have** been written into `glossary.md`, each marked "Unconfirmed draft (agent,
2026-08-03)" in its Notes, so that the ten translations stay consistent with each other
while native speakers review them. Every one of them is open to being overruled on the
forum; none is protected.

**Terms affected:** `Take a Walk (exercise title)`, `Loopy Maze (exercise title)`,
`UI button label quoted in prose`, `input(s)`, `refactor`, `alien`, `row (of aliens)`,
`to shoot down (an alien)`, `shot (golf)`, `step / unit (distance moved)`,
`inset (drawing exercises)`, `nose (of an animal)`, `penguin`.
**Files affected:** `glossary.md` (Core decisions, Functions & control flow, Tooling &
engineering, and a new "Exercise world vocabulary" section), and the ten `fr` exercise
translations and two family catalogs listed above.

**`input(s)` → _entrée(s)_.** Proposed independently by four of the ten workers, all
agreeing on the same rendering, which is the strongest signal in the batch. It was already
proposed once, by two workers on 2026-08-01 (see that entry below), and left unwritten;
another four arriving at it independently is the reason it is now in the glossary rather
than parked again. The tension it creates is real and is recorded in the row itself rather
than resolved silently: French already has agreed rows for `parameter` → _paramètre_ and
`argument` → _argument_, and the shared `draw` family catalog currently says _arguments_ in
six places and _entrée_ in two. Those two rows are older and were not touched. The split
this batch applies is by what the English source says, not by what the concept is: English
beginner prose deliberately says "input" before it ever says "argument", and flattening
that into _argument_ would teach the precise word earlier than the curriculum does. If a
native speaker prefers one word throughout, this row is the one to drop, not the other two.

**`to shoot down` → _abattre_, and the conflict behind it.** The `space-invaders` family
had two verbs for one action: the shared base catalog said _vaincre_ once
(`errors.notAllAliensDead`), and `space-invaders-solve-basic`'s own catalog said
_abattre_/_Abats_ three times. A learner sees both in the same exercise, because the base
catalog and the exercise catalog render on one screen. _abattre_ won on usage (three
occurrences against one) and because _vaincre_ is the verb for defeating an opponent in a
contest, which does not describe firing at a target. The base catalog now reads _abattre_.
This is a consistency fix, not a language ruling: nobody who speaks French has been asked
which verb a beginner should read, and _vaincre_ has a fair claim in a sentence about
winning. The row says so, and it should be put to the forum.

**`alien` → _alien_** rather than _extraterrestre_: the exercise is written in an arcade
register, and _extraterrestre_ is a four-syllable formal noun that would sit oddly in
_abats tous les aliens_. **`row` → _rangée_** rather than _ligne_ specifically because
these pages already use _ligne_ for a line of code, and the collision would land inside a
single sentence. **`shot` → _coup_** and **`step`/`unit` → _unité_** both follow renderings
the `golf` family catalog was already using (_la longueur du coup_, _d'une unité vers la
droite_), so the rows record existing practice rather than introduce anything.

**`nose` → _la truffe_** is the batch's least obvious call. French distinguishes the human
_nez_, the animal's whole snout _museau_, and the moist nose-tip _truffe_; what the drawing
exercises draw on a fox is the tip, so _truffe_ is the accurate word, and it is the one a
French child would use. **`penguin` → _pingouin_** deliberately takes the everyday word
over the zoologically correct _manchot_, on the same reasoning as the rest of the
curriculum's vocabulary: the exercise is not about taxonomy, and _manchot_ would read as a
correction the learner did not ask for. **`refactor` → _réécrire_** avoids the anglicism
_refactoriser_, which is what French developers say to each other but not a word a beginner
has met.

**The two exercise titles** (`Take a Walk` → _Une petite marche_, `Loopy Maze` → _Le
labyrinthe des boucles_) follow the precedent set by the `Solve the Maze` vote below: a
title is rendered for what it does, not word for word, and it earns a glossary row because
sibling exercises cross-reference each other by title. That cross-referencing is also why
the `foxy-face` title _Tête de renard_ now appears in the `penguin` instructions, which
previously referred to the sibling exercise by its English name.

**The UI button row** is a convention rather than a term: when prose tells the learner to
press something, the quoted string has to be the one the French app actually renders
(_« Exécuter le code »_), because a freshly invented rendering sends the learner looking
for a button that does not exist.

### 2026-08-03: "Not started" → `Non commencé` / `Non commencés`

**Decided by:** native speaker (mirina), agreed by a second native speaker (resu-xunil),
forum topic 959 (https://forum.jiki.io/t/959/7).
**Terms affected:** the new `Not started (progress status)` row.
**Files affected:** `glossary.md` (Platform & curriculum vocabulary) and the French app
copy, whose progress-status keys now read `Non commencé` / `Non commencés`.

The app copy previously rendered the status as `Pas commencé` / `Pas commencés`. mirina
proposed `Non commencé` instead and resu-xunil agreed; nobody argued for keeping `Pas`.
`Non` is the form French uses to negate a participle used attributively, which is what a
status label is, whereas `Pas commencé` reads as a clipped spoken negation of a verb and
sits awkwardly as a standalone label.

Number agreement is part of the decision, because the string appears in two shapes in the
UI: singular on a status badge describing one challenge, plural on a filter tab covering a
list of them. That is why the row carries both forms rather than one, and it is the part a
future website-copy pass would otherwise flatten.

There was no glossary row for this at all before, so a future pass would have regenerated
`Pas commencé` and quietly undone the fix. The row is now protected: it is a native
speakers' decision and is not to be re-opened by a translation pass.

### 2026-08-03: Dictionaries page wording, settled between two reviewers

**Decided by:** mirina and resu-xunil on forum topic 980
(https://forum.jiki.io/t/980). They reviewed the page independently, disagreed on seven
sentences, and were asked to settle those between themselves rather than have us pick a
side. mirina listed the resolutions in post 8 and resu-xunil accepted all of them in post 9
("That choice is perfect, I can't do better"), so every one of the seven is a two-speaker
agreement, not one reviewer's preference.
**Terms affected:** none. No glossary row changed; this is per-page wording plus one
existing standard being reaffirmed.
**Files affected:** `concept/dictionaries` reviewer notes and the `fr` translation of the
Dictionaries concept page.

The one decision with reach beyond this page is _récupérer_ for getting a value out of a
container. It was settled on the Arrays page first, and both reviewers chose the version
that matches it here (_d'en récupérer sa valeur_) over _en sortir_ and _en extraire_, so it
is now the consistent French verb for that action across concept pages.

Two points where the reviewers' reasoning is worth keeping. First, mirina refused to swap
_si tu veux_ for _si nécessaire_ in the same-values rule: to a complete beginner "if you
want" and "if needed" are different instructions, and the English says the former. Second,
the "in code" sentence was restructured with a colon rather than a semicolon; mirina's
two-clause structure won, but with her own later correction from semicolon to colon.

The straight-quote question that both reviewers raised separately was not put to them,
because `guide.md` already settles it: French uses guillemets. It was applied mechanically.

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

**Superseded** by the 2026-08-03 entry "`code block` → `bloc de code` (reviewer retraction)"
above: myrtarazona retracted this confirmation herself on the same topic, and the row now
reads `bloc de code`. Kept here as the historical record of what was decided on the day.

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
| foot-gun | Settled by the dated entry above (2026-08-10, topic 314). |

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
| string | Kept English so _chaîne_ stays free for the array-chain metaphor. Always italicized in prose as of 2026-08-14 (topic 314) — see the dated entry below for how the open question was closed. |
| pattern | resu-xunil proposed keeping "pattern" in English rather than "motif" (t/1235 post 1, re: exercise/foxy-face "Tu retrouveras souvent ce motif"), explicitly uncertain and tagged @mirina and @williamapc for a second opinion. Not yet settled either way; current published text still says "motif". |
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
