/** Collapse Korean/English queries so IME NFD, spaces, and middle-dots still match. */
export function foldSearchText(text: string): string {
  return text
    .normalize("NFC")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "");
}

export function queryMatchesHaystack(haystack: string, query: string): boolean {
  const hay = foldSearchText(haystack);
  const trimmed = query.normalize("NFC").trim();
  if (!trimmed) return false;

  const compact = foldSearchText(trimmed);
  if (compact && hay.includes(compact)) return true;

  const tokens = trimmed
    .toLowerCase()
    .split(/\s+/)
    .map(foldSearchText)
    .filter(Boolean);
  return tokens.length > 0 && tokens.every((token) => hay.includes(token));
}

export function scoreSearchMatch(
  haystack: string,
  query: string,
  fields?: { title?: string; summary?: string },
): number {
  if (!queryMatchesHaystack(haystack, query)) return 0;
  const hay = foldSearchText(haystack);
  const compact = foldSearchText(query);
  const tokens = query
    .normalize("NFC")
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map(foldSearchText)
    .filter(Boolean);
  let score = compact && hay.includes(compact) ? 10 : 0;
  for (const token of tokens) {
    if (hay.includes(token)) score += 1;
  }
  if (fields?.title && compact && foldSearchText(fields.title).includes(compact)) {
    score += 100;
  }
  if (
    fields?.summary &&
    compact &&
    foldSearchText(fields.summary).includes(compact)
  ) {
    score += 20;
  }
  return score;
}
