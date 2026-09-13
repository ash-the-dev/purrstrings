import { CategoryPage, categoryMetadata } from "@/lib/category-page";

export const metadata = categoryMetadata("automatic-cat-feeders");

export default function Page() {
  return <CategoryPage slug="automatic-cat-feeders" />;
}
