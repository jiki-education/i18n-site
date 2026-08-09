---
lang: "fr"
type: "exercise"
slug: "collatz-conjecture"
title: "La conjecture de Collatz"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/collatz-conjecture"
en_md5: "6fbe47d0456ca4f5db8e74b3f6de3cb0"
governance_sha: "84303b0"
content_version: "c35f54f07d51"
published_at: "2026-08-08"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"calculateCollatzSteps.name","english":"Calculate Collatz steps","target":"Calcule les étapes de Collatz"},{"key":"calculateCollatzSteps.description","english":"Write a function that takes a number and returns how many steps it takes to reach 1 following the Collatz Conjecture rules: if even, divide by 2; if odd, multiply by 3 and add 1.","target":"Écris une fonction qui prend un nombre et renvoie le nombre d'étapes qu'il faut pour atteindre 1 en suivant les règles de la conjecture de Collatz : s'il est pair, divise-le par 2 ; s'il est impair, multiplie-le par 3 et ajoute 1."}]},{"name":"scenarios","rows":[{"key":"number1.name","english":"Number 1","target":"Nombre 1"},{"key":"number1.description","english":"Zero steps for one.","target":"Zéro étape pour un."},{"key":"number16.name","english":"Number 16","target":"Nombre 16"},{"key":"number16.description","english":"Divide if even.","target":"Divise si le nombre est pair."},{"key":"number12.name","english":"Number 12","target":"Nombre 12"},{"key":"number12.description","english":"Even and odd steps.","target":"Des étapes avec des nombres pairs et impairs."},{"key":"number1000000.name","english":"Number 1000000","target":"Nombre 1000000"},{"key":"number1000000.description","english":"Large number of even and odd steps.","target":"Un grand nombre d'étapes avec des nombres pairs et impairs."}]},{"name":"hints","rows":[{"key":"loopUntilOne.question","english":"How do I keep going until the number reaches 1?","target":"Comment continuer jusqu'à ce que le nombre atteigne 1 ?"},{"key":"loopUntilOne.answer","english":"Use a `repeat()` loop with no number — it repeats forever until you `return` out of it. Inside the loop, replace the number with the next number in the sequence, and return once it reaches 1.","target":"Utilise une boucle `repeat()` sans nombre : elle se répète indéfiniment jusqu'à ce que tu en sortes avec `return`. Dans la boucle, remplace le nombre par le nombre suivant de la séquence, et renvoie le résultat une fois qu'il atteint 1."},{"key":"chooseRule.question","english":"How do I decide which rule to apply on each step?","target":"Comment décider quelle règle appliquer à chaque étape ?"},{"key":"chooseRule.answer","english":"Check whether the number is even. The modulo operator does this. `number % 2 === 0` means it's even. If even, halve it. Otherwise, do `3 * number + 1`.","target":"Vérifie si le nombre est pair. C'est le rôle de l'opérateur modulo. `number % 2 === 0` signifie qu'il est pair. S'il est pair, divise-le par deux. Sinon, calcule `3 * number + 1`."},{"key":"trackSteps.question","english":"How do I track the answer (the number of steps)?","target":"Comment garder trace de la réponse (le nombre d'étapes) ?"},{"key":"trackSteps.answer","english":"Keep a counter variable for how many times you've applied the rules. Think about what needs to happen to it each time round the loop, and what your function should return when the number reaches 1.","target":"Garde une variable compteur pour le nombre de fois où tu as appliqué les règles. Réfléchis à ce qui doit lui arriver à chaque tour de boucle, et à ce que ta fonction doit renvoyer quand le nombre atteint 1."}]}]}]
---

Un soir, tu tombes sur un vieux carnet rempli de gribouillis énigmatiques, comme si quelqu'un avait poursuivi une idée de façon obsessionnelle. Sur une page, une question ressort : **Tout nombre finit-il par atteindre 1 ?** Elle est liée à ce qu'on appelle la **conjecture de Collatz**, un casse-tête qui déroute les penseurs depuis des décennies.

Les règles sont d'une simplicité trompeuse :

1. Choisis un nombre.
2. S'il est pair, divise-le par 2.
3. S'il est impair, multiplie-le par 3, puis ajoute 1.
4. Répète l'opération avec le résultat, indéfiniment.

Par exemple, en partant de 12 :

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

En comptant à partir du deuxième nombre (6), il a fallu 9 étapes pour atteindre 1.

Crée une fonction appelée `collatzSteps` (étapes de Collatz) qui prend une entrée, un nombre. Renvoie **le nombre d'étapes** qu'il faut pour aller d'un nombre donné à 1, en suivant les règles de la conjecture de Collatz.
