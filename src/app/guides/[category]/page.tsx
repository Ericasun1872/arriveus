import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryIcon } from "@/components/icons";
import { getCategories, getCategory, getGuidesByCategory } from "@/lib/guides";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return getCategories().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) return { title: "가이드" };
  return {
    title: `${category.name} 가이드`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  const guides = getGuidesByCategory(category.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="mb-6 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--brand)]">
          홈
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--ink)]">{category.name}</span>
      </nav>

      <header className="mb-8 flex items-start gap-4">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: category.accent }}
        >
          <CategoryIcon icon={category.icon} className="h-8 w-8" />
        </span>
        <div>
          <p className="text-sm text-[var(--muted)]">{category.nameEn}</p>
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)]">
            {category.name}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
            {category.description}
          </p>
        </div>
      </header>

      {category.slug === "dmv" ? (
        <section className="mb-8 rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-soft)]/50 px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
            State-specific
          </p>
          <h2 className="mt-1 text-lg font-semibold text-[var(--ink)]">
            주별 DMV 가이드 · 시애틀 포함
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
            주마다 기관·서류·시험이 다릅니다. 공식 링크와 핵심 차이, 시애틀 지역
            노트를 확인해 보세요.
          </p>
          <Link
            href="/guides/dmv/states"
            className="mt-4 inline-flex rounded-lg bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"
          >
            주 선택하기
          </Link>
        </section>
      ) : null}

      <ul className="grid gap-3">
        {guides.map((guide) => {
          const href = `/guides/${category.slug}/${guide.slug}`;
          const disabled = Boolean(guide.comingSoon);

          return (
            <li key={guide.slug}>
              {disabled ? (
                <div className="flex items-start justify-between gap-4 rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-5 py-4 opacity-80">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-semibold text-[var(--ink)]">
                        {guide.title}
                      </h2>
                      <span className="rounded-md bg-[var(--surface-muted)] px-2 py-0.5 text-xs font-medium text-[var(--muted)]">
                        준비 중
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                      {guide.summary}
                    </p>
                  </div>
                </div>
              ) : (
                <Link
                  href={href}
                  className="flex items-start justify-between gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-[var(--brand-border)] hover:shadow-[0_12px_30px_-18px_rgba(17,52,104,0.45)]"
                >
                  <div>
                    <h2 className="text-lg font-semibold text-[var(--ink)]">
                      {guide.title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                      {guide.summary}
                    </p>
                  </div>
                  <span className="shrink-0 pt-1 text-sm font-medium text-[var(--brand)]">
                    보기 →
                  </span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
