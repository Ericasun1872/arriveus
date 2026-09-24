import {
  koreanDoctorRegions,
  type KoreanDoctorRegion,
} from "@/content/korean-doctors";
import { DEFAULT_CONTENT_DATE } from "@/lib/dates";

function withUpdatedAt(region: KoreanDoctorRegion): KoreanDoctorRegion {
  return {
    ...region,
    updatedAt: region.updatedAt ?? DEFAULT_CONTENT_DATE,
  };
}

export function getKoreanDoctorRegions(): KoreanDoctorRegion[] {
  return koreanDoctorRegions.map(withUpdatedAt);
}

export function getFeaturedKoreanDoctorRegions(): KoreanDoctorRegion[] {
  return getKoreanDoctorRegions().filter((region) => region.featured);
}

export function getKoreanDoctorRegion(
  slug: string,
): KoreanDoctorRegion | undefined {
  return getKoreanDoctorRegions().find((region) => region.slug === slug);
}

export function getKoreanDoctorRegionParams() {
  return koreanDoctorRegions
    .filter((region) => !region.comingSoon)
    .map((region) => ({ region: region.slug }));
}
