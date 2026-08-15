import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLinkIcon } from "@/components/icons";
import {
  getKoreanDoctorRegion,
  getKoreanDoctorRegionParams,
} from "@/lib/korean-doctors";

type PageProps = {
  params: Promise<{ region: string }>;
};

export function generateStaticParams() {
  return getKoreanDoctorRegionParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { region: regionSlug } = await params;
  const region = getKoreanDoctorRegion(regionSlug);
  if (!region || region.comingSoon) return { title: "한국어 의사 찾기" };
  return {
    title: `${region.nameKo} 한국어 의사`,
    description: region.summary,
  };
}

export default async function KoreanDoctorRegionPage({ params }: PageProps) {
  const { region: regionSlug } = await params;
  const region = getKoreanDoctorRegion(regionSlug);

  if (!region || region.comingSoon) notFound();

  const phrases = region.phrases ?? [];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="mb-6 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--brand)]">
          홈
        </Link>
        <span className="mx-2">/</span>
        <Link href="/guides/medical" className="hover:text-[var(--brand)]">
          의료
        </Link>
        <span className="mx-2">/</span>
        <Link
          href="/guides/medical/korean-doctors"
          className="hover:text-[var(--brand)]"
        >
          한국어 의사 찾기
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--ink)]">{region.nameKo}</span>
      </nav>

      <header className="mb-8">
        <p className="text-sm font-medium text-[var(--brand)]">
          {region.nameEn}
        </p>
        <h1 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
          {region.nameKo} 한국어 진료
        </h1>
        <p className="mt-2 text-sm text-[var(--muted)]">{region.areaNote}</p>
        <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
          {region.summary}
        </p>
      </header>

      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
          알아두면 좋은 점
        </h2>
        <ul className="mt-3 space-y-2">
          {region.tips.map((tip) => (
            <li
              key={tip}
              className="rounded-xl bg-[var(--surface-muted)] px-4 py-3 text-sm leading-relaxed text-[var(--ink)]"
            >
              {tip}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
          찾는 절차
        </h2>
        <ol className="mt-3 list-decimal space-y-3 pl-5">
          {region.steps.map((step) => (
            <li
              key={step}
              className="text-sm leading-relaxed text-[var(--ink)] marker:font-semibold marker:text-[var(--brand)]"
            >
              {step}
            </li>
          ))}
        </ol>
      </section>

      {phrases.length > 0 ? (
        <section className="mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
            영어 표현
          </h2>
          <ul className="mt-3 space-y-3">
            {phrases.map((phrase) => (
              <li
                key={phrase.en}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3"
              >
                <p className="text-sm font-medium text-[var(--ink)]">
                  {phrase.ko}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">{phrase.en}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
          유용한 링크
        </h2>
        <ul className="mt-3 space-y-2">
          {region.links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--brand)] hover:underline"
              >
                {link.label}
                <ExternalLinkIcon />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <p className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-xs leading-relaxed text-[var(--muted)]">
        ArriveUS는 특정 병원·의사를 보증하지 않습니다. 진료·보험·통역 가능
        여부는 해당 기관에 직접 확인하세요. 다른 지역 안내는{" "}
        <Link
          href="/guides/medical/korean-doctors"
          className="font-medium text-[var(--brand)] hover:underline"
        >
          한국어 의사 찾기
        </Link>
        목록에서 계속 추가됩니다.
      </p>
    </div>
  );
}
