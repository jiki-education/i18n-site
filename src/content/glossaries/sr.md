---
lang: "sr"
name: "Serbian"
family: null
stage: "setup"
governance_sha: "91b6986"
content_version: "7dae9139b7ca"
published_at: "2026-07-31"
term_count: 113
forum_topic_id: 402
---

# Serbian (sr) glossary

The agreed term list for Serbian. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Serbian | Use (sr/en) | Notes |
|---------|---------|-------------|-------|
| programming / coding | **programiranje** | sr | Use consistently. |
| streak | **serija** | sr | E.g. "serija od 7 dana". Deliberately not "niz" (reserved for the array/CS term), to avoid a collision. |
| tech / tech industry | **IT industrija** | sr | Use "tehnologija" for the general adjective sense ("tech company" = "tech kompanija" / "IT kompanija"). |
| developer | **programer** | sr | |
| pitfall | **zamka** | sr | Stands alone; no gloss needed. |
| pattern (a recurring shape you reuse) | **šablon** | sr | Deliberately not "obrazac", which reads first as a form to fill in and is the more formal register. |

## Localize (use the Serbian term)

These are terms where the Serbian is used in prose, so the "Use (sr/en)" column is `sr` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Serbian | Use (sr/en) | Notes |
|---------|---------|-------------|-------|
| value | vrednost | sr | |
| number | broj | sr | |
| true / false | tačno / netačno | sr | Not capitalised in prose. |
| character | karakter | sr | |
| integer | ceo broj | sr | Also "celobrojni tip" for the type name specifically. |
| float / decimal | broj sa pokretnim zarezom | sr | Or "realni tip" when the type name (not the value) is meant. |
| array / list | niz | sr | See also "chain" under Jiki physical metaphors for the teaching metaphor used alongside it. |
| dictionary | mapa | sr | |
| element | element | sr | "element niza" = array element. |
| index | indeks | sr | Stands alone. |
| data type | tip podataka | sr | |

### Functions & control flow

| English | Serbian | Use (sr/en) | Notes |
|---------|---------|-------------|-------|
| if statement | if naredba | sr | Keep `if` in backticks/inline code as the real keyword; "grananje" (branching) is the natural word to use in prose when talking about the general concept of conditional branching, not the specific statement. |
| condition | uslov | sr | Stands alone. |
| comparison | poređenje | sr | Stands alone. |
| expression | izraz | sr | |
| operator | operator | sr | |
| statement (executable) | naredba | sr | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | iskaz | sr | The proposition sense: a claim that is true or false. Keep distinct from "naredba" above; pick by meaning, not by the English word. |
| function | funkcija | sr | The *keyword* `function` in code stays English; the concept in prose is "funkcija". |
| to call (a function) | pozvati (funkciju) | sr | |
| to define (a function) | definisati | sr | |
| input (to a function) | ulaz | sr | |
| output | izlaz | sr | |
| to return (a value) | vratiti (vrednost) | sr | |
| return value | povratna vrednost | sr | |
| parameter | parametar | sr | The declaration-site name. |
| argument | argument | sr | The call-site value; used somewhat interchangeably with "parametar" in casual Serbian dev speech, but keep them distinct per the glossary discipline. |
| pure function | čista funkcija | sr | |
| brackets (the two after a function name) | zagrade | sr | The `()` pair written after a function name to call it ("napiši njeno ime, a zatim te dve zagrade"). Bare "zagrade" is enough where the context is a function call; where round and square must be distinguished, "obične zagrade" (round) vs "uglaste zagrade" (square). |

### Loops, state & program flow

| English | Serbian | Use (sr/en) | Notes |
|---------|---------|-------------|-------|
| keyword | ključna reč | sr | Still worth clarifying once. |
| interpreter (the one who interprets) | interpreter | sr | **A person doing the job of interpreting, not a piece of software:** on concept pages Jiki *is* the interpreter ("tvoj interpreter je Jiki", "njegov posao je da interpretira kod koji pišeš"). Declines normally: "interpretera", "interpreteru". The verb is "interpretirati". Not "interpretator" (names the program, not the person), not "prevodilac" (the standard word for a compiler-style translator), and not "tumač" (bound to the court/spoken-language sense). |
| instruction (given to Jiki) | instrukcija | sr | A single thing the learner tells Jiki to do ("daš mu prave instrukcije"). Keep distinct from "naredba" (an executable statement of code). Note that "instrukcije" on its own can also mean private tutoring lessons in Serbian; the Jiki context removes the ambiguity, but do not use it bare where it could. |
| mental model | mentalni model | sr | The picture-in-your-head framing ("to je snažan mentalni model"). |
| (programming) language | programski jezik / jezik | sr | Use "programski jezik" where the programming sense needs stating, and bare "jezik" once it is established or where the framing is "a language a computer understands" ("na jeziku koji računar razume"). Never the English borrowing. |
| variable | promenljiva | sr | Feminine gender; "nova promenljiva", "promenljiva je definisana". |
| assignment | dodela (vrednosti) | sr | |
| to assign | dodeliti | sr | |
| code block | blok (koda) | sr | "telo funkcije" for the function-body sense specifically. |
| error | greška | sr | |
| exception | izuzetak | sr | Distinct from the general "greška"; the catchable-error-object sense. |
| nested | ugnežden(i) | sr | E.g. "ugnežđene petlje" (nested loops). |
| iteration | iteracija | sr | |
| to run / execute (code) | izvršiti / pokrenuti (kod) | sr | |
| loop | petlja | sr | |
| for loop | `for` petlja | sr | Keep `for` in backticks (real keyword) + "petlja". |
| while loop | `while` petlja | sr | As above. |
| for-of loop | `for-of` petlja | sr | As above. |
| loop body | telo petlje | sr | |
| break (loop control) | prekid (petlje) | sr | The keyword `break` itself always stays English in code; this is the prose concept. |
| increment | uvećanje | sr | "inkrement" is also used in more academic registers; use "uvećanje" here. |
| modulo / remainder operator | ostatak (deljenja) | sr | "The remainder of division"; no clarification needed. |
| concatenation / to concatenate | spajanje (stringova) | sr | Joining strings. Not "spajanje nizova" (reads as joining arrays). |
| toggle | preklopiti | sr | To flip a value between two states. |
| state / stateful | stanje | sr | |
| scope | doseg | sr | Keep distinct from "blok" (code block) above. |
| class | klasa | sr | |
| method | metod | sr | Masculine ("metod", not "metoda"); some Serbian sources use the feminine "metoda" instead, but pick "metod" and use it consistently. |
| property | svojstvo | sr | Stands alone. |
| object | objekat | sr | Masculine. |
| encapsulation | enkapsulacija | sr | Use "enkapsulacija" consistently. |

### Tooling & engineering

| English | Serbian | Use (sr/en) | Notes |
|---------|---------|-------------|-------|
| workflow | radni tok | sr | The software-engineering sense (a sequence of dev tasks), distinct from "curriculum" below. |
| auth: authentication | autentifikacija | sr | Verifying identity. |
| auth: authorization | autorizacija | sr | Verifying permissions; keep distinct from authentication above. |
| deploy | deploj | sr | Colloquially verbed as "deplojovati" in Serbian dev speech; worth a native developer's sanity check. |
| tool / tooling | alat | sr | |
| module | modul | sr | |
| algorithm | algoritam | sr | Still worth clarifying for a first-time beginner reader. |
| edge case | granični slučaj | sr | |
| backwards compatibility | unazadna kompatibilnost | sr | |

### Platform & curriculum vocabulary

| English | Serbian | Use (sr/en) | Notes |
|---------|---------|-------------|-------|
| feature (platform capability) | mogućnost | sr | Deliberately not "funkcija", because that word is reserved for the CS "function" concept; using it for "feature" too would create exactly the kind of collision `global/terms.md` warns about. |
| lesson | lekcija | sr | |
| exercise | vežba | sr | |
| scenario | scenario | sr | |
| course | kurs | sr | The whole Jiki course the learner is taking ("na ovom kursu tvoj interpreter je Jiki"). Keep distinct from "lekcija" (lesson) and "kurikulum" (curriculum). |
| curriculum | kurikulum | sr | Distinct from "radni tok" (workflow) above; this is the curriculum-structure sense. |
| level | nivo | sr | |
| milestone | prekretnica | sr | |
| pathway | putanja | sr | Keep distinct from "staza" (track) below; both mean "path" but are assigned to different concepts. |
| bootcamp | bootkamp | sr | |
| syllabus | silabus | sr | |
| mentor / mentoring | mentor / mentorstvo | sr | |
| track (curriculum path) | staza | sr | Keep distinct from "putanja" (pathway) above. |
| tutorial | tutorijal | sr | |
| solution (learner's submission) | rešenje | sr | |
| canvas (graphics exercises) | platno | sr | The drawing-surface sense specifically. |
| foot-gun | opasna prečica | sr | Flagged for native-speaker review; Serbian has the idiom "pucati sebi u nogu" (to shoot yourself in the foot), which may be worth workshopping into a punchier term. |

## Keep in English

These stay in English in Serbian prose, with the Serbian gloss to use for each.

| Term | Serbian gloss (on `<define>`) | Notes |
|------|----------------------------------|-------|
| string | "niska" | Used only as the gloss where the source defines it. |
| Boolean | "logička vrednost" | Where the source defines it, explain it means "logička vrednost", then use "Boolean". |
| API | explain the concept in Serbian, not just the acronym | Where the source defines it, explain what an API does ("skup pravila koja omogućavaju da dva programa međusobno komuniciraju"), not just gloss the letters. |
| framework | "radni okvir" | Where the source defines it, explain it means "radni okvir" (working framework); may then use either "radni okvir" or "framework" (Serbian technical writing sometimes phonetically respells this as "frejmvork", but plain English "framework" is also fine). |
| CLI | "komandna linija" | Where the source defines it, explain CLI as "komandna linija" (command line), then use "CLI" or "komandna linija" interchangeably. |
| component | "komponenta" | Use "komponenta" freely. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Serbian rendering | Notes |
|-------------------|----------------------|-------|
| box (value container) | kutija | |
| chain (array metaphor) | lanac | Used as the explanatory teaching image alongside the technical term "niz" for array. |
| input slot | ulazni otvor | No existing Serbian precedent found; flagged for a native-speaker check on first real use. |
| return chute | izlazni žleb | No existing Serbian precedent found; flagged for a native-speaker check on first real use. |
| machine (function metaphor) | mašina | In real use on the published using-functions concept page; flagged as an open question for native-speaker review. |
| shelves (storage) | police (sing. polica) | In real use on the published using-functions concept page; flagged as an open question for native-speaker review. |
| warehouse (Jiki's warehouse) | skladište | The place Jiki hangs out and keeps his machine shelf. In real use on the using-functions concept page ("Jikijevo skladište"). |
| crank (machine crank) | ručica | The handle Jiki turns to power a machine up ("okrene ručicu"). Not "kurbla" (more mechanical/technical). |
| board / whiteboard | tabla | **One word for both uses**: the board the learner writes instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on. No collision with "niz" (array). |

---

## Decision log

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind Serbian:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have, and
  several collided with their own word for `array` trying. **Serbian did not change:** it
  already used **tabla** for both, so the two rows merged with no text change. There is no
  collision with "niz" (array).
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. Several languages had reached
  for their term for interpreter *software*, which cannot. **Serbian kept the loanword
  "interpreter"**: it is what Serbian dev writing actually uses, and it already names a
  person in general Serbian, as of a performer interpreting a song, so it carries no
  machine or program morpheme and can name Jiki. "prevodilac" was rejected as the
  compiler-style translator, and "tumač" as bound to the court/spoken-language sense.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: The agent's own drafting in the same pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

Rows were added for the terms the using-functions concept page needed (`instruction (given
to Jiki)`, `mental model`, `(programming) language`, `brackets (the two after a function
name)`, `input (to a function)`, and the metaphor rows `machine`, `shelves`, `warehouse`,
`crank`, `board / whiteboard`).

**One rendering was corrected.** `concatenation` moved from "spajanje (nizova)" to
**"spajanje (stringova)"**: "niz" is the agreed word for `array`, so the old rendering read
as "joining arrays" rather than "joining strings".

Serbian also carries terms in real use on the published using-functions concept page that
no confirmation from a native speaker is recorded for, notably `mašina` (machine) and
`police` (shelves), plus the coinages `ulazni otvor` (input slot) and `izlazni žleb` (return
chute). These are open questions, flagged in the glossary rows themselves; nothing here
asserts whether or when a native speaker has looked at them.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`, `concatenation`) is not
repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| programming / coding | Standard, undisputed term. |
| tech / tech industry | "IT" is well established in Serbian as the name of the sector. |
| developer | Standard, general Serbian word for someone who writes code. |
| pitfall | Ordinary word ("trap"). |
| pattern | The everyday Serbian word for a pattern/template you follow repeatedly ("to je šablon koji ćeš koristiti"); "obrazac" is the more formal register. |

#### Values & data types

| Term | Why |
|------|-----|
| value, number | Ordinary words. |
| character | Loanword; established in Serbian beginner CS material (Petlja). |
| array / list | The established CS term. |
| index | Transparent cognate. |
| data type | Transparent compound once introduced. |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary words. |
| operator | Loanword, fully naturalized. |
| pure function | Transparent compound once "funkcija" is clarified. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| keyword | Transparent compound. |
| mental model | Transparent and in ordinary use in Serbian educational writing. |
| (programming) language | "Jezik" is the ordinary word every beginner already knows. |
| code block | "blok" is itself a loanword. |
| nested | Native metaphor (from "gnezdo" = nest), already the standard term. |
| iteration | Loanword. |
| loop | "petlja" is also the name of Serbia's national CS-education platform (Petlja.org), so it's well-established and iconic, not just a textbook coinage. |
| increment | Native, transparent ("increase"), and reads better for a beginner audience than the academic "inkrement". |
| modulo / remainder operator | Transparent: "the remainder of division". |
| class | Loanword. |
| property | Ordinary Serbian word for a characteristic/attribute. |
| object | Loanword, fully naturalized. |
| encapsulation | Standard OOP loanword. Real Serbian course material sometimes frames the concept with a "cocooned data" image ("učaurena podaci", from "čaura" = cocoon/casing), a nice explanatory aside but not the term to use. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| tool / tooling | Ordinary, transparent word. |
| module | Loanword. |
| algorithm | Long-established loanword. |
| edge case | Transparent native compound ("border/edge case"). |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| milestone | Native, transparent ("turning point"). |
| bootcamp | Phonetically adapted loanword. |
| syllabus | Established loanword in Serbian academic usage. |
| mentor / mentoring | Established loanword, fully naturalized. |
| tutorial | Loanword. |
| solution | Ordinary word. |
| foot-gun | Descriptive phrase, not a fixed idiom; no clean one-word Serbian equivalent was found. |

#### Keep in English

| Term | Why |
|------|-----|
| string | Practitioner Serbian material (Petlja) uses "string" directly in prose; "niska" is the more academic/purist term. |
| API | Not a word a beginner knows. |
| component | Fully naturalized Serbian tech vocabulary. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Directly attested, independently, in two real Serbian CS-education sources with phrasing remarkably close to Jiki's own ("a value is thrown out of the box and a new one written into it"). |
| chain | The same way Hungarian keeps both "lánc" (chain, metaphor) and "tömb" (array, technical term). |
| input slot | Constructed from "ulaz" (input, agreed term) + "otvor" (an opening/slot). |
| return chute | Constructed from "izlaz" (output, agreed term) + "žleb" (a groove/chute). |
| machine | Plausible and low-risk (vending/factory-machine imagery is culturally universal), but unattested in existing Serbian CS-education material. |
| shelves | Directly attested: a real Serbian CS lesson diagram is captioned "variables in an array are like boxes on a shelf" ("kutije na polici"). Attestation is not the same as native-speaker confirmation. |
| warehouse | The ordinary Serbian word for a warehouse/storeroom. |
| crank | "ručica" is the everyday word for a small handle/lever, unlike the more mechanical "kurbla". |
