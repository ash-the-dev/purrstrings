import { CategoryPage, categoryMetadata } from "@/lib/category-page";

export const metadata = categoryMetadata("interactive-cat-toys");

export default function Page() {
  return <CategoryPage slug="interactive-cat-toys" />;
}
