import Link from "next/link";
import type { Category } from "@/content/types";
import { CategoryIcon } from "./icons";

export function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category, index) => (
        <li
          key={category.slug}
          className="animate-rise"
          style={{ animationDelay: `${120 + index * 60}ms` }}
        >
          <Link
            href={`/guides/${category.slug}`}
            className="group flex h-full items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-border)] hover:shadow-[0_12px_30px_-18px_rgba(17,52,104,0.45)]"
          >
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white"
              style={{ backgroundColor: category.accent }}
            >
              <CategoryIcon icon={category.icon} />
            </span>
            <span className="min-w-0">
              <span className="flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
                  {category.name}
                </span>
                <span className="text-xs text-[var(--muted)]">
                  {category.nameEn}
                </span>
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-[var(--muted)]">
                {category.description}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
