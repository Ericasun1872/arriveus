import type { Guide } from "../types";

const disclaimer =
  "ArriveUS 가이드는 일반적인 참고 정보이며 법률·취업 알선 자문이 아닙니다. 근로 가능 여부는 본인 비자·EAD 등 공식 서류를 기준으로 확인하세요.";

export const jobGuides: Guide[] = [
  {
    slug: "resume-interview",
    category: "job",
    title: "미국식 이력서·면접 준비",
    summary:
      "미국 Resume에 넣지 말아야 할 것, 성과 bullet 쓰는 법, STAR 면접 준비, 지원 전 근로 허가(Work authorization) 확인까지 한곳에 정리했습니다.",
    methods: ["온라인 지원", "LinkedIn", "추천(Referral)", "캠퍼스·한인 네트워크"],
    overview:
      "미국에서도 많은 한인 이민자는 처음부터 대기업 오피스가 아니라 식당·네일·창고·돌봄·청소 같은 현장에서 시작합니다. 그런 첫 일자리는 ‘식당·네일·창고·돌봄·청소 취업’ 가이드를, 혼자 고객을 받는 단계는 ‘스몰 비즈니스’ 가이드를 먼저 보세요. 이 페이지는 그다음—영문 Resume·면접—을 다룹니다. 미국 이력서(Resume)는 보통 1페이지(경력이 많으면 2페이지)로 짧게 씁니다. 사진, 생년월일, 결혼 여부, SSN은 넣지 않는 것이 일반적입니다. 학력·경력은 최신순이고, 각 bullet은 ‘동사 + 한 일 + 숫자/결과’ 형태가 읽기 좋습니다. 면접은 Behavioral 질문이 많아 STAR(Situation–Task–Action–Result)로 사례를 연습하세요. 지원 전에 합법적으로 일할 수 있는지(시민권·영주권·EAD·비자 조건)를 확인합니다.",
    requirements: [
      "영문 Resume PDF (파일명: FirstLast_Resume.pdf 권장)",
      "LinkedIn 프로필 (권장, Resume와 날짜·직함 일치)",
      "성과 숫자 메모 (매출, 사용자 수, 비용 절감, 팀 규모 등)",
      "추천인 이름·연락처 (요청 시)",
      "포트폴리오 / GitHub / 라이선스 (직군별)",
      "근로 허가 상태 메모 (언제부터 풀타임 가능한지)",
    ],
    steps: [
      "목표 공고 2–3개를 고르고 Job description에서 반복 키워드·필수 요건을 표시합니다.",
      "Resume 상단에 역할에 맞는 Summary 2–3줄과 Skills를 두고, 경험 bullet을 키워드에 맞게 수정합니다.",
      "넣지 않을 항목(사진·나이·가족·SSN·‘열심히 하겠습니다’형 문장)을 삭제합니다.",
      "면접용으로 1–2분 자기소개와 STAR 사례(갈등, 실패, 리더십, 성과)를 소리 내어 연습합니다.",
      "화상 면접이면 카메라·조명·배경·이력서 사본·질문 메모를 준비합니다.",
      "면접 후 24시간 안에 짧은 Thank-you 메일을 보냅니다. 오퍼가 오면 I-9/W-4 가이드로 입사 서류를 준비합니다.",
    ],
    links: [
      {
        label: "식당·네일·창고·돌봄·청소 취업",
        url: "/guides/job/everyday-jobs",
      },
      {
        label: "스몰 비즈니스 시작·지원",
        url: "/guides/job/small-business",
      },
      {
        label: "CareerOneStop – Resumes",
        url: "https://www.careeronestop.org/JobSearch/Resumes/resume-advice.aspx",
      },
      {
        label: "USA.gov – Jobs",
        url: "https://www.usa.gov/jobs",
      },
      {
        label: "근로 서류 I-9·W-4 가이드",
        url: "/guides/job/work-documents",
      },
      {
        label: "오피스·LinkedIn 구직",
        url: "/guides/job/office-linkedin",
      },
      {
        label: "신분·EAD별 합법 근로",
        url: "/guides/job/work-authorization",
      },
      {
        label: "취업 이민(EB-3) 개요",
        url: "/guides/immigration/employment-green-card",
      },
    ],
    faq: [
      {
        question: "Resume는 반드시 1페이지여야 하나요?",
        answer:
          "신입·경력 초기에는 1페이지가 일반적이고, 경력이 길면 2페이지도 가능합니다. 채용 담당자가 빠르게 스캔할 수 있게 군더더기를 줄이세요.",
      },
      {
        question: "면접에서 비자·스폰서를 물어보면?",
        answer:
          "합법 근로 가능 여부·시작 가능 시점을 짧게 말하는 준비가 도움이 됩니다. 세부 이민 전략은 채용 단계와 변호사 상담을 구분하세요. ‘신분·EAD별 합법 근로’ 가이드도 참고하세요.",
      },
      {
        question: "LinkedIn이 꼭 필요한가요?",
        answer:
          "필수는 아니지만 미국 채용에서 사실상 기본에 가깝습니다. Resume와 날짜·직함을 맞추세요. 오피스 구직은 ‘오피스·LinkedIn 구직’ 가이드를 보세요.",
      },
    ],
    updatedAt: "2026-09",
    disclaimer,
  },
  {
    slug: "work-documents",
    category: "job",
    title: "입사 근로 서류 (I-9, W-4, SSN)",
    summary:
      "입사 시 Form I-9 고용 자격 확인, W-4 원천징수, SSN·Direct deposit까지 온보딩 첫 주에 필요한 서류를 체크리스트로 정리했습니다.",
    methods: ["HR 온보딩 포털", "인사팀 방문", "E-Verify (회사가 사용하는 경우)"],
    overview:
      "미국 회사는 신규 직원의 근로 자격을 Form I-9로 확인해야 합니다. 여권, 영주권, EAD, 또는 운전면허+SSN 카드 등 USCIS가 정한 List A / B+C 조합의 원본을 기한 내에 제시합니다. 사본만 메일로 보내는 것으로 끝나지 않는 경우가 많습니다. W-4는 급여에서 Federal income tax를 얼마나 원천징수할지 정하는 양식이고, 주(State) withholding 양식이 따로 있는 주도 있습니다(워싱턴 등 주 소득세가 없는 주도 있음). SSN이 늦게 나오면 HR에 일정을 알리고, ITIN은 I-9 근로 허가 증명으로 쓸 수 없다는 점에 주의하세요.",
    requirements: [
      "I-9 Acceptable Documents 원본 (List A 또는 B+C)",
      "SSN 카드 또는 번호 확인 서류 (회사 정책에 따름)",
      "오퍼 레터·온보딩 마감일 안내",
      "W-4 작성에 필요한 부양가족·배우자 소득 정보",
      "Direct deposit용 은행 Routing/Account 번호",
    ],
    steps: [
      "오퍼 수락 후 HR 체크리스트와 I-9 완료 기한(보통 입사 후 영업일 기준)을 확인합니다.",
      "USCIS I-9 목록에서 본인이 가져갈 서류 조합을 고르고 원본을 준비합니다.",
      "포털에서 I-9 Section 1을 작성하고, 안내에 따라 원본 제시·E-Verify에 협조합니다.",
      "W-4·주 withholding·Direct deposit를 제출하고, 첫 페이 스텁에서 공제·입금이 맞는지 확인합니다.",
      "이름이 여권·SSN·은행과 철자가 다르면 HR·SSA에 바로 수정을 요청합니다.",
    ],
    links: [
      {
        label: "USCIS – I-9",
        url: "https://www.uscis.gov/i-9",
      },
      {
        label: "IRS – Form W-4",
        url: "https://www.irs.gov/forms-pubs/about-form-w-4",
      },
      {
        label: "IRS Tax Withholding Estimator",
        url: "https://www.irs.gov/individuals/tax-withholding-estimator",
      },
      {
        label: "SSN 신청 절차",
        url: "/guides/tax/ssn-apply",
      },
      {
        label: "미국식 이력서·면접",
        url: "/guides/job/resume-interview",
      },
      {
        label: "취업 이민(EB-3) 개요",
        url: "/guides/immigration/employment-green-card",
      },
    ],
    faq: [
      {
        question: "I-9에 ITIN을 써도 되나요?",
        answer:
          "아니요. ITIN은 근로 허가 증명이 아닙니다. USCIS I-9 Acceptable Documents(List A 또는 B+C) 원본을 쓰세요.",
      },
      {
        question: "W-4는 어떻게 고르면 되나요?",
        answer:
          "원천징수 금액은 가구·소득에 따라 다릅니다. IRS Tax Withholding Estimator와 Form W-4 안내를 참고하세요.",
      },
      {
        question: "SSN이 아직 없으면 입사가 안 되나요?",
        answer:
          "회사·시점에 따라 다를 수 있습니다. HR에 일정을 알리고 SSA 신청을 진행하세요. I-9 기한은 USCIS·회사 안내를 따르세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
  {
    slug: "everyday-jobs",
    category: "job",
    title: "식당·네일·창고·돌봄·청소 취업",
    summary:
      "이민 초기에 많이 시작하는 식당·네일·창고·돌봄·청소·한인 업소 일을 구하는 현실적인 경로와, 임금·사기·안전에서 조심할 점을 정리했습니다.",
    cost: "시급·팁·현금 정산이 흔함 / 최저임금·초과근무 규칙은 주·업종에 따라 다름",
    methods: [
      "한인 업소·교회·지인 소개",
      "가게·살롱·창고 방문 / Help Wanted",
      "청소·돌봄·용역·개인 고객",
      "이후 스몰 비즈니스 (별도 가이드)",
    ],
    overview:
      "미국에서도 LinkedIn·대기업 공고로 ‘바로 오피스 취업’이 되는 경우는 많지 않습니다. 영어·경력·네트워크가 아직 쌓이기 전, 또는 당장 생활비가 급할 때는 아래 같은 현장이 현실적인 출발점이 되는 경우가 많습니다. (1) 식당·카페·한인마트 델리—주방·홀·설거지. (2) 네일·미용—살롱 보조부터 시작하는 경우가 많고, 주마다 Manicurist/Cosmetology 면허가 필요할 수 있어 ‘무면허로 손님 시술’은 단속·사고 책임이 큽니다. (3) 창고·물류—Amazon·물류센터·한인 무역/이사 창고, 서서 일하는 체력·안전화·야간 교대가 흔합니다. (4) 돌봄—어르신 동행·가사·병원 방문 동행 등. 의료 행위(약 투여·주사)는 CNA·면허 범위 밖이면 하지 마세요. (5) 청소—사무실·주택·Airbnb·무브아웃. 자리는 지인 소개, 교회·카톡방, 가게에 직접 물어보는 방식이 온라인 공고보다 흔합니다. ArriveUS는 합법 근로를 전제로 안내합니다. 고용주는 보통 Form I-9로 근로 자격을 확인해야 하고, 가짜 서류·‘신분 만들어 준다’는 소개비는 사기·범죄 위험이 큽니다. 체류가 불안정한 분들도 이런 업종에서 일하는 현실은 있지만, 불법 취업 방법은 안내하지 않습니다. 임금 체불·팁 미정산·산업 재해 무시·과도한 소개비는 Worker.gov 등 공식 안내와 근무 기록으로 스스로를 지키세요. 손님·장비를 직접 운영하는 단계로 가면 ‘스몰 비즈니스 시작’ 가이드(EIN·허가·SBA 상담)를 보세요.",
    requirements: [
      "본인 근로 가능 여부·시작 가능 일정에 대한 솔직한 파악",
      "가능한 업종(식당/네일/창고/돌봄/청소)과 요일·체력",
      "대중교통·주차로 출퇴근 가능한 지역 범위",
      "소개해 줄 지인·한인 업소·교회 네트워크 목록",
      "시급·팁·지급일·담당자 이름을 적을 수첩 또는 휴대폰 메모",
      "네일·돌봄은 주 면허·자격 필요 여부 확인 메모",
    ],
    steps: [
      "당장 가능한 일 유형을 고릅니다. 예: 주방·홀, 네일 보조, 창고 피킹, 어르신 동행·가사, 청소. ‘무엇이든’보다 가능한 요일·체력·면허가 중요합니다.",
      "한인타운·살롱·카톡/커뮤니티·교회 게시판·물류 채용(간단 온라인 지원)에서 ‘사람 구함’을 확인하고, 가능하면 지인 소개를 부탁합니다.",
      "가게·살롱·창고 오피스에 직접 가서(한가한 시간) 매니저에게 짧게 말합니다. ‘일자리 있으면 지원하고 싶습니다. 몇 시부터 가능합니다.’",
      "네일이면 주 Cosmetology/Manicurist 보드에 면허가 필요한지, 돌봄이면 약 투여·의료 행위가 업무에 포함되는지부터 확인합니다.",
      "조건을 메모합니다. 시급/팁/마일리지, 현금·체크·페이롤, 주 몇 시간, 유니폼·안전화, 다치면 어떻게 되는지.",
      "첫 주는 출근·퇴근·받은 금액을 기록합니다. 약속과 다르면 바로 확인하고, 반복되면 Worker.gov 등 공식 안내를 참고합니다.",
      "‘서류 만들어 준다’, ‘보증금·교육비 먼저’, ‘영주권 보장’ 선입금 소개는 거절합니다. 혼자 고객을 받기 시작하면 스몰 비즈니스 가이드로 EIN·세금·보험을 준비합니다.",
    ],
    links: [
      {
        label: "Worker.gov – 근로자 권리",
        url: "https://www.worker.gov/",
      },
      {
        label: "어르신 홈케어·돌봄 일자리",
        url: "/guides/job/home-care",
      },
      {
        label: "스몰 비즈니스 시작·지원",
        url: "/guides/job/small-business",
      },
      {
        label: "USA.gov – Jobs & unemployment",
        url: "https://www.usa.gov/jobs",
      },
      {
        label: "온라인 구직·공고 검색",
        url: "/guides/job/job-search",
      },
      {
        label: "임금·취업 사기 주의",
        url: "/guides/job/wage-scams",
      },
      {
        label: "미국식 이력서·면접",
        url: "/guides/job/resume-interview",
      },
      {
        label: "입사 근로 서류 (I-9, W-4)",
        url: "/guides/job/work-documents",
      },
      {
        label: "채용·광고 문의",
        url: "/jobs",
      },
    ],
    faq: [
      {
        question: "네일은 면허 없이 할 수 있나요?",
        answer:
          "주마다 다릅니다. 많은 주에서 매니큐어·코스메톨로지 면허가 필요합니다. 살롱에 취직하더라도 본인 면허·샵 라이선스를 확인하세요. ‘무면허로 손님 시술’은 위험합니다.",
      },
      {
        question: "창고 일은 어떻게 구하나요?",
        answer:
          "대형 물류는 회사 채용 사이트·앱으로, 한인 무역·이사 창고는 소개·방문이 흔합니다. 서서 들기·야간이 많아 안전화·휴게·시급을 미리 확인하세요.",
      },
      {
        question: "돌봄(케어)은 뭐가 다른가요?",
        answer:
          "동행·가사와 의료 돌봄(HHA/CNA)은 다릅니다. 자세한 신청·온라인 구인은 ‘어르신 홈케어·돌봄 일자리’ 가이드를 보세요.",
      },
      {
        question: "신분이 불안정해도 이 가이드를 보면 되나요?",
        answer:
          "이런 업종에서 일하는 현실이 있다는 점은 안내하지만, ArriveUS는 불법 취업·가짜 서류 방법을 알려 주지 않습니다. 임금 체불·사기·위험 작업으로부터 지키는 정보와 합법 경로는 공인 창구를 이용하세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 법률·취업 알선·이민 자문이 아닙니다. 합법 근로 자격은 본인 비자·EAD·시민권·영주권 등 공식 서류를 기준으로 확인하세요. 네일·돌봄 등 면허가 필요한 업종은 주 규정을 확인하세요. 불법 취업·가짜 서류·보증금 소개는 이용하지 마세요. 임금·안전 문제는 Worker.gov 등 공식 안내와 필요 시 변호사·근로 상담 창구를 이용하세요.",
  },
  {
    slug: "home-care",
    category: "job",
    title: "어르신 홈케어·돌봄 일자리",
    summary:
      "나이 드신 분을 돌보는 Companion care·Home care·HHA 일자리 구하는 법, 에이전시 지원, 온라인 공고 검색과 신청 시 챙길 서류를 정리했습니다.",
    cost: "시급제·시간제가 흔함 / 에이전시·개인 고용·라이브인(동거 돌봄)에 따라 시급·교통비·숙식 조건이 다름",
    methods: [
      "한인 소개·교회·카톡 (개인 돌봄)",
      "Home care / Home health 에이전시 지원",
      "CareerOneStop·Indeed 등 온라인 검색",
      "HHA·CNA 교육 후 레지스트리 등록 (주마다)",
    ],
    overview:
      "미국에 오신 분들 중에는 식당·청소와 함께 ‘어르신 돌봄(Home care / Caregiver)’으로 시작하는 경우도 많습니다. 크게 두 갈래입니다. (1) Non-medical / Companion / Personal care—동행, 말벗, 간단한 식사·장보기·가사, 병원 동행. 약 투여·주사·상처 치료는 보통 하지 않습니다. (2) Home Health Aide(HHA)·CNA 등—면허·교육·백그라운드 체크 후 Home health agency에서 Medicare/Medicaid 케이스를 맡는 경우가 많습니다. 한인 커뮤니티에서는 (1)이 소개로 빨리 잡히고, (2)는 교육비·시간이 들지만 페이롤·스케줄이 비교적 명확한 편입니다. 온라인으로는 CareerOneStop에서 Home Health Aide / Personal Care Aide 직업 정보와 지역 공고를 볼 수 있고, Indeed·에이전시 채용 페이지에 ‘caregiver’, ‘home health aide’, ‘PCA’, ‘HHA’, ‘companion care’로 검색하는 방법이 흔합니다. 지원 전에는 업무 범위(약·리프팅·야간·라이브인), 시급·교통비·오버타임, I-9·배경조사·TB검사·CPR 필요 여부를 확인하세요. ‘교육비 선입금만 내면 바로 배정’, ‘서류 없이 고수익’ 광고는 경계합니다. 혼자 손님을 받는 개인 홈케어는 스몰 비즈니스·세금·보험 이슈가 따로 생깁니다.",
    requirements: [
      "합법 근로 가능 여부 (I-9용 서류)",
      "가능한 요일·시간·이동 수단 (차·대중교통)",
      "영어·한국어로 가능한 업무 범위 메모 (동행만 / 목욕 도움 / 약 아님 등)",
      "이력서 또는 간단 경력(돌봄·가사·병원 동행 경험)",
      "배경조사·TB·CPR·HHA/CNA 증명 (에이전시가 요구할 때)",
    ],
    steps: [
      "원하는 유형을 고릅니다. 개인 소개 돌봄 vs 에이전시 HHA/PCA. 약·의료 행위가 필요하면 교육·자격 경로를 먼저 확인합니다.",
      "한인 네트워크·교회·카톡방에 ‘어르신 돌봄 구인’을 묻고, 조건(시급·시간·업무·교통)을 메모합니다.",
      "온라인에서는 CareerOneStop Find Jobs에 Home Health Aide / Caregiver를 넣고 거주 도시를 검색하거나, 지역 Home care agency 채용·Indeed 등에서 같은 키워드로 지원합니다.",
      "에이전시에 지원하면 보통 신청서·면접·I-9·배경조사·(필요 시) TB·약물검사·오리엔테이션 순입니다. 교육비를 먼저 크게 요구하면 조건을 다시 확인하세요.",
      "첫 배정 전에 Care plan·할 일/하지 말 일(약 투여 금지 등)·응급 연락처·시급·주당 시간을 서면 또는 문자로 남깁니다.",
      "근무 시간과 받은 금액을 기록합니다. 임금이 늦거나 깎이면 Worker.gov 안내를 참고합니다.",
      "개인으로 손님을 받기 시작하면 스몰 비즈니스 가이드에서 EIN·장부·보험을 확인합니다.",
    ],
    links: [
      {
        label: "CareerOneStop – Home Health Aide 직업 정보",
        url: "https://www.careeronestop.org/Toolkit/Careers/Occupations/occupation-profile.aspx?keyword=Home+Health+Aides&onetcode=31112100",
      },
      {
        label: "CareerOneStop – Personal Care Aide 직업 정보",
        url: "https://www.careeronestop.org/Toolkit/Careers/Occupations/occupation-profile.aspx?keyword=Personal+Care+Aides&onetcode=31112200",
      },
      {
        label: "CareerOneStop – Find Jobs (Home Health Aide)",
        url: "https://www.careeronestop.org/Toolkit/Jobs/find-jobs.aspx?keyword=Home%20Health%20Aide&location=",
      },
      {
        label: "USA.gov – Jobs",
        url: "https://www.usa.gov/jobs",
      },
      {
        label: "Worker.gov – 근로자 권리",
        url: "https://www.worker.gov/",
      },
      {
        label: "식당·네일·창고·돌봄·청소 취업",
        url: "/guides/job/everyday-jobs",
      },
      {
        label: "스몰 비즈니스 시작·지원",
        url: "/guides/job/small-business",
      },
      {
        label: "온라인 구직·공고 검색",
        url: "/guides/job/job-search",
      },
      {
        label: "임금·취업 사기 주의",
        url: "/guides/job/wage-scams",
      },
      {
        label: "채용·광고 문의",
        url: "/jobs",
      },
    ],
    faq: [
      {
        question: "자격증 없이 돌봄을 할 수 있나요?",
        answer:
          "개인 가정의 비의료 Companion care는 소개로 시작하는 경우가 있습니다. 다만 Home health agency·Medicare/Medicaid 케이스는 HHA/CNA 등 교육·등록이 필요한 주·고용주가 많습니다. 업무에 약이 포함되면 거절하거나 자격을 확인하세요.",
      },
      {
        question: "온라인에서 어디서 찾나요?",
        answer:
          "CareerOneStop Find Jobs, 지역 Home care agency 채용 페이지, Indeed 등에 caregiver / home health aide / PCA로 검색하세요. 거주 도시·ZIP을 넣으면 결과가 달라집니다.",
      },
      {
        question: "에이전시 지원에 뭐가 필요하나요?",
        answer:
          "신분증·근로 자격 서류, 신청서, 면접, 배경조사, 때로 TB·CPR·운전면허·보험이 필요합니다. 오리엔테이션 후 스케줄이 배정되는 경우가 많습니다.",
      },
      {
        question: "라이브인(집에서 함께 지내며 돌봄)은요?",
        answer:
          "숙식 제공·장시간 대기가 섞여 시급 계산이 복잡해질 수 있습니다. 근무/휴식 시간·시급·오버타임을 미리 적고, 불명확하면 시작하지 않는 편이 낫습니다.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 법률·취업 알선·의료·이민 자문이 아닙니다. HHA/CNA 요건과 허용 업무는 주·고용주마다 다르므로 주 보건당국·에이전시에서 최종 확인하세요. 불법 취업·가짜 서류·선입금 사기 소개는 이용하지 마세요.",
  },
  {
    slug: "small-business",
    category: "job",
    title: "스몰 비즈니스 시작·지원",
    summary:
      "청소·반찬·돌봄·네일 등 개인 스몰 비즈니스를 시작할 때 필요한 EIN·허가·세금 기본과, SBA·SBDC 등 무료·저비용 지원을 찾는 방법을 안내합니다.",
    cost: "주·시 사업 허가·라이선스 수수료는 지역마다 다름 / SBA·SCORE·SBDC 상담은 무료인 경우가 많음",
    methods: [
      "Sole proprietor / LLC 등 형태 선택",
      "EIN·사업자 등록·판매세 허가",
      "SBA · SBDC · SCORE 상담",
      "은행 사업 계좌·보험·간단한 장부",
    ],
    overview:
      "한인 이민 중에는 ‘취직’보다 청소 팀, 김밥·반찬, 홈케어, 네일·미용, 과외·번역처럼 개인 스몰 비즈니스로 수입을 만드는 분도 많습니다. 손님만 모으면 끝이 아니라, 보통 (1) 사업 형태(개인사업 Sole proprietorship, 부부가 함께, LLC 등), (2) EIN(연방 사업자 번호) 또는 SSN으로 세금 신고, (3) 시·카운티·주 Business license / DBA(상호), (4) 업종별 면허(식품·네일·돌봄·보육 등), (5) 판매세(Sales tax) 허가—해당 시, (6) 사업용 은행 계좌·영수증·장부, (7) 책임보험·차량보험이 따라옵니다. 집 부엌에서 음식을 팔거나 무면허 네일·의료성 돌봄을 하면 벌금·사고 책임이 커질 수 있어, ‘작게 시작’이어도 허가 범위를 먼저 보는 것이 안전합니다. 도움이 필요하면 유료 컨설턴트만 찾지 말고, 미국 중소기업청(SBA) 비즈니스 가이드, 지역 Small Business Development Center(SBDC), SCORE 멘토링, USA.gov 창업 안내처럼 공식·비영리 창구를 먼저 쓰면 비용과 사기를 줄일 수 있습니다. ‘정부 지원금 100% 대행’, ‘서류 없이 대출 보장’ 광고는 경계하세요. 체류·근로 자격과 사업 자격은 별개 이슈일 수 있으니, 이민 신분은 변호사와, 사업·세금은 SBA/세무 쪽과 구분해 상담하는 것이 좋습니다.",
    requirements: [
      "무엇을 팔/서비스할지 한 줄 정의 (예: 주택 청소, 반찬 배달)",
      "활동할 시·카운티·주 이름",
      "신분·SSN/ITIN·은행 계좌 현황 (해당 서류)",
      "예상 비용·가격·고객 구하는 방법 메모",
      "업종 면허(식품·네일·돌봄 등) 필요 여부 조사 메모",
    ],
    steps: [
      "아이디어를 구체적으로 적습니다. 서비스 지역, 가격, 주 몇 시간, 혼자인지 직원·동업인지.",
      "USA.gov / SBA ‘Start your business’ 체크리스트로 주·시에서 필요한 허가·라이선스 목록을 검색합니다.",
      "필요하면 IRS에서 EIN을 온라인 신청하고, 개인 통장과 섞이지 않게 사업용 계좌를 마련합니다.",
      "식품·네일·보육·돌봄처럼 면허가 있는 업종은 주 라이선스 보드·헬스디파트먼트 요건을 확인한 뒤 영업합니다.",
      "수입·지출 영수증을 모아 두고, 연말 Schedule C 등 신고 방법은 IRS Small Business 안내 또는 세무 전문가에게 확인합니다.",
      "SBA Local assistance에서 가까운 SBDC·SCORE를 찾아 사업계획·마케팅·대출 전 상담을 예약합니다(대부분 무료·저비용).",
      "고객 계약서에 서비스 범위·금액·취소·사고 시 연락을 짧게라도 남기고, 책임보험 가입 여부를 검토합니다.",
    ],
    links: [
      {
        label: "USA.gov – Start a business",
        url: "https://www.usa.gov/start-business",
      },
      {
        label: "SBA – 창업 10단계",
        url: "https://www.sba.gov/business-guide/10-steps-start-your-business",
      },
      {
        label: "SBA – Local assistance (SBDC 등)",
        url: "https://www.sba.gov/local-assistance",
      },
      {
        label: "IRS – EIN 신청",
        url: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online",
      },
      {
        label: "SCORE – 멘토링",
        url: "https://www.score.org/",
      },
      {
        label: "식당·네일·창고·돌봄·청소 취업",
        url: "/guides/job/everyday-jobs",
      },
      {
        label: "어르신 홈케어·돌봄 일자리",
        url: "/guides/job/home-care",
      },
    ],
    faq: [
      {
        question: "가게 없이 집에서 시작해도 되나요?",
        answer:
          "업종·도시 Zoning·허가에 따라 다릅니다. 특히 식품·고객 방문·재고 보관은 제한이 있을 수 있어 시·카운티에 먼저 확인하세요.",
      },
      {
        question: "EIN이 꼭 필요한가요?",
        answer:
          "직원 고용·일부 은행·허가에서 필요할 수 있습니다. 개인사업은 SSN으로 신고하는 경우도 있으나, IRS·은행 안내에 따라 EIN을 받는 편이 정리하기 쉬운 경우가 많습니다.",
      },
      {
        question: "무료로 도와줄 곳이 있나요?",
        answer:
          "SBA Local assistance로 SBDC·SCORE 등 지역 상담을 찾을 수 있습니다. ‘지원금 대행비’를 먼저 요구하는 업체보다 공식 창구를 우선하세요.",
      },
      {
        question: "한인 동업·동업자 투자는요?",
        answer:
          "구두 약속만으로 분쟁이 많습니다. 지분·역할·비용·종료 조건을 서면으로 남기고, 필요하면 변호사·SBDC와 검토하세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 법률·세무·사업·이민 자문이 아닙니다. 허가·세금·대출·체류 자격은 주·시·연방 규정과 개인 상황에 따라 다르므로 SBA·세무 전문가·자격 있는 변호사 등 공인 창구에서 최종 확인하세요. 선입금만 받고 허가·대출을 보장한다는 대행 광고는 경계하세요.",
  },
  {
    slug: "job-search",
    category: "job",
    title: "온라인 구직·공고 검색",
    summary:
      "USA.gov·CareerOneStop·Indeed 등에서 공고를 찾고, 지원 전 Work authorization·사기 공고를 걸러내는 기본 방법입니다.",
    cost: "공식·일반 구직 사이트는 대개 무료 / 유료 ‘취업 보장’ 서비스는 경계",
    methods: [
      "USA.gov / CareerOneStop",
      "회사 채용 페이지·Indeed 등",
      "한인 네트워크·현장 방문",
    ],
    overview:
      "미국 구직은 ‘한 사이트만’이 아니라 공식 안내(USA.gov Jobs), 직업·지역 검색(CareerOneStop), 일반 채용 보드, 회사 채용 페이지, 한인 소개가 섞입니다. 지원 전에 합법 근로 가능 여부(시민·영주·EAD·비자)를 확인하고, I-9 서류는 입사 때 준비합니다. ‘선입금만 내면 취업·영주권 보장’, ‘재택인데 장비비 먼저 송금’ 같은 공고는 사기 위험이 큽니다. 현장 직종은 ArriveUS 현장 취업·홈케어 가이드를, 영문 Resume는 이력서 가이드를 함께 보세요.",
    requirements: [
      "목표 직무·지역·가능 요일",
      "영문 Resume 또는 간단 경력 메모",
      "근로 허가 상태 파악",
      "지원용 이메일·미국 전화번호",
    ],
    steps: [
      "USA.gov Jobs와 CareerOneStop Find Jobs에서 키워드·도시를 넣어 검색합니다.",
      "회사 공식 Careers 페이지와 신뢰할 수 있는 보드를 비교해 지원합니다.",
      "공고에서 시급·스케줄·업무·Work authorization 문구를 확인합니다.",
      "지원 전 Resume를 공고 키워드에 맞게 짧게 수정합니다.",
      "면접·오퍼 후에는 I-9·W-4 가이드로 입사 서류를 준비합니다.",
      "임금·스케줄이 약속과 다르면 Worker.gov 안내를 참고합니다.",
    ],
    links: [
      {
        label: "USA.gov – Jobs",
        url: "https://www.usa.gov/jobs",
      },
      {
        label: "CareerOneStop – Find Jobs",
        url: "https://www.careeronestop.org/JobSearch/find-jobs.aspx",
      },
      {
        label: "Worker.gov",
        url: "https://www.worker.gov/",
      },
      {
        label: "임금·취업 사기 주의",
        url: "/guides/job/wage-scams",
      },
      {
        label: "미국식 이력서·면접",
        url: "/guides/job/resume-interview",
      },
      {
        label: "오피스·LinkedIn 구직",
        url: "/guides/job/office-linkedin",
      },
      {
        label: "신분·EAD별 합법 근로",
        url: "/guides/job/work-authorization",
      },
      {
        label: "현장 취업",
        url: "/guides/job/everyday-jobs",
      },
    ],
    faq: [
      {
        question: "유료 취업 알선에 돈을 내야 하나요?",
        answer:
          "합법 구직은 보통 무료입니다. 선입금·‘취업 보장’을 요구하면 사기·불법 가능성이 있어 거절하세요.",
      },
      {
        question: "영주권 스폰서 공고만 찾아도 되나요?",
        answer:
          "가능하지만 드물고 대기가 깁니다. 취업 이민 가이드와 변호사 상담을 참고하고, ‘보장’ 광고는 경계하세요.",
      },
      {
        question: "Indeed와 CareerOneStop 중 뭘 쓰나요?",
        answer:
          "둘 다 쓸 수 있습니다. CareerOneStop·USA.gov Jobs는 공식·직업 정보에 강하고, Indeed·회사 Careers 페이지는 공고 양이 많습니다. 조건을 비교해 지원하세요.",
      },
      {
        question: "공고에 Work authorization이라고만 나와요.",
        answer:
          "합법 근로 가능 여부를 묻는 경우가 많습니다. ‘신분·EAD별 합법 근로’ 가이드에서 본인 서류를 확인하고, 가짜 서류 제안은 거절하세요.",
      },
      {
        question: "채용인데 장비비·선물카드를 먼저 내라고 해요.",
        answer:
          "전형적인 취업 사기 신호입니다. 보내지 말고 ‘임금 체불·취업 사기·신고 창구’ 가이드와 FTC·Worker.gov 안내를 보세요.",
      },
    ],
    updatedAt: "2026-09",
    disclaimer,
  },
  {
    slug: "wage-scams",
    category: "job",
    title: "임금 체불·취업 사기·신고 창구",
    summary:
      "선입금·가짜 채용·임금 체불 패턴과 Worker.gov, 연방 Wage and Hour, 주 L&I(예: 워싱턴) 등 공식 신고·상담 입구를 안내합니다.",
    cost: "피해액은 케이스마다 다름 / 공식 상담·신고 창구는 무료인 경우 많음",
    methods: [
      "근무·임금 기록 보관",
      "Worker.gov / DOL Wage and Hour",
      "거주 주 노동청·L&I 신고",
    ],
    overview:
      "정착 초기에는 ‘지금 돈만 내면 일자리·서류 해결’, ‘팁만 주고 시급 없음’, ‘트레이닝비 먼저’, ‘영주권 보장 선입금’ 같은 제안에 노출되기 쉽습니다. 합법 고용은 보통 I-9·시급·페이롤 기록이 있습니다.\n\n임금이 약속과 다르거나 안 나오면, 먼저 근무 시간과 받은 금액을 모은 뒤 공식 창구를 고릅니다. Worker.gov는 주제별(임금, 안전, 보복 등) 안내 출발점입니다. 연방 최저임금·오버타임 등은 미국 노동부 Wage and Hour Division(WHD) 신고가 해당될 수 있고, 주·시마다 더 강한 규칙이 있으면 주 노동청에 따로(또는 함께) 접수하는 경우가 많습니다. 워싱턴주에서는 Labor & Industries(L&I)가 임금·근로 조건 불만의 흔한 입구입니다. 다른 주는 Department of Labor, Industrial Relations, Workforce Commission 등 이름이 다르니 Worker.gov나 USA.gov에서 거주 주 창구를 찾으세요.\n\nArriveUS는 불법 취업 방법·양식 대행을 안내하지 않습니다. 신고 자격·기한·증빙은 기관·케이스마다 다르므로 공식 페이지와, 필요하면 근로·이민 변호사를 확인하세요.",
    requirements: [
      "시급·근무시간·업무를 적은 메모·문자·오퍼",
      "출퇴근·일한 시간 기록 (달력·앱·수기 모두 가능)",
      "받은 금액·날짜·pay stub(있으면) 기록",
      "고용주·사업체 이름·주소·연락처·근무지",
      "동료 연락처·목격자 메모 (가능한 범위)",
    ],
    steps: [
      "채용·근무 조건을 문자·이메일로 남기고, 선입금·선물카드 송금·‘영주권 보장’ 대행비 요구는 거절합니다.",
      "일한 시간과 받은 금액을 날짜별로 기록합니다. 약속과 다르면 고용주에게 먼저 서면으로 확인을 요청해도 됩니다.",
      "Worker.gov에서 임금·팁·오버타임·보복 등 해당 주제를 읽고, 연방·주 중 어디에 문의할지 안내를 따릅니다.",
      "연방 Wage and Hour 대상이면 DOL WHD File a Complaint 안내로 접수·상담 방법을 확인합니다.",
      "거주 주 노동청에도 접수할 수 있는지 확인합니다. 워싱턴주면 L&I Worker rights complaints·File a complaint 페이지에서 온라인·양식·전화 접수 방법을 확인합니다.",
      "산업 재해·위험한 작업·보복이 있으면 Worker.gov 안전·보복 안내와 OSHA·주 안전 창구도 함께 검토합니다.",
      "‘영주권·취업 보장 대행’ 광고는 USCIS Avoid scams·취업 이민 가이드와 교차 확인합니다.",
    ],
    links: [
      {
        label: "Worker.gov",
        url: "https://www.worker.gov/",
      },
      {
        label: "DOL – Wage and Hour (File a complaint)",
        url: "https://www.dol.gov/agencies/whd/contact/complaints",
      },
      {
        label: "USA.gov – Labor laws and worker protection",
        url: "https://www.usa.gov/labor-laws",
      },
      {
        label: "Washington L&I – Worker rights complaints",
        url: "https://www.lni.wa.gov/workers-rights/workplace-complaints/worker-rights-complaints",
      },
      {
        label: "Washington L&I – File a complaint",
        url: "https://www.lni.wa.gov/FileAComplaint",
      },
      {
        label: "USCIS – Avoid scams",
        url: "https://www.uscis.gov/avoid-scams",
      },
      {
        label: "FTC – Job scams",
        url: "https://consumer.ftc.gov/articles/job-scams",
      },
      {
        label: "취업 이민(EB-3) 개요",
        url: "/guides/immigration/employment-green-card",
      },
      {
        label: "온라인 구직·공고 검색",
        url: "/guides/job/job-search",
      },
      {
        label: "산재·직장 부상",
        url: "/guides/job/workplace-injury",
      },
      {
        label: "실업급여 신청",
        url: "/guides/job/unemployment",
      },
    ],
    faq: [
      {
        question: "트레이닝비를 먼저 내라고 해요.",
        answer:
          "합법 고용에서도 교육비가 있는 경우는 있으나, ‘내면 바로 배정·고수익 보장’이면 조건을 다시 확인하고 Worker.gov·사기 안내를 보세요.",
      },
      {
        question: "팁만 주고 시급이 없어요.",
        answer:
          "업종·주마다 팁 크레딧 규칙이 다릅니다. 약속·기록이 불명확하면 Worker.gov 임금 안내와 주 노동청을 확인하세요.",
      },
      {
        question: "L&I가 뭔가요? 모든 주에서 쓰나요?",
        answer:
          "워싱턴주 Labor & Industries처럼 주 노동·산업안전 기관의 약칭으로 자주 쓰입니다. 다른 주는 이름이 다릅니다. Worker.gov·USA.gov에서 거주 주 근로자 권리·불만 창구를 찾으세요.",
      },
      {
        question: "신분이 불안정해도 임금 신고를 할 수 있나요?",
        answer:
          "많은 임금·안전 규칙은 신분과 별개로 근로자에게 적용된다는 안내가 있지만, 개별 케이스는 기관·변호사 확인이 필요합니다. ArriveUS는 불법 취업 방법을 안내하지 않습니다.",
      },
      {
        question: "연방과 주 중 어디에 신고하나요?",
        answer:
          "사안에 따라 둘 다 해당되거나 한쪽만 해당될 수 있습니다. Worker.gov와 DOL WHD·주 노동청 안내를 비교하고, 가능하면 공식 상담 전화·온라인으로 확인하세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 법률·취업 알선·이민 자문이 아닙니다. 신고 자격·기한·결과·보복 보호는 기관과 케이스마다 다르므로 공식 안내와 자격 있는 전문가에게 확인하세요. 불법 취업·가짜 서류 방법은 안내하지 않습니다.",
  },
  {
    slug: "workplace-injury",
    category: "job",
    title: "산재·직장 부상",
    summary:
      "일하다 다쳤을 때 보고·기록·Workers’ compensation(산재보험) 창구를 찾는 기본 순서와 Worker.gov·주 기관 안내를 정리합니다.",
    cost: "산재 보험 청구·의료비 처리는 케이스·주마다 다름 / 공식 상담은 무료인 경우 많음",
    methods: ["고용주·응급 보고", "Workers’ comp 청구", "OSHA·주 노동청"],
    overview:
      "식당·창고·돌봄·청소 등 현장 직종에서는 미끄러짐·들기·베임·차량 사고 같은 직장 부상이 생길 수 있습니다. 많은 주에서 고용주는 Workers’ compensation(산재) 보험을 통해 업무상 부상·질병의 의료·일부 임금 보전을 다루는 체계를 둡니다. 이름은 주마다 다르고(워싱턴은 L&I 등), 청구 기한·양식·의사 선택이 다릅니다.\n\n기본 흐름은 부상 즉시(또는 가능한 빨리) 감독자·고용주에게 알리고, 응급이면 911/ER, 그다음 산재 청구·의료 기록을 남기는 것입니다. ‘참아라’, ‘신고하면 해고’라는 말에 주저하지 말고, Worker.gov와 거주 주 산재·근로자 권리 안내를 확인하세요. 임금 체불과 산재는 창구가 다를 수 있어 ArriveUS 임금 사기 가이드와 구분해 보세요.\n\nArriveUS는 불법 취업 방법을 안내하지 않으며, 개별 산재 승인을 대행하지 않습니다. 보복·중대 부상은 공식 기관·변호사 상담을 검토하세요.",
    requirements: [
      "부상 날짜·시간·장소·어떻게 다쳤는지 메모",
      "목격자 이름·연락처(있으면)",
      "고용주·감독자 보고 기록(문자·이메일 권장)",
      "병원·Urgent care 기록·진단서·약 영수증",
      "페이 stub·근무 일정(임금 보전 관련 시)",
    ],
    steps: [
      "생명이 위급하면 911. 가능하면 감독자·고용주에게 바로 알립니다.",
      "어디서·어떻게 다쳤는지, 누구에게 보고했는지 날짜와 함께 적어둡니다.",
      "고용주가 안내하는 산재(Workers’ comp) 절차·양식을 확인하고, 안 알려 주면 주 산재 기관·Worker.gov를 직접 찾습니다.",
      "워싱턴주면 L&I 등 주 안내에서 File a claim / Injured worker 경로를 확인합니다. 다른 주도 주 노동·산재 사이트 이름을 검색하세요.",
      "의사가 업무상 부상임을 알 수 있게 말하고, 진단·제한 근무(light duty) 서류를 보관합니다.",
      "보복·위험한 작업 강요가 있으면 Worker.gov 보복·OSHA·주 창구도 함께 검토합니다.",
    ],
    links: [
      {
        label: "Worker.gov",
        url: "https://www.worker.gov/",
      },
      {
        label: "USA.gov – Workers’ compensation",
        url: "https://www.usa.gov/workers-compensation",
      },
      {
        label: "DOL – Workers’ compensation",
        url: "https://www.dol.gov/general/topic/workcomp",
      },
      {
        label: "OSHA – Workers’ rights",
        url: "https://www.osha.gov/workers",
      },
      {
        label: "Washington L&I – File a workers’ comp claim",
        url: "https://www.lni.wa.gov/claims/for-workers/file-a-claim/",
      },
      {
        label: "임금 체불·취업 사기·신고 창구",
        url: "/guides/job/wage-scams",
      },
      {
        label: "911·응급·재난",
        url: "/guides/life/emergency-911",
      },
      {
        label: "현장 취업",
        url: "/guides/job/everyday-jobs",
      },
    ],
    faq: [
      {
        question: "작은 부상도 보고해야 하나요?",
        answer:
          "나중에 악화될 수 있어 빨리 알리는 편이 안전한 경우가 많습니다. 주·보험 규칙상 기한이 있을 수 있으니 지체하지 마세요.",
      },
      {
        question: "고용주가 산재 신고를 막으면요?",
        answer:
          "주 산재 기관·Worker.gov 안내로 본인이 청구할 수 있는 경우가 있습니다. 보복이 있으면 공식 보복 신고 창구도 확인하세요.",
      },
      {
        question: "산재와 일반 건강 보험 차이는요?",
        answer:
          "업무상 부상은 보통 Workers’ comp 경로를 타는 경우가 많습니다. 어느 보험으로 청구할지 의료기관·고용주·주 안내에 확인하세요.",
      },
      {
        question: "신분이 불안정해도 산재를 신청할 수 있나요?",
        answer:
          "많은 안내에서 근로자 보호는 신분과 별개로 설명되지만, 개별 케이스는 기관·변호사 확인이 필요합니다.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 법률·의료·산재 대행 자문이 아닙니다. 자격·기한·보상은 주·고용주·부상마다 다르므로 공식 기관과 자격 있는 전문가에게 확인하세요.",
  },
  {
    slug: "unemployment",
    category: "job",
    title: "실업급여 신청",
    summary:
      "해고·근무 시간 축소 후 주 실업보험(Unemployment Insurance) 신청 입구, 준비물, 비자·체류와 겹칠 때 확인할 점을 안내합니다.",
    cost: "신청 자체는 보통 무료 / 급여액·기간은 주·소득 이력에 따라 다름",
    methods: ["거주 주 UI 온라인 신청", "주간 인증(Weekly certification)", "재취업 활동 기록"],
    overview:
      "미국에서 실직하거나 시간이 크게 줄면, 거주 주 Unemployment Insurance(UI, 실업급여)를 신청할 수 있는 경우가 있습니다. 연방 틀 안에서 주가 운영하므로 신청 사이트·자격·주당 금액·대기 주(waiting week)가 주마다 다릅니다. USA.gov·CareerOneStop에서 주 실업 기관을 찾은 뒤, 본인 계정으로 신청하는 것이 일반적입니다.\n\n보통 최근 근로·임금 이력, 이직 사유(해고·권고사직 등), 구직 의사·가능 여부가 중요합니다. 승인 후에도 매주(또는 안내 주기)로 구직 활동을 보고하는 Weekly certification을 놓치면 지급이 끊길 수 있습니다. ‘대행비 선입금·무조건 승인’ 광고는 피하세요.\n\n직장 비자·EAD 등 체류 신분이 있는 분은 UI 자격과 이민 신분 유지가 별개 이슈일 수 있습니다. ArriveUS는 개별 자격 판정을 하지 않으니, 신청 전 주 UI 안내와 필요 시 이민 변호사를 확인하세요. 공공 혜택 전반은 생활 카테고리의 공공 혜택 가이드도 참고하세요.",
    requirements: [
      "SSN(또는 주가 허용하는 신원 정보)",
      "최근 고용주 이름·주소·근무 기간·이직일·이직 사유",
      "Pay stub·W-2 등 임금 증빙(요청 시)",
      "미국 전화번호·이메일·주소",
      "구직 활동 기록용 메모(지원한 회사·날짜)",
    ],
    steps: [
      "실직·시간 축소 직후 USA.gov Unemployment 또는 CareerOneStop에서 거주 주 UI 사이트를 찾습니다.",
      "안내된 기한 안에 온라인(또는 안내된 방법)으로 신청하고, 이직 사유를 사실에 맞게 적습니다.",
      "Identity 확인·추가 서류 요청이 오면 마감 전에 제출합니다.",
      "승인·대기 중에도 Weekly certification과 구직 활동 보고 방법을 캘린더에 넣습니다.",
      "재취업·시간제 수입이 생기면 안내에 따라 보고합니다. 미보고는 환수·처벌 위험이 있습니다.",
      "거절·이의신청(Appeal) 안내가 오면 기한 안에 공식 절차를 따르고, 체류 신분 이슈는 변호사와 구분해 상담합니다.",
    ],
    links: [
      {
        label: "USA.gov – Unemployment benefits",
        url: "https://www.usa.gov/unemployment-benefits",
      },
      {
        label: "CareerOneStop – Find unemployment benefits",
        url: "https://www.careeronestop.org/LocalHelp/UnemploymentBenefits/find-unemployment-benefits.aspx",
      },
      {
        label: "Worker.gov",
        url: "https://www.worker.gov/",
      },
      {
        label: "공공 혜택 (SNAP·WIC 등)",
        url: "/guides/life/public-benefits",
      },
      {
        label: "온라인 구직·공고 검색",
        url: "/guides/job/job-search",
      },
      {
        label: "직장 비자·장기체류 (비이민)",
        url: "/guides/immigration/work-visa-long-stay",
      },
      {
        label: "임금 체불·취업 사기·신고 창구",
        url: "/guides/job/wage-scams",
      },
    ],
    faq: [
      {
        question: "자발적으로 그만둬도 받을 수 있나요?",
        answer:
          "주·사유에 따라 다릅니다. ‘정당한 사유’ 기준이 있는 주가 많아 이직 사유를 사실대로 적고 주 안내를 확인하세요.",
      },
      {
        question: "신청은 얼마나 빨리 해야 하나요?",
        answer:
          "실직 후 되도록 빨리 하는 편이 좋습니다. 주마다 소급·대기 규칙이 있으니 주 UI 사이트를 바로 확인하세요.",
      },
      {
        question: "주간 인증을 빼먹으면요?",
        answer:
          "해당 주 지급이 안 되거나 재인증이 필요할 수 있습니다. 안내된 주기·방법을 지키세요.",
      },
      {
        question: "비자 체류 중에도 UI가 되나요?",
        answer:
          "근로 이력·신분·주 규칙에 따라 다릅니다. 주 UI 자격과 이민 신분 유지는 별도로, 필요하면 변호사와 확인하세요.",
      },
    ],
    updatedAt: "2026-08",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 법률·복지·이민 자문이 아닙니다. 실업급여 자격·금액·이민 영향은 주·개인 상황에 따라 다르므로 주 UI 공식 안내와 자격 있는 전문가에게 확인하세요. 신청 대행 사기를 주의하세요.",
  },
  {
    slug: "office-linkedin",
    category: "job",
    title: "오피스·LinkedIn 구직",
    summary:
      "현장 일 다음 단계로 오피스·원격·하이브리드 공고를 볼 때 LinkedIn·영문 Resume·네트워킹·스폰서 질문의 기본 순서를 정리합니다.",
    cost: "LinkedIn 기본은 무료 / Premium은 선택",
    methods: ["LinkedIn 프로필·공고", "회사 Careers 페이지", "Referral·한인 네트워크", "이력서·면접 가이드와 병행"],
    overview:
      "많은 분이 식당·네일·창고·돌봄에서 시작해 영어·경력이 쌓이면 오피스·고객지원·행정·세일즈·테크 지원 같은 공고를 봅니다. 미국 오피스 채용에서는 LinkedIn 프로필이 Resume와 함께 사실상 기본에 가깝습니다. 사진·Headline·About·Experience 날짜·직함을 Resume와 맞추고, Open to Work는 공개 범위를 신중히 고르세요.\n\n공고는 LinkedIn Jobs·Indeed·회사 Careers·USA.gov Jobs를 함께 보고, 키워드(administrative assistant, customer success, accountant 등)로 좁힙니다. Referral(내부 추천)이 있으면 서류 통과에 도움이 되는 경우가 많습니다. 스폰서(H-1B·영주권)가 필요한 포지션은 공고에 sponsorship 문구가 있는지 확인하고, ‘영주권 보장’ 광고는 경계하세요.\n\nArriveUS는 특정 회사·헤드헌터를 추천하지 않습니다. 합법 근로는 ‘신분·EAD별 합법 근로’ 가이드, 현장 일은 everyday-jobs를 먼저 보세요.",
    requirements: [
      "영문 Resume PDF (이력서·면접 가이드)",
      "LinkedIn 프로필 (사진·경력·스킬)",
      "목표 직군 키워드 메모",
      "근로 허가·시작 가능 시점 메모",
      "추천인·한인·전 직장 네트워크 연락처(있으면)",
    ],
    steps: [
      "Resume를 1페이지 중심으로 다듬고, LinkedIn Experience·날짜·직함을 동일하게 맞춥니다.",
      "Headline·About에 역할·강점·키워드를 넣고, Skills·추천(Recommendations)을 정리합니다.",
      "LinkedIn·Indeed·회사 Careers에서 목표 공고 10개를 골라 Job description 키워드를 Resume에 반영합니다.",
      "아는 사람·한인 커뮤니티·전 동료에게 ‘이런 역할을 찾고 있다’고 짧게 알리고 Referral을 부탁합니다.",
      "지원 시 Easy Apply만 의존하지 말고, 가능하면 회사 공식 Careers로도 제출합니다.",
      "면접·오퍼가 오면 work-documents·합법 근로 가이드로 I-9·스폰서 질문을 준비합니다.",
    ],
    links: [
      {
        label: "USA.gov – Jobs",
        url: "https://www.usa.gov/jobs",
      },
      {
        label: "CareerOneStop – Find jobs",
        url: "https://www.careeronestop.org/JobSearch/FindJobs/find-jobs.aspx",
      },
      {
        label: "미국식 이력서·면접 준비",
        url: "/guides/job/resume-interview",
      },
      {
        label: "온라인 구직·공고 검색",
        url: "/guides/job/job-search",
      },
      {
        label: "신분·EAD별 합법 근로",
        url: "/guides/job/work-authorization",
      },
      {
        label: "식당·네일·창고·돌봄·청소 취업",
        url: "/guides/job/everyday-jobs",
      },
      {
        label: "취업 이민(EB-3) 개요",
        url: "/guides/immigration/employment-green-card",
      },
    ],
    faq: [
      {
        question: "현장 일만 했는데 오피스 지원이 되나요?",
        answer:
          "가능한 경우가 많습니다. 고객 응대·일정·재고·팀워크 등 옮길 수 있는 성과를 Resume bullet으로 바꾸세요.",
      },
      {
        question: "LinkedIn Premium이 필수인가요?",
        answer:
          "필수는 아닙니다. 프로필·공고 지원·메시지 예의가 더 중요합니다.",
      },
      {
        question: "스폰서가 필요한데 어떻게 말하나요?",
        answer:
          "합법 근로 가능 여부와 시작 시점을 짧게 준비하고, 세부 이민 전략은 변호사와 구분하세요. ‘보장’ 광고는 피하세요.",
      },
    ],
    updatedAt: "2026-09",
    disclaimer,
  },
  {
    slug: "work-authorization",
    category: "job",
    title: "신분·EAD별 합법 근로",
    summary:
      "시민·영주권·EAD·학생 OPT·동반 배우자 등 신분별로 ‘합법적으로 일할 수 있는지’ 확인하는 체크리스트와 I-9·사기 주의를 정리합니다.",
    cost: "공식 조회·서류 발급 수수료는 카테고리마다 다름",
    methods: ["본인 신분·EAD·I-94 확인", "I-9 허용 서류", "USCIS·학교 DSO·변호사", "입사 근로 서류 가이드"],
    overview:
      "미국에서 일하려면 고용주가 Form I-9로 신원·근로 허가를 확인합니다. 시민권·영주권 카드, EAD(취업허가증), 특정 비자(I-94·I-797) 등 ‘지금 합법적으로 일할 수 있는’ 상태가 핵심입니다. ITIN만으로는 근로 허가를 대신하지 않습니다.\n\n큰 그림만 잡으면: 시민·영주권자는 보통 영주권 카드·여권 등으로 I-9가 가능하고, EAD 소지자는 카드 유효기간·카테고리를 보며, F-1 OPT/CPT는 학교 DSO·EAD 규칙을, H-1B 등은 승인된 청원·I-94를, H-4/L-2 배우자 근로는 별도 EAD·최신 USCIS 안내가 필요할 수 있습니다. 만료·갱신 공백·허가 없는 근로·‘서류 대행으로 바로 취직’ 광고는 위험합니다.\n\n이 글은 자격 판정이 아니라 확인 순서입니다. 세부 이민은 이민 카테고리 가이드와 변호사를, 입사 당일 서류는 work-documents를 보세요.",
    requirements: [
      "여권·비자 스탬프·I-94·I-797(해당 시)",
      "영주권 카드 또는 EAD(해당 시)와 만료일",
      "학생이면 I-20·DSO 연락처·OPT/CPT 관련 기록",
      "SSN 카드 또는 신청 상태 (근로·세금용, I-9와 역할이 다름)",
      "I-9 Lists of Acceptable Documents 사본 개념",
    ],
    steps: [
      "본인 신분(시민·영주·비이민·EAD 등)과 근로가 허용되는지 USCIS·학교·변호사 문서로 확인합니다.",
      "EAD·I-94·영주권 만료일을 캘린더에 넣고, 갱신·여행 전 공백이 없는지 봅니다.",
      "입사 전 ‘보장 취업·가짜 서류’ 제안을 거절하고, Worker.gov·USCIS Avoid scams를 참고합니다.",
      "오퍼 후 I-9에서는 허용 서류 목록에서 본인이 고릅니다. 고용주가 ‘그린카드만’ 강요하면 차별 이슈일 수 있어 직장 차별 가이드·IER을 참고하세요.",
      "세부 카테고리(OPT·H-4 EAD·취업 이민)는 해당 이민 가이드로 이어갑니다.",
      "입사 서류·W-4·Direct deposit는 work-documents 가이드를 따릅니다.",
    ],
    links: [
      {
        label: "USCIS – Form I-9",
        url: "https://www.uscis.gov/i-9",
      },
      {
        label: "USCIS – Employee rights (I-9)",
        url: "https://www.uscis.gov/i-9-central/employee-rights-and-resources/employee-rights",
      },
      {
        label: "Worker.gov – Documentation",
        url: "https://www.worker.gov/documentation/",
      },
      {
        label: "입사 근로 서류 (I-9, W-4, SSN)",
        url: "/guides/job/work-documents",
      },
      {
        label: "EAD 갱신",
        url: "/guides/immigration/ead-renewal",
      },
      {
        label: "학생(F-1)·OPT 개요",
        url: "/guides/immigration/f1-opt",
      },
      {
        label: "I-94·여행·동반 배우자 근로",
        url: "/guides/immigration/i94-travel",
      },
      {
        label: "직장 차별·괴롭힘 신고",
        url: "/guides/job/workplace-discrimination",
      },
    ],
    faq: [
      {
        question: "ITIN으로 취업할 수 있나요?",
        answer:
          "ITIN은 세금 번호이지 근로 허가가 아닙니다. I-9용 근로 허가 서류가 따로 필요합니다.",
      },
      {
        question: "EAD 갱신 중에도 일할 수 있나요?",
        answer:
          "카테고리·자동연장 규칙에 따라 다릅니다. USCIS·EAD 가이드와 고용주 안내를 확인하세요.",
      },
      {
        question: "학생이 CPT 없이 밖에서 일해도 되나요?",
        answer:
          "허가 없는 근로는 신분 위반 위험이 큽니다. DSO·Study in the States 안내를 우선하세요.",
      },
    ],
    updatedAt: "2026-09",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 이민·법률·취업 알선 자문이 아닙니다. 근로 허가·I-9·비자는 개인·시점에 따라 다르므로 USCIS·학교·자격 있는 이민 변호사를 확인하세요. 불법 근로·가짜 서류 방법은 안내하지 않습니다.",
  },
  {
    slug: "workplace-discrimination",
    category: "job",
    title: "직장 차별·괴롭힘 신고",
    summary:
      "인종·성별·출신국·장애 등 차별, 성희롱·괴롭힘, I-9 서류 강요 차별이 있을 때 EEOC·DOJ IER·Legal aid로 가는 입문 경로를 정리합니다.",
    cost: "공식 신고 창구는 보통 무료 / 변호사 수임은 별도",
    methods: ["기록·증거 보관", "EEOC", "DOJ Immigrant and Employee Rights (IER)", "Legal aid·주 기관"],
    overview:
      "미국에서는 고용주가 인종, 피부색, 종교, 성별(임신 포함), 출신국, 나이(40세 이상), 장애, 유전정보 등을 이유로 채용·해고·임금·업무에서 부당하게 차별하는 것을 금지하는 연방법이 있습니다. 성희롱·적대적 업무 환경도 포함될 수 있습니다. 별도로, 시민권·이민 신분·출신국을 이유로 I-9에서 특정 서류만 강요하거나 유효한 서류를 거부하는 행위는 법무부 Immigrant and Employee Rights(IER) 관할인 경우가 많습니다.\n\n임금 체불은 Worker.gov·Wage and Hour, 산재는 산재 가이드처럼 창구가 다를 수 있습니다. 보복(신고했다고 불이익)도 문제로 다뤄질 수 있으니 날짜·메시지·증인을 기록하세요. ArriveUS는 개별 소송을 대리하지 않습니다. 기한(예: EEOC·IER 신고 기한)은 짧을 수 있어 공식 사이트와 Legal aid를 빨리 확인하세요.",
    requirements: [
      "사건 날짜·장소·관련자·목격자 메모",
      "이메일·문자·평가서·급여 기록 사본",
      "회사 내부 신고(HR) 기록(했다면)",
      "본인 연락처·고용주 정보",
    ],
    steps: [
      "안전이 위험하면 911. 그다음 사실·날짜·증거를 메모하고 보복이 있어도 기록을 남깁니다.",
      "가능하면 회사 정책에 따라 HR·상사에게 서면으로 알리고, 사본을 보관합니다.",
      "출신국·시민권·I-9 서류 강요 이슈면 DOJ IER(Worker Hotline) 안내를 확인합니다.",
      "인종·성별·종교·장애 등 일반적인 고용 차별·성희롱은 EEOC 신고 안내를 확인합니다.",
      "임금·팁 체불은 wage-scams 가이드·Worker.gov, 부상은 workplace-injury 가이드로 갑니다.",
      "USA.gov Legal aid·주 기관·노조(있으면)에 상담하고, ‘선입금 승소 보장’ 광고는 피합니다.",
    ],
    links: [
      {
        label: "EEOC – Filing a charge",
        url: "https://www.eeoc.gov/filing-charge-discrimination",
      },
      {
        label: "DOJ – Immigrant and Employee Rights (IER)",
        url: "https://www.justice.gov/crt/immigrant-and-employee-rights-section",
      },
      {
        label: "Worker.gov – Documentation",
        url: "https://www.worker.gov/documentation/",
      },
      {
        label: "USA.gov – Legal aid",
        url: "https://www.usa.gov/legal-aid",
      },
      {
        label: "임금 체불·취업 사기·신고 창구",
        url: "/guides/job/wage-scams",
      },
      {
        label: "산재·직장 부상",
        url: "/guides/job/workplace-injury",
      },
      {
        label: "신분·EAD별 합법 근로",
        url: "/guides/job/work-authorization",
      },
    ],
    faq: [
      {
        question: "EEOC와 IER 중 어디로 가나요?",
        answer:
          "일반적인 고용 차별·성희롱은 EEOC, 시민권·이민 신분·I-9 서류 차별은 IER인 경우가 많습니다. 애매하면 양쪽 안내를 읽고 Legal aid에 물어보세요.",
      },
      {
        question: "신고하면 보복이 두려워요.",
        answer:
          "보복 금지가 있는 경우가 많습니다. 증거를 남기고 공식 핫라인·변호사와 상의하세요.",
      },
      {
        question: "기한이 있나요?",
        answer:
          "있습니다. EEOC·IER 등 창구마다 다르고 짧을 수 있으니 공식 사이트에서 바로 확인하세요.",
      },
    ],
    updatedAt: "2026-09",
    disclaimer:
      "ArriveUS 가이드는 일반적인 참고 정보이며 법률 자문이 아닙니다. 차별·괴롭힘·보복 사건과 신고 기한은 사실·고용주 규모·주에 따라 다르므로 EEOC·IER·Legal aid·자격 있는 변호사를 확인하세요.",
  },
];
