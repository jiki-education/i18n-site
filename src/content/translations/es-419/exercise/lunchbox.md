---
lang: "es-419"
type: "exercise"
slug: "lunchbox"
title: "Lonchera"
status: "published"
source_repo: "i18n"
source_path: "locales/es-419/curriculum/exercises/lunchbox"
en_md5: "b6274dbfc7f2e050c514feb7da65b588"
governance_sha: "3af8e97d"
content_version: "5a5881baa5ce"
published_at: "2026-08-28"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"Tu solución tiene demasiadas líneas de código. ¿Puedes hacerla más corta?"}]},{"name":"tasks","rows":[{"key":"packLunchbox.name","english":"Pack the Lunchbox","target":"Empaca la lonchera"},{"key":"packLunchbox.description","english":"Split the items into a lunchbox and a backpack: fit as many as you can into the lunchbox without going over its capacity, and put everything else in the backpack.","target":"Divide los artículos entre una lonchera y una mochila: mete tantos como puedas en la lonchera sin pasarte de su capacidad y pon todo lo demás en la mochila."},{"key":"solveInSixteenLines.name","english":"Solve in 16 lines of code","target":"Resuelve en 16 líneas de código"},{"key":"solveInSixteenLines.description","english":"Can you solve this exercise with only 16 lines of code?","target":"¿Puedes resolver este ejercicio con solo 16 líneas de código?"}]},{"name":"scenarios","rows":[{"key":"everythingFits.name","english":"Everything fits","target":"Todo cabe"},{"key":"everythingFits.description","english":"A roomy lunchbox where every item fits, so the backpack stays empty.","target":"Una lonchera espaciosa donde caben todos los artículos, así que la mochila queda vacía."},{"key":"packTheMost.name","english":"Fit the most","target":"Mete la mayor cantidad"},{"key":"packTheMost.description","english":"Space is tight, so the small items go in the lunchbox and the big ones are left for the backpack.","target":"El espacio es limitado, así que los artículos pequeños van en la lonchera y los grandes se dejan para la mochila."},{"key":"justTheSnack.name","english":"Just the snack","target":"Solo el refrigerio"},{"key":"justTheSnack.description","english":"Only the very smallest item fits; the rest go in the backpack.","target":"Solo cabe el artículo más pequeño; el resto va a la mochila."},{"key":"nothingFits.name","english":"Nothing fits","target":"No cabe nada"},{"key":"nothingFits.description","english":"Even the smallest item is too big, so everything ends up in the backpack.","target":"Incluso el artículo más pequeño es demasiado grande, así que todo termina en la mochila."},{"key":"emptyLunchbox.name","english":"Empty lunchbox","target":"Lonchera vacía"},{"key":"emptyLunchbox.description","english":"There are no items at all, so both the lunchbox and the backpack come back empty.","target":"No hay ningún artículo, así que tanto la lonchera como la mochila vuelven vacías."},{"key":"bonus1.name","english":"16 lines of code","target":"16 líneas de código"},{"key":"bonus1.description","english":"Solve the exercise with only 16 lines of code.","target":"Resuelve el ejercicio con solo 16 líneas de código."}]},{"name":"hints","rows":[{"key":"readEachItem.question","english":"How do I get each item's name and size?","target":"¿Cómo obtengo el nombre y el tamaño de cada artículo?"},{"key":"readEachItem.answer","english":"Each item is a pair. The first part is the name and the second is the size, so you can read them out of the item one at a time.","target":"Cada artículo es un par. La primera parte es el nombre y la segunda es el tamaño, así que puedes leerlos del artículo uno a la vez."},{"key":"fitTheMost.question","english":"How do I fit in as many items as possible?","target":"¿Cómo hago para meter la mayor cantidad de artículos posible?"},{"key":"fitTheMost.answer","english":"Think about which items to add first. Smaller items leave more room for others, so it pays to deal with them before the big ones.","target":"Piensa qué artículos conviene agregar primero. Los artículos más pequeños dejan más espacio para los demás, así que conviene ocuparte de ellos antes que de los grandes."},{"key":"goSmallestFirst.question","english":"The items are listed largest first — how do I go through them smallest first?","target":"Los artículos están ordenados de mayor a menor; ¿cómo hago para recorrerlos de menor a mayor?"},{"key":"goSmallestFirst.answer","english":"There's an array method that gives you back a reversed copy of an array. Reverse the items first, then work through them in that new order.","target":"Hay un método de array que te devuelve una copia invertida de un array. Invierte los artículos primero y luego trabaja con ellos en ese nuevo orden."},{"key":"knowWhenFull.question","english":"How do I decide where each item goes?","target":"¿Cómo decido a dónde va cada artículo?"},{"key":"knowWhenFull.answer","english":"Keep a running total of the sizes you've added. Before adding an item, check whether the total plus its size would still fit within the capacity. If it does, it goes in the lunchbox, otherwise it goes in the backpack.","target":"Lleva un total acumulado de los tamaños que agregas. Antes de agregar un artículo, verifica si el total más su tamaño aún cabría dentro de la capacidad. Si es así, va a la lonchera; de lo contrario, va a la mochila."}]},{"name":"functions","rows":[{"key":"toReversed.description","english":"Returns a copy of the array with the elements in reverse order, without changing the original.","target":"Devuelve una copia del array con los elementos en orden inverso, sin cambiar el original."},{"key":"toReversed.category","english":"Arrays","target":"Arrays"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Agrega un elemento al final de un array, modificando el array en su lugar."},{"key":"push.category","english":"Arrays","target":"Arrays"}]}]}]
---

Cuando iba a la escuela, empacaba mi lonchera todos los días. Mi mamá me dejaba los artículos afuera, ordenados de mayor a menor, y yo intentaba meter la mayor cantidad posible en la lonchera, pero, obviamente, la lonchera solo podía contener una cantidad limitada. Lo que no cabía, tenía que meterlo en la mochila y cargarlo todo el día conmigo, en lugar de dejarlo en mi casillero.

En este ejercicio, tu trabajo es crear un algoritmo que determine qué artículos puedo meter en la lonchera y qué tengo que llevar en la mochila.

Tu trabajo es escribir una función llamada `packLunch(items, capacity)` (empacar el almuerzo). Esta función recibe dos argumentos: el array de artículos (ordenados de mayor a menor) y el tamaño de la lonchera, `capacity` (capacidad), que es un número.

El array de artículos es un array anidado; cada artículo también es un array con dos elementos: el nombre del artículo y su tamaño. Los artículos siempre van de mayor a menor. Por ejemplo, el array de artículos podría ser:

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

La lonchera tiene una capacidad máxima. Tienes que determinar qué artículos pueden ir en la lonchera. Mete la mayor cantidad de artículos posible. Todo lo demás debe ir a la mochila.

Tu función debe devolver un array que contenga dos elementos. El primer elemento es un array con los artículos para la lonchera, y el segundo, con los artículos para la mochila. Ambos arrays deben estar ordenados de menor a mayor.

Por ejemplo, para el array anterior, con una capacidad de 20, se espera que devuelvas:

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Métodos útiles

Al igual que en todos los ejercicios de esta sección, te conviene usar el método `.push(element)` para armar tus arrays.

También cuentas con un método nuevo llamado `[...].toReversed()`, que crea una copia de un array con todos los artículos en orden inverso. Por ejemplo:

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

No tienes que usarlo, pero puede resultarte útil.

¡Diviértete!
