import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Cat product guides, comparisons, and explainers from Purrstrings — litter, food, furniture, tech, and the rest.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Breadcrumbs items={[{ name: "Guides", href: "/guides" }]} />
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
            Useful cat stuff, minus the fluff
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            Comparisons, buying questions, and the pieces we will keep adding.
            Drafts are visible here and stay out of the sitemap until they are
            real.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
      <NewsletterSignup />
    </>
  );
}
