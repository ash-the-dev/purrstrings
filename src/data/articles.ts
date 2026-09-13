import { unsplashPhoto, type EditorialImage } from "@/lib/images";
import type { PersonalityLabel } from "@/data/personalities";

export type ArticleKind =
  | "roundup"
  | "comparison"
  | "buying-guide"
  | "editorial"
  | "review";

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type ArticleSource = {
  label: string;
  href?: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  categorySlug: string;
  kind: ArticleKind;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  readingTimeMinutes: number;
  image: EditorialImage;
  featured: boolean;
  draft: boolean;
  personalityLabels?: PersonalityLabel[];
  relatedProductSlugs?: string[];
  faqs?: ArticleFaq[];
  sources?: ArticleSource[];
  pinterestTitle?: string;
  pinterestDescription?: string;
  pinterestImage?: EditorialImage;
};

export const articles: Article[] = [
  {
    slug: "prettylitter-vs-traditional-litter",
    title: "PrettyLitter vs Traditional Litter: Is It Actually Worth It?",
    excerpt:
      "Crystal litter vs clumping clay: odor, tracking, dust, and subscription cost — plus the clay setup we actually use while PrettyLitter stays comparison-only.",
    categorySlug: "cat-litter",
    kind: "comparison",
    publishedAt: "2026-06-18",
    updatedAt: "2026-09-13",
    author: "Ash",
    readingTimeMinutes: 5,
    featured: true,
    draft: false,
    relatedProductSlugs: [
      "fresh-step-odor-shield",
      "stainless-litter-box",
      "open-stainless-litter-box",
      "petinstinct-litter-mat",
    ],
    faqs: [
      {
        question: "Is PrettyLitter better than regular clay litter?",
        answer:
          "“Better” depends on what you optimize for. Crystals can mean lighter bags and different maintenance; clay usually wins on familiar scooping, wide availability, and skipping a subscription. Odor and tracking still depend on how often you service the box.",
      },
      {
        question: "Do crystal litters mean you never scoop?",
        answer:
          "No. Solids still need removing, and the box still needs full changes on a schedule. “Less scooping” marketing is not the same as zero maintenance.",
      },
      {
        question: "Can color-changing litter replace a vet visit?",
        answer:
          "No. Color shifts are at best a nudge to pay attention. Changes in appetite, peeing habits, energy, or litter color that worry you are reasons to call your vet — not reasons to wait for the next shipment.",
      },
      {
        question: "What do you use instead of PrettyLitter?",
        answer:
          "We run clumping clay (Fresh Step Odor Shield on our list), stainless litter boxes, and a honeycomb litter mat. PrettyLitter stays in the comparison column until we have firsthand notes to publish.",
      },
    ],
    image: {
      src: unsplashPhoto("1495360010541-f48722b34f7d"),
      alt: "Tabby cat sitting on white stairs, looking toward the camera",
    },
    pinterestTitle: "PrettyLitter vs traditional litter — is it worth it?",
    pinterestDescription:
      "Crystal litter, subscriptions, and what actually changes besides the checkout total.",
  },
  {
    slug: "best-automatic-litter-boxes",
    title: "The Best Automatic Litter Boxes for People Who Hate Scooping",
    excerpt:
      "What self-cleaning litter boxes actually do, who should skip them, and the automatic box plus furniture setup we recommend from real use.",
    categorySlug: "cat-litter",
    kind: "roundup",
    publishedAt: "2026-05-04",
    updatedAt: "2026-09-13",
    author: "Ash",
    readingTimeMinutes: 4,
    featured: true,
    draft: false,
    relatedProductSlugs: [
      "automatic-litter-box",
      "stainless-litter-box",
      "litter-box-cabinet",
      "feandrea-litter-enclosure",
      "petinstinct-litter-mat",
    ],
    faqs: [
      {
        question: "Do automatic litter boxes eliminate all scooping?",
        answer:
          "They reduce daily scooping. You still empty a waste drawer, top up litter, wipe sensors, and deep-clean the unit. Think different chores, not zero chores.",
      },
      {
        question: "Are automatic litter boxes good for multi-cat homes?",
        answer:
          "They can help when scooping volume is the problem, but one machine does not automatically replace enough bathroom capacity. Keep backup boxes if cats already compete for space.",
      },
      {
        question: "Who should not buy an automatic litter box?",
        answer:
          "Cats that refuse moving or enclosed boxes, households that will ignore the waste drawer, and anyone without floor space or a nearby outlet. If you wanted a set-and-forget appliance, this category will disappoint.",
      },
      {
        question: "Do I still need a litter mat?",
        answer:
          "Yes. Tracking does not retire because the box has a motor. A honeycomb mat still keeps the hallway from becoming a litter beach.",
      },
    ],
    image: {
      src: unsplashPhoto("1511044568932-338cba0ad803"),
      alt: "Orange cat covering its face with a paw",
    },
  },
  {
    slug: "cat-trees-that-dont-look-like-nightmares",
    title: "Cat Trees That Don’t Look Like Carpeted Nightmares",
    excerpt:
      "How to choose livable cat furniture — vertical space, real scratch zones, and the trees and scratchers we actually use at home.",
    categorySlug: "cat-furniture",
    kind: "roundup",
    publishedAt: "2026-04-21",
    updatedAt: "2026-09-13",
    author: "Ash",
    readingTimeMinutes: 3,
    featured: true,
    draft: false,
    relatedProductSlugs: [
      "leopard-print-cat-tree",
      "l-shaped-scratcher",
      "scratch-carpet-mat",
      "wall-climbing-carpet",
    ],
    faqs: [
      {
        question: "What makes a cat tree look less like a nightmare?",
        answer:
          "Stable proportions, materials that match your room, and scratch surfaces that are intentional — not a beige tower of peeling carpet petals. Placement against a wall helps both look and wobble.",
      },
      {
        question: "Do I need a huge freestanding tree?",
        answer:
          "Not always. A solid tree plus floor scratchers and optional wall carpet often beats one mega-tower that eats the room and still gets ignored.",
      },
      {
        question: "How important is scratching vs perching?",
        answer:
          "Both. Platforms without an honest scratch zone become dusty sculptures. Sisal, cardboard, or carpet panels where cats already stretch will save your sofa.",
      },
    ],
    image: {
      src: unsplashPhoto("1586023492125-27b2c045efd7"),
      alt: "Bright modern living room with wood floors and natural light",
    },
  },
  {
    slug: "should-your-cat-wear-a-gps-tracker",
    title: "Should Your Cat Wear a GPS Tracker?",
    excerpt:
      "When a cat GPS tracker helps, when it is optional jewelry, and how collar fit, battery life, and subscriptions fit a real recovery plan.",
    categorySlug: "cat-tech",
    kind: "buying-guide",
    publishedAt: "2026-03-30",
    updatedAt: "2026-09-13",
    author: "Ash",
    readingTimeMinutes: 3,
    featured: true,
    draft: false,
    faqs: [
      {
        question: "Do indoor cats need a GPS tracker?",
        answer:
          "Usually no. Secure doors, a microchip, and ID matter more. Consider a tracker if your “indoor” cat has a documented escape habit and you want a recovery layer.",
      },
      {
        question: "Are GPS collars safe?",
        answer:
          "Only if the collar is a proper safety/breakaway design, fitted correctly, and checked for rubbing. A tracker on a non-breakaway collar is a hazard, not a flex.",
      },
      {
        question: "Do cat GPS trackers need a subscription?",
        answer:
          "Most live GPS products do. Budget for the plan and for charging. A dead device with an expired plan is just weight on a collar.",
      },
    ],
    image: {
      src: unsplashPhoto("1574158622682-e40e69881006"),
      alt: "Tabby cat outdoors against a bright blue sky",
    },
  },
  {
    slug: "wet-food-vs-dry-food",
    title: "Wet Food vs Dry Food: What Matters Most?",
    excerpt:
      "Moisture, budget, and picky eaters — plus the wet and dry foods we actually buy, without the internet’s food-bowl morality play.",
    categorySlug: "cat-food",
    kind: "comparison",
    publishedAt: "2026-03-08",
    updatedAt: "2026-09-13",
    author: "Ash",
    readingTimeMinutes: 3,
    featured: true,
    draft: false,
    relatedProductSlugs: [
      "blue-wilderness-duck",
      "blue-tastefuls-sensitive-stomach",
      "blue-tastefuls-chicken-pate",
      "friskies-pate-variety",
      "iams-urinary-tract",
      "delectables-squeeze-up",
      "cat-food-can-covers-set",
    ],
    faqs: [
      {
        question: "Is wet food healthier than dry food?",
        answer:
          "Wet food adds moisture, which many cats need. Dry food can still be a complete diet. Healthiest is the complete-and-balanced food your cat eats consistently while staying in good body condition — ask your vet for individual medical questions.",
      },
      {
        question: "Can I mix wet and dry food?",
        answer:
          "Yes. Mix feeding is a normal way to get moisture and convenience. Measure portions so calories do not quietly stack.",
      },
      {
        question: "How do I switch my cat’s food without stomach drama?",
        answer:
          "Transition gradually over several days, mixing increasing amounts of the new food with the old. Sudden swaps are a common way to invent digestive plot twists.",
      },
      {
        question: "What foods do you actually buy?",
        answer:
          "Our pantry picks include Blue Wilderness Duck, Blue Tastefuls (sensitive dry and chicken pâté), Friskies pâté variety, IAMS Urinary Tract dry when that formula fits, Delectables Squeeze Ups, and silicone can covers for leftovers.",
      },
    ],
    image: {
      src: unsplashPhoto("1518791841217-8f162f1e1131"),
      alt: "Tabby cat lounging on a sofa cushion",
    },
  },
  {
    slug: "what-to-look-for-in-a-cat-water-fountain",
    title: "What to Look for Before Buying a Cat Water Fountain",
    excerpt:
      "Capacity, noise, stainless vs plastic, and the cleaning question that decides whether a fountain helps — or becomes a science experiment.",
    categorySlug: "cat-tech",
    kind: "buying-guide",
    publishedAt: "2026-02-14",
    updatedAt: "2026-09-13",
    author: "Ash",
    readingTimeMinutes: 3,
    featured: true,
    draft: false,
    relatedProductSlugs: ["wireless-cat-fountain", "catit-pixi-fountain"],
    faqs: [
      {
        question: "Are cat water fountains worth it?",
        answer:
          "They are if your cat prefers moving water and you will clean the unit on a real schedule. If maintenance is a hard no, a wide bowl with fresh water is the better product.",
      },
      {
        question: "Stainless or plastic fountain?",
        answer:
          "Stainless is often easier to keep from getting permanently funky; plastic is lighter and frequently cheaper. Cleaning access matters more than material marketing.",
      },
      {
        question: "How often should I clean a cat fountain?",
        answer:
          "Plan on regular full cleans (many households aim near weekly) plus filter changes on the manufacturer’s schedule. Low water and dirty pumps also make fountains louder.",
      },
    ],
    image: {
      src: unsplashPhoto("1548839140-29a749e1cf4d"),
      alt: "Clear water pouring into a glass",
    },
  },
];

export function getArticleHref(article: Pick<Article, "slug">) {
  return `/guides/${article.slug}`;
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string, articleSlugs?: string[]) {
  if (articleSlugs?.length) {
    return articleSlugs
      .map((slug) => getArticleBySlug(slug))
      .filter((article): article is Article => Boolean(article));
  }

  return articles.filter((article) => article.categorySlug === categorySlug);
}

export function getFeaturedArticles() {
  return articles.filter((article) => article.featured);
}

export function getPublishedArticles() {
  return articles.filter((article) => !article.draft);
}
