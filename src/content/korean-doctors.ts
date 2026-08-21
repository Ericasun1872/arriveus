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
      "코리아타운·풀러턴·어바인 등에도 한인 의원이 많으니, 보험사 디렉터리에서 Language: Korean으로 검색하세요.",
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
  {
    slug: "bay-area",
    nameKo: "베이 에어리어",
    nameEn: "Bay Area",
    areaNote: "캘리포니아 · SF·산호세·오클랜드·산마테오 등",
    summary:
      "샌프란시스코 베이 에어리어에서 한국어 진료·통역을 찾는 기본 경로입니다. Covered California와 Health Center 검색을 안내합니다.",
    tips: [
      "특정 개인 의사를 ‘추천’하지 않습니다. 네트워크·예약은 직접 확인하세요.",
      "산타클라라·알라메다·산마테오 카운티마다 클리닉·보험 네트워크가 다를 수 있습니다.",
      "한인 밀집 지역(산호세·써니베일 등)은 보험사 Language: Korean 검색이 유용합니다.",
    ],
    steps: [
      "보험이 있으면 Covered California·보험사 Doctor Finder에서 Korean을 필터합니다.",
      "무보험·저소득이면 HRSA Health Center Finder로 가까운 클리닉을 찾고 통역·비용을 확인합니다.",
      "초진 시 보험 카드·신분증·약 목록을 가져가고 한국어 통역을 요청합니다.",
      "응급이 아니면 ER보다 Urgent care·클리닉을 먼저 검토합니다.",
    ],
    links: [
      {
        label: "Covered California",
        url: "https://www.coveredca.com/",
      },
      {
        label: "HRSA – Health Center 검색",
        url: "https://findahealthcenter.hrsa.gov/",
      },
      {
        label: "Medi-Cal 안내",
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
    ],
  },
  {
    slug: "chicago",
    nameKo: "시카고",
    nameEn: "Chicago",
    areaNote: "일리노이주 · 시카고·근교",
    summary:
      "시카고 일대에서 한국어 진료·통역을 찾는 기본 경로입니다. Get Covered Illinois와 Health Center 검색을 안내합니다.",
    tips: [
      "특정 개인 의사를 ‘추천’하지 않습니다.",
      "한인타운·교외(나퍼빌 등) 모두 보험 네트워크가 다를 수 있어 ZIP으로 검색하세요.",
      "커뮤니티 Health Center는 슬라이딩 피·통역을 문의할 수 있는 경우가 많습니다.",
    ],
    steps: [
      "보험이 있으면 Get Covered Illinois·보험사 디렉터리에서 Korean을 검색합니다.",
      "무보험·저소득이면 HRSA Finder로 클리닉을 찾고 통역을 요청합니다.",
      "초진에 보험 카드·약 목록을 준비하고, Urgent care vs ER를 구분합니다.",
    ],
    links: [
      {
        label: "Get Covered Illinois",
        url: "https://getcovered.illinois.gov/",
      },
      {
        label: "HRSA – Health Center 검색",
        url: "https://findahealthcenter.hrsa.gov/",
      },
      {
        label: "Illinois Medicaid",
        url: "https://hfs.illinois.gov/medicalprograms.html",
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
    ],
  },
  {
    slug: "dallas",
    nameKo: "댈러스·DFW",
    nameEn: "Dallas–Fort Worth",
    areaNote: "텍사스주 · 댈러스·플래노·얼빙 등",
    summary:
      "DFW 일대에서 한국어 진료·통역을 찾는 기본 경로입니다. Healthcare.gov(텍사스)와 Health Center 검색을 안내합니다.",
    tips: [
      "특정 개인 의사를 ‘추천’하지 않습니다.",
      "플래노·캐럴턴·얼빙 등 한인 밀집 지역은 보험사 Korean 필터가 유용합니다.",
      "텍사스는 주 마켓 대신 Healthcare.gov를 쓰는 경우가 많습니다.",
    ],
    steps: [
      "보험이 있으면 Healthcare.gov·보험사 Doctor Finder에서 Korean을 검색합니다.",
      "무보험·저소득이면 HRSA Finder와 지역 클리닉 비용을 확인합니다.",
      "초진 시 통역·보험 네트워크를 확인하고, 응급이 아니면 Urgent care를 먼저 검토합니다.",
    ],
    links: [
      {
        label: "HealthCare.gov",
        url: "https://www.healthcare.gov/",
      },
      {
        label: "HRSA – Health Center 검색",
        url: "https://findahealthcenter.hrsa.gov/",
      },
      {
        label: "Texas Health & Human Services",
        url: "https://www.hhs.texas.gov/",
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
    ],
  },
  {
    slug: "atlanta",
    nameKo: "애틀랜타",
    nameEn: "Atlanta",
    areaNote: "조지아주 · 애틀랜타·덜루스·존스크릭 등",
    summary:
      "애틀랜타 일대에서 한국어 진료·통역을 찾는 기본 경로입니다. Georgia Access와 Health Center 검색을 안내합니다.",
    tips: [
      "특정 개인 의사를 ‘추천’하지 않습니다.",
      "덜루스·존스크릭·수와니 등 한인 밀집 지역은 보험사 Language 필터로 좁히세요.",
      "커뮤니티 클리닉·슬라이딩 피는 HRSA 검색으로 시작할 수 있습니다.",
    ],
    steps: [
      "보험이 있으면 Georgia Access·보험사 디렉터리에서 Korean을 검색합니다.",
      "무보험·저소득이면 HRSA Finder로 클리닉·통역·비용을 확인합니다.",
      "초진 예약 시 보험·약 목록·통역을 준비하고 Urgent care vs ER를 구분합니다.",
    ],
    links: [
      {
        label: "Georgia Access",
        url: "https://www.georgiaaccess.gov/",
      },
      {
        label: "HRSA – Health Center 검색",
        url: "https://findahealthcenter.hrsa.gov/",
      },
      {
        label: "Georgia Medicaid",
        url: "https://medicaid.georgia.gov/",
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
    ],
  },
  {
    slug: "northern-virginia",
    nameKo: "북버지니아·DC 근교",
    nameEn: "Northern Virginia & DC metro",
    areaNote: "버지니아 · 페어팩스·애난데일·센터빌 · DC·메릴랜드 통근권",
    summary:
      "북버지니아·DC 메트로에서 한국어 진료·통역을 찾는 기본 경로입니다. Virginia 보험 마켓과 Health Center 검색을 안내합니다.",
    tips: [
      "특정 개인 의사를 ‘추천’하지 않습니다. 네트워크·예약은 직접 확인하세요.",
      "애난데일·센터빌·페어팩스 등 한인 밀집 지역은 보험사 Language: Korean 검색이 유용합니다.",
      "거주 주(VA/MD/DC)와 직장 주가 다르면 보험 네트워크·주치의 지역이 달라질 수 있습니다.",
    ],
    steps: [
      "보험이 있으면 Virginia 보험 마켓(또는 해당 주 마켓)·보험사 Doctor Finder에서 Korean을 검색합니다.",
      "무보험·저소득이면 HRSA Health Center Finder로 클리닉·통역·비용을 확인합니다.",
      "초진 시 보험 카드·약 목록을 가져가고 한국어 통역을 요청합니다.",
      "응급이 아니면 ER보다 Urgent care·클리닉을 먼저 검토합니다.",
    ],
    links: [
      {
        label: "HealthCare.gov (보험 마켓)",
        url: "https://www.healthcare.gov/",
      },
      {
        label: "HRSA – Health Center 검색",
        url: "https://findahealthcenter.hrsa.gov/",
      },
      {
        label: "DC Health Link (DC 거주 시)",
        url: "https://dchealthlink.com/",
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
    ],
  },
  {
    slug: "miami",
    nameKo: "마이애미",
    nameEn: "Miami",
    areaNote: "플로리다주 · 마이애미·브로워드·팜비치 일대",
    summary:
      "마이애미 일대에서 한국어 진료·통역을 찾는 기본 경로입니다. HealthCare.gov, HRSA Health Center, Florida Medicaid 검색을 안내합니다.",
    tips: [
      "특정 개인 의사를 ‘추천’하지 않습니다. 보험 적용·예약은 직접 확인하세요.",
      "한인·다국어 클리닉은 보험사 Language 필터와 HRSA 검색을 함께 쓰세요.",
      "플로리다는 주 자체 Marketplace 대신 HealthCare.gov를 쓰는 경우가 많습니다.",
      "브로워드·팜비치도 네트워크가 다를 수 있어 ZIP·카운티로 검색하세요.",
    ],
    steps: [
      "보험이 있으면 HealthCare.gov·보험사 Doctor Finder에서 Korean / Interpreter를 검색합니다.",
      "Primary care·치과 등 과목을 정한 뒤 In-network 여부와 통역 가능 여부를 확인합니다.",
      "무보험·저소득이면 HRSA Finder로 클리닉·슬라이딩 피·통역을 확인합니다.",
      "초진 시 보험 카드·신분증·약 목록을 가져가고 접수 때 한국어 통역을 요청합니다.",
      "응급이 아니면 ER보다 Urgent care·클리닉을 먼저 검토합니다.",
    ],
    links: [
      {
        label: "HealthCare.gov",
        url: "https://www.healthcare.gov/",
      },
      {
        label: "HRSA – Health Center 검색",
        url: "https://findahealthcenter.hrsa.gov/",
      },
      {
        label: "Florida Medicaid",
        url: "https://www.flmedicaidmanagedcare.com/",
      },
      {
        label: "Florida Healthy Kids (아동 보험 안내)",
        url: "https://www.healthykids.org/",
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
        ko: "이 클리닉은 제 보험 네트워크인가요?",
        en: "Is this clinic in my insurance network?",
      },
      {
        ko: "슬라이딩 스케일 비용이 가능한가요?",
        en: "Do you offer a sliding-scale fee?",
      },
    ],
  },
  {
    slug: "houston",
    nameKo: "휴스턴",
    nameEn: "Houston",
    areaNote: "텍사스주 · 휴스턴·스프링·케이티 등 근교",
    summary:
      "휴스턴 일대에서 한국어 진료·통역을 찾는 기본 경로입니다. HealthCare.gov, HRSA, Texas HHS 검색을 안내합니다.",
    tips: [
      "특정 개인 의사를 ‘추천’하지 않습니다. 보험 적용·예약은 직접 확인하세요.",
      "스프링·케이티·슈거랜드 등 근교도 보험 네트워크가 다를 수 있어 ZIP으로 검색하세요.",
      "텍사스는 HealthCare.gov를 이용하는 경우가 많습니다.",
      "대형 병원 시스템과 커뮤니티 클리닉을 함께 비교하면 통역·대기 시간이 다를 수 있습니다.",
    ],
    steps: [
      "보험이 있으면 HealthCare.gov·보험사 디렉터리에서 Korean을 검색합니다.",
      "필요한 과목과 In-network 여부를 확인한 뒤 통역 가능 여부를 전화로 묻습니다.",
      "무보험·저소득이면 HRSA Finder와 Texas HHS 안내로 클리닉·비용을 확인합니다.",
      "초진에 보험·약 목록·통역을 준비하고 Urgent care vs ER를 구분합니다.",
      "응급이 아니면 ER보다 Urgent care·클리닉을 먼저 검토합니다.",
    ],
    links: [
      {
        label: "HealthCare.gov",
        url: "https://www.healthcare.gov/",
      },
      {
        label: "HRSA – Health Center 검색",
        url: "https://findahealthcenter.hrsa.gov/",
      },
      {
        label: "Texas Health & Human Services",
        url: "https://www.hhs.texas.gov/",
      },
      {
        label: "Texas Medicaid & CHIP",
        url: "https://www.hhs.texas.gov/services/health/medicaid-chip",
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
        ko: "이 ZIP 코드 근처 클리닉을 알려 주세요.",
        en: "Can you recommend a clinic near this ZIP code?",
      },
      {
        ko: "초진 예약과 필요 서류를 알려 주세요.",
        en: "I would like to schedule a new-patient visit. What should I bring?",
      },
    ],
  },
  {
    slug: "boston",
    nameKo: "보스턴",
    nameEn: "Boston",
    areaNote: "매사추세츠주 · 보스턴·케임브리지·퀸시 등",
    summary:
      "보스턴 일대에서 한국어 진료·통역을 찾는 기본 경로입니다. Massachusetts Health Connector, MassHealth, Health Center 검색을 안내합니다.",
    tips: [
      "특정 개인 의사를 ‘추천’하지 않습니다. 보험 적용·예약은 직접 확인하세요.",
      "케임브리지·퀸시·브루클린 등 근교도 네트워크가 다를 수 있습니다.",
      "커뮤니티 Health Center는 슬라이딩 피·통역을 문의할 수 있는 경우가 많습니다.",
      "MassHealth와 Connector 플랜은 의사 네트워크가 다를 수 있어 가입 상품을 먼저 확인하세요.",
    ],
    steps: [
      "보험이 있으면 Massachusetts Health Connector·보험사에서 Korean / Interpreter를 검색합니다.",
      "Primary care 등 과목을 정한 뒤 In-network와 통역 가능 여부를 확인합니다.",
      "무보험·저소득이면 HRSA Finder·MassHealth 자격 안내를 확인하고 통역을 요청합니다.",
      "초진 시 보험 카드·약 목록을 준비하고 Urgent care vs ER를 구분합니다.",
      "응급이 아니면 ER보다 Urgent care·클리닉을 먼저 검토합니다.",
    ],
    links: [
      {
        label: "Massachusetts Health Connector",
        url: "https://www.mahealthconnector.org/",
      },
      {
        label: "HRSA – Health Center 검색",
        url: "https://findahealthcenter.hrsa.gov/",
      },
      {
        label: "MassHealth",
        url: "https://www.mass.gov/topics/masshealth",
      },
      {
        label: "Mass.gov – Find a health center",
        url: "https://www.mass.gov/info-details/find-a-community-health-center",
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
        ko: "MassHealth / Connector 플랜으로 진료가 가능한가요?",
        en: "Do you accept my MassHealth or Health Connector plan?",
      },
      {
        ko: "커뮤니티 헬스센터 예약을 하고 싶습니다.",
        en: "I would like to make an appointment at a community health center.",
      },
    ],
  },
];
