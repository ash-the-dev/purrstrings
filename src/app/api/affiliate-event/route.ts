import { NextResponse } from "next/server";
import {
  MAX_AFFILIATE_EVENT_BODY_BYTES,
  validateAffiliateEventPayload,
} from "@/lib/affiliate-event";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json({ ok: false }, { status: 415 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_AFFILIATE_EVENT_BODY_BYTES) {
    return NextResponse.json({ ok: false }, { status: 413 });
  }

  let rawText: string;
  try {
    rawText = await request.text();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (rawText.length > MAX_AFFILIATE_EVENT_BODY_BYTES) {
    return NextResponse.json({ ok: false }, { status: 413 });
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawText) as unknown;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const validated = validateAffiliateEventPayload(parsed);
  if (!validated.ok) {
    return NextResponse.json({ ok: false }, { status: validated.status });
  }

  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("affiliate_events").insert({
      event_type: validated.data.event_type,
      product_id: validated.data.product_id,
      product_name: validated.data.product_name,
      merchant: validated.data.merchant,
      page_path: validated.data.page_path,
      cta: validated.data.cta,
      tracking_id: validated.data.tracking_id,
      referrer: validated.data.referrer,
      utm_source: validated.data.utm_source,
      utm_medium: validated.data.utm_medium,
      utm_campaign: validated.data.utm_campaign,
      utm_content: validated.data.utm_content,
      destination_domain: validated.data.destination_domain,
    });

    if (error) {
      console.error("[affiliate-event] insert failed");
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return new NextResponse(null, { status: 204 });
  } catch {
    console.error("[affiliate-event] server error");
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ ok: false }, { status: 405 });
}
