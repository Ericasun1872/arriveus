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
                className={`rounded-md px-2.5 py-2 text-sm transition-colors ${
                  active
                    ? "bg-[var(--brand-soft)] font-medium text-[var(--brand)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--ink)]"
                }`}
              >
                {category.name}
              </Link>
            );
          })}
          <Link
            href="/saved"
            className={`rounded-md px-2.5 py-2 text-sm transition-colors ${
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
