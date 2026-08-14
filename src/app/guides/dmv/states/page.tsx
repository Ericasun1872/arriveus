import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLinkIcon } from "@/components/icons";
import { getFeaturedStates, getStateGuides } from "@/lib/states";

export const metadata: Metadata = {
  title: "주별 DMV 가이드",
  description:
    "거주 주를 선택해 공식 DMV/DOL 링크와 핵심 차이, 시애틀 등 지역 노트를 확인하세요.",
};

export default function StateGuidesPage() {
  const states = getStateGuides();
  const featured = getFeaturedStates();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="mb-6 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--brand)]">
          홈
        </Link>
        <span className="mx-2">/</span>
        <Link href="/guides/dmv" className="hover:text-[var(--brand)]">
          DMV
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--ink)]">주별 가이드</span>
      </nav>

      <header className="mb-8 max-w-3xl">
        <p className="text-sm font-medium text-[var(--brand)]">State guides</p>
        <h1 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
          주별 DMV 가이드
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          주마다 기관 이름·서류·시험 규칙이 다릅니다. 여기서는 공식 사이트와
          핵심 포인트만 짧게 정리합니다. 최종 기준은 항상 해당 주 공식
          안내입니다.
        </p>
      </header>

      {featured.map((state) => (
        <section
          key={state.code}
          className="mb-8 overflow-hidden rounded-2xl border border-[var(--brand-border)] bg-[var(--surface)]"
        >
          <div className="grid md:grid-cols-[1.4fr_1fr]">
            <div className="px-5 py-6 sm:px-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                Featured · Seattle
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--ink)]">
                {state.nameKo} ({state.name}) · 시애틀
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {state.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={`/guides/dmv/states/${state.code}`}
                  className="inline-flex rounded-lg bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"
                >
                  워싱턴주·시애틀 가이드 보기
                </Link>
                <a
                  href={state.dmvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--brand)] hover:bg-[var(--brand-soft)]"
                >
                  공식 DOL 사이트
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
            <div className="bg-[linear-gradient(160deg,#163f7d,#2f6fbd)] px-5 py-6 text-white sm:px-7">
              <p className="text-sm font-medium text-white/80">왜 시애틀인가</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/90">
                <li>면허·등록은 주 DOL 기준</li>
                <li>시내 주차·교통은 시(SDOT) 규정 별도</li>
                <li>공식 링크와 지역 노트를 한곳에 정리</li>
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
          주 선택
        </h2>
        <p className="mt-1 text-sm text-[var(--muted)]">
          자주 찾는 주부터 담았습니다. 없는 주는 이후 추가할 수 있습니다.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((state) => (
            <li key={state.code}>
              <Link
                href={`/guides/dmv/states/${state.code}`}
                className="flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition hover:-translate-y-0.5 hover:border-[var(--brand-border)] hover:shadow-[0_12px_30px_-18px_rgba(17,52,104,0.45)]"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-[var(--ink)]">
                    {state.nameKo}
                  </h3>
                  <span className="text-xs font-semibold uppercase text-[var(--brand)]">
                    {state.code}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--muted)]">{state.name}</p>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--muted)]">
                  {state.summary}
                </p>
                {state.localNotes?.some((note) => note.name === "Seattle") ? (
                  <span className="mt-3 inline-flex w-fit rounded-md bg-[var(--brand-soft)] px-2 py-0.5 text-xs font-medium text-[var(--brand)]">
                    시애틀 포함
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
