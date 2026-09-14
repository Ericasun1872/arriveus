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
          <h2 className="text-base font-semibold text-[var(--ink)]">1. 약관의 적용</h2>
          <p>
            ArriveUS({siteConfig.url}) 웹사이트를 방문·열람·이용하는 경우, 본
            이용약관에 동의한 것으로 봅니다. 동의하지 않으면 사이트 이용을
            중단해 주세요.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">2. 서비스 성격</h2>
          <p>
            ArriveUS는 한국인의 미국 정착을 돕는 일반 참고용 가이드
            사이트입니다. 법률·세무·의료·이민·부동산·금융·취업 알선 자문이나
            대리·중개·보증을 제공하지 않습니다. 개별 사건·승인·계약 결과를
            약속하지 않습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">3. 정보의 이용</h2>
          <p>
            가이드·링크·영어 문장 예시는 교육·참고 목적이며, 시점·주·시·개인
            상황·공식 정책 변경에 따라 틀리거나 오래될 수 있습니다. 중요한
            결정은 해당 연방·주 공식 기관 안내와 자격 있는 전문가에게
            확인하세요.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">4. 지적재산</h2>
          <p>
            사이트의 문구·구성·디자인·이미지 등은 ArriveUS 또는 정당한
            권리자에게 귀속됩니다. 개인이 참고하거나 링크를 공유하는 것은
            허용되나, 무단 대량 복제·재배포·재가공·상업적 재판매는 금지합니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">5. 금지 사항</h2>
          <p>
            사칭, 스팸성·악의적 문의, 불법·사기 목적의 이용, 사이트·서버에 대한
            비정상적 접근·방해, 타인 권리 침해를 금지합니다. 위반이 의심되면
            이용 제한·신고 등 합리적 조치를 할 수 있습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">6. 문의·채용·광고</h2>
          <p>
            이메일 문의·채용·광고 제휴 요청에 담긴 내용은 답변·검수·운영
            목적으로만 사용합니다. 채용 공고는 검수 후에만 게시될 수 있으며,
            ArriveUS는 고용·이민·채용 결과를 보장하지 않습니다. 게시물은
            광고·제휴로 표시될 수 있습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">7. 외부 링크·제휴</h2>
          <p>
            공식 기관·유용한 출처 링크를 우선합니다. 일부 링크는 제휴·광고일 수
            있으며, 클릭으로 소액 수수료가 발생할 수 있습니다. 외부 사이트의
            내용·정책·거래에 대해 ArriveUS가 책임지지 않습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">8. 로컬 저장·즐겨찾기</h2>
          <p>
            즐겨찾기·체크리스트 등은 브라우저 로컬 저장소에만 둘 수 있으며,
            서버로 동기화하지 않습니다. 기기 변경·캐시 삭제·브라우저 설정에
            따라 데이터가 사라질 수 있습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">9. 서비스 변경</h2>
          <p>
            가이드·기능·페이지는 사전 고지 없이 수정·추가·중단될 수 있습니다.
            가능한 범위에서 최신 공식 링크를 유지하려 노력하나, 완전성을
            보장하지 않습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">10. 면책</h2>
          <p>
            사이트와 정보는 “있는 그대로” 제공됩니다. 법이 허용하는 범위에서,
            이용·신뢰·외부 링크로 인한 직·간접 손해에 대해 ArriveUS와 운영자는
            책임을 지지 않습니다. 일부 지역에서는 면책이 제한될 수 있습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">11. 개인정보</h2>
          <p>
            수집·쿠키·문의 메일 처리 등 개인정보 관련 안내는{" "}
            <Link
              href="/privacy"
              className="text-[var(--brand)] underline underline-offset-2"
            >
              개인정보 페이지
            </Link>
            를 참고하세요.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">12. 약관 변경</h2>
          <p>
            본 약관은 이 페이지의 “최종 업데이트” 일자 기준으로 효력이
            있습니다. 변경 후에도 사이트를 계속 이용하면 변경된 약관에 동의한
            것으로 볼 수 있습니다. 중요 변경이 있으면 이 페이지를 갱신합니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--ink)]">13. 문의</h2>
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
          본 문서는 일반 설명이며 법률 자문이 아닙니다. 법적 분쟁·계약이
          필요하면 자격 있는 변호사와 상담하세요.
        </p>
      </div>
    </div>
  );
}
