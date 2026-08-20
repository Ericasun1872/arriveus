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
    faq: [
      {
        question: "Receipt Number만으로도 상태를 볼 수 있나요?",
        answer:
          "Case Status Online으로 진행 상황은 볼 수 있습니다. 주소 변경·일부 제출·메시지는 myUSCIS 로그인이 필요합니다.",
      },
      {
        question: "이사를 하면 어디에 주소를 바꿔야 하나요?",
        answer:
          "USCIS 온라인 주소 변경(또는 AR-11 안내), USPS, SSA를 각각 업데이트하세요. uscis.gov/addresschange를 확인하세요.",
      },
      {
        question: "상태가 오래 멈춰 있으면 바로 문의하나요?",
        answer:
          "먼저 Processing Times 도구로 평균 기간을 확인하세요. 그다음 USCIS Contact Center·계정 안내를 따르세요.",
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
    faq: [
      {
        question: "바이오메트릭스에 뭘 가져가나요?",
        answer:
          "Appointment Notice에 적힌 목록을 따릅니다. 보통 여권·사진 ID·접수증을 챙기고 일찍 도착하세요. USCIS 준비 안내도 확인하세요.",
      },
      {
        question: "일정을 못 지키면 어떻게 하나요?",
        answer:
          "Notice에 적힌 방법 또는 USCIS Contact Center로 가능한 빨리 재예약을 요청하세요. 무단 불참은 거절·포기로 이어질 수 있습니다.",
      },
      {
        question: "인터뷰에 통역을 데려가도 되나요?",
        answer:
          "양식·케이스마다 통역 규칙이 다릅니다. 사전에 USCIS 안내를 확인하고, 허용되지 않는 통역을 쓰지 마세요.",
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
      "I-90, I-765, I-140, I-485, I-751, N-400 등 한국인이 자주 접하는 양식이 ‘무엇을 위한 것인지’만 빠르게 구분하는 안내입니다. 작성법은 공식 지침을 따르세요.",
    methods: ["USCIS Forms", "myUSCIS 온라인 제출", "종이 접수 (양식별)"],
    overview:
      "USCIS 양식은 이름만 비슷해도 용도가 전혀 다릅니다. I-90은 영주권 카드 갱신·재발급, I-765는 취업허가(EAD), I-140은 고용주가 제출하는 취업 이민 청원, I-485는 신분 조정(영주권 신청의 한 경로), I-751은 조건부 영주권(결혼 등 2년) 조건 제거, N-400은 시민권(귀화) 신청입니다. 이 페이지는 ‘어떤 상황에서 어떤 양식 이름을 듣는지’ 지도일 뿐이며, 자격·동반 제출·수수료는 케이스마다 다릅니다. 잘못된 양식을 내면 기각·거절될 수 있으니, 제출 전 공식 Forms 페이지의 Filing fee·Edition date·Instructions PDF를 반드시 확인하세요. 취업으로 영주권을 알아보는 경우 I-140·PERM 흐름은 취업 이민(EB-3) 개요 가이드를 함께 보세요.",
    requirements: [
      "본인 현재 신분 (비자·영주권·EAD 등)",
      "목표 (카드 갱신 / 취업허가 / 취업 이민 / 영주권 / 조건 제거 / 시민권)",
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
        label: "I-140 – Immigrant Petition for Alien Workers",
        url: "https://www.uscis.gov/i-140",
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
        label: "취업 이민(EB-3) 개요",
        url: "/guides/immigration/employment-green-card",
      },
      {
        label: "귀화(N-400) 개요",
        url: "/guides/immigration/naturalization-n400",
      },
    ],
    faq: [
      {
        question: "I-485와 I-140은 같은 건가요?",
        answer:
          "아니요. I-140은 고용주 청원, I-485는 신분 조정(영주권 신청의 한 경로)입니다. 용도는 uscis.gov/forms에서 확인하세요.",
      },
      {
        question: "이 페이지 안내만 보고 제출해도 되나요?",
        answer:
          "아니요. 지도일 뿐입니다. 제출 전 해당 양식 Instructions·수수료·Edition date를 공식 Forms 페이지에서 확인하세요.",
      },
      {
        question: "영주권 카드 갱신은 어떤 양식인가요?",
        answer:
          "보통 I-90입니다. 조건부 영주권(2년) 조건 제거는 I-751입니다. 본인 카드 유형을 USCIS에서 확인하세요.",
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
      {
        label: "취업 이민(EB-3) 개요",
        url: "/guides/immigration/employment-green-card",
      },
    ],
    faq: [
      {
        question: "영주권 몇 년이면 N-400을 낼 수 있나요?",
        answer:
          "일반·배우자 등 카테고리마다 거주·실체류 요건이 다릅니다. 최신 자격은 uscis.gov/n-400과 Citizenship 안내에서 확인하세요.",
      },
      {
        question: "영어·시민 시험은 필수인가요?",
        answer:
          "많은 경우 필요합니다. 나이·장애 등 면제·완화 규정이 있으니 USCIS Citizenship 안내에서 본인 해당 여부를 확인하세요.",
      },
      {
        question: "시민이 되면 SSN이 바뀌나요?",
        answer:
          "숫자는 보통 그대로입니다. SSA에 시민권 취득을 알려 기록을 갱신하세요. N-400에서 함께 요청했는지 확인합니다.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "employment-green-card",
    category: "immigration",
    title: "취업 이민(EB-3) 개요",
    summary:
      "고용주 스폰서로 영주권을 받는 취업 이민(특히 EB-3)의 큰 흐름, PERM·I-140·대기·신분조정 개념, 공장·제조업 사례를 볼 때 확인할 점과 사기 주의사항을 정리했습니다.",
    cost: "고용주·변호사·USCIS·DOL 수수료는 케이스마다 다름 (본인 부담 여부를 계약서·오퍼에서 확인)",
    methods: [
      "고용주 스폰서 (PERM → I-140)",
      "우선순위 날짜 대기 (Visa Bulletin)",
      "I-485 신분조정 또는 영사관 수속",
    ],
    overview:
      "미국에는 ‘회사가 직원을 위해 영주권을 신청해 주는’ 취업 기반 영주권(Employment-based) 경로가 있습니다. 한국에서 자주 듣는 육가공·제조·서비스업 영주권 이야기의 많은 경우, 큰 그림으로는 EB-2/EB-3 같은 고용주 스폰서 카테고리와 맞닿아 있습니다. ArriveUS는 특정 회사·공장을 ‘영주권 잘 주는 곳’으로 추천하지 않습니다. 같은 업종이라도 채용 시점, 지역, 예산, 변호사, 노동인증(PERM) 결과에 따라 전혀 다를 수 있고, 온라인의 회사 리스트는 오래되거나 과장·사기인 경우가 많습니다.\n\n취업 이민의 핵심은 본인이 회사 목록에 지원한다고 끝나는 것이 아니라, 미국 고용주가 풀타임 포지션에 대해 스폰서할 의사가 있고, 노동부·이민국 절차를 진행한다는 점입니다. 흔히 이야기되는 ‘공장에서 일하며 영주권’ 사례도, 실제로는 고용주가 PERM(노동인증)과 I-140(이민 청원)을 진행하고, 우선순위 날짜가 열린 뒤 I-485(미국 내 신분조정) 또는 해외 영사관 인터뷰로 영주권을 받는 구조인 경우가 많습니다. 학력·경력 요건이 낮은 Other Worker(비숙련) 자리도 EB-3에 포함될 수 있지만, 대기 기간이 길고 거절·이직·사업장 변경 리스크가 큽니다.\n\n임시 취업 비자(H-2B 등)로 먼저 들어와 일하다가 나중에 영주권 절차로 이어지는 이야기와, 처음부터 영주권 스폰서 채용인 이야기가 섞여 들리기도 합니다. 비자와 영주권은 별개 절차이므로, 채용 공고·계약서·에이전시 설명에서 ‘지금 어떤 신분으로 일하는지’와 ‘누가 PERM/I-140 비용을 내는지’를 구분해서 확인하세요. 이 가이드는 용어와 큰 순서만 잡는 개요이며, 자격·전략·서류는 반드시 자격 있는 이민 변호사 또는 공인 대리인(Accredited Representative)과 검토하세요.",
    requirements: [
      "합법 근로·체류와 관련된 현재 신분 파악 (시민·영주권·비자·EAD 등)",
      "고용주의 풀타임 오퍼와 영주권 스폰서 의사 (구두 약속만으로는 부족)",
      "직무 설명·학력·경력 요건이 적힌 채용/포지션 정보",
      "여권·입국·체류 기록, 이전 이민 신청 이력",
      "비용 분담·이직 시 어떻게 되는지 적은 안내 또는 고용 관련 문서",
      "사기 여부 확인용: 변호사 이름·주 라이선스, USCIS/DOL 공식 용어 사용 여부",
    ],
    steps: [
      "목표가 ‘취업으로 영주권’인지 확인하고, 가족·결혼·인도적 등 다른 경로와 혼동하지 않습니다.",
      "오퍼를 받을 때 직무, 근무지, 급여, 시작일, 스폰서 여부, PERM/I-140 진행 주체(회사·변호사), 본인 비용 부담을 서면으로 확인합니다.",
      "‘영주권 보장’ ‘빠른 승인’ ‘선입금만 내면 그린카드’처럼 단정하는 광고·에이전시는 거절하고, 공식 기관·변호사와 교차 확인합니다.",
      "고용주 측에서 보통 PERM(노동인증)을 준비합니다. 미국 노동자 채용 시도·임금 수준 등 요건이 있으며, 승인되어야 다음 단계로 가기 쉽습니다.",
      "PERM 이후 고용주가 Form I-140(이민 청원)을 USCIS에 제출합니다. 승인되면 우선순위 날짜(Priority Date)가 생깁니다.",
      "국무부 Visa Bulletin에서 해당 카테고리·출생국 기준으로 우선순위 날짜가 Final Action에 가까운지 확인합니다. 대기는 수년이 걸릴 수 있습니다.",
      "날짜가 열리면 미국 내에서 조정 가능한 신분이면 I-485 등을, 해외에 있으면 영사관 이민 비자 수속을 진행하는 경우가 많습니다. 동반 가족은 별도 자격이 필요합니다.",
      "승인 후에도 카드 수령·SSN·입사 I-9 등을 정리합니다. 이직·사업장 폐쇄·중도 해지는 케이스에 큰 영향을 줄 수 있으니 변호사와 상의합니다.",
    ],
    links: [
      {
        label: "USCIS – Green Card through a job",
        url: "https://www.uscis.gov/green-card/green-card-eligibility/green-card-through-a-job",
      },
      {
        label: "USCIS – EB-3 Employment-Based Third Preference",
        url: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-third-preference-eb-3",
      },
      {
        label: "USCIS – Form I-140",
        url: "https://www.uscis.gov/i-140",
      },
      {
        label: "USCIS – Form I-485",
        url: "https://www.uscis.gov/i-485",
      },
      {
        label: "DOL – Permanent Labor Certification (PERM)",
        url: "https://www.dol.gov/agencies/eta/foreign-labor/programs/permanent",
      },
      {
        label: "Department of State – Visa Bulletin",
        url: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html",
      },
      {
        label: "USCIS – Avoid scams",
        url: "https://www.uscis.gov/avoid-scams",
      },
      {
        label: "입사 근로 서류 (I-9, W-4)",
        url: "/guides/job/work-documents",
      },
      {
        label: "자주 쓰는 USCIS 양식 지도",
        url: "/guides/immigration/common-forms",
      },
    ],
    updatedAt: "2026-08",
    faq: [
      {
        question: "회사 이름만 알면 영주권을 신청할 수 있나요?",
        answer:
          "아니요. 고용주가 해당 포지션에 대해 스폰서하고 PERM·I-140 등을 진행하는 구조인 경우가 많습니다. 공개된 ‘영주권 잘 주는 회사 리스트’만 보고 신청하는 방식이 아닙니다.",
      },
      {
        question: "치킨·육가공 공장만 해당되나요?",
        answer:
          "아니요. 인력 부족 업종에서 스폰서 사례가 이야기될 뿐입니다. 같은 업종이라도 시점·사업장·변호사에 따라 전혀 다를 수 있습니다.",
      },
      {
        question: "PERM이 무엇인가요?",
        answer:
          "고용주가 노동부에 신청하는 노동인증 절차로, 미국 노동자 채용 시도·임금 수준 등 요건이 있습니다. 이후 I-140으로 이어지는 경우가 많습니다.",
      },
      {
        question: "대기 기간은 얼마나 걸리나요?",
        answer:
          "출생국·카테고리·Visa Bulletin에 따라 수년이 걸릴 수 있습니다. 최신 대기 상황은 국무부 Visa Bulletin을 확인하세요.",
      },
    ],
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 이민·법률·채용 알선 자문이 아닙니다. 특정 회사·공장·에이전시를 추천하거나 영주권 승인을 보장하지 않습니다. 자격·수수료·대기·전략은 수시로 바뀌므로 USCIS·DOL·국무부 공식 안내와 자격 있는 이민 변호사·Accredited Representative를 확인하세요.",
  },
  {
    slug: "ead-renewal",
    category: "immigration",
    title: "EAD(취업허가증) 갱신",
    summary:
      "Form I-765로 Employment Authorization Document를 갱신·재발급할 때 시기, 자동연장 확인, 분실·오류 대처의 공식 출발점입니다.",
    cost: "I-765 수수료는 카테고리·면제 여부에 따라 다름 (USCIS 수수료표 확인)",
    methods: ["Form I-765 갱신 신청", "myUSCIS", "자동연장 안내 확인"],
    overview:
      "EAD(Employment Authorization Document, Form I-766)는 특정 신분·상황에서 미국 내 근로 허가·증빙으로 쓰입니다. 영주권 카드나 H-1B처럼 ‘신분 자체로’ 특정 고용주 근로가 되는 경우와 다릅니다. 만료가 다가오면 보통 새 I-765를 제출해 갱신합니다. USCIS는 만료 180일 전부터 갱신 신청을 권장해, 공백을 줄이라고 안내합니다. 일부 카테고리는 자동연장(Automatic extension) 규칙이 있을 수 있으나 대상·기간이 바뀌므로 반드시 최신 USCIS EAD·I-765 안내를 확인하세요. 분실·도난·USCIS 오류 카드는 재발급·정정 절차가 다릅니다. ArriveUS는 개별 카테고리 자격 판정을 하지 않습니다.",
    requirements: [
      "현재 EAD 카드·만료일",
      "I-765 자격 카테고리(예: 대기 중 신분조정, 학생 OPT 등) 파악",
      "여권·이전 승인 서류·사진 등 양식 지시서 목록",
      "myUSCIS 계정 (온라인 제출 시)",
    ],
    steps: [
      "EAD 만료일을 확인하고, USCIS 안내에 따라 가능하면 180일 안에 갱신 준비를 시작합니다.",
      "Form I-765 지시서에서 본인 카테고리·수수료·증거 서류를 확인합니다.",
      "myUSCIS 또는 우편 접수 안내대로 신청하고 Receipt Number를 저장합니다.",
      "자동연장 대상인지 USCIS ‘Automatic EAD Extension’ 최신 공지를 확인한 뒤, 고용주 I-9에 필요한 증빙을 준비합니다.",
      "카드를 못 받았거나 분실·오류면 USCIS Non-delivery / Replacement 안내를 따릅니다.",
      "만료 전 공백이 우려되면 고용주·변호사와 일정을 공유하고, 케이스 지연 시 Processing times를 확인합니다.",
    ],
    links: [
      {
        label: "USCIS – Employment Authorization Document",
        url: "https://www.uscis.gov/green-card/green-card-processes-and-procedures/employment-authorization-document",
      },
      {
        label: "USCIS – Form I-765",
        url: "https://www.uscis.gov/i-765",
      },
      {
        label: "USCIS – Avoid scams",
        url: "https://www.uscis.gov/avoid-scams",
      },
      {
        label: "USCIS 계정·케이스 조회",
        url: "/guides/immigration/uscis-account",
      },
      {
        label: "입사 근로 서류 (I-9)",
        url: "/guides/job/work-documents",
      },
    ],
    faq: [
      {
        question: "만료 후에 신청해도 되나요?",
        answer:
          "가능한 경우도 있으나 근로 공백·I-9 문제가 생길 수 있습니다. USCIS는 만료 180일 전 신청을 권장합니다.",
      },
      {
        question: "영주권자도 EAD가 필요하나요?",
        answer:
          "일반적으로 영주권 카드가 근로 허가 증빙입니다. EAD가 필요한 상황은 카테고리마다 다릅니다.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "family-green-card",
    category: "immigration",
    title: "가족 초청 영주권 개요",
    summary:
      "시민·영주권자 가족이 스폰서하는 영주권의 큰 흐름(청원·대기·신분조정/영사 수속)과 사기 주의만 정리한 입문 가이드입니다.",
    cost: "양식 수수료·의료검사·변호사비는 케이스마다 다름",
    methods: [
      "가족 청원 (예: I-130)",
      "Visa Bulletin 대기",
      "I-485 또는 영사관 이민 비자",
    ],
    overview:
      "가족 기반 영주권은 미국 시민 또는 영주권자가 자격 있는 가족을 위해 청원(흔히 Form I-130)을 넣는 구조가 일반적입니다. 배우자·미성년 자녀·부모 등 ‘즉시 친족(Immediate relative)’과, 성인 자녀·형제처럼 대기(Preference)가 있는 카테고리가 나뉩니다. 승인 후에도 Visa Bulletin 대기, 의료검사, 인터뷰, 미국 내 신분조정(I-485) 또는 해외 영사 수속이 이어질 수 있습니다. ‘결혼만 하면 바로 카드’, ‘서류 대행 보증’ 광고는 사기·형사 위험이 큽니다. 이 글은 용어와 순서만 잡는 개요이며, 자격·동시 제출·근로 허가(EAD)·여행 허가는 변호사·USCIS 공식 안내로 확인하세요.",
    requirements: [
      "스폰서의 시민권·영주권 증빙과 관계 증명(혼인·출생 등)",
      "초청·피초청자 여권·입국·체류 기록",
      "재정 보증(예: I-864) 가능 여부 검토",
      "사기·허위 결혼이 아님을 보여줄 실제 관계 증거 (해당 시)",
    ],
    steps: [
      "가족 관계가 어느 카테고리(즉시 친족 vs 대기)인지 USCIS Family 안내로 확인합니다.",
      "스폰서가 I-130 등 청원 자격·증거 목록을 공식 지시서에서 확인합니다.",
      "접수 후 Receipt·바이오·추가서류(RFE)를 myUSCIS로 관리합니다.",
      "대기 카테고리면 Visa Bulletin을 주기적으로 보고, 날짜가 열리면 다음 단계(I-485 또는 영사)를 준비합니다.",
      "인터뷰·의료검사·재정 보증 서류를 기한에 맞춰 준비하고, 허위 서류·위장 결혼 요구는 거절합니다.",
      "승인 후 카드 수령·SSN·주소 변경을 정리합니다.",
    ],
    links: [
      {
        label: "USCIS – Green Card through family",
        url: "https://www.uscis.gov/green-card/green-card-eligibility/green-card-through-family",
      },
      {
        label: "USCIS – Form I-130",
        url: "https://www.uscis.gov/i-130",
      },
      {
        label: "Department of State – Visa Bulletin",
        url: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html",
      },
      {
        label: "USCIS – Avoid scams",
        url: "https://www.uscis.gov/avoid-scams",
      },
      {
        label: "자주 쓰는 USCIS 양식 지도",
        url: "/guides/immigration/common-forms",
      },
      {
        label: "EAD 갱신",
        url: "/guides/immigration/ead-renewal",
      },
    ],
    faq: [
      {
        question: "시민 배우자는 대기가 없나요?",
        answer:
          "즉시 친족에 해당하는 경우가 많아 대기 카테고리와 다릅니다. 그래도 서류·인터뷰·처리 기간은 필요합니다. 최신은 USCIS를 확인하세요.",
      },
      {
        question: "영주권자가 형제를 바로 초청할 수 있나요?",
        answer:
          "형제 초청은 보통 시민만 가능한 구조입니다. 관계·카테고리는 USCIS Family 안내를 보세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "f1-opt",
    category: "immigration",
    title: "학생(F-1)·OPT 개요",
    summary:
      "F-1 유지, CPT/OPT 개념, SEVP·학교 DSO 창구를 찾는 입문 안내입니다. 개별 승인 전략은 학교·변호사와 확인하세요.",
    cost: "I-765 등 수수료·SEVIS 관련 비용은 시점마다 다름",
    methods: ["학교 DSO / SEVP", "OPT I-765", "USCIS·Study in the States"],
    overview:
      "F-1은 학업을 위한 학생 신분으로, 등록·출석·학교 기록(SEVIS) 유지가 핵심입니다. 현장실습 CPT, 졸업 후 실무훈련 OPT 등은 학교 국제학생 담당(DSO) 승인·SEVIS 업데이트와 USCIS 신청이 겹치는 경우가 많습니다. ‘OPT만 내면 취업·영주권 보장’은 사실이 아닙니다. STEM OPT 연장 등 세부 규칙은 바뀌므로 Study in the States·학교 안내를 우선하세요. ArriveUS는 입학 알선·불법 근로를 안내하지 않습니다.",
    requirements: [
      "유효 I-20·여권·I-94",
      "학교 DSO 연락처",
      "OPT 신청 시 졸업·전공·고용 계획 정보",
    ],
    steps: [
      "입학·전학·휴학 전 반드시 학교 DSO에게 신분 유지 요건을 확인합니다.",
      "교내·CPT·OPT 근로가 필요한지 DSO와 먼저 상의하고, 허가 없이 일하지 않습니다.",
      "OPT를 진행하면 학교 추천·SEVIS 업데이트 후 I-765 등 USCIS 절차를 따릅니다.",
      "EAD 카드·만료·실업 제한 일수를 Study in the States·학교 안내로 확인합니다.",
      "신분 변경·여행·졸업 후 계획은 미리 DSO·변호사와 상담하고, 카톡 소문보다 공식 문서에 의존합니다.",
    ],
    links: [
      {
        label: "Study in the States (SEVP)",
        url: "https://studyinthestates.dhs.gov/",
      },
      {
        label: "USCIS – Students and Employment",
        url: "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment",
      },
      {
        label: "USCIS – Form I-765",
        url: "https://www.uscis.gov/i-765",
      },
      {
        label: "EAD 갱신",
        url: "/guides/immigration/ead-renewal",
      },
    ],
    faq: [
      {
        question: "OPT 중 실업하면 어떻게 되나요?",
        answer:
          "실업으로 계산되는 일수 제한이 있을 수 있습니다. 최신 규칙은 DSO·Study in the States에서 확인하세요.",
      },
      {
        question: "학교에서 알아서 해 주나요?",
        answer:
          "DSO가 SEVIS·추천을 도우나, USCIS 신청·수수료·기한은 본인 책임이 큽니다.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
];
