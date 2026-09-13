import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";
import { footerCategories } from "@/data/categories";
import { footerNav, socialNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {siteConfig.name} is an editorial guide to cat products, gear, and
            the decisions that somehow require a spreadsheet. We recommend
            things. We do not sell them out of a warehouse.
          </p>
        </div>

        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em]">
            Categories
          </p>
          <ul className="mt-4 space-y-2.5">
            {footerCategories.map((category) => (
              <li key={category.slug}>
                <Link href={category.href} className="text-sm text-muted hover:text-foreground">
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em]">
            The site
          </p>
          <ul className="mt-4 space-y-2.5">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em]">
            Social
          </p>
          <ul className="mt-4 space-y-2.5">
            {socialNav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Built for people who are normal about cats. Extremely normal.</p>
        </div>
      </div>
    </footer>
  );
}
