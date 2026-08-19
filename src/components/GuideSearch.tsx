"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";

export type SearchIndexItem = {
  category: string;
  categoryName: string;
  slug: string;
  title: string;
  summary: string;
  haystack: string;
};

export function GuideSearch({ items }: { items: SearchIndexItem[] }) {
  const [query, setQuery] = useState("");
  const deferred = useDeferredValue(query);

  const results = useMemo(() => {
    const q = deferred.trim().toLowerCase();
    if (!q) return [] as SearchIndexItem[];
    const tokens = q.split(/\s+/).filter(Boolean);
    return items
      .map((item) => {
        const score = tokens.reduce(
          (sum, token) => sum + (item.haystack.includes(token) ? 1 : 0),
          0,
        );
        return { item, score };
      })
      .filter((row) => row.score === tokens.length)
      .sort(
        (a, b) =>
          b.score - a.score || a.item.title.localeCompare(b.item.title, "ko"),
      )
      .map((row) => row.item);
  }, [deferred, items]);

  return (
    <div>
      <label htmlFor="guide-search" className="sr-only">
        가이드 검색
      </label>
      <input
        id="guide-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="예: 전화번호, SNAP, 면허, 임대 사기"
        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)] outline-none ring-[var(--brand)] placeholder:text-[var(--muted)] focus:ring-2"
        autoComplete="off"
      />
      <p className="mt-2 text-xs text-[var(--muted)]">
        {query.trim()
          ? `${results.length}개 결과`
          : "제목·요약·카테고리 키워드로 검색합니다."}
      </p>
      {query.trim() ? (
        <ul className="mt-6 grid gap-3">
          {results.map((item) => (
            <li key={`${item.category}/${item.slug}`}>
              <Link
                href={`/guides/${item.category}/${item.slug}`}
                className="block border-b border-[var(--border)] pb-4 transition hover:border-[var(--brand-border)]"
              >
                <span className="text-xs font-medium text-[var(--brand)]">
                  {item.categoryName}
                </span>
                <span className="mt-1 block font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
                  {item.title}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-[var(--muted)]">
                  {item.summary}
                </span>
              </Link>
            </li>
          ))}
          {results.length === 0 ? (
            <li className="text-sm text-[var(--muted)]">
              맞는 가이드가 없습니다. 카테고리에서 주제를 고르거나 다른 단어를
              시도해 보세요.
            </li>
          ) : null}
        </ul>
      ) : null}
    </div>
  );
}
