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
        label: "월세 연체·강제 퇴거",
        url: "/guides/housing/rent-hardship-eviction",
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
      {
        question: "입주 후 월세를 못 내면 어떻게 되나요?",
        answer:
          "연체료·서면 통지 후 법원 Eviction으로 이어질 수 있습니다. 밀리기 전에 단지에 알리고, 강제 퇴거 전 해결 방법은 ‘월세 연체·강제 퇴거’ 가이드를 보세요.",
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
      {
        label: "월세 연체·강제 퇴거",
        url: "/guides/housing/rent-hardship-eviction",
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
      "미국 이사는 날짜(Move-in / Move-out date)가 Lease에 고정되어 있는 경우가 많습니다. 입주 전에는 유틸리티·인터넷 개통, 보험(Renters insurance) 요구 여부를 확인하고, 입주 당일에는 하자 기록과 우편함·택배함을 챙깁니다. 퇴거 전에는 단지 Move-out 안내, 청소, 주소 변경(USPS·은행·DMV), 유틸리티 해지를 일정에 맞춰 진행하세요. 계획된 이사와 달리 월세를 못 내면 연체료·서면 통지·법원 Eviction(강제 퇴거)으로 이어질 수 있습니다. 강제 퇴거 전 분할 납부·긴급 지원은 ‘월세 연체·강제 퇴거’ 가이드를 보세요.",
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
      {
        label: "월세 연체·강제 퇴거",
        url: "/guides/housing/rent-hardship-eviction",
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
      {
        question: "입주 후 월세를 못 내면 바로 강제 퇴거되나요?",
        answer:
          "보통은 연체료·서면 통지·법원 절차를 거칩니다. 통지 전에 단지와 분할 납부를 말하고, 211·긴급 임대 지원·법률 구조를 같이 찾는 경우가 많습니다. ‘월세 연체·강제 퇴거’ 가이드를 보세요.",
      },
    ],
    disclaimer,
  },
  {
    slug: "rent-hardship-eviction",
    category: "housing",
    title: "월세 연체·강제 퇴거",
    summary:
      "월세를 못 낼 때 흔한 흐름(연체료·통지·법원·집행)과, 강제 퇴거 전에 할 수 있는 분할 납부·긴급 임대 지원·법률 도움을 한국어로 정리했습니다.",
    cost: "연체료·미납 월세·법원·이사 비용은 케이스마다 다름 / 긴급 지원·법률 상담은 자격되면 무료·저비용인 경우 있음",
    methods: [
      "단지에 즉시 서면 연락",
      "분할 납부(Payment plan)",
      "211·주·시 긴급 임대 지원",
      "HUD 주거 상담·Legal aid",
      "합의 퇴거(서면) 또는 법원 대응",
    ],
    overview:
      "미국 아파트는 월세 Due date를 넘기면 Late fee가 붙고, 계속 밀리면 임대인이 서면 통지(Pay or quit / Notice to pay 등, 주마다 이름·기간이 다름)를 보내는 경우가 많습니다. 통지 기한 안에 전액 납부하거나 서면 합의를 못 하면 Eviction(강제 퇴거) 소송을 낼 수 있습니다. 많은 주에서 집주인이 법원 명령 없이 자물쇠를 바꾸거나 짐을 내다 버리거나 전기를 끊는 식의 ‘자가 집행(Self-help eviction)’은 불법인 경우가 많습니다. 반대로 법원 판결 후 Sheriff·Constable이 집행하면 실제로 나가야 합니다. 통지 일수·보호 조항은 주·시마다 완전히 다릅니다.\n\n강제 퇴거 전에 해결할 방법은 있습니다. (1) 밀리기 전·직후 단지에 이메일로 상황을 알리고 분할 납부·유예(Payment plan / repayment agreement)를 구체적으로 요청합니다. (2) 211, USA.gov 긴급 임대 지원, 시·카운티·비영리 프로그램에 동시에 문의·신청합니다. 코로나 시기 연방 ERA(Emergency Rental Assistance) 전국 신청은 종료되었고, 지금은 주·시·비영리 창구가 중심입니다. (3) HUD 승인 주거 상담사, Legal aid, LawHelp.org로 통지·법원 서류 대응을 받습니다. (4) 실직이면 실업급여, 식비 부담이면 SNAP 등 다른 공식 혜택으로 월세 여력을 만드는 것도 검토합니다. (5) 남을 수 없으면 이사 날짜·열쇠 반납·미납 처리(Cash for keys 등)를 서면으로 합의하면, 강제 퇴거 기록이 남는 것보다 나을 수 있습니다. 구두 약속만 믿지 마세요.\n\n법원 소환장(Summons)·소장(Complaint)이 오면 기한 안에 Answer를 내거나 출석해야 합니다. 무시하면 궐석 판결(Default)로 퇴거가 확정되기 쉽습니다. 판결은 Tenant screening에 수년간 남을 수 있고, 미납은 추심·신용에도 영향을 줄 수 있습니다. 수리 문제로 월세를 임의로 안 내는 것은 주법에 따라 위험할 수 있습니다. ArriveUS는 개별 사건을 변호하지 않습니다. 주·시 법과 Lease가 우선입니다.",
    requirements: [
      "Lease의 월세 Due date·유예(Grace period)·연체료·퇴거 조항",
      "납부 영수증·은행 내역·미납 금액 계산",
      "받은 통지·법원 서류 전부 (날짜·사건 번호)",
      "소득 감소 증빙(실직·병원비 등, 지원 신청 시)",
      "211·시/카운티 긴급 지원·Legal aid 연락처",
      "합의 퇴거를 대비한 새 거처·이사 일정 메모",
    ],
    steps: [
      "밀릴 것 같으면 Due date 전에 단지에 이메일로 알리고, Lease의 유예·연체료를 확인합니다. 전화만 하지 말고 서면으로 남깁니다.",
      "분할 납부·납부일 연기를 구체적으로 제안합니다(언제 얼마를 낼지). 합의되면 이메일을 다시 받아 둡니다.",
      "동시에 211, USA.gov 긴급 임대 지원, 시·카운티·비영리, HUD 주거 상담을 찾습니다. ‘퇴거 막아 준다’며 선입금을 받는 업체는 피하세요.",
      "실직·소득 감소면 실업급여·SNAP 등 공식 혜택도 함께 신청해 월세 여력을 만듭니다.",
      "Pay or quit / eviction notice를 받으면 날짜를 캘린더에 넣고, 기한 안에 납부·합의하거나 Legal aid에 서류를 보여 줍니다. 자물쇠 교체·단전 협박은 주 세입자 권리·법률 구조를 확인하세요.",
      "법원 서류가 오면 기한 안에 Answer·출석·통역 요청을 합니다. 합의 퇴거를 하더라도 이사일·열쇠·미납·보증금 조건을 서면으로 남기고, 판결 후에는 Sheriff 집행 전에 짐과 주소를 정리합니다.",
    ],
    links: [
      {
        label: "USA.gov – Avoid eviction",
        url: "https://www.usa.gov/avoid-eviction",
      },
      {
        label: "USA.gov – Emergency rent assistance",
        url: "https://www.usa.gov/emergency-pay-rent",
      },
      {
        label: "CFPB – What to do if you’re facing eviction",
        url: "https://www.consumerfinance.gov/housing/housing-insecurity/help-for-renters/what-to-do-if-youre-facing-eviction/",
      },
      {
        label: "211 – 지역 긴급 지원 찾기",
        url: "https://www.211.org/",
      },
      {
        label: "CFPB – HUD 주거 상담사 찾기",
        url: "https://www.consumerfinance.gov/find-a-housing-counselor/",
      },
      {
        label: "USA.gov – Legal aid",
        url: "https://www.usa.gov/legal-aid",
      },
      {
        label: "USA.gov – Tenant rights",
        url: "https://www.usa.gov/tenant-rights",
      },
      {
        label: "LawHelp.org",
        url: "https://www.lawhelp.org/",
      },
      {
        label: "입주·퇴거 체크리스트",
        url: "/guides/housing/move-in-out",
      },
      {
        label: "리스(임대차) 읽기",
        url: "/guides/housing/lease-basics",
      },
      {
        label: "보증금",
        url: "/guides/housing/security-deposit",
      },
      {
        label: "룸메이트·서브리스",
        url: "/guides/housing/roommate",
      },
      {
        label: "공공 혜택 (SNAP·WIC 등)",
        url: "/guides/life/public-benefits",
      },
      {
        label: "실업급여 신청",
        url: "/guides/job/unemployment",
      },
    ],
    faq: [
      {
        question: "월세를 하루만 늦어도 바로 쫓겨나나요?",
        answer:
          "보통은 바로 강제 퇴거되지 않고, 연체료와 서면 통지·법원 절차를 거칩니다. 다만 유예 기간과 통지 일수는 주·계약마다 다릅니다. 늦을 것 같으면 Due date 전에 단지에 서면으로 알리세요.",
      },
      {
        question: "강제 퇴거 전에 해결할 방법은 있나요?",
        answer:
          "있습니다. 단지에 분할 납부를 요청하고, 211·주·시·비영리 긴급 임대 지원, HUD 주거 상담, Legal aid를 동시에 찾는 것이 일반적입니다. 남을 수 없으면 이사일을 서면으로 합의해 강제 퇴거 기록을 피하는 경우도 있습니다.",
      },
      {
        question: "집주인이 열쇠를 바꾸거나 전기를 끊어도 되나요?",
        answer:
          "많은 주에서 법원 명령 없는 자물쇠 교체·짐 반출·단전은 불법인 경우가 많습니다. 주 세입자 안내와 Legal aid를 확인하고, 협박·실행 기록은 사진·메시지로 남기세요.",
      },
      {
        question: "코로나 때처럼 연방 월세 지원을 신청할 수 있나요?",
        answer:
          "연방 ERA 전국 신청은 종료되었습니다. 지금은 211과 USA.gov 긴급 임대 지원으로 주·시·비영리 프로그램을 찾는 방식이 일반적입니다. 자격·잔액은 지역마다 다릅니다.",
      },
      {
        question: "법원 서류를 무시하면요?",
        answer:
          "기한 안에 답변·출석하지 않으면 궐석 판결로 퇴거가 확정되기 쉽습니다. 서류의 날짜·사건 번호를 확인하고 Legal aid·법원 Self-help에 바로 문의하세요.",
      },
      {
        question: "룸메이트가 월세를 안 내면 저만 쫓겨나나요?",
        answer:
          "Lease에 같이 서명했다면 단지에는 전액 공동 책임인 경우가 많습니다. 분담 약속과 별개로 ‘룸메이트·서브리스’ 가이드와 단지 정책을 확인하세요.",
      },
    ],
    updatedAt: "2026-09",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 부동산·법률 자문이 아닙니다. 강제 퇴거·통지 기한·세입자 보호는 주·시·계약마다 다르므로 Lease와 공식 안내, 필요 시 Legal aid·변호사를 확인하세요. 개별 사건을 대행하지 않습니다.",
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
      "연체료(Late fee), NSF(부도) 수수료, 자동이체 할인, 연체 시 통지·퇴거 조항을 찾습니다.",
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
      {
        label: "월세 연체·강제 퇴거",
        url: "/guides/housing/rent-hardship-eviction",
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
      {
        question: "연체료 조항만 보면 되나요?",
        answer:
          "Late fee와 함께 Pay or quit·퇴거 통지 조항도 표시해 두세요. 월세를 못 낼 때의 흐름은 ‘월세 연체·강제 퇴거’ 가이드를 참고하세요.",
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
      {
        label: "월세 연체·강제 퇴거",
        url: "/guides/housing/rent-hardship-eviction",
      },
    ],
    faq: [
      {
        question: "제가 서명만 했는데 룸메이트가 월세를 안 내면요?",
        answer:
          "단지에는 서명자가 전액 책임이 되는 경우가 많습니다. 분담 약속과 별개로 Lease를 확인하고, 단지 통지·강제 퇴거 흐름은 ‘월세 연체·강제 퇴거’ 가이드를 보세요.",
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
];
