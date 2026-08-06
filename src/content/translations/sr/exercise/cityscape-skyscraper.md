---
lang: "sr"
type: "exercise"
slug: "cityscape-skyscraper"
title: "Neboder"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/cityscape-skyscraper"
en_md5: "f9e50084e5ed2badccc2e35a8a790fc5"
governance_sha: "c80036b"
content_version: "0513b0abc89c"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"totalCells","english":"Expected {{expected}} cells but found {{got}}.","target":null},{"key":"groundWalls","english":"The ground floor should have walls at positions (17, 2) and (21, 2).","target":null},{"key":"groundGlass","english":"The ground floor should have glass at positions (18, 2) and (20, 2).","target":null},{"key":"groundEntrance","english":"The ground floor should have an entrance at position (19, 2).","target":null},{"key":"floorWalls","english":"Floor {{y}} should have walls at positions (17, {{y}}) and (21, {{y}}).","target":null},{"key":"floorGlass","english":"Floor {{y}} should have glass at positions (18, {{y}}), (19, {{y}}), and (20, {{y}}).","target":null},{"key":"roof","english":"The roof at y={{roofY}} should be all walls.","target":null},{"key":"codeQuality.allArgumentsAreVariables","english":"You should use <strong>variables</strong> as arguments to functions, not literal values. Store values in variables first, then pass the variables.","target":null}]},{"name":"tasks","rows":[{"key":"buildSkyscraper.name","english":"Build the skyscraper","target":null},{"key":"buildSkyscraper.description","english":"Build a skyscraper with the correct number of floors, including a ground floor with entrance, upper floors with glass, and a wall roof.","target":null}]},{"name":"scenarios","rows":[{"key":"floors6.name","english":"6-floor skyscraper","target":null},{"key":"floors6.description","english":"Build a skyscraper with 6 floors.","target":null},{"key":"floors8.name","english":"8-floor skyscraper","target":null},{"key":"floors8.description","english":"Build a skyscraper with 8 floors.","target":null},{"key":"floors10.name","english":"10-floor skyscraper","target":null},{"key":"floors10.description","english":"Build a skyscraper with 10 floors.","target":null},{"key":"floors12.name","english":"12-floor skyscraper","target":null},{"key":"floors12.description","english":"Build a skyscraper with 12 floors.","target":null},{"key":"floors16.name","english":"16-floor skyscraper","target":null},{"key":"floors16.description","english":"Build a skyscraper with 16 floors.","target":null}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"I don't know where to start.","target":null},{"key":"whereToStart.answer","english":"Firstly try drawing a wall, some glass, and an entrance to check you understand the functions. Then draw the base floor - this is always the same. Then use the `numFloors()` function to find out how many floors there are in total and draw the remaining floors and then the roof.","target":null},{"key":"tooManyTooFewFloors.question","english":"I have too many/too few floors.","target":null},{"key":"tooManyTooFewFloors.answer","english":"If `numFloors()` returns 5, that should be one entrance floor, 4 glass floors, and 1 roof. Check your logic is correct!","target":null}]},{"name":"functions","rows":[{"key":"buildWall.description","english":"Places a **wall block** at grid position (x, y).","target":null},{"key":"buildWall.category","english":"Building","target":null},{"key":"buildGlass.description","english":"Places a **glass panel** at grid position (x, y).","target":null},{"key":"buildGlass.category","english":"Building","target":null},{"key":"buildEntrance.description","english":"Places an **entrance door** at grid position (x, y).","target":null},{"key":"buildEntrance.category","english":"Building","target":null},{"key":"numFloors.description","english":"Returns the **number of floors** for this building.","target":null},{"key":"numFloors.category","english":"Info","target":null}]},{"name":"describers","rows":[{"key":"buildWall","english":"built a wall at position (${arg1}, ${arg2})","target":null},{"key":"buildEntrance","english":"built an entrance at position (${arg1}, ${arg2})","target":null},{"key":"buildGlass","english":"built a glass panel at position (${arg1}, ${arg2})","target":null},{"key":"numFloors","english":"retrieved the number of floors","target":null}]}]},{"heading":"Shared \"cityscape\" messages","note":"Shared by every exercise in the cityscape category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xyMustBeNumbers","english":"x and y must be numbers","target":null},{"key":"xNotWhole","english":"You must use whole numbers for `x` and `y`. You provided `x` as `{{x}}`, which isn't allowed.","target":null},{"key":"yNotWhole","english":"You must use whole numbers for `x` and `y`. You provided `y` as `{{y}}`, which isn't allowed.","target":null},{"key":"outsideGrid","english":"Position ({{x}}, {{y}}) is outside the grid","target":null},{"key":"alreadyBuilt","english":"The builders are stuck. There's already a {{existing}} at the coordinates `({{x}}, {{y}})` so they can't build here!","target":null}]},{"name":"describers","rows":[{"key":"buildWall","english":"built a wall at position (${arg1}, ${arg2})","target":null},{"key":"buildEntrance","english":"built an entrance at position (${arg1}, ${arg2})","target":null},{"key":"buildGlass","english":"built a glass panel at position (${arg1}, ${arg2})","target":null},{"key":"numFloors","english":"retrieved the number of floors","target":null},{"key":"numBuildings","english":"retrieved the number of buildings","target":null}]}]}]
---

Ovo je prva od dve vežbe u kojima ćeš graditi nebodere.

U ovoj vežbi tvoj zadatak je da sagradiš jedan neboder na sredini scene. U svakom scenariju visina nebodera varira.

Da bi odredio koliko spratova da sagradiš, imaš funkciju `numFloors()` (broj spratova) koja vraća ukupnu visinu zgrade.

Postoje tri različite komponente koje možeš da koristiš: zid (`W`), staklo (`G`) i ulaz (`E`). Pogledaj funkcije ispod da vidiš funkcije za pravljenje ovih komponenti.

Sprat najbliži tlu (bilo „prizemlje” ili „prvi sprat”, u zavisnosti od toga gde si!) uvek ima ulaz između dva staklena segmenta i dva spoljna zidna segmenta (`WGEGW`). Ostali spratovi imaju tri staklena segmenta između zidova (`WGGGW`). A na vrhu spratova je krov (`WWWWW`).

Dakle, neboder od 5 spratova ima jedan sprat sa ulazom, 4 staklena sprata i krov. Trebalo bi da izgleda ovako:

```
WWWWW
WGGGW
WGGGW
WGGGW
WGGGW
WGEGW
```

Centar nebodera treba da bude u koloni `19`. Prizemni sprat počinje od `2` (odmah iznad betonskog poda) i ide nagore (tako da bi u gornjem primeru to bio sprat sa ulazom na `2` i krov na `7`).

Jedno važno pravilo u ovoj vežbi je da sve vrednosti koje unosiš u funkcije moraju biti ili promenljive ili formule. Ne možeš samo da uneseš broj poput `20`.

Kad završiš ovu vežbu, otključaćeš Projekat u kome ćeš graditi cele gradske horizonte sa različitim brojem zgrada različitih širina.
