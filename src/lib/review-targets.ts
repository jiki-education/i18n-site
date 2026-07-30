/**
 * The list of things a reader can review for one language, each paired with the
 * `content_version` its "reviewed" mark is keyed on.
 *
 * This is the same set the language page hangs a ReviewBadge off — the glossary,
 * the video player, and every published translation — expressed as plain data so
 * a list page can serialise it into the DOM and let the browser subtract what has
 * already been reviewed. Keep it in step with `[lang]/index.astro`: if a kind of
 * item grows a review badge there, it belongs here too, or the counts drift.
 */
import { reviewItemId } from "./reviewed";
import { playerReviewVersion } from "./videojs";

export interface ReviewTarget {
  id: string;
  version: string;
}

interface GlossaryLike {
  content_version?: string;
  governance_sha: string;
}

interface TranslationLike {
  data: {
    type: string;
    slug: string;
    status: string;
    content_version?: string;
    en_md5?: string;
  };
}

export function languageReviewTargets(lang: string, glossary: GlossaryLike, translations: TranslationLike[]): ReviewTarget[] {
  const targets: ReviewTarget[] = [
    { id: reviewItemId(lang, "glossary"), version: glossary.content_version ?? glossary.governance_sha },
    { id: reviewItemId(lang, "video-player"), version: playerReviewVersion(lang) }
  ];

  for (const t of translations) {
    if (t.data.status !== "published") continue;
    targets.push({
      id: reviewItemId(lang, t.data.type, t.data.slug),
      version: t.data.content_version ?? t.data.en_md5 ?? "unknown"
    });
  }

  return targets;
}
