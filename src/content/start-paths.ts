export type StartPath = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

/** 홈·검색 허브용 — “나는 누구/어떤 상황인가”로 입구를 나눕니다. */
export const startPaths: StartPath[] = [
  {
    slug: "arrived",
    title: "막 도착했어요",
    description: "전화번호·거처·은행·응급부터 첫 7일 순서",
    href: "/guides/life/first-week",
  },
  {
    slug: "family",
    title: "가족과 함께예요",
    description: "학교·보육·보험·주거를 이어서 보기",
    href: "/guides/life/school-kids",
  },
  {
    slug: "work",
    title: "일을 찾고 있어요",
    description: "온라인 구직·현장 취업·홈케어·이력서",
    href: "/guides/job/job-search",
  },
  {
    slug: "drive",
    title: "운전·면허가 급해요",
    description: "주별 DMV·면허·렌트·차 구입",
    href: "/guides/dmv/states",
  },
  {
    slug: "senior",
    title: "시니어 주거가 궁금해요",
    description: "55+ 단지와 저소득 시니어 주거",
    href: "/guides/housing/senior-housing-55",
  },
  {
    slug: "immigration",
    title: "이민국 서류가 필요해요",
    description: "USCIS 계정·양식·귀화·취업 이민",
    href: "/guides/immigration",
  },
];
