export type JobTrack = "us" | "korea";

export type JobPosting = {
  id: string;
  /** us: 미국 내 근무 · korea: 한국·원격(미국→한국) */
  track: JobTrack;
  title: string;
  company: string;
  location: string;
  employmentType?: string;
  summary: string;
  applyUrl?: string;
  /** 회사가 확인한 경우에만 true. 미확인이면 표시하지 않음 */
  sponsorsGreenCard?: boolean;
  sponsored?: boolean;
  postedAt?: string;
};

export const jobTracks = [
  {
    id: "us" as const,
    labelEn: "In the U.S.",
    title: "미국 내 채용",
    description:
      "미국 현지 오피스·현장·하이브리드 포지션입니다. 정착 후 로컬에서 일할 자리를 모읍니다.",
    emptyTitle: "미국 내 공고 준비 중",
    emptyBody:
      "검수를 마친 미국 근무 공고가 여기에 올라옵니다. 현지 채용을 올리려는 사업체는 아래로 문의해 주세요.",
  },
  {
    id: "korea" as const,
    labelEn: "Korea & remote",
    title: "한국 · 원격 채용",
    description:
      "한국 본사·오피스, 본국 복귀, 한국 기업 원격·하이브리드 등 미국→한국 방향 채용입니다.",
    emptyTitle: "한국 · 원격 공고 준비 중",
    emptyBody:
      "한국 근무·원격 공고가 여기에 올라옵니다. 본국 채용이나 원격 포지션을 올리려면 아래로 문의해 주세요.",
  },
] as const;

/**
 * 채용 공고 목록.
 * 검수 후 아래 배열에 추가하면 /jobs에 표시됩니다. 지금은 뼈대만 두었습니다.
 */
export const jobPostings: JobPosting[] = [];

export function getJobsByTrack(track: JobTrack): JobPosting[] {
  return jobPostings.filter((job) => job.track === track);
}
