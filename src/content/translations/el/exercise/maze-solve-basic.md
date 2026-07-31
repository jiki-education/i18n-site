---
lang: "el"
type: "exercise"
slug: "maze-solve-basic"
title: "Λύσε τον λαβύρινθο"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "e4864f3"
content_version: "b1f4619b72cb"
published_at: "2026-07-31"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Δεν έφτασες στο τέλος του λαβύρινθου."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Οδήγησε το ανθρωπάκι στο τέλος του λαβύρινθου"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Βρες τον δρόμο σου μέσα από τον λαβύρινθο για να φτάσεις στον πράσινο στόχο"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Οδήγησε το ανθρωπάκι στο τέλος του λαβύρινθου"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Η δουλειά σου είναι να οδηγήσεις το ανθρωπάκι σου μέσα από τον λαβύρινθο, μέχρι το πράσινο τετράγωνο του στόχου."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Τι μετακινώ και πού;"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Μετακινείς το ανθρωπάκι, που ξεκινάει πάνω αριστερά, μέχρι τον πράσινο κύκλο κάτω δεξιά, αποφεύγοντας τα κόκκινα ριγέ κελιά."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Όταν στρίβω αριστερά, το ανθρωπάκι στρίβει δεξιά!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"Το ανθρωπάκι στρίβει σε σχέση με την κατεύθυνση που κοιτάζει. Αν, για παράδειγμα, κοιτάζει δεξιά και στρίψεις αριστερά, θα κοιτάζει πλέον προς τα πάνω."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"Ωχ όχι, προσπάθησες να πέσεις από την άκρη του λαβύρινθου!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Άουτς, έπεσες πάνω σε τοίχο!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Άουτς! Μπήκες μέσα στη φωτιά!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Μπλιαχ! Πάτησες τα κακά! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Μετακινεί το ανθρωπάκι ένα κελί μπροστά"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Στρέφει το ανθρωπάκι 90 μοίρες αριστερά"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Στρέφει το ανθρωπάκι 90 μοίρες δεξιά"}]}]}]
---

Καλώς όρισες στην πρώτη σου άσκηση!

Σκοπός αυτής της άσκησης είναι να εξοικειωθείς με το πώς λειτουργεί το περιβάλλον μάθησης. Η δουλειά σου είναι να λύσεις τον λαβύρινθο που βλέπεις αριστερά, δίνοντας εντολές στο ανθρωπάκι. Γράφεις όλες τις εντολές που πρέπει να ακολουθήσει το ανθρωπάκι και μετά πατάς **Εκτέλεση κώδικα** για να τις εκτελέσει.

Οι τρεις εντολές που μπορείς να χρησιμοποιήσεις είναι:

- `move()` (κίνηση), που μετακινεί τον χαρακτήρα ένα βήμα μπροστά
- `turnLeft()` (στροφή αριστερά), που στρίβει τον χαρακτήρα αριστερά (σε σχέση με την κατεύθυνση που κοιτάζει εκείνη τη στιγμή)
- `turnRight()` (στροφή δεξιά), που στρίβει τον χαρακτήρα δεξιά (σε σχέση με την κατεύθυνση που κοιτάζει εκείνη τη στιγμή)

Όπως βλέπεις, τις τρεις πρώτες εντολές τις έχουμε ήδη γράψει για σένα στα αριστερά. Ξεκίνα πατώντας το κουμπί **"Εκτέλεση κώδικα"** για να δεις τι κάνουν. Μετά **πρόσθεσε κι άλλες εντολές**, ώστε ο χαρακτήρας σου να φτάσει στο τέλος του λαβύρινθου. Γράψε μία εντολή σε κάθε γραμμή και μετά πάτα **Εκτέλεση κώδικα** για να τρέξουν όλες.

Είναι καλή συνήθεια να τρέχεις τον κώδικά σου τακτικά!

Μόλις λύσεις τον λαβύρινθο, μπορείς να επιστρέψεις στον πίνακα ελέγχου και να ξεκινήσεις την επόμενη ενότητα.
