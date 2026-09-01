import { categories } from "@/content/categories";
import { categoryFaqs } from "@/content/category-faqs";
import { getEnglishPhrases } from "@/content/english";
import { guides } from "@/content/guides";
import { newGuideRefs } from "@/content/new-guides";
import type { Category, FaqItem, Guide } from "@/content/types";
import { scoreSearchMatch } from "@/lib/search";

const DEFAULT_UPDATED_AT = "2026-08";

function withEnglish(guide: Guide): Guide {
  return {
    ...guide,
    updatedAt: guide.updatedAt ?? DEFAULT_UPDATED_AT,
    english: guide.english ?? getEnglishPhrases(guide.category, guide.slug),
  };
}

export function formatGuideUpdatedAt(updatedAt: string): string {
  const [year, month] = updatedAt.split("-");
  const monthNum = Number(month);
  if (!year || !monthNum) return `${updatedAt} 기준`;
  return `${year}년 ${monthNum}월 기준`;
}

export function getCategories(): Category[] {
  return categories;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryFaqs(categorySlug: string): FaqItem[] {
  return categoryFaqs[categorySlug] ?? [];
}

export function getGuidesByCategory(categorySlug: string): Guide[] {
  return guides
    .filter((guide) => guide.category === categorySlug)
    .map(withEnglish);
}

export function getGuide(
  categorySlug: string,
  guideSlug: string,
): Guide | undefined {
  const guide = guides.find(
    (item) => item.category === categorySlug && item.slug === guideSlug,
  );
  return guide ? withEnglish(guide) : undefined;
}

export function getAllGuideParams() {
  return guides.map((guide) => ({
    category: guide.category,
    slug: guide.slug,
  }));
}

/** 홈 재방문용 — 최근에 보강한 가이드. */
export function getNewGuides(): Guide[] {
  return newGuideRefs
    .map((ref) => getGuide(ref.category, ref.slug))
    .filter((guide): guide is Guide => guide != null && !guide.comingSoon);
}

export function getAllGuides(): Guide[] {
  return guides.map(withEnglish);
}

export function getSearchIndex() {
  return getAllGuides()
    .filter((guide) => !guide.comingSoon)
    .map((guide) => {
      const category = getCategory(guide.category);
      return {
        category: guide.category,
        categoryName: category?.name ?? guide.category,
        slug: guide.slug,
        title: guide.title,
        summary: guide.summary,
        haystack: [
          guide.title,
          guide.summary,
          guide.overview,
          ...(guide.methods ?? []),
          ...(guide.faq ?? []).flatMap((item) => [item.question, item.answer]),
          guide.slug.replaceAll("-", " "),
          category?.name,
          category?.nameEn,
          category?.description,
        ]
          .filter(Boolean)
          .join(" ")
          .normalize("NFC")
          .toLowerCase(),
      };
    });
}

export function searchGuides(query: string): Guide[] {
  const q = query.normalize("NFC").trim();
  if (!q) return [];
  return getSearchIndex()
    .map((item) => ({
      item,
      score: scoreSearchMatch(item.haystack, q, {
        title: item.title,
        summary: item.summary,
      }),
    }))
    .filter((row) => row.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score || a.item.title.localeCompare(b.item.title, "ko"),
    )
    .map((row) => getGuide(row.item.category, row.item.slug)!)
    .filter(Boolean);
}
