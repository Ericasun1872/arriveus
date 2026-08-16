import Link from "next/link";
import { getCategories, getNewGuides } from "@/lib/guides";

export default function NotFound() {
  const categories = getCategories();
  const newGuides = getNewGuides();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold text-[var(--brand)]">404</p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)]">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
        주소가 바뀌었거나 아직 준비 중인 페이지일 수 있습니다. 홈이나 아래
        카테고리에서 필요한 가이드를 찾아보세요.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex rounded-lg bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"
        >
          홈으로 돌아가기
        </Link>
        <Link
          href="/#categories"
          className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--brand)] hover:bg-[var(--brand-soft)]"
        >
          카테고리 보기
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
          카테고리
        </h2>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/guides/${category.slug}`}
                className="text-sm font-medium text-[var(--brand)] hover:underline"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {newGuides.length > 0 ? (
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
            새로 올린 가이드
          </h2>
          <ul className="mt-4 space-y-3">
            {newGuides.map((guide) => (
              <li key={`${guide.category}-${guide.slug}`}>
                <Link
                  href={`/guides/${guide.category}/${guide.slug}`}
                  className="text-sm font-medium text-[var(--brand)] hover:underline"
                >
                  {guide.title}
                </Link>
                <p className="mt-0.5 text-sm text-[var(--muted)]">
                  {guide.summary}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
