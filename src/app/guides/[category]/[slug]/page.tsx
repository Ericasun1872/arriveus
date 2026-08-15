import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FavoriteButton } from "@/components/FavoriteButton";
import { GuideTabs } from "@/components/GuideTabs";
import {
  getAllGuideParams,
  getCategory,
  getGuide,
} from "@/lib/guides";

type PageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllGuideParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category: categorySlug, slug } = await params;
  const guide = getGuide(categorySlug, slug);
  if (!guide) return { title: "가이드" };
  const path = `/guides/${guide.category}/${guide.slug}`;
  return {
    title: guide.title,
    description: guide.summary,
    alternates: { canonical: path },
    openGraph: {
      title: guide.title,
      description: guide.summary,
      url: path,
      type: "article",
      images: ["/og-arriveus.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.summary,
      images: ["/og-arriveus.png"],
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { category: categorySlug, slug } = await params;
  const category = getCategory(categorySlug);
  const guide = getGuide(categorySlug, slug);

  if (!category || !guide) notFound();

  if (guide.comingSoon) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <nav className="mb-6 text-sm text-[var(--muted)]">
          <Link href="/" className="hover:text-[var(--brand)]">
            홈
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/guides/${category.slug}`}
            className="hover:text-[var(--brand)]"
          >
            {category.name}
          </Link>
        </nav>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)]">
          {guide.title}
        </h1>
        <p className="mt-4 rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-5 py-8 text-sm text-[var(--muted)]">
          이 가이드는 준비 중입니다. 곧 개요, 준비물, 절차, 공식 링크를
          업데이트합니다.
        </p>
        <Link
          href={`/guides/${category.slug}`}
          className="mt-6 inline-flex text-sm font-semibold text-[var(--brand)] hover:underline"
        >
          ← {category.name} 목록으로
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="mb-6 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--brand)]">
          홈
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/guides/${category.slug}`}
          className="hover:text-[var(--brand)]"
        >
          {category.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--ink)]">{guide.title}</span>
      </nav>

      <header className="mb-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-[var(--brand)]">
              {category.name}
            </p>
            <h1 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
              {guide.title}
            </h1>
          </div>
          <FavoriteButton category={guide.category} slug={guide.slug} />
        </div>
        <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
          {guide.summary}
        </p>
      </header>

      <GuideTabs guide={guide} />
    </div>
  );
}
