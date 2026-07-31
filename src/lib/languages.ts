/**
 * Language metadata for the site chrome.
 *
 * This is presentation data only: how to label a language and which direction to
 * lay it out in. The authoritative list of languages, and everything about how they
 * are translated, lives in the translator repo. Adding a language here does not make
 * it appear on the site; publishing its glossary does.
 *
 * `comingSoon` is UI chrome, not translated content. It has not been through a
 * translation pass and is not glossary-governed. Corrections are welcome on each
 * language's forum category.
 */

export interface LanguageMeta {
  /** English name, matching languages/names.json in the translator repo. */
  name: string;
  /** Endonym, shown as the primary label. */
  nativeName: string;
  /** Writing direction for content in this language. */
  dir: "ltr" | "rtl";
  /** "Coming soon", in this language. Chrome only, unreviewed. */
  comingSoon: string;
  /** Family folder in the translator repo, when this locale belongs to one. */
  family?: string;
}

export const LANGUAGES: Record<string, LanguageMeta> = {
  ar: { name: "Arabic", nativeName: "العربية", dir: "rtl", comingSoon: "قريبًا" },
  bn: { name: "Bengali", nativeName: "বাংলা", dir: "ltr", comingSoon: "শীঘ্রই আসছে" },
  ca: { name: "Catalan", nativeName: "Català", dir: "ltr", comingSoon: "Properament" },
  de: { name: "German", nativeName: "Deutsch", dir: "ltr", comingSoon: "Demnächst" },
  el: { name: "Greek", nativeName: "Ελληνικά", dir: "ltr", comingSoon: "Προσεχώς" },
  "es-419": {
    name: "Latin American Spanish",
    nativeName: "Español (Latinoamérica)",
    dir: "ltr",
    comingSoon: "Próximamente",
    family: "es"
  },
  "es-ES": {
    name: "European Spanish",
    nativeName: "Español (España)",
    dir: "ltr",
    comingSoon: "Próximamente",
    family: "es"
  },
  fa: { name: "Persian", nativeName: "فارسی", dir: "rtl", comingSoon: "به‌زودی" },
  fi: { name: "Finnish", nativeName: "Suomi", dir: "ltr", comingSoon: "Tulossa pian" },
  fr: { name: "French", nativeName: "Français", dir: "ltr", comingSoon: "Bientôt disponible" },
  hi: { name: "Hindi", nativeName: "हिन्दी", dir: "ltr", comingSoon: "जल्द आ रहा है" },
  hu: { name: "Hungarian", nativeName: "Magyar", dir: "ltr", comingSoon: "Hamarosan" },
  id: { name: "Indonesian", nativeName: "Bahasa Indonesia", dir: "ltr", comingSoon: "Segera hadir" },
  it: { name: "Italian", nativeName: "Italiano", dir: "ltr", comingSoon: "Prossimamente" },
  ja: { name: "Japanese", nativeName: "日本語", dir: "ltr", comingSoon: "近日公開" },
  ko: { name: "Korean", nativeName: "한국어", dir: "ltr", comingSoon: "곧 공개됩니다" },
  nl: { name: "Dutch", nativeName: "Nederlands", dir: "ltr", comingSoon: "Binnenkort beschikbaar" },
  pl: { name: "Polish", nativeName: "Polski", dir: "ltr", comingSoon: "Wkrótce" },
  "pt-BR": {
    name: "Brazilian Portuguese",
    nativeName: "Português (Brasil)",
    dir: "ltr",
    comingSoon: "Em breve",
    family: "pt"
  },
  "pt-pt": {
    name: "European Portuguese",
    nativeName: "Português (Portugal)",
    dir: "ltr",
    comingSoon: "Em breve",
    family: "pt"
  },
  ro: { name: "Romanian", nativeName: "Română", dir: "ltr", comingSoon: "În curând" },
  ru: { name: "Russian", nativeName: "Русский", dir: "ltr", comingSoon: "Скоро" },
  sr: { name: "Serbian", nativeName: "Srpski", dir: "ltr", comingSoon: "Uskoro" },
  sv: { name: "Swedish", nativeName: "Svenska", dir: "ltr", comingSoon: "Kommer snart" },
  sw: { name: "Swahili", nativeName: "Kiswahili", dir: "ltr", comingSoon: "Inakuja hivi karibuni" },
  tr: { name: "Turkish", nativeName: "Türkçe", dir: "ltr", comingSoon: "Yakında" },
  uk: { name: "Ukrainian", nativeName: "Українська", dir: "ltr", comingSoon: "Незабаром" },
  ur: { name: "Urdu", nativeName: "اردو", dir: "rtl", comingSoon: "جلد آ رہا ہے" },
  vi: { name: "Vietnamese", nativeName: "Tiếng Việt", dir: "ltr", comingSoon: "Sắp ra mắt" },
  "zh-CN": { name: "Simplified Chinese", nativeName: "简体中文", dir: "ltr", comingSoon: "敬请期待", family: "zh" },
  "zh-TW": { name: "Traditional Chinese", nativeName: "繁體中文", dir: "ltr", comingSoon: "敬請期待", family: "zh" }
};

/** Falls back to a bare record so an unknown locale renders rather than crashing the build. */
export function languageMeta(lang: string): LanguageMeta {
  return LANGUAGES[lang] ?? { name: lang, nativeName: lang, dir: "ltr", comingSoon: "Coming soon" };
}

/**
 * Review stage for a language: how far it has progressed through the pass.
 *
 * The stage is decided in the translator repo (each language's tracking.json) and
 * stamped into the published glossary's frontmatter, so this is display metadata
 * only. `number` is the human "Stage N"; `label` is the badge text; `blurb`
 * explains it in a legend/tooltip.
 *
 * - setup:     glossary and one article being checked, to confirm we're in a sensible place.
 * - refining:  translating one item at a time and iterating until it's in good shape.
 * - reviewing: everything translated and published for people to review.
 */
export type Stage = "setup" | "refining" | "reviewing";

export interface StageMeta {
  number: number;
  label: string;
  blurb: string;
}

export const STAGES: Record<Stage, StageMeta> = {
  setup: {
    number: 1,
    label: "Setup",
    blurb: "Checking the glossary and a first article to confirm we're in a sensible place."
  },
  refining: {
    number: 2,
    label: "Refining",
    blurb: "Translating one item at a time and iterating until it reads well."
  },
  reviewing: {
    number: 3,
    label: "Reviewing",
    blurb: "Everything is translated and published for native speakers to review."
  }
};

/** Falls back to `setup` for a missing or unknown stage value. */
export function stageMeta(stage: string | undefined | null): StageMeta {
  return STAGES[(stage as Stage) ?? "setup"] ?? STAGES.setup;
}

/** The Discourse category slug for a language, e.g. es-419 -> i18n-es-419. */
export function forumCategorySlug(lang: string): string {
  return `i18n-${lang.toLowerCase().replace(/_/g, "-")}`;
}

/** The Discourse category for a language, e.g. es-419 -> i18n-es-419. */
export function forumCategoryUrl(lang: string): string {
  return `https://forum.jiki.io/c/${forumCategorySlug(lang)}`;
}

export const CONTENT_TYPE_LABELS: Record<string, string> = {
  concept: "Concepts",
  article: "Articles",
  "blog-post": "Blog posts",
  exercise: "Exercises",
  "video-subtitles": "Video subtitles",
  "website-copy": "Website copy",
  interpreters: "Interpreter messages"
};

export function contentTypeLabel(type: string): string {
  return CONTENT_TYPE_LABELS[type] ?? type;
}

/** Singular form, for talking about one item: "Review this concept". */
const CONTENT_TYPE_SINGULARS: Record<string, string> = {
  concept: "concept",
  article: "article",
  "blog-post": "blog post",
  exercise: "exercise",
  "video-subtitles": "video's subtitles",
  "website-copy": "website copy",
  interpreters: "interpreter messages"
};

export function contentTypeSingular(type: string): string {
  return CONTENT_TYPE_SINGULARS[type] ?? type;
}

/**
 * How a content type is named in a forum thread title, e.g.
 * "[Polish Review] Concept page: Using Functions".
 *
 * The convention is recorded once in "Naming a review thread" in the translator
 * repo's global/workflow.md; this mirrors it so the threads people open from the
 * site sort alongside the ones we open ourselves.
 */
const CONTENT_TYPE_THREAD_LABELS: Record<string, string> = {
  concept: "Concept page",
  article: "Article",
  "blog-post": "Blog post",
  exercise: "Exercise",
  "video-subtitles": "Video subtitles",
  "website-copy": "Website copy",
  interpreters: "Interpreter messages"
};

export function contentTypeThreadLabel(type: string): string {
  return CONTENT_TYPE_THREAD_LABELS[type] ?? contentTypeLabel(type);
}

/**
 * A Discourse "new topic" composer URL, prefilled with the title and body for
 * reviewing one item in one language, and aimed at that language's category.
 *
 * The thread is opened by the reviewer at the moment they have something to say,
 * rather than pre-created empty for every item in every language. That means
 * several threads can exist for the same page, which is fine: an empty thread per
 * item across 30 languages was thousands of topics nobody ever posted in.
 *
 * The page URL sits alone on its own line, which is what makes Discourse render
 * it as a card rather than a bare link.
 */
export function forumNewTopicUrl(opts: {
  lang: string;
  type: string;
  slug: string;
  /** The English title, so the thread names the item the way the site does. */
  englishTitle: string;
}): string {
  const { lang, type, slug, englishTitle } = opts;
  const languageName = languageMeta(lang).name;
  const pageUrl = `https://i18n.jiki.io/${lang}/${type}/${slug}/`;
  const glossaryUrl = `https://i18n.jiki.io/${lang}/glossary/`;

  // The title stays in English even though the page it points at is not: the
  // prefix already says which language, and an English title keeps the same item
  // findable across every category.
  const title = `[${languageName} Review] ${contentTypeThreadLabel(type)}: ${englishTitle}`;

  const body = [
    `This is a thread for reviewing the ${languageName} translation of the ${contentTypeSingular(type)} "${englishTitle}".`,
    "",
    "You can read it here, with the English alongside it:",
    "",
    pageUrl,
    "",
    'Tell us anything that sounds wrong, however small, and tell us even if you cannot explain why: "no one would say that" is useful feedback on its own. Quote the sentence you mean so we know exactly which bit you are talking about.',
    "",
    `One exception. If a **single term** is wrong (a word we use the same way everywhere, like the word for a function or a variable), it belongs on the glossary thread rather than here, because agreeing it [in the glossary](${glossaryUrl}) fixes it across every page at once.`,
    "",
    "**Please do NOT use LLMs to generate suggestions and only use your own personal knowledge**.",
    "",
    "---",
    "",
    "WRITE YOUR COMMENT HERE"
  ].join("\n");

  const params = [
    `title=${encodeURIComponent(title)}`,
    `body=${encodeURIComponent(body)}`,
    `category=${encodeURIComponent(forumCategorySlug(lang))}`
  ].join("&");

  return `https://forum.jiki.io/new-topic?${params}`;
}

/**
 * The flag shown for each language, mirroring the emoji on its Discourse
 * category so the site and the forum agree.
 *
 * These are read off the live forum (`/site.json`, `categories[].emoji`), not
 * chosen here: several are not the obvious guess. Arabic and Latin American
 * Spanish use globes rather than any one country's flag, Urdu uses Pakistan,
 * Swahili uses Tanzania, Catalan uses Andorra (Catalonia has no Unicode flag),
 * and Turkish uses Türkiye. If a category's emoji changes on the forum, change
 * it here too.
 */
const FLAGS: Record<string, string> = {
  ar: "🌍",
  bn: "🇧🇩",
  ca: "🇦🇩",
  de: "🇩🇪",
  el: "🇬🇷",
  "es-419": "🌎",
  "es-ES": "🇪🇸",
  fa: "🇮🇷",
  fi: "🇫🇮",
  fr: "🇫🇷",
  hi: "🇮🇳",
  hu: "🇭🇺",
  id: "🇮🇩",
  it: "🇮🇹",
  ja: "🇯🇵",
  ko: "🇰🇷",
  nl: "🇳🇱",
  pl: "🇵🇱",
  "pt-BR": "🇧🇷",
  "pt-pt": "🇵🇹",
  ro: "🇷🇴",
  ru: "🇷🇺",
  sr: "🇷🇸",
  sv: "🇸🇪",
  sw: "🇹🇿",
  tr: "🇹🇷",
  uk: "🇺🇦",
  ur: "🇵🇰",
  vi: "🇻🇳",
  "zh-CN": "🇨🇳",
  "zh-TW": "🇹🇼"
};

export function languageFlag(lang: string): string {
  return FLAGS[lang] ?? "🌐";
}
