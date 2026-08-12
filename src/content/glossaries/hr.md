---
lang: "hr"
name: "Croatian"
family: null
stage: "setup"
governance_sha: "e39e25b"
content_version: "e2c17ac38713"
published_at: "2026-08-12"
term_count: 156
category_id: 463
---

# Croatian (hr) glossary

The agreed term list for Croatian. Why each term was chosen, and who chose it, is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| programming / coding | **programiranje** | hr | Use consistently. `kodiranje` only where the source stresses the casual act of writing code; never mix both in one document. |
| developer | programer | hr | The word a beginner knows. `developer` only where the industry job role itself is meant. |
| computer | **računalo** | hr | Never `računar`, never `kompjuter`. Note that computer science is `računarstvo`, which is correct Croatian and must not be "corrected" to `računalstvo`. |
| code (the noun, in prose) | kôd | hr | Written with the circumflex, which keeps it apart from the preposition `kod`. `kôda`, `u kôdu`. The `Code` UI token stays English. |
| tech / tech industry | IT industrija | hr | `tehnološki` for the general adjective sense. |
| pattern (a recurring shape you reuse) | obrazac | hr | Collides with `obrazac` meaning a form to fill in, so use `obrazac za unos` for a web form and keep bare `obrazac` for the pattern sense. |
| mental model | mentalni model | hr | |
| pitfall | zamka | hr | Stands alone; no gloss needed. |

## Localize (use the Croatian term)

These are terms where the Croatian is used in prose, so the "Use (hr/en)" column is `hr` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| value | vrijednost | hr | Feminine. Never `vrednost`. |
| true / false | točno / netočno | hr | Not capitalised in prose. This governs the prose concept only: a `true`/`false` literal that code returns or is compared against stays English. |
| character (text) | znak | hr | **Never `karakter`**, which in Croatian means character as in personality. `niz znakova` = a string of characters. |
| letter (of a string) | slovo | hr | Kept distinct from `znak`. |
| integer | cijeli broj | hr | Adjective `cjelobrojni`. |
| float / decimal | decimalni broj | hr | `realni broj` in academic register, `broj s pomičnim zarezom` where the floating-point nature matters. Croatian uses *zarez*, so never `pomična točka`. |
| array / list | polje | hr | Never `niz`, which is both the Serbian choice and already needed for `niz znakova` (string). `lista` only where the source means a Python-style list. See also "chain" under the metaphors. |
| dictionary | rječnik | hr | **Not `mapa`**, which is Croatian for a folder. |
| compound data type | složeni tip podataka | hr | Distinct from a plain data type. |
| random number | slučajni broj | hr | Not `nasumičan`. |
| object (JS `{}` literal) | objekt | hr | Masculine. Never `objekat`. |
| position (in a string/array) | pozicija | hr | Kept distinct from `indeks`. |

### Functions & control flow

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| if statement | naredba `if` | hr | The keyword stays English. For the general concept of conditional branching in prose, use `uvjetno grananje`. |
| condition | uvjet | hr | Never `uslov`. |
| comparison | usporedba | hr | Verb `usporediti`. Never `poređenje` or `uporediti`. The operator class is `relacijski operatori`. |
| statement (executable) | naredba | hr | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | iskaz | hr | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. |
| function | funkcija | hr | The *keyword* `function` in code stays English; the concept in prose is `funkcija`. |
| to define (a function) | definirati | hr | Never `definisati`. The same `-irati` pattern governs `deklarirati` and `inicijalizirati`. |
| parameter | parametar | hr | The declaration-site name. |
| argument | argument | hr | The call-site value. Keep the two distinct even though older Croatian material merges them as `formalni`/`stvarni argument`. |
| input (to a function) / output | ulaz / izlaz | hr | The concepts. The *actions* are different words and must not be conflated with these: `unos` or `učitavanje` for reading input, `ispis` for printing output. |
| to return (a value) | vratiti (vrijednost) | hr | |
| return value | povratna vrijednost | hr | |
| function body | tijelo funkcije | hr | Never `telo`. |
| brackets (the two after a function name) | oble zagrade | hr | Bare `zagrade` is enough where the context is a function call. Which bracket type to name, and when, is in the Brackets section below. |
| interpreter | **tumač** | hr | **A person doing a job, not a program.** On concept pages Jiki *is* the interpreter (`tvoj tumač je Jiki`, `njegov je posao tumačiti kôd koji pišeš`). Never `interpreter` or `interpretator`, which name the program and also mean a musical performer, and never `prevoditelj`, which is the word for a compiler. Lean on the framing rather than the bare label. |
| instruction (given to Jiki) | uputa | hr | What the learner writes on the board for Jiki to follow. Everyday word, deliberately distinct from `naredba` (an executable statement of code). |
| else clause / branch | inače | hr | `inače` in prose; `grana `else`` where the code branch itself is meant. |
| built-in | ugrađen | hr | `ugrađene funkcije`, as against `korisnički definirane funkcije`. |
| equal sign | znak jednakosti | hr | Assignment as an action is `pridruživanje`. |
| bang (the `!` character) | uskličnik | hr | Croatian names it functionally where the logical sense is meant (`negacija`); use the glyph itself on a `<define>`. |
| placeholder | rezervirano mjesto | hr | |
| pure (function) | čista funkcija | hr | When glossed, gloss the full term *pure function*, not the bare adjective. |

### Loops, state & program flow

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| variable | varijabla | hr | Feminine. Never `promjenjiva` or `promenljiva`. |
| assignment / to assign | pridruživanje / pridružiti | hr | `dodjeljivanje` is an acceptable synonym; do not alternate inside one document. |
| code block | blok naredbi | hr | Kept distinct from `doseg` (scope). |
| error | pogreška | hr | Never `greška`, which is lower register and the Serbian form. |
| exception | iznimka | hr | The catchable-error-object sense, distinct from `pogreška`. Never `izuzetak`. |
| nested | ugniježđen | hr | `ugniježđene petlje` = nested loops. When glossed, gloss the full term (*nested loop*), not the bare adjective. |
| iteration | iteracija | hr | `ponavljanje` or `prolaz` in plainer register; do not alternate inside one document. |
| increment | uvećavanje | hr | `inkrementiranje` is the technical register; prefer the plain word. |
| to run / execute (code) | izvršiti (kôd) / pokrenuti (program) | hr | **Not synonyms.** `izvršiti` is to execute code, `pokrenuti` is to launch a program or start a run. |
| concatenation / to concatenate | nadovezivanje | hr | `spajanje` is plainer and acceptable; `nadovezivanje` is the precise term. |
| scope | doseg | hr | Kept distinct from `blok naredbi`. Never `oblast vidljivosti`. |
| class | klasa | hr | `razred` appears in purist course material; use `klasa`. |
| method | metoda | hr | Feminine. |
| property | svojstvo | hr | Distinct from `atribut`. |
| encapsulation | enkapsulacija | hr | `učahurivanje` is available as a Croatian gloss where one is needed. |
| indentation | uvlaka | hr | The action is `uvlačenje`. |
| break (loop control) | prekinuti petlju | hr | Croatian phrases this verbally; `izlazak iz petlje` for the noun sense. The keyword `break` always stays English. |

### Tooling & engineering

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| library (code) | biblioteka | hr | `knjižnica` is the prescriptivist preference and not what developers say. |
| workflow | tijek rada | hr | The software-engineering sense. Cf. `dijagram tijeka` for a flowchart. |
| edge case | rubni slučaj | hr | |
| debugging | otklanjanje pogrešaka | hr | The prose activity. The `Debug` UI token stays English. |
| deploy | objaviti / postaviti u produkciju | hr | Context-dependent, not a fixed phrase: where neither reads well, rephrase around the specific action. |
| tool | alat | hr | |
| file / folder | datoteka / mapa | hr | `direktorij` only in a filesystem or CLI context. |
| browser | preglednik | hr | `web-preglednik` where the web sense needs stating. |
| server | poslužitelj | hr | Never `poslužilac`. |
| website / web page | web-mjesto / web-stranica | hr | Hyphenated, lowercase `web`. |
| software / hardware | softver / hardver | hr | Never `programska podrška` or `očvrsje`. |

### Platform & curriculum vocabulary

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| course | tečaj | hr | The whole Jiki course the learner is taking. **Never `kolegij` or `e-kolegij`**, which mean a university degree module. |
| task (within an exercise) | zadatak | hr | Distinct from `vježba` (the exercise itself). |
| level | razina | hr | |
| milestone | etapa | hr | The numbered marker on the learning path (`Etapa 3`). Deliberately not `prekretnica` (a turning point, which a numbered path marker is not), and deliberately not `postignuće`, which is spoken for by the Achievements feature. Where English uses "milestone" loosely rather than as the platform feature, translate for sense instead. |
| concept (learning unit) | pojam | hr | Concept Library = `Zbirka pojmova`. Not `koncept`. |
| scenario | scenarij | hr | Croatian spelling; never `scenario`. |
| curriculum | kurikulum | hr | |
| tutorial | vodič | hr | |
| challenge (platform feature) | izazov | hr | |

### App & product UI

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| plan (subscription tier) | paket | hr | `plan pretplate` as the unambiguous long form. Not `plan` alone. |
| subscription | pretplata | hr | |
| dashboard | Naslovnica | hr | Deliberately not `nadzorna ploča`, which would put `ploča` on both the dashboard and the whiteboard metaphor. |
| badge | značka | hr | |
| achievements | postignuća | hr | Reserved for this feature, which is why `milestone` is `etapa`. |
| account | korisnički račun | hr | |
| sign in / sign up | Prijava / Registracija | hr | Keep these two apart: `Prijavi se` can read as either, so never use it for both. |
| button / tab / menu | gumb / kartica / izbornik | hr | `tipka` is a physical or keyboard key only. |
| Run Code (button) | Pokreni kôd | hr | Must match between exercise instructions and the app catalog. |
| session (auth) | sesija | hr | Not `sjednica`. |
| cookies | kolačići | hr | |
| settings | postavke | hr | |

### Colours & graphics

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| hue | nijansa | hr | |
| saturation | zasićenje | hr | Not `saturacija`. |
| lightness | osvijetljenost | hr | Kept distinct from `svjetlina` (brightness). |
| brightness | svjetlina | hr | The casual "how bright" sense; not the HSL channel. |
| colour wheel | krug boja | hr | |
| slider (UI control) | klizač | hr | |
| frame (animation) | sličica | hr | `kadar` is the film sense and is wrong here. |
| canvas (graphics exercises) | platno | hr | The drawing-surface sense. The HTML `<canvas>` element name stays English. |
| radius | polumjer | hr | Use one rendering for both the horizontal and the vertical radius. |
| circle | krug / kružnica | hr | `krug` is the filled disc, `kružnica` the outline. A drawing exercise must honour the difference. |
| horizontal / vertical | vodoravno / okomito | hr | Better for beginners than `horizontalno`/`vertikalno`. |

### Exercise scenario vocabulary

Terms that belong to an exercise's story rather than to programming itself.

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| maze | labirint | hr | Masculine. Never `lavirint`. |
| dead end (maze) | slijepa ulica | hr | `slijepi hodnik` inside a corridor maze. Never `ćorsokak`. |
| alien (creature) | izvanzemaljac | hr | Never `vanzemaljac`: Croatian takes the `izvan-` prefix. Does not read as "foreigner", which is `stranac`. |
| traffic light (the whole device) | semafor | hr | |
| light (one coloured lamp) | svjetlo | hr | `crveno / žuto / zeleno svjetlo`. Croatian says `žuto`, never `narančasto`, for the middle light. |
| bouncer | izbacivač | hr | Including in exercise titles. `zaštitar` is what Croatians more often say in real life; keep it for running prose where the security-guard sense fits better. |
| skyscraper | neboder | hr | |
| skyline / cityscape | silueta grada | hr | Croatian has no one-word equivalent; do not coin one. |
| dress code | pravila odijevanja | hr | |
| ballgown | balska haljina | hr | The English value stays as-is in code; use the Croatian in prose. |
| tuxedo | smoking | hr | Masculine. Never `tuksedo`. |
| suit | odijelo | hr | |
| dress | haljina | hr | |
| denim | traper | hr | `traperice` for jeans. Never `džins`. |
| pangram | pangram | hr | Gloss where the source introduces it as `rečenica koja sadrži sva slova abecede`. Croatian uses *abeceda*, never *azbuka*. |

## Keep in English

These stay in English in Croatian prose, with the Croatian gloss to use for each.

| Term | Croatian gloss (on `<define>`) | Notes |
|------|--------------------------------|-------|
| string | _niz znakova_ | Exception: the string concept itself uses `niz znakova` where the source defines it, then `string` throughout. Masculine; declines normally (`stringa`, `u stringu`). |
| Boolean | _logička vrijednost_ | The type name is `logički tip`. Where the source defines it, gloss it, then use `Boolean`. |
| API | explain the concept in Croatian | Explain what an API does, not just the letters. Inflects with a hyphen: `API-ja`, `API-jem`. |
| CLI (the concept) | _naredbeni redak_ | Never `komandna linija`. |
| framework | _programski okvir_ | No settled Croatian word; Croatian tech writing keeps `framework`. |
| component | _komponenta_ | Use `komponenta` freely. |
| module | _modul_ | |
| AI | _umjetna inteligencija_ | Use `AI` as the short form, never `UI`, which collides with user interface. Inflects `AI-a`. |
| LLM | explain in Croatian | `veliki jezični model`. Inflects `LLM-a`. |
| bug | (no gloss) | Genuinely the ordinary word in Croatian tech writing. |
| widget, chat | (no gloss) | `programčić` exists in dictionaries and not in real use. |
| bootcamp | (no gloss) | Kept English in Croatian tech-education copy. |
| Debug, Test | (no gloss) | As keywords and UI tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | As UI labels and code tokens. The ordinary noun in prose follows the `kôd` row above. |
| RGB, HSL | (no gloss) | Explain what the letters stand for in Croatian where the source does; the acronyms stay English. |
| JavaScript, Python, React | (no gloss) | Decline directly, with no hyphen: `Pythona`, `u Reactu`. |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | Never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Croatian rendering | Notes |
|-------------------|--------------------|-------|
| box (value container) | kutija | Feminine. `kutijica` where a warmer diminutive helps. |
| chain (array metaphor) | lanac | Masculine (genitive `lanca`, plural `lanci`). One link is a **`karika`**, never `alka`. Used as the teaching image alongside the technical `polje`. |
| machine (function metaphor) | stroj | Masculine. **Never `mašina`**, which is marked regional and Serbian. `strojić` is the natural diminutive for one of Jikijevih malih strojeva. |
| input slot | prorez | Masculine. The everyday word for the slot you drop a coin into. Never `utor`, which is the hardware expansion-slot term. |
| return chute | izlazni otvor | Masculine. Pairs with `prorez`. Never `klizište`, which means a landslide. |
| crank (machine crank) | ručica | Feminine. Jiki `okreće ručicu` to power a machine up. Not `kurbla` (dated) and not `poluga` (a lever). |
| shelves (storage) | polica | Feminine, plural `police`. Jikijevi strojevi stoje na polici. |
| warehouse (Jiki's warehouse) | skladište | Neuter. `Jikijevo skladište`. |
| workshop (Jiki's workshop) | radionica | Feminine. `Jikijeva radionica`. |
| board / whiteboard | ploča | Feminine. **One object, one word:** the board the learner writes instructions on for Jiki to follow, and the board a function keeps its own notes on, are the same `ploča`. Keep it strictly for the writing surface, since `matična ploča` is a motherboard. |
| piece of paper (string metaphor) | papirić | Masculine. `list papira` in more explanatory register. |
| coin (number metaphor) | novčić | Masculine. Not `kovanica`, which is numismatic. |
| label (on a box/machine) | naljepnica | Feminine. `natpis` where Jiki writes directly on the box. **Avoid `oznaka`**, the standard word for a code label or identifier. |
| spiral notebook page (dictionary metaphor) | bilježnica na spiralu | Feminine. One page is `stranica bilježnice`. |
| mini-Jiki | mali Jiki | Plural `mali Jikiji`. **Never `Jikić`**, which reads as a surname. |
| character (game/maze figure) | lik | Masculine. Free of collision, because a text character is `znak`, not `karakter`. |

## Brackets

| Glyph | Croatian | Notes |
|-------|----------|-------|
| `()` | oble zagrade | Plain `zagrade` by default; name the type only when disambiguating. |
| `[]` | uglate zagrade | |
| `{}` | vitičaste zagrade | |
| `<>` | šiljaste zagrade | |

`&`, `\|` and the backtick have no agreed Croatian name: Croatian technical writing prints the glyph rather than naming it. On a `<define>`, show the glyph itself. How to phrase a bracket in running prose is in `guide.md`.

---

## Decision log

### 2026-08-12: Bootstrap of Croatian (guide, glossary, decision log)

**Decided by:** the project owner (Jeremy), who agreed the researched proposal put to him in full by a `/bootstrap-language hr` pass. **Status:** agreed, but **unconfirmed by any native speaker**. **Terms affected:** every row in `glossary.md`. **Files affected:** `guide.md`, `glossary.md`, `glossary-notes.md`, `tracking.json`, and an "Exercise scenario vocabulary" section added to `global/terms.md`.

**No row here carries native-speaker authority.** Croatian had no community glossary submission and no forum request behind it: a search of the forum for "croatian" and "hrvatski" returned only Serbian threads, and the new-language-request topic ([t/714](https://forum.jiki.io/t/714)) had no Croatian entry. Every rendering below is an agent draft agreed by the owner on the strength of the sourcing, and the pinned glossary thread exists to get it corrected. A later pass may revise any of it on a native speaker's word, with no row protected by "Glossary writes are additive" until a speaker has actually signed one off.

#### The two things most worth a native speaker's eyes

**1. `interpreter` = `tumač`.** This is the highest-stakes and lowest-confidence row in the file. The course makes Jiki *be* the interpreter, so the word has to name a **person doing a job**, not a program. Every Croatian source consulted (HJP, hr.wikipedia, Srce course handbooks, PMF material) locks `interpreter` and `interpretator` to the software, and `interpreter` additionally means a musical performer; `prevoditelj` is the standard Croatian word for a **compiler**, so it is worse than useless here. `tumač` is the only candidate whose primary sense is a person who interprets, but its everyday association is the court or spoken-language interpreter (`sudski tumač`), so a bare label risks reading legalistic. The mitigation written into the row is to lean on the framing (`tvoj tumač je Jiki`, `njegov je posao tumačiti kôd`) rather than the noun alone. If a native speaker rejects it, there is no obvious second choice and the row will need real discussion rather than a swap.

**2. The `ti` register.** Croatian software localization has split, and the split runs straight through our use case: software addressing a user says `vi` (Microsoft's Croatian style guide mandates it, Moodle `hr` follows, Srce goes further into impersonal constructions), while brands and ed-tech addressing one learner say `ti`. `ti` was chosen for the Jiki voice on the strength of Firefox `hr` (a professionally maintained, human, pre-LLM locale that is 100% `ti`), A1 Hrvatska, Netflix `hr`, and programiraj.hr, which is the closest Croatian structural analogue to Jiki. It remains the **minority convention in Croatian software**, so a reviewer trained on the Microsoft house style may object; Firefox is the precedent to cite if so.

#### Why the register choice forced a gender rule

Croatian past tense and adjectives agree with the addressee's gender, so choosing `ti` means every "You've written..." would otherwise assign the reader a gender. The rule in `guide.md` (stay in present, imperative or future; move agreement onto the object; never write slash forms on a verb) is not a stylistic preference: the EU Parliament's Croatian gender-language guidance and Microsoft's Croatian style guide arrive at the same three workarounds independently, and IHJJ's advisers reject `napisao/la si`-type forms as unreadable. Choosing `vi` would have dodged this, which is a real cost of the decision above.

#### The sources this rests on

Orthography and grammar: `pravopis.hr` (IHJJ's 2013 *Hrvatski pravopis*), `jezicni-savjetnik.hr`, Hrvatski jezični portal (`hjp.znanje.hr`), Hrvatska enciklopedija, and Z. Babić on declining foreign names (*Jezik* 38, via Hrčak). Localization corpora, downloaded and searched rather than sampled: the Microsoft Croatian Style Guide (2016), the Firefox `hr` locale (human team credited since 2004), Moodle `hr` 3.11 (2021) and 4.5, and Scratch `hr`. Academic and institutional: Srce's course handbooks (D450 Python, C502 JavaScript), FER Zagreb, PMF, FOI, and the national Informatics curriculum (NN 22/2018). Practitioner press with a human editorial history: Bug.hr (published since 1995), VIDI, `.debug`.

**One negative finding worth recording, because it will otherwise be rediscovered.** Struna (`struna.ihjj.hr`), the Croatian national terminology database and the obvious place to look, is **not usable for computing terms**: it has no populated computer-science domain, its apparent hits sit under unrelated fields, and it is prescriptive, listing coinages practitioners do not use. Three separate research threads hit this independently. Do not treat its absence of a term as evidence, and do not adopt a Struna coinage over attested usage.

Material was filtered against the pre-2022 human-authored rule. Discarded as likely machine-generated: tr-ex.me, techdico and similar aggregators, and a set of Croatian SEO and listicle sites with no bylines (liber-media.hr, puni.hr, nastava.hr, kakosepise.com.hr among them).

#### Loanwords: the ordinary word wins, in both directions

`global/voice.md`'s ordinary-word principle decided a whole class of rows at once, and it cuts both ways for Croatian. Where Croatian genuinely says the borrowing, the borrowing is right (`softver`, `hardver`, `bug`, `framework`, `chat`, `bootcamp`, `biblioteka`), and the purist coinages were rejected (`programčić`, `očvrsje`, `poslužilac`, `prebirnik`, `knjižnica` for a code library). The cleanest evidence found: the Firefox `hr` package contains `programčić` **only inside its bundled spelling dictionary and never in a UI string**, which is exactly the in-the-dictionary-not-in-the-product distinction the principle is about. But where the native word genuinely won, it is kept (`računalo`, `datoteka`, `preglednik`, `poslužitelj`, `postavke`, `kolačići`), so this is not a general licence to reach for English.

#### Guarding against Serbian, and against overcorrection

Croatian sits next to Serbian in a model's weights, and a Croatian reader spots Serbian forms instantly, so several rows exist only to hold a line: `računalo`, `stroj`, `polje`, `točno`, `uvjet`, `iznimka`, `objekt`, `doseg`, `usporedba`, `pogreška`, `tijelo funkcije`, `labirint`, `izvanzemaljac`, `traper`, `slijepa ulica`. The structural markers (ijekavian, `-irati` verbs, the infinitive rather than `da` + present) are rules and live in `guide.md` instead. The overcorrection trap is recorded in the same place: `računarstvo` is correct Croatian for computer science and must not be "fixed" to `računalstvo`, and hypercorrect purism is as wrong as Serbianism.

#### Individual calls worth recording

- **`polje` for array.** `niz` is both the Serbian choice and already needed for `niz znakova` (string), so it would have collided twice. The residual cost is that `polje` also means a form field, handled in the row's note.
- **`rječnik` for dictionary.** `mapa`, the obvious-looking cognate, is Croatian for a **folder**.
- **`tečaj` for course, never `kolegij`.** Moodle `hr` says `e-kolegij` because it was localized for Srce's university system, where a course is a degree module. Wrong register for a commercial learn-to-code product.
- **`Naslovnica` for dashboard.** The attested Firefox rendering `nadzorna ploča` contains `ploča`, which is the whiteboard metaphor, and shipping both would put one word on two pictures. Moodle `hr` already ships `Moja naslovnica`, so the alternative is attested rather than invented.
- **`etapa` for milestone.** Reasoned for Croatian on its own terms and not inherited from Serbian, though it lands on the same word: `etapa` is ordinary Croatian for a numbered leg of a journey or race, `prekretnica` means a turning point (which "Milestone 3" is not), and `postignuće` is spoken for by the separate Achievements feature.
- **`AI`, never `UI`.** Croatian genuinely has not settled this (Bug.hr prints both in its own headlines), and `UI`, the "more correct" Croatian abbreviation, collides with user interface on a platform that will discuss both.
- **`stroj`, never `mašina`.** HJP marks `mašina` regional and Serbian. The bonus is `strojić`, a natural warm diminutive that fits the mascot register.
- **`lik` for the game character.** No collision exists in Croatian, because a text character is `znak` and not `karakter`, so `lik` is simply free.
- **`izlazni otvor` for the return chute, and `prorez` for the input slot.** The weakest pair in the metaphor set. Croatian has no everyday noun for a vending-machine delivery chute: `klizište` means a landslide and must never be used, `žlijeb` is standard Croatian and (contrary to the Serbian judgement on the same word) not archaic, but its mental image is a roof gutter, and `tobogan` stacks a playground slide on top of the machine metaphor. `utor` was rejected for the input slot because it is the hardware expansion-slot term.
- **`oble zagrade` for `()`.** A genuine two-way split, both well attested (`oble` in the pravopis and Srce's Python material, `okrugle` in Srce's JavaScript material and in maths). The pravopis tipped it; `okrugle` is arguably more transparent to a beginner, so this is a cheap row to change.
- **`klasa` over `razred`.** A live split in Croatian teaching material, not a Croatian-versus-Serbian question. `razred` appears in purist OOP courses, `klasa` dominates elsewhere.
- **`izvršiti` and `pokrenuti` are not synonyms**, and the row says so: executing code and launching a program are different actions in Croatian.

#### Terms deliberately left out

Per the no-provisional-section rule, a term is either agreed or absent. Left out for want of any defensible Croatian evidence, to be added once a native speaker rules: **`toggle`** (no Croatian attestation was found in any source, for either the noun or the verb), **`streak`** (the natural `niz` collides with `niz znakova`), **`track`** and **`pathway`** (product coinages with no Croatian precedent, and no way to keep them apart), **`shade`** (collides with `nijansa`, already used for hue), and **`foot-gun`**. Names for `&`, `|` and the backtick are also absent: no authoritative source names them, and Croatian technical writing prints the glyph, so `guide.md` and the Brackets table say to show the glyph rather than coin a name.

Rows flagged in the report as lowest-confidence beyond the two headline items, and worth a speaker's attention on the thread: `osvijetljenost`/`svjetlina` (lightness against brightness), `platno` (canvas), `rezervirano mjesto` (placeholder), `uvlaka` (indentation), `objaviti`/`postaviti u produkciju` (deploy), and `izbacivač` against `zaštitar` for the bouncer, which is a register call rather than a correctness one.
