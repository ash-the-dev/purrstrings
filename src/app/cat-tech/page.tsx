import { CategoryPage, categoryMetadata } from "@/lib/category-page";

export const metadata = categoryMetadata("cat-tech");

export default function Page() {
  return <CategoryPage slug="cat-tech" />;
}
