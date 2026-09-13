import { CategoryPage, categoryMetadata } from "@/lib/category-page";

export const metadata = categoryMetadata("gifts-for-cat-lovers");

export default function Page() {
  return <CategoryPage slug="gifts-for-cat-lovers" />;
}
