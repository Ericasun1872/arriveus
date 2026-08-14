"use client";

import { useEffect, useState } from "react";
import {
  isFavorite,
  loadFavorites,
  saveFavorites,
  toggleFavorite,
} from "@/lib/favorites";

export function FavoriteButton({
  category,
  slug,
}: {
  category: string;
  slug: string;
}) {
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setActive(isFavorite(loadFavorites(), category, slug));
    setReady(true);
  }, [category, slug]);

  function onToggle() {
    const next = toggleFavorite(loadFavorites(), category, slug);
    saveFavorites(next);
    setActive(isFavorite(next, category, slug));
  }

  if (!ready) return null;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
        active
          ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
          : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--brand-border)] hover:text-[var(--brand)]"
      }`}
    >
      <span aria-hidden>{active ? "★" : "☆"}</span>
      {active ? "저장됨" : "즐겨찾기"}
    </button>
  );
}
