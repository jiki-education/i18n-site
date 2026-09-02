---
lang: "es-419"
type: "exercise"
slug: "wordle-process-guess"
title: "Wordle: Procesar el intento"
status: "published"
source_repo: "i18n"
source_path: "locales/es-419/curriculum/exercises/wordle-process-guess"
en_md5: "3947aa1be7871fcfb0e523cb3c036d7f"
governance_sha: "560b647e"
content_version: "f2f10c85064b"
published_at: "2026-09-02"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"allCorrect","english":"We expected all the letters to be green","target":"Se esperaba que todas las letras estuvieran verdes"},{"key":"absent","english":"We expected the 'a' and 'u' to be absent","target":"Se esperaba que la 'a' y la 'u' estuvieran ausentes"},{"key":"present","english":"We expected the 'l' and 'e' to be present.","target":"Se esperaba que la 'l' y la 'e' estuvieran presentes."},{"key":"complex","english":"We expected present, present, present, correct, absent","target":"Se esperaba present, present, present, correct, absent"},{"key":"differentWord","english":"We expected correct, present, present, present, absent","target":"Se esperaba correct, present, present, present, absent"},{"key":"rowMismatch","english":null,"target":"La letra «{{letter}}» de la casilla {{square}} debería ser «{{expected}}», no «{{actual}}»."},{"key":"rowNotColored","english":null,"target":"La fila nunca se coloreó."},{"key":"rowWrongLength","english":null,"target":"La fila recibió {{actual}} estados, pero una fila necesita {{expected}}."}]},{"name":"tasks","rows":[{"key":"processGuess.name","english":"Process a single guess","target":"Procesar un intento"},{"key":"processGuess.description","english":"Create a function called processGuess that takes a target word and a guess, works out the state of each letter (correct, present, or absent), then calls colorRow(1, states) with the results.","target":"Crea una función llamada processGuess que reciba una palabra objetivo y un intento, calcule el estado de cada letra (correct, present o absent) y luego llame a colorRow(1, states) con los resultados."}]},{"name":"scenarios","rows":[{"key":"allCorrect.name","english":"All correct","target":"Todas correctas"},{"key":"allCorrect.description","english":"Deal with a fully correct guess","target":"Maneja un intento completamente correcto"},{"key":"absent.name","english":"Some absent","target":"Algunas ausentes"},{"key":"absent.description","english":"Handle when some letters are wrong","target":"Maneja el caso en que algunas letras están mal"},{"key":"present.name","english":"Some present","target":"Algunas presentes"},{"key":"present.description","english":"Deal with letters in the wrong place","target":"Maneja letras en el lugar equivocado"},{"key":"complex.name","english":"Complex","target":"Complejo"},{"key":"complex.description","english":"Deal with a more complex scenario","target":"Maneja un escenario más complejo"},{"key":"differentWord.name","english":"A different word","target":"Una palabra diferente"},{"key":"differentWord.description","english":"And finally a different word!","target":"¡Y finalmente una palabra diferente!"}]},{"name":"hints","rows":[{"key":"compareLetters.question","english":"How do I compare each letter of the guess to the target?","target":"¿Cómo comparo cada letra del intento con la palabra objetivo?"},{"key":"compareLetters.answer","english":"Loop through the positions `0` to `4`. For each position, compare `guess[i]` with `target[i]`.","target":"Recorre las posiciones `0` a `4`. Para cada posición, compara `guess[i]` con `target[i]`."},{"key":"stateRules.question","english":"When is a letter `\"correct\"` vs `\"present\"` vs `\"absent\"`?","target":"¿Cuándo una letra es `\"correct\"` vs `\"present\"` vs `\"absent\"`?"},{"key":"stateRules.answer","english":"If `guess[i]` equals `target[i]`, it's `\"correct\"`. Otherwise, if the letter exists somewhere in `target`, it's `\"present\"`. If not, it's `\"absent\"`.","target":"Si `guess[i]` es igual a `target[i]`, es `\"correct\"`. De lo contrario, si la letra existe en algún lugar de `target`, es `\"present\"`. Si no, es `\"absent\"`."},{"key":"buildList.question","english":"How do I build up the array of states?","target":"¿Cómo construyo el array de estados?"},{"key":"buildList.answer","english":"Start with an empty array, then use `states.push(value)` inside the loop to add each state onto the end in order.","target":"Empieza con un array vacío, luego usa `states.push(value)` dentro del bucle para agregar cada estado al final, en orden."},{"key":"finishedList.question","english":"Where does the finished array go?","target":"¿A dónde va el array terminado?"},{"key":"finishedList.answer","english":"Pass it to `colorRow(1, states)` to color the first row of the board with your computed states.","target":"Pásalo a `colorRow(1, states)` para colorear la primera fila del tablero con los estados que calculaste."}]},{"name":"functions","rows":[{"key":"colorRow.description","english":"Colors a row on the Wordle board with the given states.","target":"Colorea una fila en el tablero de Wordle con los estados dados."},{"key":"colorRow.category","english":"Wordle","target":"Wordle"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Agrega un elemento al final de un array, modificando el array directamente."},{"key":"push.category","english":"Arrays","target":"Arrays"},{"key":"includes.description","english":"Checks whether a string contains another string, returning true or false.","target":"Verifica si un string contiene otro string, devolviendo true o false."},{"key":"includes.category","english":"Strings","target":"Strings"}]},{"name":"describers","rows":[{"key":"colorRow","english":"colored a row on the wordle board","target":"coloreó una fila en el tablero de Wordle"}]}]}]
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

Para lograrlo, tienes que crear una función llamada `processGuess(target, guess)` (procesar el intento). Debe determinar el estado de cada letra del intento y luego llamar a la función `colorRow(1, states)` (colorear la fila 1) con un array de estados para cada letra: `"correct"`, `"present"` o `"absent"`.

Por ejemplo, `processGuess("Hello", "Holes")` debería usar `colorRow` con:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

¡Asegúrate de entenderlo antes de continuar!

### Métodos

Al igual que en los últimos ejercicios, puedes construir el array de estados con el método `push`, que agrega un elemento al final de un array. Por ejemplo, `states.push("correct")` agrega `"correct"` al final del array `states`.

También tienes el método `includes` si quieres verificar si un string contiene otro string.

¡Buena suerte!
