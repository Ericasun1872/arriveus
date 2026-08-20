import type { Guide } from "../types";
import { dmvPracticeQuestions } from "./dmv-practice";

const dmvDisclaimer =
  "ArriveUS 가이드는 일반적인 참고 정보이며 법률·공식 자문이 아닙니다. 최종 안내는 거주 주 DMV 공식 정보를 확인하세요.";

export const dmvGuides: Guide[] = [
  {
    slug: "learner-permit",
    category: "dmv",
    title: "학생·초보 운전 (Learner’s Permit)",
    summary:
      "처음 운전을 배우는 학생을 위한 Permit 신청, 보호자 동승, 연습 운전, 정식 면허까지의 단계별 안내입니다.",
    cost: "Permit·교육 비용은 주·학원마다 상이",
    methods: ["DMV 방문", "운전학원(Driver school)", "보호자 지도"],
    overview:
      "미국에서 처음 운전을 배울 때는 바로 정식 면허(Driver’s license)가 아니라 Learner’s Permit(또는 Instruction Permit)부터 시작하는 경우가 많습니다. 특히 10대는 Graduated Driver Licensing(GDL) 제도로 Permit → Provisional/중간 면허 → Full license 단계를 거칩니다. 성인 초보도 Permit으로 연습한 뒤 도로주행 시험에 응시하는 주가 있습니다. Permit 기간에는 보통 면허 있는 성인 동승, 야간 운전 제한, 휴대폰 사용 금지, 탑승 인원 제한 같은 규칙이 적용됩니다. Driver education(교실·주행 교육)이 필수인 주도 있으니 거주 주 handbook을 먼저 확인하세요.",
    requirements: [
      "거주 주 최소 연령 요건 충족 (대개 15–16세, 주마다 다름)",
      "부모/보호자 동의서 (미성년자인 경우)",
      "신분·거주지 증명 서류",
      "SSN 또는 주에서 요구하는 대체 서류",
      "시력 검사",
      "필기(지식) 시험 합격 또는 운전교육 수료 증명 (주마다 상이)",
      "연습용 차량과 유효한 자동차 보험",
    ],
    steps: [
      "거주 주 DMV Teen / New driver / Graduated licensing 페이지를 확인합니다.",
      "Driver Handbook를 읽고 필기시험을 준비합니다. (연습 문제는 ‘필기시험 연습 문제’ 가이드 참고)",
      "필요한 경우 운전학원 또는 학교 driver education에 등록합니다.",
      "DMV에서 시력·필기시험을 보고 Learner’s Permit을 받습니다.",
      "면허 있는 성인 동승 아래 규정된 연습 시간(주간/야간)을 채웁니다.",
      "대기 기간·교육 요건을 충족한 뒤 도로주행 시험을 예약·응시합니다.",
      "합격하면 Provisional 또는 Full license 발급 절차를 진행합니다.",
    ],
    links: [
      {
        label: "USA.gov – State motor vehicle services",
        url: "https://www.usa.gov/state-motor-vehicle-services",
      },
      {
        label: "NHTSA – Teen driving",
        url: "https://www.nhtsa.gov/road-safety/teen-driving",
      },
    ],
    disclaimer: dmvDisclaimer,
  },
  {
    slug: "written-test",
    category: "dmv",
    title: "필기시험 연습 문제",
    summary:
      "운전면허·Permit 필기(지식) 시험에서 자주 나오는 유형의 연습 문제입니다. 채점과 해설을 제공합니다.",
    cost: "연습은 무료 (실제 시험 응시료는 주마다 상이)",
    methods: ["온라인 연습", "Driver Handbook 학습"],
    overview:
      "필기시험(Knowledge / Written test)은 도로 표지, 우선권, 속도, 음주운전, 학교 구역 등 규칙을 확인합니다. 문제 수·합격 점수·언어(영어 외 선택)는 주마다 다릅니다. 아래 연습 문제는 공통적으로 자주 나오는 유형이며 실제 시험 문제와 동일하지 않습니다. 반드시 거주 주 Driver Handbook와 공식 practice test를 함께 보세요.",
    requirements: [
      "거주 주 Driver Handbook (PDF/앱)",
      "필기시험 예약 또는 워크인 가능 여부 확인",
      "신분증 및 Permit/면허 신청에 필요한 서류",
    ],
    steps: [
      "거주 주 DMV에서 공식 Handbook를 다운로드합니다.",
      "표지·우선권·속도·음주·학교 구역 챕터를 중심으로 학습합니다.",
      "아래 ‘연습 문제’ 탭에서 문제를 풀고 틀린 유형을 복습합니다.",
      "가능하면 주 공식 practice test도 추가로 풀어봅니다.",
      "시험 당일 여유 있게 도착해 시력 검사와 필기시험을 응시합니다.",
    ],
    links: [
      {
        label: "USA.gov – State motor vehicle services",
        url: "https://www.usa.gov/state-motor-vehicle-services",
      },
    ],
    practiceQuestions: dmvPracticeQuestions,
    disclaimer:
      "연습 문제는 학습용이며 실제 DMV 시험과 다를 수 있습니다. 거주 주 공식 자료를 기준으로 준비하세요.",
  },
  {
    slug: "license-renewal",
    category: "dmv",
    title: "미국 운전면허 갱신 (DMV)",
    summary:
      "미국 운전면허 갱신 절차, 준비물, 온라인·방문 방법과 주(State)별 확인 포인트를 정리했습니다. REAL ID·시력검사 여부도 함께 점검하세요.",
    cost: "$32 – $56 (주마다 상이)",
    methods: ["온라인", "우편", "방문"],
    overview:
      "대부분의 주에서는 만료일 전에 온라인·우편·방문으로 면허를 갱신할 수 있습니다. 시력 검사, 신원 확인, 거주지 증명이 필요할 수 있으며, REAL ID가 필요한 경우 추가 서류가 요구됩니다. 아래 절차는 일반적인 흐름이며, 정확한 비용·기한·예약 방법은 해당 주 DMV 공식 사이트를 기준으로 하세요.",
    requirements: [
      "현재 운전면허증",
      "여권 또는 영주권 등 신원 확인 서류",
      "거주지 증명 (공과금 고지서, 임대 계약서 등)",
      "사회보장번호(SSN) 또는 관련 서류",
      "시력 검사 (방문 시 필요한 경우가 많음)",
    ],
    steps: [
      "거주 주 DMV 사이트에서 갱신 가능 여부와 방법을 확인합니다.",
      "온라인 갱신이 가능하면 계정 로그인 후 안내를 따릅니다.",
      "방문이 필요하면 예약(appointment)을 잡고 준비물을 챙깁니다.",
      "수수료를 결제하고 시력 검사·사진 촬영을 진행합니다.",
      "임시 면허(temporary license)를 받은 뒤 새 면허 우편 수령을 기다립니다.",
    ],
    links: [
      {
        label: "USA.gov – State motor vehicle services",
        url: "https://www.usa.gov/state-motor-vehicle-services",
      },
      {
        label: "DHS – REAL ID",
        url: "https://www.dhs.gov/real-id",
      },
    ],
    faq: [
      {
        question: "온라인으로만 갱신할 수 있나요?",
        answer:
          "주·개인 상황에 따라 다릅니다. 최근 사진·시력 검사·REAL ID 전환이 필요하면 방문을 요구하는 경우가 많습니다. 거주 주 DMV에서 ‘Renew by mail/online’ 가능 여부를 먼저 확인하세요.",
      },
      {
        question: "만료 전에 꼭 갱신해야 하나요?",
        answer:
          "만료 후 유예 기간이 있는 주도 있지만, 보험·신분·경찰 검문에 불리할 수 있어 만료 전에 하는 편이 안전합니다. 주마다 과태료·재시험 규정이 다릅니다.",
      },
      {
        question: "REAL ID와 일반 면허 갱신이 다른가요?",
        answer:
          "REAL ID로 올리거나 유지하려면 추가 신원·거주지 서류가 필요할 수 있습니다. 비행기 탑승 등에 REAL ID가 필요하면 일반 갱신과 요건을 구분해서 준비하세요.",
      },
    ],
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 법률·공식 자문이 아닙니다. 최종 안내는 거주 주 DMV 공식 정보를 확인하세요.",
  },
  {
    slug: "first-license",
    category: "dmv",
    title: "운전면허 신규 발급",
    summary:
      "미국에서 처음 운전면허를 받을 때 필요한 서류, 필기·시력·도로시험 순서, Learner Permit과 보험 연계를 안내합니다.",
    cost: "필기·도로·발급 수수료는 주마다 상이 (보통 수십 달러대)",
    methods: ["주 DMV 방문", "필기 → Permit → 도로시험"],
    overview:
      "미국에서 처음 면허를 받으면 보통 (1) 신원·거주지·SSN 서류 확인, (2) 시력 검사, (3) 필기(Knowledge test), (4) Learner/Instruction Permit으로 연습, (5) 도로주행(Road test), (6) 사진·수수료·카드 발급 순입니다. 한국·타주 면허가 있으면 ‘이전(transfer)’ 경로가 더 빠를 수 있어, 신규와 이전을 먼저 구분하세요. 국제운전허가증(IDP)만으로는 장기 거주·보험·렌트에 부족한 경우가 많습니다. 미성년·초보자는 Graduated Driver Licensing(GDL) 제한(야간·동승)이 있을 수 있습니다. 시험 차량은 보험·등록이 유효해야 하는 주가 많으니, 도로시험 전에 자동차 보험 가이드도 함께 보세요.",
    requirements: [
      "신원 확인 서류 (여권, 비자/영주권·EAD 등 주 체크리스트)",
      "거주지 증명 (임대 계약·공과금 등, 주가 정한 조합)",
      "SSN 또는 주가 인정하는 대체 서류",
      "필기 교재(Driver handbook) 학습",
      "도로시험용 차량·보험·동반 운전자(Permit 기간)",
    ],
    steps: [
      "거주 주 DMV/DOL에서 ‘Original / First license’ 요건과 예약 방법을 확인합니다. 한국 면허가 있으면 이전(transfer) 가능 여부도 봅니다.",
      "Driver handbook으로 필기를 준비한 뒤 Knowledge test를 예약·응시합니다.",
      "합격하면 Learner Permit 발급 조건을 확인하고, 주가 정한 연습 시간·동반자 규칙을 지킵니다.",
      "도로시험 예약을 잡고, 시험 차량의 등록·보험·신호등·브레이크등을 점검합니다.",
      "도로시험에 합격하면 수수료를 내고 사진·서명을 진행한 뒤 임시 면허/카드를 받습니다.",
      "REAL ID가 필요하면 추가 서류를 같은 방문에 맞출 수 있는지 확인합니다.",
    ],
    links: [
      {
        label: "USA.gov – State motor vehicle services",
        url: "https://www.usa.gov/state-motor-vehicle-services",
      },
      {
        label: "주별 DMV 가이드",
        url: "/guides/dmv/states",
      },
      {
        label: "타주·해외 면허 이전",
        url: "/guides/dmv/license-transfer",
      },
      {
        label: "도로주행 시험 팁",
        url: "/guides/dmv/road-test",
      },
      {
        label: "자동차 보험 기초",
        url: "/guides/dmv/auto-insurance",
      },
      {
        label: "학습 허가증 (Learner Permit)",
        url: "/guides/dmv/learner-permit",
      },
    ],
    faq: [
      {
        question: "한국 면허가 있어도 신규로 봐야 하나요?",
        answer:
          "주마다 다릅니다. 이전(transfer)·시험 면제 대상이면 그 경로가 유리합니다. 주별 가이드와 ‘면허 이전’을 먼저 확인하세요.",
      },
      {
        question: "영어 필기가 부담되면요?",
        answer:
          "일부 주는 다른 언어 시험·통역을 제공합니다. 거주 주 DMV Knowledge test 안내에서 언어 옵션을 확인하세요.",
      },
      {
        question: "Permit 없이 바로 도로시험을 볼 수 있나요?",
        answer:
          "연령·경험·타 면허 유무에 따라 다릅니다. 신규 성인도 Permit 기간이 필요한 주가 있으니 공식 체크리스트를 보세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer:
      "주마다 시험 절차와 준비물이 다릅니다. 반드시 거주 주 DMV를 확인하세요.",
  },
  {
    slug: "road-test",
    category: "dmv",
    title: "도로주행 시험 (Road Test) 팁",
    summary:
      "실기 시험 당일 준비물, 차량 요건, 자주 감점되는 실수, 합격 후 절차를 정리했습니다.",
    cost: "시험·재응시 수수료는 주마다 상이",
    methods: ["DMV 예약", "운전학원 차량 이용(가능한 경우)"],
    overview:
      "도로주행 시험(Road test / Driving test)은 감독관과 함께 실제 도로에서 운전 능력을 평가합니다. 주마다 코스·채점 기준이 다르지만, 완전 정지, 차선 유지, 거울·어깨 확인, 신호·표지 준수, 안전한 합류·회전이 공통으로 중요합니다. 시험용 차량은 등록·보험이 유효해야 하고, 경고등·브레이크등·타이어 상태도 확인하세요. 휴대폰은 멀리 두고, 감독관 지시만 차분히 따르면 됩니다. 불합격해도 대기 기간 후 재응시가 가능한 경우가 많습니다.",
    requirements: [
      "시험 예약 확인서 또는 예약 정보",
      "Learner’s Permit / 임시 서류 등 신분·응시 자격 서류",
      "시험용 차량 (등록·보험 유효, 안전 점검 통과)",
      "동승 가능한 면허 소지 성인 (Permit 규정·주마다 상이)",
      "안경·콘택트 등 시력 보조 (평소 착용 시)",
      "편안한 신발 (페달 조작이 쉬운 것)",
    ],
    steps: [
      "거주 주 DMV에서 Road test 예약 방법·대기 기간·재응시 규칙을 확인합니다.",
      "시험장 근처 도로에서 평행주차·3점 회전·고속도로 합류(해당 시)를 연습합니다.",
      "시험 전날 차량 라이트·신호·경적·타이어·연료를 점검합니다.",
      "당일 여유 있게 도착해 서류와 보험 카드를 준비합니다.",
      "시험 중에는 완전 정지, 속도 준수, 거울·깜빡이·어깨 확인을 습관처럼 합니다.",
      "합격하면 면허 발급·수수료 안내를 따르고, 불합격이면 피드백을 받아 재연습합니다.",
    ],
    links: [
      {
        label: "USA.gov – State motor vehicle services",
        url: "https://www.usa.gov/state-motor-vehicle-services",
      },
      {
        label: "NHTSA – Learning to drive",
        url: "https://www.nhtsa.gov/risky-driving",
      },
      {
        label: "ArriveUS – 필기시험 연습",
        url: "/guides/dmv/written-test",
      },
      {
        label: "ArriveUS – 자동차 보험 기초",
        url: "/guides/dmv/auto-insurance",
      },
    ],
    disclaimer: dmvDisclaimer,
  },
  {
    slug: "auto-insurance",
    category: "dmv",
    title: "자동차 보험 기초",
    summary:
      "운전·차량 등록에 필요한 최소 보험(Liability 등) 개념과 가입 시 확인할 항목을 안내합니다.",
    cost: "연령·지역·차종·운전 기록에 따라 크게 상이",
    methods: ["보험사·에이전트", "비교 견적 사이트", "렌터카/딜러 연계"],
    overview:
      "미국 대부분 주에서는 차를 운전·등록하려면 최소 책임보험(Liability) 이상을 요구합니다. Liability는 상대 피해를, Collision은 내 차 충돌 손해를, Comprehensive는 도난·자연재해 등을 다루는 식으로 구성이 나뉩니다. ‘최소 요건만’ 들면 보험료는 낮을 수 있지만, 사고 시 본인 부담이 커질 수 있습니다. 렌트·파이낸스 차량은 대출 기관이 더 높은 담보를 요구하기도 합니다. 시애틀·워싱턴주 등 거주 지역의 최소 한도(예: bodily injury / property damage)는 주 법과 보험사 안내를 확인하세요. 보험 카드(또는 디지털 ID)는 차에 두고, 등록·도로시험 때 Proof of insurance로 쓰입니다.",
    requirements: [
      "운전면허 또는 Permit (보험사 요구에 따름)",
      "차량 정보 (연식, VIN, 소유·리스 여부)",
      "차고지 주소(주로 주차하는 곳)",
      "운전 기록·이전 보험 이력 (요청 시)",
      "결제 수단",
    ],
    steps: [
      "거주 주의 최소 보험 요건(Mandatory insurance)을 DMV/주 보험국 안내에서 확인합니다.",
      "Liability만 할지, Collision·Comprehensive를 넣을지 예산과 차 가치에 맞게 정합니다.",
      "2–3곳에서 견적을 비교하고, 디덕터블(자기부담금)과 월 납부액을 확인합니다.",
      "가입 후 보험 카드·Declaration page를 저장하고 차에 보관합니다.",
      "차량 등록·도로시험·경찰 검문에 쓸 Proof of insurance를 준비합니다.",
      "이사·차 변경·면허 갱신 시 보험사에 바로 알려 공백이 없게 합니다.",
    ],
    links: [
      {
        label: "USA.gov – State motor vehicle services",
        url: "https://www.usa.gov/state-motor-vehicle-services",
      },
      {
        label: "NAIC – Auto insurance basics",
        url: "https://content.naic.org/consumer/auto-insurance.htm",
      },
      {
        label: "Washington OIC – Auto insurance (참고)",
        url: "https://www.insurance.wa.gov/auto-insurance",
      },
      {
        label: "ArriveUS – 차량 등록",
        url: "/guides/dmv/vehicle-registration",
      },
    ],
    disclaimer:
      "보험 최소 요건과 상품은 주·보험사마다 다릅니다. 가입 전 견적서와 약관을 확인하고, 필요하면 면허 있는 보험 상담사와 상의하세요. 본 가이드는 보험 권유가 아닙니다.",
  },
  {
    slug: "license-transfer",
    category: "dmv",
    title: "타주·해외 면허 이전",
    summary:
      "다른 주 면허를 가져오거나, 한국 등 해외 면허를 바탕으로 미국 주 면허로 바꾸는 기본 흐름입니다.",
    cost: "이전·시험 수수료는 주마다 상이",
    methods: ["타주 면허 이전", "해외 면허 교환/시험", "DMV·DOL 방문"],
    overview:
      "미국 안에서 이사한 경우(Out-of-state transfer)와 한국 등 해외에서 온 경우(Foreign license)는 절차가 다릅니다. 타주 면허는 시력 검사와 서류 확인 후 필기·도로시험을 면제받는 주가 많고, 해외 면허는 주마다 ‘교환 가능 / 일부 시험 필요 / 처음부터 신규’가 갈립니다. 국제운전면허증(IDP)은 단기 관광용인 경우가 많아 장기 거주·주 면허 대체가 되지 않을 수 있습니다.\n\n워싱턴주(시애틀 포함) 핵심: Washington DOL 안내에 따르면 유효한 한국(South Korea) 운전면허가 있고 만 18세 이상이면, 워싱턴 면허를 받을 때 필기(knowledge)·도로(drive) 시험이 면제되는 목록에 포함됩니다. 방문(관광)만 하는 경우에는 해외 면허로 일정 기간 운전이 가능할 수 있고, 워싱턴 거주자가 되면 보통 30일 안에 주 면허를 받아야 합니다. 면제여도 시력 검사·신원·거주지·SSN 등 서류와 수수료는 필요하고, 기존 면허 처리(구멍 펀치 등)는 방문 시 안내를 따릅니다. 만료된 면허·18세 미만·의료상 시험이 필요한 경우는 예외일 수 있으니 신청 전 DOL ‘Do I need to take a test?’ 페이지를 다시 확인하세요.",
    requirements: [
      "현재 유효한 타주 또는 해외 운전면허 (원본) — 한국→WA는 유효한 한국 면허가 핵심",
      "여권·비자/영주권 등 신원·신분 서류",
      "새 거주지 증명 (임대 계약서, 공과금 고지서 등)",
      "SSN 또는 주에서 요구하는 대체 서류",
      "해외 면허인 경우 공식 번역본 또는 주가 인정하는 번역 (요구 시 — 한국·WA는 면제 목록이어도 서류는 DOL 확인)",
      "기존 면허 반납·펀치 처리 여부 확인",
    ],
    steps: [
      "거주 주 DMV/DOL에서 ‘transfer out-of-state license’ / ‘Do I need to take a test?’ 페이지를 엽니다.",
      "필기·도로시험 면제 여부(한국→워싱턴 포함), 번역·추가 서류 요건을 확인합니다.",
      "필요 서류를 모아 예약 후 방문합니다. (워크인 가능 여부도 확인)",
      "시력 검사와 신분 확인을 진행하고, 안내에 따라 시험을 보거나 면제받습니다.",
      "새 주 면허를 받은 뒤 보험사에 면허·주소 변경을 알립니다.",
      "차량이 있으면 차량 등록·Title 이전도 같은 주에 맞게 진행합니다.",
    ],
    links: [
      {
        label: "USA.gov – State motor vehicle services",
        url: "https://www.usa.gov/state-motor-vehicle-services",
      },
      {
        label: "Washington DOL – Do I need to take a test?",
        url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/do-i-need-take-test",
      },
      {
        label: "Washington DOL – Moving to Washington",
        url: "https://dol.wa.gov/moving-washington/get-driver-license",
      },
      {
        label: "ArriveUS – 워싱턴주·시애틀 가이드",
        url: "/guides/dmv/states/wa",
      },
    ],
    faq: [
      {
        question: "시애틀(워싱턴)에서 한국 면허를 인정해 주나요?",
        answer:
          "네. Washington DOL 공식 안내에서 유효한 South Korea 면허는 만 18세 이상일 때 필기·도로 시험 면제 대상에 포함됩니다. 그래도 워싱턴 면허 발급 절차(서류·시력·수수료)는 거쳐야 합니다.",
      },
      {
        question: "한국 면허만으로 계속 운전해도 되나요?",
        answer:
          "단기 방문이면 해외 면허로 일정 기간(DOL 안내상 최대 약 1년) 운전이 가능할 수 있습니다. 워싱턴 거주자가 되면 보통 30일 안에 주 면허로 바꿔야 합니다.",
      },
      {
        question: "필기·도로시험을 정말 안 봐도 되나요?",
        answer:
          "유효한 한국 면허 + 18세 이상이면 DOL 표 기준으로 knowledge/drive test가 면제됩니다. 만료 면허, 미성년, 의료상 시험 필요 등은 예외일 수 있으니 방문 전 공식 페이지를 확인하세요.",
      },
    ],
    disclaimer: dmvDisclaimer,
  },
  {
    slug: "real-id",
    category: "dmv",
    title: "REAL ID",
    summary:
      "국내선 공항·일부 연방 시설에서 요구되는 REAL ID의 의미, 별·표시 확인, 그리고 워싱턴주(시애틀)에서 시민권자만 EDL이 가능한 점을 정리했습니다.",
    cost: "발급·업그레이드 수수료는 주마다 상이",
    methods: ["주 DMV/DOL 방문 발급", "기존 여권 등 대체 신분 사용"],
    overview:
      "REAL ID는 주가 발급하는 운전면허/ID가 연방 최소 보안 기준을 충족한다는 표시입니다. 많은 주에서는 면허에 별(★) 표시가 있습니다. 국내선 탑승이나 일부 연방 시설 출입 때 ‘주 발급 REAL ID 준수 신분증’ 또는 여권 등 TSA가 인정하는 다른 신분증명서가 필요합니다. 운전 자체는 일반(standard) 면허로도 가능한 경우가 많습니다.\n\n워싱턴주(시애틀 포함) 주의: 워싱턴주가 제공하는 REAL ID 준수 주 발급 신분증은 Enhanced Driver License(EDL) / Enhanced ID(EID)입니다. DOL 안내에 따르면 EDL·EID는 미국 시민만 신청할 수 있으며, 영주권·비자로 받을 수 없습니다. 시민이 아니면 일반 워싱턴 면허로 운전하고, 비행기 탑승 등은 유효한 여권·영주권 카드 등 TSA 인정 서류로 준비하는 경우가 많습니다. 최종 자격은 반드시 Washington DOL REAL ID / EDL 페이지를 확인하세요.",
    requirements: [
      "거주 주가 요구하는 신원 증명 (성명·생년월일)",
      "SSN 관련 증명 (주·상품에 따라 상이)",
      "거주지 증명 1–2종",
      "합법 신분/시민권 증명 — 주와 카드 종류에 따라 다름",
      "워싱턴주 EDL/EID를 원할 경우: 미국 시민권 증명 (영주권·비자로는 불가)",
      "기존 면허/ID (갱신·업그레이드 시)",
    ],
    steps: [
      "본인 면허/ID가 REAL ID 준수인지 확인합니다. (별 표시 또는 주별 Enhanced 카드)",
      "거주 주 DMV/DOL에서 REAL ID 신청·업그레이드 서류 목록을 확인합니다.",
      "워싱턴주 거주자: EDL/EID가 시민 전용인지 확인하고, 비시민이면 여권 등 대체 계획을 세웁니다.",
      "예약 후 원본 서류를 지참해 방문·사진 촬영·발급을 진행합니다.",
      "여행 전에는 TSA 인정 신분증명서 목록도 한 번 더 확인합니다.",
    ],
    links: [
      {
        label: "DHS – REAL ID",
        url: "https://www.dhs.gov/real-id",
      },
      {
        label: "TSA – Identification",
        url: "https://www.tsa.gov/travel/security-screening/identification",
      },
      {
        label: "Washington DOL – REAL ID",
        url: "https://www.dol.wa.gov/id-cards/real-id",
      },
      {
        label: "Washington DOL – Enhanced driver license (EDL)",
        url: "https://www.dol.wa.gov/driver-licenses-and-permits/enhanced-driver-license-edl",
      },
      {
        label: "ArriveUS – 워싱턴주·시애틀 가이드",
        url: "/guides/dmv/states/wa",
      },
    ],
    disclaimer:
      "REAL ID·EDL 자격과 여행 서류 요건은 연방·주 정책이 바뀔 수 있습니다. 워싱턴주 EDL/EID는 시민 대상이라는 DOL 안내를 반영했으나, 신청 전 공식 페이지를 다시 확인하세요. 본 가이드는 법률 자문이 아닙니다.",
  },
  {
    slug: "address-change",
    category: "dmv",
    title: "주소 변경",
    summary:
      "이사 후 운전면허·차량 등록 주소를 바꾸는 절차와, USPS·보험·USCIS 등 같이 바꿀 곳을 정리했습니다.",
    cost: "무료–소액 수수료 (주마다 상이)",
    methods: ["온라인", "우편", "방문"],
    overview:
      "이사를 하면 대부분의 주에서 일정 기간(예: 10–30일, 주마다 다름) 안에 DMV/DOL에 면허·ID 주소 변경을 신고해야 합니다. 차량이 있으면 등록(Registration) 주소도 함께 바꾸는 경우가 많고, 스티커·새 카드 재발급 여부는 주 정책에 따릅니다. DMV만 바꾸면 우편물·보험·은행·이민국 안내는 옛 주소로 갈 수 있으니, USPS Change of Address와 보험사·은행·USCIS(해당 시) 업데이트를 같은 주에 처리하는 편이 안전합니다. ArriveUS ‘주소·우편’ 가이드와 함께 보세요.",
    requirements: [
      "현재 운전면허증 또는 주 발급 ID",
      "새 거주지 증명 (임대 계약서, 공과금 고지서 등)",
      "차량 등록증·번호판 정보 (차량이 있는 경우)",
      "온라인 계정 로그인 정보 (해당 시)",
    ],
    steps: [
      "거주 주 DMV에서 주소 변경 기한·온라인 가능 여부·수수료를 확인합니다.",
      "온라인으로 면허/ID 주소를 바꾸고, 필요하면 새 카드 재발급을 신청합니다.",
      "차량이 있으면 등록 주소·세금 고지 주소도 함께 변경합니다.",
      "보험사에 새 주소를 알려 요율·보장 지역이 맞는지 확인합니다.",
      "USPS 전달 신청과 은행·USCIS·SSA 등 공문서 주소를 업데이트합니다.",
    ],
    links: [
      {
        label: "USA.gov – Change of address",
        url: "https://www.usa.gov/change-address",
      },
      {
        label: "USPS – Change of address",
        url: "https://www.usps.com/manage/forward.htm",
      },
      {
        label: "주소·우편·USPS",
        url: "/guides/life/address-mail",
      },
      {
        label: "주별 DMV 가이드",
        url: "/guides/dmv/states",
      },
      {
        label: "USCIS – Change of address",
        url: "https://www.uscis.gov/addresschange",
      },
    ],
    faq: [
      {
        question: "며칠 안에 신고해야 하나요?",
        answer:
          "주마다 다릅니다. 이사 직후 거주 주 DMV ‘Change of address’ 기한을 확인하세요.",
      },
      {
        question: "면허 카드에 새 주소가 바로 찍히나요?",
        answer:
          "온라인으로 기록만 바꾸고 카드는 나중에 받는 주도 있습니다. 재발급·스티커 안내를 확인하세요.",
      },
      {
        question: "USPS만 바꾸면 DMV는 생략해도 되나요?",
        answer:
          "아니요. 우편 전달과 면허·등록·보험·이민국 주소는 별개인 경우가 많습니다.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 법률·공식 자문이 아닙니다. 최종 안내는 거주 주 DMV 공식 정보를 확인하세요.",
  },
  {
    slug: "vehicle-registration",
    category: "dmv",
    title: "차량 등록",
    summary:
      "중고·신차 구매 후 차량 등록(Registration)과 번호판, 보험 연계의 기본 흐름입니다.",
    cost: "등록비·세금은 주·차량 가격에 따라 상이",
    methods: ["딜러 대행", "DMV 방문/온라인"],
    overview:
      "미국에서 차를 사서 운행하려면 보통 보험 가입과 주 DMV 등록이 필요합니다. 딜러에서 구매하면 Temporary tag와 등록 대행을 해주는 경우가 많고, 개인 간 거래(private sale)면 Title 이전과 등록을 직접 처리해야 합니다. Emissions(배기가스) 검사나 Smog check가 필요한 주도 있습니다. 등록 만료일을 캘린더에 남겨 연체를 피하세요.",
    requirements: [
      "차량 Title 또는 소유권 이전 서류",
      "구매 영수증/Bill of sale",
      "유효한 자동차 보험 증명",
      "신분증·거주지 증명",
      "등록 수수료·세금 납부 수단",
      "배기가스 검사 결과 (해당 주)",
    ],
    steps: [
      "구매 전/직후 최소 보험 요건을 확인하고 보험을 시작합니다.",
      "Title에 본인 정보가 올바르게 이전되는지 확인합니다.",
      "딜러 대행이 없으면 거주 주 DMV 등록 절차를 따릅니다.",
      "필요한 경우 배기가스 검사를 받은 뒤 등록비를 납부합니다.",
      "번호판·등록 스티커를 부착하고 만료일을 기록합니다.",
      "판매세·연간 갱신 일정을 따로 관리합니다.",
    ],
    links: [
      {
        label: "USA.gov – State motor vehicle services",
        url: "https://www.usa.gov/state-motor-vehicle-services",
      },
      {
        label: "Washington DOL – Vehicle registration",
        url: "https://dol.wa.gov/vehicles-and-boats/vehicles/vehicle-registration",
      },
      {
        label: "Washington DOL – Buy and register a vehicle",
        url: "https://dol.wa.gov/vehicles-and-boats/vehicles/buying-and-selling-vehicle/buy-and-register-vehicle",
      },
      {
        label: "ArriveUS – 자동차 보험 기초",
        url: "/guides/dmv/auto-insurance",
      },
    ],
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 법률·공식 자문이 아닙니다. 최종 안내는 거주 주 DMV/DOL 공식 정보를 확인하세요.",
  },
];

