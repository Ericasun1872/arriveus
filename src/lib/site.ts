export const siteConfig = {
  name: "ArriveUS",
  url: "https://www.getarriveus.com",
  description:
    "한국인을 위한 미국 정착 가이드. 생활, DMV, 은행, 의료, 세금, 이민국(USCIS), 취업, 주거 정보를 단계별로 정리했습니다.",
  locale: "ko_KR",
  logo: "/icon-512.png",
  /** 광고·제휴·일반 문의. 도메인 메일 → 개인 메일 포워드로 운영 */
  contactEmail: "info@getarriveus.com",
} as const;

/** YYYY-MM last meaningful update for non-guide routes */
export const pageUpdatedAt = {
  home: "2026-09",
  about: "2026-08",
  privacy: "2026-08",
  dmvStates: "2026-08",
  koreanDoctors: "2026-08",
} as const;
