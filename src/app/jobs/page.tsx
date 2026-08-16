import type { Metadata } from "next";
import Link from "next/link";
import { jobPostings } from "@/content/jobs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "채용 공고",
  description:
    "ArriveUS 채용·구인 안내. 한국인 정착 커뮤니티 방문자를 위한 채용 광고 문의와 공고를 안내합니다.",
  alternates: { canonical: "/jobs" },
};

export default function JobsPage() {
  const email = siteConfig.contactEmail;
  const mailHref = `mailto:${email}?subject=${encodeURIComponent(
    "ArriveUS 채용 광고 문의",
  )}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="mb-6 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--brand)]">
          홈
        </Link>
        <span className="mx-2">/</span>
        <Link href="/guides/job" className="hover:text-[var(--brand)]">
          취업
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--ink)]">채용 공고</span>
      </nav>

      <header className="max-w-3xl">
        <p className="text-sm font-medium text-[var(--brand)]">Hiring</p>
        <h1 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
          채용 공고
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          정착 가이드를 보는 방문자에게 채용 정보를 전하는 공간입니다. 공고는
          가이드와 분리되어 있으며, 게재 전 검수를 거칩니다. ArriveUS는 채용
          알선·이민 대행을 하지 않습니다.
        </p>
      </header>

      <section className="mt-10">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
            현재 공고
          </h2>
          <p className="text-xs text-[var(--muted)]">광고·스폰서 공고는 표시됩니다</p>
        </div>

        {jobPostings.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-5 py-12 text-center">
            <p className="text-sm font-medium text-[var(--ink)]">
              아직 게시된 채용 공고가 없습니다
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              곧 검수를 마친 공고가 이 목록에 올라옵니다. 채용을 올리려는
              사업체는 아래 문의로 연락해 주세요.
            </p>
            <Link
              href="/guides/job"
              className="mt-5 inline-flex text-sm font-semibold text-[var(--brand)] hover:underline"
            >
              취업 가이드 보기 →
            </Link>
          </div>
        ) : (
          <ul className="grid gap-3">
            {jobPostings.map((job) => (
              <li key={job.id}>
                <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-[var(--ink)]">
                      {job.title}
                    </h3>
                    {job.sponsored ? (
                      <span className="rounded-md bg-[var(--surface-muted)] px-2 py-0.5 text-xs font-medium text-[var(--muted)]">
                        채용 광고
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {job.company}
                    <span className="mx-2 text-[var(--border)]">·</span>
                    {job.location}
                    {job.employmentType ? (
                      <>
                        <span className="mx-2 text-[var(--border)]">·</span>
                        {job.employmentType}
                      </>
                    ) : null}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {job.summary}
                  </p>
                  {job.sponsorsGreenCard ? (
                    <p className="mt-2 text-xs text-[var(--muted)]">
                      고용주 안내에 따르면 영주권 스폰서 검토 가능 (최종은 회사
                      확인)
                    </p>
                  ) : null}
                  {job.applyUrl ? (
                    <a
                      href={job.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex text-sm font-semibold text-[var(--brand)] hover:underline"
                    >
                      지원하기 →
                    </a>
                  ) : null}
                </article>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-12 max-w-3xl border-t border-[var(--border)] pt-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
          채용 광고·제휴 문의
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          회사에 채용 공고를 올리고 싶거나, 광고·제휴를 문의하려면 이메일로
          연락해 주세요. 회사명, 직무, 근무지, 지원 링크, 희망 게재 기간을
          함께 보내 주시면 검수 후 안내드립니다.
        </p>
        <a
          href={mailHref}
          className="mt-5 inline-flex rounded-lg bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
        >
          {email}로 문의하기
        </a>
        <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
          이메일:{" "}
          <a href={mailHref} className="font-medium text-[var(--brand)] hover:underline">
            {email}
          </a>
          . ArriveUS는 특정 고용·이민 결과를 보장하지 않으며, 게시 내용은 광고주로
          표시될 수 있습니다.
        </p>
      </section>
    </div>
  );
}
