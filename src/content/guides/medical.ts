import type { Guide } from "../types";

const disclaimer =
  "ArriveUS 가이드는 일반적인 참고 정보이며 의료·보험 자문이 아닙니다. 가입 자격과 보장 내용은 공식 Marketplace·보험사·주 정부 안내를 확인하세요.";

export const medicalGuides: Guide[] = [
  {
    slug: "health-insurance",
    category: "medical",
    title: "건강보험 가입",
    summary:
      "직장 보험, Healthcare.gov Marketplace, Medicaid/CHIP 등 미국에서 건강보험을 구하는 기본 경로를 정리했습니다.",
    cost: "소득·플랜·지원금(Subsidy)에 따라 크게 다름",
    methods: ["직장 보험", "Marketplace", "Medicaid/CHIP", "학교 보험"],
    overview:
      "미국은 한국처럼 전 국민 단일 건강보험이 아닙니다. 많은 사람들이 직장을 통해 보험에 가입하고, 직장이 없거나 자격이 안 되면 Healthcare.gov(또는 주 Marketplace)에서 개인 플랜을 찾습니다. 소득이 낮으면 Medicaid, 자녀는 CHIP 대상이 될 수 있습니다. 유학생·교환방문자는 학교 필수 보험을 확인하세요. Open Enrollment(보통 연말) 외에 Job-based coverage 상실, 이사, 결혼 등 Qualifying life event가 있으면 Special Enrollment이 가능할 수 있습니다.",
    requirements: [
      "신분·거주 관련 정보 (가입 경로에 따라 상이)",
      "가구 소득 추정 자료 (Marketplace 지원금 산정 시)",
      "고용주 보험 안내문 (직장 보험인 경우)",
      "SSN 또는 신청에 필요한 신원 정보",
      "현재 거주지 우편번호 (플랜·클리닉 네트워크 확인용)",
    ],
    steps: [
      "직장·학교·배우자 보험 등 이미 이용 가능한 보장이 있는지 확인합니다.",
      "소득이 낮으면 Medicaid/CHIP·Marketplace 지원금부터 확인합니다. (저소득층 보험 가입 가이드 참고)",
      "없으면 Healthcare.gov 또는 거주 주 Marketplace에서 자격·지원금을 조회합니다.",
      "Premium(월 보험료), Deductible(자기부담금), Network(병원 네트워크)를 비교합니다.",
      "Primary care doctor가 네트워크에 포함되는지 확인합니다.",
      "가입을 완료하고 보험 카드(멤버 ID)와 보장 시작일을 저장합니다.",
      "처방약·응급 시 본인 부담 규칙을 앱/포털에서 한 번 더 확인합니다.",
    ],
    links: [
      {
        label: "HealthCare.gov",
        url: "https://www.healthcare.gov/",
      },
      {
        label: "USA.gov – Health insurance",
        url: "https://www.usa.gov/health-insurance",
      },
      {
        label: "Medicaid.gov",
        url: "https://www.medicaid.gov/",
      },
      {
        label: "65세 메디케어 가이드",
        url: "/guides/medical/medicare",
      },
      {
        label: "저소득층 보험 가입 안내",
        url: "/guides/medical/low-income-insurance",
      },
    ],
    disclaimer,
  },
  {
    slug: "low-income-insurance",
    category: "medical",
    title: "저소득층 Medicaid·CHIP 보험 가입",
    summary:
      "소득이 낮을 때 Medicaid·CHIP·Marketplace 보험료 지원(Subsidy) 자격 확인과 Healthcare.gov 신청 절차를 안내합니다.",
    cost: "Medicaid/CHIP는 무료~저비용인 경우가 많음 / Marketplace는 소득에 따라 월 보험료·본인부담이 줄어들 수 있음",
    methods: [
      "Medicaid (주 메디케이드)",
      "CHIP (아동·청소년)",
      "Marketplace Premium Tax Credit / CSR",
      "Healthcare.gov 또는 주 Medicaid 포털 신청",
    ],
    overview:
      "소득이 낮으면 먼저 Medicaid(메디케이드) 자격이 있는지 보는 것이 일반적입니다. Medicaid는 주마다 소득·가구 기준이 다르고, 보험료가 없거나 매우 낮은 경우가 많습니다. 자녀·임신부는 CHIP(Children’s Health Insurance Program) 대상이 될 수 있습니다. Medicaid에 해당하지 않아도 가구 소득이 일정 범위면 Healthcare.gov(또는 주 Marketplace)에서 Premium Tax Credit(월 보험료 지원)과 Cost-sharing Reduction(본인부담 완화, 해당 Silver 플랜)을 받을 수 있습니다. 신청은 보통 한 곳에서 시작합니다. Marketplace에 소득·가구 정보를 넣으면 Medicaid/CHIP로 넘겨지거나, 반대로 주 Medicaid 신청 중 Marketplace로 안내받기도 합니다. 합법 체류·영주권 등 신분과 거주 기간에 따라 자격이 달라질 수 있고, 체류 서류가 없는 성인은 연방 Medicaid·Marketplace 지원 대상이 아닌 경우가 많습니다(임신·응급·주 자체 프로그램·지역 클리닉은 별도). Open Enrollment 밖에도 소득 변화·이사·보장 상실 등 Qualifying life event가 있으면 Special Enrollment이 열릴 수 있습니다. 가입 전에 저비용 진료가 필요하면 HRSA Health Center(슬라이딩 스케일)도 함께 알아두세요.",
    requirements: [
      "가구 구성원 이름·생년월일·관계",
      "예상 연간 가구 소득 (급여명세, 자영업 추정, 실업·지원금 등)",
      "거주지 주소·우편번호 (주·카운티 기준 확인용)",
      "SSN 또는 신청에 필요한 신원·체류 정보 (해당자)",
      "현재 보험 유무·직장 보험 제안 여부 (Marketplace 지원 산정에 영향)",
      "이메일·휴대폰 (계정 인증·결과 통지용)",
    ],
    steps: [
      "가구 소득을 대략 정리합니다. 월급·팁·배우자 소득·실업수당 등 ‘올해 예상 총액’이 Marketplace·Medicaid 심사에 쓰입니다.",
      "Healthcare.gov(또는 거주 주 Marketplace/Medicaid 사이트)에서 계정을 만들고 가구·소득·주소를 입력합니다.",
      "결과가 Medicaid/CHIP면 주 안내대로 추가 서류·인터뷰를 마칩니다. Marketplace면 지원금이 반영된 플랜 목록을 확인합니다.",
      "플랜을 고를 때 월 보험료뿐 아니라 Deductible, Copay, 주치의·약국·병원이 In-network인지 비교합니다. 지원금이 있으면 Silver + CSR 해당 여부를 확인합니다.",
      "가입(Enroll)을 완료하고 보장 시작일, 멤버 ID, 보험사 고객센터 번호를 저장합니다. 카드가 오기 전에도 포털의 임시 확인서로 진료가 가능한지 보험사에 묻습니다.",
      "소득·이사가 바뀌면 곧바로 계정에서 신고합니다. 신고가 늦으면 지원금 정산(세금 신고 시)에서 차액이 날 수 있습니다.",
      "당장 진료가 필요하면 findahealthcenter.hrsa.gov에서 소득 기준 클리닉을 찾고, 무보험 응급실 비용은 별도 가이드를 참고합니다.",
    ],
    links: [
      {
        label: "HealthCare.gov – 가입·지원금",
        url: "https://www.healthcare.gov/",
      },
      {
        label: "HealthCare.gov – Medicaid & CHIP",
        url: "https://www.healthcare.gov/medicaid-chip/",
      },
      {
        label: "Medicaid.gov",
        url: "https://www.medicaid.gov/",
      },
      {
        label: "InsureKidsNow.gov (CHIP)",
        url: "https://www.insurekidsnow.gov/",
      },
      {
        label: "Find a Health Center (저비용 클리닉)",
        url: "https://findahealthcenter.hrsa.gov/",
      },
      {
        label: "WA Healthplanfinder (워싱턴주)",
        url: "https://www.wahealthplanfinder.org/",
      },
      {
        label: "건강보험 가입(전체 경로)",
        url: "/guides/medical/health-insurance",
      },
      {
        label: "무보험·응급실 비용 처리",
        url: "/guides/medical/medical-bills",
      },
    ],
    updatedAt: "2026-08",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 의료·보험·이민 자문이 아닙니다. Medicaid·CHIP·Marketplace 자격과 지원금은 주·연도·가구 소득·체류 신분에 따라 달라지므로 Healthcare.gov·주 Medicaid·공식 상담 채널에서 최종 확인하세요.",
  },
  {
    slug: "medicare",
    category: "medical",
    title: "65세 메디케어 가입 (Medicare)",
    summary:
      "65세 Medicare Part A·B·C·D 차이, 가입 시기, 지연 페널티, Original vs Advantage 비교와 신청 절차를 정리한 가이드입니다.",
    cost: "Part A는 근로 크레딧에 따라 보험료 0원인 경우 많음 / Part B·D는 월 보험료·자기부담 있음 (연도·소득에 따라 변동)",
    methods: [
      "Original Medicare (A+B) + Part D",
      "Medicare Advantage (Part C)",
      "Medigap(보충보험, Advantage와 동시 가입 불가)",
      "SSA / Medicare.gov 온라인·전화 신청",
    ],
    overview:
      "Medicare는 주로 65세 이상(일부는 장애·특정 질환으로 65세 미만)을 위한 미국 연방 건강보험입니다. 한국의 국민건강보험처럼 ‘전 국민 자동 가입’이 아니라, 자격·가입 시기·어떤 Part를 고르는지에 따라 보장과 비용이 달라집니다. 크게 Part A(병원·입원 등), Part B(외래·의사 진료 등), Part D(처방약)로 나뉘고, Part A+B를 민간 플랜으로 묶은 형태가 Part C(Medicare Advantage)입니다. Original Medicare를 쓰면 의사·병원 선택의 폭이 넓은 편이고, Advantage는 네트워크·추가 혜택(치과·시력 등)이 플랜마다 다릅니다. Medigap은 Original Medicare의 본인 부담을 줄이는 보충보험이며 Advantage와 함께 쓸 수 없습니다. 영주권자 등 합법 체류자도 근로 크레딧(대략 10년분)·배우자 자격·거주 요건 등에 따라 가입 조건이 달라질 수 있고, 체류 서류가 없는 경우에는 일반적으로 Medicare 대상이 아닙니다. 가입이 늦으면 불이익이 생길 수 있습니다. Part B는 자격이 있는데도 직장 보험 등 예외 없이 가입을 미루면, 늦은 기간(12개월 단위)마다 표준 보험료의 약 10%가 가산되는 지연 가입 페널티가 붙을 수 있고, 이 가산은 보통 계속 유지됩니다. Part D도 처방약 ‘인정 보장(creditable coverage)’ 없이 일정 기간(보통 63일 이상) 공백이 있으면 월 페널티가 붙을 수 있습니다. 반대로 직장·배우자 직장 보험처럼 인정되는 보장이 있으면 Special Enrollment로 페널티 없이 나중에 가입하는 길이 있는 경우가 많습니다. 65세가 되기 몇 달 전 Initial Enrollment Period를 Medicare.gov·Social Security에서 미리 확인하세요.",
    requirements: [
      "만 65세 도래(또는 해당되는 장애·특수 자격)",
      "Social Security / Medicare 자격 조회에 필요한 SSN·신분 정보",
      "합법 체류·거주 관련 서류 (해당 시) 및 근로·크레딧 이력",
      "현재 직장·배우자 보험이 있으면 그 보장 내용 (지연 가입 예외·Creditable coverage 확인용)",
      "복용 약 목록 (Part D 플랜 비교용)",
    ],
    steps: [
      "65세가 되기 약 3개월 전, SSA.gov 또는 Medicare.gov에서 Medicare 자격·Initial Enrollment Period(보통 생일 전 3개월~당월~후 3개월)를 확인합니다.",
      "Part A만 자동으로 잡히는지, Part B를 따로 신청해야 하는지 안내문을 확인합니다. 직장 보험이 있으면 종료 시점과 Special Enrollment 규칙을 함께 봅니다.",
      "Original Medicare(A+B)로 갈지, Medicare Advantage(Part C)로 갈지 비교합니다. 주치의·자주 가는 병원이 네트워크에 있는지 확인합니다.",
      "처방약이 있으면 Part D(또는 Advantage에 포함된 약 보장)를 Medicare Plan Finder로 비교하고, 약 보장이 끊기지 않게 가입합니다.",
      "가입을 미룰 경우 Part B·D 지연 페널티 대상인지, 직장 보험이 ‘인정 보장’인지 보험사·SSA에 확인합니다. 막연히 ‘나중에’ 하면 보험료가 영구히 오를 수 있습니다.",
      "필요하면 Medigap(보충보험) 또는 Extra Help·Medicaid 중복 자격도 거주 주 기준으로 확인합니다.",
      "가입 확인서·Medicare 카드·멤버 ID를 저장하고, 병원 방문 전에 ‘Medicare를 받는지(Accept Medicare)’를 확인합니다.",
    ],
    links: [
      {
        label: "Medicare.gov",
        url: "https://www.medicare.gov/",
      },
      {
        label: "Medicare – 가입·자격 안내",
        url: "https://www.medicare.gov/basics/get-started-with-medicare",
      },
      {
        label: "Social Security – Medicare",
        url: "https://www.ssa.gov/medicare/",
      },
      {
        label: "Medicare Plan Finder",
        url: "https://www.medicare.gov/plan-compare",
      },
      {
        label: "건강보험 가입 가이드",
        url: "/guides/medical/health-insurance",
      },
    ],
    faq: [
      {
        question: "65세가 되면 자동으로 가입되나요?",
        answer:
          "항상 자동은 아닙니다. Social Security 혜택을 이미 받는 등 일부 경우에는 Part A가 자동 연결되기도 하지만, Part B·D·Advantage는 직접 선택·신청이 필요한 경우가 많습니다. 가입 시기(Initial Enrollment)를 미리 확인하세요.",
      },
      {
        question: "영주권자도 Medicare를 받을 수 있나요?",
        answer:
          "근로 크레딧·거주·신분 요건을 충족하면 가능한 경우가 많습니다. 체류 서류가 없거나 요건이 부족하면 대상이 아닐 수 있습니다. Medicare.gov·SSA에서 본인 자격을 확인하세요.",
      },
      {
        question: "Original과 Advantage 중 무엇을 고르나요?",
        answer:
          "의사·병원 선택의 폭(Original)과 네트워크·추가 혜택(Advantage)의 트레이드오프입니다. 복용 약·주치의·예산에 맞춰 Plan Finder로 비교하는 것이 좋습니다.",
      },
    ],
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 의료·보험 자문이 아닙니다. Medicare 자격·보험료·페널티·플랜 내용은 연도와 개인 상황(근로 이력, 체류 신분, 소득, 직장 보험 등)에 따라 달라지므로 Medicare.gov·Social Security·공인 상담 채널에서 최종 확인하세요.",
  },
  {
    slug: "find-doctor",
    category: "medical",
    title: "병원·의사 찾기",
    summary:
      "Primary care, Urgent care, ER의 차이부터 예약·보험 적용 확인까지 병원 이용 기본 흐름을 안내합니다.",
    cost: "보험·시설 유형에 따라 상이 (ER이 가장 비싼 편)",
    methods: ["보험사 디렉터리", "클리닉 웹사이트", "전화 예약"],
    overview:
      "평소 건강 관리의 출발점은 Primary care provider(주치의)입니다. 감기·경미한 부상처럼 당일 진료가 필요하면 Urgent care, 생명이 위험한 응급은 ER(Emergency room)을 이용합니다. 보험이 있어도 Out-of-network이면 비용이 크게 늘 수 있으므로, 방문 전 보험 카드의 멤버 포털에서 의사를 검색하는 습관이 중요합니다. 영어가 부담되면 통역(Interpreter) 서비스를 요청할 수 있는 병원이 많고, 한국어 의사를 찾으려면 보험사 Language 필터와 지역별 ‘한국어 의사 찾기’ 가이드를 함께 쓰면 됩니다. 현재는 시애틀·킹카운티 안내가 준비되어 있으며 다른 지역도 추가할 수 있습니다.",
    requirements: [
      "건강보험 카드 또는 멤버 ID",
      "신분증",
      "복용 중인 약·알레르기 목록",
      "이전 진료 기록(있으면)",
      "보험사 고객센터/포털 로그인 정보",
    ],
    steps: [
      "보험사 앱·웹사이트에서 In-network Primary care를 검색합니다. 한국어가 필요하면 Language 필터를 켭니다.",
      "시애틀 등 지역 안내는 ‘한국어 의사 찾기’에서 클리닉·통역 링크를 확인합니다.",
      "신규 환자(New patient) 예약을 받고, 초진에 필요한 서류를 확인합니다.",
      "경미한 증상은 Urgent care, 흉통·호흡곤란·대량 출혈 등은 911/ER을 이용합니다.",
      "방문 시 보험 카드와 신분증을 제출하고, Copay가 있는지 확인합니다.",
      "진료 후 After-visit summary와 처방(Pharmacy) 안내를 저장합니다.",
      "청구서(Bill)가 오면 Explanation of Benefits(EOB)와 대조해 오류가 없는지 봅니다.",
    ],
    links: [
      {
        label: "한국어 의사 찾기 (시애틀 등)",
        url: "/guides/medical/korean-doctors",
      },
      {
        label: "한방·침 진료",
        url: "/guides/medical/oriental-medicine",
      },
      {
        label: "물리치료 (Physical Therapy)",
        url: "/guides/medical/physical-therapy",
      },
      {
        label: "치과 진료·치과 보험",
        url: "/guides/medical/dental",
      },
      {
        label: "시력·안경·안과",
        url: "/guides/medical/vision",
      },
      {
        label: "Find a Health Center (HRSA)",
        url: "https://findahealthcenter.hrsa.gov/",
      },
      {
        label: "무보험·응급실 비용 처리 가이드",
        url: "/guides/medical/medical-bills",
      },
    ],
    disclaimer,
  },
  {
    slug: "medical-bills",
    category: "medical",
    title: "무보험·응급실 병원비 협상",
    summary:
      "보험이 없거나 체류가 불안정할 때 응급실 청구서(병원·의사 분리 청구)를 할인·할부·Charity care로 처리하는 실전 안내입니다.",
    cost: "응급실 수 시간만으로도 수천~수만 달러가 나올 수 있음 (시설·검사·의사 청구가 따로 옴)",
    methods: [
      "Financial assistance / Charity care",
      "Self-pay·즉시 납부 할인",
      "청구처별 전화 협상",
      "Payment plan(할부)",
    ],
    overview:
      "미국 응급실(ER)은 생명이 위험한 응급 상황에서 지불 능력과 관계없이 안정 치료를 받도록 하는 제도(EMTALA)가 있습니다. 다만 ‘치료받을 수 있다’와 ‘청구서가 적다’는 별개입니다. 보험이 없으면 병원비 고지액이 매우 크게 나오는 경우가 많고, 체류 서류가 불안정한 분들도 같은 상황에 자주 놓입니다. 특히 중요한 점: 병원비는 한 장이 아닙니다. 병원 시설비(Facility/Hospital bill), 응급의학과 의사비(Physician/ER doctor), 영상·검사, 마취·전문의 등 소속이 다른 업체가 각각 청구서를 보내는 경우가 흔합니다. 청구서에 적힌 회사 주소가 다른 도시(예: 로스앤젤레스 지역 빌링 센터)여도 이상하지 않습니다. 병원 원무과 한곳에서 모든 금액을 한꺼번에 깎아 주지 않는 경우가 많으니, 청구서마다 연락처를 찾아 각각 협상해야 합니다. ArriveUS 운영자가 겪은 경우에도, 응급실에서 약 4~6시간 진료 후 금액이 크게 나와 병원·의사·간호사 관련 청구를 각각 전화로 협상했고, 일부 청구는 절반 수준으로 낮춰 납부한 경험이 있습니다. 결과는 병원·주·소득 서류·협상 시점마다 다르지만, ‘고지액=최종 납부액’이 아니라는 점만은 기억해 두세요. 응급이 아닌 진료는 미리 FQHC(지역 보건센터) 등 슬라이딩 스케일 클리닉을 찾는 편이 비용 면에서 훨씬 안전합니다.",
    requirements: [
      "도착한 모든 청구서(Bill)와 업체명·계정번호·전화번호를 모은 파일",
      "방문 날짜, 병원명, 환자명 철자(영문)",
      "소득·가구 규모를 대략 설명할 수 있는 자료 (Financial assistance 신청 시)",
      "납부 가능 금액·할부 가능 여부 (현금/카드/이체)",
      "통화 날짜·담당자 이름·약속 내용을 적을 메모장",
    ],
    steps: [
      "응급이 아니면 911/ER 대신 Urgent care·커뮤니티 클리닉(FQHC)부터 검토합니다. ER은 마지막 수단으로 둡니다.",
      "퇴원할 때 또는 퇴원 직후 병원 Financial counselor / Patient financial services에 Charity care·Financial assistance·Self-pay discount가 있는지 묻습니다.",
      "우편·포털로 오는 청구서를 모두 모아, 병원 / 의사그룹 / 검사·영상 등 업체가 몇 곳인지 구분합니다. 같은 방문이라도 청구서가 몇 주에 걸쳐 따로 올 수 있습니다.",
      "각 청구서에 Itemized bill(상세 내역)을 요청하고, 중복·오류 항목이 있는지 확인합니다.",
      "보험이 없다고 밝히고 Self-pay discount, Prompt-pay(빠른 납부) 할인, Financial assistance 신청서를 요청합니다. 소득 서류를 요구하면 가능한 범위에서 제출합니다.",
      "한 곳에서 전부 처리되지 않으면, 의사·간호사·전문의 청구서에 적힌 Billing company에 각각 전화합니다. ‘무보험이라 전액을 내기 어렵다. 할인·할부가 가능한지’를 정중히 묻습니다.",
      "합의된 금액·납부 기한·할인율을 이메일이나 서면으로 남겨 달라고 요청한 뒤, 약속한 금액을 기한 안에 납부합니다. 무시하고 방치하면 추심(Collection)으로 넘어갈 수 있습니다.",
      "비응급 후속 진료는 저비용 클리닉·슬라이딩 스케일 기관을 다시 찾고, 가능하면 보험·주 프로그램 자격도 함께 확인합니다.",
    ],
    links: [
      {
        label: "Find a Health Center (HRSA) – 저비용 클리닉",
        url: "https://findahealthcenter.hrsa.gov/",
      },
      {
        label: "CMS – Emergency Medical Treatment (EMTALA 개요)",
        url: "https://www.cms.gov/medicare/regulations-guidance/legislation/emergency-medical-treatment-labor-act",
      },
      {
        label: "CFPB – 병원비를 못 낼 때",
        url: "https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-if-i-cant-pay-a-medical-bill-en-2125/",
      },
      {
        label: "CFPB – 병원비 재정 지원",
        url: "https://www.consumerfinance.gov/ask-cfpb/is-there-financial-help-for-my-medical-bills-en-2124/",
      },
      {
        label: "HealthCare.gov – 보험 가입",
        url: "https://www.healthcare.gov/",
      },
      {
        label: "병원·의사 찾기 가이드",
        url: "/guides/medical/find-doctor",
      },
    ],
    faq: [
      {
        question: "보험이 없어도 응급실을 이용할 수 있나요?",
        answer:
          "응급 상황에서는 EMTALA 등으로 안정 치료를 받는 경우가 많습니다. 다만 이후 병원비·의사비 청구는 별개로 올 수 있습니다.",
      },
      {
        question: "청구서가 여러 장 오는 게 정상인가요?",
        answer:
          "네. 병원 시설비, 응급의학과 의사, 영상·검사 등이 따로 청구되는 경우가 흔합니다. 각각 연락처를 확인해 협상·할인을 문의하세요.",
      },
      {
        question: "고지액 전액을 내야 하나요?",
        answer:
          "Financial assistance, Self-pay discount, 할부 등이 가능한 병원이 많습니다. 결과를 보장할 수는 없지만, ‘고지액=최종 납부액’이 아닌 경우가 많습니다.",
      },
    ],
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 의료·법률·채무 자문이 아닙니다. 할인·자선진료(Charity care) 기준과 청구 구조는 병원·주·청구 업체마다 다르며, 협상 결과를 보장하지 않습니다. 응급 상황에서는 먼저 911/ER을 이용하세요.",
  },
  {
    slug: "oriental-medicine",
    category: "medical",
    title: "한방·침 진료",
    summary:
      "미국에서의 침(Acupuncture)·한약·한방 클리닉 이용법, 주 면허 확인, 보험 적용 여부와 찾는 방법을 정리했습니다.",
    cost: "보험 적용 시 Copay·방문 횟수 제한이 흔함 / 무보험·비급여는 회당 수십~백수십 달러대인 경우 많음 (지역·시술 차이 큼)",
    methods: [
      "Licensed Acupuncturist (L.Ac.)",
      "Oriental Medicine / Herbal 클리닉",
      "의사·PA·NP가 제공하는 침 (일부 보험·Medicare)",
      "보험사 In-network 검색",
    ],
    overview:
      "한국에서 말하는 한방·침 진료는 미국에서 보통 Acupuncture(침), Oriental Medicine / Chinese Herbal Medicine(한약·변증 진료)로 불립니다. 주마다 자격이 다르지만, 많은 주에서 Licensed Acupuncturist(L.Ac.) 면허와 국가 자격(예전 NCCAOM, 현재 NCBAHM 등으로 이어지는 보드 인증)이 필요합니다. ‘마사지숍·스파에서 하는 침’과 ‘주 면허 한의사·침구사’는 다르니, 클리닉 이름만 보고 가지 말고 면허·보험 청구 가능 여부를 확인하세요. 보험은 플랜마다 천차만별입니다. 만성 요통·편두통 등 특정 진단에만 되거나, 연간 방문 횟수가 제한되거나, 아예 비급여인 경우도 많습니다. Medicare Part B는 만성 요통(Chronic low back pain)에 한해 침을 제한적으로 보장하지만, 일반 L.Ac.가 직접 Medicare에 청구하지 못하는 구조가 있어 의사·NP·PA 등 자격이 되는 제공자를 통해야 하는 경우가 많습니다. Medicaid·직장 보험·Marketplace 플랜은 주·보험사 약관을 직접 확인하세요. 한약(Herbal formula)은 미국 FDA 처방약과 규제가 다르고, 처방약·간 질환·임신과 상호작용이 있을 수 있어 복용 중인 약을 반드시 알리고, 가능하면 면허 있는 한약·침 병행 클리닉을 이용하세요. 한국어로 상담 가능한 한인 한방원도 많지만, 광고·후기만 믿지 말고 주 면허 조회와 보험 사전 확인을 권합니다.",
    requirements: [
      "건강보험 카드·멤버 ID (보험 청구 시)",
      "주 면허·클리닉 주소·전화번호",
      "증상·진단명·복용 약·알레르기 목록",
      "이전 영상·의사 소견서(있으면, 보험 Prior auth에 도움)",
      "본인부담(Copay)·방문 한도·Referral 필요 여부 확인 메모",
    ],
    steps: [
      "보험사 앱·고객센터에 ‘Acupuncture / Oriental medicine 보장 여부, In-network 클리닉, 연간 횟수, Referral·Prior authorization 필요 여부’를 확인합니다.",
      "NCCAOM/NCBAHM Find a Practitioner 또는 거주 주 Acupuncture Board에서 면허(L.Ac. 등)가 유효한지 검색합니다.",
      "클리닉에 전화해 보험 청구(Direct billing) 가능 여부, 초진 비용, 한약 별도 비용, 한국어 상담 가능 여부를 묻습니다.",
      "초진에서 증상·복용 약·임신을 알리고, 침·부항·추나·한약 중 어떤 시술이 포함되는지 견적을 받습니다.",
      "보험이 안 되면 Self-pay 패키지·회당 비용을 비교하고, 필요하면 주치의에게 양방 검사·물리치료와 병행할지 상의합니다.",
      "시술 후 이상 반응(감염 징후, 심한 통증, 어지럼)이 있으면 중단하고 Urgent care·ER 또는 주치의에게 연락합니다.",
      "청구서·EOB가 오면 방문 횟수·비급여 항목이 맞는지 대조합니다.",
    ],
    links: [
      {
        label: "NCCAOM/NCBAHM – Find a Practitioner",
        url: "https://www.nccaom.org/find-a-practitioner-directory/",
      },
      {
        label: "Medicare – Acupuncture 보장",
        url: "https://www.medicare.gov/coverage/acupuncture",
      },
      {
        label: "CCAHM – 면허 시술자 찾기 안내",
        url: "https://www.ccahm.org/ccaom/Find_a_Licensed_Practitioner.asp",
      },
      {
        label: "물리치료 가이드",
        url: "/guides/medical/physical-therapy",
      },
      {
        label: "병원·의사 찾기",
        url: "/guides/medical/find-doctor",
      },
      {
        label: "한국어 의사 찾기",
        url: "/guides/medical/korean-doctors",
      },
    ],
    faq: [
      {
        question: "미국에서도 한약을 먹을 수 있나요?",
        answer:
          "면허 있는 Oriental medicine 클리닉에서 조제·안내하는 경우가 있습니다. 다만 규제·품질·약 상호작용이 달라 자가 구매·해외 직구 한약은 위험할 수 있습니다. 복용 중인 양약·임신 여부를 반드시 알리세요.",
      },
      {
        question: "보험이 침을 항상 해주나요?",
        answer:
          "아닙니다. 플랜·진단·횟수 제한이 흔하고, Medicare는 만성 요통 등 제한적입니다. 방문 전 보험사에 보장·네트워크를 확인하세요.",
      },
      {
        question: "한인 한방원이면 면허는 괜찮은가요?",
        answer:
          "한인 클리닉이어도 주 면허가 필요합니다. 클리닉 웹사이트 문구만 보지 말고 주 Board·국가 자격 디렉터리에서 이름을 검색하세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 의료·한약·보험 자문이 아닙니다. 침·한약의 효과·안전·보험 적용은 개인·주·플랜마다 다르므로 면허 시술자·보험사·주치의와 확인하세요. 응급·중증 증상은 한방 대신 911/ER을 이용하세요.",
  },
  {
    slug: "physical-therapy",
    category: "medical",
    title: "물리치료 (Physical Therapy)",
    summary:
      "미국 Physical Therapy(PT) 이용 방법, 의사 Referral·보험 사전승인, 클리닉 찾기와 본인부담을 안내합니다.",
    cost: "보험 Copay·Coinsurance가 방문마다 붙는 경우가 많음 / 무보험·비네트워크는 회당 비용이 클 수 있음",
    methods: [
      "병원·클리닉 Outpatient PT",
      "독립 Physical Therapy 클리닉",
      "의사·정형외과 Referral",
      "보험사 In-network 검색 / ChoosePT",
    ],
    overview:
      "미국 물리치료는 Physical Therapy(PT)라고 하며, Licensed Physical Therapist가 통증·수술 후 재활·균형·스포츠 손상 등을 운동·도수·교육 중심으로 돕습니다. 한국처럼 ‘동네 의원에서 바로 물리치료실’로 이어지는 경우도 있지만, 보험에 따라 먼저 Primary care·Orthopedics 의사의 Referral(의뢰)이나 Prior authorization(사전승인)이 필요한 플랜이 많습니다. Direct access(의사 의뢰 없이 PT 방문)를 허용하는 주도 있으나, 보험이 의뢰 없이 비용을 안 갚아 주는 경우가 있어 ‘법적으로 가능한지’와 ‘보험이 내주는지’를 따로 확인해야 합니다. PT는 보통 주 1~3회, 수 주~수개월 단위로 진행되고, 연간 방문 한도·치료 기간 상한이 플랜에 있을 수 있습니다. Medicare는 일정 조건에서 Outpatient PT를 보장하지만 본인부담·의뢰 규칙이 있고, Advantage 플랜은 네트워크가 더 빡빡할 수 있습니다. 한의원 추나·마사지·카이로프랙틱(Chiropractic)과 PT는 자격·보험 코드가 다르니, ‘물리치료’가 필요하면 PT 면허(PT, DPT) 클리닉인지 확인하세요. 수술·골절·신경 증상이 있으면 먼저 의사 진료 후 PT를 연계하는 것이 안전합니다.",
    requirements: [
      "건강보험 카드·멤버 ID",
      "의사 Referral·처방전(보험·클리닉이 요구할 때)",
      "영상(MRI/X-ray)·수술 기록·진단명(있으면)",
      "통증 부위·목표(걷기, 출근, 스포츠 복귀 등)",
      "편한 운동복·실내화",
    ],
    steps: [
      "보험사에 Physical therapy 보장, In-network 클리닉, Referral·Prior auth 필요 여부, 방문당 Copay·연간 한도를 확인합니다.",
      "주치의·정형외과·스포츠의학과에 증상을 알리고 Referral이 필요하면 처방을 받습니다.",
      "ChoosePT(Find a PT) 또는 보험사 디렉터리에서 집·직장 근처 In-network PT를 고릅니다.",
      "클리닉에 보험 정보·Referral을 보내고 초진(Evaluation) 예약을 잡습니다. 대기 기간이 길 수 있어 빨리 연락하세요.",
      "초진에서 목표와 가정 운동(Home exercise)을 받고, 주당 횟수·예상 기간·본인부담을 확인합니다.",
      "통증이 급격히 악화되거나 마비·배뇨 장애·고열 등이 있으면 PT를 중단하고 의사·ER에 연락합니다.",
      "치료가 끝날 때 Discharge 요약과 가정 운동을 저장하고, 추가 방문이 보험 한도를 넘는지 미리 묻습니다.",
    ],
    links: [
      {
        label: "ChoosePT – Find a PT",
        url: "https://www.choosept.com/find-a-pt",
      },
      {
        label: "APTA (미국물리치료사협회)",
        url: "https://www.apta.org/",
      },
      {
        label: "Medicare – Physical therapy services",
        url: "https://www.medicare.gov/coverage/physical-therapy-services",
      },
      {
        label: "한방·침 진료 가이드",
        url: "/guides/medical/oriental-medicine",
      },
      {
        label: "병원·의사 찾기",
        url: "/guides/medical/find-doctor",
      },
      {
        label: "건강보험 가입",
        url: "/guides/medical/health-insurance",
      },
    ],
    faq: [
      {
        question: "의사 소개 없이 PT에 갈 수 있나요?",
        answer:
          "Direct access를 허용하는 주가 많습니다. 다만 보험이 Referral 없이 비용을 안 갚아 줄 수 있어, 방문 전 보험사에 꼭 확인하세요.",
      },
      {
        question: "한의원 물리치료와 같나요?",
        answer:
          "보통 다릅니다. 미국 보험에서 말하는 Physical Therapy는 면허 PT가 제공하는 재활 치료입니다. 추나·마사지·카이로와 코드·보장이 다를 수 있습니다.",
      },
      {
        question: "몇 번이나 받을 수 있나요?",
        answer:
          "플랜마다 연간 횟수·기간 한도가 있습니다. 초진 전에 보험사·클리닉에 남은 횟수와 Copay를 확인하세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 의료·재활·보험 자문이 아닙니다. PT 필요 여부·횟수·보험 적용은 진단과 플랜에 따라 달라지므로 의사·면허 PT·보험사에서 최종 확인하세요. 응급·중증 신경 증상은 911/ER을 이용하세요.",
  },
  {
    slug: "dental",
    category: "medical",
    title: "치과 진료·치과 보험",
    summary:
      "미국에서는 치과가 일반 건강보험과 따로인 경우가 많습니다. Dental insurance, Medicaid 치과, 클리닉 찾기와 비용 확인법을 정리했습니다.",
    cost: "클리닝·검진은 보험 Preventive로 무료~저비용인 경우 많음 / 충전·신경치료·임플란트는 본인부담이 클 수 있음",
    methods: [
      "직장·Marketplace Dental plan",
      "Medicaid/CHIP 치과 (주마다 다름)",
      "FQHC·저비용 치과 클리닉",
      "보험사 In-network Dentist 검색",
    ],
    overview:
      "한국 국민건강보험처럼 치과가 기본 의료보험에 폭넓게 포함되는 구조와 다릅니다. 많은 직장·Marketplace 의료보험(Medical)은 치아를 거의 안 덮고, 별도의 Dental insurance를 사거나 직장 패키지에 묶여 있는 경우가 많습니다. Dental 플랜은 보통 Preventive(검진·클리닝·X-ray), Basic(충전·발치 등), Major(크라운·신경치료·틀니 등)로 나뉘고, 연간 최대 보장액(Annual maximum)·대기 기간(Waiting period)·본인부담 비율이 있습니다. Medicaid·CHIP의 치과 보장도 주마다 다르고, 성인은 보장이 얇거나 없는 주가 있습니다. Original Medicare는 대부분의 일상 치과를 보장하지 않는 것이 일반적이며, 일부 Advantage 플랜만 치과를 추가합니다. 한인 치과의원이 많은 지역에서도 ‘보험을 받는지(In-network)’와 ‘어떤 시술이 보장되는지’를 예약 전에 확인하세요. 응급 치통·외상은 ER보다 치과 Urgent care·당일 예약을 먼저 알아보고, 보험이 없으면 HRSA Health Center·치과대학 클리닉 등 저비용 경로를 함께 검색하는 것이 안전합니다.",
    requirements: [
      "Dental 보험 카드 또는 Medical과 별도 멤버 ID",
      "최근 치과 기록·X-ray(있으면)",
      "복용 약·알레르기·임신 여부",
      "원하는 시술(검진, 충치, 틀니, 교정 등)",
      "본인부담·연간 한도를 적어 둘 메모",
    ],
    steps: [
      "의료보험 카드와 별도로 Dental 보장이 있는지 직장 HR·보험사·Marketplace에서 확인합니다.",
      "보장표에서 Preventive / Basic / Major, Waiting period, Annual maximum, In-network 치과 목록을 봅니다.",
      "ADA Find-a-Dentist 또는 보험사 디렉터리에서 집 근처 In-network 치과를 고르고, 한국어 가능 여부를 전화로 묻습니다.",
      "초진 전에 예상 시술 견적(Treatment plan)과 보험 사전조회(Pre-determination)가 되는지 요청합니다.",
      "충치·신경치료 등 큰 치료는 2곳 견적을 비교하고, 연간 한도를 넘으면 시기를 나누는 것도 방법입니다.",
      "보험이 없으면 FQHC·슬라이딩 스케일 치과·치과대학 클리닉을 검색하고, 응급은 당일 치과부터 연락합니다.",
      "진료 후 EOB·청구서가 오면 견적과 맞는지 확인하고, 이상이 있으면 치과 Billing에 문의합니다.",
    ],
    links: [
      {
        label: "HealthCare.gov – Dental coverage",
        url: "https://www.healthcare.gov/coverage/dental-coverage/",
      },
      {
        label: "ADA – Find a Dentist",
        url: "https://findadentist.ada.org/",
      },
      {
        label: "Medicare – Dental services",
        url: "https://www.medicare.gov/coverage/dental-services",
      },
      {
        label: "Find a Health Center (저비용 클리닉)",
        url: "https://findahealthcenter.hrsa.gov/",
      },
      {
        label: "시력·안경 가이드",
        url: "/guides/medical/vision",
      },
      {
        label: "건강보험 가입",
        url: "/guides/medical/health-insurance",
      },
    ],
    faq: [
      {
        question: "의료보험만 있으면 치과도 되나요?",
        answer:
          "대개 안 되거나 매우 제한적입니다. 별도 Dental plan이 있는지 카드·포털에서 확인하세요.",
      },
      {
        question: "클리닝은 무료인가요?",
        answer:
          "많은 Dental 플랜이 Preventive 클리닝·검진을 연 1~2회 본인부담 없이 또는 저비용으로 둡니다. 플랜 약관을 확인하세요.",
      },
      {
        question: "임플란트·교정은 보험이 되나요?",
        answer:
          "Major·교정(Orthodontics)은 대기 기간·부분 보장·비급여가 흔합니다. 치료 전 Pre-determination을 요청하세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 치과·보험 자문이 아닙니다. 보장·비용·대기 기간은 플랜·주·클리닉마다 다르므로 보험사와 치과에서 최종 확인하세요. 심한 부종·호흡 곤란·외상은 911/ER을 이용하세요.",
  },
  {
    slug: "vision",
    category: "medical",
    title: "시력·안경·안과",
    summary:
      "안경·콘택트·시력검사(Vision)와 안과(Eye disease) 진료의 차이, Vision 보험과 찾는 방법을 안내합니다.",
    cost: "시력검사·안경은 Vision 플랜 혜택 범위 내인 경우 많음 / 질환 진료·수술은 Medical 보험 영역인 경우가 많음",
    methods: [
      "직장·별도 Vision plan",
      "Optometrist (시력·안경)",
      "Ophthalmologist (안과 질환·수술)",
      "Optical 매장 + 보험 네트워크",
    ],
    overview:
      "미국에서는 ‘눈’도 치과처럼 일반 의료보험과 역할이 나뉘는 경우가 많습니다. 시력검사(Eye exam), 안경·콘택트렌즈는 보통 별도 Vision insurance로 다루고, 녹내장·망막·백내장 등 질환·수술은 Medical 보험과 안과 전문의(Ophthalmologist) 영역인 경우가 많습니다. 안경을 맞추는 Optometrist(검안사)와 수술을 하는 Ophthalmologist(안과 전문의)를 혼동하지 마세요. Vision 플랜은 보통 1~2년마다 시력검사 1회, 안경테·렌즈 또는 콘택트 허용 금액(Allowance)이 있고, 고급 렌즈·브랜드 테는 차액을 내가 됩니다. Original Medicare는 일상 안경·정기 시력검사를 대부분 보장하지 않고, 백내장 수술 후 표준 안경 등 예외만 있는 식입니다. Advantage·직장 플랜은 Vision을 추가하는 경우가 많습니다. 한인 안경원·Optometrist도 많지만, In-network인지·검사비만 보험인지·안경까지인지 예약 전 확인이 필요합니다. 갑작스러운 시력 소실·심한 눈 통증·외상은 Vision 클리닉이 아니라 Urgent care/ER·안과 응급을 우선하세요.",
    requirements: [
      "Vision 보험 카드 또는 Medical 멤버 ID",
      "현재 안경·콘택트 도수(있으면)",
      "복용 약·알레르기·당뇨·고혈압 여부",
      "증상(흐림, 통증, 비문증, 복시 등)",
      "안경/콘택트 중 원하는 보정 방법",
    ],
    steps: [
      "의료보험과 별도로 Vision 보장이 있는지 HR·보험 포털에서 확인합니다.",
      "시력검사만 필요한지, 질환 증상이 있는지 구분합니다. 질환·수술이 의심되면 주치의·안과(Ophthalmology) 경로를 봅니다.",
      "보험사 디렉터리 또는 AOA Find a Doctor에서 In-network Optometrist를 찾습니다.",
      "예약 시 보험으로 검사·안경·콘택트 중 무엇이 되는지, 본인부담 Allowance를 묻습니다.",
      "처방전(Prescription)을 받은 뒤 같은 곳 또는 다른 Optical에서 안경을 맞출 수 있는지, 차액이 얼마인지 비교합니다.",
      "콘택트는 착용 교육·정기 검사가 필요한 경우가 많아 안내에 따릅니다.",
      "청구·EOB가 오면 검사일과 제품이 맞는지 확인하고, 문제가 있으면 클리닉 Billing에 연락합니다.",
    ],
    links: [
      {
        label: "AOA – Find a Doctor",
        url: "https://www.aoa.org/healthy-eyes/find-a-doctor",
      },
      {
        label: "Medicare – Eyeglasses & contact lenses",
        url: "https://www.medicare.gov/coverage/eyeglasses-contact-lenses",
      },
      {
        label: "HealthCare.gov",
        url: "https://www.healthcare.gov/",
      },
      {
        label: "치과 가이드",
        url: "/guides/medical/dental",
      },
      {
        label: "병원·의사 찾기",
        url: "/guides/medical/find-doctor",
      },
      {
        label: "건강보험 가입",
        url: "/guides/medical/health-insurance",
      },
    ],
    faq: [
      {
        question: "안경은 의료보험으로 되나요?",
        answer:
          "일상 안경·정기 시력검사는 별도 Vision 플랜인 경우가 많습니다. Medical은 질환·수술 쪽에 가깝습니다.",
      },
      {
        question: "Optometrist와 Ophthalmologist 차이는요?",
        answer:
          "Optometrist는 시력검사·안경/콘택트가 중심이고, Ophthalmologist는 안과 질환·수술을 다루는 의사입니다.",
      },
      {
        question: "갑자기 앞이 안 보이면 어디로 가나요?",
        answer:
          "응급으로 보고 ER 또는 안과 응급을 우선하세요. 일반 안경원 예약으로 미루지 마세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 안과·시력·보험 자문이 아닙니다. 보장과 비용은 플랜·제공자마다 다르므로 보험사와 클리닉에서 최종 확인하세요. 급격한 시력 변화·심한 통증·외상은 911/ER을 이용하세요.",
  },
];
