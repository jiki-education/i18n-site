---
lang: "fr"
type: "exercise"
slug: "golf-rolling-ball-state"
title: "Balle à état"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-state"
en_md5: "f203d7c055cd4ad8de235218c470df98"
governance_sha: "861d572"
content_version: "4c2496d8cbe2"
published_at: "2026-08-05"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"positionNotNumber","english":"position must be a number","target":"position doit être un nombre"}]},{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball didn't reach the hole. It's at position {{ballX}}, but needs to be at position 88.","target":"La balle n'a pas atteint le trou. Elle est à la position {{ballX}}, alors qu'elle doit être à la position 88."},{"key":"missingPositions","english":"The ball must roll through each position individually, not jump directly to the end.","target":"La balle doit rouler en passant par chaque position une à une, sans sauter directement à la fin."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Fais rouler la balle jusque dans le trou"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Fais rouler la balle jusque dans le trou."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"Fais rouler la balle jusque dans le trou"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"Fais rouler la balle jusque dans le trou."}]},{"name":"hints","rows":[{"key":"dontKnowWhereToStart.question","english":"I don't know where to start","target":"Je ne sais pas par où commencer"},{"key":"dontKnowWhereToStart.answer","english":"The key is to move the ball one step forward each time. You can use a variable to do this. Think about how that might work.","target":"L'essentiel est de faire avancer la balle d'une position à la fois. Tu peux utiliser une variable pour y arriver. Réfléchis à la façon dont ça pourrait fonctionner."},{"key":"stillCantFigureItOut.question","english":"I still can't figure it out","target":"Je n'y arrive toujours pas"},{"key":"stillCantFigureItOut.answer","english":"You want to create a variable to track where the ball is. It should start where it is now, then many times increase by one. Every time it increases you should `moveTo(...)` using the variable as an input.","target":"Crée une variable pour suivre la position de la balle. Elle doit démarrer là où la balle se trouve maintenant, puis augmenter de un, de nombreuses fois. À chaque augmentation, appelle `moveTo(...)` en utilisant la variable comme entrée."}]},{"name":"functions","rows":[{"key":"moveTo.description","english":"Moves the ball to **position**.","target":"Déplace la balle à la **position** indiquée."},{"key":"moveTo.category","english":"Movement","target":"Déplacement"}]},{"name":"describers","rows":[{"key":"moveTo","english":"moved the ball to position ${arg1}","target":"a déplacé la balle à la position ${arg1}"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":"x doit être un nombre"},{"key":"yNotNumber","english":"y must be a number","target":"y doit être un nombre"}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":"a fait rouler la balle d'une unité vers la droite"},{"key":"moveTo","english":"moved the ball to the given position","target":"a déplacé la balle à la position indiquée"},{"key":"getShotLength","english":"retrieved the shot length","target":"a récupéré la longueur du coup"},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":"a tiré un feu d'artifice de célébration"}]}]}]
---

On retrouve l'univers du jeu de golf, mais cette fois, ce qu'on construit a changé.

À la place de la fonction `roll()` (_rouler_) qu'on avait avant, on dispose maintenant d'une fonction `moveTo(position)` (_déplacer à la position_) qui déplace la balle instantanément à un endroit donné.

Quand le joueur frappe la balle, on pourrait la déplacer directement à sa destination finale, mais la voir arriver sans animation n'a rien de satisfaisant. On va donc appeler `moveTo(position)` de nombreuses fois pour donner l'impression qu'elle roule.

La balle part de la position **28** et doit atteindre la position **88**.

Résous cet exercice en **5 lignes de code**. Bonne chance !
