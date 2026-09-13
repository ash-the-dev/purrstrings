import { CategoryPage, categoryMetadata } from "@/lib/category-page";

export const metadata = categoryMetadata("cat-furniture");

export default function Page() {
  return <CategoryPage slug="cat-furniture" />;
}
