import { ArticleCard } from "@/components/ArticleCard";
import { SectionHeading } from "@/components/SectionHeading";
import { articles, getArticlesByCategory } from "@/data/articles";
import type { Category } from "@/data/categories";
import { featuredPicks } from "@/data/featured-picks";
import { ProductPickCard } from "@/components/ProductPickCard";
import Image from "next/image";

type CategoryLandingProps = {
  category: Category;
};

export function CategoryLanding({ category }: CategoryLandingProps) {
  const categoryArticles = getArticlesByCategory(category.slug);
  const relatedPicks = featuredPicks.filter(
    (pick) => pick.categoryHref === category.href,
  );
  const moreReading =
    categoryArticles.length < 3
      ? articles.filter((article) => article.categorySlug !== category.slug).slice(0, 3)
      : [];

  return (
    <>
      <section className="border-b border-border bg-cream">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Category
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-balance text-foreground sm:text-5xl">
              {category.title}
            </h1>
            <p className="mt-4 max-w-xl font-serif text-xl italic text-foreground/80">
              {category.teaser}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {category.description}
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-tan">
            <Image
              src={category.image.src}
              alt={category.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {relatedPicks.length > 0 ? (
        <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <SectionHeading title="Starting points" description="Guides tied to the questions people actually ask before they click buy." />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {relatedPicks.map((pick) => (
              <ProductPickCard key={pick.slug} pick={pick} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <SectionHeading
          title={categoryArticles.length > 0 ? "Guides in this category" : "Stories coming soon"}
          description={
            categoryArticles.length > 0
              ? "Placeholder cards for now. The structure is ready to publish into."
              : "This section is built and waiting. Until the first piece lands, here is related reading from elsewhere on the site."
          }
        />
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {(categoryArticles.length > 0 ? categoryArticles : moreReading).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
