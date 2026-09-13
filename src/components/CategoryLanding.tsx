import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProductPickCard } from "@/components/ProductPickCard";
import { SectionHeading } from "@/components/SectionHeading";
import { articles, getArticlesByCategory } from "@/data/articles";
import { getCategoryBySlug, getRelatedCategories, type Category } from "@/data/categories";
import { featuredPicks } from "@/data/featured-picks";
import { faqJsonLd } from "@/lib/schema";

type CategoryLandingProps = {
  category: Category;
};

export function CategoryLanding({ category }: CategoryLandingProps) {
  const parent = category.parentSlug ? getCategoryBySlug(category.parentSlug) : undefined;
  const categoryArticles = getArticlesByCategory(category.slug, category.articleSlugs);
  const relatedPicks = featuredPicks.filter(
    (pick) => pick.categoryHref === category.href || category.articleSlugs?.some((slug) => pick.href.includes(slug)),
  );
  const related = getRelatedCategories(category);
  const moreReading =
    categoryArticles.length < 3
      ? articles.filter((article) => !categoryArticles.some((item) => item.slug === article.slug)).slice(0, 3)
      : [];

  const crumbs = [
    ...(parent ? [{ name: parent.title, href: parent.href }] : []),
    { name: category.title, href: category.href },
  ];

  return (
    <>
      <section className="bg-background">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-8 lg:py-14">
          <div>
            <Breadcrumbs items={crumbs} />
            {!category.indexable ? (
              <p className="mt-4 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-chaos">
                Layout ready · not indexed yet
              </p>
            ) : (
              <p className="mt-4 text-[0.7rem] font-bold uppercase tracking-[0.16em]">
                Category
              </p>
            )}
            <h1 className="mt-3 font-serif text-4xl leading-tight text-balance text-foreground sm:text-6xl">
              {category.title}
            </h1>
            <p className="mt-4 max-w-xl font-serif text-xl italic">{category.teaser}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {category.description}
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
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

      <section className="mx-auto w-full max-w-6xl px-5 pb-14 sm:px-6 lg:px-8">
        <SectionHeading
          title={categoryArticles.length > 0 ? "Guides in this category" : "Stories coming soon"}
          description={
            categoryArticles.length > 0
              ? "These cards are structurally ready. Draft pieces stay unindexed until the body is real."
              : "This section is built and waiting. Related reading from elsewhere on the site sits below so the page is still useful."
          }
        />
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {(categoryArticles.length > 0 ? categoryArticles : moreReading).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl">Related desks</h2>
            <ul className="mt-6 max-w-xl">
              {related.map((item) => (
                <li key={item.slug} className="border-b border-black/10">
                  <Link
                    href={item.href}
                    className="flex items-baseline justify-between gap-4 py-4 font-serif text-xl hover:text-foreground/60"
                  >
                    <span>{item.title}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
        </section>
      ) : null}

      {category.faqs?.length ? (
        <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <JsonLd data={faqJsonLd(category.faqs)} />
          <h2 className="font-serif text-3xl">Questions, briefly</h2>
          <dl className="mt-8 space-y-6">
            {category.faqs.map((faq) => (
              <div key={faq.question} className="border-b border-black/10 pb-6">
                <dt className="font-serif text-2xl">{faq.question}</dt>
                <dd className="mt-2 max-w-2xl text-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}
    </>
  );
}
