import { CategoryPage, categoryMetadata } from "@/lib/category-page";

export const metadata = categoryMetadata("cat-trees");

export default function Page() {
  return <CategoryPage slug="cat-trees" />;
}
