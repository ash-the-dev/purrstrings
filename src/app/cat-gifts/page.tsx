import { CategoryPage, categoryMetadata } from "@/lib/category-page";

export const metadata = categoryMetadata("cat-gifts");

export default function Page() {
  return <CategoryPage slug="cat-gifts" />;
}
