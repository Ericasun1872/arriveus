import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryGrid";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { heroSlides } from "@/content/hero-slides";
import { startPaths } from "@/content/start-paths";
import { getDailyTip } from "@/content/tips";
import { getCategories, getCategory, getNewGuides } from "@/lib/guides";

export default function HomePage() {
  const categories = getCategories();
  const newGuides = getNewGuides();
  const dailyTip = getDailyTip();

  return (
    <div>
      <section className="relative isolate min-h-[68vh] overflow-hidden sm:min-h-[72vh]">
        <HeroSlideshow slides={heroSlides} />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,46,0.52)_0%,rgba(8,22,46,0.12)_18%,rgba(8,22,46,0.05)_45%,rgba(8,22,46,0.5)_78%,rgba(8,22,46,0.78)_100%)]"
          aria-hidden
        />

        <div className="relative mx-auto min-h-[68vh] max-w-6xl px-4 sm:min-h-[72vh] sm:px-6">
          <div className="absolute inset-x-4 top-4 text-center sm:inset-x-6 sm:top-5 md:top-6">
            <p className="animate-rise font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl">
              ArriveUS
            </p>
            <h1
              className="animate-rise mx-auto mt-2 max-w-2xl text-2xl font-semibold leading-snug text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] sm:mt-3 sm:text-3xl"
              style={{ animationDelay: "80ms" }}
            >
              미국 정착, 필요한 정보만 깔끔하게
            </h1>
          </div>

          <div className="absolute inset-x-4 bottom-2 sm:inset-x-6 sm:bottom-3 md:bottom-4">
            <p
              className="animate-rise max-w-xl text-[0.95rem] leading-relaxed text-white/92 sm:text-base"
              style={{ animationDelay: "140ms" }}
            >
              DMV부터 은행, 의료, 생활(첫 주), 세금, 이민국, 취업, 주거까지 —
              한국인 기준으로 정리한 단계별 가이드입니다.
            </p>
            <div
              className="animate-rise mt-3 flex flex-wrap gap-3"
              style={{ animationDelay: "200ms" }}
            >
              <Link
                href="/search"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[var(--brand)] transition hover:bg-white/90"
              >
                검색·상황별 시작
              </Link>
              <Link
                href="/guides/life/first-week"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/12 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                도착 첫 7일부터
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="mb-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--ink)]">
            상황별 시작
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            지금 처한 상황에 맞는 입구를 고르세요.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {startPaths.map((path) => (
            <li key={path.slug}>
              <Link
                href={path.href}
                className="block h-full border-b border-[var(--border)] pb-4 transition hover:border-[var(--brand-border)] sm:border-b-0 sm:border-l sm:pb-0 sm:pl-5"
              >
                <span className="font-semibold text-[var(--ink)]">{path.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-[var(--muted)]">
                  {path.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="categories"
        className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16"
      >
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--ink)]">
              카테고리
            </h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              필요한 주제를 골라 절차와 공식 링크를 확인하세요.
            </p>
          </div>
          <Link
            href="/search"
            className="shrink-0 text-sm font-semibold text-[var(--brand)] hover:underline"
          >
            검색 →
          </Link>
        </div>
        <CategoryGrid categories={categories} />
      </section>

      {newGuides.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-14">
          <div className="mb-6">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--ink)]">
              새로 올린 가이드
            </h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              최근에 보강한 주제입니다. 필요한 절차부터 바로 확인해 보세요.
            </p>
          </div>
          <ul className="grid gap-3 md:grid-cols-3">
            {newGuides.map((guide) => {
              const category = getCategory(guide.category);
              return (
                <li key={`${guide.category}-${guide.slug}`}>
                  <Link
                    href={`/guides/${guide.category}/${guide.slug}`}
                    className="group flex h-full flex-col border-b border-[var(--border)] pb-4 transition hover:border-[var(--brand-border)] md:border-b-0 md:border-l md:border-[var(--border)] md:pb-0 md:pl-5 md:first:border-l-0 md:first:pl-0"
                  >
                    <span className="text-xs font-medium text-[var(--brand)]">
                      {category?.name ?? guide.category}
                    </span>
                    <span className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-[var(--ink)] group-hover:text-[var(--brand)]">
                      {guide.title}
                    </span>
                    <span className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                      {guide.summary}
                    </span>
                    <span className="mt-3 text-sm font-semibold text-[var(--brand)]">
                      가이드 보기 →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <div className="grid md:grid-cols-[1.2fr_1fr]">
            <div className="px-6 py-7 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                Daily Tip
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
                {dailyTip.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {dailyTip.body}
              </p>
              <Link
                href={dailyTip.href}
                className="mt-5 inline-flex text-sm font-semibold text-[var(--brand)] hover:underline"
              >
                {dailyTip.linkLabel}
              </Link>
            </div>
            <Link
              href="/guides/housing/rental-scams"
              className="relative min-h-40 bg-[linear-gradient(160deg,#163f7d,#2f6fbd)] p-6 text-white transition hover:opacity-95 md:min-h-full"
            >
              <p className="font-[family-name:var(--font-display)] text-sm font-medium text-white/80">
                Featured
              </p>
              <p className="mt-3 max-w-xs text-2xl font-semibold leading-snug">
                임대 사기 주의
              </p>
              <p className="mt-2 text-sm text-white/80">
                투어 전 송금 요구는 한 번 더 확인
              </p>
              <span className="mt-4 inline-flex text-sm font-semibold text-white">
                가이드 보기 →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
