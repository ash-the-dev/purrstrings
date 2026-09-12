import type { Metadata } from "next";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ProductPickCard } from "@/components/ProductPickCard";
import { SectionHeading } from "@/components/SectionHeading";
import { articles } from "@/data/articles";
import { featuredPicks } from "@/data/featured-picks";

export const metadata: Metadata = {
  title: "Best Products",
  description:
    "Editorial starting points for cat products worth considering — litter boxes, fountains, furniture, trackers, and more.",
  alternates: { canonical: "/best-products" },
};

export default function BestProductsPage() {
  return (
    <>
      <section className="border-b border-border bg-cream">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Best Products
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Stuff we’d actually buy
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Example recommendation cards for the homepage of a publication, not
            a store. No invented scores. No fake “we tested 47 products” claims.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {featuredPicks.map((pick) => (
            <ProductPickCard key={pick.slug} pick={pick} />
          ))}
        </div>
        <AffiliateDisclosure className="mt-8 max-w-3xl" />
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <SectionHeading title="Related guides" />
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
      <NewsletterSignup />
    </>
  );
}
