---
lang: "es-ES"
type: "exercise"
slug: "lunchbox"
title: "Fiambrera"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/lunchbox"
en_md5: "b6274dbfc7f2e050c514feb7da65b588"
governance_sha: "3af8e97d"
content_version: "f5659aefde57"
published_at: "2026-08-28"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"Tu solución tiene demasiadas líneas de código. ¿Puedes hacerla más corta?"}]},{"name":"tasks","rows":[{"key":"packLunchbox.name","english":"Pack the Lunchbox","target":"Mete en la fiambrera"},{"key":"packLunchbox.description","english":"Split the items into a lunchbox and a backpack: fit as many as you can into the lunchbox without going over its capacity, and put everything else in the backpack.","target":"Reparte los objetos entre la fiambrera y la mochila: mete en la fiambrera tantos como puedas sin superar su capacidad y pon el resto en la mochila."},{"key":"solveInSixteenLines.name","english":"Solve in 16 lines of code","target":"Resuelve en 16 líneas de código"},{"key":"solveInSixteenLines.description","english":"Can you solve this exercise with only 16 lines of code?","target":"¿Puedes resolver este ejercicio con solo 16 líneas de código?"}]},{"name":"scenarios","rows":[{"key":"everythingFits.name","english":"Everything fits","target":"Todo cabe"},{"key":"everythingFits.description","english":"A roomy lunchbox where every item fits, so the backpack stays empty.","target":"Una fiambrera espaciosa donde cabe todo, de modo que la mochila se queda vacía."},{"key":"packTheMost.name","english":"Fit the most","target":"Mete lo máximo"},{"key":"packTheMost.description","english":"Space is tight, so the small items go in the lunchbox and the big ones are left for the backpack.","target":"El espacio es limitado, así que los objetos pequeños van a la fiambrera y los grandes se dejan para la mochila."},{"key":"justTheSnack.name","english":"Just the snack","target":"Solo el tentempié"},{"key":"justTheSnack.description","english":"Only the very smallest item fits; the rest go in the backpack.","target":"Solo cabe el objeto más pequeño; el resto va a la mochila."},{"key":"nothingFits.name","english":"Nothing fits","target":"No cabe nada"},{"key":"nothingFits.description","english":"Even the smallest item is too big, so everything ends up in the backpack.","target":"Incluso el objeto más pequeño es demasiado grande, así que todo acaba en la mochila."},{"key":"emptyLunchbox.name","english":"Empty lunchbox","target":"Fiambrera vacía"},{"key":"emptyLunchbox.description","english":"There are no items at all, so both the lunchbox and the backpack come back empty.","target":"No hay ningún objeto, así que tanto la fiambrera como la mochila vuelven vacías."},{"key":"bonus1.name","english":"16 lines of code","target":"16 líneas de código"},{"key":"bonus1.description","english":"Solve the exercise with only 16 lines of code.","target":"Resuelve el ejercicio con solo 16 líneas de código."}]},{"name":"hints","rows":[{"key":"readEachItem.question","english":"How do I get each item's name and size?","target":"¿Cómo obtengo el nombre y el tamaño de cada objeto?"},{"key":"readEachItem.answer","english":"Each item is a pair. The first part is the name and the second is the size, so you can read them out of the item one at a time.","target":"Cada objeto es un par. La primera parte es el nombre y la segunda es el tamaño, así que puedes leerlos del objeto de uno en uno."},{"key":"fitTheMost.question","english":"How do I fit in as many items as possible?","target":"¿Cómo meto tantos objetos como sea posible?"},{"key":"fitTheMost.answer","english":"Think about which items to add first. Smaller items leave more room for others, so it pays to deal with them before the big ones.","target":"Piensa en qué objetos añadir primero. Los objetos más pequeños dejan más sitio para los demás, así que merece la pena ocuparse de ellos antes que de los grandes."},{"key":"goSmallestFirst.question","english":"The items are listed largest first — how do I go through them smallest first?","target":"Los objetos están listados de mayor a menor. ¿Cómo los recorro de menor a mayor?"},{"key":"goSmallestFirst.answer","english":"There's an array method that gives you back a reversed copy of an array. Reverse the items first, then work through them in that new order.","target":"Hay un método de array que te devuelve una copia invertida de un array. Invierte primero los objetos y luego recórrelos en ese nuevo orden."},{"key":"knowWhenFull.question","english":"How do I decide where each item goes?","target":"¿Cómo decido dónde va cada objeto?"},{"key":"knowWhenFull.answer","english":"Keep a running total of the sizes you've added. Before adding an item, check whether the total plus its size would still fit within the capacity. If it does, it goes in the lunchbox, otherwise it goes in the backpack.","target":"Mantén un total acumulado de los tamaños que has añadido. Antes de añadir un objeto, comprueba si el total más su tamaño cabría aún dentro de la capacidad. Si es así, va a la fiambrera; si no, va a la mochila."}]},{"name":"functions","rows":[{"key":"toReversed.description","english":"Returns a copy of the array with the elements in reverse order, without changing the original.","target":"Devuelve una copia del array con los elementos en orden inverso, sin modificar el original."},{"key":"toReversed.category","english":"Arrays","target":"Arrays"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Añade un elemento al final de un array, modificando el array original."},{"key":"push.category","english":"Arrays","target":"Arrays"}]}]}]
---

De niño, preparaba mi fiambrera todos los días para ir al colegio. Mi madre me dejaba los objetos fuera, ordenados del más grande al más pequeño, y yo intentaba meter en la fiambrera todo lo que podía, pero, claro, la fiambrera solo podía contener una cantidad limitada. Lo que no cabía en ella, tenía que meterlo en la mochila y llevarlo todo el día conmigo, en lugar de dejarlo en la taquilla.

En este ejercicio, tu tarea es crear un algoritmo que calcule qué puedo meter en la fiambrera y qué tengo que llevar en la mochila.

Tu tarea es escribir una función llamada `packLunch(items, capacity)` (guardar el almuerzo) que recibe dos entradas: el array de objetos (con el más grande primero) y el tamaño de la fiambrera `capacity` (la capacidad, un número).

El array de objetos es un array anidado: cada objeto es, a su vez, un array con dos elementos, el nombre del objeto y su tamaño. Los objetos van siempre de mayor a menor. Por ejemplo, el array de objetos podría ser:

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

La fiambrera tiene una capacidad máxima. Tienes que averiguar qué objetos caben en la fiambrera. Mete en la fiambrera todos los que puedas. Todo lo demás debe ir a la mochila.

Tu función debe devolver un array que contenga dos elementos. El primer elemento es un array con los objetos que van a la fiambrera, y el segundo, con los objetos que van a la mochila. Ambos arrays deben estar ordenados de menor a mayor.

Por ejemplo, para el array anterior, con una capacidad de 20, deberías devolver:

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Métodos de ayuda

Al igual que en todos los ejercicios de esta sección, te convendrá usar el método `.push(element)` para construir tus arrays.

También tienes un método nuevo llamado `[...].toReversed()`, que crea una copia de un array con todos los elementos en orden inverso. Por ejemplo:

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

No tienes que usarlo, pero puede resultarte útil.

¡Diviértete!
