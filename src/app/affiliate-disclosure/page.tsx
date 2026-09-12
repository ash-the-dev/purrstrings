import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "How Purrstrings may earn commissions from product links, and what that does and does not change.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalPage title="Affiliate Disclosure">
      <p>{siteConfig.affiliateDisclosure}</p>
      <h2>What that means</h2>
      <p>
        Some links on Purrstrings may be affiliate links. If you click and buy,
        we may receive a commission from the retailer or brand. You should not
        pay more because of that link.
      </p>
      <p>
        Expected partners over time include retailers and brands such as
        Amazon, Chewy, Petco, PetSmart, PrettyLitter, Litter-Robot / Whisker,
        Smalls, Tuft + Paw, Tractive, and other pet companies. This list is
        illustrative, not a live partnership roster.
      </p>
      <h2>Editorial independence</h2>
      <p>
        Commissions do not determine what we recommend. If we cannot stand
        behind a product, we will not dress it up as a pick. Placeholder
        product cards on the site are examples of layout, not paid placements.
      </p>
      <h2>Before launch</h2>
      <p>
        This page is starter language. Replace it with counsel-reviewed
        disclosure that matches the affiliate programs you actually join,
        including any program-specific wording those networks require.
      </p>
    </LegalPage>
  );
}
