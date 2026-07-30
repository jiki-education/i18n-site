---
lang: "de"
name: "German"
family: null
governance_sha: "1d91ad4"
content_version: "9f2ab4f3f978"
published_at: "2026-07-30"
term_count: 86
forum_topic_id: 340
---

# German (de) glossary

The agreed term list for German. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file;
it surfaces new terms it had to decide on as proposals in its output (a "glossary delta").
Those proposals are discussed, and only once agreed are they written in (by a human or by
Claude). So everything in this file is, by definition, already agreed. Terms that have not
been agreed simply are not here yet.

Writes are **additive** (see "Glossary writes are additive" in `global/workflow.md`): a
pass appends rows and may correct an `agent` row (reporting the old value), but never
silently changes a `human` row. The final **`Agreed by`** column records who decided each
row: `agent` for an unconfirmed agent draft, `human (t/<topic>)` for a rendering a native
speaker settled on the forum.

## Core decisions

| English | German | Use (de/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| programming / coding | **Programmieren** | de | Standard. | agent |
| streak | Streak | en | Loanword; Duolingo's own German app uses "Streak" verbatim, and German learning platforms follow suit. | agent |
| tech / tech industry | Tech-Branche | de | Hybrid (English "Tech" + German "Branche"), established in German tech media. | agent |
| developer | Entwickler(in) | de | Standard German equivalent. | agent |
| pitfall | Falle | de | Ordinary word; stands alone. | agent |

## Localize (use the German term unless the row says `en`)

Split by theme for readability; every table below follows the same columns. The
"Use (de/en)" column says which language is primary in prose for that term, per
`global/voice.md`. Most rows are `de`; the few `en` rows are loanwords German developers
themselves actually use, so the English word is the ordinary German word there.

### Values & data types

| English | German | Use (de/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| value | Wert | de | Ordinary word. | agent |
| number | Zahl | de | Ordinary word. | agent |
| integer | Ganzzahl | de | The type keyword `int` in code stays English. | agent |
| float / decimal | Gleitkommazahl | de | **Settled on the forum; do not change.** Objected to as unfamiliar and countered in detail (Duden's definition, German MATLAB docs), then the objector accepted the counter-argument. Do **not** fall back on "Dezimalzahl": it names the base-10 system, not this data type, so it is not a synonym here. "Fließkommazahl" is also rejected as an anglicism. | human (t/340) |
| character | Zeichen | de | | agent |
| true / false | wahr / falsch | de | Not capitalized in prose. | agent |
| array | Array | en | Dominant in modern German teaching material over the older, theory-flavored "Feld". No gloss needed, "Array" is standard vocabulary now. | agent |
| dictionary | Wörterbuch | de | General prose term. Python-specific material may say "Dictionary"/"dict" instead; do not mix within one document. | agent |
| element | Element | de | Fully naturalized. | agent |
| index | Index | de | Learned plural: "Indizes". | agent |
| string | String | en | Where the source `<define>`s it, gloss as "String (Zeichenkette)", then use "String" throughout. Exception: in the string concept itself, lean more on "Zeichenkette" if it aids teaching. | agent |
| Boolean | boolescher Wert | de | Standard textbook/prose form. The type keyword `bool`/`Boolean` in code stays English. | agent |
| data type | Datentyp | de | | agent |

### Functions & control flow

| English | German | Use (de/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| if statement | if-Anweisung | de | The `if` keyword stays English in code and in this compound; "Anweisung" is translated. | agent |
| condition | Bedingung | de | Ordinary word; stands alone. | agent |
| comparison | Vergleich | de | Ordinary word; stands alone. | agent |
| expression | Ausdruck | de | Distinct from "Anweisung" (statement). | agent |
| operator | Operator | de | | agent |
| statement (executable) | Anweisung | de | The imperative sense: a line of code that does something and gets executed. Keep distinct from "Befehl" (instruction given to Jiki). | agent |
| statement (logical claim) | Aussage | de | The proposition sense: a claim that is true or false. Keep distinct from "Anweisung". | agent |
| function | Funktion | de | The *keyword* `function` in code stays English; the concept in prose is "Funktion". | agent |
| to call (a function) | aufrufen | de | Separable verb: "ruft die Funktion auf". | agent |
| to define (a function) | definieren | de | | agent |
| parameter | Parameter | de | Declaration-site name. Masculine, unchanged plural: "der Parameter, die Parameter". | agent |
| argument | Argument | de | Call-site value. Neuter, distinct gender from "Parameter": "das Argument, die Argumente". | agent |
| input (to a function) | Eingabewert | de | Distinct from general "Eingabe" (user input). | agent |
| output | Ausgabe | de | The function's result specifically is "Rückgabewert"; "Ausgabe" is the general/printed sense. | agent |
| to return (a value) | zurückgeben | de | Separable verb: "gibt den Wert zurück". | agent |
| return value | Rückgabewert | de | Keep distinct from the verb above. | agent |
| brackets (the two after a function name) | runde Klammern | de | German distinguishes shapes, so name them on first mention in a page: "zwei runde Klammern". Plain "Klammern" is fine for later mentions in the same page. Square brackets are "eckige Klammern". | agent |

### Loops, state & program flow

| English | German | Use (de/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| keyword | Schlüsselwort | de | | agent |
| interpreter | Interpreter | de | **A person doing a job, not a program: Jiki is the interpreter.** Naturalized as a German noun and inflected as one ("der Interpreter, dein Interpreter"), and the transparent agent noun to the everyday verb "interpretieren", which the surrounding prose uses ("Seine Aufgabe ist es, den Code zu interpretieren"), so it reads as an agent, not a device. No gloss on `<define>`: the German form is the same word in the same script, so the parenthetical would teach nothing (see the skip-gloss rule in `guide.md`). Never "Übersetzer" (that is a compiler) or "Dolmetscher" (spoken-language interpreting). | agent |
| instruction (given to Jiki) | Befehl | de | A single thing the learner tells Jiki to do. Everyday word in German beginner programming material (Scratch and school material talk about "Befehle"), and the established German rendering of a machine instruction ("Befehlszeile", "Befehlssatz"). Pairs with "befolgen": "Befehle auf eine Tafel schreiben, und Jiki befolgt sie." Kept distinct from "Anweisung" (statement), which is reserved for a line of code. | agent |
| mental model | Denkmodell | de | The picture-in-your-head framing. Ordinary word; "mentales Modell" is the stiffer academic calque. | agent |
| (programming) language | Programmiersprache | de | Also the "a language a computer understands" framing, where the bare "Sprache" is right. Fully native; never the English "Language". | agent |
| variable | Variable | de | Feminine noun: "die Variable, die Variablen". | agent |
| assignment | Zuweisung | de | The noun. | agent |
| to assign | zuweisen | de | Takes a dative object: "Der Wert wird der Variablen zugewiesen." | agent |
| code block | Block | de | Keep distinct from "scope" (Gültigkeitsbereich) below; do not conflate. | agent |
| error | Fehler | de | | agent |
| nested | verschachtelt | de | e.g. "verschachtelte Schleife" = nested loop. | agent |
| iteration | Iteration | de | "Durchlauf" is a friendlier beginner gloss for a single pass through a loop. | agent |
| to run / execute (code) | ausführen | de | Separable verb: "führt das Programm aus". | agent |
| loop | Schleife | de | English "loop" is never used in prose. | agent |
| for loop | for-Schleife | de | Keep the `for` keyword in code font; translate only "Schleife". | agent |
| while loop | while-Schleife | de | As above, with `while`. | agent |
| loop body | Schleifenrumpf | de | **Open native objection (t/340), awaiting an owner decision; the rendering here is unconfirmed.** Two native speakers reject it: one prefers "Schleifenkörper", the other rejects both as bodily and old-fashioned and proposes "Schleifenblock" ("Schleife" + "Block", with a real-world usage citation). They have not converged. Until the owner rules, use "Schleifenrumpf" and stay consistent within a document. | agent |
| increment | erhöhen | de | The verb. Reads more naturally for beginners than the loanword "inkrementieren". | agent |
| scope | Gültigkeitsbereich | de | Keep distinct from "Block" (code block) above. | agent |
| class | Klasse | de | | agent |
| method | Methode | de | | agent |
| property | Eigenschaft | de | More intuitive for beginners than the formal OOP term "Attribut". | agent |
| object | Objekt | de | | agent |

### Tooling & engineering

| English | German | Use (de/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| workflow | Workflow | en | Duden-recognized loanword; distinct from the curriculum sense. | agent |
| deploy | ausrollen | de | The verb, more natural for beginners than the loanword "deployen". Noun form: "Deployment". | agent |
| tool / tooling | Tool | en | Shorter and what developers actually say; "Werkzeug" is a legitimate native alternative but not the default here. | agent |
| module | Modul | de | Fully naturalized. | agent |
| algorithm | Algorithmus | de | Irregular Latin plural: "die Algorithmen". | agent |
| edge case | Randfall | de | Where the source `<define>`s it, gloss as "Randfall (Edge Case)". Keep distinct from "Grenzfall" (a boundary value) and "Sonderfall" (a special/exceptional case), which are not synonyms. | agent |
| component | Komponente | de | "Komponente" is the ordinary German word and what German front-end writing says ("React-Komponente"); use it directly, no loanword form. | agent |
| CLI (the concept) | Kommandozeile | de | The working term itself, not the bare acronym. "CLI-Tool" is acceptable as a compound where the acronym is part of a product name. | agent |

### Platform & curriculum vocabulary

| English | German | Use (de/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| exercise | Übung | de | The platform unit the learner works through: "Bei jeder Übung...". Kept distinct from "Aufgabe" (a task inside it). | agent |
| task (within an exercise) | Aufgabe | de | A sub-step of an exercise. Never "Übung". The everyday sense of "Aufgabe" ("Seine Aufgabe ist es, ..." = it is his job to) is ordinary prose and unaffected. | agent |
| course | Kurs | de | The whole Jiki course: "In diesem Kurs ist Jiki dein Interpreter." Keep distinct from "Lektion" (lesson) and "Lehrplan" (curriculum). | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
German in the gloss column below (per the format in `global/voice.md`); with no
`<define>`, use the English bare, with no gloss.

| Term | German gloss (on `<define>`) | Notes | Agreed by |
|------|------------------------------|-------|-----------|
| API | _Programmierschnittstelle_ | Not a word a beginner knows; where defined, explain the concept in German, not just gloss the acronym. | agent |
| framework | _Grundgerüst, auf dem man ein Programm aufbaut_ | Explain the idea where the source defines it, then use "Framework" freely. Do not gloss with "Rahmenwerk": it is a purist coinage nobody uses. | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | As keywords/technical tokens. | agent |
| Code, Bug, Frontend, Backend | (no gloss) | | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | German rendering | Notes | Agreed by |
|-------------------|-------------------|-------|-----------|
| box (value container) | Box | Direct, concrete; fully naturalized loanword. | agent |
| chain (array metaphor) | Kette | Standard German for a physical chain; link = "Kettenglied". | agent |
| input slot | Eingabeschlitz | **Open native objection (t/340), awaiting an owner decision; the rendering here is unconfirmed.** A native speaker explains the size scale: "Schlitz" is a slit too narrow for a finger (a coin slot is a "Münzschlitz"), "Schacht" is a shaft for larger things. Since Jiki's slot takes paper, coins and a chain of things, they recommend **"Trichter"** (hopper), what a German would actually say, confirmed after re-watching the video that the input slots really are hoppers, with **"Eingabefach"** as the alternative if the hopper association is unwanted. | agent |
| return chute | Ausgaberutsche | "Ausgabe" (output, agreed term above) + "Rutsche" (a slide/chute, the same word used for a playground slide). | agent |
| machine (function metaphor) | Maschine | Direct, concrete. | agent |
| shelves (storage) | Regale | The shelves where variables and functions are stored; singular "Regal". | agent |
| board / whiteboard | Tafel | **One object, one word.** The board the learner writes Befehle on for Jiki to follow, and the board a function keeps its own notes on, are the same object and take the same word everywhere. "Tafel" is the everyday German word for a writing board in a room, and idiomatic with the verbs the metaphor needs ("etwas auf die Tafel schreiben"). It does not collide with "Array" (the older German word for that is "Feld"). Never "Whiteboard" as a second word for the same object. | agent |
| warehouse (Jiki's warehouse) | Lagerhalle | The place where Jiki hangs out and keeps his machine shelf. Concrete and everyday; "Lager" alone is vaguer, "Warenhaus" means a department store. | agent |
| crank (machine crank) | Kurbel | The handle Jiki turns to start a machine: "die Kurbel drehen". | agent |
