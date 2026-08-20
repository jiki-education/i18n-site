---
lang: "es-ES"
type: "exercise"
slug: "tile-search"
title: "Búsqueda de fichas"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/tile-search"
en_md5: "964730f77d4f532aa178b26e5504da86"
governance_sha: "16f805d"
content_version: "d2ab69103f02"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"Tu solución tiene demasiadas líneas de código. ¿Puedes hacerla más corta?"}]},{"name":"tasks","rows":[{"key":"searchForTile.name","english":"Search for a Tile","target":"Buscar una ficha"},{"key":"searchForTile.description","english":"Write a function that checks whether a specific letter tile is in the rack. Return true if found, false if not.","target":"Escribe una función que verifique si una ficha con una letra específica está en el atril. Devuelve true si la encuentra, false si no."},{"key":"solveInEightLines.name","english":"Solve in 8 lines of code","target":"Resuelve en 8 líneas de código"},{"key":"solveInEightLines.description","english":"Can you solve this exercise with only 8 lines of code?","target":"¿Puedes resolver este ejercicio con solo 8 líneas de código?"}]},{"name":"scenarios","rows":[{"key":"letterFoundAtStart.name","english":"Letter at the start","target":"Letra al inicio"},{"key":"letterFoundAtStart.description","english":"The letter is the first tile in the rack.","target":"La letra es la primera ficha en el atril."},{"key":"letterFoundInMiddle.name","english":"Letter in the middle","target":"Letra en el medio"},{"key":"letterFoundInMiddle.description","english":"The letter is in the middle of the rack.","target":"La letra está en el medio del atril."},{"key":"letterFoundAtEnd.name","english":"Letter at the end","target":"Letra al final"},{"key":"letterFoundAtEnd.description","english":"The letter is the last tile in the rack.","target":"La letra es la última ficha en el atril."},{"key":"letterNotFound.name","english":"Letter not found","target":"Letra no encontrada"},{"key":"letterNotFound.description","english":"The letter isn't in the rack.","target":"La letra no está en el atril."},{"key":"emptyRack.name","english":"Empty rack","target":"Atril vacío"},{"key":"emptyRack.description","english":"An empty rack has no tiles to find.","target":"Un atril vacío no tiene fichas que encontrar."},{"key":"duplicateLetters.name","english":"Rack with duplicates","target":"Atril con fichas duplicadas"},{"key":"duplicateLetters.description","english":"The letter appears among duplicate tiles.","target":"La letra aparece entre fichas duplicadas."},{"key":"singleTileFound.name","english":"Single tile found","target":"Una ficha encontrada"},{"key":"singleTileFound.description","english":"A rack with one tile that matches.","target":"Un atril con una ficha que coincide."},{"key":"singleTileNotFound.name","english":"Single tile not found","target":"Una ficha no encontrada"},{"key":"singleTileNotFound.description","english":"A rack with one tile that doesn't match.","target":"Un atril con una ficha que no coincide."},{"key":"bonus1.name","english":"8 lines of code","target":"8 líneas de código"},{"key":"bonus1.description","english":"Solve the exercise with only 8 lines of code.","target":"Resuelve el ejercicio con solo 8 líneas de código."}]},{"name":"hints","rows":[{"key":"byHand.question","english":"How would I do this by hand?","target":"¿Cómo lo haría a mano?"},{"key":"byHand.answer","english":"You'd go through the haystack one letter at a time, comparing each to the needle. As soon as you found a match you'd stop. If you got to the end without a match, the needle isn't there.","target":"Recorrerías el pajar letra por letra, comparando cada una con la aguja. En cuanto encuentras una coincidencia te detienes. Si llegas al final sin coincidencia, la aguja no está."},{"key":"loopAndCompare.question","english":"How do I loop and compare?","target":"¿Cómo recorro y comparo?"},{"key":"loopAndCompare.answer","english":"A for-of loop gives you each letter of the string in turn. Inside, an if-statement compares the current letter to the needle.","target":"Un bucle for-of te da cada letra del string por turno. Dentro, un condicional if compara la letra actual con la aguja."},{"key":"returnTrue.question","english":"When should I return true?","target":"¿Cuándo debo devolver true?"},{"key":"returnTrue.answer","english":"As soon as you find a match. There's no point checking the remaining letters.","target":"En cuanto encuentras una coincidencia. No tiene sentido revisar las letras restantes."},{"key":"returnFalse.question","english":"When should I return false?","target":"¿Cuándo debo devolver false?"},{"key":"returnFalse.answer","english":"ONLY after the loop has finished without finding a match. A common mistake is putting `return false` inside the loop. That gives up after the very first non-matching letter, before you've checked the rest.","target":"SOLO después de que el bucle haya terminado sin encontrar una coincidencia. Un error común es poner `return false` dentro del bucle. Eso se rinde después de la primera letra que no coincide, antes de haber revisado las demás."}]}]}]
---

Estás construyendo un bot de Scrabble. Antes de que el bot intente jugar una palabra, necesita verificar si tiene una ficha de una letra específica en su atril.

El atril se representa como un string de letras (por ejemplo, `"SCRAB"`).

Escribe una función llamada `contains` (contiene) que reciba dos argumentos:

- `haystack` (pajar): el atril de fichas, como un string
- `needle` (aguja): la letra a buscar

Devuelve `true` si la letra está en el atril, o `false` si no lo está.

Ejemplos:

- `contains("SCRAB", "A")` devuelve `true`
- `contains("SCRAB", "Z")` devuelve `false`
- `contains("", "A")` devuelve `false`
