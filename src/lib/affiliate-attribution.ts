const STORAGE_KEY = "purrstrings_affiliate_attribution_v1";

export type AffiliateAttribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  referrer?: string;
};

function truncate(value: string, max: number) {
  return value.trim().slice(0, max);
}

/**
 * Capture inbound UTMs + original external referrer once per browser session.
 * Does not overwrite on later internal navigations.
 */
export function captureAffiliateAttributionOnce(): AffiliateAttribution | null {
  if (typeof window === "undefined") return null;

  try {
    const existing = sessionStorage.getItem(STORAGE_KEY);
    if (existing) {
      return JSON.parse(existing) as AffiliateAttribution;
    }

    const params = new URLSearchParams(window.location.search);
    const attribution: AffiliateAttribution = {};

    const utmSource = params.get("utm_source");
    const utmMedium = params.get("utm_medium");
    const utmCampaign = params.get("utm_campaign");
    const utmContent = params.get("utm_content");

    if (utmSource) attribution.utm_source = truncate(utmSource, 120);
    if (utmMedium) attribution.utm_medium = truncate(utmMedium, 120);
    if (utmCampaign) attribution.utm_campaign = truncate(utmCampaign, 160);
    if (utmContent) attribution.utm_content = truncate(utmContent, 160);

    const referrer = document.referrer?.trim();
    if (referrer) {
      try {
        const refHost = new URL(referrer).hostname;
        const selfHost = window.location.hostname;
        if (refHost && refHost !== selfHost) {
          attribution.referrer = truncate(referrer, 500);
        }
      } catch {
        // ignore bad referrer
      }
    }

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    return attribution;
  } catch {
    return null;
  }
}

export function readAffiliateAttribution(): AffiliateAttribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as AffiliateAttribution;
  } catch {
    return {};
  }
}
