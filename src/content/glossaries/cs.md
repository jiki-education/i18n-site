---
lang: "cs"
name: "Czech"
family: null
stage: "setup"
governance_sha: "d1e0f316"
content_version: "f6764a93ea89"
published_at: "2026-11-28"
term_count: 83
category_id: 496
---

# Czech (cs) glossary

The agreed term list for Czech. Why each term was chosen, and who chose it, is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Czech | Use (cs/en) | Notes |
|---------|-------|-------------|-------|
| programming / coding | **programování** | cs | Use consistently for both. Never `kódování`, which in Czech means character encoding. |
| developer | vývojář | cs | `programátor` where the source means someone who writes code in general rather than the job role. Do not alternate inside one document. |
| code (the noun, in prose) | kód | cs | `kódu`, `v kódu`. The `Code` UI token stays English. |
| feature (platform capability) | funkce aplikace / možnost | cs | **Collides with `funkce` (a code function).** Never write bare `funkce` for a platform feature where a reader could take it for a code function; use `možnost`, `novinka` (a new feature) or `funkce aplikace`. |

## Localize (use the Czech term)

These are terms where the Czech is used in prose, so the "Use (cs/en)" column is `cs` throughout.

### Values & data types

| English | Czech | Use (cs/en) | Notes |
|---------|-------|-------------|-------|
| true / false | pravda / nepravda | cs | Not capitalised in prose. This governs the prose concept only: a `true`/`false` literal in code stays English. |
| character (text) | znak | cs | Never `charakter`, which means character as in personality. |
| letter (of a string) | písmeno | cs | Kept distinct from `znak`. |
| float / decimal | desetinné číslo | cs | `číslo s plovoucí řádovou čárkou` only where the floating-point nature matters. Czech uses *čárka*, so never `tečka`. |
| array / list | pole | cs | Neuter. `seznam` only where the source means a Python-style list. Never `řetězec` (string) or `řetěz` (the chain picture, see "Jiki physical metaphors"). |
| string | řetězec | cs | Masculine (`řetězce`, `v řetězci`). `textový řetězec` where the text sense needs stating. Kept apart from `řetěz`, the chain metaphor for arrays. |
| dictionary | slovník | cs | Not `mapa` or `asociativní pole`. |
| compound data type | složený datový typ | cs | Distinct from a plain `datový typ`. |
| position (in a string/array) | pozice | cs | Kept distinct from `index`. |

### Functions & control flow

| English | Czech | Use (cs/en) | Notes |
|---------|-------|-------------|-------|
| if statement | příkaz `if` | cs | The keyword stays English. `podmínka` is the condition itself, so do not call the whole statement `podmínka`. The general idea of conditional branching is `větvení`. |
| condition | podmínka | cs | A condition `platí` or `je splněná`. |
| statement (executable) | příkaz | cs | A line of code that does something and gets executed. |
| statement (logical claim) | tvrzení | cs | A claim that is true or false; also a test assertion. Pick by meaning, not by the English word. |
| instruction (given to Jiki) | pokyn | cs | What the learner writes on the board for Jiki to follow. Everyday word. Never `instrukce`, which is the processor-instruction term. |
| parameter | parametr | cs | The declaration-site name. |
| argument | argument | cs | The call-site value. Keep the two distinct. |
| to return (a value) | vrátit / vracet | cs | Perfective for one call (`funkce vrátí 30`), imperfective for what a function does in general (`funkce vrací číslo`). |
| return value | návratová hodnota | cs | |
| interpreter | **interpret** | cs | **A person doing a job, not a program.** On concept pages Jiki *is* the interpreter. Decline it as an animate noun when it means Jiki (`interpreta`, `interpretovi`, `s interpretem`): `tvým interpretem je Jiki`. Never `interpretátor` and never `překladač` (a compiler). Never `tlumočník`, which is a spoken-language interpreter. |
| initializer | počáteční hodnota | cs | Not `inicializátor`. |
| placeholder | zástupný symbol | cs | |
| bang (the `!` character) | vykřičník | cs | Use the Czech word; the logical sense is `negace`. |
| to run / execute (code) | spustit (program, kód) / provést (příkaz) | cs | `spustit` is to start a run; `provést` is what happens to each statement. The button is `Spustit kód`. |

### Loops, state & program flow

| English | Czech | Use (cs/en) | Notes |
|---------|-------|-------------|-------|
| loop | cyklus | cs | Never `smyčka`, and never mix the two. `cyklus `for``, `tělo cyklu`. |
| nested | vnořený | cs | `vnořený cyklus`. Not `zanořený`. When glossed, gloss the full term (_nested loop_), not the bare adjective. |
| iteration | průchod (cyklem) | cs | The plain word for one run of the loop body. `iterace` only where the source is deliberately technical; do not alternate inside one document. |
| increment | zvýšení (o jedna) | cs | The plain word. Not `inkrementace`. |
| scope | obor platnosti | cs | Not `rozsah platnosti` or `viditelnost`. Kept distinct from `blok kódu`. |
| concatenation / to concatenate | spojování / spojit | cs | `spojování řetězců`. Not `konkatenace`. |

### Tooling & engineering

| English | Czech | Use (cs/en) | Notes |
|---------|-------|-------------|-------|
| debugging | ladění | cs | The prose activity; the verb is `ladit`. The `Debug` UI token stays English. |
| deploy | nasadit / nasazení | cs | Not `deployovat`. |
| edge case | okrajový případ | cs | |

### Platform & curriculum vocabulary

| English | Czech | Use (cs/en) | Notes |
|---------|-------|-------------|-------|
| concept (learning unit) | pojem | cs | Concept Library = `Knihovna pojmů`. **Never `koncept`**, which in Czech means a rough draft. |
| exercise | cvičení | cs | |
| task (within an exercise) | úkol | cs | Distinct from `cvičení` (the exercise itself). Not `úloha`. |
| plan (subscription tier) | tarif | cs | Not `plán`. |
| dashboard | Přehled | cs | Not `nástěnka` or `řídicí panel`. |
| Run Code (button) | Spustit kód | cs | Must match between exercise instructions and the app catalog. |

### Colours & graphics

| English | Czech | Use (cs/en) | Notes |
|---------|-------|-------------|-------|
| hue | odstín | cs | The HSL channel. Because `odstín` is taken, render the casual "shade of a colour" as `barva` or `tón`. |
| saturation | sytost | cs | Not `saturace`. |
| lightness | světlost | cs | The HSL channel. Kept distinct from `jas` (brightness). |

### Exercise scenario vocabulary

| English | Czech | Use (cs/en) | Notes |
|---------|-------|-------------|-------|
| bouncer | vyhazovač | cs | Including in exercise titles. |
| dress code | pravidla oblékání | cs | Not the English `dress code`. |
| skyline / cityscape | panorama města | cs | Czech has no one-word equivalent; do not coin one. |
| alien (creature) | mimozemšťan | cs | Never `cizinec`, which means a foreigner. |

## Keep in English

These stay in English in Czech prose, with the Czech gloss to use for each.

| Term | Czech gloss (on `<define>`) | Notes |
|------|------------------------------|-------|
| Boolean | _pravdivostní hodnota_ | Where the source defines it, gloss it, then use `Boolean` for the type name. The values themselves are `pravda` / `nepravda` in prose. |
| API | explain the concept in Czech | Explain what an API does, not just the letters. Neuter and undeclined: `toto API`. |
| framework | (no gloss) | Masculine, declines normally: `frameworku`, `ve frameworku`. |
| AI | _umělá inteligence_ | Use `AI` as the short form, never `UI`, which collides with user interface. Undeclined. |
| LLM | explain in Czech | `velký jazykový model`. |
| CLI (the concept) | _příkazový řádek_ | |
| bug | (no gloss) | `chyba` is equally natural in running prose; use `bug` only where the source is talking developer slang. |
| widget, chat | (no gloss) | |
| bootcamp | (no gloss) | |
| Debug, Test, Code, Bug, Frontend, Backend | (no gloss) | As UI labels and code tokens. The ordinary noun in prose follows the `kód` row above. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Give them a Czech head noun to carry the case (`příkaz `if``, `cyklus `for``); see `guide.md`. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Czech rendering | Notes |
|-------------------|-----------------|-------|
| box (value container) | krabice | Feminine. `krabička` where a warmer diminutive helps. |
| chain (array metaphor) | řetěz | Masculine (`řetězu`, `řetězy`). One link is a `článek`. **Never `řetězec`**, which is the word for a string; never call an array a `řetězec`. Used as the teaching picture alongside the technical `pole`. |
| machine (function metaphor) | stroj | Masculine. `strojek` is the natural diminutive. Not `mašina`. |
| input slot | vstupní štěrbina | Feminine. The slot you drop a coin or a letter into. |
| return chute | výdejní otvor | Masculine. The opening a vending machine hands your item out of. Pairs with `vstupní štěrbina`. |
| crank (machine crank) | klika | Feminine. Jiki `zatočí klikou` to power a machine up. Not `páka` (a lever). |
| shelves (storage) | police | Feminine, plural `police`. `Jikiho stroje stojí na polici.` |
| warehouse (Jiki's warehouse) | sklad | Masculine. `Jikiho sklad`. |
| workshop (Jiki's workshop) | dílna | Feminine. `Jikiho dílna`. |
| board / whiteboard | tabule | Feminine. **One object, one word:** the board the learner writes instructions on for Jiki to follow, and the board a function keeps its own notes on, are the same `tabule`. |
| piece of paper (string metaphor) | papírek | Masculine. `kus papíru` in more explanatory register. |
| coin (number metaphor) | mince | Feminine. `mincička` where a diminutive helps. |
| label (on a box/machine) | štítek | Masculine. |
| spiral notebook page (dictionary metaphor) | stránka kroužkového bloku | `kroužkový blok` is the notebook. |
| mini-Jiki | malý Jiki | See `guide.md` for declension. |
| character (game/maze figure) | postavička | Feminine. Free of collision, because a text character is `znak`. |

## Brackets

| Glyph | Czech | Notes |
|-------|-------|-------|
| `()` | kulaté závorky | Plain `závorky` by default; name the type only when disambiguating. |
| `[]` | hranaté závorky | |
| `{}` | složené závorky | |
| `<>` | špičaté závorky | |
| `&` | ampersand | On a `<define>`, show the glyph itself. |
| `\|` | svislá čára | The `\|\|` keyword stays English. On a `<define>`, show the glyph itself. |
| `` ` `` | obrácený apostrof | Czech developers also say `backtick`; on a `<define>`, show the glyph itself. |

---

## Decision log

### 2026-11-28: Bootstrap of Czech (guide, glossary, decision log)

**Decided by:** the project owner (Jeremy), who told the `/bootstrap-language cs` pass to apply its researched recommendation for every owner decision and every proposed term, and accepted those recommendations without reviewing each one. **Status:** agreed, but **unconfirmed by any native speaker**. **Terms affected:** every row in `glossary.md`. **Files affected:** `guide.md`, `glossary.md`, `glossary-notes.md`, `tracking.json`.

**No native speaker has confirmed any rendering in this glossary.** Czech had no community glossary submission and no forum request behind it: a forum search for "czech", "čeština", "česky", "cesky" and "czechia" returned nothing, and the new-language-request topic ([t/714](https://forum.jiki.io/t/714)) has no Czech entry. Every row is an agent draft, and the owner did not check the rows one by one, so no row is protected by "Glossary writes are additive". A later pass may revise any of it on a native speaker's word. The pinned glossary thread exists to get these drafts corrected.

#### The rows most worth a native speaker's eyes

**1. `interpreter` = `interpret`.** The course makes Jiki *be* the interpreter, so the word has to name a person doing a job. `interpret` is the Czech word for the program, and it also names a person (a performer of a song or role), so it can carry a person once it takes the animate declension (`interpreta`, `interpretovi`). The program sense declines inanimately (`interpretu`), so a reader may find the animate forms odd at first. The alternatives were rejected: `interpretátor` carries the tool reading, `překladač` is a compiler, and `tlumočník` is a spoken-language interpreter. `tlumočník` appears for the program only on a machine-translated page (guru99.com/cs), which was discarded. Low-to-medium confidence.

**2. `string` = `řetězec` against the chain metaphor `řetěz`.** Czech developers and course material say `řetězec` for a string (naucse.python.cz: "Textový řetězec (angl. string) je datový typ"), so keeping English `string` would go against ordinary usage. But `řetězec` is literally a chain, and the array metaphor is a chain too. The draft keeps both, with `řetěz` (and `článek` for a link) reserved for the array picture and a note never to call an array a `řetězec`. A native speaker may prefer a different picture word for the array metaphor. Medium confidence.

**3. The `ty` register.** Czech software localization addresses the user with `vy` (the Mozilla Czech style guide asks for "zadejte", not "zadej"). Czech beginner programming material written for one learner uses `ty` (naucse.python.cz, the PyLadies course: "Zkus napsat funkci", "Funkci zavolej a výsledek vypiš"). The draft follows the course material, because Jiki is a mentor talking to one learner. Choosing `ty` makes the reader's gender visible in the past tense, which is why `guide.md` carries the gender rule. Medium-to-high confidence.

#### Lower-confidence rows

- `loop` = `cyklus` over `smyčka`. Both are in real use; `cyklus` is the course and textbook word (naucse.python.cz uses it throughout). Medium.
- The metaphor renderings `vstupní štěrbina` (input slot), `výdejní otvor` (return chute) and `klika` (crank) have no Czech precedent and were chosen as everyday words for the physical objects. `výstupní skluz` was the alternative for the return chute. Low-to-medium.
- `dashboard` = `Přehled`, `plan` = `tarif`, `task` = `úkol`, `iteration` = `průchod`, `scope` = `obor platnosti`, `nested` = `vnořený` (naucse.python.cz has `zanořený`) and `dress code` = `pravidla oblékání` are each one choice among several live options. Medium.
- The declension of "Jiki" follows the pattern Czech uses for foreign masculine names ending in `-i` or `-y` (`Toni`, `Billy`: `Toniho`, `Tonimu`, `s Tonim`). This was not confirmed against the ÚJČ Internetová jazyková příručka entry. Medium.

#### The sources this rests on

Course material: naucse.python.cz (the PyLadies Czech beginners' course, human-authored, 2016 onwards), its pages on functions, strings and `while` loops. Localization: the Mozilla Czech localization style guide (via the mozilla-l10n styleguides mirror). Microsoft's Czech localization style guide exists, but its address rule could not be retrieved. `cs.duolingo.com` could not be read (it renders only with JavaScript), so it gave no data. Orthography and typography (quotation marks `„…“`, decimal comma, sentence-case headings, declension of foreign names by pronunciation) come from standard Czech rules as set out by Ústav pro jazyk český; the declension point was cross-checked against Masaryk University and Silesian University teaching handouts.

Discarded as machine-translated: guru99.com/cs and informatecdigital.com/cs.

### Term rationale

#### Core decisions

- **programming / coding:** `kódování` is the established Czech term for character encoding (`kódování UTF-8`), so it cannot stand for coding.
- **feature:** Czech app copy routinely says `funkce` for a feature, which is the same word as a code function. On a programming course the two would collide on the same page.

#### Values & data types

- **character:** `charakter` is a false friend (personality).
- **dictionary:** `slovník` is what Czech Python material calls a `dict`.

#### Functions & control flow

- **instruction (given to Jiki):** `instrukce` is the term for a processor instruction in Czech computing, which is the wrong picture for a note on a board. `pokyn` is the everyday word for something you tell someone to do.
- **if statement:** Czech speakers often call the whole `if` a `podmínka`, which collides with the condition inside it. Keeping `příkaz `if`` for the statement keeps the two apart.

#### Platform & curriculum vocabulary

- **concept:** `koncept` in Czech is a draft (`koncept dopisu`), so it cannot name a learning unit.
