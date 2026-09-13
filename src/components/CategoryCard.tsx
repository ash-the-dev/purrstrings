import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/data/categories";

type CategoryCardProps = {
  category: Category;
  compact?: boolean;
};

export function CategoryCard({ category, compact = false }: CategoryCardProps) {
  return (
    <article className="group h-full">
      <Link href={category.href} className="flex h-full flex-col">
        {!compact ? (
          <div className="relative aspect-[5/3] overflow-hidden bg-black/5">
            <Image
              src={category.image.src}
              alt={category.image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ) : null}
        <div className="flex flex-1 flex-col pt-4">
          <h3 className="font-serif text-2xl leading-tight">
            {category.title} <span aria-hidden="true">→</span>
          </h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
            {category.teaser}
          </p>
        </div>
      </Link>
    </article>
  );
}
