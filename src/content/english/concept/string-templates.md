---
type: "concept"
slug: "string-templates"
title: "String Templates"
en_md5: "7fd0e09ac3b32db5f159f8e772872104"
source_repo: "front-end"
source_path: "curriculum/src/concepts/string-templates/source.md"
captured_at: "2026-08-03"
---

We can use something called <define>template literals</define> to insert strings into other strings.

So rather than adding strings together, we can have a string or template that has spaces for other strings inside of it.

To do this, we use <define>backticks</define> instead of quotes.

Backticks are backward ticks, as the name suggests, but you might well have never used them before, so you need to find the right key on your keyboard.

We use them to create a template that can contain other strings. And then to insert a string into the template, we use another weird syntax of dollars and braces. So for example, to achieve the same `"hello " + name` thing we just saw with concatenation, we could write:

```javascript
`hello ${name}` // "hello Jeremy" or "hello Jiki"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/string-templates/jiki-name-box.webp"
  alt="Jiki holding a box labelled name, the value that gets slotted into the template"
  width="207"
  height="400"
/>

And that's doing exactly the same thing as adding the strings together.

But when you have multiple strings that need all piecing into one place, this can be a lot more efficient.

It will take you a little bit of time to get used to this exact syntax, but there's nothing really that complex about it.
