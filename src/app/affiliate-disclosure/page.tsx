import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "How Purrstrings may earn commissions from product links — and why that never buys a recommendation.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalPage title="Affiliate Disclosure">
      <p>{siteConfig.affiliateDisclosure}</p>
      <h2>What that means</h2>
      <p>
        Some links on Purrstrings are affiliate links. If you click through and
        make a qualifying purchase, Purrstrings may earn a commission from the
        retailer or brand. You should not pay more because you used our link.
      </p>
      <p>
        Partners may include Amazon and other pet retailers or brands over time.
        Seeing a store name here does not mean every link is live with every
        partner on every page.
      </p>
      <h2>Editorial independence</h2>
      <p>
        Affiliate relationships do not determine whether a product is
        recommended. Inclusion is based on the experience and judgment described
        in{" "}
        <Link href="/how-we-pick">How we pick</Link>
        — personal use, client-home exposure, and editorial evaluation. If we
        cannot stand behind something, it does not get dressed up as a favorite.
      </p>
      <p>
        Opinions on Purrstrings are independent. Commissions never purchase a
        glowing write-up, a higher placement, or a fake “tested” badge.
      </p>
      <h2>More context</h2>
      <p>
        Read more about who writes this site on{" "}
        <Link href="/about">About</Link>, or browse{" "}
        <Link href="/best-products">Best products</Link>.
      </p>
    </LegalPage>
  );
}
