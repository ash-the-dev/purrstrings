-- Affiliate click events (writes only via server API + SUPABASE_SECRET_KEY)
-- RLS enabled with NO anon/authenticated policies.

create table if not exists public.affiliate_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  event_type text not null default 'affiliate_click',
  product_id text null,
  product_name text null,
  merchant text not null default 'amazon',
  page_path text null,
  cta text null,
  tracking_id text null,
  referrer text null,
  utm_source text null,
  utm_medium text null,
  utm_campaign text null,
  utm_content text null,
  destination_domain text null
);

create index if not exists affiliate_events_created_at_idx
  on public.affiliate_events (created_at desc);

create index if not exists affiliate_events_product_id_idx
  on public.affiliate_events (product_id);

create index if not exists affiliate_events_utm_source_idx
  on public.affiliate_events (utm_source);

alter table public.affiliate_events enable row level security;

-- Intentionally no policies for anon/authenticated.
-- Inserts use the service/secret key from POST /api/affiliate-event only.

revoke all on table public.affiliate_events from anon, authenticated;
grant select, insert, update, delete on table public.affiliate_events to service_role;
