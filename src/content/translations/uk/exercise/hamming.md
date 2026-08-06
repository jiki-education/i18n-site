---
lang: "uk"
type: "exercise"
slug: "hamming"
title: "Геммінг"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hamming"
en_md5: "00c98b21780410fd419205c5850e1f4b"
governance_sha: "0a8ed07"
content_version: "9f62d7c3841d"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"You used more lines than needed — see if you can trim it down.","target":"У рішенні більше рядків коду, ніж потрібно. Спробуйте зробити його коротшим."}]},{"name":"tasks","rows":[{"key":"calculateHammingDistance.name","english":"Calculate the Hamming Distance","target":"Обчислити відстань Геммінга"},{"key":"calculateHammingDistance.description","english":"Write a function that calculates the Hamming distance between two DNA strands of equal length. The Hamming distance is the number of positions where the corresponding characters differ.","target":"Напишіть функцію, яка обчислює відстань Геммінга між двома ланцюгами ДНК однакової довжини. Відстань Геммінга це кількість позицій, у яких відповідні символи відрізняються."},{"key":"solveInElevenLines.name","english":"Solve in eleven lines of code","target":"Розвʼязати за одинадцять рядків коду"},{"key":"solveInElevenLines.description","english":"Can you solve this using no more than eleven lines of code?","target":"Чи вдасться розвʼязати це, використавши не більше ніж одинадцять рядків коду?"}]},{"name":"scenarios","rows":[{"key":"hammingEmptyStrands.name","english":"Empty strands","target":"Порожні ланцюги"},{"key":"hammingEmptyStrands.description","english":"Empty strands have a Hamming distance of 0.","target":"Порожні ланцюги мають відстань Геммінга 0."},{"key":"hammingSingleLetterIdentical.name","english":"Single letter identical strands","target":"Однакові ланцюги з однієї літери"},{"key":"hammingSingleLetterIdentical.description","english":"Single-letter identical strands have a Hamming distance of 0.","target":"Однакові ланцюги з однієї літери мають відстань Геммінга 0."},{"key":"hammingLongIdenticalStrands.name","english":"Long identical strands","target":"Довгі однакові ланцюги"},{"key":"hammingLongIdenticalStrands.description","english":"Long identical strands have a Hamming distance of 0.","target":"Довгі однакові ланцюги мають відстань Геммінга 0."},{"key":"hammingSingleLetterDifferent.name","english":"Single letter different strands","target":"Різні ланцюги з однієї літери"},{"key":"hammingSingleLetterDifferent.description","english":"Single-letter different strands have a Hamming distance of 1.","target":"Різні ланцюги з однієї літери мають відстань Геммінга 1."},{"key":"hammingLongDifferentStrands.name","english":"Long different strands","target":"Довгі різні ланцюги"},{"key":"hammingLongDifferentStrands.description","english":"Long strands with differences have a calculated Hamming distance.","target":"Для довгих ланцюгів з відмінностями відстань Геммінга обчислюється."},{"key":"hammingBonusElevenLines.name","english":"Eleven lines of code","target":"Одинадцять рядків коду"},{"key":"hammingBonusElevenLines.description","english":"Solve the exercise using no more than eleven lines of code.","target":"Розвʼяжіть вправу, використавши не більше ніж одинадцять рядків коду."}]},{"name":"hints","rows":[{"key":"hammingDistanceMeaning.question","english":"What does 'Hamming distance' mean in plain terms?","target":"Що таке «відстань Геммінга», якщо простими словами?"},{"key":"hammingDistanceMeaning.answer","english":"It's the number of positions where the two strings differ. So 'GAGA' vs 'GATA' differ at position 3 only, giving a distance of 1.","target":"Це кількість позицій, у яких два рядки тексту відрізняються. Наприклад, «GAGA» і «GATA» відрізняються лише в позиції 3, тож відстань дорівнює 1."},{"key":"compareCharactersAtPosition.question","english":"How do I compare characters at the same position in both strings?","target":"Як порівняти символи на однаковій позиції в обох рядках тексту?"},{"key":"compareCharactersAtPosition.answer","english":"You'll need to move through both strings in sync, so you can pull out the character at the same spot from each one as you go.","target":"Треба рухатися обома рядками тексту синхронно, щоб на кожному кроці брати з кожного з них символ з того самого місця."},{"key":"trackDifferenceCount.question","english":"How do I track 'how many differences' there are?","target":"Як відстежувати, «скільки саме відмінностей» назбиралося?"},{"key":"trackDifferenceCount.answer","english":"You'll need something that keeps a running total, adjusted whenever you spot a mismatch, so it's ready to hand back once you've checked every position.","target":"Знадобиться щось, що зберігає поточний підсумок і змінюється щоразу, коли трапляється розбіжність, щоб його можна було повернути, щойно перевірено всі позиції."}]}]}]
---

Це класична вправа з Exercism про молекулярну біологію!

Наше тіло складається з клітин, які містять ДНК. Ці клітини поступово зношуються, і їх треба замінювати, а відбувається це завдяки поділу на дочірні клітини. Насправді в тілі середньостатистичної людини за життя стається близько 10 квадрильйонів поділів клітин!

Коли клітини діляться, їхня ДНК копіюється теж. Іноді під час цього процесу трапляються помилки, і окремі ділянки ДНК записуються з неправильною інформацією. Якщо порівняти два ланцюги ДНК і порахувати відмінності між ними, ми побачимо, скільки помилок сталося. Це називають «відстанню Геммінга».

Відстань Геммінга стає в пригоді в багатьох галузях науки, не лише в біології, тож це корисний термін, який варто знати!

Наше завдання: обчислити відстань Геммінга між двома ланцюгами ДНК. У ДНК використовуються літери C, A, G і T. Два ланцюги можуть виглядати так:

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

Між ними 7 відмінностей, а отже, відстань Геммінга дорівнює 7.

Створіть функцію з назвою `hammingDistance` (відстань Геммінга), яка приймає двоє вхідних даних: два ланцюги ДНК у вигляді рядків тексту (англ. _string_). Вона має повернути число, що дорівнює відстані.

Обидва ланцюги ДНК завжди будуть однакової довжини.
