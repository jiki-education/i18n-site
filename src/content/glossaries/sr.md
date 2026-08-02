---
lang: "sr"
name: "Serbian"
family: null
stage: "refining"
governance_sha: "1a9f130"
content_version: "c6926c4bfc77"
published_at: "2026-08-02"
term_count: 114
category_id: 166
forum_topic_id: 402
video_player_forum_topic_id: 779
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
| dictionary | rečnik | sr | Corrected from "mapa" per native-speaker feedback (see glossary-notes.md). "mapa" / "mapiranje" belongs to Java's `Map`; the Python-style dictionary Jiki teaches is "rečnik". Masculine; declines normally ("u rečniku", pl. "rečnici", instr. pl. "rečnicima"). |
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
| scope | opseg | sr | Corrected from "doseg" per native-speaker feedback (see glossary-notes.md). Keep distinct from "blok" (code block) above. |
| class | klasa | sr | |
| method (a function that belongs to a class) | metoda | sr | Feminine ("metoda", with the -a ending). Corrected from "metod" per native-speaker feedback (see glossary-notes.md); "metod" is now reserved for the general, non-OOP sense of "method" only, not for class methods. |
| property | svojstvo | sr | Stands alone. |
| object | objekat | sr | Masculine. |
| encapsulation | enkapsulacija | sr | Use "enkapsulacija" consistently. |

### Tooling & engineering

| English | Serbian | Use (sr/en) | Notes |
|---------|---------|-------------|-------|
| workflow | radni tok | sr | The software-engineering sense (a sequence of dev tasks), distinct from "curriculum" below. |
| auth: authentication | autentifikacija | sr | Verifying identity. |
| auth: authorization | autorizacija | sr | Verifying permissions; keep distinct from authentication above. |
| deploy | postavi na server | sr | Corrected from "deploj" per native-speaker feedback (see glossary-notes.md): "deploj" reads unprofessional and anglicized. "postaviti" = "to put"; conjugate to fit the sentence (e.g. "postavljanje na server" as the noun/gerund). Context-dependent: where "postavi na server" reads awkwardly, rephrase around the specific action instead of forcing this exact phrase. |
| tool / tooling | alat | sr | |
| module | modul | sr | |
| algorithm | algoritam | sr | Still worth clarifying for a first-time beginner reader. |
| edge case | granični slučaj | sr | |
| backwards compatibility | unazadna kompatibilnost | sr | |

### Platform & curriculum vocabulary

| English | Serbian | Use (sr/en) | Notes |
|---------|---------|-------------|-------|
| feature (platform capability) | funkcionalnost | sr | The word Serbian developer and product writing actually uses ("nove funkcionalnosti"). Still never bare "funkcija", which is reserved for the CS "function" concept. "funkcionalnost" shares that root but is a separate, unambiguous word, so keep the two forms apart and never shorten one to the other. |
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
| maze | lavirint | sr | Masculine; declines normally ("u lavirintu", "kroz lavirint", pl. "lavirinti"). Spelled with **v**, not "labirint": both are valid, but "lavirint" is what Serbian speakers actually say. |
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
| return chute | izlazni otvor | Corrected from "izlazni žleb" per native-speaker feedback (see glossary-notes.md): "žleb" is archaic and rarely used. Mirrors "ulazni otvor" (input slot) above as the input/output pair. |
| machine (function metaphor) | mašina | In real use on the published using-functions concept page; flagged as an open question for native-speaker review. |
| shelves (storage) | police (sing. polica) | In real use on the published using-functions concept page; flagged as an open question for native-speaker review. |
| warehouse (Jiki's warehouse) | skladište | The place Jiki hangs out and keeps his machine shelf. In real use on the using-functions concept page ("Jikijevo skladište"). |
| crank (machine crank) | ručica | The handle Jiki turns to power a machine up ("okrene ručicu"). Not "kurbla" (more mechanical/technical). |
| board / whiteboard | tabla | **One word for both uses**: the board the learner writes instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on. No collision with "niz" (array). |

---

## Decision log

### 2026-08-02: `dictionary` is "rečnik", not "mapa"

**Decided by:** owner (iHiD), on the correction of native speaker **little_mouse** on the
pinned Serbian glossary thread ([post 8](https://forum.jiki.io/t/402/8), post id 2371).
**Terms affected:** `dictionary`. **Status: human-decided, settled.**

The row read **"mapa"**. little_mouse's point is that the two words are split by language in
Serbian developer usage: "mapa" (and the verb sense "mapiranje") is what Java's `Map` type is
called, while Python calls its dictionaries "rečnik". Jiki's `dictionary` concept teaches the
Python-style key/value dictionary, not a Java `Map`, so "mapa" points a Serbian reader at the
wrong language's data structure. "rečnik" is also the literal translation of "dictionary". The
row now reads "rečnik", and the note records the Java-vs-Python split so a future pass does not
reintroduce "mapa".

The already-translated Serbian JavaScript interpreter catalog carried "mapa" in the two error
messages whose English says "dictionary" (`InOperatorRequiresObject`,
`InWithArrayNotAllowed`); both were updated to "rečnik" with the change.

The same post raised four other terms, **none of them actioned here** because each is a choice
between several plausible options rather than a single clean substitution: `increment`
("inkrement" / "inkrementirati" for the `++` sense specifically, argued as not merely
academic), `toggle` ("preklopiti" questioned; "prebaciti", "promeniti", "invertovati" or
"prekidač" offered instead, with the reviewer unsure), `milestone` ("prekretnica" reads as a
turning point rather than an achieved mid-goal; "tačka", "cilj" or another reviewer's
"dostignuće" offered), and `bootcamp` ("bootkamp" questioned; plain "bootcamp",
"intenzivni kurs" or "kurs" offered). The post also noted "ugnježden" as an equally valid
spelling variant of `nested` (no change needed), and observed that Serbian IT people are often
more comfortable with English UI words such as "Save" and "Edit" than with translations.

### 2026-08-02: Proposed terms from the Stage 2 batch 2 catch-up pass (unconfirmed drafts)

**Decided by:** agent (proposals only, nothing written to `glossary.md`). The catch-up pass
translating `two-fer`, `strings`, `digital-clock`, `arrays`, `weather-symbols` (full detail
also in `STATUS.md`).

**Conflict, needs settling:** `piece of paper` (string metaphor) — this batch's `strings`
item proposes _папир_, but the earlier `if` pass proposed _папирић_ for the same term. One
has to win.

**Two rows narrow existing agreed metaphors, worth a native-speaker check before agreeing:**
`slot` (bare/generic) → _отвор_ sits beside the already-agreed "input slot = улазни отвор";
`box` (weather-symbols forecast grid cell) → _поље_ was deliberately kept distinct from the
value-container `box → кутија`, which is the right call but should be confirmed rather than
assumed.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| compound data type | сложени тип података | | high |
| coin (number metaphor) | новчић | | high |
| item (informal, vs technical "element") | ставка | | medium |
| template string | шаблонски стринг | | medium |
| meridiem (am/pm marker) | kept as-is, quoted on first mention | | medium |
| week (scenario names) | седмица | Not "недеља", which also means Sunday. | medium |
| counter (loop counter) | бројач | | low |

Possible `global/terms.md` gaps flagged: `coin`, `piece of paper`, `template string`,
`meridiem`, `counter`.

### 2026-08-01: `guide.md` trimmed to rules only

**Decided by:** agent, on an owner-requested pass over `languages/sr/guide.md`.
**Status:** editorial, plus two **unconfirmed drafts** flagged below. No term mapping
changed, and no glossary row was touched.

The guide is loaded into the prompt for every Serbian item, in every pass, so the pass
removed everything in it that was rationale, provenance or a restatement of a global file
(9,570 → 6,022 characters, −37%). Every behavioural instruction was kept. What was removed,
and is recorded here instead:

- **Script provenance.** The Latin-script decision was justified by the fact that every
  real source of Serbian programming education (Petlja.org, university course material, dev
  blogs) writes in Latin script, even on platforms that otherwise default to Cyrillic for
  general content, and that dropping the diacritics is a casual chat/SMS convention rather
  than something serious educational writing does. The imperative rule stays in the guide;
  the evidence is here.
- **The whole "Audience specifics" section.** It said that readers are in Serbia and other
  Serbian-speaking communities, and that real Serbian CS-education material already leans on
  concrete physical metaphors for abstract concepts (a variable as a "little box", array
  elements as "boxes on a shelf", encapsulation as "cocooned data"), so Jiki's metaphor
  family is a natural fit rather than an import. That is research provenance, not an
  instruction: `global/voice.md` carries the audience profile and `global/rules.md` carries
  the "metaphors are load-bearing" rule. The individual attestations are already in the Term
  rationale table below.
- **The ти/ви justification.** The guide argued the informal "ti" choice at length:
  institutional Serbian CS material (official course manuals, university textbooks) actually
  defaults to formal "vi", but that register belongs to academic/institutional writing rather
  than to Jiki's warm, informal, mentor-like brand voice; "ti" is what real Serbian marketing
  and youth-oriented tutorial content uses, and matches the rest of Jiki's languages. The
  rule ("use ti, never vi") is unchanged in the guide.
- **Cross-language commentary on word order.** A parenthetical compared Serbian's
  topic/focus word order with the more rigid focus-position system documented in Hungarian's
  guide. Serbian's word order is freer than English but not rule-governed the way Hungarian's
  is, which is why the guide states it as "reorder for naturalness", not as a positional rule.
- **The "Worked examples" tail.** Its titles, calls-to-action and natural-phrasing bullets
  restated `global/voice.md` with Serbian illustrations: "Stiže Jiki" / "Upoznaj Jiki" rather
  than the melodramatic "Rođen je Jiki"; "Nov način da naučiš programiranje" rather than the
  redundant "Jedan novi način učenja programiranja"; "Počni odmah!" / "Prijavi se odmah!"
  rather than the vague "Pridruži nam se!"; "Probaj besplatno!" / "Isprobaj ovo!"; "Hajde da
  naučimo React" rather than the flatter "Naučimo React". The two examples that taught the
  ti-form/aspect rule something the rule alone did not ("Prvo instaliraj Node.js", "Probaj da
  pokreneš ovaj kod") moved up into the Formality section and are still in the guide.
- **The acronym bullet.** It instructed that "API" be explained as "skup pravila koja
  omogućavaju da dva programa međusobno komuniciraju" and "CLI" as "komandna linija" rather
  than glossed letter by letter. Both are already glossary rows in the "Keep in English"
  table, with that exact Serbian text, and `global/voice.md` carries the general principle.
- **Rationale trimmed from surviving rules.** That an invariant technical noun is "the single
  biggest source of machine-translated-sounding Serbian"; that the gendered-participle problem
  "comes up constantly in walkthrough prose"; that the identical-loanword gloss "bites often,
  because so many Serbian technical terms are Latin-spelled loanwords". All true, none of it
  changes what a translator does.
- **A "flag it for a native-speaker check" instruction on Jiki-name inflection**, with the
  observation that no inflected form had yet appeared in a real translated file. `global/rules.md`
  ("When unsure") already covers flagging anything ambiguous, so this was a duplicate. The
  inflection rule itself ("Jikija", "Jikiju") is unchanged.

#### Two conflicts resolved

- **Quotation marks (unconfirmed draft).** The guide stated no quotation convention but its
  own Serbian examples opened with „ (U+201E) and closed with a straight ASCII `"`, which is
  a mismatched pair. The guide now states the standard Serbian pair **„...“** (U+201E opening,
  U+201C closing) and all its examples use it. This is an agent call from the standard written
  convention, not a native-speaker decision, and is worth confirming on the forum.
- **The hyphen as an em-dash substitute (unconfirmed draft).** The guide's style notes said a
  hyphen "is also acceptable where it reads better" as a replacement for an em dash.
  `global/rules.md` outranks the guide and enumerates the replacements as separate sentences,
  commas or parentheses, so the guide now says a hyphen is not a dash substitute. The hyphen's
  Serbian-specific real job, attaching a case suffix to a code identifier or a number in prose
  („`niz`-u“, „30-og“), was kept and promoted to a Grammar bullet in its own right, since
  declension on code tokens is a load-bearing Serbian rule rather than a typographic aside.

No other contradiction was found: the Latin-script decision reads consistently everywhere it
appears (including the "never write Cyrillic `енгл.`" rule that depends on it), and the guide
already triggers glossing only from a `<define>` tag, never on first occurrence, as
`global/voice.md` requires.

### 2026-07-31: `deploy` is "postavi na server", not "deploj"; `return chute` is "izlazni otvor", not "izlazni žleb"

**Decided by:** native speaker **aleksaelezovic** on the pinned Serbian glossary thread
([post 6](https://forum.jiki.io/t/402/6)), actioned directly.
**Terms affected:** `deploy`, `return chute` (Jiki physical metaphor). **Status: settled.**

Both terms were raised in the same post as the `scope`/`method` correction above but were
left unactioned there pending a follow-up call between multiple plausible options. This
entry closes that out.

The row read **"deploj"** for `deploy`, a phonetic respelling of the English word.
aleksaelezovic flagged it as reading unprofessional and too anglicized, and suggested
"postavi na server" ("postaviti" = "to put") as the natural Serbian phrasing, while noting
it might need rephrasing depending on context rather than a single fixed term. The row now
reads "postavi na server" with a note flagging it as context-dependent, so a translator
rephrases around the specific action where the literal phrase does not fit.

The row read **"izlazni žleb"** for `return chute`, one of three options aleksaelezovic
offered for the archaic "žleb" ("otvor", "kanal", "cev"). "otvor" is picked because it
mirrors the existing "ulazni otvor" (input slot) rendering, giving the input/output pair a
consistent "otvor" base rather than mixing vocabulary between the two metaphors. The row now
reads "izlazni otvor".

The same post endorsed the existing renderings for `machine`, `shelves`, and `input slot` as
correct; no change made there (already recorded in the entry above).

### 2026-07-31: `scope` is "opseg", not "doseg"; `method` (class sense) is "metoda", not "metod"

**Decided by:** owner (iHiD), on the correction of native speaker **aleksaelezovic** on the
pinned Serbian glossary thread
([post 5](https://forum.jiki.io/t/402/5), [post 6](https://forum.jiki.io/t/402/6)).
**Terms affected:** `scope`, `method (a function that belongs to a class)`. **Status:
human-decided, settled.**

The row read **"doseg"** for `scope`. aleksaelezovic's suggestion is "opseg" instead; no
counter-argument or prior native-speaker sign-off is on record for "doseg", so the row is
corrected as proposed.

The row read **"metod"** (masculine) for `method`, with a note explicitly picking the
masculine form over the feminine "metoda". aleksaelezovic's correction reverses that call for
the OOP sense specifically: in programming, "metoda" (feminine, -a ending) is what a function
belonging to a class is called, and "metod" is reserved for the general, non-programming
sense of the word "method". Jiki's curriculum uses `method` in the class sense, so the row
now reads "metoda" and the note records the "metod" vs "metoda" split so a future translator
does not re-collapse it.

The same post (6) also raised `deploy` ("deploj" reads as an awkward non-word; suggests
"postavi na server" or rephrasing depending on context) and `return chute` ("izlazni žleb"
uses an archaic word; suggests "izlazni otvor", "izlazni kanal", or "izlazna cev" instead).
**Neither is actioned here**: both need a follow-up call between multiple plausible options
rather than a single clean substitution, so they are flagged here for Jeremy's attention
rather than resolved unilaterally. The same post also endorsed the existing renderings for
`machine`, `shelves`, and `input slot` as correct; no change needed there.

### 2026-07-31: `feature` is "funkcionalnost", not "mogućnost"

**Decided by:** owner (iHiD), on the correction of native speaker **miroslav-inc** on the
pinned Serbian glossary thread
([post](https://forum.jiki.io/t/serbian-review-glossary/402/3)).
**Terms affected:** `feature (platform capability)`. **Status: human-decided, settled.**

The row read **"mogućnost"**, an agent draft that reached for "capability" in order to steer
well clear of "funkcija" (the agreed CS term for `function`). miroslav-inc's correction is
that **"funkcionalnost"** is the word Serbian software and product writing actually uses:
"nove funkcionalnosti" is ordinary release-note Serbian in a way "nove mogućnosti" is not.
That is the "default to the ordinary, common word" principle below, applied by someone who
speaks the language.

The old note's worry does not survive the change. "funkcionalnost" and "funkcija" share a
root, but they are two distinct words that a Serbian reader does not confuse, and the
collision `global/terms.md` warns about is one term doing two jobs, which is not what this
is. The concern is kept in the row in the narrow form that still bites: never shorten
"funkcionalnost" to "funkcija" for the feature sense, because that word is spoken for.

**`milestone` is deliberately not actioned.** The same post proposed "dostignuće" in place of
the current "prekretnica". That one is not a clean correction: "dostignuće" means
*achievement*, which is a different concept from a milestone, and Jiki may well want that word
for an achievements feature later. It stays as it is pending a follow-up question to native
speakers on the same thread.

### 2026-07-31: `maze` is "lavirint", not "labirint"

**Decided by:** owner (iHiD), on the correction of native speaker **aleksaelezovic** on the
pinned Serbian glossary thread
([post](https://forum.jiki.io/t/serbian-review-glossary/402/4)), raised against the "Solve
the Maze" exercise ([topic 814](https://forum.jiki.io/t/serbian-review-exercise-solve-the-maze/814)).
**Terms affected:** `maze`. **Status: human-decided, settled.**

The exercise rendered "maze" as **"labirint"**. That form is not wrong, and it is the one a
dictionary reaches for, but as aleksaelezovic put it, "it is pretty much always used as
'lavirint' around here in Serbia and this is the way it sounds most natural to Serbian
speakers". Serbian has both variants; the **v** form is the ordinary spoken one, so it is
the one the course uses, per the "default to the ordinary, common word" principle below.

A row was added for `maze` (there was none before, which is how the exercise came to pick a
rendering on its own).

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
