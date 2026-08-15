import type { Guide } from "../types";

const disclaimer =
  "ArriveUS 가이드는 일반적인 참고 정보이며 세무 자문이 아닙니다. 신분·소득 유형에 따라 신고 의무가 달라지므로 IRS 공식 안내 또는 자격을 갖춘 세무 전문가와 확인하세요.";

export const taxGuides: Guide[] = [
  {
    slug: "file-taxes",
    category: "tax",
    title: "첫 미국 세금 신고 (W-2·1099)",
    summary:
      "직장 W-2·프리랜서 1099로 처음 미국 세금을 신고할 때 준비물, Resident/Nonresident 구분, Federal·State 절차와 환급 Direct deposit까지 정리했습니다.",
    cost: "Free File 자격 시 $0 / 소프트웨어·세무사 이용 시 수십~수백 달러+",
    methods: ["IRS Free File", "세금 소프트웨어", "세무사·CPA·EA"],
    overview:
      "미국에서 일정 소득이 있으면 보통 매년 Federal income tax를 신고합니다. 많은 주(State)는 별도 주세도 있습니다. 직장 급여는 W-2, 부업·프리랜서는 1099 계열을 기준으로 소득을 합산합니다. 급여에서 원천징수(Withholding)가 되어도 연말 ‘신고’와 ‘환급/추가 납부’는 별개입니다. 첫 신고에서 가장 중요한 건 (1) SSN 또는 ITIN, (2) 모든 W-2/1099 수집, (3) 본인이 Resident alien인지 Nonresident alien인지 확인, (4) Federal 후 해당 시 State 신고 순서입니다. F-1/J-1 등 비자·체류일수에 따라 세무 거주 지위가 달라질 수 있어, 일반 소프트웨어가 Nonresident(Form 1040-NR)를 지원하는지 먼저 봐야 합니다. 신고 시즌은 보통 다음 해 1월 말~4월 중순이며, Extension은 제출 기한만 늘리고 납부 기한은 그대로인 경우가 많습니다.",
    requirements: [
      "SSN 또는 ITIN (없으면 먼저 SSN/ITIN 가이드 참고)",
      "모든 W-2 (직장마다 1장, 1월–2월 도착이 일반적)",
      "1099-NEC / 1099-INT / 1099-DIV 등 해당 소득 서류",
      "작년 신고서·AGI (있으면, 전자제출 본인확인에 쓰일 수 있음)",
      "주소, 부양가족 정보, 환급용 은행 Routing/Account 번호",
      "이사·이직·결혼 등 신분 변화가 있으면 관련 날짜·서류",
    ],
    steps: [
      "1월–2월에 W-2/1099가 모두 왔는지 확인합니다. 없으면 전 직장 HR·페이롤에 재발급을 요청합니다.",
      "SSN/ITIN이 있는지 확인합니다. 세금 신고는 해야 하는데 SSN이 없으면 ITIN(W-7) 경로를 검토합니다.",
      "IRS Substantial Presence Test·비자 안내로 Resident / Nonresident 신고 지위를 확인합니다. 확신이 없으면 국제세 경험이 있는 세무사에게 묻습니다.",
      "Free File 자격이 되면 IRS Free File로, 아니면 신뢰할 수 있는 소프트웨어·세무사를 고릅니다. Nonresident면 1040-NR 지원 여부를 확인합니다.",
      "Federal 신고서를 작성·제출하고, 거주 주(예: 워싱턴은 주 소득세 없음, 캘리포니아 등은 있음) State 신고 필요 여부를 확인합니다.",
      "환급은 Direct deposit로 등록하고, 낼 세금이 있으면 기한 안에 납부합니다. 제출 확인 번호와 PDF를 저장합니다.",
    ],
    links: [
      {
        label: "IRS – File your taxes",
        url: "https://www.irs.gov/filing",
      },
      {
        label: "IRS Free File",
        url: "https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free",
      },
      {
        label: "IRS – Substantial Presence Test",
        url: "https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test",
      },
      {
        label: "IRS – Form W-2",
        url: "https://www.irs.gov/forms-pubs/about-form-w-2",
      },
      {
        label: "SSN과 ITIN 가이드",
        url: "/guides/tax/itin-ssn",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "itin-ssn",
    category: "tax",
    title: "SSN과 ITIN 신청",
    summary:
      "사회보장번호(SSN)와 세금용 ITIN의 차이, 누가 무엇을 신청하는지, 은행·취업·첫 세금 신고에 어떻게 쓰이는지 기본 안내입니다.",
    cost: "신청 수수료는 보통 없음 (대행·번역·공증 이용 시 별도)",
    methods: ["SSA (SSN)", "IRS Form W-7 (ITIN)", "CAA 등 인증 대행 (해당 시)"],
    overview:
      "SSN(Social Security Number)은 근로·혜택·신용과 연결된 번호이고, ITIN(Individual Taxpayer Identification Number)은 세금 신고용 번호입니다. 합법적으로 일할 자격이 있으면 보통 SSN을 신청합니다. 세금 신고·부양가족 청구 등은 해야 하지만 SSN 자격이 없는 경우 ITIN을 검토합니다. ITIN은 근로 허가가 아니며, SSN 대신 취업에 쓸 수 없습니다. 첫 세금 신고 전에 번호가 없으면 신고·환급이 늦어질 수 있으니, W-2 시즌 전에 신청 상태를 확인하세요.",
    requirements: [
      "여권 등 신원 증명 서류",
      "비자·I-94·EAD·영주권 등 체류·근로 관련 서류 (해당 시)",
      "SSN: SS-5 및 SSA가 요구하는 증빙",
      "ITIN: Form W-7, 세금 신고서 또는 예외 사유 서류, 신원 원본/인증본",
    ],
    steps: [
      "본인이 SSN 대상인지, ITIN 대상인지 SSA/IRS 기준으로 확인합니다.",
      "SSN이면 ssa.gov 안내에 따라 온라인·우편·방문 신청을 진행합니다.",
      "ITIN이면 W-7 지침을 읽고 원본 여권 제출·CAA·해외 인증 중 가능한 방법을 고릅니다.",
      "카드·배정 통지를 받은 뒤 은행·고용주·세금 소프트웨어에 번호를 정확히 등록합니다.",
      "번호를 메신저·이메일로 보내지 말고, 분실 시 공식 재발급 절차만 사용합니다.",
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
      {
        label: "첫 미국 세금 신고 가이드",
        url: "/guides/tax/file-taxes",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
];
