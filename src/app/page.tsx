import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryGrid";
import { dailyTip } from "@/content/tips";
import { getCategories } from "@/lib/guides";

export default function HomePage() {
  const categories = getCategories();

  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,var(--hero-from),var(--hero-via)_55%,var(--hero-to))]"
          aria-hidden
        />
        <div
          className="hero-orb absolute -right-16 top-8 h-56 w-56 rounded-full bg-white/10 blur-2xl"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25) 0 2px, transparent 2px), radial-gradient(circle at 80% 40%, rgba(255,255,255,0.18) 0 1.5px, transparent 1.5px)",
            backgroundSize: "48px 48px, 36px 36px",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-14 sm:px-6 sm:pb-16 sm:pt-20">
          <p className="animate-rise font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            ArriveUS
          </p>
          <h1 className="animate-rise mt-4 max-w-2xl text-2xl font-semibold leading-snug text-white sm:text-3xl" style={{ animationDelay: "80ms" }}>
            미국 정착, 필요한 정보만 깔끔하게
          </h1>
          <p className="animate-rise mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg" style={{ animationDelay: "140ms" }}>
            DMV부터 은행, 의료, 세금, 취업, 주거까지 — 한국인 기준으로 정리한
            단계별 가이드입니다.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "200ms" }}>
            <a
              href="#categories"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[var(--brand)] transition hover:bg-white/90"
            >
              가이드 보기
            </a>
            <Link
              href="/guides/dmv/license-renewal"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              면허 갱신부터 시작
            </Link>
          </div>
        </div>
      </section>

      <section
        id="categories"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
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
        </div>
        <CategoryGrid categories={categories} />
      </section>

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
            <div className="relative min-h-40 bg-[linear-gradient(160deg,#163f7d,#2f6fbd)] p-6 text-white md:min-h-full">
              <p className="font-[family-name:var(--font-display)] text-sm font-medium text-white/80">
                Featured
              </p>
              <p className="mt-3 max-w-xs text-2xl font-semibold leading-snug">
                임대 사기 주의
              </p>
              <p className="mt-2 text-sm text-white/80">
                투어 전 송금 요구는 한 번 더 확인
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
