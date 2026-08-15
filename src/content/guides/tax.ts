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
      "SSN 또는 ITIN (없으면 SSN 신청·ITIN 가이드 참고)",
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
      "혼자 신고가 가능한 단순 W-2 케이스면 ‘혼자 세금 신고(DIY)’ 가이드를, 복잡하면 세무사를 선택합니다.",
      "Federal 신고서를 작성·제출하고, 거주 주 State 신고 필요 여부를 확인합니다.",
      "환급은 Direct deposit로 등록하고, 낼 세금이 있으면 기한 안에 납부합니다. 제출 확인 번호와 PDF를 저장합니다.",
    ],
    links: [
      {
        label: "혼자 세금 신고 (DIY) 가이드",
        url: "/guides/tax/diy-file-taxes",
      },
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
        label: "SSN 신청 절차",
        url: "/guides/tax/ssn-apply",
      },
      {
        label: "SSN과 ITIN 비교",
        url: "/guides/tax/itin-ssn",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "diy-file-taxes",
    category: "tax",
    title: "혼자 세금 신고 (DIY)",
    summary:
      "세무사 없이 IRS Free File·세금 소프트웨어로 혼자 신고할 때, 해도 되는 경우와 멈추고 전문가에게 맡기는 경우, 화면 따라가기 체크리스트입니다.",
    cost: "Free File 자격 시 $0 / 유료 소프트웨어는 플랜·주세 포함 여부에 따라 상이",
    methods: ["IRS Free File", "시중 세금 소프트웨어", "IRS Direct File (가능한 주·자격 시)"],
    overview:
      "혼자 신고(DIY)는 ‘소득이 단순하고, 본인 세무 지위가 분명할 때’ 가장 잘 맞습니다. 예를 들어 SSN이 있고, W-2 한두 장 위주이며, Resident로 Form 1040을 내는 직장인이 Free File·소프트웨어로 처리하는 경우가 많습니다. 반대로 Nonresident(1040-NR), ITIN 신규 신청, 주식·크립토·렌탈·자영업 규모가 크거나, 여러 주를 오가며 일했다면 DIY보다 세무사·EA가 안전한 경우가 많습니다. DIY의 핵심 순서는 서류 모으기 → Free File/소프트웨어 자격 확인 → Federal 작성·전자제출 → State 필요 여부 확인 → 확인번호·PDF 보관입니다. 소프트웨어가 묻는 말에 추측으로 답하지 말고, W-2 숫자를 그대로 옮기세요.",
    requirements: [
      "SSN (ITIN만 있으면 소프트웨어 지원·W-7 동시 제출 여부를 먼저 확인)",
      "모든 W-2·1099 원본 또는 PDF",
      "작년 AGI (전자 제출 본인확인용, 첫 신고면 해당 없을 수 있음)",
      "환급용 은행 Routing number / Account number",
      "배우자·부양가족 SSN/ITIN (합산 신고·부양 시)",
      "거주 주소·이전 주소 (이사한 해)",
    ],
    steps: [
      "혼자 해도 되는지 점검합니다: W-2 중심인가, Resident 1040인가, 투자·자영업·다주 근로가 거의 없는가. 아니면 세무 상담으로 전환합니다.",
      "irs.gov Free File에서 소득·나이 자격과 추천 소프트웨어를 확인합니다. 자격이 되면 유료 광고 상품과 혼동하지 마세요.",
      "소프트웨어에 W-2의 고용주 EIN, wages, federal withholding을 박스 번호대로 입력합니다.",
      "표준공제(Standard deduction) vs 항목공제, 크레딧(자녀 등) 질문이 나오면 해당될 때만 체크합니다. 모르면 ‘해당 없음’을 추측으로 바꾸지 않습니다.",
      "Federal를 e-file로 제출하고 Acceptance(수락) 메일을 확인합니다. Reject면 안내 코드를 보고 SSN·이름·AGI를 수정해 재제출합니다.",
      "주 소득세가 있는 주(CA, NY 등)면 State return을 이어서 제출합니다. 워싱턴처럼 주 소득세가 없으면 State 신고는 보통 없습니다.",
      "환급 예정일·납부 금액·제출 PDF·confirmation number를 저장합니다. IRS Where’s My Refund로 진행 상황을 확인합니다.",
    ],
    links: [
      {
        label: "IRS Free File",
        url: "https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free",
      },
      {
        label: "IRS Direct File",
        url: "https://directfile.irs.gov/",
      },
      {
        label: "Where’s My Refund",
        url: "https://www.irs.gov/refunds",
      },
      {
        label: "첫 미국 세금 신고 (개념)",
        url: "/guides/tax/file-taxes",
      },
      {
        label: "SSN 신청 절차",
        url: "/guides/tax/ssn-apply",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "ssn-apply",
    category: "tax",
    title: "소셜시큐리티 번호(SSN) 신청",
    summary:
      "Social Security Number 신청 자격, 준비 서류, SSA 온라인·방문 절차, 카드 수령 후 은행·고용주·세금 등록까지 단계별로 안내합니다.",
    cost: "신청 수수료 없음 (재발급·대행은 별도일 수 있음)",
    methods: ["ssa.gov 온라인 신청", "온라인 후 SSA 방문(서류 확인)", "USCIS 양식에서 동시 신청(해당 시)"],
    overview:
      "Social Security Number(SSN)는 미국에서의 근로, 세금, 신용, 많은 공공·금융 서비스의 기본 식별번호입니다. 합법적으로 일할 수 있는 자격이 있는 사람(시민·영주권자·특정 비자·EAD 소지자 등)이 보통 신청 대상입니다. 세금 신고만 필요하고 근로 허가가 없으면 ITIN을 검토하며, ITIN은 SSN을 대체해 취업할 수 없습니다. 신청은 Social Security Administration(SSA)에서 하며, 미국 체류 중이면 ssa.gov에서 온라인으로 신청을 시작할 수 있습니다. 안내에 따라 온라인만으로 끝나거나, 원본 서류 확인을 위해 가까운 SSA 사무소 방문이 필요할 수 있습니다. EAD·영주권(I-765/I-485) 신청 시 SSN을 함께 요청하는 방법도 있습니다. 영주권자가 시민권을 취득하면 SSN 숫자는 그대로이지만, SSA에 시민권 취득을 알려 기록을 갱신하고 필요하면 카드를 재발급받는 것이 좋습니다. N-400(귀화) 신청 때 SSA 업데이트·카드 재발급을 함께 요청할 수 있는 경우도 있습니다. 퇴직·장애 연금(일하면서 낸 세금·크레딧 기준)은 보통 근로 이력이 핵심이라 시민권만으로 금액표가 바뀌지는 않지만, SSI 등 소득·자산 기준 지원은 시민권·적격 신분 조건이 다를 수 있습니다. 카드는 보통 우편으로 오며 수 영업일이 걸릴 수 있으니, 입사·세금·귀화 일정 전에 여유를 두고 진행하세요.",
    requirements: [
      "유효한 여권 (또는 SSA가 인정하는 신원 증명)",
      "이민·체류 서류: I-94, 비자, EAD, 영주권 등 해당 원본",
      "근로 허가와 연결되는 서류 (비자 조건·I-20/DS-2019 등 해당 시)",
      "미국 내 우편 수령 가능한 주소",
      "온라인 신청용 이메일·my Social Security 계정(안내되는 경우)",
      "이미 SSN이 있는데 카드를 분실한 경우: 재발급(Replacement) 안내 별도 확인",
      "시민권 취득 후 업데이트 시: 귀화증(Certificate of Naturalization) 또는 미국 여권",
    ],
    steps: [
      "ssa.gov의 ‘Request a Social Security number for the first time’에서 온라인 신청을 시작합니다.",
      "질문에 답하면 온라인 완료인지, 사무소 방문이 필요한지 안내가 나옵니다. 방문이 필요하면 예약을 잡고 가져갈 원본 서류 목록을 확인합니다.",
      "EAD·영주권을 USCIS에 신청 중이면 양식의 SSN 동시 신청 항목도 함께 검토합니다.",
      "방문 시 여권·이민 서류 원본을 제시합니다. 직원이 추가 서류를 요청하면 기한 안에 보완합니다.",
      "승인 후 카드는 등록 주소로 우편 발송되는 경우가 많습니다(안내상 수 영업일 소요될 수 있음).",
      "카드를 받으면 이름 철자를 확인하고, 고용주·은행·세금 소프트웨어에 번호를 등록합니다. 카드 사진을 메신저로 보내지 마세요.",
      "영주권에서 시민권이 되면: N-400에서 SSA 기록·카드 업데이트를 요청했는지 확인하고, 안 했다면 귀화증·미국 여권을 준비해 SSA에 시민권 갱신·카드 재발급을 신청합니다. SSN 숫자는 바뀌지 않습니다.",
    ],
    links: [
      {
        label: "SSA – 온라인으로 처음 SSN 신청",
        url: "https://www.ssa.gov/number-card/request-number-first-time",
      },
      {
        label: "SSA – Social Security number & card",
        url: "https://www.ssa.gov/number-card",
      },
      {
        label: "SSA – 개인 정보 변경 (Personal record)",
        url: "https://www.ssa.gov/number-card",
      },
      {
        label: "SSA – Office locator",
        url: "https://www.ssa.gov/locator/",
      },
      {
        label: "SSA – Immigrants and SSN",
        url: "https://www.ssa.gov/ssnumber/immigrants.htm",
      },
      {
        label: "USCIS/SSA – 귀화·영주권 신청 시 SSN 함께 요청",
        url: "https://www.ssa.gov/ssnvisa/ebe.html",
      },
      {
        label: "USCIS – 귀화 후 SSA 업데이트 안내",
        url: "https://www.uscis.gov/newsroom/alerts/new-citizens-will-be-able-to-seamlessly-request-social-security-updates",
      },
      {
        label: "귀화(N-400) 개요",
        url: "/guides/immigration/naturalization-n400",
      },
      {
        label: "SSN과 ITIN 비교",
        url: "/guides/tax/itin-ssn",
      },
      {
        label: "입사 서류 I-9·W-4",
        url: "/guides/job/work-documents",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "itin-ssn",
    category: "tax",
    title: "SSN과 ITIN 차이",
    summary:
      "사회보장번호(SSN)와 세금용 ITIN의 차이, 누가 무엇을 쓰는지, 취업·은행·세금 신고에서의 역할을 비교합니다.",
    cost: "신청 수수료는 보통 없음 (대행·번역·공증 이용 시 별도)",
    methods: ["SSA (SSN)", "IRS Form W-7 (ITIN)"],
    overview:
      "SSN은 근로·혜택·신용과 연결된 번호이고, ITIN은 세금 신고용 번호입니다. 합법적으로 일할 자격이 있으면 보통 SSN을 신청합니다. 세금 신고는 해야 하지만 SSN 자격이 없는 경우 ITIN을 검토합니다. ITIN은 근로 허가가 아니며 I-9 취업 증명으로 쓸 수 없습니다. 상세 신청 절차는 SSN 신청 가이드와 IRS ITIN 안내를 각각 따르세요.",
    requirements: [
      "본인 비자·근로 허가 상태 파악",
      "세금 신고 필요 여부",
      "SSN 대상이면 신원·이민 원본 서류",
      "ITIN 대상이면 W-7 및 신원·세금 관련 서류",
    ],
    steps: [
      "근로 허가가 있으면 SSN 신청 가이드로 이동합니다.",
      "근로 허가 없이 세금 번호만 필요하면 IRS ITIN(W-7) 안내를 확인합니다.",
      "이미 번호가 있으면 은행·고용주·세금 신고에 같은 이름 철자로 등록합니다.",
      "두 번호를 섞어 쓰지 말고, 분실 시 공식 재발급만 사용합니다.",
    ],
    links: [
      {
        label: "SSN 신청 절차",
        url: "/guides/tax/ssn-apply",
      },
      {
        label: "IRS – ITIN",
        url: "https://www.irs.gov/itin",
      },
      {
        label: "혼자 세금 신고 (DIY)",
        url: "/guides/tax/diy-file-taxes",
      },
      {
        label: "첫 미국 세금 신고",
        url: "/guides/tax/file-taxes",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
];
