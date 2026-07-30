---
lang: "hi"
name: "Hindi"
family: null
governance_sha: "1d91ad4"
content_version: "88829ecb8ef9"
published_at: "2026-07-30"
term_count: 114
forum_topic_id: 482
---

# Hindi (hi) glossary

The agreed term list for Hindi. Every term here has been agreed and is binding: use it exactly, with no synonyms and no mixing within a document. See `guide.md` § "Register: loanwords vs. Sanskritized terms" for the researched rationale behind the overall loanword-over-Sanskritized-coinage policy this glossary applies.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file; it surfaces new terms it had to decide on as proposals in its output (a "glossary delta"). Those proposals are discussed, and only once agreed are they written in (by a human or by Claude). So everything in this file is, by definition, already agreed. Terms that have not been agreed simply are not here yet.

Writes are additive, and the final `Agreed by` column records who decided each row (`agent` = an unconfirmed agent draft, `human` = confirmed by a native speaker, with the forum topic). See `global/workflow.md` § "Glossary writes are additive".

### Native-speaker feedback so far (t/482)

The Hindi feedback thread is forum topic 482. Two rows carry a native speaker's explicit rewording and are marked `human (t/482)`: `template literal` and `edge case`.

One native speaker also wrote "Rest of the glossary seems okay" about the version of the list posted on 2026-07-18. That is recorded here rather than in the `Agreed by` column, deliberately. It is a single reader's general impression at one date, not a row-by-row confirmation: it names no row, it does not resolve the rows that were themselves posted asking for native-speaker review, and the list has since changed (rows added, and `input`, `output`, and the `whiteboard` metaphor re-decided). Treating it as `human` on every row would freeze unconfirmed drafts against future correction on evidence that never examined them. Rows stay `agent` until a speaker speaks to them, which is the honest weaker state.

## Core decisions

| English | Hindi | Use (hi/en) | Notes | Agreed by |
|---------|-------|-------------|-------|-----------|
| programming | प्रोग्रामिंग | hi | | agent |
| coding | कोडिंग | hi | Follow the source: render "programming" as प्रोग्रामिंग and "coding" as कोडिंग in the same document, exactly where the English uses each. | agent |
| code (the noun, in prose) | कोड | hi | Devanagari, not bare Latin: कोड is the ordinary word in Hindi tech speech and in this guide's own examples. Distinct from the literal UI label / token `Code`, which stays English (see "Keep in English"). | agent |
| developer | डेवलपर | hi | Fully absorbed Devanagari loanword; standard in Indian tech media. | agent |
| streak | स्ट्रीक | hi | Gamification loanword. Lower confidence; not directly source-verified, flag for native-speaker confirmation on first real use. | agent |
| tech / tech industry | टेक इंडस्ट्री | hi | Hybrid (English "tech" + Hindi "इंडस्ट्री"), mirrors the pattern seen across other languages' tech-media usage. | agent |
| pitfall | आम गलती | hi | Literally "common mistake"; descriptive, no snappy Hindi loanword equivalent found. Medium confidence, flag for native-speaker review. | agent |

## Localize (use the Devanagari term)

These are absorbed loanwords or genuinely ordinary Hindi words, written natively in Devanagari. They are Hindi-primary: used bare in prose, with the italic English in brackets only where the source `<define>`s the term (see `guide.md` § "Term clarification"). Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Hindi | Use (hi/en) | Notes | Agreed by |
|---------|-------|-------------|-------|-----------|
| number | संख्या | hi | Ordinary school-Hindi word. | agent |
| integer | पूर्णांक | hi | Standard school-math term; the gloss ties it to whole numbers in code. | agent |
| float / decimal | दशमलव | hi | Standard school-math term for decimal numbers. | agent |
| character | अक्षर | hi | Ordinary word for a written character/letter. | agent |
| true / false | सही / गलत | hi | Not capitalised in prose. Distinct from the literal code values `true`/`false`, which stay as-is in code. | agent |

### Functions & control flow

| English | Hindi | Use (hi/en) | Notes | Agreed by |
|---------|-------|-------------|-------|-----------|
| condition | शर्त | hi | Ordinary word; stands alone. | agent |
| comparison | तुलना | hi | Ordinary word; stands alone. | agent |
| to define (a function) | बनाना | hi | "To create/make"; warmer and more beginner-friendly than a loanword, fits the machine metaphor ("आप एक function बनाते हैं"). | agent |
| to return (a value) | रिटर्न करना | hi | Hybrid verb; extremely standard in real usage, e.g. "यह value रिटर्न करता है." | agent |
| statement (logical claim) | दावा | hi | The proposition sense: a claim that is true or false. Kept distinct from the executable sense (`statement`, kept English) below. | agent |
| input (to a function) | इनपुट | hi | Devanagari, matching the इनपुट स्लॉट metaphor and everyday Hindi tech speech. | agent |
| output | आउटपुट | hi | Devanagari, matching आउटपुट की फिसलपट्टी. | agent |
| brackets (the two after a function name) | ब्रैकेट | hi | The `()` pair, e.g. "उसका नाम लिखिए और उसके बाद वे दो ब्रैकेट लगाइए". Where round and square must be distinguished, say गोल ब्रैकेट (round) and चौकोर ब्रैकेट (square). | agent |

### Loops, state & program flow

| English | Hindi | Use (hi/en) | Notes | Agreed by |
|---------|-------|-------------|-------|-----------|
| to assign | असाइन करना | hi | Hybrid verb, standard usage. | agent |
| error | एरर | hi | Fully absorbed Devanagari loanword, spoken constantly in Hindi dev discourse. | agent |
| to run / execute (code) | चलाना | hi | "To run/operate"; warm, ordinary verb. रन करना is an accepted alternative. | agent |
| increment | बढ़ाना | hi | "To increase"; ordinary warm verb. इंक्रीमेंट is the technical alternative, glossed only where the source `<define>`s it. | agent |
| modulo / remainder operator | शेषफल | hi | Standard school-math term for "remainder"; ties the `%` operator to a concept students already know. | agent |
| concatenation / to concatenate | जोड़ना | hi | "To join"; ordinary verb, e.g. "strings को जोड़ना." | agent |
| interpreter | इंटरप्रेटर | hi | A **person** doing a job, not a program: Jiki is the interpreter. Never gloss it as a प्रोग्राम or a सॉफ़्टवेयर. इंटरप्रेटर is the word Hindi tutorials use and it carries no machine or program morpheme, so it can name Jiki; it sits with the other person-role loanwords (डेवलपर, मेंटर). दुभाषिया is the native word for a human interpreter, flagged for native-speaker review. | agent |
| instruction (given to Jiki) | इंस्ट्रक्शन | hi | Everyday tutorial word, e.g. "आप Jiki को बहुत तरह के इंस्ट्रक्शन दे सकते हैं". निर्देश is avoided: it reads as an official notice, the wrong register. Flag for native-speaker review. | agent |
| mental model | सोचने का तरीका | hi | Ordinary, transparent Hindi ("the way of thinking about it"), e.g. "यह सोचने का एक ताक़तवर तरीका है". Not मेंटल मॉडल, which is jargon a beginner has not met. | agent |
| (programming) language | भाषा | hi | Ordinary Hindi word, used both for a programming language and for "a language the computer understands". Use it throughout a page; do not mix in लैंग्वेज. | agent |

### Tooling & engineering

| English | Hindi | Use (hi/en) | Notes | Agreed by |
|---------|-------|-------------|-------|-----------|
| deploy (verb) | डिप्लॉय करना | hi | Hybrid verb, standard across Indian dev discourse. | agent |
| algorithm | एल्गोरिदम | hi | Fully absorbed Devanagari loanword, common even in general Hindi news media. | agent |

### Platform & curriculum vocabulary

| English | Hindi | Use (hi/en) | Notes | Agreed by |
|---------|-------|-------------|-------|-----------|
| lesson | पाठ | hi | Ordinary, standard educational Hindi word. | agent |
| exercise | अभ्यास | hi | Ordinary school word for a practice exercise; warmer than the loanword एक्सरसाइज़. | agent |
| course | कोर्स | hi | The whole Jiki course, e.g. "इस कोर्स में आपका इंटरप्रेटर Jiki है". Kept distinct from पाठ (lesson) and पाठ्यक्रम (curriculum). | agent |
| curriculum | पाठ्यक्रम | hi | Standard educational word. | agent |
| syllabus | सिलेबस | hi | Common conversational loanword; kept distinct from पाठ्यक्रम (curriculum) per `global/terms.md`. | agent |
| level | लेवल | hi | Universal loanword in Indian apps, games, and edtech. | agent |
| milestone | पड़ाव | hi | "A stop/stage on a journey"; evocative native word, fits a learning-path metaphor. Medium confidence, flag for native-speaker review. | agent |
| pathway | रास्ता | hi | "Path/way"; ordinary, warm word. | agent |
| mentor / mentoring | मेंटर | hi | Loanword, standard and modern in Indian edtech/startup register. | agent |
| track (curriculum path) | ट्रैक | hi | Loanword, common in Indian edtech UX. | agent |
| tutorial | ट्यूटोरियल | hi | Fully absorbed loanword, near-universal in this context. | agent |
| solution (learner's submission) | हल | hi | Ordinary school-math word ("हल करना" = to solve); warmer fit than the loanword सॉल्यूशन. | agent |

## Keep in English

These stay in English (Latin script) in prose, per the register decision in `guide.md`. Where the source `<define>`s one of these terms, give the short Hindi gloss from the column below, then use the English term freely; with no `<define>`, use the English bare, no gloss.

| Term | Hindi gloss (on `<define>`) | Notes | Agreed by |
|------|-------------------------------|-------|-----------|
| function | "एक ऐसी मशीन जैसा कोड जो इनपुट लेकर आउटपुट देता है" | Ties to the machine metaphor (मशीन, in Devanagari, per that table). The keyword `function` in code always stays English regardless. | agent |
| variable | "एक डिब्बा जिसमें value रखी जाती है" | Ties to the box metaphor. | agent |
| loop | "कोड का वह हिस्सा जो बार-बार चलता है" | | agent |
| for loop | (no separate gloss; builds on "loop") | Keep the `for` keyword in code font + "loop". | agent |
| while loop | (no separate gloss; builds on "loop") | Keep the `while` keyword in code font + "loop". | agent |
| for-of loop | (no separate gloss; builds on "loop") | Keep the `for-of` keyword in code font + "loop". | agent |
| loop body | "loop के अंदर का कोड" | | agent |
| array / list | "एक के बाद एक रखी गई values की लिस्ट" | Exercise prose sometimes says "list" informally for the same concept; treat as one term. | agent |
| string | "अक्षरों की एक श्रृंखला" | A sequence of characters; ties to अक्षर (character, agreed above). | agent |
| Boolean | "सही/गलत वाला डेटा टाइप" | The true/false data type. | agent |
| data type | "यह बताने वाला कि value किस तरह की है" | | agent |
| dictionary | "key-value जोड़ों को रखने वाला डेटा टाइप" | | agent |
| element | (no separate gloss; ordinary in context) | An item inside an array/chain; कड़ी (link) is used specifically for the chain metaphor, see Jiki metaphors table. | agent |
| index | "पोज़िशन नंबर" | | agent |
| key-value pair | (glossed inline with dictionary) | | agent |
| template literal | "एक तरह की string जिसमें expressions इस्तेमाल कर सकते हैं" | Rewording proposed by a native speaker on t/482, replacing "expressions को अंदर लिखने वाली string". The intent is "a string that can use expressions", which is correct. Their post wrote इस्तमाल / "कर सकते है"; normalised to the standard spellings इस्तेमाल / "कर सकते हैं". | human (t/482) |
| if statement | "शर्त जांचने का तरीका" | The `if` keyword itself always stays English in code and in prose. | agent |
| expression | "value निकालने वाला कोड का टुकड़ा" | | agent |
| operator | "गणना या तुलना करने के लिए इस्तेमाल होने वाला चिन्ह" | | agent |
| statement (executable) | "कोड की एक लाइन जो कुछ करती है" | The imperative sense. Kept distinct from दावा (statement, logical-claim sense, agreed above). | agent |
| parameter | "function बनाते वक़्त दिया गया नाम" | The declaration-site name. | agent |
| argument | "function को कॉल करते वक़्त दी गई असली value" | The call-site value. Kept distinct from parameter. | agent |
| to call (a function) | "function को कॉल करना" | Hybrid; "कॉल करना" itself needs no separate gloss once "function" is established. | agent |
| return value | "function से वापस मिलने वाली value" | Kept distinct from the verb रिटर्न करना (agreed above). | agent |
| pure function | "ऐसा function जिसका कोई side effect नहीं होता" | Advanced term; low confidence, flag for native-speaker review. | agent |
| keyword | "कोड की खास भाषा का शब्द, जैसे if या for" | | agent |
| assignment (noun) | "value को variable में रखने की प्रक्रिया" | Kept distinct from the verb असाइन करना (agreed above). | agent |
| code block | "कोड की कुछ लाइनें जो एक साथ चलती हैं" | | agent |
| exception | "खास तरह की error जिसे कोड में पकड़ा जा सकता है" | | agent |
| nested | "एक के अंदर एक" | Descriptive phrase rather than a single loanword, e.g. "एक के अंदर एक (nested) loop". | agent |
| iteration | "loop का एक चक्कर" | One round of the loop. | agent |
| break (loop control) | "loop से बाहर निकलना" | The `break` keyword itself always stays English in code. | agent |
| toggle | "ऑन/ऑफ़ जैसा बदलाव" | | agent |
| state / stateful | "कोड में उस वक़्त मौजूद जानकारी" | | agent |
| scope | "वह जगह जहां कोई variable इस्तेमाल हो सकता है" | | agent |
| class | "किसी चीज़ का खाका" | A blueprint/template. | agent |
| method | "किसी object से जुड़ा हुआ function" | | agent |
| property | "किसी object की कोई खासियत या जानकारी" | | agent |
| object | "असल दुनिया की किसी चीज़ को दिखाने वाला डेटा" | | agent |
| encapsulation | "data को उसके साथ काम करने वाले methods के साथ बांधकर छुपाना" | Advanced/OOP term; low confidence, flag for native-speaker review. | agent |
| workflow | "काम करने का तरीका या क्रम" | | agent |
| auth (authentication / authorization) | "पहचान जांचने की प्रक्रिया" | Login/identity-check concept. | agent |
| tool / tooling | "काम आसान करने के लिए बनाए गए प्रोग्राम" | | agent |
| module | "कोड का एक अलग, फिर से इस्तेमाल होने वाला हिस्सा" | | agent |
| edge case | "कोई असामान्य स्थिति जिसका होने का अवसर कम होता है लेकिन हो सकता है" | Rewording proposed by a native speaker on t/482, replacing "कोई असामान्य स्थिति जो कम होती है पर हो सकती है". | human (t/482) |
| backwards compatibility | "पुराने कोड के साथ भी काम करने की क्षमता" | Low confidence, flag for native-speaker review. | agent |
| API | "दो प्रोग्राम्स के आपस में बात करने का तरीका" | Where the source `<define>`s it, explain the concept, not just gloss the acronym. | agent |
| framework | "प्रोग्राम बनाने के लिए तैयार ढांचा" | | agent |
| CLI (the concept) | "कमांड लिखकर कंप्यूटर से बात करने का तरीका" | | agent |
| component | "किसी पेज का एक छोटा, फिर से इस्तेमाल होने वाला हिस्सा" | | agent |
| feature (platform capability) | "प्लेटफ़ॉर्म की कोई खास सुविधा" | Kept distinct from function; no collision risk in Hindi. | agent |
| scenario | "exercise के अंदर एक खास स्थिति" | Jiki-specific: a structured variant within an exercise. | agent |
| bootcamp | "इंटेंसिव कोडिंग प्रोग्राम" | Treated close to a proper noun where it names Jiki's predecessor program. | agent |
| canvas (graphics exercises) | "वह जगह जहां ड्रॉइंग बनती है" | The drawing surface in creative-coding exercises. | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | As keywords/technical tokens. | agent |
| `Code` (the UI label / token), Bug, Frontend, Backend | (no gloss) | Only the literal token stays English. The everyday noun "code" in prose is कोड, in Devanagari (see "Core decisions"). | agent |
| value | (no separate gloss; ordinary in context) | Bare Latin `value`, as used throughout this file's own glosses. | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Hindi rendering | Notes | Agreed by |
|-------------------|------------------|-------|-----------|
| box (value container) | डिब्बा | Plain, concrete Hindi word for "box"; simple and familiar. | agent |
| chain (array metaphor) | ज़ंजीर | Concrete word for a physical chain. Chain link / array element (in this metaphor) = कड़ी. | agent |
| input slot | इनपुट स्लॉट | इनपुट (agreed above) + स्लॉट, a familiar concrete image (a coin slot, a ticket slot). | agent |
| return chute | आउटपुट की फिसलपट्टी | आउटपुट (agreed above) + फिसलपट्टी, the everyday word for a playground slide, mirroring the same concrete, delightful image used in other languages' renderings. | agent |
| machine (function metaphor) | मशीन | Ordinary, universal Hindi word for "machine". | agent |
| shelves (storage) | अलमारी | "Cupboard/shelf-unit"; warm, concrete, and familiar (everyone has one at home). | agent |
| warehouse (Jiki's warehouse) | गोदाम | Ordinary Hindi word for a warehouse/store-room; the place Jiki hangs out, with his machine shelf in it. | agent |
| crank (machine crank) | हैंडल घुमाना | "To turn the handle", the everyday way to say it; the crank itself is हैंडल. | agent |
| board / whiteboard | बोर्ड | **One object, one word.** Both the board the learner puts इंस्ट्रक्शन on for Jiki to follow and a function's own board of notes are बोर्ड. बोर्ड is the ordinary Hindi word for a writing board in a classroom or office, and it does not collide with any term for "array". Never use व्हाइटबोर्ड alongside it. | agent |
