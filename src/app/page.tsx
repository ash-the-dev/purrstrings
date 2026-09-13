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
import { getFeaturedArticles } from "@/data/articles";
import { categories, homepageCategories } from "@/data/categories";
import { getLivePicks } from "@/data/featured-picks";

export const metadata: Metadata = {
  title: { absolute: "Purrstrings | Nine lives. Zero jobs." },
  description:
    "Purrstrings finds the good stuff for cats — guides, comparisons, and recommendations for litter, food, furniture, tech, toys, and the rest of the household they already run.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Purrstrings | Nine lives. Zero jobs.",
    description:
      "Purrstrings finds the good stuff for cats — guides, comparisons, and recommendations for litter, food, furniture, tech, toys, and the rest of the household they already run.",
  },
  twitter: {
    title: "Purrstrings | Nine lives. Zero jobs.",
    description:
      "Purrstrings finds the good stuff for cats — guides, comparisons, and recommendations for litter, food, furniture, tech, toys, and the rest of the household they already run.",
  },
};

export default function HomePage() {
  const featuredArticles = getFeaturedArticles();
  const trendingLead = featuredArticles[0];
  const trendingRest = featuredArticles.slice(1, 4);
  const latest = featuredArticles.slice(0, 6);
  const discovery = [
    ...categories.filter((category) => category.indexable && category.slug !== "guides"),
    ...homepageCategories.filter((category) => !category.indexable),
  ];

  return (
    <>
      <Hero />

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Trending with cats"
          title="The front of the magazine"
          description="Guides, comparisons, and the questions people actually type at 11pm."
        />
        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
          {trendingLead ? (
            <div className="lg:col-span-7">
              <ArticleCard article={trendingLead} featured />
            </div>
          ) : null}
          <div className="grid gap-12 lg:col-span-5">
            {trendingRest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Shop by obsession"
          title="Pick a problem. We will meet you there."
        />
        <ul className="mt-12 columns-1 gap-x-16 sm:columns-2">
          {homepageCategories.map((category) => (
            <li key={category.slug} className="border-b border-black/10 py-4">
              <Link
                href={category.href}
                className="flex items-baseline justify-between gap-4 font-serif text-2xl hover:text-foreground/60"
              >
                <span>{category.title}</span>
                <span aria-hidden="true" className="text-base">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ChaosApproved />

      <TreatsSpotlight />

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Recommendations"
          title="Stuff We’d Actually Buy"
          description="Live affiliate picks with real links. Official product shots first, house photos last. No fake scores."
        />
        <div className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {getLivePicks().map((pick) => (
            <ProductPickCard key={pick.slug} pick={pick} />
          ))}
        </div>
        <AffiliateDisclosure className="mt-10 max-w-3xl" />
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="The desk"
          title="Latest from Purrstrings"
        />
        <div className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} quiet />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
          What Purrstrings covers
          <span className="mt-3 block h-[3px] w-16 bg-baby-blue" />
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          Cat products, gear, food, litter, furniture, tech, gifts, and the
          guides that should have existed before you opened 37 tabs. Start
          with a desk. Skip the ones still waiting on a real story.
        </p>
        <ul className="mt-12 max-w-xl">
          {discovery.map((category) => (
            <li key={category.slug} className="border-b border-black/10">
              <Link
                href={category.href}
                className="flex items-baseline justify-between gap-4 py-4 font-serif text-2xl hover:text-foreground/60"
              >
                <span>{category.title}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
          <li className="border-b border-black/10">
            <Link
              href="/guides"
              className="flex items-baseline justify-between gap-4 py-4 font-serif text-2xl hover:text-foreground/60"
            >
              <span>Guides</span>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
          <li className="border-b border-black/10">
            <Link
              href="/about"
              className="flex items-baseline justify-between gap-4 py-4 font-serif text-2xl hover:text-foreground/60"
            >
              <span>Why this exists</span>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        </ul>
      </section>

      <NewsletterSignup />
    </>
  );
}
