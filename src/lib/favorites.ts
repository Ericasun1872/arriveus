const KEY = "arriveus:favorites";

export type FavoriteRef = {
  category: string;
  slug: string;
};

export function loadFavorites(): FavoriteRef[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is FavoriteRef =>
        !!item &&
        typeof item === "object" &&
        typeof (item as FavoriteRef).category === "string" &&
        typeof (item as FavoriteRef).slug === "string",
    );
  } catch {
    return [];
  }
}

export function saveFavorites(favorites: FavoriteRef[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(favorites));
}

export function isFavorite(
  favorites: FavoriteRef[],
  category: string,
  slug: string,
) {
  return favorites.some(
    (item) => item.category === category && item.slug === slug,
  );
}

export function toggleFavorite(
  favorites: FavoriteRef[],
  category: string,
  slug: string,
): FavoriteRef[] {
  if (isFavorite(favorites, category, slug)) {
    return favorites.filter(
      (item) => !(item.category === category && item.slug === slug),
    );
  }
  return [...favorites, { category, slug }];
}
