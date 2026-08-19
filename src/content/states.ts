export type StateLocalNote = {
  name: string;
  nameKo: string;
  notes: string[];
  links?: { label: string; url: string }[];
};

export type StateGuide = {
  code: string;
  name: string;
  nameKo: string;
  agency: string;
  summary: string;
  dmvUrl: string;
  handbookUrl?: string;
  highlights: string[];
  localNotes?: StateLocalNote[];
  featured?: boolean;
};

/**
 * 1단계 주별 가이드: 공식 링크 + 핵심 차이만.
 * 상세 법령 해설이 아니라 확인 출발점입니다.
 */
export const stateGuides: StateGuide[] = [
  {
    code: "wa",
    name: "Washington",
    nameKo: "워싱턴주",
    agency: "Washington State DOL (Department of Licensing)",
    summary:
      "시애틀·벨뷰 등 워싱턴주 거주자를 위한 면허·차량 공식 안내 출발점입니다. 주 기관 명칭은 DMV가 아니라 DOL입니다.",
    dmvUrl: "https://www.dol.wa.gov/",
    handbookUrl:
      "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides",
    featured: true,
    highlights: [
      "운전·ID 업무는 주 DOL 사이트와 예약/방문 안내를 기준으로 합니다.",
      "유효한 한국(South Korea) 면허 + 만 18세 이상이면, DOL 안내상 필기·도로 시험 면제로 워싱턴 면허를 받을 수 있는 경우가 많습니다. (시력·서류·수수료는 필요)",
      "방문만 하면 해외 면허로 일정 기간 운전이 가능할 수 있고, 거주자가 되면 보통 30일 안에 주 면허가 필요합니다.",
      "타주·해외 면허 이전은 DOL ‘Do I need to take a test?’ / Moving to Washington 안내를 확인하세요.",
      "워싱턴주의 REAL ID 준수 주 발급 신분증은 Enhanced DL/ID(EDL/EID)이며, 미국 시민만 신청할 수 있습니다.",
      "영주권·비자 보유자는 일반 면허로 운전하고, 국내선은 여권 등 TSA 인정 서류를 준비하는 경우가 많습니다.",
      "시애틀 시내 주차·단속 규칙은 시(City) 규정과 별개이니 함께 확인하세요.",
    ],
    localNotes: [
      {
        name: "Seattle",
        nameKo: "시애틀",
        notes: [
          "면허·차량 등록의 법적 기준은 워싱턴주 DOL입니다. 시애틀 거주자도 주 절차를 따릅니다.",
          "한국 면허: 유효한 South Korea 면허(18세+)는 DOL 기준 필기·도로 시험 면제 대상에 포함됩니다. 시애틀만의 별도 규칙이 아니라 주 전체 정책입니다.",
          "REAL ID: 워싱턴주에서 별로 표시되는 ‘주 발급 REAL ID’에 해당하는 것은 EDL/EID이며, DOL 기준 미국 시민만 가능합니다.",
          "시민이 아니어도 일반 Washington driver license로 운전할 수 있는 경우가 많고, 공항 신분 확인은 유효 여권·영주권 카드 등으로 대체하는 경우가 많습니다.",
          "시내 주차(Parking), 거주자 허가(RPZ), 교통 카메라 등은 Seattle Department of Transportation(SDOT) 안내를 보세요.",
          "킹카운티(King County) 버스·교통 정보는 King County Metro를 참고할 수 있습니다.",
        ],
        links: [
          {
            label: "Washington DOL – Do I need to take a test?",
            url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/do-i-need-take-test",
          },
          {
            label: "Washington DOL – REAL ID",
            url: "https://www.dol.wa.gov/id-cards/real-id",
          },
          {
            label: "Washington DOL – EDL",
            url: "https://www.dol.wa.gov/driver-licenses-and-permits/enhanced-driver-license-edl",
          },
          {
            label: "Seattle SDOT – Transportation",
            url: "https://www.seattle.gov/transportation",
          },
          {
            label: "Seattle Parking",
            url: "https://www.seattle.gov/transportation/parking-and-streets/parking",
          },
          {
            label: "King County Metro",
            url: "https://kingcounty.gov/en/dept/metro",
          },
        ],
      },
    ],
  },
  {
    code: "ca",
    name: "California",
    nameKo: "캘리포니아주",
    agency: "California DMV",
    summary: "LA·SF베이 등에서 가장 많이 찾는 주 DMV 안내입니다.",
    dmvUrl: "https://www.dmv.ca.gov/",
    handbookUrl:
      "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/",
    highlights: [
      "예약(appointment) 없이 방문하면 대기 시간이 긴 경우가 많습니다.",
      "REAL ID, AB 60 등 신분·서류 옵션이 다양하니 신청 유형을 먼저 고르세요.",
      "필기·도로시험과 Driver Handbook는 DMV 공식 사이트에서 확인합니다.",
      "차량 smog(배기가스) 검사 요건이 있는 지역이 있습니다.",
    ],
    localNotes: [
      {
        name: "Los Angeles",
        nameKo: "로스앤젤레스",
        notes: [
          "면허·ID의 법적 기준은 캘리포니아 DMV입니다. LA 시 거주자도 주 절차를 따릅니다.",
          "LA·OC 한인 밀집 지역도 DMV 오피스 대기가 길 수 있어 온라인 예약·가능 업무를 먼저 확인하세요.",
          "주차·단속·거주자 허가는 시·카운티 규정과 별개이니 LADOT 등 시 안내를 함께 보세요.",
          "대중교통은 Metro (LA County) 안내를 참고할 수 있습니다.",
        ],
        links: [
          {
            label: "California DMV",
            url: "https://www.dmv.ca.gov/",
          },
          {
            label: "LADOT – Parking",
            url: "https://ladot.lacity.gov/parking",
          },
          {
            label: "LA Metro",
            url: "https://www.metro.net/",
          },
        ],
      },
      {
        name: "Bay Area",
        nameKo: "베이 에어리어",
        notes: [
          "면허·ID는 캘리포니아 DMV 기준입니다. SF·산호세 거주자도 주 절차를 따릅니다.",
          "베이 에어리어 DMV 오피스는 대기가 길 수 있어 온라인 예약·가능 업무를 먼저 확인하세요.",
          "유료 다리·톨·주차 규칙은 도시·카운티마다 다르니 해당 시 교통국 안내를 보세요.",
          "대중교통은 BART·Caltrain·Muni·VTA 등 기관이 나뉘어 있습니다.",
        ],
        links: [
          {
            label: "California DMV",
            url: "https://www.dmv.ca.gov/",
          },
          {
            label: "BART",
            url: "https://www.bart.gov/",
          },
          {
            label: "511 SF Bay",
            url: "https://511.org/",
          },
        ],
      },
    ],
  },
  {
    code: "ny",
    name: "New York",
    nameKo: "뉴욕주",
    agency: "New York DMV",
    summary: "뉴욕시·업스테이트 포함, 주 DMV 기준으로 면허·등록을 진행합니다.",
    dmvUrl: "https://dmv.ny.gov/",
    handbookUrl:
      "https://dmv.ny.gov/driver-license/drivers-manual-practice-tests",
    highlights: [
      "온라인으로 가능한 업무와 반드시 방문해야 하는 업무가 나뉩니다.",
      "뉴욕시는 주차·톨게이트·교통 규칙이 까다로울 수 있어 시 안내도 함께 보세요.",
      "타주 면허 이전과 신규 발급 서류 목록이 다릅니다.",
      "Learner permit·도로시험 일정은 지역 오피스마다 다를 수 있습니다.",
    ],
    localNotes: [
      {
        name: "New York City",
        nameKo: "뉴욕시",
        notes: [
          "면허·등록의 법적 기준은 뉴욕주 DMV입니다. 시 거주자도 주 절차를 따릅니다.",
          "NYC는 주차·카메라·톨(Congestion pricing 등) 규칙이 복잡하니 NYC DOT·MTA 안내를 함께 확인하세요.",
          "대중교통 중심이면 면허보다 MetroCard/OMNY·버스·지하철 정보가 더 급할 수 있습니다.",
          "도로시험·오피스 예약은 거주 보로·근교 가능 여부를 DMV에서 확인하세요.",
        ],
        links: [
          {
            label: "New York DMV",
            url: "https://dmv.ny.gov/",
          },
          {
            label: "NYC DOT",
            url: "https://www.nyc.gov/html/dot/",
          },
          {
            label: "MTA",
            url: "https://new.mta.info/",
          },
        ],
      },
    ],
  },
  {
    code: "tx",
    name: "Texas",
    nameKo: "텍사스주",
    agency: "Texas DPS / TxDMV",
    summary:
      "면허(DPS)와 차량 등록(TxDMV) 기관이 나뉘어 있으니 목적에 맞는 사이트를 확인하세요.",
    dmvUrl: "https://www.dps.texas.gov/section/driver-license",
    handbookUrl: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf",
    highlights: [
      "Driver License는 Texas DPS, 차량 등록·타이틀은 TxDMV 쪽을 보는 경우가 많습니다.",
      "신규·이전·갱신에 필요한 신분 서류 목록을 DPS 체크리스트로 확인하세요.",
      "도로 시험·운전 교육 요건은 연령·경험에 따라 달라질 수 있습니다.",
      "공식 사이트: DPS Driver License와 TxDMV를 구분해 북마크하세요.",
    ],
    localNotes: [
      {
        name: "Dallas–Fort Worth",
        nameKo: "댈러스·포트워스",
        notes: [
          "면허는 Texas DPS, 차량 등록은 TxDMV/카운티입니다. DFW 거주자도 주·카운티 절차를 따릅니다.",
          "대기가 길 수 있어 DPS 예약·온라인 가능 업무를 먼저 확인하세요.",
          "고속도로·톨(NTTA 등) 규칙은 지역 안내를 함께 보세요.",
          "대중교통은 DART 등 지역 기관을 참고할 수 있습니다.",
        ],
        links: [
          {
            label: "Texas DPS – Driver License",
            url: "https://www.dps.texas.gov/section/driver-license",
          },
          {
            label: "TxDMV",
            url: "https://www.txdmv.gov/",
          },
          {
            label: "DART",
            url: "https://www.dart.org/",
          },
        ],
      },
    ],
  },
  {
    code: "fl",
    name: "Florida",
    nameKo: "플로리다주",
    agency: "Florida DHSMV / FLHSMV",
    summary: "면허·차량 관련 공식 안내는 FLHSMV에서 확인합니다.",
    dmvUrl: "https://www.flhsmv.gov/",
    handbookUrl: "https://www.flhsmv.gov/resources/handbooks-manuals/",
    highlights: [
      "서비스는 카운티 tax collector / driver license office에서 처리되는 경우가 많습니다.",
      "타주·해외 면허 소지자의 시험 면제 여부는 조건에 따라 다릅니다.",
      "REAL ID와 일반 면허 서류 요구가 다를 수 있습니다.",
      "공식 handbook과 온라인 서비스를 FLHSMV에서 확인하세요.",
    ],
  },
  {
    code: "il",
    name: "Illinois",
    nameKo: "일리노이주",
    agency: "Illinois Secretary of State (SOS)",
    summary: "시카고 포함, 운전 면허는 Illinois SOS에서 담당합니다.",
    dmvUrl: "https://www.ilsos.gov/departments/drivers/",
    handbookUrl: "https://www.ilsos.gov/publications/pdf_publications/dsd_a112.pdf",
    highlights: [
      "기관 명칭이 DMV가 아니라 Secretary of State Driver Services인 경우가 많습니다.",
      "방문 전 온라인 예약·필요 서류 목록을 확인하세요.",
      "시티·교외 오피스 대기 시간이 다를 수 있습니다.",
      "차량 등록 sticker 갱신 일정도 함께 관리하세요.",
    ],
    localNotes: [
      {
        name: "Chicago",
        nameKo: "시카고",
        notes: [
          "면허는 Illinois SOS Driver Services 기준입니다. 시 거주자도 주 절차를 따릅니다.",
          "방문 전 예약·서류 목록을 확인하고, 시티·교외 오피스 대기를 비교하세요.",
          "시카고 주차·카메라·거주자 허가는 시 규정과 별개입니다.",
          "대중교통은 CTA·Metra 안내를 참고할 수 있습니다.",
        ],
        links: [
          {
            label: "Illinois SOS – Drivers",
            url: "https://www.ilsos.gov/departments/drivers/",
          },
          {
            label: "CTA",
            url: "https://www.transitchicago.com/",
          },
          {
            label: "City of Chicago – Transportation",
            url: "https://www.chicago.gov/city/en/depts/cdot.html",
          },
        ],
      },
    ],
  },
  {
    code: "nj",
    name: "New Jersey",
    nameKo: "뉴저지주",
    agency: "New Jersey MVC",
    summary: "뉴저지는 MVC(Motor Vehicle Commission)가 면허·등록을 담당합니다.",
    dmvUrl: "https://www.nj.gov/mvc/",
    handbookUrl: "https://www.nj.gov/mvc/about/manuals.htm",
    highlights: [
      "예약 시스템이 중요하니 방문 전 MVC 예약을 확인하세요.",
      "GDL(단계별 면허) 규칙이 학생·초보에게 적용될 수 있습니다.",
      "타주 면허 이전 시 서류와 시력·지식 시험 요건을 확인합니다.",
      "공식 MVC 사이트의 Forms & Documents를 출발점으로 쓰세요.",
    ],
    localNotes: [
      {
        name: "Northern New Jersey",
        nameKo: "북부 뉴저지",
        notes: [
          "면허·등록은 New Jersey MVC 기준입니다. 팰리세이즈파크·포트리 등도 주 절차를 따릅니다.",
          "MVC 예약이 중요하니 방문 전 온라인 예약을 확인하세요.",
          "뉴욕 통근이면 NYC 주차·톨·대중교통과 NJ 면허 요건을 구분해 보세요.",
          "대중교통은 NJ Transit 안내를 참고할 수 있습니다.",
        ],
        links: [
          {
            label: "New Jersey MVC",
            url: "https://www.nj.gov/mvc/",
          },
          {
            label: "NJ Transit",
            url: "https://www.njtransit.com/",
          },
        ],
      },
    ],
  },
  {
    code: "va",
    name: "Virginia",
    nameKo: "버지니아주",
    agency: "Virginia DMV",
    summary: "워싱턴 DC 근교(북버지니아) 거주자도 버지니아 DMV 절차를 따릅니다.",
    dmvUrl: "https://www.dmv.virginia.gov/",
    handbookUrl: "https://www.dmv.virginia.gov/licenses-ids/exams/manual",
    highlights: [
      "온라인으로 처리 가능한 갱신·주소 변경이 있습니다.",
      "신규·이전 시 proof of identity / residency 조합을 미리 맞추세요.",
      "Driver guide와 practice exam 링크를 DMV 사이트에서 제공합니다.",
      "차량 검사(inspection) 요건이 별도로 있을 수 있습니다.",
    ],
  },
  {
    code: "ga",
    name: "Georgia",
    nameKo: "조지아주",
    agency: "Georgia DDS",
    summary: "애틀랜타 포함, 운전 면허는 Georgia DDS에서 담당합니다.",
    dmvUrl: "https://dds.georgia.gov/",
    handbookUrl: "https://dds.georgia.gov/dds-drivers-manual-2023-2024",
    highlights: [
      "DDS 고객센터/예약 안내를 먼저 확인하는 것이 좋습니다.",
      "지식 시험·도로 시험 요건과 준비물을 DDS 매뉴얼에서 확인하세요.",
      "REAL ID 서류 목록을 신청 유형에 맞게 준비합니다.",
      "차량 등록은 카운티 tag office와 연계되는 경우가 있습니다.",
    ],
    localNotes: [
      {
        name: "Atlanta",
        nameKo: "애틀랜타",
        notes: [
          "면허는 Georgia DDS 기준입니다. 메트로 애틀랜타 거주자도 주 절차를 따릅니다.",
          "DDS 예약·매뉴얼·REAL ID 서류 목록을 먼저 확인하세요.",
          "차량 등록·tag는 카운티 office와 연계될 수 있습니다.",
          "대중교통은 MARTA 안내를 참고할 수 있습니다.",
        ],
        links: [
          {
            label: "Georgia DDS",
            url: "https://dds.georgia.gov/",
          },
          {
            label: "MARTA",
            url: "https://www.itsmarta.com/",
          },
        ],
      },
    ],
  },
  {
    code: "ma",
    name: "Massachusetts",
    nameKo: "매사추세츠주",
    agency: "Massachusetts RMV",
    summary: "보스턴 지역 포함, RMV가 면허·등록 서비스를 제공합니다.",
    dmvUrl: "https://www.mass.gov/orgs/massachusetts-registry-of-motor-vehicles",
    handbookUrl: "https://www.mass.gov/lists/drivers-manuals",
    highlights: [
      "대부분 업무는 예약 후 방문하는 흐름이 일반적입니다.",
      "Learner’s permit·도로시험 일정과  Mandatory driver education 요건을 확인하세요.",
      "공식 Driver Manual로 필기시험을 준비합니다.",
      "Mass.gov RMV 페이지에서 위치·수수료·온라인 서비스를 확인하세요.",
    ],
  },
];

export function getStateGuides() {
  return stateGuides;
}

export function getStateGuide(code: string) {
  return stateGuides.find(
    (state) => state.code.toLowerCase() === code.toLowerCase(),
  );
}

export function getFeaturedStates() {
  return stateGuides.filter((state) => state.featured);
}
