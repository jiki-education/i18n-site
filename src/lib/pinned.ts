/**
 * Client-side record of which languages a reader has pinned.
 *
 * Shape: an array of language codes, e.g. ["hu", "fr"]. Pinning a language on its
 * own page floats it to a "Pinned" block at the top of the homepage list, so a
 * reviewer working on one or two languages doesn't have to scroll past 28 every
 * time. Per-browser, no accounts, no backend — the same trade as the reviewed
 * marks in src/lib/reviewed.ts, and fine for a disposable site.
 */

export const PINNED_STORAGE_KEY = "jiki-i18n-pinned-v1";
