import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "개인정보 안내",
  description:
    "ArriveUS 개인정보·쿠키·문의 메일 처리에 대한 간단한 안내입니다.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="mb-6 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--brand)]">
          홈
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--ink)]">개인정보</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)]">
        개인정보 안내
      </h1>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--muted)]">
        <p>
          ArriveUS는 회원 가입 없이 이용할 수 있는 정적 가이드 사이트입니다.
          즐겨찾기·체크리스트는 브라우저(로컬 저장소)에만 저장되며, 서버로
          동기화하지 않습니다.
        </p>
        <p>
          사이트 운영을 위해 Vercel Analytics 등 방문 통계가 수집될 수 있습니다.
          광고·제휴 링크를 클릭하면 해당 서비스의 정책이 적용됩니다.
        </p>
        <p>
          문의 메일(
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-[var(--brand)] underline underline-offset-2"
          >
            {siteConfig.contactEmail}
          </a>
          )로 보내 주신 내용은 답변·운영 목적으로만 사용하며, 마케팅 판매에
          쓰지 않습니다.
        </p>
        <p>
          본 안내는 일반 설명이며 법률 자문이 아닙니다. 정책이 바뀌면 이 페이지를
          업데이트합니다.
        </p>
      </div>
    </div>
  );
}
