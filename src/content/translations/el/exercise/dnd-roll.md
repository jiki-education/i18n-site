---
lang: "el"
type: "exercise"
slug: "dnd-roll"
title: "Ζαριά D&D"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/dnd-roll"
en_md5: "9f9dc476ef35afe5b76effc918ca5771"
governance_sha: "8f081e8"
content_version: "191a074b255e"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"unknownDice","english":"Sorry - Jiki doesn't have a {{sides}} sided dice handy!","target":"Συγγνώμη - ο Jiki δεν έχει πρόχειρο ένα ζάρι {{sides}} πλευρών!"},{"key":"announceNumber","english":"You can only announce a number","target":"Μπορείς να ανακοινώσεις μόνο έναν αριθμό"},{"key":"attackNumber","english":"Attack must be a number","target":"Η επίθεση πρέπει να είναι αριθμός"},{"key":"damageNumber","english":"Damage must be a number","target":"Η ζημιά πρέπει να είναι αριθμός"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled a die and got ${return}","target":"έριξε ένα ζάρι και πήρε ${return}"},{"key":"announce","english":"announced ${arg1}","target":"ανακοίνωσε ${arg1}"},{"key":"strike","english":"struck the goblin with attack ${arg1} and damage ${arg2}","target":"χτύπησε το γκόμπλιν με επίθεση ${arg1} και ζημιά ${arg2}"}]},{"name":"checks","rows":[{"key":"announcementCount","english":"Expected 3 announcements but got {{got}}. Make sure you announce each roll.","target":"Αναμένονταν 3 ανακοινώσεις αλλά πήρες {{got}}. Φρόντισε να ανακοινώσεις κάθε ρίψη."},{"key":"firstAnnouncement","english":"Expected the first announcement to be {{attack}} (the attack roll) but got {{got}}.","target":"Η πρώτη ανακοίνωση έπρεπε να είναι {{attack}} (η ζαριά επίθεσης) αλλά πήρες {{got}}."},{"key":"secondAnnouncement","english":"Expected the second announcement to be {{damage}} (the base damage roll) but got {{got}}.","target":"Η δεύτερη ανακοίνωση έπρεπε να είναι {{damage}} (η βασική ζαριά ζημιάς) αλλά πήρες {{got}}."},{"key":"thirdAnnouncement","english":"Expected the third announcement to be {{bonus}} (the bonus roll) but got {{got}}.","target":"Η τρίτη ανακοίνωση έπρεπε να είναι {{bonus}} (η επιπλέον ζαριά ζημιάς) αλλά πήρες {{got}}."},{"key":"notStruck","english":"You didn't strike the goblin. Make sure you call <code>strike()</code>.","target":"Δεν χτύπησες το γκόμπλιν. Φρόντισε να καλέσεις τη <code>strike()</code>."},{"key":"wrongAttack","english":"Expected the attack to be {{attack}} but got {{got}}. Pass the attack roll to <code>strike()</code>.","target":"Η επίθεση έπρεπε να είναι {{attack}} αλλά πήρες {{got}}. Πέρασε τη ζαριά επίθεσης στη <code>strike()</code>."},{"key":"wrongDamage","english":"Expected total damage to be {{totalDamage}} ({{damage}} + {{bonus}}) but got {{got}}. Add the base damage and bonus together.","target":"Η συνολική ζημιά έπρεπε να είναι {{totalDamage}} ({{damage}} + {{bonus}}) αλλά πήρες {{got}}. Πρόσθεσε τη βασική ζημιά και την επιπλέον ζημιά μαζί."}]},{"name":"tasks","rows":[{"key":"rollAndStrike.name","english":"Roll the dice and strike the goblin","target":"Ρίξε τα ζάρια και χτύπα το γκόμπλιν"},{"key":"rollAndStrike.description","english":"Roll three dice (d20 for attack, d12 for base damage, d10 for bonus), announce each roll, then strike the goblin with your attack roll and total damage (base + bonus).","target":"Ρίξε τρία ζάρια (d20 για επίθεση, d12 για βασική ζημιά, d10 για επιπλέον ζημιά), ανακοίνωσε κάθε ζαριά και μετά χτύπα το γκόμπλιν με τη ζαριά επίθεσης και τη συνολική ζημιά (βασική + επιπλέον)."}]},{"name":"scenarios","rows":[{"key":"randomRolls.name","english":"Roll and strike","target":"Ρίξε και χτύπα"},{"key":"randomRolls.description","english":"Roll d20 for attack, d12 for base damage, d10 for bonus. Strike the goblin with your attack and total damage.","target":"Ρίξε d20 για επίθεση, d12 για βασική ζημιά, d10 για επιπλέον ζημιά. Χτύπα το γκόμπλιν με την επίθεση και τη συνολική ζημιά σου."}]},{"name":"hints","rows":[{"key":"chooseDie.question","english":"How do I choose what type of die to use?","target":"Πώς επιλέγω τι τύπο ζαριού να χρησιμοποιήσω;"},{"key":"chooseDie.answer","english":"For a 20 sided dice, use 20 as the input to roll - e.g. `roll(20)`. For a 12 sided dice, call `roll(12)`.","target":"Για ένα εικοσάπλευρο ζάρι, χρησιμοποίησε το 20 ως είσοδο στη ρίψη - π.χ. `roll(20)`. Για ένα δωδεκάπλευρο ζάρι, κάλεσε τη `roll(12)`."}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls a die with the given number of sides and **returns** the result.","target":"Ρίχνει ένα ζάρι με τον δοσμένο αριθμό πλευρών και **επιστρέφει** το αποτέλεσμα."},{"key":"roll.category","english":"Dice","target":"Ζάρια"},{"key":"announce.description","english":"Announces a dice roll value.","target":"Ανακοινώνει μια τιμή ρίψης ζαριού."},{"key":"announce.category","english":"Action","target":"Ενέργεια"},{"key":"strike.description","english":"Strikes the goblin with the given attack roll and total damage.","target":"Χτυπά το γκόμπλιν με τη δεδομένη ζαριά επίθεσης και τη συνολική ζημιά."},{"key":"strike.category","english":"Action","target":"Ενέργεια"}]}]}]
---

Δημιουργείς ένα bot που μπορεί να παίξει Dungeons and Dragons (DnD). Αν δεν γνωρίζεις το DnD, η βασική ιδέα είναι ότι συναντάς πολλά σενάρια και ρίχνεις ζάρια για να δεις τι συμβαίνει. Υπάρχουν πολλά διαφορετικά ζάρια με διαφορετικές πλευρές (όχι μόνο το εξάπλευρο ζάρι που ίσως έχεις συνηθίσει!)

Ένα σενάριο που πρέπει να χειριστείς είναι η συνάντηση με ένα γκόμπλιν. Για να επιτεθείς στο γκόμπλιν, πρέπει να:

- Δημιούργησε μια **βαθμολογία επίθεσης** ρίχνοντας ένα εικοσάπλευρο ζάρι.
- Δημιούργησε μια **βασική βαθμολογία ζημιάς** ρίχνοντας ένα δωδεκάπλευρο ζάρι.
- Δημιούργησε μια **επιπλέον βαθμολογία ζημιάς** ρίχνοντας ένα δεκάπλευρο ζάρι.
- Πρόσθεσε τη βασική ζημιά και την επιπλέον ζημιά για να βρεις τη **συνολική ζημιά**.
- Χτύπα το γκόμπλιν με τη ζαριά επίθεσης και τη συνολική ζημιά.

Κάθε φορά που ρίχνεις ένα ζάρι, πρέπει να ανακοινώνεις τον αριθμό που έφερες στους άλλους παίκτες. Αν προσπαθήσεις να χτυπήσεις χωρίς να ανακοινώσεις τους αριθμούς, μπορεί να νομίζουν ότι κλέβεις!

Έχεις τρεις συναρτήσεις που μπορείς να χρησιμοποιήσεις:

- `` `roll(sides)` `` (ρίψη ζαριού) ρίχνει ένα ζάρι με τον δοσμένο αριθμό πλευρών. Αυτή η συνάρτηση επιστρέφει (_returns_ στα αγγλικά) το αποτέλεσμα.
- `` `announce(value)` `` (ανακοίνωση) ανακοινώνει μια ρίψη ζαριού.
- `` `strike(attack, damage)` `` (χτύπημα) χτυπά το γκόμπλιν με τη ζαριά επίθεσης και τη συνολική ζημιά.

**Σημαντικό:** Κάθε φορά που καλείς τη `roll()`, ο Jiki ρίχνει ένα ζάρι και παίρνει διαφορετικό αριθμό. Μην περιμένεις ότι ρίχνοντας το ίδιο ζάρι δύο φορές θα δώσει τον ίδιο αριθμό κάθε φορά.
