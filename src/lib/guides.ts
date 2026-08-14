import { categories } from "@/content/categories";
import { getEnglishPhrases } from "@/content/english";
import { guides } from "@/content/guides";
import type { Category, Guide } from "@/content/types";

function withEnglish(guide: Guide): Guide {
  return {
    ...guide,
    english: guide.english ?? getEnglishPhrases(guide.category, guide.slug),
  };
}

export function getCategories(): Category[] {
  return categories;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
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
