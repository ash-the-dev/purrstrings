import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryLanding } from "@/components/CategoryLanding";
import { getCategoryBySlug } from "@/data/categories";

export function categoryMetadata(slug: string): Metadata {
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Category" };
  }

  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: category.href },
    robots: category.indexable
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      title: `${category.title} | Purrstrings`,
      description: category.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.title} | Purrstrings`,
      description: category.description,
    },
  };
}

export function CategoryPage({ slug }: { slug: string }) {
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return <CategoryLanding category={category} />;
}
