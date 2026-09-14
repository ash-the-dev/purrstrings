import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SectionHeading } from "@/components/SectionHeading";
import { StoreCatalog } from "@/components/StoreCatalog";
import { getPublishedArticles } from "@/data/articles";
import { getLivePicks } from "@/data/featured-picks";

export const metadata: Metadata = {
  title: "Best Cat Products We Actually Stand Behind",
  description:
    "Shop 65+ cat products Ash has actually used — food, litter, toys, furniture, fountains, and tech. Firsthand picks with honest media labels, not a scraped Amazon list.",
  alternates: { canonical: "/best-products" },
};

export default function BestProductsPage() {
  const guides = getPublishedArticles();
  const livePicks = getLivePicks();

  return (
    <>
      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Breadcrumbs items={[{ name: "Best Products", href: "/best-products" }]} />
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
            Stuff we&apos;d actually buy
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            The full shelf — {livePicks.length} live picks across food, litter,
            toys, furniture, fountains, and tech. Filter by lane below. Labels on
            each card say what kind of experience we have; &quot;personally
            used&quot; is not the same as a hard sell.{" "}
            <Link
              href="/how-we-pick"
              className="font-semibold text-foreground underline underline-offset-4"
            >
              How we pick
            </Link>
            {" · "}
            <Link
              href="/about"
              className="font-semibold text-foreground underline underline-offset-4"
            >
              About Ash
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-12">
        <Suspense
          fallback={
            <p className="text-sm text-muted">Loading the catalog…</p>
          }
        >
          <StoreCatalog picks={livePicks} />
        </Suspense>
        <AffiliateDisclosure className="mt-10 max-w-3xl" />
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <SectionHeading
          title="Need help deciding?"
          description="Guides that answer the question, then point you back to a pick."
        />
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
      <NewsletterSignup />
    </>
  );
}
