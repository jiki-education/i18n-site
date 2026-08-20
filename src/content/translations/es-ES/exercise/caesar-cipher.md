---
lang: "es-ES"
type: "exercise"
slug: "caesar-cipher"
title: "Cifrado César"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/caesar-cipher"
en_md5: "d3e1c006a952dafab93205195f0af6db"
governance_sha: "16f805d"
content_version: "ff1976617dc2"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"encodeMessage.name","english":"Encode a message","target":"Codificar un mensaje"},{"key":"encodeMessage.description","english":"Write an encode function that shifts each letter in a message by a given amount. Spaces should remain as spaces. Letters that shift past 'z' should wrap around to the beginning of the alphabet.","target":"Escribe una función `encode` que desplace cada letra de un mensaje una cantidad determinada. Los espacios deben permanecer como espacios. Las letras que se desplacen más allá de la 'z' deben volver al principio del alfabeto."}]},{"name":"scenarios","rows":[{"key":"caesarSimpleShift.name","english":"Simple shift by 1","target":"Desplazamiento simple de 1"},{"key":"caesarSimpleShift.description","english":"Shift each letter forward by 1: a->b, b->c, c->d.","target":"Desplaza cada letra hacia delante en 1: a->b, b->c, c->d."},{"key":"caesarShiftBy3.name","english":"Shift by 3","target":"Desplazamiento de 3"},{"key":"caesarShiftBy3.description","english":"Shift each letter forward by 3: h->k, e->h, l->o, o->r.","target":"Desplaza cada letra hacia delante en 3: h->k, e->h, l->o, o->r."},{"key":"caesarWrapAround.name","english":"Wrap around the alphabet","target":"Vuelta al principio"},{"key":"caesarWrapAround.description","english":"When shifting goes past 'z', it wraps around: x->a, y->b, z->c.","target":"Cuando el desplazamiento pasa de la 'z', da la vuelta: x->a, y->b, z->c."},{"key":"caesarWithSpaces.name","english":"Message with spaces","target":"Mensaje con espacios"},{"key":"caesarWithSpaces.description","english":"Spaces should remain as spaces, only letters are shifted.","target":"Los espacios deben permanecer como espacios; solo se desplazan las letras."},{"key":"caesarRot13.name","english":"ROT13 encryption","target":"Cifrado ROT13"},{"key":"caesarRot13.description","english":"ROT13 is a special case of the Caesar cipher with a shift of 13.","target":"ROT13 es un caso especial del cifrado César con un desplazamiento de 13."}]},{"name":"hints","rows":[{"key":"shiftingLetterByN.question","english":"How do I think about shifting a letter by N positions?","target":"¿Cómo puedo pensar en desplazar una letra N posiciones?"},{"key":"shiftingLetterByN.answer","english":"Each letter has a position in the alphabet (a is at position 0, b at 1, and so on). To shift, you find that position, add the shift amount, then turn the new position back into a letter by looking it up in the alphabet.","target":"Cada letra tiene una posición en el alfabeto (a está en la posición 0, b en la 1, y así sucesivamente). Para desplazar, encuentras esa posición, le sumas el valor del desplazamiento y luego conviertes la nueva posición de vuelta en una letra buscándola en el alfabeto."},{"key":"letterPosition.question","english":"How do I find the position of a letter in the alphabet?","target":"¿Cómo encuentro la posición de una letra en el alfabeto?"},{"key":"letterPosition.answer","english":"You can search a string for a smaller piece with `indexOf`. Calling it on the alphabet string gives you a letter's position, or -1 if the letter isn't found. To go the other way, index back into the alphabet string with the position to get the letter.","target":"Puedes buscar una parte más pequeña dentro de un string con `indexOf`. Llamarlo sobre el string del alfabeto te da la posición de una letra, o -1 si la letra no se encuentra. Para ir en la otra dirección, indexa de nuevo en el string del alfabeto con la posición para obtener la letra."},{"key":"wrapPastZ.question","english":"What happens when the shift goes past 'z'?","target":"¿Qué pasa cuando el desplazamiento pasa de la 'z'?"},{"key":"wrapPastZ.answer","english":"It needs to wrap around back to 'a'. The modulo operator (`%`) is perfect for this. Taking the position modulo 26 brings any number back into the 0 to 25 range.","target":"Tiene que dar la vuelta y volver a la 'a'. El operador de residuo (`%`) es perfecto para esto. Calcular la posición módulo 26 hace que cualquier número vuelva al rango de 0 a 25."},{"key":"applyToWholeMessage.question","english":"How do I apply this to a whole message?","target":"¿Cómo aplico esto a un mensaje completo?"},{"key":"applyToWholeMessage.answer","english":"Loop through each character of the message, shift it using your single-letter helper, and use concatenation (`+`) to build up the result string from the shifted letters.","target":"Recorre cada carácter del mensaje en un bucle, desplázalo usando tu función auxiliar para una sola letra y usa la concatenación (`+`) para construir el string resultante a partir de las letras desplazadas."}]},{"name":"functions","rows":[{"key":"indexOf.description","english":"Find the position of a smaller string within a string, or -1 if it isn't found (provided by level stdlib)","target":"Encuentra la posición de una string más pequeña dentro de una string, o -1 si no se encuentra (proporcionado por la biblioteca estándar del nivel)."},{"key":"indexOf.category","english":"String Operations","target":"Operaciones con strings"}]}]}]
---

El cifrado César es una de las técnicas de cifrado más antiguas y sencillas. Lo usaba Julio César para enviar mensajes secretos a sus generales.

El cifrado funciona desplazando cada letra del mensaje un número fijo de posiciones en el alfabeto. Por ejemplo, con un desplazamiento de 3, 'a' se convierte en 'd', 'b' en 'e', y así sucesivamente. Si el desplazamiento pasa de la 'z', vuelve al principio del alfabeto.

Los espacios se deben conservar como espacios (no se desplazan).

Crea una función llamada `encode(message, shift)` (codificar(mensaje, desplazamiento)) que reciba un mensaje en minúsculas y un valor de desplazamiento, y devuelva el mensaje cifrado.

Por ejemplo:

- `encode("abc", 1)` devuelve `"bcd"`
- `encode("xyz", 3)` devuelve `"abc"` (da la vuelta)
- `encode("hello world", 5)` devuelve `"mjqqt btwqi"`

Pista: ¡conviene dividir este problema en funciones auxiliares más pequeñas!

### Dato curioso

Una vez fui maestro de ceremonias en una conferencia de tecnología en Braga, Portugal. Cinco minutos antes de salir al escenario, los organizadores se me acercaron y, algo avergonzados, me preguntaron si no me importaría disfrazarme de Julio César durante la primera parte del día para celebrar el legado romano de Braga. ¿Lo logré…?

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="Jeremy disfrazado de César"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
