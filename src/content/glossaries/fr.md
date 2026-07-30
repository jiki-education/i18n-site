---
lang: "fr"
name: "French"
family: null
governance_sha: "1d91ad4"
content_version: "4743ea96c4fa"
published_at: "2026-07-30"
term_count: 114
forum_topic_id: 314
---

# French (fr) glossary

The agreed term list for French. Every term here has been agreed and is binding: use it exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file; it surfaces new terms it had to decide on as proposals in its output (a "glossary delta"). Those proposals are discussed, and only once agreed are they written in (by a human or by Claude). So everything in this file is, by definition, already agreed. Terms that have not been agreed simply are not here yet.

Writes are **additive**, and every row records who decided it in the `Agreed by` column (`agent` = unconfirmed agent draft, `human` = confirmed by a native speaker, with the forum topic where it was settled). See `global/workflow.md` for both rules.

## Core decisions

| English | French | Use (fr/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| programming / coding | programmation | fr | Standard, unambiguous. | agent |
| developer | développeur / développeuse | fr | Standard French equivalent. | agent |
| tech / tech industry | secteur technologique | fr | Natural in French tech media; "industrie technologique" is heavier. | agent |
| streak | série | fr | A run of consecutive days, as in the learning-platform sense. | agent |
| pitfall | piège | fr | Ordinary word; stands alone. | agent |
| foot-gun | piège involontaire | fr | Idiomatic English term with no clean one-word French equivalent; use a descriptive phrase rather than forcing a fixed term, per `global/terms.md`. | agent |

## Localize (use the French term)

These are terms where the French is used in prose, so the "Use (fr/en)" column is `fr` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | French | Use (fr/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| value | valeur | fr | Ordinary word. | agent |
| number | nombre | fr | Ordinary word. | agent |
| true / false | vrai / faux | fr | Not capitalised in prose. Keywords `true`/`false` stay English in code. | agent |
| character | caractère | fr | Ordinary word. | agent |
| integer | nombre entier | fr | | agent |
| float / decimal | nombre décimal | fr | Use _nombre à virgule flottante_ only when the IEEE-754 floating-point nature specifically matters. | agent |
| array / list | tableau | fr | Exercise prose sometimes says "list" informally for the same concept; render both as _tableau_, do not introduce a separate word. | agent |
| dictionary | dictionnaire | fr | In JS-specific prose this is usually an _objet_ or a `Map`; use the concept word _dictionnaire_ only when teaching the general idea. | agent |
| element | élément | fr | Array element = _élément du tableau_. | agent |
| index | indice | fr | Not "index", which carries a book/database sense in French. "par son indice". | agent |
| key-value pair | paire clé-valeur | fr | The key itself is _clé_ (an ordinary word). | agent |
| Boolean | booléen | fr | The code type name `Boolean` stays as-is in code. | agent |

### Functions & control flow

| English | French | Use (fr/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| if statement | instruction `if` | fr | Keep `if` as the real keyword. | agent |
| condition | condition | fr | Ordinary word; stands alone. | agent |
| comparison | comparaison | fr | Ordinary word; stands alone. | agent |
| expression | expression | fr | | agent |
| operator | opérateur | fr | | agent |
| NOT operator / logical negation | opérateur NON / négation logique | fr | The `!` symbol stays as-is in code. | agent |
| statement (executable) | instruction | fr | The imperative sense: a line of code that does something and gets executed. Deliberate overlap with _instruction_ (given to Jiki) below: French uses the same everyday word for both, and the contexts never compete on a page. | agent |
| statement (logical claim) | assertion | fr | The proposition sense: a claim that is true or false; also a test assertion. Deliberately distinct from _instruction_ above. | agent |
| function | fonction | fr | The *keyword* `function` in code stays English; the concept in prose is _fonction_. | agent |
| to call (a function) | appeler (une fonction) | fr | _appeler une fonction_. | agent |
| to define (a function) | définir (une fonction) | fr | | agent |
| parameter | paramètre | fr | Declaration-site name. | agent |
| argument | argument | fr | Call-site value. | agent |
| input (to a function) | entrée | fr | | agent |
| output | sortie | fr | | agent |
| to return (a value) | renvoyer | fr | "La fonction renvoie 30." Not "retourner", which is a widespread but less idiomatic variant. | agent |
| return value | valeur de retour | fr | Noun form; keep distinct from the verb _renvoyer_ above. | agent |
| pure function | fonction pure | fr | | agent |
| brackets (the two after a function name) | parenthèses | fr | The `()` pair written after a function name to call it: _écris son nom, puis ces parenthèses_. French names the bracket type, so always say which; see the Brackets section below. | agent |

### Loops, state & program flow

| English | French | Use (fr/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| keyword | mot-clé | fr | | agent |
| interpreter | interprète | fr | The **person** who interprets, not a piece of software: on concept pages Jiki *is* the interpreter ("son travail consiste à interpréter le code que tu écris"). _interprète_ is the ordinary French word for someone whose job is interpreting, so it can describe Jiki. Not _interpréteur_, which in French only ever names the program. | agent |
| instruction (given to Jiki) | instruction | fr | A single thing the learner tells Jiki to do: _donner à Jiki les bonnes instructions_, _écrire des instructions sur le tableau blanc_. Everyday word, not a formal/legal register one. See the note on _statement (executable)_ above about the shared word. | agent |
| mental model | modèle mental | fr | The picture-in-your-head framing: _c'est ce modèle mental que je me suis construit_. Ordinary and current in French. | agent |
| (programming) language | langage (de programmation) | fr | _langage_ for a programming language (_langage de programmation_ on first mention, then _langage_). Use _langue_ only for the human-language framing ("une langue que l'ordinateur comprend"), which is what French actually distinguishes; never mix the two words for the same sense on one page. | agent |
| variable | variable | fr | Gender: _la variable_. | agent |
| assignment | affectation | fr | Not "assignation", which is a flagged anglicism in French. | agent |
| to assign | affecter | fr | Matches _affectation_ above: "affecter une valeur à une variable." | agent |
| code block | bloc d'instructions | fr | Deliberately distinct from _portée_ (scope) below. | agent |
| error | erreur | fr | | agent |
| nested | imbriqué(e) | fr | e.g. _boucle imbriquée_ = nested loop. | agent |
| iteration | itération | fr | Verb: _itérer_; "parcourir" also natural for iterating over a collection. | agent |
| to run / execute (code) | exécuter | fr | | agent |
| loop | boucle | fr | Gender: _la boucle_. | agent |
| for loop | boucle `for` | fr | Keep `for` as the real keyword + _boucle_. | agent |
| while loop | boucle `while` | fr | As above, with `while`. | agent |
| for-of loop | boucle `for-of` | fr | As above, with `for-of`. | agent |
| loop body | corps de la boucle | fr | | agent |
| break (loop control) | instruction `break` | fr | The keyword `break` in code stays English; this is the prose concept of breaking out of a loop. | agent |
| increment | incrément | fr | Verb: _incrémenter_. | agent |
| modulo / remainder operator | modulo (opérateur) / le reste (valeur) | fr | _modulo_ for the `%` operator; _le reste (de la division)_ for the resulting value. | agent |
| concatenation / to concatenate | concaténation / concaténer | fr | | agent |
| toggle | basculer | fr | Verb; no crisp noun exists in French. "basculer une valeur booléenne." | agent |
| state / stateful | état / à état | fr | "à état" or "avec état" for "stateful". | agent |
| scope | portée | fr | Deliberately distinct from _bloc d'instructions_ (code block) above. | agent |
| class | classe | fr | | agent |
| method | méthode | fr | | agent |
| property | propriété | fr | | agent |
| object | objet | fr | | agent |

### Tooling & engineering

| English | French | Use (fr/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| auth (authentication / authorization) | authentification / autorisation | fr | Pick by meaning; both are standard, unambiguous. | agent |
| deploy (verb / noun) | déployer / déploiement | fr | Standard, no loanword competition. | agent |
| tool / tooling | outil / outillage | fr | _outils_ reads more naturally than _outillage_ in most prose; _outillage_ for the collective sense ("toolchain" = _chaîne d'outils_). | agent |
| module | module | fr | Identical form in French. | agent |
| algorithm | algorithme | fr | | agent |
| edge case | cas limite | fr | No official ruling exists; flagged for native-speaker confirmation. | agent |
| backwards compatibility | rétrocompatibilité | fr | Unambiguous, unlike "compatibilité descendante" which requires knowing which direction "descendante" means. | agent |
| component | composant | fr | Native term, not a loanword, unlike in some other languages. | agent |

### Platform & curriculum vocabulary

| English | French | Use (fr/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| feature (platform capability) | fonctionnalité | fr | Deliberately distinct from _fonction_ (function) to avoid collision. | agent |
| course | cours | fr | The whole Jiki course the learner is taking: _dans ce cours_. Keep distinct from _leçon_ (lesson) and _programme_ (curriculum). | agent |
| lesson | leçon | fr | | agent |
| exercise | exercice | fr | | agent |
| scenario | scénario | fr | Jiki-specific structured variant within an exercise. | agent |
| curriculum | programme | fr | Avoid the false friend "curriculum", which in French means a CV/résumé. | agent |
| level | niveau | fr | The curriculum's structural unit. | agent |
| milestone | jalon | fr | A progression checkpoint. | agent |
| pathway | parcours | fr | A structured learning sequence. Deliberately distinct from _filière_ (track) below. | agent |
| track (curriculum path) | filière | fr | Deliberately distinct from _parcours_ (pathway) above. | agent |
| syllabus | programme (du cours) | fr | Note the deliberate overlap with _curriculum → programme_; disambiguate with "du cours" when both appear in the same context. | agent |
| mentor / mentoring | mentor / mentorat | fr | | agent |
| tutorial | tutoriel | fr | | agent |
| solution (learner's submission) | solution | fr | | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
French in the gloss column below; with no `<define>`, use the English bare, no gloss.

| Term | French gloss (on `<define>`) | Notes | Agreed by |
|------|--------------------------------|-------|-----------|
| string | _chaîne de caractères_ | Exception: in the string concept itself, use _chaîne de caractères_ where the source defines it, then use _string_ throughout. Keeping it English leaves _chaîne_ free for the array chain metaphor. | agent |
| API | explain what it is in French | Not a word a beginner knows; where the source defines it, explain the concept in French, not just gloss the acronym. | agent |
| framework | _cadre de développement_ | Where the source defines it, explain it means a reusable _cadre de développement_, then use _framework_ freely. Established loanword in French dev writing. | agent |
| workflow | _flux de travail_ | The software-engineering sense (a sequence of dev tasks). Where the source defines it, explain it means _flux de travail_, then use _workflow_. | agent |
| template literal | _littéral de gabarit_ | Where the source defines it, explain it as a _littéral de gabarit_ (the official term), then use _template literal_, which is what real developers actually say. | agent |
| CLI (the concept) | _interface en ligne de commande_ | Where the source defines it, explain CLI as _interface en ligne de commande_ (command-line interface). | agent |
| canvas (graphics exercises) | _zone de dessin_ | The drawing surface in creative-coding exercises. Where the source defines it, explain it as the _zone de dessin_ (the `canvas` element), then use _canvas_. | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | As keywords/technical tokens. | agent |
| Code, Bug, Frontend, Backend | (no gloss) | | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | French rendering | Notes | Agreed by |
|-------------------|-------------------|-------|-----------|
| box (value container) | boîte | Plain, concrete French word for a box. Gender: _la boîte_. | agent |
| chain (array metaphor) | chaîne | Standard French for a physical chain; a link = _maillon_. Works cleanly because _string_ stays English above (its literal sense, _chaîne de caractères_, doesn't collide in prose). | agent |
| input slot | fente | The narrow slot you post a coin or letter into (a piggy bank, a vending machine, a letterbox). Gender: _la fente_. | agent |
| return chute | toboggan | The playground-slide image: concrete and child-vivid, matching the informal register of the other metaphors. Gender: _le toboggan_. Alternative _goulotte_ (a vending-machine delivery chute) is more mechanically precise if a future pass wants a stricter machine image. | agent |
| machine (function metaphor) | machine | A function modelled as a machine, with an input slot and a return chute. Gender: _la machine_. | agent |
| crank (machine crank) | manivelle | The handle Jiki turns to start a machine: _tourner la manivelle_. Gender: _la manivelle_. | agent |
| shelves (storage) | étagères | The shelves where variables and functions are stored. Gender: _les étagères_ (plural), _une étagère_ (singular). | agent |
| warehouse (Jiki's warehouse) | entrepôt | The place where Jiki hangs out and keeps his machine shelf. Gender: _l'entrepôt_ (masculine). | agent |
| board / whiteboard | tableau blanc | **One object, one word**, per `global/terms.md`: the same board the learner writes instructions on for Jiki to follow, and the one a function keeps its own notes on. Always written in full, never shortened to _tableau_, so it never collides with _tableau_ (array). Gender: _le tableau blanc_. | agent |

## Brackets

Default to naming the bracket type. When a specific bracket type matters, name it and show the glyph in a code tag immediately after: _crochets (`[]`)_.

| Glyph | French | Notes | Agreed by |
|-------|--------|-------|-----------|
| `()` | parenthèses | Default bracket word. | agent |
| `[]` | crochets | | agent |
| `{}` | accolades | | agent |
| `<>` | chevrons | Or name the signs directly (_signes inférieur et supérieur_) when clearer. | agent |

Example: _pour appeler une fonction, écris son identifiant, puis une paire de parenthèses (`()`)._
