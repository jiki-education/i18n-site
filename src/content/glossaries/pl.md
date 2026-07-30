---
lang: "pl"
name: "Polish"
family: null
governance_sha: "1d91ad4"
content_version: "278ec63178c0"
published_at: "2026-07-30"
term_count: 100
forum_topic_id: 417
---

# Polish (pl) glossary

The agreed term list for Polish. Every term here has been agreed and is binding: use it exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file; it surfaces new terms it had to decide on as proposals in its output (a "glossary delta"). Those proposals are discussed, and only once agreed are they written in (by a human or by Claude). So everything in this file is, by definition, already agreed. Terms that have not been agreed simply are not here yet.

Writes are **additive**: rows get appended, an `agent` row may be corrected (with the old value reported), and a `human` row is never changed unilaterally. The `Agreed by` column records who decided each row, per "The provenance column" in `global/workflow.md`.

## Core decisions

| English | Polish | Use (pl/en) | Notes | Agreed by |
|---------|--------|----------|-------|-----------|
| programming | programowanie | pl | Default, neutral term. Use consistently. | agent |
| coding (informal) | kodowanie | pl | Use only when the source specifically stresses the casual, hands-on act of writing code. Never mix both in one document. | agent |
| tech / tech industry | branża IT | pl | Standard in Polish tech writing. | agent |
| developer | programista | pl | Standard, gender-neutral-reading term. Do not use `deweloper`, which in general Polish usage means a real-estate developer. | agent |
| streak | seria | pl | Confirmed via Duolingo's own Polish product terminology (a comparable gamified daily-habit-learning product). | agent |
| pitfall | pułapka | pl | Ordinary, idiomatic word; used this way in Polish IT writing. | agent |

## Localize (use the Polish term)

These are terms where the Polish is used in prose, so the "Use (pl/en)" column is `pl` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Polish | Use (pl/en) | Notes | Agreed by |
|---------|--------|----------|-------|-----------|
| value | wartość | pl | Ordinary word. | agent |
| number | liczba | pl | Ordinary word. | agent |
| integer | liczba całkowita | pl | The keyword `int` in code stays English. | agent |
| float / decimal | liczba zmiennoprzecinkowa | pl | The keywords `float`/`double` in code stay English. | agent |
| character | znak | pl | The keyword `char` in code stays English. | agent |
| true / false | prawda / fałsz | pl | Not capitalised in prose. The keywords `true`/`false` in code stay English. | agent |
| array / list | tablica | pl | The unrivalled Polish CS term; do not use `łańcuch` for this. Because it owns _tablica_, no metaphor term may use that word (see the board row under "Jiki physical metaphors"). | agent |
| dictionary | słownik | pl | | agent |
| element | element | pl | Direct cognate. | agent |
| index | indeks | pl | Direct cognate. | agent |
| string | ciąg znaków | pl | Deliberately not `łańcuch`, to keep it distinct from the "chain" array metaphor below. | agent |
| data type | typ danych | pl | The general concept. | agent |

### Functions & control flow

| English | Polish | Use (pl/en) | Notes | Agreed by |
|---------|--------|----------|-------|-----------|
| if statement | instrukcja warunkowa | pl | The keyword `if` stays English in code. | agent |
| condition | warunek | pl | Ordinary word; stands alone. | agent |
| comparison | porównanie | pl | Ordinary word; stands alone. | agent |
| expression | wyrażenie | pl | Distinct from _instrukcja_ (a statement); an expression always evaluates to a value. | agent |
| operator | operator | pl | Direct cognate. | agent |
| statement (executable) | instrukcja | pl | The imperative sense: a line of code that does something and gets executed. Keep distinct from _wyrażenie_ (expression) and from the logical-claim sense below. Same word as the "instruction given to Jiki" row below, which is the same everyday noun. | agent |
| statement (logical claim) | zdanie / zdanie logiczne | pl | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word; never conflate with _instrukcja_. | agent |
| function | funkcja | pl | The keyword `function` in code stays English; the concept in prose is _funkcja_. | agent |
| to call (a function) | wywoływać / wywołać | pl | | agent |
| to define (a function) | definiować / zdefiniować | pl | | agent |
| parameter | parametr | pl | The declaration-site name. Keep distinct from _argument_ even though Polish developers sometimes conflate the two informally; Jiki's own writing keeps the textbook-correct distinction. | agent |
| argument | argument | pl | The call-site value. See note on _parametr_ above. | agent |
| input (to a function) | dane wejściowe | pl | | agent |
| output | dane wyjściowe | pl | Where the specific value returned is meant, use _wynik_ or _wartość zwracana_ (see below) instead. | agent |
| to return (a value) | zwracać / zwrócić | pl | The verb; keep distinct from the noun below. | agent |
| return value | wartość zwracana | pl | The noun; fixed standard phrase. | agent |
| brackets (the two after a function name) | nawiasy | pl | The `()` pair written after a function name to call it: _te dwa nawiasy_. Plain _nawiasy_ is enough here, because the round pair is the default; name the type only when disambiguating (see "Brackets" below). | agent |
| pure function | funkcja czysta | pl | | agent |

### Loops, state & program flow

| English | Polish | Use (pl/en) | Notes | Agreed by |
|---------|--------|----------|-------|-----------|
| keyword | słowo kluczowe | pl | | agent |
| interpreter | interpreter | pl | "The one who interprets", a person doing a job: on concept pages Jiki *is* the interpreter. _interpreter_ is the ordinary word in Polish dev writing and is an `-er` agent noun, so it can name a person; never substitute a program-only paraphrase such as _program interpretujący_. Polish-spelled loanword, so it declines normally: _interpretera_, _interpreterem_, _interpreterowi_. Same-script loanword, so it takes no bracketed English gloss (see `guide.md`). | agent |
| instruction (given to Jiki) | instrukcja | pl | The everyday noun, the same word as "statement (executable)" above: an instruction the learner gives Jiki. Not a formal/legal-register word such as _polecenie służbowe_ or _zarządzenie_. Plural _instrukcje_. | agent |
| mental model | model mentalny | pl | The standard Polish rendering, used in Polish psychology and UX writing; keep it, do not paraphrase as _wyobrażenie_. | agent |
| (programming) language | język (programowania) | pl | Ordinary Polish word, known to every beginner; never the English borrowing. Use full _język programowania_ where the source names the category, plain _język_ for the "a language a computer understands" framing. | agent |
| variable | zmienna | pl | | agent |
| assignment | przypisanie | pl | The noun; keep distinct from the verb below. | agent |
| to assign | przypisać / przypisywać | pl | The verb. | agent |
| code block | blok kodu | pl | Keep distinct from _zakres_ (scope) below; they are related but not the same thing. | agent |
| scope | zakres | pl | Keep distinct from _blok kodu_ (code block); a block establishes a scope, it is not the same as one. | agent |
| error | błąd | pl | General error. Keep distinct from _wyjątek_ (exception) below. | agent |
| exception | wyjątek | pl | The specific catchable-error-object sense, distinct from _błąd_ (a general error). | agent |
| nested | zagnieżdżony / zagnieżdżona / zagnieżdżone | pl | Agrees in gender/number with the noun it modifies, e.g. _zagnieżdżona pętla_ = nested loop. | agent |
| iteration | iteracja | pl | | agent |
| to run / execute (code) | uruchomić / uruchamiać | pl | Use for launching a program. | agent |
| element | zob. "Values & data types" | pl | | agent |
| loop | pętla | pl | | agent |
| for loop | pętla `for` | pl | Keep `for` in backticks (real keyword) + _pętla_. | agent |
| while loop | pętla `while` | pl | As above. | agent |
| for-of loop | pętla `for...of` | pl | As above; no independent Polish name exists for this construct. | agent |
| loop body | ciało pętli | pl | | agent |

### Tooling & engineering

| English | Polish | Use (pl/en) | Notes | Agreed by |
|---------|--------|----------|-------|-----------|
| increment | inkrementacja (noun) / inkrementować (verb) | pl | | agent |
| modulo / remainder operator | modulo | pl | The `%` operator; _modulo_ is a normal loanword in Polish too, not a code-switch. The result itself, in plain language, is _reszta z dzielenia_. | agent |
| concatenation | konkatenacja (noun) / konkatenować, łączyć (verb) | pl | Plain alternative: _łączenie ciągów znaków_. | agent |
| toggle | przełączać / przełączenie (verb/noun), przełącznik (control) | pl | Matches current Microsoft Polish UI terminology. | agent |
| state / stateful | stan (noun) / stanowy, bezstanowy (adjective) | pl | | agent |
| class | klasa | pl | Direct cognate. | agent |
| method | metoda | pl | Direct cognate. | agent |
| property | właściwość | pl | Use _pole_ or _atrybut_ instead for a raw Java field, if that distinction matters in context. | agent |
| object | obiekt | pl | Direct cognate. | agent |
| encapsulation | hermetyzacja | pl | The word Polish teaching material and Polish Wikipedia actually use for the OOP concept; _enkapsulacja_ is also current but less common outside direct translations. | agent |
| workflow | *(kept English)* | en | See "Keep in English" below. | agent |
| auth (authentication / authorization) | uwierzytelnianie (authentication) / autoryzacja (authorization) | pl | Pick by meaning; the two concepts render differently in Polish. | agent |
| deploy (verb: to deploy) | wdrożyć / wdrożenie, wdrażanie | pl | | agent |
| tool / tooling | narzędzie / narzędzia | pl | "Tooling" as an abstract collective renders descriptively (e.g. _ekosystem narzędzi_) rather than as one fixed word. | agent |
| module | moduł | pl | Direct cognate. | agent |
| algorithm | algorytm | pl | Direct cognate. | agent |
| edge case | przypadek brzegowy | pl | | agent |
| backwards compatibility | kompatybilność wsteczna | pl | | agent |
| component | komponent | pl | Naturalised spelling, used consistently in general software writing and in frontend/React contexts. | agent |

### Platform & curriculum

| English | Polish | Use (pl/en) | Notes | Agreed by |
|---------|--------|----------|-------|-----------|
| course | kurs | pl | The whole Jiki course the learner is taking. Keep distinct from _lekcja_ (lesson) and _program nauczania_ (curriculum). | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Polish gloss column below (per the format in `global/voice.md`); with no `<define>`, use the
English bare, with no gloss.

| Term | Polish gloss (on `<define>`) | Notes | Agreed by |
|------|-------------------------------|-------|-----------|
| framework | _framework_ has no established Polish equivalent; used as-is | No gloss needed beyond noting it is a framework/library ecosystem if the context doesn't make it obvious. | agent |
| API | _interfejs programowania aplikacji_ | Not a term a beginner knows; where the source `<define>`s it, explain the concept in Polish, not just gloss the acronym. | agent |
| workflow | _przebieg pracy_ (descriptive gloss only, not a fixed term) | Confirmed by Poland's own language authority (PWN) as having no settled Polish rendering for the dev/CI-CD sense; used as-is after a one-time descriptive gloss. | agent |
| CLI (naming a specific tool) | _interfejs wiersza poleceń_ | When explaining the general concept, translate fully as _interfejs wiersza poleceń_ / _wiersz poleceń_; when naming a specific tool (e.g. "the Jiki CLI"), keep _CLI_. | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | As keywords/technical tokens. | agent |
| Code, Bug, Frontend, Backend | (no gloss) | | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

Naturalised loanwords that are spelled and declined as Polish words (_interpreter_,
_komponent_, _moduł_, _operator_) are **not** in this table: they are Polish rows above, and
they take no English gloss because the gloss would restate the same word (see `guide.md`).

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Polish rendering | Notes | Agreed by |
|-------------------|-------------------|-------|-----------|
| box (value container) | pudełko | Plain Polish word for "box"; direct and concrete. Neuter. | agent |
| chain (array metaphor) | łańcuch | Where the source `<define>`s it, pair it with _tablica_ (the technical term for array), e.g. „tablica działa jak łańcuch (`tablica`)", so it doesn't get read as a synonym for _ciąg znaków_ (string), which some informal Polish programming material loosely calls "a chain of characters". Masculine. | agent |
| machine (function metaphor) | maszyna | Feminine. | agent |
| input slot | otwór wejściowy | No established Polish pedagogical precedent for this compound; a considered coinage, never validated by a native speaker. Flag for native-speaker review via `/action-forum-post`. | agent |
| return chute | zsyp zwrotny | _zsyp_ (a chute an object drops through, e.g. a laundry/garbage chute) fits a returned value better than _zjeżdżalnia_ (a slide, which implies a person riding it). Coinage, never validated by a native speaker; flag for review. | agent |
| shelves (storage) | półki | Feminine. | agent |
| crank (machine crank) | korba | Ordinary Polish word for a hand crank. Feminine. The action is _zakręcić korbą_ (perfective, one-off). | agent |
| warehouse (Jiki's warehouse) | magazyn | Ordinary word for a storeroom/warehouse; the shelves stand in it. Masculine. | agent |
| board / whiteboard | notatnik | **One object, one word**, for both the board the learner puts instructions on and the board a function keeps its own instructions and notes on. Not _tablica_, the literal word for a board: _tablica_ is the agreed term for _array_, and reusing it would collide directly. _notatnik_ keeps the concrete "surface you write instructions on that someone else then reads" image without that collision. Masculine. Do not reuse _notatnik_ for the dictionary spiral-notepad metaphor; that needs its own distinct rendering. | agent |

## Brackets

Default to plain **nawias**. When a specific bracket type matters, name it and show the glyph in a code tag immediately after: _nawias kwadratowy (`[]`)_.

| Glyph | Polish | Notes | Agreed by |
|-------|--------|-------|-----------|
| `()` | nawias · nawias okrągły | Plain _nawias_ by default; add _okrągły_ + glyph only when disambiguating. | agent |
| `[]` | nawias kwadratowy | | agent |
| `{}` | nawias klamrowy | | agent |
| `<>` | nawias ostrokątny (or _nawias trójkątny_) | | agent |
