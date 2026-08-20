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
        label: "리스(임대차) 읽기",
        url: "/guides/housing/lease-basics",
      },
      {
        label: "룸메이트·서브리스",
        url: "/guides/housing/roommate",
      },
      {
        label: "저소득 시니어 주거 혜택",
        url: "/guides/housing/senior-housing-low-income",
      },
      {
        label: "임대 사기 주의",
        url: "/guides/housing/rental-scams",
      },
      {
        label: "도착 첫 7일",
        url: "/guides/life/first-week",
      },
      {
        label: "은행 계좌 개설",
        url: "/guides/bank/open-account",
      },
      {
        label: "주소·우편",
        url: "/guides/life/address-mail",
      },
    ],
    faq: [
      {
        question: "크레딧이 없으면 임대가 안 되나요?",
        answer:
          "거절될 수도 있지만, 보증인·선수납·잔고 증빙·ITIN 정책을 받아주는 단지도 있습니다. 단지에 미리 문의하세요.",
      },
      {
        question: "투어 전에 보증금을 보내라는 연락이 왔어요.",
        answer:
          "실물·화상 확인과 계약서 전 송금은 사기 위험이 큽니다. 임대 사기 가이드를 참고하고 보내지 마세요.",
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
      {
        label: "아파트 임대",
        url: "/guides/housing/rent-apartment",
      },
    ],
    faq: [
      {
        question: "월세에 유틸리티가 포함돼 있는지 어떻게 아나요?",
        answer:
          "Lease와 Move-in packet에 세입자 부담 항목이 적혀 있습니다. 불명확하면 단지에 서면으로 확인하세요.",
      },
      {
        question: "신용이 없으면 보증금을 내야 하나요?",
        answer:
          "전기·가스 등에서 Deposit을 요구할 수 있습니다. 금액·반환 조건을 영수증에 남기세요.",
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
    faq: [
      {
        question: "보증금은 언제 돌려받나요?",
        answer:
          "주·계약마다 반환 기한이 다릅니다. Lease와 거주 주 규정을 확인하고, 공제 내역을 서면으로 요청하세요.",
      },
      {
        question: "벽에 못 자국도 공제되나요?",
        answer:
          "단지·주 기준에 따라 다릅니다. 정상 마모와 파손 구분을 Lease·Move-out 안내에서 확인하세요.",
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
      {
        label: "주소·우편",
        url: "/guides/life/address-mail",
      },
      {
        label: "리스(임대차) 읽기",
        url: "/guides/housing/lease-basics",
      },
    ],
    faq: [
      {
        question: "입주 전에 Renters insurance가 꼭 필요한가요?",
        answer:
          "단지가 요구하면 입주 조건인 경우가 많습니다. 요구하지 않아도 소지품·배상 대비로 가입하는 분이 많습니다.",
      },
      {
        question: "퇴거일을 하루만 넘겨도 되나요?",
        answer:
          "Lease 날짜를 넘기면 추가 월세·위약금이 붙을 수 있습니다. 연장이 필요하면 미리 서면으로 요청하세요.",
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
      {
        label: "아파트 임대",
        url: "/guides/housing/rent-apartment",
      },
      {
        label: "도착 첫 7일",
        url: "/guides/life/first-week",
      },
    ],
    faq: [
      {
        question: "이미 보증금을 보냈어요.",
        answer:
          "은행에 즉시 연락하고, 메시지·영수증을 보관하세요. FTC·경찰 신고 안내는 공식 사이트에서 확인합니다.",
      },
      {
        question: "단지 오피스가 있다고 하면 믿어도 되나요?",
        answer:
          "공식 웹사이트·전화로 매물·담당자를 교차 확인하고, 가능하면 직접 방문하세요.",
      },
    ],
    disclaimer,
  },
  {
    slug: "lease-basics",
    category: "housing",
    title: "리스(임대차) 읽기",
    summary:
      "Lease에서 월세·기간·해지·펫·게스트·수리 책임 등 서명 전에 꼭 볼 조항을 한국어로 정리했습니다.",
    cost: "Application fee·Holding fee는 단지마다 다름 (환불 여부 확인)",
    methods: ["조항 체크리스트", "서면 Q&A", "번역·지인 교차 확인"],
    overview:
      "미국 아파트 Lease는 보통 12개월 고정이 많고, 서명하면 중도 해지(Early termination) 위약금·남은 기간 월세 책임이 생길 수 있습니다. 서명 전에 (1) 월세·Due date·연체료, (2) 계약 기간·갱신·통지 기한, (3) 보증금·공제, (4) 유틸리티 부담, (5) 펫·흡연·게스트, (6) 수리·출입(Entry) , (7) 주차·저장고, (8) Renters insurance 요구를 표시해 두세요. 영어가 어려우면 중요한 숫자·날짜만이라도 메모하고, 구두 약속은 이메일로 남기세요. ArriveUS는 계약 대행·법률 자문을 하지 않습니다.",
    requirements: [
      "Lease 초안 PDF 또는 인쇄본",
      "월세·입주일을 적은 메모",
      "펫·주차·동거인 계획",
      "질문 목록 (해지·수리·게스트)",
    ],
    steps: [
      "첫 페이지에서 당사자 이름, 주소·유닛, 월세, Lease 시작·종료일을 확인합니다.",
      "연체료(Late fee), NSF(부도) 수수료, 자동이체 할인을 찾습니다.",
      "Early termination / Break lease / Military clause 조항과 비용을 확인합니다.",
      "유틸리티·인터넷·쓰레기·주차비가 월세에 포함인지 표시합니다.",
      "단지 출입·수리 요청·24시간 통지 규칙을 읽고, 구두 설명과 다르면 이메일로 확인합니다.",
      "서명 전 Application/Holding fee 환불 조건과 취소 기한을 확인합니다.",
    ],
    links: [
      {
        label: "CFPB – Renting",
        url: "https://www.consumerfinance.gov/consumer-tools/renter-protections/",
      },
      {
        label: "USA.gov – Housing help",
        url: "https://www.usa.gov/housing",
      },
      {
        label: "아파트 임대",
        url: "/guides/housing/rent-apartment",
      },
      {
        label: "룸메이트·서브리스",
        url: "/guides/housing/roommate",
      },
      {
        label: "보증금",
        url: "/guides/housing/security-deposit",
      },
    ],
    faq: [
      {
        question: "서명 후 마음이 바뀌면요?",
        answer:
          "Cooling-off가 없는 경우가 많고, Holding fee·위약금이 붙을 수 있습니다. 서명 전 취소 조항을 확인하세요.",
      },
      {
        question: "한국어 번역본을 달라고 할 수 있나요?",
        answer:
          "단지가 제공하지 않을 수 있습니다. 핵심 조항을 표시해 두고 신뢰할 수 있는 사람에게 확인받으세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "roommate",
    category: "housing",
    title: "룸메이트·서브리스",
    summary:
      "룸메이트와 살 때 월세 분담·Lease 명의, 서브리스(전대) 허가, 분쟁을 줄이는 기본 약속을 안내합니다.",
    cost: "Application fee는 사람마다 / 무단 전대 시 퇴거·위약 위험",
    methods: ["공동 Lease", "마스터 테넌트 + 동거", "단지 승인 서브리스"],
    overview:
      "비용을 나누려고 룸메이트를 구하는 경우가 많지만, Lease에 이름이 있는 사람(tenants)과 단순 동거인(occupants) 책임이 다를 수 있습니다. 한 사람만 서명했는데 다른 사람이 월세를 안 내면, 서명자가 전액을 물어야 하는 구조가 흔합니다. 서브리스(Sublease)는 단지·집주인 서면 허가가 필요한 경우가 많고, 무단 전대는 계약 위반입니다. 카톡·Airbnb식 단기 전대 광고는 사기·규정 위반 위험이 큽니다. 월세·유틸·청소·게스트·퇴거 일정을 짧은 메모라도 합의하세요.",
    requirements: [
      "단지·집주인의 동거/서브리스 정책",
      "누가 Lease에 서명하는지",
      "월세·보증금·유틸 분담 비율",
      "퇴거·교체 시 절차 합의",
    ],
    steps: [
      "단지에 Roommate / Additional occupant / Sublease 규칙을 문의합니다.",
      "가능하면 모든 성인이 Lease에 함께 서명합니다 (공동 책임 범위를 이해한 뒤).",
      "월세 납부 방법(한 계좌 vs 각자), 연체 시 누가 연락받을지 정합니다.",
      "공용 공간·청소·손님·반려동물 규칙을 문자·문서로 남깁니다.",
      "중도 퇴거·교체 시 Application·승인 절차와 비용을 미리 확인합니다.",
      "서브리스는 반드시 서면 허가를 받고, 원 Lease 금지 조항을 다시 읽습니다.",
    ],
    links: [
      {
        label: "CFPB – Renting",
        url: "https://www.consumerfinance.gov/consumer-tools/renter-protections/",
      },
      {
        label: "리스(임대차) 읽기",
        url: "/guides/housing/lease-basics",
      },
      {
        label: "아파트 임대",
        url: "/guides/housing/rent-apartment",
      },
      {
        label: "임대 사기 주의",
        url: "/guides/housing/rental-scams",
      },
    ],
    faq: [
      {
        question: "제가 서명만 했는데 룸메이트가 월세를 안 내면요?",
        answer:
          "단지에는 서명자가 전액 책임이 되는 경우가 많습니다. 분담 약속과 별개로 Lease를 확인하세요.",
      },
      {
        question: "크레딧이 없는 친구를 올릴 수 있나요?",
        answer:
          "단지 심사에 따라 거절되거나 Guarantor·선수납을 요구할 수 있습니다. 사전 문의가 안전합니다.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
];
