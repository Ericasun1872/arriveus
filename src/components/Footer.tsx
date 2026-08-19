import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--surface-muted)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--brand)]">
              ArriveUS
            </p>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
              한국인을 위한 미국 정착 가이드. 생활, DMV, 은행, 의료, 세금,
              이민국, 취업, 주거 정보를 한곳에서 확인하세요.
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-[var(--brand)]"
            aria-label="푸터 링크"
          >
            <Link href="/search" className="hover:underline">
              검색
            </Link>
            <Link href="/guides/life/first-week" className="hover:underline">
              첫 7일
            </Link>
            <Link href="/about" className="hover:underline">
              소개
            </Link>
            <Link href="/privacy" className="hover:underline">
              개인정보
            </Link>
            <Link href="/jobs" className="hover:underline">
              채용 문의
            </Link>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="hover:underline"
            >
              연락
            </a>
          </nav>
        </div>
        <p className="text-xs leading-relaxed text-[var(--muted)]">
          본 사이트의 정보는 일반적인 참고용이며 법률·세무·의료·이민 자문이
          아닙니다. 최종 결정 전에는 반드시 해당 주·연방 공식 기관 안내를
          확인하세요. 일부 링크는 제휴·광고일 수 있으며, 이를 통해 소액의
          수수료를 받을 수 있습니다. 추천 여부와 수수료는 무관하게 공식·유용한
          출처를 우선합니다. 채용·광고 문의:{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="underline underline-offset-2"
          >
            {siteConfig.contactEmail}
          </a>
        </p>
        <p className="text-xs leading-relaxed text-[var(--muted)]">
          © {new Date().getFullYear()} ArriveUS. 본 사이트의 문구·이미지·구성은
          저작권으로 보호되며, 무단 복제·배포·재가공을 금지합니다.
        </p>
      </div>
    </footer>
  );
}
