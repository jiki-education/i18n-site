---
lang: "hu"
type: "exercise"
slug: "leap"
title: "Szökőévek"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/leap"
en_md5: "0e6c7c50ad01b4d9fe07d721fd973afb"
governance_sha: "c80036b"
content_version: "a85a5bb0abdc"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanOneLine","english":"You used more than one line of code within the function.","target":"Több mint egy sor kódot használtál a függvényen belül."}]},{"name":"tasks","rows":[{"key":"determineLeapYear.name","english":"Determine if the year is a leap year","target":"Döntsd el, hogy az év szökőév-e"},{"key":"determineLeapYear.description","english":"Write a function called isLeapYear that takes a year as its input and returns true if it is a leap year, or false if it is not.","target":"Írj egy isLeapYear nevű függvényt, amely egy évet kap bemenetként, és true-t ad vissza, ha szökőév, vagy false-t, ha nem."},{"key":"solveInOneLine.name","english":"Solve in one line of code","target":"Oldd meg egy sor kóddal"},{"key":"solveInOneLine.description","english":"Can you solve this with only one line of code within the function?","target":"Meg tudod oldani egyetlen sor kóddal a függvényen belül?"}]},{"name":"scenarios","rows":[{"key":"year2015.name","english":"Year 2015","target":"2015-ös év"},{"key":"year2015.description","english":"2015 is not divisible by 4 so is not a leap year.","target":"2015 nem osztható 4-gyel maradék nélkül, így nem szökőév."},{"key":"year1970.name","english":"Year 1970","target":"1970-es év"},{"key":"year1970.description","english":"1970 is not divisible by 4 so is not a leap year.","target":"1970 nem osztható 4-gyel maradék nélkül, így nem szökőév."},{"key":"year2100.name","english":"Year 2100","target":"2100-as év"},{"key":"year2100.description","english":"2100 is divisible by 100 but not by 400 so is not a leap year.","target":"2100 osztható 100-zal, de nem osztható 400-zal, így nem szökőév."},{"key":"year1900.name","english":"Year 1900","target":"1900-as év"},{"key":"year1900.description","english":"1900 is divisible by 100 but not by 400 so is not a leap year.","target":"1900 osztható 100-zal, de nem osztható 400-zal, így nem szökőév."},{"key":"year1800.name","english":"Year 1800","target":"1800-as év"},{"key":"year1800.description","english":"1800 is divisible by 100 but not by 400 so is not a leap year.","target":"1800 osztható 100-zal, de nem osztható 400-zal, így nem szökőév."},{"key":"year2000.name","english":"Year 2000","target":"2000-es év"},{"key":"year2000.description","english":"2000 is divisible by 400 so is a leap year.","target":"2000 osztható 400-zal, így szökőév."},{"key":"year2400.name","english":"Year 2400","target":"2400-es év"},{"key":"year2400.description","english":"2400 is divisible by 400 so is a leap year.","target":"2400 osztható 400-zal, így szökőév."},{"key":"year1996.name","english":"Year 1996","target":"1996-os év"},{"key":"year1996.description","english":"1996 is divisible by 4 but not by 100 so is a leap year.","target":"1996 osztható 4-gyel, de nem osztható 100-zal, így szökőév."},{"key":"year1960.name","english":"Year 1960","target":"1960-as év"},{"key":"year1960.description","english":"1960 is divisible by 4 but not by 100 so is a leap year.","target":"1960 osztható 4-gyel, de nem osztható 100-zal, így szökőév."},{"key":"bonus1.name","english":"One line of code","target":"Egy sor kód"},{"key":"bonus1.description","english":"Solve the exercise with only one line of code within the function.","target":"Oldd meg a feladatot egyetlen sor kóddal a függvényen belül."}]},{"name":"hints","rows":[{"key":"basicRule.question","english":"What's the basic rule for a leap year?","target":"Mi a szökőévek alapszabálya?"},{"key":"basicRule.answer","english":"Years divisible by 4 are leap years. So `year % 4 === 0` is the starting test.","target":"A 4-gyel osztható évek szökőévek. Tehát a `year % 4 === 0` a kiinduló feltétel."},{"key":"exceptions.question","english":"Are there exceptions?","target":"Vannak kivételek?"},{"key":"exceptions.answer","english":"Yes. Years divisible by 100 are NOT leap years, even though they're divisible by 4. For example, 1900 isn't a leap year.","target":"Igen. A 100-zal osztható évek NEM szökőévek, bár oszthatók 4-gyel. Például 1900 nem szökőév."},{"key":"exceptionsToExceptions.question","english":"Are there exceptions to the exception?","target":"Vannak kivételek a kivétel alól?"},{"key":"exceptionsToExceptions.answer","english":"Yes. Years divisible by 400 ARE leap years after all. For example, 2000 is. So the rule cascades: divisible by 4, but not by 100, unless also by 400.","target":"Igen. A 400-zal osztható évek mégis szökőévek. Például 2000 az. Tehát a szabály így rétegződik: osztható 4-gyel, de nem 100-zal, kivéve, ha 400-zal is osztható."},{"key":"checkDivisibility.question","english":"How do I check divisibility?","target":"Hogyan ellenőrizhetem az oszthatóságot?"},{"key":"checkDivisibility.answer","english":"Use the remainder operator `%`. `year % 4 === 0` is true when the year divides exactly by 4 with nothing left over. Same trick with 100 and 400.","target":"Használd a maradék operátort (`%`). A `year % 4 === 0` akkor igaz, ha az év maradék nélkül osztható 4-gyel. Ugyanez a trükk működik 100-zal és 400-zal is."}]}]}]
---

Ebben a feladatban a szökőévekkel ismerkedünk!

A szökőév (a Gergely-naptár szerint) akkor következik be:

- Minden olyan évben, amelyik maradék nélkül osztható 4-gyel.
- Kivéve, ha az év 100-zal is osztható maradék nélkül: ekkor csak akkor szökőév, ha 400-zal is osztható maradék nélkül.

Néhány példa:

- 1997 nem volt szökőév, mert nem osztható 4-gyel.
- 1900 nem volt szökőév, mert nem osztható 400-zal.
- 2000 szökőév volt!

A feladatod, hogy írj egy `isLeapYear` (szökőév-e) nevű függvényt, amely bemenetként egy évet kap, és `true`-t ad vissza, ha az szökőév, vagy `false`-t, ha nem.

Szánj rá időt! Gondold át alaposan, mielőtt nekiállsz!
