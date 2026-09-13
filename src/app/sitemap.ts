import type { MetadataRoute } from "next";
import { getPublishedArticles, getArticleHref } from "@/data/articles";
import { categories } from "@/data/categories";
import { getLivePicks } from "@/data/featured-picks";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/affiliate-disclosure", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/best-products", priority: 0.8, changeFrequency: "weekly" as const },
  ];

  const indexableCategories = categories.filter((category) => category.indexable);

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...indexableCategories.map((category) => ({
      url: `${siteConfig.url}${category.href}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...getLivePicks().map((pick) => ({
      url: `${siteConfig.url}${pick.href}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...getPublishedArticles().map((article) => ({
      url: `${siteConfig.url}${getArticleHref(article)}`,
      lastModified: new Date(`${(article.updatedAt ?? article.publishedAt)}T00:00:00`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
