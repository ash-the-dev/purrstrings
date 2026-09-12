import type { Metadata } from "next";
import { CategoryLanding } from "@/components/CategoryLanding";
import { getCategoryBySlug } from "@/data/categories";
import { notFound } from "next/navigation";

const category = getCategoryBySlug("litter");

export const metadata: Metadata = {
  title: category?.title ?? "Litter",
  description: category?.description,
  alternates: { canonical: "/litter" },
};

export default function LitterPage() {
  if (!category) {
    notFound();
  }

  return <CategoryLanding category={category} />;
}
