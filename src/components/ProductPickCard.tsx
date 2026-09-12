import Image from "next/image";
import Link from "next/link";
import type { FeaturedPick } from "@/data/featured-picks";

type ProductPickCardProps = {
  pick: FeaturedPick;
};

export function ProductPickCard({ pick }: ProductPickCardProps) {
  return (
    <article className="group flex h-full flex-col border border-border bg-surface">
      <Link href={pick.href} className="relative block aspect-[16/10] overflow-hidden bg-tan">
        <Image
          src={pick.image.src}
          alt={pick.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          <Link href={pick.categoryHref} className="hover:underline">
            {pick.category}
          </Link>
        </p>
        <h3 className="mt-2 font-serif text-xl leading-snug text-foreground sm:text-2xl">
          <Link href={pick.href} className="hover:text-accent">
            {pick.headline}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
          {pick.summary}
        </p>
        <Link
          href={pick.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
        >
          See Our Pick
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
