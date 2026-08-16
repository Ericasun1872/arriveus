export type JobPosting = {
  id: string;
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

/**
 * 채용 공고 목록.
 * 검수 후 아래 배열에 추가하면 /jobs에 표시됩니다. 지금은 뼈대만 두었습니다.
 */
export const jobPostings: JobPosting[] = [];
