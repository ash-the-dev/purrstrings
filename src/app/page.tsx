import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ArticleCard } from "@/components/ArticleCard";
import { ChaosApproved } from "@/components/ChaosApproved";
import { Hero } from "@/components/Hero";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ProductPickCard } from "@/components/ProductPickCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TreatsSpotlight } from "@/components/TreatsSpotlight";
import { getFeaturedArticles, getPublishedArticles } from "@/data/articles";
import { homepageCategories } from "@/data/categories";
import { getLivePicks } from "@/data/featured-picks";
import { siteConfig } from "@/data/site";
import { sortPicksForCatalog } from "@/data/shop-groups";

export const metadata: Metadata = {
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function HomePage() {
  const livePicks = getLivePicks();
  const homepagePicks = sortPicksForCatalog(livePicks).slice(0, 6);
  const featuredGuides = getFeaturedArticles()
    .filter((article) => !article.draft)
    .slice(0, 4);
  const guideLead = featuredGuides[0];
  const guideRest = featuredGuides.slice(1, 4);
  const moreGuides = getPublishedArticles().slice(0, 3);

  return (
    <>
      <Hero />

      <section className="border-y border-black/10 bg-background">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
          <p className="max-w-2xl font-serif text-2xl leading-snug text-foreground sm:text-3xl">
            Six years in pet care. 200+ clients. Cats at home.
          </p>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Supporting context — not the whole pitch. Recommendations shaped by
            real households Ash has worked in, and the stuff that lives with
            Ash&apos;s own cats.{" "}
            <Link href="/about" className="font-semibold text-foreground underline underline-offset-4">
              About Ash
            </Link>
            {" · "}
            <Link href="/how-we-pick" className="font-semibold text-foreground underline underline-offset-4">
              How we pick
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionHeading
          eyebrow="What we actually use"
          title="Start with the shelf"
          description="A handful of current favorites. The full catalog — food, litter, toys, furniture, tech — lives in the Store."
        />
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {homepagePicks.map((pick) => (
            <ProductPickCard key={pick.slug} pick={pick} />
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <AffiliateDisclosure className="max-w-2xl" />
          <Link
            href="/best-products"
            className="inline-flex min-h-11 shrink-0 items-center text-sm font-bold underline decoration-baby-pink decoration-2 underline-offset-4"
          >
            See what we actually use →
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionHeading
          eyebrow="Shop by problem"
          title="Pick a lane. We’ll meet you there."
          description="Toys, litter, food, furniture, tech — pathways that end in products, not dead ends."
        />
        <ul className="mt-10 columns-1 gap-x-16 sm:columns-2">
          {homepageCategories.map((category) => (
            <li key={category.slug} className="border-b border-black/10 py-4">
              <Link
                href={category.href}
                className="flex items-baseline justify-between gap-4 font-serif text-2xl hover:text-foreground/60"
              >
                <span>{category.title}</span>
                <span aria-hidden="true" className="text-base">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <TreatsSpotlight />

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionHeading
          eyebrow="Guides worth reading"
          title="Know what you’re buying"
          description="Comparisons and buying guides that answer the question, then point you at the pick."
        />
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-14">
          {guideLead ? (
            <div className="lg:col-span-7">
              <ArticleCard article={guideLead} featured />
            </div>
          ) : null}
          <div className="grid gap-10 lg:col-span-5">
            {guideRest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <Link
            href="/guides"
            className="inline-flex min-h-11 items-center text-sm font-bold underline decoration-baby-blue decoration-2 underline-offset-4"
          >
            Browse all guides →
          </Link>
        </div>
      </section>

      <ChaosApproved />

      {moreGuides.length > 0 ? (
        <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeading eyebrow="Keep going" title="More from the desk" />
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {moreGuides.map((article) => (
              <ArticleCard key={article.slug} article={article} quiet />
            ))}
          </div>
        </section>
      ) : null}

      <NewsletterSignup />
    </>
  );
}
