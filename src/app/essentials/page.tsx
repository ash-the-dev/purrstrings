import { CategoryPage, categoryMetadata } from "@/lib/category-page";

export const metadata = categoryMetadata("essentials");

export default function Page() {
  return <CategoryPage slug="essentials" />;
}
