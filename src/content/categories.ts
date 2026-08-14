import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "dmv",
    name: "DMV",
    nameEn: "Driver & Vehicle",
    description: "면허, 보험, 주별 가이드(시애틀 포함)",
    accent: "#1B4F9C",
    icon: "car",
  },
  {
    slug: "bank",
    name: "은행",
    nameEn: "Banking",
    description: "계좌, 첫 신용카드, 신용점수, 송금",
    accent: "#0F6B5C",
    icon: "bank",
  },
  {
    slug: "medical",
    name: "의료",
    nameEn: "Healthcare",
    description: "보험, 병원, 응급 상황",
    accent: "#C23B3B",
    icon: "medical",
  },
  {
    slug: "tax",
    name: "세금",
    nameEn: "Taxes",
    description: "세금 신고, ITIN, W-2",
    accent: "#8A5A12",
    icon: "tax",
  },
  {
    slug: "job",
    name: "취업",
    nameEn: "Jobs",
    description: "이력서, 면접, 근로 서류",
    accent: "#3D3A8C",
    icon: "job",
  },
  {
    slug: "housing",
    name: "주거",
    nameEn: "Housing",
    description: "임대, 유틸리티, 보증금, 이사",
    accent: "#1F6F8B",
    icon: "housing",
  },
];
