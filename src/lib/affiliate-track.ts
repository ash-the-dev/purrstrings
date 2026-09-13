import {
  destinationDomainFromHref,
  trackingIdFromHref,
  type AffiliateEventPayload,
} from "@/lib/affiliate-event";
import { readAffiliateAttribution } from "@/lib/affiliate-attribution";

export type TrackAffiliateClickInput = {
  href: string;
  productId?: string | null;
  productName?: string | null;
  merchant?: "amazon";
  pagePath?: string | null;
  cta?: string | null;
  trackingId?: string | null;
};

/**
 * Fire-and-forget affiliate click tracking.
 * Never blocks navigation. Failures are silent.
 */
export function trackAffiliateClick(input: TrackAffiliateClickInput): void {
  if (typeof window === "undefined") return;

  try {
    const attribution = readAffiliateAttribution();
    const destinationDomain = destinationDomainFromHref(input.href);
    if (!destinationDomain) return;

    const payload: AffiliateEventPayload = {
      event_type: "affiliate_click",
      merchant: input.merchant ?? "amazon",
      product_id: input.productId ?? null,
      product_name: input.productName ?? null,
      page_path: input.pagePath ?? window.location.pathname,
      cta: input.cta ?? null,
      tracking_id:
        input.trackingId ?? trackingIdFromHref(input.href) ?? null,
      referrer: attribution.referrer ?? null,
      utm_source: attribution.utm_source ?? null,
      utm_medium: attribution.utm_medium ?? null,
      utm_campaign: attribution.utm_campaign ?? null,
      utm_content: attribution.utm_content ?? null,
      destination_domain: destinationDomain,
    };

    const body = JSON.stringify(payload);
    const url = "/api/affiliate-event";

    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      const blob = new Blob([body], { type: "application/json" });
      const queued = navigator.sendBeacon(url, blob);
      if (queued) return;
    }

    void fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
      credentials: "same-origin",
    }).catch(() => {
      // intentional no-op
    });
  } catch {
    // intentional no-op
  }
}
