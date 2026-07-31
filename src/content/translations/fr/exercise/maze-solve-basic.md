---
lang: "fr"
type: "exercise"
slug: "maze-solve-basic"
title: "Résous le labyrinthe"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "6ed23a25576883e0f33304cffc408fe0"
governance_sha: "45feeea"
content_version: "2186c7f2bc4e"
published_at: "2026-07-31"
forum_topic_id: 803
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Tu n'as pas atteint la sortie du labyrinthe."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Guide le personnage jusqu'à la sortie du labyrinthe"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Traverse le labyrinthe pour atteindre la cible verte"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Guide le personnage jusqu'à la sortie du labyrinthe"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Ta mission est de guider ton personnage à travers le labyrinthe jusqu'à la case verte d'arrivée."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Qu'est-ce que je déplace, et vers où?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Tu déplaces le petit personnage, qui part en haut à gauche, jusqu'au cercle vert en bas à droite, en évitant les cases rayées de rouge."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Quand je tourne à gauche, le personnage tourne à droite!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if you are facing right, and turn left, the person will change to face up.","target":"Le personnage tourne par rapport à la direction dans laquelle il regarde. Donc si tu regardes vers la droite et que tu tournes à gauche, le personnage se retrouvera tourné vers le haut."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"Oh non, tu as failli tomber du bord du labyrinthe!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Aïe, tu as foncé dans un mur!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Aïe! Tu as marché droit dans le feu!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Beurk! Tu as marché dans le caca! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Déplace le personnage d'une case vers l'avant"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Fait pivoter le personnage de 90 degrés vers la gauche"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Fait pivoter le personnage de 90 degrés vers la droite"}]}]}]
---

Bienvenue dans ton premier exercice!

L'objectif de cet exercice est de te familiariser avec le fonctionnement de l'environnement d'apprentissage. Ta mission : résoudre le labyrinthe que tu vois à gauche en donnant des instructions au petit personnage. Tu écris toutes les instructions qu'il doit suivre, puis tu cliques sur **Exécuter le code** pour qu'il les exécute.

Voici les trois instructions que tu peux utiliser :

- `move()` (avancer) déplace le personnage d'un pas vers l'avant
- `turnLeft()` (tourner à gauche) fait tourner le personnage vers la gauche (par rapport à la direction dans laquelle il regarde à ce moment-là)
- `turnRight()` (tourner à droite) fait tourner le personnage vers la droite (par rapport à la direction dans laquelle il regarde à ce moment-là)

Tu peux voir qu'on a déjà écrit les trois premières instructions à gauche. Commence par cliquer sur le bouton **« Exécuter le code »** pour voir ce qu'elles font. Ensuite, **ajoute d'autres instructions** pour amener ton personnage jusqu'à la sortie du labyrinthe. Écris une instruction par ligne, puis appuie sur **Exécuter le code** pour toutes les lancer.

C'est une bonne habitude à prendre, celle d'exécuter son code régulièrement!

Une fois le labyrinthe résolu, tu peux retourner au tableau de bord et commencer la leçon suivante.
