"use client";

import { useEffect } from "react";
import { captureAffiliateAttributionOnce } from "@/lib/affiliate-attribution";

/** Captures inbound UTMs / external referrer once per browser session. */
export function AffiliateAttributionCapture() {
  useEffect(() => {
    captureAffiliateAttributionOnce();
  }, []);

  return null;
}
