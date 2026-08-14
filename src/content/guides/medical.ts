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
    ],
    disclaimer,
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
      "평소 건강 관리의 출발점은 Primary care provider(주치의)입니다. 감기·경미한 부상처럼 당일 진료가 필요하면 Urgent care, 생명이 위험한 응급은 ER(Emergency room)을 이용합니다. 보험이 있어도 Out-of-network이면 비용이 크게 늘 수 있으므로, 방문 전 보험 카드의 멤버 포털에서 의사를 검색하는 습관이 중요합니다. 영어가 부담되면 통역(Interpreter) 서비스를 요청할 수 있는 병원이 많습니다.",
    requirements: [
      "건강보험 카드 또는 멤버 ID",
      "신분증",
      "복용 중인 약·알레르기 목록",
      "이전 진료 기록(있으면)",
      "보험사 고객센터/포털 로그인 정보",
    ],
    steps: [
      "보험사 앱·웹사이트에서 In-network Primary care를 검색합니다.",
      "신규 환자(New patient) 예약을 받고, 초진에 필요한 서류를 확인합니다.",
      "경미한 증상은 Urgent care, 흉통·호흡곤란·대량 출혈 등은 911/ER을 이용합니다.",
      "방문 시 보험 카드와 신분증을 제출하고, Copay가 있는지 확인합니다.",
      "진료 후 After-visit summary와 처방(Pharmacy) 안내를 저장합니다.",
      "청구서(Bill)가 오면 Explanation of Benefits(EOB)와 대조해 오류가 없는지 봅니다.",
    ],
    links: [
      {
        label: "USA.gov – Doctors and hospitals",
        url: "https://www.usa.gov/doctors",
      },
      {
        label: "Find a Health Center (HRSA)",
        url: "https://findahealthcenter.hrsa.gov/",
      },
    ],
    disclaimer,
  },
];
