import type { Metadata } from "next";
import { CategoryLanding } from "@/components/CategoryLanding";
import { getCategoryBySlug } from "@/data/categories";
import { notFound } from "next/navigation";

const category = getCategoryBySlug("cat-food");

export const metadata: Metadata = {
  title: category?.title ?? "Cat Food",
  description: category?.description,
  alternates: { canonical: "/cat-food" },
};

export default function CatFoodPage() {
  if (!category) {
    notFound();
  }

  return <CategoryLanding category={category} />;
}
