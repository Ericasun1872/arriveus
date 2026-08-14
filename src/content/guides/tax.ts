import type { Guide } from "../types";

const disclaimer =
  "ArriveUS 가이드는 일반적인 참고 정보이며 세무 자문이 아닙니다. 신분·소득 유형에 따라 신고 의무가 달라지므로 IRS 공식 안내 또는 자격을 갖춘 세무 전문가와 확인하세요.";

export const taxGuides: Guide[] = [
  {
    slug: "file-taxes",
    category: "tax",
    title: "세금 신고 기초",
    summary:
      "W-2, 1099, Federal/State 신고, 신고 시기 등 미국 개인 세금의 기본 개념을 정리했습니다.",
    cost: "스스로 신고 시 소프트웨어 비용 또는 세무사 수수료",
    methods: ["온라인 소프트웨어", "세무사/CPA", "IRS Free File (자격 시)"],
    overview:
      "미국에서 일정 소득이 있으면 보통 매년 Federal income tax를 신고합니다. 많은 주(State)는 별도 주세도 있습니다. 직장인이라면 고용주가 발행하는 W-2, 프리랜서·일부 부수입은 1099 계열 양식을 받게 됩니다. 급여에서 원천징수(Withholding)가 되어도 ‘신고’와 ‘환급/추가 납부’는 별개입니다. 신고 시즌은 일반적으로 다음 해 4월 중순(주말·공휴일 시 연장)이며, 연장(Extension)은 제출 기한만 늘리고 납부 기한은 그대로인 경우가 많습니다. F-1/J-1 등 비자 유형에 따라 거주자·비거주자 세무 지위가 달라질 수 있습니다.",
    requirements: [
      "SSN 또는 ITIN",
      "W-2, 1099 등 소득 서류",
      "작년 세금 신고서(있으면)",
      "부양가족·주소·은행 계좌 정보 (환급 Direct deposit용)",
      "공제·크레딧 관련 영수증 (해당 시)",
    ],
    steps: [
      "1월–2월에 W-2/1099가 도착하는지 확인하고 누락분을 요청합니다.",
      "본인이 Resident 또는 Nonresident alien 중 어떤 지위로 신고하는지 확인합니다.",
      "IRS 공식 도구·Free File 자격 또는 신뢰할 수 있는 소프트웨어/세무사를 선택합니다.",
      "Federal 신고서를 작성하고, 해당되면 State 신고도 함께 진행합니다.",
      "환급은 Direct deposit로 등록하고, 납부할 금액이 있으면 기한 내 납부합니다.",
      "제출 확인 번호와 PDF 사본을 안전하게 보관합니다.",
    ],
    links: [
      {
        label: "IRS.gov",
        url: "https://www.irs.gov/",
      },
      {
        label: "IRS – File your taxes",
        url: "https://www.irs.gov/filing",
      },
      {
        label: "IRS Free File",
        url: "https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free",
      },
    ],
    disclaimer,
  },
  {
    slug: "itin-ssn",
    category: "tax",
    title: "SSN과 ITIN",
    summary:
      "사회보장번호(SSN)와 ITIN의 차이, 누가 무엇을 신청하는지 기본 안내입니다.",
    cost: "신청 수수료는 보통 없음 (대행 서비스 이용 시 별도)",
    methods: ["SSA 방문/온라인", "ITIN은 W-7 서류 제출"],
    overview:
      "SSN(Social Security Number)은 근로·혜택·신용과 연결된 번호이고, ITIN(Individual Taxpayer Identification Number)은 세금 신고용 번호입니다. 합법적으로 일할 수 있는 자격이 있으면 보통 SSN을 신청합니다. 세금 신고는 해야 하지만 SSN 자격이 없는 경우 ITIN을 검토합니다. 두 번호를 혼동하면 은행·고용·세금에서 문제가 생길 수 있으니, 본인 비자·근로 허가 상태를 기준으로 공식 안내를 확인하세요.",
    requirements: [
      "여권 등 신원 증명 서류",
      "비자·I-94·근로 허가 관련 서류 (해당 시)",
      "SSN: SS-5 신청 요건 충족 서류",
      "ITIN: Form W-7 및 세금 신고 관련 서류 (상황별 상이)",
    ],
    steps: [
      "본인이 SSN 대상인지, ITIN 대상인지 SSA/IRS 기준으로 확인합니다.",
      "SSN이면 Social Security Administration에서 신청 방법을 따릅니다.",
      "ITIN이면 Form W-7 지침과 필요한 증빙 원본/인증본을 준비합니다.",
      "카드·통지서를 받은 뒤 은행·고용주·세금 소프트웨어에 번호를 정확히 등록합니다.",
      "번호를 이메일·메신저로 보내지 말고 안전하게 보관합니다.",
    ],
    links: [
      {
        label: "SSA – Social Security number",
        url: "https://www.ssa.gov/number-card",
      },
      {
        label: "IRS – ITIN",
        url: "https://www.irs.gov/itin",
      },
    ],
    disclaimer,
  },
];
