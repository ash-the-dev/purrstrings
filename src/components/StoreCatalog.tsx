"use client";

import Link from "next/link";
import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductPickCard } from "@/components/ProductPickCard";
import type { FeaturedPick } from "@/data/featured-picks";
import {
  countPicksByShopGroup,
  filterPicksByShopGroup,
  shopGroups,
  sortPicksForCatalog,
  type ShopGroupId,
} from "@/data/shop-groups";

type StoreCatalogProps = {
  picks: FeaturedPick[];
};

function isShopGroupId(value: string | null): value is ShopGroupId {
  return shopGroups.some((group) => group.id === value);
}

export function StoreCatalog({ picks }: StoreCatalogProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const rawGroup = searchParams.get("group");
  const activeGroup: ShopGroupId = isShopGroupId(rawGroup) ? rawGroup : "all";

  const counts = useMemo(() => countPicksByShopGroup(picks), [picks]);
  const visible = useMemo(
    () => sortPicksForCatalog(filterPicksByShopGroup(picks, activeGroup)),
    [picks, activeGroup],
  );

  function setGroup(groupId: ShopGroupId) {
    const params = new URLSearchParams(searchParams.toString());
    if (groupId === "all") {
      params.delete("group");
    } else {
      params.set("group", groupId);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-black/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted">
            Store
          </p>
          <p className="mt-2 font-serif text-2xl text-foreground sm:text-3xl">
            {counts.all} products we&apos;ve actually used
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
            Filter by lane. Picks with house photos lead the grid; media-pending
            picks stay browseable and labeled.
          </p>
        </div>
        <p className="text-sm text-muted" aria-live="polite">
          Showing{" "}
          <span className="font-semibold text-foreground">{visible.length}</span>
          {activeGroup === "all"
            ? " picks"
            : ` in ${shopGroups.find((g) => g.id === activeGroup)?.label}`}
        </p>
      </div>

      <div
        className="-mx-5 mt-6 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        role="tablist"
        aria-label="Product categories"
      >
        {shopGroups.map((group) => {
          const selected = group.id === activeGroup;
          const count = counts[group.id];
          return (
            <button
              key={group.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setGroup(group.id)}
              className={`inline-flex shrink-0 items-center gap-2 border px-3.5 py-2.5 text-sm transition-colors ${
                selected
                  ? "border-foreground bg-foreground text-background"
                  : "border-black/15 bg-background text-foreground hover:border-foreground/40"
              }`}
            >
              <span className="font-medium">{group.label}</span>
              <span
                className={`text-xs tabular-nums ${
                  selected ? "text-background/70" : "text-muted"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-12 text-sm text-muted">
          Nothing in this lane yet.{" "}
          <button
            type="button"
            className="font-semibold text-foreground underline underline-offset-4"
            onClick={() => setGroup("all")}
          >
            Show all picks
          </button>
        </p>
      ) : (
        <div className="mt-10 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((pick) => (
            <ProductPickCard key={pick.slug} pick={pick} />
          ))}
        </div>
      )}

      <p className="mt-10 text-sm text-muted">
        Prefer a category landing page?{" "}
        <Link href="/cat-food" className="font-semibold text-foreground underline underline-offset-4">
          Food
        </Link>
        {", "}
        <Link href="/cat-litter" className="font-semibold text-foreground underline underline-offset-4">
          Litter
        </Link>
        {", "}
        <Link href="/cat-toys" className="font-semibold text-foreground underline underline-offset-4">
          Toys
        </Link>
        {", "}
        <Link href="/cat-furniture" className="font-semibold text-foreground underline underline-offset-4">
          Furniture
        </Link>
        {", or "}
        <Link href="/cat-tech" className="font-semibold text-foreground underline underline-offset-4">
          Cat Tech
        </Link>
        .
      </p>
    </div>
  );
}
