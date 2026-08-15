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
      "미국 이력서(Resume)는 보통 1페이지(경력이 많으면 2페이지)로 짧게 씁니다. 사진, 생년월일, 결혼 여부, SSN, 사진 증명 사진은 넣지 않는 것이 일반적입니다. 학력·경력은 최신순이고, 각 bullet은 ‘동사 + 한 일 + 숫자/결과’ 형태가 읽기 좋습니다. 한국식 자기소개서 문장보다 Job description 키워드에 맞춘 맞춤 Resume가 통과율이 높은 편입니다. 면접은 Behavioral 질문이 많아 STAR(Situation–Task–Action–Result)로 사례 3–5개를 말해 보게 연습하세요. 지원 전에 해당 직무에서 합법적으로 일할 수 있는지(시민권·영주권·EAD·비자 조건)를 확인하고, 필요하면 Recruiter 질문에 대비한 한 줄 답변을 준비합니다.",
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
    ],
    updatedAt: "2026-08",
    disclaimer,
  },
];
