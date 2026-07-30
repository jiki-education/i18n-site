---
lang: "hu"
name: "Hungarian"
family: null
governance_sha: "1d91ad4"
content_version: "fe1f31bf2a8c"
published_at: "2026-07-30"
term_count: 146
forum_topic_id: 289
---

# Hungarian (hu) glossary

The agreed term list for Hungarian. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement, writes are additive, and the final
`Agreed by` column on every table records who decided each row. The rules for all of that
live in `global/workflow.md` ("Glossary writes are additive"); they are not restated here.

## Core decisions

| English | Hungarian | Use (hu/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| programming / coding | **programozás** | hu | Use `programozás` consistently. `kódolás` is acceptable only when the source specifically stresses the casual act of writing code. Never mix both in one document. | agent |
| streak | sorozat | hu | | agent |
| tech / tech industry | tech-ipar | hu | Hybrid (English "tech" + Hungarian "ipar"). Established in Hungarian tech media. "Technológiai ipar" is too formal. | agent |
| developer | fejlesztő | hu | Standard Hungarian equivalent. | agent |
| mental model | gondolati modell | hu | The picture-in-your-head framing (_ezt a gondolati modellt építettem fel_). Not _mentális modell_, which reads clinical. | agent |
| loom (metaphorical: something looming) | szövőszék | hu | Literal translation; the metaphor works naturally in Hungarian. | agent |
| dopamine hit | dopaminlöket | hu | Informal; fits the lighter register. „Dopaminroham" is an alternative but heavier. | agent |

## Localize (use the Hungarian term)

These are terms where the Hungarian is used in prose, so the "Use (hu/en)" column is `hu` throughout. Split by theme for readability; every table below follows the same columns.

### Learning platform

| English | Hungarian | Use (hu/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| exercise | feladat | hu | Recurs across all content. | agent |
| lesson | lecke | hu | | agent |
| course / track | kurzus | hu | Covers both the whole Jiki course (_Ebben a kurzusban_ = "In this course") and a curriculum track. | agent |
| concept (learning unit) | fogalom | hu | Concept Library = Fogalomtár. Not koncepció. | agent |
| task (within an exercise) | részfeladat | hu | Distinct from feladat (the exercise itself). | agent |
| challenge (feature) | kihívás | hu | | agent |

### Values & data types

| English | Hungarian | Use (hu/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| value | érték | hu | Ordinary word. | agent |
| number | szám | hu | Ordinary word. | agent |
| true / false | igaz / hamis | hu | Not capitalised in prose. | agent |
| character | karakter | hu | A text character. | agent |
| integer | egész szám | hu | | agent |
| float / decimal | tizedes tört | hu | Or _lebegőpontos szám_ if the floating-point nature matters. | agent |
| array | tömb | hu | Standard HU term. | agent |
| data type | adattípus | hu | | agent |
| compound data type | összetett adattípus | hu | Distinct from plain data type. | agent |
| data structure | adatszerkezet | hu | | agent |
| type (data type, in prose) | típus | hu | | agent |
| letter (of a string) | betű | hu | Distinct from karakter (text character). | agent |
| index | index | hu | Same word; no clarification parens needed. | agent |
| dictionary | szótár | hu | If glossed, gloss in the singular (_dictionary_), even when the Hungarian noun is plural (_szótárak_). | agent |
| key (dictionary key) | kulcs | hu | If glossed, gloss in the singular (_key_), even when the Hungarian noun is plural (_kulcsoknak_). | agent |
| key-value pair | kulcs-érték pár | hu | | agent |
| entry (dictionary entry) | bejegyzés | hu | | agent |
| constant | konstans | hu | | agent |
| identifier | azonosító | hu | | agent |

### Functions & control flow

| English | Hungarian | Use (hu/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| if statement | elágazás | hu | Plural: _elágazások_. | agent |
| condition | feltétel | hu | Ordinary word; stands alone. | agent |
| condition is true / false | a feltétel igaz / hamis | hu | A Hungarian condition needs an explicit predicate; see `guide.md`. | agent |
| comparison | összehasonlítás | hu | Ordinary word; stands alone. | agent |
| operator | operátor | hu | | agent |
| expression | kifejezés | hu | | agent |
| statement (executable) | utasítás | hu | The imperative sense: a line of code that does something and gets executed. Standard HU CS term. Shares the word with "instruction (given to Jiki)" below. | agent |
| statement (logical claim) | állítás | hu | The proposition sense: a claim that is true or false; also a test assertion. Pick by meaning, not by the English word. | agent |
| instruction (given to Jiki) | utasítás | hu | What the learner puts on the board for Jiki to follow (_utasításokat írsz fel egy táblára_). Everyday Hungarian, not a legal-register word. Deliberately the same word as "statement (executable)": Hungarian has one ordinary word for both, and coining a second would read worse. | agent |
| function | függvény | hu | The *keyword* `function` in code stays English; the concept in prose is _függvény_. | agent |
| to call (a function) | meghív | hu | _függvényt meghív_ | agent |
| to define (a function) | definiál / létrehoz | hu | | agent |
| brackets (the two after a function name) | zárójel | hu | _a két zárójel_ for the `()` pair written after a function name. Which bracket type to name, and when, is in the Brackets section below. | agent |
| input (to a function) | bemenet | hu | | agent |
| output | kimenet | hu | | agent |
| to return (a value) | visszaad | hu | „30-at ad vissza." The bracketed `<define>` gloss word must be _return_, never _returning_. | agent |
| return value | visszatérési érték | hu | | agent |
| parameter | paraméter | hu | The declaration-site name. | agent |
| argument | argumentum | hu | The call-site value; _argumentum_ over _paraméter_ when the call-site value is meant. | agent |
| to declare / declaration | deklarál / deklaráció | hu | | agent |
| initializer | kezdőérték | hu | Beginner-friendly over inicializáló. | agent |
| caller | hívó | hu | | agent |
| interpreter | értelmező | hu | **A person doing a job, not a program.** On concept pages Jiki *is* the interpreter (_a te értelmeződ Jiki_, _Az ő dolga, hogy értelmezze a kódot_). _Értelmező_ is a plain `-ő` agent noun, so it names whoever does the interpreting and takes a person naturally. Never _értelmezőprogram_ (machine-only), and never _tolmács_ (a human spoken-language interpreter, a different job). | agent |
| function body | függvény törzse | hu | | agent |
| string concatenation | string-összefűzés | hu | Verb: összefűz. | agent |
| string template | string-sablon | hu | The prose concept. The JS construct's own name (_template literal_ / _template string_) stays English; see "Keep in English". | agent |
| placeholder | helyőrző | hu | | agent |
| to update (a variable/dict) | frissít | hu | | agent |
| syntax | szintaxis | hu | | agent |
| (programming) language | (programozási) nyelv | hu | Ordinary Hungarian word, including in the "a language a computer understands" framing. Never the English borrowing. | agent |
| and / or (logical, in prose) | és / vagy | hu | The keywords and/or/`&&`/`\|\|` stay English. Rarely needs a `<define>` gloss at all; if the source does gloss it, the bracket may show the bare English word right after (_és_ (`and`)) rather than a full "angolul" explanation. | agent |
| equal sign | egyenlőségjel | hu | Ordinary word; even on `<define>`, no "angolul" gloss needed. | agent |
| ampersand (`&`) | és-jel | hu | On `<define>`, show the glyph itself (`&`) in the bracket, not the English word "ampersand". | agent |
| bar / vertical bar (`\|`) | függőleges vonal | hu | The `\|\|` keyword stays English. On `<define>`, show the glyph itself (`\|`) in the bracket, not the English word "bar". | agent |
| pure (function) | tiszta | hu | _tiszta függvény_ = pure function. When glossed, gloss the full term _pure function_, not the bare adjective _pure_. | agent |
| scenario (exercise test case) | forgatókönyv | hu | Also the concept title. | agent |

### Loops, state & program flow

| English | Hungarian | Use (hu/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| keyword | kulcsszó | hu | | agent |
| variable | változó | hu | | agent |
| assignment | értékadás | hu | | agent |
| to assign | hozzárendel | hu | | agent |
| code block | kódblokk | hu | | agent |
| error | hiba | hu | | agent |
| nested | egymásba ágyazott | hu | e.g. _egymásba ágyazott ciklus_ = nested loop. When glossed, gloss the full term (_nested loop_), not the bare adjective _nested_. | agent |
| iteration | iteráció | hu | Verb: _iterál_; „végigmegy rajta" also natural. | agent |
| element | elem | hu | Array element = _tömb eleme_. | agent |
| to run / execute (code) | lefuttat / lefut | hu | | agent |
| loop | ciklus | hu | _ciklus_, not _hurok_. | agent |
| for loop | `for` ciklus | hu | Keep `for` in backticks (real keyword) + _ciklus_. | agent |
| while loop | `while` ciklus | hu | Keep `while` in backticks + _ciklus_. | agent |
| for-of loop | `for-of` ciklus | hu | | agent |
| loop body | ciklus törzse | hu | | agent |
| inner loop / outer loop | belső ciklus / külső ciklus | hu | | agent |
| loop variable | ciklusváltozó | hu | | agent |
| increment (for-loop) | léptetés | hu | | agent |
| indentation | behúzás | hu | Verb: behúz. | agent |
| method | metódus | hu | | agent |
| property | tulajdonság | hu | | agent |
| object | objektum | hu | | agent |
| state | állapot | hu | Standard HU CS term; listed in `global/terms.md`. | agent |

### Tooling & engineering

| English | Hungarian | Use (hu/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| workflow | munkafolyamat | hu | | agent |
| pitfall | buktató | hu | Ordinary word; stands alone. | agent |
| auth (authentication / authorization) | hitelesítés | hu | Standard Hungarian for autentikáció/autorizáció. | agent |
| deploy (verb: to deploy) | élesít | hu | „Élesítsd" for imperative; also „élesítés" as noun. Prefer this over „telepítsd ki" which reads more as installation than go-live. | agent |
| framework | keretrendszer | hu | Use _keretrendszer_ exclusively; never revert to _framework_. | agent |
| component | komponens | hu | Common Hungarian tech vocabulary; no gloss needed. Use _komponens_, not _összetevő_. | agent |
| tool | eszköz | hu | The ordinary Hungarian word; use it in prose. The mass noun _tooling_ stays English; see "Keep in English". | agent |

### Colours & graphics

| English | Hungarian | Use (hu/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| hue | színárnyalat | hu | Not árnyalat (reserved for "shade of a colour"). | agent |
| saturation | telítettség | hu | | agent |
| lightness | világosság | hu | Distinct from fényerő (brightness). | agent |

### App & product UI

| English | Hungarian | Use (hu/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| plan (subscription tier) | csomag | hu | Not terv. Enables "{tier} csomag". | agent |
| subscription | előfizetés | hu | | agent |
| to unlock | felold | hu | Noun: feloldás; locked state: zárolva. | agent |
| badge | jelvény | hu | | agent |
| achievements | eredmények | hu | | agent |
| certificate | tanúsítvány | hu | | agent |
| account | fiók | hu | | agent |
| dashboard | irányítópult | hu | Not vezérlőpult. | agent |
| session (auth) | munkamenet | hu | | agent |
| support (customer) | ügyfélszolgálat | hu | | agent |
| cookies | sütik | hu | | agent |
| debugging | hibakeresés | hu | | agent |
| breakpoint | töréspont | hu | | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Hungarian in the gloss column below (per the format in `global/voice.md`); with no
`<define>`, use the English bare, with no gloss.

| Term | Hungarian gloss (on `<define>`) | Notes | Agreed by |
|------|----------------------------------|-------|-----------|
| string | _karakterlánc_ | Exception: the string concept itself uses _karakterlánc_ where the source defines it, then _string_ throughout. | agent |
| scope | _hatókör_ (or _láthatóság_) | Exception: the scope concept uses the Hungarian where the source defines it, then _scope_ throughout. | agent |
| Boolean | _logikai érték_ | Exception: where the source defines it, gloss as _logikai érték_, then _Boolean_ throughout. | agent |
| API | explain what it is in Hungarian | Not a word a beginner knows; where defined, explain the concept in Hungarian, not just gloss the acronym. | agent |
| tooling (mass noun) | _tooling_ | Used as-is in Hungarian tech writing. The countable _tool_ is localized as _eszköz_; see "Tooling & engineering". | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | As keywords/technical tokens. | agent |
| Code, Bug, Frontend, Backend | (no gloss) | | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| CLI (the concept) | parancssori felület | Explain CLI as _parancssori felület_ (command-line interface) where the source defines it. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |
| template literal / template string | (no gloss) | The JS construct's own name. The general prose concept is _string-sablon_; see "Functions & control flow". Suffix e.g. template stringben. | agent |
| backtick | (show the glyph) | HU tech writing keeps the English word. | agent |
| AI | _mesterséges intelligencia_ | OWNER DECISION: use "AI" (not MI) in prose/marketing. Compounds: AI-segítség, AI-ügynökök. | agent |
| LLM | explain in Hungarian | Kept English (LLM-korszak). | agent |
| widget | _widget_ | Established in HU tech writing. | agent |
| chat | (no gloss) | Kept English; _chatelni_ is fully nativized and _csevegés_ reads dated for this audience, so a gloss would teach nothing. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Hungarian rendering | Notes | Agreed by |
|-------------------|----------------------|-------|-----------|
| box (value container) | doboz | Plain Hungarian word for "box"; direct and concrete. | agent |
| chain (array metaphor) | lánc | Standard Hungarian for a physical chain; link = _láncszem_. | agent |
| machine (function metaphor) | gép | Plain word; a function is one of Jiki's _kis gépei_. | agent |
| input slot | bemeneti nyílás | _bemenet_ (input) + _nyílás_ (a slot/opening). | agent |
| return chute | kimeneti csúszda | _kimenet_ (output, agreed term above) + _csúszda_ (a slide/chute, the same word used for a playground slide). | agent |
| crank (machine crank) | kar | Jiki _megtekeri a karját_ to power a machine up. _Kar_ is the ordinary word for a handle or lever; not _forgattyú_, which is engine jargon. | agent |
| shelves (storage) | polc | Jiki's machines sit on a _polc_. | agent |
| warehouse (Jiki's warehouse) | raktár | Where Jiki hangs out and keeps his machine shelf (_Jiki raktára_). | agent |
| board / whiteboard | tábla | **One object, one word.** The board the learner writes instructions on for Jiki to come along and follow, and the board a function keeps its own instructions and notes on, are the same _tábla_. Ordinary word for a board in a room, and no collision with _tömb_ (array). | agent |
| character (game/maze figure) | figura | Keep _karakter_ for a text character (see "Values & data types"); _figura_ is the on-screen game figure. | agent |

## Brackets

| Glyph | Hungarian | Notes | Agreed by |
|-------|-----------|-------|-----------|
| `()` | zárójel · kerek zárójel | Plain _zárójel_ by default; add _kerek_ + glyph only when disambiguating. | agent |
| `[]` | szögletes zárójel | | agent |
| `{}` | kapcsos zárójel | | agent |
| `<>` | csúcsos zárójel (or _hegyes zárójel_) | | agent |

How to phrase a bracket in running prose is in `guide.md`.
