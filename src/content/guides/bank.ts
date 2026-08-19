import type { Guide } from "../types";

const disclaimer =
  "ArriveUS 가이드는 일반적인 참고 정보이며 금융·법률 자문이 아닙니다. 은행·카드사 공식 안내와 본인 신분 요건을 확인하세요.";

export const bankGuides: Guide[] = [
  {
    slug: "open-account",
    category: "bank",
    title: "은행 계좌 개설",
    summary:
      "체킹·세이빙 계좌를 처음 열 때 필요한 서류와 절차입니다. 학생·임시거주자·SSN 유무에 따른 차이는 ‘신분별 계좌 개설’ 가이드도 함께 보세요.",
    cost: "보통 무료 ~ 월 수수료 (조건 충족 시 면제 가능)",
    methods: ["지점 방문", "온라인 신청"],
    overview:
      "미국 생활의 첫 관문 중 하나가 은행 계좌입니다. 급여 입금, 월세·공과금 자동이체, 송금에 필요합니다. 대형 은행(Chase, Bank of America, Wells Fargo 등), 지역 신용조합(Credit Union), 온라인 은행 중에서 선택할 수 있습니다.\n\n학생(F-1 등)·임시거주(비자)·영주권자·시민은 받아주는 서류 조합이 은행마다 다릅니다. SSN이 없어도 ITIN, 여권+비자/I-94, 학교 서류로 개설을 받는 곳이 있으니, 방문 전 Newcomer / International student / Non-resident 정책을 확인하세요. 계좌를 열면 직불카드와 온라인 뱅킹을 함께 설정하는 것이 일반적입니다.",
    requirements: [
      "여권 등 정부 발급 사진 신분증",
      "비자·I-94·I-20(학생)·영주권 등 신분 서류 (요청 시)",
      "SSN 또는 ITIN (없어도 되는 은행·상품 있음 — 사전 확인)",
      "미국 내 주소 증명 (임대 계약서, 학교 기숙사 확인서, 공과금 고지서 등)",
      "학생인 경우: 학교 등록 증명 / Student ID (은행이 요구할 때)",
      "초기 입금 금액 (은행마다 최소 금액 상이)",
      "미국 전화번호·이메일",
    ],
    steps: [
      "본인 신분(학생/임시거주/영주 등)과 SSN 유무를 기준으로 받아주는 은행을 비교합니다.",
      "해당 은행 사이트에서 International / Student / Newcomer checking 요건을 확인합니다.",
      "지점 방문이 필요하면 예약하고, 신분증·신분 서류·주소 증명·초기 입금을 준비합니다.",
      "체킹 계좌를 개설하고, 필요하면 세이빙을 함께 엽니다.",
      "직불카드 PIN, 모바일 뱅킹, 급여 Direct Deposit 정보를 설정합니다.",
      "월 유지비 면제 조건(학생 면제, 최소 잔액, 급여 입금 등)을 메모합니다.",
    ],
    links: [
      {
        label: "CFPB – Opening a bank account",
        url: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-open-a-checking-account-en-905/",
      },
      {
        label: "ArriveUS – 신분별 계좌 개설",
        url: "/guides/bank/account-by-status",
      },
    ],
    faq: [
      {
        question: "대형 은행과 Credit Union 중 어디가 나을까요?",
        answer:
          "대형 은행은 지점·ATM이 많고, Credit Union은 수수료·금리 조건이 유리한 경우가 있습니다. 본인 신분으로 개설 가능한지, 월 유지비 면제 조건이 맞는지를 먼저 보세요.",
      },
      {
        question: "온라인만으로 개설이 되나요?",
        answer:
          "시민·영주권·SSN이 있으면 온라인 개설이 되는 상품이 많습니다. 학생·비자·SSN 없음은 지점 방문이 필요한 경우가 흔합니다.",
      },
      {
        question: "계좌를 열면 바로 신용카드도 나오나요?",
        answer:
          "보통 별도 심사입니다. 신용 이력이 없으면 체킹을 먼저 쓰고, Secured card 등으로 이력을 쌓는 경우가 많습니다.",
      },
    ],
    disclaimer,
  },
  {
    slug: "account-by-status",
    category: "bank",
    title: "신분별 계좌 개설 (학생·임시거주 등)",
    summary:
      "유학생, 임시 비자 거주자, SSN이 아직 없는 경우 등 상황별로 자주 필요한 서류와 팁을 나눠 정리했습니다.",
    cost: "상품·은행에 따라 상이 (학생 수수료 면제 상품 있음)",
    methods: ["학생 계좌", "Newcomer 계좌", "ITIN·무SSN 개설"],
    overview:
      "같은 ‘계좌 개설’이라도 신분에 따라 심사가 달라집니다.\n\n• 유학생(F-1/J-1 등): 여권, 비자, I-20/DS-2019, I-94, 학교 ID·등록 증명을 준비하는 경우가 많습니다. 캠퍼스 안·근처 은행이나 Student checking을 찾아보세요. SSN은 캠퍼스 잡·OPT 전이면 아직 없을 수 있어, SSN 없이 개설 가능한지 반드시 묻습니다.\n\n• 임시거주자(H-1B, L, E, O 등 근로·동반 비자): 여권, 비자, I-94, EAD(해당 시), 고용 오퍼/Pay stub, SSN(발급됐다면)을 준비합니다. 급여 Direct Deposit을 넣을 은행을 고르면 이후 신용카드·수수료 면제에 유리한 경우가 있습니다.\n\n• 영주권자(Green card): 여권 또는 영주권 카드, SSN, 주소 증명이 일반적인 조합입니다.\n\n• SSN 없음 / ITIN만 있음: 은행마다 정책이 크게 다릅니다. ITIN, 여권, 비자, 주소 증명으로 받아주는 곳과 거절하는 곳이 있으니 전화·채팅으로 먼저 확인하세요. 개설 후 SSN을 받으면 은행에 업데이트합니다.\n\n어떤 경우든 ‘이 지점에서 내 비자로 계좌 개설이 가능한지’를 방문 전에 확인하는 것이 시간을 아끼는 방법입니다.",
    requirements: [
      "공통: 여권(사진 신분증), 미국 주소·전화·이메일",
      "학생: I-20 또는 DS-2019, 비자, I-94, 학생증/등록 증명",
      "임시 근로·동반 비자: 비자, I-94, 고용/체류 관련 서류, SSN(있으면)",
      "영주권자: Green card 또는 여권, SSN, 주소 증명",
      "SSN 없음: 은행이 인정하는 대체 서류 목록 사전 확인 (ITIN, 여권+비자 등)",
      "주소 증명: 임대차, 학교 기숙사 레터, 공과금, 은행이 인정하는 우편물",
    ],
    steps: [
      "본인 신분 유형(학생 / 임시비자 / 영주 / SSN 유무)을 정합니다.",
      "2–3개 은행에 ‘International student’ 또는 ‘No SSN’ 개설 가능 여부를 문의합니다.",
      "해당 은행이 요구하는 서류 체크리스트를 받아 원본을 준비합니다.",
      "지점 예약 후 서류를 제출하고 체킹 계좌를 개설합니다.",
      "학생이면 수수료 면제·캠퍼스 ATM 조건을 확인합니다.",
      "SSN을 나중에 받으면 은행에 번호 업데이트와 Direct Deposit·세금 서류를 맞춥니다.",
      "개설이 거절되면 거절 사유를 확인하고 신용조합·다른 은행을 시도합니다.",
    ],
    links: [
      {
        label: "CFPB – Opening a bank account",
        url: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-open-a-checking-account-en-905/",
      },
      {
        label: "SSA – International students and SSN",
        url: "https://www.ssa.gov/pubs/EN-05-10181.pdf",
      },
      {
        label: "ArriveUS – 은행 계좌 개설",
        url: "/guides/bank/open-account",
      },
      {
        label: "ArriveUS – SSN과 ITIN",
        url: "/guides/tax/itin-ssn",
      },
    ],
    disclaimer,
  },
  {
    slug: "first-credit-card",
    category: "bank",
    title: "첫 신용카드 만들기",
    summary:
      "은행에서 처음 신용카드(또는 Secured card)를 신청하는 절차, 준비물, 거절됐을 때 대안을 단계별로 안내합니다.",
    cost: "연회비 $0부터 / Secured card는 보증금 별도",
    methods: ["은행 지점", "은행 앱·온라인", "Secured card"],
    overview:
      "미국에 막 오면 신용 기록이 없어 일반 신용카드 승인이 어려울 수 있습니다. 이때 많은 사람들이 거래 은행에서 Secured credit card(보증금을 담보로 한도를 주는 카드)나 신규 거주자·학생용 카드로 시작합니다. 은행 체킹 계좌를 먼저 만들고 급여 Direct Deposit을 넣으면 같은 은행 카드 심사에 도움이 되는 경우가 있습니다. 신청은 Hard inquiry(신용 조회)가 발생할 수 있으니, 짧은 기간에 여러 장을 한꺼번에 신청하지 않는 편이 좋습니다.",
    requirements: [
      "정부 발급 사진 신분증 (여권 등)",
      "SSN 또는 ITIN (발급사·상품에 따라 상이)",
      "미국 주소·연락처",
      "체킹 계좌 (같은 은행 상품인 경우 거의 필요)",
      "Secured card라면 보증금 (예: $200–$500대, 상품마다 다름)",
      "소득 정보 (신청서에 기입)",
    ],
    steps: [
      "주거래 은행 앱·지점에서 ‘Credit cards’ / ‘Secured credit card’ 상품을 찾습니다.",
      "연회비, 보증금, 한도, 해외 수수료, 승인 조건을 비교합니다.",
      "온라인 또는 지점에서 신청서를 작성합니다. (이름·주소·SSN/ITIN·소득)",
      "Secured card면 보증금을 입금하고 한도 활성화를 확인합니다.",
      "카드가 오면 앱에 등록하고, Autopay(전액 또는 최소)와 결제일을 설정합니다.",
      "처음 1–2개월은 소액 고정비(구독·주유)만 쓰고 명세서 전에 전액 상환하는 습관을 만듭니다.",
      "거절되면 사유를 확인하고, 계좌 이용 실적을 쌓은 뒤 재신청하거나 Authorized user 옵션을 검토합니다.",
    ],
    links: [
      {
        label: "CFPB – Credit cards",
        url: "https://www.consumerfinance.gov/consumer-tools/credit-cards/",
      },
      {
        label: "CFPB – Secured card로 신용 쌓기",
        url: "https://www.consumerfinance.gov/ask-cfpb/what-are-some-ways-to-start-or-rebuild-a-good-credit-history-en-2155/",
      },
      {
        label: "ArriveUS – 신용 점수 올리기",
        url: "/guides/bank/credit-build",
      },
    ],
    disclaimer,
  },
  {
    slug: "credit-build",
    category: "bank",
    title: "신용 점수 올리기",
    summary:
      "신용 점수(FICO 등)에 영향을 주는 요소와, 입국 초보가 점수를 차근차근 올리는 실천 방법을 정리했습니다.",
    cost: "카드 연회비·이자에 따라 상이 (이자 없이 쓰는 것이 목표)",
    methods: ["제때 납부", "한도 대비 사용률", "오래된 계정 유지"],
    overview:
      "신용 점수는 보통 납부 이력, 이용률(한도 대비 잔액), 신용 기간, 신규 조회, 신용 구성 등의 영향을 받습니다. 초보에게 가장 중요한 것은 (1) 한 번도 연체하지 않기 (2) 한도의 약 30% 아래, 가능하면 10% 전후로 쓰기 (3) 이자가 붙기 전에 전액 상환입니다. 점수 앱(Credit Karma 등)과 실제 대출·카드 심사 점수는 다를 수 있으니, 연 1회 AnnualCreditReport.com에서 무료 리포트도 확인하세요. 점수를 빨리 올리겠다고 카드를 많이 만들거나 현금 서비스를 쓰는 방식은 오히려 해가 될 수 있습니다.",
    requirements: [
      "신용카드 또는 신용이 보고되는 계정 (Secured card 포함)",
      "SSN/ITIN (리포트·점수 확인에 필요한 경우)",
      "모바일 뱅킹·카드 앱 (잔액·결제일 알림)",
    ],
    steps: [
      "모든 카드·청구서에 Autopay 또는 납부 알림을 설정해 연체를 0으로 만듭니다.",
      "한도 대비 사용률을 낮춥니다. (가능하면 30% 미만, 이상적으로 10% 전후)",
      "명세서 마감 전에 잔액을 갚아 ‘높은 잔액이 보고되는’ 상황을 줄입니다.",
      "불필요한 신규 카드 신청·하드 조회를 줄입니다.",
      "오래된 계정을 함부로 해지하지 않습니다. (평균 신용 기간에 영향)",
      "3–6개월마다 점수가 오르는지 확인하고, 기록이 쌓이면 한도 상향 또는 Unsecured 카드로 전환을 요청합니다.",
      "리포트에 오류가 있으면 해당 신용기관에 dispute를 검토합니다.",
    ],
    links: [
      {
        label: "CFPB – Credit scores",
        url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-score-en-315/",
      },
      {
        label: "CFPB – How to improve your credit score",
        url: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-and-keep-a-good-credit-score-en-318/",
      },
      {
        label: "AnnualCreditReport.com (무료 리포트)",
        url: "https://www.annualcreditreport.com/",
      },
      {
        label: "ArriveUS – 첫 신용카드 만들기",
        url: "/guides/bank/first-credit-card",
      },
    ],
    disclaimer,
  },
  {
    slug: "direct-deposit",
    category: "bank",
    title: "급여 자동입금 (Direct Deposit)",
    summary:
      "직장 급여를 체킹 계좌로 받는 Direct Deposit 설정 방법과 routing/account number 확인법을 정리했습니다.",
    cost: "보통 무료",
    methods: ["회사 HR/페이롤", "은행 앱에서 계좌 정보 확인"],
    overview:
      "미국에서는 급여를 수표 대신 Direct Deposit으로 받는 경우가 많습니다. 회사에 Routing number와 Account number를 제출하면 급여일에 체킹 계좌로 입금됩니다. 숫자만 틀려도 입금이 늦어질 수 있으니, 은행 앱·수표책·deposit slip에서 정확히 복사하세요. 첫 급여 전에는 페이롤에 등록이 반영됐는지, 입금 예정일을 확인하는 것이 좋습니다.",
    requirements: [
      "미국 체킹 계좌",
      "Bank routing number (9자리)",
      "Account number",
      "회사 Direct Deposit 양식 또는 HR 포털 접근",
      "신분증 (인사팀이 요청하는 경우)",
    ],
    steps: [
      "은행 앱·온라인 뱅킹에서 Direct Deposit 정보(routing/account)를 확인합니다.",
      "회사 HR/페이롤 양식에 은행명, 계좌 종류(Checking), 번호를 정확히 기입합니다.",
      "가능하면 voided check 또는 은행 발급 Direct Deposit form을 첨부합니다.",
      "제출 후 페이롤에 반영일과 첫 입금 예정일을 확인합니다.",
      "첫 급여 명세서(Pay stub)에서 Net pay와 입금 금액을 대조합니다.",
      "이직·계좌 변경 시 새 Direct Deposit을 바로 업데이트합니다.",
    ],
    links: [
      {
        label: "CFPB – Direct deposit",
        url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-direct-deposit-en-1021/",
      },
      {
        label: "CFPB – Opening a bank account",
        url: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-open-a-checking-account-en-905/",
      },
    ],
    disclaimer,
  },
  {
    slug: "send-money",
    category: "bank",
    title: "송금 (한국↔미국)",
    summary:
      "미국 계좌에서 한국으로, 또는 한국에서 미국으로 돈을 보낼 때 알아둘 수수료·환율·소요 시간 기본 안내입니다.",
    cost: "은행 전신환·앱 송금·수수료/환율에 따라 상이",
    methods: ["은행 Wire", "송금 앱/서비스", "은행 간 ACH (미국 내)"],
    overview:
      "미국 안에서 다른 계좌로 보낼 때는 Zelle·ACH가 흔하고, 한국으로 보낼 때는 은행 Wire 또는 송금 전문 서비스를 비교하는 경우가 많습니다. 보이는 수수료만 보지 말고 환율(spread)과 도착 통화(USD/KRW), 수취인 정보(영문 이름, 계좌, 은행 코드)를 확인하세요. 큰 금액은 은행이 추가 확인을 요청할 수 있고, 사기 계좌로 보내는 거래는 되돌리기 어려우니 수취 정보를 재확인하세요.",
    requirements: [
      "본인 미국 은행 계좌 또는 송금 앱 계정",
      "수취인 영문 이름 (여권과 동일하게)",
      "수취 은행명·계좌번호·은행 코드(예: SWIFT)",
      "송금 목적·관계 설명 (은행이 묻는 경우)",
      "신분증 (한도·보안 확인 시)",
    ],
    steps: [
      "보낼 금액·통화·희망 도착일을 정하고 은행 Wire와 송금 앱의 총비용(수수료+환율)을 비교합니다.",
      "수취인 정보를 영문으로 정확히 받아 두 번 확인합니다.",
      "앱/은행에서 송금을 신청하고 한도·예상 도착 시간을 확인합니다.",
      "송금 확인증(Reference number)을 저장합니다.",
      "도착 여부를 수취인과 확인하고, 문제 시 해당 서비스 고객센터에 문의합니다.",
    ],
    links: [
      {
        label: "CFPB – 해외 송금 권리 (Remittance)",
        url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-remittance-transfer-and-what-are-my-rights-en-1161/",
      },
      {
        label: "CFPB – Send money abroad",
        url: "https://www.consumerfinance.gov/consumer-tools/money-transfers/send-money-abroad-with-more-confidence/",
      },
      {
        label: "CFPB – Money transfers",
        url: "https://www.consumerfinance.gov/consumer-tools/money-transfers/",
      },
    ],
    disclaimer,
  },
  {
    slug: "debit-overdraft",
    category: "bank",
    title: "직불카드·오버드래프트",
    summary:
      "Debit card 사용, ATM 수수료, 잔액 부족(Overdraft) 수수료를 피하는 기본 습관을 안내합니다.",
    cost: "ATM·오버드래프트 수수료는 은행마다 상이",
    methods: ["같은 은행 ATM", "잔액 알림", "오버드래프트 옵트아웃"],
    overview:
      "직불카드는 계좌 잔액에서 바로 빠져나가므로 신용 점수와는 별개입니다. 다른 은행 ATM을 쓰면 수수료가 두 번 붙는 경우가 있습니다. 잔액이 부족한데 결제가 되면 Overdraft fee가 클 수 있어, 은행 앱에서 잔액 알림을 켜고 불필요한 overdraft protection은 끄거나(opt out) 조건을 확인하세요. PIN·카드를 분실하면 앱에서 즉시 lock/report하는 것이 중요합니다.",
    requirements: [
      "체킹 계좌와 직불카드",
      "모바일 뱅킹 앱 로그인",
      "카드 분실 시 연락할 은행 고객센터 번호",
    ],
    steps: [
      "같은 은행·네트워크 ATM을 우선 사용하고, out-of-network 수수료를 확인합니다.",
      "잔액·거래 알림(push/SMS)을 켭니다.",
      "Overdraft 설정(opt in/out)과 수수료 정책을 은행 앱에서 확인합니다.",
      "정기 결제는 급여일 이후에 맞춰 잔액 부족을 줄입니다.",
      "카드를 분실·도난당하면 즉시 잠그고 재발급을 요청합니다.",
    ],
    links: [
      {
        label: "CFPB – Overdraft options",
        url: "https://www.consumerfinance.gov/consumer-tools/bank-accounts/know-your-overdraft-options/",
      },
      {
        label: "CFPB – Debit cards",
        url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debit-card-en-76/",
      },
    ],
    disclaimer,
  },
];
