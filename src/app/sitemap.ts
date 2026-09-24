import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { pageUpdatedAt, siteConfig } from "@/lib/site";
import { contentDate, laterDate } from "@/lib/dates";
import { getCategories, getGuidesByCategory } from "@/lib/guides";
import { getKoreanDoctorRegionParams, getKoreanDoctorRegions } from "@/lib/korean-doctors";
import { getStateGuides } from "@/lib/states";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: contentDate(pageUpdatedAt.home),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: contentDate(pageUpdatedAt.about),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${base}/privacy`,
      lastModified: contentDate(pageUpdatedAt.privacy),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/guides/dmv/states`,
      lastModified: contentDate(pageUpdatedAt.dmvStates),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/guides/medical/korean-doctors`,
      lastModified: contentDate(pageUpdatedAt.koreanDoctors),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = getCategories().map(
    (category) => {
      const latest = laterDate(
        ...getGuidesByCategory(category.slug).map((guide) => guide.updatedAt),
      );
      return {
        url: `${base}/guides/${category.slug}`,
        lastModified: contentDate(latest),
        changeFrequency: "weekly" as const,
        priority: 0.9,
      };
    },
  );

  const guideRoutes: MetadataRoute.Sitemap = guides
    .filter((guide) => !guide.comingSoon)
    .map((guide) => ({
      url: `${base}/guides/${guide.category}/${guide.slug}`,
      lastModified: contentDate(guide.updatedAt ?? guide.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  const stateRoutes: MetadataRoute.Sitemap = getStateGuides().map((state) => ({
    url: `${base}/guides/dmv/states/${state.code.toLowerCase()}`,
    lastModified: contentDate(state.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const koreanDoctorRoutes: MetadataRoute.Sitemap =
    getKoreanDoctorRegionParams().map(({ region }) => {
      const item = getKoreanDoctorRegions().find((entry) => entry.slug === region);
      return {
        url: `${base}/guides/medical/korean-doctors/${region}`,
        lastModified: contentDate(item?.updatedAt),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      };
    });

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...guideRoutes,
    ...stateRoutes,
    ...koreanDoctorRoutes,
  ];
}
