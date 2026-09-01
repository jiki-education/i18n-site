---
lang: "es-ES"
type: "exercise"
slug: "adventures-in-poetry"
title: "Aventuras en poesía"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/adventures-in-poetry"
en_md5: "a96229480a3c3436106703c743bb3c32"
governance_sha: "9ded16c5"
content_version: "b0fc1bc7aacc"
published_at: "2026-09-01"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"endOfPath","english":"The poet has walked off the end of the path. Something should have stopped the walk before now.","target":"El poeta se ha salido del final del camino. Algo debería haber detenido el recorrido antes de ahora."},{"key":"isEmojiString","english":"You can only check whether a piece of text is an emoji.","target":"Solo puedes comprobar si un fragmento de texto es un emoji."},{"key":"reciteString","english":"You can only recite a piece of text.","target":"Solo puedes recitar un fragmento de texto."}]},{"name":"checks","rows":[{"key":"notRecited","english":"The poet never recited anything. Make sure you call <code>recite()</code> once the walk is over.","target":"El poeta no recitó nada. Asegúrate de llamar a <code>recite()</code> una vez terminado el recorrido."},{"key":"wrongPoem","english":"The poet recited \"{{got}}\" but the poem should be \"{{expected}}\".","target":"El poeta recitó «{{got}}» pero el poema debería ser «{{expected}}»."},{"key":"noFunctions","english":"Write your solution as one walk, without defining any functions of your own.","target":"Escribe tu solución como un único recorrido, sin definir ninguna función propia."},{"key":"reciteOnce","english":"The poet should recite the poem once, after the walk has finished.","target":"El poeta debe recitar el poema una vez, después de que haya terminado el recorrido."},{"key":"tooDeeplyNested","english":"Your code nests too deeply. You are only allowed two levels, so a loop with an <code>if</code> inside it, but nothing inside that <code>if</code>.","target":"Tu código está demasiado anidado. Solo se te permiten dos niveles, así que un bucle con un <code>if</code> dentro, pero nada dentro de ese <code>if</code>."},{"key":"noAndOrNot","english":"This exercise is about a different way of making decisions, so <code>&&</code> and <code>!</code> are not allowed here. <code>||</code> is fine.","target":"Este ejercicio trata de una forma diferente de tomar decisiones, por lo que <code>&&</code> y <code>!</code> no están permitidos aquí. <code>||</code> está bien."},{"key":"needsContinue","english":"Your solution needs to use <code>continue</code>.","target":"Tu solución necesita usar <code>continue</code>."},{"key":"needsBreak","english":"Your solution needs to use <code>break</code>.","target":"Tu solución necesita usar <code>break</code>."},{"key":"tooManyLines","english":"Your solution is longer than it needs to be. See if you can get it down by handling each kind of square in one place.","target":"Tu solución es más larga de lo necesario. A ver si puedes reducirla tratando cada tipo de casilla en un solo lugar."}]},{"name":"tasks","rows":[{"key":"collectThePoem.name","english":"Collect the poem and recite it","target":"Recoge el poema y recítalo"},{"key":"collectThePoem.description","english":"Walk along the path, gather the words of the poem, stop in the right place, and recite what you gathered.","target":"Recorre el camino, recoge las palabras del poema, detente en el lugar correcto y recita lo que hayas recogido."},{"key":"solveTightly.name","english":"Tighten it up","target":"Ajústalo"},{"key":"solveTightly.description","english":"Solve the same walk, but get your code down to the line limit.","target":"Resuelve el mismo recorrido, pero reduce tu código al límite de líneas."}]},{"name":"scenarios","rows":[{"key":"hope.name","english":"A path with gaps","target":"Un camino con huecos"},{"key":"hope.description","english":"Six words with bare grass between them, and a checkered flag at the end.","target":"Seis palabras con hierba desnuda entre ellas, y una bandera de cuadros al final."},{"key":"wandered.name","english":"Scenery on the path","target":"Decoración en el camino"},{"key":"wandered.description","english":"The same idea, but now there are plants and creatures growing between the words.","target":"La misma idea, pero ahora hay plantas y criaturas creciendo entre las palabras."},{"key":"mists.name","english":"Scenery next to the flag","target":"Decoración junto a la bandera"},{"key":"mists.description","english":"A leaf sits on the square just before the checkered flag.","target":"Una hoja está en la casilla justo antes de la bandera de cuadros."},{"key":"notLost.name","english":"Exactly seven words","target":"Exactamente siete palabras"},{"key":"notLost.description","english":"A line with seven words on it, so the poet stops counting before the flag.","target":"Una línea con siete palabras, así que el poeta deja de contar antes de la bandera."},{"key":"hopeContinued.name","english":"A poem that is too long","target":"Un poema demasiado largo"},{"key":"hopeContinued.description","english":"This path holds more than seven words, so the poet stops part way through the line.","target":"Este camino contiene más de siete palabras, por lo que el poeta se detiene a mitad de la línea."},{"key":"highlands.name","english":"An apostrophe","target":"Un apóstrofo"},{"key":"highlands.description","english":"A line of Burns, with an apostrophe sitting on its own square.","target":"Una línea de Burns, con un apóstrofo en su propia casilla."},{"key":"heartScenery.name","english":"Scenery after an apostrophe","target":"Decoración después de un apóstrofo"},{"key":"heartScenery.description","english":"A mushroom grows between the apostrophe and the word it joins to, so whatever remembers the spacing has to survive a skipped square.","target":"Una seta crece entre el apóstrofo y la palabra a la que se une, de modo que lo que recuerda el espaciado tiene que sobrevivir a una casilla omitida."},{"key":"tyger.name","english":"A comma","target":"Una coma"},{"key":"tyger.description","english":"A line of Blake, with a comma sitting on its own square.","target":"Una línea de Blake, con una coma en su propia casilla."},{"key":"pleure.name","english":"Bare grass to begin","target":"Hierba desnuda al principio"},{"key":"pleure.description","english":"A line of Verlaine, with a few empty squares before the poem starts.","target":"Una línea de Verlaine, con algunas casillas vacías antes de que empiece el poema."},{"key":"yasegaeru.name","english":"A line of Issa","target":"Una línea de Issa"},{"key":"yasegaeru.description","english":"Seven words of haiku, with a line limit to keep your guards tight.","target":"Siete palabras de haiku, con un límite de líneas para mantener tu solución ajustada. La solución más ordenada cabe en 32 líneas."}]},{"name":"hints","rows":[{"key":"scenery.question","english":"The plants and creatures are ending up in my poem.","target":"Las plantas y las criaturas están acabando en mi poema."},{"key":"scenery.answer","english":"Only words belong in the poem. Everything else on the path needs to be left behind, which means your loop has to get to the next square without adding anything.","target":"Solo las palabras pertenecen al poema. Todo lo demás en el camino debe dejarse atrás, lo que significa que tu bucle tiene que pasar a la siguiente casilla sin añadir nada."},{"key":"flagSkipped.question","english":"My poet never stops walking.","target":"Mi poeta nunca deja de caminar."},{"key":"flagSkipped.answer","english":"The checkered flag is an emoji too. If you deal with scenery before you deal with the flag, the flag gets treated as scenery and the walk never ends. Order matters.","target":"La bandera de cuadros también es un emoji. Si tratas la decoración antes que la bandera, la bandera se trata como decoración y el recorrido nunca termina. El orden importa."},{"key":"spacing.question","english":"My words are all squashed together, or there is a space at the start.","target":"Mis palabras están todas apretadas, o hay un espacio al principio."},{"key":"spacing.answer","english":"Think about when a space is needed. It is needed **between** two words, not before the first one, so something has to remember whether anything has been written yet.","target":"Piensa en cuándo se necesita un espacio. Se necesita **entre** dos palabras, no antes de la primera, así que algo tiene que recordar si ya se ha escrito algo."},{"key":"apostrophe.question","english":"I am getting `heart ' s` instead of `heart's`.","target":"Obtengo `heart ' s` en lugar de `heart's`."},{"key":"apostrophe.answer","english":"An apostrophe joins the words on either side of it, so no space belongs before it or after it. A comma is the opposite way round, with no space before it but a space after.","target":"Un apóstrofo une las palabras a ambos lados de él, por lo que no debe haber espacio ni antes ni después de él. Una coma es al contrario: sin espacio antes, pero con espacio después."},{"key":"reciteOnce.question","english":"Why can I only call `recite()` once?","target":"¿Por qué solo puedo llamar a `recite()` una vez?"},{"key":"reciteOnce.answer","english":"The poet recites the finished poem, so there is only one moment where that can happen. There is more than one way for the walk to end, and all of them need to reach that same moment.","target":"El poeta recita el poema terminado, así que solo hay un momento en el que eso puede ocurrir. Hay más de una forma de que termine el recorrido, y todas ellas deben llegar a ese mismo momento."}]},{"name":"describers","rows":[{"key":"move","english":"walked forward and found ${return}","target":"avanzó y encontró ${return}"},{"key":"isEmoji","english":"checked whether ${arg1} was an emoji","target":"comprobó si ${arg1} era un emoji"},{"key":"recite","english":"recited \"${arg1}\"","target":"recitó «${arg1}»"}]},{"name":"functions","rows":[{"key":"move.description","english":"Walks the poet forward onto the next square and **returns** whatever was on it.","target":"Hace que el poeta avance a la siguiente casilla y **devuelve** lo que hubiera en ella."},{"key":"move.category","english":"Movement","target":"Movimiento"},{"key":"isEmoji.description","english":"**Returns** `true` if the thing you pass it is an emoji.","target":"Devuelve `true` si lo que le pasas es un emoji."},{"key":"isEmoji.category","english":"Checks","target":"Comprobaciones"},{"key":"recite.description","english":"Makes the poet recite a poem out loud.","target":"Hace que el poeta recite un poema en voz alta."},{"key":"recite.category","english":"Action","target":"Acción"}]}]}]
---

Estás creando un juego de poesía robótica llamado «Aventuras en poesía». Como primer paso, tienes que programar el robot para que, mientras camina, recoja palabras y después recite el poema al final.

Cada casilla contiene una de estas cuatro cosas:

1. Nada (`""`)
2. Una **palabra** del poema.
3. Un elemento decorativo como una hoja o una mariposa (un emoji).
4. Una bandera de cuadros (`🏁`), que le indica al robot que se detenga.

Para ayudarte, tienes algunas funciones. En primer lugar, tienes una función `move()` que le indica al robot poético que avance a la siguiente casilla y devuelve lo que hubiera en ella. También tienes una función `isEmoji(thing)` que devuelve un boolean que te dice si el string que le pasas es un emoji. Y, por último, tienes una función `recite(poem)` que tendrás que usar con el poema final.

Tu trabajo es recorrer el camino, construir el poema y, después, recitarlo.

## Las reglas

- Las **palabras** van al poema, con un **espacio entre cada una**.
- Los **elementos decorativos** no forman parte del poema y deben ignorarse.
- Un **apóstrofo** está en su propia casilla y une las palabras que hay a ambos lados. `heart`, después `'` y después `s`, se convierte en `heart's`.
- Una **coma** también está en su propia casilla. Se pega a la palabra anterior, pero sigue habiendo un espacio después de ella.
- El poeta deja de caminar cuando llega a la **bandera de cuadros** o en cuanto ha recogido **siete palabras**, lo que ocurra primero.
- Siempre que el poeta se detenga, y sin importar cómo se haya detenido, recita lo que haya recogido. Solo puedes llamar a `recite()` **una vez**.

## Restricciones

Hay muchas maneras de resolver este ejercicio, pero queremos que uses las palabras clave `continue` y `break` que has aprendido recientemente, así que aquí tienes unas cuantas reglas:

1. Tu solución debe usar tanto `continue` como `break`.
2. No puedes usar `&&` ni `!` en tu solución.
3. No puedes escribir ninguna función auxiliar.
4. Solo puedes usar dos niveles de sangría:

```javascript

// Permitido: 2 niveles de sangría
repeat() {
  if(...) {
    //...
  }
}

// No permitido: 3 niveles de sangría
repeat() {
  if(...) {
    if(...) {
    }
  }
}
```

Eso significa que la solución que se te ocurra será bastante «plana».

¡Buena suerte y diviértete!
