/**
 * Client-side record of what a reader has reviewed.
 *
 * Shape: { "hu/glossary": "a1b2c3d4e5f6", ... } — item id mapped to the
 * `content_version` that was reviewed, not a bare boolean. Storing the version
 * is the whole point: when a glossary or translation is republished with real
 * changes, its hash moves and the item goes back to unreviewed by itself. That
 * matches the question people actually have during the Translatathon, which is
 * "is this new since I looked", not "have I ever opened this".
 *
 * Per-browser, not per-person: a phone and a laptop track separately. That is
 * the trade for having no accounts and no backend, and it is fine for a
 * disposable site.
 */

export const REVIEWED_STORAGE_KEY = "jiki-i18n-reviewed-v1";

/** The id for a thing that can be reviewed. Keep in sync with the page routes. */
export function reviewItemId(lang: string, type: string, slug?: string): string {
  return slug ? `${lang}/${type}/${slug}` : `${lang}/${type}`;
}
