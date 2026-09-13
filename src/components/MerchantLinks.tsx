import { AffiliateLink } from "@/components/AffiliateLink";
import { getMerchant, type MerchantId } from "@/data/merchants";
import type { MerchantOffer } from "@/data/featured-picks";

type MerchantLinksProps = {
  offers: MerchantOffer[];
  productId?: string;
  productName?: string;
};

function ctaSlug(label: string) {
  return label
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "")
    .slice(0, 80);
}

export function MerchantLinks({
  offers,
  productId,
  productName,
}: MerchantLinksProps) {
  const live = offers.filter((offer): offer is MerchantOffer & { url: string } =>
    Boolean(offer.url),
  );

  if (!live.length) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {live.map((offer) => {
        const merchant = getMerchant(offer.merchant as MerchantId);
        const label = offer.cta ?? merchant?.cta ?? "Buy";
        const isAmazon = offer.merchant === "amazon";

        if (isAmazon) {
          return (
            <AffiliateLink
              key={`${offer.merchant}-${offer.url}`}
              href={offer.url}
              productId={productId}
              productName={productName}
              cta={ctaSlug(label)}
              className="inline-flex min-h-11 items-center border border-border bg-foreground px-3 text-sm font-semibold text-background hover:bg-chaos"
            >
              {label}
            </AffiliateLink>
          );
        }

        return (
          <a
            key={`${offer.merchant}-${offer.url}`}
            href={offer.url}
            rel="nofollow sponsored noopener"
            target="_blank"
            className="inline-flex min-h-11 items-center border border-border bg-foreground px-3 text-sm font-semibold text-background hover:bg-chaos"
          >
            {label}
          </a>
        );
      })}
    </div>
  );
}
