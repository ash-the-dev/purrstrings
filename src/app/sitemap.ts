import type { MetadataRoute } from "next";
import { articles, getArticleHref } from "@/data/articles";
import { categories } from "@/data/categories";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/affiliate-disclosure",
    "/privacy",
    "/terms",
    "/contact",
    "/best-products",
    "/guides",
    ...categories.map((category) => category.href),
  ];

  const lastModified = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified,
      changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "" ? 1 : 0.7,
    })),
    ...articles.map((article) => ({
      url: `${siteConfig.url}${getArticleHref(article)}`,
      lastModified: new Date(`${article.publishedAt}T00:00:00`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
