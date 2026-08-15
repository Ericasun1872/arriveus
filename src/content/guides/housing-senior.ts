import type { Guide } from "../types";

const disclaimer =
  "ArriveUS 가이드는 일반적인 참고 정보이며 부동산·법률·요양 자문이 아닙니다. 단지 계약서와 주·시·연방 주거 프로그램 규정을 직접 확인하세요.";

export const seniorHousingGuides: Guide[] = [
  {
    slug: "senior-housing-55",
    category: "housing",
    title: "55세 이상 시니어 주거 (중상층)",
    summary:
      "55+ Active Adult, Independent Living, CCRC 등 중산·중상층 시니어 커뮤니티 종류와 비용·계약 체크포인트를 정리했습니다.",
    cost: "월 임대·콘도비·커뮤니티 피부터, CCRC는 입주금(Entrance fee)+월 비용까지 폭이 큼 (지역·서비스에 따라 수천~수만 달러/월 가능)",
    methods: [
      "55+ Active Adult 커뮤니티",
      "Independent Living (독립 생활)",
      "Assisted Living / Memory Care (돌봄 단계)",
      "CCRC (Continuing Care Retirement Community)",
    ],
    overview:
      "미국에는 시니어 중심의 민간 주거 선택이 많습니다. 중산·중상층이 자주 보는 유형은 대략 네 가지입니다. (1) 55+ Active Adult: 연령 제한이 있는 타운홈·아파트·게이트형 단지로 클럽하우스·골프·사교 프로그램이 있는 경우가 많고 일상 의료 돌봄은 보통 포함되지 않습니다. (2) Independent Living: 식사·청소·교통 등 생활 편의는 있으나 간호는 제한적인 시니어 아파트/레지던스입니다. (3) Assisted Living·Memory Care: 약 복용·목욕·인지 지원 등 돌봄이 추가되며 비용이 크게 오릅니다. (4) CCRC: 입주금과 월 비용을 내고 독립에서 요양 단계로 옮길 수 있는 단지이며 계약·환급 조건이 복잡합니다. 집 매각 자금·연금·투자 소득으로 비용을 맞추는 경우가 많고, 월세에 HOA·커뮤니티 피·식비·케어 레벨 비용이 따로인지 꼭 확인하세요. 저소득 연방·주 지원 시니어 주택은 별도 가이드를 참고하세요.",
    requirements: [
      "본인(및 동거 배우자) 연령이 단지 규칙(예: 55+)을 충족하는지 확인",
      "월 예산: 임대/모기지·HOA·식비·케어비·유틸리티를 합산한 예상액",
      "자산·소득 증빙 (지원서·재무 심사에 필요할 수 있음)",
      "현재 집 매각·임대 계획이 있으면 일정과 예상 자금",
      "건강 상태·필요 돌봄 수준 (독립 / 생활도움 / 요양)",
      "계약서·입주금 환급(Refund) 조항을 읽을 여유와 질문 목록",
    ],
    steps: [
      "원하는 생활 수준을 정합니다: 활동형 55+ 단지인지, 식사·셔틀이 있는 Independent Living인지, 돌봄이 필요한지.",
      "관심 지역(시애틀·벨뷰 등)에서 단지 투어를 잡고, 월 총비용 견적(all-in)을 요청합니다.",
      "CCRC·Assisted Living이면 Entrance fee, 월비, 케어 단계별 추가 요금, 환급·해지 조건을 서면으로 받습니다.",
      "변호사·재무 상담(가능하면 elder law / housing counselor)에게 큰 입주금 계약을 검토받습니다.",
      "대기자 명단·입주 가능일을 확인하고, 집 매각 일정과 맞춥니다.",
      "계약 전 사기성 ‘지금 예약금’ 압박은 피하고, 공식 단지·라이선스 여부를 확인합니다.",
    ],
    links: [
      {
        label: "USA.gov – Housing help",
        url: "https://www.usa.gov/housing",
      },
      {
        label: "HUD – Housing counseling agencies",
        url: "https://www.hud.gov/program_offices/housing/sfh/hcc",
      },
      {
        label: "ACL – Aging & Disability networks",
        url: "https://acl.gov/",
      },
      {
        label: "저소득 시니어 주택·Section 8",
        url: "/guides/housing/senior-housing-low-income",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "senior-housing-low-income",
    category: "housing",
    title: "저소득 시니어 주택·Section 8",
    summary:
      "HUD 시니어 주택, Public Housing, Housing Choice Voucher(Section 8), 주·지방 고령자 렌트 지원을 신청하는 기본 절차입니다.",
    cost: "자격되면 보통 소득의 약 30% 수준 임대료인 경우가 많음 (프로그램·공제 항목에 따라 상이). 대기 기간이 길 수 있음",
    methods: [
      "HUD 시니어·장애인 주택 (예: Section 202 등)",
      "Public Housing / PHA 신청",
      "Housing Choice Voucher (Section 8)",
      "주·시·비영리 고령자 주거·렌트 지원",
    ],
    overview:
      "민간 55+ 단지와 달리, 저소득 시니어는 연방·주·지방 지원 주거를 먼저 확인하는 것이 좋습니다. 대표 경로는 지역 Public Housing Authority(PHA)를 통한 Public Housing·Housing Choice Voucher(흔히 Section 8), HUD가 지원하는 시니어·장애인 대상 아파트(예: Section 202 Supportive Housing for the Elderly), LIHTC 등 소득제한 시니어 단지입니다. 자격은 보통 연령(시니어 단지 기준), 가구 소득(지역 AMI의 일정 % 이하), 시민권·적격 이민 신분, 범죄·주거 이력 심사 등에 달립니다. 인기가 높아 대기자 명단이 수개월~수년인 경우가 많으니, 이사 계획이 보이면 일찍 신청하는 편이 유리합니다. 주 정부·시 고령부(Area Agency on Aging), 211, Benefits.gov에서도 렌트·유틸리티·날씨철 지원을 안내합니다. 체류 신분·소득 기준은 프로그램마다 다르므로 반드시 해당 PHA·단지 공고를 확인하세요. 중산층 민간 시니어 주거는 별도 가이드를 참고하세요.",
    requirements: [
      "신분증·SSN(또는 프로그램이 허용하는 신원 정보)",
      "연령 증빙 (시니어 단지·시니어 우선 프로그램)",
      "가구 소득·자산 증빙 (Social Security, SSI, 연금, 근로소득 등)",
      "현재 주소·연락처, 이전 임대 이력(있으면)",
      "시민권 또는 적격 이민 신분 관련 서류 (프로그램 요구 시)",
      "장애·특수 필요가 있으면 관련 서류(합리적 편의 요청용)",
    ],
    steps: [
      "거주(또는 이사 예정) 지역의 PHA를 찾아 Public Housing·Section 8 대기 신청 가능 여부를 확인합니다.",
      "HUD Resource Locator·단지 공고에서 Senior / Elderly housing, Section 202 등 소득제한 시니어 아파트를 검색합니다.",
      "Area Agency on Aging·211·주 주택금융청(HFA)에 고령자 렌트 지원·대기 단지를 문의합니다.",
      "지원서에 소득·가구원·신분을 정확히 적고, 요청 서류를 기한 안에 제출합니다.",
      "대기 중에도 주소·전화가 바뀌면 바로 업데이트합니다. 연락이 안 되면 순번이 무효가 될 수 있습니다.",
      "입주 제안이 오면 Lease·소득 재심사·입주 검사를 마치고, 이후에도 연간 소득 신고(Recertification) 일정을 지킵니다.",
    ],
    links: [
      {
        label: "HUD Resource Locator",
        url: "https://resources.hud.gov/",
      },
      {
        label: "HUD – Find your local PHA",
        url: "https://www.hud.gov/program_offices/public_indian_housing/pha/contacts",
      },
      {
        label: "HUD – Housing Choice Vouchers",
        url: "https://www.hud.gov/program_offices/public_indian_housing/programs/hcv",
      },
      {
        label: "Benefits.gov – Housing assistance",
        url: "https://www.benefits.gov/",
      },
      {
        label: "ElderCare Locator (ACL)",
        url: "https://eldercare.acl.gov/",
      },
      {
        label: "King County Housing Authority (시애틀 인근)",
        url: "https://www.kcha.org/",
      },
      {
        label: "Seattle Housing Authority",
        url: "https://www.seattlehousing.org/",
      },
      {
        label: "55세 이상 시니어 주거 (중상층)",
        url: "/guides/housing/senior-housing-55",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
];
