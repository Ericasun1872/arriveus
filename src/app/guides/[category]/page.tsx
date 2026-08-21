import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryIcon } from "@/components/icons";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  getCategories,
  getCategory,
  getCategoryFaqs,
  getGuidesByCategory,
} from "@/lib/guides";

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
    alternates: { canonical: `/guides/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  const guides = getGuidesByCategory(category.slug);
  const faqs = getCategoryFaqs(category.slug);

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

      {category.slug === "life" ? (
        <section className="mb-8 rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-soft)]/50 px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
            First week
          </p>
          <h2 className="mt-1 text-lg font-semibold text-[var(--ink)]">
            도착 첫 7일부터 시작
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
            전화번호·학교·ESL·혜택·응급·커뮤니티 순서를 한곳에서 확인하세요.
          </p>
          <Link
            href="/guides/life/first-week"
            className="mt-4 inline-flex rounded-lg bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"
          >
            체크리스트 보기
          </Link>
        </section>
      ) : null}

      {category.slug === "dmv" ? (
        <section className="mb-8 rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-soft)]/50 px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
            State-specific
          </p>
          <h2 className="mt-1 text-lg font-semibold text-[var(--ink)]">
            주별 DMV 가이드
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
            주마다 기관·서류·시험이 다릅니다. 공식 링크와 핵심 차이, 주요 도시
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

      {category.slug === "medical" ? (
        <section className="mb-8 rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-soft)]/50 px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
            Korean-speaking care
          </p>
          <h2 className="mt-1 text-lg font-semibold text-[var(--ink)]">
            한국어 의사 찾기 · 주요 도시
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
            시애틀·LA·뉴욕·베이·시카고·DFW·휴스턴·애틀랜타·마이애미·보스턴·북VA
            등 보험 검색·클리닉·통역
            요청 방법을 지역별로 안내합니다.
          </p>
          <Link
            href="/guides/medical/korean-doctors"
            className="mt-4 inline-flex rounded-lg bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"
          >
            지역별 안내 보기
          </Link>
        </section>
      ) : null}

      {category.slug === "job" ? (
        <section className="mb-8 rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-soft)]/50 px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
            Hiring board
          </p>
          <h2 className="mt-1 text-lg font-semibold text-[var(--ink)]">
            채용 가이드 · 공고 문의
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
            온라인 구직·현장 취업·홈케어 가이드를 먼저 보세요. 채용 공고 게재는
            준비 중이며 사업체 문의는 이메일로 받습니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/guides/job/job-search"
              className="inline-flex rounded-lg bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              온라인 구직 가이드
            </Link>
            <Link
              href="/jobs"
              className="inline-flex rounded-lg border border-[var(--brand-border)] bg-white/70 px-4 py-2.5 text-sm font-semibold text-[var(--brand)] hover:bg-white"
            >
              채용·광고 문의
            </Link>
          </div>
        </section>
      ) : null}

      {guides.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-5 py-10 text-center">
          <p className="text-sm font-medium text-[var(--ink)]">
            이 카테고리 가이드는 준비 중입니다
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            다른 카테고리에서 필요한 주제를 먼저 확인해 보세요.
          </p>
          <Link
            href="/#categories"
            className="mt-5 inline-flex text-sm font-semibold text-[var(--brand)] hover:underline"
          >
            카테고리로 돌아가기
          </Link>
        </div>
      ) : (
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
      )}

      {faqs.length > 0 ? (
        <section className="mt-12 max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
            자주 묻는 질문
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {category.name}에서 많이 궁금해하는 점입니다. 더 자세한 내용은 위
            가이드에서 확인하세요.
          </p>
          <div className="mt-4">
            <FaqAccordion items={faqs} />
          </div>
        </section>
      ) : null}
    </div>
  );
}
