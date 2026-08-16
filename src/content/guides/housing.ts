import type { Guide } from "../types";

const disclaimer =
  "ArriveUS 가이드는 일반적인 참고 정보이며 부동산·법률 자문이 아닙니다. 임대 계약서와 주·시 임대차 규정을 직접 확인하세요.";

export const housingGuides: Guide[] = [
  {
    slug: "rent-apartment",
    category: "housing",
    title: "아파트 임대",
    summary:
      "미국 아파트 구하기부터 지원서, 크레딧·소득 심사, 보증금, 계약(Lease) 체크포인트까지 기본 흐름입니다.",
    cost: "보증금 보통 월세 0.5–2개월분 + 첫 달 월세 (지역·단지마다 상이)",
    methods: ["단지 직계약", "중개 플랫폼", "서브리스(주의)"],
    overview:
      "미국 임대는 지원서(Application) → 크레딧/배경 조회 → Lease 서명 순이 일반적입니다. 신용 기록이 짧으면 보증인(Guarantor), 선수납, 또는 소득 증빙 강화가 필요할 수 있습니다. 월세는 보통 소득의 약 30% 수준을 기준으로 심하는 곳이 많습니다. 계약 전 수도·난방 포함 여부, 주차, 펫 조항, Early termination 위약금을 꼭 확인하세요. ‘너무 좋은 조건’의 선입금 요청은 사기일 수 있으니 직접 방문·공식 리스팅을 우선하세요.",
    requirements: [
      "여권/신분증, 비자·신분 서류",
      "소득 증빙 (오퍼레터, Pay stub, 통장 잔고 등)",
      "SSN/ITIN 또는 ITIN 없음 안내를 받는 단지 정책 확인",
      "이전 임대인 연락처(있으면)",
      "Application fee / Holding fee 결제 수단",
    ],
    steps: [
      "출퇴근·학군·예산·필수 조건(주차, 반려동물 등)을 정해 지역을 좁힙니다.",
      "단지 투어를 잡고 실제 유닛 상태·세탁·방음·치안을 확인합니다.",
      "지원서를 내고 크레딧·배경 조회 수수료를 지불합니다.",
      "승인되면 Lease를 읽고 Move-in date, 월세, 유틸리티, 해지 조항을 확인합니다.",
      "보증금·첫 달 월세를 내고 입주 점검(Move-in checklist)으로 하자 사진을 남깁니다.",
      "열쇠·출입 카드·택배함·비상 연락처를 등록합니다.",
    ],
    links: [
      {
        label: "USA.gov – Housing help",
        url: "https://www.usa.gov/housing",
      },
      {
        label: "CFPB – Renting",
        url: "https://www.consumerfinance.gov/consumer-tools/renter-protections/",
      },
      {
        label: "55+·중상층 시니어 주거",
        url: "/guides/housing/senior-housing-55",
      },
      {
        label: "저소득 시니어 주거 혜택",
        url: "/guides/housing/senior-housing-low-income",
      },
    ],
    disclaimer,
  },
  {
    slug: "utilities-setup",
    category: "housing",
    title: "유틸리티 신청",
    summary:
      "전기·가스·수도·인터넷·쓰레기 수거를 입주일에 맞춰 개통하는 순서와 체크리스트입니다.",
    cost: "연결비·보증금은 지역·신용에 따라 상이",
    methods: ["유틸리티 회사 웹사이트", "전화 개통"],
    overview:
      "아파트에 따라 수도·쓰레기·가스가 월세에 포함된 경우(Landlord-paid)와 세입자가 직접 신청하는 경우가 나뉩니다. Lease와 Move-in packet에 ‘어떤 회사를 써야 하는지’가 적혀 있는 경우가 많습니다. 전기(Electric)와 인터넷은 입주 며칠 전 Start service 예약이 안전합니다. 신용 기록이 없으면 보증금(Deposit)을 요구받을 수 있습니다. 계정 번호와 자동이체를 미리 설정해 연체를 피하세요.",
    requirements: [
      "임대 계약서와 입주 주소",
      "입주 예정일",
      "신분증·연락처",
      "SSN/ITIN 또는 보증금 납부 준비",
      "결제용 카드/은행 계좌",
    ],
    steps: [
      "Lease에서 세입자 부담 유틸리티 목록과 지정 업체를 확인합니다.",
      "전기·가스·수도·인터넷을 입주일에 맞춰 Start service 신청합니다.",
      "필요 시 보증금을 내고 계정 번호·확인 이메일을 저장합니다.",
      "입주 당일 전기·물·인터넷이 실제로 켜지는지 확인합니다.",
      "자동 납부(Autopay)와 사용량 알림을 설정합니다.",
      "이사 나갈 때는 Stop service 일정을 미리 예약합니다.",
    ],
    links: [
      {
        label: "USA.gov – Help with utility bills",
        url: "https://www.usa.gov/help-with-utility-bills",
      },
      {
        label: "FCC – Internet consumer tips",
        url: "https://www.fcc.gov/consumers/guides/getting-broadband",
      },
    ],
    disclaimer,
  },
  {
    slug: "security-deposit",
    category: "housing",
    title: "보증금 (Security Deposit)",
    summary:
      "입주 시 내는 보증금이 어디에 쓰이고, 퇴거 후 돌려받는 절차·공제 사유를 정리했습니다.",
    cost: "보통 월세의 일정 비율 또는 1개월분 전후 (주·단지마다 상이)",
    methods: ["계약서 확인", "입주·퇴거 점검 기록", "서면 요청"],
    overview:
      "Security deposit는 파손·미납 월세 등에 대비해 임대인이 보관하는 돈입니다. ‘정상 사용에 따른 마모(normal wear and tear)’는 보통 공제 대상이 아니며, 고의·부주의 파손·청소 미비·미납은 공제될 수 있습니다. 입주 때 사진·영상을 남기고, 퇴거 전 청소·수리 의무를 Move-out 안내와 맞춰 두면 분쟁을 줄일 수 있습니다. 반환 기한과 이자 지급 여부는 주(State)·시 법이 다를 수 있으니 Lease와 지역 규정을 확인하세요.",
    requirements: [
      "Lease의 보증금 금액·반환 조항",
      "입주 시 하자 사진/영상·Move-in checklist",
      "퇴거 예정일·Forwarding address (반환 수령 주소)",
      "월세·유틸리티 완납 증빙",
    ],
    steps: [
      "계약서에서 보증금 금액, 공제 가능 사유, 반환 기한을 표시해 둡니다.",
      "입주 직후 벽·바닥·가전·욕실 하자를 사진으로 남기고 단지에 제출합니다.",
      "퇴거 전 Move-out cleaning / painting 가이드를 따릅니다.",
      "열쇠·출입카드를 반납하고 최종 점검을 요청합니다.",
      "반환이 늦거나 공제 내역이 이상하면 서면(이메일)으로 itemized 내역을 요청합니다.",
      "해결이 안 되면 거주 주 소비자보호·임대차 안내 또는 법률 상담을 검토합니다.",
    ],
    links: [
      {
        label: "CFPB – Security deposits",
        url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-security-deposit-en-1465/",
      },
      {
        label: "USA.gov – Housing help",
        url: "https://www.usa.gov/housing",
      },
    ],
    disclaimer,
  },
  {
    slug: "move-in-out",
    category: "housing",
    title: "입주·퇴거 체크리스트",
    summary:
      "이사 당일 전후로 할 일: 열쇠, 유틸리티, 주소 변경, 청소, 보증금까지 한곳에 정리했습니다.",
    methods: ["입주 전", "입주 당일", "퇴거 전"],
    overview:
      "미국 이사는 날짜(Move-in / Move-out date)가 Lease에 고정되어 있는 경우가 많습니다. 입주 전에는 유틸리티·인터넷 개통, 보험(Renters insurance) 요구 여부를 확인하고, 입주 당일에는 하자 기록과 우편함·택배함을 챙깁니다. 퇴거 전에는 단지 Move-out 안내, 청소, 주소 변경(USPS·은행·DMV), 유틸리티 해지를 일정에 맞춰 진행하세요.",
    requirements: [
      "Lease와 Move-in / Move-out 안내문",
      "유틸리티·인터넷 계정 정보",
      "Renters insurance (단지가 요구하는 경우)",
      "청소 용품 또는 청소 업체 예약",
      "새 주소(Forwarding address)",
    ],
    steps: [
      "입주 3–7일 전: 전기·가스·수도·인터넷 Start service, 보험 증서 제출.",
      "입주 당일: 열쇠 수령, 하자 사진, 난방/온수/가전 작동 확인.",
      "입주 직후: USPS·은행·직장·학교 주소 업데이트, 필요 시 DMV 주소 변경.",
      "퇴거 2–4주 전: Move-out 공지, 청소·수리 계획, 유틸리티 Stop 예약.",
      "퇴거 당일: 최종 청소, 열쇠 반납, 미터기/잔여물 확인, 보증금 반환 주소 제출.",
      "퇴거 후: 마지막 청구서·보증금 반환을 확인하고 기록을 보관합니다.",
    ],
    links: [
      {
        label: "USPS – Change of address",
        url: "https://www.usps.com/manage/forward.htm",
      },
      {
        label: "USA.gov – Moving",
        url: "https://www.usa.gov/moving",
      },
      {
        label: "ArriveUS – 유틸리티 신청",
        url: "/guides/housing/utilities-setup",
      },
    ],
    disclaimer,
  },
  {
    slug: "rental-scams",
    category: "housing",
    title: "임대 사기 주의",
    summary:
      "너무 싼 매물, 만나기 전 송금 요구, 가짜 임대인 등 초보자가 자주 겪는 임대 사기 유형과 대처입니다.",
    methods: ["공식 리스팅", "직접 투어", "송금 전 검증"],
    overview:
      "입국 초기에 급하게 집을 구하다 보면 사기 매물에 노출되기 쉽습니다. 전형적인 패턴은 ‘지금 해외에 있어서 못 보여준다’, ‘보증금을 Wire/Gift card로 먼저 보내라’, ‘크레딧 조회 없이 바로 계약’ 등입니다. 실제 주소에 가서 단지 오피스·공식 웹사이트와 대조하고, 만나기 전·계약 전 큰돈 송금은 피하세요. 의심되면 송금하지 말고 다른 매물을 찾거나 소비자원·경찰에 신고 정보를 확인하세요.",
    requirements: [
      "매물 주소와 단지/임대인 공식 연락처",
      "투어 일정 (가능하면 주간·공개된 장소)",
      "계약서·신분증 대조",
      "송금 전 ‘누가·어디로·왜’ 받는지 문서화",
    ],
    steps: [
      "시세보다 비정상적으로 저렴한 매물은 한 번 더 의심합니다.",
      "Craigslist 등 개인 매물은 단지 오피스·소유주와 별도로 확인합니다.",
      "열쇠를 받기 전·계약 전에 선물카드·암호화폐·긴급 해외 송금을 요구하면 거절합니다.",
      "가능하면 낮에 직접 투어하고, 이웃·관리실에 임대 중인지 물어봅니다.",
      "돈을 보낸 뒤 사기라고 느껴지면 은행에 즉시 알리고 관련 메시지를 보관합니다.",
    ],
    links: [
      {
        label: "FTC – Rental listing scams",
        url: "https://consumer.ftc.gov/articles/rental-listing-scams",
      },
      {
        label: "USA.gov – Common scams",
        url: "https://www.usa.gov/common-scams-frauds",
      },
    ],
    disclaimer,
  },
];
