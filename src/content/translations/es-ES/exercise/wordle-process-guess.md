---
lang: "es-ES"
type: "exercise"
slug: "wordle-process-guess"
title: "Wordle: Procesar el intento"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/wordle-process-guess"
en_md5: "267d47d51164b59f054018bd4877368d"
governance_sha: "4f119a7e"
content_version: "8b5eea726023"
published_at: "2026-09-03"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"rowMismatch","english":"The \"{{letter}}\" at square {{square}} should be \"{{expected}}\", not \"{{actual}}\".","target":"La letra «{{letter}}» en la casilla {{square}} debería ser «{{expected}}», no «{{actual}}»."},{"key":"rowNotColored","english":"The row wasn't colored.","target":"La fila no se coloreó."},{"key":"rowWrongLength","english":"The row got {{actual}} states, but a row needs {{expected}}.","target":"La fila recibió {{actual}} estados, pero una fila necesita {{expected}}."},{"key":"allCorrect","english":null,"target":"Esperábamos que todas las letras fueran verdes."},{"key":"absent","english":null,"target":"Esperábamos que la 'a' y la 'u' estuvieran ausentes."},{"key":"present","english":null,"target":"Esperábamos que la 'l' y la 'e' estuvieran presentes."},{"key":"complex","english":null,"target":"Esperábamos present, present, present, correct, absent"},{"key":"differentWord","english":null,"target":"Esperábamos correct, present, present, present, absent"}]},{"name":"tasks","rows":[{"key":"processGuess.name","english":"Process a single guess","target":"Procesar un intento"},{"key":"processGuess.description","english":"Create a function called processGuess that takes a target word and a guess, works out the state of each letter (correct, present, or absent), then calls colorRow(1, states) with the results.","target":"Crea una función llamada processGuess que reciba una palabra secreta y un intento, calcule el estado de cada letra (correct, present o absent) y luego llame a colorRow(1, states) con los resultados."}]},{"name":"scenarios","rows":[{"key":"allCorrect.name","english":"All correct","target":"Todo correcto"},{"key":"allCorrect.description","english":"Deal with a fully correct guess","target":"Gestiona un intento totalmente correcto"},{"key":"absent.name","english":"Some absent","target":"Algunas ausentes"},{"key":"absent.description","english":"Handle when some letters are wrong","target":"Gestiona cuando algunas letras son incorrectas"},{"key":"present.name","english":"Some present","target":"Algunas presentes"},{"key":"present.description","english":"Deal with letters in the wrong place","target":"Gestiona letras en el lugar equivocado"},{"key":"complex.name","english":"Complex","target":"Complejo"},{"key":"complex.description","english":"Deal with a more complex scenario","target":"Gestiona un escenario más complejo"},{"key":"differentWord.name","english":"A different word","target":"Una palabra diferente"},{"key":"differentWord.description","english":"And finally a different word!","target":"¡Y por fin, una palabra diferente!"}]},{"name":"hints","rows":[{"key":"compareLetters.question","english":"How do I compare each letter of the guess to the target?","target":"¿Cómo comparo cada letra del intento con la palabra secreta?"},{"key":"compareLetters.answer","english":"Loop through the positions `0` to `4`. For each position, compare `guess[i]` with `target[i]`.","target":"Recorre las posiciones del `0` al `4`. En cada posición, compara `guess[i]` con `target[i]`."},{"key":"stateRules.question","english":"When is a letter `\"correct\"` vs `\"present\"` vs `\"absent\"`?","target":"¿Cuándo es una letra `\"correct\"` frente a `\"present\"` frente a `\"absent\"`?"},{"key":"stateRules.answer","english":"Under this exercise's simplified rules: if `guess[i]` equals `target[i]`, it's `\"correct\"`. Otherwise, if the letter exists somewhere in `target`, it's `\"present\"`. If not, it's `\"absent\"`.","target":"Según las reglas simplificadas de este ejercicio: si `guess[i]` es igual a `target[i]`, es `\"correct\"`. De lo contrario, si la letra existe en algún lugar de `target`, es `\"present\"`. Si no, es `\"absent\"`."},{"key":"buildList.question","english":"How do I build up the array of states?","target":"¿Cómo construyo el array de estados?"},{"key":"buildList.answer","english":"Start with an empty array, then use `states.push(value)` inside the loop to add each state onto the end in order.","target":"Empieza con un array vacío y luego usa `states.push(value)` dentro del bucle para añadir cada estado al final en orden."},{"key":"finishedList.question","english":"Where does the finished array go?","target":"¿Adónde va el array terminado?"},{"key":"finishedList.answer","english":"Pass it to `colorRow(1, states)` to color the first row of the board with your computed states.","target":"Pásalo a `colorRow(1, states)` para colorear la primera fila del tablero con los estados calculados."}]},{"name":"functions","rows":[{"key":"colorRow.description","english":"Colors a row on the Wordle board with the given states.","target":"Colorea una fila en el tablero de Wordle con los estados dados."},{"key":"colorRow.category","english":"Wordle","target":"Wordle"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Añade un elemento al final de un array, modificando el array en el sitio."},{"key":"push.category","english":"Arrays","target":"Arrays"},{"key":"includes.description","english":"Checks whether a string contains another string, returning true or false.","target":"Comprueba si un string contiene otro string, devolviendo true o false."},{"key":"includes.category","english":"Strings","target":"Strings"}]},{"name":"describers","rows":[{"key":"colorRow","english":"colored a row on the wordle board","target":"coloreó una fila en el tablero de Wordle"}]}]}]
---

¡Bienvenido a Wordle, el juego que se hizo viral durante los confinamientos por la covid-19!

El juego funciona así:

- Hay una palabra secreta que el usuario intenta adivinar.
- El usuario tiene 6 intentos para acertarla.
- En cada intento hay 5 casillas, una para cada letra:
  - Si una letra es correcta, la casilla se pone verde.
  - Si una letra está en la palabra secreta pero en el lugar equivocado, la casilla se pone amarilla.
  - Si una letra no está en la palabra secreta, la casilla se pone gris.

En unos cuantos ejercicios implementarás el juego completo de Wordle, pero en **este ejercicio** solo vas a hacer que funcione la primera fila.

Para ello, tienes que crear una función llamada `processGuess(target, guess)` (procesar el intento). Las palabras que recibas en tu función siempre estarán en minúsculas. Debe calcular el estado de cada letra del intento y, después, llamar a la función `colorRow(1, states)` (colorear la fila) con un array de estados para cada letra: `"correct"`, `"present"` o `"absent"`.

Por ejemplo, `processGuess("hello", "holes")` debería usar `colorRow` con:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

¡Asegúrate de que lo entiendes antes de continuar!

Además, si eres un aficionado a Wordle, puede que notes que las reglas anteriores están **ligeramente simplificadas** en comparación con el juego oficial. En este ejercicio, cíñete a estas reglas simplificadas y en el próximo ejercicio de Wordle te presentaremos el conjunto completo de reglas.

### Métodos

Como en los últimos ejercicios, puedes construir el array de estados con el método `push`, que añade un elemento al final de un array. Por ejemplo, `states.push("correct")` añade `"correct"` al final del array `states`.

También tienes el método `includes` si quieres comprobar si un string contiene otro string.

¡Buena suerte!
