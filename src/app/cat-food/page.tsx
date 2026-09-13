import { CategoryPage, categoryMetadata } from "@/lib/category-page";

export const metadata = categoryMetadata("cat-food");

export default function Page() {
  return <CategoryPage slug="cat-food" />;
}
