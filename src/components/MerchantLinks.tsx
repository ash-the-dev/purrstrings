import { getMerchant, type MerchantId } from "@/data/merchants";
import type { MerchantOffer } from "@/data/featured-picks";

type MerchantLinksProps = {
  offers: MerchantOffer[];
};

export function MerchantLinks({ offers }: MerchantLinksProps) {
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
        return (
          <a
            key={`${offer.merchant}-${offer.url}`}
            href={offer.url}
            rel="nofollow sponsored noopener"
            target="_blank"
            className="inline-flex min-h-11 items-center border border-border bg-foreground px-3 text-sm font-semibold text-background hover:bg-chaos"
          >
            {offer.cta ?? merchant?.cta ?? "Buy"}
          </a>
        );
      })}
    </div>
  );
}
