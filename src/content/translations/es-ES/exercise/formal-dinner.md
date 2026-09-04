---
lang: "es-ES"
type: "exercise"
slug: "formal-dinner"
title: "Cena formal"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/formal-dinner"
en_md5: "b0628bfad9d662c21ab91a40b9e5bc2b"
governance_sha: "8c74f1c7"
content_version: "b4f5a6d80065"
published_at: "2026-09-04"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findGuestTable.name","english":"Find the Guest's Table","target":"Busca la mesa del invitado"},{"key":"findGuestTable.description","english":"Write a function that takes the array of guests' full names, the matching array of table names, and an arriving guest announced as an honorific and a surname. Return the name of the table that guest is sitting at, or `\"No table found\"` if they aren't on the seating plan.","target":"Escribe una función que reciba el array de nombres completos de los invitados, el array de nombres de mesa que le corresponde y un invitado que llega anunciado como tratamiento honorífico y apellido. Devuelve el nombre de la mesa en la que está sentado ese invitado, o `\\\"No table found\\\"` si no está en el plan de asientos."},{"key":"solveTightly.name","english":"Solve it in 9 lines","target":"Resuélvelo en 9 líneas"},{"key":"solveTightly.description","english":"Bonus: this can be written far more compactly than you might expect. Try and solve this in 9 lines of code or fewer.","target":"Extra: esto se puede escribir de forma mucho más compacta de lo que cabría esperar. Intenta resolverlo en 9 líneas de código o menos."}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty seating plan","target":"Plan de asientos vacío"},{"key":"emptyList.description","english":"Nobody's sitting anywhere when the plan is empty.","target":"Nadie está sentado en ninguna parte cuando el plan está vacío."},{"key":"nameMissing.name","english":"Brad's turned away","target":"A Brad lo rechazan"},{"key":"nameMissing.description","english":"The name's not on the seating plan.","target":"El nombre no está en el plan de asientos."},{"key":"namePresent.name","english":"Brad's shown to his seat","target":"A Brad le enseñan su asiento"},{"key":"namePresent.description","english":"Brad Pitt is on the plan, so Mr Pitt gets his table.","target":"Brad Pitt está en el plan, así que Mr Pitt consigue su mesa."},{"key":"differentHonorific.name","english":"Knight of the realm","target":"Caballero del reino"},{"key":"differentHonorific.description","english":"A different honorific, and a guest who isn't first on the plan.","target":"Un tratamiento honorífico distinto y un invitado que no es el primero del plan."},{"key":"bondSeated.name","english":"Mr Bond, I presume","target":"Mr Bond, supongo"},{"key":"bondSeated.description","english":"James Bond is on the plan.","target":"James Bond está en el plan."},{"key":"bondNotSeated.name","english":"Hmmm... Mr Bond, I presume","target":"Hmmm... Mr Bond, supongo"},{"key":"bondNotSeated.description","english":"Only Jason Bourne is on the plan, not James Bond.","target":"Solo Jason Bourne está en el plan, no James Bond."},{"key":"partialSurname.name","english":"Not quite Mr Pitt","target":"No es del todo Mr Pitt"},{"key":"partialSurname.description","english":"Neither Ada Spitt nor Hugo Ross-Pitt is Mr Pitt, so he has no seat here.","target":"Ni Ada Spitt ni Hugo Ross-Pitt son Mr Pitt, por lo que no tiene asiento aquí."},{"key":"lloydWebber.name","english":"How about a Baron?","target":"¿Qué tal un barón?"},{"key":"lloydWebber.description","english":"Baron Lloyd Webber has two words in his surname.","target":"Baron Lloyd Webber tiene dos palabras en su apellido."},{"key":"markWebber.name","english":"Is Mark the Baron?","target":"¿Es Mark el barón?"},{"key":"markWebber.description","english":"A different Webber doesn't count - the surname has to match in full.","target":"Un Webber distinto no cuenta: el apellido debe coincidir por completo."},{"key":"formalDinnerBonusLineCount.name","english":"Neat and tidy: Lord Doyle","target":"Ordenado y pulcro: Lord Doyle"},{"key":"formalDinnerBonusLineCount.description","english":"The same seating plan as before, but this time try and solve this in 9 lines of code or fewer.","target":"El mismo plan de asientos que antes, pero esta vez intenta resolverlo en 9 líneas de código o menos."}]},{"name":"hints","rows":[{"key":"twoLists.question","english":"How do the two arrays relate to each other?","target":"¿Cómo se relacionan los dos arrays entre sí?"},{"key":"twoLists.answer","english":"They're a pair. The first guest sits at the first table, the second guest at the second table, and so on. So it's not enough to know *that* a guest is on the plan - you need to know *where* on the plan they are.","target":"Son una pareja. El primer invitado se sienta en la primera mesa, el segundo invitado en la segunda mesa, y así sucesivamente. Así que no basta con saber *que* un invitado está en el plan: necesitas saber *dónde* está en el plan."},{"key":"comparingNames.question","english":"The guest says 'Mr Pitt' but the plan says 'Brad Pitt'. How do I compare those?","target":"El invitado dice «Mr Pitt» pero el plan dice «Brad Pitt». ¿Cómo comparo esas dos cadenas?"},{"key":"comparingNames.answer","english":"Those two strings will never be equal, so a straight comparison won't get you anywhere. Have a think about which part of what the guest announced actually appears on the plan, and whereabouts in the plan's entry you'd expect to find it.","target":"Esos dos strings nunca serán iguales, así que una comparación directa no te llevará a ninguna parte. Piensa en qué parte de lo que anunció el invitado aparece realmente en el plan, y en qué lugar de la entrada del plan esperarías encontrarla."},{"key":"lookalikeSurnames.question","english":"Could a surname match the wrong guest?","target":"¿Podría un apellido coincidir con el invitado equivocado?"},{"key":"lookalikeSurnames.answer","english":"It absolutely could. Read 'Ada Spitt' and 'Hugo Ross-Pitt' out loud, and then think about Mr Pitt. Ask yourself what makes a surname a real surname on that line, rather than just some letters that happen to sit at the end of it.","target":"Absolutamente podría. Lee «Ada Spitt» y «Hugo Ross-Pitt» en voz alta, y luego piensa en Mr Pitt. Pregúntate qué hace que un apellido sea un apellido real en esa línea, en lugar de simplemente unas letras que aparecen al final de ella."},{"key":"noMatch.question","english":"What should I return when nobody matches?","target":"¿Qué debo devolver cuando nadie coincide?"},{"key":"noMatch.answer","english":"The string `\"No table found\"`, exactly as written. The trickier bit is knowing when you're allowed to say it. If you've checked the very first guest on the plan and they're not your man, do you actually know yet that he isn't seated somewhere?","target":"El string `\\\"No table found\\\"`, exactamente como está escrito. La parte más delicada es saber cuándo puedes decirlo. Si has comprobado al primer invitado del plan y no es tu hombre, ¿sabes realmente que no está sentado en algún sitio?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can get down to 9 lines of code.","target":"¡Sigue así! A ver si consigues reducirlo a 9 líneas de código."}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in an array - the same length property you've used on strings","target":"El número de elementos de un array: la misma propiedad length que has usado en los strings"},{"key":"length.category","english":"Array Operations","target":"Operaciones con arrays"},{"key":"split.description","english":"Split a string into an array of pieces, breaking at each separator","target":"Divide un string en un array de trozos, separando en cada separador"},{"key":"split.category","english":"String Operations","target":"Operaciones con strings"},{"key":"slice.description","english":"Make a new array from part of an array, starting at a position","target":"Crea un nuevo array a partir de una parte de un array, empezando en una posición"},{"key":"slice.category","english":"Array Operations","target":"Operaciones con arrays"},{"key":"join.description","english":"Join the items of an array into one string, with a separator between them","target":"Une los elementos de un array en un solo string, con un separador entre ellos"},{"key":"join.category","english":"Array Operations","target":"Operaciones con arrays"},{"key":"endsWith.description","english":"Check whether a string ends with a smaller string","target":"Comprueba si un string termina con un string más pequeño"},{"key":"endsWith.category","english":"String Operations","target":"Operaciones con strings"}]}]}]
---

Estás de vuelta en tu trabajo extra como portero. Es la noche después de la «After Party», y hay otra fiesta más. Esta vez es una cena formal, así que esta noche eres menos «hombre grandote en la puerta» y más «persona con un portapapeles y un chaleco bonito».

Aquí definitivamente no es el lugar para usar **solo** tu primer nombre. De hecho, no es lugar para usar tu primer nombre para nada. Aquí, todo el mundo usa un tratamiento honorífico (_honorific_ en inglés) (señorita, señor, doctor, etc.) y su apellido.

Los organizadores te han entregado el plan de asientos como dos arrays separados. Uno contiene los nombres completos de los invitados. El otro contiene el nombre de la mesa en la que está sentado cada invitado (con nombres de árboles y flores). Al igual que con «After Party», los dos arrays se alinean: el invitado en la posición 3 del primer array está sentado en la mesa en la posición 3 del segundo array.

Así que cuando el señor Pitt entra con elegancia, debes deducir que este es el «Brad Pitt» en tu lista, y luego decirle en qué mesa está.

Escribe una función llamada `tableFor` (busca la mesa en la que está sentado un invitado). La función recibe tres argumentos:

- El primero es el array de los nombres completos de los invitados, como strings
- El segundo es el array de los nombres de las mesas, en el mismo orden que los invitados
- El tercero es el invitado que llega, formateado como un tratamiento honorífico seguido de su apellido (por ejemplo, «Mr Pitt»)

Devuelve el nombre de la mesa en la que está sentado el invitado. Si no está en el plan de asientos en absoluto, devuelve la cadena `"No table found"` en su lugar (¡aquí no hay colados!).

El tratamiento honorífico siempre es exactamente una palabra, y todo lo que va después es el apellido del invitado. La mayoría de los apellidos son una palabra, pero algunos ilustres tienen dos.

Sin embargo, ten cuidado. Muchos apellidos se parecen mucho a otros.

### Métodos y propiedades de strings y arrays

Además de la propiedad `.length` que aprendiste en el ejercicio anterior, hay cuatro métodos que te pueden ser útiles. Hay muchas formas de resolver este ejercicio, pero estos te llevarán a la solución más corta posible.

`"...".split(substring)` divide un string usando otro string. Por ejemplo:

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` captura una parte de un array, empezando en el índice `start` y continuando hasta el final del array. Los elementos capturados se copian en un array NUEVO, que se te devuelve. De hecho, esto descarta los primeros `start` elementos. Por ejemplo:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)` une los elementos de un array con el string que le des. Por ejemplo:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)` te dice si un string termina con otro string. Por ejemplo:

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
