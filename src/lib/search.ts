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
  const hay = foldSearchText(haystack);
  const compact = foldSearchText(query);
  if (!compact) return 0;
  const tokens = query
    .normalize("NFC")
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map(foldSearchText)
    .filter(Boolean);
  const matchedTokens = tokens.filter((token) => hay.includes(token));
  const phraseHit = hay.includes(compact);
  if (!phraseHit && matchedTokens.length === 0) return 0;

  let score = phraseHit ? 10 : 0;
  score += matchedTokens.length;
  if (phraseHit || matchedTokens.length === tokens.length) {
    score += 5;
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
