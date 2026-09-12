import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Hero } from "@/components/Hero";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ProductPickCard } from "@/components/ProductPickCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getFeaturedArticles } from "@/data/articles";
import { homepageCategories } from "@/data/categories";
import { featuredPicks } from "@/data/featured-picks";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featuredArticles = getFeaturedArticles();

  return (
    <>
      <Hero />

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Browse"
          title="What are you trying to solve?"
          description="Six starting points. No forty-item mega-menu. No cartoon paw prints."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homepageCategories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-cream">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Recommendations"
            title="Stuff We’d Actually Buy"
            description="Example cards only. These are not test results, scores, or a claim that we personally ran a lab."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {featuredPicks.map((pick) => (
              <ProductPickCard key={pick.slug} pick={pick} />
            ))}
          </div>
          <AffiliateDisclosure className="mt-8 max-w-3xl" />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="The desk"
          title="Useful Cat Stuff, Minus the Fluff"
          description="Guides and comparisons written like a friend who has already done the tab-closing for you."
        />
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-16 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Why this exists
            </p>
            <p className="mt-4 font-serif text-2xl leading-snug text-pretty text-foreground sm:text-3xl">
              Purrstrings exists because buying something for a cat should not
              require opening 37 tabs, reading fake reviews, and discovering
              every recommendation was written by someone trying to sell the
              same product.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex h-12 shrink-0 items-center justify-center border border-foreground/15 px-6 text-sm font-semibold tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Why Purrstrings?
          </Link>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
