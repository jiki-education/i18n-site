---
lang: "fi"
name: "Finnish"
family: null
stage: "setup"
governance_sha: "f33003b"
content_version: "b57550965a3e"
published_at: "2026-07-31"
term_count: 117
---

# Finnish (fi) glossary

The agreed term list for Finnish. Why each term was chosen, and who chose it, is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Finnish | Use (fi/en) | Notes |
|---------|---------|-------------|-------|
| programming / coding | **ohjelmointi** | fi | Use `ohjelmointi` consistently. `koodaus` only where the source specifically stresses the casual act of writing code. Never mix both in one document. The person is a _kehittäjä_; `koodari` is casual and fits marketing copy, not concept pages. |
| tech / tech industry | teknologia-ala | fi | Not _IT-ala_ (older and wider) and not the bare English _tech_. |
| mental model | ajatusmalli | fi | The picture-in-your-head framing. Not _mentaalimalli_, which is academic psychology. |
| pitfall | sudenkuoppa | fi | Vivid everyday Finnish. Not a calque of "pitfall". |

## Localize (use the Finnish term)

These are terms where the Finnish is used in prose, so the "Use (fi/en)" column is `fi` throughout.

### Values & data types

| English | Finnish | Use (fi/en) | Notes |
|---------|---------|-------------|-------|
| number | luku | fi | **Never _numero_**, which means a digit or an identifying number (as in _puhelinnumero_). This is the most common single error in Finnish beginner material. |
| float / decimal | desimaaliluku | fi | The beginner-facing word. Use _liukuluku_ only where the floating-point representation itself is the point. |
| character (text) | merkki | fi | Covers digits, spaces and punctuation too. For the on-screen figure see "character (game/maze figure)" under the metaphors. |
| letter (of a string) | kirjain | fi | Distinct from _merkki_. |
| true / false | tosi / epätosi | fi | Lowercase in prose. The literals `true`/`false` in code stay English. |
| Boolean | totuusarvo | fi | Localized, not kept English: _totuusarvo_ ("truth value") teaches the idea better than the English word does. The type name in code stays `Boolean`. |
| string | merkkijono | fi | Native compound and completely dominant in Finnish material. The loan _stringi_ is slang; do not use it. |
| array / list | taulukko | fi | Also covers the source's informal "list" for the same concept. Keep _lista_ for an everyday list of things in prose. Watch the near-collision with _taulu_; the board metaphor is deliberately _tussitaulu_, never bare _taulu_. |
| element | alkio | fi | An element of a taulukko. Not _elementti_, which is HTML/DOM vocabulary. |
| position (in a string/array) | paikka | fi | The beginner-facing word taught before and alongside _indeksi_ („paikat alkavat nollasta"). |
| dictionary | sanakirja | fi | Carries the look-up-a-word picture the source teaches. Not _hakemisto_ (also means "directory") and not the academic _hakurakenne_. |
| identifier | tunnus | fi | The name of a variable or function. Not _tunniste_. |
| compound data type | koosteinen tietotyyppi | fi | Distinct from a plain _tietotyyppi_. |
| ones and zeros | ykkösiä ja nollia | fi | Spelled out as words, not digits; this is what Finnish popular tech writing says. |

### Functions & control flow

| English | Finnish | Use (fi/en) | Notes |
|---------|---------|-------------|-------|
| if statement | `if`-lause | fi | Finnish names a statement after its keyword: _`if`-lause_, _`else`-haara_. The generic concept word is _ehtolause_. Not _ehtorakenne_, which is Python/indentation framing and does not fit a brace language. |
| condition is true / false | ehto on tosi / epätosi | fi | A Finnish condition needs an explicit predicate; see `guide.md`. |
| statement (executable) | lause | fi | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | väite | fi | The proposition sense: a claim that is true or false; also a test assertion. Finnish separates the two senses cleanly where English does not, so pick by meaning and there is no ambiguity. |
| instruction (given to Jiki) | ohje | fi | What the learner puts on the board for Jiki to follow (_annat Jikille oikeat ohjeet_). Everyday Finnish. Not _käsky_ (an order) and not _komento_, which is the word for a command in code. |
| to call (a function) | kutsua | fi | Takes the partitive: _kutsua funktiota_, never _kutsua funktioon_. The noun is _funktiokutsu_. |
| to define (a function) | määritellä | fi | Noun: _määrittely_. Keep distinct from _esitellä_ (to declare). |
| argument | argumentti | fi | The call-site value, against _parametri_ at the declaration site. Finnish course material often says _todellinen parametri_ / _muodollinen parametri_ instead; that pairing is heavier than this course wants, so use _parametri_ and _argumentti_. |
| input (to a function) / output | syöte / tuloste | fi | The standard Finnish pair. Use _tulos_ where the source means the computed result rather than what comes out of the machine. |
| to return (a value) | palauttaa | fi | The noun is _paluuarvo_. „palauttaa 30:n". The bracketed `<define>` gloss word must be _return_, never _returning_. |
| to declare / declaration | esitellä / esittely | fi | Careful: _esitellä_ also means "to introduce" in everyday Finnish, so keep the sentence around it unambiguous. |
| initializer | alkuarvo | fi | The starting value given at declaration. The verb is _alustaa_. |
| built-in | valmis | fi | _valmis funktio_ reads naturally to a beginner. _sisäänrakennettu_ is the literal rendering and reads heavy. |
| function body | funktion runko | fi | Two words (genitive plus noun), not a compound. |
| interpreter | tulkki | fi | **A person doing a job, not a program.** Finnish _tulkki_ is first and foremost a human interpreter, and it was borrowed into computing unchanged, so Jiki *is* the _tulkki_ (_sinun tulkkisi on Jiki_, _hänen tehtävänsä on tulkita kirjoittamaasi koodia_). Never _ohjelmatulkki_ (software only). |
| pure (function) | puhdas | fi | _puhdas funktio_. When glossed, gloss the full term _pure function_, not the bare adjective. |
| placeholder | paikkamerkki | fi | A slot in a string template that gets filled with a value. |
| brackets (the two after a function name) | sulkeet | fi | _sulkeet_ for the `()` pair written after a function name. Which bracket type to name, and when, is in the Brackets section below. |
| equal sign | yhtäläisyysmerkki | fi | |
| ampersand (`&`) | et-merkki | fi | On `<define>`, show the glyph itself (`&`) in the bracket, not the English word "ampersand". |
| bar / vertical bar (`\|`) | pystyviiva | fi | The `\|\|` keyword stays English. On `<define>`, show the glyph (`\|`) in the bracket, not the English word "bar". |
| bang (the `!` character) | huutomerkki | fi | Finnish has no equivalent of the English slang "bang". Render the source's aside as a remark about what the sign is called, never as a loan. |
| NOT operator / logical negation | negaatio | fi | _negaatio_ for the concept, _ei_ when reading the operator aloud. The `!` keyword stays English. |
| `move` (machine/identifier gloss) | liiku | fi | The one-time explanatory gloss when the `move` machine is introduced by name in prose. The code token `move()` itself stays English. Imperative, matching the guide's fixed _käänny vasemmalle_ (`turnLeft`) and _käänny oikealle_ (`turnRight`). |
| (programming) language | ohjelmointikieli | fi | One word, always. Use it including in the "a language a computer understands" framing. |

### Loops, state & program flow

| English | Finnish | Use (fi/en) | Notes |
|---------|---------|-------------|-------|
| loop | silmukka | fi | Keyword compounds take a hyphen: _`for`-silmukka_, _`while`-silmukka_. Not _toistorakenne_ (school-curriculum register). **Never _silmukka_ for the link of a chain**; see the metaphors. |
| loop body | silmukan runko | fi | Two words, not a compound. |
| iteration | kierros | fi | One pass of a loop is a _kierros_, which is concrete and beginner-friendly. Use _iteraatio_ only where the source is being technical about the concept itself; the verb is _käydä läpi_ or _iteroida_. |
| nested | sisäkkäinen | fi | _sisäkkäinen silmukka_. When glossed, gloss the full term (_nested loop_), not the bare adjective. |
| assignment / to assign | sijoitus / sijoittaa | fi | Finnish says the value is placed *into* the variable (_sijoitat arvon muuttujaan_), which fits the box metaphor exactly. |
| to run / execute (code) | suorittaa | fi | _ajaa_ is the colloquial "run it" and is fine in an aside; use _suorittaa_ for the concept. |
| increment (for-loop) | kasvattaa | fi | _kasvattaa yhdellä_. Not _inkrementoida_. |
| modulo / remainder operator | jakojäännös | fi | The operator's own name is `%`; _modulo_ only where the source names the operator. |
| concatenation / to concatenate | yhdistäminen / yhdistää | fi | Not _konkatenoida_, which is academic register. |
| indentation | sisennys | fi | The verb is _sisentää_. |
| exception | poikkeus | fi | Distinct from _virhe_, the general word for an error. |
| code block | lohko | fi | _koodilohko_ where the context needs it. Keep distinct from _näkyvyysalue_. |
| scope | näkyvyysalue | fi | Localized, not kept English: Finnish course material uses it and beginners parse it. |
| state / stateful | tila | fi | Not _status_. |
| object | olio | fi | The established Finnish term and a genuinely native word. Not _objekti_, which reads as a calque. |

### Tooling & engineering

| English | Finnish | Use (fi/en) | Notes |
|---------|---------|-------------|-------|
| debugging | debuggaus | fi | The activity, and what Finnish developers and Finnish course pages actually say. _virheenjäljitys_ is the formal native term; use it only where the source is being formal. The `Debug` keyword and UI label stay English. |
| bug | bugi | fi | Inflects as a Finnish noun: _bugin_, _bugeja_. The capitalised `Bug` token and UI label stay English. |
| framework | ohjelmistokehys | fi | Use it exclusively; never revert to _framework_ or the slangy _frameworkki_. |
| edge case | rajatapaus | fi | Not _reunatapaus_, a calque. |
| auth (authentication / authorization) | tunnistautuminen / valtuutus | fi | Pick by meaning: _tunnistautuminen_ for proving who you are (the user-facing act; _todentaminen_ where the system's side is meant), _valtuutus_ for what you are allowed to do. Not _autentikointi_, which is dev jargon. |
| CLI (the concept) | komentorivi | fi | Fully native and normal Finnish. |
| AI | tekoäly | fi | Localized, unlike most languages here: Finnish prose says _tekoäly_, not "AI". Compounds: _tekoälyapu_, _tekoälyagentit_. |
| LLM | kielimalli | fi | _suuri kielimalli_ where the size is the point. |

### Platform & curriculum vocabulary

| English | Finnish | Use (fi/en) | Notes |
|---------|---------|-------------|-------|
| concept (learning unit) | käsite | fi | Concept Library = _Käsitekirjasto_. Not _konsepti_, which is an idea or a design, not something you learn. |
| exercise | harjoitus | fi | The exercise as a whole. |
| task (within an exercise) | tehtävä | fi | A sub-step of a _harjoitus_; keep the two words distinct, because _tehtävä_ alone is also the everyday word for an exercise. |
| feature (platform capability) | ominaisuus | fi | Deliberately the same word as an object's property. Where a passage discusses both, rephrase rather than coining a second word. |
| track (curriculum path) | oppimispolku | fi | Not the bare _opintopolku_, which is the name of Finland's national education-application service and reads as branding. |
| milestone | välitavoite | fi | Not _virstanpylväs_, which is literary. |
| streak | putki | fi | The Finnish sports and gaming word for an unbroken run; _päiväputki_ for a daily streak. |
| badge | osaamismerkki | fi | The established Finnish term for a digital learning badge. |
| certificate | todistus | fi | The learner-facing completion certificate. _sertifikaatti_ is a TLS certificate; keep them apart. |
| plan (subscription tier) | paketti | fi | Enables „{tier}-paketti". Not _tilaus_, which is the subscription itself. |
| subscription | tilaus | fi | Note _tilaus_ also means an order. |
| "Run Code" (button label) | Suorita koodi | fi | There is no Finnish app UI copy yet (`app/messages/` has only `en` and `hu`), so this row sets the precedent rather than confirming an existing label. Both `hu` and `sv` already translate this label, in sentence case, matching this repo's house style. If Finnish app copy is ever produced, it must match this exactly, or exercise instructions will name a button that does not exist on screen. |
| Dashboard (the page) | koontinäyttö | fi | Same situation: no fi app copy yet, so this sets the precedent and must match the app label exactly if one is ever written. _koontinäyttö_ is the standard Finnish rendering in major localized UIs. Not _kojelauta_ (a car dashboard) and not _hallintapaneeli_ (reads as admin tooling). _etusivu_ was considered and is worth revisiting once a native speaker weighs in. |

### Colours & graphics

| English | Finnish | Use (fi/en) | Notes |
|---------|---------|-------------|-------|
| hue | värisävy | fi | The 0-360 position on the colour wheel. Written in full to keep it apart from _sävy_, which the source also uses casually for a shade. |
| saturation | kylläisyys | fi | Also _värikylläisyys_ where the context needs it. |
| lightness | vaaleus | fi | Distinct from _kirkkaus_ (brightness). |
| shade (of a colour) | sävy | fi | The casual "the shade of colour you want". Kept distinct from _värisävy_. |
| colour wheel | väriympyrä | fi | Not _väripyörä_, which is the UI-widget word. |
| frame (animation) | ruutu | fi | As in _ruutua sekunnissa_. Not _kehys_, which is a picture frame or a stack frame. |

## Keep in English

These stay in English in Finnish prose, with the Finnish gloss to use for each.

| Term | Finnish gloss (on `<define>`) | Notes |
|------|-------------------------------|-------|
| API | explain what it is in Finnish | Where defined, explain the concept, not just the acronym. _ohjelmointirajapinta_ where a one-word gloss is needed. Inflects with a colon: _API:n_, _API:ssa_. |
| widget | _pienoisohjelma_ | Finnish has no natural native word; _vekotin_ and _vempain_ read as jokes. |
| canvas | _piirtoalusta_ | Also the HTML element's name. |
| chat | (no gloss) | Finnish prose says _chat_ / _chatti_. |
| backtick | (show the glyph) | Finnish has no settled name for it. |
| template literal / template string | (no gloss) | The JS construct's own name. |
| Debug, Test | (no gloss) | As keywords, UI labels and technical tokens. |
| Code, Frontend, Backend | (no gloss) | As capitalised tokens and UI labels only. In running prose the ordinary Finnish word is _koodi_, and that is what to write. See _bugi_ and _debuggaus_ under "Tooling & engineering" for the same split. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation, and hang a Finnish head noun off the token rather than inflecting it; see `guide.md`. |

## Jiki physical metaphors

Load-bearing teaching terms.

| English metaphor | Finnish rendering | Notes |
|------------------|-------------------|-------|
| box (value container) | laatikko | The ordinary, child-level word. |
| chain (array metaphor) | ketju | Link = _lenkki_ (_ketjun lenkki_). **Never _silmukka_ for a link**, which is the word for a loop. |
| machine (function metaphor) | kone | A function is one of Jiki's _pieniä koneita_. Not _laite_, which is a device. |
| input slot | syöttöaukko | The opening you drop something into. Reinforces _syöte_ (input). |
| return chute | palautusluukku | Where the value comes back out. Where the slide image matters, write it out: _palautusluiska, kuin pieni liukumäki_. Never _ulostuloaukko_. |
| crank (machine crank) | kampi | Jiki _kääntää kampea_ to power a machine up. Not _kahva_, which is a grip you do not turn. |
| shelves (storage) | hylly | Jiki's machines sit on a _hylly_. |
| warehouse (Jiki's warehouse) | varasto | Where Jiki hangs out and keeps his machine shelf (_Jikin varasto_). |
| workshop (Jiki's workshop) | verstas | The room Jiki works in; the shelves stand in it. Never _työpaja_, which in modern Finnish means a workshop event. |
| board / whiteboard | tussitaulu | **One object, one word.** The board the learner writes instructions on for Jiki to come along and follow, and the board a function keeps its own instructions and notes on, are the same _tussitaulu_. **Never bare _taulu_**, which sits one derivational step from _taulukko_ (array) and will read as its stem. |
| label (on a box/machine) | tarra | The stuck-on sticker. Not _lappu_, which is reserved for the paper metaphor, and not _otsikko_ or _selite_, which are UI vocabulary. |
| coin (number metaphor) | kolikko | |
| piece of paper (string metaphor) | paperilappu | Introduce as _paperilappu_ and shorten to _lappu_ after that. |
| spiral notebook page (dictionary metaphor) | kierrevihkon sivu | The notebook itself is a _kierrevihko_. |
| mini-Jiki | pikku-Jiki | _pikku-_ is the native, warm diminutive. The hyphen is required before a capitalised name, and only the second part inflects: _pikku-Jikin_. |
| character (game/maze figure) | hahmo | _pelihahmo_ where it needs to be explicit. **Never _merkki_**, which is a text character (see "Values & data types"). |
| little man (in the computer) | pieni mies | The figure the concept pages say lives inside the computer and does the work. Distinct from _pikku-Jiki_ (Jiki's own name) and from _hahmo_ (the on-screen game figure). Real alternatives exist (_pikku-ukko_, _pikkumies_) and the figure recurs across concept pages, so this row fixes one rendering. |
| maze | sokkelo | A branching maze with dead ends. Not _labyrintti_, which is a single winding path. |
| cell (grid square) | ruutu | One square of a maze or board grid. Shares _ruutu_ with the agreed `frame (animation)` row under "Colours & graphics"; different domains (grid square vs animation frame) and the collision looks harmless, but it is worth a human eye, because this is the first exercise-family term the precedent applies to (maze now, other grid-based families later). |

## Brackets

| Glyph | Finnish | Notes |
|-------|---------|-------|
| `()` | sulkeet · kaarisulkeet | Plain _sulkeet_ by default; add _kaarisulkeet_ plus the glyph only when disambiguating. |
| `[]` | hakasulkeet | |
| `{}` | aaltosulkeet | |
| `<>` | kulmasulkeet | |

How to phrase a bracket in running prose is in `guide.md`.

---

## Decision log

### 2026-07-31: Two UI-label terms ("Run Code", "Dashboard")

**Decided by:** agent proposal, added on iHiD's instruction. **Status: unconfirmed drafts**, like every other row in this glossary, but with a *second* dependency beyond native-speaker review: there is no Finnish app UI copy at all yet (`app/messages/` holds only `en` and `hu`), so neither row can be checked against a real Finnish label. Both must be confirmed against actual Finnish app strings once those exist, not just read by a native speaker. If the app ever ships a different word, the glossary follows the app, because an exercise instruction that names a button the learner cannot see on screen is worse than an imperfect word.

- **`"Run Code"` (the button label) is `Suorita koodi`.** Sentence case, matching this repo's house style and what `hu` and `sv` already do with the same label. It follows the already-agreed `to run / execute (code)` → _suorittaa_, so nothing new is being decided about the verb; the row exists only to fix the button's exact wording. This sets the precedent rather than confirming an existing label.
- **`Dashboard` (the page) is `koontinäyttö`.** This supersedes the bootstrap entry below, which deliberately left `dashboard` unsettled. _koontinäyttö_ is the standard Finnish rendering used in major localized UIs, which is the agreement the bootstrap pass could not find at the time. _kojelauta_ is rejected (it reads as a car dashboard) and _hallintapaneeli_ is rejected (it reads as admin tooling). _etusivu_ is a genuine alternative, and is the first thing to revisit when a native speaker reviews this glossary.

### 2026-07-31: Three terms from the first Finnish translation passes

**Decided by:** agent translation passes (the `using-functions` concept page and the `maze` exercise-family message catalog), approved for addition by iHiD ("Add them. A human can always disagree."). **Status: unconfirmed drafts**, like every other row in this glossary. No native Finnish speaker has reviewed them.

- **`little man (in the computer)` is `pieni mies`.** The mental-model figure the `using-functions` page puts inside the computer. It is not _pikku-Jiki_ (that is Jiki's own name) and not _hahmo_ (the on-screen game figure in exercises), so it needed its own row. _pikku-ukko_ and _pikkumies_ are genuine alternatives a reviewer may prefer; the row exists because the figure recurs across concept pages and one settled rendering is worth more than a per-page choice.
- **`move` (the machine/identifier gloss) is `liiku`.** Only the one-time explanatory gloss when the machine is introduced by name in prose; the `move()` code token stays English. Imperative, so it matches the form the guide already fixed for its siblings `turnLeft` (_käänny vasemmalle_) and `turnRight` (_käänny oikealle_).
- **`cell` (a grid square) is `ruutu`.** From the maze catalog. This collides with the already-agreed `frame (animation)` → _ruutu_. The domains do not meet (a maze square and a frame per second never appear in one passage), so it is very probably harmless, but it is flagged in the glossary row too because maze is the first exercise family to set this precedent and later grid-based families will follow it.

### 2026-07-31: Language bootstrapped

**Decided by:** agent, from research, running `/bootstrap-language` unattended. **Status: every row is an unconfirmed draft**, and unlike most bootstraps these were not put to the owner term by term either: the pass made the linguistic calls itself from the sources below. No native Finnish speaker has read any rendering in this glossary. A Finnish volunteer offered to help on the forum's language-request thread, so the first review should go to them.

**What the research rested on.** Human-authored, mostly pre-2022 Finnish sources: the University of Helsinki Ohjelmoinnin MOOC (`ohjelmointi-20/-21/-22.mooc.fi`, Finnish original, not a translation), Aalto's Ohjelmointi 1 glossary, the JYU TIM Ohjelmointi 1 and 2 glossaries (Vesa Lappalainen), Arto Wikla's Helsinki course glossaries, the community IT-sanasto, Sanastokeskus TSK's Tietotekniikan termitalkoot, Kotus / Kielitoimiston ohjepankki for register and typography, Jukka Korpela's Nykyajan kielenopas for inflection, and Finnish JavaScript material (Ohjelmointiputka, JYU appro) for the JS-specific words. One machine-degraded source (part of an Aalto glossary fetch) was discarded and its terms re-verified elsewhere.

**Decisions worth recording, because a reviewer will ask about them:**

- **`interpreter` is `tulkki`.** Finnish `tulkki` names a human interpreter first and was borrowed into computing unchanged, so it satisfies the requirement that Jiki *is* the interpreter without any strain. `ohjelmatulkki` is software-only and is ruled out. Finnish also gives the matching pair for free: `kääntäjä` is both a human translator and a compiler.
- **`board / whiteboard` is `tussitaulu`, and bare `taulu` is banned.** Finnish `taulukko` is `array`, and `taulu` is one derivational step away from it, so a learner meeting arrays as `taulukko` will read `taulu` as its stem. `tussitaulu` is the ordinary word for a write-on-with-a-pen board and carries no collision.
- **`array` is `taulukko`, not `lista`.** Finnish course material distinguishes fixed-size `taulukko` from dynamic `lista`, and a JS array is dynamic, so `lista` was arguable. Finnish JavaScript writing nonetheless says `taulukko`, and the course needs `lista` free for an everyday list in prose.
- **`Boolean` and `scope` are localized rather than kept English**, against the pattern most languages here follow. `totuusarvo` ("truth value") teaches the idea better than the English word, and `näkyvyysalue` is what Finnish course material actually uses.
- **`AI` is `tekoäly`**, also against the pattern elsewhere. Finnish prose genuinely says `tekoäly`; keeping "AI" would be the foreign choice here, not the ordinary one.
- **`debuggaus` and `bugi` beat `virheenjäljitys` and `ohjelmointivirhe`**, applying the ordinary-word principle in `global/voice.md`. The native terms are real but formal; Finnish developers and Finnish course pages say the loans.
- **`argument` is `argumentti`, not `todellinen parametri`.** Finnish teaching material commonly pairs `muodollinen parametri` with `todellinen parametri`. That pairing is heavier than this course wants, and it makes `parameter` and `argument` two halves of one phrase rather than two words.
- **`if statement` is `` `if`-lause ``, not `ehtorakenne`.** `ehtorakenne` is what the Python MOOC says, and it is framed around indentation defining the structure. Jiki teaches a brace language, so the keyword-named `` `if`-lause `` (matching `` `for`-silmukka ``) fits better. The generic word `ehtolause` stays available.
- **`instruction` is `ohje`.** „Annat Jikille oikeat ohjeet" is what a Finn would say. `käsky` is an order, and `komento` is already the word for a command in code.
- **`number` is `luku`, never `numero`.** `numero` is a digit. This is the most common mistake in Finnish beginner material and is called out in the guide as well as here.
- **`iteration` is `kierros`** for one pass of a loop, because it is concrete and is what the Finnish MOOC says, with `iteraatio` held back for the technical concept.
- **`track` is `oppimispolku`, not `opintopolku`.** Opintopolku is the name of Finland's national education-application service, so the bare word reads as someone else's branding.
- **`hue` is `värisävy` and `shade` is `sävy`.** Finnish `sävy` covers both, and the colours concept page uses both senses, so the hue term is written out in full to keep them apart.

**Left out deliberately, as genuinely unsettled**, rather than guessed at: `deploy`, `dashboard`, `string template`, and `toggle`. Finnish has no settled rendering for any of them that two independent sources agree on, and a translator meeting one should propose a delta rather than find a coin-flip in this file.
