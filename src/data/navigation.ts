import { siteConfig } from "@/data/site";

export type NavLink = {
  href: string;
  label: string;
};

export const primaryNav: NavLink[] = [
  { href: "/best-products", label: "Best Products" },
  { href: "/cat-food", label: "Cat Food" },
  { href: "/litter", label: "Litter" },
  { href: "/cat-tech", label: "Cat Tech" },
  { href: "/cat-furniture", label: "Cat Furniture" },
  { href: "/guides", label: "Guides" },
];

export const footerNav: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

export const socialNav: NavLink[] = [
  { href: siteConfig.social.pinterest, label: "Pinterest" },
  { href: siteConfig.social.instagram, label: "Instagram" },
  { href: siteConfig.social.tiktok, label: "TikTok" },
];
