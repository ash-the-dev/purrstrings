import { unsplashPhoto, type EditorialImage } from "@/lib/images";

export type Category = {
  slug: string;
  href: string;
  title: string;
  navLabel: string;
  teaser: string;
  description: string;
  image: EditorialImage;
};

export const categories: Category[] = [
  {
    slug: "litter",
    href: "/litter",
    title: "Litter & Litter Boxes",
    navLabel: "Litter",
    teaser: "From $8 litter to robots that cost more than your first car.",
    description:
      "Guides to clumping clay, crystal, plant-based, and the expensive boxes that promise to end scooping forever. We sort the useful from the overengineered.",
    image: {
      src: unsplashPhoto("1495360010541-f48722b34f7d", 1200),
      alt: "A tabby cat sitting on white stairs, editorial placeholder image",
    },
  },
  {
    slug: "cat-food",
    href: "/cat-food",
    title: "Food & Treats",
    navLabel: "Cat Food",
    teaser: "What’s actually worth putting in the bowl.",
    description:
      "Wet, dry, fresh, freeze-dried, and the treats your cat will ignore after day three. Ingredient lists, feeding questions, and fewer marketing adjectives.",
    image: {
      src: unsplashPhoto("1518791841217-8f162f1e1131", 1200),
      alt: "A tabby cat lying on a sofa, editorial placeholder image",
    },
  },
  {
    slug: "cat-furniture",
    href: "/cat-furniture",
    title: "Cat Furniture",
    navLabel: "Cat Furniture",
    teaser: "Cat trees that don’t destroy your living room aesthetic.",
    description:
      "Trees, shelves, beds, and condos that can live in a real apartment. We care about stability, materials, and whether it looks like a carpeted accident.",
    image: {
      src: unsplashPhoto("1586023492125-27b2c045efd7", 1200),
      alt: "A calm, designed living room used as an editorial furniture placeholder",
    },
  },
  {
    slug: "cat-tech",
    href: "/cat-tech",
    title: "Cat Tech",
    navLabel: "Cat Tech",
    teaser: "Feeders, fountains, trackers, cameras and unnecessary-but-amazing gadgets.",
    description:
      "Automatic feeders, cameras, GPS collars, and water fountains that cost more than they should. What is worth the plug, and what is just another app.",
    image: {
      src: unsplashPhoto("1514888286974-6c03e2ca1dba", 1200),
      alt: "A tuxedo cat against a green backdrop, editorial placeholder image",
    },
  },
  {
    slug: "toys",
    href: "/toys",
    title: "Toys & Enrichment",
    navLabel: "Toys",
    teaser: "Because the cardboard box can’t win every time.",
    description:
      "Wands, puzzles, tracks, and the occasional laser that makes you question your life choices. Enrichment that is actually used, not just photographed.",
    image: {
      src: unsplashPhoto("1526336024174-e58f5cdd8e13", 1200),
      alt: "A long-haired cat with a butterfly on its nose, editorial placeholder image",
    },
  },
  {
    slug: "essentials",
    href: "/essentials",
    title: "Cat Parent Essentials",
    navLabel: "Essentials",
    teaser: "The stuff nobody tells you you’ll end up buying.",
    description:
      "Carriers, nail gear, cleanup, first-week supplies, and the unglamorous items that make living with a cat less chaotic. The list you wish someone handed you.",
    image: {
      src: unsplashPhoto("1548802673-380ab8ebc7b7", 1200),
      alt: "An orange cat asleep in bed, editorial placeholder image",
    },
  },
];

export const homepageCategories = categories;

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryByHref(href: string) {
  return categories.find((category) => category.href === href);
}
