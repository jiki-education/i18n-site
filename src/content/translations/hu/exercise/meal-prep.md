---
lang: "hu"
type: "exercise"
slug: "meal-prep"
title: "Étkezés előkészítése"
status: "published"
source_repo: "i18n"
source_path: "locales/hu/curriculum/exercises/meal-prep"
en_md5: "8bcf8310b9da1c637816c3b85a27725c"
governance_sha: "accabaea"
content_version: "c50ff9c886ad"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createShoppingList.name","english":"Create Shopping List","target":"Bevásárlólista létrehozása"},{"key":"createShoppingList.description","english":"Write a function that takes the contents of your fridge and a recipe's ingredients, and returns the items you need to buy (items in the recipe that aren't in the fridge).","target":"Írj egy függvényt, amely megkapja a hűtőd tartalmát és a recept elemeit, és visszaadja azokat, amelyeket meg kell venned (a receptben szereplő, de a hűtőből hiányzó elemeket)."}]},{"name":"scenarios","rows":[{"key":"emptyFridge.name","english":"Empty fridge","target":"Üres hűtő"},{"key":"emptyFridge.description","english":"When the fridge is empty, you need to buy everything.","target":"Amikor a hűtő üres, mindent meg kell venned."},{"key":"youHaveEverything.name","english":"You have everything","target":"Minden megvan"},{"key":"youHaveEverything.description","english":"When you have all ingredients, the shopping list is empty.","target":"Amikor minden hozzávalód megvan, a bevásárlólista üres."},{"key":"oneThing.name","english":"One thing","target":"Egy dolog"},{"key":"oneThing.description","english":"When you're missing just one ingredient.","target":"Amikor csak egy dolog hiányzik."},{"key":"fewThings.name","english":"A few things","target":"Néhány dolog"},{"key":"fewThings.description","english":"When you're missing a few ingredients.","target":"Amikor néhány dolog hiányzik."}]},{"name":"hints","rows":[{"key":"realLifeApproach.question","english":"How would I do this in real life?","target":"Hogyan csinálnám ezt a való életben?"},{"key":"realLifeApproach.answer","english":"You'd go through the recipe one ingredient at a time and check the fridge for each. Anything missing goes on the shopping list. Your code does the same thing.","target":"Végigmennél a recepten, egyik hozzávalót a másik után, és mindegyiknél megnéznéd a hűtőt. Ami hiányzik, az felkerül a bevásárlólistára. A kódod ugyanezt teszi."},{"key":"checkFridgeItem.question","english":"How do I check if a fridge item is there?","target":"Hogyan ellenőrzöm, hogy egy elem ott van-e a hűtőben?"},{"key":"checkFridgeItem.answer","english":"The `includes` method does this for you. Calling it on the fridge with an ingredient gives you back `true` or `false`.","target":"Az `includes` metódus elvégzi ezt helyetted. Ha a hűtőn meghívod egy hozzávalóval, `true` vagy `false` értéket kapsz vissza."},{"key":"buildShoppingList.question","english":"How do I build up the shopping list?","target":"Hogyan építem fel a bevásárlólistát?"},{"key":"buildShoppingList.answer","english":"Start with an empty array. For each recipe item that the fridge doesn't contain, `push()` it onto the shopping list.","target":"Kezdj egy üres tömbbel. Minden olyan receptelemnél, amely nincs meg a hűtőben, add hozzá a bevásárlólistához a `push()` metódussal."}]},{"name":"functions","rows":[{"key":"includes.description","english":"Checks whether an array contains a specific item, returning true or false.","target":"Ellenőrzi, hogy egy tömb tartalmaz-e egy adott elemet, és igaz vagy hamis értéket ad vissza."},{"key":"includes.category","english":"Arrays","target":"Tömbök"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Hozzáad egy elemet a tömb végére, helyben módosítva a tömböt."},{"key":"push.category","english":"Arrays","target":"Tömbök"}]}]}]
---

Olyan ember vagy, aki szeret mindennap beugrani a boltba, hogy megvegye, ami éppen kell a vacsorához. Ez jó ürügy arra, hogy megmozgasd magad, és elbeszélgess a helyi boltossal.

Minden nap kiválasztasz egy receptet, megnézed, mi van a hűtőben, és feljegyzed, mit kell megvenned.

Most úgy döntöttél, hogy kicsit megkönnyíted az életed, és írsz egy programot, ami elvégzi helyetted a nehéz munkát! A program összeveti azt, ami a listádon van, azzal, ami a hűtőben van, és kiadja a különbséget.

A te dolgod, hogy írj egy `shoppingList(fridgeContents, recipeItems)` nevű függvényt (bevásárlólista). Két bemenetet kap: a hűtőd tartalmát stringek tömbjeként, és a recept elemeit, szintén stringek tömbjeként. Azokat kell visszaadnia, amiket meg kell venned, stringek tömbjeként.

Például:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### A push metódus

A feladat megoldásához a `.push(element)` metódussal kell felépítened a tömbödet. A kódodban csak egy új tömböt hozhatsz létre. Ha nem vagy biztos benne, mit kell tenned, nézd meg újra az előző videót.

Használhatod még az `includes` metódust is (lentebb találsz róla emlékeztetőt).

Jó szórakozást!
