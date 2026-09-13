import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PersonalityBadge } from "@/components/PersonalityBadge";
import { ProductPickCard } from "@/components/ProductPickCard";
import { articles, getArticleBySlug, getArticleHref } from "@/data/articles";
import { getCategoryBySlug } from "@/data/categories";
import { featuredPicks } from "@/data/featured-picks";
import { formatPublishDate, formatReadingTime } from "@/lib/dates";
import { articleJsonLd, faqJsonLd } from "@/lib/schema";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Guide" };
  }

  const title = article.pinterestTitle ?? article.title;
  const description = article.pinterestDescription ?? article.excerpt;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: getArticleHref(article) },
    robots: article.draft
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      images: [{ url: article.image.src, alt: article.image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
    other: {
      ...(article.pinterestTitle ? { "pinterest:title": title } : {}),
      ...(article.pinterestDescription ? { "pinterest:description": description } : {}),
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const category = getCategoryBySlug(article.categorySlug);
  const more = articles.filter((item) => item.slug !== article.slug).slice(0, 3);
  const relatedProducts = featuredPicks.filter((pick) =>
    article.relatedProductSlugs?.includes(pick.slug),
  );

  return (
    <article className="pb-16 lg:pb-20">
      {!article.draft ? <JsonLd data={articleJsonLd(article, category)} /> : null}
      {article.faqs?.length ? <JsonLd data={faqJsonLd(article.faqs)} /> : null}

      <header className="bg-background">
        <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 lg:py-16">
          <Breadcrumbs
            items={[
              ...(category ? [{ name: category.title, href: category.href }] : []),
              { name: article.title, href: getArticleHref(article) },
            ]}
          />
          {article.draft ? (
            <p className="mt-4 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-chaos">
              Draft shell · not indexed
            </p>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-2">
            {article.personalityLabels?.map((label) => (
              <PersonalityBadge key={label.label} label={label} />
            ))}
          </div>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-balance sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground/80">{article.excerpt}</p>
          <p className="mt-5 text-sm text-muted">
            {article.author ? <span>{article.author} · </span> : null}
            <time dateTime={article.publishedAt}>{formatPublishDate(article.publishedAt)}</time>
            {article.updatedAt ? (
              <>
                <span aria-hidden="true"> · </span>
                Updated {formatPublishDate(article.updatedAt)}
              </>
            ) : null}
            <span aria-hidden="true"> · </span>
            {formatReadingTime(article.readingTimeMinutes)}
          </p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-6">
        <div className="relative aspect-[16/10] overflow-hidden bg-black/5 sm:aspect-[2/3] lg:aspect-[16/10]">
          <Image
            src={article.pinterestImage?.src ?? article.image.src}
            alt={article.pinterestImage?.alt ?? article.image.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
        <p className="mt-3 text-xs text-muted">Placeholder image. Replace before publishing.</p>

        <div className="mt-10 space-y-5 text-base leading-relaxed text-muted">
          <p className="border-l-2 border-baby-pink pl-4 text-sm text-foreground">
            Placeholder article body. The fields above are structured and ready.
            Swap this copy when the real guide is ready. This URL stays noindex
            while it is a draft.
          </p>
          <p>
            The published version should answer the headline, name the
            tradeoffs, and link out only when a product or retailer is worth
            the click.
          </p>
        </div>

        {article.faqs?.length ? (
          <section className="mt-12">
            <h2 className="font-serif text-3xl">FAQ</h2>
            <dl className="mt-6 space-y-5">
              {article.faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-serif text-xl">{faq.question}</dt>
                  <dd className="mt-2 text-muted">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {article.sources?.length ? (
          <section className="mt-12">
            <h2 className="font-serif text-2xl">Sources</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {article.sources.map((source) => (
                <li key={source.label}>
                  {source.href ? (
                    <a href={source.href} className="underline" target="_blank" rel="noreferrer">
                      {source.label}
                    </a>
                  ) : (
                    source.label
                  )}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <AffiliateDisclosure className="mt-10" />
      </div>

      {relatedProducts.length > 0 ? (
        <section className="mx-auto w-full max-w-6xl px-5 pt-6 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl">Related products</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {relatedProducts.map((pick) => (
              <ProductPickCard key={pick.slug} pick={pick} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto w-full max-w-6xl px-5 pt-10 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl">More from the desk</h2>
        <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((item) => (
            <ArticleCard key={item.slug} article={item} />
          ))}
        </div>
      </section>
    </article>
  );
}
