import { unsplashPhoto, type EditorialImage } from "@/lib/images";

export type CategoryTone = "paper" | "pink" | "blue";

export type CategoryFaq = {
  question: string;
  answer: string;
};

export type Category = {
  slug: string;
  href: string;
  title: string;
  navLabel: string;
  teaser: string;
  description: string;
  image: EditorialImage;
  indexable: boolean;
  showInNav?: boolean;
  showOnHomepage?: boolean;
  showInFooter?: boolean;
  tone: CategoryTone;
  parentSlug?: string;
  relatedSlugs: string[];
  articleSlugs?: string[];
  faqs?: CategoryFaq[];
};

export const categories: Category[] = [
  {
    slug: "cat-toys",
    href: "/cat-toys",
    title: "Cat Toys",
    navLabel: "Toys",
    teaser: "Because the cardboard box can’t win every time.",
    description:
      "Wands, puzzles, tracks, lasers, and the toys that actually get used — plus a door into enrichment and the guides we already publish.",
    image: {
      src: unsplashPhoto("1526336024174-e58f5cdd8e13", 1200),
      alt: "A long-haired cat with a butterfly on its nose",
    },
    indexable: false,
    showInNav: true,
    showOnHomepage: true,
    showInFooter: true,
    tone: "pink",
    relatedSlugs: ["interactive-cat-toys", "funny-cat-toys", "cat-enrichment", "guides"],
  },
  {
    slug: "interactive-cat-toys",
    href: "/interactive-cat-toys",
    title: "Interactive Cat Toys",
    navLabel: "Interactive",
    teaser: "Toys that require a human, a battery, or both.",
    description:
      "Wands, motion toys, and anything that makes a cat sprint sideways — interactive picks as they earn a place on the site.",
    image: {
      src: unsplashPhoto("1592194996308-7b43878e84a6", 1200),
      alt: "A fluffy cat looking toward the camera",
    },
    indexable: false,
    tone: "blue",
    parentSlug: "cat-toys",
    relatedSlugs: ["cat-toys", "funny-cat-toys", "cat-enrichment"],
  },
  {
    slug: "funny-cat-toys",
    href: "/funny-cat-toys",
    title: "Funny Cat Toys",
    navLabel: "Funny toys",
    teaser: "Ridiculous on purpose. Useful if they get used.",
    description:
      "The weird ones: joke gifts, ridiculous toys, and products that exist because someone on the internet dared someone else.",
    image: {
      src: unsplashPhoto("1561948955-570b270e7c36", 1200),
      alt: "A wide-eyed white cat",
    },
    indexable: false,
    tone: "pink",
    parentSlug: "cat-toys",
    relatedSlugs: ["cat-toys", "interactive-cat-toys", "cat-gifts"],
  },
  {
    slug: "cat-enrichment",
    href: "/cat-enrichment",
    title: "Cat Enrichment",
    navLabel: "Enrichment",
    teaser: "More than a toy dump. Actual things to do.",
    description:
      "Puzzles, foraging, window time, and the unglamorous work of keeping an indoor cat from losing their mind.",
    image: {
      src: unsplashPhoto("1574158622682-e40e69881006", 1200),
      alt: "A tabby cat against a blue sky",
    },
    indexable: false,
    showOnHomepage: true,
    showInFooter: true,
    tone: "blue",
    relatedSlugs: ["cat-toys", "interactive-cat-toys", "cat-trees"],
  },
  {
    slug: "cat-litter",
    href: "/cat-litter",
    title: "Litter & Litter Boxes",
    navLabel: "Litter",
    teaser: "From $8 litter to robots that cost more than your first car.",
    description:
      "Clay, crystal, plant-based, and the expensive boxes that promise to end scooping. We sort the useful from the overengineered.",
    image: {
      src: unsplashPhoto("1495360010541-f48722b34f7d", 1200),
      alt: "A tabby cat sitting on white stairs",
    },
    indexable: true,
    showInNav: true,
    showOnHomepage: true,
    showInFooter: true,
    tone: "blue",
    relatedSlugs: ["automatic-litter-boxes", "cat-tech", "guides"],
    faqs: [
      {
        question: "Do you rank litter boxes with star scores?",
        answer:
          "No. When a guide is published, it will talk through tradeoffs in plain language. We do not invent ratings to look finished.",
      },
      {
        question: "Will this cover automatic boxes and regular litter?",
        answer:
          "Yes. The litter desk covers everyday litter and boxes, and there’s a dedicated guide for automatic litter boxes when you want the deeper tradeoffs.",
      },
    ],
  },
  {
    slug: "automatic-litter-boxes",
    href: "/automatic-litter-boxes",
    title: "Automatic Litter Boxes",
    navLabel: "Auto boxes",
    teaser: "Machines that scoop. Humans who still have to empty a drawer.",
    description:
      "Self-cleaning boxes that scoop while humans still empty a drawer. Pair with the automatic litter box guide for the buying questions.",
    image: {
      src: unsplashPhoto("1511044568932-338cba0ad803", 1200),
      alt: "An orange cat covering its face",
    },
    indexable: false,
    tone: "pink",
    parentSlug: "cat-litter",
    relatedSlugs: ["cat-litter", "cat-tech"],
    articleSlugs: ["best-automatic-litter-boxes"],
  },
  {
    slug: "cat-food",
    href: "/cat-food",
    title: "Cat Food",
    navLabel: "Food",
    teaser: "What’s actually worth putting in the bowl.",
    description:
      "Wet, dry, fresh, and the treats your cat will ignore after day three. Ingredient lists and feeding questions, fewer marketing adjectives.",
    image: {
      src: "/images/cats/user-delectables-squeeze-up.jpg",
      alt: "Two cats sharing a Delectables Squeeze Up tube, editorial cat food photo",
    },
    indexable: true,
    showInNav: true,
    showOnHomepage: true,
    showInFooter: true,
    tone: "pink",
    relatedSlugs: ["automatic-cat-feeders", "cat-water-fountains", "guides"],
    faqs: [
      {
        question: "Are you picking a side in wet vs dry?",
        answer:
          "Not as a religion. The existing guide is about moisture, budget, and picky eaters — not a morality play.",
      },
    ],
  },
  {
    slug: "cat-water-fountains",
    href: "/cat-water-fountains",
    title: "Cat Water Fountains",
    navLabel: "Fountains",
    teaser: "Another appliance. Maybe they will drink. Maybe not.",
    description:
      "Capacity, cleaning, noise, and filters — plus a fountain buying guide for the questions that matter before you buy another appliance.",
    image: {
      src: unsplashPhoto("1548839140-29a749e1cf4d", 1200),
      alt: "Water poured into a glass",
    },
    indexable: false,
    tone: "blue",
    parentSlug: "cat-tech",
    relatedSlugs: ["cat-tech", "automatic-cat-feeders", "cat-food"],
    articleSlugs: ["what-to-look-for-in-a-cat-water-fountain"],
  },
  {
    slug: "automatic-cat-feeders",
    href: "/automatic-cat-feeders",
    title: "Automatic Cat Feeders",
    navLabel: "Feeders",
    teaser: "Scheduled meals. Occasional betrayal by wifi.",
    description:
      "Scheduled meals and the apps that come with them — feeders as they earn a recommendation.",
    image: {
      src: unsplashPhoto("1548802673-380ab8ebc7b7", 1200),
      alt: "An orange cat asleep in bed",
    },
    indexable: false,
    tone: "pink",
    parentSlug: "cat-tech",
    relatedSlugs: ["cat-tech", "cat-food", "cat-water-fountains"],
  },
  {
    slug: "cat-trees",
    href: "/cat-trees",
    title: "Cat Trees",
    navLabel: "Cat trees",
    teaser: "Vertical real estate that can live in a real room.",
    description:
      "A narrower door into furniture for people who came here specifically to avoid a carpeted nightmare. Related reading already lives in the cat-trees guide.",
    image: {
      src: unsplashPhoto("1586023492125-27b2c045efd7", 1200),
      alt: "A designed living room",
    },
    indexable: false,
    tone: "blue",
    parentSlug: "cat-furniture",
    relatedSlugs: ["cat-furniture", "cat-enrichment"],
    articleSlugs: ["cat-trees-that-dont-look-like-nightmares"],
  },
  {
    slug: "cat-furniture",
    href: "/cat-furniture",
    title: "Cat Furniture",
    navLabel: "Furniture",
    teaser: "Cat trees that don’t destroy your living room aesthetic.",
    description:
      "Trees, shelves, beds, and condos that can live in a real apartment. Stability, materials, and whether it looks like a 2004 catalog escaped.",
    image: {
      src: unsplashPhoto("1586023492125-27b2c045efd7", 1200),
      alt: "A calm, designed living room",
    },
    indexable: true,
    showInNav: true,
    showOnHomepage: true,
    showInFooter: true,
    tone: "blue",
    relatedSlugs: ["cat-trees", "cat-enrichment", "guides"],
    faqs: [
      {
        question: "Do you only recommend expensive designer trees?",
        answer:
          "No. Expensive is fine when it earns it. Cheap is fine when it stays upright. Ugly beige carpet towers have a high bar.",
      },
    ],
  },
  {
    slug: "cat-tech",
    href: "/cat-tech",
    title: "Cat Tech",
    navLabel: "Cat Tech",
    teaser: "Feeders, fountains, trackers, cameras and unnecessary-but-amazing gadgets.",
    description:
      "What is worth the plug, and what is just another app. Feeders, cameras, GPS collars, fountains.",
    image: {
      src: unsplashPhoto("1514888286974-6c03e2ca1dba", 1200),
      alt: "A tuxedo cat against a green backdrop",
    },
    indexable: true,
    showInNav: true,
    showOnHomepage: true,
    showInFooter: true,
    tone: "pink",
    relatedSlugs: ["cat-water-fountains", "automatic-cat-feeders", "cat-gps-trackers"],
    faqs: [
      {
        question: "Is every gadget getting a review score?",
        answer:
          "No. If we publish a pick, it will say why. We do not invent lab results or star averages.",
      },
    ],
  },
  {
    slug: "cat-gps-trackers",
    href: "/cat-gps-trackers",
    title: "Cat GPS Trackers",
    navLabel: "GPS",
    teaser: "For the escape artist. Maybe not for the sofa professional.",
    description:
      "Collars, batteries, and whether your cat even needs one. Start with the GPS tracker explainer if you’re still deciding.",
    image: {
      src: unsplashPhoto("1606214174585-fe31582dc6ee", 1200),
      alt: "A white cat in profile",
    },
    indexable: false,
    tone: "blue",
    parentSlug: "cat-tech",
    relatedSlugs: ["cat-tech", "guides"],
    articleSlugs: ["should-your-cat-wear-a-gps-tracker"],
  },
  {
    slug: "cat-gifts",
    href: "/cat-gifts",
    title: "Cat Gifts",
    navLabel: "Gifts",
    teaser: "For the cat, or for the person who lives with one.",
    description:
      "Useful, funny, and preferably not another mug — gifts for cats and the humans who spoil them.",
    image: {
      src: unsplashPhoto("1526336024174-e58f5cdd8e13", 1200),
      alt: "A cat with a butterfly",
    },
    indexable: false,
    showOnHomepage: true,
    showInFooter: true,
    tone: "pink",
    relatedSlugs: ["gifts-for-cat-lovers", "funny-cat-toys", "cat-toys"],
  },
  {
    slug: "gifts-for-cat-lovers",
    href: "/gifts-for-cat-lovers",
    title: "Gifts for Cat Lovers",
    navLabel: "For humans",
    teaser: "Presents for people. The cat may still intercept them.",
    description:
      "Presents for people who are extremely normal about cats. The cat may still intercept them.",
    image: {
      src: unsplashPhoto("1472491235688-bdc81a63246e", 1200),
      alt: "A close cat portrait",
    },
    indexable: false,
    tone: "blue",
    parentSlug: "cat-gifts",
    relatedSlugs: ["cat-gifts", "essentials"],
  },
  {
    slug: "essentials",
    href: "/essentials",
    title: "Cat Parent Stuff",
    navLabel: "Essentials",
    teaser: "The stuff nobody tells you you’ll end up buying.",
    description:
      "Carriers, nail gear, cleanup, and first-week supplies — the unglamorous list nobody warns you about.",
    image: {
      src: unsplashPhoto("1548802673-380ab8ebc7b7", 1200),
      alt: "An orange cat asleep in bed",
    },
    indexable: false,
    showOnHomepage: true,
    showInFooter: true,
    tone: "blue",
    relatedSlugs: ["cat-litter", "cat-food", "guides"],
  },
  {
    slug: "guides",
    href: "/guides",
    title: "Guides",
    navLabel: "Guides",
    teaser: "Useful cat stuff, minus the fluff.",
    description:
      "Comparisons, buying questions, and the pieces we will keep adding.",
    image: {
      src: unsplashPhoto("1573865526739-10659fec78a5", 1200),
      alt: "An orange tabby looking up",
    },
    indexable: true,
    showInNav: true,
    showInFooter: true,
    tone: "paper",
    relatedSlugs: ["cat-litter", "cat-food", "cat-tech", "cat-furniture", "cat-toys"],
  },
];

export const homepageCategories = categories.filter((category) => category.showOnHomepage);
export const footerCategories = categories.filter((category) => category.showInFooter);

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryByHref(href: string) {
  return categories.find((category) => category.href === href);
}

export function getRelatedCategories(category: Category) {
  return category.relatedSlugs
    .map((slug) => getCategoryBySlug(slug))
    .filter((item): item is Category => Boolean(item));
}
