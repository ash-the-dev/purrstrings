import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import {
  FORBIDDEN_CLIENT_FIELDS,
  destinationDomainFromHref,
  trackingIdFromHref,
  validateAffiliateEventPayload,
} from "@/lib/affiliate-event";
import {
  captureAffiliateAttributionOnce,
  readAffiliateAttribution,
} from "@/lib/affiliate-attribution";
import { trackAffiliateClick } from "@/lib/affiliate-track";
import { featuredPicks } from "@/data/featured-picks";

describe("validateAffiliateEventPayload", () => {
  it("accepts a valid affiliate_click", () => {
    const result = validateAffiliateEventPayload({
      event_type: "affiliate_click",
      product_id: "delectables-squeeze-up",
      product_name: "Delectables Squeeze Up",
      merchant: "amazon",
      page_path: "/best-products",
      cta: "see_current_price",
      destination_domain: "amzn.to",
      utm_source: "pinterest",
    });

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.product_id).toBe("delectables-squeeze-up");
      expect(result.data.merchant).toBe("amazon");
      expect(result.data.destination_domain).toBe("amzn.to");
    }
  });

  it("allows missing optional fields", () => {
    const result = validateAffiliateEventPayload({
      event_type: "affiliate_click",
      merchant: "amazon",
      destination_domain: "amzn.to",
    });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.product_id).toBeNull();
      expect(result.data.tracking_id).toBeNull();
    }
  });

  it("rejects unsupported event_type", () => {
    const result = validateAffiliateEventPayload({
      event_type: "purchase",
      merchant: "amazon",
      destination_domain: "amzn.to",
    });
    expect(result.ok).toBe(false);
  });

  it("rejects unsupported merchant", () => {
    const result = validateAffiliateEventPayload({
      event_type: "affiliate_click",
      merchant: "ebay",
      destination_domain: "amzn.to",
    });
    expect(result.ok).toBe(false);
  });

  it("rejects non-amazon destination_domain", () => {
    const result = validateAffiliateEventPayload({
      event_type: "affiliate_click",
      merchant: "amazon",
      destination_domain: "evil.example",
    });
    expect(result.ok).toBe(false);
  });

  it("rejects unknown fields", () => {
    const result = validateAffiliateEventPayload({
      event_type: "affiliate_click",
      merchant: "amazon",
      destination_domain: "amzn.to",
      ip_address: "1.2.3.4",
    });
    expect(result.ok).toBe(false);
  });

  it("truncates oversized strings safely", () => {
    const result = validateAffiliateEventPayload({
      event_type: "affiliate_click",
      merchant: "amazon",
      destination_domain: "amzn.to",
      product_name: "x".repeat(500),
    });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.product_name?.length).toBe(200);
    }
  });

  it("rejects forbidden identifying keys if supplied", () => {
    for (const field of FORBIDDEN_CLIENT_FIELDS) {
      const result = validateAffiliateEventPayload({
        event_type: "affiliate_click",
        merchant: "amazon",
        destination_domain: "amzn.to",
        [field]: "nope",
      });
      expect(result.ok).toBe(false);
    }
  });
});

describe("Amazon href helpers", () => {
  it("derives amzn.to destination domain without expanding", () => {
    expect(destinationDomainFromHref("https://amzn.to/4cKgIPf")).toBe("amzn.to");
  });

  it("leaves tracking_id null for short links", () => {
    expect(trackingIdFromHref("https://amzn.to/4cKgIPf")).toBeNull();
  });

  it("parses tag= when present without rewriting href", () => {
    const href = "https://www.amazon.com/dp/B00000?tag=purrstrings-20";
    expect(trackingIdFromHref(href)).toBe("purrstrings-20");
    expect(href).toContain("tag=purrstrings-20");
  });
});

describe("featured Amazon URLs unchanged", () => {
  const expected = [
    "https://amzn.to/4cHkJ6Y",
    "https://amzn.to/4Ac2uk9",
    "https://amzn.to/4r6eQWS",
    "https://amzn.to/4A9Vxjp",
    "https://amzn.to/4h1WEJv",
    "https://amzn.to/4h5tI36",
    "https://amzn.to/4cDOyW3",
    "https://amzn.to/3T5rqZY",
    "https://amzn.to/4horNYL",
    "https://amzn.to/4yr2ivy",
    "https://amzn.to/4hlpcPn",
    "https://amzn.to/46WEa8o",
    "https://amzn.to/4yUVkj1",
    "https://amzn.to/4xRbkCa",
    "https://amzn.to/3URkT5F",
    "https://amzn.to/4A789YI",
    "https://amzn.to/4AbFLEL",
    "https://amzn.to/46houwm",
    "https://amzn.to/4j1sjx6",
    "https://amzn.to/4cGizV8",
    "https://amzn.to/3SZpbr8",
    "https://amzn.to/3T5sCwq",
    "https://amzn.to/3UMUoyh",
    "https://amzn.to/3UGiUkH",
    "https://amzn.to/4irAz9s",
    "https://amzn.to/46ZAq60",
    "https://amzn.to/4h5v65O",
    "https://amzn.to/3UTrkFg",
    "https://amzn.to/4cKgIPf",
  ];

  it("keeps all 29 amzn.to URLs byte-identical", () => {
    const urls = featuredPicks.flatMap((pick) =>
      pick.merchants
        .filter((m) => m.merchant === "amazon" && m.url)
        .map((m) => m.url as string),
    );
    expect(urls).toEqual(expected);
    expect(urls).toHaveLength(29);
  });
});

describe("attribution session", () => {
  it("persists UTMs once and does not overwrite", () => {
    const store = new Map<string, string>();
    vi.stubGlobal("window", {
      location: {
        search: "?utm_source=pinterest&utm_medium=social&utm_campaign=pin-1&utm_content=orange",
        hostname: "www.purrstrings.com",
        pathname: "/",
      },
    });
    vi.stubGlobal("document", { referrer: "https://www.pinterest.com/pin/1" });
    vi.stubGlobal("sessionStorage", {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => {
        store.set(key, value);
      },
    });

    const first = captureAffiliateAttributionOnce();
    expect(first?.utm_source).toBe("pinterest");
    expect(first?.referrer).toContain("pinterest.com");

    vi.stubGlobal("window", {
      location: {
        search: "?utm_source=other",
        hostname: "www.purrstrings.com",
        pathname: "/best-products",
      },
    });

    const second = captureAffiliateAttributionOnce();
    expect(second?.utm_source).toBe("pinterest");
    expect(readAffiliateAttribution().utm_campaign).toBe("pin-1");

    vi.unstubAllGlobals();
  });
});

describe("trackAffiliateClick", () => {
  it("posts to our API and does not throw when fetch fails", async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error("network down"));
    vi.stubGlobal("fetch", fetchMock);
    vi.stubGlobal("navigator", {});
    vi.stubGlobal("window", {
      location: { pathname: "/picks/delectables-squeeze-up" },
    });
    vi.stubGlobal("sessionStorage", {
      getItem: () =>
        JSON.stringify({
          utm_source: "pinterest",
          referrer: "https://www.pinterest.com/",
        }),
      setItem: () => undefined,
    });

    expect(() =>
      trackAffiliateClick({
        href: "https://amzn.to/4cKgIPf",
        productId: "delectables-squeeze-up",
        productName: "Delectables Squeeze Up",
        cta: "see_current_price",
      }),
    ).not.toThrow();

    await Promise.resolve();
    expect(fetchMock).toHaveBeenCalled();
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("/api/affiliate-event");
    const body = JSON.parse(String(init.body)) as Record<string, unknown>;
    expect(body.destination_domain).toBe("amzn.to");
    expect(body.utm_source).toBe("pinterest");
    for (const field of FORBIDDEN_CLIENT_FIELDS) {
      expect(body).not.toHaveProperty(field);
    }

    vi.unstubAllGlobals();
  });
});

describe("secret key containment", () => {
  it("does not reference SUPABASE_SECRET_KEY in client modules", () => {
    const clientFiles = [
      "src/lib/affiliate-track.ts",
      "src/lib/affiliate-attribution.ts",
      "src/components/AffiliateLink.tsx",
      "src/components/AffiliateAttributionCapture.tsx",
      "src/components/MerchantLinks.tsx",
    ];

    for (const relative of clientFiles) {
      const source = readFileSync(path.join(process.cwd(), relative), "utf8");
      expect(source).not.toMatch(/SUPABASE_SECRET_KEY/);
      expect(source).not.toMatch(/getSupabaseServerClient/);
      expect(source).not.toMatch(/@\/lib\/supabase\/server/);
    }
  });

  it("keeps secret usage on the server path only", () => {
    const server = readFileSync(
      path.join(process.cwd(), "src/lib/supabase/server.ts"),
      "utf8",
    );
    expect(server).toMatch(/import "server-only"/);
    expect(server).toMatch(/SUPABASE_SECRET_KEY/);

    const walk = (dir: string): string[] => {
      const entries = readdirSync(dir, { withFileTypes: true });
      return entries.flatMap((entry) => {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) return walk(full);
        if (/\.(ts|tsx)$/.test(entry.name)) return [full];
        return [];
      });
    };

    const offenders = walk(path.join(process.cwd(), "src")).filter((file) => {
      if (file.endsWith(`${path.sep}supabase${path.sep}server.ts`)) return false;
      if (file.includes(`${path.sep}api${path.sep}affiliate-event${path.sep}`)) {
        return false;
      }
      if (file.endsWith(".test.ts") || file.endsWith(".test.tsx")) return false;
      const source = readFileSync(file, "utf8");
      return source.includes("SUPABASE_SECRET_KEY");
    });

    expect(offenders).toEqual([]);
  });
});
