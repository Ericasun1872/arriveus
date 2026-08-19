export type Tip = {
  title: string;
  body: string;
  href: string;
  linkLabel: string;
};

/** 날짜 기준으로 하나를 골라 홈 Daily Tip에 표시합니다. */
export const tips: Tip[] = [
  {
    title: "오늘의 미국 생활 팁",
    body: "막 도착했다면 미국 전화번호부터 만드세요. 은행·병원·학교가 번호를 요구하는 경우가 많습니다.",
    href: "/guides/life/phone-sim",
    linkLabel: "미국 전화번호·휴대폰 가이드",
  },
  {
    title: "오늘의 미국 생활 팁",
    body: "첫 주에는 ‘도착 첫 7일 체크리스트’ 순서로 연락·거처·은행·보험만 잡아도 훨씬 안정됩니다.",
    href: "/guides/life/first-week",
    linkLabel: "도착 첫 7일 체크리스트",
  },
  {
    title: "오늘의 미국 생활 팁",
    body: "건강보험은 거주 주 마켓플레이스(예: Covered California, NY State of Health, WA Healthplanfinder)에서 자격부터 조회해 보세요.",
    href: "/guides/medical/low-income-insurance",
    linkLabel: "저소득·주 보험 가입 가이드",
  },
  {
    title: "오늘의 미국 생활 팁",
    body: "아파트 투어 전 보증금·송금 요구는 사기 위험이 큽니다. 실물·화상 확인과 계약서를 먼저 보세요.",
    href: "/guides/housing/rental-scams",
    linkLabel: "임대 사기 주의 가이드",
  },
  {
    title: "오늘의 미국 생활 팁",
    body: "식품비가 부담되면 USA.gov Food help·SNAP 안내로 거주 주 신청 창구를 확인하세요. 선입금 대행은 피하세요.",
    href: "/guides/life/public-benefits",
    linkLabel: "공공 혜택 가이드",
  },
  {
    title: "오늘의 미국 생활 팁",
    body: "무료·저비용 ESL은 USA.gov Learn English와 지역 도서관·학군 성인 교실에서 찾는 경우가 많습니다.",
    href: "/guides/life/esl-english",
    linkLabel: "ESL·영어 공부 가이드",
  },
];

export function getDailyTip(date = new Date()): Tip {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  const dayOfYear = Math.floor((date.getTime() - start) / 86_400_000);
  return tips[dayOfYear % tips.length] ?? tips[0];
}

/** @deprecated use getDailyTip() */
export const dailyTip = tips[0];
