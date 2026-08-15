import Image from "next/image";
import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryGrid";
import { dailyTip } from "@/content/tips";
import { getCategories } from "@/lib/guides";

export default function HomePage() {
  const categories = getCategories();

  return (
    <div>
      <section className="relative isolate min-h-[68vh] overflow-hidden sm:min-h-[72vh]">
        <Image
          src="/hero-whitehouse.jpg"
          alt="워싱턴 D.C. 백악관"
          fill
          priority
          className="object-cover object-[center_48%]"
          sizes="100vw"
        />
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
              DMV부터 은행, 의료, 세금, 이민국, 취업, 주거까지 — 한국인 기준으로
              정리한 단계별 가이드입니다.
            </p>
            <div
              className="animate-rise mt-3 flex flex-wrap gap-3"
              style={{ animationDelay: "200ms" }}
            >
              <a
                href="#categories"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[var(--brand)] transition hover:bg-white/90"
              >
                가이드 보기
              </a>
              <Link
                href="/guides/dmv/license-renewal"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/12 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                면허 갱신부터 시작
              </Link>
            </div>
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
