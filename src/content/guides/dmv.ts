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
    faq: [
      {
        question: "Permit으로 혼자 운전해도 되나요?",
        answer:
          "대부분 주에서는 면허 있는 성인 동승이 필요합니다. 야간·탑승 인원 제한도 흔하니 거주 주 GDL/Handbook을 확인하세요.",
      },
      {
        question: "성인 초보도 Permit이 필요한가요?",
        answer:
          "주마다 다릅니다. 일부는 성인도 Permit 후 도로시험을 보고, 일부는 다른 경로가 있습니다. 거주 주 New driver 안내를 보세요.",
      },
      {
        question: "연습 시간은 얼마나 채워야 하나요?",
        answer:
          "주간·야간 최소 연습 시간이 정해진 주가 많습니다. DMV Teen/New driver 페이지와 로그 양식을 확인하세요.",
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
      "필기시험(Knowledge / Written test)은 도로 표지, 우선권, 속도, 음주운전, 학교 구역, 고속도로·주차 규칙 등을 확인합니다. 문제 수·합격 점수·언어(영어 외 선택)·컴퓨터/지필 방식은 주마다 다릅니다. 아래 연습 문제는 공통적으로 자주 나오는 유형이며 실제 시험과 동일하지 않습니다. 가장 확실한 준비는 (1) 거주 주 Driver Handbook 통독, (2) 주 공식 practice test, (3) 틀린 유형 복습입니다. ArriveUS 주별 DMV 가이드에서 handbook 링크를 찾을 수 있습니다.",
    requirements: [
      "거주 주 Driver Handbook (PDF/앱)",
      "필기시험 예약 또는 워크인 가능 여부 확인",
      "신분증 및 Permit/면허 신청에 필요한 서류",
    ],
    steps: [
      "주별 DMV 가이드 또는 주 공식 사이트에서 Handbook를 다운로드합니다.",
      "표지·우선권·속도·음주·학교 구역·고속도로 챕터를 중심으로 학습합니다.",
      "아래 ‘연습 문제’ 탭에서 문제를 풀고 틀린 유형을 Handbook에서 다시 읽습니다.",
      "가능하면 주 공식 practice test도 추가로 풀어봅니다.",
      "시험 당일 여유 있게 도착해 시력 검사와 필기시험을 응시합니다.",
    ],
    links: [
      {
        label: "USA.gov – State motor vehicle services",
        url: "https://www.usa.gov/state-motor-vehicle-services",
      },
      {
        label: "주별 DMV 가이드 (Handbook 링크)",
        url: "/guides/dmv/states",
      },
      {
        label: "학습 허가증 (Learner Permit)",
        url: "/guides/dmv/learner-permit",
      },
      {
        label: "운전면허 신규 발급",
        url: "/guides/dmv/first-license",
      },
    ],
    practiceQuestions: dmvPracticeQuestions,
    updatedAt: "2026-08",
    faq: [
      {
        question: "연습 문제가 실제 시험과 같나요?",
        answer:
          "아니요. 학습용 유형입니다. 반드시 거주 주 Driver Handbook와 공식 practice test를 함께 보세요.",
      },
      {
        question: "영어로만 볼 수 있나요?",
        answer:
          "많은 주에서 다른 언어 선택이 가능합니다. 가능 언어·통역 규칙은 거주 주 DMV에서 확인하세요.",
      },
      {
        question: "몇 문제 맞춰야 합격인가요?",
        answer:
          "문제 수·합격 점수는 주마다 다릅니다. 공식 Handbook·시험 안내의 합격 기준을 기준으로 준비하세요.",
      },
    ],
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
        label: "주별 DMV 가이드",
        url: "/guides/dmv/states",
      },
      {
        label: "NHTSA – Learning to drive",
        url: "https://www.nhtsa.gov/risky-driving",
      },
      {
        label: "필기시험 연습",
        url: "/guides/dmv/written-test",
      },
      {
        label: "자동차 보험 기초",
        url: "/guides/dmv/auto-insurance",
      },
      {
        label: "운전면허 신규 발급",
        url: "/guides/dmv/first-license",
      },
    ],
    updatedAt: "2026-08",
    faq: [
      {
        question: "시험용 차는 꼭 내 차여야 하나요?",
        answer:
          "등록·보험이 유효하고 안전 점검을 통과하면 빌린 차·학원 차도 가능한 주가 많습니다. 사전에 DMV·보험 허용 여부를 확인하세요.",
      },
      {
        question: "불합격하면 바로 다시 볼 수 있나요?",
        answer:
          "대기 기간·재응시 횟수·추가 수수료가 주마다 다릅니다. 피드백을 받아 연습한 뒤 공식 안내대로 재예약하세요.",
      },
      {
        question: "시험 중 휴대폰을 써도 되나요?",
        answer:
          "보통 금지이며 즉시 실격 사유가 될 수 있습니다. 멀리 두고 감독관 지시만 따르세요.",
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
      {
        label: "렌터카·단기 이용",
        url: "/guides/dmv/car-rental",
      },
      {
        label: "신용 없이 차 사기",
        url: "/guides/dmv/buy-car-no-credit",
      },
    ],
    faq: [
      {
        question: "최소 Liability만 들면 충분한가요?",
        answer:
          "주 최소 요건을 충족할 수는 있지만, 사고 시 본인 차·추가 손해가 크게 남을 수 있습니다. 견적서·약관과 주 보험국 안내를 비교하세요.",
      },
      {
        question: "Permit만 있어도 보험에 가입되나요?",
        answer:
          "보험사·상품마다 다릅니다. 견적 전에 Permit/면허 상태와 주 최소 요건을 알려 주세요.",
      },
      {
        question: "보험 카드는 어디에 두나요?",
        answer:
          "차에 두고 등록·도로시험·검문에 Proof of insurance로 씁니다. 디지털 ID도 인정 여부를 주·보험사에 확인하세요.",
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
    faq: [
      {
        question: "REAL ID 없으면 비행기를 못 타나요?",
        answer:
          "주 발급 REAL ID 대신 여권 등 TSA가 인정하는 다른 신분증명서로 탑승할 수 있는 경우가 많습니다. TSA Identification 목록을 확인하세요.",
      },
      {
        question: "워싱턴에서 영주권자도 EDL을 받을 수 있나요?",
        answer:
          "Washington DOL 안내에 따르면 EDL/EID는 미국 시민만 신청할 수 있습니다. 비시민은 일반 면허와 여권 등 대체 서류를 준비하세요.",
      },
      {
        question: "면허에 별(★)이 있으면 REAL ID인가요?",
        answer:
          "많은 주에서 별 표시가 REAL ID 준수 표시입니다. 주마다 표기가 다르니 카드 뒷면·발급 주 DMV 안내로 확인하세요.",
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
      {
        label: "신용 없이 차 사기",
        url: "/guides/dmv/buy-car-no-credit",
      },
      {
        label: "렌터카·단기 이용",
        url: "/guides/dmv/car-rental",
      },
    ],
    faq: [
      {
        question: "딜러에서 사면 등록을 알아서 해 주나요?",
        answer:
          "Temporary tag와 등록 대행을 해주는 경우가 많습니다. 개인 거래면 Title 이전·등록을 직접 해야 하니 거주 주 DMV를 확인하세요.",
      },
      {
        question: "보험 없이 등록할 수 있나요?",
        answer:
          "대부분 주에서는 유효한 보험 증명이 등록·운행 조건입니다. 주 최소 요건을 DMV/보험국에서 확인하세요.",
      },
      {
        question: "등록 만료를 놓치면요?",
        answer:
          "연체 수수료·단속 위험이 커질 수 있습니다. 만료일을 기록하고 거주 주 갱신 안내를 따르세요.",
      },
    ],
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 법률·공식 자문이 아닙니다. 최종 안내는 거주 주 DMV/DOL 공식 정보를 확인하세요.",
  },
  {
    slug: "car-rental",
    category: "dmv",
    title: "렌터카·단기 이용",
    summary:
      "며칠~몇 달 차가 필요할 때 일반 렌터카, 라이드셰어 연계 렌트, 카셰어·우버/리프트 선택의 차이와 예약 전 확인할 점을 정리합니다.",
    cost: "일·주·월 요금 + 보험·보증금·연령 할증 / 도시·시즌마다 크게 다름",
    methods: [
      "일반 렌터카 (공항·시내)",
      "라이드셰어·앱 연계 렌트",
      "카셰어·라이드헤일(우버·리프트)",
    ],
    overview:
      "미국에 막 와서 신용·보험·등록이 아직이면, 당장 중고차를 사기보다 단기 이동 수단을 먼저 고르는 경우가 많습니다. 선택지는 크게 (1) Hertz·Enterprise·Avis 같은 일반 렌터카, (2) 우버 등 앱에서 안내하는 파트너 렌트(예: Uber Rent처럼 ‘앱에서 빌리는’ 형태—상품·지역·자격은 수시로 바뀜), (3) Zipcar 등 시간제 카셰어, (4) 차를 안 빌리고 우버·리프트·대중교통만 쓰는 방법입니다.\n\n일반 렌터카는 예약·차량 선택이 익숙하지만, 신용카드 보증금(홀드), 25세 미만 할증, 추가 운전자 요금, LDW/CDW 보험 옵션이 붙는 경우가 많습니다. 체크·직불카드만으로도 받는 지점이 있으나 보증금이 크거나 거절될 수 있어 예약 전 지점에 ‘debit / no credit history’ 정책을 확인하세요. 본인 신용카드의 rental insurance 혜택이 있으면 중복 가입을 줄일 수 있습니다.\n\n앱 연계 렌트는 ‘며칠만·앱으로’ 편할 수 있으나, 라이드셰어 운전자 전용·특정 도시만·보험 조건이 일반 렌트와 다를 수 있습니다. 카셰어는 시내 단거리에 유리하고, 출퇴근·공항·교외는 일반 렌트나 라이드헤일이 나을 수 있습니다. 관광·출장 며칠이면 렌트, 한두 달 이상·매일 출퇴근이면 총비용(렌트+보험+주유)과 중고차·대중교통을 비교하는 것이 좋습니다. ArriveUS는 특정 브랜드를 추천하지 않으며, 계약서·보험 범위를 직접 확인하세요.",
    requirements: [
      "유효한 운전면허 (주·해외·국제운전허가 인정 여부는 업체·주마다 다름)",
      "여권·추가 ID (요청 시)",
      "결제·보증금용 카드 (신용이 유리, 직불은 정책 확인)",
      "예약자 연령 (보통 21+ , 25세 미만 할증 흔함)",
      "보험 선택: 업체 상품 vs 본인·카드 혜택",
    ],
    steps: [
      "며칠인지, 공항 픽업인지, 출퇴근용인지 기간·용도를 정합니다.",
      "일반 렌트 / 앱 연계 렌트 / 카셰어 / 우버·리프트만 이용을 비용·자격으로 비교합니다.",
      "예약 전 업체·앱에 직불카드·보증금·연령·추가 운전자·보험 포함 범위를 확인합니다.",
      "픽업 때 차량 흠집·연료·마일 제한·반납 시간을 사진·계약서로 남깁니다.",
      "사고·고장 시 연락처와 보험 처리 절차를 계약서에서 다시 확인합니다.",
      "한 달 이상이면 ‘신용 없이 차 사기’·보험·등록 가이드와 총비용을 비교해 다음 단계를 정합니다.",
    ],
    links: [
      {
        label: "USA.gov – Driving if you are not a citizen",
        url: "https://www.usa.gov/non-citizen-driving",
      },
      {
        label: "USA.gov – Car complaints (rentals included)",
        url: "https://www.usa.gov/car-complaints",
      },
      {
        label: "NAIC – Auto insurance basics",
        url: "https://content.naic.org/consumer/auto-insurance.htm",
      },
      {
        label: "신용 없이 차 사기",
        url: "/guides/dmv/buy-car-no-credit",
      },
      {
        label: "자동차 보험 기초",
        url: "/guides/dmv/auto-insurance",
      },
      {
        label: "대중교통 기본",
        url: "/guides/life/public-transit",
      },
    ],
    faq: [
      {
        question: "신용이 없어도 렌터카를 빌릴 수 있나요?",
        answer:
          "일부 업체·지점은 직불카드와 큰 보증금으로 가능하지만 거절도 흔합니다. 예약 전 해당 지점 정책을 확인하고, 안 되면 카셰어·라이드헤일·대중교통을 검토하세요.",
      },
      {
        question: "우버에서 빌리는 렌트가 더 나은가요?",
        answer:
          "편의·요금·자격이 지역·시점에 따라 다릅니다. 라이드셰어 운전자 전용인 경우도 있어, 일반 렌트·카셰어와 총비용·보험·반납 조건을 같은 기준으로 비교하세요. ArriveUS는 특정 앱을 추천하지 않습니다.",
      },
      {
        question: "며칠만이면 렌트가 낫나요, 우버만 쓰는 게 낫나요?",
        answer:
          "시내 단거리·주차 스트레스가 크면 우버·리프트·대중교통이 싸는 경우가 많고, 교외·짐·여러 날 이동이면 렌트가 나을 수 있습니다. 예상 이동 횟수로 대략 합산을 해보세요.",
      },
      {
        question: "렌트 보험을 꼭 사야 하나요?",
        answer:
          "본인 자동차 보험·신용카드 rental coverage가 렌트차를 덮는지 먼저 확인하세요. 없으면 업체 옵션을 검토하되, 적용 범위·자기부담금을 계약서에서 확인합니다.",
      },
      {
        question: "한국 면허로 렌트가 되나요?",
        answer:
          "업체·주마다 다릅니다. 여권+한국 면허, 또는 IDP(국제운전허가)를 요구하는 곳이 있으니 예약 전에 물어보세요. 장기 거주면 주 면허 가이드도 함께 보세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 법률·보험·금융 자문이 아닙니다. 렌트 요금·보험·자격은 업체·지역·시점에 따라 다르므로 계약서와 공식 안내를 확인하세요. 특정 렌트·라이드셰어 브랜드를 추천하지 않습니다.",
  },
  {
    slug: "buy-car-no-credit",
    category: "dmv",
    title: "신용 없이 차 사기",
    summary:
      "미국 신용점수가 없거나 낮을 때 현금·크레딧유니온·공동서명·Buy Here Pay Here 위험을 구분하고, 대출 전 확인할 공식 안내를 정리합니다.",
    cost: "차량 가격 + 세금·등록·보험 / 할부 시 APR·수수료가 신용에 따라 크게 달라짐",
    methods: [
      "현금·저축 후 구매",
      "신용 쌓은 뒤 은행·크레딧유니온 대출",
      "공동서명(Co-signer) · 신중히",
    ],
    overview:
      "미국에서는 중고·신차 할부(Auto loan) 심사가 신용점수·소득·체류·다운페이에 크게 좌우됩니다. 막 도착해 신용 이력이 없으면 ‘승인 자체가 안 되거나’, 승인이 나와도 APR(이자)이 매우 높아지는 경험을 하는 분이 많습니다. 그래서 현금으로 저가 중고를 사거나, 비싼 이자 대출·Buy Here Pay Here(딜러 자체 할부)로 급한 불을 끄는 경우가 생깁니다.\n\n비교적 안전한 큰 그림은 (1) 당장은 렌트·대중교통·라이드헤일로 이동하고, (2) 은행·Secured card로 신용을 쌓으며, (3) 다운페이를 모은 뒤 크레딧유니온·은행 pre-approval을 비교하고, (4) 보험·등록·정비 비용까지 넣어 예산을 잡는 것입니다. 현금 구매도 Title·lien·사고 이력(예: VIN 조회)·시운전·사전 점검을 건너뛰면 손해가 큽니다.\n\n경계할 것: ‘신용 없이도 무조건 승인’, ‘오늘만 특가·지금 사인’, 선입금만 받고 차를 안 주는 개인 거래, 계약서에 없는 구두 약속, 매우 높은 이자·장기간 balloon 구조. Buy Here Pay Here는 신용이 약할 때 쓰이지만 이자가 높고 회수(repossession) 위험이 커 CFPB·FTC 소비자 안내를 꼭 읽으세요. 공동서명자는 상대 연체 시 본인 신용·상환 의무가 생길 수 있습니다. ArriveUS는 대출·딜러를 알선하지 않으며, 불법·가짜 신용 서류 방법을 안내하지 않습니다.",
    requirements: [
      "예산: 차값 + 세금·등록·보험·정비·주유",
      "운전면허(또는 주에서 요구하는 자격)와 보험 가입 계획",
      "현금 구매 시: 안전한 결제·Bill of sale·Title 확인",
      "대출 검토 시: 소득·체류 관련 서류, 다운페이, pre-approval 비교",
      "VIN·사고·리콜 조회에 쓸 차량 정보",
    ],
    steps: [
      "당장 필요한 기간을 나눕니다. 며칠~몇 주면 렌터카 가이드, 장기면 구매·대출 준비를 진행합니다.",
      "월 보험·등록·주유·정비까지 포함한 ‘유지비’를 먼저 적습니다. 차값만 보지 마세요.",
      "신용이 없으면 Secured card·첫 신용카드·신용 쌓기 가이드로 이력을 만들기 시작합니다(급하게 고금리만 받지 않기).",
      "현금·저가 중고를 볼 때는 Title 명의·담보(lien)·Bill of sale·사전 점검(mechanic)을 확인합니다.",
      "대출이 필요하면 딜러 금융만 듣지 말고, 크레딧유니온·은행 pre-approval APR·기간·월납을 비교합니다(CFPB 안내).",
      "Buy Here Pay Here·‘무조건 승인’ 광고는 계약 총비용·연체 시 조항을 읽고, 부담되면 거절합니다.",
      "구매 후 보험·차량 등록 가이드로 Title·번호판·만료일을 바로 처리합니다.",
    ],
    links: [
      {
        label: "CFPB – Auto loans",
        url: "https://www.consumerfinance.gov/consumer-tools/auto-loans/",
      },
      {
        label: "CFPB – What to know before you buy a car",
        url: "https://www.consumerfinance.gov/about-us/blog/what-know-shopping-auto-loan/",
      },
      {
        label: "FTC – Understanding vehicle financing",
        url: "https://consumer.ftc.gov/articles/understanding-vehicle-financing",
      },
      {
        label: "FTC – Buying a used car",
        url: "https://consumer.ftc.gov/articles/buying-used-car",
      },
      {
        label: "NHTSA – VIN / safety recalls",
        url: "https://www.nhtsa.gov/recalls",
      },
      {
        label: "렌터카·단기 이용",
        url: "/guides/dmv/car-rental",
      },
      {
        label: "자동차 보험 기초",
        url: "/guides/dmv/auto-insurance",
      },
      {
        label: "차량 등록",
        url: "/guides/dmv/vehicle-registration",
      },
      {
        label: "첫 신용카드 만들기",
        url: "/guides/bank/first-credit-card",
      },
      {
        label: "신용 점수 올리기",
        url: "/guides/bank/credit-build",
      },
    ],
    faq: [
      {
        question: "신용점수 없이 할부가 아예 안 되나요?",
        answer:
          "거절되는 경우가 많고, 돼도 이자가 매우 높을 수 있습니다. 다운페이·공동서명·크레딧유니온·현금 저가 중고를 비교하고, ‘무조건 승인’만 믿지 마세요.",
      },
      {
        question: "현금으로 사는 게 제일 안전한가요?",
        answer:
          "이자 부담은 없지만 Title·사기·고장 리스크는 그대로입니다. VIN·사전 점검·정식 Bill of sale·등록을 꼭 하세요.",
      },
      {
        question: "Buy Here Pay Here는 뭔가요?",
        answer:
          "딜러가 직접 할부해 주는 형태가 많습니다. 신용이 약할 때 쓰이지만 이자·수수료·회수 조건이 불리한 경우가 있어 CFPB·FTC 안내와 총비용을 확인하세요.",
      },
      {
        question: "가족이 공동서명(Co-sign)해 주면요?",
        answer:
          "승인은 쉬워질 수 있지만, 연체·미납 시 공동서명자 신용과 상환 의무에 영향을 줄 수 있습니다. 조건을 함께 읽고 결정하세요.",
      },
      {
        question: "당장 차가 급하면요?",
        answer:
          "고금리 장기 할부만 급하게 받기보다, 렌터카·대중교통·라이드헤일로 기간을 벌고 신용·다운페이를 준비하는 편이 손해가 적은 경우가 많습니다.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 법률·금융·보험 자문이나 대출·딜러 알선이 아닙니다. APR·승인·계약은 개인 신용·소득·체류에 따라 다르므로 CFPB·FTC·은행·자격 있는 상담사 안내를 확인하세요. 가짜 신용·불법 서류 방법은 안내하지 않습니다.",
  },
];

