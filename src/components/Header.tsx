"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { categories } from "@/content/categories";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_92%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--brand)] transition-opacity hover:opacity-80"
        >
          ArriveUS
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="카테고리">
          {categories.map((category) => {
            const href = `/guides/${category.slug}`;
            const active = pathname.startsWith(href);
            return (
              <Link
                key={category.slug}
                href={href}
                className={`rounded-md px-2 py-2 text-[13px] transition-colors ${
                  active
                    ? "bg-[var(--brand-soft)] font-medium text-[var(--brand)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--ink)]"
                }`}
              >
                {category.name}
              </Link>
            );
          })}
          <form action="/search" method="get" className="ml-1 flex items-center">
            <label htmlFor="header-guide-search" className="sr-only">
              가이드 검색
            </label>
            <input
              id="header-guide-search"
              name="q"
              type="search"
              placeholder="강제 퇴거"
              className="w-36 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 text-[13px] text-[var(--ink)] outline-none ring-[var(--brand)] placeholder:text-[var(--muted)] focus:ring-2 xl:w-44"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              enterKeyHint="search"
              lang="ko"
              spellCheck={false}
            />
          </form>
          <Link
            href="/saved"
            className={`rounded-md px-2 py-2 text-[13px] transition-colors ${
              pathname === "/saved"
                ? "bg-[var(--brand-soft)] font-medium text-[var(--brand)]"
                : "text-[var(--muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--ink)]"
            }`}
          >
            즐겨찾기
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] text-[var(--ink)] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">메뉴</span>
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--border)] px-4 py-3 lg:hidden"
          aria-label="모바일 메뉴"
        >
          <form
            action="/search"
            method="get"
            className="mb-3"
            onSubmit={() => setOpen(false)}
          >
            <label htmlFor="mobile-guide-search" className="sr-only">
              가이드 검색
            </label>
            <div className="flex gap-2">
              <input
                id="mobile-guide-search"
                name="q"
                type="search"
                placeholder="강제 퇴거, SNAP…"
                className="min-w-0 flex-1 rounded-lg border border-[var(--border)] bg-white px-3 py-2.5 text-sm text-[var(--ink)] outline-none ring-[var(--brand)] placeholder:text-[var(--muted)] focus:ring-2"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                enterKeyHint="search"
                lang="ko"
                spellCheck={false}
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-[var(--brand)] px-3 py-2.5 text-sm font-semibold text-white"
              >
                검색
              </button>
            </div>
          </form>
          <ul className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/guides/${category.slug}`}
                  className="block rounded-md bg-[var(--surface-muted)] px-3 py-2.5 text-sm font-medium text-[var(--ink)]"
                  onClick={() => setOpen(false)}
                >
                  {category.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/search"
                className="block rounded-md bg-[var(--surface-muted)] px-3 py-2.5 text-sm font-medium text-[var(--ink)]"
                onClick={() => setOpen(false)}
              >
                검색
              </Link>
            </li>
            <li>
              <Link
                href="/saved"
                className="block rounded-md bg-[var(--surface-muted)] px-3 py-2.5 text-sm font-medium text-[var(--ink)]"
                onClick={() => setOpen(false)}
              >
                즐겨찾기
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
