/**
 * Which of our languages Video.js v10 can actually render its player in.
 *
 * v10 resolves a locale from the nearest `lang` attribute and lazily imports a
 * matching locale pack at runtime, walking a BCP 47 fallback chain and landing on
 * English when nothing matches. That is good behaviour, and we do not fight it: the
 * page sets `lang` and lets the player do the rest.
 *
 * What the player cannot do is tell us, at build time, whether it will find
 * anything. It only discovers that in the browser, by which point a reader is
 * already looking at an English player on a page headed with their language. So we
 * resolve the same chain here, against the locale list bin/build-videojs extracts
 * from the checkout, and let the page say plainly which case it is in.
 *
 * These strings are Video.js's, not ours. They are not glossary-governed, and a
 * correction goes upstream to the Video.js team rather than into a Jiki file. The
 * v10 locale packs are new and largely unreviewed by native speakers, which is
 * exactly why they are worth putting in front of the Translatathon.
 */
import localeData from "../../vendor/videojs/locales.json";
import source from "../../vendor/videojs/SOURCE.json";

/** Video.js's locale tags, lower-cased, mapped to their original casing. */
const AVAILABLE = new Map<string, string>(Object.keys(localeData.locales).map((tag) => [tag.toLowerCase(), tag]));

/**
 * The lookup chain Video.js walks for a locale, most specific first.
 *
 * Mirrors `findLocaleKeys` in @videojs/core: truncate subtags one at a time, then
 * fall back to English. Kept deliberately small and readable rather than imported,
 * because the v10 packages are not published and we only need the part of the
 * behaviour our own locale codes exercise.
 */
function localeChain(lang: string): string[] {
  const segments = lang.toLowerCase().split("-").filter(Boolean);
  const chain: string[] = [];

  for (let length = segments.length; length >= 1; length--) {
    chain.push(segments.slice(0, length).join("-"));
  }

  if (!chain.includes("en")) {
    chain.push("en");
  }
  return chain;
}

export interface PlayerLocale {
  /** The Video.js locale pack this page will actually load. */
  tag: string;
  /** False when nothing in the chain matched and the player falls back to English. */
  translated: boolean;
  /** True when we matched a broader tag than we asked for, e.g. es-419 served by es. */
  broadened: boolean;
  /** How many of Video.js's strings this pack translates. */
  translatedCount: number;
  /** How many strings a fully translated player would have. */
  totalCount: number;
}

/** What the Video.js player will do when a page for `lang` sets that lang on it. */
export function playerLocale(lang: string): PlayerLocale {
  const chain = localeChain(lang);
  const hit = chain.find((tag) => AVAILABLE.has(tag));
  const tag = hit ? (AVAILABLE.get(hit) as string) : "en";
  const entry = localeData.locales[tag as keyof typeof localeData.locales];

  return {
    tag,
    translated: tag !== "en",
    broadened: Boolean(hit) && hit !== chain[0],
    translatedCount: entry?.keys ?? 0,
    totalCount: localeData.totalKeys
  };
}

/** Every locale Video.js v10 ships, for the "what's covered" summary. */
export function availableLocales(): string[] {
  return Object.keys(localeData.locales);
}

/**
 * The version a reader's "reviewed" mark is keyed on for the player.
 *
 * Built from the pinned v10 commit and the locale this page resolves to, so
 * rebuilding against a newer v10 sends every player page back to unreviewed.
 * That is the behaviour we want: v10 is beta and its locale packs are new, so a
 * bump can change the very strings someone signed off. The locale tag is in there
 * too, so a page that starts resolving to a different pack also resets.
 */
export function playerReviewVersion(lang: string): string {
  return `videojs-${source.commit.slice(0, 12)}-${playerLocale(lang).tag}`;
}
