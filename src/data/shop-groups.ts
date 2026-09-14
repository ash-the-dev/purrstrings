import type { FeaturedPick } from "@/data/featured-picks";

export type ShopGroupId =
  | "all"
  | "food-treats"
  | "litter"
  | "toys"
  | "furniture"
  | "fountains-feeding"
  | "cat-tech";

export type ShopGroup = {
  id: ShopGroupId;
  label: string;
};

/** Reader-facing Store groups — not a 1:1 map of every internal category href. */
export const shopGroups: ShopGroup[] = [
  { id: "all", label: "All picks" },
  { id: "food-treats", label: "Food & Treats" },
  { id: "litter", label: "Litter & Litter Boxes" },
  { id: "toys", label: "Toys & Enrichment" },
  { id: "furniture", label: "Furniture & Scratchers" },
  { id: "fountains-feeding", label: "Fountains & Feeding" },
  { id: "cat-tech", label: "Cat Tech" },
];

/** Shop by use: fountains + automatic feeders, even if internal href is /cat-tech. */
const FOUNTAINS_FEEDING_SLUGS = new Set([
  "wireless-cat-fountain",
  "catit-pixi-fountain",
  "petlibro-granary-feeder",
]);

/**
 * Enrichment gear that must not land in Cat Tech just because it is mechanical.
 * Cat wheel / treadmill is exercise play, not cameras/trackers.
 */
const TOYS_ENRICHMENT_SLUGS = new Set(["kitty-treadmill"]);

export function shopGroupIdForPick(pick: FeaturedPick): Exclude<ShopGroupId, "all"> {
  if (FOUNTAINS_FEEDING_SLUGS.has(pick.slug)) {
    return "fountains-feeding";
  }
  if (TOYS_ENRICHMENT_SLUGS.has(pick.slug)) {
    return "toys";
  }

  switch (pick.categoryHref) {
    case "/cat-food":
      return "food-treats";
    case "/cat-litter":
    case "/automatic-litter-boxes":
      return "litter";
    case "/cat-toys":
      return "toys";
    case "/cat-furniture":
      return "furniture";
    case "/cat-tech":
      return "cat-tech";
    default:
      return "cat-tech";
  }
}

export function filterPicksByShopGroup(
  picks: FeaturedPick[],
  groupId: ShopGroupId,
): FeaturedPick[] {
  if (groupId === "all") {
    return picks;
  }
  return picks.filter((pick) => shopGroupIdForPick(pick) === groupId);
}

/** Owner / real media first within a list; media-pending stays browseable but lower. */
export function sortPicksForCatalog(picks: FeaturedPick[]): FeaturedPick[] {
  return [...picks].sort((a, b) => {
    const aHasReal = !a.image.src.startsWith("/brand/");
    const bHasReal = !b.image.src.startsWith("/brand/");
    if (aHasReal !== bHasReal) {
      return aHasReal ? -1 : 1;
    }
    const aPending = Boolean(a.needsMedia);
    const bPending = Boolean(b.needsMedia);
    if (aPending === bPending) {
      return 0;
    }
    return aPending ? 1 : -1;
  });
}

export function countPicksByShopGroup(picks: FeaturedPick[]): Record<ShopGroupId, number> {
  const counts = Object.fromEntries(
    shopGroups.map((group) => [group.id, 0]),
  ) as Record<ShopGroupId, number>;

  counts.all = picks.length;
  for (const pick of picks) {
    counts[shopGroupIdForPick(pick)] += 1;
  }
  return counts;
}
