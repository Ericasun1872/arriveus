import type { Metadata } from "next";
import Link from "next/link";
import { GuideSearch } from "@/components/GuideSearch";
import { startPaths } from "@/content/start-paths";
import { getSearchIndex } from "@/lib/guides";

export const metadata: Metadata = {
  title: "가이드 검색",
  description:
    "도착 첫 주, 은행, DMV, 의료, 취업 등 ArriveUS 가이드를 키워드로 검색합니다.",
  alternates: { canonical: "/search" },
};

export default function SearchPage() {
  const items = getSearchIndex();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="mb-6 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--brand)]">
          홈
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--ink)]">검색</span>
      </nav>

      <header className="mb-8">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)]">
          가이드 검색
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          필요한 절차를 키워드로 찾거나, 아래 상황을 고르세요.
        </p>
      </header>

      <GuideSearch items={items} />

      <section className="mt-12">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
          상황별 시작
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {startPaths.map((path) => (
            <li key={path.slug}>
              <Link
                href={path.href}
                className="block rounded-xl border border-[var(--border)] px-4 py-4 transition hover:border-[var(--brand-border)]"
              >
                <span className="font-semibold text-[var(--ink)]">{path.title}</span>
                <span className="mt-1 block text-sm text-[var(--muted)]">
                  {path.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
