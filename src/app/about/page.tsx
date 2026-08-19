import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "소개",
  description:
    "ArriveUS는 한국인을 위한 미국 정착 가이드입니다. 생활·DMV·은행·의료·세금·이민국·취업·주거를 단계별로 정리합니다.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="mb-6 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--brand)]">
          홈
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--ink)]">소개</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)]">
        ArriveUS 소개
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
        ArriveUS는 미국에 거주하거나 막 도착한 한국인이 자주 막히는 절차—전화번호,
        학교, 은행, DMV, 의료, 세금, 이민국, 취업, 주거—를 한국어로 정리한 정착
        가이드 사이트입니다. 공식 기관 링크와 준비물·순서를 우선하고, 특정
        업체·변호사를 대신 추천하지 않습니다.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
        제공 정보는 일반적인 참고용이며 법률·세무·의료·이민·취업 알선 자문이
        아닙니다. 최종 확인은 해당 주·연방 공식 안내와 자격 있는 전문가에게
        맡기세요.
      </p>
      <ul className="mt-8 space-y-2 text-sm">
        <li>
          <Link href="/guides/life/first-week" className="font-semibold text-[var(--brand)] hover:underline">
            도착 첫 7일부터 시작 →
          </Link>
        </li>
        <li>
          <Link href="/search" className="font-semibold text-[var(--brand)] hover:underline">
            가이드 검색 →
          </Link>
        </li>
        <li>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="font-semibold text-[var(--brand)] hover:underline"
          >
            {siteConfig.contactEmail}
          </a>
        </li>
      </ul>
    </div>
  );
}
