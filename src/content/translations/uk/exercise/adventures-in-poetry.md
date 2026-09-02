---
lang: "uk"
type: "exercise"
slug: "adventures-in-poetry"
title: "Пригоди в поезії"
status: "published"
source_repo: "i18n"
source_path: "locales/uk/curriculum/exercises/adventures-in-poetry"
en_md5: "ab3ebe6570023a88a51f091bbb445e40"
governance_sha: "560b647e"
content_version: "9624280209a4"
published_at: "2026-09-02"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"endOfPath","english":"The poet has walked off the end of the path. Something should have stopped the walk before now.","target":"Поет пройшов повз кінець шляху. Щось мало зупинити прогулянку ще до цього."},{"key":"isEmojiString","english":"You can only check whether a piece of text is an emoji.","target":"Перевірити, чи є емодзі, можна лише рядок тексту."},{"key":"reciteString","english":"You can only recite a piece of text.","target":"Декламувати можна лише рядок тексту."}]},{"name":"checks","rows":[{"key":"notRecited","english":"The poet never recited anything. Make sure you call <code>recite()</code> once the walk is over.","target":"Поет так нічого й не продекламував. Переконайтеся, що викликаєте <code>recite()</code>, щойно прогулянка завершиться."},{"key":"wrongPoem","english":"The poet recited \"{{got}}\" but the poem should be \"{{expected}}\".","target":"Поет продекламував:<pre style=\"white-space: pre-wrap; margin: 6px 0; background: white; padding: 4px 7px; font-size: 13px; border-radius: 5px; border: 1px solid var(--color-red-200)\">{{got}}</pre>але вірш мав бути:<pre style=\"white-space: pre-wrap; margin: 6px 0; background: white; padding: 4px 7px; font-size: 13px; border-radius: 5px; border: 1px solid var(--color-red-200)\">{{expected}}</pre>"},{"key":"noFunctions","english":"Write your solution as one walk, without defining any functions of your own.","target":"Напишіть рішення як одну прогулянку, не визначаючи власних функцій."},{"key":"reciteOnce","english":"The poet should recite the poem once, after the walk has finished.","target":"Поет має продекламувати вірш один раз, після завершення прогулянки."},{"key":"tooDeeplyNested","english":"Your code nests too deeply. You are only allowed two levels, so a loop with an <code>if</code> inside it, but nothing inside that <code>if</code>.","target":"Код вкладений надто глибоко. Дозволено лише два рівні: цикл з <code>if</code> усередині, але без нічого всередині того <code>if</code>."},{"key":"noAndOrNot","english":"This exercise is about a different way of making decisions, so <code>&&</code> and <code>!</code> are not allowed here. <code>||</code> is fine.","target":"Ця вправа про інший спосіб ухвалювати рішення, тому <code>&&</code> (логічне і) та <code>!</code> тут не дозволені. А от <code>||</code> (логічне або) використовувати можна."},{"key":"needsContinue","english":"Your solution needs to use <code>continue</code>.","target":"У рішенні потрібно використати <code>continue</code>."},{"key":"needsBreak","english":"Your solution needs to use <code>break</code>.","target":"У рішенні потрібно використати <code>break</code>."},{"key":"tooManyLines","english":"Your solution is longer than it needs to be. See if you can get it down by handling each kind of square in one place.","target":"Рішення довше, ніж потрібно. Спробуйте скоротити його, обробляючи кожен тип клітинки в одному місці."},{"key":"wrongSpacing","english":null,"target":"Поет зібрав правильні слова у правильному порядку, але пробіли розставлені неправильно. Він продекламував:<pre style=\"white-space: pre-wrap; margin: 6px 0; background: white; padding: 4px 7px; font-size: 13px; border-radius: 5px; border: 1px solid var(--color-red-200)\">{{got}}</pre>але вірш мав бути:<pre style=\"white-space: pre-wrap; margin: 6px 0; background: white; padding: 4px 7px; font-size: 13px; border-radius: 5px; border: 1px solid var(--color-red-200)\">{{expected}}</pre>"}]},{"name":"tasks","rows":[{"key":"collectThePoem.name","english":"Collect the poem and recite it","target":"Зберіть вірш і продекламуйте його"},{"key":"collectThePoem.description","english":"Walk along the path, gather the words of the poem, stop in the right place, and recite what you gathered.","target":"Пройдіть шлях, зберіть слова вірша, зупиніться в потрібному місці і продекламуйте зібране."},{"key":"solveTightly.name","english":"Tighten it up","target":"Скоротіть рішення"},{"key":"solveTightly.description","english":"Solve the same walk, but get your code down to the line limit.","target":"Пройдіть ту саму прогулянку, але вкладіться в обмеження на кількість рядків коду."}]},{"name":"scenarios","rows":[{"key":"hope.name","english":"A path with gaps","target":"Шлях із прогалинами"},{"key":"hope.description","english":"Six words with bare grass between them, and a checkered flag at the end.","target":"Шість слів, між якими лише гола трава, і картатий прапор наприкінці."},{"key":"wandered.name","english":"Scenery on the path","target":"Декорації на шляху"},{"key":"wandered.description","english":"The same idea, but now there are plants and creatures growing between the words.","target":"Та сама ідея, але тепер між словами трапляються рослини та істоти."},{"key":"mists.name","english":"Scenery next to the flag","target":"Декорації поруч із прапором"},{"key":"mists.description","english":"A leaf sits on the square just before the checkered flag.","target":"Листок лежить на клітинці якраз перед картатим прапором."},{"key":"notLost.name","english":"Exactly seven words","target":"Рівно сім слів"},{"key":"notLost.description","english":"A line with seven words on it, so the poet stops counting before the flag.","target":"У рядку рівно сім слів, тож поет зупиняється, ще не дійшовши до прапора."},{"key":"hopeContinued.name","english":"A poem that is too long","target":"Задовгий вірш"},{"key":"hopeContinued.description","english":"This path holds more than seven words, so the poet stops part way through the line.","target":"На цьому шляху більше ніж сім слів, тож поет зупиняється посеред рядка."},{"key":"highlands.name","english":"An apostrophe","target":"Апостроф"},{"key":"highlands.description","english":"A line of Burns, with an apostrophe sitting on its own square.","target":"Рядок Бернса з апострофом на окремій клітинці."},{"key":"heartScenery.name","english":"Scenery after an apostrophe","target":"Декорації після апострофа"},{"key":"heartScenery.description","english":"A mushroom grows between the apostrophe and the word it joins to, so whatever remembers the spacing has to survive a skipped square.","target":"Гриб росте між апострофом і словом, до якого той приєднується, тож те, що стежить за пробілами, має витримати пропущену клітинку."},{"key":"tyger.name","english":"A comma","target":"Кома"},{"key":"tyger.description","english":"A line of Blake, with a comma sitting on its own square.","target":"Рядок Блейка з комою на окремій клітинці."},{"key":"pleure.name","english":"Bare grass to begin","target":"Гола трава на початку"},{"key":"pleure.description","english":"A line of Verlaine, with a few empty squares before the poem starts.","target":"Рядок Верлена з кількома порожніми клітинками перед початком вірша."},{"key":"yasegaeru.name","english":"A line of Issa","target":"Рядок Ісси"},{"key":"yasegaeru.description","english":"Seven words of haiku, with a line limit to keep your guards tight. The tidiest solution fits in 32 lines.","target":"Сім слів хайку з обмеженням на кількість рядків коду, щоб перевірки лишалися компактними. Чи зможете ви знайти охайне рішення довжиною лише 32 рядки? (Або менше?)"}]},{"name":"hints","rows":[{"key":"scenery.question","english":"The plants and creatures are ending up in my poem.","target":"Рослини й істоти потрапляють у мій вірш."},{"key":"scenery.answer","english":"Only words belong in the poem. Everything else on the path needs to be left behind, which means your loop has to get to the next square without adding anything.","target":"У вірші мають бути лише слова. Усе інше на шляху слід залишити позаду, а отже, цикл має перейти до наступної клітинки, нічого не додаючи."},{"key":"flagSkipped.question","english":"My poet never stops walking.","target":"Мій поет ніяк не зупиняється."},{"key":"flagSkipped.answer","english":"The checkered flag is an emoji too. If you deal with scenery before you deal with the flag, the flag gets treated as scenery and the walk never ends. Order matters.","target":"Картатий прапор теж емодзі. Якщо обробити декорації раніше за прапор, то прапор вважатиметься декорацією, і прогулянка ніколи не закінчиться. Порядок має значення."},{"key":"spacing.question","english":"My words are all squashed together, or there is a space at the start.","target":"Мої слова злиплися докупи, або на початку стоїть пробіл."},{"key":"spacing.answer","english":"Think about when a space is needed. It is needed **between** two words, not before the first one, so something has to remember whether anything has been written yet.","target":"Подумаймо, коли саме потрібен пробіл. Він потрібен **між** двома словами, а не перед першим, тож щось має памʼятати, чи вже було щось записано."},{"key":"apostrophe.question","english":"I am getting `heart ' s` instead of `heart's`.","target":"У мене виходить `heart ' s` замість `heart's`."},{"key":"apostrophe.answer","english":"An apostrophe joins the words on either side of it, so no space belongs before it or after it. A comma is the opposite way round, with no space before it but a space after.","target":"Апостроф зʼєднує слова обабіч себе, тому перед ним і після нього пробіл не потрібен. Кома влаштована інакше: перед нею пробілу немає, але після неї він є."},{"key":"reciteOnce.question","english":"Why can I only call `recite()` once?","target":"Чому `recite()` можна викликати лише один раз?"},{"key":"reciteOnce.answer","english":"The poet recites the finished poem, so there is only one moment where that can happen. There is more than one way for the walk to end, and all of them need to reach that same moment.","target":"Поет декламує готовий вірш, тому є лише один момент, коли це може статися. Прогулянка може закінчитися по-різному, і всі ці шляхи мають вести до того самого моменту."}]},{"name":"describers","rows":[{"key":"move","english":"walked forward and found ${return}","target":"зробив крок уперед і знайшов ${return}"},{"key":"isEmoji","english":"checked whether ${arg1} was an emoji","target":"перевірив, чи є ${arg1} емодзі"},{"key":"recite","english":"recited \"${arg1}\"","target":"продекламував «${arg1}»"}]},{"name":"functions","rows":[{"key":"move.description","english":"Walks the poet forward onto the next square and **returns** whatever was on it.","target":"Пересуває поета вперед на наступну клітинку і **повертає** те, що на ній лежало."},{"key":"move.category","english":"Movement","target":"Рух"},{"key":"isEmoji.description","english":"Returns `true` if the thing you pass it is an emoji.","target":"Повертає `true`, якщо те, що ми їй передаємо, є емодзі."},{"key":"isEmoji.category","english":"Checks","target":"Перевірки"},{"key":"recite.description","english":"Makes the poet recite a poem out loud.","target":"Змушує поета продекламувати вірш уголос."},{"key":"recite.category","english":"Action","target":"Дія"}]}]}]
---

Ми створюємо роботизовану поетичну гру «Пригоди в поезії». Спершу нам потрібно запрограмувати робота так, щоб, крокуючи шляхом, він збирав слова, а наприкінці декламував вірш.

У кожній клітинці лежить одна з чотирьох речей:

1. Нічого (`""`)
2. **Слово** з вірша.
3. Декорації, як-от листок чи метелик (емодзі).
4. Картатий прапор (`🏁`), який наказує роботові зупинитися.

Нам на допомогу є кілька функцій. По-перше, це функція `move()`, яка каже поетичному роботові зробити крок уперед на наступну клітинку і повертає те, що на ній лежало. Також є функція `isEmoji(thing)`, яка повертає булеве значення (англ. _Boolean_) і повідомляє, чи є емодзі той рядок тексту (англ. _string_), який ми їй передаємо. І нарешті є функція `recite(poem)`, яку потрібно використати з готовим віршем.

Пройдіть шлях, складіть вірш, а потім продекламуйте його.

## Правила

- **Слова** потрапляють до вірша, з **пробілом між кожним із них**.
- **Декорації** не є частиною вірша, їх слід ігнорувати.
- **Апостроф** займає окрему клітинку й зʼєднує слова обабіч себе. `heart`, потім `'`, потім `s` перетворюються на `heart's`.
- **Кома** теж займає окрему клітинку. Вона стоїть упритул до слова перед нею, але після неї все одно є пробіл.
- Поет припиняє йти, коли досягає **картатого прапора** або щойно збирає **сім слів**. Залежно від того, що станеться першим.
- Коли б і як би поет не зупинився, він декламує все, що зібрав. Викликати `recite()` можна лише **один раз**.

## Обмеження

Цю вправу можна розвʼязати багатьма способами, але тут потрібно застосувати ключові слова `continue` і `break`, які ми нещодавно вивчили, тому є кілька правил:

1. У рішенні мають бути і `continue`, і `break`.
2. Не можна використовувати `&&` (логічне і) чи `!`.
3. Не можна писати допоміжні функції.
4. Дозволено лише два рівні відступів:

```javascript

// Дозволено: 2 рівні відступів
repeat() {
  if(...) {
    //...
  }
}

// Не дозволено: 3 рівні відступів
repeat() {
  if(...) {
    if(...) {
    }
  }
}
```

Це означає, що рішення вийде досить «плоским».

Успіхів і веселої гри!
