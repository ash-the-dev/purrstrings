import type { Metadata } from "next";
import { CategoryLanding } from "@/components/CategoryLanding";
import { getCategoryBySlug } from "@/data/categories";
import { notFound } from "next/navigation";

const category = getCategoryBySlug("cat-furniture");

export const metadata: Metadata = {
  title: category?.title ?? "Cat Furniture",
  description: category?.description,
  alternates: { canonical: "/cat-furniture" },
};

export default function CatFurniturePage() {
  if (!category) {
    notFound();
  }

  return <CategoryLanding category={category} />;
}
