---
lang: "hr"
type: "concept"
slug: "logical-or"
title: "Operator `||` (ili)"
status: "published"
source_repo: "i18n"
source_path: "locales/hr/curriculum/concepts/logical-or/page.md"
en_md5: "e7bc3f103a37719cdf3a77920d09e24e"
governance_sha: "a5ccff6a"
content_version: "6450bcb59e51"
published_at: "2026-11-28"
---

Možemo upotrijebiti i `or`, ali, nažalost, u JavaScriptu ni za to nema zgodne ključne riječi. Umjesto toga moramo upotrijebiti dvije okomite crte (_bars_ na engleskom), jednu uz drugu, koje zajedno znače ili. Izgleda čudno, ali zapravo nije. Na to ćeš se brzo naviknuti.

Pa možemo reći: ako netko ima više od 20 godina ili je u disko odjeći, može ući. Tako ćemo imati veselu zabavu s djecom u disko odjeći i loše odjevenim odraslima, što zvuči razumno.

```javascript
if (age > 20 || outfit === "disco") {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-or/party-door.webp"
  alt="Jiki kroz vrata na zabavu prima društvo u kojem su djeca u disko odjeći i ležerno odjeveni odrasli"
  width="327"
  height="400"
/>

Postoji jedna stvar koja ljude spotiče i kod and i kod or: svaka strana mora biti cjelovita usporedba. Čak i ako na obje strane uspoređuješ istu varijablu, moraš je ponoviti. Ne možeš napisati `if age is less than 13 or greater than 20`. Moraš napisati `if age is less than 13 or age is greater than 20`. Obje strane moraju biti cjelovite usporedbe.

```javascript
if (age < 13 || age > 20)
```

Razmisli o tome kada su važna oba uvjeta, a kada samo jedan od njih mora biti točan.
