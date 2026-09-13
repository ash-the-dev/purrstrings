import { CategoryPage, categoryMetadata } from "@/lib/category-page";

export const metadata = categoryMetadata("cat-gps-trackers");

export default function Page() {
  return <CategoryPage slug="cat-gps-trackers" />;
}
