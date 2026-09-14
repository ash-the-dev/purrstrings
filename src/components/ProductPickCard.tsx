import Image from "next/image";
import Link from "next/link";
import { ExperienceBadge } from "@/components/ExperienceBadge";
import { MediaPendingPanel } from "@/components/MediaPendingPanel";
import { MerchantLinks } from "@/components/MerchantLinks";
import { PersonalityBadge } from "@/components/PersonalityBadge";
import type { FeaturedPick } from "@/data/featured-picks";

type ProductPickCardProps = {
  pick: FeaturedPick;
};

export function ProductPickCard({ pick }: ProductPickCardProps) {
  const mediaPending = Boolean(pick.needsMedia);
  const hasRealImage = !pick.image.src.startsWith("/brand/");
  const showPendingPanel = mediaPending && !hasRealImage;

  return (
    <article className="group flex h-full flex-col">
      <Link
        href={pick.href}
        className="relative block aspect-[4/3] overflow-hidden bg-black/5"
        aria-label={
          showPendingPanel
            ? `${pick.headline} — product photo pending`
            : pick.headline
        }
      >
        {showPendingPanel ? (
          <MediaPendingPanel />
        ) : (
          <>
            <Image
              src={pick.image.src}
              alt={pick.image.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
            {mediaPending ? (
              <span className="absolute inset-x-0 bottom-0 bg-foreground/85 px-3 py-1.5 text-center text-[0.62rem] font-bold uppercase tracking-[0.14em] text-background">
                More house photos coming
              </span>
            ) : null}
          </>
        )}
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em]">
            <Link
              href={pick.categoryHref}
              className="border-b border-baby-blue pb-0.5 hover:text-foreground/60"
            >
              {pick.category}
            </Link>
          </p>
          {pick.personalityLabels?.map((label) => (
            <PersonalityBadge key={label.label} label={label} />
          ))}
        </div>
        {pick.experience ? (
          <div className="mt-3">
            <ExperienceBadge experience={pick.experience} />
          </div>
        ) : null}
        {showPendingPanel ? (
          <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted">
            Product photo pending
          </p>
        ) : null}
        <h3 className="mt-3 font-serif text-2xl leading-snug sm:text-3xl">
          <Link href={pick.href} className="hover:text-foreground/60">
            {pick.headline}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {pick.summary}
        </p>
        <MerchantLinks
          offers={pick.merchants}
          productId={pick.slug}
          productName={pick.headline}
        />
        <Link
          href={pick.href}
          className="mt-5 inline-flex min-h-11 items-center text-sm font-bold"
        >
          {pick.href.startsWith("/picks/") ? "Why we like it" : "Read the guide"}{" "}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
