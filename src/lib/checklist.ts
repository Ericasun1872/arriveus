const PREFIX = "arriveus:checklist:";

export function checklistKey(category: string, slug: string) {
  return `${PREFIX}${category}/${slug}`;
}

export function loadChecklist(category: string, slug: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(checklistKey(category, slug));
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

export function saveChecklist(
  category: string,
  slug: string,
  checked: string[],
) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(
    checklistKey(category, slug),
    JSON.stringify(checked),
  );
}
