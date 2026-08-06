---
lang: "ja"
type: "exercise"
slug: "cityscape-skyscraper"
title: "超高層ビル"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/cityscape-skyscraper"
en_md5: "f9e50084e5ed2badccc2e35a8a790fc5"
governance_sha: "c80036b"
content_version: "a20efcdb76a2"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"totalCells","english":"Expected {{expected}} cells but found {{got}}.","target":"{{expected}}セルが必要ですが、{{got}}セルが見つかりました。"},{"key":"groundWalls","english":"The ground floor should have walls at positions (17, 2) and (21, 2).","target":"地上階には、位置(17, 2)と(21, 2)に壁が必要です。"},{"key":"groundGlass","english":"The ground floor should have glass at positions (18, 2) and (20, 2).","target":"地上階には、位置(18, 2)と(20, 2)にガラスが必要です。"},{"key":"groundEntrance","english":"The ground floor should have an entrance at position (19, 2).","target":"地上階には、位置(19, 2)に入り口が必要です。"},{"key":"floorWalls","english":"Floor {{y}} should have walls at positions (17, {{y}}) and (21, {{y}}).","target":"{{y}}階には、位置(17, {{y}})と(21, {{y}})に壁が必要です。"},{"key":"floorGlass","english":"Floor {{y}} should have glass at positions (18, {{y}}), (19, {{y}}), and (20, {{y}}).","target":"{{y}}階には、位置(18, {{y}})、(19, {{y}})、(20, {{y}})にガラスが必要です。"},{"key":"roof","english":"The roof at y={{roofY}} should be all walls.","target":"y={{roofY}}の屋根は、すべて壁でなければなりません。"},{"key":"codeQuality.allArgumentsAreVariables","english":"You should use <strong>variables</strong> as arguments to functions, not literal values. Store values in variables first, then pass the variables.","target":"関数の引数には、固定値ではなく<strong>変数</strong>を使用してください。まず値を変数に格納し、それから変数を渡してください。"}]},{"name":"tasks","rows":[{"key":"buildSkyscraper.name","english":"Build the skyscraper","target":"超高層ビルを建設する"},{"key":"buildSkyscraper.description","english":"Build a skyscraper with the correct number of floors, including a ground floor with entrance, upper floors with glass, and a wall roof.","target":"入り口のある地上階、ガラスのある上層階、壁の屋根で構成される、正しい階数の超高層ビルを建設します。"}]},{"name":"scenarios","rows":[{"key":"floors6.name","english":"6-floor skyscraper","target":"6階建ての超高層ビル"},{"key":"floors6.description","english":"Build a skyscraper with 6 floors.","target":"6階建ての超高層ビルを建設します。"},{"key":"floors8.name","english":"8-floor skyscraper","target":"8階建ての超高層ビル"},{"key":"floors8.description","english":"Build a skyscraper with 8 floors.","target":"8階建ての超高層ビルを建設します。"},{"key":"floors10.name","english":"10-floor skyscraper","target":"10階建ての超高層ビル"},{"key":"floors10.description","english":"Build a skyscraper with 10 floors.","target":"10階建ての超高層ビルを建設します。"},{"key":"floors12.name","english":"12-floor skyscraper","target":"12階建ての超高層ビル"},{"key":"floors12.description","english":"Build a skyscraper with 12 floors.","target":"12階建ての超高層ビルを建設します。"},{"key":"floors16.name","english":"16-floor skyscraper","target":"16階建ての超高層ビル"},{"key":"floors16.description","english":"Build a skyscraper with 16 floors.","target":"16階建ての超高層ビルを建設します。"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"I don't know where to start.","target":"どこから始めればよいかわかりません。"},{"key":"whereToStart.answer","english":"Firstly try drawing a wall, some glass, and an entrance to check you understand the functions. Then draw the base floor - this is always the same. Then use the `numFloors()` function to find out how many floors there are in total and draw the remaining floors and then the roof.","target":"まず、壁、ガラス、入り口を描いてみて、関数の使い方を理解しているか確認してください。次に、地上階を描きます。これはいつも同じです。それから`numFloors()`関数で合計の階数を調べ、残りの階と屋根を描いてください。"},{"key":"tooManyTooFewFloors.question","english":"I have too many/too few floors.","target":"階数が多すぎたり少なすぎたりします。"},{"key":"tooManyTooFewFloors.answer","english":"If `numFloors()` returns 5, that should be one entrance floor, 4 glass floors, and 1 roof. Check your logic is correct!","target":"`numFloors()`が5を返す場合、入り口階が1つ、ガラス階が4つ、屋根が1つになるはずです。ロジックが正しいか確認してください！"}]},{"name":"functions","rows":[{"key":"buildWall.description","english":"Places a **wall block** at grid position (x, y).","target":"グリッド位置(x, y)に**壁**を設置します。"},{"key":"buildWall.category","english":"Building","target":"建築"},{"key":"buildGlass.description","english":"Places a **glass panel** at grid position (x, y).","target":"グリッド位置(x, y)に**ガラス**を設置します。"},{"key":"buildGlass.category","english":"Building","target":"建築"},{"key":"buildEntrance.description","english":"Places an **entrance door** at grid position (x, y).","target":"グリッド位置(x, y)に**入り口**を設置します。"},{"key":"buildEntrance.category","english":"Building","target":"建築"},{"key":"numFloors.description","english":"Returns the **number of floors** for this building.","target":"この建物の**階数**を返します。"},{"key":"numFloors.category","english":"Info","target":"情報"}]},{"name":"describers","rows":[{"key":"buildWall","english":"built a wall at position (${arg1}, ${arg2})","target":"位置(${arg1}, ${arg2})に壁を建設しました"},{"key":"buildEntrance","english":"built an entrance at position (${arg1}, ${arg2})","target":"位置(${arg1}, ${arg2})に入り口を建設しました"},{"key":"buildGlass","english":"built a glass panel at position (${arg1}, ${arg2})","target":"位置(${arg1}, ${arg2})にガラスを建設しました"},{"key":"numFloors","english":"retrieved the number of floors","target":"階数を取得しました"}]}]},{"heading":"Shared \"cityscape\" messages","note":"Shared by every exercise in the cityscape category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xyMustBeNumbers","english":"x and y must be numbers","target":null},{"key":"xNotWhole","english":"You must use whole numbers for `x` and `y`. You provided `x` as `{{x}}`, which isn't allowed.","target":null},{"key":"yNotWhole","english":"You must use whole numbers for `x` and `y`. You provided `y` as `{{y}}`, which isn't allowed.","target":null},{"key":"outsideGrid","english":"Position ({{x}}, {{y}}) is outside the grid","target":null},{"key":"alreadyBuilt","english":"The builders are stuck. There's already a {{existing}} at the coordinates `({{x}}, {{y}})` so they can't build here!","target":null}]},{"name":"describers","rows":[{"key":"buildWall","english":"built a wall at position (${arg1}, ${arg2})","target":null},{"key":"buildEntrance","english":"built an entrance at position (${arg1}, ${arg2})","target":null},{"key":"buildGlass","english":"built a glass panel at position (${arg1}, ${arg2})","target":null},{"key":"numFloors","english":"retrieved the number of floors","target":null},{"key":"numBuildings","english":"retrieved the number of buildings","target":null}]}]}]
---

これは超高層ビルを建てる2つの演習のうちの最初のものです。

この演習では、シーンの中央に1棟の超高層ビルを建設します。各シナリオで超高層ビルの高さは変わります。

建てる階数を決めるために、`numFloors()`（階数）関数が用意されています。この関数は建物の総階数（＝高さ）を返します。

使えるパーツは壁（`W`）、ガラス（`G`）、入り口（`E`）の3種類です。これらを作るための関数は、下記の関数一覧を確認してください。

地面に最も近い階（国や地域によって「ground floor」や「first floor」と呼び方が異なります）には、必ず入り口が両側をガラスと壁で挟まれた形になります（`WGEGW`）。その他の階では、壁で挟まれた3つのガラスが並びます（`WGGGW`）。さらに、階の上には屋根が乗ります（`WWWWW`）。

したがって、5階建ての超高層ビルは、入り口階が1つ、ガラス階が4つ、そして屋根が1つで構成されます。次のようになります。

```
WWWWW
WGGGW
WGGGW
WGGGW
WGGGW
WGEGW
```

超高層ビルの中心は列`19`に配置します。地上階（コンクリートの床のすぐ上）は`2`から始まり、上に向かって伸びます（この例では、入り口階が`2`、屋根が`7`の位置になります）。

この演習の重要なルールとして、関数に渡す値はすべて変数または計算式でなければなりません。`20`のような数値を直接入力することはできません。

この演習を完了すると、建物の数や幅が異なる都市のスカイライン全体を構築するプロジェクトがアンロックされます。
