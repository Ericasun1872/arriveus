import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { getCategories } from "@/lib/guides";
import { getKoreanDoctorRegionParams } from "@/lib/korean-doctors";
import { siteConfig } from "@/lib/site";
import { getStateGuides } from "@/lib/states";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/saved`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${base}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/search`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${base}/jobs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${base}/guides/dmv/states`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/guides/medical/korean-doctors`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = getCategories().map(
    (category) => ({
      url: `${base}/guides/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    }),
  );

  const guideRoutes: MetadataRoute.Sitemap = guides
    .filter((guide) => !guide.comingSoon)
    .map((guide) => ({
      url: `${base}/guides/${guide.category}/${guide.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  const stateRoutes: MetadataRoute.Sitemap = getStateGuides().map((state) => ({
    url: `${base}/guides/dmv/states/${state.code.toLowerCase()}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const koreanDoctorRoutes: MetadataRoute.Sitemap =
    getKoreanDoctorRegionParams().map(({ region }) => ({
      url: `${base}/guides/medical/korean-doctors/${region}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...guideRoutes,
    ...stateRoutes,
    ...koreanDoctorRoutes,
  ];
}
