import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "이용약관",
  description:
    "ArriveUS 웹사이트 이용에 관한 일반적인 약관·면책 안내입니다.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="mb-6 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--brand)]">
          홈
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--ink)]">이용약관</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)]">
        이용약관
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">최종 업데이트: 2026년 9월</p>

      <div className="mt-6 space-y-5 text-sm leading-relaxed text-[var(--muted)]">
        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">1. 서비스 성격</h2>
          <p>
            ArriveUS({siteConfig.url})는 한국인의 미국 정착을 돕는 일반 참고용
            가이드 사이트입니다. 법률·세무·의료·이민·부동산·취업 알선 자문이나
            대리 업무를 제공하지 않습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">2. 정보 이용</h2>
          <p>
            가이드·링크·영어 문장 예시는 교육·참고 목적이며, 시점·주·개인 상황에
            따라 틀리거나 바뀔 수 있습니다. 중요한 결정은 반드시 해당 연방·주
            공식 기관 안내와 자격 있는 전문가에게 확인하세요.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">3. 금지 사항</h2>
          <p>
            사이트 콘텐츠의 무단 대량 복제·재배포·재가공, 사칭, 스팸성 문의,
            불법·사기 목적의 이용을 금지합니다. 채용·광고 게재는 검수 후에만
            이루어질 수 있습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">4. 외부 링크·광고</h2>
          <p>
            공식 기관·유용한 출처 링크를 우선합니다. 일부 링크는 제휴·광고일 수
            있으며, 클릭으로 소액 수수료가 발생할 수 있습니다. 외부 사이트의
            정책·정확성에 대해 ArriveUS가 책임지지 않습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">5. 면책</h2>
          <p>
            사이트 이용으로 발생한 직·간접 손해에 대해, 법이 허용하는 범위에서
            ArriveUS와 운영자는 책임을 지지 않습니다. 정보는 “있는 그대로”
            제공됩니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">6. 개인정보</h2>
          <p>
            개인정보 관련 안내는{" "}
            <Link href="/privacy" className="text-[var(--brand)] underline underline-offset-2">
              개인정보 페이지
            </Link>
            를 참고하세요.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">7. 문의</h2>
          <p>
            약관·운영 문의:{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-[var(--brand)] underline underline-offset-2"
            >
              {siteConfig.contactEmail}
            </a>
          </p>
        </section>

        <p>
          본 문서는 일반 설명이며 법률 자문이 아닙니다. 내용이 바뀌면 이
          페이지를 업데이트합니다.
        </p>
      </div>
    </div>
  );
}
