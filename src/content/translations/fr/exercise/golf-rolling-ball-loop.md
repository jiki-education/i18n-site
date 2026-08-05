---
lang: "fr"
type: "exercise"
slug: "golf-rolling-ball-loop"
title: "Balle qui roule"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-loop"
en_md5: "e581ca0b932527b029cef23f9ad49a5e"
governance_sha: "36f01d3"
content_version: "c22390c47320"
published_at: "2026-08-05"
forum_topic_id: 1236
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball rolled to {{ballX}}, which isn't 60 from where it started.","target":"La balle a roulé jusqu'à {{ballX}}, ce qui ne fait pas 60 unités depuis son point de départ."},{"key":"missingPositions","english":"The ball must roll through each position one step at a time, starting from 29.","target":"La balle doit passer par chaque position, une unité à la fois, en partant de 29."},{"key":"codeQuality.tooManyLines","english":"Your solution has too many lines of code. Try using a loop to make it shorter.","target":"Ta solution contient trop de lignes de code. Essaie d'utiliser une boucle pour la raccourcir."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Fais rouler la balle jusque dans le trou"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Fais rouler la balle jusque dans le trou."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Fais rouler la balle jusque dans le trou"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Fais rouler la balle jusque dans le trou."}]},{"name":"hints","rows":[{"key":"icantWorkItOut.question","english":"I can't work it out","target":"Je n'y arrive pas"},{"key":"icantWorkItOut.answer","english":"You have two tools to use:\n- A repeat loop, which you use by writing `repeat(n) { }` where `n` is the amount of times you want to roll and where you can put anything inside the braces (`{ }`).\n- A `roll()` function that rolls the ball one step to the right.\n\nHow can you combine them?","target":"Tu as deux outils à ta disposition :\n- Une boucle de répétition, que tu utilises en écrivant `repeat(n) { }`, où `n` est le nombre de fois que tu veux faire rouler la balle et où tu peux mettre ce que tu veux entre les accolades (`{ }`).\n- Une fonction `roll()` qui fait rouler la balle d'une unité vers la droite.\n\nComment peux-tu les combiner ?"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls the ball **one step to the right**.","target":"Fait rouler la balle **d'une unité vers la droite**."},{"key":"roll.category","english":"Movement","target":"Déplacement"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled the ball one step to the right","target":"a fait rouler la balle d'une unité vers la droite"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":"x doit être un nombre"},{"key":"yNotNumber","english":"y must be a number","target":"y doit être un nombre"}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":"a fait rouler la balle d'une unité vers la droite"},{"key":"moveTo","english":"moved the ball to the given position","target":"a déplacé la balle à la position indiquée"},{"key":"getShotLength","english":"retrieved the shot length","target":"a récupéré la longueur du coup"},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":"a tiré un feu d'artifice de célébration"}]}]}]
---

Mettons en action la boucle (_loop_ en anglais) `repeat` !

Une balle de golf est posée sur le tee. À toi de la faire rouler jusque dans le trou, qui se trouve à 60 unités de là.

Résous cet exercice en **trois lignes de code**. Amuse-toi bien !
