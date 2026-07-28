/**
 * Emits vendor/videojs/locales.json: every locale Video.js v10 ships, and how
 * completely each one is translated against English.
 *
 * Run by bin/build-videojs from inside a checkout of videojs/v10, with tsx, so it
 * can read the locale packs straight from that repo's TypeScript source rather
 * than from a build artifact that may or may not still expose them.
 *
 * The site needs this because Video.js only knows a locale exists at runtime, when
 * it lazily imports it. We have to know at build time, so a page can say honestly
 * whether the player it is showing is actually in the reader's language.
 *
 * Usage: tsx emit-locales.ts <path-to-v10-checkout> <output-json>
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const [checkout, out] = process.argv.slice(2);
if (!checkout || !out) {
  console.error("usage: emit-locales.ts <v10-checkout> <output.json>");
  process.exit(1);
}

const i18nDir = `${checkout}/packages/core/src/core/i18n`;
const { LOCALES, localeAliases } = await import(pathToFileURL(`${i18nDir}/locales.ts`).href);
const { flattenTranslations } = await import(pathToFileURL(`${i18nDir}/utils/flatten.ts`).href);

async function keysFor(tag: string): Promise<Set<string>> {
  const mod = await import(pathToFileURL(`${i18nDir}/locales/${tag}.ts`).href);
  return new Set(Object.keys(flattenTranslations(mod.default)));
}

// Aliases are bare language tags Video.js synthesises when it ships more than one
// region of a language (pt from pt-BR/pt-PT, zh from zh-CN/zh-TW). They are real
// loadable packs, so a reader whose locale resolves to one is genuinely covered.
const tags: string[] = ["en", ...LOCALES, ...localeAliases(LOCALES)].sort();
const enKeys = [...(await keysFor("en"))].sort();
const locales: Record<string, { keys: number; missing: string[] }> = {};

for (const tag of tags) {
  const keys = await keysFor(tag);
  const missing = enKeys.filter((key) => !keys.has(key));
  locales[tag] = { keys: enKeys.length - missing.length, missing };
}

mkdirSync(out.replace(/\/[^/]+$/, ""), { recursive: true });
writeFileSync(out, `${JSON.stringify({ totalKeys: enKeys.length, locales }, null, 2)}\n`);
console.log(`Wrote ${out}: ${tags.length} locales, ${enKeys.length} strings each`);
