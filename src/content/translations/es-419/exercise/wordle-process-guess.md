---
lang: "es-419"
type: "exercise"
slug: "wordle-process-guess"
title: "Wordle: Procesar el intento"
status: "published"
source_repo: "i18n"
source_path: "locales/es-419/curriculum/exercises/wordle-process-guess"
en_md5: "267d47d51164b59f054018bd4877368d"
governance_sha: "4f119a7e"
content_version: "8bee0001afba"
published_at: "2026-09-03"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"rowMismatch","english":"The \"{{letter}}\" at square {{square}} should be \"{{expected}}\", not \"{{actual}}\".","target":"La letra «{{letter}}» de la casilla {{square}} debería ser «{{expected}}», no «{{actual}}»."},{"key":"rowNotColored","english":"The row wasn't colored.","target":"La fila no se coloreó."},{"key":"rowWrongLength","english":"The row got {{actual}} states, but a row needs {{expected}}.","target":"La fila recibió {{actual}} estados, pero una fila necesita {{expected}}."},{"key":"allCorrect","english":null,"target":"Se esperaba que todas las letras estuvieran verdes"},{"key":"absent","english":null,"target":"Se esperaba que la 'a' y la 'u' estuvieran ausentes"},{"key":"present","english":null,"target":"Se esperaba que la 'l' y la 'e' estuvieran presentes."},{"key":"complex","english":null,"target":"Se esperaba present, present, present, correct, absent"},{"key":"differentWord","english":null,"target":"Se esperaba correct, present, present, present, absent"}]},{"name":"tasks","rows":[{"key":"processGuess.name","english":"Process a single guess","target":"Procesar un intento"},{"key":"processGuess.description","english":"Create a function called processGuess that takes a target word and a guess, works out the state of each letter (correct, present, or absent), then calls colorRow(1, states) with the results.","target":"Crea una función llamada processGuess que reciba una palabra objetivo y un intento, calcule el estado de cada letra (correct, present o absent) y luego llame a colorRow(1, states) con los resultados."}]},{"name":"scenarios","rows":[{"key":"allCorrect.name","english":"All correct","target":"Todas correctas"},{"key":"allCorrect.description","english":"Deal with a fully correct guess","target":"Maneja un intento completamente correcto"},{"key":"absent.name","english":"Some absent","target":"Algunas ausentes"},{"key":"absent.description","english":"Handle when some letters are wrong","target":"Maneja el caso en que algunas letras están mal"},{"key":"present.name","english":"Some present","target":"Algunas presentes"},{"key":"present.description","english":"Deal with letters in the wrong place","target":"Maneja letras en el lugar equivocado"},{"key":"complex.name","english":"Complex","target":"Complejo"},{"key":"complex.description","english":"Deal with a more complex scenario","target":"Maneja un escenario más complejo"},{"key":"differentWord.name","english":"A different word","target":"Una palabra diferente"},{"key":"differentWord.description","english":"And finally a different word!","target":"¡Y finalmente una palabra diferente!"}]},{"name":"hints","rows":[{"key":"compareLetters.question","english":"How do I compare each letter of the guess to the target?","target":"¿Cómo comparo cada letra del intento con la palabra objetivo?"},{"key":"compareLetters.answer","english":"Loop through the positions `0` to `4`. For each position, compare `guess[i]` with `target[i]`.","target":"Recorre las posiciones `0` a `4`. Para cada posición, compara `guess[i]` con `target[i]`."},{"key":"stateRules.question","english":"When is a letter `\"correct\"` vs `\"present\"` vs `\"absent\"`?","target":"¿Cuándo una letra es `\"correct\"` vs `\"present\"` vs `\"absent\"`?"},{"key":"stateRules.answer","english":"Under this exercise's simplified rules: if `guess[i]` equals `target[i]`, it's `\"correct\"`. Otherwise, if the letter exists somewhere in `target`, it's `\"present\"`. If not, it's `\"absent\"`.","target":"Según las reglas simplificadas de este ejercicio: si `guess[i]` es igual a `target[i]`, es `\"correct\"`. De lo contrario, si la letra existe en algún lugar de `target`, es `\"present\"`. Si no, es `\"absent\"`."},{"key":"buildList.question","english":"How do I build up the array of states?","target":"¿Cómo construyo el array de estados?"},{"key":"buildList.answer","english":"Start with an empty array, then use `states.push(value)` inside the loop to add each state onto the end in order.","target":"Empieza con un array vacío, luego usa `states.push(value)` dentro del bucle para agregar cada estado al final, en orden."},{"key":"finishedList.question","english":"Where does the finished array go?","target":"¿A dónde va el array terminado?"},{"key":"finishedList.answer","english":"Pass it to `colorRow(1, states)` to color the first row of the board with your computed states.","target":"Pásalo a `colorRow(1, states)` para colorear la primera fila del tablero con los estados que calculaste."}]},{"name":"functions","rows":[{"key":"colorRow.description","english":"Colors a row on the Wordle board with the given states.","target":"Colorea una fila en el tablero de Wordle con los estados dados."},{"key":"colorRow.category","english":"Wordle","target":"Wordle"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Agrega un elemento al final de un array, modificando el array directamente."},{"key":"push.category","english":"Arrays","target":"Arrays"},{"key":"includes.description","english":"Checks whether a string contains another string, returning true or false.","target":"Verifica si un string contiene otro string, devolviendo true o false."},{"key":"includes.category","english":"Strings","target":"Strings"}]},{"name":"describers","rows":[{"key":"colorRow","english":"colored a row on the wordle board","target":"coloreó una fila en el tablero de Wordle"}]}]}]
---

¡Te damos la bienvenida a Wordle, el juego que se volvió viral durante las cuarentenas por la covid-19!

El juego funciona así:

- Hay una palabra secreta que el usuario intenta adivinar.
- El usuario tiene 6 intentos para acertar.
- Para cada intento hay 5 casillas, una para cada letra:
  - Si una letra es correcta, la casilla se pone verde.
  - Si una letra está en la palabra secreta pero en el lugar equivocado, la casilla se pone amarilla.
  - Si una letra no está en la palabra secreta, la casilla se pone gris.

En unos cuantos ejercicios vas a implementar el juego completo de Wordle, pero en **este ejercicio** solo vas a hacer que las cosas funcionen para la primera fila.

Para lograrlo, tienes que crear una función llamada `processGuess(target, guess)` (procesar el intento). Las palabras que recibe tu función siempre estarán en minúsculas. Debe determinar el estado de cada letra del intento y luego llamar a la función `colorRow(1, states)` (colorear la fila 1) con un array de estados para cada letra: `"correct"`, `"present"` o `"absent"`.

Por ejemplo, `processGuess("hello", "holes")` debería usar `colorRow` con:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

¡Asegúrate de entenderlo antes de continuar!

Además, si eres aficionado a Wordle, quizá notes que las reglas anteriores están **un poco simplificadas** en comparación con el juego oficial. En este ejercicio, por favor, sigue estas reglas simplificadas y en el próximo ejercicio de Wordle te mostraremos las reglas completas.

### Métodos

Al igual que en los últimos ejercicios, puedes construir el array de estados con el método `push`, que agrega un elemento al final de un array. Por ejemplo, `states.push("correct")` agrega `"correct"` al final del array `states`.

También tienes el método `includes` si quieres verificar si un string contiene otro string.

¡Buena suerte!
