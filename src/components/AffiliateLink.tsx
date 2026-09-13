"use client";

import type { ReactNode } from "react";
import { trackAffiliateClick } from "@/lib/affiliate-track";

type AffiliateLinkProps = {
  href: string;
  productId?: string;
  productName?: string;
  cta?: string;
  trackingId?: string | null;
  className?: string;
  children: ReactNode;
};

/**
 * Thin wrapper: preserve exact href / target / rel, fire-and-forget tracking.
 * Never preventDefault for analytics.
 */
export function AffiliateLink({
  href,
  productId,
  productName,
  cta,
  trackingId,
  className,
  children,
}: AffiliateLinkProps) {
  function handleClick() {
    trackAffiliateClick({
      href,
      productId,
      productName,
      cta,
      trackingId,
      merchant: "amazon",
    });
  }

  return (
    <a
      href={href}
      rel="nofollow sponsored noopener"
      target="_blank"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
