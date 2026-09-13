import Image from "next/image";
import Link from "next/link";
import { MerchantLinks } from "@/components/MerchantLinks";
import { PersonalityBadge } from "@/components/PersonalityBadge";
import type { FeaturedPick } from "@/data/featured-picks";

type ProductPickCardProps = {
  pick: FeaturedPick;
};

export function ProductPickCard({ pick }: ProductPickCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <Link href={pick.href} className="relative block aspect-[4/3] overflow-hidden bg-black/5">
        <Image
          src={pick.image.src}
          alt={pick.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em]">
            <Link href={pick.categoryHref} className="border-b border-baby-blue pb-0.5 hover:text-foreground/60">
              {pick.category}
            </Link>
          </p>
          {pick.personalityLabels?.map((label) => (
            <PersonalityBadge key={label.label} label={label} />
          ))}
        </div>
        <h3 className="mt-3 font-serif text-2xl leading-snug sm:text-3xl">
          <Link href={pick.href} className="hover:text-foreground/60">
            {pick.headline}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {pick.summary}
        </p>
        {pick.merchants.find((offer) => offer.price) ? (
          <p className="mt-3 text-sm font-semibold tracking-wide">
            {pick.merchants.find((offer) => offer.price)?.price}
          </p>
        ) : null}
        <MerchantLinks offers={pick.merchants} />
        <Link href={pick.href} className="mt-5 inline-flex min-h-11 items-center text-sm font-bold">
          {pick.href.startsWith("/picks/") ? "See the pick" : "See Our Pick"}{" "}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
