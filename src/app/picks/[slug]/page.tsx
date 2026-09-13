import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MerchantLinks } from "@/components/MerchantLinks";
import { PersonalityBadge } from "@/components/PersonalityBadge";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductPickCard } from "@/components/ProductPickCard";
import { articles } from "@/data/articles";
import { featuredPicks, getPickBySlug } from "@/data/featured-picks";

type PickPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featuredPicks
    .filter((pick) => pick.href.startsWith("/picks/"))
    .map((pick) => ({ slug: pick.slug }));
}

export async function generateMetadata({
  params,
}: PickPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pick = getPickBySlug(slug);

  if (!pick || !pick.href.startsWith("/picks/")) {
    return { title: "Pick" };
  }

  return {
    title: pick.headline,
    description: pick.summary,
    alternates: { canonical: pick.href },
    openGraph: {
      title: pick.headline,
      description: pick.summary,
      images: [{ url: pick.image.src, alt: pick.image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: pick.headline,
      description: pick.summary,
    },
  };
}

export default async function PickPage({ params }: PickPageProps) {
  const { slug } = await params;
  const pick = getPickBySlug(slug);

  if (!pick || !pick.href.startsWith("/picks/")) {
    notFound();
  }

  const gallery = pick.gallery?.length ? pick.gallery : [pick.image];
  const price = pick.merchants.find((offer) => offer.price)?.price;
  const more = featuredPicks
    .filter((item) => item.slug !== pick.slug && item.merchants.some((o) => o.url))
    .slice(0, 2);
  const relatedGuides = articles
    .filter(
      (article) =>
        !article.draft && article.relatedProductSlugs?.includes(pick.slug),
    )
    .slice(0, 3);

  return (
    <article className="pb-16 lg:pb-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:py-16">
        <ProductGallery images={gallery} videos={pick.videos} />

        <div>
          <Breadcrumbs
            items={[
              { name: pick.category, href: pick.categoryHref },
              { name: pick.headline, href: pick.href },
            ]}
          />
          <div className="mt-5 flex flex-wrap items-center gap-2">
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
          <h1 className="mt-3 font-serif text-4xl leading-tight text-balance sm:text-5xl">
            {pick.headline}
          </h1>
          <p className="mt-3 text-sm font-medium text-foreground/80">
            Personally used and recommended.
          </p>
          {price ? (
            <p className="mt-4 text-lg font-semibold tracking-wide">{price}</p>
          ) : null}
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {pick.summary}
          </p>
          <MerchantLinks offers={pick.merchants} />
          <p className="mt-6 text-sm text-muted">
            Want the fuller decision path?{" "}
            <Link href="/guides" className="font-semibold text-foreground underline underline-offset-4">
              Browse guides
            </Link>
            {" · "}
            <Link href={pick.categoryHref} className="font-semibold text-foreground underline underline-offset-4">
              More in {pick.category}
            </Link>
          </p>
          <AffiliateDisclosure className="mt-8" />
        </div>
      </div>

      {relatedGuides.length > 0 ? (
        <section className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl">Related guides</h2>
          <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {relatedGuides.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      ) : null}

      {more.length > 0 ? (
        <section className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl">Also in the house</h2>
          <div className="mt-8 grid gap-x-10 gap-y-16 sm:grid-cols-2">
            {more.map((item) => (
              <ProductPickCard key={item.slug} pick={item} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
