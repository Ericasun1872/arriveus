export type GuideLink = {
  label: string;
  url: string;
};

export type EnglishPhrase = {
  ko: string;
  en: string;
  note?: string;
};

export type PracticeQuestion = {
  question: string;
  choices: string[];
  answerIndex: number;
  explanation?: string;
};

export type Guide = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  cost?: string;
  methods?: string[];
  overview: string;
  requirements: string[];
  steps: string[];
  links: GuideLink[];
  english?: EnglishPhrase[];
  practiceQuestions?: PracticeQuestion[];
  disclaimer?: string;
  comingSoon?: boolean;
};

export type Category = {
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  accent: string;
  icon: "car" | "bank" | "medical" | "tax" | "job" | "housing";
};
