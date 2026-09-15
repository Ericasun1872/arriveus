import type { Metadata } from "next";
import Link from "next/link";
import { EmailAction } from "@/components/EmailAction";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "후원·응원·광고·협찬",
  description:
    "ArriveUS가 도움이 되셨다면 응원·후원 메일을 보내 주시거나, 광고·협찬·채용 게재를 문의해 주세요.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  const email = siteConfig.contactEmail;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="mb-6 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--brand)]">
          홈
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--ink)]">후원·응원·광고</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)]">
        도움이 되셨나요?
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
        ArriveUS는 한국인의 미국 정착 가이드를 무료로 정리합니다. 강제 후원이나
        팝업은 없습니다. 응원 한마디, 후원 문의, 광고·협찬은 아래 메일로
        편하게 보내 주세요.
      </p>

      <section className="mt-10 space-y-3 border-t border-[var(--border)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
          응원·후원
        </h2>
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          가이드가 도움이 되었다면 짧은 응원 메일을 보내 주셔도 큰 힘이 됩니다.
          후원·기부 방법을 문의하고 싶으실 때도 같은 메일로 연락해 주세요.
          현재는 메일로 안내드리며, 강요하지 않습니다.
        </p>
        <EmailAction
          email={email}
          subject="ArriveUS 응원·후원"
          body={
            "안녕하세요.\nArriveUS가 도움이 되어 응원(또는 후원 문의) 드립니다.\n\n"
          }
          primaryLabel="응원·후원 메일 보내기"
          variant="brand"
        />
      </section>

      <section className="mt-10 space-y-3 border-t border-[var(--border)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
          광고·협찬
        </h2>
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          배너·콘텐츠 협찬·제휴를 검토할 수 있습니다. 공식·유용한 출처를
          우선하는 사이트 취지에 맞는 제안만 검수합니다. 이민·법률·의료
          “결과 보장”류 광고는 받지 않습니다. 유료·협찬 게시물은 광고/협찬으로
          표시합니다.
        </p>
        <EmailAction
          email={email}
          subject="ArriveUS 광고·협찬 문의"
          body={
            "안녕하세요.\n광고·협찬·배너·콘텐츠 협력을 문의드립니다.\n\n회사/단체명:\n희망 형태(광고/협찬):\n기간·예산(대략):\n연락처:\n\n"
          }
          primaryLabel="광고·협찬 문의"
          variant="outline"
        />
      </section>

      <section className="mt-10 space-y-3 border-t border-[var(--border)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
          채용 공고 게재
        </h2>
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          미국 내·한국·원격 채용 게재는 검수 후 안내드립니다. 자세한 안내는
          채용 문의 페이지를 참고하세요.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/jobs"
            className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface-muted)]"
          >
            채용·광고 문의 페이지
          </Link>
        </div>
        <div className="mt-4">
          <EmailAction
            email={email}
            subject="ArriveUS 채용 광고 문의"
            primaryLabel="채용 문의 메일 보내기"
            variant="outline"
          />
        </div>
      </section>

      <p className="mt-12 text-xs leading-relaxed text-[var(--muted)]">
        문의 메일 처리·제휴 안내는{" "}
        <Link href="/privacy" className="underline underline-offset-2">
          개인정보
        </Link>
        ·
        <Link href="/terms" className="underline underline-offset-2">
          이용약관
        </Link>
        을 함께 참고하세요. ArriveUS는 법률·세무·이민·취업 알선 자문이
        아닙니다.
      </p>
    </div>
  );
}
