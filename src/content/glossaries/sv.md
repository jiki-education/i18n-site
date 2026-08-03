---
lang: "sv"
name: "Swedish"
family: null
stage: "setup"
governance_sha: "e56bb6a"
content_version: "7c150281053b"
published_at: "2026-08-03"
term_count: 95
category_id: 365
forum_topic_id: 828
video_player_forum_topic_id: 843
---

# Swedish (sv) glossary

The agreed term list for Swedish. Why each term was chosen, and who chose it, is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Swedish | Use (sv/en) | Notes |
|---------|---------|-------------|-------|
| programming / coding | **programmering** | sv | Use `programmering` consistently. `kodning` only where the source specifically stresses the casual act of writing code. Never mix both in one document. |
| developer | utvecklare | sv | Not _programmerare_, which narrows the job to writing code. |
| tech / tech industry | techbranschen | sv | Not _teknikbranschen_ (heavy industry) and not _IT-branschen_ (older and wider). |
| mental model | tankemodell | sv | The picture-in-your-head framing. Not _mental modell_, which reads clinical. |

## Localize (use the Swedish term)

These are terms where the Swedish is used in prose, so the "Use (sv/en)" column is `sv` throughout.

### Values & data types

| English | Swedish | Use (sv/en) | Notes |
|---------|---------|-------------|-------|
| number | tal | sv | The mathematical sense. Not _nummer_, which is an identifying number (as in _telefonnummer_). |
| float / decimal | flyttal | sv | Use _decimaltal_ only where the source stresses the decimal point rather than the floating-point representation. |
| character (text) | tecken | sv | **Never _karaktär_**, which means a personality or a figure in a story. For the on-screen figure see "character (game/maze figure)" under the metaphors. |
| letter (of a string) | bokstav | sv | Distinct from _tecken_, which also covers digits, spaces and punctuation. |
| true / false | sant / falskt | sv | Neuter forms with _värde_ and _villkor_ (_villkoret är sant_). Common-gender _sann / falsk_ when agreeing with an en-word (_jämförelsen är sann_). Lowercase in prose. |
| string | sträng | sv | Inflects as a Swedish noun: _strängen_, _strängar_. |
| Boolean | boolesk | sv | _ett booleskt värde_. Gloss as _sanningsvärde_ where the source defines it. The type name in code stays `Boolean`. |
| array / list | array | sv | _en array_, _arrayen_, _arrayer_. Not _fält_ (collides with "field"), not _vektor_ (reads as the maths object), not _lista_ (keep that for an everyday list). Also covers the source's informal "list" for the same concept. Confirmed as an established loanword by a native-speaker developer. |
| dictionary | uppslagstabell | sv | The data-structure sense (a lookup table). Not _ordbok_, which read like an invented word for the concept; not English _dictionary_, which isn't used as a loanword and is too long to say casually. |
| compound data type | sammansatt datatyp | sv | Distinct from a plain _datatyp_. |
| random number | slumptal | sv | One word. The adjective is _slumpmässig_ (_en slumpmässig position_). |

### Functions & control flow

| English | Swedish | Use (sv/en) | Notes |
|---------|---------|-------------|-------|
| if statement | `if`-sats | sv | Swedish names a statement after its keyword, hyphenated: _`if`-sats_, _`else`-gren_. Not _villkorssats_ (school-textbook register). |
| condition is true / false | villkoret är sant / falskt | sv | Not the otherwise idiomatic _villkoret är uppfyllt_, which breaks the link to the _sant / falskt_ the course teaches. |
| statement (executable) | sats | sv | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | påstående | sv | The proposition sense: a claim that is true or false; also a test assertion. Pick by meaning, not by the English word. |
| instruction (given to Jiki) | instruktion | sv | What the learner puts on the board for Jiki to follow. Everyday Swedish, not _anvisning_ (bureaucratic register). |
| to call (a function) | anropa | sv | Never _kalla_ or _kalla på_, which is calling out to a person. |
| to return (a value) | returnera | sv | Not _återlämna_ or _ge tillbaka_. The noun is _returvärde_. The bracketed `<define>` gloss word must be _return_, never _returning_. |
| input (to a function) / output | indata / utdata | sv | Not _inmatning / utmatning_, which are the acts of typing in and printing out. |
| interpreter | tolk | sv | **A person doing a job, not a program.** On concept pages Jiki *is* the tolk (_din tolk är Jiki_, _det är hans jobb att tolka koden du skriver_). Never _programtolk_ or _interpretator_, which can only name software. |
| pure (function) | ren | sv | _en ren funktion_. When glossed, gloss the full term _pure function_, not the bare adjective. |
| brackets (the two after a function name) | parenteser | sv | _de två parenteserna_ for the `()` pair written after a function name. Which bracket type to name, and when, is in the Brackets section below. |
| NOT operator / logical negation | negation | sv | _negation_ for the concept, _inte_ when reading the operator aloud. The `!` keyword stays English. |
| bang (the `!` character) | utropstecken | sv | Swedish has no equivalent of the English slang "bang". Render the source's aside as a remark about what the sign is called, never as a loan. |
| ampersand (`&`) | och-tecken | sv | On `<define>`, show the glyph itself (`&`) in the bracket, not the English word "ampersand". Not `et-tecken`, which a native speaker (developer) said they'd never seen or used. |
| bar / vertical bar (`\|`) | lodstreck | sv | Not _vertikalstreck_ (dated). The `\|\|` keyword stays English. On `<define>`, show the glyph (`\|`) in the bracket, not the English word "bar". |
| string template | strängmall | sv | The prose concept. The JS construct's own name (_template literal_ / _template string_) stays English; see "Keep in English". |
| placeholder | platshållare | sv | |
| (programming) language | programmeringsspråk | sv | One word, always. Use it including in the "a language a computer understands" framing. |

### Loops, state & program flow

| English | Swedish | Use (sv/en) | Notes |
|---------|---------|-------------|-------|
| loop | loop | sv | _en loop_, _loopen_, _loopar_; the verb is _loopa_. Never _slinga_. Compounds take no hyphen: _loopvariabel_, _loopkropp_; keyword compounds do: _`for`-loop_, _`while`-loop_. |
| nested | nästlad | sv | _en nästlad loop_. When glossed, gloss the full term (_nested loop_), not the bare adjective. |
| to run / execute (code) | köra | sv | Not _exekvera_, which is heavy and technical. |
| assignment / to assign | tilldelning / tilldela | sv | Never _uppgift_, which is "assignment" in the school-homework sense. |
| indentation | indrag | sv | Not _indentering_, an anglicism. |
| exception | undantag | sv | Distinct from _fel_, the general word for an error. |
| increment (for-loop) | öka | sv | _öka med ett_. Not _inkrementera_. |
| concatenation / to concatenate | sammanfoga | sv | Not _konkatenera_. |
| state / stateful | tillstånd | sv | Not _status_, which is a condition being reported rather than data being held. |
| code block | block | sv | _ett block_; _kodblock_ where the context needs it. Keep distinct from _scope_. |

### Tooling & engineering

| English | Swedish | Use (sv/en) | Notes |
|---------|---------|-------------|-------|
| auth (authentication / authorization) | autentisering / behörighet | sv | Pick by meaning: _autentisering_ for proving who you are, _behörighet_ for what you are allowed to do. |
| deploy (verb: to deploy) | driftsätta | sv | Noun: _driftsättning_. Not the anglicism _deploya_, and not _distribuera_. |
| framework | ramverk | sv | Use _ramverk_ exclusively; never revert to _framework_. |
| debugging | felsökning | sv | The activity. The `Debug` keyword and UI label stay English. |
| edge case | specialfall | sv | Not _kantfall_, a calque. |

### Platform & curriculum vocabulary

| English | Swedish | Use (sv/en) | Notes |
|---------|---------|-------------|-------|
| concept (learning unit) | begrepp | sv | Concept Library = Begreppsbiblioteket. Not _koncept_, which is an idea or a design, not something you learn. |
| exercise | övning | sv | The exercise as a whole. |
| task (within an exercise) | uppgift | sv | A sub-step of an _övning_; keep the two words distinct. |
| feature (platform capability) | funktion | sv | The ordinary Swedish word, and deliberately the same one as the code term. Where a passage discusses both, use _finess_ for the platform capability or rephrase. |
| plan (subscription tier) | plan | sv | Enables "{tier}-planen". Not _abonnemang_, which is the subscription itself. |
| subscription | prenumeration | sv | |
| dashboard | översikt | sv | Not _instrumentpanel_ (a car dashboard) or _kontrollpanel_ (system settings). |
| cookies | kakor | sv | What Swedish sites and cookie banners say. |
| chat | chatt | sv | Swedish spelling, double t. The verb is _chatta_. |

### Colours & graphics

| English | Swedish | Use (sv/en) | Notes |
|---------|---------|-------------|-------|
| hue | färgton | sv | The 0-360 position on the colour wheel. Not _nyans_ (reserved for shade) and not _kulör_ (paint-trade register). |
| saturation | mättnad | sv | |
| lightness | ljushet | sv | Distinct from _ljusstyrka_ (brightness). |
| shade (of a colour) | nyans | sv | The casual "the shade of colour you want". Kept distinct from _färgton_. |
| colour wheel | färgcirkel | sv | Not _färghjul_. |
| frame (animation) | bildruta | sv | Not _ram_, which is a picture frame or a border. |

## Keep in English

These stay in English in Swedish prose, with the Swedish gloss to use for each.

| Term | Swedish gloss (on `<define>`) | Notes |
|------|-------------------------------|-------|
| scope | _räckvidd_ | Swedish course material writes "(eng. in scope)" rather than settling a term. Use the Swedish where the source defines it, then _scope_ throughout. |
| API | explain what it is in Swedish | Where defined, explain the concept in Swedish, not just gloss the acronym. |
| CLI (the concept) | _kommandoradsgränssnitt_ | Explain CLI as _kommandoradsgränssnitt_ where the source defines it. |
| template literal / template string | (no gloss) | The JS construct's own name. The general prose concept is _strängmall_; see "Functions & control flow". |
| backtick | (show the glyph) | |
| canvas | (no gloss) | Also the HTML element's name; Swedish has no settled word for the drawing surface. |
| AI | _artificiell intelligens_ | Use "AI" in prose and marketing. Compounds: AI-hjälp, AI-agenter. |
| LLM | explain in Swedish | |
| widget | _widget_ | |
| Debug, Test | (no gloss) | As keywords, UI labels and technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | As capitalised tokens and UI labels only. In running prose the ordinary Swedish words are _kod_ and _bugg_, and those are what to write. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms.

| English metaphor | Swedish rendering | Notes |
|------------------|-------------------|-------|
| box (value container) | låda | |
| chain (array metaphor) | kedja | Link = _länk_. |
| machine (function metaphor) | maskin | A function is one of Jiki's _små maskiner_. |
| input slot | inkast | The opening you drop something into, as on a coin-operated machine (_myntinkast_). |
| return chute | rutschkana | The value slides back out down the _rutschkana_. Never _utkast_, which means "draft". |
| crank (machine crank) | vev | Jiki _vevar igång_ a machine. The verb is _veva_. |
| shelves (storage) | hylla | Jiki's machines stand on a _hylla_. |
| warehouse (Jiki's warehouse) | lager | Where Jiki hangs out and keeps his machine shelf (_Jikis lager_). |
| workshop (Jiki's workshop) | verkstad | The room Jiki works in; the shelves stand in it. |
| board / whiteboard | tavla | **One object, one word.** The board the learner writes instructions on for Jiki to come along and follow, and the board a function keeps its own instructions and notes on, are the same _tavla_. No collision with _array_. |
| coin (number metaphor) | mynt | |
| label (on a box/machine) | etikett | |
| piece of paper (string metaphor) | lapp | The everyday word for a small piece of paper Jiki writes on. |
| spiral notebook page (dictionary metaphor) | blad ur ett spiralblock | |
| mini-Jiki | mini-Jiki | Hyphenated, because the second part is a name. |
| character (game/maze figure) | figur | Keep _tecken_ for a text character (see "Values & data types"); _figur_ is the on-screen game figure. |

## Brackets

| Glyph | Swedish | Notes |
|-------|---------|-------|
| `()` | parentes · rund parentes | Plain _parentes_ by default; add _rund_ plus the glyph only when disambiguating. |
| `[]` | hakparentes | |
| `{}` | klammerparentes | _måsvingar_ is the common informal name, but use _klammerparentes_ so one document uses one word. |
| `<>` | vinkelparentes | |

How to phrase a bracket in running prose is in `guide.md`.

---

## Decision log

### 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout), run as a single fable
worker per `orchestrator.md`'s one-worker-per-scope rule. Logged here for review and **not**
written to `glossary.md`.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| challenge (product area) | utmaning | Used across nav, tabs and cards; sets app-wide precedent. | medium |
| hint | ledtråd | Kept distinct from casual "tip" → tips. | medium |
| streak | svit | Loanword _streak_ is also current; wants a native check. | medium |
| badge | märke | Kept distinct from achievements → prestationer. | medium |
| scrubber | tidslinjen | No settled Swedish word; rendered as "the timeline". | medium |
| scenario | scenario (pl. scenarier) | huvudscenario / bonusscenario. | medium |
| fair use limits | gräns(er) för rimlig användning | No Swedish idiom; descriptive. | medium |

"Agentic coding" → "agentisk kodning" (`layout.footer.freeContent.agenticGuides`) is
emerging, not settled, Swedish.

Flags, not glossary rows: `challenges.empty.inProgressDescription` quotes a "Kom igång"
button whose own key is in a still-untranslated namespace — must match once that lands.
`modals.premiumUpgrade.featureLivestreams` runs noticeably longer than English and may wrap.

### 2026-08-01: `guide.md` trimmed to rules; rationale moved here

**Decided by:** agent, on the owner's instruction to strip rationale from every language
guide (the guide is loaded into the prompt for every Swedish item, in every pass).
**Terms affected:** none. No rule was dropped and no glossary row changed.

The rationale, connotation analysis and emphasis that used to sit in `guide.md` alongside
each rule is recorded here instead:

- **"du" throughout.** The du-reform of the late 1960s made _du_ universal, and modern
  Swedish instructional and marketing copy uses nothing else. _Ni_ addressed to one reader
  reads as either archaic or as shop-counter affectation.
- **"Låt oss" is banned** because it is a calque of English "Let's...": in Swedish it reads
  as a translated hymn rather than as speech.
- **Sweden-Swedish over Finland-Swedish** shows up most visibly on `loop` (Finland-Swedish
  curriculum documents keep _slinga_; see the bootstrap entry below).
- **V2 inversion.** Tracking English word order after a fronted adverbial is the single
  most common way a Swedish translation gives itself away, which is why the rule and the
  self-check both name it.
- **Särskrivning** is the most visible error in written Swedish, and it changes meaning
  outright rather than merely looking sloppy.
- **The -ing rule.** An English participle carried straight over ("När skrivande kod")
  reads as machine output; Swedish wants a finite verb.
- **Em dashes.** Swedish does not use the em dash at all, so `global/rules.md`'s house rule
  costs Swedish nothing. The tankstreck is a spaced en dash and is a different mark.
- **No Oxford comma** because the construction does not exist in Swedish at all.
- **Anti-patterns list.** The old guide restated four rules it had already given
  imperatively, plus the anglicisms (_deploya_, _exekvera_, _inkrementera_, _konkatenera_,
  _indentering_) and false friends (_karaktär_, _uppgift_, _kalla_) that `glossary.md`
  already rules out row by row. It is now a one-line self-check that names each once.
  _kontrollera_ for English "control" is the one item with no glossary row; it stayed in
  the guide.

**Contradiction fixed: quotation marks.** The guide's imperative rule has always been the
Swedish standard `”...”` (the same high right-hand mark at both ends), but roughly a dozen
of its own worked examples used the German-style low opening mark `„...”`. The examples were
wrong and are now consistent with the rule, which also now names `„` explicitly as a mark to
avoid. The rule outranks its own examples, and no native speaker had decided otherwise.

### 2026-08-01: `dictionary` is `uppslagstabell`, not `ordbok`; `array` confirmed as `array`

**Decided by:** native speakers (sneakymallard flagging `array`, estyrke answering in detail,
sneakymallard deferring to estyrke's developer judgement) on the pinned Swedish glossary
thread, forum topic 828, posts #3, #5-8 (https://forum.jiki.io/t/828/7).
**Terms affected:** `array`, `dictionary`.

sneakymallard flagged `array` as unfamiliar; asked to clarify, estyrke (a working developer,
Sweden-Swedish) confirmed `array` is genuinely established as a loanword in that context, so
the row is unchanged, just confirmed. For `dictionary`, `ordbok` was an unconfirmed agent
coinage that estyrke said sounds invented; English `dictionary` isn't used as a loanword
either (too long to say casually). Of the alternatives estyrke listed, `uppslagstabell`
("lookup table") is the one they used as a real proposal (pairing it with `lista` for
`array` as an alternative labelling scheme, which we're not taking since `array` itself is
confirmed), and it keeps the same "look something up" image the old row was going for while
being technically accurate to the data structure. sneakymallard deferred to estyrke's
developer usage explicitly.

### 2026-08-01: `ampersand` is `och-tecken`, not `et-tecken`

**Decided by:** native speaker (estyrke, a working developer) on the pinned Swedish
glossary thread, forum topic 828, post #6 (https://forum.jiki.io/t/828/6).
**Terms affected:** `ampersand`.

`et-tecken` was an unconfirmed agent draft. estyrke said they'd never seen or used it and
proposed `och-tecken` instead, which is what they use themselves. No prior human decision
existed on this row, so the correction is applied directly.

### 2026-07-31: Language bootstrapped

**Decided by:** agent, from research; approved by the owner (iHiD) as a whole rather than row by row. **Status: every row is an unconfirmed draft.** No native speaker has checked any rendering in this glossary. A Swedish speaker has volunteered on the forum (topic 734, "Translating into Swedish (sv)") but had not been sent anything to review when this file was written, so nothing below carries a human decision and a later pass may correct any of it.

**Sources the research rested on.** The Lund University compendium *Introduktion till programmering för blivande systemutvecklare* (Björn Regnell, Datavetenskap LTH, CC BY-SA, developed continuously since 2015) was the main evidence for what Swedish programming teaching actually writes, because it is long-lived, human-authored and signed by dozens of named contributors. Alongside it: Microsoft's Swedish localization style guide (address, capitalization, compounds, punctuation), IDG's *IT-ord* / Computer Sweden dictionary and Svenska datatermgruppen's recommendations (which Isof now maintains in Rikstermbanken, the group itself having wound down in 2016), Linköping University course material on interpreters and compilers, skiljetecken.se for glyph names, and Swedish colour-theory writing for the HSL vocabulary. Auto-translated Swedish content farms turned up repeatedly in searches for `dictionary` and `array`; those hits were discarded rather than counted as usage.

**Where the evidence pointed away from the textbook term.** Three rows follow what Swedish developers write rather than what a prescriptive source recommends, applying the ordinary-word principle in `global/voice.md`:

- **`loop` is _loop_, not _slinga_.** The LTH compendium uses _loop_ 161 times and _slinga_ not once, and inflects it as a native noun (_loopen_, _loopar_, _loopa_, _loopvariabel_). _Slinga_ survives in Finland-Swedish curriculum documents (Utbildningsstyrelsen) and in older textbooks, but nobody writing about code in Sweden uses it.
- **`array` is _array_.** The prescriptive sources disagree with each other and with practice: SIS recommends _fält_, IDG calls _vektor_ "not always correct" and offers _uppställning_ instead, and the LTH compendium uses _vektor_ while footnoting that _fält_ "skapar stor förvirring" because of English "field". None of _fält_, _vektor_ or _uppställning_ is what a Swedish JavaScript developer says. This is the row most likely to draw an objection, and it should.
- **`indentation` is _indrag_ and `to run` is _köra_,** against the anglicisms _indentering_ and _exekvera_ that appear even in course material.

**`interpreter` is _tolk_, deliberately a person.** Jiki *is* the interpreter on the concept pages, so the word has to be able to name a character. Swedish has the verb _tolka_ for interpreting code (the LTH compendium uses _tolka/tolkas/tolkar_ throughout and never the noun), and _tolk_ is its ordinary agent noun. IDG lists _programtolk_ as the main term for the software, with _interpretator_ and the short form _tolk_ alongside; _programtolk_ carries an explicit program morpheme and _interpretator_ names a piece of machinery, so both are ruled out for Jiki.

**The metaphor set is the least evidenced part of this glossary.** _låda_, _kedja_, _maskin_, _vev_, _hylla_, _verkstad_, _tavla_, _mynt_, _lapp_ are ordinary Swedish words with nothing to argue about. Three were chosen on judgement and want a native speaker's eye: _inkast_ for the input slot (the word in _myntinkast_, a coin slot, which is exactly Jiki's picture), _rutschkana_ for the return chute (a playground slide, chosen because the obvious _utkast_ already means "draft"), and _lager_ for the warehouse (the literal word, though it also means "layer" and "stock").

**`board / whiteboard` is _tavla_, one word for one object,** per the cross-language decision recorded on 2026-07-30 for every language. Swedish has no collision to worry about here, since `array` is _array_ rather than anything board-shaped.

### Term rationale

Why individual rows read the way they do, where a dated entry above does not already cover it. Ordered by the glossary's own sections.

#### Values & data types

| Term | Why |
|------|-----|
| number | Swedish splits the English word: _tal_ is a quantity, _nummer_ is an identifying label. Programming means _tal_. |
| character (text) | _karaktär_ is a false friend (a personality, or a figure in a story) and is the mistake a translator is most likely to make here. |
| true / false | Swedish adjectives agree with gender, so the pair has two forms. The row names both so no pass has to guess. |
| dictionary | _ordbok_ keeps the teaching picture: you look up a word and get back what is attached to it. _lexikon_ is the other live candidate and reads more academic. |
| string | _sträng_ is settled in Swedish course material, so unlike several other languages Swedish has no reason to keep the English word. |

#### Functions & control flow

| Term | Why |
|------|-----|
| if statement | Swedish names statements after the keyword itself (_`if`-sats_, _`while`-sats_), which keeps the English keyword visible where the learner will type it. _villkorssats_ is correct but reads like a syllabus. |
| condition is true / false | Idiomatic Swedish says a condition is _uppfyllt_ (fulfilled), but this course teaches `true` and `false` as values, and _uppfyllt_ hides that link. |
| to call (a function) | _kalla_ is the literal translation of "call" and is wrong: it means calling out to someone. _anropa_ is the settled term. |
| input / output | _indata / utdata_ are the data; _inmatning / utmatning_ are the acts of typing in and printing out. The metaphor is about the data. |
| bang | English programmer slang with no Swedish counterpart, so the source's playful aside has to become a Swedish remark rather than a loan. |
| bar (`\|`) | _lodstreck_ is current; _vertikalstreck_ is the older name. Both are understood, so the row exists to stop passes alternating between them. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| assignment / to assign | _uppgift_ translates the school sense of "assignment" and would be a silent disaster in a variables lesson. |
| exception | Swedish distinguishes _undantag_ (the catchable object) from _fel_ (an error in general), and the curriculum uses both. |
| state | _status_ is a condition being reported; _tillstånd_ is a condition being held, which is what the concept means. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| deploy | _driftsätta_ is the established Swedish term (IDG's _IT-ord_ defines _driftsättning_ as moving a finished system into the environment where it will run). _deploya_ is real developer slang but too casual for teaching copy. |
| framework | _ramverk_ is fully established, to the point that the English word would read as an affectation. |
| auth | Swedish keeps the two ideas apart lexically, so a single rendering would blur them. |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| concept (learning unit) | _koncept_ is a design or an idea; _begrepp_ is a thing you can be taught. The Concept Library is a library of the latter. |
| exercise / task | Swedish has two ordinary words, _övning_ and _uppgift_, so the curriculum's exercise-and-sub-step distinction survives without inventing anything. |
| feature | Swedish uses _funktion_ for both a code function and a product feature, exactly as the canonical term list warns. Rather than coin a second word, the row keeps the ordinary one and says what to do in the rare passage that needs both. |
| cookies | _kakor_ is Svenska datatermgruppen's recommendation and what Swedish cookie banners say, so it is the ordinary word here rather than a purist one. |

#### Colours & graphics

| Term | Why |
|------|-----|
| hue / shade | Swedish colour writing reserves _färgton_ for the position on the colour wheel and _nyans_ for a small shift in a colour. Collapsing them, which the English words invite, would make the HSL explanation incoherent. |
| lightness | _ljushet_ is how light a colour is; _ljusstyrka_ is how much light something emits. HSL means the first. |
| frame (animation) | _ram_ is a picture frame or a border. One frame of an animation is a _bildruta_. |

#### Keep in English

| Term | Why |
|------|-----|
| scope | Swedish course material reaches for _synlighet_, _räckvidd_ or _omfång_ depending on which aspect is meant, and often just writes the English in brackets. With no settled term, keeping `scope` and glossing it once is the honest option. |
| canvas | The drawing surface has no Swedish name in web writing, and `canvas` is also the element's own name. |
| Code, Bug | Listed as never-translated tokens, but the ordinary Swedish nouns _kod_ and _bugg_ are fully nativized and are what running prose should use. The row exists so a pass does not over-apply the token rule to prose. |
