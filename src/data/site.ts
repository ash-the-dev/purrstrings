export const siteConfig = {
  name: "Purrstrings",
  tagline: "The Good Stuff for Cats",
  title: "Purrstrings | The Good Stuff for Cats",
  description:
    "Cat product guides, comparisons, reviews, and recommendations for litter, food, furniture, tech, toys, and everything else your cat somehow convinced you to buy.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://purrstrings.com",
  email: "hello@purrstrings.com",
  locale: "en_US",
  social: {
    pinterest: "https://www.pinterest.com/purrstrings",
    instagram: "https://www.instagram.com/purrstrings",
    tiktok: "https://www.tiktok.com/@purrstrings",
  },
  affiliateDisclosure:
    "Purrstrings may earn a commission when you buy through links on our site. It doesn’t cost you anything extra, and it never changes what we recommend.",
} as const;

export type SocialPlatform = keyof typeof siteConfig.social;
