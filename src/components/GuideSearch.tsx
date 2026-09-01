"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { scoreSearchMatch } from "@/lib/search";

export type SearchIndexItem = {
  category: string;
  categoryName: string;
  slug: string;
  title: string;
  summary: string;
  haystack: string;
};

export function GuideSearch({
  items,
  initialQuery = "",
}: {
  items: SearchIndexItem[];
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    const q = query.normalize("NFC").trim();
    if (!q) return [] as SearchIndexItem[];
    return items
      .map((item) => ({
        item,
        score: scoreSearchMatch(item.haystack, q, {
          title: item.title,
          summary: item.summary,
        }),
      }))
      .filter((row) => row.score > 0)
      .sort(
        (a, b) =>
          b.score - a.score || a.item.title.localeCompare(b.item.title, "ko"),
      )
      .map((row) => row.item);
  }, [items, query]);

  return (
    <form action="/search" method="get">
      <label htmlFor="guide-search" className="sr-only">
        가이드 검색
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="guide-search"
          name="q"
          type="search"
          defaultValue={initialQuery}
          onInput={(event) => setQuery(event.currentTarget.value)}
          placeholder="예: 강제 퇴거, 전화번호, SNAP"
          className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)] outline-none ring-[var(--brand)] placeholder:text-[var(--muted)] focus:ring-2"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          enterKeyHint="search"
          lang="ko"
          spellCheck={false}
        />
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          검색
        </button>
      </div>
      <p className="mt-2 text-xs text-[var(--muted)]">
        {query.trim()
          ? `${results.length}개 결과`
          : "제목을 입력한 뒤 검색을 누르거나 Enter를 누르세요."}
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
    </form>
  );
}
