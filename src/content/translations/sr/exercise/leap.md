---
lang: "sr"
type: "exercise"
slug: "leap"
title: "Prestupne godine"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/leap"
en_md5: "0e6c7c50ad01b4d9fe07d721fd973afb"
governance_sha: "c80036b"
content_version: "314b388fc08e"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanOneLine","english":"You used more than one line of code within the function.","target":"Koristiš više od jedne linije koda unutar funkcije."}]},{"name":"tasks","rows":[{"key":"determineLeapYear.name","english":"Determine if the year is a leap year","target":"Odredi da li je godina prestupna"},{"key":"determineLeapYear.description","english":"Write a function called isLeapYear that takes a year as its input and returns true if it is a leap year, or false if it is not.","target":"Napiši funkciju pod nazivom `isLeapYear` koja prima godinu kao ulaz i vraća `true` ako je prestupna, odnosno `false` ako nije."},{"key":"solveInOneLine.name","english":"Solve in one line of code","target":"Reši u jednoj liniji koda"},{"key":"solveInOneLine.description","english":"Can you solve this with only one line of code within the function?","target":"Možeš li da rešiš ovo koristeći samo jednu liniju koda unutar funkcije?"}]},{"name":"scenarios","rows":[{"key":"year2015.name","english":"Year 2015","target":"Godina 2015"},{"key":"year2015.description","english":"2015 is not divisible by 4 so is not a leap year.","target":"2015. nije deljiva sa 4, tako da nije prestupna."},{"key":"year1970.name","english":"Year 1970","target":"Godina 1970"},{"key":"year1970.description","english":"1970 is not divisible by 4 so is not a leap year.","target":"1970. nije deljiva sa 4, tako da nije prestupna."},{"key":"year2100.name","english":"Year 2100","target":"Godina 2100"},{"key":"year2100.description","english":"2100 is divisible by 100 but not by 400 so is not a leap year.","target":"2100. je deljiva sa 100, ali ne i sa 400, tako da nije prestupna."},{"key":"year1900.name","english":"Year 1900","target":"Godina 1900"},{"key":"year1900.description","english":"1900 is divisible by 100 but not by 400 so is not a leap year.","target":"1900. je deljiva sa 100, ali ne i sa 400, tako da nije prestupna."},{"key":"year1800.name","english":"Year 1800","target":"Godina 1800"},{"key":"year1800.description","english":"1800 is divisible by 100 but not by 400 so is not a leap year.","target":"1800. je deljiva sa 100, ali ne i sa 400, tako da nije prestupna."},{"key":"year2000.name","english":"Year 2000","target":"Godina 2000"},{"key":"year2000.description","english":"2000 is divisible by 400 so is a leap year.","target":"2000. je deljiva sa 400, tako da je prestupna."},{"key":"year2400.name","english":"Year 2400","target":"Godina 2400"},{"key":"year2400.description","english":"2400 is divisible by 400 so is a leap year.","target":"2400. je deljiva sa 400, tako da je prestupna."},{"key":"year1996.name","english":"Year 1996","target":"Godina 1996"},{"key":"year1996.description","english":"1996 is divisible by 4 but not by 100 so is a leap year.","target":"1996. je deljiva sa 4, ali ne i sa 100, tako da je prestupna."},{"key":"year1960.name","english":"Year 1960","target":"Godina 1960"},{"key":"year1960.description","english":"1960 is divisible by 4 but not by 100 so is a leap year.","target":"1960. je deljiva sa 4, ali ne i sa 100, tako da je prestupna."},{"key":"bonus1.name","english":"One line of code","target":"Jedna linija koda"},{"key":"bonus1.description","english":"Solve the exercise with only one line of code within the function.","target":"Reši vežbu koristeći samo jednu liniju koda unutar funkcije."}]},{"name":"hints","rows":[{"key":"basicRule.question","english":"What's the basic rule for a leap year?","target":"Koje je osnovno pravilo za prestupnu godinu?"},{"key":"basicRule.answer","english":"Years divisible by 4 are leap years. So `year % 4 === 0` is the starting test.","target":"Godine deljive sa 4 su prestupne. Dakle, `year % 4 === 0` je početni test."},{"key":"exceptions.question","english":"Are there exceptions?","target":"Da li postoje izuzeci?"},{"key":"exceptions.answer","english":"Yes. Years divisible by 100 are NOT leap years, even though they're divisible by 4. For example, 1900 isn't a leap year.","target":"Da. Godine deljive sa 100 NISU prestupne, iako su deljive sa 4. Na primer, 1900. nije prestupna."},{"key":"exceptionsToExceptions.question","english":"Are there exceptions to the exception?","target":"Da li postoje izuzeci od izuzetka?"},{"key":"exceptionsToExceptions.answer","english":"Yes. Years divisible by 400 ARE leap years after all. For example, 2000 is. So the rule cascades: divisible by 4, but not by 100, unless also by 400.","target":"Da. Godine deljive sa 400 su ipak prestupne. Na primer, 2000. je prestupna. Dakle, pravilo se grana: deljiva sa 4, ali ne i sa 100, osim ako je takođe deljiva sa 400."},{"key":"checkDivisibility.question","english":"How do I check divisibility?","target":"Kako da proverim deljivost?"},{"key":"checkDivisibility.answer","english":"Use the remainder operator `%`. `year % 4 === 0` is true when the year divides exactly by 4 with nothing left over. Same trick with 100 and 400.","target":"Koristi operator ostatka `%`. `year % 4 === 0` je tačno kada je godina deljiva sa 4 bez ostatka. Isti trik važi i za 100 i za 400."}]}]}]
---

U ovoj vežbi istražujemo prestupne godine!

Prestupna godina (po Gregorijanskom kalendaru) nastupa:

- u svakoj godini koja je deljiva sa 4 bez ostatka.
- osim ako je godina deljiva sa 100 bez ostatka, u kom slučaju je prestupna samo ako je godina takođe deljiva sa 400 bez ostatka.

Nekoliko primera:

- 1997. nije bila prestupna godina jer nije deljiva sa 4.
- 1900. nije bila prestupna godina jer nije deljiva sa 400.
- 2000. je bila prestupna godina!

Tvoj zadatak je da napišeš funkciju pod nazivom `isLeapYear` (da li je prestupna godina) koja prima godinu kao ulaz i vraća `true` ako je prestupna, odnosno `false` ako nije.

Uzmi vremena za ovaj zadatak. Dobro razmisli pre nego što počneš!
