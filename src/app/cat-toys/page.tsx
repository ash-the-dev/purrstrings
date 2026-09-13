import { CategoryPage, categoryMetadata } from "@/lib/category-page";

export const metadata = categoryMetadata("cat-toys");

export default function Page() {
  return <CategoryPage slug="cat-toys" />;
}
