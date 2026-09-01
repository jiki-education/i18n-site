---
lang: "fr"
type: "exercise"
slug: "adventures-in-poetry"
title: "Aventures en poésie"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/adventures-in-poetry"
en_md5: "a96229480a3c3436106703c743bb3c32"
governance_sha: "9ded16c5"
content_version: "7d06b1f1007f"
published_at: "2026-09-01"
forum_topic_id: 2247
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"endOfPath","english":"The poet has walked off the end of the path. Something should have stopped the walk before now.","target":"Le poète a dépassé le bout du chemin. Quelque chose aurait dû arrêter la marche avant."},{"key":"isEmojiString","english":"You can only check whether a piece of text is an emoji.","target":"Tu peux seulement vérifier si un morceau de texte est un emoji."},{"key":"reciteString","english":"You can only recite a piece of text.","target":"Tu peux seulement réciter un morceau de texte."}]},{"name":"checks","rows":[{"key":"notRecited","english":"The poet never recited anything. Make sure you call <code>recite()</code> once the walk is over.","target":"Le poète n'a rien récité. Vérifie que tu appelles <code>recite()</code> une fois la marche terminée."},{"key":"wrongPoem","english":"The poet recited \"{{got}}\" but the poem should be \"{{expected}}\".","target":"Le poète a récité « {{got}} », alors que le poème aurait dû être « {{expected}} »."},{"key":"noFunctions","english":"Write your solution as one walk, without defining any functions of your own.","target":"Écris ta solution comme une seule marche, sans définir tes propres fonctions."},{"key":"reciteOnce","english":"The poet should recite the poem once, after the walk has finished.","target":"Le poète doit réciter le poème une seule fois, après la fin de la marche."},{"key":"tooDeeplyNested","english":"Your code nests too deeply. You are only allowed two levels, so a loop with an <code>if</code> inside it, but nothing inside that <code>if</code>.","target":"Ton code est trop imbriqué. Tu n'as droit qu'à deux niveaux : une boucle avec un <code>if</code> à l'intérieur, mais rien à l'intérieur de ce <code>if</code>."},{"key":"noAndOrNot","english":"This exercise is about a different way of making decisions, so <code>&&</code> and <code>!</code> are not allowed here. <code>||</code> is fine.","target":"Cet exercice porte sur une autre façon de prendre des décisions, donc <code>&&</code> et <code>!</code> ne sont pas autorisés ici. <code>||</code> reste permis."},{"key":"needsContinue","english":"Your solution needs to use <code>continue</code>.","target":"Ta solution doit utiliser <code>continue</code>."},{"key":"needsBreak","english":"Your solution needs to use <code>break</code>.","target":"Ta solution doit utiliser <code>break</code>."},{"key":"tooManyLines","english":"Your solution is longer than it needs to be. See if you can get it down by handling each kind of square in one place.","target":"Ta solution est plus longue que nécessaire. Essaie de la raccourcir en gérant chaque type de case à un seul endroit."}]},{"name":"tasks","rows":[{"key":"collectThePoem.name","english":"Collect the poem and recite it","target":"Récolte le poème et récite-le"},{"key":"collectThePoem.description","english":"Walk along the path, gather the words of the poem, stop in the right place, and recite what you gathered.","target":"Parcours le chemin, récolte les mots du poème, arrête-toi au bon endroit et récite ce que tu as récolté."},{"key":"solveTightly.name","english":"Tighten it up","target":"Raccourcis ton code"},{"key":"solveTightly.description","english":"Solve the same walk, but get your code down to the line limit.","target":"Résous la même marche, mais fais tenir ton code dans la limite de lignes."}]},{"name":"scenarios","rows":[{"key":"hope.name","english":"A path with gaps","target":"Un chemin avec des trous"},{"key":"hope.description","english":"Six words with bare grass between them, and a checkered flag at the end.","target":"Six mots séparés par de l'herbe nue, et un drapeau à damier à la fin."},{"key":"wandered.name","english":"Scenery on the path","target":"Du décor sur le chemin"},{"key":"wandered.description","english":"The same idea, but now there are plants and creatures growing between the words.","target":"La même idée, mais des plantes et des créatures poussent maintenant entre les mots."},{"key":"mists.name","english":"Scenery next to the flag","target":"Du décor à côté du drapeau"},{"key":"mists.description","english":"A leaf sits on the square just before the checkered flag.","target":"Une feuille occupe la case juste avant le drapeau à damier."},{"key":"notLost.name","english":"Exactly seven words","target":"Exactement sept mots"},{"key":"notLost.description","english":"A line with seven words on it, so the poet stops counting before the flag.","target":"Un vers de sept mots, donc le poète s'arrête grâce au compte avant d'atteindre le drapeau."},{"key":"hopeContinued.name","english":"A poem that is too long","target":"Un poème trop long"},{"key":"hopeContinued.description","english":"This path holds more than seven words, so the poet stops part way through the line.","target":"Ce chemin contient plus de sept mots, donc le poète s'arrête au milieu du vers."},{"key":"highlands.name","english":"An apostrophe","target":"Une apostrophe"},{"key":"highlands.description","english":"A line of Burns, with an apostrophe sitting on its own square.","target":"Un vers de Burns, avec une apostrophe sur sa propre case."},{"key":"heartScenery.name","english":"Scenery after an apostrophe","target":"Du décor après une apostrophe"},{"key":"heartScenery.description","english":"A mushroom grows between the apostrophe and the word it joins to, so whatever remembers the spacing has to survive a skipped square.","target":"Un champignon pousse entre l'apostrophe et le mot qu'elle relie, donc ce qui mémorise l'espacement doit survivre à une case ignorée."},{"key":"tyger.name","english":"A comma","target":"Une virgule"},{"key":"tyger.description","english":"A line of Blake, with a comma sitting on its own square.","target":"Un vers de Blake, avec une virgule sur sa propre case."},{"key":"pleure.name","english":"Bare grass to begin","target":"De l'herbe nue pour commencer"},{"key":"pleure.description","english":"A line of Verlaine, with a few empty squares before the poem starts.","target":"Un vers de Verlaine, avec quelques cases vides avant le début du poème."},{"key":"yasegaeru.name","english":"A line of Issa","target":"Un vers d'Issa"},{"key":"yasegaeru.description","english":"Seven words of haiku, with a line limit to keep your guards tight.","target":"Sept mots de haïku, avec une limite de lignes pour garder tes conditions bien serrées. La solution la plus soignée tient en 32 lignes."}]},{"name":"hints","rows":[{"key":"scenery.question","english":"The plants and creatures are ending up in my poem.","target":"Les plantes et les créatures se retrouvent dans mon poème."},{"key":"scenery.answer","english":"Only words belong in the poem. Everything else on the path needs to be left behind, which means your loop has to get to the next square without adding anything.","target":"Seuls les mots ont leur place dans le poème. Tout le reste doit être laissé de côté, ce qui signifie que ta boucle doit passer à la case suivante sans rien ajouter."},{"key":"flagSkipped.question","english":"My poet never stops walking.","target":"Mon poète ne s'arrête jamais de marcher."},{"key":"flagSkipped.answer","english":"The checkered flag is an emoji too. If you deal with scenery before you deal with the flag, the flag gets treated as scenery and the walk never ends. Order matters.","target":"Le drapeau à damier est lui aussi un emoji. Si tu traites le décor avant de traiter le drapeau, le drapeau est considéré comme du décor et la marche ne se termine jamais. L'ordre compte."},{"key":"spacing.question","english":"My words are all squashed together, or there is a space at the start.","target":"Mes mots sont tous collés, ou il y a un espace au début."},{"key":"spacing.answer","english":"Think about when a space is needed. It is needed **between** two words, not before the first one, so something has to remember whether anything has been written yet.","target":"Réfléchis au moment où un espace est nécessaire. Il en faut un **entre** deux mots, pas avant le premier, donc quelque chose doit mémoriser si un mot a déjà été écrit."},{"key":"apostrophe.question","english":"I am getting `heart ' s` instead of `heart's`.","target":"J'obtiens `heart ' s` au lieu de `heart's`."},{"key":"apostrophe.answer","english":"An apostrophe joins the words on either side of it, so no space belongs before it or after it. A comma is the opposite way round, with no space before it but a space after.","target":"Une apostrophe relie les mots situés de part et d'autre, donc aucun espace n'a sa place avant ou après elle. Une virgule fonctionne dans l'autre sens : pas d'espace avant, mais un espace après."},{"key":"reciteOnce.question","english":"Why can I only call `recite()` once?","target":"Pourquoi je ne peux appeler `recite()` qu'une seule fois ?"},{"key":"reciteOnce.answer","english":"The poet recites the finished poem, so there is only one moment where that can happen. There is more than one way for the walk to end, and all of them need to reach that same moment.","target":"Le poète récite le poème terminé, donc il n'existe qu'un seul moment où cela peut se produire. La marche peut se terminer de plusieurs façons, et toutes doivent aboutir à ce même moment."}]},{"name":"describers","rows":[{"key":"move","english":"walked forward and found ${return}","target":"a avancé et a trouvé ${return}"},{"key":"isEmoji","english":"checked whether ${arg1} was an emoji","target":"a vérifié si ${arg1} était un emoji"},{"key":"recite","english":"recited \"${arg1}\"","target":"a récité « ${arg1} »"}]},{"name":"functions","rows":[{"key":"move.description","english":"Walks the poet forward onto the next square and **returns** whatever was on it.","target":"Fait avancer le poète sur la case suivante et **renvoie** ce qui s'y trouvait."},{"key":"move.category","english":"Movement","target":"Déplacement"},{"key":"isEmoji.description","english":"**Returns** `true` if the thing you pass it is an emoji.","target":"Renvoie `true` si ce que tu lui passes est un emoji."},{"key":"isEmoji.category","english":"Checks","target":"Vérifications"},{"key":"recite.description","english":"Makes the poet recite a poem out loud.","target":"Fait réciter un poème à voix haute au poète."},{"key":"recite.category","english":"Action","target":"Action"}]}]}]
---

Tu crées un jeu de poésie robotique appelé « Aventures en poésie ». Pour commencer, tu dois programmer le robot pour qu'il collecte des mots tout en marchant, puis, à la fin, qu'il récite le poème.

Chaque case contient l'une de ces quatre choses :

1. Rien (`""`)
2. Un **mot** du poème.
3. Un élément de décor comme une feuille ou un papillon (un emoji).
4. Un drapeau à damier (`🏁`), qui indique au robot de s'arrêter.

Pour t'aider, tu disposes de quelques fonctions. D'abord, la fonction `move()`, qui dit au robot poétique d'avancer sur la case suivante et renvoie ce qui s'y trouvait. Ensuite, la fonction `isEmoji(thing)`, qui renvoie un booléen indiquant si la _string_ que tu lui passes est un emoji. Et enfin, la fonction `recite(poem)`, que tu dois utiliser avec le poème final.

Ta mission consiste à parcourir le chemin, à construire le poème petit à petit, puis à le réciter.

## Les règles

- Les **mots** entrent dans le poème, avec un **espace entre chacun**.
- Le **décor** ne fait pas partie du poème et doit être ignoré.
- Une **apostrophe** occupe sa propre case, et elle relie les mots situés de part et d'autre. `heart` puis `'` puis `s` devient `heart's`.
- Une **virgule** occupe elle aussi sa propre case. Elle se colle au mot qui la précède, mais reste suivie d'un espace.
- Le poète s'arrête de marcher quand il atteint le **drapeau à damier**, ou dès qu'il a récolté **sept mots**, selon ce qui arrive en premier.
- Quand le poète s'arrête, quelle que soit la façon dont il s'est arrêté, il récite ce qu'il a récolté. Tu ne peux appeler `recite()` qu'**une seule fois**.

## Restrictions

Il existe de nombreuses façons de résoudre cet exercice, mais on veut que tu utilises les mots-clés `continue` et `break` que tu viens d'apprendre, alors voici quelques règles :

1. Ta solution doit utiliser à la fois `continue` et `break`.
2. Tu ne peux pas utiliser `&&` ni `!` dans ta solution.
3. Tu ne peux pas écrire de fonctions auxiliaires.
4. Tu n'as droit qu'à deux niveaux d'indentation :

```javascript

// Autorisé : 2 niveaux d'indentation
repeat() {
  if(...) {
    //...
  }
}

// Interdit : 3 niveaux d'indentation
repeat() {
  if(...) {
    if(...) {
    }
  }
}
```

Cela signifie que la solution que tu vas trouver sera assez « plate ».

Bonne chance et amuse-toi bien !
