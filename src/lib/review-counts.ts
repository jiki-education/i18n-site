/**
 * Client-side painting of the "things left to review" pills. Shared so a page
 * that clones rows (the homepage Pinned block) can recompute a clone's count with
 * the same rule the ReviewCountBadge script uses, rather than duplicating it.
 *
 * Both operations are idempotent: painting a badge twice lands on the same
 * number, and a badge with nothing left is removed. That's what lets the pinned
 * clones and the component's own script run in any order without fighting.
 */
import { REVIEWED_STORAGE_KEY } from "./reviewed";

export function readReviewed(): Record<string, string> {
  try {
    const raw = localStorage.getItem(REVIEWED_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function applyReviewCount(badge: HTMLElement, reviewed: Record<string, string>) {
  let targets: [string, string][] = [];
  try {
    targets = JSON.parse(badge.dataset.reviewTargets ?? "[]");
  } catch {
    return;
  }

  const remaining = targets.filter(([id, version]) => reviewed[id] !== version).length;
  if (remaining === 0) {
    badge.remove();
    return;
  }
  badge.textContent = badge.dataset.reviewFormat === "phrase" ? `${remaining} to review` : String(remaining);
}
