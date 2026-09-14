import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ProductPickCard } from "@/components/ProductPickCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getPublishedArticles } from "@/data/articles";
import { getLivePicks } from "@/data/featured-picks";

export const metadata: Metadata = {
  title: "Best Cat Products We Actually Stand Behind",
  description:
    "Cat products Ash recommends from personal use and years of professional pet-care work — not a scraped Amazon list. See how we pick before you shop.",
  alternates: { canonical: "/best-products" },
};

export default function BestProductsPage() {
  const guides = getPublishedArticles();

  return (
    <>
      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Breadcrumbs items={[{ name: "Best Products", href: "/best-products" }]} />
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
            Stuff we’d actually buy
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            The full shelf of current favorites — separate from the homepage
            highlights. Products land here through firsthand use with Ash’s
            cats, exposure in client homes over years of pet-care work, repeat
            observation across households, or a clear editorial case. Not every
            pick checks every box; labels on individual pages say which kind of
            evidence we have.{" "}
            <Link href="/how-we-pick" className="font-semibold text-foreground underline underline-offset-4">
              How we pick
            </Link>
            {" · "}
            <Link href="/about" className="font-semibold text-foreground underline underline-offset-4">
              About Ash
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {getLivePicks().map((pick) => (
            <ProductPickCard key={pick.slug} pick={pick} />
          ))}
        </div>
        <AffiliateDisclosure className="mt-8 max-w-3xl" />
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
