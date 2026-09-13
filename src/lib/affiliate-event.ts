export const AFFILIATE_EVENT_TYPES = ["affiliate_click"] as const;
export type AffiliateEventType = (typeof AFFILIATE_EVENT_TYPES)[number];

export const AFFILIATE_MERCHANTS = ["amazon"] as const;
export type AffiliateMerchant = (typeof AFFILIATE_MERCHANTS)[number];

export const AFFILIATE_EVENT_ALLOWED_KEYS = [
  "event_type",
  "product_id",
  "product_name",
  "merchant",
  "page_path",
  "cta",
  "tracking_id",
  "referrer",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "destination_domain",
] as const;

export type AffiliateEventPayload = {
  event_type: AffiliateEventType;
  product_id?: string | null;
  product_name?: string | null;
  merchant: AffiliateMerchant;
  page_path?: string | null;
  cta?: string | null;
  tracking_id?: string | null;
  referrer?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  destination_domain?: string | null;
};

export const MAX_AFFILIATE_EVENT_BODY_BYTES = 4_096;

const FIELD_LIMITS: Record<string, number> = {
  event_type: 64,
  product_id: 120,
  product_name: 200,
  merchant: 64,
  page_path: 300,
  cta: 80,
  tracking_id: 80,
  referrer: 500,
  utm_source: 120,
  utm_medium: 120,
  utm_campaign: 160,
  utm_content: 160,
  destination_domain: 120,
};

const AMAZON_DOMAIN_RE =
  /^(?:[a-z0-9-]+\.)*(?:amazon\.[a-z.]+|amzn\.to|a\.co)$/i;

export function isAllowedAmazonDomain(domain: string | null | undefined): boolean {
  if (!domain) return false;
  const host = domain.trim().toLowerCase().replace(/:\d+$/, "");
  return AMAZON_DOMAIN_RE.test(host);
}

export function destinationDomainFromHref(href: string): string | null {
  try {
    const host = new URL(href).hostname.toLowerCase();
    return isAllowedAmazonDomain(host) ? host : null;
  } catch {
    return null;
  }
}

/** Parse Associates tag= if present. amzn.to short links typically have none. */
export function trackingIdFromHref(href: string): string | null {
  try {
    const tag = new URL(href).searchParams.get("tag");
    if (!tag) return null;
    return normalizeOptionalString(tag, FIELD_LIMITS.tracking_id);
  } catch {
    return null;
  }
}

function normalizeOptionalString(
  value: unknown,
  maxLen: number,
): string | null {
  if (value == null) return null;
  if (typeof value !== "string") return null;
  const trimmed = value.trim().replace(/\s+/g, " ");
  if (!trimmed) return null;
  return trimmed.slice(0, maxLen);
}

export type AffiliateEventValidationResult =
  | { ok: true; data: AffiliateEventPayload }
  | { ok: false; error: string; status: number };

export function validateAffiliateEventPayload(
  raw: unknown,
): AffiliateEventValidationResult {
  if (raw == null || typeof raw !== "object" || Array.isArray(raw)) {
    return { ok: false, error: "Invalid payload", status: 400 };
  }

  const input = raw as Record<string, unknown>;
  const keys = Object.keys(input);

  for (const key of keys) {
    if (
      !(AFFILIATE_EVENT_ALLOWED_KEYS as readonly string[]).includes(key)
    ) {
      return { ok: false, error: "Unsupported field", status: 400 };
    }
  }

  const eventType = normalizeOptionalString(
    input.event_type ?? "affiliate_click",
    FIELD_LIMITS.event_type,
  );
  if (!eventType || !AFFILIATE_EVENT_TYPES.includes(eventType as AffiliateEventType)) {
    return { ok: false, error: "Unsupported event_type", status: 400 };
  }

  const merchant = normalizeOptionalString(
    input.merchant ?? "amazon",
    FIELD_LIMITS.merchant,
  );
  if (!merchant || !AFFILIATE_MERCHANTS.includes(merchant as AffiliateMerchant)) {
    return { ok: false, error: "Unsupported merchant", status: 400 };
  }

  const destinationDomain = normalizeOptionalString(
    input.destination_domain,
    FIELD_LIMITS.destination_domain,
  );

  if (destinationDomain && !isAllowedAmazonDomain(destinationDomain)) {
    return { ok: false, error: "Unsupported destination_domain", status: 400 };
  }

  const data: AffiliateEventPayload = {
    event_type: eventType as AffiliateEventType,
    merchant: merchant as AffiliateMerchant,
    product_id: normalizeOptionalString(input.product_id, FIELD_LIMITS.product_id),
    product_name: normalizeOptionalString(
      input.product_name,
      FIELD_LIMITS.product_name,
    ),
    page_path: normalizeOptionalString(input.page_path, FIELD_LIMITS.page_path),
    cta: normalizeOptionalString(input.cta, FIELD_LIMITS.cta),
    tracking_id: normalizeOptionalString(
      input.tracking_id,
      FIELD_LIMITS.tracking_id,
    ),
    referrer: normalizeOptionalString(input.referrer, FIELD_LIMITS.referrer),
    utm_source: normalizeOptionalString(input.utm_source, FIELD_LIMITS.utm_source),
    utm_medium: normalizeOptionalString(input.utm_medium, FIELD_LIMITS.utm_medium),
    utm_campaign: normalizeOptionalString(
      input.utm_campaign,
      FIELD_LIMITS.utm_campaign,
    ),
    utm_content: normalizeOptionalString(
      input.utm_content,
      FIELD_LIMITS.utm_content,
    ),
    destination_domain: destinationDomain,
  };

  return { ok: true, data };
}

/** Fields that must never appear on affiliate payloads. */
export const FORBIDDEN_CLIENT_FIELDS = [
  "ip",
  "ip_address",
  "email",
  "user_id",
  "fingerprint",
  "user_agent",
  "auth",
  "password",
] as const;
