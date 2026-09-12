import type { Metadata } from "next";
import { CategoryLanding } from "@/components/CategoryLanding";
import { getCategoryBySlug } from "@/data/categories";
import { notFound } from "next/navigation";

const category = getCategoryBySlug("cat-tech");

export const metadata: Metadata = {
  title: category?.title ?? "Cat Tech",
  description: category?.description,
  alternates: { canonical: "/cat-tech" },
};

export default function CatTechPage() {
  if (!category) {
    notFound();
  }

  return <CategoryLanding category={category} />;
}
