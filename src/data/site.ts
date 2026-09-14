function resolveSiteUrl() {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
    "https://purrstrings.com",
  ];

  for (const value of candidates) {
    const trimmed = value?.trim();
    if (!trimmed) {
      continue;
    }

    try {
      return new URL(trimmed).origin;
    } catch {
      try {
        return new URL(`https://${trimmed}`).origin;
      } catch {
        continue;
      }
    }
  }

  return "https://purrstrings.com";
}

export const siteConfig = {
  name: "Purrstrings",
  tagline: "They pull the strings. We buy the things.",
  title: "Purrstrings | They pull the strings. We buy the things.",
  description:
    "They pull the strings. We buy the things. Cat product recommendations from Ash — shaped by about six years of professional pet care, 200+ clients, and the stuff that lives with Ash’s own cats.",
  url: resolveSiteUrl(),
  email: "ashthedev0@gmail.com",
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
