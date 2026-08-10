---
lang: "es-419"
type: "concept"
slug: "break"
title: "La palabra clave `break`"
status: "published"
source_repo: "i18n"
source_path: "locales/es-419/curriculum/concepts/break/page.md"
en_md5: "30148766de67ae467ab1a4852ad35895"
governance_sha: "3d354c0"
content_version: "f12b2310df1b"
published_at: "2026-08-10"
---

La palabra clave `break` se puede usar en cualquier parte del cuerpo de cualquier bucle.

La parte entre las llaves, ese es el cuerpo. Y cuando Jiki lo ve, sale del bucle de inmediato y pasa al código que esté después del bucle.

Así que si tenemos una restricción que dice que ejecutemos este bucle 50 veces, pero queremos detenerlo si el usuario dispara cinco veces, podríamos tener un bucle `for` al inicio que cuente hasta 50.

Pero luego podríamos tener una condición en medio del bucle que revise si el usuario ya disparó cinco veces, y si lo hizo, salimos del bucle (_break_ en inglés) para detenerlo.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // salir del bucle
  }
}
```
