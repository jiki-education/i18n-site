---
lang: "hi"
name: "Hindi"
family: null
stage: "setup"
governance_sha: "8e3de87"
content_version: "10f56a807bd4"
published_at: "2026-07-31"
term_count: 93
category_id: 237
forum_topic_id: 482
video_player_forum_topic_id: 757
---

# Hindi (hi) glossary

The agreed term list for Hindi. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`). See `guide.md` § "Register: loanwords vs. Sanskritized
terms" for the researched rationale behind the overall loanword-over-Sanskritized-coinage
policy this glossary applies.

## Core decisions

| English | Hindi | Use (hi/en) | Notes |
|---------|-------|-------------|-------|
| coding | कोडिंग | hi | Follow the source: render "programming" as प्रोग्रामिंग and "coding" as कोडिंग in the same document, exactly where the English uses each. |
| code (the noun, in prose) | कोड | hi | Devanagari, not bare Latin. Distinct from the literal UI label / token `Code`, which stays English (see "Keep in English"). |
| streak | स्ट्रीक | hi | Lower confidence: not directly source-verified. Flag for native-speaker confirmation on first real use. |
| pitfall | आम गलती | hi | Medium confidence: flag for native-speaker review. |

## Localize (use the Devanagari term)

These are absorbed loanwords or genuinely ordinary Hindi words, written natively in
Devanagari. They are Hindi-primary: used bare in prose, with the italic English in brackets
only where the source `<define>`s the term (see `guide.md` § "Term clarification"). Split by
theme for readability; every table below follows the same columns.

### Values & data types

| English | Hindi | Use (hi/en) | Notes |
|---------|-------|-------------|-------|
| character | अक्षर | hi | |
| true / false | सही / गलत | hi | Not capitalised in prose. Distinct from the literal code values `true`/`false`, which stay as-is in code. |

### Functions & control flow

| English | Hindi | Use (hi/en) | Notes |
|---------|-------|-------------|-------|
| to define (a function) | बनाना | hi | "To create/make", e.g. "आप एक function बनाते हैं". |
| to return (a value) | रिटर्न करना | hi | e.g. "यह value रिटर्न करता है." |
| statement (logical claim) | दावा | hi | The proposition sense: a claim that is true or false. Kept distinct from the executable sense (`statement`, kept English) below. |
| input (to a function) | इनपुट | hi | |
| output | आउटपुट | hi | |
| brackets (the two after a function name) | ब्रैकेट | hi | The `()` pair, e.g. "उसका नाम लिखिए और उसके बाद वे दो ब्रैकेट लगाइए". Where round and square must be distinguished, say गोल ब्रैकेट (round) and चौकोर ब्रैकेट (square). |

### Loops, state & program flow

| English | Hindi | Use (hi/en) | Notes |
|---------|-------|-------------|-------|
| to assign | असाइन करना | hi | |
| to run / execute (code) | चलाना | hi | रन करना is an accepted alternative. |
| increment | बढ़ाना | hi | इंक्रीमेंट is the technical alternative, glossed only where the source `<define>`s it. |
| interpreter | इंटरप्रेटर | hi | A **person** doing a job, not a program: Jiki is the interpreter. Never gloss it as a प्रोग्राम or a सॉफ़्टवेयर; it sits with the other person-role loanwords (डेवलपर, मेंटर). दुभाषिया is the native word for a human interpreter (a different job): flag for native-speaker review. |
| instruction (given to Jiki) | इंस्ट्रक्शन | hi | e.g. "आप Jiki को बहुत तरह के इंस्ट्रक्शन दे सकते हैं". निर्देश is avoided: it reads as an official notice, the wrong register. Flag for native-speaker review. |
| mental model | सोचने का तरीका | hi | e.g. "यह सोचने का एक ताक़तवर तरीका है". Not मेंटल मॉडल, which is jargon a beginner has not met. Flag for native-speaker review. |
| (programming) language | भाषा | hi | Used both for a programming language and for "a language the computer understands". Use it throughout a page; do not mix in लैंग्वेज. |

### Platform & curriculum vocabulary

| English | Hindi | Use (hi/en) | Notes |
|---------|-------|-------------|-------|
| course | कोर्स | hi | The whole Jiki course, e.g. "इस कोर्स में आपका इंटरप्रेटर Jiki है". Kept distinct from पाठ (lesson) and पाठ्यक्रम (curriculum). |
| curriculum | पाठ्यक्रम | hi | |
| syllabus | सिलेबस | hi | Kept distinct from पाठ्यक्रम (curriculum) per `global/terms.md`. |
| milestone | पड़ाव | hi | "A stop/stage on a journey." Medium confidence: flag for native-speaker review. |

## Keep in English

These stay in English (Latin script) in prose, per the register decision in `guide.md`,
with the Hindi gloss to use for each on `<define>`.

| Term | Hindi gloss (on `<define>`) | Notes |
|------|-------------------------------|-------|
| function | "एक ऐसी मशीन जैसा कोड जो इनपुट लेकर आउटपुट देता है" | Ties to the machine metaphor (मशीन, in Devanagari, per that table). The keyword `function` in code always stays English regardless. |
| variable | "एक डिब्बा जिसमें value रखी जाती है" | Ties to the box metaphor. |
| loop | "कोड का वह हिस्सा जो बार-बार चलता है" | |
| for loop | (no separate gloss; builds on "loop") | Keep the `for` keyword in code font + "loop". |
| while loop | (no separate gloss; builds on "loop") | Keep the `while` keyword in code font + "loop". |
| for-of loop | (no separate gloss; builds on "loop") | Keep the `for-of` keyword in code font + "loop". |
| loop body | "loop के अंदर का कोड" | |
| array / list | "एक के बाद एक रखी गई values की लिस्ट" | Exercise prose sometimes says "list" informally for the same concept; treat as one term. |
| string | "अक्षरों की एक श्रृंखला" | A sequence of characters; ties to अक्षर (character, agreed above). |
| Boolean | "सही/गलत वाला डेटा टाइप" | The true/false data type. |
| data type | "यह बताने वाला कि value किस तरह की है" | |
| dictionary | "key-value जोड़ों को रखने वाला डेटा टाइप" | |
| element | (no separate gloss; ordinary in context) | An item inside an array/chain; कड़ी (link) is used specifically for the chain metaphor, see Jiki metaphors table. |
| index | "पोज़िशन नंबर" | |
| key-value pair | (glossed inline with dictionary) | |
| template literal | "एक तरह की string जिसमें expressions इस्तेमाल कर सकते हैं" | |
| if statement | "शर्त जांचने का तरीका" | The `if` keyword itself always stays English in code and in prose. |
| expression | "value निकालने वाला कोड का टुकड़ा" | |
| operator | "गणना या तुलना करने के लिए इस्तेमाल होने वाला चिन्ह" | |
| statement (executable) | "कोड की एक लाइन जो कुछ करती है" | The imperative sense. Kept distinct from दावा (statement, logical-claim sense, agreed above). |
| parameter | "function बनाते वक़्त दिया गया नाम" | The declaration-site name. |
| argument | "function को कॉल करते वक़्त दी गई असली value" | The call-site value. Kept distinct from parameter. |
| to call (a function) | "function को कॉल करना" | "कॉल करना" itself needs no separate gloss once "function" is established. |
| return value | "function से वापस मिलने वाली value" | Kept distinct from the verb रिटर्न करना (agreed above). |
| pure function | "ऐसा function जिसका कोई side effect नहीं होता" | Advanced term; low confidence, flag for native-speaker review. |
| keyword | "कोड की खास भाषा का शब्द, जैसे if या for" | |
| assignment (noun) | "value को variable में रखने की प्रक्रिया" | Kept distinct from the verb असाइन करना (agreed above). |
| code block | "कोड की कुछ लाइनें जो एक साथ चलती हैं" | |
| exception | "खास तरह की error जिसे कोड में पकड़ा जा सकता है" | |
| nested | "एक के अंदर एक" | Descriptive phrase rather than a single loanword, e.g. "एक के अंदर एक (nested) loop". |
| iteration | "loop का एक चक्कर" | One round of the loop. |
| break (loop control) | "loop से बाहर निकलना" | The `break` keyword itself always stays English in code. |
| toggle | "ऑन/ऑफ़ जैसा बदलाव" | |
| state / stateful | "कोड में उस वक़्त मौजूद जानकारी" | |
| scope | "वह जगह जहां कोई variable इस्तेमाल हो सकता है" | |
| class | "किसी चीज़ का खाका" | A blueprint/template. |
| method | "किसी object से जुड़ा हुआ function" | |
| property | "किसी object की कोई खासियत या जानकारी" | |
| object | "असल दुनिया की किसी चीज़ को दिखाने वाला डेटा" | |
| encapsulation | "data को उसके साथ काम करने वाले methods के साथ बांधकर छुपाना" | Advanced/OOP term; low confidence, flag for native-speaker review. |
| workflow | "काम करने का तरीका या क्रम" | |
| auth (authentication / authorization) | "पहचान जांचने की प्रक्रिया" | Login/identity-check concept. |
| tool / tooling | "काम आसान करने के लिए बनाए गए प्रोग्राम" | |
| module | "कोड का एक अलग, फिर से इस्तेमाल होने वाला हिस्सा" | |
| edge case | "कोई असामान्य स्थिति जिसका होने का अवसर कम होता है लेकिन हो सकता है" | |
| backwards compatibility | "पुराने कोड के साथ भी काम करने की क्षमता" | Low confidence, flag for native-speaker review. |
| API | "दो प्रोग्राम्स के आपस में बात करने का तरीका" | Where the source `<define>`s it, explain the concept, not just gloss the acronym. |
| framework | "प्रोग्राम बनाने के लिए तैयार ढांचा" | |
| CLI (the concept) | "कमांड लिखकर कंप्यूटर से बात करने का तरीका" | |
| component | "किसी पेज का एक छोटा, फिर से इस्तेमाल होने वाला हिस्सा" | |
| feature (platform capability) | "प्लेटफ़ॉर्म की कोई खास सुविधा" | Kept distinct from function; no collision risk in Hindi. |
| scenario | "exercise के अंदर एक खास स्थिति" | Jiki-specific: a structured variant within an exercise. |
| bootcamp | "इंटेंसिव कोडिंग प्रोग्राम" | Treated close to a proper noun where it names Jiki's predecessor program. |
| canvas (graphics exercises) | "वह जगह जहां ड्रॉइंग बनती है" | The drawing surface in creative-coding exercises. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| `Code` (the UI label / token), Bug, Frontend, Backend | (no gloss) | Only the literal token stays English. The everyday noun "code" in prose is कोड, in Devanagari (see "Core decisions"). |
| value | (no separate gloss; ordinary in context) | Bare Latin `value`, as used throughout this file's own glosses. |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry
technical language.

| English metaphor | Hindi rendering | Notes |
|-------------------|------------------|-------|
| box (value container) | डिब्बा | |
| chain (array metaphor) | ज़ंजीर | Chain link / array element (in this metaphor) = कड़ी. |
| input slot | इनपुट स्लॉट | |
| return chute | आउटपुट की फिसलपट्टी | |
| machine (function metaphor) | मशीन | |
| shelves (storage) | अलमारी | |
| warehouse (Jiki's warehouse) | गोदाम | |
| crank (machine crank) | हैंडल घुमाना | The crank itself is हैंडल. |
| board / whiteboard | बोर्ड | **One object, one word.** Both the board the learner puts इंस्ट्रक्शन on for Jiki to follow and a function's own board of notes are बोर्ड. Never use व्हाइटबोर्ड alongside it. |

---

## Decision log

### 2026-07-31: Glossary pruned of ordinary vocabulary

Removed 21 rows whose Hindi rendering had one obvious canonical form and nothing to decide:
`programming`, `developer`, `tech / tech industry`, `number`, `integer`, `float / decimal`,
`condition`, `comparison`, `error`, `modulo / remainder operator`, `concatenation / to
concatenate`, `deploy (verb)`, `algorithm`, `lesson`, `exercise`, `level`, `pathway`, `mentor
/ mentoring`, `track (curriculum path)`, `tutorial`, `solution (learner's submission)`. The
now-empty "Tooling & engineering" section (deploy, algorithm) was removed along with it. A
reviewer may want to double-check `solution (learner's submission)`: हल was kept over the
loanword सॉल्यूशन for warmth, but that reasoning lived only in rationale, not a Notes-column
flag, so it read as closer to a live register choice than the other cuts.

### 2026-07-30: Native speaker rewords "edge case" (t/482)

**Decided by:** @dazecodes, forum topic 482.
**Terms affected:** `edge case`.

@dazecodes proposed rewording the `<define>` gloss from "कोई असामान्य स्थिति जो कम होती है
पर हो सकती है" to "कोई असामान्य स्थिति जिसका होने का अवसर कम होता है लेकिन हो सकता है". Applied
as given; the row is now settled.

### 2026-07-30: Four renderings changed after the native-speaker sign-off below, unconfirmed

**Decided by:** agent, in the same pass that applied the two rewordings above and below.
**Status: unconfirmed drafts.**
**Terms affected:** `interpreter`, `instruction (given to Jiki)`, `mental model`, `input (to
a function)`, `output`.

In the same commit that applied @suditi's and @dazecodes's rewordings, an agent also
changed four other renderings, none of which carries any native-speaker sign-off:

- `interpreter` to इंटरप्रेटर, and `instruction` to इंस्ट्रक्शन, both to satisfy the rule
  (from the 28-language using-functions pass) that `interpreter` must be able to name a
  person, not just software.
- `mental model` to सोचने का तरीका, applying the ordinary-word principle.
- `input`/`output` to इनपुट/आउटपुट.

`input` and `output` were already in the version of the glossary posted on 2026-07-18, the
snapshot @suditi's "rest of the glossary seems okay" comment (below) was reacting to.
`interpreter`, `instruction` and `mental model` were not: they were added after that comment,
so it cannot be read as covering them either. None of the four should be treated as
confirmed until a native speaker reviews them specifically.

### 2026-07-19: Native speaker rewords "template literal"; general sign-off is not a row confirmation (t/482)

**Decided by:** @suditi, forum topic 482.
**Terms affected:** `template literal`; and, as a documented limit on scope, every other row
as it stood in the 2026-07-18 snapshot.

@suditi proposed rewording the `<define>` gloss for `template literal` from "expressions को
अंदर लिखने वाली string" to "एक तरह की string जिसमें expressions इस्तमाल कर सकते है", saying
the intent is "a string that can use expressions". Applied with the spelling normalised to
इस्तेमाल / "कर सकते हैं" (the post's इस्तमाल / "कर सकते है" are non-standard spellings of the
same words).

The same post also said "Rest of the glossary seems okay" about the 2026-07-18 snapshot.
That comment does not confirm every other row. It names no row, it does not resolve the
rows that were themselves posted asking for native-speaker review, and the list has since
changed (rows added, and `input`, `output`, `interpreter`, `instruction`, and `mental model`
re-decided, see the entry above). Every row other than `template literal` and `edge case`
stays an unconfirmed draft.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. Terms whose reasoning is already
covered by a dated entry above (`edge case`, `interpreter`, `instruction (given to Jiki)`,
`mental model`, `input (to a function)`, `output`, `template literal`) are not repeated
here.

#### Core decisions

| Term | Why |
|------|-----|
| code (the noun, in prose) | कोड is the ordinary word in Hindi tech speech and in this guide's own examples. |
| developer | Fully absorbed Devanagari loanword; standard in Indian tech media. |
| streak | Gamification loanword. |
| tech / tech industry | Hybrid (English "tech" + Hindi "इंडस्ट्री"), mirrors the pattern seen across other languages' tech-media usage. |
| pitfall | Literally "common mistake". Descriptive; no snappy Hindi loanword equivalent found. |

#### Values & data types

| Term | Why |
|------|-----|
| number | Ordinary school-Hindi word. |
| integer | Standard school-math term; the gloss ties it to whole numbers in code. |
| float / decimal | Standard school-math term for decimal numbers. |
| character | Ordinary word for a written character/letter. |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition | Ordinary Hindi word, so it stands alone. |
| comparison | Ordinary word. |
| to define (a function) | Warmer and more beginner-friendly than a loanword; fits the machine metaphor. |
| to return (a value) | Hybrid verb; extremely standard in real usage. |
| (programming) language | Ordinary Hindi word. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| to assign | Hybrid verb, standard usage. |
| error | Fully absorbed Devanagari loanword, spoken constantly in Hindi dev discourse. |
| to run / execute (code) | Warm, ordinary verb. |
| increment | Ordinary, warm verb. |
| modulo / remainder operator | Standard school-math term for "remainder"; ties the `%` operator to a concept students already know. |
| concatenation / to concatenate | "To join"; ordinary verb. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| deploy (verb) | Hybrid verb, standard across Indian dev discourse. |
| algorithm | Fully absorbed Devanagari loanword, common even in general Hindi news media. |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| lesson | Ordinary, standard educational Hindi word. |
| exercise | Ordinary school word for a practice exercise; warmer than the loanword एक्सरसाइज़. |
| curriculum | Standard educational word. |
| syllabus | Common conversational loanword. |
| level | Universal loanword in Indian apps, games, and edtech. |
| milestone | Evocative native word; fits a learning-path metaphor. |
| pathway | "Path/way"; ordinary, warm word. |
| mentor / mentoring | Loanword, standard and modern in Indian edtech/startup register. |
| track (curriculum path) | Loanword, common in Indian edtech UX. |
| tutorial | Fully absorbed loanword, near-universal in this context. |
| solution (learner's submission) | Ordinary school-math word ("हल करना" = to solve); warmer fit than the loanword सॉल्यूशन. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Plain, concrete Hindi word for "box"; simple and familiar. |
| chain | Concrete word for a physical chain. |
| input slot | इनपुट (agreed above) + स्लॉट, a familiar concrete image (a coin slot, a ticket slot). |
| return chute | आउटपुट (agreed above) + फिसलपट्टी, the everyday word for a playground slide, mirroring the same concrete, delightful image used in other languages' renderings. |
| machine | Ordinary, universal Hindi word for "machine". |
| shelves | "Cupboard/shelf-unit"; warm, concrete, and familiar (everyone has one at home). |
| warehouse | Ordinary Hindi word for a warehouse/store-room; the place Jiki hangs out, with his machine shelf in it. |
| crank | "To turn the handle": the everyday way to say it. |
