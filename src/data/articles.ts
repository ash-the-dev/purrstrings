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
      "A clear-eyed look at crystal litter, monthly subscriptions, and whether color-changing crystals change anything besides your checkout total.",
    categorySlug: "cat-litter",
    kind: "comparison",
    publishedAt: "2026-06-18",
    readingTimeMinutes: 9,
    featured: true,
    draft: true,
    image: {
      src: unsplashPhoto("1495360010541-f48722b34f7d"),
      alt: "Placeholder editorial photo of a tabby cat on white stairs",
    },
    pinterestTitle: "PrettyLitter vs traditional litter — is it worth it?",
    pinterestDescription:
      "Crystal litter, subscriptions, and what actually changes besides the checkout total.",
  },
  {
    slug: "best-automatic-litter-boxes",
    title: "The Best Automatic Litter Boxes for People Who Hate Scooping",
    excerpt:
      "What these machines actually do, what they still require of you, and how to think about the ones that cost as much as furniture.",
    categorySlug: "cat-litter",
    kind: "roundup",
    publishedAt: "2026-05-04",
    readingTimeMinutes: 11,
    featured: true,
    draft: true,
    image: {
      src: unsplashPhoto("1511044568932-338cba0ad803"),
      alt: "Placeholder editorial photo of an orange cat covering its face",
    },
  },
  {
    slug: "cat-trees-that-dont-look-like-nightmares",
    title: "9 Cat Trees That Don’t Look Like Carpeted Nightmares",
    excerpt:
      "Sculptural, wood, wall-mounted, and otherwise livable options for people who would like their living room to remain a living room.",
    categorySlug: "cat-furniture",
    kind: "roundup",
    publishedAt: "2026-04-21",
    readingTimeMinutes: 8,
    featured: true,
    draft: true,
    image: {
      src: unsplashPhoto("1586023492125-27b2c045efd7"),
      alt: "Placeholder editorial photo of a designed living room",
    },
  },
  {
    slug: "should-your-cat-wear-a-gps-tracker",
    title: "Should Your Cat Wear a GPS Tracker?",
    excerpt:
      "Indoor-only, backyard wanderer, or professional escape artist: when a tracker is useful, when it is not, and what the collar itself has to get right.",
    categorySlug: "cat-tech",
    kind: "buying-guide",
    publishedAt: "2026-03-30",
    readingTimeMinutes: 7,
    featured: true,
    draft: true,
    image: {
      src: unsplashPhoto("1574158622682-e40e69881006"),
      alt: "Placeholder editorial photo of a tabby cat against a blue sky",
    },
  },
  {
    slug: "wet-food-vs-dry-food",
    title: "Wet Food vs Dry Food: What Matters Most?",
    excerpt:
      "Moisture, ingredients, budget, and picky eaters. A practical breakdown without the internet’s usual food-bowl morality play.",
    categorySlug: "cat-food",
    kind: "comparison",
    publishedAt: "2026-03-08",
    readingTimeMinutes: 10,
    featured: true,
    draft: true,
    image: {
      src: unsplashPhoto("1518791841217-8f162f1e1131"),
      alt: "Placeholder editorial photo of a tabby cat on a sofa",
    },
  },
  {
    slug: "what-to-look-for-in-a-cat-water-fountain",
    title: "What to Look for Before Buying a Cat Water Fountain",
    excerpt:
      "Capacity, cleaning, noise, filters, and the one question that matters: will you actually keep this thing from becoming a science experiment?",
    categorySlug: "cat-tech",
    kind: "buying-guide",
    publishedAt: "2026-02-14",
    readingTimeMinutes: 6,
    featured: true,
    draft: true,
    image: {
      src: unsplashPhoto("1548839140-29a749e1cf4d"),
      alt: "Placeholder editorial photo of water poured into a glass",
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
