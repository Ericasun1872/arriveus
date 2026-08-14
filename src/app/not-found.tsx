import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start px-4 py-20 sm:px-6">
      <p className="text-sm font-semibold text-[var(--brand)]">404</p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)]">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-3 text-sm text-[var(--muted)]">
        주소를 다시 확인하거나 홈에서 가이드를 찾아보세요.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-lg bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
