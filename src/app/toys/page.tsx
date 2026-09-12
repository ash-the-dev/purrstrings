import type { Metadata } from "next";
import { CategoryLanding } from "@/components/CategoryLanding";
import { getCategoryBySlug } from "@/data/categories";
import { notFound } from "next/navigation";

const category = getCategoryBySlug("toys");

export const metadata: Metadata = {
  title: category?.title ?? "Toys & Enrichment",
  description: category?.description,
  alternates: { canonical: "/toys" },
};

export default function ToysPage() {
  if (!category) {
    notFound();
  }

  return <CategoryLanding category={category} />;
}
