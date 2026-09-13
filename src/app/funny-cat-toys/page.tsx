import { CategoryPage, categoryMetadata } from "@/lib/category-page";

export const metadata = categoryMetadata("funny-cat-toys");

export default function Page() {
  return <CategoryPage slug="funny-cat-toys" />;
}
