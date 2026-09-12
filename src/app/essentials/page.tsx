import type { Metadata } from "next";
import { CategoryLanding } from "@/components/CategoryLanding";
import { getCategoryBySlug } from "@/data/categories";
import { notFound } from "next/navigation";

const category = getCategoryBySlug("essentials");

export const metadata: Metadata = {
  title: category?.title ?? "Cat Parent Essentials",
  description: category?.description,
  alternates: { canonical: "/essentials" },
};

export default function EssentialsPage() {
  if (!category) {
    notFound();
  }

  return <CategoryLanding category={category} />;
}
