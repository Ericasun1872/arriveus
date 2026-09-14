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
        label: "집 구입·모기지 기초",
        url: "/guides/housing/buy-home",
      },
      {
        label: "퇴거·집주인 분쟁",
        url: "/guides/housing/eviction-landlord",
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
      {
        label: "세입자 보험 (Renters insurance)",
        url: "/guides/housing/renters-insurance",
      },
    ],
    faq: [
      {
        question: "입주 전에 Renters insurance가 꼭 필요한가요?",
        answer:
          "단지가 요구하면 입주 조건인 경우가 많습니다. 자세한 가입·증서 제출은 ‘세입자 보험’ 가이드를 보세요.",
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
      {
        label: "세입자 보험 (Renters insurance)",
        url: "/guides/housing/renters-insurance",
      },
      {
        label: "입주·퇴거 체크리스트",
        url: "/guides/housing/move-in-out",
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
  {
    slug: "renters-insurance",
    category: "housing",
    title: "세입자 보험 (Renters insurance)",
    summary:
      "임대인이 요구하는 Renters insurance가 무엇인지, 보통 무엇을 보장하는지, 가입·증서 제출 시 확인할 점을 정리합니다.",
    cost: "월 보험료는 지역·보장·디덕터블에 따라 다름 (종종 월 수십 달러대부터)",
    methods: ["보험사·에이전트 견적", "단지 요구 한도 확인", "증서(Evidence of insurance) 제출"],
    overview:
      "미국 아파트·타운하우스 Lease에는 Renters insurance(세입자 보험) 가입과 단지에 증서 제출을 요구하는 경우가 많습니다. 건물 구조는 건물주 보험이 다루는 경우가 많고, 세입자 보험은 보통 내 짐(Personal property), 과실로 이웃·단지에 끼친 손해(Liability), 임시 거처(Loss of use) 등을 다루는 식으로 구성됩니다. ‘월세에 포함’과 혼동하지 마세요.\n\n가입 전 Lease에 적힌 최소 Liability 한도(예: $100,000), 단지를 Additional interest / interested party로 넣는 요건, 제출 기한을 확인합니다. 보험료만 싼 상품이 짐 보장·디덕터블이 불리할 수 있어 견적서 보장 항목을 비교하세요. 룸메이트가 있으면 각자 가입인지 한 증권에 이름을 올리는지 단지·보험사에 묻습니다.\n\n도난·누수·화재 후에는 사진을 남기고 보험사에 청구하며, 단지 신고 절차도 따릅니다. ArriveUS는 특정 보험사를 추천하지 않습니다.",
    requirements: [
      "Lease의 보험 조항(최소 한도·제출 기한·단지 표기 이름)",
      "거주 주소·입주 예정일",
      "대략적인 짐 가치(가전·가구·전자기기)",
      "결제 수단·이메일(증서 PDF 수신)",
    ],
    steps: [
      "Lease·입주 안내에서 Renters insurance 필수 여부와 Liability 최소 한도를 확인합니다.",
      "단지에 제출할 공식 이름(Property / Additional interest)과 이메일·포털을 물어봅니다.",
      "2–3곳에서 견적을 비교하고, Personal property·Liability·디덕터블·임시 거처를 확인합니다.",
      "가입 후 Evidence of insurance / Declaration을 단지에 기한 안에 제출합니다.",
      "이사·룸메이트 변경·반려동물이 생기면 보험사·단지에 업데이트를 알립니다.",
      "피해가 나면 안전 확인 → 사진 → 단지/보험 청구 순으로 진행합니다.",
    ],
    links: [
      {
        label: "NAIC – Renters insurance",
        url: "https://content.naic.org/consumer/renters-insurance.htm",
      },
      {
        label: "Insurance Information Institute – Renters",
        url: "https://www.iii.org/article/spotlight-on-renters-insurance",
      },
      {
        label: "CFPB – Renting",
        url: "https://www.consumerfinance.gov/consumer-tools/renter-protections/",
      },
      {
        label: "리스(임대차) 읽기",
        url: "/guides/housing/lease-basics",
      },
      {
        label: "입주·퇴거 체크리스트",
        url: "/guides/housing/move-in-out",
      },
      {
        label: "아파트 임대",
        url: "/guides/housing/rent-apartment",
      },
    ],
    faq: [
      {
        question: "건물주 보험이 있으면 세입자 보험은 필요 없나요?",
        answer:
          "건물 구조와 세입자 짐·책임은 따로인 경우가 많습니다. Lease가 요구하면 가입·증서 제출이 필요합니다.",
      },
      {
        question: "얼마나 보장해야 하나요?",
        answer:
          "Lease 최소 Liability를 맞추고, 짐 가치는 본인 목록에 맞게 정합니다. 견적서에서 한도와 디덕터블을 확인하세요.",
      },
      {
        question: "룸메이트와 한 증권으로 가능한가요?",
        answer:
          "보험사·단지 정책에 따라 다릅니다. 이름·주소가 증권과 Lease에 맞는지 미리 확인하세요.",
      },
      {
        question: "증서를 안 내면요?",
        answer:
          "단지 규정 위반·벌금·Lease 위반으로 이어질 수 있습니다. 입주 전·기한 안에 제출하세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 보험·법률 자문이 아닙니다. 보장 범위·요율·단지 요건은 상품·계약마다 다르므로 약관·Lease와 면허 있는 보험 상담사를 확인하세요. 특정 보험사를 추천하지 않습니다.",
  },
  {
    slug: "buy-home",
    category: "housing",
    title: "집 구입·모기지 기초",
    summary:
      "렌트에서 구매로 넘어갈 때 보는 구입 전 서류(신용·세금·은행·월급 명세서) 준비 순서, Pre-approval, 다운페이, Closing, 검사·감정 큰 흐름을 정리합니다.",
    cost: "다운페이·Closing cost·검사·감정·보험·재산세는 지역·대출마다 다름",
    methods: ["서류·신용 준비", "모기지 Pre-approval", "Buyer’s agent / 직접 협상", "Inspection·Appraisal·Closing"],
    overview:
      "미국 집 구입은 ‘마음에 드는 집을 고르고 바로 소유’가 아니라, 보통 (1) 예산·신용·소득 서류를 모아 모기지 Pre-approval (2) 매물 보기·오퍼 (3) 계약(Purchase agreement) 후 Inspection·Appraisal (4) 대출 최종 승인 (5) Closing(소유권·자금·서류 이전) 순입니다. 렌트와 달리 Earnest money, Contingency(검사·대출·감정 조건), Title(소유권) 보험, HOA, 재산세(Property tax), Homeowners insurance가 한꺼번에 따라옵니다.\n\n매물을 보기 전에 렌더가 흔히 요구하는 서류부터 순서를 잡으면 좋습니다. (1) 신용 점수·리포트 확인·오류 정정 (2) 최근 2년분 세금 신고서(Tax returns)와 W-2/1099 (3) 최근 2–3개월 은행 명세서(Bank statements)·다운페이 자금 출처 (4) 최근 30–60일 Pay stubs(월급 명세서) (5) 신분증·SSN/ITIN·고용 확인 후 Pre-approval 신청. 자영업·프리랜서는 손익 계산서·사업 계좌가 더 필요할 수 있고, 증여 자금이면 Gift letter가 따릅니다. 정확한 목록·개월 수는 렌더마다 다르니 Pre-approval 전에 체크리스트를 받으세요.\n\n신용 이력이 짧거나 비시민이면 대출 상품·다운페이 요건이 달라질 수 있어, 여러 은행·크레딧유니온·모기지 렌더에 Pre-approval을 문의하는 것이 일반적입니다. 첫 주택·다운페이 보조·FHA 등 공공 프로그램은 ‘첫 주택 구매 지원’ 가이드를 함께 보세요. ‘오늘만 특가·선입금만 내면 집 예약’류 광고, 소유권 확인 없이 송금 요구는 사기 위험이 큽니다. CFPB Buying a House·HUD 주택 상담을 공식 출발점으로 두세요.\n\nArriveUS는 특정 중개·렌더를 추천하지 않으며, 개별 대출·계약 자문을 하지 않습니다. 큰 금액 계약 전에는 변호사·HUD 승인 상담·라이선스 있는 전문가와 확인하세요.",
    requirements: [
      "신용 점수·리포트 (오류 있으면 정정 요청)",
      "최근 세금 신고서(보통 2년)·W-2/1099",
      "최근 은행 명세서(보통 2–3개월)와 다운페이 자금 출처",
      "최근 Pay stubs(월급 명세서, 보통 30–60일분)",
      "신분증·SSN/ITIN 등 렌더가 요구하는 신분 서류",
      "고용 확인·자영업이면 손익·사업 계좌 (해당 시)",
      "Gift letter 등 증여·이체 설명 (해당 시)",
      "예산(월 상환·보험·세금·HOA·수리)·오퍼·Inspection 리포트",
    ],
    steps: [
      "예산(월 상환·보험·재산세·HOA)을 잡고, AnnualCreditReport.com 등으로 신용 리포트를 확인·오류를 고칩니다. 점수가 낮으면 신용 가이드로 먼저 정리합니다.",
      "세금 신고서(최근 2년)·W-2/1099 PDF를 모읍니다. 아직 신고 전이면 세무 일정과 렌더 요구를 맞춥니다.",
      "다운페이용 계좌의 은행 명세서(보통 최근 2–3개월)를 받고, 큰 입금 출처(급여·저축·증여)를 설명할 수 있게 준비합니다.",
      "최근 Pay stubs와 고용주 연락처(또는 자영업 소득 서류)를 준비합니다.",
      "렌더 2–3곳에 서류 목록을 확인한 뒤 Pre-approval을 신청하고, Loan Estimate를 비교합니다.",
      "첫 구매·소득 요건이 되면 HUD 상담·주 다운페이 보조 해당 여부를 ‘첫 주택 구매 지원’ 가이드로 확인합니다.",
      "매물을 보고 오퍼할 때 Earnest money·Closing 일정·Inspection/Financing contingency를 적습니다.",
      "계약 후 Home inspection·Appraisal·Underwriting을 진행하고, Title·Homeowners insurance를 준비합니다.",
      "Closing Disclosure를 확인한 뒤 Closing에서 서명·자금·열쇠를 마무리하고, 주소·세금·보험을 정리합니다.",
    ],
    links: [
      {
        label: "CFPB – Buying a House",
        url: "https://www.consumerfinance.gov/owning-a-home/",
      },
      {
        label: "CFPB – Create a loan application packet",
        url: "https://www.consumerfinance.gov/owning-a-home/prepare/create-a-loan-application-packet/",
      },
      {
        label: "HUD – Buying a home",
        url: "https://www.hud.gov/buying",
      },
      {
        label: "USA.gov – Buying a home",
        url: "https://www.usa.gov/buying-home",
      },
      {
        label: "AnnualCreditReport.com",
        url: "https://www.annualcreditreport.com/",
      },
      {
        label: "첫 주택 구매 지원 (정부·공공)",
        url: "/guides/housing/first-time-buyer-help",
      },
      {
        label: "신용 점수 올리기",
        url: "/guides/bank/credit-build",
      },
      {
        label: "첫 미국 세금 신고",
        url: "/guides/tax/file-taxes",
      },
      {
        label: "아파트 임대",
        url: "/guides/housing/rent-apartment",
      },
      {
        label: "주소·우편",
        url: "/guides/life/address-mail",
      },
    ],
    faq: [
      {
        question: "집 보기 전에 무엇을 먼저 준비하나요?",
        answer:
          "흔히 신용 확인 → 세금 신고서·W-2 → 은행 명세서 → Pay stub → Pre-approval 순입니다. 렌더 체크리스트가 최종 기준입니다.",
      },
      {
        question: "세금 자료는 몇 년치가 필요한가요?",
        answer:
          "많은 렌더가 최근 2년분 세금 신고와 W-2/1099를 요청합니다. 자영업·이직이면 더 필요할 수 있으니 미리 물어보세요.",
      },
      {
        question: "은행 명세서에서 큰 입금이 있으면요?",
        answer:
          "급여·저축·증여 출처를 설명해야 하는 경우가 많습니다. 증여면 Gift letter 등 서류를 준비하세요.",
      },
      {
        question: "다운페이는 항상 20%인가요?",
        answer:
          "아닙니다. 상품·신용·보험(PMI 등)에 따라 더 낮을 수 있지만 월 비용·자격 조건이 달라집니다. Pre-approval과 ‘첫 주택 구매 지원’ 가이드를 함께 보세요.",
      },
      {
        question: "비시민도 집을 살 수 있나요?",
        answer:
          "많은 경우 가능하지만 대출·세금·체류와 별개입니다. 렌더·세무·필요 시 변호사와 확인하세요.",
      },
      {
        question: "Closing cost가 뭔가요?",
        answer:
          "소유권 이전·대출·타이틀·에스크로 등 Closing 때 내는 수수료·선수금입니다. Closing Disclosure에 항목이 나옵니다.",
      },
      {
        question: "검사에서 문제가 나오면요?",
        answer:
          "계약 Contingency에 따라 수리 요청·가격 조정·해지가 가능할 수 있습니다. 기한 안에 서면으로 진행하세요.",
      },
      {
        question: "정부 지원·다운페이 보조가 있나요?",
        answer:
          "주·시·FHA 등 프로그램이 있을 수 있습니다. ArriveUS ‘첫 주택 구매 지원’ 가이드와 HUD 상담을 확인하세요.",
      },
    ],
    updatedAt: "2026-09",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 부동산·대출·법률·세무 자문이 아닙니다. 서류 목록·개월 수·이자·자격은 렌더·상품·개인마다 다르므로 CFPB·HUD·라이선스 있는 전문가 안내를 확인하세요. 특정 중개·은행을 추천하지 않습니다.",
  },
  {
    slug: "first-time-buyer-help",
    category: "housing",
    title: "첫 주택 구매 지원 (정부·공공)",
    summary:
      "첫 주택 구매자용 FHA·다운페이 보조·주·시 프로그램·HUD 주택 상담을 찾는 입문 안내입니다. 자격·금액은 공식 창구에서 확인하세요.",
    cost: "상담은 무료~저비용인 경우 많음 / 대출·보조 조건·수수료는 프로그램마다 다름",
    methods: [
      "HUD 승인 주택 상담",
      "FHA 등 특수 대출 개념",
      "주·시·비영리 다운페이·Closing 보조",
      "Loan Estimate 비교",
    ],
    overview:
      "미국에는 ‘첫 주택을 사는 사람’을 돕는 연방·주·시·비영리 프로그램이 있습니다. 다만 전국 단일 ‘무조건 보조금’은 없고, First-time buyer 정의도 프로그램마다 다릅니다(예: 최근 3년 내 소유 이력 없음 등). 소득·신용·구매 지역·교육 이수·주 거주요건이 붙는 경우가 많습니다.\n\n자주 듣는 유형은 (1) FHA 대출처럼 다운페이가 상대적으로 낮은 연방 보험 모기지 개념 (2) 주 Housing Finance Agency·시·비영리가 주는 Down payment / Closing cost assistance (무이자·유예·2차 담보 형태 등) (3) 교사·소방관 등 특정 직군·특정 동네 대상 프로그램 (4) VA(군인·해당 유족), USDA(일부 농촌 지역)처럼 해당자만 쓰는 특수 대출입니다. 보조를 받으면 일정 기간 거주·재판매 제한이 따를 수 있습니다.\n\n가장 안전한 출발은 CFPB·HUD가 안내하는 HUD-approved housing counselor입니다. ZIP으로 상담 기관을 찾아 예산·신용·지역 프로그램을 함께 점검하세요. ‘정부 보조금 대행·선입금만 내면 승인’ 광고는 사기로 보고, 공식 상담·렌더 Loan Estimate만 비교하세요.\n\n비시민·영주권·비자 신분도 프로그램·렌더마다 자격이 갈립니다. ArriveUS는 개별 승인·알선을 하지 않습니다.",
    requirements: [
      "거주지 ZIP·구매 희망 지역",
      "소득·가구 규모·최근 세금 신고",
      "신용 개요·부채(월 상환)",
      "신분 서류(렌더·프로그램 요구에 따름)",
      "HUD 상담·홈바이어 교육 이수 여부(프로그램이 요구하면)",
    ],
    steps: [
      "CFPB Find a Housing Counselor 또는 HUD 안내로 거주 ZIP의 HUD 승인 상담 기관을 찾습니다.",
      "상담에서 첫 구매 정의·소득 한도·지역 DPA(다운페이 보조)·필수 교육 과정을 확인합니다.",
      "FHA·일반(Conventional)·해당 시 VA/USDA 등 후보를 렌더 2–3곳에 물어 Pre-approval·Loan Estimate를 비교합니다.",
      "주 Housing Finance Agency·시 주택국 사이트에서 first-time / down payment 프로그램을 검색하고, 상담사가 안내한 공식 신청 창구만 이용합니다.",
      "보조·교육·대출 조건을 계약서·약관으로 읽고, 거주·재판매·상환 의무를 메모합니다.",
      "‘정부 대행 수수료’ 선입금 요구는 거절하고, USA.gov·CFPB 사기 주의 안내를 참고합니다.",
    ],
    links: [
      {
        label: "CFPB – First-time home buyer programs",
        url: "https://www.consumerfinance.gov/ask-cfpb/where-can-i-find-information-on-programs-for-first-time-home-buyers-en-2156/",
      },
      {
        label: "CFPB – Special loan programs",
        url: "https://www.consumerfinance.gov/owning-a-home/special-loan-programs/",
      },
      {
        label: "CFPB – Find a Housing Counselor",
        url: "https://www.consumerfinance.gov/find-a-housing-counselor/",
      },
      {
        label: "HUD – Buying a home",
        url: "https://www.hud.gov/buying",
      },
      {
        label: "USA.gov – Buying a home",
        url: "https://www.usa.gov/buying-home",
      },
      {
        label: "집 구입·모기지 기초",
        url: "/guides/housing/buy-home",
      },
      {
        label: "신용 점수 올리기",
        url: "/guides/bank/credit-build",
      },
    ],
    faq: [
      {
        question: "정부가 다운페이를 그냥 주나요?",
        answer:
          "현금 선물처럼 무조건 주는 경우는 드물고, 대출·유예·조건 부여 보조인 경우가 많습니다. 거주·소득 요건을 공식 안내에서 확인하세요.",
      },
      {
        question: "FHA가 뭔가요?",
        answer:
          "연방주택청(FHA)이 보험하는 모기지 유형 중 하나로, 다운페이가 낮은 상품이 있을 수 있습니다. 자격·보험료·한도는 렌더·공식 안내를 보세요.",
      },
      {
        question: "어디서 우리 동네 프로그램을 찾나요?",
        answer:
          "HUD 승인 주택 상담사와 주 Housing Finance Agency·시 주택국이 출발점입니다. CFPB 상담사 검색을 이용하세요.",
      },
      {
        question: "비시민도 지원을 받을 수 있나요?",
        answer:
          "프로그램·렌더마다 다릅니다. 상담·렌더에 신분 요건을 먼저 확인하고, 사기성 ‘무조건 승인’ 광고는 피하세요.",
      },
      {
        question: "홈바이어 교육을 꼭 들어야 하나요?",
        answer:
          "많은 다운페이 보조·일부 대출이 사전 교육을 요구합니다. 상담 기관이 인정하는 과정인지 확인하세요.",
      },
    ],
    updatedAt: "2026-09",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 대출·부동산·법률 자문이 아닙니다. 첫 구매·보조·FHA/VA/USDA 자격과 금액은 주·시·연도·개인마다 다르므로 HUD·CFPB·주 공식 기관과 라이선스 있는 렌더·상담사 안내만 따르세요. 특정 프로그램을 보장·알선하지 않습니다.",
  },
  {
    slug: "eviction-landlord",
    category: "housing",
    title: "퇴거·집주인 분쟁",
    summary:
      "연체·퇴거(Eviction) 통지, 수리 불이행, 보증금 분쟁 시 흔한 절차와 공식 도움 창구를 체크리스트로 정리합니다.",
    cost: "연체료·법원 비용·이사비·법률 상담비는 케이스마다 다름",
    methods: ["Lease·통지서 확인", "서면 기록", "법률 구조·주거 상담", "법원 일정 준수"],
    overview:
      "미국에서는 집주인이 마음대로 바로 ‘문 잠그고 짐을 버리게’ 하는 것이 대부분 불법에 가깝고, 퇴거(Eviction)는 보통 서면 통지 → (해결 안 되면) 법원 소송 → 판결 → 집행 순을 밟습니다. 다만 주·시마다 Notice 기간·사유(월세 미납, Lease 위반, 계약 만료 등)가 다릅니다. 통지를 무시하면 궐석 판결·기록·강제 집행으로 커질 수 있습니다.\n\n집주인이 수리를 안 하거나, 입주 때와 다른 요금을 요구하거나, 보증금(Security deposit)을 부당하게 깎는 경우도 흔합니다. 사진·문자·이메일·영수증을 남기고, USA.gov Housing·CFPB Renter protections·주 Legal aid·지역 Tenant hotline을 활용하세요. ‘오늘 현금으로 끝내자’는 구두 합의만으로 끝내면 나중에 증거가 없어질 수 있습니다.\n\nArriveUS는 개별 소송을 대리하지 않습니다. 가정폭력·긴급 위험은 911, 주거 긴급은 211/지역 주거 상담도 검토하세요.",
    requirements: [
      "Lease·입주 점검 사진·월세 납부 영수증",
      "집주인·관리실 통지서·이메일·문자 사본",
      "법원 서류(Summons / Complaint)와 출석 기한",
      "수리 요청·응답 기록",
      "Legal aid·주거 상담 연락처",
    ],
    steps: [
      "통지·법원 서류를 받으면 날짜·사유·답변(Answer) 기한을 캘린더에 적고 무시하지 않습니다.",
      "Lease와 납부·수리 기록을 모아 사실만 정리합니다. 협상·납부 계획도 가능하면 서면으로 남깁니다.",
      "USA.gov Housing help·주 Legal aid·테넌트 유니온/핫라인에 서류를 들고 상담을 요청합니다.",
      "법원 출석이 있으면 통역이 필요하면 미리 요청하고, 합의서 내용을 서명 전에 읽습니다.",
      "보증금 분쟁은 주가 정한 반환 기한·항목별 공제 설명 요구 절차를 따릅니다.",
      "이사하게 되면 열쇠 반납·최종 검침·주소 변경·보증금 추적 번호를 남깁니다.",
    ],
    links: [
      {
        label: "USA.gov – Housing help",
        url: "https://www.usa.gov/housing",
      },
      {
        label: "CFPB – Renter protections",
        url: "https://www.consumerfinance.gov/consumer-tools/renter-protections/",
      },
      {
        label: "USA.gov – Legal aid",
        url: "https://www.usa.gov/legal-aid",
      },
      {
        label: "리스(임대차) 읽기",
        url: "/guides/housing/lease-basics",
      },
      {
        label: "보증금·디파짓",
        url: "/guides/housing/security-deposit",
      },
      {
        label: "입주·퇴거 체크리스트",
        url: "/guides/housing/move-in-out",
      },
      {
        label: "임대 사기 주의",
        url: "/guides/housing/rental-scams",
      },
    ],
    faq: [
      {
        question: "월세를 하루만 늦어도 바로 쫓겨나나요?",
        answer:
          "보통은 서면 통지·법정 절차가 필요합니다. 다만 Late fee·통지 기간은 Lease·주법에 따릅니다. 통지를 받으면 바로 기록을 모으세요.",
      },
      {
        question: "집주인이 자물쇠를 바꿔도 되나요?",
        answer:
          "많은 주에서 ‘자력 구제’ 강제 퇴거는 불법입니다. 위험하면 경찰·법률 구조에 알리고, 증거를 남기세요.",
      },
      {
        question: "수리를 안 해 주면 월세를 안 내도 되나요?",
        answer:
          "임의로 안 내면 퇴거 사유가 될 수 있습니다. 주마다 Repair and deduct·에스크로 등 절차가 다르니 Legal aid에 먼저 확인하세요.",
      },
      {
        question: "보증금을 돌려받지 못하면요?",
        answer:
          "주가 정한 기한·항목 설명을 요구하고, 소액재판·법률 구조를 검토하세요. 입주·퇴거 사진이 중요합니다.",
      },
    ],
    updatedAt: "2026-09",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 법률·부동산 자문이 아닙니다. 퇴거·임대차 분쟁은 주·시·계약마다 다르므로 공식 안내·Legal aid·자격 있는 변호사를 확인하세요.",
  },
];
