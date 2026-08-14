"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "@/content/categories";
import { guides } from "@/content/guides";
import {
  loadFavorites,
  type FavoriteRef,
} from "@/lib/favorites";

export default function SavedPage() {
  const [favorites, setFavorites] = useState<FavoriteRef[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setFavorites(loadFavorites());
    setReady(true);

    function onStorage(event: StorageEvent) {
      if (event.key === "arriveus:favorites") {
        setFavorites(loadFavorites());
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const items = favorites
    .map((fav) => {
      const guide = guides.find(
        (item) => item.category === fav.category && item.slug === fav.slug,
      );
      const category = categories.find((item) => item.slug === fav.category);
      if (!guide || !category) return null;
      return { guide, category };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)]">
        즐겨찾기
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        이 기기 브라우저에 저장된 가이드입니다. 로그인 없이 이용할 수 있습니다.
      </p>

      {!ready ? (
        <div className="mt-8 h-32 animate-pulse rounded-xl bg-[var(--surface-muted)]" />
      ) : items.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-[var(--border)] px-5 py-10 text-center">
          <p className="text-sm text-[var(--muted)]">
            아직 저장한 가이드가 없습니다.
          </p>
          <Link
            href="/#categories"
            className="mt-4 inline-flex text-sm font-semibold text-[var(--brand)] hover:underline"
          >
            가이드 둘러보기
          </Link>
        </div>
      ) : (
        <ul className="mt-8 space-y-3">
          {items.map(({ guide, category }) => (
            <li key={`${guide.category}/${guide.slug}`}>
              <Link
                href={`/guides/${guide.category}/${guide.slug}`}
                className="block rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition hover:border-[var(--brand-border)]"
              >
                <p className="text-xs font-medium text-[var(--brand)]">
                  {category.name}
                </p>
                <h2 className="mt-1 text-lg font-semibold text-[var(--ink)]">
                  {guide.title}
                </h2>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {guide.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
