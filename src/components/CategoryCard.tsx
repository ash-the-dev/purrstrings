import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/data/categories";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="group h-full">
      <Link
        href={category.href}
        className="flex h-full flex-col border border-border bg-surface transition-colors hover:border-accent/40"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-tan">
          <Image
            src={category.image.src}
            alt={category.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
          <h3 className="font-serif text-2xl leading-tight text-foreground">
            {category.title}
          </h3>
          <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">
            {category.teaser}
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
            Browse
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
}
