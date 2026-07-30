---
lang: "hu"
name: "Hungarian"
family: null
governance_sha: "b05a910"
content_version: "7c084172c5ce"
published_at: "2026-07-30"
term_count: 146
forum_topic_id: 289
---

# Hungarian (hu) glossary

The agreed term list for Hungarian. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| programming / coding | **programozás** | hu | Use `programozás` consistently. `kódolás` is acceptable only when the source specifically stresses the casual act of writing code. Never mix both in one document. |
| streak | sorozat | hu | |
| tech / tech industry | tech-ipar | hu | Not _technológiai ipar_. |
| developer | fejlesztő | hu | |
| mental model | gondolati modell | hu | Not _mentális modell_. |
| loom (metaphorical: something looming) | szövőszék | hu | |
| dopamine hit | dopaminlöket | hu | Informal register. Not _dopaminroham_. |

## Localize (use the Hungarian term)

These are terms where the Hungarian is used in prose, so the "Use (hu/en)" column is `hu` throughout.

### Learning platform

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| exercise | feladat | hu | |
| lesson | lecke | hu | |
| course / track | kurzus | hu | Covers both the whole Jiki course (_Ebben a kurzusban_ = "In this course") and a curriculum track. |
| concept (learning unit) | fogalom | hu | Concept Library = Fogalomtár. Not koncepció. |
| task (within an exercise) | részfeladat | hu | Distinct from feladat (the exercise itself). |
| challenge (feature) | kihívás | hu | |

### Values & data types

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| value | érték | hu | |
| number | szám | hu | |
| true / false | igaz / hamis | hu | Not capitalised in prose. |
| character | karakter | hu | A text character. |
| integer | egész szám | hu | |
| float / decimal | tizedes tört | hu | Or _lebegőpontos szám_ if the floating-point nature matters. |
| array | tömb | hu | |
| data type | adattípus | hu | |
| compound data type | összetett adattípus | hu | Distinct from plain data type. |
| data structure | adatszerkezet | hu | |
| type (data type, in prose) | típus | hu | |
| letter (of a string) | betű | hu | Distinct from karakter (text character). |
| index | index | hu | No clarification parens needed. |
| dictionary | szótár | hu | If glossed, gloss in the singular (_dictionary_), even when the Hungarian noun is plural (_szótárak_). |
| key (dictionary key) | kulcs | hu | If glossed, gloss in the singular (_key_), even when the Hungarian noun is plural (_kulcsoknak_). |
| key-value pair | kulcs-érték pár | hu | |
| entry (dictionary entry) | bejegyzés | hu | |
| constant | konstans | hu | |
| identifier | azonosító | hu | |

### Functions & control flow

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| if statement | elágazás | hu | Plural: _elágazások_. |
| condition | feltétel | hu | Stands alone; no gloss needed. |
| condition is true / false | a feltétel igaz / hamis | hu | A Hungarian condition needs an explicit predicate; see `guide.md`. |
| comparison | összehasonlítás | hu | Stands alone; no gloss needed. |
| operator | operátor | hu | |
| expression | kifejezés | hu | |
| statement (executable) | utasítás | hu | The imperative sense: a line of code that does something and gets executed. Shares the word with "instruction (given to Jiki)" below. |
| statement (logical claim) | állítás | hu | The proposition sense: a claim that is true or false; also a test assertion. Pick by meaning, not by the English word. |
| instruction (given to Jiki) | utasítás | hu | What the learner puts on the board for Jiki to follow (_utasításokat írsz fel egy táblára_). Everyday Hungarian, not a legal-register word. Deliberately the same word as "statement (executable)". |
| function | függvény | hu | The *keyword* `function` in code stays English; the concept in prose is _függvény_. |
| to call (a function) | meghív | hu | _függvényt meghív_ |
| to define (a function) | definiál / létrehoz | hu | |
| brackets (the two after a function name) | zárójel | hu | _a két zárójel_ for the `()` pair written after a function name. Which bracket type to name, and when, is in the Brackets section below. |
| input (to a function) | bemenet | hu | |
| output | kimenet | hu | |
| to return (a value) | visszaad | hu | „30-at ad vissza." The bracketed `<define>` gloss word must be _return_, never _returning_. |
| return value | visszatérési érték | hu | |
| parameter | paraméter | hu | The declaration-site name. |
| argument | argumentum | hu | The call-site value; _argumentum_ over _paraméter_ when the call-site value is meant. |
| to declare / declaration | deklarál / deklaráció | hu | |
| initializer | kezdőérték | hu | Not _inicializáló_. |
| caller | hívó | hu | |
| interpreter | értelmező | hu | **A person doing a job, not a program.** On concept pages Jiki *is* the interpreter (_a te értelmeződ Jiki_, _Az ő dolga, hogy értelmezze a kódot_). Never _értelmezőprogram_ (machine-only), and never _tolmács_ (a human spoken-language interpreter, a different job). |
| function body | függvény törzse | hu | |
| string concatenation | string-összefűzés | hu | Verb: összefűz. |
| string template | string-sablon | hu | The prose concept. The JS construct's own name (_template literal_ / _template string_) stays English; see "Keep in English". |
| placeholder | helyőrző | hu | |
| to update (a variable/dict) | frissít | hu | |
| syntax | szintaxis | hu | |
| (programming) language | (programozási) nyelv | hu | Use it including in the "a language a computer understands" framing. Never the English borrowing. |
| and / or (logical, in prose) | és / vagy | hu | The keywords and/or/`&&`/`\|\|` stay English. Rarely needs a `<define>` gloss at all; if the source does gloss it, the bracket may show the bare English word right after (_és_ (`and`)) rather than a full "angolul" explanation. |
| equal sign | egyenlőségjel | hu | Even on `<define>`, no "angolul" gloss needed. |
| ampersand (`&`) | és-jel | hu | On `<define>`, show the glyph itself (`&`) in the bracket, not the English word "ampersand". |
| bar / vertical bar (`\|`) | függőleges vonal | hu | The `\|\|` keyword stays English. On `<define>`, show the glyph itself (`\|`) in the bracket, not the English word "bar". |
| pure (function) | tiszta | hu | _tiszta függvény_ = pure function. When glossed, gloss the full term _pure function_, not the bare adjective _pure_. |
| scenario (exercise test case) | forgatókönyv | hu | Also the concept title. |

### Loops, state & program flow

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| keyword | kulcsszó | hu | |
| variable | változó | hu | |
| assignment | értékadás | hu | |
| to assign | hozzárendel | hu | |
| code block | kódblokk | hu | |
| error | hiba | hu | |
| nested | egymásba ágyazott | hu | e.g. _egymásba ágyazott ciklus_ = nested loop. When glossed, gloss the full term (_nested loop_), not the bare adjective _nested_. |
| iteration | iteráció | hu | Verb: _iterál_; „végigmegy rajta" also natural. |
| element | elem | hu | Array element = _tömb eleme_. |
| to run / execute (code) | lefuttat / lefut | hu | |
| loop | ciklus | hu | _ciklus_, not _hurok_. |
| for loop | `for` ciklus | hu | Keep `for` in backticks (real keyword) + _ciklus_. |
| while loop | `while` ciklus | hu | Keep `while` in backticks + _ciklus_. |
| for-of loop | `for-of` ciklus | hu | |
| loop body | ciklus törzse | hu | |
| inner loop / outer loop | belső ciklus / külső ciklus | hu | |
| loop variable | ciklusváltozó | hu | |
| increment (for-loop) | léptetés | hu | |
| indentation | behúzás | hu | Verb: behúz. |
| method | metódus | hu | |
| property | tulajdonság | hu | |
| object | objektum | hu | |
| state | állapot | hu | |

### Tooling & engineering

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| workflow | munkafolyamat | hu | |
| pitfall | buktató | hu | Stands alone; no gloss needed. |
| auth (authentication / authorization) | hitelesítés | hu | Covers both _autentikáció_ and _autorizáció_. |
| deploy (verb: to deploy) | élesít | hu | „Élesítsd" for imperative; also „élesítés" as noun. Not „telepítsd ki". |
| framework | keretrendszer | hu | Use _keretrendszer_ exclusively; never revert to _framework_. |
| component | komponens | hu | No gloss needed. Use _komponens_, not _összetevő_. |
| tool | eszköz | hu | Use it in prose. The mass noun _tooling_ stays English; see "Keep in English". |

### Colours & graphics

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| hue | színárnyalat | hu | Not árnyalat (reserved for "shade of a colour"). |
| saturation | telítettség | hu | |
| lightness | világosság | hu | Distinct from fényerő (brightness). |

### App & product UI

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| plan (subscription tier) | csomag | hu | Not terv. |
| subscription | előfizetés | hu | |
| to unlock | felold | hu | Noun: feloldás; locked state: zárolva. |
| badge | jelvény | hu | |
| achievements | eredmények | hu | |
| certificate | tanúsítvány | hu | |
| account | fiók | hu | |
| dashboard | irányítópult | hu | Not vezérlőpult. |
| session (auth) | munkamenet | hu | |
| support (customer) | ügyfélszolgálat | hu | |
| cookies | sütik | hu | |
| debugging | hibakeresés | hu | |
| breakpoint | töréspont | hu | |

## Keep in English

These stay in English in Hungarian prose, with the Hungarian gloss to use for each.

| Term | Hungarian gloss (on `<define>`) | Notes |
|------|----------------------------------|-------|
| string | _karakterlánc_ | Exception: the string concept itself uses _karakterlánc_ where the source defines it, then _string_ throughout. |
| scope | _hatókör_ (or _láthatóság_) | Exception: the scope concept uses the Hungarian where the source defines it, then _scope_ throughout. |
| Boolean | _logikai érték_ | Exception: where the source defines it, gloss as _logikai érték_, then _Boolean_ throughout. |
| API | explain what it is in Hungarian | Where defined, explain the concept in Hungarian, not just gloss the acronym. |
| tooling (mass noun) | _tooling_ | The countable _tool_ is localized as _eszköz_; see "Tooling & engineering". |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| CLI (the concept) | parancssori felület | Explain CLI as _parancssori felület_ (command-line interface) where the source defines it. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |
| template literal / template string | (no gloss) | The JS construct's own name. The general prose concept is _string-sablon_; see "Functions & control flow". Suffix e.g. template stringben. |
| backtick | (show the glyph) | |
| AI | _mesterséges intelligencia_ | Use "AI" (not MI) in prose/marketing. Compounds: AI-segítség, AI-ügynökök. |
| LLM | explain in Hungarian | Suffix e.g. LLM-korszak. |
| widget | _widget_ | |
| chat | (no gloss) | |

## Jiki physical metaphors

Load-bearing teaching terms.

| English metaphor | Hungarian rendering | Notes |
|-------------------|----------------------|-------|
| box (value container) | doboz | |
| chain (array metaphor) | lánc | Link = _láncszem_. |
| machine (function metaphor) | gép | A function is one of Jiki's _kis gépei_. |
| input slot | bemeneti nyílás | |
| return chute | kimeneti csúszda | |
| crank (machine crank) | kar | Jiki _megtekeri a karját_ to power a machine up. Not _forgattyú_. |
| shelves (storage) | polc | Jiki's machines sit on a _polc_. |
| warehouse (Jiki's warehouse) | raktár | Where Jiki hangs out and keeps his machine shelf (_Jiki raktára_). |
| board / whiteboard | tábla | **One object, one word.** The board the learner writes instructions on for Jiki to come along and follow, and the board a function keeps its own instructions and notes on, are the same _tábla_. |
| character (game/maze figure) | figura | Keep _karakter_ for a text character (see "Values & data types"); _figura_ is the on-screen game figure. |

## Brackets

| Glyph | Hungarian | Notes |
|-------|-----------|-------|
| `()` | zárójel · kerek zárójel | Plain _zárójel_ by default; add _kerek_ + glyph only when disambiguating. |
| `[]` | szögletes zárójel | |
| `{}` | kapcsos zárójel | |
| `<>` | csúcsos zárójel (or _hegyes zárójel_) | |

How to phrase a bracket in running prose is in `guide.md`.

---

## Decision log

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind Hungarian:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have, and
  several collided with their own word for `array` trying. Hungarian renders both as
  **tábla**: the ordinary word for a board in a room, with no collision with _tömb_.
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. Several languages had reached
  for their term for interpreter *software*, which cannot. **Hungarian did not change:**
  _értelmező_ was already right, because it is a plain `-ő` agent noun that takes a person
  naturally. What changed is that the row now says so, and rules out _értelmezőprogram_
  (machine only) and _tolmács_ (a human spoken-language interpreter, a different job).
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: Hungarian glossary filled out and its self-contradictions fixed

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**One rendering changed.** `tool` moved from "Keep in English" to **eszköz**, applying the
ordinary-word principle above: _eszköz_ is the everyday Hungarian word and Hungarian prose
uses it. The mass noun `tooling` stays English, which is what Hungarian tech writing
actually does, so the old single `tool / tooling` row was split in two.

**Twenty rows added**, filling gaps the concept-page pass hit rather than changing any
existing decision:

- Terms the using-functions page needed: `instruction (given to Jiki)`, `mental model`,
  `(programming) language`, `brackets (the two after a function name)`, `input (to a
  function)`, and the metaphor rows `machine`, `crank`, `shelves`, `warehouse`,
  `board / whiteboard`.
- Ordinary words that were being used consistently in translations but had never been
  written down: `value`, `number`, `true / false`, `character`, `condition`, `comparison`,
  `operator`, `error`, `statement (logical claim)`.
- `condition is true / false` was promoted out of a "Provisional terms" section, which was
  deleted. The section contradicted the file's own claim that everything in it is agreed.

**Eight self-contradictions fixed**, all note or placement problems rather than new
renderings:

- `tool / tooling` sat under "Keep in English" while its own gloss told you to say
  _eszköz_ (split, see above).
- `template literal / template string` was kept English but glossed "_string-sablon_
  conceptually". The JS construct's name (English, no gloss) is now separate from the prose
  concept `string template` (_string-sablon_).
- `chat` was kept English but carried _csevegés_ as its gloss, while its own note said
  _csevegés_ reads dated. The gloss is gone.
- `character (game/maze figure)` said _karakter_ needed no glossary entry, at the same time
  as _karakter_ was being added as one. It now points at the row.
- `statement (executable)` and `instruction (given to Jiki)` share _utasítás_ deliberately.
  Hungarian has one ordinary word for both and coining a second would read worse, so both
  rows now say so instead of looking like a collision.
- `interpreter`, `string template` and `course / track` had empty notes, so nothing
  recorded why they were chosen or what they cover.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`, `tool`) is not
repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| tech / tech industry | Hybrid (English "tech" + Hungarian "ipar"). Established in Hungarian tech media. _Technológiai ipar_ is too formal. |
| developer | Standard Hungarian equivalent. |
| mental model | The picture-in-your-head framing (_ezt a gondolati modellt építettem fel_). _Mentális modell_ reads clinical. |
| loom | Literal translation; the metaphor works naturally in Hungarian. |
| dopamine hit | Fits the lighter register. _Dopaminroham_ is an alternative, but heavier. |

#### Learning platform

| Term | Why |
|------|-----|
| exercise | Recurs across all content. |

#### Values & data types

| Term | Why |
|------|-----|
| value, number | Ordinary Hungarian words. |
| array | Standard HU term. |
| index | The same word in both languages, so nothing needs clarifying. |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary Hungarian words, so they stand alone. |
| statement (executable) | Standard HU CS term. |
| instruction (given to Jiki) | Hungarian has one ordinary word for this and for "statement (executable)", and coining a second would read worse. |
| initializer | _kezdőérték_ is beginner-friendly; _inicializáló_ is not. |
| (programming) language | Ordinary Hungarian word. |
| equal sign | Ordinary word, so even a `<define>` needs no "angolul". |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| state | Standard HU CS term. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| pitfall | Ordinary Hungarian word, so it stands alone. |
| auth | _hitelesítés_ is the standard Hungarian for both autentikáció and autorizáció. |
| deploy | _telepítsd ki_ reads more as installation than go-live. |
| component | Common Hungarian tech vocabulary, so no gloss is needed. |

#### App & product UI

| Term | Why |
|------|-----|
| plan (subscription tier) | _csomag_ enables "{tier} csomag"; _terv_ does not. |

#### Keep in English

| Term | Why |
|------|-----|
| API | Not a word a beginner knows, so the concept has to be explained, not just the acronym expanded. |
| tooling (mass noun) | Used as-is in Hungarian tech writing. |
| backtick | HU tech writing keeps the English word. |
| AI | Owner decision: "AI" in prose and marketing copy, not the purist _MI_. |
| widget | Established in HU tech writing. |
| chat | _chatelni_ is fully nativized and _csevegés_ reads dated for this audience, so a gloss would teach nothing. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Plain Hungarian word for "box"; direct and concrete. |
| chain | Standard Hungarian for a physical chain. |
| machine | Plain word. |
| input slot | _bemenet_ (input) + _nyílás_ (a slot/opening). |
| return chute | _kimenet_ (output) + _csúszda_ (a slide/chute, the same word used for a playground slide). |
| crank | _Kar_ is the ordinary word for a handle or lever; _forgattyú_ is engine jargon. |
