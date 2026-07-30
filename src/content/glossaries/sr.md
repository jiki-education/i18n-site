---
lang: "sr"
name: "Serbian"
family: null
governance_sha: "1d91ad4"
content_version: "1bdc4858aad8"
published_at: "2026-07-30"
term_count: 113
forum_topic_id: 402
---

# Serbian (sr) glossary

The agreed term list for Serbian. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file;
it surfaces new terms it had to decide on as proposals in its output (a "glossary delta").
Those proposals are discussed, and only once agreed are they written in (by a human or by
Claude). So everything in this file is, by definition, already agreed. Terms that have not
been agreed simply are not here yet.

Writes are **additive**, and the final `Agreed by` column records who decided each row. Both
are defined in `global/workflow.md` ("Glossary writes are additive"); that file is the
authority, this one just carries the values.

## Core decisions

| English | Serbian | Use (sr/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| programming / coding | **programiranje** | sr | Use consistently; standard, undisputed term. | agent |
| streak | **serija** | sr | E.g. "serija od 7 dana". Deliberately not "niz" (which is reserved for the array/CS term) to avoid a collision. | agent |
| tech / tech industry | **IT industrija** | sr | "IT" is well established in Serbian as the name of the sector; use "tehnologija" for the general adjective sense ("tech company" = "tech kompanija" / "IT kompanija"). | agent |
| developer | **programer** | sr | Standard, general Serbian word for someone who writes code. | agent |
| pitfall | **zamka** | sr | Ordinary word ("trap"); stands alone. | agent |
| pattern (a recurring shape you reuse) | **šablon** | sr | The everyday Serbian word for a pattern/template you follow repeatedly ("to je šablon koji ćeš koristiti"). Deliberately not "obrazac", which in ordinary Serbian reads first as a form to fill in, and is the more formal register. | agent |

## Localize (use the Serbian term)

These are terms where the Serbian is used in prose, so the "Use (sr/en)" column is `sr` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Serbian | Use (sr/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| value | vrednost | sr | Ordinary word. | agent |
| number | broj | sr | Ordinary word. | agent |
| true / false | tačno / netačno | sr | Not capitalised in prose. | agent |
| character | karakter | sr | Loanword; established in Serbian beginner CS material (Petlja). | agent |
| integer | ceo broj | sr | Also "celobrojni tip" for the type name specifically. | agent |
| float / decimal | broj sa pokretnim zarezom | sr | Or "realni tip" when the type name (not the value) is meant. | agent |
| array / list | niz | sr | The established CS term; see also "chain" under Jiki physical metaphors for the teaching metaphor used alongside it. | agent |
| dictionary | mapa | sr | | agent |
| element | element | sr | "element niza" = array element. | agent |
| index | indeks | sr | Transparent cognate; stands alone. | agent |
| data type | tip podataka | sr | Transparent compound once introduced. | agent |

### Functions & control flow

| English | Serbian | Use (sr/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| if statement | if naredba | sr | Keep `if` in backticks/inline code as the real keyword; "grananje" (branching) is the natural word to use in prose when talking about the general concept of conditional branching, not the specific statement. | agent |
| condition | uslov | sr | Ordinary word; stands alone. | agent |
| comparison | poređenje | sr | Ordinary word; stands alone. | agent |
| expression | izraz | sr | | agent |
| operator | operator | sr | Loanword, fully naturalized. | agent |
| statement (executable) | naredba | sr | The imperative sense: a line of code that does something and gets executed. | agent |
| statement (logical claim) | iskaz | sr | The proposition sense: a claim that is true or false. Keep distinct from "naredba" above; pick by meaning, not by the English word. | agent |
| function | funkcija | sr | The *keyword* `function` in code stays English; the concept in prose is "funkcija". | agent |
| to call (a function) | pozvati (funkciju) | sr | | agent |
| to define (a function) | definisati | sr | | agent |
| input (to a function) | ulaz | sr | | agent |
| output | izlaz | sr | | agent |
| to return (a value) | vratiti (vrednost) | sr | | agent |
| return value | povratna vrednost | sr | | agent |
| parameter | parametar | sr | The declaration-site name. | agent |
| argument | argument | sr | The call-site value; used somewhat interchangeably with "parametar" in casual Serbian dev speech, but keep them distinct per the glossary discipline. | agent |
| pure function | čista funkcija | sr | Transparent compound once "funkcija" is clarified. | agent |
| brackets (the two after a function name) | zagrade | sr | The `()` pair written after a function name to call it ("napiši njeno ime, a zatim te dve zagrade"). Bare "zagrade" is enough where the context is a function call; where round and square must be distinguished, "obične zagrade" (round) vs "uglaste zagrade" (square). | agent |

### Loops, state & program flow

| English | Serbian | Use (sr/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| keyword | ključna reč | sr | Transparent compound, but still worth clarifying once. | agent |
| interpreter (the one who interprets) | interpreter | sr | A **person** doing the job of interpreting, not a piece of software: on concept pages Jiki *is* the interpreter ("tvoj interpreter je Jiki", "njegov posao je da interpretira kod koji pišeš"). "interpreter" is the word Serbian dev writing actually uses, and in general Serbian it already names a person who interprets (a performer interpreting a song), so it carries no machine or program morpheme and can name Jiki. Declines normally: "interpretera", "interpreteru". The verb is "interpretirati". Deliberately not "interpretator" (names the program, not the person), not "prevodilac" (a translator of languages, and it is the standard word for a compiler-style translator in Serbian CS material), and not "tumač" (ordinary Serbian for a human interpreter of speech, but in practice bound to the court/language-interpreter sense and never used of code, so it misreads here). | agent |
| instruction (given to Jiki) | instrukcija | sr | A single thing the learner tells Jiki to do ("daš mu prave instrukcije"). Keep distinct from "naredba" (an executable statement of code). Note that "instrukcije" on its own can also mean private tutoring lessons in Serbian; the Jiki context removes the ambiguity, but do not use it bare where it could. | agent |
| mental model | mentalni model | sr | The picture-in-your-head framing ("to je snažan mentalni model"). Transparent and in ordinary use in Serbian educational writing. | agent |
| (programming) language | programski jezik / jezik | sr | Use "programski jezik" where the programming sense needs stating, and bare "jezik" once it is established or where the framing is "a language a computer understands" ("na jeziku koji računar razume"). Never the English borrowing; "jezik" is the ordinary word every beginner already knows. | agent |
| variable | promenljiva | sr | Feminine gender; "nova promenljiva", "promenljiva je definisana". | agent |
| assignment | dodela (vrednosti) | sr | | agent |
| to assign | dodeliti | sr | | agent |
| code block | blok (koda) | sr | "blok" is itself a loanword; "telo funkcije" for the function-body sense specifically. | agent |
| error | greška | sr | | agent |
| exception | izuzetak | sr | Distinct from the general "greška"; the catchable-error-object sense. | agent |
| nested | ugnežden(i) | sr | Native metaphor (from "gnezdo" = nest), already the standard term, e.g. "ugnežđene petlje" (nested loops). | agent |
| iteration | iteracija | sr | Loanword. | agent |
| to run / execute (code) | izvršiti / pokrenuti (kod) | sr | | agent |
| loop | petlja | sr | Also the name of Serbia's national CS-education platform (Petlja.org), so it's well-established and iconic, not just a textbook coinage. | agent |
| for loop | `for` petlja | sr | Keep `for` in backticks (real keyword) + "petlja". | agent |
| while loop | `while` petlja | sr | As above. | agent |
| for-of loop | `for-of` petlja | sr | As above. | agent |
| loop body | telo petlje | sr | | agent |
| break (loop control) | prekid (petlje) | sr | The keyword `break` itself always stays English in code; this is the prose concept. | agent |
| increment | uvećanje | sr | Native, transparent ("increase"); "inkrement" is also used in more academic registers but "uvećanje" reads better for a beginner audience. | agent |
| modulo / remainder operator | ostatak (deljenja) | sr | "The remainder of division"; transparent, no clarify needed. | agent |
| concatenation / to concatenate | spajanje (stringova) | sr | Joining strings. Not "spajanje nizova": "niz" is the agreed word for "array" here, so that phrasing reads as joining arrays. | agent |
| toggle | preklopiti | sr | To flip a value between two states. | agent |
| state / stateful | stanje | sr | | agent |
| scope | doseg | sr | Keep distinct from "blok" (code block) above. | agent |
| class | klasa | sr | Loanword. | agent |
| method | metod | sr | Masculine ("metod", not "metoda"); some Serbian sources use the feminine "metoda" instead, but pick "metod" and use it consistently. | agent |
| property | svojstvo | sr | Ordinary Serbian word for a characteristic/attribute; stands alone. | agent |
| object | objekat | sr | Loanword, fully naturalized; masculine. | agent |
| encapsulation | enkapsulacija | sr | Standard OOP loanword. Real Serbian course material sometimes frames the concept with a "cocooned data" image ("učaurena podaci", from "čaura" = cocoon/casing); that's a nice explanatory aside but "enkapsulacija" is the term to use consistently. | agent |

### Tooling & engineering

| English | Serbian | Use (sr/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| workflow | radni tok | sr | The software-engineering sense (a sequence of dev tasks), distinct from "curriculum" below. | agent |
| auth: authentication | autentifikacija | sr | Verifying identity. | agent |
| auth: authorization | autorizacija | sr | Verifying permissions; keep distinct from authentication above. | agent |
| deploy | deploj | sr | Colloquially verbed as "deplojovati" in Serbian dev speech; low-confidence, worth a native developer's sanity check. | agent |
| tool / tooling | alat | sr | Ordinary, transparent word. | agent |
| module | modul | sr | Loanword. | agent |
| algorithm | algoritam | sr | Long-established loanword, but still worth clarifying for a first-time beginner reader. | agent |
| edge case | granični slučaj | sr | Transparent native compound ("border/edge case"). | agent |
| backwards compatibility | unazadna kompatibilnost | sr | | agent |

### Platform & curriculum vocabulary

| English | Serbian | Use (sr/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| feature (platform capability) | mogućnost | sr | Deliberately not "funkcija", because that word is reserved for the CS "function" concept; using it for "feature" too would create exactly the kind of collision `global/terms.md` warns about. | agent |
| lesson | lekcija | sr | | agent |
| exercise | vežba | sr | | agent |
| scenario | scenario | sr | | agent |
| course | kurs | sr | The whole Jiki course the learner is taking ("na ovom kursu tvoj interpreter je Jiki"). Ordinary, everyday word; keep distinct from "lekcija" (lesson) and "kurikulum" (curriculum). | agent |
| curriculum | kurikulum | sr | Distinct from "radni tok" (workflow) above; this is the curriculum-structure sense. | agent |
| level | nivo | sr | | agent |
| milestone | prekretnica | sr | Native, transparent ("turning point"). | agent |
| pathway | putanja | sr | Keep distinct from "staza" (track) below; both mean "path" but are assigned to different concepts. | agent |
| bootcamp | bootkamp | sr | Phonetically adapted loanword. | agent |
| syllabus | silabus | sr | Established loanword in Serbian academic usage. | agent |
| mentor / mentoring | mentor / mentorstvo | sr | Established loanword, fully naturalized. | agent |
| track (curriculum path) | staza | sr | Keep distinct from "putanja" (pathway) above. | agent |
| tutorial | tutorijal | sr | Loanword. | agent |
| solution (learner's submission) | rešenje | sr | Ordinary word. | agent |
| canvas (graphics exercises) | platno | sr | The drawing-surface sense specifically. | agent |
| foot-gun | opasna prečica | sr | Descriptive phrase, not a fixed idiom; no clean one-word Serbian equivalent was found. Flagged for native-speaker review; Serbian does have the idiom "pucati sebi u nogu" (to shoot yourself in the foot) which may be worth workshopping into a punchier term later. | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Serbian in the gloss column below (per the format in `global/voice.md`); with no
`<define>`, use the English bare, with no gloss.

| Term | Serbian gloss (on `<define>`) | Notes | Agreed by |
|------|----------------------------------|-------|-----------|
| string | "niska" | Practitioner Serbian material (Petlja) uses "string" directly in prose; "niska" is the more academic/purist term, used only as the gloss where the source defines it. | agent |
| Boolean | "logička vrednost" | Where the source defines it, explain it means "logička vrednost", then use "Boolean". | agent |
| API | explain the concept in Serbian, not just the acronym | Not a word a beginner knows; where the source defines it, explain what an API does ("skup pravila koja omogućavaju da dva programa međusobno komuniciraju"), not just gloss the letters. | agent |
| framework | "radni okvir" | Where the source defines it, explain it means "radni okvir" (working framework); may then use either "radni okvir" or "framework" (Serbian technical writing sometimes phonetically respells this as "frejmvork", but plain English "framework" is also fine). | agent |
| CLI | "komandna linija" | Where the source defines it, explain CLI as "komandna linija" (command line), then use "CLI" or "komandna linija" interchangeably. | agent |
| component | "komponenta" | Use "komponenta" freely; it's fully naturalized Serbian tech vocabulary. | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | As keywords/technical tokens. | agent |
| Code, Bug, Frontend, Backend | (no gloss) | | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Serbian rendering | Notes | Agreed by |
|-------------------|----------------------|-------|-----------|
| box (value container) | kutija | Directly attested, independently, in two real Serbian CS-education sources with phrasing remarkably close to Jiki's own ("a value is thrown out of the box and a new one written into it"). High confidence. | agent |
| chain (array metaphor) | lanac | Used as the explanatory teaching image (a chain of linked boxes) alongside the technical term "niz" for array, the same way Hungarian keeps both "lánc" (chain, metaphor) and "tömb" (array, technical term). | agent |
| input slot | ulazni otvor | Constructed from "ulaz" (input, agreed term above) + "otvor" (an opening/slot). No existing Serbian precedent found; flagged for a native-speaker check on first real use. | agent |
| return chute | izlazni žleb | Constructed from "izlaz" (output, agreed term above) + "žleb" (a groove/chute). No existing Serbian precedent found; flagged for a native-speaker check on first real use. | agent |
| machine (function metaphor) | mašina | Plausible and low-risk (vending/factory-machine imagery is culturally universal), but unattested in existing Serbian CS-education material. Now in real use on the published using-functions concept page and still unconfirmed by a native speaker; a sanity check is outstanding. | agent |
| shelves (storage) | police (sing. polica) | Directly attested: a real Serbian CS lesson diagram is captioned "variables in an array are like boxes on a shelf" ("kutije na polici"). High confidence, but attestation is not native-speaker confirmation; now in real use on the published using-functions concept page and a sanity check is still outstanding. | agent |
| warehouse (Jiki's warehouse) | skladište | The ordinary Serbian word for a warehouse/storeroom; the place Jiki hangs out and keeps his machine shelf. In real use on the using-functions concept page ("Jikijevo skladište"). | agent |
| crank (machine crank) | ručica | The handle Jiki turns to power a machine up ("okrene ručicu"). Ordinary word; "ručica" is the everyday word for a small handle/lever, unlike the more mechanical "kurbla". | agent |
| board / whiteboard | tabla | **One word for both uses**: the board the learner writes instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on. Ordinary word for a board in a room; no collision with "niz" (array). Merged from a former separate "whiteboard (a function's internal notes)" row, which had the same rendering. | agent |
