export type KoreanDoctorLink = {
  label: string;
  url: string;
};

export type KoreanDoctorPhrase = {
  ko: string;
  en: string;
};

export type KoreanDoctorRegion = {
  slug: string;
  nameKo: string;
  nameEn: string;
  areaNote: string;
  summary: string;
  featured?: boolean;
  comingSoon?: boolean;
  tips: string[];
  steps: string[];
  links: KoreanDoctorLink[];
  phrases?: KoreanDoctorPhrase[];
};

/**
 * 지역별 한국어 진료·통역 안내.
 * 새 도시는 이 배열에 객체를 추가하면 목록·상세 페이지에 자동 반영됩니다.
 */
export const koreanDoctorRegions: KoreanDoctorRegion[] = [
  {
    slug: "seattle",
    nameKo: "시애틀·킹카운티",
    nameEn: "Seattle & King County",
    areaNote: "워싱턴주 · 시애틀, 벨뷰, 쇼어라인 등",
    summary:
      "시애틀 일대에서 한국어 의사·통역을 찾는 기본 경로입니다. 보험 네트워크 검색과 다국어 커뮤니티 클리닉을 함께 안내합니다.",
    featured: true,
    tips: [
      "특정 개인 의사를 ‘추천’하지 않습니다. 보험 적용·예약 가능 여부는 직접 확인하세요.",
      "커뮤니티 클리닉(ICHS 등)은 한국어 스태프·통역을 요청할 수 있는 경우가 많습니다.",
      "한인타운·페더럴웨이·벨뷰 쪽도 왕진·개원 의원이 많으니, 보험사 디렉터리에서 Language: Korean으로 좁혀 보세요.",
    ],
    steps: [
      "보험사 앱·웹 Doctor Finder에서 Language / Korean / Interpreter를 필터합니다.",
      "Primary care·치과·산부인과 등 필요한 과목을 정한 뒤 In-network 여부를 확인합니다.",
      "커뮤니티 클리닉(예: ICHS)에 전화·온라인으로 예약하며 ‘Korean-speaking provider or interpreter’를 요청합니다.",
      "초진 시 보험 카드·신분증·약 목록을 가져가고, 통역이 필요한지 접수 때 한 번 더 말합니다.",
      "응급이 아니면 ER보다 Urgent care·클리닉을 먼저 검토합니다. 무보험이면 Financial assistance도 함께 문의합니다.",
    ],
    links: [
      {
        label: "ICHS – 통역·언어 안내 (한국어 포함)",
        url: "https://www.ichs.com/interpreter-services",
      },
      {
        label: "ICHS – 클리닉·의료진 찾기",
        url: "https://www.ichs.com/providers",
      },
      {
        label: "ICHS – International District 클리닉",
        url: "https://www.ichs.com/locations/international-district-medical-and-dental-clinic",
      },
      {
        label: "HRSA – 저비용 Health Center 검색",
        url: "https://findahealthcenter.hrsa.gov/",
      },
      {
        label: "WA Healthplanfinder (워싱턴 보험 가입)",
        url: "https://www.wahealthplanfinder.org/",
      },
    ],
    phrases: [
      {
        ko: "한국어 가능한 의사를 찾고 싶습니다.",
        en: "I am looking for a Korean-speaking doctor.",
      },
      {
        ko: "한국어 통역을 요청할 수 있나요?",
        en: "Can I request a Korean interpreter for my visit?",
      },
      {
        ko: "제 보험 네트워크에 한국어 의사가 있나요?",
        en: "Do you have Korean-speaking providers in my insurance network?",
      },
      {
        ko: "초진 예약을 잡고 싶습니다. 한국어로 진료받고 싶습니다.",
        en: "I would like to schedule a new patient visit with Korean language support.",
      },
    ],
  },
  {
    slug: "los-angeles",
    nameKo: "로스앤젤레스",
    nameEn: "Los Angeles",
    areaNote: "캘리포니아 · LA·OC·한인타운 일대",
    summary:
      "LA·오렌지카운티에서 한국어 진료·통역을 찾는 기본 경로입니다. 보험 마켓플레이스와 커뮤니티 클리닉을 함께 안내합니다.",
    tips: [
      "특정 개인 의사를 ‘추천’하지 않습니다. 보험 적용·예약은 직접 확인하세요.",
      "코리아타운·풀erton·어바인 등에도 한인 의원이 많으니, 보험사 디렉터리에서 Language: Korean으로 검색하세요.",
      "커뮤니티 클리닉(예: Kheir)은 한국어 가능 스태프·슬라이딩 피(소득별 비용)를 문의할 수 있는 경우가 많습니다.",
    ],
    steps: [
      "보험이 있으면 Covered California·보험사 Doctor Finder에서 Korean / Interpreter를 필터합니다.",
      "무보험·저소득이면 HRSA Health Center 검색과 지역 커뮤니티 클리닉에 예약·비용(슬라이딩 피)을 문의합니다.",
      "초진 시 보험 카드·신분증·약 목록을 가져가고, 접수 때 한국어 통역·한국어 가능 의사를 요청합니다.",
      "응급이 아니면 ER보다 Urgent care·클리닉을 먼저 검토합니다.",
      "캘리포니아 DMV·주거와 별개로, 보험 가입 시즌·특별 가입(Qualifying life event) 여부를 Covered California에서 확인합니다.",
    ],
    links: [
      {
        label: "Kheir Clinic (LA 커뮤니티 클리닉)",
        url: "https://lakheir.org/",
      },
      {
        label: "Covered California (주 보험 마켓)",
        url: "https://www.coveredca.com/",
      },
      {
        label: "HRSA – 저비용 Health Center 검색",
        url: "https://findahealthcenter.hrsa.gov/",
      },
      {
        label: "Medi-Cal 안내 (저소득 의료)",
        url: "https://www.dhcs.ca.gov/services/medi-cal",
      },
    ],
    phrases: [
      {
        ko: "한국어 가능한 의사를 찾고 싶습니다.",
        en: "I am looking for a Korean-speaking doctor.",
      },
      {
        ko: "한국어 통역을 요청할 수 있나요?",
        en: "Can I request a Korean interpreter for my visit?",
      },
      {
        ko: "슬라이딩 피(소득별 비용)가 있나요?",
        en: "Do you offer a sliding fee scale based on income?",
      },
      {
        ko: "제 보험 네트워크에 한국어 의사가 있나요?",
        en: "Do you have Korean-speaking providers in my insurance network?",
      },
    ],
  },
  {
    slug: "new-york",
    nameKo: "뉴욕",
    nameEn: "New York",
    areaNote: "뉴욕주 · NYC·롱아일랜드·뉴저지 인근",
    summary:
      "뉴욕 일대에서 한국어 진료·통역을 찾는 기본 경로입니다. NY State of Health와 Health Center 검색을 중심으로 안내합니다.",
    tips: [
      "특정 개인 의사를 ‘추천’하지 않습니다. 네트워크·예약은 직접 확인하세요.",
      "플러싱·베이사이드·팰리세이즈파크 등 한인 밀집 지역은 보험사 디렉터리에서 Korean으로 좁히기 쉽습니다.",
      "시·연 커뮤니티 Health Center는 소득에 따른 비용·통역을 문의할 수 있는 경우가 많습니다.",
    ],
    steps: [
      "보험이 있으면 NY State of Health·보험사 Find a Doctor에서 Language: Korean을 검색합니다.",
      "무보험·저소득이면 HRSA Health Center Finder로 가까운 클리닉을 찾고 통역·비용을 전화로 확인합니다.",
      "초진 예약 시 보험 카드·신분증·약 목록을 준비하고, Korean interpreter를 요청합니다.",
      "응급이 아니면 ER보다 Urgent care·클리닉을 먼저 검토합니다.",
      "뉴저지·커네티컷에 살아도 직장이 뉴욕이면 보험·주치의 네트워크가 달라질 수 있으니 플랜 문서를 확인합니다.",
    ],
    links: [
      {
        label: "NY State of Health (주 보험 마켓)",
        url: "https://nystateofhealth.ny.gov/",
      },
      {
        label: "HRSA – 저비용 Health Center 검색",
        url: "https://findahealthcenter.hrsa.gov/",
      },
      {
        label: "NYC Health + Hospitals",
        url: "https://www.nychealthandhospitals.org/",
      },
      {
        label: "Medicaid (뉴욕주 안내 허브)",
        url: "https://www.health.ny.gov/health_care/medicaid/",
      },
    ],
    phrases: [
      {
        ko: "한국어 가능한 의사를 찾고 싶습니다.",
        en: "I am looking for a Korean-speaking doctor.",
      },
      {
        ko: "한국어 통역을 요청할 수 있나요?",
        en: "Can I request a Korean interpreter for my visit?",
      },
      {
        ko: "제 보험 네트워크에 한국어 의사가 있나요?",
        en: "Do you have Korean-speaking providers in my insurance network?",
      },
      {
        ko: "초진 예약을 잡고 싶습니다. 한국어로 진료받고 싶습니다.",
        en: "I would like to schedule a new patient visit with Korean language support.",
      },
    ],
  },
];
