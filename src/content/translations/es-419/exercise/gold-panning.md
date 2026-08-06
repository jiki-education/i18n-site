---
lang: "es-419"
type: "exercise"
slug: "gold-panning"
title: "Bateo de oro"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/gold-panning"
en_md5: "e62d584285e129af1ec13bb8d337d0fc"
governance_sha: "c80036b"
content_version: "3b2efa07b78a"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"needsRecharge","english":"The robot needs to recharge after selling.","target":null},{"key":"sellBeforeAnythingElse","english":"The robot needs to go and sell before it does anything else.","target":null},{"key":"sellNumber","english":"You can only sell a number of nuggets","target":null}]},{"name":"checks","rows":[{"key":"notSold","english":"You didn't sell your nuggets. Make sure you call <code>sell()</code> after panning.","target":null},{"key":"wrongSoldTotal","english":"Expected to sell {{expectedTotal}} nuggets ({{panValues}}) but you sold {{got}}. Make sure you add each pan result to your running total.","target":null}]},{"name":"tasks","rows":[{"key":"panAndSell.name","english":"Pan for gold and sell your haul","target":null},{"key":"panAndSell.description","english":"Pan 5 times to collect gold nuggets, keeping a running total, then sell everything at the trading post.","target":null}]},{"name":"scenarios","rows":[{"key":"randomPans.name","english":"Pan and sell","target":null},{"key":"randomPans.description","english":"Pan 5 times for a random number of nuggets each time, then sell the total.","target":null}]},{"name":"hints","rows":[{"key":"wrongSellAmount.question","english":"It says I'm selling the wrong amount of gold.","target":null},{"key":"wrongSellAmount.answer","english":"You need to sell ALL the gold you find in the 5 pans in one go at the end, not selling after each pan.","target":null},{"key":"trackingTotal.question","english":"I am using pan multiple times but I don't know how to keep track of how much I have.","target":null},{"key":"trackingTotal.answer","english":"Think about what you've learned in recent video lessons. You need to use a variable to keep track of the **total** amount of gold that you have collected across **all** the pans together.","target":null},{"key":"fiveLines.question","english":"I've got it working, but I can't get down to 5 lines.","target":null},{"key":"fiveLines.answer","english":"Do you have repetitive code in your solution? If so, what can we use to reduce that repetitiveness?","target":null},{"key":"stillFiveLines.question","english":"I still can't get it down to 5 lines of code.","target":null},{"key":"stillFiveLines.answer","english":"You should only need to use one variable. Are you using more?","target":null}]},{"name":"describers","rows":[{"key":"pan","english":"panned and found ${return} nuggets","target":null},{"key":"sell","english":"sold ${arg1} nuggets at the trading post","target":null}]},{"name":"functions","rows":[{"key":"pan.description","english":"Dips your pan in the river and **gives back** the number of gold nuggets found.","target":null},{"key":"pan.category","english":"Mining","target":null},{"key":"sell.description","english":"Sells your gold nuggets at the trading post.","target":null},{"key":"sell.category","english":"Action","target":null}]}]}]
---

Antes de que California fuera el hogar de la tecnología, ¡fue el hogar del oro! Más de 300,000 personas llegaron y comenzaron a buscar en los ríos pequeñas pepitas de oro para vender.

En este ejercicio, vas a construir un robot que va a salir a batear oro.

Tienes una función `pan()` (batear), que puedes usar para batear un poco de oro del agua. La función devuelve (_returns_ en inglés) la cantidad de pepitas que encuentres.

También tienes una función `sell(numberOfNuggets)` (vender), que puedes usar para vender el número total de pepitas que encuentres.

Tu robot tiene suficiente capacidad para batear unas cuantas veces antes de vender. Necesitas escribir código para que vaya al río, batee **5 veces**, lleve la cuenta de cuánto oro ha recolectado sobre la marcha, y luego venda el número total de pepitas que haya encontrado (sumando las 5 bateadas al final).

¡Resuelve el acertijo en **5 líneas de código** (o menos)!
