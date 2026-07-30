---
lang: "hu"
name: "Hungarian"
family: null
governance_sha: "435fd77"
content_version: "df710e91a2dd"
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
| tech / tech industry | tech-ipar | hu | Hybrid (English "tech" + Hungarian "ipar"). Established in Hungarian tech media. "Technológiai ipar" is too formal. |
| developer | fejlesztő | hu | Standard Hungarian equivalent. |
| mental model | gondolati modell | hu | The picture-in-your-head framing (_ezt a gondolati modellt építettem fel_). Not _mentális modell_, which reads clinical. |
| loom (metaphorical: something looming) | szövőszék | hu | Literal translation; the metaphor works naturally in Hungarian. |
| dopamine hit | dopaminlöket | hu | Informal; fits the lighter register. „Dopaminroham" is an alternative but heavier. |

## Localize (use the Hungarian term)

These are terms where the Hungarian is used in prose, so the "Use (hu/en)" column is `hu` throughout. Split by theme for readability; every table below follows the same columns.

### Learning platform

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| exercise | feladat | hu | Recurs across all content. |
| lesson | lecke | hu | |
| course / track | kurzus | hu | Covers both the whole Jiki course (_Ebben a kurzusban_ = "In this course") and a curriculum track. |
| concept (learning unit) | fogalom | hu | Concept Library = Fogalomtár. Not koncepció. |
| task (within an exercise) | részfeladat | hu | Distinct from feladat (the exercise itself). |
| challenge (feature) | kihívás | hu | |

### Values & data types

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| value | érték | hu | Ordinary word. |
| number | szám | hu | Ordinary word. |
| true / false | igaz / hamis | hu | Not capitalised in prose. |
| character | karakter | hu | A text character. |
| integer | egész szám | hu | |
| float / decimal | tizedes tört | hu | Or _lebegőpontos szám_ if the floating-point nature matters. |
| array | tömb | hu | Standard HU term. |
| data type | adattípus | hu | |
| compound data type | összetett adattípus | hu | Distinct from plain data type. |
| data structure | adatszerkezet | hu | |
| type (data type, in prose) | típus | hu | |
| letter (of a string) | betű | hu | Distinct from karakter (text character). |
| index | index | hu | Same word; no clarification parens needed. |
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
| condition | feltétel | hu | Ordinary word; stands alone. |
| condition is true / false | a feltétel igaz / hamis | hu | A Hungarian condition needs an explicit predicate; see `guide.md`. |
| comparison | összehasonlítás | hu | Ordinary word; stands alone. |
| operator | operátor | hu | |
| expression | kifejezés | hu | |
| statement (executable) | utasítás | hu | The imperative sense: a line of code that does something and gets executed. Standard HU CS term. Shares the word with "instruction (given to Jiki)" below. |
| statement (logical claim) | állítás | hu | The proposition sense: a claim that is true or false; also a test assertion. Pick by meaning, not by the English word. |
| instruction (given to Jiki) | utasítás | hu | What the learner puts on the board for Jiki to follow (_utasításokat írsz fel egy táblára_). Everyday Hungarian, not a legal-register word. Deliberately the same word as "statement (executable)": Hungarian has one ordinary word for both, and coining a second would read worse. |
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
| initializer | kezdőérték | hu | Beginner-friendly over inicializáló. |
| caller | hívó | hu | |
| interpreter | értelmező | hu | **A person doing a job, not a program.** On concept pages Jiki *is* the interpreter (_a te értelmeződ Jiki_, _Az ő dolga, hogy értelmezze a kódot_). _Értelmező_ is a plain `-ő` agent noun, so it names whoever does the interpreting and takes a person naturally. Never _értelmezőprogram_ (machine-only), and never _tolmács_ (a human spoken-language interpreter, a different job). |
| function body | függvény törzse | hu | |
| string concatenation | string-összefűzés | hu | Verb: összefűz. |
| string template | string-sablon | hu | The prose concept. The JS construct's own name (_template literal_ / _template string_) stays English; see "Keep in English". |
| placeholder | helyőrző | hu | |
| to update (a variable/dict) | frissít | hu | |
| syntax | szintaxis | hu | |
| (programming) language | (programozási) nyelv | hu | Ordinary Hungarian word, including in the "a language a computer understands" framing. Never the English borrowing. |
| and / or (logical, in prose) | és / vagy | hu | The keywords and/or/`&&`/`\|\|` stay English. Rarely needs a `<define>` gloss at all; if the source does gloss it, the bracket may show the bare English word right after (_és_ (`and`)) rather than a full "angolul" explanation. |
| equal sign | egyenlőségjel | hu | Ordinary word; even on `<define>`, no "angolul" gloss needed. |
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
| state | állapot | hu | Standard HU CS term; listed in `global/terms.md`. |

### Tooling & engineering

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| workflow | munkafolyamat | hu | |
| pitfall | buktató | hu | Ordinary word; stands alone. |
| auth (authentication / authorization) | hitelesítés | hu | Standard Hungarian for autentikáció/autorizáció. |
| deploy (verb: to deploy) | élesít | hu | „Élesítsd" for imperative; also „élesítés" as noun. Prefer this over „telepítsd ki" which reads more as installation than go-live. |
| framework | keretrendszer | hu | Use _keretrendszer_ exclusively; never revert to _framework_. |
| component | komponens | hu | Common Hungarian tech vocabulary; no gloss needed. Use _komponens_, not _összetevő_. |
| tool | eszköz | hu | The ordinary Hungarian word; use it in prose. The mass noun _tooling_ stays English; see "Keep in English". |

### Colours & graphics

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| hue | színárnyalat | hu | Not árnyalat (reserved for "shade of a colour"). |
| saturation | telítettség | hu | |
| lightness | világosság | hu | Distinct from fényerő (brightness). |

### App & product UI

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| plan (subscription tier) | csomag | hu | Not terv. Enables "{tier} csomag". |
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

These stay in English in Hungarian prose, with the Hungarian gloss to use for each. Most are
here because Hungarian tech writing itself uses the English word; the per-row notes say
which, and where the Hungarian alternative reads dated or purist.

| Term | Hungarian gloss (on `<define>`) | Notes |
|------|----------------------------------|-------|
| string | _karakterlánc_ | Exception: the string concept itself uses _karakterlánc_ where the source defines it, then _string_ throughout. |
| scope | _hatókör_ (or _láthatóság_) | Exception: the scope concept uses the Hungarian where the source defines it, then _scope_ throughout. |
| Boolean | _logikai érték_ | Exception: where the source defines it, gloss as _logikai érték_, then _Boolean_ throughout. |
| API | explain what it is in Hungarian | Not a word a beginner knows; where defined, explain the concept in Hungarian, not just gloss the acronym. |
| tooling (mass noun) | _tooling_ | Used as-is in Hungarian tech writing. The countable _tool_ is localized as _eszköz_; see "Tooling & engineering". |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| CLI (the concept) | parancssori felület | Explain CLI as _parancssori felület_ (command-line interface) where the source defines it. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |
| template literal / template string | (no gloss) | The JS construct's own name. The general prose concept is _string-sablon_; see "Functions & control flow". Suffix e.g. template stringben. |
| backtick | (show the glyph) | HU tech writing keeps the English word. |
| AI | _mesterséges intelligencia_ | OWNER DECISION: use "AI" (not MI) in prose/marketing. Compounds: AI-segítség, AI-ügynökök. |
| LLM | explain in Hungarian | Kept English (LLM-korszak). |
| widget | _widget_ | Established in HU tech writing. |
| chat | (no gloss) | Kept English; _chatelni_ is fully nativized and _csevegés_ reads dated for this audience, so a gloss would teach nothing. |

## Jiki physical metaphors

Load-bearing teaching terms.

| English metaphor | Hungarian rendering | Notes |
|-------------------|----------------------|-------|
| box (value container) | doboz | Plain Hungarian word for "box"; direct and concrete. |
| chain (array metaphor) | lánc | Standard Hungarian for a physical chain; link = _láncszem_. |
| machine (function metaphor) | gép | Plain word; a function is one of Jiki's _kis gépei_. |
| input slot | bemeneti nyílás | _bemenet_ (input) + _nyílás_ (a slot/opening). |
| return chute | kimeneti csúszda | _kimenet_ (output, agreed term above) + _csúszda_ (a slide/chute, the same word used for a playground slide). |
| crank (machine crank) | kar | Jiki _megtekeri a karját_ to power a machine up. _Kar_ is the ordinary word for a handle or lever; not _forgattyú_, which is engine jargon. |
| shelves (storage) | polc | Jiki's machines sit on a _polc_. |
| warehouse (Jiki's warehouse) | raktár | Where Jiki hangs out and keeps his machine shelf (_Jiki raktára_). |
| board / whiteboard | tábla | **One object, one word.** The board the learner writes instructions on for Jiki to come along and follow, and the board a function keeps its own instructions and notes on, are the same _tábla_. Ordinary word for a board in a room, and no collision with _tömb_ (array). |
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

The decision log behind `glossary.md`. Each entry records what changed, why, who decided
it, and where. The glossary itself holds only the terms; this file holds the reasoning, so
a later pass can tell a settled decision from an unconfirmed draft.

**Rule 1: read this before changing an existing row.** If an entry below records a human
deciding a term, that term is settled and changing it needs fresh agreement from a human,
raised where it was settled. If nothing below mentions the term, it is an unconfirmed
draft: a pass may correct it, and must append an entry saying what it changed and why.

**Rule 2: a translation pass never loads this file.** A translation needs the term, not the
argument that produced it. This is history, and reading it on every run, in every language,
is pure cost.

The file is append-only and newest first. Never edit or delete an existing entry; to revise
a decision, add a new entry above that says so.

**Only decisions about the language belong here.** Every entry must be something a future
translator needs in order to use a term correctly or to judge whether it may change one.
Changes to how this repo works, to file formats, or to tooling are not decisions about
Hungarian, and are noise to everyone who reads this later. They belong in the commit that
made them.

---

## 2026-07-30: Owner decisions from the 28-language using-functions pass

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

## 2026-07-30: Hungarian glossary filled out and its self-contradictions fixed

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, correctable by a
later pass under Rule 1, except where the entry above governs.

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

**Nothing above has been checked by a Hungarian speaker.**

## 2026-07-11: Forum state, for the record

**No Hungarian term has been confirmed by a Hungarian speaker.**

Verified against the forum: the pinned glossary topic
([t/289](https://forum.jiki.io/t/289)) has two posts, both authored by `system`, and zero
replies. The only human post anywhere in the `i18n-hu` category is a volunteer
introduction from **vinetu** (János, a Computer Science student at ELTE in Budapest, native
Hungarian, self-assessed B2 English) in [t/275](https://forum.jiki.io/t/275), on
2026-07-11. No terms were discussed. The category description in t/265 is the owner's.

So every row in `glossary.md` today is an unconfirmed agent draft, and Rule 1's second
branch applies to all of them. Record the first Hungarian speaker's confirmation here when
it arrives, with the topic and post it came from.
