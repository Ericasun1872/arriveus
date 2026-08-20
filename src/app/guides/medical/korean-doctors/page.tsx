import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLinkIcon } from "@/components/icons";
import {
  getFeaturedKoreanDoctorRegions,
  getKoreanDoctorRegions,
} from "@/lib/korean-doctors";

export const metadata: Metadata = {
  title: "한국어 의사 찾기",
  description:
    "시애틀·LA·뉴욕·베이·시카고·DFW·휴스턴·마이애미·보스턴 등 지역별로 한국어 의사·통역을 찾는 방법과 커뮤니티 클리닉·보험 검색 링크를 안내합니다.",
  alternates: { canonical: "/guides/medical/korean-doctors" },
};

export default function KoreanDoctorsPage() {
  const regions = getKoreanDoctorRegions();
  const featured = getFeaturedKoreanDoctorRegions();
  const others = regions.filter((region) => !region.featured);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="mb-6 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--brand)]">
          홈
        </Link>
        <span className="mx-2">/</span>
        <Link href="/guides/medical" className="hover:text-[var(--brand)]">
          의료
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--ink)]">한국어 의사 찾기</span>
      </nav>

      <header className="mb-8 max-w-3xl">
        <p className="text-sm font-medium text-[var(--brand)]">
          Korean-speaking care
        </p>
        <h1 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
          한국어 의사 찾기
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          보험 네트워크 검색과 다국어 클리닉·통역 요청 방법을 지역별로
          모았습니다. 시애틀·LA·뉴욕을 포함해 같은 형식으로 지역을 늘리고
          있습니다. 특정 의원 추천이 아니며, 예약·보험 적용은 직접 확인하세요.
        </p>
      </header>

      {featured.map((region) => (
        <section
          key={region.slug}
          className="mb-8 overflow-hidden rounded-2xl border border-[var(--brand-border)] bg-[var(--surface)]"
        >
          <div className="grid md:grid-cols-[1.4fr_1fr]">
            <div className="px-5 py-6 sm:px-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                Featured
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--ink)]">
                {region.nameKo}
              </h2>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {region.areaNote}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {region.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={`/guides/medical/korean-doctors/${region.slug}`}
                  className="inline-flex rounded-lg bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"
                >
                  지역 가이드 보기
                </Link>
                {region.links[0] ? (
                  <a
                    href={region.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--brand)] hover:bg-[var(--brand-soft)]"
                  >
                    {region.links[0].label}
                    <ExternalLinkIcon />
                  </a>
                ) : null}
              </div>
            </div>
            <div className="bg-[linear-gradient(160deg,#7a2a2a,#c23b3b)] px-5 py-6 text-white sm:px-7">
              <p className="text-sm font-medium text-white/80">찾는 순서</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/90">
                <li>보험사에서 Language: Korean 필터</li>
                <li>ICHS 등 커뮤니티 클리닉·통역 요청</li>
                <li>예약 시 한국어 의사/통역을 명시적으로 요청</li>
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
          다른 지역
        </h2>
        <p className="mt-1 text-sm text-[var(--muted)]">
          아래 지역은 추후 같은 형식으로 내용을 추가할 수 있습니다.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {others.map((region) => (
            <li
              key={region.slug}
              className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-5 py-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-[var(--ink)]">
                  {region.nameKo}
                </h3>
                {region.comingSoon ? (
                  <span className="rounded-md bg-[var(--surface-muted)] px-2 py-0.5 text-xs font-medium text-[var(--muted)]">
                    준비 중
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-sm text-[var(--muted)]">{region.areaNote}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {region.summary}
              </p>
              {region.comingSoon ? (
                <p className="mt-3 text-sm text-[var(--muted)]">
                  당분간은{" "}
                  <Link
                    href="/guides/medical/korean-doctors/seattle"
                    className="font-medium text-[var(--brand)] hover:underline"
                  >
                    시애틀 가이드
                  </Link>
                  의 검색 방법을 참고하거나,{" "}
                  <a
                    href="https://findahealthcenter.hrsa.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--brand)] hover:underline"
                  >
                    HRSA 클리닉 검색
                  </a>
                  을 이용해 보세요.
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
