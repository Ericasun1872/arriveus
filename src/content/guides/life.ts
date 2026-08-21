import type { Guide } from "../types";

const disclaimer =
  "ArriveUS 가이드는 일반적인 참고 정보이며 법률·복지·교육·영사 자문이 아닙니다. 자격·신청 방법·연락처는 주·시·학교·공식 기관에서 최종 확인하세요. 신분·소득에 따라 혜택 자격이 달라질 수 있습니다.";

export const lifeGuides: Guide[] = [
  {
    slug: "first-week",
    category: "life",
    title: "도착 첫 7일 체크리스트",
    summary:
      "미국에 막 도착했을 때 전화번호·주소·은행·보험·학교·응급까지, 첫 주에 손대면 좋은 순서를 한곳에 모았습니다.",
    cost: "항목마다 다름 (휴대폰·보증금·보험료 등)",
    methods: ["우선순위 체크리스트", "관련 ArriveUS 가이드로 이어가기"],
    overview:
      "첫 주는 ‘모든 것을 완벽하게’보다, 연락·거처·돈·신분 서류를 안정시키는 것이 중요합니다. 흔한 순서는 (1) 미국 전화번호, (2) 임시·정식 주소와 우편, (3) 은행 계좌·송금 경로, (4) SSN/ITIN·근로·학교 서류 파악, (5) 건강보험·응급 연락처, (6) 자녀가 있으면 학교·보육 문의, (7) 거주 주 DMV·대중교통입니다. 비자·체류 신분에 따라 할 수 있는 일과 시기가 다르니, 이민 관련은 이민국 가이드·변호사와 구분해 보세요. 아래 체크리스트와 링크는 전국 공통 흐름이며, 주·도시마다 세부 절차는 달라집니다.",
    requirements: [
      "여권·비자·I-94 등 입국·체류 서류",
      "거주(또는 임시) 주소와 연락 가능한 이메일",
      "비상 연락처(가족·지인) 메모",
      "예산: 휴대폰·교통·보증금·식비",
    ],
    steps: [
      "미국 번호를 만듭니다. prepaid SIM·eSIM 또는 통신사 플랜을 비교하고, 은행·병원·학교 연락에 쓸 번호를 확보합니다 → ‘미국 전화번호·휴대폰’ 가이드.",
      "잠자리와 주소를 정리합니다. 단기 숙소라도 우편·배달·공문서용 주소를 적어 두고, 곧 임대할 계획이면 주거 가이드를 봅니다.",
      "은행 계좌와 송금 방법을 준비합니다. SSN 전후 가능한 은행을 확인하고, 한국 송금·카드 수수료를 비교합니다 → 은행 카테고리.",
      "SSN·ITIN·근로 서류가 필요한지 파악합니다. 취업·세금·학교 요청에 따라 신청 시기가 달라집니다 → 세금·취업 가이드.",
      "의료 보험·가까운 병원·응급(911) 번호를 저장합니다. 보험이 없어도 ER·Urgent Care 차이를 알아 둡니다 → 의료·응급 가이드.",
      "자녀가 있으면 학군·등록·예방접종·보육을 학교·district에 문의합니다 → ‘학교·자녀·보육’ 가이드.",
      "영어 수업(ESL)·한인 커뮤니티·영사관 연락처를 북마크합니다. 혼자 모든 서류를 처리하지 않아도 됩니다.",
    ],
    links: [
      {
        label: "미국 전화번호·휴대폰",
        url: "/guides/life/phone-sim",
      },
      {
        label: "학교·자녀·보육",
        url: "/guides/life/school-kids",
      },
      {
        label: "ESL·영어 공부",
        url: "/guides/life/esl-english",
      },
      {
        label: "공공 혜택 (SNAP·WIC 등)",
        url: "/guides/life/public-benefits",
      },
      {
        label: "911·응급·재난",
        url: "/guides/life/emergency-911",
      },
      {
        label: "영사관·한인 커뮤니티",
        url: "/guides/life/korean-community",
      },
      {
        label: "은행 계좌 개설",
        url: "/guides/bank/open-account",
      },
      {
        label: "아파트 임대",
        url: "/guides/housing/rent-apartment",
      },
      {
        label: "건강보험 기본",
        url: "/guides/medical/health-insurance",
      },
      {
        label: "주별 DMV",
        url: "/guides/dmv/states",
      },
      {
        label: "SSN 신청",
        url: "/guides/tax/ssn-apply",
      },
      {
        label: "주소·우편",
        url: "/guides/life/address-mail",
      },
      {
        label: "대중교통",
        url: "/guides/life/public-transit",
      },
      {
        label: "USA.gov – Benefit finder",
        url: "https://www.usa.gov/benefit-finder",
      },
    ],
    faq: [
      {
        question: "첫날에 꼭 해야 할 일은?",
        answer:
          "미국 번호와 잠자리·비상 연락처를 확보하는 것이 우선입니다. 나머지는 며칠에 나누어 진행해도 됩니다.",
      },
      {
        question: "주마다 순서가 다른가요?",
        answer:
          "큰 흐름은 비슷하지만 DMV·학교·복지 신청은 주·카운티 규칙이 다릅니다. 거주 지역 공식 사이트와 ArriveUS 주별·주제 가이드를 함께 보세요.",
      },
      {
        question: "SSN이 없어도 첫 주를 시작할 수 있나요?",
        answer:
          "네. 전화번호·임시 주소·일부 은행·prepaid 통신은 SSN 전에도 가능한 경우가 많습니다. 취업·세금용 SSN/ITIN은 필요 시점에 세금 가이드를 보세요.",
      },
      {
        question: "체크리스트를 다 못 끝내면요?",
        answer:
          "괜찮습니다. 연락·거처·돈·응급 경로만 먼저 잡고, 학교·DMV·보험은 여유 날 이어서 진행하세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "phone-sim",
    category: "life",
    title: "미국 전화번호·휴대폰",
    summary:
      "도착 직후 prepaid SIM·eSIM·월정액 플랜 고르는 법과, 저소득 전화 할인(Lifeline) 공식 안내를 정리했습니다.",
    cost: "prepaid SIM/eSIM 수십 달러대부터 / 월정액·기기 할부는 통신사마다 다름",
    methods: [
      "공항·마트 prepaid SIM",
      "eSIM 온라인 개통",
      "주요 통신사 매장·온라인 플랜",
      "Lifeline 할인 (자격 해당 시)",
    ],
    overview:
      "미국에서는 은행·임대·병원·학교·배달 앱이 미국 휴대폰 번호를 요구하는 경우가 많습니다. 단기는 prepaid(선불) SIM·eSIM으로 번호를 먼저 만들고, 장기 거주·가족 요금제가 필요하면 postpaid(월정액)로 옮기는 식이 흔합니다. 여권만으로 prepaid를 파는 곳도 있고, 크레딧 조회가 필요한 플랜도 있습니다. ‘무료 폰+무제한’을  Mir고 보증금·신원 도용을 요구하는 광고는 경계하세요. 소득이 낮거나 SNAP·Medicaid 등을 받으면 FCC Lifeline으로 전화·인터넷 월 요금 할인을 받을 수 있는지 USA.gov·USAC에서 확인하세요. 911은 유심이 없어도 많은 휴대폰에서 긴급 통화가 되지만, 일상 연락용 번호는 따로 준비하는 것이 안전합니다.",
    requirements: [
      "잠금 해제(Unlocked) 휴대폰 또는 새 기기",
      "여권·신분 서류 (매장·통신사 정책에 따라)",
      "결제 카드 또는 현금",
      "거주·임시 주소·이메일",
    ],
    steps: [
      "단기로 쓸지, 1년 이상 쓸지 정합니다. 관광·초기 정착은 prepaid/eSIM, 장기·가족은 월정액 비교가 유리한 경우가 많습니다.",
      "기기가 Unlocked인지 확인합니다. 한국에서 가져온 폰은 통신사 잠금·대역(band) 호환을 확인하세요.",
      "데이터·통화·문자 필요량을 대략 정한 뒤, 공항·마트 prepaid 또는 온라인 eSIM 요금제를 비교합니다.",
      "개통 후 미국 번호로 문자·데이터·핫스팟이 되는지 바로 테스트하고, 은행·2단계 인증에 번호를 등록합니다.",
      "장기 플랜으로 바꿀 때는 계약 기간·조기 해지비·기기 할부·국제 전화·한국 로밍을 확인합니다.",
      "저소득이면 USA.gov 전화·인터넷 요금 도움과 Lifeline(USAC) 자격·신청을 확인합니다.",
    ],
    links: [
      {
        label: "USA.gov – 전화·인터넷 요금 도움",
        url: "https://www.usa.gov/help-with-phone-internet-bills",
      },
      {
        label: "FCC – Lifeline 안내",
        url: "https://www.fcc.gov/lifeline-consumers",
      },
      {
        label: "USAC – Lifeline 신청·자격",
        url: "https://www.lifelinesupport.org/",
      },
      {
        label: "도착 첫 7일 체크리스트",
        url: "/guides/life/first-week",
      },
      {
        label: "은행 계좌 개설",
        url: "/guides/bank/open-account",
      },
    ],
    faq: [
      {
        question: "SSN 없이 개통할 수 있나요?",
        answer:
          "prepaid·일부 eSIM은 여권만으로 가능한 경우가 많습니다. 월정액·기기 할부는 크레딧·SSN을 요구할 수 있어 통신사에 미리 확인하세요.",
      },
      {
        question: "Lifeline은 누구나 받나요?",
        answer:
          "아닙니다. 소득 또는 SNAP·Medicaid 등 프로그램 참여 기준이 있습니다. 가구당 혜택 제한이 있으니 공식 안내로 확인하세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "school-kids",
    category: "life",
    title: "학교·자녀·보육",
    summary:
      "공립학교 등록, 예방접종·학군, 보육(Child care)·Head Start·보육비 지원을 찾는 기본 경로입니다.",
    cost: "공립 K–12는 보통 수업료 없음 / 보육·방과후·급식비는 가구·지역마다 다름",
    methods: [
      "거주지 School district 등록",
      "Childcare.gov로 보육 검색",
      "급식·CHIP·Head Start 등 지원 확인",
    ],
    overview:
      "자녀와 함께 미국에 오면 거주지 기준 School district(학군)에 문의해 나이·학년·이전 학교 기록·예방접종(Immunization) 요건을 확인하는 것이 첫 단계입니다. 공립 K–12는 거주 증빙(임대 계약·공과금 고지서 등)이 필요한 경우가 많고, 영어가 익숙하지 않으면 ESL/ELL 지원을 요청할 수 있습니다. 미취학 자녀는 Childcare.gov에서 주·지역 보육을 찾고, 소득에 따라 보육비 지원·Head Start를 알아봅니다. 의료 보험은 CHIP·가족 Medicaid와 연결되는 경우가 있으니 의료 가이드도 함께 보세요. ‘학군 보장·비자 대행’을  Mir고 큰돈을 요구하는 업체는 피하고, 학교·district 공식 창구를 우선하세요.",
    requirements: [
      "자녀 여권·출생증명·이전 학교 성적/예방접종 기록(있으면)",
      "거주지 증빙 (임대 계약, 유틸리티 고지서 등)",
      "보호자 신분증·연락처",
      "보육이 필요하면 근무·수업 시간표와 예산",
    ],
    steps: [
      "거주 주소로 School district를 찾고, Enrollment / New student registration 페이지나 사무실에 연락합니다.",
      "필요 서류(주소·예방접종·이전 학교) 목록을 받아 준비합니다. 번역이 필요하면 학교에 문의합니다.",
      "영어 지원(ESL/ELL)·급식(Free/Reduced lunch)·특수교육 평가가 필요하면 등록 시 또는 상담에서 요청합니다.",
      "미취학·방과후 보육은 Childcare.gov에서 주·지역을 고르고, 라이선스·비용·대기 여부를 확인합니다.",
      "보육비·Head Start·학교 급식 지원 자격이 있는지 USA.gov 교육·혜택 안내와 지역 기관에 확인합니다.",
      "학교 비상 연락처·픽업 권한자·알레르기·약을 학교에 서면으로 남깁니다.",
    ],
    links: [
      {
        label: "USA.gov – Education",
        url: "https://www.usa.gov/education",
      },
      {
        label: "Childcare.gov – 보육 찾기",
        url: "https://childcare.gov/",
      },
      {
        label: "ESL·영어 공부",
        url: "/guides/life/esl-english",
      },
      {
        label: "저소득·아동 의료 보험",
        url: "/guides/medical/low-income-insurance",
      },
      {
        label: "공공 혜택 (SNAP·WIC 등)",
        url: "/guides/life/public-benefits",
      },
    ],
    faq: [
      {
        question: "주소가 정해지기 전에 등록할 수 있나요?",
        answer:
          "임시 주소·숙소로 문의하는 경우도 있으나 district마다 다릅니다. 가능 여부와 필요 서류를 학교에 먼저 확인하세요.",
      },
      {
        question: "영어를 못하면 입학이 안 되나요?",
        answer:
          "보통 공립학교는 영어 수준과 관계없이 등록을 받습니다. ESL/ELL 지원을 요청하세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "esl-english",
    category: "life",
    title: "ESL·영어 공부",
    summary:
      "무료·저비용 ESL 수업, USALearns·도서관·학군 성인 교실을 찾는 공식 경로입니다.",
    cost: "공공·비영리 ESL은 무료·저비용인 경우가 많음 / 사설학원은 별도",
    methods: [
      "USA.gov Learn English",
      "USALearns 온라인",
      "도서관·학군·커뮤니티칼리지 ESL",
    ],
    overview:
      "정착 초기에는 ‘완벽한 영어’보다 병원·학교·은행·직장에서 쓸 문장과 듣기 연습이 실용적입니다. USA.gov는 무료·저비용 ESL과 USALearns 등 온라인 자료를 안내합니다. 지역 공공도서관, 한인회·교회, School district 성인 ESL, 커뮤니티 칼리지 비학점 과정이 흔한 입구입니다. 자녀 학교에 성인 ESL을 물어보는 것도 방법입니다. 유료 학원·‘취업 보장’ 영어 코스는 환불·스케줄을 계약서로 확인하세요. ArriveUS 가이드의 주제별 영어 문구는 현장 대화용 보조이고, 체계적 학습은 ESL 수업과 병행하는 편이 좋습니다.",
    requirements: [
      "가능한 요일·시간 (주간/야간)",
      "교통 수단·온라인 수업 가능 여부",
      "현재 영어 수준 대략 파악 (초급·회화·취업)",
    ],
    steps: [
      "USA.gov ‘Learn English’에서 온라인·대면 프로그램 안내를 확인합니다.",
      "USALearns 등으로 집에서 기초 듣기·읽기를 시작합니다.",
      "거주지 도서관·학군·커뮤니티 칼리지에 Adult ESL / English classes를 검색·문의합니다.",
      "자녀가 있으면 학교 직원에게 학부모 ESL·통역 서비스를 요청합니다.",
      "목표를 정합니다. 일상 회화, 운전 시험 영어, 취업 면접 등 우선순위에 맞춰 수업을 고릅니다.",
      "ArriveUS 은행·의료·취업 가이드의 영어 문구로 실제 방문 전에 연습합니다.",
    ],
    links: [
      {
        label: "USA.gov – Learn English",
        url: "https://www.usa.gov/learn-english",
      },
      {
        label: "USALearns",
        url: "https://www.usalearns.org/",
      },
      {
        label: "도착 첫 7일 체크리스트",
        url: "/guides/life/first-week",
      },
      {
        label: "학교·자녀·보육",
        url: "/guides/life/school-kids",
      },
    ],
    faq: [
      {
        question: "무료 수업만으로 충분한가요?",
        answer:
          "기초·생활 영어에는 도서관·학군 ESL이 충분한 경우가 많습니다. 전문 시험·취업 영어는 추가 수업이 필요할 수 있습니다.",
      },
      {
        question: "아이만 ESL을 받나요?",
        answer:
          "자녀 ELL과 별도로 성인 ESL이 있는 지역이 많습니다. 학교·도서관에 학부모 수업을 문의하세요.",
      },
      {
        question: "온라인 수업도 있나요?",
        answer:
          "도서관·커뮤니티칼리지·비영리에서 온라인·하이브리드 ESL을 여는 경우가 있습니다. 거주 지역 공식 사이트에서 Adult education / ESL을 검색하세요.",
      },
      {
        question: "유료 학원이 더 빠른가요?",
        answer:
          "개인 목표·시간에 따라 다릅니다. 먼저 무료·저비용 공립 경로를 알아보고, 필요하면 유료 수업을 보완하세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "public-benefits",
    category: "life",
    title: "공공 혜택 (SNAP·WIC 등)",
    summary:
      "식품(SNAP)·영유아(WIC)·실업·혜택 찾기(Benefit finder) 등 공식 창구로 자격과 신청을 확인하는 안내입니다.",
    cost: "신청 수수료는 보통 없음 / 자격·지급액은 주·가구 소득에 따라 다름",
    methods: [
      "USA.gov Benefit finder",
      "주 SNAP·WIC 사무소",
      "실업(Unemployment) 주 기관",
    ],
    overview:
      "소득·가구 규모·체류 자격에 따라 식품(SNAP, 예전 Food stamps), 임산부·영유아 영양(WIC), 학교 급식, 실업 급여, 전화 Lifeline 등 공공 지원을 받을 수 있는 경우가 있습니다. 자격은 연방 틀 안에서 주·카운티가 운영하므로, 반드시 거주 주 공식 신청 페이지나 사무소를 이용하세요. USA.gov Benefit finder로 상황별 혜택 목록을 훑어본 뒤, SNAP·WIC·실업은 각 안내에서 신청합니다. ‘복지 대행비 선입금’, ‘서류만 내면 무조건 승인’ 광고는 사기 위험이 큽니다. 이민 신분에 따른 자격 제한이 있을 수 있어, 불확실하면 공인 법률·복지 상담 창구에 확인하세요. ArriveUS는 신청 대행을 하지 않습니다.",
    requirements: [
      "신분증·거주 주소 증빙",
      "소득·자산·가구원 정보 (요청 시)",
      "SSN/ITIN 등 주가 요구하는 번호 (해당 시)",
      "실업 신청 시 이전 직장·급여 정보",
    ],
    steps: [
      "USA.gov Benefit finder에서 상황(식품·가족·실업 등)에 맞는 혜택 후보를 확인합니다.",
      "식품이 필요하면 USA.gov Food help·SNAP 안내로 주 사무소·온라인 신청을 찾습니다.",
      "임산부·5세 미만 자녀가 있으면 WIC 안내(식품 도움 허브)를 확인합니다.",
      "실직했다면 일했던 주의 Unemployment 페이지에서 자격·신청 방법을 확인합니다.",
      "승인 후 EBT·카드·재인증(Recertification) 일정을 캘린더에 넣고, 사기 문자·전화에 개인정보를 주지 않습니다.",
      "전화·인터넷 요금이 부담되면 Lifeline(전화 가이드)도 함께 검토합니다.",
    ],
    links: [
      {
        label: "USA.gov – Benefit finder",
        url: "https://www.usa.gov/benefit-finder",
      },
      {
        label: "USA.gov – Food assistance (SNAP·WIC 등)",
        url: "https://www.usa.gov/food-help",
      },
      {
        label: "USA.gov – SNAP (Food stamps)",
        url: "https://www.usa.gov/food-stamps",
      },
      {
        label: "USA.gov – Unemployment",
        url: "https://www.usa.gov/unemployment",
      },
      {
        label: "미국 전화번호·Lifeline",
        url: "/guides/life/phone-sim",
      },
      {
        label: "저소득 의료 보험",
        url: "/guides/medical/low-income-insurance",
      },
    ],
    faq: [
      {
        question: "영주권·시민만 신청할 수 있나요?",
        answer:
          "프로그램·주마다 다릅니다. 일부는 특정 체류 자격이 필요하고, 자녀만 해당되는 경우도 있습니다. 공식 자격 안내를 확인하세요.",
      },
      {
        question: "대행업체에 맡기면 빠른가요?",
        answer:
          "공식 신청은 본인·가구가 직접 하는 것이 안전합니다. 선입금 대행·보장성 광고는 피하세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "emergency-911",
    category: "life",
    title: "911·응급·재난",
    summary:
      "생명이 위급할 때 911, 경찰·화재·의료 응급 구분, Ready.gov 재난 대비 기본을 안내합니다.",
    cost: "911 통화 자체 비용보다 출동·병원비·보험 적용이 이슈 / 앰뷸런스·ER 비용은 보험·지역마다 다름",
    methods: ["911", "비응급 경찰 번호", "Ready.gov·FEMA 앱 알림"],
    overview:
      "미국에서 생명·안전이 위급한 화재·범죄·의료 응급에는 911을 겁니다. 영어가 서툴러도 ‘Emergency’, 주소, 무슨 일인지 짧게 말하면 됩니다. 통역을 요청할 수 있는 지역도 많습니다. 단순 소음·주차·분실물처럼 급하지 않으면 시의 non-emergency police 번호를 쓰는 편이 낫습니다. 자연재해·정전·대피 경보는 Ready.gov와 지역 비상 알림·FEMA 앱으로 미리 알아 둡니다. 병원비·보험 청구는 의료 가이드를, 임금·노동 위험은 Worker.gov를 참고하세요. 가짜 ‘경찰·ICE 사칭’ 전화에 돈·SSN을 보내지 마세요.",
    requirements: [
      "현재 주소·교차로를 영어로 말할 수 있게 메모",
      "가족 비상 연락처",
      "보험 카드·복용 약 목록 (의료 응급 시)",
      "지역 non-emergency 번호 저장 (시 웹사이트)",
    ],
    steps: [
      "위급하면 911에 전화하고, 위치·상황을 짧게 말합니다. 지시에 따라 통화를 유지합니다.",
      "의료 응급이면 앰뷸런스·ER 여부를 안내받습니다. 가능하면 보험 카드와 약 목록을 챙깁니다.",
      "급하지 않은 경찰 민원은 시·카운티 non-emergency 번호를 검색해 이용합니다.",
      "Ready.gov에서 거주지 재해 유형·대피·비상 가방·문서 보관을 확인합니다.",
      "휴대폰에 비상 연락처·의료 정보를 등록하고, 가족 집합 장소를 정해 둡니다.",
      "사고·범죄 피해 후 보험·병원비·신고 서류가 필요하면 관련 ArriveUS 의료·주거 가이드와 공식 기관을 따릅니다.",
    ],
    links: [
      {
        label: "Ready.gov – 재난·응급 대비",
        url: "https://www.ready.gov/be-informed",
      },
      {
        label: "Ready.gov 홈",
        url: "https://www.ready.gov/",
      },
      {
        label: "병원비·의료 청구",
        url: "/guides/medical/medical-bills",
      },
      {
        label: "영사관·한인 커뮤니티",
        url: "/guides/life/korean-community",
      },
    ],
    faq: [
      {
        question: "영어를 못해도 911을 쳐야 하나요?",
        answer:
          "위급하면 바로 걸으세요. 주소와 응급 상황을 짧게 말하고, 가능하면 interpreter를 요청합니다.",
      },
      {
        question: "앰뷸런스를 부르면 비용이 나오나요?",
        answer:
          "지역·보험에 따라 본인 부담이 있을 수 있습니다. 생명이 위급하면 비용보다 안전을 우선하고, 이후 청구서는 의료 가이드를 참고하세요.",
      },
      {
        question: "급하지 않은 일은 어디로 전화하나요?",
        answer:
          "지역 non-emergency police·시 안내 번호를 검색해 두세요. 311을 쓰는 도시도 있습니다. 위급하면 항상 911입니다.",
      },
      {
        question: "재난 경보는 어떻게 받나요?",
        answer:
          "휴대폰 Wireless Emergency Alerts와 거주 지역 비상관리·날씨 앱을 확인하세요. 대피 안내는 공식 방송·시·카운티 공지를 우선합니다.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "korean-community",
    category: "life",
    title: "영사관·한인 커뮤니티",
    summary:
      "주미 한국 공관·영사 서비스와 한인회·교회·도서관 등 지역 커뮤니티를 찾는 방법을 안내합니다.",
    cost: "영사 서비스는 업무별 수수료 / 한인회·도서관 프로그램은 무료인 경우 많음",
    methods: [
      "외교부·주미 공관 안내",
      "한인회·교회·도서관",
      "시·카운티 커뮤니티 서비스",
    ],
    overview:
      "여권·가족관계등록·재외국민 등록·긴급 사고 시 영사 조력은 관할 한국 대사관·총영사관 창구를 이용합니다. 공관 위치·예약·수수료는 외교부·해당 공관 공지를 따르세요. 일상 정착 정보는 한인회, 한인 교회·성당, 한국어 가능한 도서관 프로그램, 시 이민자 서비스가 실질적인 도움이 되는 경우가 많습니다. ‘영사관 연결 대행’, ‘보증금만 내면 서류 해결’ 같은 개인 소개는 경계하세요. ArriveUS는 특정 교회·업체를 추천하지 않으며, 공식 공관과 공공 도서관·시 서비스를 먼저 안내합니다.",
    requirements: [
      "관할 공관에 필요한 여권·신분증·예약 정보",
      "거주 도시·한인타운·도서관 위치",
      "급하면 비상 연락할 가족·지인 번호",
    ],
    steps: [
      "거주 지역을 담당하는 한국 공관(대사관·총영사관)을 외교부·공관 사이트에서 확인합니다.",
      "여권·증명서·재외국민 업무는 예약·온라인 신청 여부를 공지에서 확인한 뒤 방문합니다.",
      "사고·분실·긴급 상황이면 현지 911 등 응급 조치 후, 필요 시 공관 영사 조력을 문의합니다.",
      "일상 네트워크는 지역 한인회·도서관 한국어/ESL 프로그램·시 이민자 안내를 검색합니다.",
      "법률·이민·세금 문제는 커뮤니티 소개만으로 결정하지 말고, 라이선스 있는 전문가·공식 기관을 확인합니다.",
      "ArriveUS 생활·취업·의료 가이드와 공식 링크를 북마크해 두고, 카톡 소문과 교차 검증합니다.",
    ],
    links: [
      {
        label: "외교부 (대한민국)",
        url: "https://www.mofa.go.kr/",
      },
      {
        label: "USA.gov – Find a U.S. embassy (관련 외교 안내)",
        url: "https://www.usa.gov/find-embassy",
      },
      {
        label: "911·응급·재난",
        url: "/guides/life/emergency-911",
      },
      {
        label: "도착 첫 7일 체크리스트",
        url: "/guides/life/first-week",
      },
      {
        label: "ESL·영어 공부",
        url: "/guides/life/esl-english",
      },
    ],
    faq: [
      {
        question: "영사관이 취업·집을 알선해 주나요?",
        answer:
          "일반적으로 영사 업무(여권·증명·긴급 조력 등)가 중심입니다. 주거·취업은 지역 커뮤니티·공식 가이드를 이용하세요.",
      },
      {
        question: "한인 커뮤니티만 믿어도 되나요?",
        answer:
          "정보 수집에는 도움이 되지만, 수수료·법률·이민 약속은 반드시 공식 기관·자격 있는 전문가와 확인하세요.",
      },
      {
        question: "관할 영사관은 어떻게 찾나요?",
        answer:
          "외교부·주미 공관 사이트에서 거주 주·도시를 담당하는 대사관·총영사관을 확인하세요. 예약·수수료는 해당 공관 공지를 따릅니다.",
      },
      {
        question: "긴급 사고 때는 무엇을 먼저 하나요?",
        answer:
          "생명이 위급하면 911 등 현지 응급을 먼저 하고, 이후 필요 시 공관 영사 조력을 문의하세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "address-mail",
    category: "life",
    title: "주소·우편·USPS",
    summary:
      "미국 주소 쓰는 법, 우편함·아파트 유닛, USPS 주소 변경, 은행·USCIS·DMV에 주소 알리는 순서를 정리했습니다.",
    cost: "USPS 주소 변경 등은 무료·소액 / 사설 사서함은 별도",
    methods: ["USPS Change of Address", "단지 우편함·유닛 번호", "기관별 주소 업데이트"],
    overview:
      "미국에서는 은행·병원·학교·이민국·세금 안내가 우편으로 오는 경우가 많아, 정확한 주소(Street, Apt/Unit, City, State, ZIP)가 중요합니다. 아파트는 Unit/Apt 번호를 빠뜨리면 우편이 반송됩니다. 이사를 하면 USPS Change of Address로 우편 전달을 신청하고, 은행·보험·USCIS·SSA·DMV에는 각각 주소 변경이 필요할 수 있습니다. ‘USPS 직원’을 사칭해 개인정보를 묻는 문자·전화는 사기일 수 있으니 공식 usps.com만 이용하세요.",
    requirements: [
      "정확한 도로명 주소·유닛 번호·ZIP",
      "이사 예정일",
      "신분증 (일부 온라인 본인확인)",
    ],
    steps: [
      "현재 주소를 Street / Apt·Unit / City / State / ZIP 순으로 적어 둡니다.",
      "단지 우편함·키·택배 수령 방법을 임대인·매니저에 확인합니다.",
      "이사하면 usps.com에서 Change of Address를 신청합니다.",
      "은행·신용카드·보험·고용주·학교 주소를 업데이트합니다.",
      "USCIS·SSA·DMV 등 공문서 주소도 해당 기관 안내대로 변경합니다.",
      "중요 서류는 스캔·사진을 남기고, 사칭 문자에 링크를 누르지 않습니다.",
    ],
    links: [
      {
        label: "USPS – Change of Address",
        url: "https://www.usps.com/manage/forward.htm",
      },
      {
        label: "USPS – Avoid scams",
        url: "https://www.usps.com/help/scams.htm",
      },
      {
        label: "USCIS – Change of address",
        url: "https://www.uscis.gov/addresschange",
      },
      {
        label: "도착 첫 7일",
        url: "/guides/life/first-week",
      },
      {
        label: "유틸리티 신청",
        url: "/guides/housing/utilities-setup",
      },
    ],
    faq: [
      {
        question: "ZIP이 없으면 어떻게 하나요?",
        answer:
          "USPS ZIP Code Lookup으로 주소를 검색하거나, 임대 계약서·공과금 고지서를 확인하세요.",
      },
      {
        question: "USPS만 바꾸면 끝나나요?",
        answer:
          "우편 전달은 USPS로 돕고, 은행·USCIS·DMV 등은 각 기관에 따로 알려야 하는 경우가 많습니다.",
      },
      {
        question: "아파트 Unit 번호를 빠뜨리면요?",
        answer:
          "우편이 반송되거나 옆집으로 갈 수 있습니다. Street와 Apt/Unit을 항상 함께 적으세요.",
      },
      {
        question: "USPS 사칭 문자가 왔어요.",
        answer:
          "링크를 누르거나 개인정보를 보내지 마세요. 주소 변경·추적은 공식 usps.com만 이용하세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "public-transit",
    category: "life",
    title: "대중교통 기본",
    summary:
      "버스·지하철·통근열차 앱·카드 기본과, 주요 도시 공식 교통 사이트 찾는 방법을 안내합니다.",
    cost: "단거리 수 달러대 / 월 패스는 도시마다 다름",
    methods: ["시·카운티 교통국 앱", "교통 카드·모바일 탑승", "구글 맵·공식 trip planner"],
    overview:
      "미국 대도시는 버스·지하철·통근열차가 기관마다 나뉘어 있습니다(예: NYC MTA, LA Metro, Bay Area BART, 시카고 CTA, 시애틀 King County Metro). 보통 공식 앱이나 교통 카드(또는 휴대폰 탑승)로 요금을 내고, Google Maps·공식 trip planner로 환승을 봅니다. 야간·교외는 배차가 적을 수 있어 첫·막차와 안전을 확인하세요. 면허 전이거나 주차비가 부담되면 대중교통+도보가 현실적인 선택입니다. ArriveUS 주별 DMV 노트의 교통 링크도 함께 보세요.",
    requirements: [
      "거주·출퇴근 출발/도착지",
      "스마트폰 또는 교통 카드 구매 수단",
      "야간 이동 시 안전·대체 수단 계획",
    ],
    steps: [
      "거주지 시·카운티 이름을 넣고 ‘transit’ / ‘metro’ / ‘bus’로 공식 교통국을 검색합니다.",
      "앱 설치·교통 카드(또는 OMNY·Clipper 등 지역 시스템) 충전 방법을 확인합니다.",
      "출퇴근 경로를 앱·지도로 시험해 보고, 환승·도보 시간을 여유 있게 잡습니다.",
      "장애인·시니어·학생 할인 자격이 있으면 공식 Reduced fare 안내를 확인합니다.",
      "비상 시 택시·라이드헤일·야간 버스 대안을 메모합니다.",
    ],
    links: [
      {
        label: "주별 DMV·지역 교통 노트",
        url: "/guides/dmv/states",
      },
      {
        label: "도착 첫 7일",
        url: "/guides/life/first-week",
      },
      {
        label: "미국 전화번호·휴대폰",
        url: "/guides/life/phone-sim",
      },
    ],
    faq: [
      {
        question: "전국 공통 교통 카드가 있나요?",
        answer:
          "없습니다. 도시·지역마다 카드·앱이 다릅니다. 거주 도시 공식 교통국을 기준으로 하세요.",
      },
      {
        question: "영어 노선도를 못 읽으면요?",
        answer:
          "공식 앱의 지도·알람과 Google Maps 대중교통 모드를 함께 쓰고, 역무원·기사에게 목적지를 보여 주세요.",
      },
      {
        question: "야간에 버스가 없면요?",
        answer:
          "첫·막차와 배차 간격을 앱에서 확인하고, 택시·라이드헤일·지인 픽업 대안을 미리 적어 두세요.",
      },
      {
        question: "시니어·학생 할인이 있나요?",
        answer:
          "많은 교통국에 Reduced fare가 있습니다. 나이·학생증·장애 증명 요건은 공식 사이트를 확인하세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
];
