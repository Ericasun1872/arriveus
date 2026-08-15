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
        label: "건강보험 가입(전체 경로)",
        url: "/guides/medical/health-insurance",
      },
      {
        label: "무보험·응급실 비용 처리",
        url: "/guides/medical/medical-bills",
      },
    ],
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
        label: "USA.gov – Doctors and hospitals",
        url: "https://www.usa.gov/doctors",
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
        label: "CFPB – Medical billing",
        url: "https://www.consumerfinance.gov/consumer-tools/medical-billing/",
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
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 의료·법률·채무 자문이 아닙니다. 할인·자선진료(Charity care) 기준과 청구 구조는 병원·주·청구 업체마다 다르며, 협상 결과를 보장하지 않습니다. 응급 상황에서는 먼저 911/ER을 이용하세요.",
  },
];
