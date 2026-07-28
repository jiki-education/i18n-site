import { marked } from "marked";

/**
 * Where the product serves its images from. Content bodies reference images as
 * absolute paths (/static/images/...), which resolve against jiki.io, not here.
 */
const ASSET_ORIGIN = "https://jiki.io";

/**
 * Split a Markdown body into top-level blocks, so an English body and its
 * translation can be laid out paragraph-against-paragraph.
 *
 * Blocks are separated by blank lines, except inside fenced code, where blank
 * lines are content. This relies on translations preserving the source's block
 * structure, which global/rules.md in the translator repo requires. Where the two
 * disagree, the counts differ and the page says so: that is a translation bug
 * worth surfacing, not something to paper over.
 */
export function splitBlocks(body: string): string[] {
  const lines = body.replace(/\r\n/g, "\n").split("\n");
  const blocks: string[] = [];
  let current: string[] = [];
  let fence: string | null = null;

  const flush = () => {
    const text = current.join("\n").trim();
    if (text) blocks.push(text);
    current = [];
  };

  for (const line of lines) {
    const fenceMatch = /^\s*(`{3,}|~{3,})/.exec(line);
    if (fenceMatch) {
      const marker = fenceMatch[1]!;
      if (fence === null) {
        fence = marker[0]!;
      } else if (marker[0] === fence) {
        fence = null;
        current.push(line);
        flush();
        continue;
      }
    }

    if (fence === null && line.trim() === "") {
      flush();
    } else {
      current.push(line);
    }
  }
  flush();

  return blocks;
}

/** Rewrite product-absolute asset paths onto the product origin. */
function absolutiseAssets(html: string): string {
  return html.replace(/(src|href)="\/static\//g, `$1="${ASSET_ORIGIN}/static/`);
}

/**
 * Render one Markdown block to HTML. Raw HTML is passed through: content bodies
 * contain <img> tags and Jiki's own <define> element, and stripping them would
 * misrepresent what is actually being reviewed.
 */
export function renderBlock(block: string): string {
  return absolutiseAssets(marked.parse(block, { async: false, gfm: true, breaks: false }));
}

export interface AlignedRow {
  english: string | null;
  target: string | null;
}

/** Zip two block lists positionally, padding the shorter side with nulls. */
export function alignBlocks(englishBody: string, targetBody: string): { rows: AlignedRow[]; mismatch: boolean } {
  const english = splitBlocks(englishBody);
  const target = splitBlocks(targetBody);
  const length = Math.max(english.length, target.length);

  const rows: AlignedRow[] = [];
  for (let i = 0; i < length; i++) {
    rows.push({
      english: english[i] ? renderBlock(english[i]!) : null,
      target: target[i] ? renderBlock(target[i]!) : null
    });
  }

  return { rows, mismatch: english.length !== target.length };
}
