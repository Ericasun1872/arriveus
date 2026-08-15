import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--surface-muted)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--brand)]">
              ArriveUS
            </p>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
              한국인을 위한 미국 정착 가이드. DMV, 은행, 의료, 세금, 이민국,
              취업, 주거 정보를 한곳에서 확인하세요.
            </p>
          </div>
          <Link
            href="/guides/dmv"
            className="text-sm font-medium text-[var(--brand)] hover:underline"
          >
            가이드 둘러보기
          </Link>
        </div>
        <p className="text-xs leading-relaxed text-[var(--muted)]">
          본 사이트의 정보는 일반적인 참고용이며 법률·세무·의료·이민 자문이
          아닙니다. 최종 결정 전에는 반드시 해당 주·연방 공식 기관 안내를
          확인하세요.
        </p>
        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} ArriveUS
        </p>
      </div>
    </footer>
  );
}
