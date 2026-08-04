---
type: "exercise"
slug: "cityscape-skyline"
title: "Skyline"
en_md5: "b63cd251caaaa1e0481e5d3260573a8d"
source_repo: "front-end"
source_path: "curriculum/src/exercises/cityscape-skyline"
captured_at: "2026-08-04"
---

In the Skyscraper exercise you created a single skyscraper of different heights. This time we're taking it further, creating a skyline of buildings of different heights and different widths.

You have a function <define>`numBuildings()`</define>, which tells you how many buildings you need to create for that scenario. You then have functions <define>`randomWidth()`</define> and <define>`randomNumFloors()`</define>. You should use these to determine the widths and number of floors of each building in that scenario. The first time you use the functions give you the values for the first building, etc.

The buildings start with a `1` column gap to the left, and they have a `1` column gap between them.

So if you had a scenario with `numBuildings()` returning `2`, and `randomWidth()` returning `5` then `7`, and `randomNumFloors()` returning `4` then `8`, you'd get this layout (where `xxxxx` is the concrete floor)

```
       WWWWWWW
       WGGGGGW
       WGGGGGW
       WGGGGGW
 WWWWW WGGGGGW
 WGGGW WGGGGGW
 WGGGW WGGGGGW
 WGGGW WGGGGGW
 WGEGW WGGEGGW
xxxxxxxxxxxxxxxxxxxxxxx
```
