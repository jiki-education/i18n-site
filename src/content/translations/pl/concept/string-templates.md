---
lang: "pl"
type: "concept"
slug: "string-templates"
title: "Literały szablonowe"
status: "published"
source_repo: "i18n"
source_path: "locales/pl/curriculum/concepts/string-templates/page.md"
en_md5: "7fd0e09ac3b32db5f159f8e772872104"
governance_sha: "a5ccff6a"
content_version: "a78975983c2f"
published_at: "2026-11-28"
---

Możemy użyć czegoś, co nazywa się literałami szablonowymi (ang. _template literals_), żeby wstawiać stringi do innych stringów.

Zamiast łączyć stringi ze sobą, możemy użyć stringa lub szablonu, który ma w środku miejsca na inne stringi.

Żeby to zrobić, używamy backticków zamiast cudzysłowów.

Jak sama nazwa wskazuje, backticki to odwrócone apostrofy, ale całkiem możliwe, że to dla Ciebie nowość, więc znajdź odpowiedni klawisz na klawiaturze.

Za ich pomocą tworzymy szablon, który może zawierać inne stringi. A żeby wstawić string do szablonu, używamy kolejnej dziwnej składni: dolara i nawiasów klamrowych. Na przykład, żeby uzyskać ten sam efekt, co przy `"hello " + name`, który przed chwilą zobaczyliśmy przy konkatenacji, możemy napisać:

```javascript
`hello ${name}` // "hello Jeremy" lub "hello Jiki"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/string-templates/jiki-name-box.webp"
  alt="Jiki trzyma pudełko z etykietą name, wartość, która trafia do szablonu"
  width="207"
  height="400"
/>

To robi dokładnie to samo, co dodawanie stringów do siebie.

Ale kiedy stringów jest wiele i wszystkie muszą trafić w jedno miejsce, takie rozwiązanie bywa znacznie bardziej efektywne.

Trochę czasu zajmie Ci przyzwyczajenie się do tej konkretnej składni, ale nie ma w niej nic naprawdę skomplikowanego.
