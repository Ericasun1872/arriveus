import {
  koreanDoctorRegions,
  type KoreanDoctorRegion,
} from "@/content/korean-doctors";

export function getKoreanDoctorRegions(): KoreanDoctorRegion[] {
  return koreanDoctorRegions;
}

export function getFeaturedKoreanDoctorRegions(): KoreanDoctorRegion[] {
  return koreanDoctorRegions.filter((region) => region.featured);
}

export function getKoreanDoctorRegion(
  slug: string,
): KoreanDoctorRegion | undefined {
  return koreanDoctorRegions.find((region) => region.slug === slug);
}

export function getKoreanDoctorRegionParams() {
  return koreanDoctorRegions
    .filter((region) => !region.comingSoon)
    .map((region) => ({ region: region.slug }));
}
