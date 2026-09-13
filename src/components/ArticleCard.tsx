import Image from "next/image";
import Link from "next/link";
import { PersonalityBadge } from "@/components/PersonalityBadge";
import { getCategoryBySlug } from "@/data/categories";
import { getArticleHref, type Article } from "@/data/articles";

type ArticleCardProps = {
  article: Article;
  featured?: boolean;
  quiet?: boolean;
};

export function ArticleCard({ article, featured = false, quiet = false }: ArticleCardProps) {
  const category = getCategoryBySlug(article.categorySlug);
  const href = getArticleHref(article);

  return (
    <article className="group flex h-full flex-col">
      <Link
        href={href}
        className={`relative block overflow-hidden bg-black/5 ${featured ? "aspect-[4/3] sm:aspect-[16/10]" : "aspect-[4/3]"}`}
      >
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
          className="object-cover"
        />
      </Link>
      <div className={`flex flex-1 flex-col ${featured ? "pt-6" : "pt-5"}`}>
        {category ? (
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em]">
            <Link href={category.href} className="border-b border-baby-pink pb-0.5 hover:text-foreground/60">
              {category.navLabel}
            </Link>
          </p>
        ) : null}
        {article.personalityLabels?.map((label) => (
          <PersonalityBadge key={label.label} label={label} />
        ))}
        <h3 className={`mt-3 font-serif leading-snug text-balance ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
          <Link href={href} className="hover:text-foreground/60">
            {article.title}
          </Link>
        </h3>
        {!quiet ? (
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {article.excerpt}
          </p>
        ) : (
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">
            {article.excerpt}
          </p>
        )}
      </div>
    </article>
  );
}
