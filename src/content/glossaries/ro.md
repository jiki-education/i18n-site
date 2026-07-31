---
lang: "ro"
name: "Romanian"
family: null
stage: "setup"
governance_sha: "5109a4e"
content_version: "bc6fcb2337fd"
published_at: "2026-07-31"
term_count: 89
---

# Romanian (ro) glossary

The agreed term list for Romanian. Why each term was chosen, and who chose it, is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Romanian | Use (ro/en) | Notes |
|---------|----------|-------------|-------|
| programming / coding | **programare** | ro | Use consistently. Never `codare`, which reads as encoding/encryption rather than writing code. |
| developer | **programator** | ro | `dezvoltator` is corporate-HR register; keep it out of prose. |
| tech / tech industry | **industria IT** | ro | Use `tehnologic` for the general adjective sense ("tech company" = „companie de tehnologie" / „companie IT"). |
| pitfall | **capcană** | ro | Stands alone; no gloss needed. |
| mental model | **model mental** | ro | The picture-in-your-head framing. |

## Localize (use the Romanian term)

These are terms where the Romanian is used in prose, so the "Use (ro/en)" column is `ro` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Romanian | Use (ro/en) | Notes |
|---------|----------|-------------|-------|
| true / false | adevărat / fals | ro | Not capitalised in prose. |
| array / list | tablou | ro | Neuter: „un tablou", „două tablouri". See also "chain" under Jiki physical metaphors for the teaching metaphor used alongside it. Do not render `dashboard` as „tablou de bord", which collides with this word; see "Platform & curriculum vocabulary". |
| index | indice | ro | Plural `indici`. Not `index`, which reads as the index of a book or a database. |
| character (text) | caracter | ro | A single text character. Keep distinct from `personaj` (the on-screen game figure) under Jiki physical metaphors. |
| letter (of a string) | literă | ro | Distinct from `caracter`. |
| float / decimal | număr zecimal | ro | Use `număr cu virgulă mobilă` only where the floating-point nature itself is the point. |
| compound data type | tip de date compus | ro | Distinct from plain `tip de date`. |
| random number | număr aleatoriu | ro | `aleatoriu`, not `aleator`. |

### Functions & control flow

| English | Romanian | Use (ro/en) | Notes |
|---------|----------|-------------|-------|
| if statement | instrucțiune `if` | ro | Keep `if` in backticks as the real keyword. `structură decizională` is textbook register and too heavy for this voice. |
| statement (executable) | instrucțiune | ro | The imperative sense: a line of code that does something and gets executed. Shares the word with "instruction (given to Jiki)" below. |
| statement (logical claim) | afirmație | ro | The proposition sense: a claim that is true or false. Keep distinct from `instrucțiune`; pick by meaning, not by the English word. |
| instruction (given to Jiki) | instrucțiune | ro | What the learner puts on the board for Jiki to follow. Everyday Romanian, not a legal-register word. Deliberately the same word as "statement (executable)". |
| to return (a value) | a returna | ro | „returnează 30". Not `a întoarce`, which reads as physically turning something around. |
| return value | valoare returnată | ro | Not `valoare de retur`, which belongs to finance. |
| input (to a function) | intrare | ro | Also what the input-slot metaphor is built on („fanta de intrare"). |
| output | ieșire | ro | As above, for the return chute („toboganul de ieșire"). |
| brackets (the two after a function name) | paranteze | ro | The `()` pair written after a function name to call it („îi scrii numele și apoi cele două paranteze"). Bare `paranteze` is enough where the context is a function call; name the type only when disambiguating, per the Brackets section below. |
| built-in | predefinit | ro | Not `încorporat`, which reads mechanical. |
| placeholder | substituent | ro | A slot in a string template that gets filled with a value. |

### Loops, state & program flow

| English | Romanian | Use (ro/en) | Notes |
|---------|----------|-------------|-------|
| loop | buclă | ro | „bucla `for`", „bucla `while`". Not `ciclu` or `instrucțiune repetitivă`, which are the academic textbook register. |
| nested | imbricat | ro | „bucle imbricate" = nested loops. When glossed, gloss the full term (_nested loop_), not the bare adjective. |
| keyword | cuvânt-cheie | ro | Hyphenated, per DOOM. Plural `cuvinte-cheie`. |
| interpreter | interpretor | ro | **A person doing a job, not a program.** On concept pages Jiki *is* the interpreter („interpretorul tău este Jiki", „treaba lui este să interpreteze codul pe care îl scrii"). Never `interpret`, which in Romanian is a spoken-language interpreter or a performer, a different job entirely. |
| (programming) language | limbaj (de programare) | ro | Never `limbă`, which is a natural language. Use `limbaj de programare` where the programming sense needs stating, and bare `limbaj` once it is established, including in the "a language a computer understands" framing. |
| code block | bloc de cod | ro | `bloc de instrucțiuni` is the textbook form; `bloc de cod` is friendlier. Keep distinct from `domeniu de vizibilitate` (scope) below. |
| to run / execute (code) | a rula | ro | `a rula` for running a program or a block; `a executa` for a single instruction being carried out. |
| increment | incrementare | ro | |
| modulo / remainder operator | restul împărțirii | ro | Say what it does, because it explains itself to a beginner. `modulo` only where the operator needs naming. |
| scope | domeniu de vizibilitate | ro | Keep distinct from `bloc de cod` above. The scope concept page may use `scope` after defining it. |
| toggle | a comuta | ro | To flip a value between two states. |
| indentation | indentare | ro | Established Romanian; not `aliniere`. |

### Tooling & engineering

| English | Romanian | Use (ro/en) | Notes |
|---------|----------|-------------|-------|
| tool / tooling | instrument | ro | Not `unealtă`, which is a physical hand tool. |
| deploy | a publica | ro | Go-live sense. Not `a implementa` (that is "to implement"); Romanian devs say „a face deploy" in speech, which is unwritable here. |
| auth: authentication | autentificare | ro | Verifying identity. |
| auth: authorization | autorizare | ro | Verifying permissions; keep distinct from authentication above. |
| edge case | caz limită | ro | |
| debugging | depanare | ro | The prose activity. The `Debug` UI label and code token stay English; see "Keep in English". |

### Platform & curriculum vocabulary

| English | Romanian | Use (ro/en) | Notes |
|---------|----------|-------------|-------|
| feature (platform capability) | funcționalitate | ro | Deliberately kept distinct from `funcție`, which is reserved for the CS "function" concept. |
| concept (learning unit) | noțiune | ro | Concept Library = Biblioteca de noțiuni. Not `concept`, which is vaguer and everyday. |
| course | curs | ro | The whole Jiki course the learner is taking („în cursul acesta, interpretorul tău este Jiki"). Keep distinct from `lecție` and `programă` (curriculum). |
| task (within an exercise) | sarcină | ro | Distinct from `exercițiu` (the exercise itself). |
| scenario | scenariu | ro | |
| track (curriculum path) | traseu | ro | Keep distinct from `parcurs` (pathway) below. |
| pathway | parcurs | ro | Keep distinct from `traseu` (track) above. |
| solution (learner's submission) | soluție | ro | |
| plan (subscription tier) | abonament | ro | Enables „abonamentul {tier}". Not `plan`, which reads as a schedule. |
| dashboard | panou de control | ro | Deliberately **not** `tablou de bord`, which collides with `tablou` (array). |
| canvas (graphics exercises) | pânză | ro | The drawing-surface sense specifically. |

## Keep in English

These stay in English in Romanian prose, with the Romanian gloss to use for each.

| Term | Romanian gloss (on `<define>`) | Notes |
|------|---------------------------------|-------|
| string | _șir de caractere_ | Declines without a hyphen: „stringul", „stringuri" (see `guide.md`). Use `șir de caractere` only as the gloss where the source defines it, then `string` throughout. |
| Boolean | _valoare logică_ | Where the source defines it, explain it means a `valoare logică`, then use `Boolean`. |
| API | explain the concept in Romanian, not just the acronym | „un set de reguli prin care două programe vorbesc între ele", not just the expanded letters. |
| CLI | _linia de comandă_ | Where the source defines it, explain CLI as the text-based way of driving a computer. |
| framework | _cadru de lucru_ | Gloss it once where defined, then use `framework`, which is what Romanian dev writing does. |
| component | _componentă_ | Use `componentă` freely. |
| AI | _inteligență artificială_ | Use "AI" in prose and marketing, not the purist `IA`. |
| LLM | explain in Romanian | |
| widget | (no gloss) | Established in Romanian tech writing. |
| chat | (no gloss) | Fully nativized; a gloss would teach nothing. |
| backtick | (show the glyph) | |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As UI labels and code tokens. The prose activity of debugging is `depanare`; see "Tooling & engineering". |
| Code, Bug, Frontend, Backend | (no gloss) | As UI labels and code tokens. |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Romanian rendering | Notes |
|-------------------|---------------------|-------|
| box (value container) | cutie | |
| chain (array metaphor) | lanț | A single link is a `verigă`. Used as the teaching image alongside the technical term `tablou` for array. |
| machine (function metaphor) | mașină | A function is one of Jiki's little machines, „una dintre mașinile lui Jiki". The bare word's commonest everyday sense is "car", so keep the machine context visible (slot, crank, shelf) on first use. Not `mașinărie`, which reads as a contraption. |
| input slot | fantă de intrare | `fantă` is a narrow opening, the ordinary word for a coin slot. |
| return chute | tobogan de ieșire | `tobogan` is the playground slide, and also the word for a chute used to move things between levels. Not `jgheab` (a gutter or trough, rustic). |
| crank (machine crank) | manivelă | The lever Jiki turns to power a machine up. Exactly the right word: a `manivelă` is what you turn to operate a mechanism. |
| shelves (storage) | raft (pl. rafturi) | Jiki's machines sit on a `raft`. |
| warehouse (Jiki's warehouse) | depozit | Where Jiki hangs out and keeps his machine shelf („depozitul lui Jiki"). |
| workshop (Jiki's workshop) | atelier | The room where Jiki works; the shelves live in it. |
| board / whiteboard | tablă | **One object, one word.** The board the learner writes instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on, are the same `tablă`. The ordinary word for a board in a room; no collision with `tablou` (array), which is a different word. |
| coin (number metaphor) | monedă | |
| label (on a box/machine) | etichetă | |
| piece of paper (string metaphor) | foaie de hârtie | |
| character (game/maze figure) | personaj | The on-screen figure the learner controls. Keep `caracter` for a text character; see "Values & data types". |
| mini-Jiki | mini-Jiki | Romanian takes the `mini-` prefix with a hyphen naturally. |

## Brackets

| Glyph | Romanian | Notes |
|-------|----------|-------|
| `()` | paranteze · paranteze rotunde | Plain `paranteze` by default; add `rotunde` + glyph only when disambiguating. |
| `[]` | paranteze pătrate | |
| `{}` | acolade | Not `paranteze acolade`; `acolade` stands alone. |
| `<>` | paranteze unghiulare | |

How to phrase a bracket in running prose is in `guide.md`.

---

## Decision log

The decision log behind `glossary.md`. Two rules bind every pass that reads it:

1. **A pass that changes the glossary reads this file first, and appends an entry after.** If an entry below records a **human** deciding a term, it is settled: it changes only by fresh agreement with a human, raised where it was settled. If nothing here mentions the term, it is an **unconfirmed draft**, and a pass may correct it provided it appends an entry saying what it changed and why.
2. **A translation pass never loads this file.** It loads `glossary.md` and needs the term, not the argument that produced it.

### 2026-07-31: Language bootstrapped

**Decided by:** agent, approved by the owner (iHiD). **Status: every row is an unconfirmed draft.** No native speaker has confirmed any rendering in this glossary. Romanian was requested on the forum the same day by @florin-cuculeac ([topic 714](https://forum.jiki.io/t/714)), who has not yet reviewed anything; the pinned glossary thread exists precisely to get these rows checked.

**Terms affected:** every row in `glossary.md`.

The research rested on pre-2022, human-authored sources: the [Mozilla Romanian localization style guide](https://mozilla-l10n.github.io/styleguides/ro/index.html), the [Ubuntu Romanian team translation guide](https://wiki.ubuntu.com/RomanianTeam/Proiecte/Localizare/Ghid), DOOM2/DOOM3 and dexonline for orthography and word senses, and Romanian university and high-school CS course material (Politehnica București `ocw.cs.pub.ro`, `pbinfo.ro`, `infogenius.ro`, UnitBv course PDFs). Several Romanian-language tutorial sites were found to be machine-translated from English and were discarded rather than used as evidence of natural phrasing.

**The register question ran through everything.** Romanian has two live technical registers that disagree: the school and university one (`ciclu`, `instrucțiune repetitivă`, `tablou`, `șir de caractere`) and the modern online dev one (`buclă`, `array`, `string`). Jiki is a warm mentor rather than a textbook, so the glossary takes the everyday word where that is genuinely what a reader says (`buclă`), and keeps the native term where the academic word is also the ordinary one. This is the row-by-row judgement most likely to draw native-speaker disagreement.

**Four rows are flagged as the first things to ask a native speaker about:**

- **`interpreter` → `interpretor`.** The hard one. `global/terms.md` requires a word that can name a **person**, because Jiki *is* the interpreter. DEX defines `interpretor` as a program ("procesor specializat"), which is the failure mode that rule exists to prevent. It was chosen anyway because morphologically it is an ordinary `-or` agent noun, and Romanian `-or`/`-tor` names people as readily as machines (`doctor`, `profesor`, `traducător`); it carries no device morpheme and does not begin with "program". The alternative, `interpret`, is the person word but means a spoken-language interpreter or a performer, which is the same wrong job Hungarian rejected as `tolmács` and Serbian as `tumač`. Lowest-confidence row in the file.
- **`array` → `tablou`.** The native term Romanian schooling teaches, consistent with the choices Hungarian and Serbian made. `array` (declined `array-ul`, `array-uri`) is very common in Romanian web-dev speech and is the obvious counter-proposal.
- **`deploy` → `a publica`.** Romanian devs say „a face deploy" in speech, which cannot be written here. `a implementa` was rejected because it means "to implement".
- **`placeholder` → `substituent`.** `placeholder` is also used bare in Romanian dev speech.

**Three metaphor renderings want a sanity check** rather than an argument: `mașină` for the function machine (the bare word's commonest everyday sense is "car", though the slot-and-crank context disambiguates), `fantă` for the input slot (correct but a slightly technical French borrowing), and `tobogan` for the return chute (chosen over the literal `jgheab`, which is a rustic gutter).

**One term was deliberately left out.** `foot-gun` has no clean Romanian idiom, so rather than force a fixed rendering the glossary has no row for it and translators should use a descriptive phrase.

**Two collisions were designed around**, and a later pass should not undo them without reading this:

- `dashboard` is `panou de control`, **not** the otherwise natural `tablou de bord`, because `tablou` is already the array term.
- `feature` is `funcționalitate`, kept clear of `funcție` (the CS concept).

**Roughly half of `global/terms.md` earned no row.** Terms with one obvious Romanian rendering and nothing to decide (`valoare`, `număr`, `variabilă`, `funcție`, `condiție`, `eroare`, `element`, `expresie`, `operator`, `parametru`, `argument`, `obiect`, `clasă`, `metodă`, `iterație`, `algoritm`, `dicționar`, `cheie`, `excepție`, `sintaxă`, `concatenare` and others) were left out on purpose, per the test in step 6 of `global/translating.md`. Their absence is not an oversight.

### Term rationale

Why individual rows read the way they do, where the reasoning is not already covered by a dated entry above. Reference, not history.

#### Core decisions

| Term | Why |
|------|-----|
| programming / coding | `codare` reads as encoding or encryption in Romanian, not as writing code. |
| developer | `programator` is the ordinary word; `dezvoltator` belongs to job adverts and corporate copy. |
| tech / tech industry | `industria IT` is what Romanian tech media says. `industria tehnologică` is stiff. |

#### Values & data types

| Term | Why |
|------|-----|
| index | `indice` (pl. `indici`) is what Romanian CS material uses for an array subscript. `index` reads as the index of a book or a database. |
| character / letter | Romanian splits these cleanly, and splits both from `personaj` (a figure in a story or game), so the three-way distinction the curriculum needs comes free. |
| float / decimal | `număr zecimal` is beginner-facing; `număr cu virgulă mobilă` is accurate but heavy, so it is reserved for where the floating-point nature is the actual point. |
| random number | `aleatoriu` is the adjective form; `aleator` is a common error. |

#### Functions & control flow

| Term | Why |
|------|-----|
| if statement | `structură decizională` is what textbooks say, and it is far too heavy for this voice. Keeping `if` in code font and calling it an `instrucțiune` matches how people actually talk. |
| statement / instruction | Romanian has one ordinary word, `instrucțiune`, for both the executable statement and what the learner tells Jiki to do. Coining a second would read worse, so the two rows deliberately share it, exactly as Hungarian does. The logical-claim sense is a genuinely different word, `afirmație`. |
| to return | `returnează` is attested in Romanian course material. `a întoarce` reads as physically turning something around. |
| return value | `valoare de retur` belongs to finance. |
| built-in | `încorporat` reads mechanical, as of a component built into a device. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| loop | `buclă` is what modern Romanian tutorials use („bucla `for`", „bucle imbricate"). `ciclu` and `instrucțiune repetitivă` are the university and school register, and would make Jiki sound like a lecture. |
| nested | `imbricat` is the established Romanian CS term and collocates naturally with `buclă`. |
| keyword | DOOM hyphenates `cuvânt-cheie`; writing it as two words is an error a Romanian reader notices. |
| (programming) language | Romanian splits `limbă` (a natural language) from `limbaj` (a programming language). Using `limbă` here is a classic tell of a bad translation. |
| to run / execute | `a rula` covers running a program or a block; `a executa` is what a single instruction does. Both are ordinary, and the split is worth keeping. |
| modulo / remainder | Naming it after what it does explains itself to a beginner, which the borrowed operator name does not. |
| indentation | `indentare` is established in Romanian technical writing; `aliniere` means alignment generally. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| tool | `unealtă` is a physical hand tool, so `instrument` carries the software sense better. |
| auth | Romanian has two distinct words, `autentificare` and `autorizare`, so the glossary keeps two rows rather than collapsing them. |
| debugging | `depanare` is the established Romanian word for the activity, and it coexists happily with the English `Debug` as a UI token. |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| concept (learning unit) | `noțiune` names a teachable unit, where the everyday `concept` is vaguer and would not read as a section of a library. |
| course | Kept distinct from `lecție` (lesson) and `programă` (curriculum), which Romanian would otherwise blur. |
| plan (subscription tier) | `abonament` enables „abonamentul {tier}"; `plan` reads as a schedule. |
| track / pathway | Both mean "path" in Romanian; `traseu` and `parcurs` are assigned one each so the two curriculum concepts stay apart. |

#### Keep in English

| Term | Why |
|------|-----|
| string | Romanian dev writing says `string` and declines it (`stringul`, `stringuri`). `șir de caractere` is the school term and works as the gloss. |
| framework | Romanian technical writing uses the English word; `cadru de lucru` is understandable but nobody says it. |
| AI | Mirrors the owner decision made for Hungarian: "AI" in prose and marketing, not the purist `IA`. |
| chat | Fully nativized, so a gloss would teach nothing. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| chain | `lanț` is the ordinary physical chain, and `verigă` gives a natural word for a single link. |
| crank | `manivelă` is defined in DEX as the lever you turn to operate a mechanism, which is exactly the metaphor. |
| return chute | `tobogan` is the playground slide and is also used for a chute that moves material between levels, so it is concrete and playful at once. `jgheab` is a gutter and reads rustic. |
| board / whiteboard | `tablă` is the ordinary word for a board in a room. Romanian's array term (`tablou`) is a different word, so there is no collision to route around here. |
| mini-Jiki | Romanian takes the `mini-` prefix with a hyphen naturally, so the name needs no adaptation. |
