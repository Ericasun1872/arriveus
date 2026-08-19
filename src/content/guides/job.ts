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
          "합법 근로 가능 여부·시작 가능 시점을 짧게 말하는 준비가 도움이 됩니다. 세부 이민 전략은 채용 단계와 변호사 상담을 구분하세요.",
      },
      {
        question: "LinkedIn이 꼭 필요한가요?",
        answer:
          "필수는 아니지만 미국 채용에서 사실상 기본에 가깝습니다. Resume와 날짜·직함을 맞추는 것이 중요합니다.",
      },
    ],
    updatedAt: "2026-08",
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
        label: "스몰 비즈니스 시작·지원",
        url: "/guides/job/small-business",
      },
      {
        label: "USA.gov – Jobs & unemployment",
        url: "https://www.usa.gov/jobs",
      },
      {
        label: "ArriveUS 채용 공고",
        url: "/jobs",
      },
      {
        label: "미국식 이력서·면접",
        url: "/guides/job/resume-interview",
      },
      {
        label: "입사 근로 서류 (I-9, W-4)",
        url: "/guides/job/work-documents",
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
          "동행·가사·장보기와 의료 돌봄은 다릅니다. 약 투여·의료 처치는 자격 범위를 넘기 쉽습니다. 업무 범위·시급·교통비를 서면으로 남기세요.",
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
];
