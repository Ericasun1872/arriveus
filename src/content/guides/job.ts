import type { Guide } from "../types";

const disclaimer =
  "ArriveUS 가이드는 일반적인 참고 정보이며 법률·취업 알선 자문이 아닙니다. 근로 가능 여부는 본인 비자·EAD 등 공식 서류를 기준으로 확인하세요.";

export const jobGuides: Guide[] = [
  {
    slug: "resume-interview",
    category: "job",
    title: "이력서·면접 준비",
    summary:
      "미국식 Resume 작성 포인트와 면접에서 자주 나오는 질문·준비 방법을 안내합니다.",
    methods: ["온라인 지원", "LinkedIn", "추천(Referral)"],
    overview:
      "미국 이력서(Resume)는 보통 1페이지(경력에 따라 2페이지)로 간결하게 씁니다. 사진·주민등록번호·가족사항은 넣지 않는 것이 일반적입니다. 성과는 ‘무엇을 했는지’보다 ‘숫자·결과’로 보여주는 편이 유리합니다. 면접은 행동면접(Behavioral)이 많아 STAR 방식(Situation, Task, Action, Result)으로 사례를 준비하면 도움이 됩니다. 지원 전에 해당 직무에서 합법적으로 일할 수 있는지(워크 오서라이제이션)도 확인하세요.",
    requirements: [
      "영문 Resume (PDF)",
      "LinkedIn 프로필 (권장)",
      "경력·프로젝트 성과 메모",
      "추천인 연락처 (요청 시)",
      "포트폴리오/GitHub 등 (직군별)",
    ],
    steps: [
      "타겟 직무의 Job description에서 핵심 키워드를 추립니다.",
      "Resume에 경험·성과를 bullet으로 정리하고 맞춤 수정합니다.",
      "커버레터가 필요한 공고면 역할·동기·적합성을 짧게 작성합니다.",
      "면접용으로 본인 소개(1–2분)와 STAR 사례 3–5개를 준비합니다.",
      "화상 면접이면 카메라·조명·배경·이력서 사본을 미리 점검합니다.",
      "면접 후 24시간 안에 간단한 Thank-you 메일을 보냅니다.",
    ],
    links: [
      {
        label: "USA.gov – Jobs and unemployment",
        url: "https://www.usa.gov/jobs",
      },
      {
        label: "CareerOneStop – Resumes",
        url: "https://www.careeronestop.org/JobSearch/Resumes/resume-advice.aspx",
      },
    ],
    disclaimer,
  },
  {
    slug: "work-documents",
    category: "job",
    title: "근로 서류 (I-9, W-4)",
    summary:
      "입사 첫날 작성하는 I-9(고용 자격 확인)와 W-4(원천징수)의 역할과 준비물을 정리했습니다.",
    methods: ["입사 온보딩 포털", "인사팀 방문/서류 제출"],
    overview:
      "미국 회사는 신규 직원의 근로 자격을 Form I-9로 확인해야 합니다. 여권·영주권·EAD·운전면허+SSN 카드 등 Acceptable documents 조합이 정해져 있으므로, 원본을 기한 내에 제시해야 합니다. W-4는 급여에서 얼마를 Federal income tax로 원천징수할지 정하는 양식입니다. 잘못 작성하면 연말 환급이 줄거나 추가 납부가 생길 수 있어, IRS W-4 추정 도구를 참고하는 것이 좋습니다. State tax withholding 양식이 따로 있는 주도 있습니다.",
    requirements: [
      "I-9용 신분·근로 허가 원본 서류 (List A, 또는 B+C 조합)",
      "SSN",
      "입사 제안서/온보딩 안내 메일",
      "주소·은행 정보 (Direct deposit용, 별도 양식인 경우 많음)",
    ],
    steps: [
      "오퍼 수락 후 HR이 보낸 온보딩 체크리스트와 제출 기한을 확인합니다.",
      "I-9 Acceptable Documents 목록에서 본인이 준비할 조합을 고릅니다.",
      "기한 내에 I-9 Section을 작성하고 원본 서류를 제시합니다.",
      "W-4를 작성할 때 배우자 소득·부양가족·두 번째 직업을 반영합니다.",
      "주(State) withholding 양식이 있으면 함께 제출합니다.",
      "첫 급여 명세서에서 Withholding·Direct deposit가 의도대로인지 확인합니다.",
    ],
    links: [
      {
        label: "USCIS – I-9",
        url: "https://www.uscis.gov/i-9",
      },
      {
        label: "IRS – Form W-4",
        url: "https://www.irs.gov/forms-pubs/about-form-w-4",
      },
      {
        label: "IRS Tax Withholding Estimator",
        url: "https://www.irs.gov/individuals/tax-withholding-estimator",
      },
    ],
    disclaimer,
  },
];
