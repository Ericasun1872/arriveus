import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLinkIcon } from "@/components/icons";
import { getStateGuide, getStateGuides } from "@/lib/states";

type PageProps = {
  params: Promise<{ code: string }>;
};

export function generateStaticParams() {
  return getStateGuides().map((state) => ({ code: state.code }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { code } = await params;
  const state = getStateGuide(code);
  if (!state) return { title: "주별 가이드" };
  const seattle = state.localNotes?.some((note) => note.name === "Seattle");
  return {
    title: seattle
      ? `${state.nameKo}·시애틀 DMV 가이드`
      : `${state.nameKo} DMV 가이드`,
    description: state.summary,
  };
}

export default async function StateGuidePage({ params }: PageProps) {
  const { code } = await params;
  const state = getStateGuide(code);
  if (!state) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="mb-6 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--brand)]">
          홈
        </Link>
        <span className="mx-2">/</span>
        <Link href="/guides/dmv" className="hover:text-[var(--brand)]">
          DMV
        </Link>
        <span className="mx-2">/</span>
        <Link href="/guides/dmv/states" className="hover:text-[var(--brand)]">
          주별 가이드
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--ink)]">{state.nameKo}</span>
      </nav>

      <header className="mb-8">
        <p className="text-sm font-medium text-[var(--brand)]">
          {state.code.toUpperCase()} · {state.agency}
        </p>
        <h1 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
          {state.nameKo}
          <span className="mt-1 block text-xl font-medium text-[var(--muted)] sm:text-2xl">
            {state.name}
          </span>
        </h1>
        <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
          {state.summary}
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
          공식 링크
        </h2>
        <ul className="space-y-3">
          <li>
            <a
              href={state.dmvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] px-4 py-3 text-sm font-medium text-[var(--brand)] transition-colors hover:bg-[var(--brand-soft)]"
            >
              <span>{state.agency}</span>
              <span className="inline-flex items-center gap-1 text-xs text-[var(--muted)]">
                외부 링크
                <ExternalLinkIcon />
              </span>
            </a>
          </li>
          {state.handbookUrl ? (
            <li>
              <a
                href={state.handbookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] px-4 py-3 text-sm font-medium text-[var(--brand)] transition-colors hover:bg-[var(--brand-soft)]"
              >
                <span>Driver Handbook / Manual</span>
                <span className="inline-flex items-center gap-1 text-xs text-[var(--muted)]">
                  외부 링크
                  <ExternalLinkIcon />
                </span>
              </a>
            </li>
          ) : null}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
          이 주에서 확인할 핵심
        </h2>
        <ul className="mt-4 space-y-3">
          {state.highlights.map((item, index) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-[var(--border)] px-4 py-3 text-sm leading-relaxed text-[var(--ink)]"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] text-xs font-semibold text-[var(--brand)]">
                {index + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {state.localNotes?.map((local) => (
        <section
          key={local.name}
          className="mt-10 rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-soft)]/40 px-5 py-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
            Local note
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
            {local.nameKo} ({local.name})
          </h2>
          <ul className="mt-4 space-y-3">
            {local.notes.map((note) => (
              <li
                key={note}
                className="rounded-xl bg-[var(--surface)] px-4 py-3 text-sm leading-relaxed text-[var(--ink)]"
              >
                {note}
              </li>
            ))}
          </ul>
          {local.links?.length ? (
            <ul className="mt-4 space-y-2">
              {local.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[var(--brand)] hover:underline"
                  >
                    {link.label}
                    <ExternalLinkIcon className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      <section className="mt-10 rounded-xl bg-[var(--surface-muted)] px-4 py-4">
        <h2 className="text-sm font-semibold text-[var(--ink)]">
          ArriveUS 공통 가이드와 함께 보기
        </h2>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <Link
            href="/guides/dmv/license-transfer"
            className="font-medium text-[var(--brand)] hover:underline"
          >
            타주·해외 면허 이전
          </Link>
          <Link
            href="/guides/dmv/real-id"
            className="font-medium text-[var(--brand)] hover:underline"
          >
            REAL ID
          </Link>
          <Link
            href="/guides/dmv/learner-permit"
            className="font-medium text-[var(--brand)] hover:underline"
          >
            학생·초보 운전
          </Link>
          <Link
            href="/guides/dmv/written-test"
            className="font-medium text-[var(--brand)] hover:underline"
          >
            필기 연습 문제
          </Link>
          <Link
            href="/guides/dmv/road-test"
            className="font-medium text-[var(--brand)] hover:underline"
          >
            도로주행 시험 팁
          </Link>
          <Link
            href="/guides/dmv/auto-insurance"
            className="font-medium text-[var(--brand)] hover:underline"
          >
            자동차 보험 기초
          </Link>
          <Link
            href="/guides/dmv/first-license"
            className="font-medium text-[var(--brand)] hover:underline"
          >
            면허 신규 발급
          </Link>
          <Link
            href="/guides/dmv/license-renewal"
            className="font-medium text-[var(--brand)] hover:underline"
          >
            면허 갱신
          </Link>
        </div>
      </section>

      <p className="mt-8 text-xs leading-relaxed text-[var(--muted)]">
        본 페이지는 공식 사이트로 가는 길잡이이며 법률 자문이 아닙니다. 수수료,
        서류, 시험 규칙의 해당 주 기관 안내가 변경되면 공식 페이지를 우선하세요.
      </p>
    </div>
  );
}
