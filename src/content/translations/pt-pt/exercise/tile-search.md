---
lang: "pt-pt"
type: "exercise"
slug: "tile-search"
title: "Pesquisa de peças"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-pt/curriculum/exercises/tile-search"
en_md5: "964730f77d4f532aa178b26e5504da86"
governance_sha: "0284360"
content_version: "7e53b44e6c3f"
published_at: "2026-08-21"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"A tua solução tem demasiadas linhas de código. Consegues torná-la mais curta?"}]},{"name":"tasks","rows":[{"key":"searchForTile.name","english":"Search for a Tile","target":"Procurar uma peça"},{"key":"searchForTile.description","english":"Write a function that checks whether a specific letter tile is in the rack. Return true if found, false if not.","target":"Escreve uma função que verifica se uma peça com uma letra específica está no suporte. Devolve true se for encontrada e false se não for."},{"key":"solveInEightLines.name","english":"Solve in 8 lines of code","target":"Resolve em 8 linhas de código"},{"key":"solveInEightLines.description","english":"Can you solve this exercise with only 8 lines of code?","target":"Consegues resolver este exercício com apenas 8 linhas de código?"}]},{"name":"scenarios","rows":[{"key":"letterFoundAtStart.name","english":"Letter at the start","target":"Letra no início"},{"key":"letterFoundAtStart.description","english":"The letter is the first tile in the rack.","target":"A letra é a primeira peça do suporte."},{"key":"letterFoundInMiddle.name","english":"Letter in the middle","target":"Letra no meio"},{"key":"letterFoundInMiddle.description","english":"The letter is in the middle of the rack.","target":"A letra está no meio do suporte."},{"key":"letterFoundAtEnd.name","english":"Letter at the end","target":"Letra no fim"},{"key":"letterFoundAtEnd.description","english":"The letter is the last tile in the rack.","target":"A letra é a última peça do suporte."},{"key":"letterNotFound.name","english":"Letter not found","target":"Letra não encontrada"},{"key":"letterNotFound.description","english":"The letter isn't in the rack.","target":"A letra não está no suporte."},{"key":"emptyRack.name","english":"Empty rack","target":"Suporte vazio"},{"key":"emptyRack.description","english":"An empty rack has no tiles to find.","target":"Um suporte vazio não tem peças para encontrar."},{"key":"duplicateLetters.name","english":"Rack with duplicates","target":"Suporte com peças duplicadas"},{"key":"duplicateLetters.description","english":"The letter appears among duplicate tiles.","target":"A letra aparece entre peças duplicadas."},{"key":"singleTileFound.name","english":"Single tile found","target":"Uma peça encontrada"},{"key":"singleTileFound.description","english":"A rack with one tile that matches.","target":"Um suporte com uma peça que corresponde."},{"key":"singleTileNotFound.name","english":"Single tile not found","target":"Uma peça não encontrada"},{"key":"singleTileNotFound.description","english":"A rack with one tile that doesn't match.","target":"Um suporte com uma peça que não corresponde."},{"key":"bonus1.name","english":"8 lines of code","target":"8 linhas de código"},{"key":"bonus1.description","english":"Solve the exercise with only 8 lines of code.","target":"Resolve o exercício com apenas 8 linhas de código."}]},{"name":"hints","rows":[{"key":"byHand.question","english":"How would I do this by hand?","target":"Como faria isto à mão?"},{"key":"byHand.answer","english":"You'd go through the haystack one letter at a time, comparing each to the needle. As soon as you found a match you'd stop. If you got to the end without a match, the needle isn't there.","target":"Percorres o palheiro letra a letra, comparando cada uma com a agulha. Assim que encontrares uma correspondência, paras. Se chegares ao fim sem correspondência, a agulha não está lá."},{"key":"loopAndCompare.question","english":"How do I loop and compare?","target":"Como faço um ciclo e comparo?"},{"key":"loopAndCompare.answer","english":"A for-of loop gives you each letter of the string in turn. Inside, an if-statement compares the current letter to the needle.","target":"Um ciclo for-of dá-te cada letra da string, uma de cada vez. Dentro dele, uma condicional compara a letra atual com a agulha."},{"key":"returnTrue.question","english":"When should I return true?","target":"Quando devo devolver true?"},{"key":"returnTrue.answer","english":"As soon as you find a match. There's no point checking the remaining letters.","target":"Assim que encontrares uma correspondência. Não vale a pena verificar as letras restantes."},{"key":"returnFalse.question","english":"When should I return false?","target":"Quando devo devolver false?"},{"key":"returnFalse.answer","english":"ONLY after the loop has finished without finding a match. A common mistake is putting `return false` inside the loop. That gives up after the very first non-matching letter, before you've checked the rest.","target":"APENAS após o ciclo ter terminado sem encontrar uma correspondência. Um erro comum é colocar `return false` dentro do ciclo. Isso desiste logo após a primeira letra que não corresponde, antes de teres verificado as letras restantes."}]}]}]
---

Estás a construir um bot de Scrabble. Antes de tentar jogar uma palavra, o bot precisa de verificar se tem no suporte uma peça com uma letra específica.

O suporte é representado como uma `string` de letras (por exemplo, `"SCRAB"`).

Escreve uma função chamada `contains` (contém) que recebe dois parâmetros de entrada:

- `haystack` (palheiro): o suporte de peças, como uma `string`
- `needle` (agulha): a letra a procurar

Devolve `true` se a letra estiver no suporte e `false` se não estiver.

Exemplos:

- `contains("SCRAB", "A")` devolve `true`
- `contains("SCRAB", "Z")` devolve `false`
- `contains("", "A")` devolve `false`
