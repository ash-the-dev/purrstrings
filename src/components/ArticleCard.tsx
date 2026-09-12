import Image from "next/image";
import Link from "next/link";
import { getCategoryBySlug } from "@/data/categories";
import { getArticleHref, type Article } from "@/data/articles";
import { formatPublishDate, formatReadingTime } from "@/lib/dates";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  const category = getCategoryBySlug(article.categorySlug);
  const href = getArticleHref(article);

  return (
    <article className="group flex h-full flex-col">
      <Link href={href} className="relative block aspect-[16/10] overflow-hidden bg-tan">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col pt-4">
        {category ? (
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <Link href={category.href} className="hover:underline">
              {category.navLabel}
            </Link>
          </p>
        ) : null}
        <h3 className="mt-2 font-serif text-xl leading-snug text-balance text-foreground sm:text-[1.35rem]">
          <Link href={href} className="hover:text-accent">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {article.excerpt}
        </p>
        <p className="mt-4 text-xs tracking-wide text-muted">
          <time dateTime={article.publishedAt}>{formatPublishDate(article.publishedAt)}</time>
          <span aria-hidden="true"> · </span>
          <span>{formatReadingTime(article.readingTimeMinutes)}</span>
        </p>
      </div>
    </article>
  );
}
