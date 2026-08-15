import type { Guide } from "../types";

const disclaimer =
  "ArriveUS 가이드는 일반적인 참고 정보이며 이민·법률 자문이 아닙니다. 양식·수수료·자격은 수시로 바뀌므로 반드시 USCIS.gov 공식 안내와, 필요 시 자격 있는 이민 변호사·공인 대리인(Accredited Representative)을 확인하세요.";

export const immigrationGuides: Guide[] = [
  {
    slug: "uscis-account",
    category: "immigration",
    title: "USCIS 계정·케이스 조회",
    summary:
      "myUSCIS 계정 만들기, Receipt Number로 케이스 상태 보기, 주소 변경·문서 다운로드 등 이민국 온라인 시스템 기본 사용법입니다.",
    cost: "계정 생성 무료 / 양식·수수료는 별도",
    methods: ["myUSCIS 온라인", "Case Status Online", "USCIS Contact Center"],
    overview:
      "미국 이민국(USCIS) 대부분의 신청은 온라인 계정(myUSCIS)과 접수번호(Receipt Number, 보통 3글자+숫자)로 관리됩니다. 계정을 만들면 제출한 케이스 상태, 안내문(Notice), RFE(추가서류 요청) PDF, 예약 정보를 한곳에서 볼 수 있습니다. Receipt Number만 있으면 Case Status Online으로도 진행 상황을 볼 수 있지만, 주소 변경·일부 온라인 제출·메시지 확인은 계정 로그인이 필요합니다. 이사를 하면 USCIS·미국 우편·SSA에 주소를 각각 업데이트해야 안내문이 올바른 곳으로 옵니다.",
    requirements: [
      "이메일 주소 (계정 인증용)",
      "Receipt Number (I-797 접수 확인서에 있음, 예: IOE/WAC/EAC 등으로 시작)",
      "본인 A-Number (영주권·일부 서류에 있는 경우)",
      "안전한 비밀번호·2단계 인증 설정",
    ],
    steps: [
      "my.uscis.gov에서 계정을 만들고 이메일을 인증합니다.",
      "이미 접수한 케이스가 있으면 Receipt Number로 케이스를 계정에 연결합니다.",
      "Case Status에서 Received / Biometrics / Interview / Decision 등 단계를 확인합니다.",
      "이사를 하면 USCIS 온라인 주소 변경(또는 AR-11 안내)을 즉시 처리하고, 우편·SSA 주소도 함께 바꿉니다.",
      "RFE·Interview Notice가 오면 PDF를 다운로드·인쇄하고 마감일을 캘린더에 표시합니다.",
      "상태가 오래 멈춰 있어도 ‘문의’ 전에 처리 시간(Processing times) 도구로 평균 기간을 먼저 확인합니다.",
    ],
    links: [
      {
        label: "myUSCIS 로그인·계정",
        url: "https://my.uscis.gov/",
      },
      {
        label: "Case Status Online",
        url: "https://egov.uscis.gov/casestatus/landing.do",
      },
      {
        label: "USCIS – Change of address",
        url: "https://www.uscis.gov/addresschange",
      },
      {
        label: "USCIS Processing Times",
        url: "https://egov.uscis.gov/processing-times/",
      },
      {
        label: "바이오메트릭스·인터뷰 안내",
        url: "/guides/immigration/biometrics-interview",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "biometrics-interview",
    category: "immigration",
    title: "바이오메트릭스·인터뷰",
    summary:
      "지문·사진(바이오메트릭스) 예약 통지, 인터뷰 준비물, 일정 변경·연락 방법을 이민국 절차 기준으로 정리했습니다.",
    cost: "바이오메트릭스 수수료는 양식·면제 여부에 따라 상이 (공고 확인)",
    methods: ["ASC 방문 (Application Support Center)", "Field Office 인터뷰", "온라인 일정 확인"],
    overview:
      "많은 USCIS 신청은 접수 후 Application Support Center(ASC)에서 지문·사진·서명을 받는 바이오메트릭스 단계가 있습니다. Appointment Notice에 날짜·장소·가져올 서류가 적혀 있으니, 여권·접수증·사진이 있는 ID를 챙기고 일찍 도착하세요. 이후 케이스에 따라 Field Office 인터뷰가 잡힐 수 있습니다(영주권 조정, 귀화 등). 인터뷰에는 신청서 사본, 신분증, 초청·혼인·근로 등 케이스 증빙 원본을 준비하는 것이 일반적입니다. 일정을 못 지키면 안내에 따라 재예약을 요청하고, 무단 불참은 거절·포기로 이어질 수 있습니다.",
    requirements: [
      "Appointment Notice (바이오메트릭스 또는 인터뷰)",
      "여권·사진 ID·영주권/EAD 등 해당 신분 서류",
      "Receipt Number·신청서 사본",
      "인터뷰용 증빙 원본 (케이스별: 혼인증, 세금, 사진 등)",
      "통역이 필요하면 USCIS 규칙에 맞는 통역 가능 여부 사전 확인",
    ],
    steps: [
      "우편·myUSCIS에서 Appointment Notice를 받으면 날짜·ASC/사무실 주소를 확인합니다.",
      "바이오메트릭스: 지정된 ASC에 가서 지문·사진을 찍고, 스탬프·확인을 받습니다.",
      "인터뷰: 신청서와 증빙을 다시 읽고, 주소·고용·여행 기록이 서류와 같은지 맞춥니다.",
      "일정을 바꿔야 하면 Notice에 적힌 방법 또는 USCIS 연락 채널로 가능한 빨리 요청합니다.",
      "인터뷰 후 추가 서류(RFE)가 나오면 마감 전에 myUSCIS로 제출합니다.",
      "결정(Approval/Denial) Notice가 오면 PDF를 저장하고, 승인 시 카드 배송·선서식(귀화) 일정을 확인합니다.",
    ],
    links: [
      {
        label: "USCIS – Preparing for your biometric services appointment",
        url: "https://www.uscis.gov/forms/filing-guidance/preparing-for-your-biometric-services-appointment",
      },
      {
        label: "USCIS Contact Center",
        url: "https://www.uscis.gov/contactcenter",
      },
      {
        label: "USCIS 계정·케이스 조회",
        url: "/guides/immigration/uscis-account",
      },
      {
        label: "귀화(N-400) 개요",
        url: "/guides/immigration/naturalization-n400",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "common-forms",
    category: "immigration",
    title: "자주 쓰는 USCIS 양식 지도",
    summary:
      "I-90, I-765, I-485, I-751, N-400 등 한국인이 자주 접하는 양식이 ‘무엇을 위한 것인지’만 빠르게 구분하는 안내입니다. 작성법은 공식 지침을 따르세요.",
    methods: ["USCIS Forms", "myUSCIS 온라인 제출", "종이 접수 (양식별)"],
    overview:
      "USCIS 양식은 이름만 비슷해도 용도가 전혀 다릅니다. I-90은 영주권 카드 갱신·재발급, I-765는 취업허가(EAD), I-485는 신분 조정(영주권 신청의 한 경로), I-751은 조건부 영주권(결혼 등 2년) 조건 제거, N-400은 시민권(귀화) 신청입니다. 이 페이지는 ‘어떤 상황에서 어떤 양식 이름을 듣는지’ 지도일 뿐이며, 자격·동반 제출·수수료는 케이스마다 다릅니다. 잘못된 양식을 내면 기각·거절될 수 있으니, 제출 전 공식 Forms 페이지의 Filing fee·Edition date·Instructions PDF를 반드시 확인하세요.",
    requirements: [
      "본인 현재 신분 (비자·영주권·EAD 등)",
      "목표 (카드 갱신 / 취업허가 / 영주권 / 조건 제거 / 시민권)",
      "Receipt·A-Number·여권 정보",
      "해당 양식 Instructions PDF",
    ],
    steps: [
      "목표를 한 줄로 적습니다. 예: ‘10년 영주권 카드가 만료되어 갱신’.",
      "아래 용도표에서 후보 양식을 고른 뒤 uscis.gov/forms에서 공식 페이지를 엽니다.",
      "Edition date·수수료·온라인 제출 가능 여부·준비 서류를 Instructions에서 확인합니다.",
      "확신이 없으면 제출하지 말고, 변호사·Accredited Representative 상담을 검토합니다.",
      "제출 후 Receipt Number를 저장하고 USCIS 계정 가이드로 상태를 추적합니다.",
    ],
    links: [
      {
        label: "USCIS Forms",
        url: "https://www.uscis.gov/forms",
      },
      {
        label: "I-90 – Replace Permanent Resident Card",
        url: "https://www.uscis.gov/i-90",
      },
      {
        label: "I-765 – Employment Authorization",
        url: "https://www.uscis.gov/i-765",
      },
      {
        label: "I-485 – Adjust Status",
        url: "https://www.uscis.gov/i-485",
      },
      {
        label: "I-751 – Remove Conditions",
        url: "https://www.uscis.gov/i-751",
      },
      {
        label: "N-400 – Naturalization",
        url: "https://www.uscis.gov/n-400",
      },
      {
        label: "귀화(N-400) 개요",
        url: "/guides/immigration/naturalization-n400",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "naturalization-n400",
    category: "immigration",
    title: "귀화·시민권 (N-400) 개요",
    summary:
      "영주권자가 시민권을 신청할 때 보는 N-400의 큰 흐름, 준비 개념, 승인 후 SSA(소셜시큐리티) 기록 업데이트까지 연결해 안내합니다.",
    cost: "USCIS 접수비는 공고 시점 기준 (uscis.gov/n-400에서 확인)",
    methods: ["N-400 온라인/종이", "바이오메트릭스", "인터뷰·영어·시민 시험", "선서식(Oath)"],
    overview:
      "N-400은 영주권자(일부 예외 포함)가 미국 시민이 되기 위해 제출하는 귀화 신청서입니다. 일반적으로 일정 기간의 영주권 유지·미국 내 거주·도덕성·영어·시민 지식 시험 등이 요건에 포함되며, 세부 자격은 나이·장애 면제·군인 등 예외가 많습니다. 큰 흐름은 자격 확인 → N-400 제출 → 바이오메트릭스 → 인터뷰·시험 → 승인 → 선서식 → 시민권증입니다. 시민권을 받으면 SSN 숫자는 그대로이지만 SSA에 시민권 취득을 알려 기록을 갱신하는 것이 좋습니다. N-400에서 SSA 카드·기록 업데이트를 함께 요청할 수 있는 경우도 있습니다. 이 가이드는 개요일 뿐이며, 여행 일수·범죄·세금·이름 변경 등은 변호사 검토가 필요한 경우가 많습니다.",
    requirements: [
      "영주권 카드(및 조건부 영주권이면 I-751 등 관련 이력)",
      "거주·출국 여행 기록 (날짜 메모)",
      "세금·선택적 서비스 등 신청서에 묻는 항목 관련 정보",
      "영어·시민 시험 준비 (면제 해당 여부 확인)",
      "여권용 사진·수수료 결제 수단 (제출 방식에 따름)",
    ],
    steps: [
      "uscis.gov/n-400에서 최신 자격·수수료·Edition을 확인합니다.",
      "여행·주소·혼인·자녀·범죄·세금 질문을 빠짐없이 준비해 N-400을 작성·제출합니다.",
      "바이오메트릭스·인터뷰 Notice를 받으면 해당 가이드 절차를 따릅니다.",
      "인터뷰에서 영어·시민 시험을 보고, 결과에 따라 재시험·추가 서류가 있을 수 있습니다.",
      "승인 후 선서식(Oath Ceremony)에 참석해 시민이 됩니다. 시민권증을 보관합니다.",
      "SSA에 시민권 업데이트를 요청합니다(N-400에서 이미 요청했는지 확인). ArriveUS SSN 가이드의 이어서 보세요.",
    ],
    links: [
      {
        label: "USCIS – N-400",
        url: "https://www.uscis.gov/n-400",
      },
      {
        label: "USCIS – Citizenship resource center",
        url: "https://www.uscis.gov/citizenship",
      },
      {
        label: "USCIS – 귀화 후 SSA 업데이트",
        url: "https://www.uscis.gov/newsroom/alerts/new-citizens-will-be-able-to-seamlessly-request-social-security-updates",
      },
      {
        label: "SSN 신청·시민권 후 SSA 업데이트",
        url: "/guides/tax/ssn-apply",
      },
      {
        label: "바이오메트릭스·인터뷰",
        url: "/guides/immigration/biometrics-interview",
      },
      {
        label: "자주 쓰는 양식 지도",
        url: "/guides/immigration/common-forms",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
];
