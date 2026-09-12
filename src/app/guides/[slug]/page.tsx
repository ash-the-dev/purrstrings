import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ArticleCard } from "@/components/ArticleCard";
import { articles, getArticleBySlug, getArticleHref } from "@/data/articles";
import { getCategoryBySlug } from "@/data/categories";
import { formatPublishDate, formatReadingTime } from "@/lib/dates";

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

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: getArticleHref(article) },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
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

  return (
    <article className="pb-16 lg:pb-20">
      <header className="border-b border-border bg-cream">
        <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 lg:py-16">
          {category ? (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              <Link href={category.href} className="hover:underline">
                {category.title}
              </Link>
            </p>
          ) : null}
          <h1 className="mt-3 font-serif text-4xl leading-tight text-balance text-foreground sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{article.excerpt}</p>
          <p className="mt-5 text-sm text-muted">
            <time dateTime={article.publishedAt}>{formatPublishDate(article.publishedAt)}</time>
            <span aria-hidden="true"> · </span>
            {formatReadingTime(article.readingTimeMinutes)}
          </p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-6">
        <div className="relative aspect-[16/10] overflow-hidden bg-tan">
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
        <p className="mt-3 text-xs text-muted">Placeholder image. Replace before publishing.</p>

        <div className="mt-10 space-y-5 text-base leading-relaxed text-muted">
          <p className="border border-accent/25 bg-tan px-4 py-3 text-sm text-foreground">
            Placeholder article body. This page exists so the editorial shell is
            clickable end to end. Swap this copy when the real guide is ready.
          </p>
          <p>
            The published version should answer the actual question in the
            headline, name the tradeoffs, and link out only when a product or
            retailer is worth the click.
          </p>
          <p>
            Until then, treat the date, read time, and excerpt as structured
            fields sitting in <code className="text-foreground">data/articles.ts</code>
            — easy to replace without redesigning the page.
          </p>
        </div>

        <AffiliateDisclosure className="mt-10" />
      </div>

      <section className="mx-auto w-full max-w-6xl px-5 pt-6 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-foreground">More from the desk</h2>
        <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((item) => (
            <ArticleCard key={item.slug} article={item} />
          ))}
        </div>
      </section>
    </article>
  );
}
