---
lang: "el"
name: "Greek"
family: null
governance_sha: "1d91ad4"
content_version: "2fcd48494c76"
published_at: "2026-07-30"
term_count: 86
forum_topic_id: 497
---

# Greek (el) glossary

The agreed term list for Greek. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file;
it surfaces new terms it had to decide on as proposals in its output (a "glossary delta").
Those proposals are discussed, and only once agreed are they written in (by a human or by
Claude). So everything in this file is, by definition, already agreed. Terms that have not
been agreed simply are not here yet.

Writes are additive, and the `Agreed by` column records who decided each row. Both are
defined in `global/workflow.md`.

## Core decisions

| English | Greek | Use (el/en) | Notes | Agreed by |
|---------|-------|-------------|-------|-----------|
| programming / coding | **προγραμματισμός** | el | Use consistently. "coding" occasionally appears as a casual English loanword; do not mix it in with `προγραμματισμός` in one document. | agent |
| developer | **προγραμματιστής** | el | Standard Greek equivalent. English "developer" also appears in job titles/marketing but does not displace this in prose. | agent |

## Localize (use the Greek term)

These are terms where the Greek is used in prose, so the "Use (el/en)" column is `el` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Greek | Use (el/en) | Notes | Agreed by |
|---------|-------|-------------|-------|-----------|
| value | τιμή | el | Ordinary word; also embedded in `λογική τιμή` and `τιμή επιστροφής` below. | agent |
| number | αριθμός | el | Ordinary word. | agent |
| true / false | αληθής / ψευδής | el | Not capitalised in prose. | agent |
| character | χαρακτήρας | el | | agent |
| integer | ακέραιος (αριθμός) | el | | agent |
| float / decimal | δεκαδικός (αριθμός) | el | | agent |
| string | συμβολοσειρά | el | Preferred over the school curriculum's `αλφαριθμητικό`, which implies "alphanumeric" and is less accurate for the general concept. | agent |
| Boolean | λογική τιμή | el | Literally "logical value"; well established and unambiguous, no English loanword tension found for this term in Greek. | agent |
| array | πίνακας | el | **Never confuse with `board / whiteboard` in the metaphors table below**, which is always `ασπροπίνακας`, never bare `πίνακας`. | agent |
| list | λίστα | el | Used where the source itself distinguishes "list" from "array". | agent |
| dictionary | λεξικό | el | | agent |
| element | στοιχείο | el | Array element = `στοιχείο του πίνακα`. | agent |
| index | θέση | el | Not `δείκτης`, which is reserved for "pointer", a different concept in Greek CS. | agent |
| key-value pair | ζεύγος κλειδιού-τιμής | el | | agent |

### Functions & control flow

| English | Greek | Use (el/en) | Notes | Agreed by |
|---------|-------|-------------|-------|-----------|
| if statement | εντολή `if` | el | Keep `if` in backticks (real keyword) + `εντολή`, matching `for` βρόχος below. The school-curriculum term `δομή επιλογής` ("selection structure") is textbook register, not what a beginner reader says. | agent |
| condition | συνθήκη | el | Ordinary word; stands alone. | agent |
| comparison | σύγκριση | el | Ordinary word; stands alone. | agent |
| expression | έκφραση | el | | agent |
| operator | τελεστής | el | e.g. `τελεστές σύγκρισης` (comparison operators). | agent |
| statement (executable) | εντολή | el | The imperative sense: a line of code that does something and gets executed. Deliberately the same word as `instruction (given to Jiki)` below: in Greek they name the same thing, and splitting them would invent a distinction the reader does not have. | agent |
| statement (logical claim) | πρόταση | el | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. | agent |
| function | συνάρτηση | el | The *keyword* `function` in code stays English; the concept in prose is `συνάρτηση`. | agent |
| to call (a function) | καλεί | el | `καλεί μια συνάρτηση` | agent |
| to define (a function) | ορίζει | el | | agent |
| parameter | παράμετρος | el | The declaration-site name. | agent |
| argument | όρισμα | el | The call-site value. | agent |
| input (to a function) | είσοδος | el | | agent |
| output | έξοδος | el | | agent |
| to return (a value) | επιστρέφει | el | | agent |
| return value | τιμή επιστροφής | el | Keep distinct from the verb above. | agent |
| brackets (the two after a function name) | παρενθέσεις | el | Greek names each bracket shape separately (see the Brackets table), so the rendering must say which: the pair written after a function name is always `παρενθέσεις`, e.g. `αυτές τις δύο παρενθέσεις`. Never the generic `αγκύλες`, which is `[]`. | agent |

### Loops, state & program flow

| English | Greek | Use (el/en) | Notes | Agreed by |
|---------|-------|-------------|-------|-----------|
| keyword | λέξη-κλειδί | el | Chosen over the more technical `δεσμευμένη λέξη` for the friendlier beginner tone; both terms exist in real usage. | agent |
| interpreter | διερμηνευτής | el | A **person** who interprets, which is what the term means here (Jiki is the interpreter, and it is "his job to interpret"). `διερμηνευτής` is first and foremost the human interpreter of speech, so it carries that sense correctly and is also the term Greek CS material uses. Never `διερμηνευτικό πρόγραμμα` or any `-πρόγραμμα`/device compound: those name a tool, so they cannot name Jiki. | agent |
| instruction (given to Jiki) | εντολή | el | The everyday Greek word for something you tell someone to do; deliberately the same word as `statement (executable)` above. | agent |
| mental model | νοητικό μοντέλο | el | The standard Greek rendering, and ordinary enough to read naturally in prose. | agent |
| (programming) language | γλώσσα προγραμματισμού | el | Shorten to bare `γλώσσα` once context is established, including in the "a language a computer understands" framing. Never the English "language". | agent |
| variable | μεταβλητή | el | | agent |
| assignment | ανάθεση | el | `εντολή ανάθεσης` = assignment statement. | agent |
| to assign | αναθέτει | el | | agent |
| code block | μπλοκ κώδικα | el | What Greek developer writing actually says. Keeps `ενότητα` free for `lesson` below. | agent |
| error | σφάλμα | el | | agent |
| exception | εξαίρεση | el | Keep distinct from `σφάλμα` (error), the general term. | agent |
| nested | εμφωλευμένος | el | e.g. `εμφωλευμένος βρόχος` = nested loop. | agent |
| iteration | επανάληψη | el | Same word covers "loop" as a general concept; context disambiguates. | agent |
| to run / execute (code) | εκτελεί | el | | agent |
| loop | βρόχος | el | The general "repetition" concept is `επανάληψη`, reinforced by the Greek-keyword `ΓΛΩΣΣΑ` pseudocode taught in schools. | agent |
| for loop | `for` βρόχος | el | Keep `for` in backticks (real keyword) + `βρόχος`. | agent |
| while loop | `while` βρόχος | el | As above. | agent |
| loop body | σώμα του βρόχου | el | | agent |
| scope | εμβέλεια | el | `τοπική εμβέλεια` = local scope, `καθολική εμβέλεια` = global scope. | agent |
| class | κλάση | el | Dominant in OOP-specific teaching over the older, more generic `τάξη`. | agent |
| method | μέθοδος | el | | agent |
| property | ιδιότητα | el | | agent |
| object | αντικείμενο | el | | agent |

### Platform & curriculum

| English | Greek | Use (el/en) | Notes | Agreed by |
|---------|-------|-------------|-------|-----------|
| course | μάθημα | el | The whole Jiki course ("σε αυτό το μάθημα"). The ordinary Greek word for a course, and short enough for a term that recurs on every page; `σειρά μαθημάτων` is more literal but too heavy in running prose. Because `μάθημα` is also the everyday word for a single lesson, `lesson` takes `ενότητα` below so the two never collide. | agent |
| lesson | ενότητα | el | One lesson inside the course. Deliberately not `μάθημα`, which is taken by `course` above. | agent |
| exercise | άσκηση | el | | agent |

### Tooling & engineering

| English | Greek | Use (el/en) | Notes | Agreed by |
|---------|-------|-------------|-------|-----------|
| workflow | ροή εργασίας | el | | agent |
| module | άρθρωμα | el | Well-established specifically for Python modules in Greek teaching material. | agent |
| algorithm | αλγόριθμος | el | | agent |
| CLI (the concept) | γραμμή εντολών | el | Where the source `<define>`s it, explain the concept, not just gloss the term. `τερματικό` (terminal) is the common colloquial synonym once the concept is established. | agent |

## Keep in English

These stay in English in prose: the English word is what Greek developers actually say, so
it is the ordinary word here. Where the source `<define>`s one of these terms, use the
Greek in the gloss column below (per the format in `global/voice.md`); with no `<define>`,
use the English bare, with no gloss. The gloss explains the term once; it does not become
an alternative rendering to alternate with.

| Term | Greek gloss (on `<define>`) | Notes | Agreed by |
|------|-----------------------------|-------|-----------|
| API | explain what it is in Greek (e.g. "Διεπαφή Προγραμματισμού Εφαρμογών") | Not a word a beginner knows; where defined, explain the concept, not just gloss the acronym. | agent |
| framework | _πλαίσιο_ | Greek developer speech says "framework". | agent |
| component | _συστατικό_ | React-era Greek developer speech says "component". | agent |
| deploy (verb) | explain as "ανάπτυξη σε παραγωγικό περιβάλλον" | No established native beginner-level term; real developers say "κάνω deploy", so the verb inflects around the English word. Low confidence; revisit with native-speaker feedback. | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | As keywords/technical tokens. | agent |
| Code, Bug, Frontend, Backend | (no gloss) | | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Greek rendering | Notes | Agreed by |
|-------------------|------------------|-------|-----------|
| box (value container) | κουτί | Plain Greek word for "box"; direct and concrete. | agent |
| chain (array metaphor) | αλυσίδα | Ordinary physical chain (bike chain, jewellery chain). A specialist term `αλυσίδωση` exists for hash-table collision chaining, but it's obscure enough at university level that it does not meaningfully collide for beginners. | agent |
| machine (function metaphor) | μηχανή | | agent |
| input slot | θυρίδα | The everyday word for a small physical opening you post/insert something into (post-office box slot, coin slot). Preferred over the more generic/technical `υποδοχή`. | agent |
| return chute | τσουλήθρα | The everyday word for a playground slide; gives the same "slides down and pops out the bottom" physical image as the input slot. | agent |
| shelves (storage) | ράφια | Direct match, ordinary household word. | agent |
| warehouse (Jiki's warehouse) | αποθήκη | Ordinary word for a storage building; where Jiki hangs out and keeps his machine shelf. | agent |
| crank (machine crank) | μανιβέλα | The everyday word for a hand crank you turn (car crank, well crank), not a technical `στρόφαλο`. Jiki `γυρίζει τη μανιβέλα`. | agent |
| board / whiteboard | ασπροπίνακας | **One word for one object**: both the board the learner puts instructions on for Jiki to follow, and the board a function keeps its own notes on. **Never bare `πίνακας`**, which is the agreed term for `array` and would collide with it, so the qualified `ασπροπίνακας` is compulsory here and the reason this word is not simply `πίνακας`. Do not alternate with `λευκός πίνακας`. | agent |

## Brackets

| Glyph | Greek | Notes | Agreed by |
|-------|-------|-------|-----------|
| `()` | παρένθεση | Plural `παρενθέσεις`; see `brackets (the two after a function name)` above. | agent |
| `[]` | αγκύλη | | agent |
| `{}` | άγκιστρο | | agent |
| `<>` | γωνιακή αγκύλη | | agent |
