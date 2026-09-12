import { unsplashPhoto, type EditorialImage } from "@/lib/images";

export type FeaturedPick = {
  slug: string;
  category: string;
  categoryHref: string;
  headline: string;
  summary: string;
  href: string;
  image: EditorialImage;
};

export const featuredPicks: FeaturedPick[] = [
  {
    slug: "best-automatic-litter-box",
    category: "Litter",
    categoryHref: "/litter",
    headline: "Best Automatic Litter Box",
    summary:
      "A buying guide for the scoop-averse, with the tradeoffs these machines still will not advertise.",
    href: "/guides/best-automatic-litter-boxes",
    image: {
      src: unsplashPhoto("1472491235688-bdc81a63246e", 1200),
      alt: "Placeholder editorial photo of a cat portrait",
    },
  },
  {
    slug: "best-cat-water-fountain",
    category: "Cat Tech",
    categoryHref: "/cat-tech",
    headline: "Best Cat Water Fountain",
    summary:
      "What to prioritize before you buy another appliance your cat may refuse on principle.",
    href: "/guides/what-to-look-for-in-a-cat-water-fountain",
    image: {
      src: unsplashPhoto("1548839140-29a749e1cf4d", 1200),
      alt: "Placeholder editorial photo of water, standing in for a fountain",
    },
  },
  {
    slug: "best-cat-tree-for-normal-homes",
    category: "Furniture",
    categoryHref: "/cat-furniture",
    headline: "Best Cat Tree for Normal-Looking Homes",
    summary:
      "Vertical real estate that does not look like it escaped from a 2004 pet catalog.",
    href: "/guides/cat-trees-that-dont-look-like-nightmares",
    image: {
      src: unsplashPhoto("1586023492125-27b2c045efd7", 1200),
      alt: "Placeholder editorial photo of a designed living space",
    },
  },
  {
    slug: "best-gps-tracker-for-cats",
    category: "Cat Tech",
    categoryHref: "/cat-tech",
    headline: "Best GPS Tracker for Cats",
    summary:
      "How to think about collars, batteries, and whether your cat even needs one.",
    href: "/guides/should-your-cat-wear-a-gps-tracker",
    image: {
      src: unsplashPhoto("1606214174585-fe31582dc6ee", 1200),
      alt: "Placeholder editorial photo of a white cat in profile",
    },
  },
];
