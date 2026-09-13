import { CategoryPage, categoryMetadata } from "@/lib/category-page";

export const metadata = categoryMetadata("cat-enrichment");

export default function Page() {
  return <CategoryPage slug="cat-enrichment" />;
}
